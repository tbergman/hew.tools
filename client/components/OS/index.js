import React, { Component } from 'react'
import jax from 'jax.js'
import Box from '../Box'

class Projects extends Component {
  constructor(props) {
    super(props)
    this.state = {
      parsedItems: []
    }
  }

  componentDidMount () {
    jax('http://hewtools.herokuapp.com/').then(response => {
      const parsed = JSON.parse(response)
      this.setState({ parsedItems: parsed })
    })

  }

  render () {
    const OSProjects = this.state.parsedItems.map((item, i) => {
      return (
        <Box
          name={item.name}
          description={item.desc}
          href={item.url}
          stars={item.stars}
          forks={item.forks}
          key={i}
        />
      )
    })

  return (
      <section id="projects" className="py3">
        <h3>OS Tools</h3>
          <div className="sm-flex flex flex-wrap xjustify-between mxn2">
            { OSProjects }
          </div>
      </section>
    )
  }

}

export default Projects
