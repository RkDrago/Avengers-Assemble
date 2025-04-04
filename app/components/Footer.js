import React from 'react'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <>
      <div className="h-[3.1rem] w-[100svw] absolute bottom-0 overflow-hidden z-20">
        <div className='designer-pentagon text-white text-center pt-11 pb-3 bg-[#4CAF50] m-auto'>
          <h1 className='scale-y-[-1] text-black font-thin sans'>@{currentYear} Designed with ❤️ by RkDrago</h1> 
        </div>
      </div>
    </>
  )
}
export default Footer
