import React from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init();
const PDF_RESUME_URL = 'https://nox29a.pythonanywhere.com/static/assets/img/Łukasz-Adamczyk_CV.pdf';
const Contact = () => {
  const downloadFileAtURL = (url) => {
    fetch(url).then(response=>response.blob()).then(blob => {
      const blobURL = window.URL.createObjectURL(new Blob([blob]));
      const fileName = url.split('/').pop();
      const aTag = document.createElement('a');
      aTag.href = blobURL;
      aTag.setAttribute('download', fileName);
      document.body.appendChild(aTag);
      aTag.click();
      aTag.remove();
  })
}
  const lookAtFileAtURL = (url) => {
    const fileName = url.split('/').pop();
    const aTag = document.createElement('a');
    aTag.href = url;
    aTag.setAttribute('download', fileName);
    document.body.appendChild(aTag);
    aTag.click();
    aTag.remove();
  }
  return (
    <section className="contact-section">
    <div className='flex place-items-center'>
      <div className='container'>
        <div className='text-[30px] text-center p-8 gap-4 mt-20'>
          <p className='mb-4'>You can contact me via mail:</p>
          <p className=' mb-12 text-sm sm:text-2xl lg:96 sm:mx-5 md:mx-32  p-4 bg-purple-400 hover:bg-blue-700 text-white  border-2 border-purple-700 rounded-full'>adamczyk29a@interia.pl</p>
          <p className='mb-4'>My CV:</p>
          <button className='bg-green-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded-full mx-2' onClick={()=>{downloadFileAtURL(PDF_RESUME_URL)}}>DOWNLOAD</button>
          <button className='bg-green-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded-full mx-2' onClick={()=>{lookAtFileAtURL(PDF_RESUME_URL)}}>VIEW</button>
        </div>
      </div>
    </div>
    </section>
  )
};

export default Contact;
