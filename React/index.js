class MyButton extends React.Component{
    render(){
        return(
        <button>{this.props.name}</button>
        )
    }
}

class MyLabel extends React.Component{
    render(){
        return(
        <p>{this.props.text}</p>
        )
    }
}

class App extends React.Component{
    render(){
        return(
            <div>
                <MyLabel text="Recode Pro 2019"/>
                <MyButton name="Botão 01"/>
                <MyButton name="Botão 02"/>
                <MyButton name="Botão 03"/>
            </div>
        )
    }
}

ReactDOM.render(<App/>, document.getElementById("conteudo"))