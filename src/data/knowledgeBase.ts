export interface KnowledgeSource {
  id: string;
  title: string;
  type: 'text' | 'pdf' | 'ppt' | 'image' | 'video' | 'document';
  domain: string;
  content: string;
  url: string;
}

export const knowledgeBase: KnowledgeSource[] = [
  // CASE Domain
  {
    id: 'case-001',
    title: 'CASE Platform Overview',
    type: 'pdf',
    domain: 'CASE',
    content: 'CASE (Comprehensive Analytics and Support Environment) is our enterprise platform for managing legal and compliance workflows. The platform provides document management, case tracking, matter management, and integrated analytics capabilities.',
    url: '/sharepoint/case/platform-overview.pdf'
  },
  {
    id: 'case-002',
    title: 'CASE User Guide',
    type: 'document',
    domain: 'CASE',
    content: 'Access CASE through the web portal. Key features include: matter creation and tracking, document upload and organization, search and filtering capabilities, reporting dashboards, and collaboration tools. Users can create custom workflows and automate routine tasks.',
    url: '/sharepoint/case/user-guide.docx'
  },
  {
    id: 'case-003',
    title: 'CASE Integration Guide',
    type: 'pdf',
    domain: 'CASE',
    content: 'CASE integrates with Salesforce, SharePoint, and other enterprise systems via REST APIs. Supports single sign-on (SSO), automated data synchronization, and webhook notifications for real-time updates.',
    url: '/sharepoint/case/integration-guide.pdf'
  },

  // CASE Billing Domain
  {
    id: 'case-billing-001',
    title: 'CASE Billing System Guide',
    type: 'pdf',
    domain: 'CASE Billing',
    content: 'CASE Billing handles all invoicing and payment tracking for legal matters. Features include: hourly rate management, expense tracking, invoice generation, payment processing, and financial reporting. Supports multiple billing arrangements including hourly, flat fee, and contingency.',
    url: '/sharepoint/case-billing/billing-guide.pdf'
  },
  {
    id: 'case-billing-002',
    title: 'Invoice Generation Process',
    type: 'document',
    domain: 'CASE Billing',
    content: 'Generate invoices monthly or on-demand. The system automatically calculates billable hours, applies approved rates, includes expenses, and generates detailed line-item invoices. Invoices can be customized with client branding and sent via email or exported to PDF.',
    url: '/sharepoint/case-billing/invoice-process.docx'
  },
  {
    id: 'case-billing-003',
    title: 'Rate Card Management',
    type: 'document',
    domain: 'CASE Billing',
    content: 'Manage billing rates by attorney level, practice area, and client. Rate cards can include standard rates, discounted rates, and special arrangements. System tracks rate changes over time and applies the correct rate based on work date.',
    url: '/sharepoint/case-billing/rate-cards.docx'
  },

  // Finance Domain
  {
    id: 'finance-001',
    title: 'Financial Reporting Standards',
    type: 'pdf',
    domain: 'Finance',
    content: 'Financial reporting follows GAAP standards. Monthly reports include: income statements, balance sheets, cash flow statements, and variance analysis. All reports are reviewed by the finance team and approved by the CFO before distribution.',
    url: '/sharepoint/finance/reporting-standards.pdf'
  },
  {
    id: 'finance-002',
    title: 'Budget Planning and Approval',
    type: 'document',
    domain: 'Finance',
    content: 'Annual budget planning begins in Q3. Department heads submit budget requests, finance team consolidates and analyzes, executive team reviews and approves. Quarterly budget reviews track actuals vs. plan and adjust forecasts as needed.',
    url: '/sharepoint/finance/budget-planning.docx'
  },
  {
    id: 'finance-003',
    title: 'Expense Reimbursement Policy',
    type: 'pdf',
    domain: 'Finance',
    content: 'Submit expense reports within 30 days of incurring expenses. Approved expenses include: travel, meals, accommodations, client entertainment (with approval), and business supplies. Attach receipts for all expenses over $25. Reimbursement processed within 10 business days.',
    url: '/sharepoint/finance/expense-policy.pdf'
  },

  // Salesforce Domain
  {
    id: 'salesforce-001',
    title: 'Salesforce CRM User Guide',
    type: 'pdf',
    domain: 'Salesforce',
    content: 'Salesforce is our customer relationship management platform. Use it to track leads, opportunities, accounts, contacts, and cases. All client interactions should be logged in Salesforce for visibility and reporting. Custom fields and workflows are configured for our specific business needs.',
    url: '/sharepoint/salesforce/user-guide.pdf'
  },
  {
    id: 'salesforce-002',
    title: 'Salesforce Opportunity Management',
    type: 'document',
    domain: 'Salesforce',
    content: 'Track sales opportunities through the pipeline: Prospecting, Qualification, Proposal, Negotiation, Closed Won/Lost. Update opportunity stage, amount, close date, and probability regularly. Sales forecasting relies on accurate opportunity data.',
    url: '/sharepoint/salesforce/opportunity-mgmt.docx'
  },
  {
    id: 'salesforce-003',
    title: 'Salesforce Custom Reports',
    type: 'ppt',
    domain: 'Salesforce',
    content: 'Create custom reports and dashboards in Salesforce. Common reports include: sales pipeline by stage, win/loss analysis, client engagement metrics, and revenue forecasts. Use filters, groupings, and formulas for advanced analysis. Schedule reports for automatic delivery.',
    url: '/sharepoint/salesforce/custom-reports.pptx'
  },

  // DEFS Domain
  {
    id: 'defs-001',
    title: 'DEFS System Architecture',
    type: 'pdf',
    domain: 'DEFS',
    content: 'DEFS (Data Exchange and Filing System) manages secure document exchange with courts, agencies, and clients. Supports electronic filing, certified delivery tracking, and compliance with court-specific formatting requirements. Integrates with case management systems.',
    url: '/sharepoint/defs/architecture.pdf'
  },
  {
    id: 'defs-002',
    title: 'Electronic Filing Procedures',
    type: 'document',
    domain: 'DEFS',
    content: 'File documents electronically using DEFS. Prepare documents according to court rules, validate formatting and metadata, submit via DEFS portal, receive confirmation receipt, and monitor filing status. Emergency filings available 24/7 with expedited processing.',
    url: '/sharepoint/defs/filing-procedures.docx'
  },
  {
    id: 'defs-003',
    title: 'DEFS Security and Compliance',
    type: 'pdf',
    domain: 'DEFS',
    content: 'DEFS implements end-to-end encryption, secure authentication, audit logging, and compliance with court security requirements. All transmissions are encrypted using TLS 1.3. Access controls based on user roles and matter permissions.',
    url: '/sharepoint/defs/security-compliance.pdf'
  },

  // Ediscovery Domain
  {
    id: 'ediscovery-001',
    title: 'Ediscovery Process Overview',
    type: 'ppt',
    domain: 'Ediscovery',
    content: 'Ediscovery process follows EDRM model: Information Governance, Identification, Preservation, Collection, Processing, Review, Analysis, Production, and Presentation. Each phase has specific procedures, quality controls, and documentation requirements.',
    url: '/sharepoint/ediscovery/process-overview.pptx'
  },
  {
    id: 'ediscovery-002',
    title: 'Data Collection and Preservation',
    type: 'pdf',
    domain: 'Ediscovery',
    content: 'Legal hold procedures ensure data preservation. Identify custodians and data sources, issue legal hold notices, collect data using forensically sound methods, maintain chain of custody, and document all collection activities. Use approved collection tools and methods.',
    url: '/sharepoint/ediscovery/collection-preservation.pdf'
  },
  {
    id: 'ediscovery-003',
    title: 'Ediscovery Technology Stack',
    type: 'document',
    domain: 'Ediscovery',
    content: 'Our ediscovery platform includes: Relativity for document review, Nuix for processing and analytics, Cellebrite for mobile device collection, and custom tools for specialized data types. All tools certified and validated for legal proceedings.',
    url: '/sharepoint/ediscovery/technology-stack.docx'
  },

  // Managed Review Domain
  {
    id: 'managed-review-001',
    title: 'Managed Review Services Guide',
    type: 'pdf',
    domain: 'Managed Review',
    content: 'Managed Review provides scalable document review services. Services include: reviewer staffing, project management, quality control, workflow design, and technology setup. Review teams trained on specific matter requirements and review protocols.',
    url: '/sharepoint/managed-review/services-guide.pdf'
  },
  {
    id: 'managed-review-002',
    title: 'Review Workflow and Quality Control',
    type: 'document',
    domain: 'Managed Review',
    content: 'Review workflow includes first-level review, second-level quality check, and privilege review. Quality control measures: random sampling, statistical validation, accuracy metrics, and continuous reviewer training. Target accuracy rate: 98% or higher.',
    url: '/sharepoint/managed-review/workflow-qc.docx'
  },
  {
    id: 'managed-review-003',
    title: 'Reviewer Training Program',
    type: 'ppt',
    domain: 'Managed Review',
    content: 'All reviewers complete comprehensive training: platform navigation, review protocols, privilege identification, quality standards, and matter-specific training. Ongoing training sessions address identified issues and reinforce best practices.',
    url: '/sharepoint/managed-review/training-program.pptx'
  },

  // Cyber Review Domain
  {
    id: 'cyber-review-001',
    title: 'Cyber Incident Review Process',
    type: 'pdf',
    domain: 'Cyber Review',
    content: 'Cyber review investigates security incidents, data breaches, and cyber attacks. Process includes: incident triage, forensic data collection, malware analysis, timeline reconstruction, impact assessment, and regulatory notification requirements.',
    url: '/sharepoint/cyber-review/incident-process.pdf'
  },
  {
    id: 'cyber-review-002',
    title: 'Digital Forensics Procedures',
    type: 'document',
    domain: 'Cyber Review',
    content: 'Forensic investigations follow industry standards. Create forensic images, preserve evidence integrity, analyze logs and artifacts, identify indicators of compromise, document findings, and maintain chain of custody for potential legal proceedings.',
    url: '/sharepoint/cyber-review/forensics-procedures.docx'
  },
  {
    id: 'cyber-review-003',
    title: 'Threat Intelligence and Analysis',
    type: 'ppt',
    domain: 'Cyber Review',
    content: 'Cyber review includes threat intelligence gathering, attack vector analysis, attribution assessment, and remediation recommendations. Use threat intelligence platforms, malware sandboxes, and network analysis tools to understand and respond to cyber threats.',
    url: '/sharepoint/cyber-review/threat-intelligence.pptx'
  },

  // Datamart Tech Domain
  {
    id: 'datamart-001',
    title: 'Datamart Architecture Overview',
    type: 'pdf',
    domain: 'Datamart Tech',
    content: 'Datamart Tech provides specialized data warehouses for analytics and reporting. Architecture includes: data ingestion layers, transformation pipelines, star schema models, query optimization, and reporting interfaces. Supports both batch and real-time data loads.',
    url: '/sharepoint/datamart/architecture-overview.pdf'
  },
  {
    id: 'datamart-002',
    title: 'Datamart ETL Processes',
    type: 'document',
    domain: 'Datamart Tech',
    content: 'ETL processes extract data from source systems, transform according to business rules, and load into data warehouse. Scheduled jobs run nightly with incremental updates. Data quality checks validate completeness and accuracy before making data available for reporting.',
    url: '/sharepoint/datamart/etl-processes.docx'
  },
  {
    id: 'datamart-003',
    title: 'Datamart Query Optimization',
    type: 'pdf',
    domain: 'Datamart Tech',
    content: 'Optimize queries using indexes, partitioning, and materialized views. Best practices include: filter early, use appropriate joins, limit result sets, avoid SELECT *, and leverage query caching. Monitor query performance and adjust optimization strategies as needed.',
    url: '/sharepoint/datamart/query-optimization.pdf'
  },
];

