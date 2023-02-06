import React, { useEffect, useState } from "react";
import {
  Heading,
  Text,
  Button,
  Center,
  Divider,
  Box,
  Stack,
  Image,
} from "@chakra-ui/react";
import Link from "next/link";

export default function Hero() {
  return (
    <>
      <Box position={"relative"}>
        <Stack>
          <div className="hero-image">
            {/* src="/Dealership.jpg"
            alt="image"
            width={"100%"}
            height={"100vh"}
            zIndex={-1}
            objectFit={"cover"}
            className="hero-image" */}
          </div>
          <Box
            color="white"
            position={"absolute"}
            top={"50%"}
            left={"50%"}
            transform={"translate(-50%, -50%)"}
          >
            <div className="hero-container">
              <Center flexDirection={"column"} alignItems="center">
                <Heading
                  fontWeight={"700"}
                  fontSize={{ base: "40px", md: "72px" }}
                  className="hero-tagline"
                  color="white"
                  maxWidth={"900px"}
                  textAlign="center"
                >
                  <span className="hero-gradient">Cheap. Clean. Credible.</span>{" "}
                  just for you.
                </Heading>
                <Text
                  color={"white"}
                  fontSize={"lg"}
                  textAlign={"center"}
                  pt={"50px"}
                  maxWidth={"600px"}
                  overflow={"hidden"}
                >
                  Cardesi strives to help you find the best deals on the market.
                  We are a team of passionate individuals who will help you find
                  your next dream car.
                </Text>
                <Link href={"./browse"}>
                  <Button
                    transition={"all 0.3s ease-in-out"}
                    mt={"45px"}
                    bgColor={"primary"}
                    color={"textColor"}
                    h={"65px"}
                    w={"220px"}
                    fontSize={"20px"}
                    _hover={{
                      bgColor: "primary",
                      opacity: "0.79",
                      transform: "scale(0.95)",
                    }}
                  >
                    Start Exploring &rarr;
                  </Button>
                </Link>
                <Link href={"#features"}>
                  <Text
                    mt={"15px"}
                    color={"white"}
                    // _hover={{ textDecoration: "underline" }}
                    fontWeight={"normal"}
                    fontSize={"md"}
                    className="underline-two"
                  >
                    Learn More
                  </Text>
                </Link>
              </Center>
            </div>
          </Box>
        </Stack>
      </Box>
    </>
  );
}
