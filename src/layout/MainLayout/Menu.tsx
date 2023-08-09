import { UserOutlined } from '@ant-design/icons';
import { Menu } from 'antd';
import { Link } from 'react-router-dom';
import menus from './menus';

function Menus() {
  return (
    <Menu
      theme="dark"
      mode="inline"
      defaultSelectedKeys={['1']}
      items={
        menus.map((a: Menu) => ({
          key: a.path,
          icon: <UserOutlined />,
          label: <Link to={a.path}>{a.name}</Link>,
        }))
      }
    />
  );
}

export default Menus;
