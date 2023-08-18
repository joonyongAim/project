import { Button, Container, Nav, Navbar, Form } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import logo from '../img/logo.png'

const Header = () => {
  const navigate = useNavigate();

  return (
    <Navbar bg="primary" data-bs-theme="dark">
      <Container fluid>
        <Navbar.Brand href='/'><img src={logo} style={{width: '50px', height: '50px'}}/></Navbar.Brand>
        <Navbar.Collapse id="navbarScroll">
        <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
          <Nav.Link onClick={() => {navigate('/day')}}>요일별 신작</Nav.Link>
          <Nav.Link onClick={() => {navigate('/favorite')}}>즐겨찾기</Nav.Link>
          <Nav.Link onClick={() => {navigate('/tag')}}>태그 검색</Nav.Link>
        </Nav>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="애니 검색"
              className="me-2"
              aria-label="Search"
              style={{background:'white'}}
            />
            <Button type='submit' style={{width: '100px', height:'50px'}}><i className="fa-solid fa-magnifying-glass"></i></Button>
            <Button onClick={() => {navigate('/login')}} style={{color: 'black', width: '150px', height:'50px', marginRight:'30px', marginLeft:'30px'}}>로그인</Button>
            <Button onClick={() => {navigate('/membership')}} style={{color: 'black', width: '150px', height:'50px'}}>회원가입</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default Header;