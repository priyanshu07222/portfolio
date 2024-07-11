import React, { ReactNode } from 'react'

export const Container = ({children}: any) => {
  return (
    <div className=' max-w-screen-xl mx-auto'>{children}</div>
  )
}
