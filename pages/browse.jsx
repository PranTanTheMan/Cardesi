import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import CarCard from "../components/car-card";
import Footer from "../components/footer";

import {
  Wrap,
  Input,
  Text,
  Flex,
  Box,
  Badge,
  Heading,
  Grid,
} from "@chakra-ui/react";

export default function Browse() {
  return (
    <>
      <Flex>
        <Box w="100%" bg="tomato">
          <Flex direction={["column", "row"]}>
            <Image alt="bmw" height="100" width="500" src="/used-car.jpg" />
            <Flex
              maxWidth="500px  "
              margin="auto"
              marginLeft={["20px", "50px"]}
              marginTop={["30px", "110px"]}
              marginBottom={["40px", "0px"]}
              direction={"column"}
            >
              <Heading> We can help find the right car for you.</Heading>
              <Text marginTop={"10px"}>
                With our vast selection of used cars, you have a wide variety of
                styles that you can choose from. We will make sure you are
                satisfied with your purchase.
              </Text>
            </Flex>
          </Flex>
        </Box>
      </Flex>
      <Flex px="2rem" direction={"column"} mt={"40px"} mb={"20px"}>
        <Heading pb="10px" color={"primary"} margin="auto">
          Browse our inventory
        </Heading>

        <Text color={"primary"} margin="auto">
          Explore a variety of cars with great value while also achieving
          pristine car condition.{" "}
        </Text>
      </Flex>

      <Wrap className="cars-container" spacing="40px" placeContent={"center"}>
        <CarCard
          name={"Honda Pilot"}
          smallDescription="2019 Honda Pilot EX-L is a 3 row SUV with a 3.5L V6 engine and 9-speed automatic transmission."
          bigDescription="The 2019 Honda Pilot is one of our favorite three-row SUVs thanks to its spacious, thoughtfully designed interior and smooth ride. Added bonuses include better-than-average fuel economy as well as a smooth, powerful V6 engine. The Pilot pretty much had the class covered until the Kia Telluride and Hyundai Palisade came along and shook things up. It's rumored that Honda's looking to redesign the aging Pilot for 2023 — it's been around in its current guise since 2016 — to put it back on top of this family-friendly class."
          make={"Honda"}
          condition="Mint"
          year="2019"
          image="https://cdn.discordapp.com/attachments/968273644352569405/1041201655661723700/Screen_Shot_2022-11-12_at_9.03.34_PM.png"
          price="24,930"
          miles="61,492"
        />
        <CarCard
          name={"Ford Focus"}
          smallDescription="The Ford Focus is a compact car (C-segment in Europe) manufactured by Ford Motor Co."
          bigDescription="The 2012 Ford Focus has plenty of new features aside from the return of the hatchback body style. For starters, the Focus has an all-new 160-hp 2.0-liter I-4, which when attached to Ford's six-speed dual-clutch automatic, can get the Focus to 60 mph in 8.3 seconds. That same engine and transmission combination can also return fuel economy ratings of 28/40 mpg city/highway on Focus SE sedans equipped with the $495 Super Fuel Economy (SFE) package that includes aerodynamic tidbits like unique wheels, and active grille shutters."
          make={"Ford"}
          condition="Good"
          year="2012"
          image="https://o.aolcdn.com/images/dims3/GLOB/legacy_thumbnail/800x450/format/jpg/quality/85/http://www.blogcdn.com/www.autoblog.com/media/2012/01/focustitaniummanual.jpg"
          price="10,900"
          miles="150,429"
        />
        <CarCard
          make="Cadillac"
          image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS7oPR5bxI43ec07fjjPaQAV8ntY9oYxqrwGg&usqp=CAU"
          name="Cadillac Escalade"
          year="2017"
          miles="52,029"
          price="18,400"
          condition="Excellent"
          smallDescription="With a 6.2-liter V8 under the hood that delivers 420 hp and 460 lb-ft of torque, the car is very powerful."
          bigDescription="For 2017 the Cadillac Escalade has made minor changes to the content of its trim levels and also renamed them. New features include a teen-driver monitoring system, a rear passenger reminder (so you don't leave your kids in a hot car), an automated system for parking, and an innovative rearview mirror that incorporates a camera view."
        />
        <CarCard
          make="Nissan"
          image="https://www.cnet.com/a/img/resize/84775954b9a9ec929c7252c08392ae799254e9f7/hub/2012/01/30/a03e0cd3-bb76-11e2-8a8e-0291187978f3/35128655_OVR_900x600.jpg?auto=webp&width=768"
          name="Nissan Versa"
          year="2011"
          price="8,090"
          miles="130,310"
          condition="Good"
          smallDescription="The Nissan Versa is a well-built small sedan, with plenty of space inside and enough standard technology and safety."
          bigDescription="The redesigned Versa sits 2.3 inches lower, is 1.8 inches wider and has a 1.6-inch-longer profile than the previous generation. Its styling bears a strong resemblance to its larger sibling, the Nissan Altima, which is a big step up for the subcompact. And while the price has increased, you're getting more features than before. Formerly top-trim-exclusive features such as power windows, power locks, and keyless entry with push-button start are now standard on the base S trim level."
        />
        <CarCard
          make="Toyota"
          image="https://www.cnet.com/a/img/resize/84775954b9a9ec929c7252c08392ae799254e9f7/hub/2012/01/30/a03e0cd3-bb76-11e2-8a8e-0291187978f3/35128655_OVR_900x600.jpg?auto=webp&width=768"
          name="Toyota Camry"
          year="2017"
          price="15,900"
          miles="60,000"
          condition="Excellent"
          smallDescription="The Toyota Camry is a well-built small sedan, with plenty of space inside and enough standard technology and safety."
          bigDescription="The redesigned Camry sits 2.3 inches lower, is 1.8 inches wider and has a 1.6-inch-longer profile than the previous generation. Its styling bears a strong resemblance to its larger sibling, the Toyota Seqoia, which is a big step up for the subcompact. And while the price has increased, you're getting more features than before. Formerly top-trim-exclusive features such as power windows, power locks, and keyless entry with push-button start are now standard on the base S trim level."
        />
        <CarCard
          make="Honda"
          image="https://www.cnet.com/a/img/resize/84775954b9a9ec929c7252c08392ae799254e9f7/hub/2012/01/30/a03e0cd3-bb76-11e2-8a8e-0291187978f3/35128655_OVR_900x600.jpg?auto=webp&width=768"
          name="Honda Accord"
          year="2018"
          price="18,900"
          miles="40,000"
          condition="Excellent"
          smallDescription="The Honda Accord is a well-built small sedan, with plenty of space inside and enough standard technology and safety."
          bigDescription={
            "The hybrid powertrain has become a more significant part of the Accord lineup for this new generation as it's standard on all but the two least-expensive trims. Those two, the LX and EX, are powered by the familiar 192-hp, 1.5-liter turbocharged four-cylinder gas engine carried over from the outgoing model—and they come exclusively with a continuously variable automatic transmission (CVT). "
          }
        />
        <CarCard
          make="Toyota"
          image="https://www.cnet.com/a/img/resize/84775954b9a9ec929c7252c08392ae799254e9f7/hub/2012/01/30/a03e0cd3-bb76-11e2-8a8e-0291187978f3/35128655_OVR_900x600.jpg?auto=webp&width=768"
          name="Toyota Corolla"
          year="2019"
          price="20,900"
          miles="20,000"
          condition="Excellent"
          smallDescription="The Toyota Corolla is a well-built small sedan, with plenty of space inside and enough standard technology and safety."
          bigDescription={
            "The hybrid powertrain has become a more significant part of the Corolla lineup for this new generation as it's standard on all but the two least-expensive trims. Those two, the LX and EX, are powered by the familiar 192-hp, 1.5-liter turbocharged four-cylinder gas engine carried over from the outgoing model—and they come exclusively with a continuously variable automatic transmission (CVT). "
          }
        />
        <CarCard
          make="Honda"
          image="https://www.cnet.com/a/img/resize/84775954b9a9ec929c7252c08392ae799254e9f7/hub/2012/01/30/a03e0cd3-bb76-11e2-8a8e-0291187978f3/35128655_OVR_900x600.jpg?auto=webp&width=768"
          name="Honda Civic"
          year="2019"
          price="20,900"
          miles="20,000"
          condition="Excellent"
          smallDescription="The Honda Civic is a well-built small sedan, with plenty of space inside and enough standard technology and safety."
          bigDescription={
            "The hybrid powertrain has become a more significant part of the Civic lineup for this new generation as it's standard on all but the two least-expensive trims. Those two, the LX and EX, are powered by the familiar 192-hp, 1.5-liter turbocharged four-cylinder gas engine carried over from the outgoing model—and they come exclusively with a continuously variable automatic transmission (CVT). "
          }
        />
      </Wrap>
      <Footer></Footer>
    </>
  );
}
