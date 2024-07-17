import React, { useState } from "react";
import { Flex, Button, Layout } from "antd";
import Sidebar from "./components/Sidebar";
import CustomHeader from "./components/CustomHeader";
import { MenuUnfoldOutlined, MenuFoldOutlined } from "@ant-design/icons";
import "./App.css";
import "./index.css";
import MainContent from "./components/MainContent";
import SideContent from "./components/SideContent";

function App() {
  const { Sider, Header, Content } = Layout;
  const [collapsed, setCollapsed] = useState(false);
  return (
    <Layout>
      <Sider theme="light" trigger={null} collapsible collapsed={collapsed}>
        <div className="sidebar-container">
          <Sidebar />
          <Button
            type="text"
            size="large"
            icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
            onClick={() => setCollapsed(!collapsed)}
            className="trigger-button"
          />
        </div>
      </Sider>
      <Layout>
        <Header className="custom-header">
          <CustomHeader></CustomHeader>
        </Header>
        <Content className="content-container">
          <Flex gap={"large"}>
            <MainContent />
            <SideContent />
          </Flex>
        </Content>
      </Layout>
    </Layout>
  );
}

export default App;
