import { createSlice } from "@reduxjs/toolkit";
import produce from "immer";

const initialState = JSON.parse(localStorage.getItem("urlList")) || {};

const urlListSlice = createSlice({
  name: "urlList",
  initialState,
  reducers: {
    addUrl: (state, action) => {
      const { id, url } = action.payload;
      state[id] = url;
    },
    deleteUrl: (state, action) => {
      const { id } = action.payload;
      delete state[id];
    },
    editUrl: (state, action) => {
      const { id, url } = action.payload;
      state[id] = url;
    },
  },
});

export const { addUrl, deleteUrl, editUrl } = urlListSlice.actions;

// Save state to localStorage after each action
const saveStateToLocalStorage = (state) => {
  localStorage.setItem("urlList", JSON.stringify(state));
};

const urlListReducer = (state = initialState, action) =>
  produce(state, (draftState) => {
    urlListSlice.reducer(draftState, action);
    saveStateToLocalStorage(draftState);
  });

export default urlListReducer;
