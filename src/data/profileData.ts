import type {
  PersonalInfo,
  MetricItem,
  AcademicInterest,
  ExperienceDetail,
  SkillCategory,
  InterestDetail,
} from '../types/portfolio';

export const initialProfileData: PersonalInfo = {
  name: 'Gokul .A',
  websiteType: 'Personal Pharmacy Portfolio',
  professionalTitle: 'D.Pharm Professional',
  education: 'Diploma in Pharmacy (D.Pharm) – Completed 2020',
  currentYear: 'Completed in 2020 (Currently Working)',
  collegeName: 'Vinayaka Missions Research Foundation (Deemed to be University)',
  universityName: 'Vinayaka Missions Research Foundation (Deemed to be University)',
  experienceYears: 6,
  medicalShopName: 'Guna Medicals',
  location: 'Tamil Nadu, India',
  brandName: 'Gokul',
  tagline: 'Knowledge in Pharmacy. Care for Everyone.',
  heroHeadline: 'Knowledge in Pharmacy. Commitment to Better Healthcare.',
  introBio:
    'I am Gokul .A, a D.Pharm professional who completed my Diploma in Pharmacy in 2020 at Vinayaka Missions Research Foundation. I am currently working with 6+ years of practical retail medical shop experience at Guna Medicals in Tamil Nadu (joined in 2020), combining solid pharmaceutical knowledge with daily medicine dispensing, inventory management, and patient care.',
  vision:
    'To deliver accurate dispensing, uphold patient safety, and advance community healthcare awareness through practical skills and continuous learning.',
  coreValues: [
    'Responsibility',
    'Accuracy',
    'Continuous Learning',
    'Professional Ethics',
    'Customer Care',
  ],
  email: 'gokulgokulgokul35081@gmail.com',
  phone: '+91 98765 43210',
  linkedin: 'https://linkedin.com/in/gokul-pharmacy',
  whatsapp: '+919876543210',
  profileImage: '/images/gokul-pharmacist.jpg',
};

export const metricsData: MetricItem[] = [
  {
    id: 'exp',
    value: '06+',
    label: 'Years of Experience',
    subtext: 'Active retail practice at Guna Medicals (2020 – Present)',
    iconName: 'Clock',
  },
  {
    id: 'edu',
    value: '2020',
    label: 'D.Pharm Completed',
    subtext: 'Vinayaka Missions Research Foundation',
    iconName: 'GraduationCap',
  },
  {
    id: 'loc',
    value: 'Working',
    label: 'Current Status',
    subtext: 'Guna Medicals • Active Practice',
    iconName: 'HeartPulse',
  },
  {
    id: 'focus',
    value: 'Tamil Nadu',
    label: 'Location',
    subtext: 'India • Southern Healthcare Hub',
    iconName: 'MapPin',
  },
];

export const academicInterests: AcademicInterest[] = [
  {
    id: 'pharmacology',
    title: 'Pharmacology',
    description:
      'Study of drug mechanisms of action, pharmacokinetics, therapeutic applications, and physiological responses.',
    iconName: 'Activity',
    keyTopics: ['Drug Mechanisms', 'Adverse Reactions', 'Organ Toxicology', 'Therapeutic Uses'],
  },
  {
    id: 'pharmaceutics',
    title: 'Pharmaceutics',
    description:
      'Art and science of turning a new chemical entity into a safe, dosage-form medication for patient administration.',
    iconName: 'Pill',
    keyTopics: ['Dosage Form Design', 'Formulation Science', 'Suspensions & Syrups', 'Sterile Products'],
  },
  {
    id: 'pharm-chem',
    title: 'Pharmaceutical Chemistry',
    description:
      'Chemical structure, molecular synthesis, and physicochemical properties of synthetic and natural drug compounds.',
    iconName: 'FlaskConical',
    keyTopics: ['Medicinal Compounds', 'Structural Activity', 'Drug Synthesis', 'Chemical Stability'],
  },
  {
    id: 'pharmacognosy',
    title: 'Pharmacognosy',
    description:
      'Identification and study of crude medicinal drugs obtained from natural botanical, biological, and mineral sources.',
    iconName: 'Leaf',
    keyTopics: ['Herbal Formulations', 'Phytochemicals', 'Active Principles', 'Plant Extraction'],
  },
  {
    id: 'pharm-analysis',
    title: 'Pharmaceutical Analysis',
    description:
      'Quantitative and qualitative assessment of active pharmaceutical ingredients (APIs) and finished products.',
    iconName: 'SearchCheck',
    keyTopics: ['Assay Testing', 'Quality Control', 'Spectroscopy Principles', 'Purity Standards'],
  },
  {
    id: 'pharm-practice',
    title: 'Pharmacy Practice',
    description:
      'Clinical and community dispensing, prescription auditing, patient counseling, and healthcare ethics.',
    iconName: 'ShieldCheck',
    keyTopics: ['Prescription Interpretation', 'Drug Counseling', 'Dispensing Rules', 'Community Care'],
  },
];

