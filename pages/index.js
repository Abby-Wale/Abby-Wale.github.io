import { createClient } from "contentful";
import CaseCard from "../components/CaseCard";

export async function getStaticProps() {
  const client = createClient({
    space: "l77qha1voe0c",
    accessToken: "l_DgqUQDUPFySs6W0Av6c9qTbQU-X5vRxDEIRfQMfTU",
  });

  const res = await client.getEntries({ content_type: "caseStudy" });

  return {
    props: {
      studies: res.items,
    },
  };
}

export default function Recipes({ studies }) {
  console.log(studies);

  return (
    <div className="recipe-list">
      {studies.map((study) => (
        <CaseCard key={study.sys.id} study={study} />
      ))}

      <style jsx>{`
        .recipe-list {
          display: grid;
          grid-template-columns: 1fr 1fr;
          grid-gap: 20px 60px;
        }
      `}</style>
    </div>
  );
}
