export interface PersonalInfo {
  name: string;
  websiteType: string;
  professionalTitle: string;
  education: string;
  currentYear: string; // e.g. "Completed in 2020 (Currently Working)"
  collegeName: string;
  universityName: string;
  experienceYears: number; // 5
  medicalShopName: string;
  location: string;
  brandName: string;
  tagline: string;
  heroHeadline: string;
  introBio: string;
  vision: string;
  coreValues: string[];
  email: string;
  phone: string;
  linkedin: string;
  whatsapp: string;
  profileImage?: string;
}

export interface MetricItem {
  id: string;
  value: string;
  label: string;
  subtext: string;
  iconName: string;
}

export interface AcademicInterest {
  id: string;
  title: string;
  description: string;
  iconName: string;
  keyTopics: string[];
}

export interface ExperienceDetail {
  title: string;
  shopName: string;
  duration: string;
  overview: string;
  responsibilities: string[];
  learningTakeaways: string[];
  careerGoal: string;
}

export interface SkillCategory {
  id: string;
  title: string;
  description: string;
  iconName: string;
  skills: {
    name: string;
    level: number;
    description: string;
  }[];
}

export interface InterestDetail {
  id: string;
  title: string;
  description: string;
  iconName: string;
  bulletPoints: string[];
}
