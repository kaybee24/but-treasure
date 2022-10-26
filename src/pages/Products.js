import { Link } from 'react-router-dom';
import products from '../data';

const Products = () => {
  return (
    <section className='section grid'>
      <h2>Products</h2>
      <div className='grid grid-3'>
        {products.map((product) => {
          return (
            <article key={product.id}>
              <h4>{product.name}</h4>
              <img src={product.image} />
              <Link to={`/products/${product.id}`} className="btn">more info</Link>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default Products;