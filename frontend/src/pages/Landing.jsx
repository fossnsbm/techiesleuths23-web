import { useNavigate } from "react-router-dom";

const Landing = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className='heroSection'>
        <div class='container'>
          <div class='row'>
            <div class='col-sm' id='leftBlock'>
              <p className='topicText'>Techie Sleuths' 23</p>
              <p className='detailsText'>
                Embark on a thrilling pursuit, immersing yourself in Tintin's
                captivating world. Explore enchanting destinations, uncover
                hidden clues, and unravel the intricate mystery. As you piece
                together the puzzle, the truth emerges, leading to a revelation
                of great importance. Get ready for an extraordinary adventure
                where exotic wonders and masterful deduction come together.
              </p>
              <div style={{ marginTop: 40 }}>
                <button
                  class='buttonRegister'
                  role='button'
                  disabled={true}
                  onClick={() => {
                    navigate("/register");
                  }}
                >
                  Registration Closed
                </button>
              </div>
            </div>
            <div class='col-sm' id='rightBlock'>
              <img className='heroImg' src='hero.png' alt='Hero Image' />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Landing;
