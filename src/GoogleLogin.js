/**
 * Created by paolocastro on 02/05/2017.
 */
import React, { Component } from 'react';
import GoogleLogin from 'react-google-login';
import 'whatwg-fetch';
import getCookie from './GetCookie.js';
import setCookie from './SetCookie.js';


function LogoutButton(props) {
    return (
        <button>
            Logout
        </button>
    );
}

class GoogleLoginRender extends React.Component {
    /**
     * Look if there is the cookie token, refresh token and user to show the button or not
     *
     * @param props
     */
    constructor(props) {
        super(props);
        console.log(getCookie('token'));
        if(getCookie('token') && getCookie('refresh_token') && getCookie('user')){
            this.state = {isLoggedIn: true};
        }else{
            this.state = {isLoggedIn: false};
        }
    }

    /**
     * Ajax to login with google
     *
     * @param googleUser
     */
    responseGoogle(googleUser) {
        var google_id = googleUser.googleId;
        var google_token = googleUser.tokenId;

        fetch('http://localhost:8000/app_dev.php/api/token-authentication', {
            method: "POST",
            body: 'google_id='+google_id+'&google_token='+google_token
            ,
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            },
        }).then(responce => {
            if(responce.status == 200){
                responce.json().then( data => {
                    setCookie(data);
                });
            }
        });
    };

    render() {
        const isLoggedIn = this.state.isLoggedIn;

        let button = null;
        if (isLoggedIn) {

            button = <p>Connect with Google</p>;

        } else {

            button = <GoogleLogin
                clientId="166230430158-mat99q8sglc8cnjouf9f9kq42inta4a3.apps.googleusercontent.com"
                buttonText="Login"
                onSuccess={this.responseGoogle}
                onFailure={this.responseGoogle}
            />;

        }

        return (
            <div>
                { button }
            </div>
        );
    }
}

export default GoogleLoginRender;