import React, { useState, useEffect, useMemo } from "react";
import axios from "axios";
import styled from "styled-components";

import { MainWrapper } from "containers/MainWrapper";
import HeaderWrapper from "containers/HeaderWrapper";
import StoryWrapperOuter from "containers/StoryWrapperOuter";
import StoryWrapper from "containers/StoryWrapper";

import ArrowButton from "components/ArrowButton";
import leftArrow from "../_imgs/left_arrow.svg";
import rightArrow from "../_imgs/right_arrow.svg";

import Story from "components/Story";
import CallToAction from "components/CallToAction";
import Dots from "components/Dots";
import Link from "next/link";

const request = axios.create({
  baseURL: "https://api.axios.com/api/render/",
});
const Index = (props) => {
  const [x, setX] = useState(0);
  const [streams, setStreams] = useState(0);
  const [content, setContent] = useState([]);

  const goDirection = (e) => {
    e.preventDefault();
    if (e.target.name === "left") {
      console.log(x);
      x >= 0 ? setX(-100 * Math.floor(content.length / 3)) : setX(x + 100);
    } else {
      x <= -100 * Math.floor(content.length / 3) ? setX(0) : setX(x - 100);
    }
  };

  useEffect(() => {
    try {
      if (streams) {
        streams.map((stream) =>
          request
            .get(`content/${stream}`)
            .then((res) => setContent((prevState) => [...prevState, res.data]))
        );
      } else {
        request
          .get("stream/content")
          .then((res) => setStreams(res.data.results));
      }
    } catch (error) {
      console.error(error);
    }
  }, [streams]);

  return (
    <MainWrapper>
      <HeaderWrapper>
        <Title>More from Axios.com</Title>
        <Link href="https://www.axios.com" passHref>
          <CallToAction>Visit Axios.com &#8594;</CallToAction>
        </Link>
      </HeaderWrapper>
      <ArrowButton name="left" icon={leftArrow} onBtnPress={goDirection} />
      <ArrowButton name="right" icon={rightArrow} onBtnPress={goDirection} />
      <StoryWrapperOuter>
        <StoryWrapper transform={x} minW={375} maxW={1440}>
          {content.length === streams.length &&
            content.map((item) => {
              return <Story key={item.id} item={item}></Story>;
            })}
        </StoryWrapper>
      </StoryWrapperOuter>
      <Dots content={content} setX={setX} />
      <CallToAction isBottom={true}>Visit Axios.com &#8594;</CallToAction>
    </MainWrapper>
  );
};

const getContent = async (streams) => {
  let finalContent = [];
  streams.map((stream) => finalContent.push(request.get(`content/${stream}`)));
  const contentToReturn = await Promise.all(finalContent);
  console.log(contentToReturn);
  return contentToReturn;
};

export async function getServerSideProps(context) {
  const streams = await request.get("stream/content");
  // let content = getContent(streams.data.results); // having trouble getting this to return properly

  return {
    props: {
      streams: streams.data.results,
      content: "",
    }, // will be passed to the page component as props
  };
}

const Title = styled.h1`
  font-family: Arial, Helvetica, sans-serif;
  font-weight: 400;
  font-size: 48px;
  @media (max-width: 375px) {
    font-size: 32px;
  }
`;

export default Index;
