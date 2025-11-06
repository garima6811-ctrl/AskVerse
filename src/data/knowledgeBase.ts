export interface KnowledgeSource {
  id: string;
  title: string;
  type: 'text' | 'pdf' | 'ppt' | 'image' | 'video' | 'document';
  domain: string;
  content: string;
  url: string;
}

export const knowledgeBase: KnowledgeSource[] = [
  // Legal Domain
  {
    id: 'legal-001',
    title: 'GDPR Compliance Guidelines 2024',
    type: 'pdf',
    domain: 'Legal',
    content: 'Our GDPR compliance framework ensures all personal data is processed lawfully. Key requirements include: obtaining explicit consent, maintaining data processing records, implementing privacy by design, appointing a DPO for organizations processing large-scale sensitive data, and ensuring data breach notification within 72 hours.',
    url: '/sharepoint/legal/gdpr-guidelines-2024.pdf'
  },
  {
    id: 'legal-002',
    title: 'Contract Templates & Best Practices',
    type: 'document',
    domain: 'Legal',
    content: 'Standard contract templates include NDA, SLA, MSA, and DPA agreements. All contracts must include: clear scope of work, payment terms, liability limitations, termination clauses, and dispute resolution mechanisms. Legal review is mandatory for contracts exceeding $50K value.',
    url: '/sharepoint/legal/contract-templates.docx'
  },
  {
    id: 'legal-003',
    title: 'Intellectual Property Protection Policy',
    type: 'pdf',
    domain: 'Legal',
    content: 'All company IP including software code, algorithms, databases, and documentation are protected under copyright law. Employees must sign IP assignment agreements. Third-party IP usage requires proper licensing. Patent applications should be filed for novel inventions.',
    url: '/sharepoint/legal/ip-policy.pdf'
  },

  // Data Processing Domain
  {
    id: 'data-001',
    title: 'Data Processing Architecture Overview',
    type: 'ppt',
    domain: 'Processing',
    content: 'Our data processing pipeline uses ETL (Extract, Transform, Load) methodology. Data sources include CRM, ERP, and external APIs. Processing includes data validation, normalization, deduplication, and enrichment. Output formats support JSON, CSV, Parquet, and SQL databases.',
    url: '/sharepoint/data-processing/architecture-overview.pptx'
  },
  {
    id: 'data-002',
    title: 'Data Quality Standards & Validation',
    type: 'document',
    domain: 'Processing',
    content: 'Data quality framework enforces: completeness (no missing critical fields), accuracy (validation against source systems), consistency (uniform formats), timeliness (processing within SLA), and uniqueness (no duplicate records). Quality scores must exceed 95% threshold.',
    url: '/sharepoint/data-processing/quality-standards.docx'
  },
  {
    id: 'data-003',
    title: 'ETL Pipeline Configuration Guide',
    type: 'pdf',
    domain: 'Processing',
    content: 'Configure ETL pipelines using our workflow engine. Steps include: source connection setup, transformation rules definition, error handling configuration, scheduling setup, and monitoring dashboard activation. Supports batch and real-time processing modes.',
    url: '/sharepoint/data-processing/etl-config-guide.pdf'
  },

  // Hosting Domain
  {
    id: 'host-001',
    title: 'Cloud Infrastructure Specifications',
    type: 'document',
    domain: 'Hosting',
    content: 'Our hosting infrastructure runs on AWS with multi-region deployment (US-East, EU-West, APAC-Singapore). Services include EC2 for compute, S3 for storage, RDS for databases, and CloudFront for CDN. Auto-scaling configured for 99.99% uptime SLA.',
    url: '/sharepoint/hosting/infrastructure-specs.docx'
  },
  {
    id: 'host-002',
    title: 'Server Maintenance & Patching Schedule',
    type: 'pdf',
    domain: 'Hosting',
    content: 'Maintenance windows: Second Tuesday of each month, 2-6 AM EST. Critical security patches applied within 48 hours. OS updates follow testing cycle: Dev (Week 1), Staging (Week 2), Production (Week 3). Automated backups run daily at midnight.',
    url: '/sharepoint/hosting/maintenance-schedule.pdf'
  },
  {
    id: 'host-003',
    title: 'Disaster Recovery Procedures',
    type: 'ppt',
    domain: 'Hosting',
    content: 'RTO (Recovery Time Objective): 4 hours. RPO (Recovery Point Objective): 1 hour. Backup strategy includes: hourly snapshots, daily full backups, weekly offsite replication. DR site located in different geographic region. Quarterly DR drills mandatory.',
    url: '/sharepoint/hosting/disaster-recovery.pptx'
  },

  // Development Domain
  {
    id: 'dev-001',
    title: 'Software Development Lifecycle (SDLC)',
    type: 'document',
    domain: 'Development',
    content: 'Our SDLC follows Agile methodology with 2-week sprints. Phases include: Requirements gathering, Design review, Development, Code review, QA testing, UAT, and Production deployment. All code must pass CI/CD pipeline checks before merge.',
    url: '/sharepoint/development/sdlc-guide.docx'
  },
  {
    id: 'dev-002',
    title: 'Code Review & Quality Standards',
    type: 'pdf',
    domain: 'Development',
    content: 'Code review checklist: functional correctness, security vulnerabilities, performance optimization, error handling, test coverage >80%, documentation completeness. Peer review required for all PRs. Senior developer approval needed for architecture changes.',
    url: '/sharepoint/development/code-standards.pdf'
  },
  {
    id: 'dev-003',
    title: 'API Development Guidelines',
    type: 'document',
    domain: 'Development',
    content: 'RESTful API standards: Use proper HTTP methods (GET, POST, PUT, DELETE), implement versioning (v1, v2), return standard status codes, include pagination for lists, implement rate limiting (1000 req/hour), require authentication via OAuth 2.0.',
    url: '/sharepoint/development/api-guidelines.docx'
  },

  // Deployment Domain
  {
    id: 'deploy-001',
    title: 'CI/CD Pipeline Configuration',
    type: 'ppt',
    domain: 'Deployment',
    content: 'Automated deployment pipeline: Git commit triggers build, unit tests run, code quality scan (SonarQube), security scan (SAST/DAST), build Docker image, deploy to staging, run integration tests, manual approval gate, production deployment with blue-green strategy.',
    url: '/sharepoint/deployment/cicd-pipeline.pptx'
  },
  {
    id: 'deploy-002',
    title: 'Environment Management Strategy',
    type: 'document',
    domain: 'Deployment',
    content: 'Four environments: Dev (developer machines), QA (testing), Staging (production mirror), Production (live). Environment parity ensures consistency. Configuration managed via environment variables. Secrets stored in HashiCorp Vault.',
    url: '/sharepoint/deployment/environment-strategy.docx'
  },
  {
    id: 'deploy-003',
    title: 'Rollback Procedures & Version Control',
    type: 'pdf',
    domain: 'Deployment',
    content: 'Rollback within 15 minutes for critical issues. Maintain previous 3 versions for instant rollback. Use feature flags for gradual rollout. Monitor error rates, response times, and user feedback post-deployment. Automated rollback triggers if error rate exceeds 5%.',
    url: '/sharepoint/deployment/rollback-procedures.pdf'
  },

  // Security Domain
  {
    id: 'sec-001',
    title: 'Information Security Policy 2024',
    type: 'pdf',
    domain: 'Security',
    content: 'Security framework based on ISO 27001 and NIST standards. Requirements: MFA for all users, encryption at rest (AES-256) and in transit (TLS 1.3), regular penetration testing, security awareness training, incident response plan, and annual security audits.',
    url: '/sharepoint/security/security-policy-2024.pdf'
  },
  {
    id: 'sec-002',
    title: 'Incident Response Playbook',
    type: 'document',
    domain: 'Security',
    content: 'Security incident phases: Detection (monitoring alerts), Analysis (threat assessment), Containment (isolate affected systems), Eradication (remove threat), Recovery (restore services), Lessons learned (post-mortem). Security team on-call 24/7.',
    url: '/sharepoint/security/incident-response.docx'
  },
  {
    id: 'sec-003',
    title: 'Vulnerability Management Process',
    type: 'ppt',
    domain: 'Security',
    content: 'Continuous vulnerability scanning using Nessus and Qualys. Severity levels: Critical (patch within 24h), High (within 7 days), Medium (within 30 days), Low (quarterly). Monthly security reports to CISO. Bug bounty program for external researchers.',
    url: '/sharepoint/security/vulnerability-mgmt.pptx'
  },

  // Compliance Domain
  {
    id: 'comp-001',
    title: 'SOC 2 Type II Compliance Framework',
    type: 'pdf',
    domain: 'Compliance',
    content: 'SOC 2 controls cover: Security (access controls, encryption), Availability (99.9% uptime), Processing Integrity (data accuracy), Confidentiality (data classification), Privacy (GDPR alignment). Annual audit by external firm required.',
    url: '/sharepoint/compliance/soc2-framework.pdf'
  },
  {
    id: 'comp-002',
    title: 'Regulatory Compliance Checklist',
    type: 'document',
    domain: 'Compliance',
    content: 'Applicable regulations: GDPR (EU data protection), CCPA (California privacy), HIPAA (healthcare data), PCI-DSS (payment cards), SOX (financial reporting). Compliance officer reviews quarterly. Documentation retention: 7 years minimum.',
    url: '/sharepoint/compliance/regulatory-checklist.docx'
  },
  {
    id: 'comp-003',
    title: 'Audit Trail & Record Keeping',
    type: 'pdf',
    domain: 'Compliance',
    content: 'All system activities logged with timestamps, user IDs, and actions performed. Logs retained for 1 year in hot storage, 7 years in cold storage. Tamper-proof audit trails using blockchain technology. Monthly compliance reports generated automatically.',
    url: '/sharepoint/compliance/audit-trail-policy.pdf'
  },

  // Analytics Domain
  {
    id: 'analytics-001',
    title: 'Business Intelligence Dashboard Setup',
    type: 'ppt',
    domain: 'Analytics',
    content: 'BI platform provides real-time insights into: customer behavior, revenue trends, operational efficiency, and security metrics. Built on Tableau with data warehouse integration. Automated daily reports to stakeholders. Self-service analytics enabled.',
    url: '/sharepoint/analytics/bi-dashboard-setup.pptx'
  },
  {
    id: 'analytics-002',
    title: 'Data Analytics Best Practices',
    type: 'document',
    domain: 'Analytics',
    content: 'Analytics methodology: Define KPIs, collect clean data, apply statistical methods, visualize insights, validate findings, and communicate results. Tools include Python (pandas, scikit-learn), R, SQL, and Tableau. Peer review for all analysis.',
    url: '/sharepoint/analytics/analytics-best-practices.docx'
  },
  {
    id: 'analytics-003',
    title: 'Predictive Analytics Models',
    type: 'pdf',
    domain: 'Analytics',
    content: 'Machine learning models for: customer churn prediction (85% accuracy), fraud detection (92% precision), demand forecasting (88% accuracy), and anomaly detection. Models retrained monthly with new data. A/B testing for model improvements.',
    url: '/sharepoint/analytics/predictive-models.pdf'
  },

  // Review Domain
  {
    id: 'review-001',
    title: 'Code Review Process and Guidelines',
    type: 'pdf',
    domain: 'Review',
    content: 'Our review process ensures quality and consistency. All code changes require peer review before merging. Reviewers check for: code quality, security vulnerabilities, performance issues, test coverage, and documentation. Reviews should be completed within 24 hours. Use the review checklist template for consistency.',
    url: '/sharepoint/review/code-review-guidelines.pdf'
  },
  {
    id: 'review-002',
    title: 'Document Review Workflow',
    type: 'document',
    domain: 'Review',
    content: 'Document review workflow includes: draft submission, stakeholder review, feedback collection, revision cycles, and final approval. All major documents require review from legal, compliance, and business owners. Track review status in the review management system.',
    url: '/sharepoint/review/document-review-workflow.docx'
  },
  {
    id: 'review-003',
    title: 'Design Review Best Practices',
    type: 'ppt',
    domain: 'Review',
    content: 'Design reviews validate architecture decisions before implementation. Reviews cover: system design, scalability, security, integration points, and technical debt. Include architecture diagrams and technical specifications. Schedule reviews early in the development cycle.',
    url: '/sharepoint/review/design-review-practices.pptx'
  },

  // DOC Domain
  {
    id: 'doc-001',
    title: 'Documentation Standards and Templates',
    type: 'pdf',
    domain: 'DOC',
    content: 'Follow our documentation standards for consistency. Use provided templates for: technical specifications, API documentation, user guides, and runbooks. All documentation must be stored in the central repository with version control. Update documentation with every code change.',
    url: '/sharepoint/documentation/doc-standards.pdf'
  },
  {
    id: 'doc-002',
    title: 'API Documentation Guide',
    type: 'document',
    domain: 'DOC',
    content: 'API documentation includes: endpoint descriptions, request/response formats, authentication requirements, rate limits, error codes, and example calls. Use OpenAPI/Swagger specification. Keep documentation synchronized with code using automated tools.',
    url: '/sharepoint/documentation/api-doc-guide.docx'
  },
  {
    id: 'doc-003',
    title: 'Technical Writing Guidelines',
    type: 'document',
    domain: 'DOC',
    content: 'Write clear, concise technical documentation. Use active voice, simple language, and structured format. Include: purpose, prerequisites, step-by-step instructions, screenshots, troubleshooting tips, and related resources. Review documentation for accuracy and completeness.',
    url: '/sharepoint/documentation/writing-guidelines.docx'
  },

  // ICE Domain
  {
    id: 'ice-001',
    title: 'ICE System Architecture Overview',
    type: 'ppt',
    domain: 'ICE',
    content: 'ICE (Internal Communication Engine) is our enterprise messaging platform. Architecture includes: message queues, pub/sub system, event streaming, and notification service. Supports real-time messaging, asynchronous communication, and system integration. Built for high throughput and low latency.',
    url: '/sharepoint/ice/ice-architecture.pptx'
  },
  {
    id: 'ice-002',
    title: 'ICE Integration Guide',
    type: 'pdf',
    domain: 'ICE',
    content: 'Integrate with ICE using our SDK and REST API. Common use cases: sending notifications, subscribing to events, implementing webhooks, and message routing. Authentication via API keys. Rate limits: 10,000 requests per hour. Includes code examples for Java, Python, and Node.js.',
    url: '/sharepoint/ice/ice-integration-guide.pdf'
  },
  {
    id: 'ice-003',
    title: 'ICE Monitoring and Troubleshooting',
    type: 'document',
    domain: 'ICE',
    content: 'Monitor ICE health via dashboard showing: message throughput, queue depths, latency metrics, and error rates. Common issues: message delays (check queue backlog), failed deliveries (verify endpoints), authentication errors (rotate API keys). Contact ICE support for critical issues.',
    url: '/sharepoint/ice/ice-troubleshooting.docx'
  },

  // Sightline Domain
  {
    id: 'sightline-001',
    title: 'Sightline Analytics Platform Overview',
    type: 'pdf',
    domain: 'Sightline',
    content: 'Sightline provides comprehensive business analytics and reporting. Features include: customizable dashboards, automated reports, data visualization, trend analysis, and predictive insights. Integrates with all major data sources. Access via web portal or mobile app.',
    url: '/sharepoint/sightline/sightline-overview.pdf'
  },
  {
    id: 'sightline-002',
    title: 'Creating Custom Sightline Reports',
    type: 'document',
    domain: 'Sightline',
    content: 'Build custom reports using drag-and-drop interface. Select data sources, apply filters, choose visualizations (charts, tables, graphs), and set refresh schedules. Share reports with teams or embed in applications. Use templates for common report types.',
    url: '/sharepoint/sightline/custom-reports.docx'
  },
  {
    id: 'sightline-003',
    title: 'Sightline Data Source Configuration',
    type: 'ppt',
    domain: 'Sightline',
    content: 'Connect Sightline to data sources: databases (SQL, NoSQL), APIs, cloud storage, and data warehouses. Configure connection credentials, set sync schedules, map data fields, and test connectivity. Data refreshes automatically based on schedule. Supports real-time streaming for live data.',
    url: '/sharepoint/sightline/data-source-config.pptx'
  },

  // ServiceNow Domain
  {
    id: 'servicenow-001',
    title: 'ServiceNow Ticketing System Guide',
    type: 'pdf',
    domain: 'ServiceNow',
    content: 'Use ServiceNow for IT support, incident management, and change requests. Create tickets with detailed descriptions, select appropriate category, set priority level, and attach relevant files. Track ticket status and receive notifications. Average resolution time: P1 (4 hours), P2 (24 hours), P3 (3 days).',
    url: '/sharepoint/servicenow/ticketing-guide.pdf'
  },
  {
    id: 'servicenow-002',
    title: 'ServiceNow Workflow Automation',
    type: 'document',
    domain: 'ServiceNow',
    content: 'Automate IT processes using ServiceNow workflows. Common automations: user provisioning, access requests, asset management, and approval routing. Build workflows using visual designer. Configure triggers, conditions, actions, and notifications. Test workflows in sandbox before production deployment.',
    url: '/sharepoint/servicenow/workflow-automation.docx'
  },
  {
    id: 'servicenow-003',
    title: 'ServiceNow Integration API',
    type: 'pdf',
    domain: 'ServiceNow',
    content: 'Integrate applications with ServiceNow using REST API. API supports: creating/updating tickets, querying records, managing configurations, and retrieving reports. Authentication via OAuth 2.0. Include comprehensive API documentation with examples. Rate limits and best practices for bulk operations.',
    url: '/sharepoint/servicenow/integration-api.pdf'
  },
];

