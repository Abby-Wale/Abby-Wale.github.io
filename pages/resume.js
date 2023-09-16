// import React from "react";

// export default function resume({ study }) {
//   const { pdfFile } = study.fields;
//   return (
//     <div className="resume">
//       <Image src={"https:" + pdfFile.fields.file.url} />

//       <style jsx>{`
//         .card {
//         }
//       `}</style>
//     </div>
//   );
// }

import React, { useState } from "react";

import { Document, Page, pdfjs } from "react-pdf";
pdfjs.GlobalWorkerOptions.workerSrc = `https://cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

function resume() {
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
  }

  return (
    <div className="resume-container">
      <Document
        file="Abiola Adewale Resume.pdf"
        onLoadSuccess={onDocumentLoadSuccess}
        height="700px"
        width="100%"
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
export default resume;
