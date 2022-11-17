import { Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import Navbar from './components/Navbar';
import Books from './components/Book';
import Categories from './components/Categories';
import store from './components/redux/configureStore';

const App = () => (
  <>
    <Provider store={store}>
      <Navbar />
      <Routes>
        <Route path="/" element={<Books />} />
        <Route path="Categories" element={<Categories />} />
      </Routes>
    </Provider>
  </>
);

export default App;
