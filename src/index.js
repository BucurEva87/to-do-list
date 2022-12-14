import utils from './modules/utils.js';
import Tasks from './modules/Tasks.js';
import './index.css';

const tasks = new Tasks();

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
  tasks.update(index, 'completed');
});

// Adding a new task
const createNewTask = (target) => {
  tasks.addTask({
    description: target.textContent,
    completed: false,
    index: tasks.tasks.length,
  });
  target.textContent = '';
  target.blur();
};

addTask.addEventListener('keyup', (e) => {
  const keyCode = e.which || e.keyCode;

  if (keyCode === 13) {
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
deleteButton.addEventListener('click', () => {
  utils.qsa('button.pressed').forEach((b) => b.closest('li.task').remove());

  tasks.tasks.filter((t) => t.completed).forEach((t) => tasks.remove(t.index));
});

// Apperently we DO have a problem with WebKit browsers when it comes to contenteditable elements
// receiving focus when the mouse is clicked on the same line the element is, but not on the element
// itself
list.addEventListener('click', (e) => {
  const { target } = e;

  if (target.tagName !== 'P' || !target.closest('li.task') || !target.contentEditable) {
    return;
  }

  target.contentEditable = true;
  target.focus();
});
list.addEventListener(
  'blur',
  (e) => {
    const { target } = e;

    if (target.tagName !== 'P' || !target.closest('li.task') || !target.contentEditable) {
      return;
    }

    target.contentEditable = false;
  },
  true,
);

// Rename a task
list.addEventListener('keypress', (e) => {
  const keyCode = e.which || e.keyCode;
  const { target } = e;
  const li = target.closest('li.task');

  if (!target.contentEditable || !li) return;

  if (keyCode === 13) {
    const index = +li.dataset.tabIndex;
    tasks.update(index, 'description', target.textContent);
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
