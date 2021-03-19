<div align="center" id="top"> 
  <img src="./.github/app.gif" alt="Meetup Demo" />

  &#xa0;

  <!-- <a href="https://pluginsdemo.netlify.app">Demo</a> -->
</div>

<h1 align="center">Meetup Demo</h1>

<!-- Status -->

<!-- <h4 align="center"> 
	🚧  Plugins Demo 🚀 Under construction...  🚧
</h4> 

<hr> -->

<p align="center">
  <a href="#dart-about">About</a> &#xa0; | &#xa0; 
  <a href="#memo-license">License</a> &#xa0; | &#xa0;
</p>

<br>

## :dart: About ##

Prerequisites:

1.	Node (v12.x.x)
2.	Git 
3.	AWS-CLI (account configured)
4.	JS basics

Github links for reference - 
https://github.com/Mrinalaot/united-ui-go-serverless
https://github.com/cbsaikumar/meetup-demo


Mrinal: (30 mins)
1.	Install serverless with command line 
a.	npm install serverless -g

2.	sls config
a.	Aws configure list
b.	serverless config credentials --provider provider --key key --secret secret

3.	Create a serverless Project(aws-nodejs)
a.	sls

4.	Run project locally
a.	modify handler.js and serverless.yml
b.	sls invoke local --function functionName

5.	Run offline 
a.	npm init
b.	npm i serverless-offline -D
c.	add to plugins section in serverless.yml
d.	sls offline 

6.	Deployment
a.	Sls deploy




7.	Test API gateway url (from postman/browser)

8.	Serverless commands
a.	sls offline –stage prod
b.	sls package or sls deploy --noDeploy
c.	sls logs -f functionName
d.	sls plugin list
e.	sls plugin search --query offline
f.	sls plugin install --name serverless-offline
g.	sls remove

9.	Explore Other providers and language
a.	serverless create --template azure-nodejs
b.	serverless create --template google-nodejs
c.	serverless create --template aws-python



Bhargava (45 mins)

1.	Plugins
a.	Typescript plugin
a.	sls plugin install -n serverless-plugin-typescript
b.	Dotenv plugin
a.	sls plugin install -n serverless-dotenv-plugin
i.	sls offline --stage dev
ii.	sls offline –stage prod
c.	Other commonly used plugins
a.	serverless-plugin-warmup
b.	serverless-webpack
c.	serverless-plugin-split-stacks
d.	serverless-pseudo-parameters 
e.	serverless-vpc-plugin
f.	serverless-s3-local
2.	API gateway Authorizer
a.	Returns a policy
principalId: principal_id,
    policyDocument: {
      Version: "2012-10-17",
      Statement: [
        {
          Action: "execute-api:Invoke",
          Effect: effect,
          Resource: resource,
        },
      ],
    },
3.	Unit testing and coverage
4.	Use Cases
a.	Invoking another lambda from a lambda
b.	S3 example

## :sparkles: Features ##

:heavy_check_mark: AWS Lambda Examples;\
:heavy_check_mark: Unit Testing;\

## :rocket: Technologies ##

The following tools were used in this project:

- [Node.js](https://nodejs.org/en/)
- [Serverless](https://www.serverless.com/)
- [TypeScript](https://www.typescriptlang.org/)

## :white_check_mark: Requirements ##

Before starting :checkered_flag:, you need to have [Git](https://git-scm.com) and [Node](https://nodejs.org/en/) installed.

## :checkered_flag: Starting ##

```bash
# Clone this project
$ git clone https://github.com/cbsaikumar/meetup-demo

# Access
$ cd meetup-demo

# Install dependencies
$ npm install

# Run the project
$ sls offline

# The server will initialize in the <http://localhost:3000>
```

## :memo: License ##

This project is under license from MIT. For more details, see the [LICENSE](LICENSE.md) file.


&#xa0;

<a href="#top">Back to top</a>
