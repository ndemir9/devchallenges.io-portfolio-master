import React from 'react'
import Box from '../box-component'
import SkillItemComponent from '../skill-item-component'

export default function SkillsComponent({ data }) {
  return (
    <Box>
      <h3 className='text-responsive-lg font-bold text-three uppercase mb-4'>
        Front end
      </h3>
      <div className='flex flex-col gap-4'>
        {
          data.length < 0 ? "Skills not found" : (
            data.map((item) => (
              <SkillItemComponent key={item.id} title={item.name} progress={item.progress} />
            ))
          )
        }
      </div>
    </Box>
  )
}