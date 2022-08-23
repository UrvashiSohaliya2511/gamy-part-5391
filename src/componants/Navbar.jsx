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
  Button,
} from "@chakra-ui/react";
import React from "react";
import { BsSearch } from "react-icons/bs";
import { IoIosArrowDown } from "react-icons/io";
import { VscLock } from "react-icons/vsc";
const Navbar = () => {
  const buttonhover = {
    textUnderlineOffset: "4px",
    textDecoration: "2px underline",
  };

  return (
    <div>
      <Box bg="global.blue" color="white" p={2} fontSize="md">
        <Text>
          Free shipping over $89, or shop online and pick up select orders at a
          Nordstrom Rack or Nordstrom store. <u>Learn More</u>
        </Text>
      </Box>
      <Stack p={5}>
        <Flex align="center" pt={3} pb={5} borderBottom="1px solid #bbb">
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
          <Button
            variant="ghost"
            bg="none"
            color="#d61f27"
            _hover={buttonhover}
            fontWeight="normal"
          >
            Clearance
          </Button>
          <Button
            variant="ghost"
            bg="none"
            color="global.black"
            _hover={buttonhover}
            fontWeight="normal"
          >
            Women
          </Button>
          <Button
            bg="none"
            color="global.black"
            _hover={buttonhover}
            fontWeight="normal"
          >
            Men
          </Button>
          <Button
            bg="none"
            _hover={buttonhover}
            color="global.black"
            fontWeight="normal"
          >
            Kids
          </Button>
          <Button
            bg="none"
            _hover={buttonhover}
            color="global.black"
            fontWeight="normal"
          >
            Shoes
          </Button>
          <Button
            bg="none"
            _hover={buttonhover}
            color="global.black"
            fontWeight="normal"
          >
            Activewear
          </Button>
          <Button
            bg="none"
            _hover={buttonhover}
            color="global.black"
            fontWeight="normal"
          >
            Bags & Accessories
          </Button>
          <Button
            bg="none"
            _hover={buttonhover}
            color="global.black"
            fontWeight="normal"
          >
            Home
          </Button>
          <Button
            bg="none"
            _hover={buttonhover}
            color="global.black"
            fontWeight="normal"
          >
            Beauty
          </Button>
          <Button
            bg="none"
            _hover={buttonhover}
            color="global.black"
            fontWeight="normal"
          >
            Gifts
          </Button>
          <Button
            bg="none"
            _hover={buttonhover}
            color="global.blue"
            fontWeight="normal"
          >
            Flash Events
          </Button>
        </Flex>
      </Stack>
    </div>
  );
};

export default Navbar;
