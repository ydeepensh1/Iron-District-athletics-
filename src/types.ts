export type Trainer = {
  id: string;
  name: string;
  role: string;
  experience: string;
  image: string;
  socials: {
    instagram?: string;
    twitter?: string;
    linkedin?: string;
  };
};

export type MembershipPlan = {
  id: string;
  name: string;
  price: string;
  period: string;
  features: string[];
  isPopular?: boolean;
};

export type Program = {
  id: string;
  title: string;
  description: string;
  image: string;
};

export type Testimonial = {
  id: string;
  name: string;
  age: number;
  quote: string;
};

export type ClassSchedule = {
  time: string;
  name: string;
};

export type DailySchedule = {
  day: string;
  classes: ClassSchedule[];
};
