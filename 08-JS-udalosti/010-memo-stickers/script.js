const input = document.getElementById("memoText");
input.addEventListener("keyup",function(e){
  if (e.key === "Enter")
    storeMemo();
});
document.getElementById("storeBtn").addEventListener("click", storeMemo);

function storeMemo() {
  let text = input.value;
  input.value = "";
  input.focus();
  
  if (text === "") return;
  
  let memoDiv = document.createElement("div");
  memoDiv.className = "memo";
  memoDiv.innerText = text;
  
  document.getElementById("memoArea").prepend(memoDiv);
}