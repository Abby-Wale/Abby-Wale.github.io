import React, { useState } from "react";
import Pdf from "@mikecousins/react-pdf";
import styled from "@emotion/styled";

const resume = () => {
  const [page, setPage] = useState(1);

  return (
    <Main>
      <Pdf file="AdewaleAbiolaResume.pdf" page={page} />
    </Main>
  );
};

export default resume;

export const Main = styled.div`
  padding: 100px 0;
  background-color: #064734;
  color: #fff;

  @media screen and (min-width: 800px) {
  }
`;
