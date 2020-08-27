import React from 'react';
import './Header.css';

const Header = () => {
    return (
        <div className="header">
            <h1>Welcome to Modern Technology Courses</h1>
            <nav>
                <a href="/home">Home</a>
                <a href="/newcourse">New Courses</a>
                <a href="/popularcourse">Popular Courses</a>
                <a href="/enrollcourse">Enroll Courses</a>
            </nav>
        </div>
    );
};

export default Header;