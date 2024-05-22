import React from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

function CustomLink({ to, state, children }) {
  const navigate = useNavigate();

  const handleClick = (e) => {
    e.preventDefault();
    navigate(to, { state });
  };

  return (
    <Link to="#" onClick={handleClick}>
      {children}
    </Link>
  );
}

export default CustomLink;