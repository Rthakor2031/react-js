import { collection, deleteDoc, doc, getDocs } from 'firebase/firestore';
import React, { useEffect, useState } from 'react';
import { db } from '../Services/Firebasestore';
import { Link } from 'react-router-dom';

const Getdatafromfirestore = () => {
    const [data, setData] = useState({});

    const fetchdataFromFirestore = async () => {
        try {
            const Userdata = await getDocs(collection(db, 'Users'));
            const users = Userdata.docs.map(doc => ({ id: doc.id, ...doc.data() }));
            setData(users);

            users.forEach(element => {
                localStorage.setItem(element.id, JSON.stringify(element));
                console.log(`Saved to localStorage: ${element.id}`);
            });
        } catch (err) {
            console.log(err);
        }
    };

    const handledelete = async (id) => {
        try {
          await deleteDoc(doc(db, 'Users', id));
          setData(prevData => prevData.filter(user => user.id !== id));
          console.log(`Deleted document with ID: ${id}`);
        } catch (err) {
          console.log(err);
        }
      };

    useEffect(() => {
        fetchdataFromFirestore();
    }, []);
console.log(data)
    return (
        <div className="container">
            <h3 className="title">Getdatafromfirestore List</h3>
            <table>
                <thead>
                    <tr>
                        <th>Email</th>
                        <th>Name</th>
                        <th>Age</th>
                        <th>Country</th>
                        <th>Edit</th>
                        <th>Delete</th>
                    </tr>
                </thead>
                <tbody>
                    {data.length > 0 && data.map((user) => (
                        <tr key={user.id}>
                            <td>{user.email}</td>
                            <td>{user.name}</td>
                            <td>{user.age}</td>
                            <td>{user.Country}</td>
                            <td>
                            <button><Link to={`/update/${user.id}`}>Edit</Link></button>
                            </td>
                            <td><button onClick={()=>handledelete(user.id)}>Delete</button></td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default Getdatafromfirestore;
