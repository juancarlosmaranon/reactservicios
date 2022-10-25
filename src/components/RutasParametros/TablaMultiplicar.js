import React, { Component } from 'react'

export default class TablaMultiplicar extends Component {
  
    // EN ESTE COMPONENTE VAMOS A RECIBIR UN PROPS DE numero
    constructor(props){
        super(props);
        console.log("Numero props: "+props.numero);
    }

    state={
        tabla:[]
    }

    generarTabla = () =>{
        var datos = [];
        for(var i=0;i<=10;i++){
            var op = parseInt(this.props.numero)*i;
            datos.push(op);
        }
        this.setState({
            tabla:datos
        })
    }
    componentDidUpdate=(oldProps)=>{
        if(oldProps.numero != this.props.numero){
            this.generarTabla();
        }
    }
    componentDidMount = () => {
        this.generarTabla();    
    }
  
    render() {
    return (
        <div>
            <h1 style={{color:"blue"}}>Tabla Multiplicar{this.props.numero}</h1>
            <table className='table table-bordered text-info '>
                {
                    this.state.tabla.map((num,index)=>{
                        return(<tr key={index}>
                            <td>{num}</td>
                        </tr>);
                    })
                }
            </table>
        </div>
    )
  }
}
