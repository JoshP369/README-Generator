function generateMarkdown(answers) {
  return `# ${answers.projectName}

## Description

${answers.projectDescription}

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Contributing](#contributing)
- [Tests](#tests)
- [Questions](#questions)

## Installation

${answers.installation}

## Usage

${answers.usage}

  ![License Badge](https://img.shields.io/badge/license-MIT-green)

## License

${answers.license}

## Contributing

${answers.contributing}

## Tests

${answers.tests}

## Questions

If you have any questions, please feel free to reach out:

- GitHub: [${answers.githubUsername}](https://github.com/${answers.githubUsername})
- Email: ${answers.email}
`;
}

module.exports = generateMarkdown;