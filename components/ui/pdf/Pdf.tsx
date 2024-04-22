"use client";

import * as React from "react";

import { Viewer, Worker } from "@react-pdf-viewer/core";
import { defaultLayoutPlugin } from "@react-pdf-viewer/default-layout";

import "@react-pdf-viewer/default-layout/lib/styles/index.css";

const PDFViewer = ({
  url,
}: {
  url?: string;
}) => {
  const defaultLayoutPluginInstance = defaultLayoutPlugin();

  return (
    <Worker workerUrl="https://unpkg.com/pdfjs-dist@3.4.120/build/pdf.worker.js">
      <div className="w-[100%] h-screen">
        <Viewer
        
          fileUrl={url ?? "https://cdn.filestackcontent.com/wcrjf9qPTCKXV3hMXDwK"}
          plugins={[defaultLayoutPluginInstance]}
        />
      </div>
    </Worker>
  );
};

export default PDFViewer;
