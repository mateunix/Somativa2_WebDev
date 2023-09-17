import React, { Component } from 'react';
import firebase from '../../firebase';


class Principal extends Component {
    constructor(props) {
        super(props);
        this.state = {
            nome: "",
            sobrenome: "",
            nasc: "",
        }
    }
    async componentDidMount(){
        await firebase.auth().onAuthStateChanged(async(usuario) => {

            if (usuario){
                var uid = usuario.uid;

                await firebase.firestore().collection("usuario").doc(uid).get()
                .then((retorno) => {
                    this.setState({
                        nome: retorno.data().nome,
                        sobrenome: retorno.data().sobrenome,
                        nasc: retorno.data().nasc
                       
                    });
                });
            }

        });

    }

    render(){
     
        return(
            <div>
                <h1>Tela Principal</h1>
                Nome: {this.state.nome}<br/>
                Sobrenome: {this.state.sobrenome}<br/>
                Data de Nascimento: {this.state.nasc}<br/>
                
            </div>
        )
    }
}
export default Principal;