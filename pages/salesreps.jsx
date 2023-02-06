import Head from "next/head";
import RepCard from "../components/reps-card";
import { Wrap, Flex, Box, Heading, Text } from "@chakra-ui/react";
import Image from "next/image";
import Footer from "../components/footer";

export default function SalesReps() {
  return (
    <>
      <Flex>
        <Box w="100%" bg="tomato">
          <Flex direction={["column", "row"]}>
            <Image
              alt="salesrepbanner"
              height="100"
              width="500"
              src="/salesrepsbanner.jpg"
            />
            <Flex
              maxWidth="500px  "
              margin="auto"
              marginLeft={["20px", "50px"]}
              marginTop={["30px", "60px"]}
              marginBottom={["40px", "0px"]}
              direction={"column"}
            >
              <Heading> Our sales team is here to assist you.</Heading>
              <Text marginTop={"10px"}>
                Cardesi boasts experienced sales reprentatives that are here to
                help you in making the right decision. Feel free to reach out to
                any of our sales representatives below.
              </Text>
            </Flex>
          </Flex>
        </Box>
      </Flex>
      <Wrap
        justifyContent={"center"}
        spacing="30px"
        maxWidth="1000px"
        margin="auto!important"
        mt={"5rem!important"}
        ml={["3rem !important", "auto!important"]}
      >
        <RepCard
          image="./CoreyStokes.png"
          role="Sales Representative"
          name={"Corey Stokes"}
          email="CoreyStokes@Cardesi.com"
          description={
            "Corey Stokes is a sales reprentative at Carvana. He has been with us since the start & can help you find your next car."
          }
        />
        <RepCard
          image="./LuisHarrison.png"
          role="Sales Representative"
          name={"Luis Harrison"}
          email="LuisHarrison@Cardesi.com"
          description={
            "Luis Harrison is an experienced sales representative who can help you find the right car for you."
          }
        />
        <RepCard
          image="./JerryMcguire.png"
          role="Senior Sales Representative"
          name={"Jerry Mcguire"}
          email="JerryMcguire@Cardesi.com"
          description={
            "Jerry Mcguire is a senior sales rep. at Cardesi. He can help you find the right deals that fit your budget."
          }
        />
        <RepCard
          image="./MicheleShelley.png"
          role="Senior Sales Representative"
          name={"Michele Shelley"}
          email="MicheleShelley@Cardesi.com"
          description={
            "Michele Shelley is a skilled sales reprentative who can help you find a comfortable car."
          }
        />
      </Wrap>
      <Footer />
    </>
  );
}
