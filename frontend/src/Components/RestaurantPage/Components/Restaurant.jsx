/* eslint-disable no-unused-vars */
/* eslint-disable no-nested-ternary */
/* eslint-disable camelcase */
import { React, useEffect } from 'react';
import { Container } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { useParams, Link } from 'react-router-dom';
import CarouselSection from './CarouselSection';
import RestaurantTabs from './RestaurantTabs';
import { getRestaurant } from '../Redux/actions';

function Restaurant() {
  const dispatch = useDispatch();
  const params = useParams();

  const retrieveRestaurant = useSelector((state) => state.getRestaurantReducer);
  const { loading, error, restaurant } = retrieveRestaurant;

  useEffect(() => {
<<<<<<< HEAD
    dispatch(getRestaurant(params.id));
  }, [dispatch]);
=======
    if (!restaurant) {
      dispatch(getRestaurant(params.id));
    }
  }, [dispatch, restaurant]);

  const reservation_confirmation = null;
>>>>>>> 0397295ea1890f4ed0845407c9f94103fe994e1d

  return (
    <div>
      {loading ? (
        <h1>Loading Reservation...</h1>
      ) : error ? (
        <h1>Error Loading Reservation...</h1>
      ) : (
        <Container className="px-5">
          <div className="py-3">
            <Link to="/">Back</Link>
          </div>
          <CarouselSection />
          <h1 className="py-3" style={{ textAlign: 'center' }}>
            {restaurant && restaurant.restaurant_name}
          </h1>
<<<<<<< HEAD
          <RestaurantTabs
            restaurant={restaurant}
          />
=======
          {restaurant && (
            <RestaurantTabs
              reservation_confirmation={reservation_confirmation}
              restaurant={restaurant}
            />
          )}
>>>>>>> 0397295ea1890f4ed0845407c9f94103fe994e1d
        </Container>
      )}
    </div>
  );
}

export default Restaurant;
