import Cookies from 'universal-cookie';
import axios from 'axios';


const cookies = new Cookies();

const SetUser = async (code) => {
  const winParam = new URLSearchParams(window.location.search);
  if(winParam.get('code')) {
    let code = await winParam.get('code');
    let data = await axios('http://localhost:5000/?code='+code)
    let response = await data.data
    cookies.set('user', {
      isUser: true,
      accessToken: response.access_token,
      refreshToken: response.refresh_token
    });
    return({
      isUser: true,
      accessToken: response.access_token,
      refreshToken: response.refresh_token
    })
  } else if(!cookies.get('user') || code === "destroy") {
    return({
      isUser: false,
      accessToken: 'none',
      refreshToken: 'none'
    })
  } else {
    return({
      isUser: true,
      accessToken: cookies.get('user').accessToken,
      refreshToken: cookies.get('user').refreshToken
    })
  }
}

export default SetUser;