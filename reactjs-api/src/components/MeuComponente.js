import React, { Component} from 'react'
//ciclo de vida do componente(fazem parte da montagem do componente)- > contructor -> getDerivedStateFromProps -> componentDidMount -> shouldComponentUpdate -> render
class MeuComponente extends Component{
    constructor(props) { // é a primeira coisa a ser executada em um componente, serve para iniciar o state inicial e utilizar os binds dos métodos
        super(props) // chamar  a classe pai

        this.state = { numero: 5 } //state recebe um objeto numero com valor 5
        //posso fazer o bind no metodo construtor e chamar no button em click apenas o adicionarNumero ou posso fazer pelo button
        //this.adicionarNumero = this.adicionarNumero.bind(this)
    }

    static getDerivedStateFromProps(props, state){ //único método estático do ciclo de vida, esse método não tem acesso a instância do componente, por isso não utilizamos o this aqui dentro, ele recebe como parametro o props e o state
        console.log('getDerivedStateFromProps');
        //console.log(props);
        //console.log(state);
        //return { numero: 6}
        //ou não retornar nada null
        return null;
    }

        componentDidMount(){//aqui deve ser feita as requisições ajax, quando for pegar informações de outras API, aqui que o componente é redenrizado na tela
            console.log('componentDidMount')
        }

        shouldComponentUpdate(nextProps, nextState){//vai informar se o componente deve ou não ser atualizado
            console.log('shouldComponentUpdate');
            console.log('Estado atual: ', this.state);
            console.log('Proximo Estado: ', nextState);


            //return false; //como rertona falso o componente nao altera e retorna o valor inicial
            return true; //retorna verdade, alterando o valor do componente
        }

        adicionarNumero(){
            console.log('setState')
            let numeroAtual = this.state.numero
            numeroAtual += 1
            this.setState( { numero: numeroAtual} )
        }
        render(){
        return <div>
            <p>{ this.props.título }</p> 
            <p>{ this.state.numero }</p>

            <button onClick={this.adicionarNumero.bind(this)}>Adiconar número</button>
           
        </div>
    }
}
//props = acessando as propriedades da classe
export default MeuComponente