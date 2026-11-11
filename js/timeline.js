async function initTimeline(){
 const r=await fetch("data/timeline.json");const items=await r.json();const root=document.getElementById("timeline");
 root.innerHTML=items.map((x,i)=>`<article class="timeline-item"><div class="timeline-date">${x.date} · CHAPTER ${String(i+1).padStart(2,"0")}</div><h3>${x.title}</h3><p>${x.description}</p><button data-memory="${x.memoryId}">Open this memory ↗</button></article>`).join("");
 root.querySelectorAll("button").forEach(b=>b.addEventListener("click",async()=>{const all=await loadMemories();const m=all.find(x=>x.id===b.dataset.memory);document.querySelector("#museum").scrollIntoView({behavior:"smooth"});setTimeout(()=>{const tab=[...document.querySelectorAll(".museum-tabs button")].find(t=>t.dataset.cat===m.category);if(tab)tab.click();},500)}));
}
