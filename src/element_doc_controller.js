// app/javascript/controllers/element_doc_controller.js
import { Controller } from "@hotwired/stimulus"


export default class extends Controller {
  static values = {
    content: String
  }

  connect() {
    this.initializeApiDoc()
  }

  async initializeApiDoc() {
    await new Promise(resolve => setTimeout(resolve, 100))

    if (this.contentValue) {
    this.element.apiDescriptionDocument = this.contentValue
    }
  }
}
