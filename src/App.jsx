import './App.css';
import HigherOrderComponent from './components/HigherOrderComponents/HigherOrderComponent';
import LikeimageHOC from './components/HigherOrderComponents/LikeImageHOC';
import LikePostHOC from './components/HigherOrderComponents/LikePostHOC';
import LikeImage from './components/LikeImage';
import LikePost from './components/LikePost';
import LikeImageRender from './components/RenderProps/LikeImageRender';
import LikePostRender from './components/RenderProps/LikePostRender';
import RenderPropsComponent from './components/RenderProps/RenderPropsComponents';


const LikeImageS = HigherOrderComponent(LikeimageHOC)
const LikePostS = HigherOrderComponent(LikePostHOC)

function App() {
  return (
    <div className='props'>
      <h3>Some Blog</h3>
      <div className='buttons'>
        <LikePost/>
        <LikeImage/>
      </div>
      <div className="hoc">
        <LikeImageS/>
        <LikePostS/>
      </div>
      <div className='render'>
        <RenderPropsComponent render={(count, increaseCount)=> {
          return <LikeImageRender count={count} increaseCount={increaseCount}/>
        }}/>
        <RenderPropsComponent render={(count, increaseCount)=> (
          <LikePostRender count={count} increaseCount={increaseCount}/>
  )}/>
      </div>
    </div>
  );
}

export default App;
