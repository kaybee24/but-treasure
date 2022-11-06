import { Link } from 'react-router-dom';

const About = () => {
  return (
    <section className='section'>
      <div className='grid'>
        <h2>About</h2>
        <p>Hej, it's Katrin and Ian</p>
        <p>We pick up trash from the beaches around Cape Town to create and build new things.</p>
        <div className="bottle-caps">
          <h3>Bottle Caps</h3>
          <p>Definitely one of the things we find the most. <br />
            <strong>Steps: </strong>1. Order by color, 2. Clean, 3. Melt, 4. Chose a shape, 5. Press into shape, 6. Wait, 7. Cut off edges, 8. Reuse
          </p>
          <div className='grid grid-4'>
            <div>
              <img className="product-img" src="../../img/bottle-caps-0907.jpg" alt="bracelet white ring" />
              <p>One morning, when Gregor Samsa woke from troubled dreams</p>
            </div>
            <div>
              <img className="product-img" src="../../img/bottle-caps-8247.jpg" alt="bracelet orange ring" />
              <p>One morning, when Gregor Samsa woke from troubled dreams</p>
            </div>
            <div>
              <img className="product-img" src="../../img/bottle-caps-8248.jpg" alt="bracelet with wood" />
              <p>One morning, when Gregor Samsa woke from troubled dreams</p>
            </div>
            <div>
              <img className="product-img" src="../../img/bottle-caps-8249.jpg" alt="bracelet teal" />
              <p>One morning, when Gregor Samsa woke from troubled dreams</p>
            </div>
          </div>
        </div>
        <div className="findings">
          <h3>Weird & fun findings</h3>
          <p>We stumble upon some weird, fun findings – and of course, unfortunately we do have sad encounters. Won't display them here - for now.</p>
          <div className='grid grid-4'>
            <div>
              <img className="product-img" src="../../img/horse-shoe-8253.jpg" alt="horse shoe in sand" />
              <p>Lucky us – of course we hung it up in our house</p>
            </div>
            <div>
              <img className="product-img" src="../../img/lidocaine-8232.jpg" alt="lidocaine found no a beach" />
              <p>Lidocaine in glass – still usable?</p>
            </div>
            <div>
              <img className="product-img" src="../../img/nurdles-7027.jpg" alt="nurdles on a beach" />
              <p>Neither fun, nor weird – they are unfortunately simply present</p>
            </div>
            <div>
              <img className="product-img" src="../../img/nurdles-7027.jpg" alt="something meaningflu" />
              <p>One morning, when Gregor Samsa woke from troubled dreams</p>
            </div>
          </div>
        </div>
      </div>
      <Link to="/" className="btn">
        Back to Home Page
      </Link>
    </section>
  );
};
export default About;
