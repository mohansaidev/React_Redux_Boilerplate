import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => (
  <div className="not-found">
    <div className="not-found__box">
      <h1>Page Not Found</h1>
      <p>We&apos;re unable to find that page.</p>
      <Link className="button button--link" to="/" replace>HEAD HOME</Link>
    </div>
  </div>
);

export default NotFound;
