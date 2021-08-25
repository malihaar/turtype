export default class WordCompletionEvent extends Event {
    static NAME = 'WordCompletion'

    constructor(customEventInit = null) {
        super(WordCompletionEvent.NAME, customEventInit)
    }
}
