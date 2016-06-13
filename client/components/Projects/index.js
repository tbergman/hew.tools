import React, { Component } from 'react'
import jax from 'jax.js'
import { BoxSimple } from '../Box'

class Projects extends Component {

  render () {
    const { data } = this.props
    const theProjects = data.map((item, i) => {
      return (
        <BoxSimple
          name={item.name}
          description={item.desc}
          href={item.href}
          key={i}
        />
      )
    })

  return (
      <section id="projects" className="py3">
        <h3>Projects</h3>
          <div className="sm-flex flex flex-wrap xjustify-between mxn2">
            { theProjects }
          </div>
      </section>
    )
  }

}

export default Projects
