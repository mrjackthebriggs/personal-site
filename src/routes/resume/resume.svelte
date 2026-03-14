<script lang="ts">
  import { fly } from "svelte/transition";
	import html2pdf from "html2pdf.js";

  let resumeElement:HTMLElement;

  function toPDF(){
    let printOpts = {
    filename: 'Jack-Briggs-Resume.pdf',
    image: { type: 'jpeg' as const, quality: 1 },
    pagebreak: { mode: ['avoid-all', 'css', 'legacy'] }
  }

  if (resumeElement !== null) {
    html2pdf().set(printOpts).from(resumeElement).save();
  }
  }
</script>

<style>
*{
  padding: 0px 0px;
  font-family: Noto-Sans,sans-serif;
  font-size: 1.8ch;
}
h1, h2{
  font-family: Special-Elite, Arial;
  font-size: 20px;
}
ul{padding-left: 20px;}
h3, h4{
  font-family: Arial;
}
h1{font-size: 4.5ch;}
h2{font-size: 2.7ch;}
h3{font-size: 2ch;}
h4{font-size: 1vw;}
a{
  color: rgb(192, 41, 41);
  text-decoration:none;
}
a:hover{
  font-weight: 600;
}
button{
  margin: 0px 40% 20px 40%;
  width: 20vw;
  height:70px;
  align-self: center;
  background-color: red;
  color:white;
  border: 2px solid rgb(73, 73, 73);
  border-radius: 5px;
}
button:hover{
  background-color: rgb(255, 69, 69);
}
button:active{
  background-color: rgb(255, 115, 115);
  border: 4px solid black;
  font-weight:700;
}
.tiltpage{
  rotate:0.9deg; 
  margin:50px;
  box-shadow: 5px 5px 8px rgb(60, 60, 60);
  border:2px rgb(0, 0, 0) solid;
  border-radius: 3px;
  right:100px;
  margin:0px 60px;
}
.resbody{
  padding:20px 50px 40px 50px;
}
.resdiv{
  padding:20px 20px 20px 20px;
  margin-top:20px;
}
.linebreak{
  border-top: 2px rgb(141, 141, 141) solid;
}
.smalltext{
  font-size: 14px;
}
</style>

<button onclick={() => toPDF()}>Download My Resume</button>

<div
  class="tiltpage"
  in:fly={{y:25, x:200,duration:1200, delay:200}}
