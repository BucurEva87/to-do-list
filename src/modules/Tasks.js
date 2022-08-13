import utils from './utils.js';

const readTask = () => {
  return JSON.parse(localStorage.getItem('tasks')) ?? [];
};

export const tasks = readTask();
const container = utils.qs('.listContainer');

export class Task {
  constructor(task) {
    addTask(task);
    storeTask();
  }
}

export const addTask = (task, completed = false) => {
  const li = utils.createElement({
    tagName: 'li',
    class: 'task',
  });

  li.appendChild(
    utils.createElement({
      tagName: 'input',
      type: 'checkbox',
      checked: completed,
    })
  );
  li.appendChild(
    utils.createElement({
      tagName: 'p',
      contenteditable: true,
      textContent: task,
    })
  );
  const a = utils.createElement({ tagName: 'a' });
  a.appendChild(
    utils.createElement({
      tagName: 'object',
      data: './img/three_dots.svg',
    })
  );
  li.appendChild(a);
  container.appendChild(li);

  tasks.push({
    task,
    completed: false,
  });
};

export const storeTask = () => {
  localStorage.setItem('tasks', JSON.stringify(tasks));
};

export const readTasks = () => {
  return JSON.parse(localStorage.getItem('tasks')) ?? [];
};

export const displayTasks = () => {
  tasks.forEach((task) => {
    new Task(task.task, task.completed);
  });
};
