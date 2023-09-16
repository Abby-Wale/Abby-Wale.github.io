import { createClient } from "contentful";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import Image from "next/image";

const client = createClient({
  space: process.env.CONTENTFUL_SPACE_ID,
  accessToken: process.env.CONTENTFUL_ACCESS_KEY,
});

export const getStaticPaths = async () => {
  try {
    const res = await client.getEntries({
      content_type: "caseStudy",
    });
    const paths = res.items.map((item) => {
      return {
        params: { slug: item.fields.slug },
      };
    });
    return {
      paths,
      fallback: false,
    };
  } catch (error) {
    console.error("Error fetching data:", error);
  }
};

export const getStaticProps = async ({ params }) => {
  try {
    const { items } = await client.getEntries({
      content_type: "caseStudy",
      "fields.slug": params.slug,
    });
    return {
      props: { study: items[0] },
    };
  } catch (error) {
    console.error("Error fetching data:", error);
  }
};

export default function StudyDetails({ study }) {
  const { featuredImage, title, time, caseStudyData, method } = study.fields;
  const docUrl = `https://docs.google.com/viewer?url=https:${featuredImage.fields.file.url}&embedded=true`;
  
  return (
    <div>
      <div className="banner">
        <div className="head2">
          <h2>{title}</h2>
        </div>
        <iframe 
          src={docUrl} 
          style={{height: '700px', width: '100%'}}
          frameBorder="0"
        >
        </iframe>
      </div>
      {/* 
      <div className="info">
        <p>Takes about {time} weeks to finish.</p>
        <h3>Data:</h3>

        {caseStudyData.map((casedat) => (
          <span key={casedat}>{casedat}</span>
        ))}
      </div>

      <div className="method">
        <h3>Design Prototype</h3>
        <p>
          please check out the design prototype{" "}
          <a href={documentToReactComponents(method)}>here</a>
        </p>
      </div> */}

      <style jsx>{`
        h2,
        h3 {
          text-transform: uppercase;
        }
        .method {
          color: #fff;
        }
        .head2 {
          background: red;
          display: inline-block;
          padding: 10px;
          margin: 10px;
          transform: rotateZ(-2deg);
          box-shadow: 1px 3px 5px rgba(0, 0, 0, 0.1);
          color: #fff;
        }
        .banner {
          text-align: center;
        }
        .info p {
          margin: 0;
        }
        .info span::after {
          content: ", ";
        }
        .info span:last-child::after {
          content: ".";
        }
      `}</style>
    </div>
  );
}
