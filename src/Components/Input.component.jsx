import React from 'react'
import '../App'

class Input extends React.Component {
  state = {
    message: ''
  }

  handleInput = (event) => {
    this.setState({message: event.target.value})
  }

  handleSubmit = (event) => {
    event.preventDefault()
    this.props.sendMessage(this.state.message)
    this.setState({message: ''})
  }

  render() {
    return(
      <form className='sendForm'
            onSubmit={this.handleSubmit}>
              <input 
              value={this.state.message}
              onChange={this.handleInput} 
              className='input' 
              type='text'
              placeholder='Aa'
              autoFocus={true}
              maxLength="200"
              />
              <button className='messageButton'>Send Message</button>
      </form>
    )
  }
}

export default Input