import React from 'react'
import { useContext } from 'react'
import { UserContext } from './UserContext'

export const useUserContext = () => {
    const userData = useContext(UserContext)
    return {...userData}
}

