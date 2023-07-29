import './scss/styles.scss';
import { BrowserRouter as Router } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import UseRoutes from './routes';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import ScrollTop from './components/ScrollTop/ScrollTop';
import { ToastContainer } from 'react-toastify';
import { store } from './store';
import { Provider } from 'react-redux';
import CookiesModal from './components/CookiesModal/CookiesModal';

function App() {
  return (
    <Provider store={store}>
      <HelmetProvider>
        <CookiesModal />
        <Router>
          <ToastContainer limit={2} />
          <ScrollTop />
          <Header />
          <UseRoutes />
          <Footer />
        </Router>
      </HelmetProvider>
    </Provider>
  );
}

export default App;
