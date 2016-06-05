# WebClip

Plugable popup in browser. Inspired by PopClip and Medium

![image](https://cloud.githubusercontent.com/assets/914329/15804722/14a7b78e-2b45-11e6-8925-2bfca3252a9d.png)

# Demo

http://djyde.github.io/WebClip

# Installtion

```bash
$ npm install webclip
```

# Usage

```javascript
import WebClip from 'webclip'
let webclip = new WebClip(document.querySelector('#your-container'))

const google = {
  name: 'Google',
  description: 'Search on Google',
  action(value) {
    // `value` is the selected content
    window.open(`https://www.google.com.hk/#safe=strict&q=${value}`)
  }
}

const bing = {
  name: 'Bing',
  description: 'Search on Bing',
  action(value) {
    window.open(`http://bing.com/search?q=${value}`)
  }
}

webclip.use([google, bing])
```

WebClip will pass the Range in action(). You can use it to do a lot, such as wrapping a highlight wrapper:

```javascript
const highlight = {
  name: 'highlight',
  description: 'Highlight content',
  action(value, range) {
    const $highlight = document.createElement('span')
    $highlight.style.backgroundColor = 'rgba(92,255,160,.5)'
    // or just add a class
    // $highlight.classList.add('your-class')
    range.surroundContents($highlight)      
  }
}

webclip.use([highlight, google, bing])
```

You can config a font-awesome icon for a plugin, instead of the uppercase-first-character:

```javascript
const highlight = {
  name: 'highlight',
  description: 'Highlight content',
  icon: 'pencil',
  action(value, range) {
    const $highlight = document.createElement('span')
    $highlight.style.backgroundColor = 'rgba(92,255,160,.5)'
    // or just add a class
    // $highlight.classList.add('your-class')
    range.surroundContents($highlight)      
  }
}

const remove = {
  name: 'remove',
  description: 'Remove content',
  icon: 'trash',
  action(value, range) {
    range.deleteContents()
  }
}

webclip.use([highlight, remove, google, bing])
```

# License
MIT License