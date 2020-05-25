import React from 'react'

function Message(props) {
  const {person, text} = props.message;
  const name = props.message.person.clientData.name;
  const myMessage = person.id === props.person.id;
  const leftOrRight = myMessage ? 'liMessage currentMessage' : 'liMessage'; 
  const borderRadius = myMessage ? 'myText' : 'text';
  return(
    <li className={leftOrRight}>
      <div className='message'>
        <div className='userId'>
          {name}
        </div>
        <div className={borderRadius}>
          {text}
        </div>
      </div>
    </li>
  )
}

export default Message