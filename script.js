/* ===== PENGATURAN — tambah/ubah di sini ===== */
const FOTO=['5.jpg','4.jpg','3.jpg']; // nama file foto (taruh di folder yang sama dengan index.html)
const MUSIK=['3.mp3'];                         // nama file musik; kalau lebih dari satu, diputar bergantian
const WA='6283171710493';                          // nomor WhatsApp tujuan (format 62..., tanpa + dan spasi)
/* ========================================= */
const $=id=>document.getElementById(id),A=new Audio(MUSIK[0]);let mi=0;
A.volume=.7;A.onended=()=>{mi=(mi+1)%MUSIK.length;A.src=MUSIK[mi];A.play().catch(()=>{})};
let ac,on=false,syn=false,n=0,nm='',tt,ty;
const E=['💖','🌸','✨','🐻','🍓','🦋','⭐','🍭','🐰','💗'],R=a=>a[Math.random()*a.length|0];
const NO=['ga 😤','yakin? 🤨','plisss 🥺','jangan dong 😭','hihi ga bisa wleee😝','kok ngeyell 🙄','ihhh 😡','aku nangis nih 😭','yaudah deh… 🥹'];
const OOPS=['eits tidak bisa 😝','tombolnya rusak hihi 🤪','coba lagi deh 😜','nggak mempan 😎'];
const FACE=0;
const BSVG=`<svg viewBox="0 0 200 220"><g class="bd"><ellipse cx="100" cy="172" rx="46" ry="38" fill="#c98f5e"/><ellipse cx="100" cy="178" rx="28" ry="24" fill="#f6dcc0"/><ellipse cx="78" cy="208" rx="20" ry="10" fill="#c98f5e"/><ellipse cx="122" cy="208" rx="20" ry="10" fill="#c98f5e"/><g class="ar l"><ellipse cx="58" cy="162" rx="12" ry="24" fill="#c98f5e" transform="rotate(20 58 162)"/></g><g class="ar r"><ellipse cx="142" cy="162" rx="12" ry="24" fill="#c98f5e" transform="rotate(-20 142 162)"/></g></g><g class="hd"><circle cx="50" cy="52" r="20" fill="#c98f5e"/><circle cx="50" cy="52" r="11" fill="#f5b5c0"/><circle cx="150" cy="52" r="20" fill="#c98f5e"/><circle cx="150" cy="52" r="11" fill="#f5b5c0"/><circle cx="100" cy="95" r="60" fill="#d9a06b"/><ellipse cx="100" cy="114" rx="26" ry="20" fill="#f6dcc0"/><ellipse class="bl" cx="58" cy="106" rx="11" ry="7" fill="#ff7fa8"/><ellipse class="bl" cx="142" cy="106" rx="11" ry="7" fill="#ff7fa8"/><g class="ey"><g class="pup"><ellipse cx="75" cy="88" rx="8" ry="10" fill="#3b1f2b"/><circle cx="72" cy="84" r="3" fill="#fff"/><ellipse cx="125" cy="88" rx="8" ry="10" fill="#3b1f2b"/><circle cx="122" cy="84" r="3" fill="#fff"/></g></g><path class="eh" d="M66 90Q75 78 84 90M116 90Q125 78 134 90" stroke="#3b1f2b" stroke-width="4.5" fill="none" stroke-linecap="round"/><path class="br" d="M64 72L84 79M136 72L116 79" stroke="#3b1f2b" stroke-width="4" stroke-linecap="round"/><ellipse cx="100" cy="104" rx="8" ry="6" fill="#3b1f2b"/><path class="mn" d="M90 113Q95 121 100 113Q105 121 110 113" stroke="#3b1f2b" stroke-width="3" fill="none" stroke-linecap="round"/><path class="ms" d="M91 121Q100 110 109 121" stroke="#3b1f2b" stroke-width="3" fill="none" stroke-linecap="round"/><path class="mh" d="M86 112Q100 140 114 112Z" fill="#7a2f45"/><ellipse class="mt" cx="100" cy="118" rx="8" ry="7" fill="#7a2f45"/><g class="te"><ellipse cx="68" cy="102" rx="4" ry="6" fill="#6ec6ff"/><ellipse cx="132" cy="102" rx="4" ry="6" fill="#6ec6ff"/></g></g></svg>`;
$('b1').innerHTML=$('b2').innerHTML=BSVG;
const mood=m=>$('app').dataset.m=m;
function lockP(){if(!matchMedia('(pointer:coarse)').matches)return;try{document.documentElement.requestFullscreen().then(()=>screen.orientation.lock('portrait')).catch(()=>{})}catch(e){}}
['pointermove','pointerdown'].forEach(t=>document.addEventListener(t,e=>{const b=document.querySelector('.sc.on .bear');if(!b)return;
  const r=b.getBoundingClientRect(),dx=e.clientX-r.left-r.width/2,dy=e.clientY-r.top-r.height/2,d=Math.hypot(dx,dy)||1,k=Math.min(d,200)/200*5;
  b.style.setProperty('--ex',dx/d*k+'px');b.style.setProperty('--ey',dy/d*k+'px')}));


