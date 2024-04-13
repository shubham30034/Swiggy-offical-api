import Body from "./pages/Body"
import { Provider } from "react-redux"
import store from "./utils/store"
import Header from "./components/Header"

function App() {
  

  return (
    <>
    <Provider store={store}>
      
      <Body/>
      </Provider>
    </>
  )
}

export default App
