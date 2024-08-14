const header = {
  // all the properties are optional - can be left empty or deleted
  homepage: 'https://TaewanKIM20.github.io',
  title: 'JS.',
}

const about = {
  // all the properties are optional - can be left empty or deleted
  name: 'Taewan Kim',
  role: 'Back End Engineer',
  description: `
  I am Taewan Kim, a budding back-end developer who enrolled at Sungkyunkwan University in 2019 with a focus on back-end development. Here are some highlights of my journey so far:\n
  - Currently involved as a member in two startups, excluding various side projects.\n
  - Primarily working with Node.js as part of my ongoing study of back-end development stacks.\n
  - Spent a month in Thailand in 2023 on an ICT volunteering project.\n
  - Actively participating in Voluntain, where I help operate an online educational platform for coding as part of international volunteer service.\n
`,
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