/* huruf-huruf judul joget satu-satu (pakai DOM, aman dari karakter aneh di nama) */
function wave(el,t){let i=0;el.textContent='';
  t.split(' ').forEach(w=>{const s=document.createElement('span');s.className='w';
    for(const c of w){const l=document.createElement('span');l.textContent=c;l.style.setProperty('--i',i++);s.append(l)}
    el.append(s,' ')})}
wave($('h1'),$('h1').textContent);

/* emoji melayang (goyang kiri-kanan) */
function drop(c,t,s,life){const e=document.createElement('div'),sp=document.createElement('span');
  sp.textContent=R(E);sp.style.animationDelay=`-${Math.random()*2}s`;e.append(sp);e.className=c;
  e.style.cssText=`left:${Math.random()*90}vw;font-size:${s+Math.random()*s}px;animation-duration:${t+Math.random()*t/2}s`;
  $('app').append(e);setTimeout(()=>e.remove(),life)}
const float=()=>document.querySelectorAll('.fl').length<14&&drop('fl',9,18,15000);
for(let i=0;i<8;i++)setTimeout(float,i*250);
setInterval(float,900);

/* ledakan hati kecil dari titik sentuh */
function burst(x,y,k=6){const r=$('app').getBoundingClientRect();x-=r.left;y-=r.top;for(let i=0;i<k;i++){const e=document.createElement('div'),a=Math.PI*2*i/k+Math.random()*.6,d=45+Math.random()*60;
  e.className='bu';e.textContent=R(E);e.style.cssText=`left:${x}px;top:${y}px;--tx:${Math.cos(a)*d}px;--ty:${Math.sin(a)*d-30}px`;
  $('app').append(e);setTimeout(()=>e.remove(),900)}}
document.addEventListener('pointerdown',e=>{if(!e.target.closest('input,textarea'))burst(e.clientX,e.clientY,5)});

FOTO.forEach((f,i)=>{const p=document.createElement('div');p.className='po';
  p.style.cssText=`--r:${[-6,4,-3][i%3]}deg`;
  p.innerHTML=`<div><span>${['😍','🥰','😘','🥳','💖','🌸'][i%6]}</span><img src="${f}" alt="" onerror="this.remove()"></div>`;$('ph').append(p)});

/* suara */
function tone(f,d=.4,v=.12,t='triangle'){if(!ac)return;const o=ac.createOscillator(),g=ac.createGain(),s=ac.currentTime;
  o.type=t;o.frequency.value=f;g.gain.setValueAtTime(.0001,s);g.gain.exponentialRampToValueAtTime(v,s+.03);
  g.gain.exponentialRampToValueAtTime(.0001,s+d);o.connect(g).connect(ac.destination);o.start(s);o.stop(s+d+.05)}
const M=[523,659,784,659,587,698,880,698,523,659,784,1047,988,784,659,587];
function synth(){if(syn)return;syn=true;let i=0;setInterval(()=>on&&tone(M[i++%M.length],.45),360)}
function music(){try{ac=ac||new(window.AudioContext||window.webkitAudioContext)();ac.resume()}catch(e){}
  on=true;$('mu').hidden=false;A.onerror=synth;A.play().catch(synth)}
$('mu').onclick=()=>{on=!on;on?A.play().catch(()=>{}):A.pause();$('mu').textContent=on?'🔊':'🔇'};

function toast(m){const t=$('ts');t.textContent=m;t.classList.add('on');clearTimeout(tt);tt=setTimeout(()=>t.classList.remove('on'),1200)}
function squish(b){b.classList.remove('sq');void b.offsetWidth;b.classList.add('sq');setTimeout(()=>b.classList.remove('sq'),560)}
function type(t,cb){const el=$('tx'),c=[...t],b=$('b2');clearInterval(ty);el.textContent='';let i=0;b.classList.add('talk');
  ty=setInterval(()=>{el.textContent+=c[i++];if(i%3==0)tone(900+Math.random()*300,.05,.03,'sine');
    if(i>=c.length){clearInterval(ty);b.classList.remove('talk');cb&&cb()}},45)}

/* beruang bisa dicolek */
const POKE=['Eh?! 😳 K-kenapa…? Kok aku dipencet?','Kenapa?! 😠 Jawab. Kenapa kamu pencet aku lagi ihhh sayangg?','UDAH DONG!! 😡 Aku marah yaa!','kau sengaja membuatku marah akan ku ulangi web nya!!😡🤬'];
let pk=0,pt,lock=false;
function poke(e){if(lock)return;const b=e.currentTarget,i=Math.min(pk++,3);
  try{ac=ac||new(window.AudioContext||window.webkitAudioContext)();ac.resume()}catch(x){}
  b.dataset.p=i+1;$('sp').textContent=POKE[i];$('sp').className=i>2?'on r':'on';
  [[[880,.12,.16,'sine'],[1175,.18,.16,'sine']],[[240,.35,.18,'square']],[[180,.45,.2,'sawtooth'],[150,.45,.2,'sawtooth']],[[200,.5,.22,'sawtooth'],[140,.6,.22,'sawtooth'],[90,.8,.25,'sawtooth']]][i]
    .forEach((a,j)=>setTimeout(()=>tone(...a),j*150));
  clearTimeout(pt);
  if(i<3)pt=setTimeout(()=>{delete b.dataset.p;$('sp').classList.remove('on')},2400);
  else{lock=true;$('app').style.pointerEvents='none';A.pause();
    setTimeout(()=>{$('app').style.transition='opacity .5s';$('app').style.opacity=0},3000);
    setTimeout(()=>location.reload(),3600)}}
