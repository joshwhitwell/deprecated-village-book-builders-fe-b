# Village Book Builders

Village Book Builders is a non-profit organization empowering villages around the world to end the cycle of poverty through education. They build library spaces where children can foster deeper relationships with learning. They also help people bring social responsibility in-house by connecting volunteers, students, and working professionals to serve as mentors to children in developing communities all over the globe.

## Project Overview

This repository contains the source code for the Village Book Builders (VBB) client-facing web application. The application is a multi-role platform that allows authenticated users to access and manage data and resources pertaining to the VBB mentor program. The application is architected using a React framework, bootstrapped using Create-React-App, and connects to a mock back-end built using JSON Server that simulates the models and behaviors of the VBB API without querying the actual production database. For more information about back-end API see the back-end repo [here](https://github.com/joshwhitwell/village-book-builders-server).

## Tech Stack

* Languages: JavaScript | HTML | CSS
* Framework: React.js
* State Management: Redux
* Styling: Ant Design | Styled Components
* Authentication: JSON Web Tokens
* Build: Craco
* Linting & Code Styled: ESLint | Prettier
* Testing: Jest | React Testing Library

## Features

* Authenticated login process for registered VBB users (program administrators, school headmasters, students, program mentors)

      ![Login](/src/assets/markdown_images/login.png)

* Multi-step registration and onboarding process for new VBB students and teachers

      ![Registration](/src/assets/markdown_images/registration.png)

* Custom dashboard pages and user profile components for headmasters, teachers, students, and program admins

      ![Dashboard](/src/assets/markdown_images/dashboard.png)

* Intuitive booking interface for scheduling and managing mentorship assignments

      ![Login](/src/assets/markdown_images/matching.png)

## Installation

- Fork and clone the repository to your local machine
- Run: `npm install` to download project dependencies
- Create a .env file in the foot directory of your local repo and add the following variable(s):
- -`REACT_APP_BASE_URL=[base URL of the back end server]`
- Run: `npm start` to start your local development server

## Contributing

When contributing to this repository, please first discuss the change you wish to make via issue, email, or any other method with the owners of this repository before making a change.

Please note we have a [code of conduct](./CODE_OF_CONDUCT.md). Please follow it in all your interactions with the project.

### Issue/Bug Request

**If you are having an issue with the existing project code, please submit a bug report under the following guidelines:**

- Check first to see if your issue has already been reported.
- Check to see if the issue has recently been fixed by attempting to reproduce the issue using the latest master branch in the repository.
- Create a live example of the problem.
- Submit a detailed bug report including your environment & browser, steps to reproduce the issue, actual and expected outcomes, where you believe the issue is originating from, and any potential solutions you have considered.

### Feature Requests

We would love to hear from you about new features which would improve this app and further the aims of our project. Please provide as much detail and information as possible to show us why you think your new feature should be implemented.

### Pull Requests

If you have developed a patch, bug fix, or new feature that would improve this app, please submit a pull request. It is best to communicate your ideas with the developers first before investing a great deal of time into a pull request to ensure that it will mesh smoothly with the project.

Remember that this project is licensed under the MIT license, and by submitting a pull request, you agree that your work will be, too.

#### Pull Request Guidelines

- Update the README.md with details of changes to the interface, including new plist variables, exposed ports, useful file locations and container parameters.
- Ensure that your code conforms to our existing code conventions and test coverage.
- Include the relevant issue number, if applicable.
- You may merge the Pull Request in once you have the sign-off of two other developers, or if you do not have permission to do that, you may request the second reviewer to merge it for you.

## Contributors for Version 1

|                                                 [Josh Glanz](https://github.com/)                                                 |                                           [Manuel Muratalla](https://github.com/)                                           |                                          [Tiffany Arellano](https://github.com/)                                          |                                             [Joe Idelson](https://github.com/)                                              |                                           [Wilma Rodriguez](https://github.com/)                                           |
| :-------------------------------------------------------------------------------------------------------------------------------: | :-------------------------------------------------------------------------------------------------------------------------: | :-----------------------------------------------------------------------------------------------------------------------: | :-------------------------------------------------------------------------------------------------------------------------: | :------------------------------------------------------------------------------------------------------------------------: |
|     [<img src="https://ca.slack-edge.com/ESZCHB482-W016ECL84RW-afefea5a0c53-512" width = "200" />](https://github.com/Jahteo)     | [<img src="https://ca.slack-edge.com/ESZCHB482-W0123RU151V-ffba83afb622-512" width = "200" />](https://github.com/ferror18) | [<img src="https://ca.slack-edge.com/ESZCHB482-W0138D8CX0Q-a7076291a0cf-512" width = "200" />](https://github.com/yirano) | [<img src="https://ca.slack-edge.com/ESZCHB482-W012QNXUFMJ-92e87d69900d-512" width = "200" />](https://github.com/jidelson) | [<img src="https://ca.slack-edge.com/ESZCHB482-W0123RP3C9M-fff2ba750184-512" width = "200" />](https://github.com/kima-92) |
|                        [<img src="https://github.com/favicon.ico" width="15"> ](https://github.com/Jahteo)                        |                    [<img src="https://github.com/favicon.ico" width="15"> ](https://github.com/ferror18)                    |                    [<img src="https://github.com/favicon.ico" width="15"> ](https://github.com/yirano)                    |                    [<img src="https://github.com/favicon.ico" width="15"> ](https://github.com/jidelson)                    |                    [<img src="https://github.com/favicon.ico" width="15"> ](https://github.com/kima-92)                    |
| [ <img src="https://static.licdn.com/sc/h/al2o9zrvru7aqj8e1x2rzsrca" width="15"> ](https://www.linkedin.com/in/josh-glantzhucks/) |        [ <img src="https://static.licdn.com/sc/h/al2o9zrvru7aqj8e1x2rzsrca" width="15"> ](https://www.linkedin.com/)        |       [ <img src="https://static.licdn.com/sc/h/al2o9zrvru7aqj8e1x2rzsrca" width="15"> ](https://www.linkedin.com/)       |        [ <img src="https://static.licdn.com/sc/h/al2o9zrvru7aqj8e1x2rzsrca" width="15"> ](https://www.linkedin.com/)        |       [ <img src="https://static.licdn.com/sc/h/al2o9zrvru7aqj8e1x2rzsrca" width="15"> ](https://www.linkedin.com/)        |

## Contributors for Version 1.1

|                                                               Josh Whitwell                                                                |                                                                              Joon Kim                                                                               |                                                                          Beau Bradley                                                                           |                                                                            Rohith Sachdeva                                                                             |                                                          Andre Jeon                                                           |                                                                             Henry Davis                                                                             |
| :----------------------------------------------------------------------------------------------------------------------------------------: | :-----------------------------------------------------------------------------------------------------------------------------------------------------------------: | :-------------------------------------------------------------------------------------------------------------------------------------------------------------: | :--------------------------------------------------------------------------------------------------------------------------------------------------------------------: | :---------------------------------------------------------------------------------------------------------------------------: | :-----------------------------------------------------------------------------------------------------------------------------------------------------------------: |
|      [<img src="https://ca.slack-edge.com/ESZCHB482-W0180TANQ73-30c122b765f7-512" width = "200" />](https://github.com/Joshwhitwell)       | [<img src="https://avatars.githubusercontent.com/u/66539462?s=460&u=4ca0fa8e9a34c1e63f261c952670f2335289eaf2&v=4" width = "200" />](https://github.com/Sunkist5691) | [<img src="https://avatars.githubusercontent.com/u/48367657?s=460&u=2bb0d4c092d2a40e6e8e4b887f4478c0000d058e&v=4" width = "200" />](https://github.com/devbeau) | [<img src="https://avatars.githubusercontent.com/u/36117777?s=460&u=f4f2f2021785906244edd782560db4210676a9be&v=4" width = "200" />](https://github.com/RohithSachdeva) | [<img src="https://ca.slack-edge.com/ESZCHB482-W0143FQCD5Y-c519eba97d85-512" width = "200" />](https://github.com/andre-jeon) | [<img src="https://avatars.githubusercontent.com/u/65560404?s=460&u=92a8157893db3aee54d27b4e1d78c96d3aa32cd3&v=4" width = "200" />](https://github.com/HenryRDavis) |
|                         [<img src="https://github.com/favicon.ico" width="15"> ](https://github.com/Joshwhitwell)                          |                                      [<img src="https://github.com/favicon.ico" width="15"> ](https://github.com/Sunkist5691)                                       |                                      [<img src="https://github.com/favicon.ico" width="15"> ](https://github.com/devbeau)                                       |                                      [<img src="https://github.com/favicon.ico" width="15"> ](https://github.com/RohithSachdeva)                                       |                    [<img src="https://github.com/favicon.ico" width="15"> ](https://github.com/andre-jeon)                    |                                      [<img src="https://github.com/favicon.ico" width="15"> ](https://github.com/HenryRDavis)                                       |
| [ <img src="https://static.licdn.com/sc/h/al2o9zrvru7aqj8e1x2rzsrca" width="15"> ](https://www.linkedin.com/in/joshua-whitwell-425846132/) |                      [ <img src="https://static.licdn.com/sc/h/al2o9zrvru7aqj8e1x2rzsrca" width="15"> ](https://www.linkedin.com/in/joon5691/)                      |                  [ <img src="https://static.licdn.com/sc/h/al2o9zrvru7aqj8e1x2rzsrca" width="15"> ](https://www.linkedin.com/in/beaubradweb/)                   |                     [ <img src="https://static.licdn.com/sc/h/al2o9zrvru7aqj8e1x2rzsrca" width="15"> ](https://www.linkedin.com/in/rohithsachdeva)                     |  [ <img src="https://static.licdn.com/sc/h/al2o9zrvru7aqj8e1x2rzsrca" width="15"> ](https://www.linkedin.com/in/andrejeon/)   |                  [ <img src="https://static.licdn.com/sc/h/al2o9zrvru7aqj8e1x2rzsrca" width="15"> ](https://www.linkedin.com/in/its-henry-davis/)                   |

## License
![MIT](https://img.shields.io/packagist/l/doctrine/orm.svg)
