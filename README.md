# Javascript test solution

## Requirements

TL;~~DR~~ install [volta](https://volta.sh/)

- Nodejs 16 (Active LTS while writing this, hope this test will be seen before 16 end of life 😝) 

- npm 7

> Don't worry, there is a chance that this work without the exact required environment 🤞 

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

test is simply using mocha.