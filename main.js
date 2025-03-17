const addBtn = document.querySelector(".fa-plus"); // 추가버튼
const input = document.querySelector(".footer_input"); // input 요소
const items = document.querySelector(".items"); // ul
const date = document.querySelector(".date");
let tasks = [];

// 해당 날자 리스트만 렌더링
function renderTasksByDate(selectedDate) {
  items.innerHTML = "";

  const filteredTasks = tasks.filter((task) => task.date === selectedDate);

  filteredTasks.forEach((task) => {
    const itemRow = document.createElement("li");
    if (task.checked) {
      itemRow.className = "item item_done";
    } else {
      itemRow.className = "item";
    }
    itemRow.innerHTML = `<span>${task.text}</span>
          <i class="fa-solid fa-check"></i>
          <i class="fa-solid fa-pencil"></i>
          <i class="fa-solid fa-trash-can"></i>`;

    // 체크버튼 클릭 시 클래스 추가 이벤트
    const span = itemRow.querySelector("span");
    itemRow.querySelector(".fa-check").addEventListener("click", () => {
      tasks.forEach((t) => {
        if (t.id === task.id)
          t.checked ? (t.checked = false) : (t.checked = true);
      });
      renderTasksByDate(selectedDate);
    });
    // 수정버튼 클릭 시 수정 가능
    itemRow.querySelector(".fa-pencil").addEventListener("click", () => {
      const input = document.createElement("input");
      input.type = "text";
      input.value = span.textContent;

      span.replaceWith(input);
      input.focus();

      input.addEventListener("keyup", (e) => e.key === "Enter" && input.blur());
      input.addEventListener("blur", () => {
        tasks.forEach((t) => {
          if (t.id === task.id) t.text = input.value.trim() || "빈 할 일";
        });
        renderTasksByDate(selectedDate);
      });
    });
    // 삭제버튼 클릭 시 itemRow 제거 이벤트
    itemRow.querySelector(".fa-trash-can").addEventListener("click", () => {
      tasks = tasks.filter((t) => t !== task);
      renderTasksByDate(selectedDate);
    });

    items.appendChild(itemRow);

    // setTimeout(() => itemRow.scrollIntoView({ block: 'center' }), 0);
    requestAnimationFrame(() => {
      itemRow.scrollIntoView({ block: "center" });
    });
  });
}

// 추가함수
function onAdd() {
  const text = input.value.trim();
  if (!text) {
    input.value = "";
    input.focus();
    return;
  }

  const task = { id: Date.now(), text: text, date: date.value, checked: false };
  tasks.push(task);

  // li를 생성하는 함수 - createItem(text)
  // ul에 생성값을 추가함

  // items.appendChild(createItem(text));
  input.value = "";
  input.focus();

  renderTasksByDate(date.value);
}

date.value = new Date().toISOString().substring(0, 10);
renderTasksByDate(date.value);
date.addEventListener("change", (e) => renderTasksByDate(e.target.value));

// 이벤트 등록
addBtn.addEventListener("click", onAdd);
// input.addEventListener('keypress', (e) => {
//   if (e.key === 'Enter') {
//     onAdd();
//   }
// });

input.addEventListener("keyup", (e) => e.key === "Enter" && onAdd());
