import React, { Component } from 'react'
import { Box } from '../components/Box'
import OS from '../components/OS'
import Projects from '../components/Projects'
import Footer from '../components/Footer'
import { Motion, spring } from 'react-motion'
import { siteData } from './siteData'
import style from './style.css'

class App extends Component {
  constructor() {
    super()
    this.state = {
      active: false
    }
  }

  componentDidMount() {
    setTimeout(() => this.setState({ active: true }), 130); 
  }


  render() {
    const { source, navLinks, projectLinks } = siteData
    return (
        <Motion
          style={{ 
            z: this.state.active ?  spring(0, { dampning: 100, stiffness: 50 }) : 1,
            x: this.state.active ?  spring(1, { dampning: 100, stiffness: 50 }) : 0 }}>
          {({z,x}) => {
            const style = { transform: `translate3d(0,${z}em,0)`, opacity: x }
            return (
              <div style={style} className='px2 sm-px2 lg-px4 animate'> 
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
          }}
        </Motion>
      
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
      I mostly work with Javascript.
    </p>
    <p>
      I'm passionate about functional programming, conversion and  
      interaction design, and eating hummus.
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
