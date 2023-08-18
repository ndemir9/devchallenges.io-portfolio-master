import React from 'react'

export default function Box({ children, classnames = "", styles }) {
    return (
        <div className={`p-default bg-white rounded-default ${classnames && classnames}`} style={styles}>
            {children}
        </div>
    )
}
