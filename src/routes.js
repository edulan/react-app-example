const PATH_PREFIX = '#';

export function getHomeUrl(options = { prefixed: false }) {
  return `${options.prefixed ? PATH_PREFIX : ''}/home`;
}

export function getLoginUrl(options = { prefixed: false }) {
  return `${options.prefixed ? PATH_PREFIX : ''}/login`;
}
