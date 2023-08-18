import './Day.css';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { DAYLIST } from './Daylist';
import { useNavigate } from 'react-router-dom';

const Day = () => {
  const navigate = useNavigate();


  return (
    <div className='Dy'>
        <Row className='total'>
          <Col className='month'>
            <h4>월요일</h4>
            <div className='mo'>
              {
                DAYLIST.map((item) => {
                  return (
                    item.day === '월요일' &&
                    <div>
                      <img onClick={() => {navigate(`/detail/${item.id}`)}} src={process.env.PUBLIC_URL+`/img/${item.img}`} style={{width:'200px', height:'250px'}} />
                      <p>{item.title}</p>
                    </div>
                  );
                })
              }
            </div>
          </Col>
          <Col className='tues'>
            <h4>화요일</h4>
            <div className='tu'>
              {
                DAYLIST.map((item) => {
                  return (
                    item.day === '화요일' &&
                    <div>
                      <img onClick={() => {navigate(`/detail/${item.id}`)}} src={process.env.PUBLIC_URL+`/img/${item.img}`} style={{width:'200px', height:'250px'}} />
                      <p>{item.title}</p>
                    </div>
                  );
                })
              }
            </div>
          </Col>
          <Col className='wednes'>
            <h4>수요일</h4>
            <div className='wd'>
              {
                DAYLIST.map((item) => {
                  return (
                    item.day === '수요일' &&
                    <div>
                      <img onClick={() => {navigate(`/detail/${item.id}`)}} src={process.env.PUBLIC_URL+`/img/${item.img}`} style={{width:'200px', height:'250px'}} />
                      <p>{item.title}</p>
                    </div>
                  );
                })
              }
            </div>
          </Col>
          <Col className='thurs'>
            <h4>목요일</h4>
            <div className='th'>
              {
                DAYLIST.map((item) => {
                  return (
                    item.day === '목요일' &&
                    <div>
                      <img onClick={() => {navigate(`/detail/${item.id}`)}} src={process.env.PUBLIC_URL+`/img/${item.img}`} style={{width:'200px', height:'250px'}} />
                      <p>{item.title}</p>
                    </div>
                  );
                })
              }
            </div>
          </Col>
          <Col className='fri'>
            <h4>금요일</h4>
            <div className='fr'>
              {
                DAYLIST.map((item) => {
                  return (
                    item.day === '금요일' &&
                    <div>
                      <img onClick={() => {navigate(`/detail/${item.id}`)}} src={process.env.PUBLIC_URL+`/img/${item.img}`} style={{width:'200px', height:'250px'}} />
                      <p>{item.title}</p>
                    </div>
                  );
                })
              }
            </div>
          </Col>
          <Col className='satur'>
            <h4>토요일</h4>
            <div className='sa'>
              {
                DAYLIST.map((item) => {
                  return (
                    item.day === '토요일' &&
                    <div>
                      <img onClick={() => {navigate(`/detail/${item.id}`)}} src={process.env.PUBLIC_URL+`/img/${item.img}`} style={{width:'200px', height:'250px'}} />
                      <p>{item.title}</p>
                    </div>
                  );
                })
              }
            </div>
          </Col>
          <Col className='sun'>
            <h4>일요일</h4>
            <div className='su'>
              {
                DAYLIST.map((item) => {
                  return (
                    item.day === '일요일' &&
                    <div>
                      <img onClick={() => {navigate(`/detail/${item.id}`)}} src={process.env.PUBLIC_URL+`/img/${item.img}`} style={{width:'200px', height:'250px'}} />
                      <p>{item.title}</p>
                    </div>
                  );
                })
              }
            </div>
          </Col>
        </Row>
    </div>
  )
}

export default Day;