<h1><B>QA Engineer Assessment Solution using Cypress.io</B></h1>

<h3><B>Introduction of the QA engineer</B></h3>

Name: Sougata Bandyopadhyay

8+ years of experience in providing E2E testing solutions to the customers having worked with requirement analysis to designing test strategies, test plans, identifying test scenarios followed by its execution and test automation. Worked with Fedex Backend Servers (FAST and PMIS) team for 3 years with FedEx OpCos - FedEx Express, FedEx Ground. Have very good exposure working in agile projects (of different team size) with test automation tools like Cypress.io, Selenium WebDriver, Cucumber etc.

<h3><B>Assignment</B></h3>

<B>Search for character (person)</B>

1. When you search for a character and it’s a valid one, then you should be able to see his / her “Gender”, “Birth year”, “Eye color” and “Skin color”.
2. When you search for a character and it’s not a valid one, then you should be able to see “Not found” in the results. 

Comments: Automated both the scenarios using mocha and cypress (describe and IT block)
Data is passed through <B>characters.json</B> present in the <I>fixtures folder</I>.

<B>Search for planet</B>

1. When you search for a planet and it’s a valid one, then you should be able to see its “Population”, “Climate” and “Gravity”.
2. When you search for a planet and it’s not a valid one, then you should be able to see “Not found” in the results. 

Comments: Automated both the scenarios using mocha and cypress (describe and IT block)
Data is passed through <B>planets.json</B> present in the <I>fixtures folder</I>.

<B>Additional flows</B>

1. When you search for either a character or a planet and you get one or more results for it, clear the “Search form” and hit the Search button again, you should then get an empty result list (previous search results are removed). 
2. You can search for results by clicking the “Search” button or by pressing “enter” on the search field.
3. When for example you have searched for a full planet name and you’ve got results, if you switch to People and search for the same thing (that has no matching people based on a partial name), you should get a “Not found” in the results.
4. You can have more than one results, for both Planets and Names (partial matching).

Comments: All four additional flows are automated using mocha and cypress (describe and IT block)
Data is passed through <B>additionalFlows.json</B> present in the <I>fixtures folder</I>.

<B><U>Defect:</B></U> Additional flow 1 is failing as previous search results are not removed. When you search for a valid planet or character and you get one or more results for it, clear the “Search form” and hit the Search button again, the previous search list stays and hence it's a defect. If you run the scenario, you will also get a screenshot of the failed steps.

<B>Pre-requisites to this solution include</B>

1. Download and install Node.js: https://nodejs.org/en/download/
2. Download and install Visual Studio Code: https://code.visualstudio.com/download
3. It is recommended to update your npm to the latest version.

<B>Project Specification</B>

1. Framework: Cypress.io (with Cypress Testing Library)
2. Node.JS version: v15.14.0
3. NPM version: 7.24.0
4. IDE used: VS Code 1.60.2

<B>Steps to use this project</B>

1. Download or clone this repo.
2. Install dependencies by running the following command in terminal (from inside your app directory i.e. where package.json is located): <I><B>npm install</I></B>.
3. Install <I><B>mochawesome-report generator </I></B>dependency globally by running this command from the terminal: <I><B>npm install -g mochawesome-report generator</I></B>.

<B>Steps to run this project</B>

1. Download the star wars application folder and run the application by running the following command in terminal (from inside your app directory i.e. where package.json is located): <I><B>ng serve</I></B>
2. Once the star wars application is up and running, switch to the test automation project folder and install the dependencies by running the following command in terminal (from inside your automation folder directory i.e. where package.json is located): <I><B>npm install</I></B> and also <I><B>npm install -g mochawesome-report generator</I></B>
3. Once all dependencies are installed successfully, you can run the spec files using your playground or through command line.
4. To run from the command line, go to the root folder and use the command: <I><B>npm run test</I></B> to run all spec files within the project. This will run the test in a headless mode and once the execution is completed you can generate the HTML report by running the following command from the terminal: <I><B>npm run final_report</I></B>
5. While developing the automated tests, you can also run the tests by using playground. From the command line use the command: <I><B>npx cypress open</I></B> and click the spec file to run.

<B>Generating reports in this project</B>

1. To generate the report, run the following command from the terminal <I><B>npm run final_report</I></B>
2. In the console where you run the above command, you will be shown the path where the HTML report is saved. Path is: <I><B>mochawesome-report/output.html</I></B>