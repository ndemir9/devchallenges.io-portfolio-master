import React from 'react'
import Box from '../box-component'

export default function ProjectItemComponent({ data }) {
    return (
        <Box>
            <img src={data.img} className='rounded-default' />
            {data && (
                <div className='mt-4 flex flex-wrap gap-2'>
                    {
                        data.tags.map((item) => (
                            <span key={item.id} className='text-three text-responsive-md'># {item.tag}</span>
                        ))
                    }
                </div>
            )}
            <h3 className='text-responsive-xl text-title my-4'>{data.title}</h3>
            <p className='text-responsive-md text-secondary text-justify'>{data.desc}</p>
            <div className='flex gap-4 mt-10'>
                <a href='#' className='flex-1 block text-white bg-primary rounded-default p-3 text-center hover:bg-blue-700 duration-200'>Demo</a>
                <a href='#' className='flex-1 block text-primary bg-white rounded-default p-3 text-center border-primary border hover:bg-blue-200 hover:border-blue-200 duration-200'>Code</a>
            </div>
        </Box>
    )
}
