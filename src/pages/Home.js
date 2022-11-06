import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <>
      <section className='section'>
        <h1>but Treasure</h1>
        <img src="../../../img/bg_buttreasure-2.jpg" alt="top shot of ocean" width="100%" />
        <p>One morning, when Gregor Samsa woke from troubled dreams, he found himself transformed in his bed into a horrible vermin.
          He lay on his armour-like back, and if he lifted his head a little he could see his brown belly, slightly domed and divided
          by arches into stiff sections. </p>
        <div className="grid grid-4">

          <div>
            <h4>White Ring</h4>
            <img src="../../img/white-ring-6872.jpg" alt="bracelet white ring" />
            <p>One morning, when Gregor Samsa woke from troubled dreams</p>
            <Link to={`/products/1`} className="btn">more info</Link>
          </div>
          <div><h4>Orange Ring</h4>
            <img src="../../img/orange-ring-6870.jpg" alt="bracelet orange ring" />
            <p>One morning, when Gregor Samsa woke from troubled dreams</p>
            <Link to={`/products/3`} className="btn">more info</Link>
          </div>
          <div><h4>Knock on Wood</h4>
            <img src="../../img/knock-on-wood-6869.jpg" alt="bracelet with wood" />
            <p>One morning, when Gregor Samsa woke from troubled dreams</p>
            <Link to={`/products/5`} className="btn">more info</Link>
          </div>
          <div><h4>Minty Ring</h4>
            <img src="../../img/teal-ring-6871.jpg" alt="bracelet teal" />
            <p>One morning, when Gregor Samsa woke from troubled dreams</p>
            <Link to={`/products/4`} className="btn">more info</Link>
          </div>
        </div>
      </section>
    </>
  );
};
export default Home;
