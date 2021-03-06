

import React, { Component } from 'react';
import ollyrhae from '../../assets/ollyrhae.jpg';
import './Home.css'



class Home extends Component {


   componentDidMount = () => {
     this.props.fetchAllPets();
   }


  render() {
    return (
      <div>
      <div>
        <div className="Main-Home">
          <div className="Wrapper-Home">
           <img src={ollyrhae} alt="pet photos" ALIGN="left"/>
              <div className="About-Home">
                <h1>
                  Pawsome Animal Rescue
                </h1>
                  <h4>
                  Pawsome Pet Adoptions" is based on Long Island, NY. Its purpose is to find
  animal-loving, helpful, caring, and responsible fosters, adopters, friends,
  and forever homes for all pets in need.
                  </h4>
                  <h4>
  We stem from an up and coming rescue "Pawsome Animal Rescue" and we understand the desperate need to share each
  animal, their story, and give them the exposure they need to find the right
  family.
                  </h4>
                  <h4>
   Our goals are advocacy, outreach, education, rescue, and adoptions
  for ANY and ALL animals in need. We help people with pets and all animals in
  tough situations.
                  </h4>
                  <h4>
  Please post, cross post and share, if we all do our part
  we can be the voice that they don't have and help them find their happily
  ever afters.
                  </h4>
                </div>
              </div>
         </div>
      </div>
      </div>
    );
  }
}

export default Home;
