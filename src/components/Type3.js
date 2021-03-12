import React from 'react';

const Type3 = () => {
  return (
    <>
      <div>
        <h2>
          <strong>Type-3</strong>
        </h2>
        <div class="paragraph">
          In this type we are not going to use any library instead we are only using
          simple css styling.
        </div>
        <div class="paragraph">
          Now the logic of displaying pre-loader is same as in the part-2 so here
          I&#x27;m not going to show you the whole process.
        </div>
        <div class="paragraph">Create new file PreLoader3.js</div>
        <div class="paragraph">
          Copy the whole code from PreLoader2.js file and remove all code related with
          react-Lottie library and keep everything as it is.
        </div>
        <div class="paragraph">only change return statement as shown below,</div>
        <div class="code-container">
          <div>Image Here</div>
        </div>
        <div class="paragraph">In the above code,</div>
        <div class="paragraph">
          div with the class spinner contains Loading text and spinner. <br />while div
          with the className completed contains success symbol.(✓).
        </div>
        <div class="paragraph">Now let&#x27;s do some css styling.</div>
        <div class="paragraph">
          crate separate file preloader3.css for styling and import it in the
          preloader3.js file.
        </div>
        <div class="gist-container">
          <iframe
            width="100%"
            frameborder="0"
            id="gist-8e5552dcc539f15aca7916480b84c3dc"
          ></iframe>
        </div>
        <div class="paragraph">Now,</div>
        <div class="paragraph">
          <strong>.spinner</strong> class is simply box for spinner.
        </div>
        <div class="paragraph">
          <strong>.spinner span</strong> contains styling and animation for loading
          text.
        </div>
        <div class="paragraph">
          <strong>.half-spinner</strong> contains styling for spinner.
        </div>
        <div class="paragraph">
          now to cut this whole spinner as in line no 20 you just have to set border top
          to transparent.
        </div>
        <div class="paragraph">
          <strong>.completed</strong> contains styling and animation for success(✓)
          symbol.
        </div>
        <div class="paragraph">This is the End of type 3.</div>
        <div class="paragraph">
          You can find Full-Code repository from 
          <a href="https://github.com/codebucks27/React-Loading-Screen">here</a>.
        </div>
        <div class="paragraph">
          <strong>Thanks for reading and supporting.</strong>😄
        </div>
        <div class="paragraph">Feel free to visit my youtube channel:</div>
        <div class="paragraph">
          <a href="https://www.youtube.com/channel/UCeYt6blRBKuNrEg_-282fSA">@CodeBucks</a>
        </div>
        <div class="paragraph">
          <em>Previously published </em>
          <a
            href="https://dev.to/codebucks/create-3-different-types-of-loading-screens-in-react-5bba"
          >
            <em>here</em>
          </a>
          <em>.</em>
        </div>
      </div>
    </>
  )
}

export default Type3;