export interface QAPair {
  question: string;
  answer: string;
  domain: string;
  keywords: string[];
  sourceIds: string[];
}

export const trainingData: QAPair[] = [
  // Legal Domain
  {
    question: "What are our GDPR compliance requirements?",
    answer: "Our GDPR compliance framework ensures data protection and privacy across all operations.\n\n(1) Obtaining explicit consent before processing personal data\n(2) Maintaining detailed records of all data processing activities\n(3) Implementing privacy by design in all systems\n(4) Appointing a Data Protection Officer (DPO) for large-scale processing\n(5) Ensuring data breach notification within 72 hours of detection\n\nAll employees handling personal data must complete annual GDPR training.\n\nFor more information: https://gdpr.eu/compliance/",
    domain: "Legal",
    keywords: ["gdpr", "compliance", "data protection", "privacy", "consent", "personal data"],
    sourceIds: ["legal-001"]
  },
  {
    question: "When is legal review required for contracts?",
    answer: "Legal review is mandatory for all contracts exceeding $50,000 in value. Additionally, any contract involving IP transfer, long-term commitments (>1 year), liability clauses, or international parties requires legal review regardless of value. The legal team typically completes reviews within 3-5 business days for standard contracts.",
    domain: "Legal",
    keywords: ["contract", "legal review", "approval", "requirements"],
    sourceIds: ["legal-002"]
  },
  {
    question: "How do we protect intellectual property?",
    answer: "Our IP protection strategy includes: (1) All employees sign IP assignment agreements transferring ownership to the company, (2) Source code and algorithms are protected under copyright law, (3) Novel inventions undergo patent application review, (4) Third-party IP requires proper licensing with legal verification, and (5) Regular IP audits to ensure compliance. Trade secrets are protected through NDAs and access controls.",
    domain: "Legal",
    keywords: ["intellectual property", "ip", "patent", "copyright", "trade secret"],
    sourceIds: ["legal-003"]
  },

  // Data Processing Domain
  {
    question: "How does our ETL pipeline work?",
    answer: "Our ETL pipeline automates data movement and transformation across systems.\n\n1. Extract: Data is pulled from CRM, ERP systems, and external APIs\n2. Transform: Data undergoes validation, normalization, deduplication, and enrichment\n3. Load: Processed data is loaded into target systems supporting JSON, CSV, Parquet, and SQL formats\n\nThe pipeline supports both batch processing (scheduled) and real-time streaming modes.\n\nLearn more: https://docs.company.com/etl-pipeline",
    domain: "Processing",
    keywords: ["etl", "pipeline", "data processing", "extract", "transform", "load"],
    sourceIds: ["data-001"]
  },
  {
    question: "What are the data quality standards?",
    answer: "Our data quality framework enforces five key dimensions: (1) Completeness - no missing critical fields, (2) Accuracy - validation against source systems with 95%+ accuracy requirement, (3) Consistency - uniform formats across systems, (4) Timeliness - processing within defined SLA windows, and (5) Uniqueness - no duplicate records. All datasets must achieve a minimum 95% quality score before production release.",
    domain: "Processing",
    keywords: ["data quality", "validation", "standards", "accuracy", "completeness"],
    sourceIds: ["data-002"]
  },
  {
    question: "What data formats do we support?",
    answer: "We support multiple input and output formats: JSON (for API integrations), CSV (for tabular data), Parquet (for big data analytics), XML (for legacy systems), and direct SQL database connections (PostgreSQL, MySQL, SQL Server). The ETL pipeline can convert between these formats as needed during the transformation phase.",
    domain: "Processing",
    keywords: ["data format", "json", "csv", "parquet", "sql", "formats"],
    sourceIds: ["data-001", "data-003"]
  },

  // Hosting Domain
  {
    question: "What is our infrastructure setup?",
    answer: "We run on AWS cloud infrastructure with multi-region deployment across US-East, EU-West, and APAC-Singapore for global coverage. Our stack includes: EC2 instances for compute (auto-scaling enabled), S3 for object storage, RDS for managed databases (PostgreSQL), CloudFront CDN for content delivery, and Route 53 for DNS. This setup ensures 99.99% uptime SLA with automatic failover capabilities.",
    domain: "Hosting",
    keywords: ["infrastructure", "aws", "cloud", "hosting", "servers", "architecture"],
    sourceIds: ["host-001"]
  },
  {
    question: "When is the next maintenance window?",
    answer: "Scheduled maintenance occurs on the second Tuesday of each month from 2-6 AM EST. During this window, we apply non-critical patches and perform system updates. Critical security patches are applied within 48 hours of release, outside the regular schedule if necessary. You'll receive email notifications 72 hours before each maintenance window.",
    domain: "Hosting",
    keywords: ["maintenance", "downtime", "schedule", "patching", "updates"],
    sourceIds: ["host-002"]
  },
  {
    question: "What is our disaster recovery plan?",
    answer: "Our DR plan guarantees: RTO (Recovery Time Objective) of 4 hours and RPO (Recovery Point Objective) of 1 hour. We maintain: hourly automated snapshots, daily full backups, and weekly offsite replication to a geographically separate DR site. Quarterly DR drills validate our procedures. In case of a disaster, the incident commander initiates failover to the DR site following our documented runbook.",
    domain: "Hosting",
    keywords: ["disaster recovery", "dr", "backup", "failover", "rto", "rpo"],
    sourceIds: ["host-003"]
  },

  // Development Domain
  {
    question: "What is our development workflow?",
    answer: "We follow Agile methodology with 2-week sprints. The SDLC includes: (1) Requirements gathering and user story creation, (2) Design review and architecture approval, (3) Development with Git feature branches, (4) Peer code review via pull requests, (5) Automated testing in CI/CD pipeline, (6) QA testing in staging environment, (7) UAT with business stakeholders, and (8) Production deployment with rollback capability.",
    domain: "Development",
    keywords: ["development", "sdlc", "agile", "workflow", "process"],
    sourceIds: ["dev-001"]
  },
  {
    question: "What are the code review requirements?",
    answer: "All code must pass peer review before merging. The review checklist covers: functional correctness, security vulnerabilities (OWASP top 10), performance optimization, proper error handling, test coverage exceeding 80%, and complete documentation. At least one senior developer must approve any architectural changes. Reviews typically complete within 24 hours for standard PRs.",
    domain: "Development",
    keywords: ["code review", "pull request", "pr", "approval", "quality"],
    sourceIds: ["dev-002"]
  },
  {
    question: "How do I create a new API endpoint?",
    answer: "Follow our RESTful API guidelines: (1) Use appropriate HTTP methods (GET for reads, POST for creates, PUT for updates, DELETE for removals), (2) Implement API versioning (e.g., /api/v1/resource), (3) Return standard HTTP status codes (200, 201, 400, 404, 500), (4) Include pagination for list endpoints (limit/offset), (5) Implement rate limiting (1000 requests/hour default), (6) Require OAuth 2.0 authentication, and (7) Document the endpoint in our API specification.",
    domain: "Development",
    keywords: ["api", "endpoint", "rest", "restful", "development"],
    sourceIds: ["dev-003"]
  },

  // Deployment Domain
  {
    question: "How does our CI/CD pipeline work?",
    answer: "Our automated deployment pipeline executes these steps: (1) Git commit triggers build process, (2) Unit tests execute automatically, (3) SonarQube performs code quality scan, (4) SAST/DAST security scanning runs, (5) Docker image builds and pushes to registry, (6) Automatic deployment to staging environment, (7) Integration tests run in staging, (8) Manual approval gate for production, (9) Blue-green deployment to production with zero downtime.",
    domain: "Deployment",
    keywords: ["cicd", "ci/cd", "pipeline", "deployment", "automation"],
    sourceIds: ["deploy-001"]
  },
  {
    question: "What are the deployment environments?",
    answer: "We maintain four isolated environments: (1) Development - individual developer machines for local testing, (2) QA - dedicated testing environment for QA team validation, (3) Staging - production mirror for final verification and UAT, (4) Production - live customer-facing environment. Configuration is managed via environment variables, and secrets are stored in HashiCorp Vault.",
    domain: "Deployment",
    keywords: ["environment", "dev", "staging", "production", "qa"],
    sourceIds: ["deploy-002"]
  },
  {
    question: "How do I rollback a deployment?",
    answer: "Rollback procedures ensure quick recovery from deployment issues: (1) For critical issues, initiate immediate rollback via deployment dashboard (completes in ~15 minutes), (2) We maintain the previous 3 versions for instant rollback, (3) Feature flags enable gradual rollout and quick disable, (4) Automated rollback triggers if error rate exceeds 5% or response time degrades >50%, (5) Post-rollback, incident review determines root cause before re-deployment.",
    domain: "Deployment",
    keywords: ["rollback", "revert", "deployment", "failure", "recovery"],
    sourceIds: ["deploy-003"]
  },

  // Security Domain
  {
    question: "What are our security policies?",
    answer: "Our security framework follows ISO 27001 and NIST standards to protect all assets.\n\n1. Multi-factor authentication (MFA) for all user accounts\n2. AES-256 encryption at rest and TLS 1.3 for data in transit\n3. Quarterly penetration testing by certified ethical hackers\n4. Annual security awareness training for all employees\n5. 24/7 security monitoring with incident response team\n6. Annual third-party security audits\n\nRead our full security policy: https://company.com/security",
    domain: "Security",
    keywords: ["security", "policy", "iso 27001", "nist", "compliance"],
    sourceIds: ["sec-001"]
  },
  {
    question: "How to report a security incident?",
    answer: "For security incidents, immediately: (1) Contact the security team via security@company.com or emergency hotline, (2) Document what you observed (time, systems affected, suspicious activity), (3) Do NOT attempt to investigate yourself - preserve evidence, (4) Our security team will: assess the threat, contain affected systems, eradicate the threat, recover services, and conduct post-mortem analysis. Report even suspected incidents - better safe than sorry.",
    domain: "Security",
    keywords: ["security incident", "breach", "report", "emergency"],
    sourceIds: ["sec-002"]
  },
  {
    question: "What is the vulnerability patching timeline?",
    answer: "Vulnerability remediation follows strict SLAs based on severity: (1) Critical vulnerabilities - patch within 24 hours, (2) High severity - patch within 7 days, (3) Medium severity - patch within 30 days, (4) Low severity - patch quarterly. We use Nessus and Qualys for continuous scanning. Monthly security reports go to the CISO. We also maintain a bug bounty program for external researchers.",
    domain: "Security",
    keywords: ["vulnerability", "patch", "patching", "security", "timeline"],
    sourceIds: ["sec-003"]
  },

  // Compliance Domain
  {
    question: "What compliance standards do we follow?",
    answer: "We maintain compliance with multiple regulatory frameworks: (1) GDPR for EU data protection, (2) CCPA for California privacy rights, (3) HIPAA for healthcare data (where applicable), (4) PCI-DSS for payment card data, (5) SOX for financial reporting, and (6) SOC 2 Type II for service organization controls. Our compliance officer performs quarterly reviews, and we retain documentation for 7 years minimum.",
    domain: "Compliance",
    keywords: ["compliance", "regulations", "gdpr", "hipaa", "soc 2"],
    sourceIds: ["comp-002"]
  },
  {
    question: "How to prepare for SOC 2 audit?",
    answer: "SOC 2 audit preparation involves: (1) Review and document all controls for Security, Availability, Processing Integrity, Confidentiality, and Privacy, (2) Ensure 99.9% uptime logs are available, (3) Verify access controls and encryption are properly implemented, (4) Gather evidence of security training completion, (5) Prepare incident response documentation, (6) Schedule with our external audit firm (typically 2-3 weeks duration). Our annual audit occurs in Q4.",
    domain: "Compliance",
    keywords: ["soc 2", "audit", "compliance", "preparation"],
    sourceIds: ["comp-001"]
  },
  {
    question: "What is our data retention policy?",
    answer: "Data retention follows regulatory requirements: (1) System audit logs - 1 year in hot storage, 7 years in cold storage for compliance, (2) Financial records - 7 years minimum per SOX requirements, (3) Customer data - retained per contract terms, deleted within 30 days of termination, (4) Employee records - 7 years post-employment, (5) Blockchain-based tamper-proof audit trails ensure data integrity throughout retention period.",
    domain: "Compliance",
    keywords: ["data retention", "retention policy", "compliance", "audit"],
    sourceIds: ["comp-003"]
  },

  // Analytics Domain
  {
    question: "How to access BI dashboards?",
    answer: "Access our Business Intelligence dashboards: (1) Log in to the BI portal at analytics.company.com with your SSO credentials, (2) Dashboards are organized by: Customer Analytics, Revenue Trends, Operational Efficiency, and Security Metrics, (3) Data refreshes in real-time for most metrics, (4) You can create custom views and save favorites, (5) Export capabilities available for reports (PDF, Excel, CSV). Contact the analytics team for custom dashboard requests.",
    domain: "Analytics",
    keywords: ["bi", "dashboard", "analytics", "business intelligence", "tableau"],
    sourceIds: ["analytics-001"]
  },
  {
    question: "What analytics tools are available?",
    answer: "Our analytics stack includes: (1) Tableau for interactive dashboards and visualizations, (2) Python (pandas, scikit-learn) for advanced statistical analysis, (3) R for specialized statistical modeling, (4) SQL for direct data warehouse queries, (5) Jupyter notebooks for collaborative analysis. All analysts have access to our data warehouse with appropriate role-based permissions.",
    domain: "Analytics",
    keywords: ["analytics tools", "tableau", "python", "sql", "tools"],
    sourceIds: ["analytics-002"]
  },
  {
    question: "What are our key performance metrics?",
    answer: "We track KPIs across all business areas: (1) Customer Metrics - NPS score, churn rate (target <5%), customer lifetime value, (2) Revenue - MRR growth, customer acquisition cost, (3) Operations - system uptime (99.99% SLA), processing throughput, (4) Security - incident response time (<30 min), vulnerability patch rate, (5) Predictive models provide forecasts for churn (85% accuracy), fraud (92% precision), and demand (88% accuracy).",
    domain: "Analytics",
    keywords: ["kpi", "metrics", "performance", "analytics", "key performance indicators"],
    sourceIds: ["analytics-003"]
  },

  // Review Domain
  {
    question: "What is the code review process?",
    answer: "Our code review process ensures quality before merging: (1) Create a pull request with detailed description of changes, (2) At least one peer reviewer must approve, (3) Reviewers check: code quality, security, performance, test coverage (>80%), and documentation, (4) Reviews should be completed within 24 hours, (5) Address all feedback and re-request review if needed. Use our review checklist template to ensure consistency.",
    domain: "Review",
    keywords: ["code review", "pull request", "peer review", "process"],
    sourceIds: ["review-001"]
  },
  {
    question: "How to submit documents for review?",
    answer: "Submit documents for review: (1) Upload to the review management system, (2) Select reviewers based on document type (legal, compliance, business stakeholders), (3) Set review deadline and priority level, (4) Track review status in dashboard, (5) Address feedback and resubmit revised versions. All major documents require multi-stakeholder approval before finalization.",
    domain: "Review",
    keywords: ["document review", "submission", "approval", "workflow"],
    sourceIds: ["review-002"]
  },
  {
    question: "What are design review requirements?",
    answer: "Design reviews validate technical decisions before implementation: (1) Submit architecture diagrams and technical specifications, (2) Schedule review meeting with architecture team, (3) Review covers: system design, scalability, security, integration points, technical debt, (4) Obtain approval before starting development, (5) Major architecture changes require senior architect approval. Schedule reviews early in the development cycle to avoid rework.",
    domain: "Review",
    keywords: ["design review", "architecture", "technical review", "requirements"],
    sourceIds: ["review-003"]
  },

  // DOC Domain
  {
    question: "What documentation standards do we follow?",
    answer: "Follow our documentation standards for consistency: (1) Use provided templates for technical specs, API docs, user guides, and runbooks, (2) Store all documentation in the central repository with version control, (3) Update documentation with every code change, (4) Include: purpose, prerequisites, detailed instructions, screenshots, troubleshooting, and related resources, (5) Peer review all documentation before publishing.",
    domain: "DOC",
    keywords: ["documentation", "standards", "templates", "guidelines"],
    sourceIds: ["doc-001"]
  },
  {
    question: "How to write API documentation?",
    answer: "Write comprehensive API documentation: (1) Use OpenAPI/Swagger specification format, (2) Document each endpoint: description, request/response formats, authentication, rate limits, error codes, (3) Include example requests and responses, (4) Keep documentation synchronized with code using automated tools, (5) Provide SDKs and code samples in multiple languages. Update API docs with every API change.",
    domain: "DOC",
    keywords: ["api documentation", "swagger", "openapi", "api docs"],
    sourceIds: ["doc-002"]
  },
  {
    question: "Where are the documentation templates?",
    answer: "Access documentation templates from: (1) Central repository at /sharepoint/documentation/templates, (2) Available templates: technical specifications, API documentation, user guides, runbooks, troubleshooting guides, (3) Templates include: standard structure, style guidelines, and examples, (4) Use templates to ensure consistency across all documentation. Contact the documentation team for custom template requests.",
    domain: "DOC",
    keywords: ["documentation templates", "templates", "docs"],
    sourceIds: ["doc-001", "doc-003"]
  },

  // ICE Domain
  {
    question: "What is ICE platform?",
    answer: "ICE (Internal Communication Engine) is our enterprise messaging platform providing: (1) Real-time messaging and notifications, (2) Event streaming and pub/sub system, (3) Message queues for asynchronous communication, (4) System integration capabilities. Built for high throughput and low latency. Supports multiple protocols and integrates with all major systems.",
    domain: "ICE",
    keywords: ["ice", "messaging", "platform", "communication engine"],
    sourceIds: ["ice-001"]
  },
  {
    question: "How to integrate with ICE?",
    answer: "Integrate with ICE using our SDK and REST API: (1) Obtain API keys from admin portal, (2) Use provided SDKs for Java, Python, or Node.js, (3) Common operations: send notifications, subscribe to events, implement webhooks, route messages, (4) Rate limit: 10,000 requests per hour, (5) Refer to integration guide for detailed examples and best practices. Test in sandbox environment before production.",
    domain: "ICE",
    keywords: ["ice integration", "api", "sdk", "webhooks"],
    sourceIds: ["ice-002"]
  },
  {
    question: "How to troubleshoot ICE issues?",
    answer: "Troubleshoot ICE issues: (1) Check dashboard for: message throughput, queue depths, latency metrics, error rates, (2) Common issues: Message delays - check queue backlog; Failed deliveries - verify endpoint configuration; Authentication errors - rotate API keys, (3) Review error logs for specific failure messages, (4) Contact ICE support for critical issues (support@ice.company.com). Include error logs and request IDs when reporting issues.",
    domain: "ICE",
    keywords: ["ice troubleshooting", "ice issues", "ice errors", "monitoring"],
    sourceIds: ["ice-003"]
  },

  // Sightline Domain
  {
    question: "How to access Sightline?",
    answer: "Access Sightline analytics platform: (1) Visit sightline.company.com and log in with SSO credentials, (2) Available on web portal and mobile app (iOS/Android), (3) Dashboard shows: business metrics, data visualizations, automated reports, trend analysis, (4) Customize your view by adding favorite reports and dashboards, (5) Access permissions are role-based - contact admin for additional access.",
    domain: "Sightline",
    keywords: ["sightline", "access", "login", "analytics platform"],
    sourceIds: ["sightline-001"]
  },
  {
    question: "How to create custom reports?",
    answer: "Create custom Sightline reports: (1) Use drag-and-drop interface in report builder, (2) Select data sources from connected systems, (3) Apply filters and date ranges, (4) Choose visualizations: charts, tables, graphs, heatmaps, (5) Set refresh schedules (hourly, daily, weekly), (6) Share reports with teams or embed in applications. Use pre-built templates for common report types to save time.",
    domain: "Sightline",
    keywords: ["sightline reports", "custom reports", "report builder"],
    sourceIds: ["sightline-002"]
  },
  {
    question: "How to connect data sources?",
    answer: "Connect data sources to Sightline: (1) Navigate to Data Sources configuration, (2) Select source type: database (SQL, NoSQL), API, cloud storage, data warehouse, (3) Configure connection credentials and test connectivity, (4) Set sync schedule for data refresh, (5) Map data fields to Sightline schema. Supports real-time streaming for live data. Contact data team for assistance with complex integrations.",
    domain: "Sightline",
    keywords: ["sightline data sources", "data connection", "integration"],
    sourceIds: ["sightline-003"]
  },

  // ServiceNow Domain
  {
    question: "How to create a ticket?",
    answer: "Create ServiceNow ticket: (1) Log in to ServiceNow portal, (2) Click 'Create Ticket' and select type: Incident, Service Request, or Change Request, (3) Provide detailed description including: issue summary, steps to reproduce, impact, affected users, (4) Select appropriate category and priority level, (5) Attach relevant files or screenshots. You'll receive email notifications on ticket updates. Average resolution: P1 (4 hours), P2 (24 hours), P3 (3 days).",
    domain: "ServiceNow",
    keywords: ["servicenow", "ticket", "create ticket", "incident"],
    sourceIds: ["servicenow-001"]
  },
  {
    question: "What are ticket priority levels?",
    answer: "ServiceNow ticket priorities: (1) P1 (Critical) - Complete system outage or security breach, SLA: 4 hours resolution, (2) P2 (High) - Major functionality impaired, multiple users affected, SLA: 24 hours resolution, (3) P3 (Medium) - Minor functionality issue, workaround available, SLA: 3 days resolution, (4) P4 (Low) - Cosmetic issue or enhancement request, SLA: 7 days resolution. Priority is assigned based on business impact and urgency.",
    domain: "ServiceNow",
    keywords: ["servicenow priority", "ticket priority", "sla"],
    sourceIds: ["servicenow-001"]
  },
  {
    question: "How to use ServiceNow API?",
    answer: "Use ServiceNow REST API for integrations: (1) Authenticate using OAuth 2.0 with client credentials, (2) API supports: creating/updating tickets, querying records, managing configurations, retrieving reports, (3) Base URL: api.servicenow.company.com/v1, (4) Rate limits: 100 requests per minute, (5) Include comprehensive error handling for failed requests. Refer to API documentation for detailed endpoints and examples. Test in sandbox environment first.",
    domain: "ServiceNow",
    keywords: ["servicenow api", "api integration", "rest api"],
    sourceIds: ["servicenow-003"]
  },
];

