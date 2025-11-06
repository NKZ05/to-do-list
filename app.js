// feature/delete-task
taskList.addEventListener('click', (e) => {
  if (e.target.classList.contains('delete-btn')) {
    const li = e.target.parentElement;
    li.remove();
  }
});