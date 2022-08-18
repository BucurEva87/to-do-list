import utils from './utils.js';

export default class Tasks {
  tasks = [];

  constructor(tasks) {
    tasks?.sort((a, b) => a.index - b.index).forEach((t) => this.addTask(t));
  }

  addTask(task) {
    this.tasks.push(task);
    this.appendToList(task);
  }

  appendToList(task) {
    const li = utils.createElement({
      tagName: 'li',
      class: 'task',
      draggable: true,
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
        src: '../public/img/icons.svg#icon-check',
      })
    );
    button.appendChild(svg);
    li.appendChild(button);
    li.appendChild(
      utils.createElement({
        tagName: 'p',
        contenteditable: true,
        textContent: task.description,
      })
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
        src: '../public/img/icons.svg#icon-trash',
      })
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
        src: '../public//img/icons.svg#icon-more-vert',
      })
    );
    a.appendChild(svg);
    li.appendChild(a);
    utils.qs('.listContainer ul').appendChild(li);

    utils.qs('#refresh').dataset.items = utils.qsa('.task').length;
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
  }
}
