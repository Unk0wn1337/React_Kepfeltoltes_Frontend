import logo from './logo.svg';
import './App.css';
import Megjelenit from './components/Megjelenit';
import FormComponet from './components/FormComponent';
import Layout from './pages/Layout';
import Kezdolap from './pages/Kezdolap';
import Kepek from './pages/Kepek';
import KepOldal from './components/Kepoldal';
import NoPages from './pages/Nopages';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Kezdolap />} />

          <Route path="kepfeltoltes" element={<Kepek />} />
          <Route path="kepoldal" element={<KepOldal />} />
      
          <Route path="*" element={<NoPages />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}



export default App;
