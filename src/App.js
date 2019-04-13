import React, { Component } from 'react';
import logo from './logo.svg';
import Customer from "./components/Customer";
import './App.css';

const customers = [
{
  id : 1,
  image : 'https://placeimg.com/64/64/1',
  name : '이신헌',
  birthday : '950725',
  gender : 'male',
  job : '대학생'
},
{
  id : 2,
  image : 'https://placeimg.com/64/64/2',
  name : '박주영',
  birthday : '890712',
  gender : 'male',
  job : '대학생'
},
{
  id : 3,
  image : 'https://placeimg.com/64/64/3',
  name : '이병훈',
  birthday : '920125',
  gender : 'male',
  job : '대학생'
}
]

class App extends Component {
  render() {
    return (
      <div>
        {customers.map(c => {
          return(
            <Customer
              key={c.id}
              id={c.id}
              image={c.image}
              name={c.name}
              birthday={c.birthday}
              gender={c.gender}
              job={c.job}
            />
          )
        })
        }
      </div>
      )
  }
}

export default App;
