import { Button, Card, Image, Flex, Typography } from "antd";
import React from "react";
import plantData from "../plantData";

function ProductLists() {
  const { Meta } = Card;
  return (
    <>
      <Flex align="center" justify="space-between">
        <Typography.Title
          level={3}
          strong
          className="!text-[var(--forest-green)]"
        >
          My Listing
        </Typography.Title>
        <Button type="link" className="text-gray-400">
          View All
        </Button>
      </Flex>

      <div className="overflow-x-scroll">
        <Flex gap={"20px"} align="center" justify="flex-start">
          {plantData.map((plant) => (
            <Card key={plant.id} hoverable>
              <Image
                src={plant.picture}
                width={200}
                height={240}
                className="object-cover"
              />
              <Meta title={plant.name} />
            </Card>
          ))}
        </Flex>
      </div>
    </>
  );
}

export default ProductLists;
