import React,{useState} from 'react'
import './main.css'
function Main(){
  const[bool, setBool] = useState(false);
  function btnChange(){
      setBool(true);
      if(bool){
        setBool(false);
      }
  }
    return (
      <>
        <div className={bool === true ? 'container1' : 'container'}>
          <div className="dotBox">
            <button className={bool === true ? 'btn1' : 'btn'} onClick={btnChange}></button>
          </div>
        </div>
      </>
    );
}

export default Main