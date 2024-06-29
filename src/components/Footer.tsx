import React from 'react'
import Logo from '../assets/images/Logo.png'

export default function Footer() {
  return (
    <div style={{
      backgroundColor: '#C0A286',
      height: '94px'
    }}>
      <div style={{
        width: '1440px',
        height: '94px',
        margin: 'auto',
        display: 'flex',
        justifyContent: 'space-between',
        padding: '0px 20px',
        alignItems: 'center'
      }}>
        <div>
          <img src={Logo} alt='로고' style={{
            height: '30px'
          }}/>
        </div>
        <div style={{
          color: 'white',
          fontSize: '16px'
        }}>
          신지영 | starat6742@gmail.com
        </div>
      </div>
    </div>
  )
}
