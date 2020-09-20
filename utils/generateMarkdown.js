// function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
${data.badge}

## Description
${data.description}

## Table of Contents
${data.toc.map(a=> `* ${a}\n`).join("")}

## Installation
${data.installation}

## Usage
${data.usage}

## License
This Application is under the ${data.license} License

## Contributing
${data.contributing}

## Tests
${data.tests}

## Questions
${data.questions}
`;
}

module.exports = generateMarkdown;
