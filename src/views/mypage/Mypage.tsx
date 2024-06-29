import React from 'react'
import '../../styles/Mypage.css'
import userImg from '../../assets/images/userImg.png'
import NavigationBar from '../../components/NavigationBar'
import Footer from '../../components/Footer'

export default function Mypage() {
  return (
    <>
      <NavigationBar />
      <div className='mypage_container'>
        <div className='mypage_profile'>
          <div className='profile_img'>
            <img src={userImg} alt='유저' style={{
              objectFit: 'cover',
              width: '292px',
              height: '292px'
            }} />
          </div>
          <div className='user_info'>
            <h3>JJJI0</h3>
            <h4>starat6742@gmail.com</h4>
            <div className='user_info_box'>
              <div>
                <h4>작성한 글</h4>
                <p>14</p>
              </div>
              <div style={{borderLeft: 'none'}}>
                <h4>구독자 수</h4>
                <p>65</p>
              </div>
            </div>
          </div>
          <div className='profile_button'>
            <div style={{backgroundColor: '#C0A286'}}>회원정보 수정</div>
            <div style={{backgroundColor: '#64503E'}}>회원 탈퇴</div>
          </div>
        </div>
        <div className='mypage_lists'>
          <div className='list_box'>
            <h3>작성한 글 목록</h3>
            <div className='user_board_list'>
              <div className='list_detail'>
                <h3>첫번째 게시물입니다. </h3>
                <h4>2024-06-14</h4>
              </div>
              <div className='list_detail'>
                <h3>두번째 게시물입니다. </h3>
                <h4>2024-06-17</h4>
              </div>
              <div className='list_detail'>
                <h3>세번째 게시물입니다. </h3>
                <h4>2024-06-24</h4>
              </div>
            </div>
          </div>
          <div className='list_box'>
            <h3>구독</h3>
            <div className='user_subscribe'>
              <div className='subscribe_detail'>
                <img src={userImg} alt='유저' />
                <h3>user_nickname</h3>
              </div>
              <div className='subscribe_detail'>
                <img src={userImg} alt='유저' />
                <h3>user_nickname</h3>
              </div>
              <div className='subscribe_detail'>
                <img src={userImg} alt='유저' />
                <h3>user_nickname</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}
