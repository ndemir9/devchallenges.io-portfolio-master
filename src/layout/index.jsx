import React from 'react'

const Layout = ({ children }) => {
    return (
        <div className='mx-auto py-20 px-4'
            style={{
                width: "100%",
                maxWidth: "1024px"
            }}
        >{children}</div>
    )
}

export default Layout