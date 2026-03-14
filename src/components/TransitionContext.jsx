import { createContext, useContext } from 'react'

export const TransitionContext = createContext(null)
export const usePageTransition = () => useContext(TransitionContext)
