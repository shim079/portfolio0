import React from 'react'


const Content = () => {
  return (
    <div className='bg-black py-8 px-12 h-full w-full flex flex-col justify-between'>
        <Section1 />
        <Section2 />
    </div>
  )
}

const Section1 = () => {
    return (
        <div>
            <Nav />
        </div>
    )
}

const Section2 = () => {
    return (
        <div className='flex justify-between items-end '>
            <h1 className='text-[11vw] leading-[0.8] mt-10'>Web & App Developer</h1>
            <p>©Sh S</p>
        </div>
    )
}

const Nav = () => {
    return (
        <div className='flex shrink-0 gap-20'>
            <div className='flex flex-col gap-2'>
                <h3 className='mb-10 uppercase text-[#ffffff80]'>About</h3>
                <a href='/'>Home</a>
                <a href='./Project'>Projects</a>
                <a href='/Services'>Services</a>
                <a href='/Contact'>Contact Me</a>
            </div>
            <div className='flex flex-col gap-2'>
                <h3 className='mb-10 uppercase text-[#ffffff80]'>Education</h3>
                <p>Data Analysis</p>
                <p>Web development</p>
                <p>Graohic Design</p>
                <p>Information Security</p>
            </div>
        </div>
  )
}

export default Content
