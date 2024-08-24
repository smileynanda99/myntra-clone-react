import Header from '../componets/Header'
import Footer from '../componets/Footer';
import 'bootstrap/dist/css/bootstrap.css';
import '../App.css';
import { Outlet } from 'react-router-dom';

const App = () => {
  return (
    <>
      <Header/>
      <Outlet/>
      <Footer/>
    </>
  );
}

export default App;
