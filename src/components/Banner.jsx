import { Button, Card, Flex, Typography } from "antd";
import React from "react";

function Banner() {
  return (
    <Card className="p-5">
      <Flex vertical>
        <Flex vertical align="flex-start">
          <Typography.Title level={2} strong>
            Create and sell products
          </Typography.Title>
          <Typography.Text type="primary" strong>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laudantium
            voluptatibus eum ad consequuntur cupiditate officia sunt ut, totam
            dolorem incidunt!
          </Typography.Text>
        </Flex>
      </Flex>

      <Flex gap={"large"} className="pt-6">
        <Button type="primary" size="large" className="explore-button">
          Explore more
        </Button>
        <Button type="primary" size="large" className="top-seller-button">
          Top Sellers
        </Button>
      </Flex>
    </Card>
  );
}

export default Banner;
