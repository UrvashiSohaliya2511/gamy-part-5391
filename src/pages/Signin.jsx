import React from "react";
import {
  Stack,
  Input,
  Heading,
  Text,
  Flex,
  Link,
  FormLabel,
} from "@chakra-ui/react";
import { useState } from "react";
import { buttonfilled } from "../styles/styles.js";
import { useNavigate, Link as ReachLink } from "react-router-dom";
import { BsCart, BsTruck, BsCloudPlus } from "react-icons/bs";
const Signin = () => {
  let navigate = useNavigate();

  const userData = JSON.parse(localStorage.getItem("user")) || [];
  const obj = {
    email: "",
    password: "",
    firstname: "",
    lastname: "",
  };
  const handleChange = (e) => {
    obj[e.target.name] = e.target.value;
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const arr = userData.filter((ele) => {
      return ele.email === obj.email;
    });
    if (arr.length > 0) {
      alert("account already exist");
      navigate("/login");
    } else {
      userData.push(obj);
      localStorage.setItem("user", JSON.stringify(userData));
      alert("acount created");
      navigate("/login");
    }
  };
  console.log(userData);
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
        <Flex gap={3}>
          <Link to="/signin" as={ReachLink} fontWeight="450">
            Sign Up
          </Link>
          |
          <Link to="/login" as={ReachLink}>
            Login
          </Link>
        </Flex>
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

      <form onChange={handleChange} onSubmit={handleSubmit}>
        <FormLabel fontSize="12px">Email</FormLabel>
        <Input
          border="1px solid #bbb"
          borderRadius="none"
          type="email"
          mb={3}
          name="email"
          required
        />
        <FormLabel fontSize="12px">First name</FormLabel>
        <Input
          border="1px solid #bbb"
          name="firstname"
          borderRadius="none"
          type="text"
          mb={3}
          required
        />
        <FormLabel fontSize="12px">Last name</FormLabel>
        <Input
          border="1px solid #bbb"
          name="lastname"
          borderRadius="none"
          type="text"
          mb={3}
          required
        />
        <FormLabel fontSize="12px">Create password </FormLabel>
        <Input
          border="1px solid #bbb"
          type="password"
          borderRadius="none"
          mb={3}
          name="password"
          required
        />

        <Flex gap={0} fontSize="12px">
          <Text>
            By creating an account, you agree to our Privacy Policy and Terms &
            Conditions.
          </Text>
        </Flex>
        <Input
          type="submit"
          value="Create Account"
          bg="global.blue"
          color="white"
          _hover={buttonfilled}
          fontWeight="normal"
          borderRadius="none"
          placeholder="Create Account"
          required
        />
      </form>
    </Stack>
  );
};

export default Signin;
