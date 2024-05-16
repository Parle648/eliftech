import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface EventState {
  value: number;
}

const initialState: EventState = {
  value: 0,
};

const CurrentPage = createSlice({
  name: 'CurrentPage',
  initialState,
  reducers: {
    setTasks(state, action: PayloadAction<number>) {
      state.value = action.payload;
    },
  }
})

export const { setTasks } = CurrentPage.actions;

export default CurrentPage.reducer;
