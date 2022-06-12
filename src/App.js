import { Provider } from "react-redux";

import { ListContainer } from "./components/ListContainer";

import store from "./store/store";

function App() {
  return (
    <Provider store={store}>
      <ListContainer />
    </Provider>
  );
}

export default App;
