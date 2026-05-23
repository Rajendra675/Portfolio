export const site = {
  name: 'Rajendra Deva',
  role: 'Full-Stack Developer',
  email: 'rajendrababudeva@gmail.com',
  // headshot:
  //   'https://lh3.googleusercontent.com/aida-public/AB6AXuDuSt2mbNvOtS9Ju3Oz28YApn9lYyTtX0GV-r4sRRBelJjtdZq2FLP6HvevxqteNgxFPEkz8mkudH0QDdceh0CPk3G4jjLb6wjralvBwQZ7OClXc8E45CUWUGyEahrf86RvYWbi6YYWN_c5olgqkwOOQI1RE6ou_je1r326RkQoH7zIk_fOJFN4AqtkMDGbwGEoDWqfTVQXlxrXI6su-O4m9376lJo1DU6SnTnAD6UVKawkbMsocmEkh66zqr5jaB6At1yrC8IvJi4',
} as const

export const navLinks = [
  { href: '#about', label: 'About' },
  
  { href: '#stack', label: 'Stack' },
  { href: '#projects', label: 'Projects' },
  { href: '#experience', label: 'Experience' },
  { href: '#contact', label: 'Contact' },
] as const

export const projects = [
  {
    category: 'Enterprise Solution',
    title: 'MDM-ARB',
    description:
      'Medical insurance platform managing patient records, insurance claims, and role-based access for 200-300 concurrent users across 4 independently deployable microservices.',
    tags: ["Spring Boot", "REST APIs", "PostgreSQL", "Hibernate", "JPA", "Spring Security", "Spring Data JPA" , "Jwt", "React", "Tailwind CSS", "Redux "],
    image: '/mdm-arb.png',
    imageAlt: 'MDM-ARB dashboard',
  },
  {
    category: 'HR Management System',
    title: 'TimeTrack',
    description:
      'Employee timesheet and billing platform handling end-to-end approval workflows from timesheet submission  with cloud document management via AWS S3.',
    tags: ['React', 'Tailwind CSS', 'Zustand', 'Formik', 'Yup','Axios'],
    image: '/time.png',
    imageAlt: 'TimeTrack dashboard',
  },
  {
    category: 'Productivity Tool',
    title: 'Unimark',
    description:
      ' Internal US IT recruitment platform streamlining day-to-day recruiter operations across 10+ modules --- requirements, candidates, submissions, and documents --- tracking 500+ consultant submissions/month.',
    tags: ["Spring Boot", "REST APIs", "MySQL", "Hibernate", "JPA", "Spring Security", "Spring Data JPA" ],
    image: '/uni.png',
    imageAlt: 'Unimark dashboard',
  },
] as const

export const experience = [
  {
    period: 'Dec 2024 — Present',
    title: 'Software Engineer',
    company: 'TRINOVA TECHNOLOGIES',
    description:
      'Contributed to 3 full-stack products across Healthcare and HR domains as a core team member, delivering features end-to-end from REST API design to ReactJS UI within Agile/Scrum sprints.',
    active: true,
  },
  {
    period: 'Jul 2024 — Dec 2024',
    title: 'Frontend Developer Intern',
    company: 'IncrivelSoft',
    description:
      'Built responsive ReactJS applications with Formik + Yup form validation and Zustand state management, integrated with backend REST APIs across multiple client projects.',
    active: false,
  },
] as const

export const footerLinks = [
  {
    href: 'https://github.com/Rajendra675',
    label: 'GitHub',
    icon: 'github',
    external: true,
  },
  {
    href: 'https://www.linkedin.com/in/rajendrababudeva',
    label: 'LinkedIn',
    icon: 'linkedin',
    external: true,
  },
  {
    href: '#contact',
    label: 'Contact',
    icon: 'mail',
    external: false,
  },
] as const
