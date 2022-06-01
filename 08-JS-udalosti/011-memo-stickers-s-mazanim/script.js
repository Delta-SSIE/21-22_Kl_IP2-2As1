document.getElementById("memoText").addEventListener(
  "keydown",
  typedText
);

document.getElementById("storeBtn").addEventListener(
  "click",
  createMemo
);

document.getElementById("deleteAll").addEventListener(
  "click",
  deleteAll
);


function createMemo(){
  //najdi text
  const memoInput = document.getElementById("memoText");
  const text = memoInput.value;
  if (text === "")
    return;
  memoInput.value = "";
  memoInput.focus();
  //vytvoř k němu div.memo
  const memo = document.createElement("div");
  memo.className = "memo";
  memo.innerText = text;
  memo.addEventListener(
    "click",
    function(){
      this.remove();
    }
  );

  document.getElementById("memoArea").prepend(memo);
}

function deleteAll() {
  document.getElementById("memoArea").innerHTML = "";
}

function typedText(event) {
  if (event.key === "Enter") {
    createMemo();
  }
}