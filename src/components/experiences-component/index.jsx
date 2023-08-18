import React from 'react'
import Box from '../box-component'
import ExperienceItemComponent from '../experience-item-component'

export default function ExperiencesComponent({ data }) {
    return (
        <Box>
            <h3 className='text-three text-responsive-lg mb-4 font-semibold'>Experiences</h3>
            <div className='flex flex-col gap-6'>
                {data.length < 0 ? "Experiences not found" : (
                    data.map((item) => (
                        <ExperienceItemComponent key={item.id} data={item} />
                    ))
                )}
            </div>
        </Box>
    )
}
