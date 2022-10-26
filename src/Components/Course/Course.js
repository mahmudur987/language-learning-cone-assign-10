import React from 'react';
import { Link } from 'react-router-dom';

const Course = ({ course }) => {

    const { name, picture, price, company, id } = course


    // console.log(course)
    return (
        <div className="card card-compact  bg-green-100 shadow-xl">
            <figure><img className='h-48 w-full' src={picture} alt="Shoes" /></figure>
            <div className="card-body text-start">
                <h2 className="card-title font-extrabold text-emerald-800">{name}</h2>
                <p> Instractor : {company} </p>
                <p> price : {price} $ </p>
                <div className="card-actions justify-end">

                    <Link to={`/courses/${id}`}><button className="btn btn-info font-bold hover:bg-slate-500">Details</button> </Link>
                </div>
            </div>
        </div>
    );
};

export default Course;