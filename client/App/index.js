import React, { Component } from 'react'
import { Box } from '../components/Box'
import OS from '../components/OS'
import Projects from '../components/Projects'
import Footer from '../components/Footer'
import { siteData } from './siteData'
import style from './style.css'

class App extends Component {

  render() {
    const { source, navLinks, projectLinks } = siteData
    return (
      <div className='px2 sm-px2 lg-px4'>
        <Who />
        <More />
        <Nav data={navLinks} />
        <OS />
        <Projects data={projectLinks} />
        <Footer
          source={source}
          data={navLinks}
        />
      </div>
    )
  }
}

export default App


/*
  Smaller Components
  ____________________________________________________________________________*/


const Who = () => (
  <section id='about' className='py2'>
    <p className='h0'>
    Matt<Str />hew Jones is a <br className='lg-show' />
    designer<Str />developer </p>
  </section>
)
const More = () => (
  <section id='contact' className='py2'>
    <h3>About</h3>
    <p>I specialize in Javascript and modular style systems.</p>
    <p>Put simply, I think good design is freedom, and bad design is hell.</p>
    <p>I'm from Vancouver, Canada.</p>
  </section>
)
const Nav = ({ data }) => (
  <section id='contact' className='py2'>
    <h3>Links</h3>
    { data.map((data, i) => (
      <p key={i} className='m0 web-link'><Str /> <a href={data.href}>{data.name}</a></p>
    ))}
  </section>
)
const Str = () => ( <strong>/</strong> )
