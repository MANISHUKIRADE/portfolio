import './App.css';
import {useSpring,animated} from 'react-spring'
import LeftBar from './component/leftSection/LeftBar';
function App() {
  //const props = useSpring({ to: { opacity: 1 }, from: { opacity: 0 } })
  //const [flip, set] = useState(false)
  const styles = useSpring({
    to: { rotateZ: 0},
    from: { rotateZ: 360 },
    delay: 0,
    reverse:true,
    config: { duration: 500 }
  })
  return (
    <div className="App">
    <animated.div  style={{
      ...styles,
    }}>
        <LeftBar />
    </animated.div>
   </div>
  );
}

export default App;
