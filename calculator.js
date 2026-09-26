/* tool-escore-de-genebra · Elucenia · https://github.com/Elucenia/tool-escore-de-genebra
   Copyright (c) 2026 Elucenia · Felipe Guedes (fgxdev.com). Licensed under the Apache License 2.0: keep this notice and the NOTICE file, and mark your changes.
   Standalone integration. Package metadata and rights: README.md. */
(function(root){'use strict';
function freeze(value){if(value&&typeof value==='object'){for(const item of Object.values(value))freeze(item);Object.freeze(value);}return value;}
const TOOL=freeze({"id":"escore-de-genebra","title":"Escore de Genebra revisado","fields":[["idade65","Idade &gt; 65 anos","chk",[]],["tev","TVP ou TEP prévio","chk",[]],["cirurgia","Cirurgia (anestesia geral) ou fratura de membro inferior há ≤ 1 mês","chk",[]],["cancer","Neoplasia ativa (ou curada há menos de 1 ano)","chk",[]],["dor","Dor unilateral em membro inferior","chk",[]],["hemoptise","Hemoptise","chk",[]],["fc","Frequência cardíaca","radio",{"opts":{"0":"&lt; 75 bpm","1":"75 a 94 bpm","2":"≥ 95 bpm"}}],["palpacao","Dor à palpação venosa profunda e edema unilateral do membro inferior","chk",[]]],"config":null,"reviewStatus":"needs-review","clinicalValidation":"not-performed"});
const window={};
/* Elucenia arithmetic registry. No DOM access, storage, telemetry or network requests. */
(function(root){
  'use strict';
  const CALC={fn:Object.create(null)};
  const round=(n,d=1)=>Math.round(n*Math.pow(10,d))/Math.pow(10,d);
  const yes=v=>v===true||v==='1'||v===1;
  CALC.h={
    r1:round,
    br:(n,d=1)=>round(n,d).toLocaleString('pt-BR',{minimumFractionDigits:d,maximumFractionDigits:d}),
    band:(n,bands)=>{for(const b of bands)if(n<b[0])return b[1];return bands[bands.length-1][1];},
    sum:(values,weights)=>Object.entries(weights).reduce((n,[key,w])=>n+(yes(values[key])?w:0),0),yes
  };
  CALC.def=(id,fn)=>{if(CALC.fn[id])throw Error('Duplicate calculator '+id);CALC.fn[id]=fn;};
  CALC.score=(cfg,values)=>{
    let score=0;
    for(const[name,type,weight]of cfg.fields){const v=values[name];if(type==='chk'){if(yes(v))score+=weight;}else if(type==='radio'||type==='sel'){const n=parseFloat(v);if(!Number.isNaN(n))score+=n;}}
    score=round(score,2);let band=cfg.bands[0];for(const b of cfg.bands)if(score>=b[0])band=b;
    return{main:[String(score).replace('.',','),cfg.unit||(Math.abs(score)===1?'ponto':'pontos')],label:cfg.label,level:band[1],verdict:band[2],note:band[3]||'',raw:{score}};
  };
  CALC.run=(id,values,cfg)=>{if(cfg&&cfg.bands)return CALC.score(cfg,values);if(!CALC.fn[id])return{error:'Calculadora indisponível.'};return CALC.fn[id](values);};
  root.CALC=CALC;if(typeof module!=='undefined')module.exports=CALC;
})(typeof window!=='undefined'?window:globalThis);

(function(a){'use strict';
var e=a.h;
var i=e.yes;
var t=function(a,e){var o=0;return e.forEach(function(e){i(a[e])&&o++}),o};
a.def("escore-de-genebra",function(a){var e=+a.fc||0,o=(i(a.idade65)?1:0)+(i(a.tev)?3:0)+(i(a.cirurgia)?2:0)+(i(a.cancer)?2:0)+(i(a.dor)?3:0)+(i(a.hemoptise)?2:0)+(1===e?3:2===e?5:0)+(i(a.palpacao)?4:0),r=t(a,["idade65","tev","cirurgia","cancer","dor","hemoptise","palpacao"])+e,n=o<=3?["low","Probabilidade clínica baixa (prevalência de TEP de 8%)"]:o<=10?["mid","Probabilidade clínica intermediária (prevalência de TEP de 28%)"]:["high","Probabilidade clínica alta (prevalência de TEP de 74%)"],s=r<=1?"baixa":r<=4?"intermediária":"alta";return{main:[String(o),1===o?"ponto":"pontos"],label:"Escore de Genebra revisado",level:n[0],verdict:n[1],rows:[["Modelo de 2 níveis",o<=5?"TEP improvável (0 a 5)":"TEP provável (≥ 6)"],["Genebra simplificado",r+" (probabilidade "+s+"; "+(r<=2?"TEP improvável":"TEP provável")+")"]],note:o<=5?"TEP improvável: D-dímero normal exclui TEP sem exame de imagem.":o>=11?"Alta probabilidade: vá direto à angiotomografia; o D-dímero não deve ser usado para excluir.":"TEP provável: angiotomografia de tórax.",raw:{score:o,simplificado:r}}});
})(window.CALC);
function calculate(input){
 if(!input||typeof input!=='object'||Array.isArray(input))return {error:'Informe um objeto com os campos da ferramenta.',code:'INVALID_INPUT'};
 const values=Object.create(null);
 for(const[name,,kind,o={}] of TOOL.fields){
  const v=Object.hasOwn(input,name)?input[name]:undefined;
  if(kind==='chk'){if(v!==undefined&&v!==null&&![true,false,1,0,'1','0'].includes(v))return {error:'Campo booleano inválido: '+name,field:name,code:'INVALID_INPUT'};values[name]=v===true||v===1||v==='1';continue;}
  const empty=v==null||(typeof v==='string'&&!v.trim());
  if(empty){if(!o.opt)return {error:'Campo obrigatório: '+name,field:name,code:'REQUIRED_FIELD'};values[name]=kind==='num'?null:'';continue;}
  if(kind==='num'){
   if(!['number','string'].includes(typeof v)||(typeof v==='string'&&!/^[+-]?(?:\d+(?:\.\d*)?|\.\d+)(?:[eE][+-]?\d+)?$/.test(v.trim()))||!Number.isFinite(Number(v)))return {error:'Número inválido: '+name,field:name,code:'INVALID_INPUT'};
   const n=Number(v);if((Number.isFinite(o.min)&&n<o.min)||(Number.isFinite(o.max)&&n>o.max))return {error:'Valor fora do intervalo: '+name,field:name,code:'OUT_OF_RANGE'};
   values[name]=n;
  }else{if(!Object.hasOwn(o.opts||{},String(v)))return {error:'Opção inválida: '+name,field:name,code:'INVALID_OPTION'};values[name]=String(v);}
 }
 try{const r=window.CALC.run(TOOL.id,values,TOOL.config);if(r.error)return {error:String(r.error).replace(/<[^>]*>/g,''),code:'FORMULA_DOMAIN'};
  if(!Array.isArray(r.main)||r.main.some(v=>typeof v==='number'&&!Number.isFinite(v))||/\b(?:NaN|Infinity)\b/.test(String(r.main[0])))return {error:'Resultado não finito ou indisponível.',code:'INVALID_RESULT'};
  return {id:TOOL.id,main:r.main,label:r.label||TOOL.title,raw:r.raw||{},clinicalValidation:'not-performed'};
 }catch{return {error:'Confira os valores e o domínio da fórmula.',code:'FORMULA_DOMAIN'};}
}
const api=Object.freeze({metadata:TOOL,calculate});if(typeof module!=='undefined'&&module.exports)module.exports=api;else root.EluceniaTool=api;
})(typeof globalThis!=='undefined'?globalThis:this);
