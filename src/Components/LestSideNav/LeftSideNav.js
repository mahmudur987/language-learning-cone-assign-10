
import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';

const LeftSideNav = () => {
    const [courses, SetCourses] = useState([]);
    useEffect(() => {
        const url = 'https://language-learning-server.vercel.app/courses'
        fetch(url).then(res => res.json()).then(data => SetCourses(data))
    }, [])



    return (
        <div className='p-5 border border-orange-600 m-2 rounded-lg'>
            <h1 className='text-2xl font-bold'>Our Latest Addition  </h1>

            <div className='font-bold text-small  '>
                {
                    courses.map(course => <li key={course.id} className='hover:text-blue-500'> <Link to={`/courses/${course.id}`}> {course.name} </Link>   </li>)
                }

            </div>
        </div>
    );
};

export default LeftSideNav;