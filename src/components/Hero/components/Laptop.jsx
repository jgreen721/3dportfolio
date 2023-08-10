import React, {useEffect, useRef,useState, useLayoutEffect} from 'react'
import { useGLTF, Text } from '@react-three/drei'
import { useFrame, useThree } from '@react-three/fiber';


const Laptop = ({img,mouseX,intensity}) => {
    const deskImg = useGLTF("pedestal_desk.glb");
    const laptop = useRef();
    const dirLight = useRef();
    const camera = useThree((state) => state.camera); // Get the camera instance


    const [scale,setScale] = useState(.175)
    const [textData,setTextData] = useState({scale:[.7,.3],pos:[[-.3,2,.5],[-.3,1.5,.5]]})

    useEffect(()=>{
        if(innerWidth < 900){
            setScale(.1)
            setTextData({scale:[.4,.17],pos:[[-.3,1,.6],[-.3,.7,.6]]})
        }
   
    },[])


    let deltaY = .005

    useFrame((state,delta)=>{
        // laptop.current.position.y += deltaY;
        if(laptop.current.position.y > .7 || laptop.current.position.y < -.4)deltaY *= -1;
        // dirLight.current.position.x -= delta;

        if (dirLight.current) {
            const newX = (mouseX / innerWidth) * 8 - 4; // Adjust the multiplier for the desired range of movement
            dirLight.current.position.x = newX;

            // Rotate directional light slightly
            dirLight.current.rotation.z = Math.PI * 0.08 + Math.sin(state.clock.elapsedTime) * 0.1;
        }


        if (camera) {
            let cameraRotation = (mouseX / innerWidth) * 0.1; // Adjust the multiplier for desired rotation range
            camera.rotation.y = cameraRotation;
            // if(intensity == 1){
            //     if(camera.rotation.y != 0){
            //         // console.log("restoring!",camera.rotation.y)
            //         if(camera.rotation.y > 0){
            //             // camera.rotation.y = 1
            //             let ref = camera.rotation.y;
            //             ref -= .001
            //            camera.rotation.y = ref;

            //             console.log("restoring-=.01!",camera.rotation.y)

            //         }
            //         else{
            //             let ref = camera.rotation.y;
            //             ref += .001
            //            camera.rotation.y = ref;                        
            //            console.log("restoring-+.01!",camera.rotation.y)


            //         }
            //     }
            // }
        }


        
    })





  return (
      <group ref={laptop} position={[0,0,-2]}>
          <directionalLight ref={dirLight} intensity={intensity} position={[1,4,0]}/>
    <primitive scale={scale} rotation={[Math.PI * .08,Math.PI * .06,0]} position={[0,-.5,1]} object={img.scene}></primitive>
    <Text color="black" scale={textData.scale[0]} rotation={[Math.PI * .08,Math.PI * .1,0]} position={textData.pos[0]}>
       Welcome!
    </Text>
    <Text color="black" scale={textData.scale[1]} rotation={[Math.PI * .08,Math.PI * .1,0]} position={textData.pos[1]}>
       To My Sites/Samples Portfolio!
    </Text>
    <primitive scale={10} rotation={[Math.PI * .08,Math.PI * .04,0]} position={[1,-8,-3]} object={deskImg.scene}></primitive>

    </group>
  )
}

export default Laptop