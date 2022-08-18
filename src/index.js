import utils from './modules/utils.js';
import Tasks from './modules/Tasks.js';
import taskObjects from './modules/taskObjects.js';
import './index.css';

const tasks = new Tasks(taskObjects);

const list = utils.qs('.listContainer ul');
const addTask = utils.qs('#addNewTask');
const addTaskIcon = utils.qs('#addNewTask object');
const deleteButton = utils.qs('#footer');

// Completing tasks
list.addEventListener('click', (e) => {
  const button = e.target.closest('button');

  if (!button) return;

  button.classList.toggle('pressed');

  const index = +button.parentElement.dataset.tabIndex;
  const task = tasks.tasks.find((t) => t.index === index);
  task.completed = !task.completed;
});

// Adding a new task
const createNewTask = (target) => {
  const task = {
    description: target.textContent,
    completed: false,
    index: Math.max(...tasks.tasks.map((t) => t.index)) + 1,
  };
  tasks.addTask(task);
  target.textContent = '';
  target.blur();
};

addTask.addEventListener('keyup', (e) => {
  const keyCode = e.which || e.keyCode;

  if (keyCode == 13) {
    createNewTask(e.target);
  }
});
addTaskIcon.addEventListener('click', (e) => {
  e.preventDefault();

  const p = e.target.parentElement.previousElementSibling;

  if (!p.textContent) return;

  createNewTask(p);
});

// Show/hide trash icon when a task is focused
list.addEventListener('click', (e) => {
  const { target } = e;

  if (target.tagName !== 'P' || !target.closest('li.task')) return;

  utils.qs('.trash-icon', target.parentElement).classList.remove('hidden');
  utils.qs('a:last-child', target.parentElement).classList.add('hidden');
  target.closest('li.task').classList.add('focused');
});
utils.qsa('li.task p').forEach((p) => {
  p.addEventListener('blur', (e) => {
    e.preventDefault();

    const { target } = e;

    if (target.tagName !== 'P' || !target.closest('li.task')) return;

    target.closest('li.task').classList.remove('focused');
    setTimeout(() => {
      utils.qs('.trash-icon', target.parentElement).classList.add('hidden');
      utils.qs('a:last-child', target.parentElement).classList.remove('hidden');
    }, 100);
  });
});

// Delete a single task
list.addEventListener('click', (e) => {
  e.preventDefault();

  const { target } = e;

  if (!target.closest('a')?.classList.contains('trash-icon')) return;

  const li = target.closest('li.task');

  li.remove();
  tasks.remove(+li.dataset.tabIndex);
});

// Delete all selected tasks
deleteButton.addEventListener('click', (e) => {
  utils.qsa('button.pressed').forEach((b) => {
    const li = b.closest('li.task');

    li.remove();
    tasks.remove(+li.dataset.tabIndex);
  });
});

// Apperently we DO have a problem with WebKit browsers when it comes to contenteditable elements
// receiving focus when the mouse is clicked on the same line the element is, but not on the element itself
list.addEventListener('click', (e) => {
  // I'm getting bored of setting the same event over and over again
  const { target } = e;

  if (
    target.tagName !== 'P' ||
    !target.closest('li.task') ||
    !target.contentEditable
  )
    return;

  target.contentEditable = true;
  target.focus();
});
list.addEventListener(
  'blur',
  (e) => {
    const { target } = e;

    if (
      target.tagName !== 'P' ||
      !target.closest('li.task') ||
      !target.contentEditable
    )
      return;

    target.contentEditable = false;
  },
  true
);

// Rename a task
list.addEventListener('keypress', (e) => {
  const keyCode = e.which || e.keyCode;
  const { target } = e;

  if (!target.contentEditable) return;

  if (keyCode == 13) {
    const li = target.closest('li.task');
    const index = +li.dataset.tabIndex;
    const task = tasks.tasks.find((t) => t.index === index);
    task.description = target.textContent;
    li.classList.remove('focused');
    target.blur();
  }
});

// Delete all tasks when clicking the refresh arrows
utils.qs('#refresh').addEventListener('click', (e) => {
  e.target.closest('a').classList.add('focus');
});

utils.qs('#refresh').addEventListener('animationend', (e) => {
  e.target.closest('a').classList.remove('focus');

  utils.qsa('li.task', list).forEach((li) => {
    li.remove();
    tasks.remove(li.dataset.tabIndex);
  });
});

// Drag and drop
