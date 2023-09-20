import { useState } from 'react';
import {
  Button, Form, Input,
} from 'antd';

interface FieldType {
  hashSn?: string;
}

interface SnType {
  hashSn: string
}

function App() {
  const [form] = Form.useForm();
  const [snList, setSnList] = useState<SnType[]>([]);

  const addSn = (snRow: SnType) => {
    setSnList((prev) => [snRow, ...prev]);
  };

  const deleteSn = (hashSn: string) => {
    const newList = snList.filter((a) => a.hashSn !== hashSn);
    setSnList(newList.map((a) => ({ ...a })));
  };

  const hasSn = (hashSn: string) => snList.find((a) => a.hashSn === hashSn);

  const scanFinished = () => {
    form.validateFields()
      .then((values: FieldType) => {
        const { hashSn } = values;
        if (!hashSn || hasSn(hashSn)) { return; }
        addSn({ hashSn });
      }).catch((errorInfo) => {
        console.log(errorInfo);
      });
  };

  return (
    <Form
      form={form}
      name="basic"
      labelCol={{ span: 8 }}
      wrapperCol={{ span: 16 }}
      style={{ maxWidth: 600 }}
      initialValues={{ remember: true }}
      autoComplete="off"
    >
      <Form.Item<FieldType>
        label="Username"
        name="hashSn"
        rules={[{ required: true, message: 'Please input your username!' }]}
      >
        <Input />
      </Form.Item>
      {snList.map((a) => <div className="p3" onClick={() => { deleteSn(a.hashSn); }}>{a.hashSn}</div>)}
      <Button type="primary" htmlType="submit" onClick={scanFinished}>
        Submit
      </Button>
    </Form>
  );
}

export default App;
