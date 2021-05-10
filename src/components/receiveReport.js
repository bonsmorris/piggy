import React, { Component } from "react";
import { Col, Row, Form, Table, Container, Button, InputGroup, FormControl } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';



export default class Login extends Component {
    render() {
        return (
          <div>
            <h3>Received Pig Report</h3>
            
            <div className="form-group form-inline">
              <Container><Form><Form.Group>
            <Row>
              <Col></Col> 
              <Col>             
                <Form.Label>Product:</Form.Label>
                <Form.Control as="select" size="sm" custom>
                  <option>Select Product</option>
                  <option>Natural Gas</option>
                  <option>Crude Oil</option>
                </Form.Control></Col>
                <Col>
               <Form.Label>Purity:</Form.Label><input placeholder='Enter purity'></input>
             
               </Col>
              
               <Col>
               <Form.Label>Line Size:</Form.Label><input placeholder='Enter line size'></input>
               </Col>
               <Col>             
                <Form.Label>Pig Type:</Form.Label>
                <Form.Control as="select" size="sm" custom>
                  <option>Select Type</option>
                  <option>Brush - New</option>
                  <option>Brush - Used</option>
                  <option>Cup - New</option>
                  <option>Cup - Used</option>
                </Form.Control></Col>
           </Row>
            </Form.Group></Form></Container>
              
            </div>
            <div className="form-group form-inline">
            <Row>
               <Col>
               <Form.Label>Date Received:</Form.Label><input placeholder='MM/DD/YYYY'></input>
               </Col>
               <Col>
               <Form.Label>Time Received:</Form.Label><input placeholder='HH:MM'></input>
               </Col>
               <Col>
               <Form.Label>Received By:</Form.Label><input placeholder='Receiver'></input>
               </Col>
               <Col>
               <Form.Label>Receive Location:</Form.Label><input placeholder='Location'></input>
               </Col>
               </Row>
               </div>
               <div>
               <Row><Col>
               <div>    <InputGroup className="mb-3">
    <InputGroup.Prepend>
      <Button variant="outline-secondary">Upload Photo</Button>
    </InputGroup.Prepend>
    <FormControl aria-describedby="basic-addon1" />
  </InputGroup></div>
               </Col></Row>   
                </div>          
            
            <div><Button as="input" type="submit" value="Submit" /></div>
          </div>
              
        );
    }
}