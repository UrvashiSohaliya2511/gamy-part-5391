import React from "react";
import {
  Stack,
  Input,
  Heading,
  Link,
  Text,
  Flex,
  Divider,
  FormLabel,
} from "@chakra-ui/react";
import { buttonfilled } from "../styles/styles.js";
import { useNavigate, Link as ReachLink } from "react-router-dom";
import { BsCart, BsTruck, BsCloudPlus } from "react-icons/bs";
import { useContext } from "react";
import { AppContext } from "../context/AppContext.jsx";
const Login = () => {
  let navigate = useNavigate();
  const { setisAuth } = useContext(AppContext);
  const userData = JSON.parse(localStorage.getItem("user")) || [];
  const obj = {
    email: "",
    password: "",
  };
  const handleChange = (e) => {
    obj[e.target.name] = e.target.value;
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const arr = userData.filter((ele) => {
      return ele.email === obj.email && ele.password === obj.password;
    });
    if (arr.length > 0) {
      setisAuth(true);
      alert("login Successfull");

      navigate("/");
    } else {
      userData.push(obj);
      alert("Check your credentials");
    }
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
        <Flex gap={3}>
          <Link to="/login" as={ReachLink} fontWeight="450">
            Login
          </Link>
          |
          <Link to="/signin" as={ReachLink}>
            Sign Up
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
          value="Login"
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

export default Login;
