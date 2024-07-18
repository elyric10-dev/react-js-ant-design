import { Card, Flex, Image, Typography } from "antd";
import React from "react";
import plant3 from "../assets/images/plant3.png";

function SidebarContent() {
  return (
    <div>
      <Card className="lg:h-[250px] relative bg-gradient-to-b from-[var(--forest-green)] to-[#87e8de]">
        <Flex vertical="row">
          <Typography.Title level={4} strong>
            Today
            <br />
            28 orders
          </Typography.Title>
          <Typography.Title level={4} strong>
            This Month
            <br /> 930 orders
          </Typography.Title>
        </Flex>
        <Image
          src={plant3}
          width={220}
          height={"auto"}
          className="absolute -bottom-14 left-24"
        />
      </Card>
    </div>
  );
}

export default SidebarContent;
