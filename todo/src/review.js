import React, { useState } from 'react';
function Review() {
    // Mock product data
    const [products, setProducts] = useState([
      { id: 1, name: 'Product 1', rating: 3 },
      // ... other products
    ]);
  
    const setRating = (productId, rating) => {
      const updatedProducts = products.map((product) =>
        product.id === productId ? { ...product, rating } : product
      );
      setProducts(updatedProducts);
    };
  
    return (
      <div>
        <h1>Product Reviews</h1>
        {products.map((product) => (
          <div key={product.id}>
            <h2>{product.name}</h2>
            {[...Array(5)].map((_, index) => (
              <span key={index} onClick={() => setRating(product.id, index + 1)}>
                {product.rating > index ? '★' : '☆'}
              </span>
            ))}
          </div>
        ))}
      </div>
    );
  }
export default Review;