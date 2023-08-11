import React, {useRef,useEffect} from 'react'
import "./About.css"
import {Canvas} from "@react-three/fiber"
import {Sphere, MeshDistortMaterial} from "@react-three/drei"
import gsap from "gsap";

const About = () => {
  const aboutRef = useRef();
  const meRef = useRef();


  useEffect(()=>{

    gsap.to(aboutRef.current.querySelectorAll(".about-header-inline-div"),{y:0,duration:1,stagger:.2})
    gsap.to(meRef.current.querySelectorAll(".about-me-inline-div"),{scale:1,delay:1.2,duration:1,stagger:.2})
  },[])

  return (
    <div id="about" className="page">
       <div id="about" className="about-page">
      <div className="about-column">
        <div className="about-header-row">
          <h1 ref={aboutRef} className="large-h1">
            <div className="about-header-inline-div">A</div>
            <div className="about-header-inline-div">b</div>
            <div className="about-header-inline-div">o</div>
            <div className="about-header-inline-div">u</div>
            <div className="about-header-inline-div">t</div>
          </h1>
        </div>
        <div className="about-header-row">
          <h1 ref={meRef} className="large-h1">
            <div className="about-me-inline-div">M</div>
            <div className="about-me-inline-div">E</div>
          </h1>
        </div>
      </div>
      <div className="about-column">
        <ul className="about-items"></ul>
        <h4>5+ yrs of full-stack web-development as well as just creeping along the tech stack in general. A <code>(;;)</code> loop of curiosity and passion towards how the 0s and 1s work on every level. From writing clean CSS, to back-end route handling/ authentication systems and management and everything in between.</h4>
      </div>
      </div> 
      <Canvas style={{position:"absolute",inset:0,height:'600px'}}>
        <ambientLight/>
        <directionalLight/>
        <Sphere args={[2,15,36]} scale={[1.9,1,1]} position={[0,-1,0]}>
          <MeshDistortMaterial distory={1} speed={6} color="green"/>
        </Sphere>
      </Canvas>
    </div>
  )
}

export default About