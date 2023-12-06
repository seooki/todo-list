const onchange = document.querySelector(".text--input");
const submitBtn = document.querySelector(".submit--input");
const todoBoard = document.querySelector(".todoBoard");
const todoList = document.querySelector(".todoBoard ul");

let textValue;

onchange.addEventListener("input", (e) => {
  textValue = e.target.value;
});

submitBtn.addEventListener("click", () => {
  if (textValue == undefined || textValue == "") {
    alert("공백은 입력할 수 없습니다.");
    return;
  }

  const rmvBtn = document.createElement("button");
  const li = document.createElement("li");

  li.innerText = textValue;
  rmvBtn.innerText = "삭제";
  rmvBtn.classList = "remove--Btn";
  todoList.appendChild(li);
  li.appendChild(rmvBtn);

  rmvBtn.addEventListener("click", (e) => {
    const obj = e.target;
    obj.parentElement.remove();
  });

  textValue = "";
  onchange.value = "";
});
