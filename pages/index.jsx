import Head from "next/head";
import { motion, useInView } from "framer-motion";
import { IoPricetagsOutline, IoCarSportOutline } from "react-icons/io5";
import { GrCertificate } from "react-icons/gr";
import { BsPeople } from "react-icons/bs";
import React, { useRef } from "react";
import Hero from "../components/hero";
import Footer from "../components/footer";
import {
  Heading,
  Text,
  Box,
  Flex,
  chakra,
  Stack,
  Link,
  Icon,
  Center,
  Image,
} from "@chakra-ui/react";

export default function Home() {
  // Animations on scroll
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <>
      <script
        src="//code.tidio.co/ew045s7f91tlkp4hws9xam6fmbbzw1eb.js"
        async
      ></script>
      {/* HERO */}
      <Hero />
      {/*  */}
      <Center>
        <Image
          mt={{ base: "60px", md: "0px" }}
          boxSize={{ base: "370px", md: "700px" }}
          alt="CarDesi Logo"
          src="/CarDesiLogo.png"
        />
      </Center>
      <Text mt={{ base: "20px", md: "72px" }} id={"features"}></Text>
      <br />
      <Center my={"50px"}>
        <Heading
          fontWeight={"700"}
          fontSize={{ base: "40px", md: "50px" }}
          className="hero-tagline"
          color="textColor"
          maxWidth={"900px"}
        >
          <span className="hero-gradient">Why Cardesi?</span>
        </Heading>
      </Center>
      <Flex
        mb={"3.5rem !important;"}
        justifyContent="center" // Centered horizontally
        flexDirection={"row"}
        alignItems="center"
        gap={{ base: "0", md: "1.2rem" }}
        flexWrap={"wrap"}
      >
        <br />
        <br />
        <br />
        <Box
          bg="blue.200"
          height={"300px"}
          padding="1rem"
          maxWidth="370px"
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
          {/* <Heading fontSize={"3xl"}>Why should you choose Cardesi?</Heading> */}
          <Icon as={IoCarSportOutline} boxSize={"65px"} mt={"20px"} />
          <Text lineHeight={"30px"} py={"25px"}>
            Drive home in style with Cardesi. Choose us for unbeatable deals,
            expert guidance, and a passion for helping you find your dream car.
            Trust the best in the business.
          </Text>
        </Box>
        <Box
          bg="blue.700"
          padding="1rem"
          maxWidth="370px"
          className={"why"}
          borderRadius={"20px"}
          height={"300px"}
          boxShadow={"0px 0px 10px 0px rgba(0,0,0,0.2)"}
          transition="400ms"
          _hover={{
            boxShadow: "0px 0px 10px 0px rgba(0,0,0,0.6)",
          }}
          textAlign={"center"}
          color={"black"}
          mb="3rem"
        >
          {/* <Heading fontSize={"3xl"}>
            How does Cardesi make prices affordable?
          </Heading> */}
          <Icon as={GrCertificate} boxSize={"65px"} mt={"20px"} />
          <Text lineHeight={"30px"} py={"25px"}>
            Affordable dream cars at Cardesi. Our smart buying policy guarantees
            the best prices. Trust us to find your next car with ease.
          </Text>
        </Box>
        {/* <motion.div
          // Placeholder
          style={{
            transform: isInView ? "none" : "translateY(100px)",
            opacity: isInView ? 1 : 0,
            transition: "all 0.5s ease-in-out",
            transitionDelay: "0.2s",
          }}
        > */}
        <Box
          bg="blue.200"
          padding="1rem"
          maxWidth="370px"
          className={"why"}
          borderRadius={"20px"}
          height={"300px"}
          boxShadow={"0px 0px 10px 0px rgba(0,0,0,0.2)"}
          transition="400ms"
          _hover={{
            boxShadow: "0px 0px 10px 0px rgba(0,0,0,0.6)",
          }}
          textAlign={"center"}
          color={"white.500"}
          mb="3rem"
        >
          {/* <Heading fontSize={"3xl"}>
            Why can your team help me find the right car?
          </Heading> */}
          <Icon as={BsPeople} boxSize={"65px"} mt={"20px"} />
          <Text lineHeight={"30px"} py={"25px"}>
            Our knowledgeable team offers personalized appointment services to
            find the perfect fit for you. Trust us to help you drive home in
            style.
          </Text>
        </Box>
        {/* </motion.div> */}
      </Flex>
      <Flex p={50} w="full" alignItems="center" justifyContent="center">
        <Box borderRadius={"20px"} bg="blue.100">
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
            >
              <chakra.span display="block">Ready to find your </chakra.span>
              <chakra.span display="block">next dream car?</chakra.span>
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
                _hover={{
                  bg: "blue.700",
                }}
              >
                Browse Now
              </Link>
            </Stack>
          </Box>
        </Box>
      </Flex>

      <Footer></Footer>
    </>
  );
}
