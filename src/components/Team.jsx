import React from 'react'
import "../Css/Team.css";


function Team() {
  return (
    <><h3 class="expert" id="team">Meet Our Experts</h3><div class="expertpanel">
      <div class="experts">
        <div class="expertimage1"></div>
        <p class="expertname">Sara Zones</p>
        <p class="expertlead">Co-Lead Chef</p>
        <p class="expertdesc">As a roaster we search the world over to establish relationships with  great coffees.</p>
      </div>
      <div class="experts">
        <div class="expertimage2"></div>
        <p class="expertname">Selena Zones</p>
        <p class="expertlead">Lead Chef</p>
        <p class="expertdesc">As a roaster we search the world over to establish relationships with great farmers cultivating great coffees.</p>
      </div>
      <div class="experts">
        <div class="expertimage3"></div>
        <p class="expertname">Taylor Zones</p>
        <p class="expertlead">Co-Lead Chef</p>
        <p class="expertdesc">As a roaster we search the world over to establish relationships with   great coffees.</p>
      </div>
    </div></>
  )
}

export default Team