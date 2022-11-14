import React from 'react'
import Navbar from '../components/Navbar'
import './ant.css'

export default function Ant() {
  return (
    <div>

      <Navbar />

    <div className="ant">
       
       <h1>Ant Design</h1>
       <h3>Component based React UI library, written in Typescript<br />
       Provides high Quality out of the box Components which you can customize  (an alternative to bootstrap or Material UI)</h3>

       <h4>Ant Design makes use of Less. js for styling components whereas Material UI makes use of an inbuilt 'makeStyles()' method for styling components. Ant Design supports and uses Typescript as the programming language while Material UI is based on Javascript</h4>

       <br></br>
       <h2>Installation</h2>
       <h3>1. Install via npm or yarn </h3>
       <code> npm install antd</code>
       <code> yarn add antd</code>
       <br></br>
       <h3>2. Import in Browser</h3>
      <p>Add script and link tags in your browser and use the global variable antd.</p>
      <p> antd.js antd.css and antd.min.js antd.min.css under antd/dist in antd's npm package. </p>

      <h3>Using with Create react-app: </h3>
      <ol>
        <li>Create react app </li>
        <li>Yarn/npm add antd </li>
        <li>Modify src/App.js (import Modules)</li>
        <code>example:  import 'Button' from 'antd';</code>
        <li>Add antd/dist/antd.css at the top of the css file here:  src/App.css</li>
      </ol>
      <br></br>
      <h2>Customize Theme</h2>
      <ol>
        <li>Modify src/App.css to src/App.less (import less instead of css file)</li>
        <li>Install craco-less :</li>
        <code>$ yarn add craco-less or $ npm add craco-less </code>
        <li>modify craco.config.js file:
        .const CracoLessPlugin = require('craco-less');<br></br>
         plugin: CracoLessPlugin,
        </li>
      </ol>
      <h2>FInd List of Components in this link</h2>
      <p><a target="_blank" href="https://ant.design/components/overview/">All Components</a></p>
      <h2>Icons:</h2>
      <h3>npm install --save @ant-design/icons</h3>
      <a target="_blank" href="https://ant.design/components/icon/">All Icons</a>
      <h4>Properties:</h4>
      <p>className</p>
      <p>rotate</p>
      <p>spin</p>
      <p>style</p>
      <p>twoToneColor</p>
      <div>
        <h2>Links & Resources</h2>
        <a target="_blank" href="https://github.com/websemantics/awesome-ant-design">Resources Link 1</a>
        <a target="_blank" href="https://ant.design/docs/resources">Resources Link 2</a>
        <br></br>
        <a target="_blank" href="https://antv.vision/en">AntV Link 1</a>
        <a target="_blank" href="https://pro.ant.design/">Ant Design PRO</a>
        <a target="_blank" href="https://mobile.ant.design/">Ant Mobile</a>

        </div>
      </div>
         
    </div>

    )
}
