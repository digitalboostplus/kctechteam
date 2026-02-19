import type { Service } from '@/types'

export const services: Service[] = [
  {
    id: 'ai-consulting',
    slug: 'ai-consulting',
    title: 'AI Consulting',
    shortDescription:
      'Custom AI strategy and implementation for Kansas City businesses ready to compete with intelligence.',
    description:
      'KC Tech Team\'s AI consulting practice helps Kansas City businesses design, build, and deploy AI solutions that drive measurable business outcomes. From AI readiness assessments to full LLM integration, we guide you through every step of your AI journey.',
    icon: 'Brain',
    features: [
      {
        title: 'AI Readiness Assessment',
        description:
          'Evaluate your data infrastructure, team capabilities, and business processes to identify the highest-value AI opportunities.',
        icon: 'Search',
      },
      {
        title: 'Custom AI Strategy & Roadmap',
        description:
          'Develop a 12-24 month AI implementation roadmap aligned with your business goals and budget.',
        icon: 'Map',
      },
      {
        title: 'LLM Integration & Fine-Tuning',
        description:
          'Integrate GPT-4, Claude, Gemini, or custom models into your products and workflows with secure API management.',
        icon: 'Cpu',
      },
      {
        title: 'Machine Learning Models',
        description:
          'Build predictive analytics, computer vision, NLP, and recommendation systems tailored to your industry.',
        icon: 'TrendingUp',
      },
      {
        title: 'AI Governance & Ethics',
        description:
          'Establish responsible AI policies, bias detection, and compliance frameworks for regulated industries.',
        icon: 'Shield',
      },
      {
        title: 'Team Enablement',
        description:
          'Train your team to leverage AI tools effectively with hands-on workshops and ongoing support.',
        icon: 'Users',
      },
    ],
    faqs: [
      {
        question: 'How long does an AI consulting engagement take?',
        answer:
          'Engagements vary by scope. An AI Readiness Assessment takes 2-4 weeks. A full AI strategy and initial implementation typically runs 3-6 months. We offer phased approaches to show value early.',
      },
      {
        question: 'Do we need a data science team to work with you?',
        answer:
          'No. KC Tech Team handles the technical heavy lifting. We work alongside your existing team and build solutions your staff can maintain with minimal data science expertise.',
      },
      {
        question: 'What industries do you serve in Kansas City?',
        answer:
          'We serve healthcare, financial services, manufacturing, logistics, professional services, and retail across Greater Kansas City. Our solutions are tailored to your industry\'s specific requirements and compliance needs.',
      },
      {
        question: 'How do you price AI consulting?',
        answer:
          'AI consulting is typically project-based or retainer-based. We offer free initial consultations to scope your project before providing a detailed proposal with transparent pricing.',
      },
    ],
    metaTitle: 'AI Consulting Kansas City | Custom AI Strategy & LLM Integration | KC Tech Team',
    metaDescription:
      'Kansas City AI consulting firm. Custom AI strategy, LLM integration, machine learning, and AI roadmapping for KC businesses. Free consultation. KC Tech Team.',
  },
  {
    id: 'automation',
    slug: 'automation',
    title: 'Automation Consulting',
    shortDescription:
      'Eliminate manual work and reduce costs by 40%+ with intelligent automation built for Kansas City businesses.',
    description:
      'From robotic process automation to end-to-end workflow orchestration, KC Tech Team designs and deploys automation solutions that free your team from repetitive tasks and accelerate your business operations.',
    icon: 'Zap',
    features: [
      {
        title: 'Process Discovery & Mining',
        description:
          'Analyze your existing workflows to identify automation opportunities with the highest ROI.',
        icon: 'Search',
      },
      {
        title: 'RPA Implementation',
        description:
          'Deploy software robots using UiPath, Automation Anywhere, or Power Automate to handle repetitive digital tasks.',
        icon: 'Bot',
      },
      {
        title: 'Workflow Orchestration',
        description:
          'Connect disparate systems and automate multi-step processes across your entire organization.',
        icon: 'GitBranch',
      },
      {
        title: 'AI-Powered Automation',
        description:
          'Combine RPA with AI/ML for intelligent document processing, decision automation, and predictive workflows.',
        icon: 'Brain',
      },
      {
        title: 'ERP & CRM Integration',
        description:
          'Automate data flows between Salesforce, SAP, NetSuite, Microsoft Dynamics, and your internal systems.',
        icon: 'Link',
      },
      {
        title: 'Automation Analytics',
        description:
          'Real-time dashboards measuring hours saved, error rates, and ROI across all your automation initiatives.',
        icon: 'BarChart',
      },
    ],
    faqs: [
      {
        question: 'What is the average ROI on automation projects?',
        answer:
          'Our Kansas City clients average a 40% reduction in operational costs within 12 months. Most projects achieve full ROI within 6-9 months. We provide detailed ROI projections before any project begins.',
      },
      {
        question: 'Which processes are best suited for automation?',
        answer:
          'High-volume, rule-based, repetitive processes are ideal: data entry, report generation, invoice processing, employee onboarding, compliance reporting, and customer notifications.',
      },
      {
        question: 'Will automation replace our employees?',
        answer:
          'Our approach is to augment your team, not replace them. Automation handles the tedious work so your team can focus on strategic, creative, and customer-facing activities that require human judgment.',
      },
    ],
    metaTitle: 'Automation Consulting Kansas City | RPA & Workflow Automation | KC Tech Team',
    metaDescription:
      'Business automation consulting in Kansas City. RPA, workflow automation, AI-powered automation. Reduce costs 40%+. KC Tech Team serves Greater KC businesses.',
  },
  {
    id: 'it-msp',
    slug: 'it-msp',
    title: 'IT Managed Services',
    shortDescription:
      '24/7 monitoring, help desk, cloud management, and IT support with a 99.9% uptime SLA for KC businesses.',
    description:
      'KC Tech Team\'s managed IT services eliminate the headaches of technology management. Our proactive approach means we fix problems before you even know they exist, keeping your business running at peak performance.',
    icon: 'Server',
    features: [
      {
        title: '24/7 Network Monitoring',
        description:
          'Round-the-clock monitoring of your servers, network, and endpoints with instant alert response.',
        icon: 'Activity',
      },
      {
        title: 'Help Desk Support',
        description:
          'Dedicated Kansas City-based help desk with average response times under 15 minutes for critical issues.',
        icon: 'HeadphonesIcon',
      },
      {
        title: 'Cloud Management',
        description:
          'Full-service management of AWS, Azure, and Google Cloud environments with cost optimization.',
        icon: 'Cloud',
      },
      {
        title: 'Patch Management',
        description:
          'Automated patching for servers, workstations, and applications to eliminate security vulnerabilities.',
        icon: 'RefreshCw',
      },
      {
        title: 'Backup & Disaster Recovery',
        description:
          'Automated backups with tested recovery procedures. RTO under 4 hours, RPO under 1 hour.',
        icon: 'HardDrive',
      },
      {
        title: 'vCIO Services',
        description:
          'Strategic technology planning and budget guidance from our virtual CIO team.',
        icon: 'Briefcase',
      },
    ],
    faqs: [
      {
        question: 'What does your 99.9% uptime SLA include?',
        answer:
          'Our SLA covers network availability, server uptime, and critical application performance. We provide monthly SLA reports and offer financial remedies if we miss targets.',
      },
      {
        question: 'Do you support remote and hybrid workforces?',
        answer:
          'Yes. We support remote users across Greater Kansas City and nationally with secure remote access, cloud collaboration tools, and endpoint management for any device.',
      },
      {
        question: 'How is pricing structured for managed IT services?',
        answer:
          'We offer per-device, per-user, or all-inclusive monthly pricing. Most clients find our managed services cost less than a single full-time IT staff member while delivering significantly more capability.',
      },
    ],
    metaTitle: 'IT Managed Services Kansas City | 24/7 MSP | 99.9% Uptime SLA | KC Tech Team',
    metaDescription:
      'Managed IT services in Kansas City. 24/7 monitoring, help desk, cloud management, 99.9% uptime SLA. KC Tech Team is Greater KC\'s trusted MSP.',
  },
  {
    id: 'cybersecurity',
    slug: 'cybersecurity',
    title: 'Cybersecurity',
    shortDescription:
      'Enterprise-grade threat protection, compliance management, and incident response for Kansas City businesses.',
    description:
      'KC Tech Team\'s cybersecurity practice protects Kansas City businesses from evolving threats while ensuring compliance with HIPAA, SOC2, PCI-DSS, and other frameworks. Our proactive approach means we\'re always one step ahead of attackers.',
    icon: 'Shield',
    features: [
      {
        title: 'Threat Detection & Response',
        description:
          '24/7 Security Operations Center (SOC) with AI-powered threat detection and instant incident response.',
        icon: 'AlertTriangle',
      },
      {
        title: 'Vulnerability Assessments',
        description:
          'Regular penetration testing and vulnerability scanning to identify and remediate security gaps.',
        icon: 'Search',
      },
      {
        title: 'Compliance Management',
        description:
          'HIPAA, SOC2 Type II, PCI-DSS, NIST, and CMMC compliance assessment, implementation, and ongoing monitoring.',
        icon: 'FileCheck',
      },
      {
        title: 'Security Awareness Training',
        description:
          'Phishing simulations and security training programs to make your employees your strongest security asset.',
        icon: 'GraduationCap',
      },
      {
        title: 'Zero Trust Architecture',
        description:
          'Design and implement zero trust security models that protect your data regardless of user location.',
        icon: 'Lock',
      },
      {
        title: 'Incident Response',
        description:
          '24/7 incident response retainer with guaranteed 1-hour response time for critical security events.',
        icon: 'Siren',
      },
    ],
    faqs: [
      {
        question: 'Do you work with healthcare organizations in Kansas City?',
        answer:
          'Yes. Healthcare is one of our most active verticals. We specialize in HIPAA compliance for physician practices, hospitals, and healthcare technology companies throughout Greater Kansas City.',
      },
      {
        question: 'What\'s included in your SOC services?',
        answer:
          'Our SOC provides 24/7 log monitoring, SIEM management, threat intelligence, alert triage, and escalation. We monitor your endpoints, cloud environments, email, and network traffic.',
      },
      {
        question: 'How quickly can you respond to a cybersecurity incident?',
        answer:
          'Our incident response retainer clients receive guaranteed 1-hour response. Non-retainer emergency response is typically available within 4 hours. We have a local KC team available for on-site response.',
      },
    ],
    metaTitle: 'Cybersecurity Services Kansas City | HIPAA, SOC2, Threat Detection | KC Tech Team',
    metaDescription:
      'Cybersecurity services in Kansas City. HIPAA compliance, SOC2, threat detection, penetration testing, incident response. KC Tech Team protects Greater KC businesses.',
  },
  {
    id: 'web-development',
    slug: 'web-development',
    title: 'Web Development',
    shortDescription:
      'High-performance, conversion-optimized websites and web applications built for Kansas City businesses.',
    description:
      'KC Tech Team builds modern websites and web applications that look stunning, load fast, and convert visitors into customers. From marketing sites to full-stack SaaS platforms, our development team delivers pixel-perfect results on time and on budget.',
    icon: 'Globe',
    features: [
      {
        title: 'Custom Website Design & Development',
        description:
          'Fully custom designs tailored to your brand — no templates. Built with Next.js, React, and modern web standards for peak performance.',
        icon: 'Layout',
      },
      {
        title: 'E-Commerce Development',
        description:
          'Shopify, WooCommerce, and custom e-commerce platforms with seamless payment processing and inventory management.',
        icon: 'ShoppingCart',
      },
      {
        title: 'Web Application Development',
        description:
          'Full-stack web applications with authentication, dashboards, APIs, and database integrations built to scale.',
        icon: 'AppWindow',
      },
      {
        title: 'CMS & Content Management',
        description:
          'Headless CMS integrations (Contentful, Sanity, Strapi) so your team can update content without developer help.',
        icon: 'FileEdit',
      },
      {
        title: 'Performance & SEO Optimization',
        description:
          'Core Web Vitals optimization, technical SEO, and Lighthouse audits to maximize search rankings and user experience.',
        icon: 'Gauge',
      },
      {
        title: 'Ongoing Maintenance & Support',
        description:
          'Monthly maintenance plans covering security updates, performance monitoring, backups, and feature additions.',
        icon: 'Wrench',
      },
    ],
    faqs: [
      {
        question: 'How long does it take to build a website?',
        answer:
          'A standard marketing website takes 4–8 weeks from kickoff to launch. Complex web applications typically run 3–6 months depending on scope. We provide a detailed timeline in our proposal.',
      },
      {
        question: 'Do you build websites on WordPress?',
        answer:
          'We build on the platform that best fits your needs. For content-heavy sites needing easy updates, we may recommend WordPress or a headless CMS. For performance-critical or application-like sites, we favor Next.js. We\'ll recommend the right stack after understanding your goals.',
      },
      {
        question: 'Will my website rank well in Google for Kansas City searches?',
        answer:
          'SEO is built into every website we develop — not bolted on after. We implement technical SEO best practices, local SEO schema, and Core Web Vitals optimization from day one to give your Kansas City business the strongest possible foundation.',
      },
    ],
    metaTitle: 'Web Development Kansas City | Custom Websites & Web Apps | KC Tech Team',
    metaDescription:
      'Custom web development in Kansas City. High-performance websites, e-commerce, web applications, and SEO optimization for KC businesses. KC Tech Team.',
  },
  {
    id: 'custom-integrations',
    slug: 'custom-integrations',
    title: 'Custom Integrations',
    shortDescription:
      'Connect your business systems and eliminate data silos with custom API integrations built for Kansas City businesses.',
    description:
      'Modern businesses run on dozens of software tools — CRMs, ERPs, marketing platforms, accounting systems, and more. KC Tech Team builds the integrations that make them work together seamlessly, eliminating manual data entry and unlocking real-time visibility across your entire operation.',
    icon: 'Link',
    features: [
      {
        title: 'CRM & ERP Integrations',
        description:
          'Connect Salesforce, HubSpot, Microsoft Dynamics, SAP, NetSuite, and other enterprise platforms to your business systems.',
        icon: 'Database',
      },
      {
        title: 'API Development & Management',
        description:
          'Custom REST and GraphQL APIs that expose your data securely to internal tools, partners, and third-party platforms.',
        icon: 'Code',
      },
      {
        title: 'Payment & E-Commerce Integrations',
        description:
          'Stripe, Square, PayPal, and custom payment gateway integrations with your existing platforms and accounting systems.',
        icon: 'CreditCard',
      },
      {
        title: 'Marketing Platform Integrations',
        description:
          'Connect your CRM to Mailchimp, HubSpot, Klaviyo, Google Ads, Meta Ads, and analytics platforms for unified customer data.',
        icon: 'BarChart',
      },
      {
        title: 'Data Pipeline & ETL',
        description:
          'Automated data pipelines that extract, transform, and load data between systems on your schedule — no manual exports.',
        icon: 'GitMerge',
      },
      {
        title: 'Webhook & Real-Time Sync',
        description:
          'Event-driven integrations using webhooks for real-time data sync across your systems — no more stale data.',
        icon: 'Zap',
      },
    ],
    faqs: [
      {
        question: 'Can you integrate systems that don\'t have APIs?',
        answer:
          'Yes. When a direct API isn\'t available, we use robotic process automation (RPA), database-level integrations, or file-based ETL processes to connect systems. We find a way regardless of the technical constraints.',
      },
      {
        question: 'How do you handle integration security?',
        answer:
          'All integrations use OAuth 2.0, API key management, encrypted connections (TLS), and principle of least privilege. We follow OWASP API security best practices and can meet HIPAA and SOC2 requirements.',
      },
      {
        question: 'Do you provide ongoing support for integrations?',
        answer:
          'Yes. We offer integration monitoring, maintenance, and support retainers. When a third-party API changes or breaks, we handle the updates so your business keeps running.',
      },
    ],
    metaTitle: 'Custom Integrations Kansas City | API Development & System Integration | KC Tech Team',
    metaDescription:
      'Custom API integrations and system connectivity for Kansas City businesses. CRM, ERP, payment, and marketing platform integrations. KC Tech Team.',
  },
]

export function getServiceBySlug(slug: string): Service | undefined {
  return services.find((s) => s.slug === slug)
}
