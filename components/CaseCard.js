
import React from "react";
import Link from "next/link";
import Image from "next/image";

export default function CaseCard({ study }) {
  const { title, slug, time, thumbnail } = study.fields;
  const scaledWidth = thumbnail.fields.file.details.image.width * 0.35;  
  const scaledHeight = thumbnail.fields.file.details.image.height * 0.35; 
  return (
    <div className="card">
      <div className="featured">
        <Image
          src={"https:" + thumbnail.fields.file.url}
          width={scaledWidth}
          height={scaledHeight}
        />
      </div>
      <div className="content">
        <div className="info">
          <h4>{title}</h4>
        </div>
        <div className="actions">
          <Link href={"/designs/" + slug} passHref legacyBehavior>
            <a>view</a>
          </Link>
        </div>
      </div>

      <style jsx>{`
        .card {
          transform: rotateZ(-2deg);
          margin: 10px auto;
        }

        @media (max-width: 768px) {
          .card {
            margin: 10px auto;
          }
          .card-container {
            padding-left: 50px;
            padding-right: 50px;
          }
        }

        .card-container {
          display: flex;
          flex-wrap: wrap;
        }

        .content {
          background: #fff;
          box-shadow: 1px 3px 5px rgba(0, 0, 0, 0.1);
          margin: 15px 0;
          position: relative;
          top: -15px;
          left: -3.75px;
        }

        .info {
          padding: 1.875px;
        }

        .info h4 {
          margin: 0.75px 0;
          text-transform: uppercase;
        }

        .actions {
          margin-top: 3.75px;
          display: flex;
          justify-content: flex-end;
        }

        .actions a {
          color: #fff;
          background: #f01b29;
          padding: 6px 9px;
          text-decoration: none;
        }
      `}</style>
    </div>
  );
}



