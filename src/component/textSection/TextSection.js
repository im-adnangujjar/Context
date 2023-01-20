import React,{useContext} from 'react'
import home from '../../assets/home.jpg'
import { TextStyle } from './style'
import { Button } from '../button/Button'
import { NavLink } from 'react-router-dom'
import { theme } from '../../constant/style/variable.config'
import { AppContext } from '../../context/Context'


function TextSection({name,image}) {
const firstName = React.useContext(AppContext)

    return (
        <TextStyle theme={theme}>
            <div className={'mainContainer'}>
                <div className={'container'}>
                    {/* <p className={'text'}>THIS IS ME</p> */}
                    <h1 className={'title'}>{name}</h1>
                    <p className={'intro'}> i am {firstName} . As a MERN stack developer, I specialize in using the MongoDB, ExpressJS, ReactJS, and NodeJS technologies to build web applications. I am responsible for designing and implementing the full stack of a web application, from the front-end (ReactJS) to the back-end (NodeJS, ExpressJS) and the database (MongoDB).</p>
                    <Button className={'btn'}>
                        <NavLink to="/Contact">
                            Click Here
                        </NavLink>
                    </Button>
                </div>
                <div className={'imageContainer'}>
                    <img className={'image'} src={image} alt="image not found" />
                </div>
            </div>
        </TextStyle>

    )
}

export default TextSection