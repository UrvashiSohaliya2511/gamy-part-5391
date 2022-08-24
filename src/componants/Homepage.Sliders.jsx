import {
  Stack,
  Image,
  Box,
  Heading,
  Link,
  Text,
  Flex,
  SimpleGrid,
  Spacer,
} from "@chakra-ui/react";
import { useState, useEffect } from "react";
import { GrStar } from "react-icons/gr";
import {
  MdOutlineArrowForwardIos,
  MdOutlineArrowBackIosNew,
} from "react-icons/md";
function Topslider({ sliderdata }) {
  let i = 0;
  const [data, setdata] = useState(sliderdata[0]);
  const interval = () => {
    setInterval(() => {
      if (i === sliderdata.length) {
        i = 0;
      }
      setdata(sliderdata[i]);
      i++;
    }, 5000);
  };
  useEffect(() => {
    interval();
  }, []);

  return (
    <>
      <Stack textAlign="left">
        <Image src={data.image} alt="title" />
        <Box>
          <Heading
            mt={"-70px"}
            size="lg"
            color="global.black"
            fontWeight="450"
            pb={3}
          >
            {data.title}
          </Heading>
          <Text>{data.text}</Text>
          <Link color="global.blue" textDecoration="underline">
            Shop know
          </Link>
        </Box>
      </Stack>
    </>
  );
}

function Productbar() {
  const data = [
    // {
    //   image:
    //     "https://n.nordstrommedia.com/id/156718be-867d-4a52-82f5-2bcb68f758ba.jpeg?h=429&w=279",
    // },
    {
      image:
        "https://n.nordstrommedia.com/id/sr3/6bb77933-11a3-4b73-a01a-5febcfc9e523.jpeg?q=45&fit=fill&fm=jpg&dpr=2&h=408&w=266",
      title: "T Tahari",
      price: 32.97,
      offer: "108.00",
      rank: 4,
    },
    {
      image:
        "https://n.nordstrommedia.com/id/sr3/9b82428d-0dbd-4727-a014-3c3f11ebd5b8.jpeg?q=45&fit=fill&fm=jpg&dpr=2&h=408&w=266",
      title: "T Tahari",
      price: 39.97,
      offer: "98.00",
      rank: 3,
    },
    {
      image:
        "https://n.nordstrommedia.com/id/sr3/be601138-5322-4643-aaa4-870d4f2b8ce4.jpeg?q=45&fit=fill&fm=jpg&dpr=2&h=408&w=266",
      title: "T Tahari",
      price: 44.99,
      offer: "55.00",
      rank: 4,
    },
    {
      image:
        "https://n.nordstrommedia.com/id/sr3/8b408af1-ef5c-480f-bc1c-796bed0b0af7.jpeg?q=45&fit=fill&fm=jpg&dpr=2&h=408&w=266",
      title: "T Tahari",
      price: 99.01,
      offer: "58.00",
      rank: 2,
    },
    {
      image:
        "https://n.nordstrommedia.com/id/sr3/c296dba6-535d-4ab3-95ea-67e12208f7d0.jpeg?q=45&fit=fill&fm=jpg&dpr=2&h=408&w=266",
      title: "T Tahari",
      price: 219.97,
      offer: "300.00",
      rank: 5,
    },
  ];

  return (
    <>
      <Flex justify="space-between" textAlign="left">
        <Box w="15%">
          <Image
            src="https://n.nordstrommedia.com/id/156718be-867d-4a52-82f5-2bcb68f758ba.jpeg?h=429&w=279"
            alt="add"
          />
          <Link color="global.blue" textDecoration="underline">
            Rank Your Brands
          </Link>
        </Box>
        {data &&
          data.map((item, i) => {
            return (
              <Box w="15%" key={i}>
                <Image src={item.image} alt={item.title} />
                <Text fontSize="xs">{item.title}</Text>
                <Text fontSize="xs" fontWeight="bold">
                  ${item.price}
                </Text>
                <Text fontSize="xs" as="del">
                  ${item.offer}
                </Text>
                <Stars total={item.rank} />
              </Box>
            );
          })}
      </Flex>
    </>
  );
}
function AdvtSlider({ data }) {
  const [page, setpage] = useState(0);

  useEffect(() => {
    console.log(page);
  }, [page]);
  const handlenext = () => {
    if (page === data.length - 1) {
      setpage(0);
    } else {
      setpage(page + 1);
    }
  };
  const handleprev = () => {
    if (page === 0) {
      setpage(data.length - 1);
    } else {
      setpage(page - 1);
    }
  };
  //   const style = {
  //     width: "50px",
  //     position: "absolute",
  //     left: 10,
  //   };
  return (
    <>
      <Stack>
        <SimpleGrid columns={[1, 1, 2, 3]} gap={7} textAlign="left">
          {data &&
            data[page].map((item, i) => {
              return (
                <>
                  <Box key={i}>
                    <Image src={item.image} />
                    <Text fontWeight="450" fontSize="14px" color="global.black">
                      {item.title}
                    </Text>
                    <Text fontSize="xs">{item.text}</Text>
                  </Box>
                </>
              );
            })}
        </SimpleGrid>
        <Flex position="relative" top="-250px">
          <Box
            bg="none"
            onClick={handleprev}
            fontSize="45px"
            _hover={{ bg: "rgb(32,33,36,0.7)", color: "white" }}
          >
            <MdOutlineArrowBackIosNew />
          </Box>
          <Spacer />
          <Box
            fontSize="45px"
            onClick={handlenext}
            _hover={{ bg: "rgb(32,33,36,0.7)", color: "white" }}
          >
            <MdOutlineArrowForwardIos />
          </Box>
        </Flex>
      </Stack>
    </>
  );
}
const Stars = ({ total }) => {
  const star = new Array(5).fill(0).map((ele, i) => {
    if (i < total) {
      return <GrStar key={i} color="#00819d" fontSize="13px" />;
    } else {
      return <GrStar key={i} color="#e3e3e3" fontSize="13px" />;
    }
  });
  return (
    <>
      <Flex>{star}</Flex>
    </>
  );
};
export { Topslider, Productbar, Stars, AdvtSlider };