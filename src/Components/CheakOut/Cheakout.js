import React from 'react';
import { useContext } from 'react';
import { authContext } from '../../UserContext/UserContext';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';
import { FaDownload } from 'react-icons/fa';



const Cheakout = () => {
    const { cart, user } = useContext(authContext);
    const downloadpdf = () => {
        html2canvas(document.getElementById('premmium')).then(canvas => {

            const imgData = canvas.toDataURL('image/png');
            const pdf = new jsPDF();
            pdf.addImage(imgData, 'PNG', 0, 0);
            pdf.save("download.pdf");
        });
    }
    return (
        <div id='premmium' className='p-4 border border-blue-600 m-5 rounded-lg grid md:grid-cols-2 relative'>
            <div>
                <h1 className='text-3xl text-center font-extrabold text-green-700'>Premmium Access </h1>
                <h1 className='text-2xl font-bold m-5 text-rose-700 '> Course Name :{cart.name}</h1>
                <h1 className='text-xl font-bold m-5 '> Course title :{cart.title}</h1>
                <h1 className='text-xl font-bold m-5 '> Group Name :{cart.company}</h1>
                <h1 className='text-xl font-bold m-5 '> Phone number :{cart.phone}</h1>
                <h1 className='text-xl font-bold m-5 '> Price:{cart.price}</h1>

                <button className='btn btn-info font-bold'>Confirm</button>
            </div>
            <div>
                <h1 className='text-xl text-center font-extrabold '>Student name : <span className='text-2xl font-mono'>{user?.displayName}</span> </h1>
                <h1 className='text-xl text-center font-extrabold '>Student Email : <span className='text-2xl font-mono'>{user?.email}</span> </h1>


                <button onClick={downloadpdf} className='btn btn-info font-bold absolute bottom-0 right-1'> <FaDownload></FaDownload>  </button>
            </div>





        </div>
    );
};

export default Cheakout;