>
  <div class="resbody"
    bind:this={resumeElement}
  >
    <div class="resdiv">
      <h1>Jack Briggs</h1>
      <span>
        <a href="tel:0412453957">0412 453 957</a> | 
        <a href="mailto:jack.brig@proton.me">E-mail</a> | 
        <a href="https://www.linkedin.com/in/mrjackthebriggs/" target="_blank">LinkedIn</a> | 
        <a href="https://github.com/mrjackthebriggs" target="_blank">GitHub</a>
      </span>
    </div>
    <div class="resdiv linebreak">
      <h2>PROFILE:</h2>
      <p>
      Software engineer with a Bachelor of Computer Science specialising in software engineering
      from ECU. Professional experience in software development, developing Python-based crane
      monitoring systems, LiDAR data processing, data visualisation, and cross-platform mobile
      application development using Flutter. Enthusiastic about being involved with the development
      of cutting-edge technology. Recognised as a creative thinker who is well-natured and easy to
      get along with. Always open and willing to consider new ideas, points of view, and approaches.
      </p>
    </div>
    <div class="resdiv linebreak">
      <h2>EDUCATION:</h2>
      <p>
      <strong>Bachelor of Computer Science Major in Software Engineering</strong><br>
      <span class="smalltext">Edith Cowan University</span><br>
      <i class="smalltext">Graduated on 02/2025</i><br>
      <i class="smalltext">Course GPA – 3.77</i>
      </p>
    </div>
    <div class="resdiv linebreak">
      <h2>ADDITIONAL CERTIFICATIONS:</h2>
      <p>
      <strong>Learn Intermediate Python 3 Course</strong><br>
      <span class="smalltext">Codecademy</span><br>
      <i class="smalltext">Finished on 06/2024</i>
      </p>
      <p>
      <strong>Responsive Web Design</strong><br>
      <span class="smalltext">freeCodeCamp</span><br>
      <i class="smalltext">Finished on 01/2025</i>
      </p>
      <p>
      <strong>JavaScript</strong><br>
      <span class="smalltext">freeCodeCamp</span><br>
      <i class="smalltext">Finished on 02/2026</i>
      </p>
    </div>
    <div class="resdiv linebreak">
      <h2>SKILLS SUMMARY:</h2>
      <h3>Technical Skills:</h3>
      <p>
      <strong>Programming Languages:</strong> Python, Dart, Rust, C#, C++, JavaScript, HTML/CSS <br>
      <strong>Frameworks & Libraries:</strong> NumPy, PySide6, OpenGL, Flutter, Firebase, Unity, Godot,
      Svelte, React <br>
      <strong>Tools & Technologies:</strong> Git, Linux, PostgreSQL, Docker, Agile/Scrum <br>
      <strong>Specialised:</strong> LiDAR data processing, embedded systems (Arduino, Raspberry Pi) <br>
      <strong>Soft Skills:</strong> Problem Solving, Team Collaboration, Communication, Adaptability, Time
      Management <br>
      </p>
    </div>
    <div class="resdiv linebreak">
      <h2>EMPLOYMENT:</h2>
      <h3>Graduate Engineer (Progressed from internship Aug 2024)</h3>
      <p><i>Date: Nov 2024 to Jan 2026</i></p>
      <p><strong>AMLab</strong></p>
      <span>Key responsibilities:</span>
      <ul>
      <li>Monitor crane system statuses on PNC daily, repairing and reporting any faults to
      operating team</li>
      <li>Manage and maintain live alert notification system</li>
      <li>Write Python code to improve crane system software, occasionally involving LiDAR data.</li>
      <li>Make displays using Python and using the Pyside6 or OpenGL visual libraries.</li>
      <li>Built status/alert notification cross-platform mobile application using Flutter framework</li>
      <li>Utilised version control systems (Git) for collaborative development</li>
      </ul>
      <br>
      <h3>Labourer</h3>
      <p><i>Date: Nov 2017 to Nov 2024</i></p>
      <p><strong>Cabling Network Solutions</strong></p>
      <span>Key responsibilities:</span>
      <ul>
      <li>Installed and tested Ethernet</li>
      <li>Installed fibreoptic and accessories for NBN</li>
      <li>Assisted in NBN Node integration as boots on ground</li>
      <li>Installation of basic electrical equipment, under supervision</li>
      <li>Logistics, handling of goods to site using a 2-ton truck</li>
      </ul>
      <span>Previous experience in retail and construction sectors (2010-2017)</span>
    </div>
    <div class="resdiv linebreak">
      <h2>PROJECTS</h2>
      <ul>
      <li>Arduino Pong Game: Designed and built a Pong game on Arduino microcontroller with
      custom potentiometer controllers and real-time scorekeeping, demonstrating
      embedded systems and hardware interface skills.</li>
      <li>Unity Game Development: Composed music and programmed audio systems for a
      Unity-based game with published Steam demo.</li>
      <li>Game Jam Entry: Created 'Diec Run 2' in a week-long game jam (2nd place overall) using
      C#, GDScript, and Godot engine.</li>
      </ul>
    </div>
    <div class="resdiv linebreak">
      <h2>ADDITIONAL INFORMATION:</h2>
      <ul>
      <li>Location: Perth, Western Australia</li>
      <li>Driver’s Licence</li>
      <li>Australian Citizen</li>
      <li>Construction qualifications:</li>
      <li>White Card</li>
      <li>High Risk Work Licence</li>
      <li>Elevated work platforms</li>
      <li>Scissor lift ticket</li>
      </ul>
    </div>
    <div class="resdiv linebreak">
      <h2>REFEREES:</h2>
      <span>Available on request from:</span>
      <ul>
      <li>Jawn Looi - <i>Currently Head of Operations at AMLab</i></li>
      <li>Vaughan Miller - <i>Currently Field Supervisor at Enerven. Was Senior Manager at Cabling Network Solutions when worked with.</i></li>
      <li>Shane Koch - <i>Currently Senior Manager / Head of Electrical Operations at Cabling Network Solutions</i></li>
      </ul>
    </div>
  </div>
</div>