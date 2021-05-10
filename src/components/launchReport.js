import React, { Component } from "react";
import { Col, Row, Form, FormControl, Table, Container, Button, InputGroup } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from "react-router-dom";



export default class launchReport extends Component {
    render() {
        return (
          <div>
            <h3>Epic Launched Pig Report</h3>
            
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
               <Form.Label>Date Launched:</Form.Label><input placeholder='MM/DD/YYYY'></input>
               </Col>
               <Col>
               <Form.Label>Time Launched:</Form.Label><input placeholder='HH:MM'></input>
               </Col>
               <Col>
               <Form.Label>Launched By:</Form.Label><input placeholder='Launcher'></input>
               </Col>
               <Col>
               <Form.Label>Launch Location:</Form.Label><input placeholder='Location'></input>
               </Col>
               </Row>
            </div>
            <Row><Col>
               <div>    <InputGroup className="mb-3">
    <InputGroup.Prepend>
      <Button variant="outline-secondary">Upload Photo</Button>
    </InputGroup.Prepend>
    <FormControl aria-describedby="basic-addon1" />
  </InputGroup></div>
               </Col></Row>
            <div><Button as="input" type="submit" value="Submit" /></div>

          </div>
              
        );
    }
}