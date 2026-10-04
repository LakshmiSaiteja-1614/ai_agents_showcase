function approve(button){const card=button.closest(".request");card.classList.add("done");card.querySelector(".actions").innerHTML='<span style="color:#159957;font-weight:bold">✓ Approved</span>';}
function reject(button){const card=button.closest(".request");card.classList.add("done");card.querySelector(".actions").innerHTML='<span style="color:#d64545;font-weight:bold">✕ Rejected</span>';}
function filterRequests(){alert("Showing all approval requests.");}
