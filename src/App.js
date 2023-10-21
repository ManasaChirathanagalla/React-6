import './App.css';
import insta from './instagramlogo.png';
import mail from './gmail.jpeg';
import github from './githublogo.png';
export default function app(){
  return(
    <div id="id">
      <div id="id1">
        <p>My Own Portfolio</p>
      </div>
      <div id="id2">
        <p><b id="id3">Profile</b></p>
        <p>Hello My name is Chirthanagalla Manasa currently i am pursing in BTech-3rd year in  VIT-AP university</p>
        <p>
          I completed my Intermediate at Sri Chaitanya  College and my SSC at Sri Chaitanya E.M School in Guntur.
        </p>
        <p>
          Outside of academics, I spend most of my time working on exciting projects and staying active on LinkedIn.</p> <p>I believe in the power of technology to make a positive impact on the world.
        </p>
        <p>
          I'm not just about tech – I enjoy hanging out with friends, playing sports, and indulging in my love for music and movies. 🎵🎬
        </p>
      </div>

      <div id="id9">
        <p id="id3"><b>Skills</b></p>
        
        <span id="id6">Java</span>
        <span id="id6">Python</span>
        <span id="id6">DSA</span>
        <span id="id6">HTML & CSS</span>
        <span id="id6">SQL</span>
        <span id="id6">JavaScript</span>
      </div>
      <div id="id10">
        <p id="id12"><b>Projects</b></p>
        
        <span id="id11">Feature Selelction using Anti colony Optimization</span>
        <span id="id11">Colour Classification</span>
        <span id="id11">Home Automation using Gestures</span>
      </div>
      <div id="id4">
        <p id="id3">Contact</p>
        <span id="id5"><a id="id8" href="chirathanagallamanasa@gmail.com">Email</a></span>
        <a href="chiratahanagallamanasa@gmail.com"><img src={mail} alt="Instagram logo" height={50}/></a>
        <span id="id5"><a id="id8" href="https://www.instagram.com/manasa_chirathanagalla/">Instagram</a></span>
        <a href="https://www.instagram.com/manasa_chirathanagalla/"><img src={insta} alt="Instagram logo" height={50}/></a>
        <span id="id5"><a id="id8" href="https://github.com/ManasaChirathanagalla ">Github</a></span>
        <a href="ttps://github.com/ManasaChirathanagalla"><img src={github} alt="Instagram logo" height={50}/></a>
      </div>
    </div>
  );
}