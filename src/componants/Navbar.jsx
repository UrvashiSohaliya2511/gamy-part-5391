import {
  Box,
  Stack,
  Flex,
  Text,
  Image,
  InputGroup,
  InputLeftElement,
  Input,
  Spacer,
  Link,
} from "@chakra-ui/react";
import React from "react";
import { BsSearch } from "react-icons/bs";
import { IoIosArrowDown } from "react-icons/io";
import { VscLock } from "react-icons/vsc";
import { buttonhover } from "../styles/styles.js";
import { Link as ReachLink } from "react-router-dom";
const Navbar = () => {
  return (
    <div>
      <Box bg="global.blue" color="white" p={2} fontSize="md">
        <Text>
          Free shipping over $89, or shop online and pick up select orders at a
          Nordstrom Rack or Nordstrom store. <u>Learn More</u>
        </Text>
      </Box>
      <Stack p={7}>
        <Flex align="center" pt={1} pb={5} borderBottom="1px solid #bbb">
          <Image
            w="7%"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/73/Nordstrom_Rack_logo_2021.svg/2560px-Nordstrom_Rack_logo_2021.svg.png"
          />
          <Spacer />

          <InputGroup w="60%">
            <InputLeftElement
              pointerEvents="none"
              children={<BsSearch color="#333" />}
            />
            <Input
              type="tel"
              placeholder="Search for products and brands"
              borderRadius="none"
              border="1px solid #bbb"
              focusBorderColor="global.black"
            />
          </InputGroup>
          <Spacer />
          <Flex align="center" w="10%">
            Sign In <IoIosArrowDown color="global.black" />
            <Spacer />
            <VscLock fontSize="1.6rem" />
          </Flex>
        </Flex>
        <Flex justify="space-around" pb={0}>
          <Link
            to="/"
            as={ReachLink}
            style={{ color: "#d61f27" }}
            _hover={buttonhover}
          >
            Clearance
          </Link>
          <Link as={ReachLink} to="/women" _hover={buttonhover}>
            Women
          </Link>
          <Link as={ReachLink} to="/mens" _hover={buttonhover}>
            Men
          </Link>
          <Link as={ReachLink} to="/" _hover={buttonhover}>
            Kids
          </Link>
          <Link as={ReachLink} to="/" _hover={buttonhover}>
            Shoes
          </Link>
          <Link as={ReachLink} to="/" _hover={buttonhover}>
            Activewear
          </Link>
          <Link to="/" _hover={buttonhover}>
            Bags & Accessories
          </Link>
          <Link as={ReachLink} to="/" _hover={buttonhover}>
            Home
          </Link>
          <Link as={ReachLink} to="/" _hover={buttonhover}>
            Beauty
          </Link>
          <Link as={ReachLink} to="/" _hover={buttonhover}>
            Gifts
          </Link>
          <Link as={ReachLink} to="/" _hover={buttonhover}>
            Flash Events
          </Link>
        </Flex>
      </Stack>
    </div>
  );
};

export default Navbar;
