import { useState, useEffect } from 'react';
import { useAppSelector } from '../app/hooks';

export const useAuthStatus = () => {
  const [loggedIn, setLoggedIn] = useState(false)
  const [checkingStatus, setCheckingStatus] = useState(true)

  const { user } = useAppSelector((state) => state.auth)

  useEffect(() => {
    if (user) {
      setLoggedIn(true)
    } else {
      setLoggedIn(false)
    }
    setCheckingStatus(false)
  }, [user])

  return { checkingStatus, loggedIn }
}
