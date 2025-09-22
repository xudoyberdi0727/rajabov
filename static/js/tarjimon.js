const aboutText=document.getElementById('aboutText');
const aboutImage=document.getElementById('aboutImage');
const goalsContent=document.getElementById('goalsContent');

const observer=new IntersectionObserver((entries)=>{
  entries.forEach(entry=>{
    if(entry.isIntersecting){entry.target.classList.add('show');}
  });
},{threshold:0.3});
observer.observe(aboutText);
observer.observe(aboutImage);
observer.observe(goalsContent);

/* ---- Projects auto scroll ---- */
const projectContainer=document.getElementById('projectContainer');
let scrollX=0,dir=1,paused=false;
function animateProjects(){
  if(!paused){
    scrollX+=dir;
    if(scrollX>300||scrollX<0)dir*=-1;
    projectContainer.style.transform=`translateX(-${scrollX}px)`;
  }
  requestAnimationFrame(animateProjects);
}
projectContainer.addEventListener('mouseover',()=>paused=true);
projectContainer.addEventListener('mouseout',()=>paused=false);
animateProjects();

/* ---- Parallax goals bg ---- */
const goalsBg=document.getElementById('goalsBg');
window.addEventListener('scroll',()=>{
  const rect=document.getElementById('goals').getBoundingClientRect();
  if(rect.top<window.innerHeight && rect.bottom>0){
    const scrollPct=(window.innerHeight-rect.top)/(window.innerHeight+rect.height);
    const y=scrollPct*100;
    goalsBg.style.transform=`translateY(${y}px) scale(1.1)`;
  }
});