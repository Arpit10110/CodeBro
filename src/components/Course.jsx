import React from 'react'
import "../style/Course.css"
const Course = () => {
  return (
    <>
    <div className="course">
    <div>
      <h4 className='courseHead'>Start learning</h4>
      <p className='courseCont'>
        Become a Fullstack Web developer by learning the basuc HTML , CSS , JavaScript and then go for the advance part in which you can learn the React.js and for the backend you can go for the Node.js and for data base go for the MongodB...
      </p>
    </div>
    <iframe className='courseVideo'  src="https://www.youtube.com/embed/ZxKM3DCV2kE?si=yadG53TuyCg4tTCx" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
    </div>
    </>
  )
}

export default Course