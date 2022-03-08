import { PositionProvider } from "./Context/usePositionPage";
import Navegator from "./Navegator";
import "./assets/styles/index.scss";
import { UserContextProider } from "./Context/LoginContext/useLoginContext";
import { PromptProvider } from "./Context/PromptContext/usePromptContext";
import { CardShopContextProider } from "./Context/CartShopContext";

const App = () => {
  return (
    <PromptProvider>
      <PositionProvider>
        <CardShopContextProider>
          <UserContextProider>
            <Navegator />
          </UserContextProider>
        </CardShopContextProider>
      </PositionProvider>
    </PromptProvider>
  );
};

export default App;
