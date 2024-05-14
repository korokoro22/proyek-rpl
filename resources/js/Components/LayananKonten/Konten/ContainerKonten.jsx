import React from 'react'
import ListKonten from './ListKonten'

const ContainerKonten = () => {
  return (
    <div className='bg-[#E9E9E9]'>
        <div className='py-10 flex flex-col gap-10'>
            <ListKonten />
            <ListKonten />
            <ListKonten />
            <ListKonten />
            <ListKonten />
        </div>
        
    </div>
  )
}

export default ContainerKonten