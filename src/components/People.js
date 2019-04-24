import React from 'react';
import { Header } from 'semantic-ui-react';
import axios from 'axios'
import {Link, } from 'react-router-dom'


class People extends React.Component {


  state = { people: [], };

  componentDidMount() {
    axios.get("https://swapi.co/api/people")
      .then( res => {
        this.setState({ people: res.data, });
      })
  }

  renderPeople = () => {
    const { people } = this.state
    if (people.length <= 0)
      return <h1>No People</h1>
    return people.map( person => (
      
        
        <Header >{ person.title }</Header>
      ))
  }
      
      render() {
        return (
          <div>
            
            <Header as='h1' textAlign='center'>{ this.renderPeople }</Header>
            <Button as={Link} to='/people'>Edit</Button>
          
            
          </div>
        )
      }
    }
    
export default People;