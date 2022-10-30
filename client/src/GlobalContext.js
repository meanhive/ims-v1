import React, { createContext, useState, useEffect } from 'react'
import axios from 'axios'
import { toast } from 'react-toastify'
import useAuth from './API/AuthApi'
import useSettings from './API/SettingApi';

export const GlobalContext = createContext();


function DataProvider(props) {
  const [token, setToken] = useState(null)
 const [settingId,setSettingId] = useState(false)

  useEffect(() => {
    if (localStorage.getItem('loginToken')) {
      const getToken = async () => {
        await axios.get(`/api/v1/auth/refreshToken`)
          .then(res => {
            setToken(res.data.accessToken)
          }).catch(err => toast.error(err.response.data.msg))
      }
      getToken()
    }

  }, [])

  const data = {
    token: [token, setToken],
    authApi: useAuth(token),
    settingApi: useSettings(token),
    settingsId: [settingId,setSettingId]
  }

  return (
    <GlobalContext.Provider value={data} >
      {props.children}
    </GlobalContext.Provider>
  )
}

export default DataProvider
