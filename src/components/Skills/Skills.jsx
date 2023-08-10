import React, {useEffect, useState , useRef} from 'react'
import "./Skills.css"
import { Canvas, useFrame , useThree } from '@react-three/fiber'
import {  useGLTF } from '@react-three/drei'
import { Raycaster,Vector3} from "three"
import gsap from "gsap"



const Icon = ({ skill,mouseX, mouseY }) => {
  const img = useGLTF(skill.logo);
  const imgRef = useRef();
  const dirLight = useRef();
  const [posY,setPosY] = useState(2)


const shineLight = ()=>{
  console.log("shine light!")
  dirLight.current.position.y = 3;
  gsap.to(imgRef.current.position,{z:.5,duration:2})

}

const removeLight=()=>{
  console.log("remove light!")
  dirLight.current.position.y = -100;
  gsap.to(imgRef.current.position,{z:0,duration:2})


}




  return (
    <group>
      <directionalLight ref={dirLight} position={[2, -500, 2]} />
      <primitive
        onPointerEnter={shineLight}
        onPointerLeave={removeLight}
        ref={imgRef}
        scale={skill.scale}
        position={skill.position}
        rotation={skill.rotation}
        object={img.scene}
      ></primitive>
    </group>
  );
};



const Skills = () => {
  const [mouseX,setMouseX] = useState(0)
  const [mouseY,setMouseY] = useState(0)
  const [skills,setSkills] = useState([
    {id:1,name:"HTML5",years:"5",logo:"html.glb",scale:.5,position:[-4,0,0],rotation:[0,0,0]},
    {id:2,name:"CSS3",years:"5",logo:"css.glb",scale:.5,position:[-.5,0,0],rotation:[0,0,0]},
    {id:3,name:"React",years:"5",logo:"react_logo.glb",scale:.85,position:[3.5,1.5,0],rotation:[0,0,0]},
  ])




  useEffect(()=>{
    if(innerWidth < 650){
setSkills(()=>[
  {id:1,name:"HTML5",years:"5",logo:"html.glb",scale:.2,position:[-1,1,0],rotation:[0,0,0]},
  {id:2,name:"CSS3",years:"5",logo:"css.glb",scale:.25,position:[-1.25,-.85,0],rotation:[0,0,0]},
  {id:3,name:"React",years:"5",logo:"react_logo.glb",scale:.35,position:[-1,-1.85,0],rotation:[0,0,0]},
])
    }
  },[])
  return (
    <div id="skills" className="page">
     
  
             <Canvas>
         <color attach="background" args={["black"]}/>
         <ambientLight/>
         {/* <OrbitControls enableZoom={false}/> */}
        {/* <SkillItem key={s.id} skill={s}/> */}
        {/* <ScrollControls pages={3}>
          <Scroll> */}
        <Icon mouseX={mouseX} mouseY={mouseY} skill={skills[0]} changeY={.005}/>
        <Icon mouseX={mouseX} mouseY={mouseY} skill={skills[1]} changeY={.008}/>
        <Icon mouseX={mouseX} mouseY={mouseY} skill={skills[2]} changeY={.011}/>
        {/* </Scroll>
        </ScrollControls> */}
        {/* <primitive  scale={skills[0].scale} position={skills[0].position} rotation={skills[0].rotation} object={htmlImg.scene}></primitive>
        <primitive  scale={skills[1].scale} position={skills[1].position} rotation={skills[1].rotation} object={cssImg.scene}></primitive>
        <primitive  scale={skills[2].scale} position={skills[2].position} rotation={skills[2].rotation} object={reactlImg.scene}></primitive> */}

        </Canvas>
  
    </div>
  )
}

export default Skills