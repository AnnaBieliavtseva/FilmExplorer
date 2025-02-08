import { Route, Routes } from 'react-router-dom';
import Navigation from './Navigation/Navigation';
import css from './App.module.css'
import { lazy, Suspense } from 'react';
import Loader from './Loader/Loader';

const HomePage = lazy(() => import('../pages/HomePage/HomePage'))
const MoviesPage = lazy(() => import('../pages/MoviesPage/MoviesPage'));
const MoviesDetailsPage = lazy(()=> import('../pages/MoviesDetailsPage/MoviesDetailsPage'))
const NotFoundPage = lazy(() => import('../pages/NotFoundPage/NotFoundPage'));
const MovieCast = lazy(() => import('./MovieCast/MovieCast'));
const MovieReviews = lazy(() => import('./MovieReviews/MovieReviews'));

function App() {
  return (
    <>
      <Navigation />
      <div className={css.container}>
        <Suspense fallback={<Loader/>}>
          <Routes>
            <Route path="/" element={<HomePage />}></Route>
            <Route path="/movies" element={<MoviesPage />}></Route>
            <Route path="/movies/:movieId" element={<MoviesDetailsPage />}>
              <Route path="cast" element={<MovieCast />}></Route>
              <Route path="reviews" element={<MovieReviews />}></Route>
            </Route>
            <Route path="*" element={<NotFoundPage />}></Route>
          </Routes>
        </Suspense>
      </div>
    </>
  );
}

export default App;
