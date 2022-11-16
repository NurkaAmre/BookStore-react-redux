import { Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import Navbar from './components/Navbar';
import Bookstore from './components/Bookstore';
import Categories from './components/Categories';

const App = () => (
  <>
    <Provider>
      <Navbar />
      <Routes>
        <Route path="/" element={<Bookstore />} />
        <Route path="Categories" element={<Categories />} />
      </Routes>
    </Provider>
  </>
);

export default App;
