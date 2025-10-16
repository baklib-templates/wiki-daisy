// app/javascript/controllers/element_doc_controller.js
import { Controller } from "@hotwired/stimulus"


export default class extends Controller {
  static values = {
    content: String
  }

  connect() {
    this.element.addEventListener('load', () => {
      this.setApiDoc()
    })

    // 如果没有事件，延迟赋值
    setTimeout(() => {
      if (!this.element.apiDescriptionDocument) {
        this.setApiDoc()
      }
    }, 500)
  }

  setApiDoc() {
    try {
      this.element.apiDescriptionDocument = this.contentValue
    } catch(e) {
      console.error(e)
    }
  }
}
