export debounce from './debounce';
export IterableInstance from './IterableInstance';
export * as fieldUtils from './fieldUtils';
export ensureMask from './ensureMask';

export function isset(variable) {
  return (typeof variable !== 'undefined') && (variable !== null);
}
