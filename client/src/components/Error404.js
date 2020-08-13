import React from "react";
import styled, { keyframes } from "styled-components";
import lionel from "../assets/lionel.png";
import hello from "../assets/hello.mp3";

export default function Error404() {
  const [lionel, setLionel] = React.useState(false);

  let audio = new Audio(hello);
  const start = () => {
    setLionel(true);
    audio.play();
  };
  return (
    <Wrapper>
      <Background>
        {lionel && (
          <Lyrics>
            <One>Hello?</One>
            <Two>Is it me you're looking for?</Two>
            <Three>I can see it in your eyes...</Three>
            <Four>I can see it in your smile...</Four>
            <Five>You're all I've ever wanted</Five>
            <Six>And my arms are open wide</Six>
            <Seven>'Cause you know just what to say</Seven>
            <Eight>And you know just what to do</Eight>
            <Nine>And I want to tell you so much</Nine>
            <Ten>I love you</Ten>
          </Lyrics>
        )}
        <MusicButton onClick={start}>Who hurt you Lionel?</MusicButton>
      </Background>
    </Wrapper>
  );
}

const Lyrics = styled.div`
  padding-left: 40vw;
  padding-top: 15vh;
`;

const TenFade = keyframes`
  0% {
    opacity: 0%
  }
  60% {
    opacity: 0%
  }
  }
  100% {
opacity:100%
  }
`;

const Ten = styled.div`
  animation: ${TenFade} 55s;
`;

const NineFade = keyframes`
  0% {
    opacity: 0%
  }
  60% {
    opacity: 0%
  }
  }
  100% {
opacity:100%
  }
`;

const Nine = styled.div`
  animation: ${NineFade} 50s;
`;

const EightFade = keyframes`
  0% {
    opacity: 0%
  }
  60% {
    opacity: 0%
  }
  }
  100% {
opacity:100%
  }
`;

const Eight = styled.div`
  animation: ${EightFade} 45s;
`;

const SevenFade = keyframes`
  0% {
    opacity: 0%
  }
  60% {
    opacity: 0%
  }
  }
  100% {
opacity:100%
  }
`;

const Seven = styled.div`
  animation: ${SevenFade} 39s;
`;

const SixFade = keyframes`
  0% {
    opacity: 0%
  }
  60% {
    opacity: 0%
  }
  }
  100% {
opacity:100%
  }
`;

const Six = styled.div`
  animation: ${SixFade} 32s;
`;

const FiveFade = keyframes`
  0% {
    opacity: 0%
  }
  60% {
    opacity: 0%
  }
  }
  100% {
opacity:100%
  }
`;

const Five = styled.div`
  animation: ${FiveFade} 26s;
`;

const FourFade = keyframes`
  0% {
    opacity: 0%
  }
  60% {
    opacity: 0%
  }
  }
  100% {
opacity:100%
  }
`;

const Four = styled.div`
  animation: ${FourFade} 20s;
`;

const ThreeFade = keyframes`
  0% {
    opacity: 0%
  }
  60% {
    opacity: 0%
  }
  }
  100% {
opacity:100%
  }
`;

const Three = styled.div`
  animation: ${ThreeFade} 13s;
`;

const TwoFade = keyframes`
  0% {
    opacity: 0%
  }
  60% {
    opacity: 0%
  }
  }
  100% {
opacity:100%
  }
`;

const Two = styled.div`
  animation: ${TwoFade} 6s;
`;

const Onefade = keyframes`
  0% {
    opacity: 0%
  }
  }
  100% {
opacity:100%
  }
`;

const One = styled.div`
  animation: ${Onefade} 2s;
`;

const Wrapper = styled.div`
  div {
    font-size: 30px;
  }
`;

const Background = styled.div`
  height: 100vh;
  width: 100vw;
  position: absolute;
  z-index: -1;
  align-content: center;
  background-image: url(${lionel});
`;

const MusicButton = styled.button`
  transform: 500px;
  margin-top: 40vh;
  margin-left: 40vw;
`;

const lyrics = styled.div`
  font-size: 15px;
`;
