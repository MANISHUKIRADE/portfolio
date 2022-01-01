import Profile  from "./Profile";
import Name from "./Name";
import Text from "../common/AnimatedText";
import SocialFollow from "../common/SocialFollow";
import './LeftBar.css';
export default function LeftBar() {
    return (
        <>
        <div className="card">
        <Profile />
        <Name />
        <Text displayText="FullStack Developer" />
        <SocialFollow />
        </div>
        </>
    )
}