class Conteudo extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            name: this.props.nome,
            namedois: this.props.nomedois,
            nametres: this.props.nometres
        }
    }
    changeName = () => {
        this.setState({name: "Ribeiro"});
    }
    changeName2 = () => {
        this.setState({namedois:"Catarina"})
    }
    changeName3 = () => {
        this.setState({nametres:"Antonio"})
    }
    render(){
        return(
            <div>
            <p>{this.state.name}</p>
            <button type="button" onClick={this.changeName}>Alterar</button>
            <p>{this.state.namedois}</p>
            <button type="button" onClick={this.changeName2}>Alterar</button>
            <p>{this.state.nametres}</p>
            <button type="button" onClick={this.changeName3}>Alterar</button>
            </div>
        )
    }
}
class App extends React.Component{
    
    render(){
        return(
            <div>
                <Conteudo nome="João" nomedois="Ana" nometres="Carlos" />
            </div>
        )
    }
}

ReactDOM.render(<App/>, document.getElementById("conteudo"))