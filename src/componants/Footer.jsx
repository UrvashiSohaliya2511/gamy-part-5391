import React from "react";
import { Box, Heading, Stack } from "@chakra-ui/react";
import { Image, Flex, Text, Button, Input, Link } from "@chakra-ui/react";
import { Link as ReachLink } from "react-router-dom";
import { ImMobile2, ImFacebook, ImTwitter, ImPinterest2 } from "react-icons/im";
import { FaInstagram } from "react-icons/fa";
import { IoIosArrowUp } from "react-icons/io";
import { textHover } from "../styles/styles.js";

const Footer = () => {
  return (
    <div>
      <Stack p={7} spacing={5}>
        <Image src="https://n.nordstrommedia.com/id/e63e8dd7-3537-47db-912c-7d370e63658f.jpeg?h=180&w=1600" />
        <Flex align="center" justify="flex-end" gap={2}>
          <Text
            fontSize="xs"
            fontWeight="bold"
            color="global.black"
            letterSpacing={1}
          >
            Get Email Updates:
          </Text>
          <Input
            w="20%"
            placeholder="Email Address"
            type="email"
            borderRadius="none"
          />
          <Button
            w="20%"
            borderRadius="none"
            color="white"
            bg="global.blue"
            fontWeight="normal"
            _hover={{
              backgroundColor: "white",
              color: "global.blue",
              border: "1px solid ",
            }}
          >
            Sign Up
          </Button>
        </Flex>
      </Stack>
      <FooterList />
    </div>
  );
};

const FooterList = () => {
  return (
    <>
      <Stack textAlign="left" bg="#f9f9f9" p={7}>
        <Flex gap={5}>
          <Stack w="20%">
            <Heading size="sm" fontWeight="440">
              Customer Service
            </Heading>
            <Link as={ReachLink} to="#" _hover={textHover}>
              Order Status
            </Link>
            <Link to="#" as={ReachLink} _hover={textHover}>
              Guest Returns
            </Link>
            <Link to="#" as={ReachLink} _hover={textHover}>
              Shipping & Return policy
            </Link>
            <Link to="#" as={ReachLink} _hover={textHover}>
              Gift Cards
            </Link>
            <Link to="#" as={ReachLink} _hover={textHover}>
              FAQ
            </Link>
            <Link to="#" as={ReachLink} _hover={textHover}>
              Contact Us
            </Link>
          </Stack>
          <Stack w="20%">
            <Heading size="sm" fontWeight="440">
              About Us
            </Heading>
            <Link _hover={textHover} as={ReachLink} to="#">
              About Our Brand
            </Link>
            <Link _hover={textHover} as={ReachLink} to="#">
              The Nordy Club
            </Link>
            <Link _hover={textHover} as={ReachLink} to="#">
              Store Locator
            </Link>
            <Link _hover={textHover} as={ReachLink} to="#">
              All Brands
            </Link>
            <Link _hover={textHover} as={ReachLink} to="#">
              Careers
            </Link>
            <Link _hover={textHover} as={ReachLink} to="#">
              Get Email Updates
            </Link>
            <Link _hover={textHover} as={ReachLink} to="#">
              Nordstrom Blog
            </Link>
            <Link _hover={textHover} as={ReachLink} to="#">
              Nordy Podcast
            </Link>
          </Stack>
          <Stack w="20%">
            <Heading size="sm" fontWeight="440">
              Nordstrom Rack & The Community
            </Heading>
            <Link _hover={textHover} to="#" as={ReachLink}>
              Corporate Social Responsibilities
            </Link>
            <Link _hover={textHover} to="#" as={ReachLink}>
              Diviersity,Inclusion & Belonging
            </Link>
            <Link _hover={textHover} to="#" as={ReachLink}>
              Shoes That Fit
            </Link>
            <Link _hover={textHover} to="#" as={ReachLink}>
              Big Brothers Big Sisters
            </Link>
            <Link _hover={textHover} to="#" as={ReachLink}>
              Donate Clothes
            </Link>
          </Stack>
          <Stack w="20%">
            <Heading size="sm" fontWeight="440">
              Nordstrom Card
            </Heading>
            <Link _hover={textHover} to="#" as={ReachLink}>
              Apply for NordStrom Card
            </Link>
            <Link _hover={textHover} to="#" as={ReachLink}>
              Pay my bill
            </Link>
            <Link _hover={textHover} to="#" as={ReachLink}>
              Manage my NordStrom Card
            </Link>
          </Stack>
          <Stack w="20%">
            <Heading size="sm" fontWeight="440">
              NordStrom,Inc.
            </Heading>
            <Link _hover={textHover} to="#" as={ReachLink}>
              NordStrom
            </Link>
            <Link _hover={textHover} to="#" as={ReachLink}>
              NordStrom Canada
            </Link>
            <Link _hover={textHover} to="#" as={ReachLink}>
              HauteLook
            </Link>
            <Link _hover={textHover} to="#" as={ReachLink}>
              Investor Relations
            </Link>
            <Link _hover={textHover} to="#" as={ReachLink}>
              Press Releases
            </Link>
            <Link _hover={textHover} to="#" as={ReachLink}>
              NordStrom Media Network
            </Link>
          </Stack>
          <Stack w="20%">
            <Link to="#" _hover={textHover}>
              <Flex align="center">
                <ImMobile2 fontSize="24px" />
                Download Our Apps
              </Flex>
            </Link>
            <Flex justify="space-between" p={3}>
              <Link to="#" _hover={textHover} as={ReachLink}>
                <ImFacebook />
              </Link>
              <Link to="#" _hover={textHover} as={ReachLink}>
                <ImTwitter />
              </Link>
              <Link to="#" _hover={textHover} as={ReachLink}>
                <ImPinterest2 />
              </Link>
              <Link to="#" _hover={textHover} as={ReachLink}>
                <FaInstagram />
              </Link>
            </Flex>
          </Stack>
          <Box bg="white" h="60px" p={1}>
            <IoIosArrowUp fontSize="30px" bg="white" /> Top
          </Box>
        </Flex>
        <Flex fontSize="12px" pt={5} gap={10}>
          <Link _hover={textHover} to="#" as={ReachLink}>
            Privacy
          </Link>
          <Link _hover={textHover} to="#" as={ReachLink}>
            Do Not Sell My Personal Information
          </Link>
          <Link _hover={textHover} to="#" as={ReachLink}>
            Terms & Conditions
          </Link>
          <Link _hover={textHover} to="#" as={ReachLink}>
            Internet Based Ads
          </Link>
          <Link _hover={textHover} to="#" as={ReachLink}>
            California Supply Chain Act
          </Link>
          <Link _hover={textHover} to="#" as={ReachLink}>
            ©2022 Nordstrom Rack
          </Link>
        </Flex>
      </Stack>
    </>
  );
};

export default Footer;
