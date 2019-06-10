import {
  ChatState,
  ChatActionTypes,
  SEND_MESSAGE,
  DELETE_MESSAGE,
} from "./types";
import produce from "immer";

const initialState: ChatState = {
  messages: [],
};

export const chatReducer = (
  state = initialState,
  action: ChatActionTypes
): ChatState =>
  produce(state, draft => {
    switch (action.type) {
      case SEND_MESSAGE:
        draft.messages.push(action.payload);
        break;
      case DELETE_MESSAGE:
        draft.messages = draft.messages.filter(
          message => message.timestamp !== action.meta.timestamp
        );
        break;
    }
  });
