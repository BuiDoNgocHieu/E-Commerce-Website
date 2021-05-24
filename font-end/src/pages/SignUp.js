import { Grid, TextField } from '@material-ui/core'
import React, { useState } from 'react'
import styled from "styled-components"
import APICaller from '../utils/callApi'
import { Link, useHistory } from "react-router-dom"

const SignUpStyled = styled.div`
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
.login{
    font-size: 17px;
    color: red;
    text-decoration: none;
    font-weight: 700;
    padding-left: 5px
}
`
const SinStyled = styled.div`
display: flex;
flex-direction: row;
border-bottom: 2px solid #00000038;
.google{
    background: #ffffff;
  width: 19em;
  height: 45px;
  outline: none;
  font-size: 17px;
  font-weight: bold;
  border-radius: 15px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 2rem;
}
.imgGoogle{
    font-size: 17px;
    font-weight: 600;
    width: 2rem;

}
.facebook{
    background: #ffffff;
  width: 19em;
  margin-left: 1rem;    
  height: 45px;
  outline: none;
  font-size: 17px;
  font-weight: bold;
  border-radius: 15px;
  display: flex;
  justify-content: center;
  align-items: center;
}
.imgFacebook{
    font-size: 17px;
    font-weight: 600;
    width: 2rem;

}
`
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

.btn{
    margin-top: 2rem;
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
`;


function SignUp() {
    const [state, setState] = useState({ email: "", password: "" })
    const router = useHistory();

    const handleOnChange = (e) => {
        setState((prev) => {
            return { ...prev, [e.target.name]: e.target.value }
        });
    }
    const handleSubmit = async () => {
        const result = await APICaller("auth/signup", "POST", { ...state })
        if (result.status) {
            router.push("/login");
        }
    }

    return (
        <SignUpStyled>
            <Grid container>
                <Grid item md={6}>
                    <img src="https://image.freepik.com/free-vector/social-media-marketing-concept_23-2148427346.jpg" />
                </Grid>
                <Grid item md={6}>
                    <RightPartStyled>
                        <p className="title">Get's Started</p>
                        <p className="alreadyHave">Already have account?<a className="login" href="/login">Log in</a></p>
                        <SinStyled>
                            <button className="google">
                                <img className="imgGoogle" src="https://img-authors.flaticon.com/google.jpg" />
                            Sign Up with Google
                        </button>
                            <button className="facebook">
                                <img className="imgFacebook" src="https://i.pinimg.com/474x/69/44/73/6944730de5beae5511e1ea99fa0edc70.jpg" />
                            Sign Up with Facebook
                        </button>
                        </SinStyled>
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
                            <button className="btn" onClick={() => handleSubmit()}>Sign Up</button>
                        </UserStyled>
                    </RightPartStyled>

                </Grid>
            </Grid>
        </SignUpStyled>
    )
}

export default SignUp
