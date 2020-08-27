import React from 'react';
import './Courseitem.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCalendar } from '@fortawesome/free-solid-svg-icons'

const Courseitem = (props) => {
    const {name, instructor, time, price} = props.course;
    return (
        <div className="course-item">
            <h3> {name}</h3>
            <h5>Instructor: {instructor}</h5>
            <p><FontAwesomeIcon icon={faCalendar} /> Ended- {time}</p>
            <p>Price: {price} $</p>
            <button className="btn btn-success" onClick={()=>props.enrollCourse(props.course)}> Enroll Now</button>            
        </div>
    );
};

export default Courseitem;