import { Link } from 'react-router-dom';
import Header from '../components/Header.js';

const Home = () => {
  return (
    <>
      <Header />
      <section className='section'>
        <h2>What we do</h2>
        <p>Picking up litter when we do beach walks on the beaches around Cape Town, South Africa.
          No trash, but treasure.  </p>
        <div className="grid grid-4">

          <div>
            <h4>White Ring</h4>
            <img className="product-img" src="../../img/white-ring-6872.jpg" alt="bracelet white ring" />
            <p>One morning, when Gregor Samsa woke from troubled dreams</p>
            <Link to={`/products/1`} className="btn">more info</Link>
          </div>
          <div><h4>Orange Ring</h4>
            <img className="product-img" src="../../img/orange-ring-6870.jpg" alt="bracelet orange ring" />
            <p>One morning, when Gregor Samsa woke from troubled dreams</p>
            <Link to={`/products/3`} className="btn">more info</Link>
          </div>
          <div><h4>Knock on Wood</h4>
            <img className="product-img" src="../../img/knock-on-wood-6869.jpg" alt="bracelet with wood" />
            <p>One morning, when Gregor Samsa woke from troubled dreams</p>
            <Link to={`/products/5`} className="btn">more info</Link>
          </div>
          <div><h4>Minty Ring</h4>
            <img className="product-img" src="../../img/teal-ring-6871.jpg" alt="bracelet teal" />
            <p>One morning, when Gregor Samsa woke from troubled dreams</p>
            <Link to={`/products/4`} className="btn">more info</Link>
          </div>
        </div>
      </section>
    </>
  );
};
export default Home;
