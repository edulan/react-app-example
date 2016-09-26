import { autorun } from 'mobx';
import { view } from './stores/';

const emptyState = JSON.stringify({});

function readState() {
  return JSON.parse(sessionStorage.getItem('viewState') || emptyState);
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
