
class LigaDesliga extends React.Component{
    constructor(props){
        super(props);
        this.Ligar = this.Ligar.bind(this);
        this.Desligar = this.Desligar.bind(this)
        this.state = {
            ligarEDesligar: false
        };
    }

    Ligar(){
        this.setState({ligarEDesligar: true});
    }

    Desligar(){
        this.setState({ligarEDesligar: false});
    }

    render(){
        let luz = this.state.ligarEDesligar;
        let liga = <button onClick={this.Ligar}>Ligar</button>
        let imagem
        let desliga = <button onClick={this.Desligar}>Desligar</button>
        

        if (luz) {
            imagem = <img src="../img/img1.gif"/>;
        } else{
            imagem = <img src="../img/img2.gif"/>;
        }

        return (
            <div>
                {liga}
                {imagem}
                {desliga}
            </div>
        );
    }

}


ReactDOM.render(
    <LigaDesliga/>,
    document.getElementById("conteudo")
)

