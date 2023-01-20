import React from 'react'
import TextSection from '../../component/textSection/TextSection'
import about from '../../assets/about.png'

function About() {
  const data = {
    name:'ADNAN TECH',
    image:'https://source.unsplash.com/500x300/?coding,javascript',
}


  return (
    <div>
      <TextSection  {...data}/>
    </div>
  )
}

export default About