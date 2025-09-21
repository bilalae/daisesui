import React from 'react'
const Hero = () => {
  return (
    <div className='hero bg-base-200 min-h-screen px-4 flex flex-col justify-center items-center'>
        <div className='hero-content text-center flex-col lg:flex-row gap-10 mt-30 w-full max-w-5xl'>
            <img src="https://images.genius.com/76882f93c3c33fecb658b1834cadf658.593x593x1.png" alt="" className='rounded-2xl w-80'/>
            <div>

            <h1 className='text-3xl font-bold'>
                Welcome to daisies
            </h1>
            <p className='py-6 text-lg'>A simple project to test out daisyUI themes with React and Vite</p>
            <button className='btn btn-primary'>Get Started</button>
            </div>
        </div>
        <div className='divider divider-primary w-1/2 mt-20 m-auto'>Theme Comparison</div>

        
        <figure className='diff lg:aspect-video aspect-square w-full max-w-4xl rounded-xl mt-8'>
            <div className='diff-item-1' role='img' tabIndex={0}>
                <img src="https://i.scdn.co/image/ab67616d0000b273b2d278666b1150e827de324d" alt="" />
            </div>
            <div className='diff-item-2' role='img'>
                <img src="https://i.scdn.co/image/ab67616d0000b273a958d093e94944dd0e7258b2" alt="" />
            </div>
            <div className='diff-resizer'></div>
        </figure>
        
    </div>
  )
}

export default Hero