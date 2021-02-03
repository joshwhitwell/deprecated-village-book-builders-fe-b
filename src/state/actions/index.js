//dependencies
import axios from 'axios';

//utils
import { axiosWithAuth } from '../../utils/axiosWithAuth';
import moment from 'moment';

//action types

import * as actionTypes from './actionTypes';

//env variables
const baseURL = process.env.REACT_APP_BASE_URL;

// -------------------------
// AUTHORIZATION
// -------------------------

export const checkToken = data => dispatch => {
  dispatch({
    type: actionTypes.AUTH_SUCCESS,
    payload: window.localStorage.getItem('token'),
  });
};

export const login = data => dispatch => {
  axios
    .post(`${baseURL}/auth/login`, data)
    .then(res => {
      window.localStorage.setItem('token', res.data.access_token);
      dispatch({
        type: actionTypes.AUTH_SUCCESS,
        payload: res.data.access_token,
      });
    })
    .catch(err => {
      console.log(
        'LOGIN ACTION FAILURE--> with this data & baseURL:',
        data,
        baseURL
      );
      console.dir(err);
    });
};

export const logout = () => dispatch => {
  dispatch({ type: actionTypes.AUTH_LOGOUT });
  window.localStorage.removeItem('token');
};

// -------------------------
// REGRISTRATION
// -------------------------

export const register = data => dispatch => {
  // let {email, password, ...rest} = data;
  // let creds = {email, password}
  // axios
  // .post(`${baseURL}/auth/register`, {...creds, role: 'teacher'})
  // .then(res => {
  //   if(res.statusText === "Created"){
  //     console.log("New account created successfully");
  //   }
  //   dispatch({
  //     type: actionTypes.REGISTER_SUCCESS,
  //     payload: rest,
  //   })
  //   login(creds)
  // })
  // .catch( err => {
  //   console.log(
  //     'REGISTER ACTION FAILURE--> with this data & baseURL:',
  //     data,
  //     baseURL
  //   );
  //   console.dir(err);
  // })
  dispatch({
    type: actionTypes.REGISTER_SUCCESS,
    payload: data,
  });
};

// -----------------------
// HEADMASTER
// -----------------------

export const editHeadmasterProfile = (id, data) => dispatch => {
  dispatch({ type: actionTypes.EDIT_HEADMASTER_START });
  axiosWithAuth()
    .put(`/headmaster/${id}`, data)
    .then(res => {
      dispatch({
        type: actionTypes.EDIT_HEADMASTER_SUCCESS,
        payload: res.data,
      });
    })
    .catch(err => {
      dispatch({ typch: actionTypes.EDIT_HEADMASTER_FAILURE, payload: err });
    });
};

export const fetchHeadmasterProfile = id => dispatch => {
  axiosWithAuth()
    .get(`/headmaster/${id}`)
    .then(res => {
      dispatch({
        type: actionTypes.FETCH_HEADMASTER_PROFILE,
        payload: res.data,
      });
    })
    .catch(err => console.dir(err));
};

export const fetchHeadmasterSchool = id => dispatch => {
  axiosWithAuth()
    .get(`/school/${id}`)
    .then(res => {
      dispatch({
        type: actionTypes.FETCH_HEADMASTER_SCHOOL,
        payload: res.data,
      });
    })
    .catch(err => console.dir(err));
};

export const fetchPendingTeachers = id => dispatch => {
  axiosWithAuth()
    .get(`/teacher?schoolId=${id}&account_status=Inactive`)
    .then(res => {
      dispatch({
        type: actionTypes.FETCH_PENDING_TEACHERS,
        payload: res.data,
      });
    })
    .catch(err => console.dir(err));
};

export const patchTeacherStatus = (id, status) => dispatch => {
  axiosWithAuth()
    .patch(`/teacher/${id}`, { account_status: `${status}` })
    .then(res => {
      dispatch({
        type: actionTypes.PATCH_TEACHER_STATUS,
        payload: res.data,
      });
    })
    .catch(err => console.dir(err));
};

export const patchSchoolTeacherId = (id, teacherId) => dispatch => {
  let teachersArray = [];

  axiosWithAuth()
    .get(`/school/${id}`)
    .then(res => {
      teachersArray = res.data.teacherId.filter(value => teacherId !== value);
      axiosWithAuth()
        .patch(`/school/${id}`, { teacherId: teachersArray })
        .then(res => {
          dispatch({
            type: actionTypes.PATCH_SCHOOL_TEACHERID,
            payload: res.data,
          });
        })
        .catch(err => console.dir(err));
    })
    .catch(err => console.dir(err));
};

// -----------------------
// VILLAGES
// -----------------------

export const fetchVillage = id => dispatch => {
  axiosWithAuth()
    .get(`/village/${id}`)
    .then(res => {
      dispatch({ type: actionTypes.FETCH_VILLAGE, payload: res.data });
    })
    .catch(err => console.dir(err));
};

export const editVillage = (id, data) => () => {
  axiosWithAuth()
    .put(`/village/${id}`, data)
    .then(() => {
      window.location.replace('/school-village/');
    })
    .catch(err => console.dir(err));
};

// -----------------------
// SCHOOLS
// -----------------------

export const fetchSchools = () => dispatch => {
  axiosWithAuth()
    .get(`/school`)
    .then(res => {
      dispatch({
        type: actionTypes.FETCH_HEADMASTER_SCHOOLS,
        payload: res.data,
      });
    })
    .catch(err => {
      console.dir(err);
    });
};

