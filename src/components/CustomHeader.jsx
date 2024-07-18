import { Avatar, Flex, Typography } from "antd";
import Search from "antd/es/transfer/search";
import React from "react";
import {
  MessageOutlined,
  NotificationOutlined,
  UserOutlined,
} from "@ant-design/icons";

function CustomHeader({ collapsed }) {
  return (
    <div
      className={`transition-delay flex flex-col md:flex-row md:items-center md:justify-between ${
        collapsed ? "items-center" : ""
      }`}
    >
      <Typography.Title level={4} type="secondary">
        Welcome back, Elyric
      </Typography.Title>
      <div className="flex items-center justify-between gap-2">
        <div className="w-full min-w-40 max-w-72">
          <Search placeholder="Search Dashboard" />
        </div>

        <Flex gap={6}>
          <MessageOutlined className="header-icon" />
          <NotificationOutlined className="header-icon" />
          <Avatar icon={<UserOutlined />} className="avatar" />
        </Flex>
      </div>
    </div>
  );
}

export default CustomHeader;
