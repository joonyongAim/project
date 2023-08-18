import './Main.css';
import Carousel from 'react-bootstrap/Carousel';
import board1 from '../img/board1.jpg'
import board2 from '../img/board2.jpg'
import board3 from '../img/board3.jpg'
import board4 from '../img/board4.jpg'
import board5 from '../img/board5.jpg'
import { DAYLIST } from './Daylist';
import { useNavigate } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import { useState } from 'react';


const Main = () => {
  const navigate = useNavigate();
  const [click1, setClick1] = useState(false);
  const [click2, setClick2] = useState(false);
  const [click3, setClick3] = useState(false);
  const [click4, setClick4] = useState(false);
  const [click5, setClick5] = useState(false);
  const [click6, setClick6] = useState(false);
  const [click7, setClick7] = useState(false);

  
  
  return (
    <div className='ma'>
      <Carousel>
        <Carousel.Item>
          <div className='b1'>
            <img src={board1} style={{ width: '100%', height: '600px' }} />
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <div className='b2'>
            <img src={board2} style={{ width: '100%', height: '600px' }} />
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <div className='b3'>
            <img src={board3} style={{ width: '100%', height: '600px' }} />
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <div className='b4'>
            <img src={board4} style={{ width: '100%', height: '600px' }} />
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <div className='b5'>
            <img src={board5} style={{ width: '100%', height: '600px' }} />
          </div>
        </Carousel.Item>
      </Carousel>
      <div className='work'>
        <h4>요일별 작품</h4>
        <div className='bt'>
          <Button style={{width:'200px'}} onClick={() => {setClick1(!click1)}}>월요일</Button>
          <Button style={{width:'200px'}} onClick={() => {setClick2(!click2)}}>화요일</Button>
          <Button style={{width:'200px'}} onClick={() => {setClick3(!click3)}}>수요일</Button>
          <Button style={{width:'200px'}} onClick={() => {setClick4(!click4)}}>목요일</Button>
          <Button style={{width:'200px'}} onClick={() => {setClick5(!click5)}}>금요일</Button>
          <Button style={{width:'200px'}} onClick={() => {setClick6(!click6)}}>토요일</Button>
          <Button style={{width:'200px'}} onClick={() => {setClick7(!click7)}}>일요일</Button>
        </div>
      </div>
      <div className='D'>
        <div className='mo'>
        {
          click1 === true ?
          DAYLIST.map((item) => {
            return (
              item.day === '월요일' &&
              <div>
                <img onClick={() => { navigate(`/detail/${item.id}`) }} src={process.env.PUBLIC_URL + `/img/${item.img}`} style={{ width: '200px', height: '150px' }} />
                <p>{item.title}</p>
              </div>
            )
          }) : ""
        }
        </div>
        <div className='t1'>
        {
          click2 === true ?
          DAYLIST.map((item) => {
            return (
              item.day === '화요일' &&
              <div>
                <img onClick={() => { navigate(`/detail/${item.id}`) }} src={process.env.PUBLIC_URL + `/img/${item.img}`} style={{ width: '200px', height: '150px' }} />
                <p>{item.title}</p>
              </div>
            )
          }) : ""
        }
        </div>
        <div className='w'>
        {
          click3 === true ?
          DAYLIST.map((item) => {
            return (
              item.day === '수요일' &&
              <div>
                <img onClick={() => { navigate(`/detail/${item.id}`) }} src={process.env.PUBLIC_URL + `/img/${item.img}`} style={{ width: '200px', height: '150px' }} />
                <p>{item.title}</p>
              </div>
            )
          }) : ""
        }
        </div>
        <div className='t2'>
        {
          click4 === true ?
          DAYLIST.map((item) => {
            return (
              item.day === '목요일' &&
              <div>
                <img onClick={() => { navigate(`/detail/${item.id}`) }} src={process.env.PUBLIC_URL + `/img/${item.img}`} style={{ width: '200px', height: '150px' }} />
                <p>{item.title}</p>
              </div>
            )
          }) : ""
        }
        </div>
        <div className='f'>
        {
          click5 === true ?
          DAYLIST.map((item) => {
            return (
              item.day === '금요일' &&
              <div>
                <img onClick={() => { navigate(`/detail/${item.id}`) }} src={process.env.PUBLIC_URL + `/img/${item.img}`} style={{ width: '200px', height: '150px' }} />
                <p>{item.title}</p>
              </div>
            )
          }) : ""
        }
        </div>
        <div className='s1'>
        {
          click6 === true ?
          DAYLIST.map((item) => {
            return (
              item.day === '토요일' &&
              <div>
                <img onClick={() => { navigate(`/detail/${item.id}`) }} src={process.env.PUBLIC_URL + `/img/${item.img}`} style={{ width: '200px', height: '150px' }} />
                <p>{item.title}</p>
              </div>
            )
          }) : ""
        }
        </div>
        <div className='s2'>
        {
          click7 === true ?
          DAYLIST.map((item) => {
            return (
              item.day === '일요일' &&
              <div>
                <img onClick={() => { navigate(`/detail/${item.id}`) }} src={process.env.PUBLIC_URL + `/img/${item.img}`} style={{ width: '200px', height: '150px' }} />
                <p>{item.title}</p>
              </div>
            )
          }) : ""
        }
        </div>
      </div>
      <div className='popwork'>
        <h4>인기 작품</h4>
        <div className='popular'>
          {
            DAYLIST.map((item) => {
              return (
                item.popular === '인기' &&
                <div>
                  <img onClick={() => {navigate(`/detail/${item.id}`)}} src={process.env.PUBLIC_URL+`/img/${item.img}`} style={{width:'200px', height:'250px'}} />
                  <p>{item.title}</p>
                </div>
              );
            })
          }
        </div>
      </div>
      <div className='verwork'>
        <h4>극장판</h4>
        <div className='version'>
          {
            DAYLIST.map((item) => {
              return (
                item.version === '극장판' &&
                <div>
                  <img onClick={() => {navigate(`/detail/${item.id}`)}} src={process.env.PUBLIC_URL+`/img/${item.img}`} style={{width:'200px', height:'250px'}} />
                  <p>{item.title}</p>
                </div>
              );
            })
          }
        </div>
      </div>
    </div>
  );
}

export default Main;