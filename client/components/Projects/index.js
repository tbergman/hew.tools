import React, { Component } from 'react'
import jax from 'jax.js'
import Box from '../Box'

// const beep = [{"name":"react-static-boilerplate-ES6","desc":"React Static Site Boilerplate with ES6","url":"https://github.com/hew/react-static-boilerplate-ES6","stars":36,"forks":8},{"name":"react-hummus","desc":"Another React Starter","url":"http://tough-iron.surge.sh","stars":6,"forks":0},{"name":"sage-lost-stylus","desc":"Use Stylus and Lost with Sage","url":"https://github.com/hew/sage-lost-stylus","stars":6,"forks":1},{"name":"grunt-emails-zurb","desc":"Grunt + Assemble + Zurb = ♥","url":"https://github.com/hew/grunt-emails-zurb","stars":3,"forks":2},{"name":"blog","desc":"My blog. Built with React.","url":"http://hew.tools/blog","stars":2,"forks":0},{"name":"sage-basscss","desc":"Roots.io's 'Sage' Wordpress theme with Basscss (instead of Bootstrap) ","url":"https://github.com/hew/sage-basscss","stars":2,"forks":0},{"name":"frontend-boilerplate-min","desc":"Simplified from TJ's version","url":"https://github.com/hew/frontend-boilerplate-min","stars":1,"forks":0},{"name":"landing-page-express","desc":"Form validation + Email. A super simple Express app for landing pages. ","url":"https://github.com/hew/landing-page-express","stars":1,"forks":0},{"name":"materialize-landing-page","desc":"A landing page built with the Materialize framework. ","url":"https://github.com/hew/materialize-landing-page","stars":1,"forks":1},{"name":"eww","desc":"","url":"https://github.com/hew/eww","stars":0,"forks":0},{"name":"hew.github.io","desc":"My personal website. Built with, and is me playing around with React.","url":"https://github.com/hew/hew.github.io","stars":0,"forks":0},{"name":"hotfiles","desc":"My dotfiles — so hot right now.","url":"https://github.com/hew/hotfiles","stars":0,"forks":0},{"name":"resume.css","desc":"This is my resume as a css file.","url":"http://hew.tools/resume.css","stars":0,"forks":0},{"name":"single-gulp-wired-ep","desc":"Wiredep (Bower injection) in a Single Gulp Task","url":"https://github.com/hew/single-gulp-wired-ep","stars":0,"forks":0},{"name":"cover-letter","desc":"Cover letter thing.","url":"http://hew.tools/cover-letter","stars":0,"forks":0},{"name":"lix","desc":null,"url":"https://github.com/hew/lix","stars":0,"forks":0}]


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
      // console.log("parsed", parsed)
      this.setState({ parsedItems: parsed })
    })

  }

  render () {
    const myProjects = this.state.parsedItems.map((item, i) => {

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
          { myProjects }
        </div>
      </section>
    )
  }

}

export default Projects
