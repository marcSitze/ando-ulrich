import { Menu, Box, Button, Text, Title, Card, CardImage } from "components";
import { ArtistCards, HomeCards, HomeRowCards } from "data";
import React from "react";

const Home = () => {
  return (
    <div className="bg-[#000000]">
      <div className="home mb-20" style={{ textAlign: "center" }}>
        <Menu />
        <div style={{ position: "absolute", bottom: 10, left: "30%" }}>
          <h1 style={{ fontSize: 80, fontWeight: "normal", color: "#fff" }}>
            ANDO ULRICH
          </h1>
        </div>
      </div>
      <Box className="px-[20%] mb-20">
        <Box>
          <Title
            className="text-primary text-sm font-bold mb-6"
            title="Biography & Awards"
          />
        </Box>
        <Box className="flex">
          <Box className="w-[50%]">
            <Box className="w-[70%]">
              <Text
                className="text-white text-[2rem] font-normal"
                style={{ lineHeight: "2.8rem", textTransform: "uppercase" }}
              >
                One of the greates contemporary theatre actor
              </Text>
            </Box>
          </Box>
          <Box className="w-[50%]">
            <Box className="w-[70%]">
              <Text className="text-white text-[12px] mb-4">
                Neque facilisis a, faucibus orci orci nulla eget dictumst congue
                interdum etiam aliquam lobortis egestas pretium porttitor eget
                gravida urna, cursus imperdiet in arcu.
              </Text>
              <Text className="text-white text-[12px] mb-4">
                Turpis elementum, ultrices dui maecenas quisque cras dui sed
                porttitor aliquam morbi libero egestas lacus sed.
              </Text>
              <Text className="text-white text-[12px] mb-4">
                Commodo sit arcu curabitur egestas metus, dictum lectus
                vulputate sed pharetra nisl, sed eget pellentesque magna
                porttitor sed in maecenas maecenas rhoncus neque imperdiet eget
                bibendum malesuada enim, eu eu ac id pharetra ultrices tempus
                accumsan aenean nullam egestas viverra.
              </Text>
              <Button className="text-white">Read more </Button>
            </Box>
          </Box>
        </Box>
      </Box>
      <section className="px-[20%]">
        <Box className="flex flex-wrap mb-40">
          {HomeCards.map((item, idx) => (
            <Card
              className={`w-[30%] ${(idx + 1) % 3 === 0 ? "" : "mr-10"} mb-16`}
              key={idx}
              title={item.title}
              decription={item.description}
              subTitle={item.subTitle}
            />
          ))}
        </Box>
        <Box className="text-center mb-20">
          <Title title="Repertoire" className="font-bold text-primary mb-5" />
          <Box className="flex justify-center">
            <Text className="text-white text-3xl w-1/2">
              William Gillbert has over fourty roles in his repertoire
            </Text>
          </Box>
        </Box>

        <Box className="flex flex-wrap mb-40">
          {ArtistCards.map((item, idx) => (
            <CardImage
              key={idx}
              {...item}
              className={`w-[30%] ${(idx + 1) % 3 === 0 ? "" : "mr-10"} mb-16`}
            />
          ))}
        </Box>

        <Box className="flex">
          <Text className="text-primary font-bold text-sm mr-40">Tours</Text>
          <Box className="w-1/3">
            <Text className="text-white text-2xl">
              William Gillbert has perform at the world’s leading theatre
            </Text>
            {HomeRowCards.map((item, idx) => (
              <Card
                {...item}
                className={`${
                  (idx + 1) % 3 === 0 ? "" : "mr-10"
                } mb-16 flex justify-between w-full`}
                orientation="row"
                key={idx}
              />
            ))}
          </Box>
        </Box>

        <Box></Box>
      </section>
    </div>
  );
};

export default Home;
