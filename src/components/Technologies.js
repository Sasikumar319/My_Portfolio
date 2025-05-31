import React from 'react';
import './Home.css'; 
import {
  SiTypescript,
  SiJavascript,
  SiMysql,
  SiReact,
  SiHtml5,
  SiCss3,
  SiKotlin,
  SiXcode
} from "react-icons/si";
function Technologies() {
  return (
    <div className="overallDiv">
  
  <div className="projectsView">
        <p className="ProjectsText">Technologies</p>
        <p className="summary">
          Discover my skills and experience in various technologies through my
          personal website, where I share insights and innovative solutions.
        </p>
        <div className="techContainer">
          <div className="techCard">
          <div style={{ display: 'flex', flexDirection: 'row',  alignItems: 'center' , justifyContent:'center', marginTop:20, marginBottom:10}}>
 
<SiReact style={{ color: '#61DAFB', marginRight: 8, width: 30, height: 30  }} />
            <p className="techTitle">React JS</p>
            </div>
            <p className="techDesc">
              Experienced in building dynamic web applications using React JS
              and component-based architecture.
            </p>
          </div>
 
          <div className="techCard">
          <div style={{ display: 'flex', flexDirection: 'row',  alignItems: 'center' , justifyContent:'center', marginTop:20, marginBottom:10}}>
 
          <SiReact style={{ color: '#61DAFB', marginRight: 8, width: 30, height: 30  }} />
 
            <p className="techTitle">React Native</p>
            </div>
            <p className="techDesc">
              Developed cross-platform mobile apps using React Native, ensuring
              native performance and seamless user experiences.
            </p>
          </div>
 
          <div className="techCard">
          <div style={{ display: 'flex', flexDirection: 'row',  alignItems: 'center' , justifyContent:'center', marginTop:20, marginBottom:10}}>
          <SiHtml5 style={{ color: '#e34c26', marginRight: 6, width: 30, height: 30 }} />
  <SiCss3 style={{ color: '#1572b6', marginRight: 8, width: 30, height: 30 }} />
  <p className="techTitle" style={{ margin: 0 }}>
    HTML & CSS
  </p>
</div>
 
            <p className="techDesc">
    Solid foundation in HTML & CSS for structuring and styling web pages with responsive and accessible designs.
  </p>
</div>
        </div>
        <div className="techContainer">
  <div className="techCard">
  <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'center', marginTop: 20, marginBottom: 10 }}>
  <SiTypescript style={{ color: '#3178c6', marginRight: 8, width: 30, height: 30  }} />
 
    <p className="techTitle">
      TypeScript & JavaScript
    </p>
    </div>
    <p className="techDesc">
      Proficient in JavaScript and TypeScript for writing clean,
      maintainable code with enhanced developer productivity.
    </p>
  </div>
 
  <div className="techCard">
  <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'center', marginTop: 20, marginBottom: 10 }}>
  <SiJavascript style={{ color: '#f7df1e',marginRight: 8, width: 30, height: 30 }} />
 
    <p className="techTitle">
      UI / UX Design
    </p>
    </div>
    <p className="techDesc">
      Skilled in crafting intuitive and visually appealing user
      experiences and interfaces that align with modern design
      principles.
    </p>
  </div>
 
  <div className="techCard">
  
  <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'center', marginTop: 20, marginBottom: 10 }}>
  <SiKotlin style={{ color: '#7F52FF', marginRight: 8, width: 30, height: 30 }} />
 
    <p className="techTitle">
      
    Kotlin
    </p>
    </div>
    <p className="techDesc">
    Experience in developing modern, efficient, and type-safe applications using Kotlin, with a focus on clean architecture, maintainability, and performance.
 
    </p>
  </div>
</div>
 
        <div className="techContainer">
          <div className="techCard">
          <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'center', marginTop: 20, marginBottom: 10 }}>
          {/* <SiSpringboot style={{ color: '#61DAFB', marginRight: 8, width: 30, height: 30 }} /> */}
 
 
            <p className="techTitle">Java
            </p>
            </div>
            <p className="techDesc">
              Strong in object-oriented programming with Java, building scalable
              backend systems and Android applications with clean architecture.
            </p>
          </div>
 
          <div className="techCard">
          <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'center', marginTop: 20, marginBottom: 10 }}>
          <SiXcode style={{ color: '#147EFB', marginRight: 8, width: 30, height: 30 }} />
  <p className="techTitle">Xcode</p>
</div>
            <p className="techDesc">
            Proficient in using Xcode for iOS development, debugging,
            and testing native applications with seamless deployment workflows.
 
            </p>
          </div>
 
          <div className="techCard">
          <div style={{ display: 'flex', flexDirection: 'row',  alignItems: 'center' , justifyContent:'center', marginTop:20, marginBottom:10}}>
 
          <SiMysql style={{ color: '#00758F', marginRight: 8, width: 50, height: 50 }} />
            <p className="techTitle">SQL</p>
            </div>
            <p className="techDesc">
              Strong understanding of relational databases and SQL for managing
              and querying structured data effectively.
            </p>
          </div>
        </div>
 
        
      </div>
 
      <div className="AditionalSkilsView">
      <p
  style={{
    color: '#000',
    fontSize: 34,
    fontWeight: 1000,
    fontFamily: 'Poppins',marginLeft:18
  }}
>
  Additional technologies and skills
</p>

        <p className="AditionalSkilsSummary">
          Discover my additional skills and expertise, elevating projects to new
          heights of quality and efficiency.
        </p>
        <div className="AditionalSkilsContainer">
        <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', flex: 1 }}>

          
          <div className="AditionalSkilsItem">
            <div className="AditionalSkilsCircleDot"></div>
            <p className="AditionalSkillText">Git & GitHub</p>
          </div>

          <div className="AditionalSkilsItem">
            <div className="AditionalSkilsCircleDot"></div>
            <p className="AditionalSkillText">Android Studio</p>
          </div>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', flex: 1 }}>

       
          <div className="AditionalSkilsItem">
            <div className="AditionalSkilsCircleDot"></div>
            <p className="AditionalSkillText">Postman</p>
          </div>

          <div className="AditionalSkilsItem">
            <div className="AditionalSkilsCircleDot"></div>
            <p className="AditionalSkillText">VS Code</p>
          </div>
          </div>
  

          <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', flex: 1 }}>

       
          <div className="AditionalSkilsItem">
            <div className="AditionalSkilsCircleDot"></div>
            <p className="AditionalSkillText">X Code</p>
          </div>

          <div className="AditionalSkilsItem">
            <div className="AditionalSkilsCircleDot"></div>
            <p className="AditionalSkillText">Swagger</p>
          </div>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', flex: 1 }}>

       
          <div className="AditionalSkilsItem">
            <div className="AditionalSkilsCircleDot"></div>
            <p className="AditionalSkillText">Play&AppStore</p>
          </div>

          <div className="AditionalSkilsItem">
            <div className="AditionalSkilsCircleDot"></div>
            <p className="AditionalSkillText">FireBase Console</p>
          </div>
          </div>
        </div>
        
      </div>
    </div>
  );
}

export default Technologies;