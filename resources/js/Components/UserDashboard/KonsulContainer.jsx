import React from 'react'
import KonsulCard from './KonsulCard'

const KonsulContainer = ({jadwals}) => {
  return (
    <div>
        {jadwals.map((jadwal)=>(
            <KonsulCard
            id={jadwal.id}
            {...jadwal}
            />
          ))}
    </div>
  )
}

export default KonsulContainer