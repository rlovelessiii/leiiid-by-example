---
title: 'Changelog: v0.0.2'
date: '2021-01-16'
---

---
# v0.0.2
_Updates:_
- Added two packages.
  - [gatsby-remark-prismjs](https://www.gatsbyjs.com/plugins/gatsby-remark-prismjs/).
  - [prismjs](https://www.npmjs.com/package/prismjs)
- Updated `gatsby-browser.js` and `gatsby-config.js` to include new plugins.
- Updated `global.css` to style code blocks using the Solarized-Light theme from [Prism](https://prismjs.com).
- Added macOS-styled window buttons to code blocks with help thanks to [this blog post](https://garbagevalue.com/blog/syntax-highlighting-next-js).

---
# Background
Many markdown processors will display any character between single (\`) or triple (\`\`\`) backticks using monospaced characters. 

### Examples
##### Single Backtick
_Typed_

```markdown
This is  `in-line` code.
```

_Rendered_

This is `in-line` code.

##### Triple Backtick
_Typed_
````markdown
```
This is a code block.
```
````

_Rendered_
```none
This is a code block.
```
---
# Syntax Highlighting
To be able to showcase code similar to how many integrated development environments (IDE) can, we can use a library such as [prismjs](https://www.npmjs.com/package/prismjs) to help style our code blocks.

_Example (w/o syntax highlighting)_
```none
export default function sum(a, b){
  return a + b
}
```

_Example (w/ syntax highlighting)_
```js
export default function sum(a, b){
  return a + b
}
```

---
# Extra Features
Thanks to the extensibility of [Prism](https://prismjs.com), there are many plugins bundled with the [gatsby-remark-prismjs](https://www.gatsbyjs.com/plugins/gatsby-remark-prismjs/) package.

_Line Numbers_
```javascript{numberLines: true}
export default function sum(a, b){
  return a + b
}
```

_Line Highlighting_
```javascript
export default function sum(a, b){
  return a + b // highlight-line
}
```

_Git-Diff Highlighting_
```diff-javascript
export default function sum(a, b){
-  return a + b
+  const sum = a + b
+  return sum
}
```

_Command-Line Prompt_
```bash
git add package.json
```
> _Notice how you can't highlight the_ `$` _character?_

These are a few of the plugins available for [Prism](https://prismjs.com) and the main ones we will use for now.