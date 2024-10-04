export const shopReducer = (state = [], action) => {
  switch (action.type) {
    case "GET_PRODUCT":
      return action.product;

    case "UPDATE_PRODUCT":
      return state.map(item => {
        if (item.id === action.id) {
          return {
            ...item, ...action.update
          };
        } else {
          return item;
        }
      });

    default:
      return state;
  }
};