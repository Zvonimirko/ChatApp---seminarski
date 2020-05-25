import React from 'react'
import ReactDOM from 'react-dom'
import Message from './Message.component'

class MessageList extends React.Component {

  componentDidUpdate() {
    const node = ReactDOM.findDOMNode(this)
    node.scrollTop = node.scrollHeight
  }
  
  render() {
    return(
    <ul className='messageList'>
      {this.props.messages.map((message, index) => <Message message={message} key={index} person={this.props.person}/>)}
    </ul>
  )
}}

export default MessageList
