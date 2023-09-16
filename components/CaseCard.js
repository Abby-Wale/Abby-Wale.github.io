import React from "react";
import Link from "next/link";
import Image from "next/image";

export default function CaseCard({ study }) {
  const { title, slug, time, thumbnail } = study.fields;
  return (
    <div className="card">
      <div className="featured">
        <Image
          src={"https:" + thumbnail.fields.file.url}
          width={thumbnail.fields.file.details.image.width}
          height={thumbnail.fields.file.details.image.height}
        />
      </div>
      <div className="content">
        <div className="info">
          <h4>{title}</h4>
        </div>
        <div className="actions">
          <Link href={"/designs/" + slug}>
            <a>view case study</a>
          </Link>
        </div>
      </div>

      <style jsx>{`
        .card {
          transform: rotateZ(-2deg);
        }
        .content {
          background: #fff;
          box-shadow: 1px 3px 5px rgba(0, 0, 0, 0.1);
          margin: 40px 0;
          position: relative;
          top: -40px;
          left: -10px;
        }
        .info {
          padding: 5px;
        }
        .info h4 {
          margin: 2px 0;
          text-transform: uppercase;
        }
        .info p {
          margin: 0;
          color: #777;
        }
        .actions {
          margin-top: 10px;
          display: flex;
          justify-content: flex-end;
        }
        .actions a {
          color: #fff;
          background: #f01b29;
          padding: 16px 24px;
          text-decoration: none;
        }
      `}</style>
    </div>
  );
}
