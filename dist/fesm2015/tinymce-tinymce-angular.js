import { Output, EventEmitter, Component, Input, ElementRef, forwardRef, NgZone, Inject, PLATFORM_ID, NgModule } from '@angular/core';
import { NG_VALUE_ACCESSOR, FormsModule } from '@angular/forms';
import { isPlatformBrowser, CommonModule } from '@angular/common';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
class Events {
    constructor() {
        this.onBeforePaste = new EventEmitter();
        this.onBlur = new EventEmitter();
        this.onClick = new EventEmitter();
        this.onContextMenu = new EventEmitter();
        this.onCopy = new EventEmitter();
        this.onCut = new EventEmitter();
        this.onDblclick = new EventEmitter();
        this.onDrag = new EventEmitter();
        this.onDragDrop = new EventEmitter();
        this.onDragEnd = new EventEmitter();
        this.onDragGesture = new EventEmitter();
        this.onDragOver = new EventEmitter();
        this.onDrop = new EventEmitter();
        this.onFocus = new EventEmitter();
        this.onFocusIn = new EventEmitter();
        this.onFocusOut = new EventEmitter();
        this.onKeyDown = new EventEmitter();
        this.onKeyPress = new EventEmitter();
        this.onKeyUp = new EventEmitter();
        this.onMouseDown = new EventEmitter();
        this.onMouseEnter = new EventEmitter();
        this.onMouseLeave = new EventEmitter();
        this.onMouseMove = new EventEmitter();
        this.onMouseOut = new EventEmitter();
        this.onMouseOver = new EventEmitter();
        this.onMouseUp = new EventEmitter();
        this.onPaste = new EventEmitter();
        this.onSelectionChange = new EventEmitter();
        this.onActivate = new EventEmitter();
        this.onAddUndo = new EventEmitter();
        this.onBeforeAddUndo = new EventEmitter();
        this.onBeforeExecCommand = new EventEmitter();
        this.onBeforeGetContent = new EventEmitter();
        this.onBeforeRenderUI = new EventEmitter();
        this.onBeforeSetContent = new EventEmitter();
        this.onChange = new EventEmitter();
        this.onClearUndos = new EventEmitter();
        this.onDeactivate = new EventEmitter();
        this.onDirty = new EventEmitter();
        this.onExecCommand = new EventEmitter();
        this.onGetContent = new EventEmitter();
        this.onHide = new EventEmitter();
        this.onInit = new EventEmitter();
        this.onLoadContent = new EventEmitter();
        this.onNodeChange = new EventEmitter();
        this.onPostProcess = new EventEmitter();
        this.onPostRender = new EventEmitter();
        this.onPreInit = new EventEmitter();
        this.onPreProcess = new EventEmitter();
        this.onProgressState = new EventEmitter();
        this.onRedo = new EventEmitter();
        this.onRemove = new EventEmitter();
        this.onReset = new EventEmitter();
        this.onSaveContent = new EventEmitter();
        this.onSetAttrib = new EventEmitter();
        this.onObjectResizeStart = new EventEmitter();
        this.onObjectResized = new EventEmitter();
        this.onObjectSelected = new EventEmitter();
        this.onSetContent = new EventEmitter();
        this.onShow = new EventEmitter();
        this.onSubmit = new EventEmitter();
        this.onUndo = new EventEmitter();
        this.onVisualAid = new EventEmitter();
    }
}
Events.propDecorators = {
    "onBeforePaste": [{ type: Output },],
    "onBlur": [{ type: Output },],
    "onClick": [{ type: Output },],
    "onContextMenu": [{ type: Output },],
    "onCopy": [{ type: Output },],
    "onCut": [{ type: Output },],
    "onDblclick": [{ type: Output },],
    "onDrag": [{ type: Output },],
    "onDragDrop": [{ type: Output },],
    "onDragEnd": [{ type: Output },],
    "onDragGesture": [{ type: Output },],
    "onDragOver": [{ type: Output },],
    "onDrop": [{ type: Output },],
    "onFocus": [{ type: Output },],
    "onFocusIn": [{ type: Output },],
    "onFocusOut": [{ type: Output },],
    "onKeyDown": [{ type: Output },],
    "onKeyPress": [{ type: Output },],
    "onKeyUp": [{ type: Output },],
    "onMouseDown": [{ type: Output },],
    "onMouseEnter": [{ type: Output },],
    "onMouseLeave": [{ type: Output },],
    "onMouseMove": [{ type: Output },],
    "onMouseOut": [{ type: Output },],
    "onMouseOver": [{ type: Output },],
    "onMouseUp": [{ type: Output },],
    "onPaste": [{ type: Output },],
    "onSelectionChange": [{ type: Output },],
    "onActivate": [{ type: Output },],
    "onAddUndo": [{ type: Output },],
    "onBeforeAddUndo": [{ type: Output },],
    "onBeforeExecCommand": [{ type: Output },],
    "onBeforeGetContent": [{ type: Output },],
    "onBeforeRenderUI": [{ type: Output },],
    "onBeforeSetContent": [{ type: Output },],
    "onChange": [{ type: Output },],
    "onClearUndos": [{ type: Output },],
    "onDeactivate": [{ type: Output },],
    "onDirty": [{ type: Output },],
    "onExecCommand": [{ type: Output },],
    "onGetContent": [{ type: Output },],
    "onHide": [{ type: Output },],
    "onInit": [{ type: Output },],
    "onLoadContent": [{ type: Output },],
    "onNodeChange": [{ type: Output },],
    "onPostProcess": [{ type: Output },],
    "onPostRender": [{ type: Output },],
    "onPreInit": [{ type: Output },],
    "onPreProcess": [{ type: Output },],
    "onProgressState": [{ type: Output },],
    "onRedo": [{ type: Output },],
    "onRemove": [{ type: Output },],
    "onReset": [{ type: Output },],
    "onSaveContent": [{ type: Output },],
    "onSetAttrib": [{ type: Output },],
    "onObjectResizeStart": [{ type: Output },],
    "onObjectResized": [{ type: Output },],
    "onObjectSelected": [{ type: Output },],
    "onSetContent": [{ type: Output },],
    "onShow": [{ type: Output },],
    "onSubmit": [{ type: Output },],
    "onUndo": [{ type: Output },],
    "onVisualAid": [{ type: Output },],
};
const /** @type {?} */ validEvents = [
    'onActivate',
    'onAddUndo',
    'onBeforeAddUndo',
    'onBeforeExecCommand',
    'onBeforeGetContent',
    'onBeforeRenderUI',
    'onBeforeSetContent',
    'onBeforePaste',
    'onBlur',
    'onChange',
    'onClearUndos',
    'onClick',
    'onContextMenu',
    'onCopy',
    'onCut',
    'onDblclick',
    'onDeactivate',
    'onDirty',
    'onDrag',
    'onDragDrop',
    'onDragEnd',
    'onDragGesture',
    'onDragOver',
    'onDrop',
    'onExecCommand',
    'onFocus',
    'onFocusIn',
    'onFocusOut',
    'onGetContent',
    'onHide',
    'onInit',
    'onKeyDown',
    'onKeyPress',
    'onKeyUp',
    'onLoadContent',
    'onMouseDown',
    'onMouseEnter',
    'onMouseLeave',
    'onMouseMove',
    'onMouseOut',
    'onMouseOver',
    'onMouseUp',
    'onNodeChange',
    'onObjectResizeStart',
    'onObjectResized',
    'onObjectSelected',
    'onPaste',
    'onPostProcess',
    'onPostRender',
    'onPreProcess',
    'onProgressState',
    'onRedo',
    'onRemove',
    'onReset',
    'onSaveContent',
    'onSelectionChange',
    'onSetAttrib',
    'onSetContent',
    'onShow',
    'onSubmit',
    'onUndo',
    'onVisualAid'
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
const /** @type {?} */ bindHandlers = (ctx, editor, initEvent) => {
    validEvents.forEach((eventName) => {
        const /** @type {?} */ eventEmitter = ctx[eventName];
        if (eventEmitter.observers.length > 0) {
            if (eventName === 'onInit') {
                ctx.ngZone.run(() => eventEmitter.emit({ event: initEvent, editor }));
            }
            else {
                editor.on(eventName.substring(2), ctx.ngZone.run(() => (event) => eventEmitter.emit({ event, editor })));
            }
        }
    });
};
let /** @type {?} */ unique = 0;
const /** @type {?} */ uuid = (prefix) => {
    const /** @type {?} */ date = new Date();
    const /** @type {?} */ time = date.getTime();
    const /** @type {?} */ random = Math.floor(Math.random() * 1000000000);
    unique++;
    return prefix + '_' + random + unique + String(time);
};
const /** @type {?} */ isTextarea = (element) => {
    return typeof element !== 'undefined' && element.tagName.toLowerCase() === 'textarea';
};
const /** @type {?} */ normalizePluginArray = (plugins) => {
    if (typeof plugins === 'undefined' || plugins === '') {
        return [];
    }
    return Array.isArray(plugins) ? plugins : plugins.split(' ');
};
const /** @type {?} */ mergePlugins = (initPlugins, inputPlugins) => normalizePluginArray(initPlugins).concat(normalizePluginArray(inputPlugins));

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
const /** @type {?} */ injectScriptTag = (scriptId, doc, url, callback) => {
    const /** @type {?} */ scriptTag = doc.createElement('script');
    scriptTag.type = 'application/javascript';
    scriptTag.id = scriptId;
    scriptTag.addEventListener('load', callback);
    scriptTag.src = url;
    if (doc.head) {
        doc.head.appendChild(scriptTag);
    }
};
const /** @type {?} */ create = () => {
    return {
        listeners: [],
        scriptId: uuid('tiny-script'),
        scriptLoaded: false
    };
};
const /** @type {?} */ load = (state, doc, url, callback) => {
    if (state.scriptLoaded) {
        callback();
    }
    else {
        state.listeners.push(callback);
        if (!doc.getElementById(state.scriptId)) {
            injectScriptTag(state.scriptId, doc, url, () => {
                state.listeners.forEach((fn) => fn());
                state.scriptLoaded = true;
            });
        }
    }
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * Copyright (c) 2017-present, Ephox, Inc.
 *
 * This source code is licensed under the Apache 2 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */
const /** @type {?} */ getTinymce = () => {
    const /** @type {?} */ w = typeof window !== 'undefined' ? (/** @type {?} */ (window)) : undefined;
    return w && w.tinymce ? w.tinymce : null;
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
const /** @type {?} */ scriptState = create();
const /** @type {?} */ EDITOR_COMPONENT_VALUE_ACCESSOR = {
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => EditorComponent),
    multi: true
};
class EditorComponent extends Events {
    /**
     * @param {?} elementRef
     * @param {?} ngZone
     * @param {?} platformId
     */
    constructor(elementRef, ngZone, platformId) {
        super();
        this.platformId = platformId;
        this.element = undefined;
        this.id = '';
        this.toolbar = null;
        this.onTouchedCallback = () => { };
        this.onChangeCallback = (x) => { };
        this.elementRef = elementRef;
        this.ngZone = ngZone;
        this.initialise = this.initialise.bind(this);
    }
    /**
     * @param {?} val
     * @return {?}
     */
    set disabled(val) {
        this._disabled = val;
        if (this.editor && this.editor.initialized) {
            this.editor.setMode(val ? 'readonly' : 'design');
        }
    }
    /**
     * @return {?}
     */
    get disabled() {
        return this._disabled;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    writeValue(value) {
        this.initialValue = value || this.initialValue;
        if (this.editor && this.editor.initialized && typeof value === 'string') {
            this.editor.setContent(value);
        }
    }
    /**
     * @param {?} fn
     * @return {?}
     */
    registerOnChange(fn) {
        this.onChangeCallback = fn;
    }
    /**
     * @param {?} fn
     * @return {?}
     */
    registerOnTouched(fn) {
        this.onTouchedCallback = fn;
    }
    /**
     * @param {?} isDisabled
     * @return {?}
     */
    setDisabledState(isDisabled) {
        if (this.editor) {
            this.editor.setMode(isDisabled ? 'readonly' : 'design');
        }
        else if (isDisabled) {
            this.init = Object.assign({}, this.init, { readonly: true });
        }
    }
    /**
     * @return {?}
     */
    ngAfterViewInit() {
        if (isPlatformBrowser(this.platformId)) {
            this.id = this.id || uuid('tiny-angular');
            this.inline =
                typeof this.inline !== 'undefined' ? (typeof this.inline === 'boolean' ? this.inline : true) : this.init && this.init["inline"];
            this.createElement();
            if (getTinymce() !== null) {
                this.initialise();
            }
            else if (this.element && this.element.ownerDocument) {
                const /** @type {?} */ doc = this.element.ownerDocument;
                const /** @type {?} */ channel = this.cloudChannel || 'stable';
                const /** @type {?} */ apiKey = this.apiKey || '';
                load(scriptState, doc, `https://cloud.tinymce.com/${channel}/tinymce.min.js?apiKey=${apiKey}`, this.initialise);
            }
        }
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        if (getTinymce() !== null) {
            getTinymce().remove(this.editor);
        }
    }
    /**
     * @return {?}
     */
    createElement() {
        const /** @type {?} */ tagName = typeof this.tagName === 'string' ? this.tagName : 'div';
        this.element = document.createElement(this.inline ? tagName : 'textarea');
        if (this.element) {
            this.element.id = this.id;
            if (isTextarea(this.element)) {
                this.element.style.visibility = 'hidden';
            }
            this.elementRef.nativeElement.appendChild(this.element);
        }
    }
    /**
     * @return {?}
     */
    initialise() {
        const /** @type {?} */ finalInit = Object.assign({}, this.init, { target: this.element, inline: this.inline, readonly: this.disabled, plugins: mergePlugins(this.init && this.init["plugins"], this.plugins), toolbar: this.toolbar || (this.init && this.init["toolbar"]), setup: (editor) => {
                this.editor = editor;
                editor.on('init', (e) => {
                    this.initEditor(e, editor);
                });
                if (this.init && typeof this.init["setup"] === 'function') {
                    this.init["setup"](editor);
                }
            } });
        if (isTextarea(this.element)) {
            this.element.style.visibility = '';
        }
        this.ngZone.runOutsideAngular(() => {
            setTimeout(() => {
                getTinymce().init(finalInit);
            });
        });
    }
    /**
     * @param {?} initEvent
     * @param {?} editor
     * @return {?}
     */
    initEditor(initEvent, editor) {
        if (typeof this.initialValue === 'string') {
            this.ngZone.run(() => editor.setContent(this.initialValue));
        }
        editor.once('blur', () => this.ngZone.run(() => this.onTouchedCallback()));
        editor.on('setcontent', ({ content, format }) => format === 'html' && content && this.ngZone.run(() => this.onChangeCallback(content)));
        editor.on('change keyup undo redo', () => this.ngZone.run(() => this.onChangeCallback(editor.getContent())));
        bindHandlers(this, editor, initEvent);
    }
}
EditorComponent.decorators = [
    { type: Component, args: [{
                selector: 'editor',
                template: '<ng-template></ng-template>',
                providers: [EDITOR_COMPONENT_VALUE_ACCESSOR],
                styles: [':host { display: block; }']
            }] }
];
/** @nocollapse */
EditorComponent.ctorParameters = () => [
    { type: ElementRef, },
    { type: NgZone, },
    { type: Object, decorators: [{ type: Inject, args: [PLATFORM_ID,] },] },
];
EditorComponent.propDecorators = {
    "cloudChannel": [{ type: Input },],
    "apiKey": [{ type: Input },],
    "init": [{ type: Input },],
    "id": [{ type: Input },],
    "initialValue": [{ type: Input },],
    "inline": [{ type: Input },],
    "tagName": [{ type: Input },],
    "plugins": [{ type: Input },],
    "toolbar": [{ type: Input },],
    "disabled": [{ type: Input },],
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
class EditorModule {
}
EditorModule.decorators = [
    { type: NgModule, args: [{
                imports: [CommonModule, FormsModule],
                declarations: [EditorComponent],
                exports: [EditorComponent]
            },] }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */

export { EditorModule, Events as ɵb, EditorComponent as ɵa };

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGlueW1jZS10aW55bWNlLWFuZ3VsYXIuanMubWFwIiwic291cmNlcyI6WyJuZzovL0B0aW55bWNlL3RpbnltY2UtYW5ndWxhci9lZGl0b3IvRXZlbnRzLnRzIiwibmc6Ly9AdGlueW1jZS90aW55bWNlLWFuZ3VsYXIvdXRpbHMvVXRpbHMudHMiLCJuZzovL0B0aW55bWNlL3RpbnltY2UtYW5ndWxhci91dGlscy9TY3JpcHRMb2FkZXIudHMiLCJuZzovL0B0aW55bWNlL3RpbnltY2UtYW5ndWxhci9UaW55TUNFLnRzIiwibmc6Ly9AdGlueW1jZS90aW55bWNlLWFuZ3VsYXIvZWRpdG9yL2VkaXRvci5jb21wb25lbnQudHMiLCJuZzovL0B0aW55bWNlL3RpbnltY2UtYW5ndWxhci9lZGl0b3IvZWRpdG9yLm1vZHVsZS50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBPdXRwdXQsIEV2ZW50RW1pdHRlciB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuZXhwb3J0IGludGVyZmFjZSBFdmVudE9iajxUPiB7XHJcbiAgZXZlbnQ6IFQ7XHJcbiAgZWRpdG9yOiBhbnk7XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBFdmVudHMge1xyXG4gIEBPdXRwdXQoKSBvbkJlZm9yZVBhc3RlOiBFdmVudEVtaXR0ZXI8RXZlbnRPYmo8Q2xpcGJvYXJkRXZlbnQ+PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcclxuICBAT3V0cHV0KCkgb25CbHVyOiBFdmVudEVtaXR0ZXI8RXZlbnRPYmo8Rm9jdXNFdmVudD4+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xyXG4gIEBPdXRwdXQoKSBvbkNsaWNrOiBFdmVudEVtaXR0ZXI8RXZlbnRPYmo8TW91c2VFdmVudD4+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xyXG4gIEBPdXRwdXQoKSBvbkNvbnRleHRNZW51OiBFdmVudEVtaXR0ZXI8RXZlbnRPYmo8TW91c2VFdmVudD4+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xyXG4gIEBPdXRwdXQoKSBvbkNvcHk6IEV2ZW50RW1pdHRlcjxFdmVudE9iajxDbGlwYm9hcmRFdmVudD4+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xyXG4gIEBPdXRwdXQoKSBvbkN1dDogRXZlbnRFbWl0dGVyPEV2ZW50T2JqPENsaXBib2FyZEV2ZW50Pj4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XHJcbiAgQE91dHB1dCgpIG9uRGJsY2xpY2s6IEV2ZW50RW1pdHRlcjxFdmVudE9iajxNb3VzZUV2ZW50Pj4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XHJcbiAgQE91dHB1dCgpIG9uRHJhZzogRXZlbnRFbWl0dGVyPEV2ZW50T2JqPERyYWdFdmVudD4+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xyXG4gIEBPdXRwdXQoKSBvbkRyYWdEcm9wOiBFdmVudEVtaXR0ZXI8RXZlbnRPYmo8RHJhZ0V2ZW50Pj4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XHJcbiAgQE91dHB1dCgpIG9uRHJhZ0VuZDogRXZlbnRFbWl0dGVyPEV2ZW50T2JqPERyYWdFdmVudD4+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xyXG4gIEBPdXRwdXQoKSBvbkRyYWdHZXN0dXJlOiBFdmVudEVtaXR0ZXI8RXZlbnRPYmo8RHJhZ0V2ZW50Pj4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XHJcbiAgQE91dHB1dCgpIG9uRHJhZ092ZXI6IEV2ZW50RW1pdHRlcjxFdmVudE9iajxEcmFnRXZlbnQ+PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcclxuICBAT3V0cHV0KCkgb25Ecm9wOiBFdmVudEVtaXR0ZXI8RXZlbnRPYmo8RHJhZ0V2ZW50Pj4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XHJcbiAgQE91dHB1dCgpIG9uRm9jdXM6IEV2ZW50RW1pdHRlcjxFdmVudE9iajxGb2N1c0V2ZW50Pj4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XHJcbiAgQE91dHB1dCgpIG9uRm9jdXNJbjogRXZlbnRFbWl0dGVyPEV2ZW50T2JqPEZvY3VzRXZlbnQ+PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcclxuICBAT3V0cHV0KCkgb25Gb2N1c091dDogRXZlbnRFbWl0dGVyPEV2ZW50T2JqPEZvY3VzRXZlbnQ+PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcclxuICBAT3V0cHV0KCkgb25LZXlEb3duOiBFdmVudEVtaXR0ZXI8RXZlbnRPYmo8S2V5Ym9hcmRFdmVudD4+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xyXG4gIEBPdXRwdXQoKSBvbktleVByZXNzOiBFdmVudEVtaXR0ZXI8RXZlbnRPYmo8S2V5Ym9hcmRFdmVudD4+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xyXG4gIEBPdXRwdXQoKSBvbktleVVwOiBFdmVudEVtaXR0ZXI8RXZlbnRPYmo8S2V5Ym9hcmRFdmVudD4+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xyXG4gIEBPdXRwdXQoKSBvbk1vdXNlRG93bjogRXZlbnRFbWl0dGVyPEV2ZW50T2JqPE1vdXNlRXZlbnQ+PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcclxuICBAT3V0cHV0KCkgb25Nb3VzZUVudGVyOiBFdmVudEVtaXR0ZXI8RXZlbnRPYmo8TW91c2VFdmVudD4+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xyXG4gIEBPdXRwdXQoKSBvbk1vdXNlTGVhdmU6IEV2ZW50RW1pdHRlcjxFdmVudE9iajxNb3VzZUV2ZW50Pj4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XHJcbiAgQE91dHB1dCgpIG9uTW91c2VNb3ZlOiBFdmVudEVtaXR0ZXI8RXZlbnRPYmo8TW91c2VFdmVudD4+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xyXG4gIEBPdXRwdXQoKSBvbk1vdXNlT3V0OiBFdmVudEVtaXR0ZXI8RXZlbnRPYmo8TW91c2VFdmVudD4+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xyXG4gIEBPdXRwdXQoKSBvbk1vdXNlT3ZlcjogRXZlbnRFbWl0dGVyPEV2ZW50T2JqPE1vdXNlRXZlbnQ+PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcclxuICBAT3V0cHV0KCkgb25Nb3VzZVVwOiBFdmVudEVtaXR0ZXI8RXZlbnRPYmo8TW91c2VFdmVudD4+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xyXG4gIEBPdXRwdXQoKSBvblBhc3RlOiBFdmVudEVtaXR0ZXI8RXZlbnRPYmo8Q2xpcGJvYXJkRXZlbnQ+PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcclxuICBAT3V0cHV0KCkgb25TZWxlY3Rpb25DaGFuZ2U6IEV2ZW50RW1pdHRlcjxFdmVudE9iajxFdmVudD4+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xyXG4gIEBPdXRwdXQoKSBvbkFjdGl2YXRlOiBFdmVudEVtaXR0ZXI8RXZlbnRPYmo8YW55Pj4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XHJcbiAgQE91dHB1dCgpIG9uQWRkVW5kbzogRXZlbnRFbWl0dGVyPEV2ZW50T2JqPGFueT4+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xyXG4gIEBPdXRwdXQoKSBvbkJlZm9yZUFkZFVuZG86IEV2ZW50RW1pdHRlcjxFdmVudE9iajxhbnk+PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcclxuICBAT3V0cHV0KCkgb25CZWZvcmVFeGVjQ29tbWFuZDogRXZlbnRFbWl0dGVyPEV2ZW50T2JqPGFueT4+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xyXG4gIEBPdXRwdXQoKSBvbkJlZm9yZUdldENvbnRlbnQ6IEV2ZW50RW1pdHRlcjxFdmVudE9iajxhbnk+PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcclxuICBAT3V0cHV0KCkgb25CZWZvcmVSZW5kZXJVSTogRXZlbnRFbWl0dGVyPEV2ZW50T2JqPGFueT4+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xyXG4gIEBPdXRwdXQoKSBvbkJlZm9yZVNldENvbnRlbnQ6IEV2ZW50RW1pdHRlcjxFdmVudE9iajxhbnk+PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcclxuICBAT3V0cHV0KCkgb25DaGFuZ2U6IEV2ZW50RW1pdHRlcjxFdmVudE9iajxhbnk+PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcclxuICBAT3V0cHV0KCkgb25DbGVhclVuZG9zOiBFdmVudEVtaXR0ZXI8RXZlbnRPYmo8YW55Pj4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XHJcbiAgQE91dHB1dCgpIG9uRGVhY3RpdmF0ZTogRXZlbnRFbWl0dGVyPEV2ZW50T2JqPGFueT4+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xyXG4gIEBPdXRwdXQoKSBvbkRpcnR5OiBFdmVudEVtaXR0ZXI8RXZlbnRPYmo8YW55Pj4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XHJcbiAgQE91dHB1dCgpIG9uRXhlY0NvbW1hbmQ6IEV2ZW50RW1pdHRlcjxFdmVudE9iajxhbnk+PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcclxuICBAT3V0cHV0KCkgb25HZXRDb250ZW50OiBFdmVudEVtaXR0ZXI8RXZlbnRPYmo8YW55Pj4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XHJcbiAgQE91dHB1dCgpIG9uSGlkZTogRXZlbnRFbWl0dGVyPEV2ZW50T2JqPGFueT4+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xyXG4gIEBPdXRwdXQoKSBvbkluaXQ6IEV2ZW50RW1pdHRlcjxFdmVudE9iajxhbnk+PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcclxuICBAT3V0cHV0KCkgb25Mb2FkQ29udGVudDogRXZlbnRFbWl0dGVyPEV2ZW50T2JqPGFueT4+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xyXG4gIEBPdXRwdXQoKSBvbk5vZGVDaGFuZ2U6IEV2ZW50RW1pdHRlcjxFdmVudE9iajxhbnk+PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcclxuICBAT3V0cHV0KCkgb25Qb3N0UHJvY2VzczogRXZlbnRFbWl0dGVyPEV2ZW50T2JqPGFueT4+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xyXG4gIEBPdXRwdXQoKSBvblBvc3RSZW5kZXI6IEV2ZW50RW1pdHRlcjxFdmVudE9iajxhbnk+PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcclxuICBAT3V0cHV0KCkgb25QcmVJbml0OiBFdmVudEVtaXR0ZXI8RXZlbnRPYmo8YW55Pj4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XHJcbiAgQE91dHB1dCgpIG9uUHJlUHJvY2VzczogRXZlbnRFbWl0dGVyPEV2ZW50T2JqPGFueT4+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xyXG4gIEBPdXRwdXQoKSBvblByb2dyZXNzU3RhdGU6IEV2ZW50RW1pdHRlcjxFdmVudE9iajxhbnk+PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcclxuICBAT3V0cHV0KCkgb25SZWRvOiBFdmVudEVtaXR0ZXI8RXZlbnRPYmo8YW55Pj4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XHJcbiAgQE91dHB1dCgpIG9uUmVtb3ZlOiBFdmVudEVtaXR0ZXI8RXZlbnRPYmo8YW55Pj4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XHJcbiAgQE91dHB1dCgpIG9uUmVzZXQ6IEV2ZW50RW1pdHRlcjxFdmVudE9iajxhbnk+PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcclxuICBAT3V0cHV0KCkgb25TYXZlQ29udGVudDogRXZlbnRFbWl0dGVyPEV2ZW50T2JqPGFueT4+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xyXG4gIEBPdXRwdXQoKSBvblNldEF0dHJpYjogRXZlbnRFbWl0dGVyPEV2ZW50T2JqPGFueT4+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xyXG4gIEBPdXRwdXQoKSBvbk9iamVjdFJlc2l6ZVN0YXJ0OiBFdmVudEVtaXR0ZXI8RXZlbnRPYmo8YW55Pj4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XHJcbiAgQE91dHB1dCgpIG9uT2JqZWN0UmVzaXplZDogRXZlbnRFbWl0dGVyPEV2ZW50T2JqPGFueT4+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xyXG4gIEBPdXRwdXQoKSBvbk9iamVjdFNlbGVjdGVkOiBFdmVudEVtaXR0ZXI8RXZlbnRPYmo8YW55Pj4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XHJcbiAgQE91dHB1dCgpIG9uU2V0Q29udGVudDogRXZlbnRFbWl0dGVyPEV2ZW50T2JqPGFueT4+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xyXG4gIEBPdXRwdXQoKSBvblNob3c6IEV2ZW50RW1pdHRlcjxFdmVudE9iajxhbnk+PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcclxuICBAT3V0cHV0KCkgb25TdWJtaXQ6IEV2ZW50RW1pdHRlcjxFdmVudE9iajxhbnk+PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcclxuICBAT3V0cHV0KCkgb25VbmRvOiBFdmVudEVtaXR0ZXI8RXZlbnRPYmo8YW55Pj4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XHJcbiAgQE91dHB1dCgpIG9uVmlzdWFsQWlkOiBFdmVudEVtaXR0ZXI8RXZlbnRPYmo8YW55Pj4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCB2YWxpZEV2ZW50czogKGtleW9mIEV2ZW50cylbXSA9IFtcclxuICAnb25BY3RpdmF0ZScsXHJcbiAgJ29uQWRkVW5kbycsXHJcbiAgJ29uQmVmb3JlQWRkVW5kbycsXHJcbiAgJ29uQmVmb3JlRXhlY0NvbW1hbmQnLFxyXG4gICdvbkJlZm9yZUdldENvbnRlbnQnLFxyXG4gICdvbkJlZm9yZVJlbmRlclVJJyxcclxuICAnb25CZWZvcmVTZXRDb250ZW50JyxcclxuICAnb25CZWZvcmVQYXN0ZScsXHJcbiAgJ29uQmx1cicsXHJcbiAgJ29uQ2hhbmdlJyxcclxuICAnb25DbGVhclVuZG9zJyxcclxuICAnb25DbGljaycsXHJcbiAgJ29uQ29udGV4dE1lbnUnLFxyXG4gICdvbkNvcHknLFxyXG4gICdvbkN1dCcsXHJcbiAgJ29uRGJsY2xpY2snLFxyXG4gICdvbkRlYWN0aXZhdGUnLFxyXG4gICdvbkRpcnR5JyxcclxuICAnb25EcmFnJyxcclxuICAnb25EcmFnRHJvcCcsXHJcbiAgJ29uRHJhZ0VuZCcsXHJcbiAgJ29uRHJhZ0dlc3R1cmUnLFxyXG4gICdvbkRyYWdPdmVyJyxcclxuICAnb25Ecm9wJyxcclxuICAnb25FeGVjQ29tbWFuZCcsXHJcbiAgJ29uRm9jdXMnLFxyXG4gICdvbkZvY3VzSW4nLFxyXG4gICdvbkZvY3VzT3V0JyxcclxuICAnb25HZXRDb250ZW50JyxcclxuICAnb25IaWRlJyxcclxuICAnb25Jbml0JyxcclxuICAnb25LZXlEb3duJyxcclxuICAnb25LZXlQcmVzcycsXHJcbiAgJ29uS2V5VXAnLFxyXG4gICdvbkxvYWRDb250ZW50JyxcclxuICAnb25Nb3VzZURvd24nLFxyXG4gICdvbk1vdXNlRW50ZXInLFxyXG4gICdvbk1vdXNlTGVhdmUnLFxyXG4gICdvbk1vdXNlTW92ZScsXHJcbiAgJ29uTW91c2VPdXQnLFxyXG4gICdvbk1vdXNlT3ZlcicsXHJcbiAgJ29uTW91c2VVcCcsXHJcbiAgJ29uTm9kZUNoYW5nZScsXHJcbiAgJ29uT2JqZWN0UmVzaXplU3RhcnQnLFxyXG4gICdvbk9iamVjdFJlc2l6ZWQnLFxyXG4gICdvbk9iamVjdFNlbGVjdGVkJyxcclxuICAnb25QYXN0ZScsXHJcbiAgJ29uUG9zdFByb2Nlc3MnLFxyXG4gICdvblBvc3RSZW5kZXInLFxyXG4gICdvblByZVByb2Nlc3MnLFxyXG4gICdvblByb2dyZXNzU3RhdGUnLFxyXG4gICdvblJlZG8nLFxyXG4gICdvblJlbW92ZScsXHJcbiAgJ29uUmVzZXQnLFxyXG4gICdvblNhdmVDb250ZW50JyxcclxuICAnb25TZWxlY3Rpb25DaGFuZ2UnLFxyXG4gICdvblNldEF0dHJpYicsXHJcbiAgJ29uU2V0Q29udGVudCcsXHJcbiAgJ29uU2hvdycsXHJcbiAgJ29uU3VibWl0JyxcclxuICAnb25VbmRvJyxcclxuICAnb25WaXN1YWxBaWQnXHJcbl07XHJcbiIsIi8qKlxyXG4gKiBDb3B5cmlnaHQgKGMpIDIwMTctcHJlc2VudCwgRXBob3gsIEluYy5cclxuICpcclxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIDIgbGljZW5zZSBmb3VuZCBpbiB0aGVcclxuICogTElDRU5TRSBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLlxyXG4gKlxyXG4gKi9cclxuXHJcbmltcG9ydCB7IEV2ZW50RW1pdHRlciB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBFZGl0b3JDb21wb25lbnQgfSBmcm9tICcuLi9lZGl0b3IvZWRpdG9yLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IHZhbGlkRXZlbnRzIH0gZnJvbSAnLi4vZWRpdG9yL0V2ZW50cyc7XHJcblxyXG5leHBvcnQgY29uc3QgYmluZEhhbmRsZXJzID0gKGN0eDogRWRpdG9yQ29tcG9uZW50LCBlZGl0b3I6IGFueSwgaW5pdEV2ZW50OiBFdmVudCk6IHZvaWQgPT4ge1xyXG4gIHZhbGlkRXZlbnRzLmZvckVhY2goKGV2ZW50TmFtZSkgPT4ge1xyXG4gICAgY29uc3QgZXZlbnRFbWl0dGVyOiBFdmVudEVtaXR0ZXI8YW55PiA9IGN0eFtldmVudE5hbWVdO1xyXG4gICAgaWYgKGV2ZW50RW1pdHRlci5vYnNlcnZlcnMubGVuZ3RoID4gMCkge1xyXG4gICAgICBpZiAoZXZlbnROYW1lID09PSAnb25Jbml0Jykge1xyXG4gICAgICAgIGN0eC5uZ1pvbmUucnVuKCgpID0+IGV2ZW50RW1pdHRlci5lbWl0KHsgZXZlbnQ6IGluaXRFdmVudCwgZWRpdG9yIH0pKTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBlZGl0b3Iub24oZXZlbnROYW1lLnN1YnN0cmluZygyKSwgY3R4Lm5nWm9uZS5ydW4oKCkgPT4gKGV2ZW50OiBhbnkpID0+IGV2ZW50RW1pdHRlci5lbWl0KHsgZXZlbnQsIGVkaXRvciB9KSkpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfSk7XHJcbn07XHJcblxyXG5sZXQgdW5pcXVlID0gMDtcclxuXHJcbmV4cG9ydCBjb25zdCB1dWlkID0gKHByZWZpeDogc3RyaW5nKTogc3RyaW5nID0+IHtcclxuICBjb25zdCBkYXRlID0gbmV3IERhdGUoKTtcclxuICBjb25zdCB0aW1lID0gZGF0ZS5nZXRUaW1lKCk7XHJcbiAgY29uc3QgcmFuZG9tID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMTAwMDAwMDAwMCk7XHJcblxyXG4gIHVuaXF1ZSsrO1xyXG5cclxuICByZXR1cm4gcHJlZml4ICsgJ18nICsgcmFuZG9tICsgdW5pcXVlICsgU3RyaW5nKHRpbWUpO1xyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IGlzVGV4dGFyZWEgPSAoZWxlbWVudD86IEVsZW1lbnQpOiBlbGVtZW50IGlzIEhUTUxUZXh0QXJlYUVsZW1lbnQgPT4ge1xyXG4gIHJldHVybiB0eXBlb2YgZWxlbWVudCAhPT0gJ3VuZGVmaW5lZCcgJiYgZWxlbWVudC50YWdOYW1lLnRvTG93ZXJDYXNlKCkgPT09ICd0ZXh0YXJlYSc7XHJcbn07XHJcblxyXG5jb25zdCBub3JtYWxpemVQbHVnaW5BcnJheSA9IChwbHVnaW5zPzogc3RyaW5nIHwgc3RyaW5nW10pOiBzdHJpbmdbXSA9PiB7XHJcbiAgaWYgKHR5cGVvZiBwbHVnaW5zID09PSAndW5kZWZpbmVkJyB8fCBwbHVnaW5zID09PSAnJykge1xyXG4gICAgcmV0dXJuIFtdO1xyXG4gIH1cclxuXHJcbiAgcmV0dXJuIEFycmF5LmlzQXJyYXkocGx1Z2lucykgPyBwbHVnaW5zIDogcGx1Z2lucy5zcGxpdCgnICcpO1xyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IG1lcmdlUGx1Z2lucyA9IChpbml0UGx1Z2luczogc3RyaW5nIHwgc3RyaW5nW10sIGlucHV0UGx1Z2lucz86IHN0cmluZyB8IHN0cmluZ1tdKSA9PlxyXG4gIG5vcm1hbGl6ZVBsdWdpbkFycmF5KGluaXRQbHVnaW5zKS5jb25jYXQobm9ybWFsaXplUGx1Z2luQXJyYXkoaW5wdXRQbHVnaW5zKSk7XHJcbiIsIi8qKlxyXG4gKiBDb3B5cmlnaHQgKGMpIDIwMTctcHJlc2VudCwgRXBob3gsIEluYy5cclxuICpcclxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIDIgbGljZW5zZSBmb3VuZCBpbiB0aGVcclxuICogTElDRU5TRSBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLlxyXG4gKlxyXG4gKi9cclxuXHJcbmltcG9ydCB7IHV1aWQgfSBmcm9tICcuL1V0aWxzJztcclxuXHJcbmV4cG9ydCB0eXBlIGNhbGxiYWNrRm4gPSAoKSA9PiB2b2lkO1xyXG5leHBvcnQgaW50ZXJmYWNlIElTdGF0ZU9iaiB7XHJcbiAgbGlzdGVuZXJzOiBjYWxsYmFja0ZuW107XHJcbiAgc2NyaXB0SWQ6IHN0cmluZztcclxuICBzY3JpcHRMb2FkZWQ6IGJvb2xlYW47XHJcbn1cclxuXHJcbmNvbnN0IGluamVjdFNjcmlwdFRhZyA9IChzY3JpcHRJZDogc3RyaW5nLCBkb2M6IERvY3VtZW50LCB1cmw6IHN0cmluZywgY2FsbGJhY2s6IGNhbGxiYWNrRm4pID0+IHtcclxuICBjb25zdCBzY3JpcHRUYWcgPSBkb2MuY3JlYXRlRWxlbWVudCgnc2NyaXB0Jyk7XHJcbiAgc2NyaXB0VGFnLnR5cGUgPSAnYXBwbGljYXRpb24vamF2YXNjcmlwdCc7XHJcbiAgc2NyaXB0VGFnLmlkID0gc2NyaXB0SWQ7XHJcbiAgc2NyaXB0VGFnLmFkZEV2ZW50TGlzdGVuZXIoJ2xvYWQnLCBjYWxsYmFjayk7XHJcbiAgc2NyaXB0VGFnLnNyYyA9IHVybDtcclxuICBpZiAoZG9jLmhlYWQpIHtcclxuICAgIGRvYy5oZWFkLmFwcGVuZENoaWxkKHNjcmlwdFRhZyk7XHJcbiAgfVxyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IGNyZWF0ZSA9ICgpOiBJU3RhdGVPYmogPT4ge1xyXG4gIHJldHVybiB7XHJcbiAgICBsaXN0ZW5lcnM6IFtdLFxyXG4gICAgc2NyaXB0SWQ6IHV1aWQoJ3Rpbnktc2NyaXB0JyksXHJcbiAgICBzY3JpcHRMb2FkZWQ6IGZhbHNlXHJcbiAgfTtcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBsb2FkID0gKHN0YXRlOiBJU3RhdGVPYmosIGRvYzogRG9jdW1lbnQsIHVybDogc3RyaW5nLCBjYWxsYmFjazogY2FsbGJhY2tGbikgPT4ge1xyXG4gIGlmIChzdGF0ZS5zY3JpcHRMb2FkZWQpIHtcclxuICAgIGNhbGxiYWNrKCk7XHJcbiAgfSBlbHNlIHtcclxuICAgIHN0YXRlLmxpc3RlbmVycy5wdXNoKGNhbGxiYWNrKTtcclxuICAgIGlmICghZG9jLmdldEVsZW1lbnRCeUlkKHN0YXRlLnNjcmlwdElkKSkge1xyXG4gICAgICBpbmplY3RTY3JpcHRUYWcoc3RhdGUuc2NyaXB0SWQsIGRvYywgdXJsLCAoKSA9PiB7XHJcbiAgICAgICAgc3RhdGUubGlzdGVuZXJzLmZvckVhY2goKGZuKSA9PiBmbigpKTtcclxuICAgICAgICBzdGF0ZS5zY3JpcHRMb2FkZWQgPSB0cnVlO1xyXG4gICAgICB9KTtcclxuICAgIH1cclxuICB9XHJcbn07XHJcbiIsIi8qKlxyXG4gKiBDb3B5cmlnaHQgKGMpIDIwMTctcHJlc2VudCwgRXBob3gsIEluYy5cclxuICpcclxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIDIgbGljZW5zZSBmb3VuZCBpbiB0aGVcclxuICogTElDRU5TRSBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLlxyXG4gKlxyXG4gKi9cclxuXHJcbmNvbnN0IGdldFRpbnltY2UgPSAoKSA9PiB7XHJcbiAgY29uc3QgdyA9IHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnID8gKHdpbmRvdyBhcyBhbnkpIDogdW5kZWZpbmVkO1xyXG4gIHJldHVybiB3ICYmIHcudGlueW1jZSA/IHcudGlueW1jZSA6IG51bGw7XHJcbn07XHJcblxyXG5leHBvcnQgeyBnZXRUaW55bWNlIH07XHJcbiIsImltcG9ydCB7IENvbXBvbmVudCwgQWZ0ZXJWaWV3SW5pdCwgSW5wdXQsIEVsZW1lbnRSZWYsIE9uRGVzdHJveSwgZm9yd2FyZFJlZiwgTmdab25lLCBJbmplY3QsIFBMQVRGT1JNX0lEIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IENvbnRyb2xWYWx1ZUFjY2Vzc29yLCBOR19WQUxVRV9BQ0NFU1NPUiB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcclxuXHJcbmltcG9ydCAqIGFzIFNjcmlwdExvYWRlciBmcm9tICcuLi91dGlscy9TY3JpcHRMb2FkZXInO1xyXG5pbXBvcnQgeyB1dWlkLCBpc1RleHRhcmVhLCBiaW5kSGFuZGxlcnMsIG1lcmdlUGx1Z2lucyB9IGZyb20gJy4uL3V0aWxzL1V0aWxzJztcclxuaW1wb3J0IHsgZ2V0VGlueW1jZSB9IGZyb20gJy4uL1RpbnlNQ0UnO1xyXG5pbXBvcnQgeyBFdmVudHMgfSBmcm9tICcuL0V2ZW50cyc7XHJcbmltcG9ydCB7IGlzUGxhdGZvcm1Ccm93c2VyIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcclxuXHJcbmNvbnN0IHNjcmlwdFN0YXRlID0gU2NyaXB0TG9hZGVyLmNyZWF0ZSgpO1xyXG5cclxuY29uc3QgRURJVE9SX0NPTVBPTkVOVF9WQUxVRV9BQ0NFU1NPUiA9IHtcclxuICBwcm92aWRlOiBOR19WQUxVRV9BQ0NFU1NPUixcclxuICB1c2VFeGlzdGluZzogZm9yd2FyZFJlZigoKSA9PiBFZGl0b3JDb21wb25lbnQpLFxyXG4gIG11bHRpOiB0cnVlXHJcbn07XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ2VkaXRvcicsXHJcbiAgdGVtcGxhdGU6ICc8bmctdGVtcGxhdGU+PC9uZy10ZW1wbGF0ZT4nLFxyXG4gIHN0eWxlczogWyc6aG9zdCB7IGRpc3BsYXk6IGJsb2NrOyB9J10sXHJcbiAgcHJvdmlkZXJzOiBbRURJVE9SX0NPTVBPTkVOVF9WQUxVRV9BQ0NFU1NPUl1cclxufSlcclxuZXhwb3J0IGNsYXNzIEVkaXRvckNvbXBvbmVudCBleHRlbmRzIEV2ZW50cyBpbXBsZW1lbnRzIEFmdGVyVmlld0luaXQsIENvbnRyb2xWYWx1ZUFjY2Vzc29yLCBPbkRlc3Ryb3kge1xyXG4gIHByaXZhdGUgZWxlbWVudFJlZjogRWxlbWVudFJlZjtcclxuICBwcml2YXRlIGVsZW1lbnQ6IEVsZW1lbnQgfCB1bmRlZmluZWQgPSB1bmRlZmluZWQ7XHJcbiAgcHJpdmF0ZSBlZGl0b3I6IGFueTtcclxuXHJcbiAgbmdab25lOiBOZ1pvbmU7XHJcblxyXG4gIEBJbnB1dCgpIGNsb3VkQ2hhbm5lbDogc3RyaW5nIHwgdW5kZWZpbmVkO1xyXG4gIEBJbnB1dCgpIGFwaUtleTogc3RyaW5nIHwgdW5kZWZpbmVkO1xyXG4gIEBJbnB1dCgpIGluaXQ6IHsgW2tleTogc3RyaW5nXTogYW55IH0gfCB1bmRlZmluZWQ7XHJcbiAgQElucHV0KCkgaWQgPSAnJztcclxuICBASW5wdXQoKSBpbml0aWFsVmFsdWU6IHN0cmluZyB8IHVuZGVmaW5lZDtcclxuICBASW5wdXQoKSBpbmxpbmU6IGJvb2xlYW4gfCB1bmRlZmluZWQ7XHJcbiAgQElucHV0KCkgdGFnTmFtZTogc3RyaW5nIHwgdW5kZWZpbmVkO1xyXG4gIEBJbnB1dCgpIHBsdWdpbnM6IHN0cmluZyB8IHVuZGVmaW5lZDtcclxuICBASW5wdXQoKSB0b29sYmFyOiBzdHJpbmcgfCBzdHJpbmdbXSB8IG51bGwgPSBudWxsO1xyXG5cclxuICBwcml2YXRlIF9kaXNhYmxlZDogYm9vbGVhbiB8IHVuZGVmaW5lZDtcclxuICBASW5wdXQoKVxyXG4gIHNldCBkaXNhYmxlZCh2YWwpIHtcclxuICAgIHRoaXMuX2Rpc2FibGVkID0gdmFsO1xyXG4gICAgaWYgKHRoaXMuZWRpdG9yICYmIHRoaXMuZWRpdG9yLmluaXRpYWxpemVkKSB7XHJcbiAgICAgIHRoaXMuZWRpdG9yLnNldE1vZGUodmFsID8gJ3JlYWRvbmx5JyA6ICdkZXNpZ24nKTtcclxuICAgIH1cclxuICB9XHJcbiAgZ2V0IGRpc2FibGVkKCkge1xyXG4gICAgcmV0dXJuIHRoaXMuX2Rpc2FibGVkO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBvblRvdWNoZWRDYWxsYmFjayA9ICgpID0+IHt9O1xyXG4gIHByaXZhdGUgb25DaGFuZ2VDYWxsYmFjayA9ICh4OiBhbnkpID0+IHt9O1xyXG5cclxuICBjb25zdHJ1Y3RvcihlbGVtZW50UmVmOiBFbGVtZW50UmVmLCBuZ1pvbmU6IE5nWm9uZSwgQEluamVjdChQTEFURk9STV9JRCkgcHJpdmF0ZSBwbGF0Zm9ybUlkOiBPYmplY3QpIHtcclxuICAgIHN1cGVyKCk7XHJcbiAgICB0aGlzLmVsZW1lbnRSZWYgPSBlbGVtZW50UmVmO1xyXG4gICAgdGhpcy5uZ1pvbmUgPSBuZ1pvbmU7XHJcbiAgICB0aGlzLmluaXRpYWxpc2UgPSB0aGlzLmluaXRpYWxpc2UuYmluZCh0aGlzKTtcclxuICB9XHJcblxyXG4gIHdyaXRlVmFsdWUodmFsdWU6IHN0cmluZyB8IG51bGwpOiB2b2lkIHtcclxuICAgIHRoaXMuaW5pdGlhbFZhbHVlID0gdmFsdWUgfHwgdGhpcy5pbml0aWFsVmFsdWU7XHJcblxyXG4gICAgaWYgKHRoaXMuZWRpdG9yICYmIHRoaXMuZWRpdG9yLmluaXRpYWxpemVkICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ3N0cmluZycpIHtcclxuICAgICAgdGhpcy5lZGl0b3Iuc2V0Q29udGVudCh2YWx1ZSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICByZWdpc3Rlck9uQ2hhbmdlKGZuOiAoXzogYW55KSA9PiB2b2lkKTogdm9pZCB7XHJcbiAgICB0aGlzLm9uQ2hhbmdlQ2FsbGJhY2sgPSBmbjtcclxuICB9XHJcblxyXG4gIHJlZ2lzdGVyT25Ub3VjaGVkKGZuOiBhbnkpOiB2b2lkIHtcclxuICAgIHRoaXMub25Ub3VjaGVkQ2FsbGJhY2sgPSBmbjtcclxuICB9XHJcblxyXG4gIHNldERpc2FibGVkU3RhdGUoaXNEaXNhYmxlZDogYm9vbGVhbikge1xyXG4gICAgaWYgKHRoaXMuZWRpdG9yKSB7XHJcbiAgICAgIHRoaXMuZWRpdG9yLnNldE1vZGUoaXNEaXNhYmxlZCA/ICdyZWFkb25seScgOiAnZGVzaWduJyk7XHJcbiAgICB9IGVsc2UgaWYgKGlzRGlzYWJsZWQpIHtcclxuICAgICAgdGhpcy5pbml0ID0geyAuLi50aGlzLmluaXQsIHJlYWRvbmx5OiB0cnVlIH07XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBuZ0FmdGVyVmlld0luaXQoKSB7XHJcbiAgICBpZiAoaXNQbGF0Zm9ybUJyb3dzZXIodGhpcy5wbGF0Zm9ybUlkKSkge1xyXG4gICAgICB0aGlzLmlkID0gdGhpcy5pZCB8fCB1dWlkKCd0aW55LWFuZ3VsYXInKTtcclxuICAgICAgdGhpcy5pbmxpbmUgPVxyXG4gICAgICAgIHR5cGVvZiB0aGlzLmlubGluZSAhPT0gJ3VuZGVmaW5lZCcgPyAodHlwZW9mIHRoaXMuaW5saW5lID09PSAnYm9vbGVhbicgPyB0aGlzLmlubGluZSA6IHRydWUpIDogdGhpcy5pbml0ICYmIHRoaXMuaW5pdC5pbmxpbmU7XHJcbiAgICAgIHRoaXMuY3JlYXRlRWxlbWVudCgpO1xyXG4gICAgICBpZiAoZ2V0VGlueW1jZSgpICE9PSBudWxsKSB7XHJcbiAgICAgICAgdGhpcy5pbml0aWFsaXNlKCk7XHJcbiAgICAgIH0gZWxzZSBpZiAodGhpcy5lbGVtZW50ICYmIHRoaXMuZWxlbWVudC5vd25lckRvY3VtZW50KSB7XHJcbiAgICAgICAgY29uc3QgZG9jID0gdGhpcy5lbGVtZW50Lm93bmVyRG9jdW1lbnQ7XHJcbiAgICAgICAgY29uc3QgY2hhbm5lbCA9IHRoaXMuY2xvdWRDaGFubmVsIHx8ICdzdGFibGUnO1xyXG4gICAgICAgIGNvbnN0IGFwaUtleSA9IHRoaXMuYXBpS2V5IHx8ICcnO1xyXG5cclxuICAgICAgICBTY3JpcHRMb2FkZXIubG9hZChzY3JpcHRTdGF0ZSwgZG9jLCBgaHR0cHM6Ly9jbG91ZC50aW55bWNlLmNvbS8ke2NoYW5uZWx9L3RpbnltY2UubWluLmpzP2FwaUtleT0ke2FwaUtleX1gLCB0aGlzLmluaXRpYWxpc2UpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBuZ09uRGVzdHJveSgpIHtcclxuICAgIGlmIChnZXRUaW55bWNlKCkgIT09IG51bGwpIHtcclxuICAgICAgZ2V0VGlueW1jZSgpLnJlbW92ZSh0aGlzLmVkaXRvcik7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBjcmVhdGVFbGVtZW50KCkge1xyXG4gICAgY29uc3QgdGFnTmFtZSA9IHR5cGVvZiB0aGlzLnRhZ05hbWUgPT09ICdzdHJpbmcnID8gdGhpcy50YWdOYW1lIDogJ2Rpdic7XHJcbiAgICB0aGlzLmVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KHRoaXMuaW5saW5lID8gdGFnTmFtZSA6ICd0ZXh0YXJlYScpO1xyXG4gICAgaWYgKHRoaXMuZWxlbWVudCkge1xyXG4gICAgICB0aGlzLmVsZW1lbnQuaWQgPSB0aGlzLmlkO1xyXG4gICAgICBpZiAoaXNUZXh0YXJlYSh0aGlzLmVsZW1lbnQpKSB7XHJcbiAgICAgICAgdGhpcy5lbGVtZW50LnN0eWxlLnZpc2liaWxpdHkgPSAnaGlkZGVuJztcclxuICAgICAgfVxyXG4gICAgICB0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudC5hcHBlbmRDaGlsZCh0aGlzLmVsZW1lbnQpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgaW5pdGlhbGlzZSgpIHtcclxuICAgIGNvbnN0IGZpbmFsSW5pdCA9IHtcclxuICAgICAgLi4udGhpcy5pbml0LFxyXG4gICAgICB0YXJnZXQ6IHRoaXMuZWxlbWVudCxcclxuICAgICAgaW5saW5lOiB0aGlzLmlubGluZSxcclxuICAgICAgcmVhZG9ubHk6IHRoaXMuZGlzYWJsZWQsXHJcbiAgICAgIHBsdWdpbnM6IG1lcmdlUGx1Z2lucyh0aGlzLmluaXQgJiYgdGhpcy5pbml0LnBsdWdpbnMsIHRoaXMucGx1Z2lucyksXHJcbiAgICAgIHRvb2xiYXI6IHRoaXMudG9vbGJhciB8fCAodGhpcy5pbml0ICYmIHRoaXMuaW5pdC50b29sYmFyKSxcclxuICAgICAgc2V0dXA6IChlZGl0b3I6IGFueSkgPT4ge1xyXG4gICAgICAgIHRoaXMuZWRpdG9yID0gZWRpdG9yO1xyXG4gICAgICAgIGVkaXRvci5vbignaW5pdCcsIChlOiBFdmVudCkgPT4ge1xyXG4gICAgICAgICAgdGhpcy5pbml0RWRpdG9yKGUsIGVkaXRvcik7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIGlmICh0aGlzLmluaXQgJiYgdHlwZW9mIHRoaXMuaW5pdC5zZXR1cCA9PT0gJ2Z1bmN0aW9uJykge1xyXG4gICAgICAgICAgdGhpcy5pbml0LnNldHVwKGVkaXRvcik7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9O1xyXG5cclxuICAgIGlmIChpc1RleHRhcmVhKHRoaXMuZWxlbWVudCkpIHtcclxuICAgICAgdGhpcy5lbGVtZW50LnN0eWxlLnZpc2liaWxpdHkgPSAnJztcclxuICAgIH1cclxuXHJcbiAgICB0aGlzLm5nWm9uZS5ydW5PdXRzaWRlQW5ndWxhcigoKSA9PiB7XHJcbiAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgIGdldFRpbnltY2UoKS5pbml0KGZpbmFsSW5pdCk7XHJcbiAgICAgIH0pO1xyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGluaXRFZGl0b3IoaW5pdEV2ZW50OiBFdmVudCwgZWRpdG9yOiBhbnkpIHtcclxuICAgIGlmICh0eXBlb2YgdGhpcy5pbml0aWFsVmFsdWUgPT09ICdzdHJpbmcnKSB7XHJcbiAgICAgIHRoaXMubmdab25lLnJ1bigoKSA9PiBlZGl0b3Iuc2V0Q29udGVudCh0aGlzLmluaXRpYWxWYWx1ZSkpO1xyXG4gICAgfVxyXG4gICAgZWRpdG9yLm9uY2UoJ2JsdXInLCAoKSA9PiB0aGlzLm5nWm9uZS5ydW4oKCkgPT4gdGhpcy5vblRvdWNoZWRDYWxsYmFjaygpKSk7XHJcbiAgICBlZGl0b3Iub24oXHJcbiAgICAgICdzZXRjb250ZW50JyxcclxuICAgICAgKHsgY29udGVudCwgZm9ybWF0IH06IGFueSkgPT4gZm9ybWF0ID09PSAnaHRtbCcgJiYgY29udGVudCAmJiB0aGlzLm5nWm9uZS5ydW4oKCkgPT4gdGhpcy5vbkNoYW5nZUNhbGxiYWNrKGNvbnRlbnQpKVxyXG4gICAgKTtcclxuICAgIGVkaXRvci5vbignY2hhbmdlIGtleXVwIHVuZG8gcmVkbycsICgpID0+IHRoaXMubmdab25lLnJ1bigoKSA9PiB0aGlzLm9uQ2hhbmdlQ2FsbGJhY2soZWRpdG9yLmdldENvbnRlbnQoKSkpKTtcclxuICAgIGJpbmRIYW5kbGVycyh0aGlzLCBlZGl0b3IsIGluaXRFdmVudCk7XHJcbiAgfVxyXG59XHJcbiIsImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XHJcbmltcG9ydCB7IEZvcm1zTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xyXG5cclxuaW1wb3J0IHsgRWRpdG9yQ29tcG9uZW50IH0gZnJvbSAnLi9lZGl0b3IuY29tcG9uZW50JztcclxuXHJcbkBOZ01vZHVsZSh7XHJcbiAgaW1wb3J0czogW0NvbW1vbk1vZHVsZSwgRm9ybXNNb2R1bGVdLFxyXG4gIGRlY2xhcmF0aW9uczogW0VkaXRvckNvbXBvbmVudF0sXHJcbiAgZXhwb3J0czogW0VkaXRvckNvbXBvbmVudF1cclxufSlcclxuZXhwb3J0IGNsYXNzIEVkaXRvck1vZHVsZSB7fVxyXG4iXSwibmFtZXMiOlsiU2NyaXB0TG9hZGVyLmNyZWF0ZSIsIlNjcmlwdExvYWRlci5sb2FkIl0sIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBOzs2QkFRb0UsSUFBSSxZQUFZLEVBQUU7c0JBQzdCLElBQUksWUFBWSxFQUFFO3VCQUNqQixJQUFJLFlBQVksRUFBRTs2QkFDWixJQUFJLFlBQVksRUFBRTtzQkFDckIsSUFBSSxZQUFZLEVBQUU7cUJBQ25CLElBQUksWUFBWSxFQUFFOzBCQUNqQixJQUFJLFlBQVksRUFBRTtzQkFDdkIsSUFBSSxZQUFZLEVBQUU7MEJBQ2QsSUFBSSxZQUFZLEVBQUU7eUJBQ25CLElBQUksWUFBWSxFQUFFOzZCQUNkLElBQUksWUFBWSxFQUFFOzBCQUNyQixJQUFJLFlBQVksRUFBRTtzQkFDdEIsSUFBSSxZQUFZLEVBQUU7dUJBQ2hCLElBQUksWUFBWSxFQUFFO3lCQUNoQixJQUFJLFlBQVksRUFBRTswQkFDakIsSUFBSSxZ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