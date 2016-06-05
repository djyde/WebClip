import './index.css'

function createToolbar (parent, plugins) {
  const toolbar = document.createElement('ul')
  const ctx = this

  // add class for toolbarbar
  toolbar.classList.add('webclip-toolbar')

  this.plugins.map(plugin => {
    let item = document.createElement('li')

    item.classList.add('webclip-item')

    item.setAttribute('title', plugin.description || plugin.name)

    if (plugin.icon) {
      let fa = document.createElement('i')
      item.classList.add('webclip-icon', 'fa', `fa-${plugin.icon}`)
      item.appendChild(fa)
    } else {
      item.textContent = plugin.name.charAt(0).toUpperCase()
    }

    // add onclick event listener with `action` action
    item.addEventListener('click', e => {
      plugin.action(ctx.selectedContent, ctx.selection.getRangeAt(0).cloneRange())
    })

    toolbar.appendChild(item)
  })

  return this.el.appendChild(toolbar)
}

function delay (fn) {
  setTimeout(fn, 100)
}

class WebClip {
  constructor (el) {
    this.el = el
    this.plugins = []
    this.selectedContent = null
    this.selection = null
    this.toolbar = null

    this.el.addEventListener('mousedown', e => {
      // if selectedContent is exist when mousedown, it should do nothing but cancel selecting
      if (this.selectedContent) {
        return
      }
    })

    this.el.addEventListener('mouseup', e => {
      delay(() => {
        this.selection = window.getSelection()
        this.selectedContent = this.selection.toString()
        if (this.selection.type === 'Range') {
          const range = this.selection.getRangeAt(0).cloneRange()
          let rect = range.getBoundingClientRect()
          this.showToolbar(rect)
        } else {
          this.hideToolbar()
        }
      })
    })
  }

  use (plugin) {
    if (Array.isArray(plugin)) {
      this.plugins = plugin
    } else {
      this.plugins.push(plugin)
    }
  }

  showToolbar (rect, range) {
    // toolbar element only create once
    if (!this.toolbar) {
      this.toolbar = createToolbar.call(this)
    }
    this.toolbar.style.display = ''
    this.toolbar.style.opacity = '1'
    // caculate the position of toolbar
    const toolbarWidth = this.toolbar.offsetWidth
    const toolbarHeight = this.toolbar.offsetHeight
    this.toolbar.style.left = `${(rect.right - rect.left) / 2 + rect.left - toolbarWidth / 2}px`
    this.toolbar.style.top = `${rect.top - toolbarHeight - 4 + document.body.scrollTop}px`
  }

  hideToolbar () {
    if (this.toolbar) {
      this.toolbar.style.opacity = '0'
      delay(() => { this.toolbar.style.display = 'none' })
    }
  }
}

module.exports = WebClip
