export function deepRemove(object: any, key = 'password'): any {
  if (Array.isArray(object)) {
    object.forEach((obj: any) => deepRemove(obj));
  } else {
    Object.keys(object).forEach(k => {
      if (k === key) {
        delete object[k];
      } else if (object[k] && typeof object[k] === 'object') {
        deepRemove(object[k], key);
      }
    });
  }
}
