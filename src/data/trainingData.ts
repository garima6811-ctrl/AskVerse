export interface QAPair {
  question: string;
  answer: string;
  domain: string;
  keywords: string[];
  sourceIds: string[];
}

export const trainingData: QAPair[] = [
  // CASE Domain
  {
    question: "How do I create a new matter in CASE?",
    answer: "Creating a new matter in CASE is straightforward.\n\n1. Log in to the CASE platform\n2. Click 'New Matter' in the top navigation\n3. Fill in required fields: matter name, client, matter type, and assigned attorneys\n4. Add optional details like budget, timeline, and custom fields\n5. Click 'Save' to create the matter\n\nOnce created, you can start uploading documents and tracking case activities.",
    domain: "CASE",
    keywords: ["create matter", "new matter", "case", "matter creation"],
    sourceIds: ["case-001", "case-002"]
  },
  {
    question: "What document types can I upload to CASE?",
    answer: "CASE supports a wide variety of document formats including PDFs, Word documents (DOC, DOCX), Excel spreadsheets, PowerPoint presentations, images (JPG, PNG), emails (MSG, EML), and text files. Maximum file size is 500MB per document. Bulk upload is available for multiple documents.",
    domain: "CASE",
    keywords: ["upload", "documents", "file types", "formats"],
    sourceIds: ["case-002"]
  },
  {
    question: "How does CASE integrate with other systems?",
    answer: "CASE integrates with multiple enterprise systems through REST APIs.\n\n• Salesforce integration for client and matter sync\n• SharePoint connection for document management\n• Single sign-on (SSO) for unified authentication\n• Webhook notifications for real-time updates\n• Automated data synchronization on configurable schedules\n\nContact IT for integration setup and API documentation.",
    domain: "CASE",
    keywords: ["integration", "api", "salesforce", "sharepoint", "sso"],
    sourceIds: ["case-003"]
  },

  // CASE Billing Domain
  {
    question: "How do I generate an invoice in CASE Billing?",
    answer: "Generating invoices in CASE Billing is automated and customizable.\n\n1. Navigate to the CASE Billing dashboard\n2. Select the matter for invoicing\n3. Review billable hours and expenses\n4. Click 'Generate Invoice'\n5. Customize invoice template if needed\n6. Send via email or export to PDF\n\nThe system automatically calculates totals, applies correct rates, and includes all approved charges.",
    domain: "CASE Billing",
    keywords: ["invoice", "billing", "generate invoice", "payment"],
    sourceIds: ["case-billing-001", "case-billing-002"]
  },
  {
    question: "How do I update billing rates?",
    answer: "Billing rate updates are managed through rate cards. Navigate to Settings > Rate Cards, select the attorney or practice area, and update the hourly rate. The system tracks rate history, so changes apply going forward while preserving historical rates for prior work. Rate changes require manager approval.",
    domain: "CASE Billing",
    keywords: ["billing rates", "rate card", "hourly rate", "update rates"],
    sourceIds: ["case-billing-003"]
  },
  {
    question: "What expenses are billable?",
    answer: "Billable expenses include court filing fees, deposition costs, expert witness fees, travel expenses (when approved), document production costs, and research database charges. All expenses require receipts and must be coded to the appropriate matter. Client-specific billing guidelines may restrict certain expense types.",
    domain: "CASE Billing",
    keywords: ["expenses", "billable", "reimbursement", "costs"],
    sourceIds: ["case-billing-001"]
  },

  // Finance Domain
  {
    question: "How do I submit expense reports?",
    answer: "Submit expense reports through the finance portal within 30 days of incurring expenses.\n\n1. Log in to the finance portal\n2. Click 'New Expense Report'\n3. Add expense line items with dates and amounts\n4. Attach receipts for expenses over $25\n5. Submit for approval\n\nReimbursement is processed within 10 business days of approval.",
    domain: "Finance",
    keywords: ["expense report", "reimbursement", "expenses", "submit"],
    sourceIds: ["finance-003"]
  },
  {
    question: "What is the budget approval process?",
    answer: "Budget approval follows a structured annual cycle.\n\n• Q3: Department heads submit budget requests\n• Finance team consolidates and analyzes all requests\n• Executive team reviews and provides feedback\n• Final budget approved before fiscal year start\n• Quarterly reviews track actuals vs. budget\n\nMid-year adjustments require executive approval for amounts exceeding 10% variance.",
    domain: "Finance",
    keywords: ["budget", "approval", "planning", "fiscal"],
    sourceIds: ["finance-002"]
  },
  {
    question: "When are financial reports due?",
    answer: "Financial reports follow a monthly schedule. Monthly reports (income statement, balance sheet, cash flow) are due by the 10th business day of the following month. Quarterly reports require additional analysis and are due within 15 business days of quarter end. All reports require CFO approval before distribution.",
    domain: "Finance",
    keywords: ["financial reports", "reporting", "deadlines", "schedule"],
    sourceIds: ["finance-001"]
  },

  // Salesforce Domain
  {
    question: "How do I create an opportunity in Salesforce?",
    answer: "Creating opportunities in Salesforce tracks potential sales.\n\n1. Navigate to the Opportunities tab\n2. Click 'New Opportunity'\n3. Enter opportunity name, account, amount, and close date\n4. Select stage (Prospecting, Qualification, Proposal, etc.)\n5. Add products/services if applicable\n6. Save the opportunity\n\nUpdate the stage and details regularly for accurate forecasting.",
    domain: "Salesforce",
    keywords: ["opportunity", "create", "sales", "pipeline"],
    sourceIds: ["salesforce-001", "salesforce-002"]
  },
  {
    question: "How do I update client information in Salesforce?",
    answer: "Update client information in the Accounts section. Search for the account, click to open, then click 'Edit' to modify contact details, billing address, account status, or custom fields. All changes are logged in the account history. Important updates should be noted in the account activity timeline.",
    domain: "Salesforce",
    keywords: ["client", "account", "update", "information"],
    sourceIds: ["salesforce-001"]
  },
  {
    question: "How do I run sales reports in Salesforce?",
    answer: "Run sales reports from the Reports tab. Common reports include pipeline analysis, win/loss reports, and revenue forecasts. Use filters for date ranges, regions, or sales reps. Create custom reports with the report builder, applying groupings and formulas as needed. Schedule reports for automatic delivery to stakeholders.",
    domain: "Salesforce",
    keywords: ["reports", "sales reports", "analytics", "dashboard"],
    sourceIds: ["salesforce-003"]
  },

  // DEFS Domain
  {
    question: "How do I file documents electronically using DEFS?",
    answer: "Electronic filing through DEFS streamlines court submissions.\n\n1. Log in to the DEFS portal\n2. Select the case and filing type\n3. Upload documents (ensure proper formatting)\n4. Validate metadata and filing requirements\n5. Submit filing and receive confirmation receipt\n6. Monitor filing status in the dashboard\n\nEmergency filings are available 24/7 with expedited processing.",
    domain: "DEFS",
    keywords: ["electronic filing", "e-filing", "court", "documents"],
    sourceIds: ["defs-001", "defs-002"]
  },
  {
    question: "What are the court filing requirements in DEFS?",
    answer: "Court filing requirements vary by jurisdiction. Generally, documents must be in PDF format with searchable text, properly bookmarked, and under 25MB. Metadata must include case number, party names, and document type. DEFS automatically validates formatting against court-specific rules before submission. Check the court rules library in DEFS for detailed requirements.",
    domain: "DEFS",
    keywords: ["filing requirements", "court rules", "formatting", "compliance"],
    sourceIds: ["defs-002"]
  },
  {
    question: "How do I track filing status in DEFS?",
    answer: "Track filing status in the DEFS dashboard. Each filing shows current status: Submitted, Accepted, Rejected, or Filed. Email notifications alert you to status changes. For rejected filings, the system displays rejection reasons and allows resubmission. Historical filing records are maintained for audit and compliance purposes.",
    domain: "DEFS",
    keywords: ["filing status", "tracking", "notifications", "dashboard"],
    sourceIds: ["defs-001", "defs-002"]
  },

  // Ediscovery Domain
  {
    question: "What is the ediscovery process?",
    answer: "Our ediscovery process follows the EDRM (Electronic Discovery Reference Model).\n\n1. Information Governance - Data policies and procedures\n2. Identification - Locate potentially relevant data\n3. Preservation - Legal hold and data protection\n4. Collection - Forensically sound data gathering\n5. Processing - Data filtering and de-duplication\n6. Review - Document analysis and coding\n7. Analysis - Pattern identification and insights\n8. Production - Delivering responsive documents\n9. Presentation - Courtroom presentation\n\nEach phase has specific quality controls and documentation requirements.",
    domain: "Ediscovery",
    keywords: ["ediscovery", "edrm", "process", "electronic discovery"],
    sourceIds: ["ediscovery-001"]
  },
  {
    question: "How do I preserve electronic evidence?",
    answer: "Evidence preservation begins with legal hold procedures. Identify custodians and data sources, issue legal hold notices, document acknowledgments, collect data using forensically sound methods, maintain chain of custody logs, and store data securely. Use approved collection tools to ensure data integrity. All preservation activities must be thoroughly documented.",
    domain: "Ediscovery",
    keywords: ["preservation", "legal hold", "evidence", "collection"],
    sourceIds: ["ediscovery-002"]
  },
  {
    question: "What tools do we use for ediscovery?",
    answer: "Our ediscovery technology stack includes Relativity for document review and workflow management, Nuix for data processing and analytics, Cellebrite for mobile device collection, and custom tools for specialized data types. All tools are certified and validated for legal proceedings. Training is available for all platforms.",
    domain: "Ediscovery",
    keywords: ["tools", "relativity", "nuix", "technology"],
    sourceIds: ["ediscovery-003"]
  },

  // Managed Review Domain
  {
    question: "What is the document review process?",
    answer: "The managed review process ensures thorough and accurate document analysis.\n\n• First-level review: Initial document coding and responsiveness determination\n• Second-level review: Quality control sampling and validation\n• Privilege review: Identification of attorney-client privileged materials\n• Quality metrics: Continuous accuracy tracking (98% target)\n• Ongoing training: Regular sessions to address issues and maintain standards\n\nProject managers oversee workflow and communicate with stakeholders throughout the process.",
    domain: "Managed Review",
    keywords: ["document review", "review process", "managed review", "workflow"],
    sourceIds: ["managed-review-001", "managed-review-002"]
  },
  {
    question: "How is quality control managed in document review?",
    answer: "Quality control uses statistical sampling, accuracy metrics, and continuous training. Random samples are pulled for validation, with target accuracy rates of 98% or higher. Reviewers receive real-time feedback on errors. Quality analysts identify trends and provide targeted training. All quality metrics are reported to project stakeholders.",
    domain: "Managed Review",
    keywords: ["quality control", "qc", "accuracy", "validation"],
    sourceIds: ["managed-review-002"]
  },
  {
    question: "What is the reviewer training program?",
    answer: "All reviewers complete comprehensive training covering platform navigation, review protocols, privilege identification, quality standards, and matter-specific requirements. Training includes hands-on exercises and assessment tests. Ongoing sessions address identified issues and reinforce best practices. Training materials are updated regularly based on project needs.",
    domain: "Managed Review",
    keywords: ["training", "reviewer", "education", "onboarding"],
    sourceIds: ["managed-review-003"]
  },

  // Cyber Review Domain
  {
    question: "How do we investigate cyber incidents?",
    answer: "Cyber incident investigation follows a structured approach.\n\n1. Incident Triage: Assess severity and impact\n2. Forensic Collection: Preserve digital evidence\n3. Analysis: Examine logs, artifacts, and malware\n4. Timeline Reconstruction: Map attack progression\n5. Impact Assessment: Determine scope of compromise\n6. Reporting: Document findings and recommendations\n7. Regulatory Notifications: Comply with breach notification requirements\n\nForensic investigators maintain chain of custody throughout the process.",
    domain: "Cyber Review",
    keywords: ["cyber incident", "investigation", "forensics", "breach"],
    sourceIds: ["cyber-review-001"]
  },
  {
    question: "What are digital forensics procedures?",
    answer: "Digital forensics follows industry-standard procedures. Create forensic images of all evidence, preserve integrity using write-blockers and hash validation, analyze system logs and artifacts, identify indicators of compromise, document all findings with timestamps, and maintain chain of custody documentation. All procedures ensure evidence is admissible in legal proceedings.",
    domain: "Cyber Review",
    keywords: ["digital forensics", "forensic", "procedures", "evidence"],
    sourceIds: ["cyber-review-002"]
  },
  {
    question: "How do we analyze cyber threats?",
    answer: "Threat analysis combines multiple intelligence sources. Use threat intelligence platforms to identify known attack patterns, analyze malware in isolated sandboxes, correlate network traffic patterns, assess attribution based on tactics and tools, and provide remediation recommendations. Analysis results guide incident response and security improvements.",
    domain: "Cyber Review",
    keywords: ["threat analysis", "threat intelligence", "malware", "attribution"],
    sourceIds: ["cyber-review-003"]
  },

  // Datamart Tech Domain
  {
    question: "How is the datamart structured?",
    answer: "The datamart uses a star schema architecture for optimal query performance.\n\n• Fact tables: Contain measurable data (transactions, events)\n• Dimension tables: Provide context (time, clients, matters)\n• Data ingestion: Batch and real-time processing\n• Transformation: Business rule application and data quality checks\n• Reporting layer: Pre-aggregated views for common queries\n\nArchitecture supports both operational reporting and analytical queries.",
    domain: "Datamart Tech",
    keywords: ["datamart", "architecture", "structure", "schema"],
    sourceIds: ["datamart-001"]
  },
  {
    question: "How do I optimize datamart queries?",
    answer: "Query optimization uses several techniques: leverage indexes on commonly filtered columns, use partitioning for large tables, create materialized views for complex aggregations, filter data early in the query, use appropriate join types, limit result sets with WHERE clauses, avoid SELECT * statements, and leverage query result caching. Monitor query performance metrics and adjust strategies accordingly.",
    domain: "Datamart Tech",
    keywords: ["query optimization", "performance", "queries", "tuning"],
    sourceIds: ["datamart-003"]
  },
  {
    question: "What is the data refresh schedule for the datamart?",
    answer: "The datamart refreshes on a scheduled basis. Nightly ETL jobs run at 2 AM for full data refresh, incremental updates occur every 4 hours during business hours, and real-time feeds update critical metrics continuously. Data quality checks validate completeness before making data available. Check the datamart dashboard for last refresh timestamp and next scheduled update.",
    domain: "Datamart Tech",
    keywords: ["data refresh", "etl", "schedule", "updates"],
    sourceIds: ["datamart-002"]
  },
];

export function findBestAnswer(query: string, selectedTags: string[] = []): QAPair | null {
  const queryLower = query.toLowerCase();
  
  // Filter by domain tags if provided
  let candidates = selectedTags.length > 0 
    ? trainingData.filter(qa => selectedTags.includes(qa.domain))
    : trainingData;

  // Score each candidate based on keyword matches
  const scored = candidates.map(qa => {
    let score = 0;
    
    // Check if query matches question closely
    if (qa.question.toLowerCase().includes(queryLower) || queryLower.includes(qa.question.toLowerCase())) {
      score += 10;
    }
    
    // Check keyword matches
    qa.keywords.forEach(keyword => {
      if (queryLower.includes(keyword.toLowerCase())) {
        score += 2;
      }
    });

    // Partial keyword matches
    const queryWords = queryLower.split(' ');
    qa.keywords.forEach(keyword => {
      queryWords.forEach(word => {
        if (word.length > 3 && keyword.toLowerCase().includes(word)) {
          score += 1;
        }
      });
    });

    return { qa, score };
  });

  // Sort by score and return best match if score is high enough
  scored.sort((a, b) => b.score - a.score);
  
  return scored.length > 0 && scored[0].score >= 3 ? scored[0].qa : null;
}
