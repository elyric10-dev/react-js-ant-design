import { Avatar, Button, Card, Divider, Flex, Tooltip, Typography } from "antd";
import React from "react";
import { topSellerData } from "../assets/topSellerData";

function SellerLists() {
  return (
    <Flex>
      <div className="flex-1">
        <Flex align="center" justify="space-between">
          <Typography.Title
            level={4}
            strong
            className="!text-[var(--forest-green)]"
          >
            Top Seller
          </Typography.Title>
          <Button type="link" className="text-gray-400">
            View All
          </Button>
        </Flex>

        <Card>
          <Flex align="center" justify="space-evenly">
            <Avatar.Group
              max={{
                count: 6,
                style: {
                  color: "var(--light-black)",
                  backgroundColor: "blanchedalmond",
                  cursor: "default",
                },
              }}
            >
              {topSellerData.map((topSeller) => (
                <Tooltip
                  key={topSeller.id}
                  title={topSeller.name}
                  placement="top"
                >
                  <Avatar src={topSeller.image_url} />
                </Tooltip>
              ))}
            </Avatar.Group>
            <Divider type="vertical" className="bg-green-700 w-[3px] h-12" />
            <Flex vertical="row">
              <Typography.Text strong>1,200 plant sold</Typography.Text>
              <Typography.Text strong>10 seller</Typography.Text>
            </Flex>
          </Flex>
        </Card>
      </div>

      <div className="flex-1">
        <Flex align="center" justify="space-between">
          <Typography.Title
            level={4}
            strong
            className="!text-[var(--forest-green)]"
          >
            Featured Seller
          </Typography.Title>
          <Button type="link" className="text-gray-400">
            View All
          </Button>
        </Flex>

        <Card>
          <Flex align="center" justify="space-evenly">
            <Avatar.Group
              max={{
                count: 6,
                style: {
                  color: "var(--light-black)",
                  backgroundColor: "blanchedalmond",
                  cursor: "default",
                },
              }}
            >
              {topSellerData.map((topSeller) => (
                <Tooltip
                  key={topSeller.id}
                  title={topSeller.name}
                  placement="top"
                >
                  <Avatar src={topSeller.image_url} />
                </Tooltip>
              ))}
            </Avatar.Group>
            <Divider type="vertical" className="bg-green-700 w-[3px] h-12" />
            <Flex vertical="row">
              <Typography.Text strong>2,430 plant sold</Typography.Text>
              <Typography.Text strong>28 seller</Typography.Text>
            </Flex>
          </Flex>
        </Card>
      </div>
    </Flex>
  );
}

export default SellerLists;
