import React from 'react'
import Box from '../box-component'

export default function BlogsComponent({ data }) {
    return (
        <Box classnames="pr-0 mt-8 sm:mt-0">
            <h3 className='text-[#E0E0E0] text-responsive-md mb-4'>Blog</h3>
            {data.length < 0 ? "Blogs not found" : (
                data.map((item) => (
                    <div key={item.id} className=''>
                        <div className='flex gap-4'>
                            <h2 style={{ flex: 3 }} className='text-responsive-xl'>{item.title}</h2>
                            <div className='flex justify-end' style={{ flex: 5 }}>
                                <img src={item.img} className='w-full h-auto rounded-l-default' />
                            </div>
                        </div>
                        <p className='mt-10 w-9/12 text-secondary text-responsive-md'
                            dangerouslySetInnerHTML={{ __html: item.desc }}
                        ></p>
                        <a href={item.link} className='block mt-14 text-primary text-responsive-md' target='_blank'>{item.linkText}</a>
                    </div>
                ))
            )}
        </Box>
    )
}
