import React from 'react';

const Blog = () => {
    return (
        <div>



            <div className='border-4 border-green-900 p-5 m-5'>
                <h1 className='font-bold text-2xl'>Question .1  : What is CORS? </h1>
                <h1 className=' font-extrabold underline  text-red-600'>Answer</h1>

                <p>
                    CORS stands for Cross-Origin Resource Sharing. It allows us to relax the security applied to an API. This is done by bypassing the Access-Control-Allow-Origin headers, which specify which origins can access the API.

                    In other words, CORS is a browser security feature that restricts cross-origin HTTP requests with other servers and specifies which domains access your resources.

                    If you want know more about CORS and it’s policy
                </p>
            </div>


            <div className='border-4 border-green-900 p-5 m-5'>
                <h1 className='font-bold text-2xl'>Question .2  :Why are you using firebase? What other options do you have to implement authentication?</h1>
                <h1 className=' font-extrabold underline  text-red-600'>Answer</h1>
                <p>
                    Firebase provides tools to grow your app and business, for startups & global enterprises. Get your app up and running quickly & securely with fully managed backend infrastructure. Cross-Platform Solutions. Monitor App Performance. Trusted by +200,000 Devs.  <br /><br />

                    <span className='text-bold'>there some another option like firebase.</span> <br />
                    1.Auth.0
                    2.Authy



                </p>
            </div>


            <div className='border-4 border-green-900 p-5 m-5'>
                <h1 className='font-bold text-2xl'>Question .3  : How does the private route work? </h1>
                <h1 className=' font-extrabold underline  text-red-600'>Answer</h1>
                <p>The react private route component renders child components (children) if the user is logged in. If not logged in the user is redirected to the /login page with the return url passed in the location state property.
                </p>
            </div>
            <div className='border-4 border-green-900 p-5 m-5'>
                <h1 className='font-bold text-2xl'>Question .3  : What is Node? How does Node work? </h1>
                <h1 className=' font-extrabold underline  text-red-600'>Answer</h1>
                <p>Node.js is an open-source backend javascript runtime environment. It is a used as backend service where javascript works on the server-side of the application. This way javascript is used on both frontend and backend. Node.js runs on chrome v8 engine which converts javascript code into machine code, it is highly scalable, lightweight, fast, and data-intensive.</p>
            </div>





        </div>
    );
};

export default Blog;