$('b1').onclick=$('b2').onclick=poke;

/* input nama: geser ke tengah saat keyboard Android muncul */
$('nm').onfocus=()=>setTimeout(()=>$('nm').scrollIntoView({block:'center',behavior:'smooth'}),300);
$('nm').addEventListener('keydown',e=>{if(e.key==='Enter')$('go').click()});

$('go').onclick=()=>{nm=$('nm').value.trim();
  if(!nm){toast('Isi namanya dulu yaa 🥺');squish($('b1'));$('nm').focus();return}
  $('nm').blur();music();lockP();$('s1').classList.remove('on');$('s2').classList.add('on');
  wave($('hi'),`Halo, ${nm}! 🐻💕`);
  type(`${nm}, sayanggg akuu mintaa maaf yaaaahhh🥺. jangann marahhh marahh agiii yaahhh tayangggg, nantii nyaa cepett tuaaaa hhihihhii 😝,jangannn pernahh berhentiii senyumm sayanggggggg,kaloo ndaa happyy beruangnyaa bakall sediii tauuu ☀️💖`,()=>$('q').classList.add('on'))};

/* tombol "ga": ngeles, ganti teks, geser-geser, mengecil, lalu hilang */
$('no').onclick=()=>{const b=$('no');n++;toast(R(OOPS));tone(300,.15,.1,'square');
  b.classList.remove('sh');void b.offsetWidth;b.classList.add('sh');
  b.textContent=NO[Math.min(n,NO.length-1)];
  mood(n<3?'n':n<8?'sad':'cry');
  const s=Math.max(0,1-n/15).toFixed(3),x=n>1?(Math.random()-.5)*110:0,y=n>1?Math.random()*28:0;
  b.style.transform=`translate(${x}px,${y}px) scale(${s})`;
  $('yes').style.transform=`scale(${1+Math.min(n,15)*.012})`;
  if(n>=15){b.disabled=true;setTimeout(()=>{b.style.visibility='hidden';mood('happy');toast('Yah, tombol nda-nya hilang 🥳')},700)}};

$('yes').onclick=()=>{$('q').classList.remove('on');$('ph').classList.add('hop');
  mood('happy');squish($('b2'));wave($('hi'),'Yeayyy yippiiii! 🎉🥳');
  type(`Makasih yaa ${nm} sayanggggggg 💖 yeyyyyyyyy kamuuuuwww happyy agiiiiii, akuuu adaaa pesann sayanggg : kalo kamuu adaa masalahhh haruss ceritaa samaa akuu yahhh kamuu kalo adaa pikirann kasihh tauu akuuu yahh saynggg, kamuuu gaboleee mendemm teruss semuanyaa sayanggggg gaboleee di pendemm yahh cayanggg,kan ada akuuu disiinii sayangggg,kamuuu bebasss ceritaaa semuanyaaa akuu siappp dengerinnnnn hihiiihihihihiiiiii lopyuuu sayangggg,udaaa yahhh tayangggg happyyy agiiii yukkk tayangggggggggg hiiihhhhhhiiiii mwahhhhhhhhh`,()=>{$('fn').value=nm;$('fm').classList.add('on');setTimeout(()=>$('fm').scrollIntoView({behavior:'smooth',block:'center'}),400)});
  for(let i=0;i<45;i++)setTimeout(()=>drop('cf',2.8,20,7000),i*70);
  for(let i=0;i<4;i++)setTimeout(()=>burst($('app').getBoundingClientRect().left+$('app').offsetWidth*(.2+Math.random()*.6),innerHeight*(.25+Math.random()*.3),10),i*350);
  [523,659,784,1047].forEach((f,i)=>setTimeout(()=>tone(f,.3,.15),i*120))};

/* form kirim pesan ke WhatsApp */
['fn','fp'].forEach(i=>$(i).onfocus=()=>setTimeout(()=>$(i).scrollIntoView({block:'center',behavior:'smooth'}),300));
$('wa').onclick=()=>{const n=$('fn').value.trim(),m=$('fp').value.trim();
  if(!n||!m){toast('isi namaaa & pesannya duluu sayanggg 🥺');return}
  const u=`https://wa.me/${WA}?text=`+encodeURIComponent(`Halo, aku ${n} 🐻\n\n${m}`);
  window.open(u,'_blank')||(location.href=u)};
