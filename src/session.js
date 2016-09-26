import { autorun } from 'mobx';
import { view } from './stores/';

function readState() {
  const state = sessionStorage.getItem('viewState');

  if (!state) return {};

  return JSON.parse(state);
}

function writeState(state) {
  sessionStorage.setItem('viewState', JSON.stringify(state));
}

export function setSession() {
  view.resetState(readState());

  autorun('Session storage', () => {
    writeState(view.serialize())
  });

  return Promise.resolve();
}
