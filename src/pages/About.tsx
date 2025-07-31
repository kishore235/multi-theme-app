import React from 'react';
import styled from 'styled-components';
import { Button } from '../components/common/Button';

const PageTitle = styled.h1`
  margin-bottom: 1rem;
`;

const Paragraph = styled.p`
  line-height: 1.6;
  margin-bottom: 1.5rem;
`;

const About: React.FC = () => {
  return (
    <div>
      <PageTitle>About Us</PageTitle>
      <Paragraph>
        This is a demo application built to showcase a multi-theme switcher in React.
        The app is built with TypeScript, React Router, and Styled-components. It avoids
        large UI libraries to provide a custom-tailored experience.
      </Paragraph>
      <Paragraph>
        Notice how the font, colors, and even the page layout (on Theme 2) change
        when you switch themes in the header. This demonstrates a deep theming capability
        that goes beyond simple color swaps.
      </Paragraph>
      <Button>Learn More</Button>
    </div>
  );
};

export default About;