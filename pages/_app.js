import "../styles/globals.css";
import { useEffect, useState } from "react";
import Head from "next/head";
import { ChakraProvider, chakra, Center, Flex } from "@chakra-ui/react";
import theme from "../styles/theme";
import Navbar from "../components/Navbar";
import { HashLoader } from "react-spinners";

const Loader = ({ Component, pageProps }) => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2500);
  }, []);

  return (
    <>
      {loading && (
        <Flex
          w={"100%"}
          h={"100vh"}
          justifyContent={"center"}
          alignItems={"center"}
          id="loader"
        >
          <HashLoader color="#6DB8BA" loading={loading} size={150} />
        </Flex>
      )}
      {!loading && (
        <>
          <ChakraProvider theme={theme}>
            <Head>
              <title>Cardesi | Just For You</title>
              <link
                rel="shortcut icon"
                href="favicon.ico"
                type="image/x-icon"
              />
            </Head>
            <Navbar />
            <Component {...pageProps} />
          </ChakraProvider>
        </>
      )}
    </>
  );
};

function MyApp({ Component, pageProps }) {
  return <Loader Component={Component} pageProps={pageProps} />;
}

export default MyApp;
