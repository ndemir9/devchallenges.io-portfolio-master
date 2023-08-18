import React from 'react'
import Box from '../box-component'
import { MdEmail } from 'react-icons/md';
import { HiPhone } from 'react-icons/hi';

const UserComponent = ({ data }) => {
  return (
    <Box>
      <header className='sm:flex gap-6'>
        <img className='w-[250px] h-[250px] rounded-default mb-5 sm:mb-0' src={data.avatar} alt='avatar' />
        <div className='text-responsive-lg'>
          <div className='flex justify-between items-center'>
            <div>
              <h2 className='text-responsive-xl font-semibold text-three'>{data.fullName}</h2>
              <p className='text-three'>{data.title}</p>
            </div>
            <div className='flex flex-col text-three'>
              <a href='#' className='flex items-center gap-2'><MdEmail size="22px" /> {data.email}</a>
              <a href='#' className='flex items-center gap-2'><HiPhone size="22px" />{data.phone}</a>
            </div>
          </div>
          <p className='mt-10 text-secondary'
            dangerouslySetInnerHTML={{ __html: data.desc }}
          ></p>
        </div>
      </header>
    </Box>
  )
}

export default UserComponent