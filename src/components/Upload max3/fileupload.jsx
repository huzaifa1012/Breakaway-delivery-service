import React from 'react';
import { UploadOutlined } from '@ant-design/icons';
import { Button, Space, Upload } from 'antd';
import { pink } from '@mui/material/colors';
const FileMax3 = () => (
  <Space
  
    direction="vertical"
    style={{
      width: '100%',
    }}
    size="large"
  >
    
    <Upload
      action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
      listType="picture"
      maxCount={3}
      multiple
      
    >
      <Button 
      style={{
        color: 'Black',
        background: '#abcdef',
        width: '100%',
      }}
      
      icon={<UploadOutlined /> 
    }>Upload Parcel Picture</Button>
    </Upload>
  </Space>
);
export default FileMax3;