import Tasks from '../src/modules/Tasks.js';
import utils from '../src/modules/utils.js';

/* eslint-disable no-unused-vars */
const { default: JSDOMEnvironment } = require('jest-environment-jsdom');
/* eslint-enable no-unused-vars */
/**
 * @jest-environment jsdom
 */

document.body.innerHTML = `<div class="listContainer">
<ul>
  <li id="listName">
    <p>Today's TODO list</p>
    <a id="refresh" href="#">
      <svg>
        <use
          xlink:href="../public/assets/img/icons.svg#icon-refresh"
        ></use>
      </svg>
    </a>
  </li>
  <li id="addNewTask">
    <p contenteditable data-placeholder="Add a task to your list..."></p>
    <a href="#">
      <object data="../public/assets/img/return_icon.png"></object>
    </a>
  </li>
</ul>
<button id="footer" type="button">Clear all selected</button>
</div>`;

describe('Tasks class', () => {
  const tasks = new Tasks();

  test('addTask method adds a task to the tasks property of the Tasks class', () => {
    tasks.addTask({
      description: 'Dummy task',
      completed: false,
      index: 5,
    });

    expect(tasks.tasks).toHaveLength(1);
  });

  test('addTask method adds a task to the DOM list element', () => {
    expect(utils.qsa('ul li.task')).toHaveLength(1);
  });

  test('addTask method adds a task to the LocalStorage', () => {
    expect(JSON.parse(localStorage.getItem('tasks'))).toHaveLength(1);
  });

  test('remove method removes a task when being given an index', () => {
    tasks.remove(1);

    expect(tasks.tasks).toHaveLength(0);
  });

  test('remove method removes a task from the LocalStorage', () => {
    expect(JSON.parse(localStorage.getItem('tasks'))).toHaveLength(0);
  });
});
