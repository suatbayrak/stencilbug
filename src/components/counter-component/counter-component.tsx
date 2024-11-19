import { Component, Event, EventEmitter, Host, Prop, State, h } from '@stencil/core';

@Component({
  tag: 'counter-component',
  styleUrl: 'counter-component.css',
  shadow: true,
})
export class CounterComponent {
  @Prop() btnText: string;
  @Prop() color: string = 'blue';
  @State() count = 0;

  @Event() didReset: EventEmitter;

  increment() {
    console.log('incremen');
    this.count++;
  }

  reset() {
    this.count = 0;
    this.didReset.emit(true);
  }

  componentWillLoad() {
    console.log('componentWillLoad()');
  }
  componentDidLoad() {
    console.log('componentDidLoad()');
  }
  componentWillUpdate() {
    console.log('componentWillUpdate()');
  }
  componentDidUpdate() {
    console.log('componentDidUpdate()');
  }

  render() {
    console.log('button text is ', this.btnText);
    return (
      <Host>
        <button onClick={() => this.increment()} style={{ color: this.color }}>
          {this.btnText}
        </button>
        <p>Count: {this.count} </p>

        <br />
        <br />
        <button onClick={() => this.reset()} style={{ color: this.color }}>
          Reset
        </button>

        <slot name="test"></slot>
      </Host>
    );
  }
}
