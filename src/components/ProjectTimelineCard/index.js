import {AiFillCalendar} from 'react-icons/ai'
import './index.css'

const ProjectTimelineCard = props => {
  const {projectDetails} = props
  const {
    imageUrl,
    projectTitle,
    description,
    projectUrl,
    duration,
  } = projectDetails

  return (
    <div>
      <img src={imageUrl} alt="project" className="image" />
      <div className="top-container">
        <h1 className="course-title">{projectTitle}</h1>
        <div className="duration-container">
          <AiFillCalendar color="#171f46" />
          <p className="duration">{duration}</p>
        </div>
      </div>
      <p className="description">{description}</p>
      <a href={projectUrl}>Visit</a>
    </div>
  )
}

export default ProjectTimelineCard
