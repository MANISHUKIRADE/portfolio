import React, { useState} from 'react'
import { useSpring, animated } from '@react-spring/web'
import ReactTypingEffect from 'react-typing-effect';

import './AnimatedText.css'
export default function Text(props) {
    const {displayText} = props;
    const [flip, set] = useState(false)
    const springProps = useSpring({
      to: { opacity: 1 },
      from: { opacity: 0 },
      reset: true,
      reverse:  flip,
      delay: 200,
      config: { duration: 500 },
      onRest: () => set(!flip),
    })
  
    return<>
     <animated.h3 class= "animatedTextHeader" style={springProps}>{displayText}</animated.h3>
    <animated.span class = "animatedText">
    <ReactTypingEffect
        cursorRenderer={
        cursor => <h5>{ }</h5>}
        eraseDelay={100000000}
        speed={100}
        text={"I am passionate about working in the field of software development because the idea of automating a process has always been exciting for me."}
      />
       
     </animated.span>
     <animated.span class = "animatedText">
       <ReactTypingEffect
        cursorRenderer={
          cursor => <h5>{ }</h5>
        }
        eraseDelay={1000000000}
        typingDelay={18000}
        speed={100}
        text={"I love to solve challenges and problems that come my way by coming up with innovative technical solutions."}
       />
     </animated.span>
     <animated.span class = "animatedText">
       <ReactTypingEffect 
       cursorRenderer={
        cursor => <h5>{ }</h5>}
      typingDelay={29000} 
       eraseDelay={100000000}
       text={`I am a self-motivated individual who is always looking for new ways to improve my skills and knowledge.
       I want to build exciting user-friendly products to make people's lives easier.`}
       speed={100}
       />
     </animated.span>
     <animated.h5 class = "animatedText"></animated.h5>
    </>
    
  }