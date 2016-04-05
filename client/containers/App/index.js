import React, { Component } from 'react'
import Box from '../../components/Box'
import Projects from '../../components/Projects'
import Footer from '../../components/Footer'
import style from './style.css'

class App extends Component {

  render() {
    return (
      <div className='px2 sm-px2 lg-px4'>
        <About />
        <Work />
        <Contact />
        <Projects />
        <Footer
          source={source}
          nav={nav}
          />
      </div>
    )
  }
}

export default App


/*
  Smaller Components
  ____________________________________________________________________________*/

const sx = {
  byline: {
    lineHeight: 1.125
  }
}
const About = ({ ...props }) => (
  <section id='about' className='py2'>
    <p className='h0 m0' style={sx.byline}>
    Matt<strong className='xs-hide'>/</strong>hew Jones is a web  <br className='sm-hide lg-show' />
    designer<Str /><br className='lg-hide' />developer </p>
  </section>
)
const Work = ({ ...props }) => (
  <section id='contact' className='py2'>
    <h3>More Info</h3>
    <p>Lives in <Str /> Vancouver, BC. </p>
    <p>Works with <Str /> React <Str /> RxJS <Str /> Modular Styles </p>
  </section>
)
const Contact = ({ ...props }) => (
  <section id='contact' className='py2'>
    <h3>Links</h3>
    <p className='m0'><Str /> <a href='//github.com/hew'> Github </a></p>
    <p className='m0'><Str /> <a href='//twitter.com/hvmmus'> Twitter </a></p>
    <p className='m0'><Str /> <a href='/blog'> Blog </a></p>
  </section>
)
const Str = () => (
  <strong>/</strong>
)
const source = 'http://github.com/hew/hew.github.io'
const nav = [
  { href: '//github.com/hew', title: 'Github' },
  { href: '//twitter.com/hvmmus', title: 'Twitter' },
  { href: '/blog', title: 'Blog' },
]
