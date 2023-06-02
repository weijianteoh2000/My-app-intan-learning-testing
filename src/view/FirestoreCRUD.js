import { useState, useEffect } from 'react';
import '../App.css';
import { db } from '../firebase-config'
import { collection, getDocs, addDoc, updateDoc, deleteDoc, doc } from 'firebase/firestore'


function DataCRUD() {
   
    const [newName, setNewName] = useState("");
    const [newAge, setNewAge] = useState(0);
    const [users, setUsers] = useState([]);


    const [reload, setReload] = useState(0);
    const userCollectionRef = collection(db, "users") 


    //function to create user
    const createUser = async () => {
        await addDoc(userCollectionRef, {
            name: newName,
            age: Number(newAge),
        });
        setReload(reload + 1);
    };


    //function used to update the data
    const updateUser = async (id, age) => {
        const userDoc = doc(db, "users", id);
        const newFields = { age: age + 1 };
        await updateDoc(userDoc, newFields);
        setReload(reload + 1);
    }


    //function to delete user
    const deleteUser = async (id) => {
        const userDoc = doc(db, "users", id);
        await deleteDoc(userDoc);
        setReload(reload + 1);
    } //delete 2 end


    useEffect(() => {
        const getUsers = async () => {
            const data = await getDocs(userCollectionRef);
            console.log(data);
            setUsers(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
        }
        getUsers()
    }, [reload])


    return (
        <div className="DataCRUD">
            <input
                placeholder='Name...'
                onChange={(event) => {
                    setNewName(event.target.value)
                }}
            />
            <input
                type="number"
                placeholder='Age...'
                onChange={(event) => {
                    setNewAge(event.target.value)
                }}
            />


            <button onClick={createUser}>Create User</button>


            {users.map((user) => {
                return (
                    <div>
                        <h1>Name: {user.name}</h1>
                        <h1>Age: {user.age}</h1>
                        <button
                            onClick={() => {
                                updateUser(user.id, user.age)
                            }}>
                            Increase Age
                        </button>
                        <button
                            onClick={() => {
                                deleteUser(user.id);
                            }}>
                            Delete User
                        </button>
                    </div>
                );
            })
            }
        </div>
    );
}


export default DataCRUD;
