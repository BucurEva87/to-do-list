export default {
  createElement: (obj) => {
    let element;

    if (obj.tagName && ['svg', 'use'].includes(obj.tagName.toLowerCase())) {
      element = document.createElementNS('http://www.w3.org/2000/svg', obj.tagName);
      if (obj.tagName.toLowerCase() === 'use' && obj.src) {
        element.setAttributeNS('http://www.w3.org/1999/xlink', 'xlink:href', obj.src);
      }
    } else {
      element = document.createElement(obj.tagName ? obj.tagName : 'div');
    }

    delete obj.tagName;

    // Itterate through each property of the obj and set it as a
    // property of the element
    Object.entries(obj).forEach(([prop, value]) => {
      // Property is a class or a collection of classes
      if (prop === 'class') {
        if (typeof value === 'object' && value !== null) {
          element.classList.add(...value.filter((v) => v));
        } else if (value) {
          element.classList.add(value);
        }
      } else if (prop === 'data' && typeof value === 'object') {
        Object.entries(value).forEach(([prop, value]) => {
          element.dataset[prop] = value;
        });
      } else if (typeof value === 'boolean') {
        element.setAttribute(prop, value);
      } else {
        element[prop] = value;
      }
    });

    return element;
  },

  qs: (selector = '*', element = document) => element.querySelector(selector),

  qsa: (selector = '*', element = document) => [...element.querySelectorAll(selector)],
};
