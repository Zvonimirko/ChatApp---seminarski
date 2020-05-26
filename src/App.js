import React from "react";
import "./App.css";
import MessageList from "./Components/MessageList.component";
import Input from "./Components/Input.component";
import PeopleList from './Components/People.component';

function randomName() {
  const names = ["Marko", "Zvonimir", "Slaven", "Tajana", "Nives", "Martina", "Ivana", "Silvio", "Ivica", "Dražen", "Ljiljana", "Matea", "Ivan", "Joža"];
  const name = names[Math.floor(Math.random() * names.length)];
  return name;
}

class App extends React.Component {
  roomName = 'observable-Random-room';  
  state = {
    members: [],
    messages: [],
    person: {
      name: randomName(),
    },
  };
  
  constructor() {
    super();

    this.drone = new window.Scaledrone("QNtSp4VHx9uOCZTM", {
      data: this.state.person
    });
    
    this.drone.on('open', error => {
      // Connection has been opened if no error
      if (error) {
      // An error has occurred with the connection
        return console.error(error);
      }
      
      // Initial state of members
        room.on('members', members => {
          this.setState({members})
       });

       // User joined the room
        room.on('member_join', member => {
          this.setState({members: [...this.state.members, member]})
       });

       // User left the room
      room.on('member_leave', ({id}) => {
        // const index = this.state.members.findIndex(member => member.id !== id);
        this.setState({members: this.state.members.filter(member => member.id!==id)});
      });
      
      const person = {...this.state.person, id: this.drone.clientId};
        this.setState({person});
      });

    const room = this.drone.subscribe(this.roomName);

    room.on('data', (data, member) => {
      const messages = this.state.messages;
      messages.push({person: member, text: data});
      this.setState({messages});
    });
  }
  
  render() {
    return (
      <div className="App">
        <header className='header'>
          <h1>#ChatApp</h1>
        </header>
        <MessageList messages={this.state.messages} person={this.state.person}/>
        <Input sendMessage={this.sendMessage} />
        <PeopleList memberList={this.state.members}/>
      </div>
    );
  }

  sendMessage = (message) => {
    // no empty or only spaces
    if (message === null || message.trim() === "") {
          return;
        } else {
    this.drone.publish({
      room: this.roomName,
      message
    });
  }
  }

}

export default App;
