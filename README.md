# Flexcavo_FixtureFinder


**Steps to run the test pack**

Prerequisite and steps to run the test cases:
- The automation pack is OS free, Which means you can you use linux, MacOS or Windows.
- Before cloning project you system needs to have nodeJs installed in you local systems.
- Once you install nodeJs, you need to run certain commands to run the pack.
- Following command is to install cypress using nodeJs(Using package.json) "npm install cypress --save-dev".
- This helps to install the necessary node modules required to run the test cases using cypress.
- The cypress runs on test runner, to access test runner we need to run "./node_modules/.bin/cypress run" or by "npx cypress open".
- Once we enter the command, we could see the cypress test runner is set and we will be seeing a window from cypress. To run test cases, Test runner is must for cypress.
- The cypress window will show you all test cases being wrote in the form of files, we can run all the test cases at once or we can skip(this has to be done from JS file)
- To run crossfunctionally, you need to have all the browsers in your local system.
- To run different browsers you need to mention that specific browser name for an instance: "npx cypress open --browser firefox" or you can select which browser to run from test runner.
- I have attached a Another file with all the test scenarios and test cases.