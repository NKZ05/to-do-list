// feature/complete-task
taskList.addEventListener('click', (e) => {
    if (e.target.classList.contains('complete-btn')) {
      const li = e.target.parentElement;
      li.classList.toggle('completed');
    }
  });