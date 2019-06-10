import { SystemState, SystemActionTypes, UPDATE_SESSION } from "./types";
import produce from "immer";

const initialState: SystemState = {
  loggedIn: false,
  session: "",
  userName: "",
};

export const systemReducer = (
  state = initialState,
  action: SystemActionTypes
): SystemState =>
  produce(state, draft => {
    switch (action.type) {
      case UPDATE_SESSION: {
        draft = action.payload;
        break;
      }
    }
  });
