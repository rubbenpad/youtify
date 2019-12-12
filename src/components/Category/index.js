import React from 'react';
import { Wrapper, Title, Row } from './styles';

const Category = ({ children, title }) => {
  return (
    <Wrapper>
      <Title>
        <h2>{title}</h2>
      </Title>
      <Row>{children}</Row>
    </Wrapper>
  );
};

export default Category;
