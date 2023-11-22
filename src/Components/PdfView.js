import React, { useState, useEffect } from 'react'
// import pdfFile from '../Images/mypdf.pdf'
import Loader from './Placeholders/Loader' 
import axios from 'axios';

import { Viewer, Worker } from '@react-pdf-viewer/core';
import { defaultLayoutPlugin } from '@react-pdf-viewer/default-layout';

import '@react-pdf-viewer/core/lib/styles/index.css';
import '@react-pdf-viewer/default-layout/lib/styles/index.css';

const PdfView = (props) => {
  const [ notes, setNotes ] = useState();
  
  useEffect(() => {
    getNotes();
    // eslint-disable-next-line
  },[props]);

  async function getNotes() {
    try {
      const data = await axios.get(`${process.env.REACT_APP_API_URL}/api/Notes/${props.subject}/${props.sClass}/`);
      setNotes(data.data[0]);
    } catch {
      console.log('something went wrong!');
    }
  }

  const defaultLayoutPluginInstance = defaultLayoutPlugin();
  return (
    <div>
      <div className='text-center'>
        { ! notes ? <Loader /> :   
        <Worker workerUrl="https://unpkg.com/pdfjs-dist@3.4.120/build/pdf.worker.js">
          <div style={{ height: '600px' }}>
              <Viewer
                  fileUrl={`http://127.0.0.1:8000/${notes.pdf_file}`}
                  plugins={[defaultLayoutPluginInstance,]}
              />
          </div>
        </Worker>
        }
      </div>
    </div>
  )
}

export default PdfView