const domainSuggestions: Record<string, string[]> = {
  'CASE': [
    'How do I create a new matter in CASE?',
    'What document types can I upload to CASE?',
    'How do I search for documents in CASE?',
  ],
  'CASE Billing': [
    'How do I generate an invoice in CASE Billing?',
    'How do I update billing rates?',
    'What expenses are billable?',
  ],
  'Finance': [
    'How do I submit expense reports?',
    'What is the budget approval process?',
    'When are financial reports due?',
  ],
  'Salesforce': [
    'How do I create an opportunity in Salesforce?',
    'How do I update client information?',
    'How do I run sales reports?',
  ],
  'DEFS': [
    'How do I file documents electronically?',
    'What are the court filing requirements?',
    'How do I track filing status?',
  ],
  'Ediscovery': [
    'What is the ediscovery process?',
    'How do I preserve electronic evidence?',
    'What tools do we use for ediscovery?',
  ],
  'Managed Review': [
    'What is the document review process?',
    'How is quality control managed?',
    'What is the reviewer training program?',
  ],
  'Cyber Review': [
    'How do we investigate cyber incidents?',
    'What are digital forensics procedures?',
    'How do we analyze cyber threats?',
  ],
  'Datamart Tech': [
    'How is the datamart structured?',
    'How do I optimize datamart queries?',
    'What is the data refresh schedule?',
  ],
};

export function searchKnowledgeBase(query: string, tags: string[] = []): KnowledgeSource[] {
  const queryLower = query.toLowerCase();
  
  let results = knowledgeBase.filter(source => {
    const matchesDomain = tags.length === 0 || tags.includes(source.domain);
    const matchesContent = 
      source.title.toLowerCase().includes(queryLower) ||
      source.content.toLowerCase().includes(queryLower);
    
    return matchesDomain && matchesContent;
  });

  if (results.length === 0 && tags.length > 0) {
    results = knowledgeBase.filter(source => tags.includes(source.domain));
  }

  return results.slice(0, 5);
}

export function getDomainSuggestions(selectedTags: string[]): string[] {
  if (selectedTags.length === 0) {
    return Object.values(domainSuggestions).flat().slice(0, 4);
  }

  const suggestions: string[] = [];
  selectedTags.forEach(tag => {
    if (domainSuggestions[tag]) {
      suggestions.push(...domainSuggestions[tag]);
    }
  });

  return suggestions.slice(0, 4);
}

export const availableDomains = [
  'CASE',
  'CASE Billing',
  'Finance',
  'Salesforce',
  'DEFS',
  'Ediscovery',
  'Managed Review',
  'Cyber Review',
  'Datamart Tech',
];
