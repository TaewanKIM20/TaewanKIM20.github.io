const header = {
  // all the properties are optional - can be left empty or deleted
  homepage: 'https://TaewanKIM20.github.io',
  title: 'JS.',
}

const about = {
  // all the properties are optional - can be left empty or deleted
  name: 'Taewan Kim',
  role: 'Back End Engineer',
  description1: 'I am Taewan Kim, a budding back-end developer who enrolled at Sungkyunkwan University in 2019 with a focus on back-end development. Here are some highlights of my journey so far:',
  description2: 'Student at Sungkyunkwan University, Software Department.',
  description3: 'ICT volunteer in Thailand with World Friends.',
  description4: 'Developer for Meeting Go, focusing on API development and AWS deployment.',
  description5: 'Founder and lead developer of Splash, managing API design and AWS deployment.',
  description6: 'Developer at Voluntain, responsible for API design, refactoring, and AWS deployment.',
  resume: 'https://example.com',
  social: {
    linkedin: 'https://www.linkedin.com/in/taewan-kim-29539a297/',
    github: 'https://github.com/TaewanKIM20',
  },
}

const projects = [
  // projects can be added an removed
  // if there are no projects, Projects section won't show up
  {
    name: 'Meeting Go',
    description: `
  'Meeting Go' is a social discovery app for Korean college students. As a lead back-end developer, I focused on:\n
  - Developing and deploying APIs and real-time chats using MySQL and Socket.IO.\n
  - Ensuring application integrity through code reviews and testing.\n
`,
    stack: ['Node.js', 'Mysql', 'Flutter'],
    sourceCode: 'https://github.com',
    livePreview: 'https://github.com',
  },
  {
    name: 'Splash',
    description:
      `'Splash' is a marine leisure sports booking platform. As the founder and lead back-end developer, I was responsible for:\n
  - Designing and deploying all back-end APIs.\n`,
    stack: ['Node.js', 'Mysql', 'React'],
    sourceCode: 'https://github.com',
    livePreview: 'https://github.com',
  },
  {
    name: 'Voluntain',
    description: `
  'Voluntain' is an educational video platform for international students. I have enhanced and currently manage the project by:\n
  - Refactoring the existing codebase.\n
  - Adding user APIs.\n
  - Redesigning and deploying updates.\n
`
,
    stack: ['Strapi', 'Next.js', 'React'],
    sourceCode: 'https://github.com',
    livePreview: 'https://github.com',
  },
]

const skills = [
  // skills can be added or removed
  // if there are no skills, Skills section won't show up
  'Node.js',
  'Strapi',
  'MySQL',
  'SQLite',
  'JavaScript',
  'Next.js',
  'React',
  'Kotlin',
  'Git',
  'CI/CD',
]

const contact = {
  // email is optional - if left empty Contact section won't show up
  email: 'fnzk2019@g.skku.edu',
}

export { header, about, projects, skills, contact }
