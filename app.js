// Sélection des éléments
const input = document.getElementById('task-input');
const addBtn = document.getElementById('add-btn');
const taskList = document.getElementById('task-list');
const filterButtons = document.querySelectorAll('.filters button');

// feature/add-task
addBtn.addEventListener('click', () => {
  const taskText = input.value.trim();
  if (taskText !== '') {
    const li = document.createElement('li');

    const span = document.createElement('span');
    span.textContent = taskText;

    const completeBtn = document.createElement('button');
    completeBtn.textContent = '✔️';
    completeBtn.classList.add('complete-btn');

    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = '🗑️';
    deleteBtn.classList.add('delete-btn');

    li.append(span, completeBtn, deleteBtn);
    taskList.appendChild(li);
    input.value = '';
  }
});

// feature/delete-task
taskList.addEventListener('click', (e) => {
  if (e.target.classList.contains('delete-btn')) {
    const li = e.target.parentElement;
    li.remove();
  }
});

// feature/complete-task
taskList.addEventListener('click', (e) => {
  if (e.target.classList.contains('complete-btn')) {
    const li = e.target.parentElement;
    li.classList.toggle('completed');
  }
});

// feature/filter-tasks
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
});
