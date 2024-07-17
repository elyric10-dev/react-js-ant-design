import { Flex, Menu } from "antd";
import React from "react";
import { FaLeaf } from "react-icons/fa";
import {
  DashboardOutlined,
  ShoppingOutlined,
  OrderedListOutlined,
  ProfileOutlined,
  SettingOutlined,
  LogoutOutlined,
} from "@ant-design/icons";

function Sidebar() {
  const sidebarItems = [
    {
      key: 1,
      icon: <DashboardOutlined />,
      label: "Dashboard",
    },
    {
      key: 2,
      icon: <ShoppingOutlined />,
      label: "My Orders",
    },
    {
      key: 3,
      icon: <OrderedListOutlined />,
      label: "ToDo",
    },
    {
      key: 4,
      icon: <ProfileOutlined />,
      label: "Profile",
    },
    {
      key: 5,
      icon: <SettingOutlined />,
      label: "Settings",
    },
    {
      key: 6,
      icon: <LogoutOutlined />,
      label: "Logout",
    },
  ];
  return (
    <div>
      <Flex align="center" justify="center" className="logo-container">
        <div className="logo">
          <FaLeaf />
        </div>
      </Flex>
      <Menu
        defaultSelectedKeys={"1"}
        items={sidebarItems}
        className="menu-items"
      />
    </div>
  );
}

export default Sidebar;
