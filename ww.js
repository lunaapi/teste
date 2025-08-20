// ICEbot (PWA) V2.5 BY NOXY
//
// ÚLTIMA ATUALIZAÇÃO: 24/07/2025
// -----------------0---------------------
global.latestPerformance=performance.now();
global.latestUpdate=Date.now();
global.version='2.5.0';
global.nomeConta='ny__';
global.teste=[];
global.isActive=[];
global.palavraEsp='';
global.proximos='';
global.vezAgora='';
global.palavraVez='';
global.palavrasAtualizadas=[];
global.mail__='';
global.grupo = 10;
global.inicio = 0;
global.__ws__=null;
// -----------------2---------------------
global.antiafk=false;                // a
global.antiban=false;               // b
global.autofarm=false;            // c
global.autorejoin=false;           // d
global.autoreport=false;          // e
global.autoskip=false;             // f
global.autotips=false;              // g
global.autonews=false;           // h
global.autoguess=false;          // i
global.autoaccept=false;        // j
global.giveanswer=false;        // k
global.detectkickedout=false;// l
global.detectreported=true  // m
global.firsthit__=false;         // n
global.latestSala='';                  
// -------------------A--------------------
const fs=require("fs"),path=require("path"),c_m_=path.join("./contas.json");if(fs.existsSync(c_m_)){let s=fs.readFileSync(c_m_,"utf-8");try{global.contas=JSON.parse(s)}catch(t){global.contas=[]}}else global.contas=[],fs.writeFileSync(c_m_,JSON.stringify(global.contas,null,2));
global.bot_dados={'contas':global.contas,'respostas':{},'mensagens':{},'salas':{},'info_salas':{}};
// -------------------B--------------------
global.b_join='';
global.m_join='';
global.a_join='';

// -------------------4--------------------
// bibliotecas necessárias
// npm i chalk gradient-string jsdom axios cheerio ws
const { default: chalk } = await import("chalk");
const { default: gradient } = await import("gradient-string");
var exec = require('child_process').exec; 



function clear() { return new Promise((resolve, reject) => {  exec('clear', (error, stdout, stderr) => { if (error) reject(error); else {console.log(stdout);resolve()}})})};
clear().then(()=>{
setTimeout(()=>{

console.log("\n")
console.log(gradient.retro("★".repeat(process.stdout.columns)))
console.log(`
\`7MN.   \`7MF' .g8""8q.\`YMM'   \`MP'\`YMM'   \`MM'
  MMN.    M .dP'    \`YM.VMb.  ,P    VMA   ,V  
  M YMb   M dM'      \`MM \`MM.M'      VMA ,V   
  M  \`MN. M MM        MM   MMb        VMMP    
  M   \`MM.M MM.      ,MP ,M'\`Mb.       MM     
  M     YMM \`Mb.    ,dP',P   \`MM.      MM     
.JML.    YM   \`"bmmd"'.MM:.  .:MMa.  .JMML.   
`);
console.log(gradient.retro("★".repeat(process.stdout.columns)));
console.log(gradient.retro("ICEbot (PWA) V2.0.1 BY NOXY — https://github.com/NOXY-JS"));
console.log(chalk.hex("#DBF1ED").bold("[UPDATE 2.0.1.1] — ÚLTIMA ATUALIZAÇÃO 07/07/2025 \n adicionado sistema LOGIN para logar bots. "))
console.log(chalk.hex("#FF0200").bold("⎯".repeat(process.stdout.columns)))
console.log(chalk.hex("#80FF00").bold("[STATUS] — ACTIVE (ATIVO PARA USO) - 67 IPS"))
console.log(chalk.hex("#FFEB00").bold("[INFO] — BOT para GARTIC PWA \nFunções principais (comandos): logout, login, criar contas, editar avatar, editar foto, editar descrição, sair, broadcast, mensagem, resposta, dicas, desenho, aceita, pular vez, entrar sala , entrar sala (customizado), avatar, guess, antiafk, autoreport, autotips, messagejoin, afk, expulsar, todas as dicas. "))

console.log(chalk.hex("#FF0800").bold("[OBS] — NÃO ENTRAR MUITAS VEZES E SAIR CASO EM UM INTERVALO MENOR QUE 5 SEGUNDOS, (COMO 20 VEZES EM 5 SEGUNDOS) CASO CONTRÁRIO O SERVIDOR ENVIARÁ UM ERRO (RATE LIMITED 429) E OS BOTS NÃO CONSEGUIRÃO ENTRAR NA SALA DESEJADA."))

console.log(chalk.hex("#FF0200").bold("⎯".repeat(process.stdout.columns)))
console.log(chalk.hex("#8800FF").bold("Divirta-se com o código :)"))
console.log(chalk.hex("#FF0200").bold("⎯".repeat(process.stdout.columns)))
},5000)
})



process.stdout.write('\x1B[?25l');
process.on('exit', () => {
  process.stdout.write('\x1B[?25h');
});


// ---------------------------------------
// ----------------------1----------------
// ---------------------------------------


const cheerio = require('cheerio');
const { JSDOM } = require('jsdom');
const https = require('https');
let __BOTS=[];
const gRI = (arr, n) => arr.sort(() => Math.random() - 0.5).slice(0, n);

function cmd_xx_(c){__BOTS.forEach(e=> { 
		 const data = new URLSearchParams();
  data.append('comando', c)
fetch("https://gartic.pics/room/atualizar.php?cache=" + Date.now() + "&idapp=" + e,{
  method: 'POST',
  headers: {              
  'User-Agent': 'Mozilla/5.0 (Windows Phone 10.0; Android 6.0.1; Xbox; Xbox One) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/58.0.3029.110 Mobile Safari/537.36 Edge/16.16297',
    'Content-Type': 'application/x-www-form-urlencoded'
  },
  body: data

            })})
	}
let sev=''
// logadas ativas
let ativas=[]
const ikss = Array.from({ length: 67 }, () => Math.random());
let createdAcc=[]

// criadas
let c__=[]

// lista bots (contas)
// aaaaa
let ak=

[]

let acc=gRI(ak,67)
let ipss = [
'185.246.84.66',
'185.246.86.208'
]
let ips= [
'185.246.84.66',
'185.246.86.208',
'108.181.54.41',
'185.246.86.211',
'108.181.90.163',
'108.181.90.129',
'199.71.214.121',
'108.181.88.29',
'199.71.214.89',
'208.87.240.59',
'108.181.6.9',
'108.181.5.51',
'108.181.3.225',
'208.87.242.51',
'108.181.21.229',
'108.181.33.119',
'108.181.33.135',
'208.87.241.1',
'108.181.34.71',
'108.181.34.151',
'108.181.32.73',
'108.181.32.49',
'108.181.34.45',
'108.181.43.67',
'108.181.32.63',
'108.181.32.57',
'108.181.32.59',
'108.181.24.243',
'108.181.34.177',
'108.181.34.157',
'208.87.241.169',
'95.214.53.33',
'146.19.24.89',
'195.3.222.15',
'195.3.223.166',
'195.3.223.164',
'185.16.39.166',
'108.181.6.89',
'108.181.9.39',
'108.181.11.39',
'108.181.8.179',
'208.87.240.203',
'108.181.2.202',
'208.87.240.251',
'108.181.3.54',
'208.87.241.149',
'108.181.4.237',
'208.87.241.209',
'108.181.4.241',
'108.181.5.31',
'208.87.240.35',
'108.181.5.242',
'208.87.242.233',
'208.87.240.67',
'95.214.53.48',
'195.3.222.40',
'108.181.11.173',
'108.181.12.46',
'108.181.11.193',
'108.181.11.171',
'108.181.11.175',
'185.16.39.144',
'178.211.139.238',
'185.16.39.213',
'185.246.84.18',
'185.246.87.7'
]

function yenile(){
    	fetch("https://generator.email/").then(t=>t.text()).then(t=>{let e=cheerio.load(t),l=[];e(".e7m.tt-suggestion").each((t,n)=>{let h=e(n).children().first().text();h.endsWith(".com")&&l.push(h)});let n=l[Math.floor(Math.random()*l.length)];console.log(("mail domain:"+n)||null);
mail__=n;
})
}
yenile();

