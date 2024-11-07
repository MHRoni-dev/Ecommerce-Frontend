import { useEffect, useState } from 'react'

const { useRouter } = require('next/navigation')
const { useSelector } = require('react-redux')

export const useRedictIfNotAuthenticated = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const router = useRouter()
  const user = useSelector(state => state.user.isLogin)

  useEffect(() => {
    if(!user) {
      setIsAuthenticated(false)
      router.replace('/login')
    }else{
      setIsAuthenticated(true)
    }
  },[user, router])
  return isAuthenticated
}

export const useRedirectIfAuthenticated = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const router = useRouter()
  const user = useSelector(state => state.user.isLogin)

  useEffect(() => {
    if(user) {
      setIsAuthenticated(true)
      router.replace('/')
    }
    else{
      setIsAuthenticated(false)
    }
  },[user, router])
  return isAuthenticated;
}