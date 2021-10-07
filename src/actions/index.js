export const create = (data) => {
  return {
    type: "Create",
    payload: data,
  };
};
export const remove = (data) => {
  return {
    type: "Delete",
    payload: data,
  };
};
