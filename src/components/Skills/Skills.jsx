import React, {useEffect, useState} from 'react'
import "./Skills.css"
import { SkillItem } from './components'
import { Canvas } from '@react-three/fiber'
import { OrbitControls, useGLTF, ScrollControls,Scroll } from '@react-three/drei'



const Icon = ({skill})=>{
  const img = useGLTF(skill.logo)



  return(
    <group>
      <directionalLight position={[2,2,2]}/>
    <primitive  scale={skill.scale} position={skill.position} rotation={skill.rotation} object={img.scene}></primitive>
    </group>

  )
}


const Skills = () => {

  const [skills,setSkills] = useState([
    {id:1,name:"HTML5",years:"5",logo:"html.glb",scale:.5,position:[-4,0,0],rotation:[0,0,0]},
    {id:2,name:"CSS3",years:"5",logo:"css.glb",scale:.5,position:[-.5,0,0],rotation:[0,0,0]},
    {id:3,name:"React",years:"5",logo:"react_logo.glb",scale:.85,position:[3.5,1.5,0],rotation:[0,0,0]},
  ])


  const htmlImg = useGLTF(skills[0].logo)
  const cssImg = useGLTF(skills[1].logo)
  const reactlImg = useGLTF(skills[2].logo)

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
         <OrbitControls enableZoom={false}/>
        {/* <SkillItem key={s.id} skill={s}/> */}
        {/* <ScrollControls pages={3}>
          <Scroll> */}
        <Icon skill={skills[0]}/>
        <Icon skill={skills[1]}/>
        <Icon skill={skills[2]}/>
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