import Profile  from "./Profile";
import Name from "./Name";
import Text from "../common/AnimatedText";
import './LeftBar.css';
export default function LeftBar() {
    return (
        <>
        <div className="card">
        <Profile />
        <Name />
        <Text displayText="FullStack Developer" />
        </div>
        </>
    )
}