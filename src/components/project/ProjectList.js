import React from 'react'
import ProjectSummary from './ProjectSummary'
import { Link } from 'react-router-dom'

const ProjectList = ({projects}) => {
  return (
    <div className="project-list section">
      <div className="card z-depth-0 project-ProjectSummary">
        <div className="card-content grey-text text-darken-3">
          <span className="card-list">
            { projects && projects.map(project =>{
              return (
                <Link to='/project/ + {project.id}'>
                  <ProjectSummary project={project} key={project.id} />
                </Link>
              )
            })}
          </span>
        </div>
      </div>
    </div>
  )
}

export default ProjectList;
