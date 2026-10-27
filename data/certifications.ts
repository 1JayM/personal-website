export type Certification = {
  name: string;
  issuer: string;
  description: string;
  date: string;
  credentialUrl?: string;
};

export const certifications: Certification[] = [
  {
    name: "Cybersecurity Job Simulation",
    issuer: "JPMorgan Chase & Co.",
    description:
      "Completed a job simulation exploring cybersecurity concepts and practical industry tasks.",
    date: "July 2024",
    credentialUrl:
      "https://forage-uploads-prod.s3.amazonaws.com/completion-certificates/J.P.%20Morgan/gWbW5qHAChqQBGWpA_JPMorgan%20Chase%20&%20Co._CcmcWLkN6ZNK6LZjQ_1722352837572_completion_certificate.pdf",
  },
  {
    name: "Excel Skills Job Simulation",
    issuer: "JPMorgan Chase & Co.",
    description: "Practised spreadsheet skills and applied Excel to simulated workplace tasks.",
    date: "July 2024",
    credentialUrl:
      "https://forage-uploads-prod.s3.amazonaws.com/completion-certificates/JPMorgan%20Chase%20Corporate/XiuvjcwqWRqH9oy38_JPMorgan%20Chase%20&%20Co._CcmcWLkN6ZNK6LZjQ_1722262235416_completion_certificate.pdf",
  },
  {
    name: "Bloomberg Market Concepts (BMC)",
    issuer: "Bloomberg",
    description:
      "Completed the Bloomberg Market Concepts (BMC) course, covering financial markets, economic indicators, and investment strategies.",
    date: "July 2026",
    credentialUrl: "https://portal.bloombergforeducation.com/certificates/ajdJ62GX5FkXNpnMfv9XUxbK",
  },
  {
    name: "Bloomberg Finance Fundamentals (BFF)",
    issuer: "Bloomberg",
    description:
      "Completed the Bloomberg Finance Fundamentals (BFF) course, covering financial analysis, accounting principles, and investment concepts.",
    date: "July 2026",
    credentialUrl: "https://portal.bloombergforeducation.com/certificates/HUMJhwXSq5Mw57GEE15LP8dE",
  },
  {
    name: "McGill Personal Finance Essentials",
    issuer: "McGill University - Desautels Faculty of Management",
    description:
      "Completed the McGill Personal Finance Essentials course, covering fundamental personal finance concepts and strategies.",
    date: "October 2026",
    credentialUrl: "",
  },
  {
    name: "DELF A2",
    issuer: "ALlianse Française de Toronto",
    description:
      "Completed the DELF A2 exam, demonstrating proficiency in French language skills at the A2 level.",
    date: "June 2024",
    credentialUrl: "",
  },
];
