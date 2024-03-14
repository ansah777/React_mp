import React from 'react'
import { Link } from 'react-router-dom'


function Landing() {
  return (
    <>
      <div>
        <div className='w-100 d-flex justify-content-center align-items-center' style={{ height: '80vh' }}>
          <div className='row p-5 shadow'>
            <div className='col d-flex flex-column justify-content-center'>
              <h1 >Media Player 2024</h1>
              <p>Media players provide most or all of the following features. They allow users to organize their multimedia collection,
                play songs and movies, rip CD tracks to MP3 and other audio formats, burn CDs, listen to Internet radio, download content
                from online music stores and stream content from the Internet.</p>
              <div>
                <Link to={'/dash'} className='btn btn-success'>Explore</Link>
              </div>

            </div>
            <div className='col'>
              <img src='https://wartonnosound.com/wp-content/uploads/2023/04/Wartonno-Sound-Blog-Banner-Music-Art-Fashion-and-Social-Media-2.jpg'
                className='img-fluid shadow' alt="img" />
            </div>

          </div>
        </div>
        <div className='mt-3 p-5'>
          <h2 className='text-center'>Features</h2>
          <div className='d-flex mt-2 flex-row justify-content-between'>


            <div class="card" style={{ width: ' 18rem' }}>
              <img src="https://i.pinimg.com/originals/56/74/51/5674515621e872310e356243db78b14f.gif" style={{ height: '300px' }} className="card-img-top" alt="..." />
              <div class="card-body">
                <h5 class="card-title">Upload Videos</h5>
                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <a href="#" class="btn btn-primary">Go somewhere</a>
              </div>
            </div>

            <div class="card" style={{ width: ' 18rem' }}>
              <img src="https://miro.medium.com/v2/resize:fit:1358/1*8lcdOkw8uXu3k73Q1rwt6Q.gif"
                style={{ height: '300px' }} className="card-img-top" alt="..." />
              <div class="card-body">
                <h5 class="card-title">Watch videos</h5>
                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <a href="#" class="btn btn-primary">Go somewhere</a>
              </div>
            </div>

            <div class="card" style={{ width: ' 18rem' }}>
              <img src="https://i.gifer.com/F1Wp.gif" style={{ height: '300px' }} className="card-img-top" alt="..." />
              <div class="card-body">
                <h5 class="card-title"> View History</h5>
                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <a href="#" class="btn btn-primary">Go somewhere</a>
              </div>
            </div>




          </div>
            <div className='mt-5 row'>
              <div className='col'>
                <h4>Simple Fast and Secure</h4>
                <p>simple fast secure</p>
              </div>
              <div className='col'>
              <iframe width="679" height="382" src="https://www.youtube.com/embed/fCVm5U2ob8U" title="12K HDR Video ULTRA HD 240 FPS Dolby Vision - Dolby Atmos" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
            </div>
            </div>

            
        </div>

     </div>
      </>
      )
}

      export default Landing
