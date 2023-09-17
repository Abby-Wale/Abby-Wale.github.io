import React from "react";
import Link from "next/link";
import Image from "next/image";

export default function CaseCard({ study }) {
  const { title, slug, time, thumbnail } = study.fields;

  // Fixed dimensions for the image
  const fixedWidth = 300;
  const fixedHeight = 200;

  return (
    <div className="card">
      <div className="featured">
        <Image
          src={"https:" + thumbnail.fields.file.url}
          width={fixedWidth}
          height={fixedHeight}
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
    width: calc(100% - 20px);  // For mobile screens
    transform: rotateZ(-2deg);
    margin: 10px auto;  // Centers horizontally
  }

  @media (min-width: 769px) {  // Media query for desktop
    .card {
      width: calc(40% - 20px);  // Takes less than half width on desktop minus margins
      margin: 10px auto;  // Centers horizontally
    }
  }

  .featured, .content {
    width: 100%;  // Sets the width to be the same as the parent
  }

  .card-container {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;  // Centers horizontally
    align-items: center;  // Centers vertically
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



