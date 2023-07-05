import React, { useState } from 'react';
import styles from './StudentForm.module.css';

const StudentForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    dob: ''
  });
  const [data, setData] = useState([]);
  const [table, setTable] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    const newData = {
      name: formData.name,
      phone: formData.phone,
      email: formData.email,
      dob: formData.dob
    };

    setData([...data, newData]);
    setFormData({ name: '', phone: '', email: '', dob: '' });
    setTable(true);
  };

  const handleMoreValue = () => {
    setTable(false);
  };

  return (
    <>
      {table ? (
        <div className={styles.table}>
          <table>
            <thead>
              <tr>
                <th>Name</th>
                <th>Phone No</th>
                <th>Email</th>
                <th>Date of Birth</th>
              </tr>
            </thead>
            <tbody>
              {data.map((item, index) => (
                <tr key={index}>
                  <td>{item.name}</td>
                  <td>{item.phone}</td>
                  <td>{item.email}</td>
                  <td>{item.dob}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <button className={styles.btn} onClick={handleMoreValue}>
            Add more Values
          </button>
        </div>
      ) : (
        <div className={styles.studentbox}>
          <h2>Student Details Form</h2>
          <div className={styles.inputs}>
            <div className={styles.row}>
              <label htmlFor="name">Enter Name:</label>
              <input
                type="text"
                id="name"
                name="name"
                placeholder="Enter name"
                value={formData.name}
                onChange={handleChange}
              />
            </div>
            <div className={styles.row}>
              <label htmlFor="phoneno">Enter Phone No:</label>
              <input
                type="number"
                id="phoneno"
                name="phone"
                placeholder="Enter phone no"
                value={formData.phone}
                onChange={handleChange}
              />
            </div>
            <div className={styles.row}>
              <label htmlFor="email">Enter Email:</label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Enter email"
                value={formData.email}
                onChange={handleChange}
              />
            </div>
            <div className={styles.row}>
              <label htmlFor="dob">Enter Date of Birth:</label>
              <input
                type="date"
                id="dob"
                name="dob"
                value={formData.dob}
                onChange={handleChange}
              />
            </div>
          </div>
          <div className={styles.submit}>
            <button className={styles.btn} onClick={handleSubmit}>
              Submit
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default StudentForm;
