const $=id=>document.getElementById(id);
$('frame').innerHTML='<div class="ph"></div>';
// story rail
const rail=$('rail');
for(let i=0;i<6;i++){const f=document.createElement('figure');f.className='slide';f.innerHTML='<div class="ph"></div>';rail.appendChild(f)}
const step=()=>rail.firstChild.offsetWidth+22;
const go=d=>{const end=rail.scrollLeft+rail.clientWidth>=rail.scrollWidth-8;
rail.scrollTo({left:d>0&&end?0:rail.scrollLeft+d*step(),behavior:'smooth'})};
$('prev').onclick=()=>go(-1);$('next').onclick=()=>go(1);
let t=setInterval(()=>go(1),4000);
['mouseenter','touchstart','focusin'].forEach(e=>rail.addEventListener(e,()=>clearInterval(t),{passive:true}));
if(matchMedia('(prefers-reduced-motion:reduce)').matches){clearInterval(t)}
