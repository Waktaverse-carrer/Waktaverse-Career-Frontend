'use client';

import React from 'react';
import Image from 'next/image';
import styled from 'styled-components';
import CounterAnimation from './CountAnimation';

const Section = styled.div`
  width: 100%;
  min-width: 2220px;
  height: 100vh;
  min-height: 600px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #3a3a3c;
  padding: 0 2rem;
`;

const Content = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  padding: 0 10rem;
`;

const ImagesContainer = styled.div`
  position: relative;
  flex: 1;
  display: flex;
  gap: 1rem;
  justify-content: space-between;
`;

const LeftWall = styled.div`
  position: absolute;
  left: 0;
  cursor: pointer;
`;

const RightWall = styled.div`
  position: absolute;
  right: -10px;
  cursor: pointer;
`;

const ImageWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
`;

const TextContainer = styled.div`
  flex: 1;
  color: #ffffff;
  text-align: right;
`;

const Highlight = styled.h1`
  font-size: 3rem;
  font-weight: bold;
  color: #32b9a2;
  margin: 0;
`;

const Subtitle = styled.p`
  font-size: 1.5rem;
  margin-top: 1rem;
  color: #ffffff;
`;

export default function ThirdSection() {
  return (
    <Section>
      <Content>
        <ImagesContainer>
          <LeftWall>
            <Image src='/images/left_shadow.png' alt='leftShadow' width={50} height={800} />
          </LeftWall>
          <ImageWrapper>
            <Image
              src='/images/landing_section3_img1.png'
              alt='Template 1'
              width={320}
              height={640}
              priority
            />
          </ImageWrapper>
          <ImageWrapper>
            <Image
              src='/images/landing_section3_img2.png'
              alt='Template 2'
              width={400}
              height={800}
              priority
            />
          </ImageWrapper>
          <ImageWrapper>
            <Image
              src='/images/landing_section3_img3.png'
              alt='Template 3'
              width={320}
              height={640}
              priority
            />
          </ImageWrapper>
          <RightWall>
            <Image src='/images/right_shadow.png' alt='leftShadow' width={60} height={800} />
          </RightWall>
        </ImagesContainer>
        <TextContainer>
          <Highlight>
            <CounterAnimation value={999} />+
          </Highlight>
          <Subtitle>다양한 제작 템플릿 제공</Subtitle>
        </TextContainer>
      </Content>
    </Section>
  );
}
