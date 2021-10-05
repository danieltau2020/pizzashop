import React from 'react'
import {
  ProductsContainer,
  ProductWrapper,
  ProductsHeading,
  ProductTitle,
  ProductCard,
  ProductImg,
  ProductInfo,
  ProductDesc,
  ProductPrice,
  ProductButton
} from './ProductsElements'

const Products = ({ heading, data }) => {
  return (
    <ProductsContainer>
      <ProductsHeading>{heading}</ProductsHeading>
      <ProductWrapper>
        {data.map((procuct, index) => {
          return (
            <ProductCard key={index}>
              <ProductImg src={procuct.img} alt={procuct.alt} />
              <ProductInfo>
                <ProductTitle>{procuct.name}</ProductTitle>
                <ProductDesc>{procuct.desc}</ProductDesc>
                <ProductPrice>{procuct.price}</ProductPrice>
                <ProductButton>{procuct.button}</ProductButton>
              </ProductInfo>
            </ProductCard>
          )
        })}
      </ProductWrapper>
    </ProductsContainer>
  )
}

export default Products
