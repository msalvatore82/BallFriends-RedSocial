import React, { useState } from 'react';
import { PlusOutlined, EyeTwoTone, EyeInvisibleOutlined } from '@ant-design/icons';
import {
  Form,
  Input,
  Select,
  DatePicker,
  Upload,
} from 'antd';
const FormDisabledDemo = () => {
  const [ setComponentDisabled] = useState(true);
  const onFormLayoutChange = ({ disabled }) => {
    setComponentDisabled(disabled);
  };

  
  return (
    <>
      
    
       <Form>
        <div>
        <Form.Item label="Input"> Nombre <Input /> </Form.Item>
        <Form.Item label="Input"> Apellido <Input /> </Form.Item>
        </div>
        <div>

        <Form.Item name={['user', 'email']} label="Email" rules={[ { type: 'email',},]}><Input /></Form.Item>
        <Form.Item>
        <Input.Password placeholder="input password" /></Form.Item>
      <Input.Password
        placeholder="input password"
        iconRender={(visible) => (visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />)}
      />

        </div>
        

        <Form.Item label="DatePicker">
          <DatePicker />
        </Form.Item>
       
        
        <Form.Item label="Upload" valuePropName="fileList">
          <Upload action="/upload.do" listType="picture-card">
            <div>
              <PlusOutlined />
              <div
                style={{
                  marginTop: 8,
                }}
              >
                Upload
              </div>
            </div>
          </Upload>
        </Form.Item>
       
      </Form>
    </>
  );
};
export default () => <FormDisabledDemo />;

