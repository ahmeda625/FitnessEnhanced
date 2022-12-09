import React from 'react';
import "./App.css"
import ProfilePic from './images/man.png';
import Gender from './images/gender.png';
import Age from './images/age.png';
import Location from './images/location.png';
import Experience from './images/customer-review.png';

function App() {


  return (
    <div className="App">
      <div class= "box-container">  
           <div class="box box1">  
                <div class="content">     
                  <img class="roundedPersonalProfile" src={ProfilePic} alt="Profile"/>
                  <h3>Ahmed Alazawy</h3>
                  <img class="profileIcons" src={Gender} alt="gender"/>
                  <text class="iconText">Male</text><br/>
                  <img class="profileIcons" src={Age} alt="age"/>
                  <text class="iconText">21 years old</text><br/>
                  <img class="profileIcons" src={Location} alt="location"/>
                  <text class="iconText">Blanchardstown, Dublin</text><br/>
                  <img class="profileIcons" src={Experience} alt="experience"/>
                  <text class="iconText">Beginner</text>
                  <h3 class="aboutMyself">About Myself</h3>
                  <p class="aboutMyself">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris vitae vehicula enim. Ut tincidunt commodo leo.</p>  
                </div>  
           </div>  
           <div class="box box2">  
                <div class="content">
                  <form>    
                     <h2>Personal Information</h2>  
                     <label for="name">Name</label><br/>
                     <input class="borderlabel" type="text" placeholder="Type your name here" id="name" name="name"/><br/><br/>
                     <label for="gender">Gender</label><br/>
                     <input class="borderlabel" type="radio" name="gender" value="male"/> Male 
                     <input class="borderlabel" type="radio" name="gender" value="female"/> Female
                     <br/><br/><label for="dob">Date of Birth</label><br/>
                     <input class="borderlabel" type="date" id="dob" name="dob"/><br/><br/>
                     <label for="location">Location</label><br/>
                     <input class="borderlabel" type="text" placeholder="Blanchardstown, Dublin" id="location" name="location"/><br/><br/>
                     <label for="experience">Experience</label><br/>
                     <select class="borderlabel" name="experience" id="experience">
                        <option value="beginner">Beginner</option>
                        <option value="intermediate">Intermediate</option>
                        <option value="experienced">Experienced</option>
                     </select>
                     <br/><br/><label for="aboutMyself">About Myself</label><br/>
                     <textarea class="borderlabel" id="aboutMyself" name="aboutMyself"></textarea><br/>
                     <button type="save" value="Save">Save</button>
                  </form> 
                </div>  
           </div>  
           <div class="box box3">  
                <div class="content">  
                     <h2>Sports & Fitness</h2>
                  <form class="checkBoxes">
                     <div class="threeOne"> 
                     <input type="checkbox" id="running" name="running"/>
                     <label for="running">Running</label>
                     <input type="checkbox" id="swimming" name="swimming"/>
                     <label for="swimming">Swimming</label> 
                     <input type="checkbox" id="cycling" name="cycling"/>
                     <label for="cycling">Cycling</label>
                     </div>
                     <div class="threeTwo">
                     <input type="checkbox" id="gym" name="gym"/>
                     <label for="gym">Gym</label>
                     <input type="checkbox" id="volleyball" name="volleyball"/>
                     <label for="volleyball">Volleyball</label>
                     <input type="checkbox" id="walking" name="walking"/>
                     <label for="walking">Walking</label>
                     </div>
                     <div class="threeThree">
                     <input type="checkbox" id="tennis" name="tennis"/>
                     <label for="tennis">Tennis</label>
                     <input type="checkbox" id="yoga" name="yoga"/>
                     <label for="yoga">Yoga</label>
                     <input type="checkbox" id="football" name="football"/>
                     <label for="football">Football</label>
                     </div>
                     <div class="threeFour">
                     <input type="checkbox" id="boxing" name="boxing"/>
                     <label for="boxing">Boxing</label>
                     <input type="checkbox" id="hiking" name="hiking"/>
                     <label for="hiking">Hiking</label>
                     <input type="checkbox" id="camping" name="camping"/>
                     <label for="camping">Camping</label>
                     </div><br/><br/><br/>
                     <button id="save" type="save" value="Save">Save</button>
                  </form>
                </div>  
           </div>  
      </div>  
  </div>
  );
}

export default App;
