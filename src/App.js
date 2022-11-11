import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Bookstore from './components/Bookstore';
import Categories from './components/Categories';

const App = () => (
    <>
      <div>
        <Navbar/ >
        <Routes>
          <Route path='/' element={<Bookstore />} />
          <Route path='Categories' element={<Categories />} /> 
        </Routes>
      </div>
    </>
  );


export default App;