export const fetchSchool = id => dispatch => {
  axiosWithAuth()
    .get(`/school/${id}`)
    .then(res => {
      console.log(res.data);
    })
    .catch(err => console.dir(err));
};

export const editSchool = (id, data) => dispatch => {
  axiosWithAuth()
    .put(`/school/${id}`, data)
    .then(res => {
      window.location.replace('/school-village/');
    })
    .catch(err => console.dir(err));
};

// -----------------------
// MENTORS
// -----------------------

export const fetchMentors = () => async dispatch => {
  dispatch({ type: actionTypes.FETCH_MENTOR_START });
  const mentors = await axiosWithAuth().get('/mentor');
  dispatch({ type: actionTypes.FETCH_MENTOR_SUCCESS, payload: mentors.data });
};

export const editMatches = (mentor, menteeId, mentee) => async dispatch => {
  dispatch({ type: actionTypes.EDIT_MENTOR_START, payload: mentor });
  dispatch({ type: actionTypes.EDIT_MENTEE_START, payload: mentor });
  try {
    const mentorData = await axiosWithAuth().put(`/mentor/${mentor.id}`, {
      ...mentor,
      mentee: menteeId,
    });
    const menteeData = await axiosWithAuth().put(`/mentee/${mentee.id}`, {
      ...mentee,
      mentee_assignment: mentor.subjects,
      mentoring_time_slot: moment(mentor.time_slots).format(
        'MMMM Do YYYY, h:mm a'
      ),
    });
    console.log(
      'MENTORDATA: ',
      mentorData.data,
      '\nMENTEEDATA: ',
      menteeData.data
    );
    dispatch({
      type: actionTypes.EDIT_MENTOR_MATCHES,
      payload: mentorData.data,
    });
    dispatch({
      type: actionTypes.EDIT_MENTEE_MATCHES,
      payload: menteeData.data,
    });
  } catch (err) {
    console.log('ERROR DURING MATCHING PROCESS: ', err);
  }
};

export const cancelMatches = (mentor, mentee) => async dispatch => {
  dispatch({ type: actionTypes.EDIT_MENTOR_MATCHES, payload: mentor });
  try {
    const mentorData = await axiosWithAuth().put(`/mentor/${mentor.id}`, {
      ...mentor,
      mentee: -1,
    });
    const menteeData = await axiosWithAuth().put(`/mentee/${mentee.id}`, {
      ...mentee,
      mentee_assignment: [],
      mentoring_time_slot: null,
    });
    console.log(
      'MENTORDATA: ',
      mentorData.data,
      '\nMENTEEDATA: ',
      menteeData.data
    );
    dispatch({
      type: actionTypes.EDIT_MENTOR_MATCHES,
      payload: mentorData.data,
    });
    dispatch({
      type: actionTypes.EDIT_MENTEE_MATCHES,
      payload: menteeData.data,
    });
  } catch (err) {
    console.log('ERROR DURING CANCELING MATCHING: ', err);
  }
};

// -----------------------
// MENTEES
// -----------------------

export const fetchMentees = () => async dispatch => {
  dispatch({ type: actionTypes.FETCH_MENTEE_START });
  const mentees = await axiosWithAuth().get('/mentee');
  dispatch({ type: actionTypes.FETCH_MENTEE_SUCCESS, payload: mentees.data });
};

export const editMentee = (id, data) => dispatch => {
  dispatch({ type: actionTypes.EDIT_MENTEE_START, payload: data });
  axiosWithAuth()
    .put(`/mentee/${id}`, data)
    .then(res => {
      dispatch({ type: actionTypes.EDIT_MENTEE_SUCCESS, payload: res });
    })
    .catch(err => {
      dispatch({ type: actionTypes.EDIT_MENTEE_FAILURE, payload: err });
    });
};

export const addMentee = data => dispatch => {
  dispatch({ type: actionTypes.ADD_MENTEE_START, payload: data });
  axiosWithAuth()
    .post('/mentee', data)
    .then(res => {
      dispatch({ type: actionTypes.ADD_MENTEE_SUCCESS, payload: res.data });
    })
    .catch(err => {
      dispatch({ type: actionTypes.ADD_MENTEE_FAILURE, payload: err });
    });
};

// ----------------
// LIBRARIES
// ----------------

export const editLibrary = (id, data) => dispatch => {
  axiosWithAuth()
    .put(`/library/${id}`, data)
    .then(() => {
      window.location.replace('/admin/libraries');
    })
    .catch(err => console.dir(err));
};

export const addLibrary = (id, data) => dispatch => {
  axiosWithAuth()
    .post(`/library`, data)
    .then(() => {
      window.location.replace('/admin/libraries');
    })
    .catch(err => console.dir(err));
};

// ----------------
// TEACHER
// ----------------

export const editTeacherProfile = (id, data) => dispatch => {
  dispatch({ type: actionTypes.EDIT_TEACHER_START, payload: data });
  axiosWithAuth()
    .put(`/teacher/${id}`, data)
    .then(res => {
      dispatch({ type: actionTypes.EDIT_TEACHER_SUCCESS, payload: res.data });
    })
    .catch(err => {
      dispatch({ type: actionTypes.EDIT_TEACHER_FAILURE, payload: err });
    });
};
export const fetchTeacherProfile = id => dispatch => {
  axiosWithAuth()
    .get(`/teacher/${id}`)
    .then(res => {
      dispatch({
        type: actionTypes.FETCH_TEACHER_PROFILE,
        payload: res.data,
      });
    })
    .catch(err => console.dir(err));
};

export const fetchTeacherSchool = () => dispatch => {
  dispatch({ type: actionTypes.FETCH_TEACHER_SCHOOL });
};
