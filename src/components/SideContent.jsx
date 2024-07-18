import React from "react";
import SidebarContent from "./SidebarContent";
import Activity from "./Activity";
import { Flex } from "antd";

function SideContent() {
  return (
    <Flex vertical className="w-80 gap-8 mt-8 lg:mt-0 lg:ml-2">
      <SidebarContent />
      <Activity />
    </Flex>
  );
}

export default SideContent;
