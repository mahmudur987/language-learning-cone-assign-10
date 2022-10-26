import React from 'react';

const Blog = () => {
    return (
        <div>



            <div className='border-4 border-green-900 p-5 m-5'>
                <h1 className='font-bold text-2xl'>Question .1  : What is the purpose of react js? </h1>
                <h1 className=' font-extrabold underline  text-red-600'>Answer</h1>

                <p>
                    The React.js framework is an open-source JavaScript framework and library developed by Facebook. It’s used for building interactive user interfaces and web applications quickly and efficiently with significantly less code than you would with vanilla JavaScript.

                    In React, you develop your applications by creating reusable components that you can think of as independent Lego blocks. These components are individual pieces of a final interface, which, when assembled, form the application’s entire user interface.
                </p>
            </div>


            <div className='border-4 border-green-900 p-5 m-5'>
                <h1 className='font-bold text-2xl'>Question .2  : what is useref hook in react js?</h1>
                <h1 className=' font-extrabold underline  text-red-600'>Answer</h1>
                <p>
                    The useRef Hook allows you to persist values between renders.

                    It can be used to store a mutable value that does not cause a re-render when updated.

                    It can be used to access a DOM element directly.


                </p>
            </div>


            <div className='border-4 border-green-900 p-5 m-5'>
                <h1 className='font-bold text-2xl'>Question .3  : How does contex API works? </h1>
                <h1 className=' font-extrabold underline  text-red-600'>Answer</h1>
                <p>The React Context API is a way for a React app to effectively produce global variables that can be passed around. This is the alternative to "prop drilling" or moving props from grandparent to child to parent, and so on. Context is also touted as an easier, lighter approach to state management using Redux.

                    Context API is a (kind of) new feature added in version 16.3 of React that allows one to share state across the entire app (or part of it) lightly and with ease.
                </p>
            </div>





        </div>
    );
};

export default Blog;