export const findBestAnswer = (query: string, tags: string[]): QAPair | null => {
  const queryLower = query.toLowerCase();
  const queryWords = queryLower.split(/\s+/).filter(word => word.length > 3);
  
  // Filter by domain tags if provided
  let candidates = tags.length > 0 
    ? trainingData.filter(qa => tags.includes(qa.domain))
    : trainingData;
  
  // Score each Q&A pair
  const scored = candidates.map(qa => {
    let score = 0;
    
    // Exact question match (highest priority)
    if (qa.question.toLowerCase() === queryLower) {
      score += 1000;
    }
    
    // Question similarity
    const questionWords = qa.question.toLowerCase().split(/\s+/);
    queryWords.forEach(word => {
      if (questionWords.some(qw => qw.includes(word) || word.includes(qw))) {
        score += 50;
      }
    });
    
    // Keyword matching
    qa.keywords.forEach(keyword => {
      if (queryLower.includes(keyword)) {
        score += 30;
      }
      queryWords.forEach(word => {
        if (keyword.includes(word) || word.includes(keyword)) {
          score += 20;
        }
      });
    });
    
    // Answer content relevance
    queryWords.forEach(word => {
      if (qa.answer.toLowerCase().includes(word)) {
        score += 10;
      }
    });
    
    return { qa, score };
  });
  
  // Sort by score and return best match
  scored.sort((a, b) => b.score - a.score);
  
  // Only return if we have a reasonable match
  return scored[0]?.score > 30 ? scored[0].qa : null;
};
