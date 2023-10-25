const { createSlice } = require("@reduxjs/toolkit");
const cartSlice = createSlice({
  name: "cart",
  initialState: {
    showMinicart: false,
    cartItems: [],
  },
  reducer: {
    showMinicart(state) {
      state.showMinicart(true);
    },
    hideMinicart(state) {
      state.showMinicart(false);
    },
  },
});
const { actions, reducer } = cartSlice;
export const { showMinicart, hideMinicart } = actions;
export default reducer;
