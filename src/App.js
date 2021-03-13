
import './App.css';
import { useEffect, useState } from 'react';
import {Card, Image, Icon} from 'semantic-ui-react'
import "bootstrap/dist/css/bootstrap.min.css";
function App() {

  const [Login, setLogin]= useState('');
  const [Avatar, setAvatar]= useState('');
  const [Repos, setRepos]= useState('');

  useEffect(  () => {
    fetch("https://api.github.com/users/example").
    then(res =>(res.json())).
    then(data=>{
      data.forEach(data => {
        console.log(data)
       });
    })
    
  },[])

  return (
    <div>
      <div className="navBar">
          <h1>Github</h1>
      </div>
      <div className="card m-5">
            <Card>
                <Image src={Avatar} wrapped ui={false} />
                    <Card.Content extra>
                       <a>
                        <Icon name='user' />
                         {Login} 
                       </a>
                    </Card.Content>
                    <Card.Content extra>
                      <a>
                    <Icon name='user' />
                         {Repos} Respository
                      </a>
                    </Card.Content>
            </Card>
        
      </div>
    </div>  
  );

  
}



export default App;
