
import React from 'react';
import styles from './Home.module.css'
import TextSection from '../../component/textSection/TextSection';

function Home() {

  return (
    <div className={styles.container}>
        {/* <p>This text will grow and shrink</p>
      
      <div className={styles.box}>
        red
      </div> */}
      <TextSection/>
    </div>

  )
}
export default Home