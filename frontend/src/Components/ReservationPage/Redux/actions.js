/* eslint-disable import/prefer-default-export */
import axios from 'axios';
import {

  RESERVATION_GET_ALL_RESERVATIONS_REQUEST,
  RESERVATION_GET_ALL_RESERVATIONS_SUCCESS,
  RESERVATION_GET_ALL_RESERVATIONS_ERROR,

  RESERVATION_DELETE_REQUEST,
  RESERVATION_DELETE_SUCCESS,
  RESERVATION_DELETE_ERROR,

  RESERVATION_REMOVE_REQUEST,
  RESERVATION_REMOVE_SUCCESS,
  RESERVATION_REMOVE_ERROR,

} from './constants';

export const getAllReservations = () => async (dispatch, getState) => {
  try {
    dispatch({
      type: RESERVATION_GET_ALL_RESERVATIONS_REQUEST,
    });

    // to retrieve information from the store
    const {
      userLoginReducer: { userInfo },
    } = getState();

    const config = {
      headers: {
        'Content-type': 'application/json',
        Authorization: `Bearer ${userInfo.token}`,
      },
    };

    const { data } = await axios.get(
      'http://ec2-18-141-208-218.ap-southeast-1.compute.amazonaws.com:9090/api/reservation/get-all-reservation/',
      config,
    );

    dispatch({
      type: RESERVATION_GET_ALL_RESERVATIONS_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: RESERVATION_GET_ALL_RESERVATIONS_ERROR,
      payload:
        error.response && error.response.data.detail
          ? error.response.data.detail
          : error.message,
    });
  }
};

export const deleteReservation = (reservationID) => async (dispatch, getState) => {
  try {
    dispatch({
      type: RESERVATION_DELETE_REQUEST,
    });

    // to retrieve information from the store
    const {
      userLoginReducer: { userInfo },
    } = getState();

    const config = {
      headers: {
        'Content-type': 'application/json',
        Authorization: `Bearer ${userInfo.token}`,
      },
    };
    const { data } = await axios.delete(
      `http://ec2-18-141-208-218.ap-southeast-1.compute.amazonaws.com:9090/api/reservation/delete-reservation/reservation_id=${reservationID}/`,
      config,
    );

    dispatch({
      type: RESERVATION_DELETE_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: RESERVATION_DELETE_ERROR,
      payload:
        error.response && error.response.data.detail
          ? error.response.data.detail
          : error.message,
    });
  }
};

export const removeReservation = (reservationID) => async (dispatch, getState) => {
  try {
    dispatch({
      type: RESERVATION_REMOVE_REQUEST,
    });

    // to retrieve information from the store
    const {
      userLoginReducer: { userInfo },
    } = getState();

    const config = {
      headers: {
        'Content-type': 'application/json',
        Authorization: `Bearer ${userInfo.token}`,
      },
    };

    const { data } = await axios.delete(
      `http://ec2-18-141-208-218.ap-southeast-1.compute.amazonaws.com:9090/api/reservation/remove-reservation/reservation_id=${reservationID}/`,
      config,
    );

    dispatch({
      type: RESERVATION_REMOVE_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: RESERVATION_REMOVE_ERROR,
      payload:
        error.response && error.response.data.detail
          ? error.response.data.detail
          : error.message,
    });
  }
};
