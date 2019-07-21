// NOTE: this function is copied from `redux` library
export const compose = (...funcs: any) => {
  if (funcs.length === 0) {
    return (arg: any) => arg;
  }

  if (funcs.length === 1) {
    return funcs[0];
  }

  return funcs.reduce((a: any, b: any) => (...args: any) => a(b(...args)));
};
