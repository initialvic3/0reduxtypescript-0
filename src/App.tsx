import { AppState } from "./store";

import { SystemState } from "./store/system/types";
import { updateSession } from "./store/system/actions";

import { ChatState } from "./store/chat/types";
import { sendMessage } from "./store/chat/actions";

interface AppProps {
  sendMessage: typeof sendMessage;
  updateSession: typeof updateSession;
  chat: ChatState;
  system: SystemState;
}

const mapStateToProps = (state: AppState) => ({
  system: state.system,
  chat: state.chat,
});

const App: React.FC<AppProps> = ({ system, chat }) => {};
export default App;
