import { createContext } from "react";

// import { createSlice } from "@reduxjs/toolkit";

export const appSlice = createContext({
  userDetails: [],
  userListHeaders: {
    "access-token": "",
    client: "",
    expiry: "",
    uid: "",
  },
  // initialState: {
  //   roomId: null,
  // },
  // reducers: {
  //   enterRoom: (state,action) => {
  //     state.roomId = action.payload.roomId;
  //   },
  // },
});

// export const { enterRoom } = appSlice.actions;

// export const selectRoomId = state => state.app.roomId;

export default appSlice;
