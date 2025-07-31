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

const Contact: React.FC = () => {
  return (
    <div>
      <PageTitle>Contact Us</PageTitle>
      <Paragraph>
        This page demonstrates that the theme is consistently applied across all
        routes in the application. Feel free to explore and see how every component
        adapts to the selected theme.
      </Paragraph>
      <Button>Send Message</Button>
    </div>
  );
};

export default Contact;