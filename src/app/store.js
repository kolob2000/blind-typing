import {configureStore} from "@reduxjs/toolkit";
import textReducer from "../features/text/textSlice.js"
import timerReducer from "../features/timer/timerSlice.js"
import dashboardReducer from "../features/dashboard/dashboardSlice.js"

const store = configureStore({
    reducer: {
        text: textReducer,
        timer: timerReducer,
        dashboard: dashboardReducer
    }
})
export default store;