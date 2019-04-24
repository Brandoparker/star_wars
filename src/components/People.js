import React from 'react';
import { Header } from 'semantic-ui-react';
import axios from 'axios'
import {Link, } from 'react-router-dom'


class People extends React.Component {


  state = { people: [], };

  componentDidMount() {
    axios.get("/api/people")
      .then( res => {
        this.setState({ people: res.data, });
      })
  }

  renderCohorts = () => {
    const { people } = this.state
    if (topics.length <= 0)
      return <h1>No Topic</h1>
    return topics.map( topic => (
      
        
        <Header >{ topic.title }</Header>
      ))
  }
      
      render() {
        return (
          <div>
            
            <Header as='h1' textAlign='center'>{ this.renderTopics }</Header>
            <Button as={Link} to='/topicsform'>Edit</Button>
          
            
          </div>
        )
      }
    }
    
export default CohortView;