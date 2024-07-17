import React from "react";
import SidebarContent from "./SidebarContent";
import Activity from "./Activity";
import { Flex } from "antd";

function SideContent() {
  return (
    <Flex vertical gap={"2.3rem"} className="w-80">
      <SidebarContent />
      <Activity />
    </Flex>
  );
}

export default SideContent;
