# pro-slugs [![Build Status](https://travis-ci.org/edgycircle/pro-slugs.svg)](https://travis-ci.org/edgycircle/pro-slugs)

pro-slugs is an addon that can be installed with Ember CLI. It gives you the ability to generate good looking and URL safe slugs from a string. Inspired by the Ruby gem [agnostic_slugs from Lasse Ebert](https://github.com/lasseebert/agnostic_slugs).

## Installation

```bash
cd your-project-directory
ember install pro-slugs
```

## Usage

```js
import slug from 'pro-slugs';

console.log(slug('Your string!'));
```
