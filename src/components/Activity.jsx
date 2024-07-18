import { Avatar, Button, Flex, List, Typography } from "antd";
import React from "react";

const data = [
  {
    id: 1,
    name: "Kycie Abera",
    orderTime: 2,
  },
  {
    id: 2,
    name: "Riosie Mallari",
    orderTime: 4,
  },
  {
    id: 3,
    name: "Erica Manatad",
    orderTime: 1,
  },
  {
    id: 4,
    name: "Merry Cony",
    orderTime: 3,
  },
  {
    id: 5,
    name: "Edwin Ward",
    orderTime: 6,
  },
  {
    id: 6,
    name: "Ky Ception",
    orderTime: 4,
  },
];
function Activity() {
  return (
    <Flex vertical gap={"small"}>
      <Flex justify="space-between">
        <Typography.Title
          level={3}
          strong
          className="!text-[var(--forest-green)]"
        >
          Activities
        </Typography.Title>
        <Button type="link" className="text-gray-400">
          View All
        </Button>
      </Flex>

      <List
        pagination
        dataSource={data}
        renderItem={(user, index) => (
          <List.Item>
            <List.Item.Meta
              avatar={
                <Avatar
                  src={`https://api.dicebear.com/7.x/miniavs/svg?seed=${index}`}
                />
              }
              title={<a href="#">{user.name}</a>}
              description="Ordered a new plant"
            />
            <span className="text-gray-400">
              {user.orderTime} {user.orderTime == 1 ? "day ago" : "days ago"}
            </span>
          </List.Item>
        )}
      />
    </Flex>
  );
}

export default Activity;
