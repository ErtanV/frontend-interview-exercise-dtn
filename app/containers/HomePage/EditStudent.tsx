import React, { useEffect, useState } from 'react';
import { useFormik } from 'formik';
import StudentStyles from '../../styles/student-styles';
import { useHistory } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import { IStudent } from './types';

const EditStudent = () => {
  const [student, setStudent] = useState<IStudent>();

  const { id } = useParams<{ id: string }>();
  let history = useHistory();

  useEffect(() => {
    if (id !== 'new') {
      fetch(`/api/student/${id}`)
        .then(res => res.json())
        .then(setStudent);
    }
  }, [id]);

  const formik = useFormik({
    enableReinitialize: true,
    initialValues: {
      firstName: student?.firstName || '',
      lastName: student?.lastName || '',
      email: student?.email || '',
      age: student?.age || '',
      grade: student?.grade || '',
      id: student?._id || undefined,
    },

    onSubmit: values => {
      if (id === 'new') {
        fetch('/api/student', {
          method: 'post',
          body: JSON.stringify(values),
          headers: { 'Content-Type': 'application/json' },
        });
      }
      if (id !== 'new') {
        fetch(`/api/student/${id}`, {
          method: 'PATCH',
          body: JSON.stringify(values),
          headers: { 'Content-type': 'application/json; charset=UTF-8' },
        });
      }
      history.push('/');
    },
  });

  return (
    <div>
      <h2>{id === 'new' ? 'Create new Student' : 'Edit Student'}</h2>
      <form onSubmit={formik.handleSubmit} className="form">
        <label htmlFor="firstName" className="labelInput">
          First Name
        </label>
        <input
          id="firstName"
          name="firstName"
          type="text"
          onChange={formik.handleChange}
          value={formik.values.firstName}
          className="inputForm"
          placeholder="First Name"
        />
        <label htmlFor="lastName" className="labelInput">
          Last Name
        </label>
        <input
          placeholder="Last Name"
          className="inputForm"
          id="lastName"
          name="lastName"
          type="text"
          onChange={formik.handleChange}
          value={formik.values.lastName}
        />
        <label htmlFor="email" className="labelInput">
          Email Address
        </label>
        <input
          required
          placeholder="Email@"
          className="inputForm"
          id="email"
          name="email"
          type="email"
          onChange={formik.handleChange}
          value={formik.values.email}
        />

        <label htmlFor="age" className="labelInput">
          Age
        </label>
        <input
          placeholder="Your Age"
          className="inputForm"
          id="age"
          name="age"
          type="number"
          onChange={formik.handleChange}
          value={formik.values.age}
        />
        <label htmlFor="grade" className="labelInput">
          Grade
        </label>
        <input
          placeholder="Grade"
          className="inputForm"
          id="grade"
          name="grade"
          type="number"
          onChange={formik.handleChange}
          value={formik.values.grade}
        />

        <div className="button-group">
          <button type="submit">Submit</button>
          <button type="button" onClick={() => history.push('/')}>
            Cancel
          </button>
        </div>
      </form>
      <StudentStyles />
    </div>
  );
};

export default EditStudent;
