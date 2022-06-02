import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { ConfirmModal } from './Modal/ConfirmModal';
import { IStudent } from './types';

interface ValueProps {
  value: IStudent;
}

const StudentTable: React.FC<ValueProps> = ({ value }) => {
  const [show, setShow] = useState(false);

  const { firstName, lastName, email, grade, _id, age } = value;
  let history = useHistory();
  // const removeUser = val => {
  //   console.log(val);
  // };

  const handleClose = () => setShow(false);
  const deleteUser = id => {
    fetch(`/api/student/${id}`, { method: 'delete' });
    handleClose();
    window.location.reload();
  };

  return (
    <>
      <tr>
        <td>{firstName}</td>
        <td>{lastName}</td>
        <td>{email}</td>
        <td>{age}</td>
        <td>{grade}</td>

        <>
          <td>
            <button
              className="editBtn"
              onClick={() => {
                history.push(`/edit-student/${_id}`);
              }}
            >
              Edit
            </button>
          </td>
          <td>
            <button className="deleteBtn" onClick={() => setShow(true)}>
              Delete
            </button>
          </td>
        </>
      </tr>
      <ConfirmModal
        show={show}
        onHide={handleClose}
        onConfirm={() => deleteUser(_id)}
        confirmBtnText="Delete"
        title="Delete user"
      >
        {`Are you sure you want to delete this user: ${firstName} ${lastName}`}
      </ConfirmModal>
    </>
  );
};

export default StudentTable;
