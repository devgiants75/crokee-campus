import React from 'react'
import Logo from '../assets/images/Logo.png'
import '../styles/Navigation.css'
import { faBars } from '@fortawesome/free-solid-svg-icons' 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Link } from 'react-router-dom'

export default function NavigationBar() {
  return (
    <div style={{
      backgroundColor: '#64503E'
    }}>
      <div className='Nav_container'>
        <div className='Nav_icon'>
          <FontAwesomeIcon icon={faBars} style={{color: '#ffffff', height: '40px'
          }} />
          <img src={Logo} alt='로고' />
        </div>
        <div className='Nav_text'>
          <Link to='/signin' style={{
            textDecoration: 'none',
            color: 'white'
          }}>
            <h3>로그인</h3>
          </Link>
          <Link to='/signup' style={{
            textDecoration: 'none',
            color: 'white'
          }}>
            <h3>회원가입</h3>
          </Link>
        </div>
      </div>
    </div>
  )
}
