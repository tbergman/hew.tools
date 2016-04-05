import React from 'react'


const sx = {
  byline: {
    fontFamily: 'Athelas, Georgia, serif',
    // letterSpacing: `-${1/32}em`,
    lineHeight: 1.125
  }
}

export const About = ({ ...props }) => (
  <section id='about' className='py3'>
    <p>My name is Matthew Jones</p>
    <p className='h0 m0' style={sx.byline}> I design and build websites. </p>

  </section>
)

export const Work = ({ ...props }) => (
  <section id='contact' className='py3'>
    <h3>I work at</h3>
    <p className='h5 bold'>
      <a href='//deadfamous.ca'>Dead Famous</a>, <br className='sm-hide md-hide lg-hide' />
      in Vancouver, BC.
    </p>
  </section>
)

export const Contact = ({ ...props }) => (
  <section id='contact' className='py3'>
    <h3>I'm on</h3>

      github<a href='//github.com/hew'>hew</a>
      twitter<a href='//twitter.com/hvmmus'>hvmmus</a>

    github<a href='http://github.com/hew'>/hew</a>
  </section>
)
