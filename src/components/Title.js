import React from 'react';

const Title = () => {
  return (
    <>
      <div>
        <h1>Step by Step Guide to Create 3 Different Types of Loading Screens in React</h1>
        <div>
          <div className="date">
            February 21st 2021
          </div>
          <div className="icons">
            <ul>
              <li>Like</li>
              <li>Like</li>
              <li>Like</li>
              <li>Like</li>
            </ul>
          </div>
        </div>
        <div className="img-ctn">
          <img src="https://hackernoon.com/images/541r0RExUOQ3nFAQs7oJuST9Axf2-g6aq337h.jpeg" alt="loading spinner" />
        </div>
        <div className="explanation">
          <div class="paragraph">Hey People,</div>
          <div class="paragraph">
            I was finding a good way to make Loading screen animation for my small React
            application, and I found 3 different ways to make good loading screen,
          </div>
          <div class="paragraph">
            <em>Type-1</em> : Using
            <a href="https://www.npmjs.com/package/react-loading">react-loading</a>
            library.
          </div>
          <div class="paragraph">
            <em>Type-2</em> : Using
            <a href="https://www.npmjs.com/package/react-lottie">react-lottie</a> library.
          </div>
          <div class="paragraph">
            <em>Type-3</em> : Using simple <strong>CSS</strong>.
          </div>
          <div class="paragraph">
            If you prefer to watch video tutorial then you can watch it here else just
            watch first 2 minutes to get an idea of what we&#x27;re going to build
            here..and keep reading!😄
          </div>
          <div class="youtube-container">
            <iframe
              title="ytcontainer"
              width="700"
              height="394"
              src="https://www.youtube.com/embed/Y7pL5wG5QOg"
              frameborder="0"
            ></iframe>
          </div>
          <h2>Let&#x27;s Start Building...</h2>
          <div class="paragraph">Create your react app with,</div>
          <div class="code-container">
            Image Here
          </div>
          <div class="paragraph">
            Next, install two libraries that we&#x27;re going to use.
          </div>
          <div class="code-container">
            Image Here
          </div>
          <div class="paragraph">
            <strong>NOTE:</strong> Here, I&#x27;m using
            <a href="https://jsonplaceholder.typicode.com/guide/">jsonplaceholder API</a>
            to get data, to show how we can use pre-loader when using API.
          </div>
        </div>
      </div>
    </>
  )
}

export default Title;