
import React from 'react'
import './App.css';
import { Button,  Input, InputLabel} from '@mui/material';
import { FormControl } from '@mui/material';

import { useState , useEffect} from 'react';
import Message from './Message';
import db from './firebase';
import firebase from "firebase/compat/app";
import "firebase/compat/firestore"
import "firebase/compat/database"
import FlipMove from 'react-flip-move';



const App = () => {

  const [input, setInput] = useState('')
  const [messages, setMessages] =useState([])
  const [username, setUsername] = useState('Coder')
  // console.log(input)
  console.log("This is : " , messages)


  //useState is just like variable
  //useEffect is used when we want condional execution of block of code

  useEffect(()=>{
    setUsername(prompt('Please enter your name '))
  }, [])


  useEffect(()=>{
    //run when app component get loads 
    //db is database connected
    //messages is collection name created
    //docs is collection of document in shot it return the array of object
    //doc is a single document

    db.collection('messages').orderBy('timestamp', 'desc').onSnapshot(
      snapshot => {
        setMessages(snapshot.docs.map(doc =>({id:doc.id , message:doc.data()})))
      }
    )
   
  },[])

  const sendMessage = (event) => {
 
     //all the logic to send the message

     event.preventDefault()


     db.collection('messages').add(
      {
        username:username,
        message:input,
        timestamp:firebase.firestore.FieldValue.serverTimestamp()
      }
     )

    
     setInput('')
  }
 

  return (
    <div >
      <div className='app__logo'><img  src='https://img.freepik.com/premium-photo/round-messenger-logo-isolated-white-background_469489-1041.jpg?w=100&h=100'/></div>
      <h1>Welcome to Gossip ! </h1>
      <h2>Hello, {username} !</h2>
       <form className='app__form'>
       
       <FormControl className='app__formControl'>
     
       <Input  className='app__input' placeholder='Enter a message...' value={input} onChange={(event) => setInput(event.target.value)}/>
       <Button  className='app_iconButton' variant='contained' disabled ={!input} type='submit' onClick={sendMessage}>Send Message</Button>
      </FormControl>

       
       </form>

       <FlipMove>
       {
        messages.map(({id, message}) =>
        (
          <Message  key={id} username = {username} message={message}/>
          
        ) 
        )
      }
       </FlipMove>

    

    </div>
  )
}

export default App
