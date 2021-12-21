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
- The Exploratory Testing is done using Xray tool and it would be nice to look(if you guys have time) to see in deep flow of testing use cases. the link to download the tool is: https://www.getxray.app/exploratory-testing
- Just import TestSession.test to the app then you guys can go through what I have did and approach towards it.
- In case if you do not want to view the in the xray app then I have attached a zip file where you will find a PDF as the same what xray is gonna show to you. The other folders have notes, Screenshots and Videos in detailed for further clarification.
- The TestScenario.docx Will explain the user points on Exploratory testing. Its just a breif docx file as a whole.