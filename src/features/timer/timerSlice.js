import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  speed: 0,
  correctness: 0,
  correctCount: 0,
  allCount: 0,
  seconds: 0,
  minutes: 0,
  pause: true,
  modal: false,
};
const timerSlice = createSlice({
  name: "timer",
  initialState: initialState,
  reducers: {
    setSpeed(state, action) {
      console.log(action.payload, "payload")
      state.speed = action.payload;
    },
    setCorrectness(state, action) {
      state.correctness = action.payload;
    },
    resetIndication(state) {
      state.speed = 0;
      state.correctness = 0;
    },
    resetTimer(state) {
      state.correctCount = 0;
      state.allCount = 0;
      state.seconds = 0;
      state.minutes = 0;
    },
    incrementCorrectCount(state) {
      state.correctCount += 1;
    },
    incrementAllCount(state) {
      state.allCount += 1;
    },
    resetCount(state) {
      state.count = 0;
    },

    setSeconds(state, action) {
      state.seconds = action.payload;
    },
    setMinutes(state, action) {
      state.minutes = action.payload;
    },
    setPause(state, action) {
      state.pause = action.payload;
    },
    setModal(state, action) {
      if (!state.modal) {
        state.pause = true;
      }
      state.modal = action.payload;
    },
  },
});
export const {
  setCount,
  setSeconds,
  setMinutes,
  setPause,
  setModal,
  resetTimer,
  incrementAllCount,
  incrementCorrectCount,
  setSpeed,
  setCorrectness,
  resetIndication,
} = timerSlice.actions;
export default timerSlice.reducer;
