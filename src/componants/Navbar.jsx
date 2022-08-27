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
  Button,
  SimpleGrid,
} from "@chakra-ui/react";
import React from "react";
import { BsSearch } from "react-icons/bs";
import { IoIosArrowDown } from "react-icons/io";
import { VscLock } from "react-icons/vsc";
import { buttonhover } from "../styles/styles.js";
import { Link as ReachLink } from "react-router-dom";
import { Navigate } from "react-router-dom";
import { AppContext } from "../context/AppContext.jsx";

const Navbar = () => {
  const { cartDetail, isAuth, setisAuth } = React.useContext(AppContext);

  const handleImage = () => {
    <Navigate to="/" replace={true} />;
  };
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
          <Link w="7%" to="/" as={ReachLink}>
            <Image
              w="100%"
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/73/Nordstrom_Rack_logo_2021.svg/2560px-Nordstrom_Rack_logo_2021.svg.png"
              onClick={handleImage}
            />
          </Link>

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
          <Button
            visibility={!isAuth ? "hidden" : "visible"}
            onClick={() => {
              setisAuth(false);
            }}
            variant="ghost"
            color="global.blue"
            fontWeight="450"
          >
            Logout
          </Button>
          <Flex align="center" w="10%">
            <Link
              as={ReachLink}
              to="/signin"
              visibility={isAuth ? "hidden" : "visible"}
            >
              <Flex align="center">
                <Text>Sign In</Text> <IoIosArrowDown color="global.black" />
              </Flex>
            </Link>

            <Spacer />

            <Link as={ReachLink} to="/cart">
              <VscLock fontSize="1.6rem" />
            </Link>
            <Link as={ReachLink} to="/cart">
              <Text fontSize="xs" position="relative" left={-4} top={1}>
                {cartDetail.length}
              </Text>
            </Link>
          </Flex>
        </Flex>
        <SimpleGrid spacing={1} justify="center" pb={0} columns={[3, 3, 5, 11]}>
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
            Bags
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
          <Link as={ReachLink} color="global.blue" to="/" _hover={buttonhover}>
            Flash Events
          </Link>
        </SimpleGrid>
      </Stack>
    </div>
  );
};

export default Navbar;
