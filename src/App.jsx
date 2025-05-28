import React, {useState} from 'react';
import './stylse/App.css';

import PostList from './components/PostList';
import PostForm from './components/PostForm';
import MySelect from './components/UI/select/MySelect'; 
import MyInput from './components/UI/input/MyInput';

import Header from './components/Header/Header';
import TechSection from './components/Text/TechSection';
import Main from './components/Main/Main';

import RenderSection from './components/Text/RenderSection';
import Introsection from './components/Text/Introsection';
import ContactSection from './components/Text/ContactSection';
import FitbackSection from './components/Text/FitbackSection';
import EffectSection from './components/Text/EffectSection';

const App=()=> {
  const[visible, setVisible ] = useState(true)
const[rendSec, setRendSec ] = useState('effect')

//setTimeout(()=>{setVisible(false)},4000)  //delet <Heder />

  const[posts, setPosts] = useState([
          {id:1, title:'Javascript', text:'JS фундаментальный курс от А до Я'},
          {id:2, title:'PHP', text:'Управляемые и неуправляемые компоненты'},
          {id:3, title:'Java', text:'Форма создания поста'},
        ])

const[selectSort, setSelectSort] = useState('')
const[searchQuery, setSearchQuery] = useState('')

const createPost=(newPost)=>{
  setPosts([...posts, newPost])
}

const removePost=(post)=>{
  setPosts(posts.filter(p=>p.id!==post.id))
}

const sortPost=(sort)=>{
  setSelectSort(sort)
  setPosts([...posts].sort((a,b)=>a[sort].localeCompare(b[sort])))
  }


  return (
    <>
      {visible && <Header/>}           
      
       
        <RenderSection active={rendSec} onChange={(rendSec)=> setRendSec(rendSec)}/>
        {rendSec === 'main' && (<Introsection /> )}
        {rendSec === 'feetback' && (< FitbackSection />)}
        {rendSec === 'contac' && (<ContactSection />)}

        {rendSec === 'effect' && (<EffectSection/>)}
     


    < TechSection />

    <Main/>
      

      <PostForm create={createPost}/>

      <MyInput value={searchQuery} onChange={e=>setSearchQuery(e.target.value)}
      placeholder="search"/>
      <MySelect value={selectSort}
      onChange={sortPost}
      defaultValue='sort by' 
      options={[{value: 'title', name:'sort by name'}, {value: 'body', name:'sort by description'}]}/>
      {posts.length !==0 ? <PostList remove={removePost} posts={posts} title="List Posts"/>
      : <div style={{textAlign: 'center', marginTop: "100px" ,fontSize: '30px'}}>"Posts not found"</div> 
      }   
                             
    </>
  );
}
export default App;
