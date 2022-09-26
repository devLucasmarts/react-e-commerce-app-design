import React from 'react';
import styled from 'styled-components';

import { mobile } from '../responsive';

const Announcements = () => {
  return (
    <Container>
        Super oferta! Frete grátis para compras acima de R$50,00
    </Container>
  );
};

const Container = styled.section`
    height: 30px;
    background-color: teal;
    color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1rem;
    font-weight: 500;

    ${mobile({ fontSize: "0.8rem" })}
`;

export default Announcements;
