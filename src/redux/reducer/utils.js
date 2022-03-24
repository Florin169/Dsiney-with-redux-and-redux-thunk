export const addMovie = (item, itemToAdd) => {
  const existingItem = item.find((itm) => itm.id === itemToAdd.id);

  return existingItem ? item : [...item, itemToAdd];
};
