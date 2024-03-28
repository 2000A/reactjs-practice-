import { useState } from 'react'

import './App.css'
import { ResumeBuilder } from './components/ResumeBuilder'

function App() {
  
  let resumeData ={
    experience : [  { year:2012, company:'xyz', role:'blockchain dev' },
                    { year:2014, company:'xyzvfg', role:'dev rel' },
                    { year:2018, company:'amazon', role:'devops' }],
    education:[{graduation:'K.V.Ambernath', passingYear:'2016', result:'8.2 cgpa'},
                {graduation: 'Mu', passingYear: '2023', result: '7.8 cgpa'}, 
                {graduation: 'IIT-B', passingYear: '2026', result: '8 cgpa'}
              ],
    skills : [ 'react js', 'node js','next js','node Js']
  }
  return (
    <>
      <ResumeBuilder resume = {resumeData}/>
    </>
  )
}

export default App
