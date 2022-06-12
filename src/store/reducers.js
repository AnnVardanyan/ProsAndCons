import actionTypes from "./actionTypes";

const prosListInitial = [];

export function pros(state = prosListInitial, action) {
  switch (action.type) {
    case actionTypes.ADD_PROS_ITEM: {
      return [...state, action.payload];
    } case actionTypes.REMOVE_PROS_ITEM: {
      const newState = [...state];
      newState.splice(action.payload, 1);
      return newState;
    } case actionTypes.EDIT_PROS_ITEM: {
      const newState = [...state];
      newState[action.payload.index] = action.payload.value;
      return newState;
    } default: {
      return state;
    }
  }
}


const consListInitial = [];

export function cons(state = consListInitial, action) {
  switch (action.type) {
    case actionTypes.ADD_CONS_ITEM: {
      return [...state, action.payload];
    } case actionTypes.REMOVE_CONS_ITEM: {
      const newState = [...state];
      newState.splice(action.payload, 1);
      return newState;
    } case actionTypes.EDIT_CONS_ITEM: {
      const newState = [...state];
      newState[action.payload.index] = action.payload.value;
      return newState;
    } default: {
      return state;
    }
  }
}