import React from 'react'

const Footer = ({ source, data }) => (
  <footer className='py3 mt3 mb3'>
    <div className='flex flex-baseline flex-wrap mxn1 bold'>
      <a href={source} className='h6 btn px1 btn-link'>View Source</a>
      <div className='flex-auto' />
        <div className='flex flex-baseline'>
          {data.map(data => (
            <a href={data.href}
              key={data.href}
              className='h6 btn px1 btn-link'>
              {data.name}
            </a>
            ))}
        </div>
      </div>
    </footer>
)

export default Footer
