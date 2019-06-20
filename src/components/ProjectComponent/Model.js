import { Modal, Button, Form, Row, Col, Input, Checkbox, DatePicker, TimePicker } from 'antd';
import React from 'react';
import react, { Component } from 'react'
import axios from 'axios'

class home extends Component {

  comp
}


function onChange(e) {
  console.log(`checked = ${e.target.checked}`);
}
export default class Model extends React.Component {
  state = {

    disabled: true,
    visible: false,
  };


  toggleDisable = () => {
    this.setState({ disabled: !this.state.disabled });
  };

  onChange = e => {
    console.log('checked = ', e.target.checked);
    this.setState({
      checked: e.target.checked,
    });
  };

  showModal = () => {
    this.setState({
      visible: true,
    });
  };

  handleOk = e => {
    console.log(e);
    this.setState({
      visible: false,
    });
  };

  handleCancel = e => {
    console.log(e);
    this.setState({
      visible: false,
    });
  };

  render() {

    return (
      <div>
        <Button type="primary" onClick={this.showModal}>
          Add Project
        </Button>
        <br />
        <Modal
          title="Add Project"
          visible={this.state.visible}
          onOk={this.handleOk}
          onCancel={this.handleCancel}
          width="600px"

        >
          <Form layout="vertical">
            <Row>

              <Col span={24} style={{ padding: "5px" }}>
                <Form.Item label="Project Name">
                  <Input placeholder="ProjectName" />
                </Form.Item>{" "}
              </Col>
            </Row>

            <Row>

              <Col span={8} style={{ padding: "5px" }}>
                <Form.Item label="Type">
                  <Input placeholder="Type" />
                </Form.Item>{" "}
              </Col>




              <Col span={8} style={{ padding: "5px" }}>
                <Form.Item label="Start Date" style={{ marginBottom: 0 }}>

                  <span style={{ display: 'inline-block', width: '24px', textAlign: 'center' }}></span>
                  <Form.Item style={{ display: 'inline-block', width: 'calc(90% - 12px)' }}>
                    <DatePicker />
                  </Form.Item>
                </Form.Item>
              </Col>




              <Col span={8} style={{ padding: "5px" }}>
                <Form.Item label="End Date" style={{ marginBottom: 0 }}>

                  <span style={{ display: 'inline-block', width: '24px', textAlign: 'center' }}></span>
                  <Form.Item style={{ display: 'inline-block', width: 'calc(90% - 12px)' }}>
                    <DatePicker />
                  </Form.Item>
                </Form.Item>
              </Col>


            </Row>

            <Row>

              <Col span={8} style={{ padding: "5px" }}>
                <Form.Item label="Duration">
                  <Input placeholder="Duration" />
                </Form.Item>{" "}
              </Col>

              <Col span={8} style={{ padding: "5px" }}>
                <Form.Item label="Status">
                  <Input placeholder="Status" />
                </Form.Item>{" "}
              </Col>


              <Col span={8} style={{ padding: "5px" }}>
                <Form.Item label="Config Id">
                  <Input placeholder="ConfigId" />
                </Form.Item>{" "}
              </Col>
            </Row>





            <Row>
              <Col>
                <div>

                  <p>

                    <Checkbox
                      style={{ marginLeft: '10px' }}

                      onClick={this.toggleDisable}
                      onChange={onChange}

                    >Edit
            {!this.state.disabled}
                    </Checkbox>

                  </p>
                </div>
              </Col>


              <Col span={24} style={{ padding: "5px" }}>

                <Form.Item>
                  <Input
                    disabled={this.state.disabled}
                    onChange={this.onChange}
                    placeholder="Abbrevation" />
                </Form.Item>{" "}
              </Col>

            </Row>

          </Form>

        </Modal>
      </div>
    );
  }
}


