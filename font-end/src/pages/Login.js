import { Grid, TextField } from '@material-ui/core'
import React, { useState } from 'react'
import { useHistory } from 'react-router'
import styled from "styled-components"
import APICaller from '../utils/callApi'

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

#outlined{
    width: 26rem;
  outline: none;
  font-size: 17px;
  font-weight: bold;
  cursor: pointer;
  border-radius: 4px;
  box-shadow: 4px 4px 8px #babecc, -5px -5px 10px #ffffff;
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
    const [state, setState] = useState({ email: "", password: "" })
    const router = useHistory();

    const handleOnChange = (e) => {
        setState((prev) => {
            return { ...prev, [e.target.name]: e.target.value }
        });
    }
    const handleSubmit = async () => {
        const result = await APICaller("auth/login", "POST", { ...state })
        if (result.status) {
            console.log(result)
            localStorage.setItem("accessToken", result.data.accessToken)

            // router.push("/");
        }
    }

    return (
        <LoginStyled>
            <Grid container>
                <Grid item md={6}>
                    <img src="https://businesstemplates.co.nz/wp-content/uploads/2020/12/login-concept-illustration_114360-739.jpg" />
                </Grid>
                <Grid item md={6}>
                    <RightPartStyled>
                        <HeaderStyled>
                            <p className="title">Wellcome Back</p>
                            <p className="alreadyHave">Don't have an account?<a className="signup" href="/signup">Sign Up</a></p>
                        </HeaderStyled>
                        <UserStyled>
                            <TextField
                                id="outlined"
                                label="Email Address"
                                variant="outlined"
                                style={{ marginBottom: "2rem" }}
                                type="text"
                                value={state.email}
                                name="email"
                                onChange={handleOnChange}>
                            </TextField>
                            <TextField
                                id="outlined"
                                label="Password"
                                variant="outlined"
                                style={{ marginBottom: "2rem" }}
                                type="password"
                                value={state.password}
                                name="password"
                                onChange={handleOnChange}>
                            </TextField>

                            <a className="Forgotpassword" href="/">Quên mật khẩu</a>
                            <button className="btn" onClick={() => handleSubmit()}>Log In</button>
                        </UserStyled>
                    </RightPartStyled>
                </Grid>
            </Grid>
        </LoginStyled>
    )
}

export default Login
