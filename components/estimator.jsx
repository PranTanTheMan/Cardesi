import { Flex } from "@chakra-ui/react";
import Footer from "../components/footer";
import React, { useState, useEffect } from "react";
import { RingLoader } from "react-spinners";

const LazyIframe = ({ src }) => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1500);
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
          <RingLoader color={"#6DB8BA"} loading={loading} size={150} />
        </Flex>
      )}
      {!loading && (
        <>
          <div className="iframe">
            <iframe
              src={src}
              name="frame"
              frameborder="1"
              scrolling="no"
              marginheight="0px"
              marginwidth="0px"
              height="800px"
              width="1000px"
            ></iframe>
          </div>

          <Footer />
        </>
      )}
    </>
  );
};

export default function estimator() {
  return <LazyIframe src="https://generaljubilantmicroscope.mrace.repl.co" />;
}
