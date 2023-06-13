const Landing = () => {
  return (
    <>
      <div className='heroSection'>
        <div class='container'>
          <div class='row'>
            <div class='col-sm' id='leftBlock'>
              <p className='topicText'>Techie Sleuths' 23</p>
              <p className='detailsText'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Debitis, rem veniam iste sunt ea dolorum voluptatum deserunt
                sint voluptas dolor ut cum nulla nesciunt impedit repellendus
                quasi voluptatem odit vitae.Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Debitis, rem veniam iste sunt ea dolorum voluptatum deserunt
                sint voluptas dolor ut cum nulla nesciunt impedit repellendus
                quasi voluptatem odit vitae.
              </p>
              <div style={{marginTop:40}}> 
                <button class="buttonRegister" role="button">Register Now</button>
              </div>
             
            </div>
            <div class='col-sm' id='rightBlock'>
            <img className="heroImg" src="hero.png" alt="Hero Image"/> 
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Landing;
