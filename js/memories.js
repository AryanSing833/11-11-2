let archiveData = null;
const categoryNames = ["The Beginning","The Tamatar Archives","Soft Corner","Late Night Chronicles","Certified Idiots","The Roast Factory","Daily Dose of Chaos","November Chapters","Recent Chapters"];
async function loadMemories(){if(!archiveData){const r=await fetch("data/chat-memories.json");archiveData=await r.json()}return archiveData.memories}
function dateLabel(d){return new Date(d+"T12:00:00").toLocaleDateString("en-IN",{day:"2-digit",month:"long",year:"numeric"})}
async function initMuseum(){
 const all=await loadMemories(); const tabs=document.getElementById("museumTabs"); const present=categoryNames.filter(c=>all.some(m=>m.category===c));
 tabs.innerHTML=present.map((c,i)=>`<button class="${i===0?'active':''}" data-cat="${c}">${c}</button>`).join("");
 let current=present[0],shown=null;
 function render(m){shown=m;document.getElementById("chatCategory").textContent=m.category;document.getElementById("chatTitle").textContent=m.title;document.getElementById("chatDate").textContent=dateLabel(m.date)+" · "+m.time;
  document.getElementById("chatMessages").innerHTML=m.messages.map(([who,body])=>`<div class="bubble ${who==='Aryan'?'me':''}"><span class="speaker">${who==='Aryan'?'ARYAN':'TAMATAR'}</span>${escapeHTML(body)}</div>`).join("");
  document.getElementById("chatCount").textContent="EXHIBIT "+(all.indexOf(m)+1).toString().padStart(2,"0")+" / "+all.length;
 }
 tabs.querySelectorAll("button").forEach(b=>b.addEventListener("click",()=>{current=b.dataset.cat;tabs.querySelectorAll("button").forEach(x=>x.classList.toggle("active",x===b));const choices=all.filter(m=>m.category===current);render(choices[Math.floor(Math.random()*choices.length)])}));
 document.getElementById("anotherChat").addEventListener("click",()=>{let choices=all.filter(m=>m.category===current&&m!==shown);if(!choices.length)choices=all.filter(m=>m.category===current);render(choices[Math.floor(Math.random()*choices.length)])});
 render(all.find(m=>m.category===current));
}
function escapeHTML(s){return String(s).replace(/[&<>"']/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[c]))}
async function pickRandomMemory(){const all=await loadMemories();return all[Math.floor(Math.random()*all.length)]}
