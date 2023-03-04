import $morph from '../utils/morph';
import $retrieve from '../utils/retrieve';

let selector = {
  menu: '[data-component="menu"]',
  toggle: '[data-toggle="menu"]',
  target: 'data-target',
}

class Menu {
  constructor(options = false) {
    selector = {
      menu: options.menu || selector.menu,
      toggle: options.toggle || selector.toggle,
      target: options.target || selector.target
    };

    // Assign Listeners
    this.toggles = document.querySelectorAll(selector.toggle);
    for (var i = this.toggles.length - 1; i >= 0; i--) {
      let toggle = this.toggles[i];
      toggle.addEventListener('click', event => this.toggleClick(event));
    }
  }

  toggleClick(event) {
    let target = event.currentTarget.getAttribute(selector.target);
    this.toggle(target);
  }

  open(menu) {
    menu = $retrieve(menu);

    $morph(menu,false,() => {
      menu.setAttribute('aria-expanded', true);
      menu.hidden = false;
    })
  }

  close(menu) {
    menu = $retrieve(menu);
    menu.setAttribute('aria-expanded', false);
    menu.hidden = true;
  }

  toggle(menu) {
    menu = $retrieve(menu);
    let expanded = menu.getAttribute('aria-expanded') === 'true' || false;
    console.log(expanded);

    expanded ? this.close(menu) : this.open(menu);
  }
}

module.exports = Menu;