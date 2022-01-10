import {Header} from './component/Header/Header';
import {Footer} from './component/Footer/Footer';
import {Shop} from './component/Shop/Shop';
import { ContextProvider } from './component/Context/Context';

function App() {
  return (
    <>
      <Header />
      <ContextProvider>
        <Shop />
      </ContextProvider>
      <Footer />
    </>
  );
}

export default App;
