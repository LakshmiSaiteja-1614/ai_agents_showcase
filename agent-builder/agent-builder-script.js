const name=document.getElementById("name"),previewName=document.getElementById("previewName");
name.addEventListener("input",()=>previewName.textContent=name.value||"Your Agent");
document.getElementById("form").addEventListener("submit",e=>{e.preventDefault();alert((name.value||"Agent")+" has been created successfully.");});
