import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  keyboard: true,
  lang: "ru",
  sound: false,
};
const dashboardSlice = createSlice({
  name: "dashboard",
  initialState: initialState,
  reducers: {
    toggleKeyboard(state) {
      state.keyboard = !state.keyboard;
    },
    toggleSound(state) {
      state.sound = !state.sound;
    },
    setLang(state, action) {
      if (state.lang !== action.payload) {
        state.lang = action.payload;
      }
    },
  },
});
export const { toggleKeyboard, setLang, toggleSound } = dashboardSlice.actions;
export default dashboardSlice.reducer;
