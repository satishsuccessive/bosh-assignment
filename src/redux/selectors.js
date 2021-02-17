export const getUserList = store =>
  store && store.users ? store.users.users : [];

export const getUserById = (id) => (store) =>
    store && store.users && store.users.users
      ? store.users.users.filter(user => user.id === id)[0]
      : {};