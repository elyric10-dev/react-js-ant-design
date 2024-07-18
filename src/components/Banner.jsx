import { Button, Card, Flex, Grid, Typography } from "antd";
import React from "react";

const { useBreakpoint } = Grid;

function Banner() {
  const screens = useBreakpoint();
  return (
    <Card className="p-0 m-0 md:p-5 lg:h-[250px]">
      <div>
        <Flex vertical>
          <Flex vertical align="flex-start">
            <Typography.Title level={2} strong>
              Create and sell products
            </Typography.Title>
            <Typography.Text type="primary" strong>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Laudantium voluptatibus eum ad consequuntur cupiditate officia
              sunt ut, totam dolorem incidunt!
            </Typography.Text>
          </Flex>
        </Flex>

        <Flex gap={"middle"} className="pt-6">
          <Button
            type="primary"
            size={screens.xs ? "middle" : "large"}
            className="explore-button"
          >
            Explore more
          </Button>
          <Button
            type="primary"
            size={screens.xs ? "middle" : "large"}
            className="top-seller-button"
          >
            Top Sellers
          </Button>
        </Flex>
      </div>
    </Card>
  );
}

export default Banner;
