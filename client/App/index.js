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
  <section className='py2'>
    <p className='h0'>
    Matt<Str />hew Jones is a <br className='lg-show' />
    designer<Str />developer </p>
  </section>
)
const More = () => (
  <section className='py2 about'>
    <h3>About</h3>
    <p>
      I use code to think about web experiences, and how people fit into them. 
      I mostly work with Javascript =&gt; React, Redux, MobX, Rx.
    </p>
    <p>
      I'm passionate about functional programming, conversion and  
      interaction design, and the future: VR, web assembly, etc.
    </p>
  </section>
)
const Nav = ({ data }) => (
  <section className='py2'>
    <h3>Links</h3>
    { data.map((data, i) => (
      <p key={i} className='m0 web-link'><Str /> <a href={data.href}>{data.name}</a></p>
    ))}
  </section>
)
const Str = () => ( <strong>/</strong> )
