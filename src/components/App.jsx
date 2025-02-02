import { useEffect, useState } from 'react';
import { NavLink, Route, Routes } from 'react-router-dom';
import clsx from 'clsx';
import css from './App.module.css';
import HomePage from '../pages/HomePage';
import MoviesPage from '../pages/MoviesPage';
import MoviesDetailsPage from '../pages/MoviesDetailspage';
import MovieCast from './MovieCast/MovieCast';
import MovieReviews from './MovieReviews/MovieReviews';
import NotFoundPage from '../pages/NotFoundPage';
import fetchTrendingFilms from '../services/fetchTrendingFilms';
import Navigation from './Navigation/Navigation';

function App() {
  return (
    <>
      <div className="container">
        <Navigation />
      </div>
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/movies" element={<MoviesPage />}></Route>
        <Route path="/movies/:movieId" element={<MoviesDetailsPage />}></Route>
        <Route path="/movies/:movieId/cast" element={<MovieCast />}></Route>
        <Route
          path="/movies/:movieId/reviews"
          element={<MovieReviews />}
        ></Route>
        <Route path="*" element={<NotFoundPage />}></Route>
      </Routes>
    </>
  );
}

export default App;