export const experienceDetails: ExperienceDetail = {
  title: 'Medical Shop Professional Experience — Guna Medicals',
  shopName: 'Guna Medicals',
  duration: '6 Years Practical Experience (Joined 2020)',
  overview:
    'Six years of hands-on retail pharmacy practice at Guna Medicals in Tamil Nadu (joined in 2020), managing daily medicine dispensing, inventory stock, and customer healthcare guidance.',
  responsibilities: [
    'Medicine identification and systematic shelf organization.',
    'Brand vs. generic medicine equivalent matching.',
    'Customer interaction and clear dosage timing instructions.',
    'Stock inventory handling and FEFO expiry monitoring.',
    'Batch number verification and stock return management.',
    'Supervised prescription dispensing and verification.',
    'Hygienic and temperature-conscious medicine storage.',
    'Daily pharmacy billing and retail operational support.',
  ],
  learningTakeaways: [
    'Zero-error mindset in verifying drug names, strengths, and dosages.',
    'Clear, compassionate communication with patients.',
    'Practical supply chain knowledge: expiry cycles and fast-moving stock.',
    'Strong ethical commitment to patient health and safe dispensing.',
  ],
  careerGoal:
    'To build on my 2020 D.Pharm qualification from Vinayaka Missions Research Foundation and 6 years of active retail experience at Guna Medicals, continuously growing as a trusted healthcare professional.',
};

export const skillsCategories: SkillCategory[] = [
  {
    id: 'med-knowledge',
    title: 'Medicine Knowledge',
    description: 'Familiarity with pharmaceutical products, brands, and accurate medicine identification.',
    iconName: 'Pill',
    skills: [
      { name: 'Pharmaceutical Product Identification', level: 96, description: 'Rapid recognition of solid, liquid, and topical dosage forms.' },
      { name: 'Brand vs. Generic Familiarity', level: 94, description: 'Knowledge of common brand names and corresponding active generic molecules.' },
      { name: 'Dosage Form Classifications', level: 92, description: 'Tablets, capsules, syrups, suspensions, drops, and inhalers.' },
      { name: 'Storage & Cold-Chain Requirements', level: 90, description: 'Refrigerated vaccines, insulins (2°C–8°C), and room temperature drugs.' },
    ],
  },
  {
    id: 'customer-support',
    title: 'Customer Support & Care',
    description: 'Customer communication, patient service support, and clear guidance.',
    iconName: 'HeartHandshake',
    skills: [
      { name: 'Patient Interaction & Empathy', level: 95, description: 'Attentive, courteous listening to customer queries.' },
      { name: 'Dosage Timing & Usage Guidance', level: 92, description: 'Explaining morning/night, before/after food instructions clearly.' },
      { name: 'Bilingual Communication', level: 95, description: 'Fluent, clear customer interaction in Tamil and English.' },
      { name: 'Service Reliability & Trust', level: 96, description: 'Building long-term customer trust through reliable assistance.' },
    ],
  },
  {
    id: 'inventory-mgmt',
    title: 'Inventory & Stock Management',
    description: 'Stock organization, batch tracking, and expiry-date monitoring.',
    iconName: 'Boxes',
    skills: [
      { name: 'Expiry Date Monitoring & FEFO', level: 98, description: 'First-Expiry, First-Out rotation preventing outdated stock.' },
      { name: 'Stock Shelving & Categorization', level: 96, description: 'Therapeutic and alphabetical arrangement for rapid retrieval.' },
      { name: 'Stock Auditing & Fast-Moving Tracking', level: 91, description: 'Monitoring daily fast-moving antibiotics, analgesics, and antacids.' },
      { name: 'Distributor Receiving & Checking', level: 93, description: 'Verifying invoices, batch numbers, and physical packaging integrity.' },
    ],
  },
  {
    id: 'academic-learning',
    title: 'Academic Learning & Science',
    description: 'Continuous development of theoretical pharmacy knowledge.',
    iconName: 'GraduationCap',
    skills: [
      { name: 'D.Pharm Core Concepts', level: 90, description: 'Applied knowledge of pharmacology, pharmaceutics, and community pharmacy.' },
      { name: 'Prescription Structure Awareness', level: 94, description: 'Superscription, inscription, subscription, and signature interpretation.' },
      { name: 'Healthcare Safety & Precautions', level: 93, description: 'Awareness of common contraindications and drug precautions.' },
      { name: 'Eagerness for Professional Growth', level: 98, description: 'Committed to lifelong learning in evolving pharmaceutical science.' },
    ],
  },
];

