import { Grid } from '@material-ui/core'
import React from 'react'
import styled from "styled-components"

const LoginStyled = styled.div`
img{
    width: 100%;
}
`
const RightPartStyled = styled.div`
display: flex;
flex-direction: column;
justify-content:center;
min-height: 100vh;
margin: 0 10rem;
`

const HeaderStyled = styled.div`
border-bottom: 2px solid #00000038;
.title{
    font-size: 3rem;
    color: #0000008c;
    margin:0;
    font-weight: 900;
}
.alreadyHave{
    font-size: 17px;
    color: #0000005e;
}
.signup{
    font-size: 17px;
    color: red;
    text-decoration: none;
    font-weight: 700;
    padding-left: 5px;
}`

const UserStyled = styled.div`
margin-top: 2rem;

.input{
    /* margin-top: 1rem; */
  width: 26rem;
  height: 45px;
  border: none;
  outline: none;
  font-size: 17px;
  font-weight: bold;
  cursor: pointer;
  border-radius: 15px;
  /* background: #ffffff; */
  background: transparent;
  text-shadow: 1px 1px 0 #ffffff;
  box-shadow: 2px 2px 5px #babecc, -5px -5px 10px #ffffff;
  display: inline-flex;
  padding-left: 25px;
}
.pass{
    margin-top: 2rem
}
.Forgotpassword{
    color: red;
    font-size: 17px;
    font-weight: 700;
    display: flex;
    justify-content:center;
    text-decoration: none;
    margin-top: 1rem
}
.btn{
    margin-top: 1rem;
    margin-left: 3rem ;
  width: 17em;
  height: 45px;
  font-size: 20px;
  font-weight: bold;
  border-radius: 10px;
  background: #ff6e00;
  box-shadow: 5px 5px 10px #b6acac, -5px -5px 10px #faf4f4;
  display: flex;
  justify-content: center;
  align-items: center;
}
`

function Login() {
    return (
        <LoginStyled>
            <Grid container>
                <Grid item md={6}>
                    <img src="https://image.freepik.com/free-vector/sign-concept-illustration_114360-125.jpg?fbclid-IwAR1v8JvdXsE0tDWIgB1DSDCHRcBX9_j5vJKXd8M0axCB6s6dxJHAXkyw" />
                </Grid>
                <Grid item md={6}>
                    <RightPartStyled>
                        <HeaderStyled>
                            <p className="title">Wellcome Back</p>
                            <p className="alreadyHave">Don't have an account?<a className="signup" href="/signup">Sign Up</a></p>
                        </HeaderStyled>
                        <UserStyled>
                            <input className="input" type="text" placeholder="Email Address"></input>
                            <input className="input pass" type="password" placeholder="Password"></input>
                            <a className="Forgotpassword" href="">Quên mật khẩu</a>
                            <button className="btn">Log In</button>
                        </UserStyled>
                    </RightPartStyled>
                </Grid>
            </Grid>
        </LoginStyled>
    )
}

export default Login
