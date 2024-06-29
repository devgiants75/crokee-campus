import React from 'react'
import '../../styles/Signin.css'
import Drawing from '../../assets/images/drawingImg.png'
import { Link } from 'react-router-dom'
import Logo from '../../assets/images/Logo.png'

export default function SignIn() {
  return (
    <div>
      <div className='Signin_container'>
        <div style={{position: 'relative'}}>
          <img src={Logo} alt='로고' style={{
            position: 'absolute',
            height: '40px'
          }}/>
          <img src={Drawing} alt='그림'/>
        </div>
        <div className='Signin_rightBox'>
          <div>
            <h1 style={{fontSize: '37px'}}>Welcome to Croquis Campus!</h1>
            <h4 style={{fontSize: '18px', fontWeight: '400', marginTop: '5px', fontStyle: 'italic', color: '#4f4f4f'}}>Dreams are today's answers to tomorrow's questions.</h4>
          </div>
          <div className='Signin_input'>
            <p>Email</p>
            <input />
            <p>Password</p>
            <input />
          </div>
          <div>
            <div style={{
              backgroundColor: '#C9A685',
              width: '226px',
              height: '60px',
              margin: 'auto',
              borderRadius: '30px',
              boxShadow: '0 3px 3px rgba(0,0,0,0.24), 0 3px 3px rgba(0,0,0,0.24)',
              textAlign: 'center',
              fontSize: '30px',
              fontWeight: '600',
              lineHeight: '60px'
              }}>Sign in
            </div>
            <div style={{display: 'flex', justifyContent: 'center', marginTop: '70px'}}>
              <p style={{color: '#313131', marginRight: '5px', fontSize: '18px'}}>Don't have an account?</p>
              <Link to='/signup' style={{textDecoration: 'none', color: 'black', fontSize: '18px', fontWeight: '600'}}>
                <p>Sign up</p>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