export const additionalSkills = [
  { name: 'Communication & Interpersonal Skills', desc: 'Clear, compassionate explanation to diverse customers.' },
  { name: 'Teamwork & Coordination', desc: 'Smooth collaboration with pharmacy staff and doctors.' },
  { name: 'Time Management', desc: 'Efficiently handling peak retail hours and prescription rush.' },
  { name: 'Attention to Detail', desc: 'Double-checking drug dosage, strength, and packaging.' },
  { name: 'Problem-Solving', desc: 'Quickly sourcing alternatives when specific brands are out of stock.' },
  { name: 'Professional Responsibility', desc: 'Upholding patient privacy and ethical healthcare standards.' },
];

export const professionalInterests: InterestDetail[] = [
  {
    id: 'pharm-sciences',
    title: 'Pharmaceutical Sciences',
    description:
      'Understanding drug actions, formulation science, and modern dosage delivery systems.',
    iconName: 'Microscope',
    bulletPoints: [
      'Drug delivery systems & release mechanisms',
      'Bioavailability & pharmacology concepts',
      'Modern formulation developments',
    ],
  },
  {
    id: 'health-awareness',
    title: 'Healthcare Awareness',
    description:
      'Promoting responsible medication use and basic patient guidance in the community.',
    iconName: 'HeartPulse',
    bulletPoints: [
      'Preventing antibiotic misuse & self-medication',
      'Importance of completing prescribed drug courses',
      'Preventive wellness & healthy lifestyle habits',
    ],
  },
  {
    id: 'pharmacy-ops',
    title: 'Pharmacy Operations',
    description:
      'Learning modern inventory systems, POS billing, and regulatory retail compliance.',
    iconName: 'Store',
    bulletPoints: [
      'Computerized inventory tracking & barcode systems',
      'Drug & Cosmetics regulations compliance',
      'Efficient stock rotation and customer management',
    ],
  },
  {
    id: 'continuous-learning',
    title: 'Continuous Learning',
    description:
      'Staying updated with developments in pharmaceutical sciences and healthcare standards.',
    iconName: 'BookOpen',
    bulletPoints: [
      'Reading pharmacy journals and regulatory guidelines',
      'Participating in academic seminars and workshops',
      'Expanding knowledge of emerging therapeutic molecules',
    ],
  },
  {
    id: 'career-dev',
    title: 'Career Development',
    description:
      'Building a solid career combining formal diploma studies with practical store experience.',
    iconName: 'TrendingUp',
    bulletPoints: [
      'Completed D.Pharm in 2020 with solid academic foundation',
      'Exploring hospital, community, or clinical pharmacy roles',
      'Striving to become a qualified, ethical healthcare professional',
    ],
  },
];
