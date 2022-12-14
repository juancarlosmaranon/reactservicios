import React, { Component } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import {useParams} from 'react-router-dom';
import Home from './RutasParametros/Home';
import PageNotFound from './RutasParametros/PageNotFound';
import TablaMultiplicar from './RutasParametros/TablaMultiplicar';
import MenuRutas from './RutasParametros/MenuRutas';


export default class Router extends Component {
  render() {

    // ESTA FUNCION CAMBIA LOS PROPS DINAMICAMENTE
    // Y PERMITE CAPTURAR LOS PARAMETROS DE UNA RUTA
    function TablaMultiplicarElement(){
        var { minumero } = useParams();
        return <TablaMultiplicar numero={minumero}/>
    }

    return (
      <BrowserRouter>
        <MenuRutas/>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/tabla/:minumero" element={<TablaMultiplicarElement/>}/>
                {/* 
                RUTAS QUE NO EXISTAN
                SE UTILIZA EL ASTERISCO EN PATH
                Y DEBE SER EL ULTIMO <Route/> 
                */}
                <Route path="*" element={<PageNotFound/>}/>
            </Routes>
      </BrowserRouter>
    )
  }
}
