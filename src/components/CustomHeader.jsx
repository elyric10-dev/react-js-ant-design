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

// import { Avatar, Flex, Typography } from "antd";
// import Search from "antd/es/input/Search";
// import React from "react";
// import { BiMessage, BiUser } from "react-icons/bi";
// import { IoNotifications } from "react-icons/io5";

// const CustomHeader = () => {
//   return (
//     <Flex align="center" justify="space-between">
//       <Typography.Title level={3} type="secondary">
//         Welcome back, Elyric
//       </Typography.Title>

//       <Flex align="center" gap={"3rem"}>
//         <Search placeholder="Search Dashboard" allowClear />

//         <Flex align="center" gap={"10px"}>
//           <BiMessage />
//           <IoNotifications />
//           <Avatar icon={<BiUser />} />
//         </Flex>
//       </Flex>
//     </Flex>
//   );
// };

// export default CustomHeader;
