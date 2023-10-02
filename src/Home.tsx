import { Menu, Box, Button, Text, Title } from "components";
import React from "react";

const Home = () => {
  return (
    <div className="bg-[#000000]">
      <div className="home" style={{ textAlign: "center" }}>
        <Menu />
        <div style={{ position: "absolute", bottom: 10, left: "30%" }}>
          <h1 style={{ fontSize: 80, fontWeight: "normal", color: "#fff" }}>
            ANDO ULRICH
          </h1>
        </div>
      </div>
      <Box className="flex px-[10%]">
        <Box>
          <Title title="Biography & Awards" />
          <Text className="text-white">
            One of the greates contemporary theatre actor
          </Text>
        </Box>
        <Box>
          <Text className="text-white">
            Neque facilisis a, faucibus orci orci nulla eget dictumst congue
            interdum etiam aliquam lobortis egestas pretium porttitor eget
            gravida urna, cursus imperdiet in arcu.
          </Text>
          <Text className="text-white">
            Turpis elementum, ultrices dui maecenas quisque cras dui sed
            porttitor aliquam morbi libero egestas lacus sed.
          </Text>
          <Text className="text-white">
            Commodo sit arcu curabitur egestas metus, dictum lectus vulputate
            sed pharetra nisl, sed eget pellentesque magna porttitor sed in
            maecenas maecenas rhoncus neque imperdiet eget bibendum malesuada
            enim, eu eu ac id pharetra ultrices tempus accumsan aenean nullam
            egestas viverra.
          </Text>
          <Button className="text-white">Read more </Button>
        </Box>
      </Box>
    </div>
  );
};

export default Home;
