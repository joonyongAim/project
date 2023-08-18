import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import './Membership.css';
import logo from '../img/logo.png';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';



const Membership = () => {

  const navigate = useNavigate();

  const [email, setEmail] = useState(false);
  const [id, setId] = useState(false);
  const [pwdInput, setPwdInput] = useState('');
  const [password, setPassword] = useState(false);
  const [passwordChk, setPasswordChk] = useState(false);

  const regexId = /^\w{8,20}$/;
  const regexPw = /^(?=.*[a-zA-Z])(?=.*[!@#$%^*+=-])(?=.*[0-9]).{8,25}$/;
  const regexEmail = /^([a-z]+\d*)+(\.?\w+)+@\w+(\.\w{2,3})+$/;

  const emailCheck = (e) => {
    if(regexEmail.test(e)) {
      setEmail(true)
    } else {
      setEmail(false)
    }
  }

  const idCheck = (i) => {
    if(regexId.test(i)) {
      setId(true)
    } else {
      setId(false)
    }
  }

  const passwordCheck = (p) => {
    if(regexPw.test(p)) {
      setPassword(true)
    } else {
      setPassword(false)
    }
  }

  const pwReconfirm = (password, passwordCheck) => {
    console.log(password, passwordCheck);
    if(password === passwordCheck) {
      setPasswordChk(true)
    } else {
      setPasswordChk(false)
    }
  }
  
  return (
    <div className='wrapper'>
      <Form>
        <div onClick={() => {navigate('/')}}style={{display:'flex', justifyContent:'center'}}>
          <img src={logo} style={{width:'150px', height:'150px'}} />
        </div>
        
        <Form.Group className="Email">
          <Form.Label>이메일</Form.Label>
          <Form.Control type="email" placeholder="이메일을 입력해주세요" style={{width:'400px'}} onChange={(e) => {emailCheck(e.target.value)}}/>
          {
            email ?
            <p style={{color:'blue', display:'block'}}>사용가능한 이메일 입니다.</p>
            :<p style={{color:'red', display:'none'}}>사용불가능한 이메일 입니다.</p>
          }

        </Form.Group>

        <Form.Group className='Id'>
          <Form.Label>아이디</Form.Label>
          <Form.Control type='id' placeholder='아이디를 입력해주세요' onChange={(e) => {idCheck(e.target.value)}}/>
          {
            id ?
            <p style={{color:'blue', display:'block'}}>사용가능한 아이디 입니다.</p>
            :<p style={{color:'red', display:'none'}}>사용불가능한 아이디 입니다.</p>
          }
        </Form.Group>

        <Form.Group className="Password">
          <Form.Label>비밀번호</Form.Label>
          <Form.Control type="password" placeholder="비밀번호를 입력해주세요" value={pwdInput} onChange={(e) => {setPwdInput(e.target.value); passwordCheck(e.target.value);}} />
          {
            password ?
            <p style={{color:'blue', display:'block'}}>사용가능한 비밀번호 입니다.</p>
            :<p style={{color:'red', display:'none'}}>사용불가능한 비밀번호 입니다.</p>
          }
        </Form.Group>

        <Form.Group className="Pwre">
          <Form.Label>비밀번호 재확인</Form.Label>
          <Form.Control type="password" placeholder="비밀번호를 다시 입력해주세요" onChange={(e) => {pwReconfirm(pwdInput, e.target.value)}} />
          {
            passwordChk ?
            <p style={{color:'blue'}}>일치</p>
            :<p style={{color:'red'}}>불일치</p>
          }
        </Form.Group>

        <Button variant="primary" type="submit" className='login'>
          회원가입
        </Button>
      </Form>
    </div>
  )
}

export default Membership;
