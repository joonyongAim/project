import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import logo from '../img/logo.png';
import './Login.css';
import { useNavigate } from 'react-router-dom';

const Login = () => {

  const navigate = useNavigate();
  
  
  return (
    <div className='wrap'>
      <Form>
        <div onClick={() => {navigate('/')}}style={{display:'flex', justifyContent:'center'}}>
          <img src={logo} style={{width:'150px', height:'150px'}} />
        </div>
        <Form.Group className="Email1">
          <Form.Label>이메일</Form.Label>
          <Form.Control type="email" placeholder="이메일을 입력해주세요" style={{width:'400px'}}/>
        </Form.Group>

        <Form.Group className="Password1">
          <Form.Label>비밀번호</Form.Label>
          <Form.Control type="password" placeholder="비밀번호를 입력해주세요" />
        </Form.Group>

        <Button variant="primary" type="submit" className='login1'>
          로그인
        </Button>
      </Form>
    </div>
  )
}

export default Login;