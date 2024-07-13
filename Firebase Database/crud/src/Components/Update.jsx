import { doc, getDoc, updateDoc } from 'firebase/firestore';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { db } from '../Services/Firebasestore';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const Update = () => {
  const [initialValues, setInitialValues] = useState({
    name: '',
    email: '',
    age: '',
    Country: '',
  });

  const { id } = useParams();
  console.log(id);

  const fetchdata = async (id) => {
    try {
      const docRef = doc(db, "Users", id);
      const singledata = await getDoc(docRef);
      if (singledata.exists()) {
        setInitialValues(singledata.data());
      } else {
        console.log("No such document!");
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchdata(id);
  }, [id]);

  const validationSchema = Yup.object({
    name: Yup.string().required('Name is required'),
    email: Yup.string().email('Invalid email format').required('Email is required'),
    age: Yup.number().required('Age is required').min(1, 'Age must be greater than 0'),
    Country: Yup.string().required('Country is required'), 
  });

  const handleSubmit = async (values, { setSubmitting }) => {
    try {
      const docRef = doc(db, "Users", id);
      await updateDoc(docRef, values);
      alert("Updated successfully");
    } catch (error) {
      console.error("Error updating document: ", error);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div>
      <h1>Edit User Data</h1>
      <Formik
        enableReinitialize
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
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
            <button>Update User</button>
          </Form>
        )} 
      </Formik>
    </div>
  );
};

export default Update;
