import utils from './utils.js';
import LocalStorage from './localStorage.js';

export default class Tasks {
  tasks = [];

  constructor() {
    LocalStorage.init();
    const tasks = LocalStorage.read();
    tasks.sort((a, b) => a.index - b.index).forEach((t) => this.addTask(t));
    this.tasks = tasks;
  }

  addTask(task) {
    this.tasks.push(task);

    const li = utils.createElement({
      tagName: 'li',
      class: 'task',
      data: { tabIndex: task.index },
    });
    const button = utils.createElement({
      tagName: 'button',
      class: task.completed ? 'pressed' : null,
    });
    let svg = utils.createElement({
      tagName: 'svg',
      class: 'checkbox',
    });
    svg.appendChild(
      utils.createElement({
        tagName: 'use',
        src: '../public/assets/img/icons.svg#icon-check',
      }),
    );
    button.appendChild(svg);
    li.appendChild(button);
    li.appendChild(
      utils.createElement({
        tagName: 'p',
        contenteditable: true,
        textContent: task.description,
      }),
    );
    let a = utils.createElement({
      tagName: 'a',
      href: '#',
      class: ['trash-icon', 'hidden'],
    });
    svg = utils.createElement({
      tagName: 'svg',
      class: 'checkbox',
    });
    svg.appendChild(
      utils.createElement({
        tagName: 'use',
        src: '../public/assets/img/icons.svg#icon-trash',
      }),
    );
    a.appendChild(svg);
    li.appendChild(a);
    a = utils.createElement({
      tagName: 'a',
      href: '#',
    });
    svg = utils.createElement({
      tagName: 'svg',
      class: ['checkbox', 'drag-anchor'],
    });
    svg.appendChild(
      utils.createElement({
        tagName: 'use',
        src: '../public/assets/img/icons.svg#icon-more-vert',
      }),
    );
    a.appendChild(svg);
    li.appendChild(a);
    utils.qs('.listContainer ul').appendChild(li);

    utils.qs('#refresh').dataset.items = utils.qsa('.task').length;

    LocalStorage.store(this.tasks);
  }

  remove(index) {
    const taskIndex = this.tasks.findIndex((t) => t.index === index);

    this.tasks.splice(taskIndex, 1);

    const badge = utils.qs('#refresh');
    const tasks = utils.qsa('.task').length;

    if (tasks) {
      badge.dataset.items = utils.qsa('.task').length;
    } else {
      delete badge.dataset.items;
    }

    this.tasks.forEach((task, index) => {
      task.index = index + 1;
    });

    LocalStorage.store(this.tasks);
  }

  update(index, property, newValue) {
    const task = this.tasks.find((t) => t.index === index);

    if (property === 'completed') {
      task.completed = !task.completed;
    } else {
      task[property] = newValue;
    }

    LocalStorage.store(this.tasks);
  }
}
