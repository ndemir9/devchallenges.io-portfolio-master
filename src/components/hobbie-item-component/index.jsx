import React from 'react'

export default function HobbiesItemComponent({ data }) {
    return (
        <div>
            <img src={data.img} className='rounded-default text-' />
            <h3 className='text-responsive-lg text-title font-semibold mt-3'>{data.title}</h3>
            <p className='text-responsive-md text-secondary'>{data.desc}</p>
        </div>
    )
}
