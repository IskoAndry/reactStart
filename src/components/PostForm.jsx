import React, {useState} from 'react';

import MyButton from '../components/UI/button/MyButton';
import MyInput from  '../components/UI/input/MyInput';

const PostForm = ({create}) => {
// const[title, setTitle] = useState('');
// const[body, setBody] = useState('');
const[post, setPost] = useState({title:'', body:''})


const addNewPost =(e)=>{
    e.preventDefault()
    const newPost = {
        ...post, id:Date.now(),
    }
    create(newPost)
    setPost({title:'', body:''})    
  }        
    
    return (
    <form >
      <MyInput value={post.title} onChange={e=>setPost({...post, title: e.target.value})} type="text" placeholder="Name пост" />
      <MyInput value={post.body} onChange={e=>setPost({...post, body: e.target.value})}  type="text" placeholder="Write пост" />
      {/* <MyInput value={post.body} onChange={e=>setBody(e.target.value)}  type="text" placeholder="Write пост" /> */}
      {/* <MyInput ref={bodyInputRef} type="text" placeholder="Write пост" /> */}
      <MyButton onClick={addNewPost}  type="submit">Add Post</MyButton>
    </form>
    )
}
export default PostForm;