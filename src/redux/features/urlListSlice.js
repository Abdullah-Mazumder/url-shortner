import { createSlice } from "@reduxjs/toolkit";

let initialState = {};

const urlList = localStorage.getItem("urlList");

if (urlList) {
  initialState = JSON.parse(urlList);
}

const urlListSlice = createSlice({
  name: "urlList",
  initialState,
  reducers: {
    addUrl: (state, action) => {
      state[action.payload.id] = action.payload.url;
      localStorage.setItem("urlList", JSON.stringify(state));
    },
    deleteUrl: (state, action) => {
      delete state[action.payload.id];
      localStorage.setItem("urlList", JSON.stringify(state));
    },
    editUrl: (state, action) => {
      state[action.payload.id] = action.payload.url;
      localStorage.setItem("urlList", JSON.stringify(state));
    },
  },
});

export default urlListSlice.reducer;
export const { addUrl, deleteUrl, editUrl } = urlListSlice.actions;
