import React from 'react'
import banner from '../imgs/Group289.png'
import cover from '../imgs/Vector1.png'

const Headder =() =>{
    return(
<div className='header flex'>
    <div className='header-left'>
         <div className='logo '><a href='#'><img className='h-16' src='https://s3-alpha-sig.figma.com/img/e61b/6571/33af368e1471bcf0efe704356a08337d?Expires=1707696000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=PndaR0n15CXJE697DLem4EfPdXtiHsNFXjYAARtWY7WcUj-VLdogWhk5mp0rE8sPPDiihCLnfYKQ9VGenKTqyS5xFVjIMpBhNdDdu4Xuzb7cUglVrDPREnYS7FWeMdzjw6xOvz1eFKtqjbn77OSNTZ2QU9WNuVpQ5Ym1FA6vnlg7c19hErnf0p0Q5yBvWUP5bg95NhlTtFa1GSZmRIGtTuVh6L-MsuVDWqFn9BeDulsUbhxk9j1lkzb6Udh-CmU3EK0PIWYGMYB7oqtBICHXCwFPapIG98gsOKLZgdJhAAMM65K9oAoYqxo6ErNjjMFJGx1-6jIkWI~ljnD1KlcpiQ__'></img></a></div>
    <div className='content'>
        <h1 className='whitespace-pre-line font-bold  text-4xl'>Discover the <br></br><span className='text-red-500'>best</span> food<br></br> and drinks</h1>
        <p>Naturally made Healthcare Products for the better care <br></br> & support of your body.</p>
    </div>

    <div className='btn-container flex items-center'>
    <a href='#'>Explore Now!</a>
    </div>
    </div>
   
     <div className='header-right '>
        <div className='h-1/2 bg-white'>
            <div className='covver-containr'>
                <div className='cvr-btn'><a href='#' className=''>Get in Touch</a></div>
                
            <img src={cover} className='covver'></img>
            </div>
          <img className='h-full w-90 object-cover rounded-bl-lg' src={banner} alt='Banner' />
        </div>
      </div>
    
</div>
    )
}

export default Headder;