import React, { useState} from 'react'
import { SocialIcon } from 'react-social-icons';
import { useSpring, animated } from 'react-spring';
import './SocialFollow.css';


export default function SocialFollow() {
      const [flip, set] = useState(false)
      const springProps = useSpring({
        to: { opacity: 1 },
        from: { opacity: 0 },
        reset: true,
        reverse:  flip,
        delay: 200,
        config: { duration: 1000 },
        onRest: () => set(!flip),
      })
      
    return (
        <>
         <animated.span class = "socialHeader" style={springProps}>
         Follow me on:
         </animated.span>
        <div className="social-container">
            <SocialIcon className='social'  url="https://www.facebook.com/manish.ukirade" />
            <SocialIcon className='social' url="https://www.instagram.com/maniiiisssh_9797/" />
            <SocialIcon className='social' url="https://www.linkedin.com/in/manish-ukirade-13b866124/" />
            <SocialIcon className='social' url="https://twitter.com/manish_ukirade"/>
            <SocialIcon bgColor="white" className='social' url="https://github.com/MANISHUKIRADE" />
        </div>
        </>
    )
}