export const getDomainSuggestions = (selectedTags: string[]): string[] => {
  const suggestionMap: Record<string, string[]> = {
    Legal: [
      'What are our GDPR compliance requirements?',
      'How do I create a standard contract?',
      'What is our IP protection policy?',
      'When is legal review required?',
    ],
    Processing: [
      'How does our ETL pipeline work?',
      'What are the data quality standards?',
      'How to configure data validation?',
      'What formats do we support?',
    ],
    Hosting: [
      'What is our infrastructure setup?',
      'When is the next maintenance window?',
      'What is our disaster recovery plan?',
      'How do I request a server upgrade?',
    ],
    Development: [
      'What is our development workflow?',
      'What are the code review requirements?',
      'How to create a new API endpoint?',
      'What testing is required?',
    ],
    Deployment: [
      'How does our CI/CD pipeline work?',
      'What are the deployment environments?',
      'How do I rollback a deployment?',
      'What are the approval requirements?',
    ],
    Security: [
      'What are our security policies?',
      'How to report a security incident?',
      'What is the vulnerability patching timeline?',
      'What security tools do we use?',
    ],
    Compliance: [
      'What compliance standards do we follow?',
      'How to prepare for SOC 2 audit?',
      'What is our data retention policy?',
      'How are audit logs maintained?',
    ],
    Analytics: [
      'How to access BI dashboards?',
      'What analytics tools are available?',
      'How to request a custom report?',
      'What are our key performance metrics?',
    ],
    Review: [
      'What is the code review process?',
      'How to submit documents for review?',
      'What are design review requirements?',
      'How long does review take?',
    ],
    DOC: [
      'What documentation standards do we follow?',
      'How to write API documentation?',
      'Where are the documentation templates?',
      'How to update technical docs?',
    ],
    ICE: [
      'What is ICE platform?',
      'How to integrate with ICE?',
      'What are ICE rate limits?',
      'How to troubleshoot ICE issues?',
    ],
    Sightline: [
      'How to access Sightline?',
      'How to create custom reports?',
      'How to connect data sources?',
      'What visualizations are available?',
    ],
    ServiceNow: [
      'How to create a ticket?',
      'What are ticket priority levels?',
      'How to automate workflows?',
      'How to use ServiceNow API?',
    ],
  };

  if (selectedTags.length === 0) {
    return [
      'What services does our company provide?',
      'How do I get started with data processing?',
      'What are our security best practices?',
    ];
  }

  const suggestions: string[] = [];
  selectedTags.forEach(tag => {
    if (suggestionMap[tag]) {
      suggestions.push(...suggestionMap[tag]);
    }
  });

  return suggestions.slice(0, 4);
};

export const searchKnowledgeBase = (query: string, tags: string[]): KnowledgeSource[] => {
  const queryLower = query.toLowerCase();
  
  return knowledgeBase.filter(source => {
    const matchesTag = tags.length === 0 || tags.includes(source.domain);
    const matchesQuery = 
      source.title.toLowerCase().includes(queryLower) ||
      source.content.toLowerCase().includes(queryLower);
    
    return matchesTag && matchesQuery;
  }).slice(0, 3);
};
