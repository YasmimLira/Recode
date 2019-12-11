class App extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            num1: 0,
            num2: 0,
            resultado: 0,
        };

        this.manipulandor1 = this.manipulandor1.bind(this);
        this.manipulandor2 = this.manipulandor2.bind(this);
        this.somar = this.somar.bind(this);
        this.subtrair = this.subtrair.bind(this);
        this.dividir = this.dividir.bind(this);
        this.multiplicar = this.multiplicar.bind(this)
        
        
    }

    manipulandor1(event){
        this.setState({num1: event.target.value});
    }
    manipulandor2(event){
        this.setState({num2: event.target.value});
    }
    
    somar(){
        this.setState({ resultado:(parseFloat(this.state.num1) + parseFloat(this.state.num2))})
    }
    subtrair(){
        this.setState({ resultado:(parseFloat(this.state.num1) - parseFloat(this.state.num2))})
    }
    dividir(){
        this.setState({ resultado:(parseFloat(this.state.num1) / parseFloat(this.state.num2))})
    }
    multiplicar(){
        this.setState({ resultado:(parseFloat(this.state.num1) * parseFloat(this.state.num2))})
    }
   
    render(){
        return(
            <div className="Formatacao">
                <form>
                    Valor 1:
                    <input type="text" onChange={this.manipulandor1}/>
                    <br/><br/>

                    Valor 2:
                    <input type="text" onChange={this.manipulandor2}/>
                    <br/><br/>

                    <label>
                    Escolha a operação:
                        <select>
                            <option onClick={this.somar} value="Somar">Somar</option>
                            <option onClick={this.subtrair} value="Subtrair">Subtrair</option>
                            <option onClick={this.dividir} value="Dividir">Dividir</option>
                            <option onClick={this.multiplicar} value="Multiplicar">Multiplicar</option>
                        </select>
                    </label>
                    
                    <p><b>Resultado: {this.state.resultado}</b></p>
                </form>
            </div>
        )
    }
}
ReactDOM.render(<App/>, document.getElementById("conteudo"))
