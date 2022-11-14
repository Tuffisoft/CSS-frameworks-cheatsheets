import React from 'react'
import Navbar from '../components/Navbar'
import "./chakra.css"

export default function chakra() {
  return (
    <>
    <Navbar />
      <h1 className='chakra-h1'>Chakra UI</h1>
        <h3 className="chakra-h3">What is Chakra UI ?</h3>
        <p>Chakra UI is simple, modular, and is an accessible component to build the React applications. Chakra UI was launched on september 2019. Its simplicity, accessibility, modularity makes it more powerful. It belongs to the UI component category. Chakra UI has 17.1k GitHub stars currently</p>
      <h2 className="chakra-h2">First Steps</h2>
        <h3 className="chakra-h3">
            <img src="https://camo.githubusercontent.com/61e102d7c605ff91efedb9d7e47c1c4a07cef59d3e1da202fd74f4772122ca4e/68747470733a2f2f766974656a732e6465762f6c6f676f2e737667" alt="vite" style={{width: "30px"}}/>
            Vite Edition</h3>
            <div>
                <h3 className="chakra-h3">1. Installation</h3>
                <p>In your Vite React project, install Chakra UI by running either of the following:</p>
                <div>
                <pre class="prism-code language-bash">
                    <div class="token-line css-zbg2gu">
                        <span class="token function">npm</span>
                        <span class="token plain"> i @chakra-ui/react @emotion/react@^11 @emotion/styled@^11 framer-motion@^6</span>
                    </div>
                </pre>
                </div>
            </div>
            <div>
                <h3 className="chakra-h3">2. Provider Setup</h3>
                <p>After installing Chakra UI, you need to set up the ChakraProvider at the root of your application.

                Go to the src directory and inside main.jsx or main.tsx, wrap ChakraProvider around App:</p>
                <div>
                <pre class="prism-code language-bash">
                    <div class="token-line css-zbg2gu">
                        <span class="token function">import</span>
                        <span class="token plain">  ChakraProvider  from '@chakra-ui/react'</span>
                    </div>
                </pre>
                </div>
            </div>
            <div>
                <h3 className="chakra-h3">Style Props</h3>
                <p>Chakra UI supports Reactjs, and every component is customizable using the Style props. They map to almost all necessary CSS properties that are available.</p>
                <p>For example, for <code>margin-top</code> in CSS, you would write it as <br/>
                <code>Text mt={8}</code>. This will set a top margin of 8px on the selected element.</p>
            </div>
            <div>
              <h3 className="chakra-h3">Responsive container, resize to see breakpoints</h3>
              <span>Container maxW={[null, 480, 768, 992, 1280, 1536]}</span>
              <div className='container-md'>md</div>
            </div>
            <div>
                <h3 className="chakra-h3">Sizes <code>(Container maxW="id")</code></h3>
            </div>

            <h3 className="chakra-h3">Advantages of Chakra UI :</h3>
        <ul>
            <ol>Easily customizable – Chakra UI is easily customizable i.e, we can adjust the designs easily whenever needed. Rather than styles, we can also change the behaviour of the components used.</ol>
            <ol>Accessibility – Chakra UI is easily accessible. People always come across problems while accessing something, so it is difficult to create accessible UIs. Usually we have to implement few WCAG guidelines, but the keyboard navigation, proper outlines are all covered by the Chakra UI.</ol>
            <ol>Dark Mode support – Nowadays, dark mode has became an important part in tech lives. Now everyone can use it in their laptops, smartphones etc. Most of the Chakra’s components are dark mode compatible.</ol>
        </ul>
        <h3 className="chakra-h3">Disadvantages of Chakra UI</h3>
        <ol>Impossible to style some components – Components like switch, checkbox, and some other components cannot be styled by Chakra UI.</ol>
        <ol>Hard to apply defaults – Chakra already has some default components. So if we want to add one default component, it will be difficult to apply.</ol>
      <h3 className='chakra-h3'>Conclusion</h3>
        <p> Chakra UI is a new tool and it has many components. It helps you create the layouts quickly. It is simple, and easily accessible.</p>
    </>
    
  )
}
