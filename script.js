Scri// SMOOTH SCROLL
document.querySelectorAll('a[href^="#"]').forEach(anchor=>{
anchor.addEventListener("click",function(e){
e.preventDefault();
const target=document.querySelector(this.getAttribute("href"));
if(target){
target.scrollIntoView({behavior:"smooth"});
}
});
});

// SCROLL REVEAL
const reveals=document.querySelectorAll(".glass");

function reveal(){
reveals.forEach(el=>{
const top=el.getBoundingClientRect().top;
if(top<window.innerHeight-100){
el.classList.add("active");
}
});
}
window.addEventListener("scroll",reveal);
window.addEventListener("load",reveal);

// NAV ACTIVE LINK
const sections=document.querySelectorAll("section");
const navLinks=document.querySelectorAll(".nav-links a");

window.addEventListener("scroll",()=>{
let current="";
sections.forEach(sec=>{
const sectionTop=sec.offsetTop-150;
if(window.scrollY>=sectionTop){
current=sec.getAttribute("id");
}
});

navLinks.forEach(a=>{
a.classList.remove("active");
if(a.getAttribute("href")==="#"+current){
a.classList.add("active");
}
});
});

// CONTACT FORM SEND DEMO
const form=document.getElementById("contactForm");
const msg=document.getElementById("successMsg");

if(form){
form.addEventListener("submit",function(e){
e.preventDefault();

msg.textContent="✅ Message Sent Successfully!";
msg.style.color="#38bdf8";

setTimeout(()=>{
msg.textContent="";
},3000);

form.reset();
});
}
// HERO BUTTON SCROLL FUNCTION
function scrollToProjects(){
document.getElementById("projects")
.scrollIntoView({behavior:"smooth"});
}

