import React from 'react'

function PeopleList(props) {
  return(
    <div className='memberList'>
      <h3>Member List</h3>
      <ul>
        {props.memberList.map((member) => <li key={member.id} className='member'>{member.clientData.name}</li>)}
      </ul>
    </div>
  )
}

export default PeopleList