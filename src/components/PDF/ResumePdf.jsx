import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';

export default () => {
  const ResumePdf = useStaticQuery(graphql`
    {
      pdf: file(name: { eq: "resume" }) {
        name
        extension
        publicURL
      }
    }
  `);
  return (
    <a className="cta-btn cta-btn--resume" href={ResumePdf.pdf.publicURL}>
      Resume
    </a>
  );
};
