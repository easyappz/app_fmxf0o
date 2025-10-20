import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <main className="notfound" data-easytag="1760914455200-react/src/pages/NotFound.jsx">
      <section className="notfound__card" data-easytag="1760914455201-react/src/pages/NotFound.jsx">
        <h1 className="notfound__title" data-easytag="1760914455202-react/src/pages/NotFound.jsx">Страница не найдена</h1>
        <p className="notfound__text" data-easytag="1760914455203-react/src/pages/NotFound.jsx">Похоже, вы перешли по неверной ссылке или страница была перемещена.</p>
        <div className="notfound__actions" data-easytag="1760914455204-react/src/pages/NotFound.jsx">
          <Link to="/" className="btn btn--ctrl" data-easytag="1760914455205-react/src/pages/NotFound.jsx">На главную</Link>
        </div>
      </section>
    </main>
  );
};

export default NotFound;
