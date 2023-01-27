import { Button, Col, Row } from 'antd';
import React from 'react'
import { Link } from 'react-router-dom';
import reactLogo from "./assets/images/react.png";
import reduxLogo from "./assets/images/redux.png";
import './App.css';

function App() {
  return (
    <div className='main_page'>
      {/* <Row>
        <Col xs={24} sm={24} md={24} lg={24}> */}
      <div className='main_content'>
        <div className='flex'>
          <div>
            <img src={reactLogo} className='App-logo' />
          </div>
          <div className='redux_logo'>
            <img src={reduxLogo} className='App-logo' />
          </div>
          <div className='redux_logo hide'>
            <img src={reduxLogo} className='App-logo' />
          </div>
        </div>
        <div className='buttons'>
          <Link to={'/login'}><Button type='primary'>Login</Button></Link>
          <Link to={'/signup'}><Button type='primary'>Singup</Button></Link>
        </div>
      </div>
      {/* </Col>
      </Row> */}
    </div>
  );
}

export default App;
