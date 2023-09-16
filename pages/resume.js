import React, { useState } from "react";
import { Document, Page, pdfjs } from "react-pdf";
pdfjs.GlobalWorkerOptions.workerSrc = `https://cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

function Resume() {
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
  }

  return (
    <div className="resume-container">
      <a href="AdewaleAbiolaResume.pdf" target="_blank" rel="noopener noreferrer">
        Open PDF in new tab
      </a>
      <Document
        file="AdewaleAbiolaResume.pdf"
        onLoadSuccess={onDocumentLoadSuccess}
      >
        <Page pageNumber={pageNumber} />
      </Document>
      <p>
        Page {pageNumber} of {numPages}
      </p>

      <style jsx>{`
        .resume-container {
          text-align: center;
        }
      `}</style>
    </div>
  );
}

export default Resume;
