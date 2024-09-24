import logo from './logo.svg';
import './App.css';
import Home from './pages/Home/Home';
import { Navigate, Route, Routes } from 'react-router-dom';
import { useEffect, useState } from 'react';
import TopNavbar from './components/TopNavbar/TopNavbar';
import LoginPage from './components/LoginPage/LoginPage';
import ProductPage from './components/ProductPage/ProductPage';
import MyCard from './components/MyCard/MyCard';

function App() {
  const [navMenu, setNavMenu] = useState();

  useEffect(()=>{
    fetchMenu();
  }, []);

  const fetchMenu = ()=>{
    const url = "https://demo2261803.mockable.io/getMenu";
    fetch(url)
        .then((res) => res.json())
        .then((response) => {
            setNavMenu(response.menu);
    });
  }

  return (
    <>
      <TopNavbar menu={navMenu}/>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/login' element={<LoginPage/>} />
        <Route path='*' element={<Navigate to='/' />} />
      </Routes>
      {/* <ProductPage/> */}
      {/* <ButtonClick/> */}
      {/* <MyCard/> */}
    
    

    </>
  );
}

export default App;
