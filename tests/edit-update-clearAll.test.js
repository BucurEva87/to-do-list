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
  [
    { description: 'Dummy task 1', completed: false, index: 1 },
    { description: 'Dummy task 2', completed: false, index: 2 },
    { description: 'Dummy task 3', completed: false, index: 3 },
    { description: 'Dummy task 4', completed: false, index: 4 },
  ].forEach((t) => tasks.addTask(t));

  test('update method correctly updates the completed property in the Tasks array', () => {
    tasks.update(2, 'completed');

    expect(tasks.tasks[1].completed).toBe(true);
  });
  test('update method correctly updates the completed property in the LocalStorage', () => {
    tasks.update(4, 'completed');

    expect(JSON.parse(localStorage.getItem('tasks')).find((t) => t.index === 4).completed).toBe(
      true,
    );
  });

  test('update method correctly updates the description property in the Tasks array', () => {
    tasks.update(3, 'description', "This is not a dummy task any more. It's special!");

    expect(tasks.tasks[2].description).toBe("This is not a dummy task any more. It's special!");
  });
  test('update method correctly updates the description property in the LocalStorage', () => {
    tasks.update(1, 'description', 'This is a special task now too');

    expect(JSON.parse(localStorage.getItem('tasks')).find((t) => t.index === 1).description).toBe(
      'This is a special task now too',
    );
  });

  test('when the clearAll button triggers the click event all the tasks are removed from the Tasks array', () => {
    utils
      .qsa('li.task')
      .reverse()
      .forEach((t) => {
        const index = +t.dataset.tabIndex;
        const task = tasks.tasks.find((item) => item.index === index);

        if (task.completed) {
          tasks.remove(index);
          t.remove();
        }
      });

    expect(tasks.tasks).toHaveLength(2);
  });

  test('when the clearAll button triggers the click event all the tasks are removed from the DOM elemen', () => {
    expect(utils.qsa('ul li.task')).toHaveLength(tasks.tasks.length);
  });

  test('when the clearAll button triggers the click event all the tasks are removed from the LocalStorage', () => {
    expect(JSON.parse(localStorage.getItem('tasks'))).toHaveLength(tasks.tasks.length);
  });
});
