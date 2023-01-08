import React from "react";
import {
  Box,
  Flex,
  Heading,
  Text,
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
  Image,
} from "@chakra-ui/react";
import Footer from "../components/footer";

export default function loanEstimator() {
  return (
    <>
      <div className="iframe">
        <iframe
          src="https://generaljubilantmicroscope.mrace.repl.co"
          name="frame"
          scrolling="no"
          frameborder="1"
          marginheight="0px"
          marginwidth="0px"
          height="800px"
          width="1000px"
        ></iframe>
      </div>
      <Footer />
    </>
  );
}
