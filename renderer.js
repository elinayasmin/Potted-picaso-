// 1. Live Clock & Date
function pad(n){ return n<10 ? '0'+n : n; }

function updateTime() {
  const now = new Date();
  const timeStr = [now.getHours(), now.getMinutes(), now.getSeconds()]
                    .map(pad).join(':');
  document.getElementById('clock').textContent = timeStr;

  const day   = pad(now.getDate());
  const mon   = pad(now.getMonth()+1);
  const year  = now.getFullYear();
  document.getElementById('date').textContent = `${day}/${mon}/${year}`;
}

setInterval(updateTime, 500);
updateTime();

// 2. Task CRUD + Completion Message
const taskList = document.getElementById('task-list');
const newTask  = document.getElementById('new-task');
const addBtn   = document.getElementById('add-btn');

addBtn.addEventListener('click', () => {
  const text = newTask.value.trim();
  if (!text) return;
  const li = document.createElement('li');
  li.textContent = text;

  const btn = document.createElement('button');
  btn.textContent = '✔';
  btn.classList.add('complete-btn');
  btn.onclick = () => {
    li.remove();
    alert('Good job buddy!!!');
  };

  li.appendChild(btn);
  taskList.appendChild(li);
  newTask.value = '';
});
