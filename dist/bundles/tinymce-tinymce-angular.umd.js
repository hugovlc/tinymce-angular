(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@angular/forms'), require('@angular/common')) :
    typeof define === 'function' && define.amd ? define('@tinymce/tinymce-angular', ['exports', '@angular/core', '@angular/forms', '@angular/common'], factory) :
    (factory((global.tinymce = global.tinymce || {}, global.tinymce['tinymce-angular'] = {}),global.ng.core,global.ng.forms,global.ng.common));
}(this, (function (exports,core,forms,common) { 'use strict';

    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation. All rights reserved.
    Licensed under the Apache License, Version 2.0 (the "License"); you may not use
    this file except in compliance with the License. You may obtain a copy of the
    License at http://www.apache.org/licenses/LICENSE-2.0

    THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
    KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
    WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
    MERCHANTABLITY OR NON-INFRINGEMENT.

    See the Apache Version 2.0 License for specific language governing permissions
    and limitations under the License.
    ***************************************************************************** */
    /* global Reflect, Promise */
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b)
            if (b.hasOwnProperty(p))
                d[p] = b[p]; };
    function __extends(d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    }
    var __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s)
                if (Object.prototype.hasOwnProperty.call(s, p))
                    t[p] = s[p];
        }
        return t;
    };

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    var Events = (function () {
        function Events() {
            this.onBeforePaste = new core.EventEmitter();
            this.onBlur = new core.EventEmitter();
            this.onClick = new core.EventEmitter();
            this.onContextMenu = new core.EventEmitter();
            this.onCopy = new core.EventEmitter();
            this.onCut = new core.EventEmitter();
            this.onDblclick = new core.EventEmitter();
            this.onDrag = new core.EventEmitter();
            this.onDragDrop = new core.EventEmitter();
            this.onDragEnd = new core.EventEmitter();
            this.onDragGesture = new core.EventEmitter();
            this.onDragOver = new core.EventEmitter();
            this.onDrop = new core.EventEmitter();
            this.onFocus = new core.EventEmitter();
            this.onFocusIn = new core.EventEmitter();
            this.onFocusOut = new core.EventEmitter();
            this.onKeyDown = new core.EventEmitter();
            this.onKeyPress = new core.EventEmitter();
            this.onKeyUp = new core.EventEmitter();
            this.onMouseDown = new core.EventEmitter();
            this.onMouseEnter = new core.EventEmitter();
            this.onMouseLeave = new core.EventEmitter();
            this.onMouseMove = new core.EventEmitter();
            this.onMouseOut = new core.EventEmitter();
            this.onMouseOver = new core.EventEmitter();
            this.onMouseUp = new core.EventEmitter();
            this.onPaste = new core.EventEmitter();
            this.onSelectionChange = new core.EventEmitter();
            this.onActivate = new core.EventEmitter();
            this.onAddUndo = new core.EventEmitter();
            this.onBeforeAddUndo = new core.EventEmitter();
            this.onBeforeExecCommand = new core.EventEmitter();
            this.onBeforeGetContent = new core.EventEmitter();
            this.onBeforeRenderUI = new core.EventEmitter();
            this.onBeforeSetContent = new core.EventEmitter();
            this.onChange = new core.EventEmitter();
            this.onClearUndos = new core.EventEmitter();
            this.onDeactivate = new core.EventEmitter();
            this.onDirty = new core.EventEmitter();
            this.onExecCommand = new core.EventEmitter();
            this.onGetContent = new core.EventEmitter();
            this.onHide = new core.EventEmitter();
            this.onInit = new core.EventEmitter();
            this.onLoadContent = new core.EventEmitter();
            this.onNodeChange = new core.EventEmitter();
            this.onPostProcess = new core.EventEmitter();
            this.onPostRender = new core.EventEmitter();
            this.onPreInit = new core.EventEmitter();
            this.onPreProcess = new core.EventEmitter();
            this.onProgressState = new core.EventEmitter();
            this.onRedo = new core.EventEmitter();
            this.onRemove = new core.EventEmitter();
            this.onReset = new core.EventEmitter();
            this.onSaveContent = new core.EventEmitter();
            this.onSetAttrib = new core.EventEmitter();
            this.onObjectResizeStart = new core.EventEmitter();
            this.onObjectResized = new core.EventEmitter();
            this.onObjectSelected = new core.EventEmitter();
            this.onSetContent = new core.EventEmitter();
            this.onShow = new core.EventEmitter();
            this.onSubmit = new core.EventEmitter();
            this.onUndo = new core.EventEmitter();
            this.onVisualAid = new core.EventEmitter();
        }
        Events.propDecorators = {
            "onBeforePaste": [{ type: core.Output },],
            "onBlur": [{ type: core.Output },],
            "onClick": [{ type: core.Output },],
            "onContextMenu": [{ type: core.Output },],
            "onCopy": [{ type: core.Output },],
            "onCut": [{ type: core.Output },],
            "onDblclick": [{ type: core.Output },],
            "onDrag": [{ type: core.Output },],
            "onDragDrop": [{ type: core.Output },],
            "onDragEnd": [{ type: core.Output },],
            "onDragGesture": [{ type: core.Output },],
            "onDragOver": [{ type: core.Output },],
            "onDrop": [{ type: core.Output },],
            "onFocus": [{ type: core.Output },],
            "onFocusIn": [{ type: core.Output },],
            "onFocusOut": [{ type: core.Output },],
            "onKeyDown": [{ type: core.Output },],
            "onKeyPress": [{ type: core.Output },],
            "onKeyUp": [{ type: core.Output },],
            "onMouseDown": [{ type: core.Output },],
            "onMouseEnter": [{ type: core.Output },],
            "onMouseLeave": [{ type: core.Output },],
            "onMouseMove": [{ type: core.Output },],
            "onMouseOut": [{ type: core.Output },],
            "onMouseOver": [{ type: core.Output },],
            "onMouseUp": [{ type: core.Output },],
            "onPaste": [{ type: core.Output },],
            "onSelectionChange": [{ type: core.Output },],
            "onActivate": [{ type: core.Output },],
            "onAddUndo": [{ type: core.Output },],
            "onBeforeAddUndo": [{ type: core.Output },],
            "onBeforeExecCommand": [{ type: core.Output },],
            "onBeforeGetContent": [{ type: core.Output },],
            "onBeforeRenderUI": [{ type: core.Output },],
            "onBeforeSetContent": [{ type: core.Output },],
            "onChange": [{ type: core.Output },],
            "onClearUndos": [{ type: core.Output },],
            "onDeactivate": [{ type: core.Output },],
            "onDirty": [{ type: core.Output },],
            "onExecCommand": [{ type: core.Output },],
            "onGetContent": [{ type: core.Output },],
            "onHide": [{ type: core.Output },],
            "onInit": [{ type: core.Output },],
            "onLoadContent": [{ type: core.Output },],
            "onNodeChange": [{ type: core.Output },],
            "onPostProcess": [{ type: core.Output },],
            "onPostRender": [{ type: core.Output },],
            "onPreInit": [{ type: core.Output },],
            "onPreProcess": [{ type: core.Output },],
            "onProgressState": [{ type: core.Output },],
            "onRedo": [{ type: core.Output },],
            "onRemove": [{ type: core.Output },],
            "onReset": [{ type: core.Output },],
            "onSaveContent": [{ type: core.Output },],
            "onSetAttrib": [{ type: core.Output },],
            "onObjectResizeStart": [{ type: core.Output },],
            "onObjectResized": [{ type: core.Output },],
            "onObjectSelected": [{ type: core.Output },],
            "onSetContent": [{ type: core.Output },],
            "onShow": [{ type: core.Output },],
            "onSubmit": [{ type: core.Output },],
            "onUndo": [{ type: core.Output },],
            "onVisualAid": [{ type: core.Output },],
        };
        return Events;
    }());
    var /** @type {?} */ validEvents = [
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
    var /** @type {?} */ bindHandlers = function (ctx, editor, initEvent) {
        validEvents.forEach(function (eventName) {
            var /** @type {?} */ eventEmitter = ctx[eventName];
            if (eventEmitter.observers.length > 0) {
                if (eventName === 'onInit') {
                    ctx.ngZone.run(function () { return eventEmitter.emit({ event: initEvent, editor: editor }); });
                }
                else {
                    editor.on(eventName.substring(2), ctx.ngZone.run(function () { return function (event) { return eventEmitter.emit({ event: event, editor: editor }); }; }));
                }
            }
        });
    };
    var /** @type {?} */ unique = 0;
    var /** @type {?} */ uuid = function (prefix) {
        var /** @type {?} */ date = new Date();
        var /** @type {?} */ time = date.getTime();
        var /** @type {?} */ random = Math.floor(Math.random() * 1000000000);
        unique++;
        return prefix + '_' + random + unique + String(time);
    };
    var /** @type {?} */ isTextarea = function (element) {
        return typeof element !== 'undefined' && element.tagName.toLowerCase() === 'textarea';
    };
    var /** @type {?} */ normalizePluginArray = function (plugins) {
        if (typeof plugins === 'undefined' || plugins === '') {
            return [];
        }
        return Array.isArray(plugins) ? plugins : plugins.split(' ');
    };
    var /** @type {?} */ mergePlugins = function (initPlugins, inputPlugins) {
        return normalizePluginArray(initPlugins).concat(normalizePluginArray(inputPlugins));
    };

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    var /** @type {?} */ injectScriptTag = function (scriptId, doc, url, callback) {
        var /** @type {?} */ scriptTag = doc.createElement('script');
        scriptTag.type = 'application/javascript';
        scriptTag.id = scriptId;
        scriptTag.addEventListener('load', callback);
        scriptTag.src = url;
        if (doc.head) {
            doc.head.appendChild(scriptTag);
        }
    };
    var /** @type {?} */ create = function () {
        return {
            listeners: [],
            scriptId: uuid('tiny-script'),
            scriptLoaded: false
        };
    };
    var /** @type {?} */ load = function (state, doc, url, callback) {
        if (state.scriptLoaded) {
            callback();
        }
        else {
            state.listeners.push(callback);
            if (!doc.getElementById(state.scriptId)) {
                injectScriptTag(state.scriptId, doc, url, function () {
                    state.listeners.forEach(function (fn) { return fn(); });
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
    var /** @type {?} */ getTinymce = function () {
        var /** @type {?} */ w = typeof window !== 'undefined' ? ((window)) : undefined;
        return w && w.tinymce ? w.tinymce : null;
    };

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    var /** @type {?} */ scriptState = create();
    var /** @type {?} */ EDITOR_COMPONENT_VALUE_ACCESSOR = {
        provide: forms.NG_VALUE_ACCESSOR,
        useExisting: core.forwardRef(function () { return EditorComponent; }),
        multi: true
    };
    var EditorComponent = (function (_super) {
        __extends(EditorComponent, _super);
        function EditorComponent(elementRef, ngZone, platformId) {
            var _this = _super.call(this) || this;
            _this.platformId = platformId;
            _this.element = undefined;
            _this.id = '';
            _this.toolbar = null;
            _this.onTouchedCallback = function () { };
            _this.onChangeCallback = function (x) { };
            _this.elementRef = elementRef;
            _this.ngZone = ngZone;
            _this.initialise = _this.initialise.bind(_this);
            return _this;
        }
        Object.defineProperty(EditorComponent.prototype, "disabled", {
            get: /**
             * @return {?}
             */ function () {
                return this._disabled;
            },
            set: /**
             * @param {?} val
             * @return {?}
             */ function (val) {
                this._disabled = val;
                if (this.editor && this.editor.initialized) {
                    this.editor.setMode(val ? 'readonly' : 'design');
                }
            },
            enumerable: true,
            configurable: true
        });
        /**
         * @param {?} value
         * @return {?}
         */
        EditorComponent.prototype.writeValue = /**
         * @param {?} value
         * @return {?}
         */
            function (value) {
                this.initialValue = value || this.initialValue;
                if (this.editor && this.editor.initialized && typeof value === 'string') {
                    this.editor.setContent(value);
                }
            };
        /**
         * @param {?} fn
         * @return {?}
         */
        EditorComponent.prototype.registerOnChange = /**
         * @param {?} fn
         * @return {?}
         */
            function (fn) {
                this.onChangeCallback = fn;
            };
        /**
         * @param {?} fn
         * @return {?}
         */
        EditorComponent.prototype.registerOnTouched = /**
         * @param {?} fn
         * @return {?}
         */
            function (fn) {
                this.onTouchedCallback = fn;
            };
        /**
         * @param {?} isDisabled
         * @return {?}
         */
        EditorComponent.prototype.setDisabledState = /**
         * @param {?} isDisabled
         * @return {?}
         */
            function (isDisabled) {
                if (this.editor) {
                    this.editor.setMode(isDisabled ? 'readonly' : 'design');
                }
                else if (isDisabled) {
                    this.init = __assign({}, this.init, { readonly: true });
                }
            };
        /**
         * @return {?}
         */
        EditorComponent.prototype.ngAfterViewInit = /**
         * @return {?}
         */
            function () {
                if (common.isPlatformBrowser(this.platformId)) {
                    this.id = this.id || uuid('tiny-angular');
                    this.inline =
                        typeof this.inline !== 'undefined' ? (typeof this.inline === 'boolean' ? this.inline : true) : this.init && this.init["inline"];
                    this.createElement();
                    if (getTinymce() !== null) {
                        this.initialise();
                    }
                    else if (this.element && this.element.ownerDocument) {
                        var /** @type {?} */ doc = this.element.ownerDocument;
                        var /** @type {?} */ channel = this.cloudChannel || 'stable';
                        var /** @type {?} */ apiKey = this.apiKey || '';
                        load(scriptState, doc, "https://cloud.tinymce.com/" + channel + "/tinymce.min.js?apiKey=" + apiKey, this.initialise);
                    }
                }
            };
        /**
         * @return {?}
         */
        EditorComponent.prototype.ngOnDestroy = /**
         * @return {?}
         */
            function () {
                if (getTinymce() !== null) {
                    getTinymce().remove(this.editor);
                }
            };
        /**
         * @return {?}
         */
        EditorComponent.prototype.createElement = /**
         * @return {?}
         */
            function () {
                var /** @type {?} */ tagName = typeof this.tagName === 'string' ? this.tagName : 'div';
                this.element = document.createElement(this.inline ? tagName : 'textarea');
                if (this.element) {
                    this.element.id = this.id;
                    if (isTextarea(this.element)) {
                        this.element.style.visibility = 'hidden';
                    }
                    this.elementRef.nativeElement.appendChild(this.element);
                }
            };
        /**
         * @return {?}
         */
        EditorComponent.prototype.initialise = /**
         * @return {?}
         */
            function () {
                var _this = this;
                var /** @type {?} */ finalInit = __assign({}, this.init, { target: this.element, inline: this.inline, readonly: this.disabled, plugins: mergePlugins(this.init && this.init["plugins"], this.plugins), toolbar: this.toolbar || (this.init && this.init["toolbar"]), setup: function (editor) {
                        _this.editor = editor;
                        editor.on('init', function (e) {
                            _this.initEditor(e, editor);
                        });
                        if (_this.init && typeof _this.init["setup"] === 'function') {
                            _this.init["setup"](editor);
                        }
                    } });
                if (isTextarea(this.element)) {
                    this.element.style.visibility = '';
                }
                this.ngZone.runOutsideAngular(function () {
                    setTimeout(function () {
                        getTinymce().init(finalInit);
                    });
                });
            };
        /**
         * @param {?} initEvent
         * @param {?} editor
         * @return {?}
         */
        EditorComponent.prototype.initEditor = /**
         * @param {?} initEvent
         * @param {?} editor
         * @return {?}
         */
            function (initEvent, editor) {
                var _this = this;
                if (typeof this.initialValue === 'string') {
                    this.ngZone.run(function () { return editor.setContent(_this.initialValue); });
                }
                editor.once('blur', function () { return _this.ngZone.run(function () { return _this.onTouchedCallback(); }); });
                editor.on('setcontent', function (_a) {
                    var content = _a.content, format = _a.format;
                    return format === 'html' && content && _this.ngZone.run(function () { return _this.onChangeCallback(content); });
                });
                editor.on('change keyup undo redo', function () { return _this.ngZone.run(function () { return _this.onChangeCallback(editor.getContent()); }); });
                bindHandlers(this, editor, initEvent);
            };
        EditorComponent.decorators = [
            { type: core.Component, args: [{
                        selector: 'editor',
                        template: '<ng-template></ng-template>',
                        providers: [EDITOR_COMPONENT_VALUE_ACCESSOR],
                        styles: [':host { display: block; }']
                    }] }
        ];
        /** @nocollapse */
        EditorComponent.ctorParameters = function () {
            return [
                { type: core.ElementRef, },
                { type: core.NgZone, },
                { type: Object, decorators: [{ type: core.Inject, args: [core.PLATFORM_ID,] },] },
            ];
        };
        EditorComponent.propDecorators = {
            "cloudChannel": [{ type: core.Input },],
            "apiKey": [{ type: core.Input },],
            "init": [{ type: core.Input },],
            "id": [{ type: core.Input },],
            "initialValue": [{ type: core.Input },],
            "inline": [{ type: core.Input },],
            "tagName": [{ type: core.Input },],
            "plugins": [{ type: core.Input },],
            "toolbar": [{ type: core.Input },],
            "disabled": [{ type: core.Input },],
        };
        return EditorComponent;
    }(Events));

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    var EditorModule = (function () {
        function EditorModule() {
        }
        EditorModule.decorators = [
            { type: core.NgModule, args: [{
                        imports: [common.CommonModule, forms.FormsModule],
                        declarations: [EditorComponent],
                        exports: [EditorComponent]
                    },] }
        ];
        return EditorModule;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */

    exports.EditorModule = EditorModule;
    exports.ɵb = Events;
    exports.ɵa = EditorComponent;

    Object.defineProperty(exports, '__esModule', { value: true });

})));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGlueW1jZS10aW55bWNlLWFuZ3VsYXIudW1kLmpzLm1hcCIsInNvdXJjZXMiOlsibm9kZV9tb2R1bGVzL3RzbGliL3RzbGliLmVzNi5qcyIsIm5nOi8vQHRpbnltY2UvdGlueW1jZS1hbmd1bGFyL2VkaXRvci9FdmVudHMudHMiLCJuZzovL0B0aW55bWNlL3RpbnltY2UtYW5ndWxhci91dGlscy9VdGlscy50cyIsIm5nOi8vQHRpbnltY2UvdGlueW1jZS1hbmd1bGFyL3V0aWxzL1NjcmlwdExvYWRlci50cyIsIm5nOi8vQHRpbnltY2UvdGlueW1jZS1hbmd1bGFyL1RpbnlNQ0UudHMiLCJuZzovL0B0aW55bWNlL3RpbnltY2UtYW5ndWxhci9lZGl0b3IvZWRpdG9yLmNvbXBvbmVudC50cyIsIm5nOi8vQHRpbnltY2UvdGlueW1jZS1hbmd1bGFyL2VkaXRvci9lZGl0b3IubW9kdWxlLnRzIl0sInNvdXJjZXNDb250ZW50IjpbIi8qISAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxyXG5Db3B5cmlnaHQgKGMpIE1pY3Jvc29mdCBDb3Jwb3JhdGlvbi4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cclxuTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMCAodGhlIFwiTGljZW5zZVwiKTsgeW91IG1heSBub3QgdXNlXHJcbnRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLiBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlXHJcbkxpY2Vuc2UgYXQgaHR0cDovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wXHJcblxyXG5USElTIENPREUgSVMgUFJPVklERUQgT04gQU4gKkFTIElTKiBCQVNJUywgV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZXHJcbktJTkQsIEVJVEhFUiBFWFBSRVNTIE9SIElNUExJRUQsIElOQ0xVRElORyBXSVRIT1VUIExJTUlUQVRJT04gQU5ZIElNUExJRURcclxuV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIFRJVExFLCBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSxcclxuTUVSQ0hBTlRBQkxJVFkgT1IgTk9OLUlORlJJTkdFTUVOVC5cclxuXHJcblNlZSB0aGUgQXBhY2hlIFZlcnNpb24gMi4wIExpY2Vuc2UgZm9yIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9uc1xyXG5hbmQgbGltaXRhdGlvbnMgdW5kZXIgdGhlIExpY2Vuc2UuXHJcbioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqICovXHJcbi8qIGdsb2JhbCBSZWZsZWN0LCBQcm9taXNlICovXHJcblxyXG52YXIgZXh0ZW5kU3RhdGljcyA9IE9iamVjdC5zZXRQcm90b3R5cGVPZiB8fFxyXG4gICAgKHsgX19wcm90b19fOiBbXSB9IGluc3RhbmNlb2YgQXJyYXkgJiYgZnVuY3Rpb24gKGQsIGIpIHsgZC5fX3Byb3RvX18gPSBiOyB9KSB8fFxyXG4gICAgZnVuY3Rpb24gKGQsIGIpIHsgZm9yICh2YXIgcCBpbiBiKSBpZiAoYi5oYXNPd25Qcm9wZXJ0eShwKSkgZFtwXSA9IGJbcF07IH07XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19leHRlbmRzKGQsIGIpIHtcclxuICAgIGV4dGVuZFN0YXRpY3MoZCwgYik7XHJcbiAgICBmdW5jdGlvbiBfXygpIHsgdGhpcy5jb25zdHJ1Y3RvciA9IGQ7IH1cclxuICAgIGQucHJvdG90eXBlID0gYiA9PT0gbnVsbCA/IE9iamVjdC5jcmVhdGUoYikgOiAoX18ucHJvdG90eXBlID0gYi5wcm90b3R5cGUsIG5ldyBfXygpKTtcclxufVxyXG5cclxuZXhwb3J0IHZhciBfX2Fzc2lnbiA9IE9iamVjdC5hc3NpZ24gfHwgZnVuY3Rpb24gX19hc3NpZ24odCkge1xyXG4gICAgZm9yICh2YXIgcywgaSA9IDEsIG4gPSBhcmd1bWVudHMubGVuZ3RoOyBpIDwgbjsgaSsrKSB7XHJcbiAgICAgICAgcyA9IGFyZ3VtZW50c1tpXTtcclxuICAgICAgICBmb3IgKHZhciBwIGluIHMpIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwocywgcCkpIHRbcF0gPSBzW3BdO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIHQ7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX3Jlc3QocywgZSkge1xyXG4gICAgdmFyIHQgPSB7fTtcclxuICAgIGZvciAodmFyIHAgaW4gcykgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzLCBwKSAmJiBlLmluZGV4T2YocCkgPCAwKVxyXG4gICAgICAgIHRbcF0gPSBzW3BdO1xyXG4gICAgaWYgKHMgIT0gbnVsbCAmJiB0eXBlb2YgT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyA9PT0gXCJmdW5jdGlvblwiKVxyXG4gICAgICAgIGZvciAodmFyIGkgPSAwLCBwID0gT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyhzKTsgaSA8IHAubGVuZ3RoOyBpKyspIGlmIChlLmluZGV4T2YocFtpXSkgPCAwKVxyXG4gICAgICAgICAgICB0W3BbaV1dID0gc1twW2ldXTtcclxuICAgIHJldHVybiB0O1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19kZWNvcmF0ZShkZWNvcmF0b3JzLCB0YXJnZXQsIGtleSwgZGVzYykge1xyXG4gICAgdmFyIGMgPSBhcmd1bWVudHMubGVuZ3RoLCByID0gYyA8IDMgPyB0YXJnZXQgOiBkZXNjID09PSBudWxsID8gZGVzYyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IodGFyZ2V0LCBrZXkpIDogZGVzYywgZDtcclxuICAgIGlmICh0eXBlb2YgUmVmbGVjdCA9PT0gXCJvYmplY3RcIiAmJiB0eXBlb2YgUmVmbGVjdC5kZWNvcmF0ZSA9PT0gXCJmdW5jdGlvblwiKSByID0gUmVmbGVjdC5kZWNvcmF0ZShkZWNvcmF0b3JzLCB0YXJnZXQsIGtleSwgZGVzYyk7XHJcbiAgICBlbHNlIGZvciAodmFyIGkgPSBkZWNvcmF0b3JzLmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKSBpZiAoZCA9IGRlY29yYXRvcnNbaV0pIHIgPSAoYyA8IDMgPyBkKHIpIDogYyA+IDMgPyBkKHRhcmdldCwga2V5LCByKSA6IGQodGFyZ2V0LCBrZXkpKSB8fCByO1xyXG4gICAgcmV0dXJuIGMgPiAzICYmIHIgJiYgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwga2V5LCByKSwgcjtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fcGFyYW0ocGFyYW1JbmRleCwgZGVjb3JhdG9yKSB7XHJcbiAgICByZXR1cm4gZnVuY3Rpb24gKHRhcmdldCwga2V5KSB7IGRlY29yYXRvcih0YXJnZXQsIGtleSwgcGFyYW1JbmRleCk7IH1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fbWV0YWRhdGEobWV0YWRhdGFLZXksIG1ldGFkYXRhVmFsdWUpIHtcclxuICAgIGlmICh0eXBlb2YgUmVmbGVjdCA9PT0gXCJvYmplY3RcIiAmJiB0eXBlb2YgUmVmbGVjdC5tZXRhZGF0YSA9PT0gXCJmdW5jdGlvblwiKSByZXR1cm4gUmVmbGVjdC5tZXRhZGF0YShtZXRhZGF0YUtleSwgbWV0YWRhdGFWYWx1ZSk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2F3YWl0ZXIodGhpc0FyZywgX2FyZ3VtZW50cywgUCwgZ2VuZXJhdG9yKSB7XHJcbiAgICByZXR1cm4gbmV3IChQIHx8IChQID0gUHJvbWlzZSkpKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcclxuICAgICAgICBmdW5jdGlvbiBmdWxmaWxsZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3IubmV4dCh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XHJcbiAgICAgICAgZnVuY3Rpb24gcmVqZWN0ZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3JbXCJ0aHJvd1wiXSh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XHJcbiAgICAgICAgZnVuY3Rpb24gc3RlcChyZXN1bHQpIHsgcmVzdWx0LmRvbmUgPyByZXNvbHZlKHJlc3VsdC52YWx1ZSkgOiBuZXcgUChmdW5jdGlvbiAocmVzb2x2ZSkgeyByZXNvbHZlKHJlc3VsdC52YWx1ZSk7IH0pLnRoZW4oZnVsZmlsbGVkLCByZWplY3RlZCk7IH1cclxuICAgICAgICBzdGVwKChnZW5lcmF0b3IgPSBnZW5lcmF0b3IuYXBwbHkodGhpc0FyZywgX2FyZ3VtZW50cyB8fCBbXSkpLm5leHQoKSk7XHJcbiAgICB9KTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fZ2VuZXJhdG9yKHRoaXNBcmcsIGJvZHkpIHtcclxuICAgIHZhciBfID0geyBsYWJlbDogMCwgc2VudDogZnVuY3Rpb24oKSB7IGlmICh0WzBdICYgMSkgdGhyb3cgdFsxXTsgcmV0dXJuIHRbMV07IH0sIHRyeXM6IFtdLCBvcHM6IFtdIH0sIGYsIHksIHQsIGc7XHJcbiAgICByZXR1cm4gZyA9IHsgbmV4dDogdmVyYigwKSwgXCJ0aHJvd1wiOiB2ZXJiKDEpLCBcInJldHVyblwiOiB2ZXJiKDIpIH0sIHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiAoZ1tTeW1ib2wuaXRlcmF0b3JdID0gZnVuY3Rpb24oKSB7IHJldHVybiB0aGlzOyB9KSwgZztcclxuICAgIGZ1bmN0aW9uIHZlcmIobikgeyByZXR1cm4gZnVuY3Rpb24gKHYpIHsgcmV0dXJuIHN0ZXAoW24sIHZdKTsgfTsgfVxyXG4gICAgZnVuY3Rpb24gc3RlcChvcCkge1xyXG4gICAgICAgIGlmIChmKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiR2VuZXJhdG9yIGlzIGFscmVhZHkgZXhlY3V0aW5nLlwiKTtcclxuICAgICAgICB3aGlsZSAoXykgdHJ5IHtcclxuICAgICAgICAgICAgaWYgKGYgPSAxLCB5ICYmICh0ID0geVtvcFswXSAmIDIgPyBcInJldHVyblwiIDogb3BbMF0gPyBcInRocm93XCIgOiBcIm5leHRcIl0pICYmICEodCA9IHQuY2FsbCh5LCBvcFsxXSkpLmRvbmUpIHJldHVybiB0O1xyXG4gICAgICAgICAgICBpZiAoeSA9IDAsIHQpIG9wID0gWzAsIHQudmFsdWVdO1xyXG4gICAgICAgICAgICBzd2l0Y2ggKG9wWzBdKSB7XHJcbiAgICAgICAgICAgICAgICBjYXNlIDA6IGNhc2UgMTogdCA9IG9wOyBicmVhaztcclxuICAgICAgICAgICAgICAgIGNhc2UgNDogXy5sYWJlbCsrOyByZXR1cm4geyB2YWx1ZTogb3BbMV0sIGRvbmU6IGZhbHNlIH07XHJcbiAgICAgICAgICAgICAgICBjYXNlIDU6IF8ubGFiZWwrKzsgeSA9IG9wWzFdOyBvcCA9IFswXTsgY29udGludWU7XHJcbiAgICAgICAgICAgICAgICBjYXNlIDc6IG9wID0gXy5vcHMucG9wKCk7IF8udHJ5cy5wb3AoKTsgY29udGludWU7XHJcbiAgICAgICAgICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICAgICAgICAgIGlmICghKHQgPSBfLnRyeXMsIHQgPSB0Lmxlbmd0aCA+IDAgJiYgdFt0Lmxlbmd0aCAtIDFdKSAmJiAob3BbMF0gPT09IDYgfHwgb3BbMF0gPT09IDIpKSB7IF8gPSAwOyBjb250aW51ZTsgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmIChvcFswXSA9PT0gMyAmJiAoIXQgfHwgKG9wWzFdID4gdFswXSAmJiBvcFsxXSA8IHRbM10pKSkgeyBfLmxhYmVsID0gb3BbMV07IGJyZWFrOyB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKG9wWzBdID09PSA2ICYmIF8ubGFiZWwgPCB0WzFdKSB7IF8ubGFiZWwgPSB0WzFdOyB0ID0gb3A7IGJyZWFrOyB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHQgJiYgXy5sYWJlbCA8IHRbMl0pIHsgXy5sYWJlbCA9IHRbMl07IF8ub3BzLnB1c2gob3ApOyBicmVhazsgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmICh0WzJdKSBfLm9wcy5wb3AoKTtcclxuICAgICAgICAgICAgICAgICAgICBfLnRyeXMucG9wKCk7IGNvbnRpbnVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIG9wID0gYm9keS5jYWxsKHRoaXNBcmcsIF8pO1xyXG4gICAgICAgIH0gY2F0Y2ggKGUpIHsgb3AgPSBbNiwgZV07IHkgPSAwOyB9IGZpbmFsbHkgeyBmID0gdCA9IDA7IH1cclxuICAgICAgICBpZiAob3BbMF0gJiA1KSB0aHJvdyBvcFsxXTsgcmV0dXJuIHsgdmFsdWU6IG9wWzBdID8gb3BbMV0gOiB2b2lkIDAsIGRvbmU6IHRydWUgfTtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fZXhwb3J0U3RhcihtLCBleHBvcnRzKSB7XHJcbiAgICBmb3IgKHZhciBwIGluIG0pIGlmICghZXhwb3J0cy5oYXNPd25Qcm9wZXJ0eShwKSkgZXhwb3J0c1twXSA9IG1bcF07XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX3ZhbHVlcyhvKSB7XHJcbiAgICB2YXIgbSA9IHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiBvW1N5bWJvbC5pdGVyYXRvcl0sIGkgPSAwO1xyXG4gICAgaWYgKG0pIHJldHVybiBtLmNhbGwobyk7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIG5leHQ6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgaWYgKG8gJiYgaSA+PSBvLmxlbmd0aCkgbyA9IHZvaWQgMDtcclxuICAgICAgICAgICAgcmV0dXJuIHsgdmFsdWU6IG8gJiYgb1tpKytdLCBkb25lOiAhbyB9O1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX3JlYWQobywgbikge1xyXG4gICAgdmFyIG0gPSB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgb1tTeW1ib2wuaXRlcmF0b3JdO1xyXG4gICAgaWYgKCFtKSByZXR1cm4gbztcclxuICAgIHZhciBpID0gbS5jYWxsKG8pLCByLCBhciA9IFtdLCBlO1xyXG4gICAgdHJ5IHtcclxuICAgICAgICB3aGlsZSAoKG4gPT09IHZvaWQgMCB8fCBuLS0gPiAwKSAmJiAhKHIgPSBpLm5leHQoKSkuZG9uZSkgYXIucHVzaChyLnZhbHVlKTtcclxuICAgIH1cclxuICAgIGNhdGNoIChlcnJvcikgeyBlID0geyBlcnJvcjogZXJyb3IgfTsgfVxyXG4gICAgZmluYWxseSB7XHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgaWYgKHIgJiYgIXIuZG9uZSAmJiAobSA9IGlbXCJyZXR1cm5cIl0pKSBtLmNhbGwoaSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGZpbmFsbHkgeyBpZiAoZSkgdGhyb3cgZS5lcnJvcjsgfVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIGFyO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19zcHJlYWQoKSB7XHJcbiAgICBmb3IgKHZhciBhciA9IFtdLCBpID0gMDsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKylcclxuICAgICAgICBhciA9IGFyLmNvbmNhdChfX3JlYWQoYXJndW1lbnRzW2ldKSk7XHJcbiAgICByZXR1cm4gYXI7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2F3YWl0KHYpIHtcclxuICAgIHJldHVybiB0aGlzIGluc3RhbmNlb2YgX19hd2FpdCA/ICh0aGlzLnYgPSB2LCB0aGlzKSA6IG5ldyBfX2F3YWl0KHYpO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19hc3luY0dlbmVyYXRvcih0aGlzQXJnLCBfYXJndW1lbnRzLCBnZW5lcmF0b3IpIHtcclxuICAgIGlmICghU3ltYm9sLmFzeW5jSXRlcmF0b3IpIHRocm93IG5ldyBUeXBlRXJyb3IoXCJTeW1ib2wuYXN5bmNJdGVyYXRvciBpcyBub3QgZGVmaW5lZC5cIik7XHJcbiAgICB2YXIgZyA9IGdlbmVyYXRvci5hcHBseSh0aGlzQXJnLCBfYXJndW1lbnRzIHx8IFtdKSwgaSwgcSA9IFtdO1xyXG4gICAgcmV0dXJuIGkgPSB7fSwgdmVyYihcIm5leHRcIiksIHZlcmIoXCJ0aHJvd1wiKSwgdmVyYihcInJldHVyblwiKSwgaVtTeW1ib2wuYXN5bmNJdGVyYXRvcl0gPSBmdW5jdGlvbiAoKSB7IHJldHVybiB0aGlzOyB9LCBpO1xyXG4gICAgZnVuY3Rpb24gdmVyYihuKSB7IGlmIChnW25dKSBpW25dID0gZnVuY3Rpb24gKHYpIHsgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uIChhLCBiKSB7IHEucHVzaChbbiwgdiwgYSwgYl0pID4gMSB8fCByZXN1bWUobiwgdik7IH0pOyB9OyB9XHJcbiAgICBmdW5jdGlvbiByZXN1bWUobiwgdikgeyB0cnkgeyBzdGVwKGdbbl0odikpOyB9IGNhdGNoIChlKSB7IHNldHRsZShxWzBdWzNdLCBlKTsgfSB9XHJcbiAgICBmdW5jdGlvbiBzdGVwKHIpIHsgci52YWx1ZSBpbnN0YW5jZW9mIF9fYXdhaXQgPyBQcm9taXNlLnJlc29sdmUoci52YWx1ZS52KS50aGVuKGZ1bGZpbGwsIHJlamVjdCkgOiBzZXR0bGUocVswXVsyXSwgcik7ICB9XHJcbiAgICBmdW5jdGlvbiBmdWxmaWxsKHZhbHVlKSB7IHJlc3VtZShcIm5leHRcIiwgdmFsdWUpOyB9XHJcbiAgICBmdW5jdGlvbiByZWplY3QodmFsdWUpIHsgcmVzdW1lKFwidGhyb3dcIiwgdmFsdWUpOyB9XHJcbiAgICBmdW5jdGlvbiBzZXR0bGUoZiwgdikgeyBpZiAoZih2KSwgcS5zaGlmdCgpLCBxLmxlbmd0aCkgcmVzdW1lKHFbMF1bMF0sIHFbMF1bMV0pOyB9XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2FzeW5jRGVsZWdhdG9yKG8pIHtcclxuICAgIHZhciBpLCBwO1xyXG4gICAgcmV0dXJuIGkgPSB7fSwgdmVyYihcIm5leHRcIiksIHZlcmIoXCJ0aHJvd1wiLCBmdW5jdGlvbiAoZSkgeyB0aHJvdyBlOyB9KSwgdmVyYihcInJldHVyblwiKSwgaVtTeW1ib2wuaXRlcmF0b3JdID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gdGhpczsgfSwgaTtcclxuICAgIGZ1bmN0aW9uIHZlcmIobiwgZikgeyBpZiAob1tuXSkgaVtuXSA9IGZ1bmN0aW9uICh2KSB7IHJldHVybiAocCA9ICFwKSA/IHsgdmFsdWU6IF9fYXdhaXQob1tuXSh2KSksIGRvbmU6IG4gPT09IFwicmV0dXJuXCIgfSA6IGYgPyBmKHYpIDogdjsgfTsgfVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19hc3luY1ZhbHVlcyhvKSB7XHJcbiAgICBpZiAoIVN5bWJvbC5hc3luY0l0ZXJhdG9yKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiU3ltYm9sLmFzeW5jSXRlcmF0b3IgaXMgbm90IGRlZmluZWQuXCIpO1xyXG4gICAgdmFyIG0gPSBvW1N5bWJvbC5hc3luY0l0ZXJhdG9yXTtcclxuICAgIHJldHVybiBtID8gbS5jYWxsKG8pIDogdHlwZW9mIF9fdmFsdWVzID09PSBcImZ1bmN0aW9uXCIgPyBfX3ZhbHVlcyhvKSA6IG9bU3ltYm9sLml0ZXJhdG9yXSgpO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19tYWtlVGVtcGxhdGVPYmplY3QoY29va2VkLCByYXcpIHtcclxuICAgIGlmIChPYmplY3QuZGVmaW5lUHJvcGVydHkpIHsgT2JqZWN0LmRlZmluZVByb3BlcnR5KGNvb2tlZCwgXCJyYXdcIiwgeyB2YWx1ZTogcmF3IH0pOyB9IGVsc2UgeyBjb29rZWQucmF3ID0gcmF3OyB9XHJcbiAgICByZXR1cm4gY29va2VkO1xyXG59O1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9faW1wb3J0U3Rhcihtb2QpIHtcclxuICAgIGlmIChtb2QgJiYgbW9kLl9fZXNNb2R1bGUpIHJldHVybiBtb2Q7XHJcbiAgICB2YXIgcmVzdWx0ID0ge307XHJcbiAgICBpZiAobW9kICE9IG51bGwpIGZvciAodmFyIGsgaW4gbW9kKSBpZiAoT2JqZWN0Lmhhc093blByb3BlcnR5LmNhbGwobW9kLCBrKSkgcmVzdWx0W2tdID0gbW9kW2tdO1xyXG4gICAgcmVzdWx0LmRlZmF1bHQgPSBtb2Q7XHJcbiAgICByZXR1cm4gcmVzdWx0O1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19pbXBvcnREZWZhdWx0KG1vZCkge1xyXG4gICAgcmV0dXJuIChtb2QgJiYgbW9kLl9fZXNNb2R1bGUpID8gbW9kIDogeyBkZWZhdWx0OiBtb2QgfTtcclxufVxyXG4iLCJpbXBvcnQgeyBPdXRwdXQsIEV2ZW50RW1pdHRlciB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuZXhwb3J0IGludGVyZmFjZSBFdmVudE9iajxUPiB7XHJcbiAgZXZlbnQ6IFQ7XHJcbiAgZWRpdG9yOiBhbnk7XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBFdmVudHMge1xyXG4gIEBPdXRwdXQoKSBvbkJlZm9yZVBhc3RlOiBFdmVudEVtaXR0ZXI8RXZlbnRPYmo8Q2xpcGJvYXJkRXZlbnQ+PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcclxuICBAT3V0cHV0KCkgb25CbHVyOiBFdmVudEVtaXR0ZXI8RXZlbnRPYmo8Rm9jdXNFdmVudD4+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xyXG4gIEBPdXRwdXQoKSBvbkNsaWNrOiBFdmVudEVtaXR0ZXI8RXZlbnRPYmo8TW91c2VFdmVudD4+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xyXG4gIEBPdXRwdXQoKSBvbkNvbnRleHRNZW51OiBFdmVudEVtaXR0ZXI8RXZlbnRPYmo8TW91c2VFdmVudD4+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xyXG4gIEBPdXRwdXQoKSBvbkNvcHk6IEV2ZW50RW1pdHRlcjxFdmVudE9iajxDbGlwYm9hcmRFdmVudD4+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xyXG4gIEBPdXRwdXQoKSBvbkN1dDogRXZlbnRFbWl0dGVyPEV2ZW50T2JqPENsaXBib2FyZEV2ZW50Pj4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XHJcbiAgQE91dHB1dCgpIG9uRGJsY2xpY2s6IEV2ZW50RW1pdHRlcjxFdmVudE9iajxNb3VzZUV2ZW50Pj4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XHJcbiAgQE91dHB1dCgpIG9uRHJhZzogRXZlbnRFbWl0dGVyPEV2ZW50T2JqPERyYWdFdmVudD4+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xyXG4gIEBPdXRwdXQoKSBvbkRyYWdEcm9wOiBFdmVudEVtaXR0ZXI8RXZlbnRPYmo8RHJhZ0V2ZW50Pj4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XHJcbiAgQE91dHB1dCgpIG9uRHJhZ0VuZDogRXZlbnRFbWl0dGVyPEV2ZW50T2JqPERyYWdFdmVudD4+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xyXG4gIEBPdXRwdXQoKSBvbkRyYWdHZXN0dXJlOiBFdmVudEVtaXR0ZXI8RXZlbnRPYmo8RHJhZ0V2ZW50Pj4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XHJcbiAgQE91dHB1dCgpIG9uRHJhZ092ZXI6IEV2ZW50RW1pdHRlcjxFdmVudE9iajxEcmFnRXZlbnQ+PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcclxuICBAT3V0cHV0KCkgb25Ecm9wOiBFdmVudEVtaXR0ZXI8RXZlbnRPYmo8RHJhZ0V2ZW50Pj4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XHJcbiAgQE91dHB1dCgpIG9uRm9jdXM6IEV2ZW50RW1pdHRlcjxFdmVudE9iajxGb2N1c0V2ZW50Pj4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XHJcbiAgQE91dHB1dCgpIG9uRm9jdXNJbjogRXZlbnRFbWl0dGVyPEV2ZW50T2JqPEZvY3VzRXZlbnQ+PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcclxuICBAT3V0cHV0KCkgb25Gb2N1c091dDogRXZlbnRFbWl0dGVyPEV2ZW50T2JqPEZvY3VzRXZlbnQ+PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcclxuICBAT3V0cHV0KCkgb25LZXlEb3duOiBFdmVudEVtaXR0ZXI8RXZlbnRPYmo8S2V5Ym9hcmRFdmVudD4+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xyXG4gIEBPdXRwdXQoKSBvbktleVByZXNzOiBFdmVudEVtaXR0ZXI8RXZlbnRPYmo8S2V5Ym9hcmRFdmVudD4+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xyXG4gIEBPdXRwdXQoKSBvbktleVVwOiBFdmVudEVtaXR0ZXI8RXZlbnRPYmo8S2V5Ym9hcmRFdmVudD4+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xyXG4gIEBPdXRwdXQoKSBvbk1vdXNlRG93bjogRXZlbnRFbWl0dGVyPEV2ZW50T2JqPE1vdXNlRXZlbnQ+PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcclxuICBAT3V0cHV0KCkgb25Nb3VzZUVudGVyOiBFdmVudEVtaXR0ZXI8RXZlbnRPYmo8TW91c2VFdmVudD4+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xyXG4gIEBPdXRwdXQoKSBvbk1vdXNlTGVhdmU6IEV2ZW50RW1pdHRlcjxFdmVudE9iajxNb3VzZUV2ZW50Pj4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XHJcbiAgQE91dHB1dCgpIG9uTW91c2VNb3ZlOiBFdmVudEVtaXR0ZXI8RXZlbnRPYmo8TW91c2VFdmVudD4+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xyXG4gIEBPdXRwdXQoKSBvbk1vdXNlT3V0OiBFdmVudEVtaXR0ZXI8RXZlbnRPYmo8TW91c2VFdmVudD4+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xyXG4gIEBPdXRwdXQoKSBvbk1vdXNlT3ZlcjogRXZlbnRFbWl0dGVyPEV2ZW50T2JqPE1vdXNlRXZlbnQ+PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcclxuICBAT3V0cHV0KCkgb25Nb3VzZVVwOiBFdmVudEVtaXR0ZXI8RXZlbnRPYmo8TW91c2VFdmVudD4+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xyXG4gIEBPdXRwdXQoKSBvblBhc3RlOiBFdmVudEVtaXR0ZXI8RXZlbnRPYmo8Q2xpcGJvYXJkRXZlbnQ+PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcclxuICBAT3V0cHV0KCkgb25TZWxlY3Rpb25DaGFuZ2U6IEV2ZW50RW1pdHRlcjxFdmVudE9iajxFdmVudD4+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xyXG4gIEBPdXRwdXQoKSBvbkFjdGl2YXRlOiBFdmVudEVtaXR0ZXI8RXZlbnRPYmo8YW55Pj4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XHJcbiAgQE91dHB1dCgpIG9uQWRkVW5kbzogRXZlbnRFbWl0dGVyPEV2ZW50T2JqPGFueT4+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xyXG4gIEBPdXRwdXQoKSBvbkJlZm9yZUFkZFVuZG86IEV2ZW50RW1pdHRlcjxFdmVudE9iajxhbnk+PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcclxuICBAT3V0cHV0KCkgb25CZWZvcmVFeGVjQ29tbWFuZDogRXZlbnRFbWl0dGVyPEV2ZW50T2JqPGFueT4+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xyXG4gIEBPdXRwdXQoKSBvbkJlZm9yZUdldENvbnRlbnQ6IEV2ZW50RW1pdHRlcjxFdmVudE9iajxhbnk+PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcclxuICBAT3V0cHV0KCkgb25CZWZvcmVSZW5kZXJVSTogRXZlbnRFbWl0dGVyPEV2ZW50T2JqPGFueT4+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xyXG4gIEBPdXRwdXQoKSBvbkJlZm9yZVNldENvbnRlbnQ6IEV2ZW50RW1pdHRlcjxFdmVudE9iajxhbnk+PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcclxuICBAT3V0cHV0KCkgb25DaGFuZ2U6IEV2ZW50RW1pdHRlcjxFdmVudE9iajxhbnk+PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcclxuICBAT3V0cHV0KCkgb25DbGVhclVuZG9zOiBFdmVudEVtaXR0ZXI8RXZlbnRPYmo8YW55Pj4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XHJcbiAgQE91dHB1dCgpIG9uRGVhY3RpdmF0ZTogRXZlbnRFbWl0dGVyPEV2ZW50T2JqPGFueT4+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xyXG4gIEBPdXRwdXQoKSBvbkRpcnR5OiBFdmVudEVtaXR0ZXI8RXZlbnRPYmo8YW55Pj4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XHJcbiAgQE91dHB1dCgpIG9uRXhlY0NvbW1hbmQ6IEV2ZW50RW1pdHRlcjxFdmVudE9iajxhbnk+PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcclxuICBAT3V0cHV0KCkgb25HZXRDb250ZW50OiBFdmVudEVtaXR0ZXI8RXZlbnRPYmo8YW55Pj4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XHJcbiAgQE91dHB1dCgpIG9uSGlkZTogRXZlbnRFbWl0dGVyPEV2ZW50T2JqPGFueT4+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xyXG4gIEBPdXRwdXQoKSBvbkluaXQ6IEV2ZW50RW1pdHRlcjxFdmVudE9iajxhbnk+PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcclxuICBAT3V0cHV0KCkgb25Mb2FkQ29udGVudDogRXZlbnRFbWl0dGVyPEV2ZW50T2JqPGFueT4+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xyXG4gIEBPdXRwdXQoKSBvbk5vZGVDaGFuZ2U6IEV2ZW50RW1pdHRlcjxFdmVudE9iajxhbnk+PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcclxuICBAT3V0cHV0KCkgb25Qb3N0UHJvY2VzczogRXZlbnRFbWl0dGVyPEV2ZW50T2JqPGFueT4+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xyXG4gIEBPdXRwdXQoKSBvblBvc3RSZW5kZXI6IEV2ZW50RW1pdHRlcjxFdmVudE9iajxhbnk+PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcclxuICBAT3V0cHV0KCkgb25QcmVJbml0OiBFdmVudEVtaXR0ZXI8RXZlbnRPYmo8YW55Pj4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XHJcbiAgQE91dHB1dCgpIG9uUHJlUHJvY2VzczogRXZlbnRFbWl0dGVyPEV2ZW50T2JqPGFueT4+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xyXG4gIEBPdXRwdXQoKSBvblByb2dyZXNzU3RhdGU6IEV2ZW50RW1pdHRlcjxFdmVudE9iajxhbnk+PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcclxuICBAT3V0cHV0KCkgb25SZWRvOiBFdmVudEVtaXR0ZXI8RXZlbnRPYmo8YW55Pj4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XHJcbiAgQE91dHB1dCgpIG9uUmVtb3ZlOiBFdmVudEVtaXR0ZXI8RXZlbnRPYmo8YW55Pj4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XHJcbiAgQE91dHB1dCgpIG9uUmVzZXQ6IEV2ZW50RW1pdHRlcjxFdmVudE9iajxhbnk+PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcclxuICBAT3V0cHV0KCkgb25TYXZlQ29udGVudDogRXZlbnRFbWl0dGVyPEV2ZW50T2JqPGFueT4+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xyXG4gIEBPdXRwdXQoKSBvblNldEF0dHJpYjogRXZlbnRFbWl0dGVyPEV2ZW50T2JqPGFueT4+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xyXG4gIEBPdXRwdXQoKSBvbk9iamVjdFJlc2l6ZVN0YXJ0OiBFdmVudEVtaXR0ZXI8RXZlbnRPYmo8YW55Pj4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XHJcbiAgQE91dHB1dCgpIG9uT2JqZWN0UmVzaXplZDogRXZlbnRFbWl0dGVyPEV2ZW50T2JqPGFueT4+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xyXG4gIEBPdXRwdXQoKSBvbk9iamVjdFNlbGVjdGVkOiBFdmVudEVtaXR0ZXI8RXZlbnRPYmo8YW55Pj4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XHJcbiAgQE91dHB1dCgpIG9uU2V0Q29udGVudDogRXZlbnRFbWl0dGVyPEV2ZW50T2JqPGFueT4+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xyXG4gIEBPdXRwdXQoKSBvblNob3c6IEV2ZW50RW1pdHRlcjxFdmVudE9iajxhbnk+PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcclxuICBAT3V0cHV0KCkgb25TdWJtaXQ6IEV2ZW50RW1pdHRlcjxFdmVudE9iajxhbnk+PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcclxuICBAT3V0cHV0KCkgb25VbmRvOiBFdmVudEVtaXR0ZXI8RXZlbnRPYmo8YW55Pj4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XHJcbiAgQE91dHB1dCgpIG9uVmlzdWFsQWlkOiBFdmVudEVtaXR0ZXI8RXZlbnRPYmo8YW55Pj4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCB2YWxpZEV2ZW50czogKGtleW9mIEV2ZW50cylbXSA9IFtcclxuICAnb25BY3RpdmF0ZScsXHJcbiAgJ29uQWRkVW5kbycsXHJcbiAgJ29uQmVmb3JlQWRkVW5kbycsXHJcbiAgJ29uQmVmb3JlRXhlY0NvbW1hbmQnLFxyXG4gICdvbkJlZm9yZUdldENvbnRlbnQnLFxyXG4gICdvbkJlZm9yZVJlbmRlclVJJyxcclxuICAnb25CZWZvcmVTZXRDb250ZW50JyxcclxuICAnb25CZWZvcmVQYXN0ZScsXHJcbiAgJ29uQmx1cicsXHJcbiAgJ29uQ2hhbmdlJyxcclxuICAnb25DbGVhclVuZG9zJyxcclxuICAnb25DbGljaycsXHJcbiAgJ29uQ29udGV4dE1lbnUnLFxyXG4gICdvbkNvcHknLFxyXG4gICdvbkN1dCcsXHJcbiAgJ29uRGJsY2xpY2snLFxyXG4gICdvbkRlYWN0aXZhdGUnLFxyXG4gICdvbkRpcnR5JyxcclxuICAnb25EcmFnJyxcclxuICAnb25EcmFnRHJvcCcsXHJcbiAgJ29uRHJhZ0VuZCcsXHJcbiAgJ29uRHJhZ0dlc3R1cmUnLFxyXG4gICdvbkRyYWdPdmVyJyxcclxuICAnb25Ecm9wJyxcclxuICAnb25FeGVjQ29tbWFuZCcsXHJcbiAgJ29uRm9jdXMnLFxyXG4gICdvbkZvY3VzSW4nLFxyXG4gICdvbkZvY3VzT3V0JyxcclxuICAnb25HZXRDb250ZW50JyxcclxuICAnb25IaWRlJyxcclxuICAnb25Jbml0JyxcclxuICAnb25LZXlEb3duJyxcclxuICAnb25LZXlQcmVzcycsXHJcbiAgJ29uS2V5VXAnLFxyXG4gICdvbkxvYWRDb250ZW50JyxcclxuICAnb25Nb3VzZURvd24nLFxyXG4gICdvbk1vdXNlRW50ZXInLFxyXG4gICdvbk1vdXNlTGVhdmUnLFxyXG4gICdvbk1vdXNlTW92ZScsXHJcbiAgJ29uTW91c2VPdXQnLFxyXG4gICdvbk1vdXNlT3ZlcicsXHJcbiAgJ29uTW91c2VVcCcsXHJcbiAgJ29uTm9kZUNoYW5nZScsXHJcbiAgJ29uT2JqZWN0UmVzaXplU3RhcnQnLFxyXG4gICdvbk9iamVjdFJlc2l6ZWQnLFxyXG4gICdvbk9iamVjdFNlbGVjdGVkJyxcclxuICAnb25QYXN0ZScsXHJcbiAgJ29uUG9zdFByb2Nlc3MnLFxyXG4gICdvblBvc3RSZW5kZXInLFxyXG4gICdvblByZVByb2Nlc3MnLFxyXG4gICdvblByb2dyZXNzU3RhdGUnLFxyXG4gICdvblJlZG8nLFxyXG4gICdvblJlbW92ZScsXHJcbiAgJ29uUmVzZXQnLFxyXG4gICdvblNhdmVDb250ZW50JyxcclxuICAnb25TZWxlY3Rpb25DaGFuZ2UnLFxyXG4gICdvblNldEF0dHJpYicsXHJcbiAgJ29uU2V0Q29udGVudCcsXHJcbiAgJ29uU2hvdycsXHJcbiAgJ29uU3VibWl0JyxcclxuICAnb25VbmRvJyxcclxuICAnb25WaXN1YWxBaWQnXHJcbl07XHJcbiIsIi8qKlxyXG4gKiBDb3B5cmlnaHQgKGMpIDIwMTctcHJlc2VudCwgRXBob3gsIEluYy5cclxuICpcclxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIDIgbGljZW5zZSBmb3VuZCBpbiB0aGVcclxuICogTElDRU5TRSBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLlxyXG4gKlxyXG4gKi9cclxuXHJcbmltcG9ydCB7IEV2ZW50RW1pdHRlciB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBFZGl0b3JDb21wb25lbnQgfSBmcm9tICcuLi9lZGl0b3IvZWRpdG9yLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IHZhbGlkRXZlbnRzIH0gZnJvbSAnLi4vZWRpdG9yL0V2ZW50cyc7XHJcblxyXG5leHBvcnQgY29uc3QgYmluZEhhbmRsZXJzID0gKGN0eDogRWRpdG9yQ29tcG9uZW50LCBlZGl0b3I6IGFueSwgaW5pdEV2ZW50OiBFdmVudCk6IHZvaWQgPT4ge1xyXG4gIHZhbGlkRXZlbnRzLmZvckVhY2goKGV2ZW50TmFtZSkgPT4ge1xyXG4gICAgY29uc3QgZXZlbnRFbWl0dGVyOiBFdmVudEVtaXR0ZXI8YW55PiA9IGN0eFtldmVudE5hbWVdO1xyXG4gICAgaWYgKGV2ZW50RW1pdHRlci5vYnNlcnZlcnMubGVuZ3RoID4gMCkge1xyXG4gICAgICBpZiAoZXZlbnROYW1lID09PSAnb25Jbml0Jykge1xyXG4gICAgICAgIGN0eC5uZ1pvbmUucnVuKCgpID0+IGV2ZW50RW1pdHRlci5lbWl0KHsgZXZlbnQ6IGluaXRFdmVudCwgZWRpdG9yIH0pKTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBlZGl0b3Iub24oZXZlbnROYW1lLnN1YnN0cmluZygyKSwgY3R4Lm5nWm9uZS5ydW4oKCkgPT4gKGV2ZW50OiBhbnkpID0+IGV2ZW50RW1pdHRlci5lbWl0KHsgZXZlbnQsIGVkaXRvciB9KSkpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfSk7XHJcbn07XHJcblxyXG5sZXQgdW5pcXVlID0gMDtcclxuXHJcbmV4cG9ydCBjb25zdCB1dWlkID0gKHByZWZpeDogc3RyaW5nKTogc3RyaW5nID0+IHtcclxuICBjb25zdCBkYXRlID0gbmV3IERhdGUoKTtcclxuICBjb25zdCB0aW1lID0gZGF0ZS5nZXRUaW1lKCk7XHJcbiAgY29uc3QgcmFuZG9tID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMTAwMDAwMDAwMCk7XHJcblxyXG4gIHVuaXF1ZSsrO1xyXG5cclxuICByZXR1cm4gcHJlZml4ICsgJ18nICsgcmFuZG9tICsgdW5pcXVlICsgU3RyaW5nKHRpbWUpO1xyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IGlzVGV4dGFyZWEgPSAoZWxlbWVudD86IEVsZW1lbnQpOiBlbGVtZW50IGlzIEhUTUxUZXh0QXJlYUVsZW1lbnQgPT4ge1xyXG4gIHJldHVybiB0eXBlb2YgZWxlbWVudCAhPT0gJ3VuZGVmaW5lZCcgJiYgZWxlbWVudC50YWdOYW1lLnRvTG93ZXJDYXNlKCkgPT09ICd0ZXh0YXJlYSc7XHJcbn07XHJcblxyXG5jb25zdCBub3JtYWxpemVQbHVnaW5BcnJheSA9IChwbHVnaW5zPzogc3RyaW5nIHwgc3RyaW5nW10pOiBzdHJpbmdbXSA9PiB7XHJcbiAgaWYgKHR5cGVvZiBwbHVnaW5zID09PSAndW5kZWZpbmVkJyB8fCBwbHVnaW5zID09PSAnJykge1xyXG4gICAgcmV0dXJuIFtdO1xyXG4gIH1cclxuXHJcbiAgcmV0dXJuIEFycmF5LmlzQXJyYXkocGx1Z2lucykgPyBwbHVnaW5zIDogcGx1Z2lucy5zcGxpdCgnICcpO1xyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IG1lcmdlUGx1Z2lucyA9IChpbml0UGx1Z2luczogc3RyaW5nIHwgc3RyaW5nW10sIGlucHV0UGx1Z2lucz86IHN0cmluZyB8IHN0cmluZ1tdKSA9PlxyXG4gIG5vcm1hbGl6ZVBsdWdpbkFycmF5KGluaXRQbHVnaW5zKS5jb25jYXQobm9ybWFsaXplUGx1Z2luQXJyYXkoaW5wdXRQbHVnaW5zKSk7XHJcbiIsIi8qKlxyXG4gKiBDb3B5cmlnaHQgKGMpIDIwMTctcHJlc2VudCwgRXBob3gsIEluYy5cclxuICpcclxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIDIgbGljZW5zZSBmb3VuZCBpbiB0aGVcclxuICogTElDRU5TRSBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLlxyXG4gKlxyXG4gKi9cclxuXHJcbmltcG9ydCB7IHV1aWQgfSBmcm9tICcuL1V0aWxzJztcclxuXHJcbmV4cG9ydCB0eXBlIGNhbGxiYWNrRm4gPSAoKSA9PiB2b2lkO1xyXG5leHBvcnQgaW50ZXJmYWNlIElTdGF0ZU9iaiB7XHJcbiAgbGlzdGVuZXJzOiBjYWxsYmFja0ZuW107XHJcbiAgc2NyaXB0SWQ6IHN0cmluZztcclxuICBzY3JpcHRMb2FkZWQ6IGJvb2xlYW47XHJcbn1cclxuXHJcbmNvbnN0IGluamVjdFNjcmlwdFRhZyA9IChzY3JpcHRJZDogc3RyaW5nLCBkb2M6IERvY3VtZW50LCB1cmw6IHN0cmluZywgY2FsbGJhY2s6IGNhbGxiYWNrRm4pID0+IHtcclxuICBjb25zdCBzY3JpcHRUYWcgPSBkb2MuY3JlYXRlRWxlbWVudCgnc2NyaXB0Jyk7XHJcbiAgc2NyaXB0VGFnLnR5cGUgPSAnYXBwbGljYXRpb24vamF2YXNjcmlwdCc7XHJcbiAgc2NyaXB0VGFnLmlkID0gc2NyaXB0SWQ7XHJcbiAgc2NyaXB0VGFnLmFkZEV2ZW50TGlzdGVuZXIoJ2xvYWQnLCBjYWxsYmFjayk7XHJcbiAgc2NyaXB0VGFnLnNyYyA9IHVybDtcclxuICBpZiAoZG9jLmhlYWQpIHtcclxuICAgIGRvYy5oZWFkLmFwcGVuZENoaWxkKHNjcmlwdFRhZyk7XHJcbiAgfVxyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IGNyZWF0ZSA9ICgpOiBJU3RhdGVPYmogPT4ge1xyXG4gIHJldHVybiB7XHJcbiAgICBsaXN0ZW5lcnM6IFtdLFxyXG4gICAgc2NyaXB0SWQ6IHV1aWQoJ3Rpbnktc2NyaXB0JyksXHJcbiAgICBzY3JpcHRMb2FkZWQ6IGZhbHNlXHJcbiAgfTtcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBsb2FkID0gKHN0YXRlOiBJU3RhdGVPYmosIGRvYzogRG9jdW1lbnQsIHVybDogc3RyaW5nLCBjYWxsYmFjazogY2FsbGJhY2tGbikgPT4ge1xyXG4gIGlmIChzdGF0ZS5zY3JpcHRMb2FkZWQpIHtcclxuICAgIGNhbGxiYWNrKCk7XHJcbiAgfSBlbHNlIHtcclxuICAgIHN0YXRlLmxpc3RlbmVycy5wdXNoKGNhbGxiYWNrKTtcclxuICAgIGlmICghZG9jLmdldEVsZW1lbnRCeUlkKHN0YXRlLnNjcmlwdElkKSkge1xyXG4gICAgICBpbmplY3RTY3JpcHRUYWcoc3RhdGUuc2NyaXB0SWQsIGRvYywgdXJsLCAoKSA9PiB7XHJcbiAgICAgICAgc3RhdGUubGlzdGVuZXJzLmZvckVhY2goKGZuKSA9PiBmbigpKTtcclxuICAgICAgICBzdGF0ZS5zY3JpcHRMb2FkZWQgPSB0cnVlO1xyXG4gICAgICB9KTtcclxuICAgIH1cclxuICB9XHJcbn07XHJcbiIsIi8qKlxyXG4gKiBDb3B5cmlnaHQgKGMpIDIwMTctcHJlc2VudCwgRXBob3gsIEluYy5cclxuICpcclxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIDIgbGljZW5zZSBmb3VuZCBpbiB0aGVcclxuICogTElDRU5TRSBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLlxyXG4gKlxyXG4gKi9cclxuXHJcbmNvbnN0IGdldFRpbnltY2UgPSAoKSA9PiB7XHJcbiAgY29uc3QgdyA9IHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnID8gKHdpbmRvdyBhcyBhbnkpIDogdW5kZWZpbmVkO1xyXG4gIHJldHVybiB3ICYmIHcudGlueW1jZSA/IHcudGlueW1jZSA6IG51bGw7XHJcbn07XHJcblxyXG5leHBvcnQgeyBnZXRUaW55bWNlIH07XHJcbiIsImltcG9ydCB7IENvbXBvbmVudCwgQWZ0ZXJWaWV3SW5pdCwgSW5wdXQsIEVsZW1lbnRSZWYsIE9uRGVzdHJveSwgZm9yd2FyZFJlZiwgTmdab25lLCBJbmplY3QsIFBMQVRGT1JNX0lEIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IENvbnRyb2xWYWx1ZUFjY2Vzc29yLCBOR19WQUxVRV9BQ0NFU1NPUiB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcclxuXHJcbmltcG9ydCAqIGFzIFNjcmlwdExvYWRlciBmcm9tICcuLi91dGlscy9TY3JpcHRMb2FkZXInO1xyXG5pbXBvcnQgeyB1dWlkLCBpc1RleHRhcmVhLCBiaW5kSGFuZGxlcnMsIG1lcmdlUGx1Z2lucyB9IGZyb20gJy4uL3V0aWxzL1V0aWxzJztcclxuaW1wb3J0IHsgZ2V0VGlueW1jZSB9IGZyb20gJy4uL1RpbnlNQ0UnO1xyXG5pbXBvcnQgeyBFdmVudHMgfSBmcm9tICcuL0V2ZW50cyc7XHJcbmltcG9ydCB7IGlzUGxhdGZvcm1Ccm93c2VyIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcclxuXHJcbmNvbnN0IHNjcmlwdFN0YXRlID0gU2NyaXB0TG9hZGVyLmNyZWF0ZSgpO1xyXG5cclxuY29uc3QgRURJVE9SX0NPTVBPTkVOVF9WQUxVRV9BQ0NFU1NPUiA9IHtcclxuICBwcm92aWRlOiBOR19WQUxVRV9BQ0NFU1NPUixcclxuICB1c2VFeGlzdGluZzogZm9yd2FyZFJlZigoKSA9PiBFZGl0b3JDb21wb25lbnQpLFxyXG4gIG11bHRpOiB0cnVlXHJcbn07XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ2VkaXRvcicsXHJcbiAgdGVtcGxhdGU6ICc8bmctdGVtcGxhdGU+PC9uZy10ZW1wbGF0ZT4nLFxyXG4gIHN0eWxlczogWyc6aG9zdCB7IGRpc3BsYXk6IGJsb2NrOyB9J10sXHJcbiAgcHJvdmlkZXJzOiBbRURJVE9SX0NPTVBPTkVOVF9WQUxVRV9BQ0NFU1NPUl1cclxufSlcclxuZXhwb3J0IGNsYXNzIEVkaXRvckNvbXBvbmVudCBleHRlbmRzIEV2ZW50cyBpbXBsZW1lbnRzIEFmdGVyVmlld0luaXQsIENvbnRyb2xWYWx1ZUFjY2Vzc29yLCBPbkRlc3Ryb3kge1xyXG4gIHByaXZhdGUgZWxlbWVudFJlZjogRWxlbWVudFJlZjtcclxuICBwcml2YXRlIGVsZW1lbnQ6IEVsZW1lbnQgfCB1bmRlZmluZWQgPSB1bmRlZmluZWQ7XHJcbiAgcHJpdmF0ZSBlZGl0b3I6IGFueTtcclxuXHJcbiAgbmdab25lOiBOZ1pvbmU7XHJcblxyXG4gIEBJbnB1dCgpIGNsb3VkQ2hhbm5lbDogc3RyaW5nIHwgdW5kZWZpbmVkO1xyXG4gIEBJbnB1dCgpIGFwaUtleTogc3RyaW5nIHwgdW5kZWZpbmVkO1xyXG4gIEBJbnB1dCgpIGluaXQ6IHsgW2tleTogc3RyaW5nXTogYW55IH0gfCB1bmRlZmluZWQ7XHJcbiAgQElucHV0KCkgaWQgPSAnJztcclxuICBASW5wdXQoKSBpbml0aWFsVmFsdWU6IHN0cmluZyB8IHVuZGVmaW5lZDtcclxuICBASW5wdXQoKSBpbmxpbmU6IGJvb2xlYW4gfCB1bmRlZmluZWQ7XHJcbiAgQElucHV0KCkgdGFnTmFtZTogc3RyaW5nIHwgdW5kZWZpbmVkO1xyXG4gIEBJbnB1dCgpIHBsdWdpbnM6IHN0cmluZyB8IHVuZGVmaW5lZDtcclxuICBASW5wdXQoKSB0b29sYmFyOiBzdHJpbmcgfCBzdHJpbmdbXSB8IG51bGwgPSBudWxsO1xyXG5cclxuICBwcml2YXRlIF9kaXNhYmxlZDogYm9vbGVhbiB8IHVuZGVmaW5lZDtcclxuICBASW5wdXQoKVxyXG4gIHNldCBkaXNhYmxlZCh2YWwpIHtcclxuICAgIHRoaXMuX2Rpc2FibGVkID0gdmFsO1xyXG4gICAgaWYgKHRoaXMuZWRpdG9yICYmIHRoaXMuZWRpdG9yLmluaXRpYWxpemVkKSB7XHJcbiAgICAgIHRoaXMuZWRpdG9yLnNldE1vZGUodmFsID8gJ3JlYWRvbmx5JyA6ICdkZXNpZ24nKTtcclxuICAgIH1cclxuICB9XHJcbiAgZ2V0IGRpc2FibGVkKCkge1xyXG4gICAgcmV0dXJuIHRoaXMuX2Rpc2FibGVkO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBvblRvdWNoZWRDYWxsYmFjayA9ICgpID0+IHt9O1xyXG4gIHByaXZhdGUgb25DaGFuZ2VDYWxsYmFjayA9ICh4OiBhbnkpID0+IHt9O1xyXG5cclxuICBjb25zdHJ1Y3RvcihlbGVtZW50UmVmOiBFbGVtZW50UmVmLCBuZ1pvbmU6IE5nWm9uZSwgQEluamVjdChQTEFURk9STV9JRCkgcHJpdmF0ZSBwbGF0Zm9ybUlkOiBPYmplY3QpIHtcclxuICAgIHN1cGVyKCk7XHJcbiAgICB0aGlzLmVsZW1lbnRSZWYgPSBlbGVtZW50UmVmO1xyXG4gICAgdGhpcy5uZ1pvbmUgPSBuZ1pvbmU7XHJcbiAgICB0aGlzLmluaXRpYWxpc2UgPSB0aGlzLmluaXRpYWxpc2UuYmluZCh0aGlzKTtcclxuICB9XHJcblxyXG4gIHdyaXRlVmFsdWUodmFsdWU6IHN0cmluZyB8IG51bGwpOiB2b2lkIHtcclxuICAgIHRoaXMuaW5pdGlhbFZhbHVlID0gdmFsdWUgfHwgdGhpcy5pbml0aWFsVmFsdWU7XHJcblxyXG4gICAgaWYgKHRoaXMuZWRpdG9yICYmIHRoaXMuZWRpdG9yLmluaXRpYWxpemVkICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ3N0cmluZycpIHtcclxuICAgICAgdGhpcy5lZGl0b3Iuc2V0Q29udGVudCh2YWx1ZSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICByZWdpc3Rlck9uQ2hhbmdlKGZuOiAoXzogYW55KSA9PiB2b2lkKTogdm9pZCB7XHJcbiAgICB0aGlzLm9uQ2hhbmdlQ2FsbGJhY2sgPSBmbjtcclxuICB9XHJcblxyXG4gIHJlZ2lzdGVyT25Ub3VjaGVkKGZuOiBhbnkpOiB2b2lkIHtcclxuICAgIHRoaXMub25Ub3VjaGVkQ2FsbGJhY2sgPSBmbjtcclxuICB9XHJcblxyXG4gIHNldERpc2FibGVkU3RhdGUoaXNEaXNhYmxlZDogYm9vbGVhbikge1xyXG4gICAgaWYgKHRoaXMuZWRpdG9yKSB7XHJcbiAgICAgIHRoaXMuZWRpdG9yLnNldE1vZGUoaXNEaXNhYmxlZCA/ICdyZWFkb25seScgOiAnZGVzaWduJyk7XHJcbiAgICB9IGVsc2UgaWYgKGlzRGlzYWJsZWQpIHtcclxuICAgICAgdGhpcy5pbml0ID0geyAuLi50aGlzLmluaXQsIHJlYWRvbmx5OiB0cnVlIH07XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBuZ0FmdGVyVmlld0luaXQoKSB7XHJcbiAgICBpZiAoaXNQbGF0Zm9ybUJyb3dzZXIodGhpcy5wbGF0Zm9ybUlkKSkge1xyXG4gICAgICB0aGlzLmlkID0gdGhpcy5pZCB8fCB1dWlkKCd0aW55LWFuZ3VsYXInKTtcclxuICAgICAgdGhpcy5pbmxpbmUgPVxyXG4gICAgICAgIHR5cGVvZiB0aGlzLmlubGluZSAhPT0gJ3VuZGVmaW5lZCcgPyAodHlwZW9mIHRoaXMuaW5saW5lID09PSAnYm9vbGVhbicgPyB0aGlzLmlubGluZSA6IHRydWUpIDogdGhpcy5pbml0ICYmIHRoaXMuaW5pdC5pbmxpbmU7XHJcbiAgICAgIHRoaXMuY3JlYXRlRWxlbWVudCgpO1xyXG4gICAgICBpZiAoZ2V0VGlueW1jZSgpICE9PSBudWxsKSB7XHJcbiAgICAgICAgdGhpcy5pbml0aWFsaXNlKCk7XHJcbiAgICAgIH0gZWxzZSBpZiAodGhpcy5lbGVtZW50ICYmIHRoaXMuZWxlbWVudC5vd25lckRvY3VtZW50KSB7XHJcbiAgICAgICAgY29uc3QgZG9jID0gdGhpcy5lbGVtZW50Lm93bmVyRG9jdW1lbnQ7XHJcbiAgICAgICAgY29uc3QgY2hhbm5lbCA9IHRoaXMuY2xvdWRDaGFubmVsIHx8ICdzdGFibGUnO1xyXG4gICAgICAgIGNvbnN0IGFwaUtleSA9IHRoaXMuYXBpS2V5IHx8ICcnO1xyXG5cclxuICAgICAgICBTY3JpcHRMb2FkZXIubG9hZChzY3JpcHRTdGF0ZSwgZG9jLCBgaHR0cHM6Ly9jbG91ZC50aW55bWNlLmNvbS8ke2NoYW5uZWx9L3RpbnltY2UubWluLmpzP2FwaUtleT0ke2FwaUtleX1gLCB0aGlzLmluaXRpYWxpc2UpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBuZ09uRGVzdHJveSgpIHtcclxuICAgIGlmIChnZXRUaW55bWNlKCkgIT09IG51bGwpIHtcclxuICAgICAgZ2V0VGlueW1jZSgpLnJlbW92ZSh0aGlzLmVkaXRvcik7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBjcmVhdGVFbGVtZW50KCkge1xyXG4gICAgY29uc3QgdGFnTmFtZSA9IHR5cGVvZiB0aGlzLnRhZ05hbWUgPT09ICdzdHJpbmcnID8gdGhpcy50YWdOYW1lIDogJ2Rpdic7XHJcbiAgICB0aGlzLmVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KHRoaXMuaW5saW5lID8gdGFnTmFtZSA6ICd0ZXh0YXJlYScpO1xyXG4gICAgaWYgKHRoaXMuZWxlbWVudCkge1xyXG4gICAgICB0aGlzLmVsZW1lbnQuaWQgPSB0aGlzLmlkO1xyXG4gICAgICBpZiAoaXNUZXh0YXJlYSh0aGlzLmVsZW1lbnQpKSB7XHJcbiAgICAgICAgdGhpcy5lbGVtZW50LnN0eWxlLnZpc2liaWxpdHkgPSAnaGlkZGVuJztcclxuICAgICAgfVxyXG4gICAgICB0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudC5hcHBlbmRDaGlsZCh0aGlzLmVsZW1lbnQpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgaW5pdGlhbGlzZSgpIHtcclxuICAgIGNvbnN0IGZpbmFsSW5pdCA9IHtcclxuICAgICAgLi4udGhpcy5pbml0LFxyXG4gICAgICB0YXJnZXQ6IHRoaXMuZWxlbWVudCxcclxuICAgICAgaW5saW5lOiB0aGlzLmlubGluZSxcclxuICAgICAgcmVhZG9ubHk6IHRoaXMuZGlzYWJsZWQsXHJcbiAgICAgIHBsdWdpbnM6IG1lcmdlUGx1Z2lucyh0aGlzLmluaXQgJiYgdGhpcy5pbml0LnBsdWdpbnMsIHRoaXMucGx1Z2lucyksXHJcbiAgICAgIHRvb2xiYXI6IHRoaXMudG9vbGJhciB8fCAodGhpcy5pbml0ICYmIHRoaXMuaW5pdC50b29sYmFyKSxcclxuICAgICAgc2V0dXA6IChlZGl0b3I6IGFueSkgPT4ge1xyXG4gICAgICAgIHRoaXMuZWRpdG9yID0gZWRpdG9yO1xyXG4gICAgICAgIGVkaXRvci5vbignaW5pdCcsIChlOiBFdmVudCkgPT4ge1xyXG4gICAgICAgICAgdGhpcy5pbml0RWRpdG9yKGUsIGVkaXRvcik7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIGlmICh0aGlzLmluaXQgJiYgdHlwZW9mIHRoaXMuaW5pdC5zZXR1cCA9PT0gJ2Z1bmN0aW9uJykge1xyXG4gICAgICAgICAgdGhpcy5pbml0LnNldHVwKGVkaXRvcik7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9O1xyXG5cclxuICAgIGlmIChpc1RleHRhcmVhKHRoaXMuZWxlbWVudCkpIHtcclxuICAgICAgdGhpcy5lbGVtZW50LnN0eWxlLnZpc2liaWxpdHkgPSAnJztcclxuICAgIH1cclxuXHJcbiAgICB0aGlzLm5nWm9uZS5ydW5PdXRzaWRlQW5ndWxhcigoKSA9PiB7XHJcbiAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgIGdldFRpbnltY2UoKS5pbml0KGZpbmFsSW5pdCk7XHJcbiAgICAgIH0pO1xyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGluaXRFZGl0b3IoaW5pdEV2ZW50OiBFdmVudCwgZWRpdG9yOiBhbnkpIHtcclxuICAgIGlmICh0eXBlb2YgdGhpcy5pbml0aWFsVmFsdWUgPT09ICdzdHJpbmcnKSB7XHJcbiAgICAgIHRoaXMubmdab25lLnJ1bigoKSA9PiBlZGl0b3Iuc2V0Q29udGVudCh0aGlzLmluaXRpYWxWYWx1ZSkpO1xyXG4gICAgfVxyXG4gICAgZWRpdG9yLm9uY2UoJ2JsdXInLCAoKSA9PiB0aGlzLm5nWm9uZS5ydW4oKCkgPT4gdGhpcy5vblRvdWNoZWRDYWxsYmFjaygpKSk7XHJcbiAgICBlZGl0b3Iub24oXHJcbiAgICAgICdzZXRjb250ZW50JyxcclxuICAgICAgKHsgY29udGVudCwgZm9ybWF0IH06IGFueSkgPT4gZm9ybWF0ID09PSAnaHRtbCcgJiYgY29udGVudCAmJiB0aGlzLm5nWm9uZS5ydW4oKCkgPT4gdGhpcy5vbkNoYW5nZUNhbGxiYWNrKGNvbnRlbnQpKVxyXG4gICAgKTtcclxuICAgIGVkaXRvci5vbignY2hhbmdlIGtleXVwIHVuZG8gcmVkbycsICgpID0+IHRoaXMubmdab25lLnJ1bigoKSA9PiB0aGlzLm9uQ2hhbmdlQ2FsbGJhY2soZWRpdG9yLmdldENvbnRlbnQoKSkpKTtcclxuICAgIGJpbmRIYW5kbGVycyh0aGlzLCBlZGl0b3IsIGluaXRFdmVudCk7XHJcbiAgfVxyXG59XHJcbiIsImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XHJcbmltcG9ydCB7IEZvcm1zTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xyXG5cclxuaW1wb3J0IHsgRWRpdG9yQ29tcG9uZW50IH0gZnJvbSAnLi9lZGl0b3IuY29tcG9uZW50JztcclxuXHJcbkBOZ01vZHVsZSh7XHJcbiAgaW1wb3J0czogW0NvbW1vbk1vZHVsZSwgRm9ybXNNb2R1bGVdLFxyXG4gIGRlY2xhcmF0aW9uczogW0VkaXRvckNvbXBvbmVudF0sXHJcbiAgZXhwb3J0czogW0VkaXRvckNvbXBvbmVudF1cclxufSlcclxuZXhwb3J0IGNsYXNzIEVkaXRvck1vZHVsZSB7fVxyXG4iXSwibmFtZXMiOlsiRXZlbnRFbWl0dGVyIiwiT3V0cHV0IiwiU2NyaXB0TG9hZGVyLmNyZWF0ZSIsIk5HX1ZBTFVFX0FDQ0VTU09SIiwiZm9yd2FyZFJlZiIsInRzbGliXzEuX19leHRlbmRzIiwiaXNQbGF0Zm9ybUJyb3dzZXIiLCJTY3JpcHRMb2FkZXIubG9hZCIsIkNvbXBvbmVudCIsIkVsZW1lbnRSZWYiLCJOZ1pvbmUiLCJJbmplY3QiLCJQTEFURk9STV9JRCIsIklucHV0IiwiTmdNb2R1bGUiLCJDb21tb25Nb2R1bGUiLCJGb3Jtc01vZHVsZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7O0lBQUE7Ozs7Ozs7Ozs7Ozs7O0lBY0E7SUFFQSxJQUFJLGFBQWEsR0FBRyxNQUFNLENBQUMsY0FBYztTQUNwQyxFQUFFLFNBQVMsRUFBRSxFQUFFLEVBQUUsWUFBWSxLQUFLLElBQUksVUFBVSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsQ0FBQyxTQUFTLEdBQUcsQ0FBQyxDQUFDLEVBQUUsQ0FBQztRQUM1RSxVQUFVLENBQUMsRUFBRSxDQUFDLElBQUksS0FBSyxJQUFJLENBQUMsSUFBSSxDQUFDO1lBQUUsSUFBSSxDQUFDLENBQUMsY0FBYyxDQUFDLENBQUMsQ0FBQztnQkFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLEdB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