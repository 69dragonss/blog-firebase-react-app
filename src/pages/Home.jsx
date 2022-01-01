import { collection, deleteDoc, doc, getDocs } from 'firebase/firestore'
import React, { useEffect, useState } from 'react'
import { auth, db } from '../firebase-config'

const Home = ({ isAuth }) => {
    const [postList, setPostList] = useState([])
    const postCollectionRef = collection(db, "post")
    useEffect(() => {
        const getPosts = async () => {
            const data = await getDocs(postCollectionRef)
            setPostList(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
        }
        getPosts()
    })
    const deletePost = async (id) => {
        const postDoc = doc(db, "post", id)
        await deleteDoc(postDoc)
    }
    return (
        <div className='homePage'>
            {postList.map((post) => (
                <div className="post" key={post.id}>
                    <div className="postHeader">
                        <div className="title">
                            {post.text}
                        </div>
                        <div className='deletePost'>
                            {
                                isAuth && post.author.id === auth.currentUser.uid &&
                                <button onClick={() => {
                                    deletePost(post.id)
                                }}> &#128465; </button>
                            }
                        </div>
                    </div>
                    <div style={{ border: "1px solid black", margin: ".7rem 0" }}></div>
                    <div className="postTextContainer">
                        {post.postText}
                        <h3>@{post.author.name}</h3>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default Home
