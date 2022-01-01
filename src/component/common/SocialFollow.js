import { SocialIcon } from 'react-social-icons';
import './SocialFollow.css';
export default function SocialFollow() {
    
    return (
        <>
         <span style={{ "color": '#28B4D7', "fontSize": "13px" }}>Follow me on:</span>
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