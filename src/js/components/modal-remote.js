import teleport from './teleport';

class ModalRemote {
  constructor(selector) {
    this.selector = selector || '[data-behavior="remote"]';
    this.toggles = document.querySelectorAll(this.selector) || false;

    this.init();
  }

  init() {
    for (var i = this.toggles.length - 1; i >= 0; i--) {
      let toggle = this.toggles[i];
      toggle.addEventListener('click', event => this.loadModal(event));
    }
  }

  loadModal(event) {
    let trigger = event.currentTarget;
    let url = trigger.getAttribute('data-url') || trigger.getAttribute('href') || false;
    let target = trigger.getAttribute('data-target') || false;
    let targetNode = document.querySelector(target);

    if (url && target) {
      event.preventDefault();

      teleport.document({
        url: url,
        source: 'body',
        target: targetNode.querySelector('.modal-body')
      });
    }
  }
}

module.exports = ModalRemote;