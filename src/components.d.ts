/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */
import { HTMLStencilElement, JSXBase } from "@stencil/core/internal";
import { ButtonSize, ButtonVariant } from "./components/custom-button/custom-button.types";
export { ButtonSize, ButtonVariant } from "./components/custom-button/custom-button.types";
export namespace Components {
    interface CounterComponent {
        "btnText": string;
        "color": string;
    }
    interface CustomButton {
        "disabled": boolean;
        "fullWidth": boolean;
        "label"?: string;
        "name"?: string;
        "onClick": (event: UIEvent) => void;
        "size": ButtonSize;
        "spinner": boolean;
        "variant": ButtonVariant;
    }
    interface MyComponent {
        /**
          * The first name
         */
        "first": string;
        /**
          * The last name
         */
        "last": string;
        /**
          * The middle name
         */
        "middle": string;
    }
}
export interface CounterComponentCustomEvent<T> extends CustomEvent<T> {
    detail: T;
    target: HTMLCounterComponentElement;
}
declare global {
    interface HTMLCounterComponentElementEventMap {
        "didReset": any;
    }
    interface HTMLCounterComponentElement extends Components.CounterComponent, HTMLStencilElement {
        addEventListener<K extends keyof HTMLCounterComponentElementEventMap>(type: K, listener: (this: HTMLCounterComponentElement, ev: CounterComponentCustomEvent<HTMLCounterComponentElementEventMap[K]>) => any, options?: boolean | AddEventListenerOptions): void;
        addEventListener<K extends keyof DocumentEventMap>(type: K, listener: (this: Document, ev: DocumentEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
        addEventListener<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
        addEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
        removeEventListener<K extends keyof HTMLCounterComponentElementEventMap>(type: K, listener: (this: HTMLCounterComponentElement, ev: CounterComponentCustomEvent<HTMLCounterComponentElementEventMap[K]>) => any, options?: boolean | EventListenerOptions): void;
        removeEventListener<K extends keyof DocumentEventMap>(type: K, listener: (this: Document, ev: DocumentEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
        removeEventListener<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
        removeEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
    }
    var HTMLCounterComponentElement: {
        prototype: HTMLCounterComponentElement;
        new (): HTMLCounterComponentElement;
    };
    interface HTMLCustomButtonElement extends Components.CustomButton, HTMLStencilElement {
    }
    var HTMLCustomButtonElement: {
        prototype: HTMLCustomButtonElement;
        new (): HTMLCustomButtonElement;
    };
    interface HTMLMyComponentElement extends Components.MyComponent, HTMLStencilElement {
    }
    var HTMLMyComponentElement: {
        prototype: HTMLMyComponentElement;
        new (): HTMLMyComponentElement;
    };
    interface HTMLElementTagNameMap {
        "counter-component": HTMLCounterComponentElement;
        "custom-button": HTMLCustomButtonElement;
        "my-component": HTMLMyComponentElement;
    }
}
declare namespace LocalJSX {
    interface CounterComponent {
        "btnText"?: string;
        "color"?: string;
        "onDidReset"?: (event: CounterComponentCustomEvent<any>) => void;
    }
    interface CustomButton {
        "disabled"?: boolean;
        "fullWidth"?: boolean;
        "label"?: string;
        "name"?: string;
        "onClick": (event: UIEvent) => void;
        "size"?: ButtonSize;
        "spinner"?: boolean;
        "variant"?: ButtonVariant;
    }
    interface MyComponent {
        /**
          * The first name
         */
        "first"?: string;
        /**
          * The last name
         */
        "last"?: string;
        /**
          * The middle name
         */
        "middle"?: string;
    }
    interface IntrinsicElements {
        "counter-component": CounterComponent;
        "custom-button": CustomButton;
        "my-component": MyComponent;
    }
}
export { LocalJSX as JSX };
declare module "@stencil/core" {
    export namespace JSX {
        interface IntrinsicElements {
            "counter-component": LocalJSX.CounterComponent & JSXBase.HTMLAttributes<HTMLCounterComponentElement>;
            "custom-button": LocalJSX.CustomButton & JSXBase.HTMLAttributes<HTMLCustomButtonElement>;
            "my-component": LocalJSX.MyComponent & JSXBase.HTMLAttributes<HTMLMyComponentElement>;
        }
    }
}
