import {Link} from "react-router-dom";
import React from "react";

const NotFoundPage = () => (
  <div className="notFound-container">
    <Link to={`/`}>
      <img className="notFound-container__image" src="/images/404-Error.png" alt=""/>
    </Link>
  </div>);

export default NotFoundPage
