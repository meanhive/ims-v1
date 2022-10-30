import React, { useEffect, useState } from 'react'
import axios from 'axios';
import {toast} from 'react-toastify';

function useSettings(token) {
    const [settings,setSettings] = useState([])

       useEffect(() => {
       if(token) {
        const getSettings = async () => {
            const res = await axios.get(`/api/v1/setting/all`,{
            headers: { Authorization: token }
        });
            setSettings(res.data.settings)
    }
    getSettings()
       }
    },[token])
  return{
    settings: [settings,setSettings]
  }
}

export default useSettings