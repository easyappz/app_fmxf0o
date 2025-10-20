import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
  const goBack = () => {
    if (typeof window !== 'undefined' && window.history) {
      window.history.back();
    }
  };

  return (
    <main className="notfound" data-easytag="1760914455200-react/src/pages/NotFound.jsx">
      <section className="notfound__card" data-easytag="1760914455201-react/src/pages/NotFound.jsx">
        <h1 className="notfound__title" data-easytag="1760914455202-react/src/pages/NotFound.jsx">Страница не найдена</h1>
        <p className="notfound__text" data-easytag="1760914455203-react/src/pages/NotFound.jsx">
          Кажется, вы попали не туда. Проверьте адрес или вернитесь на главную страницу.
        </p>
        <nav className="notfound__actions" data-easytag="1760914455204-react/src/pages/NotFound.jsx" aria-label="Действия на странице 404">
          <Link
            to="/"
            className="btn btn--eq"
            data-easytag="1760914455205-react/src/pages/NotFound.jsx"
            aria-label="На главную"
          >
            На главную
          </Link>
          <button
            type="button"
            className="btn btn--ctrl"
            onClick={goBack}
            data-easytag="1760914455206-react/src/pages/NotFound.jsx"
            aria-label="Вернуться назад"
          >
            Назад
          </button>
        </nav>
      </section>
    </main>
  );
};

export default NotFound;
