import React from 'react'

export default function ExperienceItemComponent({ data }) {
    return (
        <div className='flex items-center'>
            <div style={{ flex: 2 }} className='flex items-center justify-center'><img src={data.img} className='max-w-[6rem] h-auto' /></div>
            <div style={{ flex: 5 }}>
                <small className='text-responsive-sm text-secondary'>{data.date}</small>
                <h4 className='text-responsive-md mt-2 mb-8'>{data.title}</h4>
                <p className='text-responsive-md text-secondary'>{data.desc}</p>
            </div>
        </div>
    )
}
