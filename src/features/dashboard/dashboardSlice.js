import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  keyboard: true,
  lang: "ru",
};
const dashboardSlice = createSlice({
  name: "dashboard",
  initialState: initialState,
  reducers: {
    toggleKeyboard(state) {
      state.keyboard = !state.keyboard;
    },
    setLang(state, action) {
      if (state.lang !== action.payload) {
        state.lang = action.payload;
      }
    },
  },
});
export const { toggleKeyboard, setLang } = dashboardSlice.actions;
export default dashboardSlice.reducer;
