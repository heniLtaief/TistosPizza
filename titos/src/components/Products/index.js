import React from 'react'

const Products = () => {
    return (
        <ProductsContainer>
            <ProductsHeading>
                <ProductWraper>
                   {data.map((product,index)=>{
                       return(
                        <ProductCard key={index}>
                            <ProductImg src={product.img} />
                        </ProductCard>
                       )
                   })} 
                </ProductWraper>
            </ProductsHeading>
        </ProductsContainer>
    )
}

export default Products
