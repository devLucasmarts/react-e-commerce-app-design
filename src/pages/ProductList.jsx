import React from 'react';
import styled from 'styled-components';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Products from '../components/Products';
import Newsletter from '../components/Newsletter';
import Announcements from '../components/Announcements';

import { mobile } from '../responsive';

const ProductList = () => {
  return (
    <Container>
        <Navbar />
        <Announcements />
        <Title>Dresses</Title>
        <FilterContainer>
            <Filter>
                <FilterText>Filter Products:</FilterText>
                <Select>
                    <Option disabled selected>
                        Color
                    </Option>
                    <Option>White</Option>
                    <Option>Black</Option>
                    <Option>Red</Option>
                    <Option>Blue</Option>
                    <Option>Yellow</Option>
                    <Option>Green</Option>
                </Select>
                <Select>
                    <Option disabled selected>
                        Size
                    </Option>
                    <Option>XS</Option>
                    <Option>S</Option>
                    <Option>M</Option>
                    <Option>L</Option>
                    <Option>XL</Option>
                </Select>
            </Filter>
            <Filter>
                <FilterText>Sort Products:</FilterText>
                <Select>
                    <Option disabled selected>
                        Newest
                    </Option>
                    <Option>Price (asc)</Option>
                    <Option>Price (desc)</Option>
                </Select>
            </Filter>
        </FilterContainer>
        <Products />
        <Newsletter />
        <Footer />
    </Container>
  );
};

const Container = styled.section``;

const Title = styled.h1`
    font-size: 2.5rem;
    margin: 20px;
`;

const FilterContainer = styled.div`
    display: flex;
    justify-content: space-between;
`;

const Filter = styled.div`
    margin: 20px;
    display: flex;

    ${mobile({ 
        width: "0px 20px",
        display: "flex",
        flexDirection: "column"
    })};
`;

const FilterText = styled.div`
    font-size: 2rem;
    font-weight: 600;
    margin-right: 20px;

    ${mobile({ 
        marginRight: "0px"
    })};
`;

const Select = styled.select`
    padding: 10px;
    margin-right: 20px;
  
    ${mobile({ 
        margin: "10px 0px"
    })};
`;

const Option = styled.option``;

export default ProductList;
