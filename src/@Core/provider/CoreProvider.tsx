'use client'
import React, { createContext, useContext } from 'react'

export const CoreContext = createContext<any>(null)

export const usePageContext = () => useContext(CoreContext)
export const CoreProvider: React.FC<any> = ({ children, ...restProps }) => {
	return <CoreContext.Provider value={{ ...restProps }}>{children}</CoreContext.Provider>
}
