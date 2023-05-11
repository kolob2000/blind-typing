import { createSelector } from "@reduxjs/toolkit";

const selectDashboardState = (state) => state.dashboard;
export const selectLang = createSelector(
  selectDashboardState,
  (dashboardState) => dashboardState.lang
);