import React, { useEffect, useState } from 'react';
import SetUser from '../Utils/SetUser';
import LogState from './LogState';
import { useHistory } from 'react-router-dom'
import Cookies from 'universal-cookie';
import fetchReadings from '../Utils/fetchReadings';
import moment from 'moment';

const cookies = new Cookies();
function Home() {
  const [theUser, setTheUser ] = useState({});
  const [initialLoad, setInitialLoad] = useState(false);
  const [readings, setReadings] = useState({})
  const history = useHistory();
  
  useEffect(() => {
    const getData = async () => {
      if(!initialLoad) {
      let data = await SetUser();
      let grabData = await fetchReadings(data);
        setTheUser({
          isUser: data.isUser,
          accessToken: data.accessToken,
          refreshToken: data.refreshToken
        })
        setReadings(grabData)
      }
      clearParam();  
      setInitialLoad(true)
    }
    getData();
  },[]);

 

  
  const logOut = () => {
    cookies.remove('user')
    setTheUser({isUser:false})
  }
  const Readings = () => {
    if(readings.values) {
      let count = 0;
      let readingsValue = readings.values.map((reading) => (
        <li key={count++}>
          <span>{reading.value} <small>Mg/dL</small> on: </span>
          <span>{moment(reading.time).format('MMMM Do YYYY, h:mm:ss a')}</span>
        </li>
      ))
      return (
        <div>
          <h1>Fetched <strong>{readings.values.length}</strong> glucose readinfgs</h1>
          <ul>{ readingsValue }</ul>
        </div>
      )
    } else {
      return <div>Loading readings...</div>
    }
  } 

  
  
  const clearParam = () => history.push('/');

  return(
    <div>
      <p>Hello! You're {theUser.isUser ? 'logged in' : 'logged out'}</p>
      <LogState theStateofUser={theUser.isUser} onClick={logOut}/>
      { theUser.isUser ? <Readings /> : ""}
      
    </div>
  )
}

export default Home;