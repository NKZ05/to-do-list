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
});