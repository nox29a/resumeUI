import React, {useContext} from 'react';
import { useParams } from 'react-router-dom';
import { CartContext } from '../contexts/CartContext'
import { ProductContext } from '../contexts/ProductContext';

const ProductDetails = () => {
  const {id} = useParams();
  const {products} = useContext(ProductContext);
  const {addToCart} = useContext(CartContext);

  const product = products.find((item) => item.id === parseInt(id))

  if (!product) {
    return <section className='h-screen flex justify-center items-center'>Loading...</section>;
  }
  const {title, description, price, image} = product;
  return (
  <section className='pt-32 pb-12 lg:py-32 h-screen flex items-center'>
    <div className='container mx-auto'>
        <div className='flex flex-col lg:flex-row items-center'> 
          {/* IMAGE */}
          <div className='flex flex-1 justify-center items-center mb-8 lg:mb-0'>
            <img className='max-w-[200px] lg:max-w-sm' src={image} alt='' />
          </div>
        <div className='flex-1 text-center lg:text-left'>
          {/* TITLE */}
          <h1 className='text-[26px] font-medium mb-2 max-w-[450px] mx-auto'>{title}</h1>
        {/* PRICE */}
        <div className='text-2xl text-red-500 font-medium mb-6'>
            $ {price}
        </div>
        {/* DESCRIPTION */}
        <p mb-8>{description}</p>
        </div>
        {/* BUTTON */}
      </div>
    </div>
    <div className='flex flex-col justify-center items-center'>

        <button
          onClick={() => addToCart(product, product.id)}
          className='bg-primary py-4 px-8 text-white'>Add to Cart
        </button>
    </div>

  </section>
  
)};

export default ProductDetails;
