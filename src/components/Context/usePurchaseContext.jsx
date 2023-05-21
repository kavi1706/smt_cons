import { useContext } from 'react'
import { PurchasedContext } from './PurchasedContext'

export const usePurchaseContext = () => {
    const cartDetails = useContext(PurchasedContext)
    return {...cartDetails}
}

