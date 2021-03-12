/* eslint-disable jsx-a11y/iframe-has-title */
import React from 'react';
import img1 from '../assets/images/const.PNG'
import img2 from '../assets/images/useEffect.PNG'
import img3 from '../assets/images/code-block.PNG'

const Type1 = () =>{
  return (
    <>
      <div>
        <h2>Type-1</h2>
        <div className="paragraph">Create separate file like PreLoader1.js.</div>
        <div className="paragraph">
          Create Functional Component and here, we&#x27;re going to use two state,
        </div>
        <div className="code-container">
          <img src={img1} alt="code-block" />
        </div>
        <div className="paragraph">
          <strong>
            <em>data state</em> </strong>: To store data which comes from API call.
        </div>
        <div className="paragraph">
          <strong>
            <em>done state</em> </strong>: It is boolean to decide weather to show pre-loader or not.
        </div>
        <div className="paragraph">Now in the useEffect,</div>
        <div className="code-container">
           <img src={img2} alt="code-block" />
        </div>
        <blockquote>You can put your own logic in useEffect!</blockquote>
        <div className="paragraph">Now in the above useEffect method,</div>
        <div className="paragraph">
          First we use fetch method to get data from api then we convert that data into
          json,then we will set data state with json data, and after that set done
          state to true.
        </div>
        <blockquote>
          NOTE: Here I have used time out function for 2 seconds so that we can see
          loading screen for more time.
        </blockquote>
        <div className="paragraph">Now let&#x27;s render our component.</div>
        <div className="code-container2">
          <img src={img3} alt="code-block" />
        </div>
        <div className="paragraph">
          <strong>Line 22: </strong> we will check if
            <code>
              <strong> done </strong>
            </code>
          <span>
            state is false then we will render pre-loading component else we will render
            data we want to show.
          </span>
        </div>
        <div className="paragraph">
          <strong>Line 23: </strong>Here I have used react-loading library, where we
          only have to set type, color, height and width. you can find more
          functionalities on
          <a href="https://www.npmjs.com/package/react-loading">here</a>.
        </div>
        <div className="paragraph">
          <strong>Line 30:</strong> From here I have mapped data state inside the ul tag
          which returns title of each post in li tag.
          <em
            >(use console.log() inside useEffect to see what kind of data we are
            getting)</em
          >
        </div>
        <div className="paragraph">That&#x27;s the end of Part-1 here.</div>
      </div>
    </>
  )
}

export default Type1;