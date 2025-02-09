import { NavLink } from 'react-router-dom';
import './NotFoundPage.css';

function NotFoundPage() {
  return (
    <main className="grid min-h-full place-items-center px-6 py-24 sm:py-32 lg:px-8">
      <div className="text-center">
        <p className="text-5xl font-semibold text-purple-600">404</p>
        <h1 className="!mt-4 text-6xl font-semibold tracking-tight text-balance text-gray-100 sm:text-7xl">
          Page not found
        </h1>
        <p className="!mt-10 text-2xl font-medium text-pretty text-gray-400 ">
          Sorry, we couldn’t find the page you’re looking for.
        </p>
        <div className="mt-10 flex items-center justify-center gap-x-6">
          <NavLink to="/" className="btn">
            Go back home
          </NavLink>
        </div>
      </div>
    </main>
  );
}

export default NotFoundPage;
