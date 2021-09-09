import { Component } from "react"

interface ButtonProps {
  onClick?: () => any;
  initializeClicked?: boolean;
}

interface ButtonState {
  alreadyClicked: boolean;
  timerId?: NodeJS.Timeout
}

class Button extends Component<ButtonProps, ButtonState> {
  constructor (props: ButtonProps) {
    super(props);
    this.state = {
      alreadyClicked: !!props.initializeClicked
    }
  }

  componentDidMount () {
    const timerId = setInterval(() => {
      console.log('To rodando')
    }, 5000)
    this.setState({ timerId })
  }

  componentWillUnmount () {
    console.log('Button será desmontado')
    if(this.state.timerId)
    clearInterval(this.state.timerId)
  }

  render () {
    console.log(this.props)
    return <button 
      onClick={() => { 
      this.setState({
        alreadyClicked: true
      })  
      this.props.onClick?.call([])
  }}
      disabled={this.state.alreadyClicked}
    >
      { this.props.children }
    </button>
  }
}

export default Button