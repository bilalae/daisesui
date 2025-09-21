import React from 'react'

const Form = () => {
  return (
    <div>
        <div className='hero bg-base-200 flex flex-col lg:flex-row-reverse px-4 justify-center items-center py-40 gap-1 p-4'>
            <div className=' text-lg text-base-content px-4 max-w-2xl'>
                <div className='text-center font-bold text-3xl lg:text-left lg:text-4xl'>
                    Subscribe to our newsletter to get the latest updates.

                </div>

                <div className='mt-2 text-sm opacity-70 text-center lg:text-left'>
                    We respect your privacy. Unsubscribe at any time.   

                </div>

            </div>

            <div className='hero-content text-center flex-col mt-4 max-w-5xl '>
  
            <div className='w-full text-center'>
            <label className="input validator input-secondary input-md">
  <svg className="h-[1em] opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
    <g
      strokeLinejoin="round"
      strokeLinecap="round"
      strokeWidth="2.5"
      fill="none"
      stroke="currentColor"
      >
      <rect width="20" height="16" x="2" y="4" rx="2"></rect>
      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
    </g>
  </svg>
  <input type="email" placeholder="mail@site.com" required />
</label>
<div className="validator-hint hidden">Enter valid email address</div>
           </div>
           <div className='w-full'>
              <button className='btn btn-secondary btn-wide'>Subscribe</button>
           </div>
            </div>

        </div>
    </div>
  )
}

export default Form