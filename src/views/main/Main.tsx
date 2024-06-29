import React, { ImgHTMLAttributes, useState } from 'react'
import '../../styles/Main.css'
import img1 from '../../assets/images/BackgroundImg1.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleLeft, faAngleRight, faArrowRight } from '@fortawesome/free-solid-svg-icons'
import Cat from '../../assets/images/cat.jpg'
import Board from '../../assets/images/boardImg.png'
import Croquis from '../../assets/images/croquisImg.png'
import userImg from '../../assets/images/userImg.png'
import Notice from '../../assets/images/boardImg2.png'
import NavigationBar from '../../components/NavigationBar'
import Footer from '../../components/Footer'

interface User {
  id: number;
  username: string;
  userImg: any;
}

interface Board {
  id: number;
  title: string;
  createDate: string;
}

export default function Main() {

  const USERLIST: User[] = [
    { id: 1, username: '해피캣', userImg: userImg},
    { id: 2, username: 'Rose', userImg: userImg},
    { id: 3, username: '쿼카캌', userImg: userImg},
    { id: 4, username: 'rabbit_0', userImg: Cat},
    { id: 5, username: '치즈케이크', userImg: userImg}
  ]
    
  const BOARD: Board[] = [
    { id: 1, title: '1번째 글입니다. ', createDate: '2024-06-14'},
    { id: 2, title: '2번째 글입니다. ', createDate: '2024-06-17'},
    { id: 3, title: '3번째 글입니다. ', createDate: '2024-06-24'},
  ]

  const [userList, setUserList] = useState<User[]>(USERLIST);
  const [board, setBoard] = useState<Board[]>(BOARD);
  const [notice, setNotice] = useState<Board[]>(BOARD);

  return (
    <>
      <NavigationBar />
      <div className='Main_container'>
        <div className='Main_img'>
          <img src={img1} alt='배경그림1' />
        </div>
        <div className='Main_Linked'>
          <div style={{backgroundColor: '#DABA9B'}}>
            <h3 className='main_semiTitle'>크로키 연습</h3>
            <img src={Croquis} alt='크로키' className='main_icon'/>
            <p className='clickLink'>시작하기<FontAwesomeIcon icon={faArrowRight} /></p>
          </div>
          <div style={{backgroundColor: '#B4916F'}}>
            <h3 className='main_semiTitle'>그림 자랑 게시판</h3>
            <img src={Board} alt='게시판' className='main_icon'/>
            <p className='clickLink'>이동하기<FontAwesomeIcon icon={faArrowRight} /></p>
          </div>
          <div style={{backgroundColor: '#8C6E52'}}>
            <h3 className='main_semiTitle'>크로키 게시판</h3>
            <img src={Notice} alt='공지사항' className='main_icon' />
            <p className='clickLink'>구경하기<FontAwesomeIcon icon={faArrowRight} /></p>
          </div>
        </div>
        <div style={{background: 'rgb(249, 245, 241)'}}>
          <div className='Main_Userlist'>
            <h3 style={{fontSize: '24px', fontWeight: '600'}}>그림쟁이 Top 10</h3>
            <div className='Userlist_detail'>
              <FontAwesomeIcon icon={faAngleLeft} style={{ height: '60px'}}/>
                {
                  userList.map(user => (
                    <div>
                      <img src={user.userImg} alt='유저이미지' style={{width: '155px', height: '130px'}}/>
                      <h3 style={{textAlign: 'center', fontSize: '14px'}}>{user.username}</h3>
                    </div>
                  ))
                }
              <FontAwesomeIcon icon={faAngleRight} style={{ height: '60px'}} />
            </div>
          </div>
        </div>
        <div className='Main_board'>
          <div>
            <h3 style={{fontSize: '24px', fontWeight: '600'}}>인기 게시글</h3>
            <div className='Board_detail'>
              {
                board.map(i => (
                  <div className='board_list'>
                    <p>{i.title}</p>
                    <p>{i.createDate}</p>
                  </div>
                ))
              }
            </div>
          </div>
          <div>
            <h3 style={{fontSize: '24px', fontWeight: '600'}}>공지사항</h3>
            <div className='Board_detail'>
              {
                notice.map(i => (
                  <div className='board_list'>
                    <p>{i.title}</p>
                    <p>{i.createDate}</p>
                  </div>
                ))
              }
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}
