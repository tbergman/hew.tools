import React from 'react'

export const Box = ({ href, name, description, stars, forks, ...props }) => (
  <div className='mb2 flex-grid'>
    <a href={href}
      className='block btn inverse'
      title={'View ' + name}
      >
      <h2 className='h4'> {name} </h2>
      <p className='regular m0'> {description} </p>
      <div className="flex py1">
        <span><img style={{ marginRight: `5px` }} src='assets/star.svg' alt="Image of Star"/>{ stars }</span>
        <span className='ml2'><img style={{ marginRight: `5px` }} src='assets/fork.svg' alt="Image of Fork"/>{ forks }</span>
      </div>

    </a>
  </div>
)

export const BoxSimple = ({ href, name, description, stars, forks, ...props }) => (
  <div className='mb2 flex-grid'>
    <a href={href}
      className='block btn inverse'
      title={'View ' + name}
      >
      <h2 className='h4'> {name} </h2>
      <p className='regular m0'> {description} </p>
    </a>
  </div>
)
