# README-Generator

## Project Overview
In the Professional README Generator challenge, you'll build a command-line application that dynamically generates a professional README.md file based on user input. The goal is to streamline the process of creating a high-quality README for GitHub projects, saving developers valuable time.

## User Story
As a developer, I want a README generator so that I can quickly create a professional README for a new project.

## Acceptance Criteria
The application will be invoked using the following command:

```
node index.js
```

### The generator should:

1. Accept user input via the command line.

2. Generate a professional README.md file with the following sections:

    - Title
    - Description
    - Table of Contents
    - Installation
    - Usage
    - License
    - Contributing
    - Tests
    - Questions

3. Display the entered project title as the title of the README.

4. Populate sections (Description, Installation, Usage, Contributing, and Tests) with user-provided information.

5. Add a badge for the chosen license at the top of the README.

6. Include a notice in the License section explaining the selected license.

7. Add the user's GitHub username and email to the Questions section, with a link to their GitHub profile and instructions on how to contact them.

8. Ensure that clicking links in the Table of Contents takes the user to the corresponding section of the README.

## Walkthrough Video
For a visual demonstration of the application's functionality, please refer to the walkthrough video below: