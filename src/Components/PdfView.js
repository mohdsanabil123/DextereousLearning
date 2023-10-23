import React from 'react'
import pdfFile from '../Images/mypdf.pdf'
import { Viewer, Worker } from '@react-pdf-viewer/core';
import { defaultLayoutPlugin } from '@react-pdf-viewer/default-layout';

import '@react-pdf-viewer/core/lib/styles/index.css';
import '@react-pdf-viewer/default-layout/lib/styles/index.css';


const PdfView = () => {
  const defaultLayoutPluginInstance = defaultLayoutPlugin();
  return (
    <div>
      <div className='text-center'>
        <Worker workerUrl="https://unpkg.com/pdfjs-dist@3.4.120/build/pdf.worker.js">
          <div style={{ height: '600px' }}>
              <Viewer
                  fileUrl={pdfFile}
                  plugins={[defaultLayoutPluginInstance,]}
              />
          </div>
        </Worker>
      </div>
    </div>
  )
}

export default PdfView
