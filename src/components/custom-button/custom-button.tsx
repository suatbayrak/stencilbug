import { Component, h, Host, Prop } from '@stencil/core';
import clsx from 'clsx';
import { ButtonSize, ButtonVariant } from './custom-button.types';

@Component({
  tag: 'custom-button',
  styleUrls: ['custom-button.css'],
  shadow: true,
})
export class CustomButton {
  @Prop() label?: string;
  @Prop() name?: string;
  @Prop() disabled: boolean = false;
  @Prop() variant: ButtonVariant = ButtonVariant.PRIMARY;
  @Prop() fullWidth: boolean = true;
  @Prop() size: ButtonSize = ButtonSize.MEDIUM;
  @Prop() spinner: boolean = false;

  @Prop() onClick!: (event: UIEvent) => void;

  render() {
    return (
      <Host class={clsx({ 'full-width': this.fullWidth }, 'column-flex', 'center')}>
        <button
          class={clsx(this.variant, this.size, { disabled: this.disabled }, this.spinner, { 'full-width': this.fullWidth }, 'column-flex', 'center', 'button')}
          onClick={this.onClick}
          disabled={this.disabled}
          id="test-button"
        >
          <slot />
        </button>
      </Host>
    );
  }
}
