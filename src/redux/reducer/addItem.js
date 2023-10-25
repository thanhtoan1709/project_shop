const addItem = [];
const addItems = (state = addItem, action) => {
  switch (action.type) {
    case "ADD":
      // check exist item
      return [...state, action.payload];

    case "DEL":
      return (state = state.filter((x) => {
        return x.id !== action.payload.id;
      }));

    default:
      return state;
  }
};
export default addItems;
