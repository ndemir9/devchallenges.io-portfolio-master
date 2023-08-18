import React from 'react'

export default function SkillItemComponent({ title, progress }) {
    return (
        <div className='flex items-center'>
            <h5 className='text-responsive-md text-three break-all'
                style={{ flex: 3 }}>{title}</h5>
            <div className='w-100 h-[.5rem] rounded-full' style={{
                background: "#C4C4C4",
                flex: 5
            }}>
                <div className='h-[.5rem] rounded-full bg-primary'
                    style={{
                        width: progress + "%",
                    }}
                ></div>
            </div>
        </div>
    )
}
