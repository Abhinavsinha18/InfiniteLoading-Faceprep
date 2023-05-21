import { Box, Card, Flex, Image, Stack, Text } from "@chakra-ui/react";
import React, { useCallback, useRef, useState } from "react";
import LogoutButton from "../Components/LogoutButton";
import SkeletonCard from "../Components/SkeletonCard";
import FetchUser from "../Functions/FetchUser";


const Home = () => {
  const [pageNumber, setPageNumber] = useState(1);

  const { userData, load, error } = FetchUser(pageNumber);

  const track = useRef();
  const referenceElement = useCallback((el) => {
      if (load) return;
      if (track.current) track.current.disconnect();
      track.current = new IntersectionObserver((data) => {
        if (data[0].isIntersecting) {
          setPageNumber((prev) => prev + 1);
        }
      });
      if (el) track.current.observe(el);
    },
    [load]
  );
  return (
    <Box alignItems="center" maxW="60rem" margin="auto" w="95%">
      <LogoutButton />
      <Stack spacing="4" mt="30px" p="0.5rem" >
        {userData.map((el, i) => {
          if (userData.length === i + 1) {
            return (
              <Card
                ref={referenceElement}
                boxShadow="dark-lg"
                p="0.5rem"
                key={i+1}
              >
                <Flex alignItems="center" justifyContent="space-between">
                  <Text>{`${el.name.first} ${el.name.last}`}</Text>
                  <Image
                    h="50px"
                    marginBlock="10px"
                    borderRadius="50%"
                    src={el.picture.medium}
                    alt={`${el.name.first} ${el.name.last}`}
                  ></Image>
                </Flex>
              </Card>
            );
          } else {
            return (
              <Card boxShadow="dark-lg" p="0.5rem" key={i+1}>
                <Flex alignItems="center" justifyContent="space-between">
                  <Text>{`${el.name.first} ${el.name.last}`}</Text>
                  <Image
                    h="50px"
                    marginBlock="10px"
                    borderRadius="50%"
                    src={el.picture.medium}
                    alt={`${el.name.first} ${el.name.last}`}
                  ></Image>
                </Flex>
              </Card>
            );
          }
        })}

        <SkeletonCard></SkeletonCard>
        {load && <SkeletonCard></SkeletonCard>}
        {error && <Text>Unable to find User, Check after sometime!!</Text>}
      </Stack>
    </Box>
  );
};

export default Home;
