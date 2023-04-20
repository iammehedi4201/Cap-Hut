import React from 'react';
import './SpecialProducts.css'
import ProductsSlider from '../ProductsSlider/ProductsSlider';

const SpecialProducts = () => {
    return (
        <section className='special-product-section container'>
             <h1>SPECIAL PRODUCTS</h1>
             <hr />
             <div>
                 <ProductsSlider></ProductsSlider>
             </div>
        </section>
    );
};

export default SpecialProducts;