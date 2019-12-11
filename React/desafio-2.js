class Cursos extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            titulo: this.props.titul,
            nome: this.props.name,
            nomedois: this.props.namedois,
            texto: this.props.text,
            textodois: this.props.textdois
        }
    }
    changeTraducao = () => {
        this.setState({
            titulo:"Full-Stack Developer",
            nome:"Objective",
            texto:"Learn amazing technologies to build magnificent things",
            nomedois: "Technologies learned",
            textodois:"JavaScript, TypeScript, ReactJS, Angular, Python, NodeJS and more"
        })

    }
    render(){
        return(
            <div>
            <h1>{this.state.titulo}</h1>
            <p><b>{this.state.nome}:</b>{this.state.texto}</p>
            <p><b>{this.state.nomedois}:</b>{this.state.textodois}</p>
            <button  onClick={this.changeTraducao}>English</button>
            </div>
        )
    }
}

class App extends React.Component {

    render() {
        return (
            <div>
                <Cursos titul="Desenvolvedor Full-Stack"
                 name="Objetivos: " text="Aprender tecnologias incríveis para construir coisas magníficas" 
                namedois="Tecnologias aprendidas: " textdois="JavaScript, TypeScript, ReactJS, Angular, Python, NodeJS entre outras"/>
            </div>
        )
    }
}

ReactDOM.render(<App />, document.getElementById("conteudo"));