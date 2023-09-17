import React, { Component } from 'react';
import firebase from '../../firebase';
import { Link } from 'react-router-dom';
import '../../App.css';

class Login extends Component {
    constructor(props) {
        super(props);
            this.state = {
                email: "",
                senha: "",
                erroMensagem: "",
            }

        this.acessar = this.acessar.bind(this);

     }

     async acessar(){
       
        await firebase.auth().signInWithEmailAndPassword(this.state.email, this.state.senha)
        .then(() => {
            window.location.href ="./principal"
        })
        .catch((erro) => {
            this.setState({ erroMensagem: "Usuário não cadastrado ou dados incorretos." });
        });
        
     }

    render(){
        return(
            <div>
                <h1>Login</h1>
                <input type="email" placeholder='E-mail' onChange={(e)=> this.setState({email: e.target.value})}/>
                <br/>
                <input type="password" placeholder='Senha' onChange={(e)=> this.setState({senha: e.target.value})}/>
                <br/>
                <button onClick={this.acessar}>Acessar</button>
                <Link to="/cadastro"><button>Cadastrar</button></Link>
                {this.state.erroMensagem && <p>{this.state.erroMensagem}</p>}
            </div>
        )
    }
}
  export default Login;