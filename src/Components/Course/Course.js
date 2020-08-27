import React from 'react';
import fakeData from '../../fakeData';
import { useState } from 'react';
import './Course.css';
import Courseitem from '../Courseitem/Courseitem';
import Cart from '../Cart/Cart';


const Course = () => {
    const courses = fakeData.slice(0,12);
    //const [courses, setCourses] = useState(first12);
    const [cart, setCart] = useState([]);

    const enrollCourse = (item) =>{
        const newCart =[...cart, item];
        setCart(newCart);
        console.log('add', item);
    }
    
    return (
        <div className="course-area">
            <div className="course-data">
                {
                    courses.map(course => <Courseitem course={course} enrollCourse={enrollCourse}></Courseitem>)
                }
                
            </div>
            <div className="cart-area">
                
                <Cart cart={cart}></Cart>
            </div>
            
        </div>
    );
};

export default Course;