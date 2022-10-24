import React, { Component } from 'react'
import axios from 'axios';
import Global from '../Global';

export default class DepartamentosEmpleados extends Component {
    urlDept = Global.urlDept;
    state={
        departamentos:[], status: false
    }
    loadDept=()=>{
        axios.get(this.urlDept).then(response =>{
            console.log(response.data);
            this.setState({
                departamentos: response.data,
                status: true  
            });
        })
        
    }
    filtrarDept=(e)=>{
        e.preventDefault();
        
    }
    componentDidMount = () => {
        this.loadDept();    
    }
    render() {
        return (
            <div>
                <h1>Departamentos Empleados</h1>
                <select ref={this.selector} onClick={this.filtrarDept}>
                    {
                        this.state.status == true &&
                        (this.state.departamentos.map((dept,index)=>{
                            return(
                                <option>{dept.Nombre}</option>
                            )
                        }))
                    }
                </select>
                <ul>

                </ul>
            </div>
        )
    }
}
