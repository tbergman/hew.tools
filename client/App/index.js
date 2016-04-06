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
        <Nav
          data={navLinks}
        />
        <OS />
        <Projects
          data={projectLinks}
          />
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


const sx = {
  byline: {
    lineHeight: 1.125
  }
}
const Who = () => (
  <section id='about' className='py2'>
    <p className='h0 m0' style={sx.byline}>
    Matt<strong className='xs-hide'>/</strong>hew Jones is a web <br className='sm-hide lg-show' />
    designer<Str /><br className='lg-hide' />developer </p>
  </section>
)
const More = () => (
  <section id='contact' className='py2'>
    <h3>More Info</h3>
    <p>Lives in <Str /> Vancouver, BC. </p>
    <p>Works with <Str /> React <Str /> RxJS <Str /> Modular Styles </p>
  </section>
)
const Nav = ({ data }) => (
  <section id='contact' className='py2'>
    <h3>Links</h3>
    { data.map((data, i) => (
      <p key={i} className='m0'><Str /> <a href={data.href}>{data.name}</a></p>
    ))}
  </section>
)
const Str = () => ( <strong>/</strong> )
