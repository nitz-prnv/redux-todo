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
export const mark = (data) => {
  return {
    type: "Mark",
    payload: data,
  };
};
