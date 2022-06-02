import React, { useState, useEffect } from 'react';
import StudentTable from './StudentsTable';
import HomeStyles from '../../styles/home-styles';
import { useHistory } from 'react-router-dom';
import { IStudent } from './types';
// import { v4 } from 'uuid';

const Home: React.FC = () => {
  let history = useHistory();
  const [students, setStudents] = useState<Array<IStudent>>([
    // {
    //   id: v4(),
    //   firstName: 'Ertan',
    //   lastName: 'Veliu',
    //   email: 'ertan@gmail.com',
    //   age: 10,
    //   grade: 1,
    // },
    // {
    //   id: v4(),
    //   firstName: 'Anna',
    //   lastName: 'Smith',
    //   email: 'anna@gmail.com',
    //   age: 11,
    //   grade: 1,
    // },
    // {
    //   id: v4(),
    //   firstName: 'Sam',
    //   lastName: 'Gates',
    //   email: 'sam@gmail.com',
    //   age: 12,
    //   grade: 2,
    // },
    // {
    //   id: v4(),
    //   firstName: 'Bill',
    //   lastName: 'Rich',
    //   email: 'bill@gmail.com',
    //   age: 17,
    //   grade: 5,
    // },
    // {
    //   id: v4(),
    //   firstName: 'Vlad',
    //   lastName: 'Crick',
    //   email: 'vlad@gmail.com',
    //   age: 13,
    //   grade: 3,
    // },
    // {
    //   id: v4(),
    //   firstName: 'Max',
    //   lastName: 'Box',
    //   email: 'max@gmail.com',
    //   age: 14,
    //   grade: 3,
    // },
    // {
    //   id: v4(),
    //   firstName: 'Don',
    //   lastName: 'Zach',
    //   email: 'don@gmail.com',
    //   age: 12,
    //   grade: 2,
    // },
  ]);

  useEffect(() => {
    fetch('/api/student')
      .then(res => res.json())
      .then(setStudents);
  }, []);

  return (
    <div>
      <table>
        <thead>
          <tr key="theadTr">
            <th>First Name</th>
            <th>Last Name</th>
            <th>Email</th>
            <th>Age</th>
            <th>Grade</th>
            <th>Action</th>
            <th></th>
          </tr>
        </thead>
        <tbody className="styled-table">
          {students.map(val => {
            return <StudentTable value={val} key={val._id} />;
          })}
        </tbody>
      </table>
      <button
        className="newStudent-btn"
        onClick={() => history.push('/edit-student/new')}
      >
        Add New Student
      </button>
      <HomeStyles />
    </div>
  );
};

export default Home;
