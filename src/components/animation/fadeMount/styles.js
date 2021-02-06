import styled, { keyframes } from 'styled-components';

const FadeIn = (float) => keyframes`
  0% {
        opacity: 0;
        transform: translate(0, 0)
  }
  40% {
    transform: ${float ? 'translate(0, 20px)' : ''}
  }
  100% {
    transition: opacity 1000ms ease-out, transform 600ms ease-out
    transform: translate(0, 10px)
    opacity: 1
  }
`;

export const Wrapper = styled.div`
  @media (prefers-reduced-motion: no-preference) {
    animation-name: ${props => FadeIn(props.float)};
    animation-fill-mode: backwards;
  }`;
