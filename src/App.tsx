import { PositionProvider } from "./Context/usePositionPage";
import Navegator from "./Navegator";
import "./assets/styles/index.scss";
import { UserContextProider } from "./Context/LoginContext/useLoginContext";
import { PromptProvider } from "./Context/PromptContext/usePromptContext";

const App = () => {
  return (
    <PromptProvider>
      <PositionProvider>
        <UserContextProider>
          <Navegator />
        </UserContextProider>
      </PositionProvider>
    </PromptProvider>
  );
};

export default App;
