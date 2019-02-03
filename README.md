# CREW APPLICATION

Simple application which represents dashboard with candidates.

### Prerequisitions
npm should be installed. See https://www.npmjs.com/

'yarn' also should be installed. See https://yarnpkg.com/en/
 
### Running locally
`yarn install`

`yarn start`

App will be available on http://localhost:3000


### Running in docker
`docker build -t crew-app .`

`docker run -it --rm -p 5000:5000 --name crew-container crew-app`

App will be available on http://localhost:5000


### Running tests

a) Running with runner

Run cmd command 'npx cypress open'. CYpress desktop will be opened.

Select feature file with tests you want to run. Cypress will open Chrome and will automatically run the tests

b) Running tests from command line

Run in command line 'cypress run'. It will run all tests headlessly.
You may also run it with a few other options. See https://docs.cypress.io/guides/guides/command-line.html#Installation.  

 
