import { addDoc, collection } from 'firebase/firestore'
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { auth, db } from '../firebase-config'

const CreatePost = ({ isAuth }) => {
    const [text, setText] = useState("")
    const [postText, setPostText] = useState("")
    const postCollectionRef = collection(db, "post")
    let navigate = useNavigate()
    const createPost = async () => {
        await addDoc(postCollectionRef, { text, postText, author: { name: auth.currentUser.displayName, id: auth.currentUser.uid } });
        navigate("/")
    }
    useEffect(() => {
        if (!isAuth) {
            navigate("/login")
        }
    }, [])
    return (
        <div className='createPostPage'>
            <div className="cpContainer">
                <h1>Create a Post</h1>
                <div className="inputGp">
                    <label >Title:</label>
                    <input placeholder='title...' onChange={(event) => { setText(event.target.value) }} />
                </div>
                <div className="inputGp">
                    <label >Post:</label>
                    <textarea placeholder="post..." onChange={(event) => { setPostText(event.target.value) }} ></textarea>
                </div>
                <button onClick={createPost}>Submit</button>
            </div>
        </div>
    )
}

export default CreatePost
