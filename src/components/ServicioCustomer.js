import React, { Component } from 'react'
//IMPORTAR LIBRERIA axios
import axios from 'axios';
import Global from '../Global';

export default class ServicioCustomer extends Component {
  //ALMACENAMOS EN UNA VARIABLE LA URL DEL SERVICIO
    urlCustomer = Global.urlCustomers;
  //TENDREMOS UN ARRAY CON TODOS LOS CUSTOMER DEL SERVICIO
  state={
    customer:[]
  }
  //METODO PARA CARGAR TODOS LOS ELEMENTOS customer
  //DEL SERVICIO API EN EL ARRAY DE state
  loadCustomer = ()=>{
    //IMPLEMENTAMOS EL METODO DE PETICION
    var request = "customers.json";
    //LEEMOS EL SERVICIO CON EL METODO GET
    axios.get(this.urlCustomer + request).then(response=>{
        //console.log(response.data)
        this.setState({
            customer: response.data.results
        });
    });
  }

    //QUEREMOS CARGAR LOS CUSTOMERS AL INICIAR LA PAGINA
    componentDidMount = () => {
        this.loadCustomer();    
    }
    render() {
    return (
        <div>
            <h1>ServicioCustomer</h1>
            {
                //EL .map ES PARA QUE ME IMPRIMA UN ARRAY
                this.state.customer.map((customer,index)=>{
                    return (<h2 style={{color:"red"}} key={customer.id}>
                        {customer.contactName}
                    </h2>)
                })
            }
        </div>
    )
  }
}
