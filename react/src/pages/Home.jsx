import React from 'react';
import Calculator from '../components/Calculator';

const Home = () => {
  return (
    <main className="home" data-easytag="id001-react/src/pages/Home.jsx">
      <section className="home__header" data-easytag="id002-react/src/pages/Home.jsx">
        <h1 className="home__title" data-easytag="id003-react/src/pages/Home.jsx">привет</h1>
        <p className="home__subtitle" data-easytag="id004-react/src/pages/Home.jsx">Быстрые базовые операции: сложение, вычитание, умножение, деление</p>
      </section>
      <section className="home__body" data-easytag="id005-react/src/pages/Home.jsx">
        <Calculator />
      </section>
    </main>
  );
};

export default Home;
