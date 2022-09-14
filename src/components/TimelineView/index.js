import {Chrono} from 'react-chrono'

import CourseTimelineCard from '../CourseTimelineCard'
import ProjectTimelineCard from '../ProjectTimelineCard'
import './index.css'

const TimelineView = props => {
  const {timelineItemsList} = props

  const renderTimelineCard = item => {
    if (item.categoryId === 'PROJECT') {
      return <ProjectTimelineCard key={item.id} projectDetails={item} />
    }
    return <CourseTimelineCard key={item.id} courseDetails={item} />
  }
  return (
    <div className="bg-container">
      <h1 className="heading">MY JOURNEY OF CCBP 4.0</h1>
      <div className="all-details-container">
        <div className="chrono-container">
          <Chrono
            theme={{
              secondary: 'white',
            }}
            items={timelineItemsList}
            mode="VERTICAL_ALTERNATING"
          >
            {timelineItemsList.map(eachItem => renderTimelineCard(eachItem))}
          </Chrono>
        </div>
      </div>
    </div>
  )
}

export default TimelineView
