import React from "react";
import {
  Stack,
  Flex,
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  Link,
  Text,
  Box,
  Image,
  Heading,
  SimpleGrid,
} from "@chakra-ui/react";
import { Link as ReachLink } from "react-router-dom";
import { textHover } from "../styles/styles.js";
import {
  productList,
  advtbar2,
  advtbar,
  trendingNext,
  secondlast,
  lastbar,
} from "../componants/productlist.data";
const Mens = () => {
  console.log(productList.men);
  return (
    <Stack p={7}>
      <Breadcrumb textAlign="left">
        <BreadcrumbItem>
          <BreadcrumbLink as={Link} to="/">
            Home
          </BreadcrumbLink>
        </BreadcrumbItem>

        <BreadcrumbItem>
          <BreadcrumbLink as={Link} href="/Men" color="global.blue">
            Women
          </BreadcrumbLink>
        </BreadcrumbItem>
      </Breadcrumb>
      <Flex>
        <Stack
          w="20%"
          textAlign="left"
          // overflow="scroll"
          // maxHeight="600px"
          // position="relative"
          bg="white"
        >
          <Link as={ReachLink} to="/women" color="global.blue" fontWeight="450">
            Women
          </Link>
          <Link as={ReachLink} to="/women/Clothing" _hover={textHover}>
            Clothing
          </Link>
          <Link as={ReachLink} to="/" _hover={textHover}>
            Shoes
          </Link>
          <Link as={ReachLink} to="/" _hover={textHover}>
            Accessories
          </Link>
          <Link as={ReachLink} to="/" _hover={textHover}>
            Sunglasses & Eyewear
          </Link>
          <Link as={ReachLink} to="/" _hover={textHover}>
            Watches
          </Link>
          <Link as={ReachLink} to="/" _hover={textHover}>
            Grooming & Cologne
          </Link>
          <Link as={ReachLink} to="/" _hover={textHover}>
            Luggage & Travel
          </Link>
          <Link as={ReachLink} to="/" _hover={textHover}>
            New Arrivals
          </Link>
          <Link as={ReachLink} to="/" _hover={textHover}>
            Best Sellers
          </Link>
          <Link as={ReachLink} to="/" _hover={textHover}>
            Clearance
          </Link>
          <Link as={ReachLink} to="/" _hover={textHover}>
            Flash Events
          </Link>
        </Stack>
        <Stack p={5} pt={0} spacing="5%">
          <Stack>
            <Heading size="sm" fontWeight="440" textAlign="left">
              Men
            </Heading>
            <SimpleGrid gap={5} columns={[2, 2, 3, 6]} justify="center">
              {productList.women.map((item, i) => {
                return (
                  <Box textAlign="left">
                    <Image src={item.image} alt="xyz" />
                    <Link
                      as={ReachLink}
                      to={`/women/${item.type}`}
                      style={textHover}
                      color="global.blue"
                      fontSize="13px"
                    >
                      {item.type}
                    </Link>
                  </Box>
                );
              })}
            </SimpleGrid>
          </Stack>
          <Image src={advtbar.women} />
          <Stack textAlign="left">
            <Image src={advtbar2.women.image} alt="men's collaction" />
            <Heading size="md" mt={2} color="global.black" fontWeight="450">
              {advtbar2.women.title}
            </Heading>
            <Text>{advtbar2.women.text}</Text>
            <Flex gap={3}>
              {advtbar2.women.links.map((ele) => {
                return (
                  <Link color="global.blue" textDecoration="underline">
                    {ele}
                  </Link>
                );
              })}
            </Flex>
          </Stack>
          <Stack textAlign="left">
            <Image src={secondlast.women.image} />
            <Heading size="md" mt={2} color="global.black" fontWeight="450">
              {secondlast.women.title}
            </Heading>
            <Text>{secondlast.women.text}</Text>
            <Flex gap={3}>
              {secondlast.women.links.map((ele) => {
                return (
                  <Link color="global.blue" textDecoration="underline">
                    {ele}
                  </Link>
                );
              })}
            </Flex>
          </Stack>

          <Image src={lastbar.women} />
        </Stack>
      </Flex>
    </Stack>
  );
};

export default Mens;
