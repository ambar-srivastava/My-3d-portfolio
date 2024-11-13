import React from 'react'

const Footer = () => {
  return (
    <section className='c-space pt-7 pb-3 border-t border-black-300 flex justify-between items-center gap-5 flex-wrap max-w-7xl lg:mx-auto'>
        <div className='text-white-500 flex items-center gap-2'>
            <p>Terms and Conditions</p>
            <p>|</p>
            <p>Privacy Policy</p>
        </div>

        <div className='flex gap-3'>
            <div className=' social-icon'>
                <a href="https://github.com/ambar-srivastava" target="_blank" rel='noreferrer' className='flex justify-center items-center'><img src="/assets/github.svg" alt="github" className='w-1/2 h-1/2' /></a>
            </div>
            <div className=' social-icon'>
                <a href="https://github.com/ambar-srivastava" target="_blank" rel='noreferrer' className='flex justify-center items-center'><img src="/assets/instagram.svg" alt="instagram" className='w-1/2 h-1/2' /></a>
            </div>
            <div className=' social-icon'>
                <a href="https://github.com/ambar-srivastava" target="_blank" rel='noreferrer' className='flex justify-center items-center'><img src="/assets/twitter.svg" alt="twitter" className='w-1/2 h-1/2' /></a>
            </div>
        </div>
        <p className='text-white-500'>&copy; 2024 Ambar Srivastava. All rights reserved.</p>
    </section>
  )
}

export default Footer