import './Tag.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const Tag = () => {
  return (
    <div className="TS">
        <Row className='entire'>
          <Col className='genre'>
            <h2>장르</h2>
            <div className='gr'>
              <input type="checkbox" name="genre" value='BL' /><label>BL</label>
              <input type="checkbox" name="genre" value='공포' /><label>공포</label>
              <input type="checkbox" name="genre" value='액션' /><label>액션</label>
              <input type="checkbox" name="genre" value='음악' /><label>음악</label>
              <input type="checkbox" name="genre" value='스포츠' /><label>스포츠</label>
              <input type="checkbox" name="genre" value='재난' /><label>재난</label>
              <input type="checkbox" name="genre" value='이세계' /><label>이세계</label>
              <input type="checkbox" name="genre" value='범죄' /><label>범죄</label>
              <input type="checkbox" name="genre" value='성인' /><label>성인</label>
              <input type="checkbox" name="genre" value='개그' /><label>개그</label>
              <input type="checkbox" name="genre" value='모험' /><label>모험</label>
              <input type="checkbox" name="genre" value='추리' /><label>추리</label>
              <input type="checkbox" name="genre" value='SF' /><label>SF</label>
              <input type="checkbox" name="genre" value='판타지' /><label>판타지</label>
              <input type="checkbox" name="genre" value='하렘' /><label>하렘</label>
            </div>
          </Col>
          <Col className='tag'>
          <h2>태그</h2>
            <div className='tg'>
              <input type="checkbox" name="tag" value='게임' /><label>게임</label>
              <input type="checkbox" name="tag" value='학교' /><label>학교</label>
              <input type="checkbox" name="tag" value='오타쿠' /><label>오타쿠</label>
              <input type="checkbox" name="tag" value='복수' /><label>복수</label>
              <input type="checkbox" name="tag" value='먼치킨' /><label>먼치킨</label>
              <input type="checkbox" name="tag" value='동물' /><label>동물</label>
              <input type="checkbox" name="tag" value='가족' /><label>가족</label>
              <input type="checkbox" name="tag" value='선생님' /><label>선생님</label>
              <input type="checkbox" name="tag" value='로봇' /><label>로봇</label>
              <input type="checkbox" name="tag" value='배틀' /><label>배틀</label>
              <input type="checkbox" name="tag" value='정치' /><label>정치</label>
              <input type="checkbox" name="tag" value='철학' /><label>철학</label>
              <input type="checkbox" name="tag" value='좀비' /><label>좀비</label>
              <input type="checkbox" name="tag" value='퇴마' /><label>퇴마</label>
            </div>
          </Col>
          <Col className='year'>
          <h2>년도</h2>
            <div className='yr'>
              <input type="checkbox" name="year" value='2023년' /><label>2023년</label>
              <input type="checkbox" name="year" value='2022년' /><label>2022년</label>
              <input type="checkbox" name="year" value='2021년' /><label>2021년</label>
              <input type="checkbox" name="year" value='2020년' /><label>2020년</label>
              <input type="checkbox" name="year" value='2019년' /><label>2019년</label>
              <input type="checkbox" name="year" value='2018년' /><label>2018년</label>
              <input type="checkbox" name="year" value='2017년' /><label>2017년</label>
              <input type="checkbox" name="year" value='2016년' /><label>2016년</label>
              <input type="checkbox" name="year" value='2015년' /><label>2015년</label>
              <input type="checkbox" name="year" value='2014년' /><label>2014년</label>
              <input type="checkbox" name="year" value='2013년' /><label>2013년</label>
              <input type="checkbox" name="year" value='2012년' /><label>2012년</label>
              <input type="checkbox" name="year" value='2011년' /><label>2011년</label>
              <input type="checkbox" name="year" value='2010년' /><label>2010년</label>
            </div>
          </Col>
          <Col className='screen'>
          <h2>방영</h2>
            <div className='sc'>
              <input type="checkbox" name="screen" value='방영중' /><label>방영중</label>
              <input type="checkbox" name="screen" value='완결' /><label>완결</label>
            </div>
          </Col>
        </Row>
    </div>

  )
}

export default Tag;