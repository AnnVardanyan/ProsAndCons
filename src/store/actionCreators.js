import actionTypes from './actionTypes';

export const addProsItem = value => ({
  type: actionTypes.ADD_PROS_ITEM,
  payload: value
});

export const addConsItem = value => ({
  type: actionTypes.ADD_CONS_ITEM,
  payload: value
});

export const removeProsItem = index => ({
  type: actionTypes.REMOVE_PROS_ITEM,
  payload: index
});

export const removeConsItem = index => ({
  type: actionTypes.REMOVE_CONS_ITEM,
  payload: index
});

export const editProsItem = (index, value) => ({
  type: actionTypes.EDIT_PROS_ITEM,
  payload: {index, value}
});

export const editConsItem = (index, value) => ({
  type: actionTypes.EDIT_CONS_ITEM,
  payload: {index, value}
});
