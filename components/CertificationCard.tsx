import type { Certification } from "@/data/certifications";

export default function CertificationCard({ certification }: { certification: Certification }) {
  return (
    <article className="certification-card">
      <div className="certificate-icon" aria-hidden="true">
        <span>✳</span>
      </div>

      <div className="certification-content">
        <p className="certification-issuer">{certification.issuer}</p>
        <h3>{certification.name}</h3>
        <p className="certification-description">{certification.description}</p>

        <div className="certification-bottom">
          <span>{certification.date}</span>

          {certification.credentialUrl && (
            <a href={certification.credentialUrl} target="_blank" rel="noreferrer">
              Verify credential ↗
            </a>
          )}
        </div>
      </div>
    </article>
  );
}
