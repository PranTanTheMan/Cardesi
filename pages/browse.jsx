import Head from "next/head";
import { useEffect, useMemo, useState } from "react";
import Image from "next/image";
import CarCard from "../components/car-card";
import Footer from "../components/footer";
import { BiChevronDownCircle } from "react-icons/bi";
import {
  Wrap,
  Text,
  Flex,
  Box,
  Heading,
  chakra,
  Select,
  Input,
} from "@chakra-ui/react";

export default function Browse() {
  const [searchMake, setSearchMake] = useState("");
  const [searchYear, setSearchYear] = useState("");
  const [searchCondition, setSearchCondition] = useState("");
  const [searchName, setSearchName] = useState("");
  const [filteredCards, setFilteredCards] = useState([]);

  const cards = useMemo(
    () => [
      {
        name: "Honda Pilot",
        smallDescription:
          "2019 Honda Pilot EX-L is a 3 row SUV with a 3.5L V6 engine and 9-speed automatic transmission. It has a 19 city",
        bigDescription:
          "The 2019 Honda Pilot is one of our favorite three-row SUVs thanks to its spacious, thoughtfully designed interior and smooth ride. Added bonuses include better-than-average fuel economy as well as a smooth, powerful V6 engine. The Pilot pretty much had the class covered until the Kia Telluride and Hyundai Palisade came along and shook things up. It's rumored that Honda's looking to redesign the aging Pilot for 2023 — it's been around in its current guise since 2016 — to put it back on top of this family-friendly class.",
        make: "Honda",
        condition: "Mint",
        year: "2019",
        image:
          "https://cdn.discordapp.com/attachments/968273644352569405/1041201655661723700/Screen_Shot_2022-11-12_at_9.03.34_PM.png",
        price: "24,930",
        miles: "61,492",
      },
      {
        name: "Ford Focus",
        smallDescription:
          "The Ford Focus is a compact car. It has a 2.0L I4 engine and 6-speed automatic transmission. It has a 26 city",
        bigDescription:
          "The 2012 Ford Focus has plenty of new features aside from the return of the hatchback body style. For starters, the Focus has an all-new 160-hp 2.0-liter I-4, which when attached to Ford's six-speed dual-clutch automatic, can get the Focus to 60 mph in 8.3 seconds. That same engine and transmission combination can also return fuel economy ratings of 28/40 mpg city/highway on Focus SE sedans equipped with the $495 Super Fuel Economy (SFE) package that includes aerodynamic tidbits like unique wheels, and active grille shutters.",
        make: "Ford",
        condition: "Good",
        year: "2012",
        image:
          "https://o.aolcdn.com/images/dims3/GLOB/legacy_thumbnail/800x450/format/jpg/quality/85/http://www.blogcdn.com/www.autoblog.com/media/2012/01/focustitaniummanual.jpg",
        price: "10,900",
        miles: "150,429",
      },
      {
        make: "Cadillac",
        image:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS7oPR5bxI43ec07fjjPaQAV8ntY9oYxqrwGg&usqp=CAU",
        name: "Cadillac Escalade",
        year: "2017",
        miles: "52,029",
        price: "18,400",
        condition: "Excellent",
        smallDescription:
          "With a 6.2-liter V8 under the hood that delivers 420 hp and 460 lb-ft of torque, the car is very powerful.",
        bigDescription:
          "For 2017 the Cadillac Escalade has made minor changes to the content of its trim levels and also renamed them. New features include a teen-driver monitoring system, a rear passenger reminder (so you don't leave your kids in a hot car), an automated system for parking, and an innovative rearview mirror that incorporates a camera view.",
      },
      {
        make: "Nissan",
        image:
          "https://www.cnet.com/a/img/resize/84775954b9a9ec929c7252c08392ae799254e9f7/hub/2012/01/30/a03e0cd3-bb76-11e2-8a8e-0291187978f3/35128655_OVR_900x600.jpg?auto=webp&width=768",
        name: "Nissan Versa",
        year: "2011",
        price: "8,090",
        miles: "130,310",
        condition: "Good",
        smallDescription:
          "The Nissan Versa is a well-built small sedan, with plenty of space inside and enough standard technology and safety.",
        bigDescription:
          "The redesigned Versa sits 2.3 inches lower, is 1.8 inches wider and has a 1.6-inch-longer profile than the previous generation. Its styling bears a strong resemblance to its larger sibling, the Nissan Altima, which is a big step up for the subcompact. And while the price has increased, you're getting more features than before. Formerly top-trim-exclusive features such as power windows, power locks, and keyless entry with push-button start are now standard on the base S trim level.",
      },
      {
        make: "Toyota",
        image: "/ToyotaCamry.jpg",
        name: "Toyota Camry",
        year: "2017",
        price: "15,900",
        miles: "60,000",
        condition: "Excellent",
        smallDescription:
          "The Toyota Camry is a well-built small sedan, with plenty of space inside and enough standard technology and safety.",
        bigDescription:
          "The redesigned Camry sits 2.3 inches lower, is 1.8 inches wider and has a 1.6-inch-longer profile than the previous generation. Its styling bears a strong resemblance to its larger sibling, the Toyota Seqoia, which is a big step up for the subcompact. And while the price has increased, you're getting more features than before. Formerly top-trim-exclusive features such as power windows, power locks, and keyless entry with push-button start are now standard on the base S trim level.",
      },
      {
        make: "Honda",
        image: "/HondaAccord.jpg",
        name: "Honda Accord",
        year: "2018",
        price: "18,900",
        miles: "40,000",
        condition: "Excellent",
        smallDescription:
          "The Honda Accord is a well-built small sedan, with plenty of space inside and enough standard technology and safety.",
        bigDescription:
          "The hybrid powertrain has become a more significant part of the Accord lineup for this new generation as it's standard on all but the two least-expensive trims. Those two, the LX and EX, are powered by the familiar 192-hp, 1.5-liter turbocharged four-cylinder gas engine carried over from the outgoing model—and they come exclusively with a continuously variable automatic transmission (CVT). ",
      },
      {
        make: "Toyota",
        image: "/ToyotaCorolla.jpg",
        name: "Toyota Corolla",
        year: "2019",
        price: "20,900",
        miles: "20,000",
        condition: "Excellent",
        smallDescription:
          "The Toyota Corolla is a well-built small sedan, with plenty of space inside and enough standard technology and safety.",
        bigDescription:
          "The hybrid powertrain has become a more significant part of the Corolla lineup for this new generation as it's standard on all but the two least-expensive trims. Those two, the LX and EX, are powered by the familiar 192-hp, 1.5-liter turbocharged four-cylinder gas engine carried over from the outgoing model—and they come exclusively with a continuously variable automatic transmission (CVT). ",
      },
      {
        make: "Honda",
        image: "/HondaCivic.jpg",
        name: "Honda Civic",
        year: "2019",
        price: "20,900",
        miles: "20,000",
        condition: "Excellent",
        smallDescription:
          "The Honda Civic is a well-built small sedan, with plenty of space inside and enough standard technology and safety.",
        bigDescription:
          "The hybrid powertrain has become a more significant part of the Civic lineup for this new generation as it's standard on all but the two least-expensive trims. Those two, the LX and EX, are powered by the familiar 192-hp, 1.5-liter turbocharged four-cylinder gas engine carried over from the outgoing model—and they come exclusively with a continuously variable automatic transmission (CVT). ",
      },
      {
        make: "Jeep",
        name: "Jeep Wrangler",
        smallDescription:
          "SUV with a spacious interior, and excellent off-road capability. It has a 25MPG city and 32MPG highway.",
        bigDescription:
          "The Jeep Wrangler is a rugged SUV with a spacious interior, advanced technology features, and excellent off-road capability. It offers a range of engine options, including gasoline and diesel, and comes with a spacious trunk for storage.",
        condition: "Good",
        year: "2012",
        image: "/JeepWrangler.jpg",
        price: "19,900",
        miles: "25,000",
      },
      {
        make: "Ford",
        name: "Ford F-150",
        smallDescription:
          "Ford is a pickup truck with a spacious interior, and off-road capability. It has a 25MPG city and 32MPG highway.",

        bigDescription:
          "The Ford F-150 is a versatile pickup truck with a spacious interior, advanced technology features, and powerful performance. It offers a range of engine options, including gasoline and diesel, and comes with a spacious trunk for storage.",
        condition: "Fair",
        year: "2020",
        image: "/FordF.jpeg",
        price: "30,000",
        miles: "15,000",
      },
      {
        make: "Chevrolet",
        name: "Chevy Silverado",
        smallDescription:
          "The Chevrolet Silverado is a versatile pickup truck , and off-road capability. It has a 25MPG city and 32MPG highway.",
        bigDescription:
          "The Chevrolet Silverado is a versatile pickup truck with a spacious interior, advanced technology features, and powerful performance. It offers a range of engine options, including gasoline and diesel, and comes with a spacious trunk for storage.",
        condition: "Good",
        year: "2019",
        image: "/Silverado.jpg",
        price: "25,000",
        miles: "20,000",
      },
      {
        make: "Subaru",
        name: "Subaru Outback",
        smallDescription:
          " A versatile SUV with a spacious interior, and off-road capability. It has a 25MPG city and 32MPG highway.",
        bigDescription:
          "The Subaru Outback is a versatile SUV with a spacious interior, advanced technology features, and powerful performance. It offers a range of engine options, including gasoline and diesel, and comes with a spacious trunk for storage.",
        condition: "Fair",
        year: "2019",
        image: "/Outback.jpg",
        price: "22,000",
        miles: "45,000",
      },
      {
        make: "Dodge",
        name: "Dodge Challenger",
        smallDescription:
          "It has a 25MPG city and 32MPG highway. Also has a spacious interior. 2.0 liter engine. ",

        bigDescription:
          "The Dodge Challenger is a powerful sports car with a spacious interior, advanced technology features, and bold styling. It offers a range of engine options, including gasoline and high-performance options, and comes with a spacious trunk for storage.",
        condition: "Mint",
        year: "2018",
        image: "/Challenger.jpg",
        price: "25,000",
        miles: "27,000",
      },
      {
        make: "Kia",
        name: "Kia Optima",
        smallDescription:
          "A Mid-sized car with a spacious interior, and off-road capability. It has a 27MPG city and 42MPG highway.",

        bigDescription:
          "The Kia Optima is a stylish mid-size car with a spacious interior, advanced technology features, and efficient performance. It offers a range of engine options, including gasoline and hybrid, and comes with a spacious trunk for storage.",
        condition: "Excellent",
        year: "2017",
        image: "/KiaOptima.jpg",
        price: "17,000",
        miles: "55,000",
      },
      {
        make: "Hyundai",
        name: "Hyundai Sonata",
        smallDescription:
          " A Mid-sized car with a spacious interior, and off-road capability. It has a 16MPG city and 32MPG highway.",

        bigDescription:
          "The Hyundai Sonata is a comfortable mid-size car with a spacious interior, advanced technology features, and refined handling. It offers a range of engine options, including gasoline and hybrid, and comes with a spacious trunk for storage.",
        condition: "Good",
        year: "2018",
        image: "/HyundaiSonata.jpg",
        price: "19,000",
        miles: "40,000",
      },
    ],
    []
  );

  useEffect(() => {
    setFilteredCards(cards);
  }, [cards]);

  useEffect(() => {
    setFilteredCards(
      cards.filter(
        (card) =>
          card.make.toLowerCase().includes(searchMake.toLowerCase()) &&
          card.name.toLowerCase().includes(searchName.toLowerCase()) &&
          card.condition
            .toLowerCase()
            .includes(searchCondition.toLowerCase()) &&
          card.year.toLowerCase().includes(searchYear.toLowerCase())
      )
    );
  }, [searchMake, cards, searchName, searchCondition, searchYear]);
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
        <Heading fontSize={"6xl"} pb="10px" color={"#5ab9b8"} margin="auto">
          Browse our inventory
        </Heading>

        <Text
          fontSize={"xl"}
          fontWeight={"400"}
          color={"#5ab9b8"}
          margin="auto"
        >
          Explore a variety of cars with great value while also achieving
          pristine car condition.{" "}
        </Text>
      </Flex>
      <chakra.form
        mt={"30px"}
        mb={"35px"}
        display={"flex"}
        gap={"20px"}
        justifyContent={"center"}
        alignItems={"center"}
        flexDirection={["column", "row"]}
      >
        <Select
          value={searchMake}
          onChange={(e) => setSearchMake(e.target.value)}
          width="150px"
          bgColor={"#5ab9b8"}
          color={"black"}
          placeholder="Make"
        >
          <option value="ford">Ford</option>
          <option value="honda">Honda</option>
          <option value="chevrolet">Chevrolet</option>
          <option value="subaru">Subaru</option>
          <option value="dodge">Dodge</option>
          <option value="kia">Kia</option>
          <option value="hyundai">Hyundai</option>
        </Select>
        {/*  */}
        <Input
          outline={"2px solid #5ab"}
          value={searchName}
          onChange={(e) => setSearchName(e.target.value)}
          width={"300px"}
          type="text"
          color={"black"}
          placeholder="Search..."
          className="search-input"
        />
        {/*  */}
        <Select
          value={searchYear}
          onChange={(e) => setSearchYear(e.target.value)}
          width="150px"
          bgColor={"#5ab9b8"}
          color={"black"}
          placeholder="Year"
        >
          <option value="2019">2019</option>
          <option value="2018">2018</option>
          <option value="2017">2017</option>
          <option value="2016">2016</option>
          <option value="2015">2015</option>
          <option value="2014">2014</option>
          <option value="2013">2013</option>
          <option value="2012">2012</option>
          <option value="2011">2011</option>
          <option value="2010">2010</option>
        </Select>

        <Select
          value={searchCondition}
          onChange={(e) => setSearchCondition(e.target.value)}
          width="150px"
          bgColor={"#5ab9b8"}
          color={"black"}
          placeholder="Condition"
        >
          <option value="mint">Mint</option>
          <option value="excellent">Excellent</option>
          <option value="food">Good</option>
          <option value="fair">Fair</option>
        </Select>
      </chakra.form>

      <Flex
        className="cars-container"
        spacing="40px"
        placeContent={"center"}
        justifyContent={"center"}
        wrap={"wrap"}
      >
        {filteredCards.map((card) => (
          <CarCard
            key={card.name}
            make={card.make}
            name={card.name}
            smallDescription={card.smallDescription}
            bigDescription={card.bigDescription}
            condition={card.condition}
            year={card.year}
            image={card.image}
            price={card.price}
            miles={card.miles}
          />
        ))}
      </Flex>
      <Footer></Footer>
    </>
  );
}
