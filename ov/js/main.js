/* =============================================
   HicareNet Overview — Fullscreen Scroll Logic
   ============================================= */

(function () {
  'use strict';

  // --- i18n Translations ---
  var translations = {
    en: {
      // Nav
      'nav.home': 'Home',
      'nav.solutions': 'Solutions',
      'nav.about': 'About',
      'nav.compliance': 'Compliance',
      'nav.resources': 'Resources',
      // Hero
      'hero.eyebrow': 'Healthcare Technology Company',
      'hero.headline': 'Healthcare Technology,<br>Proven Globally',
      'hero.desc': 'HH-800A and HH-930 gateway devices with 120+ sensor integrations.<br>10,000+ units exported to US VA. RPM/CCM solutions serving 40+ hospitals.',
      // RPM
      'rpm.eyebrow': 'Solution 01',
      'rpm.title': 'Remote Patient<br>Monitoring',
      'rpm.desc': "Powered by Hicare Hub's 120+ device integrations and gateway expertise from HH-800A and HH-930, our RPM solution delivers reliable continuous vital sign monitoring.",
      'rpm.f1': '120+ medical device types supported',
      'rpm.f2': 'Real-time vital sign tracking',
      'rpm.f3': 'Automated alerts and clinical thresholds',
      'rpm.outcome': 'Reduction in Hospital Readmissions',
      // CCM
      'ccm.eyebrow': 'Solution 02',
      'ccm.title': 'Chronic Care<br>Management',
      'ccm.desc': "Powered by the Hicare platform's real-time data connectivity, our CCM solution coordinates chronic condition care with multilingual engagement in English, Korean, and Spanish.",
      'ccm.f1': 'Multilingual care coordination',
      'ccm.f2': 'Personalized care plans',
      'ccm.f3': 'Monthly patient engagement',
      'ccm.outcome': 'Languages Supported: EN, KO, ES',
      // AWV
      'awv.eyebrow': 'Solution 03',
      'awv.title': 'Annual<br>Wellness Visits',
      'awv.desc': "Leverage the Hicare platform's proven infrastructure for automated Health Risk Assessments, streamlined preventive care delivery, and Medicare compliance support.",
      'awv.f1': 'Automated Health Risk Assessments',
      'awv.f2': 'Streamlined preventive care delivery',
      'awv.f3': 'Medicare compliance support',
      'awv.outcome': 'Medicare AWV Compliance',
      // VBC
      'vbc.eyebrow': 'Solution 04',
      'vbc.title': 'Value-Based<br>Care',
      'vbc.desc': 'Backed by 120+ device integrations and continuous monitoring data, our VBC solution provides quality measure dashboards and outcomes-based reporting.',
      'vbc.f1': 'Quality measure dashboards',
      'vbc.f2': 'Outcomes-based reporting',
      'vbc.f3': 'Value-based payment model support',
      'vbc.outcome': 'Device Integrations for Data-Driven Care',
      // Technology
      'tech.eyebrow': 'Technology Platform',
      'tech.title': 'Built on 20+ Years of<br>Medical Device Innovation',
      'tech.device_title': 'HH-800A / HH-930',
      'tech.device_desc': 'Gateway devices with 120+ sensor integrations. 10,000+ units exported to US VA.',
      'tech.hub_title': 'Hicare Hub',
      'tech.hub_desc': 'IoT gateway connecting 120+ medical device types via USB, Bluetooth, and BLE.',
      'tech.mobile_title': 'Hicare M',
      'tech.mobile_desc': 'Mobile health monitoring app connecting patients to care teams.',
      'tech.devices_title': '120+ Devices',
      'tech.devices_desc': 'Comprehensive medical device connectivity validated across global markets.',
      // Stats
      'stats.eyebrow': 'Technology at Scale',
      'stats.title': 'Proven Across Global<br>Healthcare Markets',
      'stats.hospitals': 'Contracted Hospitals',
      'stats.patients': 'Enrolled Patients',
      'stats.exported': 'Units Exported to US VA',
      'stats.devices': 'Device Integrations',
      // Compliance
      'compliance.eyebrow': 'Security & Compliance',
      'compliance.title': 'HIPAA Compliant.<br>ISO 27001 & ISO 27701 Certified.',
      'compliance.desc': 'Your patient data is protected by industry-leading security standards and compliance certifications.',
      'compliance.hipaa_desc': 'Full compliance with Health Insurance Portability and Accountability Act requirements for protected health information.',
      'compliance.iso27001_desc': 'International standard for information security management systems (ISMS) certification.',
      'compliance.iso27701_desc': 'Privacy information management extension to ISO 27001 for personal data protection.',
      // Resources
      'resources.eyebrow': 'Resources',
      'resources.title': 'Learn, Connect,<br>and Get Started',
      'resources.fhir_title': 'FHIR Integration',
      'resources.fhir_desc': 'From HL7v2 to FHIR R4 \u2014 seamless EMR integration with industry-standard protocols.',
      'resources.blog_title': 'Blog & Insights',
      'resources.blog_desc': 'Healthcare IT trends, product updates, and clinical best practices.',
      'resources.faq_title': 'FAQ',
      'resources.faq_desc': 'Frequently asked questions about our solutions, billing, and implementation.',
      // CTA
      'cta.primary': 'Schedule a Demo',
      'cta.secondary': 'Contact Sales',
      // Footer
      'footer.desc': 'Comprehensive healthcare technology solutions enabling better patient outcomes through innovation and clinical excellence.',
      'footer.address': '3F InSung Info Bldg, 123 Teheran-ro, Gangnam-gu, Seoul, Korea',
      'footer.solutions_title': 'Solutions',
      'footer.company_title': 'Company',
      'footer.resources_title': 'Resources',
      'footer.rpm': 'Remote Patient Monitoring',
      'footer.ccm': 'Chronic Care Management',
      'footer.awv': 'Annual Wellness Visits',
      'footer.vbc': 'Value-Based Care',
      'footer.fhir': 'FHIR Integration',
      'footer.about_link': 'About HicareNet',
      'footer.team': 'Leadership Team',
      'footer.story': 'Our Story',
      'footer.compliance_link': 'Compliance',
      'footer.blog': 'Blog',
      'footer.faq': 'FAQ',
      'footer.contact': 'Contact Us',
      'footer.demo': 'Schedule a Demo',
      'footer.privacy': 'Privacy Policy',
      'footer.terms': 'Terms of Service'
    },
    ko: {
      // Nav
      'nav.home': '\uD648',
      'nav.solutions': '\uC194\uB8E8\uC158',
      'nav.about': '\uD68C\uC0AC\uC18C\uAC1C',
      'nav.compliance': '\uCEF4\uD50C\uB77C\uC774\uC5B8\uC2A4',
      'nav.resources': '\uB9AC\uC18C\uC2A4',
      // Hero
      'hero.eyebrow': '\uD5EC\uC2A4\uCF00\uC5B4 \uD14C\uD06C\uB180\uB85C\uC9C0 \uAE30\uC5C5',
      'hero.headline': '\uC138\uACC4\uAC00 \uAC80\uC99D\uD55C<br>\uD5EC\uC2A4\uCF00\uC5B4 \uAE30\uC220',
      'hero.desc': 'HH-800A / HH-930 \uAC8C\uC774\uD2B8\uC6E8\uC774 \uB514\uBC14\uC774\uC2A4\uC640 120\uC885 \uC774\uC0C1\uC758 \uC13C\uC11C \uC5F0\uB3D9.<br>\uBBF8\uAD6D VA\uC5D0 10,000\uB300 \uC774\uC0C1 \uC218\uCD9C. 40\uAC1C \uC774\uC0C1\uC758 \uBBF8\uAD6D \uBCD1\uC6D0\uC5D0 RPM/CCM \uC194\uB8E8\uC158 \uACF5\uAE09.',
      // RPM
      'rpm.eyebrow': '\uC194\uB8E8\uC158 01',
      'rpm.title': '\uC6D0\uACA9\uD658\uC790<br>\uBAA8\uB2C8\uD130\uB9C1 (RPM)',
      'rpm.desc': 'Hicare Hub\uC758 120\uC885 \uC774\uC0C1 \uC758\uB8CC\uAE30\uAE30 \uC5F0\uB3D9 \uC5ED\uB7C9\uACFC HH-800A / HH-930 \uAC8C\uC774\uD2B8\uC6E8\uC774 \uB514\uBC14\uC774\uC2A4 \uC804\uBB38\uC131\uC744 \uBC14\uD0D5\uC73C\uB85C, \uC2E0\uB8B0\uD560 \uC218 \uC788\uB294 \uC9C0\uC18D\uC801 \uBC14\uC774\uD0C8 \uC0AC\uC778 \uBAA8\uB2C8\uD130\uB9C1\uC744 \uC81C\uACF5\uD569\uB2C8\uB2E4.',
      'rpm.f1': '120\uC885 \uC774\uC0C1 \uC758\uB8CC\uAE30\uAE30 \uC9C0\uC6D0',
      'rpm.f2': '\uC2E4\uC2DC\uAC04 \uBC14\uC774\uD0C8 \uC0AC\uC778 \uCD94\uC801',
      'rpm.f3': '\uC790\uB3D9\uD654\uB41C \uC54C\uB9BC \uBC0F \uC784\uC0C1 \uAE30\uC900\uCE58',
      'rpm.outcome': '\uC7AC\uC785\uC6D0\uC728 \uAC10\uC18C',
      // CCM
      'ccm.eyebrow': '\uC194\uB8E8\uC158 02',
      'ccm.title': '\uB9CC\uC131\uC9C8\uD658<br>\uAD00\uB9AC (CCM)',
      'ccm.desc': '\uD558\uC774\uCF00\uC5B4 \uD50C\uB7AB\uD3FC\uC758 \uC2E4\uC2DC\uAC04 \uB370\uC774\uD130 \uC5F0\uB3D9 \uAE30\uC220\uC744 \uAE30\uBC18\uC73C\uB85C, \uC601\uC5B4, \uD55C\uAD6D\uC5B4, \uC2A4\uD398\uC778\uC5B4 \uB2E4\uAD6D\uC5B4 \uC9C0\uC6D0\uACFC \uB9DE\uCDA4\uD615 \uCF00\uC5B4 \uD50C\uB79C\uC73C\uB85C \uB9CC\uC131\uC9C8\uD658 \uD658\uC790\uC758 \uCF00\uC5B4\uB97C \uC870\uC728\uD569\uB2C8\uB2E4.',
      'ccm.f1': '\uB2E4\uAD6D\uC5B4 \uCF00\uC5B4 \uC870\uC728',
      'ccm.f2': '\uB9DE\uCDA4\uD615 \uCF00\uC5B4 \uD50C\uB79C',
      'ccm.f3': '\uC6D4\uBCC4 \uD658\uC790 \uCC38\uC5EC \uD65C\uB3D9',
      'ccm.outcome': '\uC9C0\uC6D0 \uC5B8\uC5B4: \uC601\uC5B4, \uD55C\uAD6D\uC5B4, \uC2A4\uD398\uC778\uC5B4',
      // AWV
      'awv.eyebrow': '\uC194\uB8E8\uC158 03',
      'awv.title': '\uC5F0\uAC04<br>\uAC74\uAC15\uAC80\uC9C4 (AWV)',
      'awv.desc': '\uD558\uC774\uCF00\uC5B4 \uD50C\uB7AB\uD3FC\uC758 \uAC80\uC99D\uB41C \uC778\uD504\uB77C\uB97C \uD65C\uC6A9\uD558\uC5EC \uC790\uB3D9\uD654\uB41C \uAC74\uAC15\uC704\uD5D8\uD3C9\uAC00(HRA), \uC608\uBC29 \uCF00\uC5B4 \uAC04\uC18C\uD654, \uBA54\uB514\uCF00\uC5B4 \uCEF4\uD50C\uB77C\uC774\uC5B8\uC2A4\uB97C \uC9C0\uC6D0\uD569\uB2C8\uB2E4.',
      'awv.f1': '\uC790\uB3D9\uD654\uB41C \uAC74\uAC15\uC704\uD5D8\uD3C9\uAC00',
      'awv.f2': '\uC608\uBC29 \uCF00\uC5B4 \uAC04\uC18C\uD654',
      'awv.f3': '\uBA54\uB514\uCF00\uC5B4 \uCEF4\uD50C\uB77C\uC774\uC5B8\uC2A4 \uC9C0\uC6D0',
      'awv.outcome': '\uBA54\uB514\uCF00\uC5B4 AWV \uCEF4\uD50C\uB77C\uC774\uC5B8\uC2A4',
      // VBC
      'vbc.eyebrow': '\uC194\uB8E8\uC158 04',
      'vbc.title': '\uAC00\uCE58\uAE30\uBC18<br>\uC9C4\uB8CC (VBC)',
      'vbc.desc': '120\uC885 \uC774\uC0C1\uC758 \uC758\uB8CC\uAE30\uAE30 \uC5F0\uB3D9\uACFC \uC9C0\uC18D\uC801 \uBAA8\uB2C8\uD130\uB9C1 \uB370\uC774\uD130\uB97C \uAE30\uBC18\uC73C\uB85C \uD488\uC9C8 \uC9C0\uD45C \uB300\uC2DC\uBCF4\uB4DC\uC640 \uC131\uACFC \uAE30\uBC18 \uB9AC\uD3EC\uD305\uC744 \uC81C\uACF5\uD569\uB2C8\uB2E4.',
      'vbc.f1': '\uD488\uC9C8 \uC9C0\uD45C \uB300\uC2DC\uBCF4\uB4DC',
      'vbc.f2': '\uC131\uACFC \uAE30\uBC18 \uB9AC\uD3EC\uD305',
      'vbc.f3': '\uAC00\uCE58\uAE30\uBC18 \uC9C0\uBD88 \uBAA8\uB378 \uC9C0\uC6D0',
      'vbc.outcome': '\uB370\uC774\uD130 \uAE30\uBC18 \uCF00\uC5B4\uB97C \uC704\uD55C \uC758\uB8CC\uAE30\uAE30 \uC5F0\uB3D9',
      // Technology
      'tech.eyebrow': '\uAE30\uC220 \uD50C\uB7AB\uD3FC',
      'tech.title': '20\uB144 \uC774\uC0C1\uC758 \uC758\uB8CC\uAE30\uAE30<br>\uD601\uC2E0 \uC704\uC5D0 \uAD6C\uCD95\uB418\uC5C8\uC2B5\uB2C8\uB2E4',
      'tech.device_title': 'HH-800A / HH-930',
      'tech.device_desc': '120\uC885 \uC774\uC0C1\uC758 \uC13C\uC11C \uC5F0\uB3D9 \uAC8C\uC774\uD2B8\uC6E8\uC774 \uB514\uBC14\uC774\uC2A4. \uBBF8\uAD6D VA\uC5D0 10,000\uB300 \uC774\uC0C1 \uC218\uCD9C.',
      'tech.hub_title': '\uD558\uC774\uCF00\uC5B4 \uD5C8\uBE0C',
      'tech.hub_desc': 'USB, \uBE14\uB8E8\uD22C\uC2A4, BLE \uD504\uB85C\uD1A0\uCF5C\uC744 \uD1B5\uD55C 120\uC885 \uC774\uC0C1 \uC758\uB8CC\uAE30\uAE30 \uC5F0\uB3D9 IoT \uAC8C\uC774\uD2B8\uC6E8\uC774.',
      'tech.mobile_title': '\uD558\uC774\uCF00\uC5B4 M',
      'tech.mobile_desc': '\uD658\uC790\uC640 \uC758\uB8CC\uD300\uC744 \uC5F0\uACB0\uD558\uB294 \uBAA8\uBC14\uC77C \uAC74\uAC15 \uBAA8\uB2C8\uD130\uB9C1 \uC571.',
      'tech.devices_title': '120\uC885+ \uC758\uB8CC\uAE30\uAE30',
      'tech.devices_desc': '\uAE00\uB85C\uBC8C \uC2DC\uC7A5\uC5D0\uC11C \uAC80\uC99D\uB41C \uC885\uD569 \uC758\uB8CC\uAE30\uAE30 \uC5F0\uB3D9 \uC5ED\uB7C9.',
      // Stats
      'stats.eyebrow': '\uAE30\uC220 \uADDC\uBAA8',
      'stats.title': '\uAE00\uB85C\uBC8C \uD5EC\uC2A4\uCF00\uC5B4 \uC2DC\uC7A5\uC5D0\uC11C<br>\uAC80\uC99D\uB41C \uAE30\uC220',
      'stats.hospitals': '\uACC4\uC57D \uBCD1\uC6D0',
      'stats.patients': '\uB4F1\uB85D \uD658\uC790',
      'stats.exported': '\uBBF8\uAD6D VA \uC218\uCD9C \uB300\uC218',
      'stats.devices': '\uC758\uB8CC\uAE30\uAE30 \uC5F0\uB3D9',
      // Compliance
      'compliance.eyebrow': '\uBCF4\uC548 \uBC0F \uCEF4\uD50C\uB77C\uC774\uC5B8\uC2A4',
      'compliance.title': 'HIPAA \uC900\uC218.<br>ISO 27001 \uBC0F ISO 27701 \uC778\uC99D.',
      'compliance.desc': '\uC5C5\uACC4 \uCD5C\uACE0 \uC218\uC900\uC758 \uBCF4\uC548 \uD45C\uC900\uACFC \uCEF4\uD50C\uB77C\uC774\uC5B8\uC2A4 \uC778\uC99D\uC73C\uB85C \uD658\uC790 \uB370\uC774\uD130\uB97C \uBCF4\uD638\uD569\uB2C8\uB2E4.',
      'compliance.hipaa_desc': '\uBCF4\uD638\uB300\uC0C1 \uAC74\uAC15\uC815\uBCF4(PHI)\uC5D0 \uB300\uD55C \uAC74\uAC15\uBCF4\uD5D8 \uC774\uB3D9\uC131\uACFC \uCC45\uC784\uC5D0 \uAD00\uD55C \uBC95\uB960(HIPAA) \uC694\uAD6C\uC0AC\uD56D\uC744 \uC644\uBCBD\uD558\uAC8C \uC900\uC218\uD569\uB2C8\uB2E4.',
      'compliance.iso27001_desc': '\uC815\uBCF4\uBCF4\uC548 \uAD00\uB9AC\uCCB4\uACC4(ISMS)\uC5D0 \uB300\uD55C \uAD6D\uC81C \uD45C\uC900 \uC778\uC99D\uC744 \uBCF4\uC720\uD558\uACE0 \uC788\uC2B5\uB2C8\uB2E4.',
      'compliance.iso27701_desc': 'ISO 27001\uC758 \uAC1C\uC778\uC815\uBCF4 \uBCF4\uD638 \uD655\uC7A5 \uD45C\uC900\uC73C\uB85C \uAC1C\uC778\uC815\uBCF4 \uAD00\uB9AC\uCCB4\uACC4\uB97C \uAC16\uCD94\uACE0 \uC788\uC2B5\uB2C8\uB2E4.',
      // Resources
      'resources.eyebrow': '\uB9AC\uC18C\uC2A4',
      'resources.title': '\uD559\uC2B5\uD558\uACE0, \uC5F0\uACB0\uD558\uACE0,<br>\uC2DC\uC791\uD558\uC138\uC694',
      'resources.fhir_title': 'FHIR \uC5F0\uB3D9',
      'resources.fhir_desc': 'HL7v2\uC5D0\uC11C FHIR R4\uB85C \u2014 \uC5C5\uACC4 \uD45C\uC900 \uD504\uB85C\uD1A0\uCF5C\uC744 \uD1B5\uD55C \uC6D0\uD65C\uD55C EMR \uC5F0\uB3D9.',
      'resources.blog_title': '\uBE14\uB85C\uADF8 & \uC778\uC0AC\uC774\uD2B8',
      'resources.blog_desc': '\uD5EC\uC2A4\uCF00\uC5B4 IT \uD2B8\uB80C\uB4DC, \uC81C\uD488 \uC5C5\uB370\uC774\uD2B8, \uC784\uC0C1 \uBCA0\uC2A4\uD2B8 \uD504\uB799\uD2F0\uC2A4.',
      'resources.faq_title': '\uC790\uC8FC \uBB3B\uB294 \uC9C8\uBB38',
      'resources.faq_desc': '\uC194\uB8E8\uC158, \uBE4C\uB9C1, \uAD6C\uD604\uC5D0 \uB300\uD55C \uC790\uC8FC \uBB3B\uB294 \uC9C8\uBB38.',
      // CTA
      'cta.primary': '\uB370\uBAA8 \uC2E0\uCCAD\uD558\uAE30',
      'cta.secondary': '\uC601\uC5C5\uD300 \uBB38\uC758',
      // Footer
      'footer.desc': '\uD601\uC2E0\uACFC \uC784\uC0C1 \uC6B0\uC218\uC131\uC744 \uD1B5\uD574 \uD658\uC790 \uC131\uACFC\uB97C \uAC1C\uC120\uD558\uB294 \uC885\uD569 \uD5EC\uC2A4\uCF00\uC5B4 \uAE30\uC220 \uC194\uB8E8\uC158.',
      'footer.address': '\uC11C\uC6B8\uD2B9\uBCC4\uC2DC \uAC15\uB0A8\uAD6C \uD14C\uD5E4\uB780\uB85C 123, \uC778\uC131\uC815\uBCF4 \uBE4C\uB529 3\uCE35',
      'footer.solutions_title': '\uC194\uB8E8\uC158',
      'footer.company_title': '\uD68C\uC0AC',
      'footer.resources_title': '\uB9AC\uC18C\uC2A4',
      'footer.rpm': '\uC6D0\uACA9\uD658\uC790\uBAA8\uB2C8\uD130\uB9C1',
      'footer.ccm': '\uB9CC\uC131\uC9C8\uD658\uAD00\uB9AC',
      'footer.awv': '\uC5F0\uAC04\uAC74\uAC15\uAC80\uC9C4',
      'footer.vbc': '\uAC00\uCE58\uAE30\uBC18\uC9C4\uB8CC',
      'footer.fhir': 'FHIR \uC5F0\uB3D9',
      'footer.about_link': '\uD558\uC774\uCF00\uC5B4\uB137 \uC18C\uAC1C',
      'footer.team': '\uB9AC\uB354\uC2ED \uD300',
      'footer.story': '\uD68C\uC0AC \uC774\uC57C\uAE30',
      'footer.compliance_link': '\uCEF4\uD50C\uB77C\uC774\uC5B8\uC2A4',
      'footer.blog': '\uBE14\uB85C\uADF8',
      'footer.faq': '\uC790\uC8FC \uBB3B\uB294 \uC9C8\uBB38',
      'footer.contact': '\uBB38\uC758\uD558\uAE30',
      'footer.demo': '\uB370\uBAA8 \uC2E0\uCCAD',
      'footer.privacy': '\uAC1C\uC778\uC815\uBCF4\uCC98\uB9AC\uBC29\uCE68',
      'footer.terms': '\uC774\uC6A9\uC57D\uAD00'
    }
  };

  var currentLang = localStorage.getItem('hicarenet-lang') || 'en';

  // --- Apply Translations ---
  function applyTranslations(lang) {
    currentLang = lang;
    localStorage.setItem('hicarenet-lang', lang);
    document.documentElement.lang = lang === 'ko' ? 'ko' : 'en';
    document.body.setAttribute('data-lang', lang);

    var dict = translations[lang];
    if (!dict) return;

    document.querySelectorAll('[data-i18n]').forEach(function (el) {
      var key = el.getAttribute('data-i18n');
      if (dict[key] !== undefined) {
        if (dict[key].indexOf('<br>') !== -1 || dict[key].indexOf('<') !== -1) {
          el.innerHTML = dict[key];
        } else {
          el.textContent = dict[key];
        }
      }
    });

    document.querySelectorAll('.lang-toggle__btn').forEach(function (btn) {
      btn.classList.toggle('is-active', btn.getAttribute('data-lang') === lang);
    });
  }

  // --- Language Toggle ---
  document.querySelectorAll('.lang-toggle__btn').forEach(function (btn) {
    btn.addEventListener('click', function () {
      applyTranslations(this.getAttribute('data-lang'));
    });
  });

  // --- Hamburger Menu ---
  var hamburger = document.getElementById('nav-hamburger');
  var mobileMenu = document.getElementById('mobile-menu');

  if (hamburger && mobileMenu) {
    hamburger.addEventListener('click', function () {
      var isOpen = hamburger.classList.toggle('is-open');
      mobileMenu.classList.toggle('is-open', isOpen);
      hamburger.setAttribute('aria-expanded', isOpen);
    });

    // Close mobile menu on link click
    mobileMenu.querySelectorAll('.nav__mobile-link').forEach(function (link) {
      link.addEventListener('click', function () {
        hamburger.classList.remove('is-open');
        mobileMenu.classList.remove('is-open');
        hamburger.setAttribute('aria-expanded', 'false');
      });
    });
  }

  // --- Section Visibility & Animations ---
  var sections = document.querySelectorAll('.fp-section');
  var dots = document.querySelectorAll('.section-dots__dot');
  var scrollIndicator = document.getElementById('scroll-indicator');
  var sectionDots = document.getElementById('section-dots');

  var sectionObserver = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        var section = entry.target;
        var index = parseInt(section.getAttribute('data-section'), 10);

        section.classList.add('is-visible');

        section.querySelectorAll('[data-animate]').forEach(function (el) {
          el.classList.add('is-animated');
        });

        dots.forEach(function (dot, i) {
          dot.classList.toggle('is-active', i === index);
        });

        if (index > 0 && scrollIndicator) {
          scrollIndicator.classList.add('is-hidden');
        } else if (index === 0 && scrollIndicator) {
          scrollIndicator.classList.remove('is-hidden');
        }

        // Counter animation on stats section (index 6)
        if (index === 6) {
          animateCounters();
        }
      }
    });
  }, {
    threshold: 0.4
  });

  sections.forEach(function (section) {
    sectionObserver.observe(section);
  });

  // --- Hide dots & scroll indicator when footer is visible ---
  var footer = document.getElementById('footer');
  if (footer) {
    var footerObserver = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          sectionDots.style.opacity = '0';
          scrollIndicator.classList.add('is-hidden');
        } else {
          sectionDots.style.opacity = '1';
        }
      });
    }, { threshold: 0.1 });
    footerObserver.observe(footer);
  }

  // --- Dot Navigation ---
  dots.forEach(function (dot) {
    dot.addEventListener('click', function () {
      var index = parseInt(this.getAttribute('data-index'), 10);
      sections[index].scrollIntoView({ behavior: 'smooth' });
    });
  });

  // --- Counter Animation ---
  var countersAnimated = false;

  function animateCounters() {
    if (countersAnimated) return;
    countersAnimated = true;

    document.querySelectorAll('[data-count]').forEach(function (el) {
      var target = parseInt(el.getAttribute('data-count'), 10);
      var duration = 2000;
      var startTime = null;

      function step(timestamp) {
        if (!startTime) startTime = timestamp;
        var progress = Math.min((timestamp - startTime) / duration, 1);
        var eased = 1 - Math.pow(1 - progress, 3);
        var current = Math.round(eased * target);
        el.textContent = current.toLocaleString();
        if (progress < 1) {
          requestAnimationFrame(step);
        }
      }

      requestAnimationFrame(step);
    });
  }

  // --- Nav Scroll Effect ---
  var nav = document.getElementById('nav');

  window.addEventListener('scroll', function () {
    if (window.scrollY > 50) {
      nav.classList.add('is-scrolled');
    } else {
      nav.classList.remove('is-scrolled');
    }
  }, { passive: true });

  // --- Keyboard Navigation ---
  document.addEventListener('keydown', function (e) {
    if (e.key === 'ArrowDown' || e.key === 'PageDown') {
      e.preventDefault();
      navigateSection(1);
    } else if (e.key === 'ArrowUp' || e.key === 'PageUp') {
      e.preventDefault();
      navigateSection(-1);
    }
  });

  function navigateSection(direction) {
    var currentIndex = getCurrentSectionIndex();
    var nextIndex = currentIndex + direction;
    if (nextIndex >= 0 && nextIndex < sections.length) {
      sections[nextIndex].scrollIntoView({ behavior: 'smooth' });
    }
  }

  function getCurrentSectionIndex() {
    var scrollTop = window.scrollY;
    var windowHeight = window.innerHeight;
    var index = 0;
    sections.forEach(function (section, i) {
      if (section.offsetTop <= scrollTop + windowHeight * 0.5) {
        index = i;
      }
    });
    return index;
  }

  // --- Smooth scroll for nav anchor links ---
  document.querySelectorAll('a[href^="#"]').forEach(function (anchor) {
    anchor.addEventListener('click', function (e) {
      var targetId = this.getAttribute('href');
      if (targetId === '#') return;
      var target = document.querySelector(targetId);
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });

  // --- Initialize ---
  applyTranslations(currentLang);

})();
