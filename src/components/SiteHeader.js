import React from 'react';
import Link from 'gatsby-link';

import github from '../img/github-icon.svg';
import logo from '../img/logo.svg';

const SiteHeader = () => (
  <header className="container sm:flex mx-auto px-4" role="banner">
    <div className="SiteHeader-brand">
      <Link to="/" className="SiteHeader-item" activeClassName="is-active">
        <figure className="image">
          <img src={logo} alt="Kaldi" style={{ width: '88px' }} />
        </figure>
      </Link>
    </div>
    <div className="SiteHeader-start">
      <Link className="SiteHeader-item" to="/about" activeClassName="is-active">
        About
      </Link>
      <Link className="SiteHeader-item" to="/work-archive" activeClassName="is-active">
        Work
      </Link>
      <Link className="SiteHeader-item" to="/articles-archive" activeClassName="is-active">
        Articles
      </Link>
    </div>
  </header>
);

export default SiteHeader;
