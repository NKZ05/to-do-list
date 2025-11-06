// feature/complete-task
taskList.addEventListener('click', (e) => {
    if (e.target.classList.contains('complete-btn')) {
      const li = e.target.parentElement;
      li.classList.toggle('completed');
    }
  });
// feature/filter-tasks
const filterButtons = document.querySelectorAll('.filters button');

filterButtons.forEach(btn => {
  btn.addEventListener('click', () => {
    // Activer le bouton sélectionné
    filterButtons.forEach(b => b.classList.remove('active'));
    btn.classList.add('active');

    const filter = btn.dataset.filter;
    const tasks = document.querySelectorAll('#task-list li');

    tasks.forEach(task => {
      switch (filter) {
        case 'all':
          task.style.display = 'flex';
          break;
        case 'active':
          task.style.display = task.classList.contains('completed') ? 'none' : 'flex';
          break;
        case 'completed':
          task.style.display = task.classList.contains('completed') ? 'flex' : 'none';
          break;
      }
    });
  });
// feature/delete-task
taskList.addEventListener('click', (e) => {
  if (e.target.classList.contains('delete-btn')) {
    const li = e.target.parentElement;
    li.remove();
const input = document.getElementById('task-input');
const addBtn = document.getElementById('add-btn');
const taskList = document.getElementById('task-list');

addBtn.addEventListener('click', () => {
  const taskText = input.value.trim();
  if (taskText !== '') {
    const li = document.createElement('li');
    li.textContent = taskText;
    taskList.appendChild(li);
    input.value = '';
  }
});
