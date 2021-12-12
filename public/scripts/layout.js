import { STORAGE_KEY_LAYOUT } from './storage.js';

const LAYOUT_COMPACT = 'layout-compact';
const LAYOUT_COMFORTABLE = 'layout-comfortable';

const DEFAULT_LAYOUT = LAYOUT_COMFORTABLE;

export default function initlayout(document, storage) {
  let activelayout = DEFAULT_LAYOUT;

  const $body = document.querySelector('body');
  const $layoutComfortable = document.getElementById('layout-comfortable');
  const $layoutCompact = document.getElementById('layout-compact');

  $layoutComfortable.disabled = false;
  $layoutCompact.disabled = false;

  if (storage.hasItem(STORAGE_KEY_LAYOUT)) {
    const storedlayout = storage.getItem(STORAGE_KEY_LAYOUT);
    selectlayout(storedlayout);
  }

  $layoutComfortable.addEventListener('click', (event) => {
    event.preventDefault();
    selectlayout(LAYOUT_COMFORTABLE);
  });
  $layoutCompact.addEventListener('click', (event) => {
    event.preventDefault();
    selectlayout(LAYOUT_COMPACT);
  });

  function selectlayout(selected) {
    if (selected === activelayout) {
      return;
    }

    if (selected === LAYOUT_COMFORTABLE) {
      $body.classList.add(LAYOUT_COMFORTABLE);
      $body.classList.remove(LAYOUT_COMPACT);
    } else if (selected === LAYOUT_COMPACT) {
      $body.classList.add(LAYOUT_COMPACT);
      $body.classList.remove(LAYOUT_COMFORTABLE);
    }

    storage.setItem(STORAGE_KEY_LAYOUT, selected);
    activelayout = selected;
  }
}
