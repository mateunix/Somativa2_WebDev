import React, { Component } from 'react';
import firebase from '../../firebase';
import { Link } from 'react-router-dom';

class Cadastro extends Component{
    constructor (props){
        super(props);
        this.state={
            email:"",
            senha:"",
            nome:"",
            sobrenome:"",
            nasc:"",
            successoMensagem: "",
            erroMensagem: ""   
     
        }
        this.gravar = this.gravar.bind(this);
    }
    async gravar(){
        
        await firebase.auth().createUserWithEmailAndPassword(this.state.email, this.state.senha)
        .then(async(retorno) =>{
          
          await firebase.firestore().collection("usuario").doc(retorno.user.uid).set({
            nome: this.state.nome,
            sobrenome: this.state.sobrenome,
            nasc: this.state.nasc
            })
            window.location.href ="/"
        })
        .catch((erro) => {
            this.setState({ erroMensagem: "Falha ao cadastrar usuário." });
        }); 
    }
        
    
    render(){
        return(
            <div>
                <h1>Cadastro</h1>
                <input type="email" placeholder='E-mail' onChange={(e)=> this.setState({email: e.target.value})}/>
                <br/>
                <input type="password" placeholder='Senha' onChange={(e)=> this.setState({senha: e.target.value})}/>
                <br/>
                <input type="text" placeholder='Nome' onChange={(e)=> this.setState({nome: e.target.value})}/>
                <br/>
                <input type="text" placeholder='Sobrenome' onChange={(e)=> this.setState({sobrenome: e.target.value})}/>
                <br/>
                <input type="date" placeholder='Data de Nascimento' onChange={(e)=> this.setState({nasc: e.target.value})}/>
                <br/>
                <button onClick={this.gravar}>Gravar</button>
                <Link to="/"><button>Voltar</button></Link>
                {this.state.erroMensagem && <p>{this.state.erroMensagem}</p>}
                
            </div>
        )

    }
};


export default Cadastro;