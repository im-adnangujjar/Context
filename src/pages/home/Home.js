
import React from 'react';
import styles from './Home.module.css'
import TextSection from '../../component/textSection/TextSection';
import home from '../../assets/home.jpg'

function Home() {


  const data ={
    name:'TECHNICAL ADNAN',
    image:"https://source.unsplash.com/500x300/?programming,software development",
  }

  return (
    <div className={styles.container}>
        {/* <p>This text will grow and shrink</p>
      
      <div className={styles.box}>
        red
      </div> */}
      <TextSection  {...data}/>
    </div>

  )
}
export default Home