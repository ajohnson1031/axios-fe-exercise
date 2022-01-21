import styled from "styled-components";
import Image from "next/image";
import Link from "next/link";
import blurImage from "../_imgs/placeholder.jpeg";
import moment from "moment";

const Story = ({ item }) => {
  const {
    headline,
    authors,
    sections,
    primary_image,
    published_date,
    permalink,
  } = item;
  const formattedDate = moment(published_date).format("MMM d, Y");
  const imageLoader = ({ src, width, quality }) => {
    if (primary_image) return primary_image.base_image_url;
    return blurImage.src;
  };

  return (
    <ItemWrapper>
      <Item>
        <Link href={permalink} passHref>
          <GoLink>
            <Image
              loader={imageLoader}
              src="story_image.jpg"
              width={333}
              height={205.34}
            />
          </GoLink>
        </Link>
        <Section>
          {sections.length ? sections[0].name : "Breaking News"}
        </Section>
        <Headline>{headline}</Headline>
        <DateWrapper>
          <Date>{formattedDate}</Date>
          <Link href={permalink} passHref>
            <GoLink>Go Deeper &#8594;</GoLink>
          </Link>
        </DateWrapper>
      </Item>
    </ItemWrapper>
  );
};

const Item = styled.div`
  flex-basis: 333px;
  flex-grow: 0;
  flex-shrink: 0;
  width: 333px;
  max-width: 333px;
  height: inherit;
`;

const ItemWrapper = styled.div`
  display: inline-block;
  flex-basis: 383px;
  flex-grow: 0;
  flex-shrink: 0;
  width: 383px;
  height: auto;
  height: inherit;
  margin-left: 50px;
  border-right: 1px solid #e9e9ee;

  &: first-child {
    margin-left: 0;
  }
  &: last-child {
    border: none;
  }
`;

const Section = styled.p`
  font-family: sans-serif;
  color: #ab7d36;
  font-size: 12px;
  line-height: 18px;
`;

const Headline = styled.p`
  font-family: sans-serif;
  font-size: 18px;
  line-height: 22.5px;
  color: #333335;
  margin: 0;
`;

const DateWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Date = styled.p`
  font-family: sans-serif;
  font-size: 14px;
  line-height: 21px;
  color: #656568;
`;

const GoLink = styled.a.attrs({ target: "_blank" })`
  font-family: sans-serif;
  font-size: 18px;
  line-height: 18px;
  color: #2257da;
  text-decoration: none;
`;
export default Story;
