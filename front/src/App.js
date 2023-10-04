import './App.css';
import { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Header from './Components/Nav';
import Index from './Components/Index';
import Login from './Components/Login';
import Registrarse from './Components/Registrarse';
import Calorias1 from './Components/Calorias1';
import Calorias2 from './Components/Calorias2';
import Calorias3 from './Components/Calorias3';
import Tablas from './Components/Tablas';


function App() {
  const [data, setData] = useState({
    sexo: "indefinido",
    edad: 0,
    altura: 0,
    peso: 0
  });
  const [res1, setRes1] = useState();

  const selectRes = (res) => {
    setRes1(res);
  };

  const selectData = (data) => {
    setData({
      sexo: data.sexo,
      edad: data.edad,
      altura: data.altura,
      peso: data.peso
    });
  };
  return (
    <div>
      <Header />
      <BrowserRouter>
        <Routes>
          <Route path='home' element={<Index />} exact> </Route>
          <Route path='' element={<Login />}></Route>
          <Route path='registrarse' element={<Registrarse />}></Route>
          <Route path='calorias1' element={<Calorias1 propRes={selectRes} />}></Route>
          <Route path='calorias2/' element={<Calorias2 propData={selectData} />}></Route>
          <Route path='calorias3/' element={<Calorias3 data={data} resOne={res1}/>}></Route>
          <Route path='tablas' element={<Tablas />} exact></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
