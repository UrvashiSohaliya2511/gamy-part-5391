import { buttonNotfilled } from "../styles/styles";
import {
  sliderdata1,
  sliderdataClothes,
  AdvtSliderdata,
} from "../componants/data.jsx";
import {
  Button,
  Heading,
  Stack,
  Center,
  Image,
  Box,
  Text,
  Link,
  Flex,
  SimpleGrid,
} from "@chakra-ui/react";

import {
  Topslider,
  Productbar,
  AdvtSlider,
} from "../componants/Homepage.Sliders";
const Home = () => {
  return (
    <div>
      <Stack p={7} pt={0} spacing={5}>
        <Heading size="lg" color="global.black" fontWeight="450" pb={3}>
          More to Rack, easier and faster.
        </Heading>
        <Center>
          <Button
            _hover={buttonNotfilled}
            bg="none"
            color="global.blue"
            border="1px solid"
            fontWeight="normal"
            borderRadius="none"
            fontSize="14px"
            w="20%"
          >
            Sign In or Create an Account
          </Button>
        </Center>
        <Stack>
          <Image
            src="https://n.nordstrommedia.com/id/06ed2b26-7c1d-46b5-8bfa-bf7a47a02f42.jpeg?h=200&w=1608"
            alt="add"
          />
          <Box
            textAlign="left"
            pos="absolute"
            top={350}
            right={100}
            color="white"
          >
            <Heading size="md">Online & In Stores</Heading>
            <Text fontSize="sm">
              Sandals, dresses, tops & more featuring Vince, Madewell & adidas.
            </Text>
            <Flex fontSize="sm" textDecoration="underline" gap={3}>
              <Link>All Clearance</Link>
              <Link>Women's Clearance</Link>
              <Link>Men's Clearance</Link>
            </Flex>
          </Box>
        </Stack>
        <Topslider sliderdata={sliderdata1} />
        <Productbar />
        <Heading size="lg" color="global.black" fontWeight="450" pb={3}>
          Here Today, Gone in a Flash
        </Heading>
        <AdvtSlider data={AdvtSliderdata} />
        <Topslider sliderdata={sliderdataClothes} />
        <Heading size="lg" color="global.black" fontWeight="450" pb={3}>
          Active Styles for Every Day
        </Heading>
        <SimpleGrid columns={[1, 1, 2, 2]} textAlign="left">
          <Box>
            <Image
              src="https://n.nordstrommedia.com/id/6343d2d7-4309-4006-bdea-6ff41857e88d.jpeg?h=555&w=804"
              alt="shoes"
            />
            <Heading size="md" color="global.black" mt={2} fontWeight="450">
              PUMA, adidas & More
            </Heading>
            <Text>Fresh pairs from $49.97</Text>
            <Flex>
              <Link color="global.blue" textDecoration="underline">
                Women's Activewear Sneakers
              </Link>
              <Link color="global.blue" textDecoration="underline">
                Men's Activewear Sneakers
              </Link>
            </Flex>
          </Box>
          <Box>
            <Image
              src="https://n.nordstrommedia.com/id/77de2511-40c6-4dd0-ad71-a54b2644a6b6.jpeg?h=555&w=804"
              alt="clothes"
            />
            <Heading size="md" mt={2} color="global.black" fontWeight="450">
              Z by Zella, 90 Degree by Reflex & More
            </Heading>
            <Text>Workout sets from $15.97.</Text>
            <Flex>
              <Link color="global.blue" textDecoration="underline">
                Workout sets
              </Link>
              <Link color="global.blue" textDecoration="underline">
                All Women's Activewear
              </Link>
            </Flex>
          </Box>
        </SimpleGrid>
      </Stack>
    </div>
  );
};

export default Home;
