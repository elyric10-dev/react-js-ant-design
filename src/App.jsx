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
    <Layout className="overflow-hidden">
      <Sider theme="light" trigger={null} collapsible collapsed={collapsed}>
        <div
          className={`sidebar-container ${
            collapsed ? "w-[81px]" : "w-[201px]"
          }`}
        >
          <Sidebar />
          <div>
            <Button
              type="text"
              size="large"
              icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
              onClick={() => setCollapsed(!collapsed)}
              className="trigger-button"
            />
          </div>
        </div>
      </Sider>
      <Layout>
        <Header className="custom-header md:h-16">
          <CustomHeader collapsed={collapsed}></CustomHeader>
        </Header>
        <Content className="content-container md:p-4 lg:p-8">
          <div className="flex flex-col lg:flex-row">
            <MainContent />
            <SideContent />
          </div>
        </Content>
      </Layout>
    </Layout>
  );
}

export default App;
