# Javascript test solution

## Requirements

TL;~~DR~~ install [volta](https://volta.sh/)

- Nodejs 16 (Active LTS while writing this, hope this test will be seen before 16 end of life 😝) 

- npm 7

> Don't worry, there is a chance that this work without the exact required environment 🤞 

> This was tested developed and tested in a POSIX environment (Ubuntu). if you are running this from Windows I don't guarentee 
compatibility, so please mind the gap.

## Usage

- Step 1: install dependencies

```bash
npm install
```

- Step 2 

```
node app.js [options]
```

### Options Reference


| Option   | Alias   | Description |
|---|---|---|
|--filter|-f|Filter animals contain value example `--filter=ry". Filter value is not case sensitive. |
|--count|-c|Print the counts of People and Animals by counting the number of children and appending it in the name, eg. `Satanwi [2]` |
|--help|-h|Without dependencies like [yargs](https://github.com/yargs/yargs) this will simply display a link to this README.md.I added help option for the sake of cli.|

## Test

```bash
npm test
```

~~Test is simply using mocha.~~

I switched to jest because mocha doesn't support esm in watch mode :( https://mochajs.org/#nodejs-native-esm-support

jest do support esm in experimental mode with this variable `NODE_OPTIONS=--experimental-vm-modules`

## Roadmap

- [ ] Dockerize developer environment
- [ ] Publish as npm package (allow using my awesome program via npx for example with package.json bin property)
- [ ] Create ci with github actions (test / publish)
- [ ] Introduce a CHANGELOG.md file
- [x] Shout out in Twitter 🐦 about this awesome application (kidding, this is secret, I don't want every body will pass `ACME COMPANY` node js test with god mode, like me I mean...)
