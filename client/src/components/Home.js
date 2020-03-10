import React from 'react';
import { UserConsumer } from "../utils/UserContext"
import { Jumbotron, Button } from 'reactstrap';
import  API from "../utils/API"
import { Link } from "react-router-dom"
import "../styles/Home.css"

const Home = (props) => {
  
  // function addBadge (e) {
  //   // e.preventDefault();
  //   console.log('The link was clicked.');
  //   console.log("state", props)
  //   // if (props.state.loggedIn) {
  //   //   API.logout().then(()=> {
  //   //     console.log("logged out success")
  //   //     props.setState({
  //   //       loggedIn:false,
  //   //       user: null
  //   //     })
  //   //   })
  //   // }
  // }
  
  return (
    <UserConsumer>
      {({ data, logout, addBadge }) => (
        
        <div>
          {console.log(data)}
          
          {(data.loggedIn) ? (

            //if they are logged in, show this page
            <Jumbotron>
              <p className="lead">
              <Button color="success" onClick={addBadge}>Add Badge Yay</Button>
              </p>
              <h1 className="display-3">Hello, welcome to OceanPort, {data.user.email}!</h1>
              <p className="lead">This is a simple hero unit, a simple Jumbotron-style component for calling extra attention to featured content or information.</p>
              <hr className="my-2" />
              <p>It uses utility classes for typography and spacing to space content out within the larger container.</p>
              <p className="lead">
                <Button color="primary" onClick={logout}>Logout</Button>
              </p>
              
            </Jumbotron>

          ) : (

            //if user is not logged in, show this:
              <Jumbotron>
                <h1 className="display-3">Hello, welcome to OceanPort!</h1>
                <Link to="/login"><Button color="primary">Log in</Button></Link>
                  <Link to="/signup"><Button color="primary">Don't have an account? Click here to sign up!</Button></Link>
                  
              </Jumbotron>
                

            )}
        </div>
      )}
    </UserConsumer>
  );
};

export default Home;