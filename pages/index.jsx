import Head from "next/head";
import Hero from "../components/hero";
import Footer from "../components/footer";
import {
  Heading,
  Text,
  Button,
  Center,
  Divider,
  Box,
  Flex,
  chakra,
  Stack,
  Link,
} from "@chakra-ui/react";
import AOS from "aos";
import "aos/dist/aos.css"; // You can also use <link> for styles
// ..
AOS.refresh();
<script
  src="//code.tidio.co/ew045s7f91tlkp4hws9xam6fmbbzw1eb.js"
  async
></script>;

export default function Home() {
  <script
    src="//code.tidio.co/ew045s7f91tlkp4hws9xam6fmbbzw1eb.js"
    async
  ></script>;
  return (
    <>
      <script
        src="//code.tidio.co/ew045s7f91tlkp4hws9xam6fmbbzw1eb.js"
        async
      ></script>
      <Hero />
      <Flex
        mb={"3.5rem !important;"}
        justifyContent="center"
        flexDirection={"column"}
        alignItems="center"
      >
        <Text id={"features"}></Text>
        <br />
        <br />
        <br />
        <Box
          bg="blue.200"
          padding="1rem"
          maxWidth="400px"
          className={"why"}
          borderRadius={"20px"}
          boxShadow={"0px 0px 10px 0px rgba(0,0,0,0.2)"}
          transition="400ms"
          _hover={{
            boxShadow: "0px 0px 10px 0px rgba(0,0,0,0.6)",
          }}
          textAlign={"center"}
          color={"textColor"}
          mb="3rem"
        >
          <Heading fontSize={"3xl"}>Why should you choose Caravan?</Heading>
          <Text py={"15px"}>
            Choose Caravan for your next purchase because we are the best in the
            business. We have the best deals on the market and we are here to
            help you find your next dream car. We are a team of passionate
            individuals who will help you find your next dream car.
          </Text>
        </Box>
        <Box
          bg="blue.700"
          padding="1rem"
          maxWidth="400px"
          className={"why"}
          borderRadius={"20px"}
          boxShadow={"0px 0px 10px 0px rgba(0,0,0,0.2)"}
          transition="400ms"
          _hover={{
            boxShadow: "0px 0px 10px 0px rgba(0,0,0,0.6)",
          }}
          textAlign={"center"}
          color={"white.500"}
          mb="3rem"
        >
          <Heading fontSize={"3xl"}>How does Caravan make prices affordable?</Heading>
          <Text py={"15px"}>
            Caravan makes prices affordable because we only buy used cars for
            the right price. We don&apos;t buy cars that are overpriced and we don&apos;t
            sell cars that are overpriced. We are here to help you find your
            next dream car.
          </Text>
        </Box>
        <Box
          bg="blue.200"
          padding="1rem"
          maxWidth="400px"
          className={"why"}
          borderRadius={"20px"}
          boxShadow={"0px 0px 10px 0px rgba(0,0,0,0.2)"}
          transition="400ms"
          _hover={{
            boxShadow: "0px 0px 10px 0px rgba(0,0,0,0.6)",
          }}
          textAlign={"center"}
          color={"textColor"}
          mb="3rem"
        >
          <Heading fontSize={"3xl"}>Why can your team help me find the right car?</Heading>
          <Text py={"15px"}>
            Caravan&apos;s team can help you find the right car because we are a team of passionate people who love cars. We want you to have the best car you&apos;ve ever had
          </Text>
        </Box>
      </Flex>
      <Flex

  _dark={{
    bg: "#3e3e3e",
  }}
  p={50}
  w="full"
  alignItems="center"
  justifyContent="center"
>
  <Box
  borderRadius={"20px"}
     bg="blue.100"
    _dark={{
      bg: "gray.800",
    }}
  >
    <Box
      maxW="1xl"
      w={{
        md: "2xl",
        lg: "2xl",
      }}
      mx="auto"
      py={{
        base: 12,
        lg: 16,
      }}
      px={{
        base: 4,
        lg: 8,
      }}
      display={{
        lg: "flex",
      }}
      alignItems={{
        lg: "center",
      }}
      justifyContent={{
        lg: "space-between",
      }}
    >
      <chakra.h2
        fontSize={{
          base: "3xl",
          sm: "4xl",
        }}
        fontWeight="extrabold"
        letterSpacing="tight"
        lineHeight="shorter"
        color="gray.700"
        _dark={{
          color: "gray.100",
        }}
      >
        <chakra.span display="block">Ready to find your </chakra.span>
        <chakra.span
          display="block"
      
        >
         next dream car?
        </chakra.span>
      </chakra.h2>
      <Stack
        direction={{
          base: "column",
          sm: "row",
        }}
        mt={{
          base: 8,
          lg: 0,
        }}
        flexShrink={{
          lg: 0,
        }}
      >
        <Link
        href="./browse"
          w={["full", , "auto"]}
          display="inline-flex"
          alignItems="center"
          justifyContent="center"
          px={5}
          py={3}
          border="solid transparent"
          fontWeight="bold"
          rounded="md"
          shadow="md"
          _light={{
            color: "white",
          }}
          bg="blue.600"
          _dark={{
            bg: "blue.500",
          }}
          _hover={{
            bg: "blue.700",
            _dark: {
              bg: "blue.600",
            },
          }}
        >
          Browse Now
        </Link>
      
      </Stack>
    </Box>
  </Box>
</Flex>

      <Footer></Footer>
      <script src="https://unpkg.com/aos@next/dist/aos.js"></script>
      <script>AOS.init();</script>
    </>
  );
}
