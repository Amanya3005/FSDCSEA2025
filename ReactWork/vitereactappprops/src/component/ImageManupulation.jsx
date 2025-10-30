import React ,{useState} from 'react'
import butterfly from './butterfly.png';

function ImageManipulation() {

  const [butterflyHeight,setHeight]=useState(200);
   const [butterflyWidth,setWidth]=useState(200);

    function handleWidth(){
      setWidth(butterflyWidth+10);
    }

    function handleHeight(){
      setHeight(butterflyHeight+10);
    }

     

  return (
    <div>
        <h2>ImageManipulation</h2>
        <div style={{border:'2px solid black',height:'400px',width:'400px',marginLeft:'200px'}}>
            <img src={butterfly} alt="butterfly image" height={butterflyHeight} width={butterflyWidth} style={{paddingLeft:'100px',paddingTop:'100px'}} />
        </div>

        <div>
          <button onClick={handleWidth}>Increase Width</button>
          <button onClick={handleHeight}>Increase Height</button>
          <button onClick={()=>setWidth(butterflyWidth-10)}>Decrease Width</button>
          <button onClick={()=>setHeight(butterflyHeight-10)}>Decrease Height</button>
        </div>
    </div>  
  )
}

export default ImageManipulation