import React, {useState, useEffect} from 'react';
import axios from 'axios';

async function fetchReadings(userData) {
  if(userData.isUser !== true) return;
  let theData = await axios(`http://localhost:5000/get-data?access_token=${userData.accessToken}&refresh_token=${userData.refreshToken}`)
  let res = theData.data;
  let readings = {
    unitTye: res.dexcom.unit,
    values: []
  }
  res.dexcom.egvs.map((item) => {
    readings.values.push({
      time: item.displayTime,
      value: item.value
    })
  })
  return readings;
}
export default fetchReadings;