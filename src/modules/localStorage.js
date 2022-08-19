export default class LocalStorage {
  static tasks = [];

  static init() {
    const tasks = JSON.parse(localStorage.getItem('tasks'));

    if (tasks) {
      tasks.forEach((task) => {
        this.tasks.push(task);
      });
    }
  }

  static read() {
    return this.tasks;
  }

  static store(tasks) {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }
}
