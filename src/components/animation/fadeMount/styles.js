import styled, { keyframes } from 'styled-components';

const FadeIn = keyframes`
  0% {
        opacity: 0;
  }
  100% {
    transition: opacity 1200ms ease-out, transform 600ms ease-out
    opacity: 1
  }
`;

export const Wrapper = styled.div`
  @media (prefers-reduced-motion: no-preference) {
    animation-name: ${FadeIn};
    animation-fill-mode: backwards;
  }
`;
