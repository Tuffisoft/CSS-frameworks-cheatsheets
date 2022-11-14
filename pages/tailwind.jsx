import React from 'react';
import Navbar from '../components/Navbar';
import "./tailwind.css";


export default function Tailwind() {
  return (
    <>
      <Navbar />
      <div>
        <h1>Tailwind</h1>
          
          <ul>
            <li>
              <h3>CSS framework with predefined classes that you can use to build 
              and design web pages directly in your markup.</h3>
            </li>
            <li>
              <h3>First released in May 2019</h3>
            </li>
            <li>
              <h3>most developer prefer it to create React projects</h3>
            </li>
          </ul>

          <h2>Pros</h2>
            <ul className='pros'>
              <li>
                + you can give each project a different look even if you use the same elements
              </li>
              <li>
                + No faster framework than Tailwind when it comes to styling HTML
              </li>
              <li>
                + Tailwind offers thousand to built-in classes
              </li>
              <li>
                + the overall file size for production is usually small
              </li>
            </ul>
  
          <h2>Cons</h2>
            <ul className='cons'>
                <li>
                  - It isn't easy to learn if you don't understand CSS well.
                </li>
                <li>
                  - You are forced to build everything from scratch, including your input elements. When you install Tailwind CSS, it removes all default CSS styles. 
                </li>
                <li>
                  - Your markup might look disorganized for large projects because all the styles are in the HTML files
                </li>
            </ul>
          <br/>
          <h2>Installation</h2>
          <p>Before installing Tailwind CSS and integrating it in your project, make sure that:<br />
              You have Node.js installed on your computer to make use of the Node package manager npm in the terminal.<br />
              Your project is all set up with your files created.<br />
              This is what our project structure looks like at the moment:
          </p>
  
              Your project is all set up with your files created.
              This is what our project structure looks like at the moment:    
              <br />
                

             
              <div className='grey-box'>       
                  <code>-Tailwind-tutorial</code>
                  <code>-public</code><br />
                  <code>-index.html</code><br />
                  <code>-styles.css</code><br />
                  <code>-src</code> <br />
                  <code>-styles.css</code>
                </div>  

              <p>Next, start up a terminal for your project and run the following commands:</p>
                <div className='grey-box'>       
                  <code>npm install -D tailwindcss</code>
                </div>  

              <p>The above command will install the Tailwind CSS framework as a dependency. Next, generate your tailwind.config.js file by running the command below:</p>
                <div className='grey-box'>       
                  <code>npm install -D tailwindcss</code>
                </div>  
                <br />
              <a href="https://preview.redd.it/cc3jjj351yl61.png?width=1920&format=png&auto=webp&s=3ebad58175e6ee49c9c5bb3d14a5c823609dbffb" target="_blank">Link to Cheatsheet</a>
                <br />
          </div>
          </>
    )
}
  