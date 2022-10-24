import React, { Component } from 'react'
//IMPORTAR LIBRERIA axios
import axios from 'axios';
import Global from '../Global';

export default class MostrarFiltrarCoche extends Component {
    cajaMarcaRef = React.createRef();
    //ALMACENAMOS EN UNA VARIABLE LA URL DEL SERVICIO
    urlCoches = Global.urlCoches;
    //TENDREMOS UN ARRAY CON TODOS LOS CUSTOMER DEL SERVICIO
    state={
        coche:[]
    }
     //METODO PARA CARGAR TODOS LOS ELEMENTOS customer
    //DEL SERVICIO API EN EL ARRAY DE state
    loadCoche = ()=>{
        //IMPLEMENTAMOS EL METODO DE PETICION
        var request = "/webresources/coches";
        //LEEMOS EL SERVICIO CON EL METODO GET
        axios.get(this.urlCoches + request).then(response=>{
            console.log(response.data)
            //AGREGAMOS LOS VALORES AL state
            this.setState({
                coche: response.data
            });
        });
    }
    flitrarCoche = (e)=>{
        e.preventDefault();
        var request = "/webresources/coches";
        var urlCoches = Global.urlCoches + request;
        //IMPLEMENTAMOS EL METODO DE PETICION
        var marca = this.cajaMarcaRef.current.value.toLowerCase();
        var marcas = [];
        for(var i=0;i<this.state.coche.length;i++){
            var resultado = this.state.coche[i];
            if(marca==resultado.marca.toLowerCase()){
                marcas.push(resultado);
                console.log(resultado);
            }
        }
        this.setState({
            coche:marcas
        })
    }
    componentDidMount = () => {
        this.loadCoche();    
    }
  render() {
    return (
        <div>
            <h1>Mostrar Filtrar Coche</h1>
            <form>
                <label>Introduzca Marca: </label>
                <input type="text" ref={this.cajaMarcaRef}/>
                <button onClick={this.flitrarCoche}>
                    Filtrar Coches
                </button>
                <button onClick={this.loadCoche}>
                    Mostrar Coches
                </button>
            </form>
            
           
            <table style={{border:"1px"}}>
                <thead>
                    <tr>
                        <th>Marca</th>
                        <th>Modelo</th>
                        <th>Imagen</th>
                    </tr>
                </thead>
                <tbody>
                {
                    this.state.coche.map((coche,index)=>{
                        return (
                            <tr>
                                <td>{coche.marca}</td>
                                <td>{coche.modelo}</td>
                                <td><img src={coche.imagen} style={{width:"200px",height:"150px"}}></img></td>
                            </tr>
                        )
                    })
                }
                </tbody>
            </table>       
        </div>
    )
  }
}
