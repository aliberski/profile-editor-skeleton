export const getCurrentRoute = (state: any) => {
  // get current react-navigation route
  const findCurrentRoute = (navState: any): string | null => {
    if (navState && navState.hasOwnProperty('index')) {
      return findCurrentRoute(navState.routes[navState.index]);
    }
    return navState.routeName;
  };
  return findCurrentRoute(state);
};
