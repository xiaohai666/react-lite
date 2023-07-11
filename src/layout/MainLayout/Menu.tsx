import React from 'react';
import { UserOutlined, } from '@ant-design/icons';
import { Menu } from 'antd';
import menus from './menus';
import { Link } from "react-router-dom";

const Menus: React.FC = () => {
    return (
        <Menu
            theme="dark"
            mode="inline"
            defaultSelectedKeys={['1']}
            items={
                menus.map(a => ({
                    key: a.path,
                    icon: <UserOutlined />,
                    label: <Link to={a.path}>{a.name}</Link>,
                }))
            }
        />
    );
};

export default Menus;