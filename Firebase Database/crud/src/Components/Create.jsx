import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { collection, addDoc } from "firebase/firestore";
import * as Yup from 'yup';
import { db } from '../Services/Firebasestore';

const Create = () => {
  const initialValues = {
    name: '',
    email: '',
    age: '',
    Country: '', 
  };

  const validationSchema = Yup.object({
    name: Yup.string().required('Name is required'),
    email: Yup.string().email('Invalid email format').required('Email is required'),
    age: Yup.number().required('Age is required').min(1, 'Age must be greater than 0'),
    Country: Yup.string().required('Country is required'), // Fixed validation schema
  });

  const onSubmit = async (values, { resetForm }) => {
    try {
      const userdata = await addDoc(collection(db, "Users"), values);
      console.log(userdata);
      alert('User added successfully');
      resetForm();
    } catch (error) {
      console.error('Error adding user: ', error);
      alert('Error adding user');
    }
  };

  return (
    <div>
      <h3>Create Part</h3>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={onSubmit}
      >
        {({ isSubmitting }) => (
          <Form>
            <div>
              <label htmlFor="name">Name</label>
              <Field type="text" id="name" name="name" />
              <ErrorMessage name="name" component="div" className="error" />
            </div>
            <div>
              <label htmlFor="email">Email</label>
              <Field type="text" id="email" name="email" />
              <ErrorMessage name="email" component="div" className="error" />
            </div>
            <div>
              <label htmlFor="age">Age</label>
              <Field type="text" id="age" name="age" />
              <ErrorMessage name="age" component="div" className="error" />
            </div>
            <div>
              <label htmlFor="Country">Country</label> 
              <Field type="text" id="Country" name="Country" />
              <ErrorMessage name="Country" component="div" className="error" />
            </div>
            <button type="submit" disabled={isSubmitting}>Add User</button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default Create;
