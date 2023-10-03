import React from 'react';

function Nav() {
  return (
      <nav className="px-4 py-2 bg-body-tertiary">
        <div className="navbarr">
          <a className="navbar-brand" href='/home'>
            <img src="img/HealthyNutritionSinBackground.png" alt="wew" width={20} height={20} />
          </a>
                <button   type="button" className="btn btn-light btn-lg" >
                  <a href='/tablas'>Tabla nutricional</a>
                </button>
        </div>
      </nav>
  );
}

export default Nav;
