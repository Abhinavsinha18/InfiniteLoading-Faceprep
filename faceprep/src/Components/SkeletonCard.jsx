import { Card, Flex, Skeleton, SkeletonText } from "@chakra-ui/react";
import React from "react";

function SkeletonCard() {
  return (
    <Card p="0.5rem">
      <Flex justifyContent="space-between" alignItems="center">
        <SkeletonText
          isLoaded={false}
          marginBlock="25px"
          noOfLines={1}
          flex="1"
          maxW="300px"
          spacing="20px"
          skeletonHeight="30px"
        />
        <Skeleton
          h="50px"
          marginBlock="10px"
          flex="1"
          maxW="50px"
          borderRadius="50%"
          isLoaded={false}
        ></Skeleton>
      </Flex>
    </Card>
  );
}

export default SkeletonCard;
