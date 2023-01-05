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
const MensList = () => {
  const { state, dispatch } = useContext(AppContext);

  const [data, setdata] = useState([]);
  useEffect(() => {
    dispatch({ type: "Getdata" });

    axios
      .get("https://nordstrom-2o0p.onrender.com/mens?type=clothes")
      .then((res) => {
        setdata(res.data);
        dispatch({ type: "GetdataSuccess" });
      })
      .catch((err) => {
        dispatch({ type: "GetdataError" });
      });
  }, []);
  const handleFilter = (e) => {
    let type = e.target.value;
    dispatch({ type: "Getdata" });
    if (type === "price_htl") {
      const arr = data.sort((a, b) => b.price - a.price);
      setdata(arr);
      dispatch({ type: "GetdataSuccess" });
    }
    if (type === "price_lth") {
      const arr = data.sort((a, b) => a.price - b.price);
      setdata(arr);
      dispatch({ type: "GetdataSuccess" });
    }
    if (type === "rating_htl") {
      const arr = data.sort((a, b) => b.rating - a.rating);
      setdata(arr);
      dispatch({ type: "GetdataSuccess" });
    }
    if (type === "discount_htl") {
      const arr = data.sort((a, b) => b.discount - a.discount);
      setdata(arr);
      dispatch({ type: "GetdataSuccess" });
    }
  };
  const handleTabs = (e) => {
    let type = e.target.value;

    axios
      .get(
        `https://nordstrom-2o0p.onrender.com/mens?type=clothes&category=${type}`
      )
      .then((res) => {
        setdata(res.data);
      })
      .catch((err) => {
        dispatch({ type: "GetdataError" });
      });
  };
  const handledefault = () => {
    axios
      .get("https://nordstrom-2o0p.onrender.com/mens?type=clothes")
      .then((res) => {
        setdata(res.data);
      })
      .catch((err) => {});
  };
  if (state.isloading) {
    return <Text>Loading...</Text>;
  }
  if (state.isError) {
    return <Text>Error</Text>;
  }
  return (
    <>
      <Stack p={7} pt={1} textAlign="left">
        <Stack></Stack>
        <Heading fontWeight="450" color="global.black" fontSize="lg">
          Men's Clothing
        </Heading>
        <Stack>
          <Tabs colorScheme="global.blue">
            <TabList>
              <Tab onClick={handledefault}>All Clothing</Tab>
              <Tab onClick={handleTabs} value="tshirt">
                {" "}
                T-shirts
              </Tab>
              <Tab onClick={handleTabs} value="pants">
                {" "}
                Pants
              </Tab>
              <Tab onClick={handleTabs} value="shirt">
                Shirts
              </Tab>
              <Tab onClick={handleTabs} value="shorts">
                {" "}
                Shorts
              </Tab>
              <Hide below="md">
                <Tab onClick={handleTabs} value="activewear">
                  Activewear
                </Tab>
                <Tab onClick={handleTabs} value="jacket">
                  {" "}
                  Blazers
                </Tab>
                <Tab> Coats & Jackets </Tab>
              </Hide>
            </TabList>
          </Tabs>

          <Flex justify="right">
            <Select
              variant="outline"
              w="25%"
              borderRadius="none"
              color="global.black"
              onChange={handleFilter}
            >
              <option>Sort by featured</option>
              <option value="rating_htl">Sort by Customer Rating</option>
              <option value="price_htl">Sort by Price:High to Low</option>
              <option value="price_lth">Sort by Price:Low to High</option>
              <option value="discount_htl">Sort by percent off</option>
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

export default MensList;