async function _0x8dA2SbC(){let e=await fetch('https://www.croxyproxy.rocks/'),t=await e.text(),r=new JSDOM(t),c=r.window.document.querySelector('#request > input[type=hidden]').value;return c}async function gSS__CSRF(){let e=await _0x8dA2SbC(),t=await fetch('https://www.croxyproxy.rocks/servers',{headers:{accept:'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.7','accept-language':'pt-BR,pt;q=0.9,en-US;q=0.8,en;q=0.7','cache-control':'max-age=0','content-type':'application/x-www-form-urlencoded','sec-fetch-dest':'document','sec-fetch-mode':'navigate','sec-fetch-site':'same-origin','upgrade-insecure-requests':'1'},referrer:'https://www.croxyproxy.rocks/servers',referrerPolicy:'strict-origin-when-cross-origin',body:'url=&csrf='+e,method:'POST',mode:'cors',credentials:'include'}),r=await t.text(),c=new JSDOM(r),a=c.window.document.querySelector('#serverSelectorScript').getAttribute('data-csrf').slice(1,-1);return a}
let __TOKEN__=await gSS__CSRF();
const postData="url=Gartic.io&proxyServerId=63&csrf="+__TOKEN__+"&demo=0&frontOrigin=https://www.croxyproxy.rocks",options={hostname:"www.croxyproxy.rocks",path:"/requests?fso=",method:"POST",headers:{"Content-Type":"application/x-www-form-urlencoded","Content-Length":Buffer.byteLength(postData)}},req=https.request(options,e=>{let o="",t="";e.on("data",e=>{o+=e}),e.on("end",()=>{console.log("Response Data:",o),console.log("Location Header:",t),console.log(e.headers)});let r=(t=e.headers.location).split("/")[3];ips.forEach(e=>{https.get("https://"+e+"/"+r,o=>{let CK_=o.headers["set-cookie"];console.log(chalk.hex("#FFC700").bold(o.statusCode+" — "+e))
function saida_esp(w_){
	
fetch("https://"+w_[0]+"/room/saida.php?cache=" + Date.now() + "&idapp="+w_[1]+"&sala=undefined&ajax=1&__cpo=aHR0cHM6Ly9nYXJ0aWMucGljcw",{
  method: 'GET',
  headers: {              
  'User-Agent': 'Mozilla/5.0 (Windows Phone 10.0; Android 6.0.1; Xbox; Xbox One) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/58.0.3029.110 Mobile Safari/537.36 Edge/16.16297',
    'Content-Type': 'application/x-www-form-urlencoded',
                "cookie":CK_
  },
  body: null

            })
	}
function cmd_esp(w_,s_){
	 const dataw= new URLSearchParams();
  dataw.append('comando', s_)
fetch("https://"+w_[0]+"/room/atualizar.php?cache=" + Date.now() + "&idapp="+w_[1]+"&__cpo=aHR0cHM6Ly9nYXJ0aWMucGljcw",{
  method: 'POST',
  headers: {              
  'User-Agent': 'Mozilla/5.0 (Windows Phone 10.0; Android 6.0.1; Xbox; Xbox One) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/58.0.3029.110 Mobile Safari/537.36 Edge/16.16297',
    'Content-Type': 'application/x-www-form-urlencoded',
                "cookie":CK_
  },
  body: dataw

            })
	}
function cmdcas(cs){__BOTS.forEach((eg,ik)=> { 
		 const dataw= new URLSearchParams();
  dataw.append('comando', cs)

fetch("https://"+ips[ik]+"/room/atualizar.php?cache=" + Date.now() + "&idapp="+eg+"&__cpo=aHR0cHM6Ly9nYXJ0aWMucGljcw",{
  method: 'POST',
  headers: {              
  'User-Agent': 'Mozilla/5.0 (Windows Phone 10.0; Android 6.0.1; Xbox; Xbox One) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/58.0.3029.110 Mobile Safari/537.36 Edge/16.16297',
    'Content-Type': 'application/x-www-form-urlencoded',
                "cookie":CK_
  },
  body: dataw

            }).then(x=>x.text()).then(x=>{
switch(x){
case "n":
console.log(null)
break;
case "--2":
console.log(2);
break;
case "--3":
console.log(3);


if(detectkickedout===true){
	d=(Object.entries(bot_dados["salas"]).find(([_, salas]) => salas.some(s => s.sid === eg))[1].find(s => s.sid === eg))
	__ws__._=["kickedout",d.a,bot_dados["info_salas"][d.us].d.criador]
	}
if(antiban===true){
	d=(Object.entries(bot_dados["salas"]).find(([_, salas]) => salas.some(s => s.sid === eg))[1].find(s => s.sid === eg))
__.__CMD=[ 'rejoin', d.bn, d.us, d.avatar, null, d.s, null]
} 

	__BOTS=__BOTS.filter(e=>e!==eg);
for (const [key, salas] of Object.entries(bot_dados["salas"])) {
  const index = salas.findIndex(s => s.sid === eg);
  if (index !== -1) {
    salas.splice(index, 1); 
    break; 
  }
}

break;
default:

let dados=x.split("|");

  const dado10 = dados.find(e => e.startsWith("10"));
	  if (dado10) {
    const partes10 = dado10.split("#");
    if (partes10[2] !== undefined) palavraVez = partes10[2];
        if (partes10[2] !== undefined)       palavrasAtualizadas.push(partes10[2]);
    

    if (partes10[2] !== undefined){

    	    if (autofarm===true){
palavrasAtualizadas.push(partes10[2]);

              __._=["aceitaOne",[ips[ik],eg]]
              __._=["aceitaOne",[ips[ik],eg]]
              
        setTimeout(()=>{
        __._=["answer",partes10[2]];
        __._=["answer",partes10[2]];
        	},2000)
           setTimeout(()=>{
        __._=["answer",partes10[2]];
        	},3500)
        

                }
            if (autotips===true){
            	
           __._=["tips",[ips[ik],eg],Math.floor((2 / 3) * partes10[2].length - 1),partes10[2].length]
            	}
            if (autoskip===true){
              __._=["jumpOne",[ips[ik],eg]]
              
 	}
            if(autoaccept===true){
              __._=["aceitaOne",[ips[ik],eg]]
              __._=["aceitaOne",[ips[ik],eg]]
                  const enm = Object.entries(bot_dados["salas"]).find(([_, salas]) => salas.some(s => s.sid === eg));
   let sl= enm?.[1]?.find(s => s.sid === eg);
   bot_dados["info_salas"][sl.us].acertos=[];
bot_dados["info_salas"][sl.us].palavra=partes10[2]
                    const sids = Object.values(bot_dados["salas"]).flatMap(salas => salas.filter(s => s.config?.n === 1).map(s => s.sid));
sids.forEach(sid=>{__._=["answerOne",[ips[ik],sid],partes10[2]];
setTimeout(()=>{__._=["answerOne",[ips[ik],sid],partes10[2]]},350)
setTimeout(()=>{__._=["answerOne",[ips[ik],sid],partes10[2]]},600)
})

            	}
               if((Object.entries(bot_dados["salas"]).find(([_, salas]) => salas.some(s => s.sid === eg))[1].find(s => s.sid === eg).config.n) === 1){
palavrasAtualizadas.push(partes10[2]);

        setTimeout(()=>{
        __._=["answer",partes10[2]];
        __._=["answer",partes10[2]];
        	},2000)
           setTimeout(()=>{
        __._=["answer",partes10[2]];
        	},3500)
           setTimeout(()=>{
        __._=["answer",partes10[2]];
        	},6000)

   	}   

   if((Object.entries(bot_dados["salas"]).find(([_, salas]) => salas.some(s => s.sid === eg))[1].find(s => s.sid === eg).config.c) === 1){
palavrasAtualizadas.push(partes10[2]);
              __._=["aceitaOne",[ips[ik],eg]]
              __._=["aceitaOne",[ips[ik],eg]]
              
        setTimeout(()=>{
        __._=["answer",partes10[2]];
        __._=["answer",partes10[2]];
        	},2000)
           setTimeout(()=>{
        __._=["answer",partes10[2]];
        	},3500)
           setTimeout(()=>{
        __._=["answer",partes10[2]];
        	},6000)

   	}   

 if((Object.entries(bot_dados["salas"]).find(([_, salas]) => salas.some(s => s.sid === eg))[1].find(s => s.sid === eg).config.g) === 1){
 	         __._=["tips",[ips[ik],eg],Math.floor((2 / 3) * partes10[2].length - 1),partes10[2].length]
 	}
 if((Object.entries(bot_dados["salas"]).find(([_, salas]) => salas.some(s => s.sid === eg))[1].find(s => s.sid === eg).config.f) === 1){
     __._=["jumpOne",[ips[ik],eg]]
 	}
 if((Object.entries(bot_dados["salas"]).find(([_, salas]) => salas.some(s => s.sid === eg))[1].find(s => s.sid === eg).config.j) === 1){
      __._=["aceitaOne",[ips[ik],eg]]
 	}

     }

     __ws__._=["palavraVez",partes10[2]]
     }
     
const _0xca70e = {
  async set(t, p, v, r) {
    if (Array.isArray(v) && v.length > 0) {
      const [_C0, ...args] = v;
      switch (_C0) {
      	case "enviaUsuarios":
          break;
      	case "enviaMensagens":
           __ws__._=["msgChat",bot_dados["mensagens"][eg]]
          break;
      	case "enviaRespostas":
           __ws__._=["answerChat",bot_dados["respostas"][eg]]
          
          break;
          
      	case "palavraVez":
      	 __ws__._=["palavraVez",v[1]];
      break;
      	}
};return Reflect.set(t, p, v, r);}};
global.__to= new Proxy({},_0xca70e);
const dado7 = dados.filter(i => i.startsWith("7")).map(e => e.split("#"));


dado7.forEach(e => {
  if (e[1] !== undefined && e[2] !== undefined) {
    bot_dados["mensagens"][eg].push({
      usuario: e[1],
      mensagem: e[2]
    });
  }
});

const dado8 = dados.filter(i => i.startsWith("8")).map(e => e.split("#"));

dado8.forEach(e => {
  if (e[1] !== undefined && e[2] !== undefined) {
    bot_dados["respostas"][eg].push({
      usuario: e[1],
      resposta: e[2]
    });
  }
});

const dado9 = dados.find(e => e.startsWith("9"));

if (dado9) {
  const p9 = dado9.split("#");
  const tP2 = p9[2] !== undefined;
  const tP3 = p9[3] !== undefined;

  let sala = null;

  if (tP2) {
    vezAgora = p9[2];

    const entradaSala = Object.entries(bot_dados["salas"])
      .find(([_, salas]) => salas.some(s => s.sid === eg));

    sala = entradaSala?.[1]?.find(s => s.sid === eg);

    if (sala) {
      bot_dados["info_salas"][sala.us].vez = p9[2];
  bot_dados["info_salas"][sala.us].vezIDAPP = eg;
    }
  }

  if (tP3) {
    proximos = p9[3];
  }

  if (autoreport === true) {
    __._ = ["reportOne", [ips[ik], eg]];
  }

  if (tP2 && sala && Number(sala?.config?.e) === 1) {
    __._ = ["reportOne", [ips[ik], eg]];
  }
}

const dado18 = dados.filter(i => i.startsWith("18")).map(e => e.split("#"));

if (dado18) {
	dado18.forEach(e => {
		       sids = Object.values(bot_dados["salas"]).flatMap(salas => salas.filter(s => s.config?.n === 1).map(s => s.sid));
		                  const enm = Object.entries(bot_dados["salas"]).find(([_, salas]) => salas.some(s => s.sid === eg));
   let sl= enm?.[1]?.find(s => s.sid === eg);
if(!bot_dados["info_salas"][sl.us].acertos){
	bot_dados["info_salas"][sl.us].acertos=[];
	bot_dados["info_salas"][sl.us].acertos.push(e[1])
	} else {
		bot_dados["info_salas"][sl.us].acertos.push(e[1])
		}
		if((bot_dados["info_salas"][sl.us].acertos).length>1){	__._=["answerOne",[ips[ik],eg],bot_dados["info_salas"][sl.us].palavra]
			}
 
 })
	}


const dado20 = dados.find(e => e.startsWith("20"));
if (dado20) {
  const p20 = dado20.split("#");
  const tP2 = p20[2] !== undefined;

  if (detectreported === true) {
    const entradaSala = Object.entries(bot_dados["salas"])
      .find(([_, salas]) => salas.some(s => s.sid === eg));

    if (entradaSala) {
      const uu = entradaSala[1].find(s => s.sid === eg);

      if (uu && bot_dados["info_salas"][uu.us]) {
        const v = bot_dados["info_salas"][uu.us].vez;
        const vs = typeof v === "string" && v.startsWith("~") ? v.split("~")[1] : v;

        if (vs === uu.a) {

          __ws__._ = ["reported", p20[2], uu.a];
        }
      }
    }
  }
}


try{

	


if(dados[0].split("@")[1]!=="0"){
	usuarios=[];
	
	
dados[0].split("@")[1].split("*").map(s=>s.split(".")).forEach(s=>{
	// ler dados
const novoUsuario = { usuario: s[0], pontosTotal: s[1] };
const existe = global.usuarios.some(u => u.usuario === novoUsuario.usuario);
if (!existe) {
    global.usuarios.push(novoUsuario);
}

});

dados.filter(i => i.startsWith("15")).map(e=>e.split("#")).forEach(s=>{

if(1==2){
	// entrou
s[1]==="1"?console.log(s[2]+" entrou"):0
  // saiu
s[1]==="2"?console.log(s[2]+" saiu"):0
}
});


} 

} catch (e){}
}


})
            
})
	}
const _0xa1ba = {
  set(t, p, v, r) {
    if (Array.isArray(v) && v.length > 0) {
      const [_C0, ...args] = v;
      switch (_C0) {
      	case "avatar":
      // edita avatar ( infelizmente não funciona com foto porque a moderação bane :( )
const axios = require("axios");
const FormData = require("form-data");

acc.forEach(aa=>{
const form = new FormData();
form.append("avatar", v[1]);

axios.post("https://gartic.pics/r/avatar?cache="+Date.now()+"&idapp="+aa, form, {
  headers: {
    ...form.getHeaders(),
    "Referer": "https://m.gartic.net/",
    "Referrer-Policy": "strict-origin-when-cross-origin",
      'User-Agent': 'Mozilla/5.0 (Windows Phone 10.0; Android 6.0.1; Xbox; Xbox One) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/58.0.3029.110 Mobile Safari/537.36 Edge/16.16297'
  },
}) .then(response => {console.log("Resposta:", response.data); console.log(aa)})
})
break;
      	case "editDesc":
      // edita descrição
      function csc(str) {
  return [...str].map(char => 
    /[^\x20-\x7E\u00A0-\u00FF]/g.test(char) ? `&#${char.codePointAt(0)};` : char
  ).join('');
}
      let sqw=csc(v[1]);
            ips.forEach((ic,ix)=>{
      fetch("https://"+ic+"/r/editDescription?cache="+Date.now()+"&idapp="+ikss[ix]+"&__cpo=aHR0cHM6Ly9nYXJ0aWMucGljcw", {
  "headers": {
    "accept": "*/*",
    "accept-language": "pt-BR,pt;q=0.9,en-US;q=0.8,en;q=0.7",
    "content-type": "application/x-www-form-urlencoded",
    "sec-ch-ua": "\"Chromium\";v=\"137\", \"Not/A)Brand\";v=\"24\"",
    "sec-ch-ua-mobile": "?1",
    "sec-ch-ua-platform": "\"Android\"",
    "sec-fetch-dest": "empty",
    "sec-fetch-mode": "cors",
    "sec-fetch-site": "cross-site",
    "user-agent":"Mozilla/5.0 (Windows Phone 10.0; Android 6.0.1; Xbox; Xbox One) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/58.0.3029.110 Mobile Safari/537.36 Edge/16.16297",
    'cookie':CK_
  },
  "referrer": "https://m.gartic.net/",
  "referrerPolicy": "strict-origin-when-cross-origin",
  "body": "descricao="+encodeURIComponent(sqw),
  "method": "POST",
  "mode": "cors",
  "credentials": "omit"
});
})
      break;
      
      	case "createAccount":
      let nick = v[1];
      let senha = v[2];
      let email = v[3];
      
function create(e, f, g, h) {
    fetch(`https://gartic.pics/r/register/?cache=${Date.now()}&idapp=${crypto.randomUUID().split("-").join("").slice(-18)}${Math.ceil(Math.random() * 99999)}&__cpo=aHR0cHM6Ly9nYXJ0aWMucGljcw`, {
        "headers": {
            "accept": "*/*",
            "accept-language": "pt-BR,pt;q=0.9,en-US;q=0.8,en;q=0.7,tr;q=0.6",
            "content-type": "multipart/form-data; boundary=----WebKitFormBoundaryMA6G6mjMicH1q5xd",
            "sec-ch-ua": "\"Not-A.Brand\";v=\"99\", \"Chromium\";v=\"124\"",
            "sec-ch-ua-mobile": "?1",
            "sec-ch-ua-platform": "\"Android\"",
            "sec-fetch-dest": "empty",
            "sec-fetch-mode": "cors",
            "sec-fetch-site": "cross-site",
            "user-agent": "Mozilla/5.0 (Windows Phone 10.0; Android 6.0.1; Xbox; Xbox One) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/58.0.3029.110 Mobile Safari/537.36 Edge/16.16297"
        },
        "referrer": "https://m.gartic.net/",
        "referrerPolicy": "strict-origin-when-cross-origin",
        "body": `------WebKitFormBoundaryMA6G6mjMicH1q5xd\r\nContent-Disposition: form-data; name="login"\r\n\r\n${e}\r\n------WebKitFormBoundaryMA6G6mjMicH1q5xd\r\nContent-Disposition: form-data; name="email"\r\n\r\n${f}\r\n------WebKitFormBoundaryMA6G6mjMicH1q5xd\r\nContent-Disposition: form-data; name="senha"\r\n\r\n${g}\r\n------WebKitFormBoundaryMA6G6mjMicH1q5xd\r\nContent-Disposition: form-data; name="avatar"\r\n\r\n${h}\r\n------WebKitFormBoundaryMA6G6mjMicH1q5xd\r\nContent-Disposition: form-data; name="idioma"\r\n\r\n1\r\n------WebKitFormBoundaryMA6G6mjMicH1q5xd--\r\n`,
        "method": "POST",
        "mode": "cors",
        "credentials": "omit"
    }).then(x => x.json()).then(x => {
        console.log(x);
        console.log(`\n${e}\nhttps://generator.email/${f}\n${g}\n${h}\n\n`);
        let ahha=f.split("@")[0]
        let domein=f.split("@")[1]
        let ew='["' +ahha+ '"]'
        setTimeout(()=>{
async function getResponse() {
    const response = await fetch("https://generator.email/inbox0/", {
  "headers": {
    "accept": "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.7",
    "accept-language": "pt-BR,pt;q=0.9",
    "cache-control": "max-age=0",
    "sec-ch-ua": "\"Chromium\";v=\"137\", \"Not/A)Brand\";v=\"24\"",
    "sec-ch-ua-mobile": "?1",
    "sec-ch-ua-platform": "\"Android\"",
    "sec-fetch-dest": "document",
    "sec-fetch-mode": "navigate",
    "sec-fetch-site": "none",
    "sec-fetch-user": "?1",
    "upgrade-insecure-requests": "1",
    "cookie": "embx="+encodeURIComponent(ew)+"; surl="+domein+"/"+ahha
  },
  "referrerPolicy": "strict-origin-when-cross-origin",
  "body": null,
  "method": "GET"
});
    const text = await response.text();
    const dom = new JSDOM(text);
    const document = dom.window.document;
    const links = document.querySelectorAll("a");
    links.forEach(link => {
        if (link.href.includes("url3888.onrizon.com/")) {
            console.log("s: "+link.href);
            fetch(link.href,{"headers":{  "user-agent":"Mozilla/5.0 (Windows Phone 10.0; Android 6.0.1; Xbox; Xbox One) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/58.0.3029.110 Mobile Safari/537.36 Edge/16.16297"}}).then(yq=>{
            c__.push(e);

            	})

        }
    });

}
 
getResponse();
},10000)
    });
}

create(nick, email, senha, 0);

      break;
      	case "createAccounts":
      // criar contas
      function d__s() {
  return new Promise((rs, rj) => {
    setTimeout(() => {
    	fetch("https://generator.email/").then(t=>t.text()).then(t=>{let e=cheerio.load(t),l=[];e(".e7m.tt-suggestion").each((t,n)=>{let h=e(n).children().first().text();h.endsWith(".com")&&l.push(h)});let n=l[Math.floor(Math.random()*l.length)];console.log(n||null);
mail__=n;
});
      rs("1");
    }, 0);
  });
}

d__s().then(__z=> {
            ips.forEach((ic,ix)=>{
let llogin=v[1]+Math.floor(Math.random()*9999);
function create(e, f, g, h) {
    fetch(`https://${ic}/r/register/?cache=${Date.now()}&idapp=${crypto.randomUUID().split("-").join("").slice(-18)}${Math.ceil(Math.random() * 99999)}&__cpo=aHR0cHM6Ly9nYXJ0aWMucGljcw`, {
        "headers": {
            "accept": "*/*",
            "accept-language": "pt-BR,pt;q=0.9,en-US;q=0.8,en;q=0.7,tr;q=0.6",
            "content-type": "multipart/form-data; boundary=----WebKitFormBoundaryMA6G6mjMicH1q5xd",
            "sec-ch-ua": "\"Not-A.Brand\";v=\"99\", \"Chromium\";v=\"124\"",
            "sec-ch-ua-mobile": "?1",
            "sec-ch-ua-platform": "\"Android\"",
            "sec-fetch-dest": "empty",
            "sec-fetch-mode": "cors",
            "sec-fetch-site": "cross-site",
            "user-agent": "Mozilla/5.0 (Windows Phone 10.0; Android 6.0.1; Xbox; Xbox One) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/58.0.3029.110 Mobile Safari/537.36 Edge/16.16297",
            "cookie":CK_
        },
        "referrer": "https://m.gartic.net/",
        "referrerPolicy": "strict-origin-when-cross-origin",
        "body": `------WebKitFormBoundaryMA6G6mjMicH1q5xd\r\nContent-Disposition: form-data; name="login"\r\n\r\n${e}\r\n------WebKitFormBoundaryMA6G6mjMicH1q5xd\r\nContent-Disposition: form-data; name="email"\r\n\r\n${f}\r\n------WebKitFormBoundaryMA6G6mjMicH1q5xd\r\nContent-Disposition: form-data; name="senha"\r\n\r\n${g}\r\n------WebKitFormBoundaryMA6G6mjMicH1q5xd\r\nContent-Disposition: form-data; name="avatar"\r\n\r\n${h}\r\n------WebKitFormBoundaryMA6G6mjMicH1q5xd\r\nContent-Disposition: form-data; name="idioma"\r\n\r\n1\r\n------WebKitFormBoundaryMA6G6mjMicH1q5xd--\r\n`,
        "method": "POST",
        "mode": "cors",
        "credentials": "omit"
    }).then(x => x.json()).then(x => {
        console.log(x);
        console.log(`\n${e}\nhttps://generator.email/${f}\n${g}\n${h}\n\n`);
        let ahha=f.split("@")[0];
        let domein=f.split("@")[1];
        let ew='["' +ahha+ '"]';
        setTimeout(()=>{
async function getResponse() {
    const response = await fetch("https://generator.email/inbox0/", {
  "headers": {
    "accept": "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.7",
    "accept-language": "pt-BR,pt;q=0.9",
    "cache-control": "max-age=0",
    "sec-ch-ua": "\"Chromium\";v=\"137\", \"Not/A)Brand\";v=\"24\"",
    "sec-ch-ua-mobile": "?1",
    "sec-ch-ua-platform": "\"Android\"",
    "sec-fetch-dest": "document",
    "sec-fetch-mode": "navigate",
    "sec-fetch-site": "none",
    "sec-fetch-user": "?1",
    "upgrade-insecure-requests": "1",
    "cookie": "embx="+encodeURIComponent(ew)+"; surl="+domein+"/"+ahha
  },
  "referrerPolicy": "strict-origin-when-cross-origin",
  "body": null,
  "method": "GET"
});
    const text = await response.text();
    const dom = new JSDOM(text);
    const document = dom.window.document;
    const links = document.querySelectorAll("a");
    links.forEach(link => {
        if (link.href.includes("url3888.onrizon.com/")) {
            console.log("s: "+link.href);
            fetch(link.href,{"headers":{  "user-agent":"Mozilla/5.0 (Windows Phone 10.0; Android 6.0.1; Xbox; Xbox One) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/58.0.3029.110 Mobile Safari/537.36 Edge/16.16297"}}).then(yq=>{
            c__.push(e)
              console.log({ login: v[1], senha: v[2] });
  if (global.contas.some(c=> (c.login).toUpperCase() === v[1].toUpperCase())) {
    console.log("o login já existe na lista.");
  } else {
    const c = { login: llogin, senha: v[2] };
    global.contas.push(c);
    fs.writeFileSync("./contas.json", JSON.stringify(global.contas, null, 2));
  }

            	})

        }
    });

}
 
getResponse();
},10000)
    });
}

create(llogin , crypto.randomUUID().split("-").join("").slice(-8) +"@"+ mail__, v[2], 0);

            	})
            });

      break;
case "login":
  ativas = [];
  function limparLista(lista) {
    return [...new Set(lista.filter(item => item !== undefined))];
  }
  contas.forEach((conta, ix) => {
    const ip = ips[ix % ips.length];
    const idx = global.contas.findIndex(c => c.login.toUpperCase() === conta.login.toUpperCase());

    if (idx === -1) {
      return;
    }
    if (global.contas[idx].ativado !== "SIM") {
      return;
    }

    const sessao = crypto.randomUUID().replace(/-/g, "");

    fetch(`https://${ip}/r/signin?cache=${Date.now()}&idapp=${sessao}&__cpo=aHR0cHM6Ly9nYXJ0aWMucGljcw`, {
      headers: {
        "accept": "*/*",
        "accept-language": "pt-BR,pt;q=0.9,en-US;q=0.8,en;q=0.7",
        "content-type": "application/x-www-form-urlencoded",
        "sec-ch-ua": "\"Chromium\";v=\"137\", \"Not/A)Brand\";v=\"24\"",
        "sec-ch-ua-mobile": "?1",
        "sec-ch-ua-platform": "\"Android\"",
        "sec-fetch-dest": "empty",
        "sec-fetch-mode": "cors",
        "sec-fetch-site": "cross-site",
        "user-agent": "Mozilla/5.0 (Windows Phone 10.0; Android 6.0.1; Xbox; Xbox One) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/58.0.3029.110 Mobile Safari/537.36 Edge/16.16297",
        "cookie": CK_
      },
      referrer: "https://m.gartic.net/",
      referrerPolicy: "strict-origin-when-cross-origin",
      body: `login=${conta.login}&senha=${conta.senha}&codigo=undefined`,
      method: "POST",
      mode: "cors",
      credentials: "omit"
    }).then(res => res.json()).then(res => {
      console.log(res);

      if (!res.excluido && !res.erro && !res.banido) {
        ativas.push(sessao);
        ativas = limparLista(ativas);
      }
    })
  });

      break;
      case "joincustom":
      // entrar sala (nick customizado)
      ips.forEach((sw,ix)=>{
      	let as=JSON.parse(v[6])

	      let _d_bd = {
        'login': as[ix].nick,
        'sala': v[2],
        'avatar': as[ix].avatar,
        'local': v[4],
        'senha': v[5]
    };
// ikss[ix]
        fetch("https://"+sw+"/r/join?cache=0&idapp="+as[ix].nick+"&__cpo=aHR0cHM6Ly9nYXJ0aWMucGljcw", {
  "headers": {
    "accept": "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.7",
    "accept-language": "pt-BR,pt;q=0.9,en-US;q=0.8,en;q=0.7",
    "cache-control": "max-age=0",
    "content-type": "application/json",
    "sec-ch-ua": "\"Chromium\";v=\"137\", \"Not/A)Brand\";v=\"24\"",
    "sec-ch-ua-mobile": "?1",
    "sec-ch-ua-platform": "\"Android\"",
    "sec-fetch-dest": "document",
    "sec-fetch-mode": "navigate",
    "sec-fetch-site": "same-origin",
    "upgrade-insecure-requests": "1",
    "user-agent":"Mozilla/5.0 (Windows Phone 10.0; Android 6.0.1; Xbox; Xbox One) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/58.0.3029.110 Mobile Safari/537.36 Edge/16.16297",
    'cookie':CK_
  },
  "referrer": "https://m.gartic.net/",
  "referrerPolicy": "strict-origin-when-cross-origin",
  "body": JSON.stringify(_d_bd),
  "method": "POST",
  "mode": "cors",
  "credentials": "include"
}).then(ax=>ax.json()).then(ax=>{ax.erro===false?__BOTS.push(as[ix].nick):0})
})
      break;
            case "logout":
      // deslogar das contas
            ips.forEach((ic,ix)=>{
            	fetch("https://"+ic+"/r/logout?cache="+Date.now()+"&idapp="+ikss[ix]+"&__cpo=aHR0cHM6Ly9nYXJ0aWMucGljcw", {
  "headers": {
    "accept": "*/*",
    "accept-language": "pt-BR,pt;q=0.9,en-US;q=0.8,en;q=0.7",
    "content-type": "application/x-www-form-urlencoded",
    "sec-ch-ua": "\"Chromium\";v=\"137\", \"Not/A)Brand\";v=\"24\"",
    "sec-ch-ua-mobile": "?1",
    "sec-ch-ua-platform": "\"Android\"",
    "sec-fetch-dest": "empty",
    "sec-fetch-mode": "cors",
    "sec-fetch-site": "cross-site",
        "user-agent":"Mozilla/5.0 (Windows Phone 10.0; Android 6.0.1; Xbox; Xbox One) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/58.0.3029.110 Mobile Safari/537.36 Edge/16.16297",
    'cookie':CK_
  },
  "referrer": "https://m.gartic.net/",
  "referrerPolicy": "strict-origin-when-cross-origin",
  "body": null,
  "method": "POST",
  "mode": "cors",
  "credentials": "omit"
 
}).then(q=>q.json()).then(q=>{console.log(q);
})});
      break;
      case "rejoin":
      // yeniden katılmak

	let uuid=crypto.randomUUID().split("-").join("").substring(0,15);
	let login=v[1]+Math.floor(Math.random()*1e4);
	let avt = '';
if(isN(v[3])) avt = v[3];
if(!isN(v[3]) && v[3]=="random") avt = Math.ceil(Math.random()*37);
if(!isN(v[3]) && v[3]=="null") avt = 37;
	      let _d_bd = {
        'login': login,
        'sala': v[2],
        'avatar': avt,
        'local': v[4],
        'senha': v[5]
    };
// ikss[ix]
        fetch("http://169.45.243.154:2022/r/join?cache=0&idapp="+uuid+"&__cpo=aHR0cHM6Ly9nYXJ0aWMucGljcw", {
  "headers": {
    "accept": "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.7",
    "accept-language": "pt-BR,pt;q=0.9,en-US;q=0.8,en;q=0.7",
    "cache-control": "max-age=0",
    "content-type": "application/json",
    "sec-ch-ua": "\"Chromium\";v=\"137\", \"Not/A)Brand\";v=\"24\"",
    "sec-ch-ua-mobile": "?1",
    "sec-ch-ua-platform": "\"Android\"",
    "sec-fetch-dest": "document",
    "sec-fetch-mode": "navigate",
    "sec-fetch-site": "same-origin",
    "upgrade-insecure-requests": "1",
    "user-agent":"Mozilla/5.0 (Windows Phone 10.0; Android 6.0.1; Xbox; Xbox One) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/58.0.3029.110 Mobile Safari/537.36 Edge/16.16297",
    'cookie':CK_
  },
  "referrer": "https://m.gartic.net/",
  "referrerPolicy": "strict-origin-when-cross-origin",
  "body": JSON.stringify(_d_bd),
  "method": "POST",
  "mode": "cors",
  "credentials": "include"
}).then(ax=>ax.json()).then(ax=>{ax.erro===false?(__BOTS.push(uuid),bot_dados["respostas"][uuid]=[],bot_dados["mensagens"][uuid]=[],(bot_dados["salas"][v[2]]?bot_dados["salas"][v[2]].push({a:login,bn:v[1],us:v[2],avatar:avt,s:v[5],sid:uuid,config:{a:0,b:0,c:0,d:0,e:0,f:0,g:0,h:0,i:0,j:0,k:0,l:0,m:0,n:0}}):bot_dados["salas"][v[2]]=[{a:login,bn:v[1],us:v[2],avatar:avt,s:v[5],sid:uuid,config:{a:0,b:0,c:0,d:0,e:0,f:0,g:0,h:0,i:0,j:0,k:0,l:0,m:0,n:0}}])):0})
      break;
        case "join":
        // entrar na sala
function isN(o){return!isNaN(parseFloat(o))&&isFinite(Number(o))};
class Room{async aguardar(e){return new Promise(c=>setTimeout(c,e))}async info(e){let c=`https://gartic.pics/r/roomInfo?cache=0&idapp=0&id=${e}`,t=await fetch(c,{method:"GET",headers:{accept:"*/*","accept-language":"pt-BR,pt;q=0.9,en-US;q=0.8,en;q=0.7","content-type":"application/x-www-form-urlencoded","sec-ch-ua":'"Chromium";v="137", "Not/A)Brand";v="24"',"sec-ch-ua-mobile":"?1","sec-ch-ua-platform":'"Android"',"sec-fetch-dest":"empty","sec-fetch-mode":"cors","sec-fetch-site":"cross-site",Referer:"https://m.gartic.net/","Referrer-Policy":"strict-origin-when-cross-origin","User-Agent":"Mozilla/5.0 (Windows Phone 10.0; Android 4.2.1; Xbox; Xbox One) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/46.0.2486.0"},body:null});return t.json()}}



ips.forEach((sw,ix)=>{
	if(ikss[ix]!==undefined){
	let uuid=crypto.randomUUID().split("-").join("").substring(0,15);
	let login=v[1]+Math.floor(Math.random()*1e4);
	let avt = '';
if(isN(v[3])) avt = v[3];
if(!isN(v[3]) && v[3]=="random") avt = Math.ceil(Math.random()*37);
if(!isN(v[3]) && v[3]=="null") avt = 37;


	latestSala=v[2];
	w={};
    w.senha=null;
(async () => {
	if(!bot_dados["info_salas"][v[2]]){ 	  
  R = new Room();
  w = await R.info(v[2]);
  bot_dados["info_salas"][v[2]]={s:v[2],d:w}
  	} else {
  w.senha=bot_dados["info_salas"][v[2]].d.senha
  	}
	      let _d_bd = {
        'login': login,
        'sala': v[2],
        'avatar': avt,
        'local': v[4],
        'senha': w.senha
    };

// ikss[ix]
        fetch("https://"+sw+"/r/join?cache=0&idapp="+ikss[ix]+"&__cpo=aHR0cHM6Ly9nYXJ0aWMucGljcw", {
  "headers": {
    "accept": "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.7",
    "accept-language": "pt-BR,pt;q=0.9,en-US;q=0.8,en;q=0.7",
    "cache-control": "max-age=0",
    "content-type": "application/json",
    "sec-ch-ua": "\"Chromium\";v=\"137\", \"Not/A)Brand\";v=\"24\"",
    "sec-ch-ua-mobile": "?1",
    "sec-ch-ua-platform": "\"Android\"",
    "sec-fetch-dest": "document",
    "sec-fetch-mode": "navigate",
    "sec-fetch-site": "same-origin",
    "upgrade-insecure-requests": "1",
    "user-agent":"Mozilla/5.0 (Windows Phone 10.0; Android 6.0.1; Xbox; Xbox One) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/58.0.3029.110 Mobile Safari/537.36 Edge/16.16297",
    'cookie':CK_
  },
  "referrer": "https://m.gartic.net/",
  "referrerPolicy": "strict-origin-when-cross-origin",
  "body": JSON.stringify(_d_bd),
  "method": "POST",
  "mode": "cors",
  "credentials": "include"
}).then(ax=>ax.json()).then(ax=>{ax.erro===false?(__BOTS.push(ikss[ix]),bot_dados["respostas"][ikss[ix]]=[],bot_dados["mensagens"][ikss[ix]]=[],(bot_dados["salas"][v[2]]?bot_dados["salas"][v[2]].push({a:login,bn:v[1],us:v[2],avatar:avt,s:w.senha,sid:ikss[ix],config:{a:0,b:0,c:0,d:0,e:0,f:0,g:0,h:0,i:0,j:0,k:0,l:0,m:0,n:0}}):bot_dados["salas"][v[2]]=[{a:login,bn:v[1],us:v[2],avatar:avt,s:w.senha,sid:ikss[ix],config:{a:0,b:0,c:0,d:0,e:0,f:0,g:0,h:0,i:0,j:0,k:0,l:0,m:0,n:0}}])):console.log(ax)})
})();
}
})

break;
case "joinQ":

let j = 0;
sq1.forEach((s) => {
  console.log(s, ips[j % ips.length], ips[(j + 1) % ips.length])
  let uuid=crypto.randomUUID().split("-").join("").substring(0,15);
	      let _d_bd = {
        'login': "User"+Math.floor(Math.random()*1e4),
        'sala': s,
        'avatar': 29,
        'local': null,
        'senha': 'pode'
    };
// ikss[ix]
        fetch("https://"+ips[j % ips.length]+"/r/join?cache=0&idapp="+uuid+"&__cpo=aHR0cHM6Ly9nYXJ0aWMucGljcw", {
  "headers": {
    "accept": "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.7",
    "accept-language": "pt-BR,pt;q=0.9,en-US;q=0.8,en;q=0.7",
    "cache-control": "max-age=0",
    "content-type": "application/json",
    "sec-ch-ua": "\"Chromium\";v=\"137\", \"Not/A)Brand\";v=\"24\"",
    "sec-ch-ua-mobile": "?1",
    "sec-ch-ua-platform": "\"Android\"",
    "sec-fetch-dest": "document",
    "sec-fetch-mode": "navigate",
    "sec-fetch-site": "same-origin",
    "upgrade-insecure-requests": "1",
    "user-agent":"Mozilla/5.0 (Windows Phone 10.0; Android 6.0.1; Xbox; Xbox One) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/58.0.3029.110 Mobile Safari/537.36 Edge/16.16297",
    'cookie':CK_
  },
  "referrer": "https://m.gartic.net/",
  "referrerPolicy": "strict-origin-when-cross-origin",
  "body": JSON.stringify(_d_bd),
  "method": "POST",
  "mode": "cors",
  "credentials": "include"
}).then(ax=>ax.json()).then(ax=>{ax.erro===false?(__BOTS.push(uuid)):0
});
  let uuid2=crypto.randomUUID().split("-").join("").substring(0,15);
	      let _d_bd2 = {
        'login': "User"+Math.floor(Math.random()*1e4),
        'sala': s,
        'avatar': 29,
        'local': null,
        'senha': 'pode'
    };
        fetch("https://"+ips[(j + 1) % ips.length]+"/r/join?cache=0&idapp="+uuid2+"&__cpo=aHR0cHM6Ly9nYXJ0aWMucGljcw", {
  "headers": {
    "accept": "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.7",
    "accept-language": "pt-BR,pt;q=0.9,en-US;q=0.8,en;q=0.7",
    "cache-control": "max-age=0",
    "content-type": "application/json",
    "sec-ch-ua": "\"Chromium\";v=\"137\", \"Not/A)Brand\";v=\"24\"",
    "sec-ch-ua-mobile": "?1",
    "sec-ch-ua-platform": "\"Android\"",
    "sec-fetch-dest": "document",
    "sec-fetch-mode": "navigate",
    "sec-fetch-site": "same-origin",
    "upgrade-insecure-requests": "1",
    "user-agent":"Mozilla/5.0 (Windows Phone 10.0; Android 6.0.1; Xbox; Xbox One) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/58.0.3029.110 Mobile Safari/537.36 Edge/16.16297",
    'cookie':CK_
  },
  "referrer": "https://m.gartic.net/",
  "referrerPolicy": "strict-origin-when-cross-origin",
  "body": JSON.stringify(_d_bd2),
  "method": "POST",
  "mode": "cors",
  "credentials": "include"
}).then(ax=>ax.json()).then(ax=>{ax.erro===false?(__BOTS.push(uuid2)):0
});
  j += 2;
})
break;
        case "joinEsp":

  for (let ix = inicio; ix < inicio + grupo && ix < ips.length; ix++) {
    let sw = ips[ix];
    let _d_bd = {
      'login': v[1] + Math.floor(Math.random() * 1e4),
      'sala': v[2],
      'avatar': v[3],
      'local': v[4],
      'senha': v[5]
    };

    fetch("https://" + sw + "/r/join?cache=0&idapp=" + ikss[ix] + "&__cpo=aHR0cHM6Ly9nYXJ0aWMucGljcw", {
      headers: {
    "accept": "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.7",
    "accept-language": "pt-BR,pt;q=0.9,en-US;q=0.8,en;q=0.7",
    "cache-control": "max-age=0",
    "content-type": "application/json",
    "sec-ch-ua": "\"Chromium\";v=\"137\", \"Not/A)Brand\";v=\"24\"",
    "sec-ch-ua-mobile": "?1",
    "sec-ch-ua-platform": "\"Android\"",
    "sec-fetch-dest": "document",
    "sec-fetch-mode": "navigate",
    "sec-fetch-site": "same-origin",
    "upgrade-insecure-requests": "1",
    "user-agent":"Mozilla/5.0 (Windows Phone 10.0; Android 6.0.1; Xbox; Xbox One) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/58.0.3029.110 Mobile Safari/537.36 Edge/16.16297",
        "cookie": CK_
      },
      body: JSON.stringify(_d_bd),
      method: "POST",
      mode: "cors",
      credentials: "include"
    })
    .then(ax => ax.json())
    .then(ax => {
      if (ax.erro === false) {
        __BOTS.push(ikss[ix]);
        bot_dados["respostas"][ikss[ix]] = [];
        bot_dados["mensagens"][ikss[ix]] = [];
        setTimeout(()=>{
        __._=["answerOne",[ips[ix],ikss[ix]],palavraEsp]
        __._=["answerOne",[ips[ix],ikss[ix]],palavraEsp]
        setTimeout(()=>{
        __._=["exitOne",[ips[ix],ikss[ix]]]
        },2500)
        },600)
      }
    });
  }

  inicio += grupo;
  if (inicio >= ips.length) {
    inicio = 0; 
  }
break;
        case "solicitaUsuarios":
        __ws__._=["usuarios",usuarios]
        break;
        case "solicitaMensagens":
        __to._=["enviaMensagens"]
        break;      
        case "solicitaRespostas":
        __to._=["enviaRespostas"]
        break;
    case "antiafk": antiafk = v[1]; break;
    case "autofarm": autofarm = v[1]; break;
    case "autoreport": autoreport = v[1]; break;
    case "autotips": autotips = v[1]; break;
    case "autoskip": autoskip = v[1]; break;
    case "autorejoin": autorejoin = v[1]; break;
    case "autonews": autonews = v[1]; break;
    case "autoguess": autoguess = v[1]; break;
    case "autoaccept": autoaccept = v[1]; break;
    case "giveanswer": giveanswer = v[1]; break;
    case "detectkickedout": detectkickedout = v[1]; break;
    case "antiban": antiban = v[1]; break;
    case "palavraEsp":palavraEsp=v[1];break;
    case "opt_config_sid_bot":
    (Object.entries(bot_dados["salas"])[0][1].find(_=>_.sid===v[2]).config[v[1]])=v[3]
    break;
    case "caccadd":
  console.log({ login: v[1], senha: v[2] });
  if (global.contas.some(c=> (c.login).toUpperCase() === v[1].toUpperCase())) {
    console.log("o login já existe na lista.");
  } else {
    const c = { login: v[1], senha: v[2] };
    global.contas.push(c);
    fs.writeFileSync("./contas.json", JSON.stringify(global.contas, null, 2));
  }

    break;
    case "caccdel":
const l=v[1].toUpperCase(),a=global.contas.length;global.contas=global.contas.filter(n=>n.login.toUpperCase()!==l);const d=global.contas.length;a===d||fs.writeFileSync("./contas.json",JSON.stringify(global.contas,null,2));
  break;

    case "checkAll":
        fetch("http://169.45.243.154:2022/r/signin?cache=0", {
  "headers": {
    "accept": "*/*",
    "accept-language": "pt-BR,pt;q=0.9,en-US;q=0.8,en;q=0.7",
    "content-type": "application/x-www-form-urlencoded",
    "sec-ch-ua": "\"Chromium\";v=\"137\", \"Not/A)Brand\";v=\"24\"",
    "sec-ch-ua-mobile": "?1",
    "sec-ch-ua-platform": "\"Android\"",
    "sec-fetch-dest": "empty",
    "sec-fetch-mode": "cors",
    "sec-fetch-site": "cross-site",
    'User-Agent': 'Mozilla/5.0 (Windows Phone 10.0; Android 6.0.1; Xbox; Xbox One) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/58.0.3029.110 Mobile Safari/537.36 Edge/16.16297'
  },
  "referrer": "https://m.gartic.net/",
  "referrerPolicy": "strict-origin-when-cross-origin",
  "body": "login="+v[1]+"&senha="+v[2]+"&codigo=undefined",
  "method": "POST",
  "mode": "cors",
  "credentials": "omit"
}).then(x=>x.json()).then(x=>{
	function t__N(timestamp) {qd= new Date(timestamp); return qd.toLocaleString();
}
	if(x.nick){
		  const idx = global.contas.findIndex(c => c.login.toUpperCase() === v[1].toUpperCase());
  if (idx !== -1) {
    global.contas[idx].status = "OK";
 global.contas[idx].latestUpdate = t__N(Date.now());
    fs.writeFileSync("./contas.json", JSON.stringify(global.contas, null, 2));
  } else {}		
		}
	if(x.motivo){
		  const idx = global.contas.findIndex(c => c.login.toUpperCase() === v[1].toUpperCase());
  if (idx !== -1) {
    global.contas[idx].status = "SUSPENSO";
 global.contas[idx].latestUpdate = t__N(Date.now());
    fs.writeFileSync("./contas.json", JSON.stringify(global.contas, null, 2));
  } else {}		
		
		}
    if(x.excluido && x.erro){
    	  const idx = global.contas.findIndex(c => c.login.toUpperCase() === v[1].toUpperCase());
  if (idx !== -1) {
    global.contas[idx].status = "EXCLUÍDO";
 global.contas[idx].latestUpdate = t__N(Date.now());
    fs.writeFileSync("./contas.json", JSON.stringify(global.contas, null, 2));
  } else {}		
    	}
   if(x.erro && !x.excluido){
   	    	  const idx = global.contas.findIndex(c => c.login.toUpperCase() === v[1].toUpperCase());
  if (idx !== -1) {
    global.contas[idx].status = "DESATIVADO";
 global.contas[idx].latestUpdate = t__N(Date.now());
    fs.writeFileSync("./contas.json", JSON.stringify(global.contas, null, 2));
  } else {}		
   	}
	})
    break;
    
        case "cacctoggleDisable":
                    idx = global.contas.findIndex(c => c.login.toUpperCase() === v[1].toUpperCase());
  if (idx !== -1) {
  !global.contas[idx].ativado?global.contas[idx].ativado="NÃO":global.contas[idx].ativado="NÃO";

    fs.writeFileSync("./contas.json", JSON.stringify(global.contas, null, 2));
  } else {}		
        break;
        case "cacctoggle":
           	    	idx = global.contas.findIndex(c => c.login.toUpperCase() === v[1].toUpperCase());
  if (idx !== -1) {
  !global.contas[idx].ativado?global.contas[idx].ativado="SIM":0;
global.contas[idx].ativado==="SIM"?global.contas[idx].ativado="NÃO":global.contas[idx].ativado="SIM";
    fs.writeFileSync("./contas.json", JSON.stringify(global.contas, null, 2));
  } else {}		
        break;
    case "cacccheck":
    fetch("http://169.45.243.154:2022/r/signin?cache=0", {
  "headers": {
    "accept": "*/*",
    "accept-language": "pt-BR,pt;q=0.9,en-US;q=0.8,en;q=0.7",
    "content-type": "application/x-www-form-urlencoded",
    "sec-ch-ua": "\"Chromium\";v=\"137\", \"Not/A)Brand\";v=\"24\"",
    "sec-ch-ua-mobile": "?1",
    "sec-ch-ua-platform": "\"Android\"",
    "sec-fetch-dest": "empty",
    "sec-fetch-mode": "cors",
    "sec-fetch-site": "cross-site",
    'User-Agent': 'Mozilla/5.0 (Windows Phone 10.0; Android 6.0.1; Xbox; Xbox One) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/58.0.3029.110 Mobile Safari/537.36 Edge/16.16297'
  },
  "referrer": "https://m.gartic.net/",
  "referrerPolicy": "strict-origin-when-cross-origin",
  "body": "login="+v[1]+"&senha="+v[2]+"&codigo=undefined",
  "method": "POST",
  "mode": "cors",
  "credentials": "omit"
}).then(x=>x.json()).then(x=>{
	console.log(x)
	if(x.nick){
	__ws__._ = ["dadosCheck",v[1],v[2],x.pontos,x.vitorias,x.avatar,x.avatarVersao,x.fotoPendente,x.codigo]
		}
	if(x.banido){
          __ws__._ = ["banido",v[1],v[2],x.motivo]
          }
     if(x.excluido){
          __ws__._ = ["excluido",v[1],v[2],"Esta conta foi excluída pela administração."]
     	}
})
    break;
      // chat de mensagem e resposta
        case "broadcast":
    console.log("BROADCAST:", args);
cmdcas('8@'+v[1]+'@undefined|7@'+v[1]+'@undefined')
          break;

        case "msg":
        // chat mensagem
          console.log("MSG:", args);
          cmdcas('7@'+v[1]+'@undefined')
          break;
        case "answer":
        // chat resposta
          console.log("ANSWER:", args);
          cmdcas('8@'+v[1]+'@undefined')
          break;
        case "answer2":
        // chat resposta
          console.log("ANSWER 2:", args);
          cmdcas('08@'+v[1]+'@undefined')
          break;
          
        case "answerOne":
        // chat resposta (específico)
          console.log("ANSWER ONE:", args);
          cmd_esp(v[1],'8@'+v[2]+'@undefined')
          break;
                  // aceita o desenho
                  case "aceita":
                  console.log("ACEITA")
                  cmdcas('32@@undefined')
                  break;
                  case "aceitaOne":
                 // aceita desenho (bot específico)
                  console.log("ACCEPT ONE")
                  cmd_esp(v[1],'32@@undefined')
                  break;
                  case "inativo":
                  // confirmar se está ativo
                  console.log("INATIVO")
                  cmdcas('22@@undefined')
                  break;
                  case "report":
                  // denunciar desenho
                  console.log("REPORT")
                  cmdcas('20@@undefined')
                  break;
                  case "reportOne":
                 // denunciar desenho (bot específico)
                  console.log("REPORT ONE")
                  cmd_esp(v[1],'20@@undefined')
                  break;
                  case "jump":
                  // pular vez
                  console.log("JUMP")
                  cmdcas('16@@undefined')
                  break;
                  case "jumpOne":
                 // pular vez (bot específico)
                  console.log("JUMP ONE")
                  cmd_esp(v[1],'16@@undefined')
                  break;
                  case "tips":
                  // dica
                  console.log("TIPS") 
                    if(v[3]>4){
                  for (let i=0;i<v[2];i++){
                  	setTimeout(()=>{
                  cmd_esp(v[1],'19@'+i+'@undefined')
                  cmd_esp(v[1],'19@'+i+'@undefined') 
                  },i*1075)}
                  
                  } else {
               for (let i=0;i<2;i++){
                  	setTimeout(()=>{
                  cmd_esp(v[1],'19@'+i+'@undefined')
                  cmd_esp(v[1],'19@'+i+'@undefined') 
                  },i*1075)}
                 }
                  break;
        case "exit":
        // sair da sala
        __BOTS.forEach(we => { 

			fetch("https://gartic.pics/room/saida.php/?cache="+ Date.now() + "&idapp=" +we+"&sala=undefined&ajax=1",{            headers: {
                'User-Agent': 'Mozilla/5.0 (Windows Phone 10.0; Android 6.0.1; Xbox; Xbox One) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/58.0.3029.110 Mobile Safari/537.36 Edge/16.16297',
                'Content-Type': 'application/json'
			
		 }})});__BOTS=[];
		bot_dados["salas"]={}
		usuarios=[];
          break;
          case "exitOne":
                 // pular vez (bot específico)
                  console.log("EXIT ONE")
                  saida_esp(v[1])
                  
          
          break;
        default:
          console.log("D:", _C0);
      }
    }
    return Reflect.set(t, p, v, r);
  }
};
global.__= new Proxy({}, _0xa1ba);

})})});req.write(postData),req.end();
// -----------------3---------------------
// -----------------3---------------------
const WebSocket = require('ws');
const wss = new WebSocket.Server({ port: 8080 });
wss.on('connection', function connection(ws) {
	const _0x9be0f8acc77xc = {
  async set(t, p, v, r) {
    if (Array.isArray(v) && v.length > 0) {
      const [_C0, ...args] = v;
      switch (_C0) {
      	case "bot_dados":     
ws.send(JSON.stringify({dados:v[1]}));
      break;
      	case "usuarios":
ws.send(JSON.stringify({usuarios:v[1]}));
break;
         case "msgChat":
ws.send(JSON.stringify({mensagens:v[1]}));
break;
         case "answerChat":
ws.send(JSON.stringify({respostas:v[1]}));
break;
         case "palavraVez":
ws.send(JSON.stringify({palavraVez:v[1]}));
break;
         case "kickedout":
ws.send(JSON.stringify({kickedout:v[1],owner:v[2]}));
break;

         case "reported":
ws.send(JSON.stringify({reported:v[1],bot:v[2]}));
break;
         case "dadosCheck":
ws.send(JSON.stringify({login:v[1],senha:v[2],pontos:v[3],vitorias:v[4],avatar:v[5],avatarVersao:v[6],fotoPendente:v[7],codigo:v[8]}));
break;
         case "banido":
ws.send(JSON.stringify({banido:v[1],senha:v[2],motivo:v[3]}));
break;
         case "excluido":
ws.send(JSON.stringify({excluido:v[1],senha:v[2],motivo:v[3]}));
break;
}
};return Reflect.set(t, p, v, r);}};
global.__ws__= new Proxy({},_0x9be0f8acc77xc);
  console.log('CLIENT CONNECTED');
  ws.on('message', function incoming(message) {	
      const msg = (typeof message === 'string') ? message : message.toString();
  try {
let i=JSON.parse(msg);
if(i.cmd){__.__CMD=[...i.cmd]

}


}catch(e_){}
  })})

  	setInterval(()=>{
bot_dados["contas"]=global.contas;
if(global.__ws__!==null){
__ws__._=["bot_dados",bot_dados]}
  	},500)
    if(9==9){
setInterval(()=>{
__._=["inativo"];
},3000)}