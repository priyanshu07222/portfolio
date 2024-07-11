import React from 'react'

export const Card = ({children}: any) => {
  return (
    <div>
        <div className='w-48 h-28 bg-slate-800 rounded-lg flex justify-center items-center'>
            {children}
        </div>
    </div>
  )
}
