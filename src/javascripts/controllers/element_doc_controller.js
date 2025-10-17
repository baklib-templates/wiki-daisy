// app/javascript/controllers/element_doc_controller.js
import { Controller } from "@hotwired/stimulus"


export default class extends Controller {
  static values = {
    content: String
  }

  connect() {
    // document.addEventListener("turbo:load", () => {
    //   const el = document.querySelector('elements-api');

    //   if (el) {
    //     const observer = new MutationObserver((mutations, obs) => {
    //       // Stoplight 渲染完成后，会在 shadowRoot 中生成 .sl-elements 根节点
    //       if (el.querySelector('.sl-elements-api')) {
    //         console.log('✅ Stoplight Elements 渲染完成');
    //         obs.disconnect();
    //       }
    //     });
    //     observer.observe(el, { childList: true, subtree: true });
    //   }
    // });

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
