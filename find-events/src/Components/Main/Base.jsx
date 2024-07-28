import React, { useContext, forwardRef } from 'react';
import './Base.css';
import { assets } from '../../assets/assets';
import { Context } from '../../context/Context';

const Base = forwardRef((props, ref) => {
  const {onSent, recentPrompt, showResult, loading, resultData, setInput, input} = useContext(Context);

  return (
    <div className='main' ref={ref}>
      <div className="main-container">
        {!showResult ? (
          <>
            <div className="greet">
              <p><span>Hello, User!</span></p>
              <p>How can I help you today?</p>
            </div>
            <div className="cards">
              <div className="card">
                <p>Suggest beautiful places to see on an upcoming road trip</p>
                <img src={assets.compass_icon} alt="" />
              </div>
              <div className="card">
                <p>Give healthy meal prep ideas for a busy week ahead</p>
                <img src={assets.bulb_icon} alt="" />
              </div>
              <div className="card">
                <p>Explore new hobbies: Ideas for creative activities to try at home</p>
                <img src={assets.message_icon} alt="" />
              </div>
              <div className="card">
                <p>Searching for podcasts or audiobooks to listen to during daily commutes</p>
                <img src={assets.code_icon} alt="" />
              </div>
            </div>
          </>
        ) : (
          <div className="result">
            <div className="result-title">
              <img src={assets.user_icon} alt="" />
              <p>{recentPrompt}</p>
            </div>
            <div className="result-data">
              <img src={assets.gemini_icon} alt="" />
              {loading ? (
                <div className="loader">
                  <hr />
                  <hr />
                  <hr />
                </div>
              ) : (
                <p dangerouslySetInnerHTML={{__html:resultData}}></p>
              )}
            </div>
          </div>
        )}
        <div className="main-bottom">
          <div className="search-box">
            <input onChange={(e)=> setInput(e.target.value)} value={input} type="text" placeholder='Enter a prompt here...' />
            <div>
              <img src={assets.gallery_icon} alt="" />
              <img src={assets.mic_icon} alt="" />
              {input ? <img onClick={()=>onSent()} src={assets.send_icon} alt="" /> : null}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
});

export default Base;