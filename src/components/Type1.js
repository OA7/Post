/* eslint-disable jsx-a11y/iframe-has-title */
import React from 'react';

const Type1 = () =>{
  return (
    <>
      <div>
        <h2>Type-1</h2>
        <div class="paragraph">Create separate file like PreLoader1.js.</div>
        <div class="paragraph">
          Create Functional Component and here, we&#x27;re going to use two state,
        </div>
        <div class="code-container">
          <div>Image Here</div>
        </div>
        <div class="paragraph">
          <strong>
            <em>data state</em> </strong>: To store data which comes from API call.
        </div>
        <div class="paragraph">
          <strong>
            <em>done state</em> </strong>: It is boolean to decide weather to show pre-loader or not.
        </div>
        <div class="paragraph">Now in the useEffect,</div>
        <div class="code-container">
          <div>Image Here</div>
        </div>
        <blockquote>You can put your own logic in useEffect!</blockquote>
        <div class="paragraph">Now in the above useEffect method,</div>
        <div class="paragraph">
          First we use fetch method to get data from api then we convert that data into
          json,then we will set data state with json data, and after that set done
          state to true.
        </div>
        <blockquote>
          NOTE: Here I have used time out function for 2 seconds so that we can see
          loading screen for more time.
        </blockquote>
        <div class="paragraph">Now let&#x27;s render our component.</div>
        <div class="gist-container">
          <iframe width="560" height="315" src="https://www.youtube.com/embed/Y7pL5wG5QOg" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </div>
        <div class="paragraph">
          <strong>Line 22: </strong> we will check if
            <code>
              <strong> done </strong>
            </code>
          <span>
            state is false then we will render pre-loading component else we will render
            data we want to show.
          </span>
        </div>
        <div class="paragraph">
          <strong>Line 23: </strong>Here I have used react-loading library, where we
          only have to set type, color, height and width. you can find more
          functionalities on
          <a href="https://www.npmjs.com/package/react-loading">here</a>.
        </div>
        <div class="paragraph">
          <strong>Line 30:</strong> From here I have mapped data state inside the ul tag
          which returns title of each post in li tag.
          <em
            >(use console.log() inside useEffect to see what kind of data we are
            getting)</em
          >
        </div>
        <div class="paragraph">That&#x27;s the end of Part-1 here.</div>
      </div>
    </>
  )
}

export default Type1;