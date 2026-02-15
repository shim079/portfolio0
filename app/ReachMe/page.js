import React from 'react'
import CircularText from './CircularText';
import TextPressure from './TextPressure';

const page = () => {
  return (
     <div className="relative min-h-80 w-full bg-[#000000] bg-[linear-gradient(179deg,rgba(0,_0,_0,_1)_0%,_rgba(110,_0,_79,_0.71)_100%)] flex items-center justify-center text-white overflow-x-hidden">
      <div className=" font-sans font-light px-10 py-50">

      
     
<a href='./Contact'>
<CircularText
  text="GET IN TOUCH "
  onHover="speedUp"
  spinDuration={20}
  className="custom-class"
/>
</a>
    </div>
    </div>
  )
}

export default page