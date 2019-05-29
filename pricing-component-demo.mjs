import {PolymerElement, html} from "https://unpkg.com/@polymer/polymer@next/polymer-element.js?module"
import "https://widgets.risevision.com/stable/components/pricing/pricing-data-component.mjs"
import "https://widgets.risevision.com/stable/components/pricing/pricing-selector-component.mjs"
import "https://widgets.risevision.com/stable/components/pricing/pricing-summary-component.mjs"

class PricingComponentDemo extends PolymerElement {
  static get properties() {
    return {
      pricingData: {type: Object, value: {}},
      displayCount: {type: Number, value: 2},
      period: {type: String, value: "yearly"},
      applyDiscount: {type: Boolean, value: false}
    };
  }

  static get template() {
    return html`
      <style>
      </style>
      <section>
        <pricing-data-component pricing-data={{pricingData}}></pricing-data-component>
        <pricing-selector-component 
          show-display-count-section
          show-discount-section
          show-period-section
          pricing-data=[[pricingData]]
          display-count={{displayCount}}
          period={{period}}
          apply-discount={{applyDiscount}}>
        </pricing-selector-component>
        <pricing-summary-component
          pricing-data=[[pricingData]]
          display-count=[[displayCount]]
          period=[[period]]
          apply-discount=[[applyDiscount]]
        </pricing-summary-component>
      </section>
    `;
  }
}

window.customElements.define("pricing-component-demo", PricingComponentDemo);
