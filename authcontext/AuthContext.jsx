'use client'
import React, { createContext, useRef, useState } from 'react'

const initialState = {
    loading:false
}

export const AuthContextProvider = createContext(initialState)

const AuthContext = ({children}) => {
    const [state1, setState] = React.useState(true);
    const [Leave, setLeave] = React.useState(false);
    const section1Ref = useRef(null);
    const [id,setId] = useState('id')

  return (
   <AuthContextProvider.Provider value={{state1, setState, Leave, setLeave,id,setId,section1Ref}}>
    {children}
   </AuthContextProvider.Provider>
  )
}

export default AuthContext