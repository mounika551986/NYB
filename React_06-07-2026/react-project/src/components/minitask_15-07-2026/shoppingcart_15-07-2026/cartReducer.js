export const initialState = {
  items: 0,
  total: 0,
};

export function cartReducer(state, action) {
  switch (action.type) {
    case "ADD_ITEM":
      return {
        items: state.items + 1,
        total: state.total + 500,
      };

    case "REMOVE_ITEM":
      return {
        items: state.items > 0 ? state.items - 1 : 0,
        total: state.total > 0 ? state.total - 500 : 0,
      };

    case "CLEAR_CART":
      return initialState;

    default:
      return state;
  }
}