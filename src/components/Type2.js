import React from 'react';

const Type2 = () => {
  return (
    <>
      <div>
        <h2>
          <strong>Type-2</strong>
        </h2>
        <div class="paragraph">Create new file and name it as PreLoader2.js</div>
        <div class="paragraph">
          Create functional component, and import react-Lottie library.
        </div>
        <div class="code-container">
          <div>Image Here</div>
        </div>
        <div class="paragraph">
          In this type of loading screen we have to download animation files from
          <a href="https://lottiefiles.com/">https://lottiefiles.com/</a>
        </div>
        <div class="paragraph">For this tutorial i&#x27;m using below two files,</div>
        <div class="paragraph">
          Earth animation :
          <a href="https://lottiefiles.com/1055-world-locations">https://lottiefiles.com/1055-world-locations</a>
        </div>
        <div class="paragraph">
          Success animation:
          <a href="https://lottiefiles.com/1127-success">https://lottiefiles.com/1127-success</a>
        </div>
        <div class="paragraph">
          Download this file (Lottie JSON) and keep them in your project directory.
        </div>
        <div class="paragraph">Let&#x27;s import this json files like below,</div>
        <div class="code-container">
          <div>Image Here</div>
        </div>
        <div class="paragraph">
          As mentioned <a href="https://www.npmjs.com/package/react-lottie">here</a>in
          the react-Lottie library documentation, we need to set default options to use
          this animation files in our project so first declare this options as,
        </div>
        <div class="code-container">
          <div>Image Here</div>
        </div>
        <div class="paragraph">
          <em>defaultOptions1</em>for first file while <em>defaultOptions2</em>for
          second file.
        </div>
        <div class="paragraph">In this tutorial we&#x27;re going to use 3 state:</div>
        <div class="code-container">
          <div>Image Here</div>
        </div>
        <div class="paragraph">
          <strong>data state</strong>: To store data which comes from API call.
        </div>
        <div class="paragraph">
          <strong>loading state</strong>: Boolean state for first animation file.
        </div>
        <div class="paragraph">
          <strong>completed state</strong>: Boolean state for second animation file when
          API call is completed.
        </div>
        <div class="code-container">
         <div>Image Here</div>
        </div>
        <blockquote>You can put your own logic in useEffect!</blockquote>
        <div class="paragraph">
          UseEffect method is almost same as in part-1, only difference is that instead
          of done state we have to set completed and loading state to true, <br />Also,
          I have used one more timeout function for 1 sec to see the 2nd animation.
        </div>
        <div class="code-container">
         <div>Image Here</div>
        </div>
        <div class="paragraph">As shown in the above code,</div>
        <div class="paragraph">
          in the return, if completed state is false then we will render loading screen
          else we will render our data.
        </div>
        <div class="paragraph">
          In the animation part we will do one more conditional rendering,
        </div>
        <div class="paragraph">
          when loading state is false then we will render the earth animation else we
          will render the success animation.
        </div>
        <div class="paragraph">
          Dont&#x27;t forget to set
          <pre>
            <code>options={"defaultOptions1"}</code>
          </pre>
          for file 1 and
          <pre>
            <code>options={"defaultOptions1"}</code>
          </pre>
          for file 2.
        </div>
        <div class="paragraph">Full Code:</div>
        <div class="gist-container">
          <iframe
            width="100%"
            frameborder="0"
            id="gist-b09aa861ac0d34c36ab886c559b38af0"
          ></iframe>
        </div>
        <div class="paragraph">
          Now as per the Creative Commons License of
          <a href="https://lottiefiles.com/page/license">https://lottiefiles.com/page/license</a>
          <em>The creator(s) must be attributed in your application.</em>
        </div>
        <div class="paragraph">
          You can attribute creator as shown in line no 60 to 71.
        </div>
        <div class="paragraph">That&#x27;s the end of Part-2.</div>
      </div>
    </>
  )
}

export default Type2;