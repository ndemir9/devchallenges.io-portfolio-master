import React from 'react'
import Box from '../box-component'
import HobbieItemComponent from '../hobbie-item-component'

export default function HobbieComponent({ data }) {
  return (
    <Box>
      <h3 className='text-three text-responsive-lg mb-4 font-semibold'>Hobbies</h3>

      <div className='flex flex-col gap-12'>
        {data.length < 0 ? "Hobbies not found" : (
          data.map((item) => (
            <HobbieItemComponent key={item.id} data={item} />
          ))
        )}
      </div>
    </Box>
  )
}
