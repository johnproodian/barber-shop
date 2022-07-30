import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Auth from '../utils/auth';
import { useQuery } from '@apollo/client';
import { QUERY_ME } from '../utils/queries';
// import { UserList } from '../components/UserList';

const Home = () => {

  const [formState, setFormState] = useState({
    clicked: false
  });

  const handleClick = (event) => {
    event.preventDefault();

    if (event) {
      setFormState({
        ...formState,
        clicked: true
      });
    };
  }
  const {loading, error, data } = useQuery(QUERY_ME);

  const user = data?.me;

    if (Auth.loggedIn()) {
      
          if (loading || error) {
            return (<section className="signup-hero">
              <div className="hero-text"></div>
            </section>)
          } else if (user.role === 'barber') {
            return (
              // <UserList></UserList>
              <section className="signup-hero">
                <div className="hero-text">
                  <p className="promo">What would you like to do, {user.name}?</p>
                  <p className="promo-text">
                    Cosby sweater iphone artisan, squid trust fund photo booth twee
                    blog shoreditch single-origin coffee aesthetic jean shorts
                    messenger bag brooklyn butcher. Iphone fap banksy next level put a
                    bird on it, letterpress photo booth thundercats biodiesel fanny
                    pack etsy banh mi wayfarers. Sustainable four loko dreamcatcher,
                    vegan single-origin coffee yr cardigan biodiesel williamsburg
                    thundercats salvia master cleanse terry richardson tumblr
                    mcsweeney’s.
                  </p>
                  <Link to="/profile">
                    <button id="profile-btn" className="signup-btn">
                      View My Profile
                    </button>
                  </Link>
                  <a href="/" onClick={handleClick}>
                    <button id="users-btn" className="signup-btn">
                      View My Clients
                    </button>
                  </a>
                  {formState.clicked && (
                    <div>Sorry, that feature is not yet available. Try again later!</div>
                  )}
                  
                </div>
              </section>
            )
          } else {
            return (
              <section className="signup-hero">
                <div className="hero-text">
                  <p className="promo">What would you like to do, {user.name}?</p>
                  <p className="promo-text">
                    Cosby sweater iphone artisan, squid trust fund photo booth twee
                    blog shoreditch single-origin coffee aesthetic jean shorts
                    messenger bag brooklyn butcher. Iphone fap banksy next level put a
                    bird on it, letterpress photo booth thundercats biodiesel fanny
                    pack etsy banh mi wayfarers. Sustainable four loko dreamcatcher,
                    vegan single-origin coffee yr cardigan biodiesel williamsburg
                    thundercats salvia master cleanse terry richardson tumblr
                    mcsweeney’s.
                  </p>
                  <Link to="/profile">
                    <button id="profile-btn" className="signup-btn">
                      View My Profile
                    </button>
                  </Link>
                </div>
              </section>
            )
          }  
    } else {
      return (
        <section className="signup-hero">
          <div className="hero-text">
            <p className="promo">Sign Up for 50% OFF your first cut!</p>
            <p className="promo-text">
              Cosby sweater iphone artisan, squid trust fund photo booth twee
              blog shoreditch single-origin coffee aesthetic jean shorts
              messenger bag brooklyn butcher. Iphone fap banksy next level put a
              bird on it, letterpress photo booth thundercats biodiesel fanny
              pack etsy banh mi wayfarers. Sustainable four loko dreamcatcher,
              vegan single-origin coffee yr cardigan biodiesel williamsburg
              thundercats salvia master cleanse terry richardson tumblr
              mcsweeney’s.
            </p>
            <Link to="/signup">
              <button id="signup-btn" className="signup-btn">
                Sign Up
              </button>
            </Link>
          </div>
        </section>
      )
    }
}

export default Home;
