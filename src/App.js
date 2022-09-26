import './App.scss';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Shop from './components/Shop/Shop';
import { ContextProvider } from './context';

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
