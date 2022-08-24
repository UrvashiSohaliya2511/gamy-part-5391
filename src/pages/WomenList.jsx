import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import ProductCard from "./ProductCard.jsx";
import {
  Stack,
  Text,
  Heading,
  Select,
  Flex,
  SimpleGrid,
  Tab,
  TabList,
  Tabs,
  Hide,
} from "@chakra-ui/react";
import { AppContext } from "../context/AppContext";
import { useContext } from "react";
const WomensList = () => {
  const { state, dispatch } = useContext(AppContext);

  const [data, setdata] = useState([]);
  useEffect(() => {
    dispatch({ type: "Getdata" });

    axios
      .get(
        "https://json-server-mocker-started.herokuapp.com/women?type=clothes"
      )
      .then((res) => {
        setdata(res.data);
        dispatch({ type: "GetdataSuccess" });
      })
      .catch((err) => {
        dispatch({ type: "GetdataError" });
      });
  }, []);
  if (state.isloading) {
    return <Text>Loading...</Text>;
  }
  return (
    <>
      <Stack p={7} textAlign="left">
        <Stack></Stack>
        <Heading fontWeight="450" color="global.black" fontSize="lg">
          Women's Clothing
        </Heading>
        <Stack>
          <Tabs colorScheme="global.blue">
            <TabList>
              <Tab>All Clothing</Tab>
              <Tab>Activewear</Tab>
              <Tab> Blazers</Tab>
              <Tab> Coats & Jackets </Tab>

              <Hide below="md">
                <Tab>Dresses</Tab>
                <Tab> Jeans & Denim</Tab>
                <Tab> Jumpsuits & Rompers</Tab>
                <Tab> Shorts</Tab>
                <Tab> Skirts</Tab>
              </Hide>
            </TabList>
          </Tabs>

          <Flex justify="right">
            <Select
              variant="outline"
              w="25%"
              borderRadius="none"
              color="global.black"
            >
              <option>Sort by featured</option>
              <option value="rating">Sort by Customer Rating</option>
              <option value="htl">Sort by Price:High to Low</option>
              <option value="lth">Sort by Price:Low to High</option>
              <option value="offer">Sort by percent off</option>
            </Select>
          </Flex>
          <SimpleGrid columns={[1, 2, 3, 4]} textAlign="left" spacing={5}>
            {data &&
              data.map((ele) => {
                return <ProductCard itemDetail={ele} />;
              })}
          </SimpleGrid>
        </Stack>
      </Stack>
    </>
  );
};

export default WomensList;
