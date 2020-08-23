import React from 'react';


const LogState = props => {
  
  const StateButton = state => {
    if(state.state === true) {
      return(
          <button onClick={props.onClick}>
          Logout 
          </button>
        )
    } else {
        return(
          <div>
            <a href="https://api.dexcom.com/v2/oauth2/login?client_id=Gm704rNUXZdRLy2SkbMvSA6ansXnIk1H&redirect_uri=http://localhost:3000/&response_type=code&scope=offline_access">Login</a> 
          </div>
        )
      }
  }

  return (
    <div>
      <StateButton state={props.theStateofUser}/>
    </div>
  )
}

export default LogState;