import { MembershipPlan, Program, Testimonial, Trainer, DailySchedule } from './types';

export const stats = [
  { label: 'Members', value: 8500, suffix: '+' },
  { label: 'Training Sessions', value: 250000, suffix: '+' },
  { label: 'Weekly Classes', value: 40, suffix: '+' },
  { label: 'Expert Coaches', value: 20, suffix: '+' },
];

export const facilities = [
  {
    id: '01',
    title: 'STRENGTH FLOOR',
    description: 'Olympic lifting platforms, power racks, barbells, dumbbells and premium strength equipment.',
    image: 'https://images.unsplash.com/photo-1540497077202-7c8a3999166f?q=80&w=3270&auto=format&fit=crop',
  },
  {
    id: '02',
    title: 'PERFORMANCE ZONE',
    description: 'Sleds, turf, battle ropes, kettlebells, plyometric equipment and conditioning machines.',
    image: 'https://images.unsplash.com/photo-1599058917212-d750089bc07e?q=80&w=2938&auto=format&fit=crop',
  },
  {
    id: '03',
    title: 'CARDIO FLOOR',
    description: 'Treadmills, stair climbers, bikes, rowers and ellipticals.',
    image: 'https://images.unsplash.com/photo-1534258936925-c58bed479fcb?q=80&w=3431&auto=format&fit=crop',
  },
  {
    id: '04',
    title: 'RECOVERY STUDIO',
    description: 'Mobility, stretching and recovery space.',
    image: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?q=80&w=3320&auto=format&fit=crop',
  },
];

export const programs: Program[] = [
  {
    id: '01',
    title: 'STRENGTH',
    description: 'Build real-world strength through progressive resistance training.',
    image: 'https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?q=80&w=3270&auto=format&fit=crop',
  },
  {
    id: '02',
    title: 'PERFORMANCE',
    description: 'Improve speed, power, agility and conditioning.',
    image: 'https://images.unsplash.com/photo-1518611012118-696072aa579a?q=80&w=3270&auto=format&fit=crop',
  },
  {
    id: '03',
    title: 'FAT LOSS',
    description: 'Build sustainable fitness habits through strength and conditioning.',
    image: 'https://images.unsplash.com/photo-1522898467493-49726bf28798?q=80&w=3270&auto=format&fit=crop',
  },
  {
    id: '04',
    title: 'MUSCLE BUILDING',
    description: 'Structured training focused on lean muscle development.',
    image: 'https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?q=80&w=3270&auto=format&fit=crop',
  },
  {
    id: '05',
    title: 'PERSONAL TRAINING',
    description: 'One-on-one coaching built around individual goals.',
    image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?q=80&w=3270&auto=format&fit=crop',
  },
  {
    id: '06',
    title: 'SMALL GROUP TRAINING',
    description: 'High-quality coaching with community accountability.',
    image: 'https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?q=80&w=2940&auto=format&fit=crop',
  },
];

export const trainers: Trainer[] = [
  {
    id: '1',
    name: 'Marcus Reed',
    role: 'Head Performance Coach',
    experience: '12+ years experience',
    image: 'https://images.unsplash.com/photo-1568602471122-7832951cc4c5?q=80&w=3270&auto=format&fit=crop',
    socials: { instagram: '#', twitter: '#' },
  },
  {
    id: '2',
    name: 'Olivia Carter',
    role: 'Strength & Fitness Coach',
    experience: '8+ years experience',
    image: 'https://images.unsplash.com/photo-1594381898411-846e7d193883?q=80&w=3387&auto=format&fit=crop',
    socials: { instagram: '#', linkedin: '#' },
  },
];

export const memberships: MembershipPlan[] = [
  {
    id: 'essential',
    name: 'ESSENTIAL',
    price: '$59',
    period: '/month',
    features: [
      'Full gym access',
      'Strength floor',
      'Cardio floor',
      'Locker access',
      'Fitness orientation',
    ],
  },
  {
    id: 'performance',
    name: 'PERFORMANCE',
    price: '$129',
    period: '/month',
    isPopular: true,
    features: [
      'Everything in Essential',
      'Unlimited group training',
      'Monthly assessment',
      'Training recommendations',
      'Recovery access',
    ],
  },
  {
    id: 'elite',
    name: 'ELITE',
    price: '$229',
    period: '/month',
    features: [
      'Everything in Performance',
      '4 PT sessions/month',
      'Personalized training program',
      'Nutrition guidance',
      'Monthly assessment',
      'Priority booking',
    ],
  },
];

export const testimonials: Testimonial[] = [
  {
    id: '1',
    name: 'Sarah',
    age: 31,
    quote: "I didn't need another gym membership. I needed a place that would actually keep me accountable.",
  },
  {
    id: '2',
    name: 'James',
    age: 38,
    quote: "Six months in, I'm stronger than I've ever been and finally understand how to train properly.",
  },
  {
    id: '3',
    name: 'Tyler',
    age: 24,
    quote: "The coaching completely changed my approach to fitness.",
  },
];

const defaultClasses = [
  { time: '6:00 AM', name: 'Strength / HIIT' },
  { time: '7:00 AM', name: 'Performance / Mobility' },
  { time: '12:00 PM', name: 'Conditioning / Strength' },
  { time: '6:00 PM', name: 'HIIT / Strength' },
  { time: '7:00 PM', name: 'Performance / Conditioning' },
];

export const schedules: DailySchedule[] = [
  { day: 'Monday', classes: defaultClasses },
  { day: 'Tuesday', classes: defaultClasses },
  { day: 'Wednesday', classes: defaultClasses },
  { day: 'Thursday', classes: defaultClasses },
  { day: 'Friday', classes: defaultClasses },
];

export const galleryImages = [
  { src: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=3270&auto=format&fit=crop', category: 'THE FLOOR', span: 'col-span-2 row-span-2' },
  { src: 'https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?q=80&w=2940&auto=format&fit=crop', category: 'THE PEOPLE', span: 'col-span-1 row-span-1' },
  { src: 'https://images.unsplash.com/photo-1540497077202-7c8a3999166f?q=80&w=3270&auto=format&fit=crop', category: 'THE WORK', span: 'col-span-1 row-span-2' },
  { src: 'https://images.unsplash.com/photo-1599058917212-d750089bc07e?q=80&w=2938&auto=format&fit=crop', category: 'THE ENERGY', span: 'col-span-1 row-span-1' },
  { src: 'https://images.unsplash.com/photo-1534258936925-c58bed479fcb?q=80&w=3431&auto=format&fit=crop', category: 'THE PEOPLE', span: 'col-span-2 row-span-1' },
];
