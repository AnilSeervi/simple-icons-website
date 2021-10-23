const { hideElement, showElement } = require('../public/scripts/dom-utils.js');

const $el = {
  classList: {
    add: jest.fn().mockName('$el.classList.add'),
    remove: jest.fn().mockName('$el.classList.remove'),
    toggle: jest.fn().mockName('$el.classList.toggle'),
  },
  removeAttribute: jest.fn().mockName('$el.removeAttribute'),
  setAttribute: jest.fn().mockName('$el.setAttribute'),
  toggleAttribute: jest.fn().mockName('$el.toggleAttribute'),
};

describe('::hideElement', () => {
  beforeEach(() => {
    $el.classList.add.mockReset();
    $el.setAttribute.mockReset();
  });

  it('adds the .hidden class', () => {
    hideElement($el);
    expect($el.classList.add).toHaveBeenCalledWith('hidden');
  });

  it('adds the aria-hidden attribute', () => {
    hideElement($el);
    expect($el.setAttribute).toHaveBeenCalledWith('aria-hidden', 'true');
  });
});

describe('::showElement', () => {
  beforeEach(() => {
    $el.classList.remove.mockReset();
    $el.removeAttribute.mockReset();
  });

  it('removes the .hidden class', () => {
    showElement($el);
    expect($el.classList.remove).toHaveBeenCalledWith('hidden');
  });

  it('removes the aria-hidden attribute', () => {
    showElement($el);
    expect($el.removeAttribute).toHaveBeenCalledWith('aria-hidden');
  });
});

describe('::toggleVisibleElement', () => {
  beforeEach(() => {
    $el.classList.toggle.mockReset();
    $el.toggleAttribute.mockReset();
  });

  it('toggles the .hidden class', () => {
    toggleVisibleElement($el);
    expect($el.classList.toggle).toHaveBeenCalledWith('hidden');
  });

  it('toggles the aria-hidden attribute', () => {
    toggleVisibleElement($el);
    expect($el.toggleAttribute).toHaveBeenCalledWith('aria-hidden');
  });
});
