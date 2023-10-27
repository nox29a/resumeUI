import React, { useState, useEffect } from "react";


const About = () => {
  const [number, setNumber] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      // Zwiększaj liczbę o 1 przy każdym odświeżeniu
      setNumber((prevNumber) => prevNumber + 1);
    }, 10); // Aktualizuj co sekundę

    // Oczyść interwał, aby uniknąć wycieków pamięci
    return () => {
      clearInterval(interval);
    };
  }, []);
  return (
  <div id="About" className=' h-fit bg-black rounded-3xl -mt-5 p-1 pb-12  ">'>
    <h1 className='lg:p-52 p-20 flex justify-center top-0 text-white text-4xl'>Title </h1>
    <section className='bg-third m-5 relative rounded-3xl h-full'>
    <div className='prose'>
      
      <h1 className='p-10 flex justify-center'>
      <span>{number}</span>
       </h1>
    </div>
    </section>


  </div>
  )
};

export default About;
