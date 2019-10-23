import React from 'react'
import { connect } from 'react-redux'
//import { firestoreConnect } from 'firebase'
import { compose } from 'redux'
import moment from 'moment'

const ProjectDetails = (props) => {
  const { project } = props;
  if (project) {
    return (
    <div>
      <div className="container section project-details">
        <div className="card z-depth-0">
          <div className="cardcontent">
            <span className="card title">Project Title</span>
            <p>{ project.content }</p>
          </div>
        </div>
        <div>
          <div>posted by {project.authorFirstName} {project.authorLastName}</div>
          <div> <p className="grey-text">{moment(project.createdAt.toDate()).calender}</p></div>
        </div>
      </div>
    </div>
    )
  } else
  return (
    <div className="container center">
      <p>Loading project...</p>
    </div>
  )
}

const mapStateToProps = (state, ownProps) => {
  console.log(state);
  const id = ownProps.match.params.id;
  const projects =state.firestore.data.projects;
  const project = projects ? projects[id] : null
  return {
    project: project
  }
}

export default compose(
  connect(mapStateToProps),
  //firestoreConnect([
    //{ collection: 'projects' }
  //])
)(ProjectDetails);