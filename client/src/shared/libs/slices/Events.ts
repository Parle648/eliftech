import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface Event {
  id: number;
  list_id: number;
  name: string;
  status: string;
  deadline: string | Date;
  priority: string;
  description: string;
}

interface EventState {
  value: Event[];
}

const initialState: EventState = {
  value: [],
};

const Events = createSlice({
  name: 'Events',
  initialState,
  reducers: {
    setEvents(state, action: PayloadAction<Event[]>) {
      state.value = action.payload;
    },
  }
})

export const { setEvents } = Events.actions;

export default Events.reducer;
