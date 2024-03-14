import React from 'react'
import { Link } from 'react-router-dom' 
function Footer() {
  return (
    <>
      <div className='w-100 d-flex flex-column justify-content-center bg-light'>
        <div className='row p-5'>
          <div className='col'>
            <h4>Media Player 2024</h4>
            <p style={{ textAlign: 'justify' }}>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
             Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.
             </p>
          </div>
          <div className='col'>
            <h4>Links</h4>
            <Link to={'/'}style={{color:'white', textDecoration:'none'}}>Landing</Link><br />
            <Link to={'/dash'}style={{color:'white',textDecoration:'none'}}>Dashboard</Link><br />
            <Link to={'/his'}style={{color:'white',textDecoration:'none'}}>History</Link>
          </div>
          <div className='col'>
            <h4>Reference</h4>
            <a href="https://getbootstrap.com/" target='_blank'style={{color:'white',textDecoration:'none'}}>Bootstrap</a><br />
            <a href="https://react-bootstrap.netlify.app/" target='_blank'style={{color:'white',textDecoration:'none'}}>React-Bootstrap</a><br />
            <a href="https://react.dev/" target='_blank'style={{color:'white',textDecoration:'none'}}>React</a>
          </div>

        </div>
        <div className='text-center'>
        <p> &copy; Meadia Player</p>
        </div>
       
      </div>
    </>

  )
}

export default Footer
