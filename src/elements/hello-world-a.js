import {
  bindable,
  inlineView
} from 'aurelia-framework';


@inlineView('<template>Hello from the inline view</template>')
export class HelloWorldACustomElement {
  @bindable message = '';
}
