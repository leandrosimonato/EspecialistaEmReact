import { Component } from "react"

interface ButtonProps {
  onClick?: () => any;
}

class Button extends Component<ButtonProps> {
  render () {
    console.log(this.props)
    return <button onClick={() => console.log('Batata')}>
      { this.props.children }
    </button>
  }
}

export default Button