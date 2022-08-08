//TODO, https://redux.js.org/faq/actions#why-should-type-be-a-string-or-at-least-serializable-why-should-my-action-types-be-constants

export abstract class Source {}

export class ImageSource extends Source {
    public readonly url: string;

    public constructor(init: { url: string }) {
        super();
        this.url = init.url;
    }
}

export class TextSource extends Source {
    public readonly text: string;
    public constructor(init: { text: string }) {
        super();
        this.text = init.text;
    }
}
