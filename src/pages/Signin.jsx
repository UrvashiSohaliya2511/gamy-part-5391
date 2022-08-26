import React from "react";
import {
  Stack,
  Input,
  Heading,
  Text,
  Flex,
  Button,
  Form,
  FormControl,
  FormLabel,
} from "@chakra-ui/react";
import { useState } from "react";
import { buttonfilled } from "../styles/styles.js";
import { BsCart, BsTruck, BsCloudPlus } from "react-icons/bs";
const Signin = () => {
  const obj = {
    email: "",
    password: "",
    firstname: "",
    lastname: "",
  };
  const handleChange = (e) => {
    obj[e.target.name] = e.target.value;
  };
  const handleSubmit = () => {
    alert("submit");
    console.log(obj);
  };
  return (
    <Stack
      w={["90%", "80%", "45%", "30%"]}
      m="auto"
      textAlign="left"
      p={5}
      color="global.black"
      spacing={4}
    >
      <Heading fontWeight="400" fontSize="xl">
        Create Account
      </Heading>
      <Flex fontSize="14px" align="center" gap={3}>
        <BsCart />
        <Text>Check out faster</Text>
      </Flex>
      <Flex fontSize="14px" align="center" gap={3}>
        <BsTruck />
        <Text>Track orders easily</Text>
      </Flex>
      <Flex fontSize="14px" align="center" gap={3}>
        <BsCloudPlus />
        <Text>Use one sign-in across our brands</Text>
      </Flex>

      <FormControl isRequired onChange={handleChange}>
        <FormLabel fontSize="12px">Email</FormLabel>
        <Input
          border="1px solid #bbb"
          borderRadius="none"
          type="email"
          mb={3}
          name="email"
        />
        <FormLabel fontSize="12px">First name</FormLabel>
        <Input
          border="1px solid #bbb"
          name="firstname"
          borderRadius="none"
          type="text"
          mb={3}
        />
        <FormLabel fontSize="12px">Last name</FormLabel>
        <Input
          border="1px solid #bbb"
          name="lastname"
          borderRadius="none"
          type="text"
          mb={3}
        />
        <FormLabel fontSize="12px">Create password </FormLabel>
        <Input
          border="1px solid #bbb"
          type="password"
          borderRadius="none"
          mb={3}
          name="password"
        />

        <Flex gap={0} fontSize="12px">
          <Text>
            By creating an account, you agree to our Privacy Policy and Terms &
            Conditions.
          </Text>
        </Flex>
        <Input
          type="submit"
          bg="global.blue"
          color="white"
          _hover={buttonfilled}
          fontWeight="normal"
          borderRadius="none"
          placeholder="Create Account"
          onSubmit={handleSubmit}
        />
      </FormControl>
    </Stack>
  );
};

export default Signin;
