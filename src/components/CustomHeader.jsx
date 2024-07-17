import { Avatar, Flex, Typography } from "antd";
import Search from "antd/es/transfer/search";
import React from "react";
import {
  MessageOutlined,
  NotificationOutlined,
  UserOutlined,
} from "@ant-design/icons";

function CustomHeader() {
  return (
    <Flex align="center" justify="space-between">
      <Typography.Title level={3} type="secondary">
        Welcome back, Elyric
      </Typography.Title>
      <Flex align="center" gap={"3rem"}>
        <Search placeholder="Search Dashboard" />

        <Flex gap={6}>
          <MessageOutlined className="header-icon" />
          <NotificationOutlined className="header-icon" />
          <Avatar icon={<UserOutlined />} className="avatar" />
        </Flex>
      </Flex>
    </Flex>
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
