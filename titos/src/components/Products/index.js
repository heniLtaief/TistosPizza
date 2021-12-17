import React from 'react'
import {
    ProductsContainer,
    ProductsHeading,
    ProductWraper,
    ProductCard,
    ProductImg,
    ProductInfo,
    ProductTitle,
    ProductDesc,
    ProductPrice,
    ProductButton
} from "./ProductsElements"

const Products = () => {
    return (
        <ProductsContainer>
            <ProductsHeading>
                <ProductWraper>
                   {data.map((product,index)=>{
                       return(
                        <ProductCard key={index}>
                            <ProductImg src={product.img} alt={product.alt}/>
                            <ProductInfo>
                                <ProductTitle>{product.name}</ProductTitle>
                                <ProductDesc>{product.desc}</ProductDesc>
                                <ProductPrice>{product.price}</ProductPrice>
                                <ProductButton>{product.button}</ProductButton>
                            </ProductInfo>
                        </ProductCard>
                       )
                   })} 
                </ProductWraper>
            </ProductsHeading>
        </ProductsContainer>
    )
}

export default Products
