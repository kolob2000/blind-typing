import { createSlice } from "@reduxjs/toolkit";
import { fetchText } from "./textThunks.js";

const initialState = {
  loading: false,
  text: "",
  index: 0,
  typing: false,
};
export const textSlice = createSlice({
  name: "text",
  initialState: initialState,
  reducers: {
    setIndex(state, action) {
      state.index = action.payload;
    },
    setTyping(state, action) {
      state.typing = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchText.fulfilled, (state, action) => {
      state.loading = false;
      state.text = action.payload;
      state.index = 0;
    });
    builder.addCase(fetchText.pending, (state) => {
      state.loading = true;
    });
  },
});

export const { setIndex, setTyping } = textSlice.actions;
export default textSlice.reducer;
