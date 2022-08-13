import utils from './modules/utils.js';
import { Task, displayTasks } from './modules/Tasks.js';

displayTasks();

const newTask = utils.qs('#addNewTask p');

newTask.addEventListener('click', (e) => {
  e.target.textContent = '';
});

newTask.addEventListener('blur', (e) => {
  e.target.textContent = 'Add a task to your list...';
});

newTask.addEventListener('keyup', (e) => {
  const keyCode = e.which || e.keyCode;

  if (keyCode == 13) {
    new Task(newTask.textContent);
    newTask.textContent = 'Add a task to your list...';
    utils.qs('.task:last-child').scrollIntoView();
  }
});
