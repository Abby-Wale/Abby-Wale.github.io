import { createClient } from "contentful";
import CaseCard from "../components/CaseCard";

export async function getStaticProps() {
  const client = createClient({
    space: process.env.CONTENTFUL_SPACE_ID,
    accessToken: process.env.CONTENTFUL_ACCESS_KEY,
  });

  try {
    const res = await client.getEntries({ content_type: "caseStudy" });
    return {
      props: {
        studies: res.items,
      },
    };
  } catch (error) {
    console.error("Error fetching data:", error);
  }
}

export default function Recipes({ studies }) {
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
