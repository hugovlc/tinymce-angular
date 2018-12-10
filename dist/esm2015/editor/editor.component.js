/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { Component, Input, ElementRef, forwardRef, NgZone, Inject, PLATFORM_ID } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import * as ScriptLoader from '../utils/ScriptLoader';
import { uuid, isTextarea, bindHandlers, mergePlugins } from '../utils/Utils';
import { getTinymce } from '../TinyMCE';
import { Events } from './Events';
import { isPlatformBrowser } from '@angular/common';
const /** @type {?} */ scriptState = ScriptLoader.create();
const /** @type {?} */ EDITOR_COMPONENT_VALUE_ACCESSOR = {
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => EditorComponent),
    multi: true
};
export class EditorComponent extends Events {
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
                ScriptLoader.load(scriptState, doc, `https://cloud.tinymce.com/${channel}/tinymce.min.js?apiKey=${apiKey}`, this.initialise);
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
function EditorComponent_tsickle_Closure_declarations() {
    /** @type {!Array<{type: !Function, args: (undefined|!Array<?>)}>} */
    EditorComponent.decorators;
    /**
     * @nocollapse
     * @type {function(): !Array<(null|{type: ?, decorators: (undefined|!Array<{type: !Function, args: (undefined|!Array<?>)}>)})>}
     */
    EditorComponent.ctorParameters;
    /** @type {!Object<string,!Array<{type: !Function, args: (undefined|!Array<?>)}>>} */
    EditorComponent.propDecorators;
    /** @type {?} */
    EditorComponent.prototype.elementRef;
    /** @type {?} */
    EditorComponent.prototype.element;
    /** @type {?} */
    EditorComponent.prototype.editor;
    /** @type {?} */
    EditorComponent.prototype.ngZone;
    /** @type {?} */
    EditorComponent.prototype.cloudChannel;
    /** @type {?} */
    EditorComponent.prototype.apiKey;
    /** @type {?} */
    EditorComponent.prototype.init;
    /** @type {?} */
    EditorComponent.prototype.id;
    /** @type {?} */
    EditorComponent.prototype.initialValue;
    /** @type {?} */
    EditorComponent.prototype.inline;
    /** @type {?} */
    EditorComponent.prototype.tagName;
    /** @type {?} */
    EditorComponent.prototype.plugins;
    /** @type {?} */
    EditorComponent.prototype.toolbar;
    /** @type {?} */
    EditorComponent.prototype._disabled;
    /** @type {?} */
    EditorComponent.prototype.onTouchedCallback;
    /** @type {?} */
    EditorComponent.prototype.onChangeCallback;
    /** @type {?} */
    EditorComponent.prototype.platformId;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZWRpdG9yLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0B0aW55bWNlL3RpbnltY2UtYW5ndWxhci8iLCJzb3VyY2VzIjpbImVkaXRvci9lZGl0b3IuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFpQixLQUFLLEVBQUUsVUFBVSxFQUFhLFVBQVUsRUFBRSxNQUFNLEVBQUUsTUFBTSxFQUFFLFdBQVcsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUNoSSxPQUFPLEVBQXdCLGlCQUFpQixFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFFekUsT0FBTyxLQUFLLFlBQVksTUFBTSx1QkFBdUIsQ0FBQztBQUN0RCxPQUFPLEVBQUUsSUFBSSxFQUFFLFVBQVUsRUFBRSxZQUFZLEVBQUUsWUFBWSxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDOUUsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLFlBQVksQ0FBQztBQUN4QyxPQUFPLEVBQUUsTUFBTSxFQUFFLE1BQU0sVUFBVSxDQUFDO0FBQ2xDLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBRXBELHVCQUFNLFdBQVcsR0FBRyxZQUFZLENBQUMsTUFBTSxFQUFFLENBQUM7QUFFMUMsdUJBQU0sK0JBQStCLEdBQUc7SUFDdEMsT0FBTyxFQUFFLGlCQUFpQjtJQUMxQixXQUFXLEVBQUUsVUFBVSxDQUFDLEdBQUcsRUFBRSxDQUFDLGVBQWUsQ0FBQztJQUM5QyxLQUFLLEVBQUUsSUFBSTtDQUNaLENBQUM7QUFRRixNQUFNLHNCQUF1QixTQUFRLE1BQU07Ozs7OztJQWdDekMsWUFBWSxVQUFzQixFQUFFLE1BQWMsRUFBK0I7UUFDL0UsS0FBSyxFQUFFLENBQUM7UUFEdUUsZUFBVSxHQUFWLFVBQVU7dUJBOUJwRCxTQUFTO2tCQVFsQyxFQUFFO3VCQUs2QixJQUFJO2lDQWNyQixHQUFHLEVBQUUsSUFBRztnQ0FDVCxDQUFDLENBQU0s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QUUsQ0FBQywrQkFBK0IsQ0FBQzt5QkFEbkMsMkJBQTJCO2FBRXJDOzs7O1lBdEJ5QyxVQUFVO1lBQXlCLE1BQU07eUNBdUQ1QixNQUFNLFNBQUMsV0FBVzs7OzZCQXpCdEUsS0FBSzt1QkFDTCxLQUFLO3FCQUNMLEtBQUs7bUJBQ0wsS0FBSzs2QkFDTCxLQUFLO3VCQUNMLEtBQUs7d0JBQ0wsS0FBSzt3QkFDTCxLQUFLO3dCQUNMLEtBQUs7eUJBR0wsS0FBSyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgQWZ0ZXJWaWV3SW5pdCwgSW5wdXQsIEVsZW1lbnRSZWYsIE9uRGVzdHJveSwgZm9yd2FyZFJlZiwgTmdab25lLCBJbmplY3QsIFBMQVRGT1JNX0lEIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IENvbnRyb2xWYWx1ZUFjY2Vzc29yLCBOR19WQUxVRV9BQ0NFU1NPUiB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcclxuXHJcbmltcG9ydCAqIGFzIFNjcmlwdExvYWRlciBmcm9tICcuLi91dGlscy9TY3JpcHRMb2FkZXInO1xyXG5pbXBvcnQgeyB1dWlkLCBpc1RleHRhcmVhLCBiaW5kSGFuZGxlcnMsIG1lcmdlUGx1Z2lucyB9IGZyb20gJy4uL3V0aWxzL1V0aWxzJztcclxuaW1wb3J0IHsgZ2V0VGlueW1jZSB9IGZyb20gJy4uL1RpbnlNQ0UnO1xyXG5pbXBvcnQgeyBFdmVudHMgfSBmcm9tICcuL0V2ZW50cyc7XHJcbmltcG9ydCB7IGlzUGxhdGZvcm1Ccm93c2VyIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcclxuXHJcbmNvbnN0IHNjcmlwdFN0YXRlID0gU2NyaXB0TG9hZGVyLmNyZWF0ZSgpO1xyXG5cclxuY29uc3QgRURJVE9SX0NPTVBPTkVOVF9WQUxVRV9BQ0NFU1NPUiA9IHtcclxuICBwcm92aWRlOiBOR19WQUxVRV9BQ0NFU1NPUixcclxuICB1c2VFeGlzdGluZzogZm9yd2FyZFJlZigoKSA9PiBFZGl0b3JDb21wb25lbnQpLFxyXG4gIG11bHRpOiB0cnVlXHJcbn07XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ2VkaXRvcicsXHJcbiAgdGVtcGxhdGU6ICc8bmctdGVtcGxhdGU+PC9uZy10ZW1wbGF0ZT4nLFxyXG4gIHN0eWxlczogWyc6aG9zdCB7IGRpc3BsYXk6IGJsb2NrOyB9J10sXHJcbiAgcHJvdmlkZXJzOiBbRURJVE9SX0NPTVBPTkVOVF9WQUxVRV9BQ0NFU1NPUl1cclxufSlcclxuZXhwb3J0IGNsYXNzIEVkaXRvckNvbXBvbmVudCBleHRlbmRzIEV2ZW50cyBpbXBsZW1lbnRzIEFmdGVyVmlld0luaXQsIENvbnRyb2xWYWx1ZUFjY2Vzc29yLCBPbkRlc3Ryb3kge1xyXG4gIHByaXZhdGUgZWxlbWVudFJlZjogRWxlbWVudFJlZjtcclxuICBwcml2YXRlIGVsZW1lbnQ6IEVsZW1lbnQgfCB1bmRlZmluZWQgPSB1bmRlZmluZWQ7XHJcbiAgcHJpdmF0ZSBlZGl0b3I6IGFueTtcclxuXHJcbiAgbmdab25lOiBOZ1pvbmU7XHJcblxyXG4gIEBJbnB1dCgpIGNsb3VkQ2hhbm5lbDogc3RyaW5nIHwgdW5kZWZpbmVkO1xyXG4gIEBJbnB1dCgpIGFwaUtleTogc3RyaW5nIHwgdW5kZWZpbmVkO1xyXG4gIEBJbnB1dCgpIGluaXQ6IHsgW2tleTogc3RyaW5nXTogYW55IH0gfCB1bmRlZmluZWQ7XHJcbiAgQElucHV0KCkgaWQgPSAnJztcclxuICBASW5wdXQoKSBpbml0aWFsVmFsdWU6IHN0cmluZyB8IHVuZGVmaW5lZDtcclxuICBASW5wdXQoKSBpbmxpbmU6IGJvb2xlYW4gfCB1bmRlZmluZWQ7XHJcbiAgQElucHV0KCkgdGFnTmFtZTogc3RyaW5nIHwgdW5kZWZpbmVkO1xyXG4gIEBJbnB1dCgpIHBsdWdpbnM6IHN0cmluZyB8IHVuZGVmaW5lZDtcclxuICBASW5wdXQoKSB0b29sYmFyOiBzdHJpbmcgfCBzdHJpbmdbXSB8IG51bGwgPSBudWxsO1xyXG5cclxuICBwcml2YXRlIF9kaXNhYmxlZDogYm9vbGVhbiB8IHVuZGVmaW5lZDtcclxuICBASW5wdXQoKVxyXG4gIHNldCBkaXNhYmxlZCh2YWwpIHtcclxuICAgIHRoaXMuX2Rpc2FibGVkID0gdmFsO1xyXG4gICAgaWYgKHRoaXMuZWRpdG9yICYmIHRoaXMuZWRpdG9yLmluaXRpYWxpemVkKSB7XHJcbiAgICAgIHRoaXMuZWRpdG9yLnNldE1vZGUodmFsID8gJ3JlYWRvbmx5JyA6ICdkZXNpZ24nKTtcclxuICAgIH1cclxuICB9XHJcbiAgZ2V0IGRpc2FibGVkKCkge1xyXG4gICAgcmV0dXJuIHRoaXMuX2Rpc2FibGVkO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBvblRvdWNoZWRDYWxsYmFjayA9ICgpID0+IHt9O1xyXG4gIHByaXZhdGUgb25DaGFuZ2VDYWxsYmFjayA9ICh4OiBhbnkpID0+IHt9O1xyXG5cclxuICBjb25zdHJ1Y3RvcihlbGVtZW50UmVmOiBFbGVtZW50UmVmLCBuZ1pvbmU6IE5nWm9uZSwgQEluamVjdChQTEFURk9STV9JRCkgcHJpdmF0ZSBwbGF0Zm9ybUlkOiBPYmplY3QpIHtcclxuICAgIHN1cGVyKCk7XHJcbiAgICB0aGlzLmVsZW1lbnRSZWYgPSBlbGVtZW50UmVmO1xyXG4gICAgdGhpcy5uZ1pvbmUgPSBuZ1pvbmU7XHJcbiAgICB0aGlzLmluaXRpYWxpc2UgPSB0aGlzLmluaXRpYWxpc2UuYmluZCh0aGlzKTtcclxuICB9XHJcblxyXG4gIHdyaXRlVmFsdWUodmFsdWU6IHN0cmluZyB8IG51bGwpOiB2b2lkIHtcclxuICAgIHRoaXMuaW5pdGlhbFZhbHVlID0gdmFsdWUgfHwgdGhpcy5pbml0aWFsVmFsdWU7XHJcblxyXG4gICAgaWYgKHRoaXMuZWRpdG9yICYmIHRoaXMuZWRpdG9yLmluaXRpYWxpemVkICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ3N0cmluZycpIHtcclxuICAgICAgdGhpcy5lZGl0b3Iuc2V0Q29udGVudCh2YWx1ZSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICByZWdpc3Rlck9uQ2hhbmdlKGZuOiAoXzogYW55KSA9PiB2b2lkKTogdm9pZCB7XHJcbiAgICB0aGlzLm9uQ2hhbmdlQ2FsbGJhY2sgPSBmbjtcclxuICB9XHJcblxyXG4gIHJlZ2lzdGVyT25Ub3VjaGVkKGZuOiBhbnkpOiB2b2lkIHtcclxuICAgIHRoaXMub25Ub3VjaGVkQ2FsbGJhY2sgPSBmbjtcclxuICB9XHJcblxyXG4gIHNldERpc2FibGVkU3RhdGUoaXNEaXNhYmxlZDogYm9vbGVhbikge1xyXG4gICAgaWYgKHRoaXMuZWRpdG9yKSB7XHJcbiAgICAgIHRoaXMuZWRpdG9yLnNldE1vZGUoaXNEaXNhYmxlZCA/ICdyZWFkb25seScgOiAnZGVzaWduJyk7XHJcbiAgICB9IGVsc2UgaWYgKGlzRGlzYWJsZWQpIHtcclxuICAgICAgdGhpcy5pbml0ID0geyAuLi50aGlzLmluaXQsIHJlYWRvbmx5OiB0cnVlIH07XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBuZ0FmdGVyVmlld0luaXQoKSB7XHJcbiAgICBpZiAoaXNQbGF0Zm9ybUJyb3dzZXIodGhpcy5wbGF0Zm9ybUlkKSkge1xyXG4gICAgICB0aGlzLmlkID0gdGhpcy5pZCB8fCB1dWlkKCd0aW55LWFuZ3VsYXInKTtcclxuICAgICAgdGhpcy5pbmxpbmUgPVxyXG4gICAgICAgIHR5cGVvZiB0aGlzLmlubGluZSAhPT0gJ3VuZGVmaW5lZCcgPyAodHlwZW9mIHRoaXMuaW5saW5lID09PSAnYm9vbGVhbicgPyB0aGlzLmlubGluZSA6IHRydWUpIDogdGhpcy5pbml0ICYmIHRoaXMuaW5pdC5pbmxpbmU7XHJcbiAgICAgIHRoaXMuY3JlYXRlRWxlbWVudCgpO1xyXG4gICAgICBpZiAoZ2V0VGlueW1jZSgpICE9PSBudWxsKSB7XHJcbiAgICAgICAgdGhpcy5pbml0aWFsaXNlKCk7XHJcbiAgICAgIH0gZWxzZSBpZiAodGhpcy5lbGVtZW50ICYmIHRoaXMuZWxlbWVudC5vd25lckRvY3VtZW50KSB7XHJcbiAgICAgICAgY29uc3QgZG9jID0gdGhpcy5lbGVtZW50Lm93bmVyRG9jdW1lbnQ7XHJcbiAgICAgICAgY29uc3QgY2hhbm5lbCA9IHRoaXMuY2xvdWRDaGFubmVsIHx8ICdzdGFibGUnO1xyXG4gICAgICAgIGNvbnN0IGFwaUtleSA9IHRoaXMuYXBpS2V5IHx8ICcnO1xyXG5cclxuICAgICAgICBTY3JpcHRMb2FkZXIubG9hZChzY3JpcHRTdGF0ZSwgZG9jLCBgaHR0cHM6Ly9jbG91ZC50aW55bWNlLmNvbS8ke2NoYW5uZWx9L3RpbnltY2UubWluLmpzP2FwaUtleT0ke2FwaUtleX1gLCB0aGlzLmluaXRpYWxpc2UpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBuZ09uRGVzdHJveSgpIHtcclxuICAgIGlmIChnZXRUaW55bWNlKCkgIT09IG51bGwpIHtcclxuICAgICAgZ2V0VGlueW1jZSgpLnJlbW92ZSh0aGlzLmVkaXRvcik7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBjcmVhdGVFbGVtZW50KCkge1xyXG4gICAgY29uc3QgdGFnTmFtZSA9IHR5cGVvZiB0aGlzLnRhZ05hbWUgPT09ICdzdHJpbmcnID8gdGhpcy50YWdOYW1lIDogJ2Rpdic7XHJcbiAgICB0aGlzLmVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KHRoaXMuaW5saW5lID8gdGFnTmFtZSA6ICd0ZXh0YXJlYScpO1xyXG4gICAgaWYgKHRoaXMuZWxlbWVudCkge1xyXG4gICAgICB0aGlzLmVsZW1lbnQuaWQgPSB0aGlzLmlkO1xyXG4gICAgICBpZiAoaXNUZXh0YXJlYSh0aGlzLmVsZW1lbnQpKSB7XHJcbiAgICAgICAgdGhpcy5lbGVtZW50LnN0eWxlLnZpc2liaWxpdHkgPSAnaGlkZGVuJztcclxuICAgICAgfVxyXG4gICAgICB0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudC5hcHBlbmRDaGlsZCh0aGlzLmVsZW1lbnQpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgaW5pdGlhbGlzZSgpIHtcclxuICAgIGNvbnN0IGZpbmFsSW5pdCA9IHtcclxuICAgICAgLi4udGhpcy5pbml0LFxyXG4gICAgICB0YXJnZXQ6IHRoaXMuZWxlbWVudCxcclxuICAgICAgaW5saW5lOiB0aGlzLmlubGluZSxcclxuICAgICAgcmVhZG9ubHk6IHRoaXMuZGlzYWJsZWQsXHJcbiAgICAgIHBsdWdpbnM6IG1lcmdlUGx1Z2lucyh0aGlzLmluaXQgJiYgdGhpcy5pbml0LnBsdWdpbnMsIHRoaXMucGx1Z2lucyksXHJcbiAgICAgIHRvb2xiYXI6IHRoaXMudG9vbGJhciB8fCAodGhpcy5pbml0ICYmIHRoaXMuaW5pdC50b29sYmFyKSxcclxuICAgICAgc2V0dXA6IChlZGl0b3I6IGFueSkgPT4ge1xyXG4gICAgICAgIHRoaXMuZWRpdG9yID0gZWRpdG9yO1xyXG4gICAgICAgIGVkaXRvci5vbignaW5pdCcsIChlOiBFdmVudCkgPT4ge1xyXG4gICAgICAgICAgdGhpcy5pbml0RWRpdG9yKGUsIGVkaXRvcik7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIGlmICh0aGlzLmluaXQgJiYgdHlwZW9mIHRoaXMuaW5pdC5zZXR1cCA9PT0gJ2Z1bmN0aW9uJykge1xyXG4gICAgICAgICAgdGhpcy5pbml0LnNldHVwKGVkaXRvcik7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9O1xyXG5cclxuICAgIGlmIChpc1RleHRhcmVhKHRoaXMuZWxlbWVudCkpIHtcclxuICAgICAgdGhpcy5lbGVtZW50LnN0eWxlLnZpc2liaWxpdHkgPSAnJztcclxuICAgIH1cclxuXHJcbiAgICB0aGlzLm5nWm9uZS5ydW5PdXRzaWRlQW5ndWxhcigoKSA9PiB7XHJcbiAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgIGdldFRpbnltY2UoKS5pbml0KGZpbmFsSW5pdCk7XHJcbiAgICAgIH0pO1xyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGluaXRFZGl0b3IoaW5pdEV2ZW50OiBFdmVudCwgZWRpdG9yOiBhbnkpIHtcclxuICAgIGlmICh0eXBlb2YgdGhpcy5pbml0aWFsVmFsdWUgPT09ICdzdHJpbmcnKSB7XHJcbiAgICAgIHRoaXMubmdab25lLnJ1bigoKSA9PiBlZGl0b3Iuc2V0Q29udGVudCh0aGlzLmluaXRpYWxWYWx1ZSkpO1xyXG4gICAgfVxyXG4gICAgZWRpdG9yLm9uY2UoJ2JsdXInLCAoKSA9PiB0aGlzLm5nWm9uZS5ydW4oKCkgPT4gdGhpcy5vblRvdWNoZWRDYWxsYmFjaygpKSk7XHJcbiAgICBlZGl0b3Iub24oXHJcbiAgICAgICdzZXRjb250ZW50JyxcclxuICAgICAgKHsgY29udGVudCwgZm9ybWF0IH06IGFueSkgPT4gZm9ybWF0ID09PSAnaHRtbCcgJiYgY29udGVudCAmJiB0aGlzLm5nWm9uZS5ydW4oKCkgPT4gdGhpcy5vbkNoYW5nZUNhbGxiYWNrKGNvbnRlbnQpKVxyXG4gICAgKTtcclxuICAgIGVkaXRvci5vbignY2hhbmdlIGtleXVwIHVuZG8gcmVkbycsICgpID0+IHRoaXMubmdab25lLnJ1bigoKSA9PiB0aGlzLm9uQ2hhbmdlQ2FsbGJhY2soZWRpdG9yLmdldENvbnRlbnQoKSkpKTtcclxuICAgIGJpbmRIYW5kbGVycyh0aGlzLCBlZGl0b3IsIGluaXRFdmVudCk7XHJcbiAgfVxyXG59XHJcbiJdfQ==