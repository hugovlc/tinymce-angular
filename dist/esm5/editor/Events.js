/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { Output, EventEmitter } from '@angular/core';
/**
 * @record
 * @template T
 */
export function EventObj() { }
function EventObj_tsickle_Closure_declarations() {
    /** @type {?} */
    EventObj.prototype.event;
    /** @type {?} */
    EventObj.prototype.editor;
}
var Events = /** @class */ (function () {
    function Events() {
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
    return Events;
}());
export { Events };
function Events_tsickle_Closure_declarations() {
    /** @type {!Object<string,!Array<{type: !Function, args: (undefined|!Array<?>)}>>} */
    Events.propDecorators;
    /** @type {?} */
    Events.prototype.onBeforePaste;
    /** @type {?} */
    Events.prototype.onBlur;
    /** @type {?} */
    Events.prototype.onClick;
    /** @type {?} */
    Events.prototype.onContextMenu;
    /** @type {?} */
    Events.prototype.onCopy;
    /** @type {?} */
    Events.prototype.onCut;
    /** @type {?} */
    Events.prototype.onDblclick;
    /** @type {?} */
    Events.prototype.onDrag;
    /** @type {?} */
    Events.prototype.onDragDrop;
    /** @type {?} */
    Events.prototype.onDragEnd;
    /** @type {?} */
    Events.prototype.onDragGesture;
    /** @type {?} */
    Events.prototype.onDragOver;
    /** @type {?} */
    Events.prototype.onDrop;
    /** @type {?} */
    Events.prototype.onFocus;
    /** @type {?} */
    Events.prototype.onFocusIn;
    /** @type {?} */
    Events.prototype.onFocusOut;
    /** @type {?} */
    Events.prototype.onKeyDown;
    /** @type {?} */
    Events.prototype.onKeyPress;
    /** @type {?} */
    Events.prototype.onKeyUp;
    /** @type {?} */
    Events.prototype.onMouseDown;
    /** @type {?} */
    Events.prototype.onMouseEnter;
    /** @type {?} */
    Events.prototype.onMouseLeave;
    /** @type {?} */
    Events.prototype.onMouseMove;
    /** @type {?} */
    Events.prototype.onMouseOut;
    /** @type {?} */
    Events.prototype.onMouseOver;
    /** @type {?} */
    Events.prototype.onMouseUp;
    /** @type {?} */
    Events.prototype.onPaste;
    /** @type {?} */
    Events.prototype.onSelectionChange;
    /** @type {?} */
    Events.prototype.onActivate;
    /** @type {?} */
    Events.prototype.onAddUndo;
    /** @type {?} */
    Events.prototype.onBeforeAddUndo;
    /** @type {?} */
    Events.prototype.onBeforeExecCommand;
    /** @type {?} */
    Events.prototype.onBeforeGetContent;
    /** @type {?} */
    Events.prototype.onBeforeRenderUI;
    /** @type {?} */
    Events.prototype.onBeforeSetContent;
    /** @type {?} */
    Events.prototype.onChange;
    /** @type {?} */
    Events.prototype.onClearUndos;
    /** @type {?} */
    Events.prototype.onDeactivate;
    /** @type {?} */
    Events.prototype.onDirty;
    /** @type {?} */
    Events.prototype.onExecCommand;
    /** @type {?} */
    Events.prototype.onGetContent;
    /** @type {?} */
    Events.prototype.onHide;
    /** @type {?} */
    Events.prototype.onInit;
    /** @type {?} */
    Events.prototype.onLoadContent;
    /** @type {?} */
    Events.prototype.onNodeChange;
    /** @type {?} */
    Events.prototype.onPostProcess;
    /** @type {?} */
    Events.prototype.onPostRender;
    /** @type {?} */
    Events.prototype.onPreInit;
    /** @type {?} */
    Events.prototype.onPreProcess;
    /** @type {?} */
    Events.prototype.onProgressState;
    /** @type {?} */
    Events.prototype.onRedo;
    /** @type {?} */
    Events.prototype.onRemove;
    /** @type {?} */
    Events.prototype.onReset;
    /** @type {?} */
    Events.prototype.onSaveContent;
    /** @type {?} */
    Events.prototype.onSetAttrib;
    /** @type {?} */
    Events.prototype.onObjectResizeStart;
    /** @type {?} */
    Events.prototype.onObjectResized;
    /** @type {?} */
    Events.prototype.onObjectSelected;
    /** @type {?} */
    Events.prototype.onSetContent;
    /** @type {?} */
    Events.prototype.onShow;
    /** @type {?} */
    Events.prototype.onSubmit;
    /** @type {?} */
    Events.prototype.onUndo;
    /** @type {?} */
    Events.prototype.onVisualAid;
}
export var /** @type {?} */ validEvents = [
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRXZlbnRzLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHRpbnltY2UvdGlueW1jZS1hbmd1bGFyLyIsInNvdXJjZXMiOlsiZWRpdG9yL0V2ZW50cy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLE1BQU0sRUFBRSxZQUFZLEVBQUUsTUFBTSxlQUFlLENBQUM7Ozs7Ozs7Ozs7Ozs7OzZCQVFlLElBQUksWUFBWSxFQUFFO3NCQUM3QixJQUFJLFlBQVksRUFBRTt1QkFDakIsSUFBSSxZQUFZLEVBQUU7NkJBQ1osSUFBSSxZQUFZLEVBQUU7c0JBQ3JCLElBQUksWUFBWSxFQUFFO3FCQUNuQixJQUFJLFlBQVksRUFBRTswQkFDakIsSUFBSSxZQUFZLEVBQUU7c0JBQ3ZCLElBQUksWUFBWSxFQUFFOzBCQUNkLElBQUksWUFBWSxFQUFFO3lCQUNuQixJQUFJLFlBQVksRUFBRTs2QkFDZCxJQUFJLFlBQVksRUFBRTswQkFDckIsSUFBSSxZQUFZLEVBQUU7c0JBQ3RCLElBQUksWUFBWSxFQUFFO3VCQUNoQixJQUFJLFlBQVksRUFBRTt5QkFDaEIsSUFBSSxZQUFZLEVBQUU7MEJBQ2pCLElBQUksWUFBWSxFQUFFO3lCQUNoQixJQUFJLFlBQVksRUFBRTswQkFDakIsSUFBSSxZQUFZLEVBQUU7dUJBQ3JCLElBQUksWUFBWSxFQUFFOzJCQUNqQixJQUFJLFlBQVksRUFBRTs0QkFDakIsSUFBSSxZQUFZLEVBQUU7NEJBQ2xCLElBQUksWUFBWSxFQUFFOzJCQUNuQixJQUFJLFlBQVksRUFBRTswQkFDbkIsSUFBSSxZQUFZLEVBQUU7MkJBQ2pCLElBQUksWUFBWSxFQUFFO3lCQUNwQixJQUFJLFlBQVksRUFBRTt1QkFDaEIsSUFBSSxZQUFZLEVBQUU7aUNBQ2pCLElBQUksWUFBWSxFQUFFOzBCQUMzQixJQUFJLFlBQVksRUFBRTt5QkFDbkIsSUFBSSxZQUFZLEVBQUU7K0JBQ1osSUFBSSxZQUFZLEVBQUU7bUNBQ2QsSUFBSSxZQUFZLEVBQUU7a0NB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WixRQUFRO0lBQ1IsZUFBZTtJQUNmLFNBQVM7SUFDVCxXQUFXO0lBQ1gsWUFBWTtJQUNaLGNBQWM7SUFDZCxRQUFRO0lBQ1IsUUFBUTtJQUNSLFdBQVc7SUFDWCxZQUFZO0lBQ1osU0FBUztJQUNULGVBQWU7SUFDZixhQUFhO0lBQ2IsY0FBYztJQUNkLGNBQWM7SUFDZCxhQUFhO0lBQ2IsWUFBWTtJQUNaLGFBQWE7SUFDYixXQUFXO0lBQ1gsY0FBYztJQUNkLHFCQUFxQjtJQUNyQixpQkFBaUI7SUFDakIsa0JBQWtCO0lBQ2xCLFNBQVM7SUFDVCxlQUFlO0lBQ2YsY0FBYztJQUNkLGNBQWM7SUFDZCxpQkFBaUI7SUFDakIsUUFBUTtJQUNSLFVBQVU7SUFDVixTQUFTO0lBQ1QsZUFBZTtJQUNmLG1CQUFtQjtJQUNuQixhQUFhO0lBQ2IsY0FBYztJQUNkLFFBQVE7SUFDUixVQUFVO0lBQ1YsUUFBUTtJQUNSLGFBQWE7Q0FDZCxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgT3V0cHV0LCBFdmVudEVtaXR0ZXIgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgRXZlbnRPYmo8VD4ge1xyXG4gIGV2ZW50OiBUO1xyXG4gIGVkaXRvcjogYW55O1xyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgRXZlbnRzIHtcclxuICBAT3V0cHV0KCkgb25CZWZvcmVQYXN0ZTogRXZlbnRFbWl0dGVyPEV2ZW50T2JqPENsaXBib2FyZEV2ZW50Pj4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XHJcbiAgQE91dHB1dCgpIG9uQmx1cjogRXZlbnRFbWl0dGVyPEV2ZW50T2JqPEZvY3VzRXZlbnQ+PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcclxuICBAT3V0cHV0KCkgb25DbGljazogRXZlbnRFbWl0dGVyPEV2ZW50T2JqPE1vdXNlRXZlbnQ+PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcclxuICBAT3V0cHV0KCkgb25Db250ZXh0TWVudTogRXZlbnRFbWl0dGVyPEV2ZW50T2JqPE1vdXNlRXZlbnQ+PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcclxuICBAT3V0cHV0KCkgb25Db3B5OiBFdmVudEVtaXR0ZXI8RXZlbnRPYmo8Q2xpcGJvYXJkRXZlbnQ+PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcclxuICBAT3V0cHV0KCkgb25DdXQ6IEV2ZW50RW1pdHRlcjxFdmVudE9iajxDbGlwYm9hcmRFdmVudD4+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xyXG4gIEBPdXRwdXQoKSBvbkRibGNsaWNrOiBFdmVudEVtaXR0ZXI8RXZlbnRPYmo8TW91c2VFdmVudD4+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xyXG4gIEBPdXRwdXQoKSBvbkRyYWc6IEV2ZW50RW1pdHRlcjxFdmVudE9iajxEcmFnRXZlbnQ+PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcclxuICBAT3V0cHV0KCkgb25EcmFnRHJvcDogRXZlbnRFbWl0dGVyPEV2ZW50T2JqPERyYWdFdmVudD4+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xyXG4gIEBPdXRwdXQoKSBvbkRyYWdFbmQ6IEV2ZW50RW1pdHRlcjxFdmVudE9iajxEcmFnRXZlbnQ+PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcclxuICBAT3V0cHV0KCkgb25EcmFnR2VzdHVyZTogRXZlbnRFbWl0dGVyPEV2ZW50T2JqPERyYWdFdmVudD4+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xyXG4gIEBPdXRwdXQoKSBvbkRyYWdPdmVyOiBFdmVudEVtaXR0ZXI8RXZlbnRPYmo8RHJhZ0V2ZW50Pj4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XHJcbiAgQE91dHB1dCgpIG9uRHJvcDogRXZlbnRFbWl0dGVyPEV2ZW50T2JqPERyYWdFdmVudD4+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xyXG4gIEBPdXRwdXQoKSBvbkZvY3VzOiBFdmVudEVtaXR0ZXI8RXZlbnRPYmo8Rm9jdXNFdmVudD4+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xyXG4gIEBPdXRwdXQoKSBvbkZvY3VzSW46IEV2ZW50RW1pdHRlcjxFdmVudE9iajxGb2N1c0V2ZW50Pj4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XHJcbiAgQE91dHB1dCgpIG9uRm9jdXNPdXQ6IEV2ZW50RW1pdHRlcjxFdmVudE9iajxGb2N1c0V2ZW50Pj4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XHJcbiAgQE91dHB1dCgpIG9uS2V5RG93bjogRXZlbnRFbWl0dGVyPEV2ZW50T2JqPEtleWJvYXJkRXZlbnQ+PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcclxuICBAT3V0cHV0KCkgb25LZXlQcmVzczogRXZlbnRFbWl0dGVyPEV2ZW50T2JqPEtleWJvYXJkRXZlbnQ+PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcclxuICBAT3V0cHV0KCkgb25LZXlVcDogRXZlbnRFbWl0dGVyPEV2ZW50T2JqPEtleWJvYXJkRXZlbnQ+PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcclxuICBAT3V0cHV0KCkgb25Nb3VzZURvd246IEV2ZW50RW1pdHRlcjxFdmVudE9iajxNb3VzZUV2ZW50Pj4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XHJcbiAgQE91dHB1dCgpIG9uTW91c2VFbnRlcjogRXZlbnRFbWl0dGVyPEV2ZW50T2JqPE1vdXNlRXZlbnQ+PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcclxuICBAT3V0cHV0KCkgb25Nb3VzZUxlYXZlOiBFdmVudEVtaXR0ZXI8RXZlbnRPYmo8TW91c2VFdmVudD4+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xyXG4gIEBPdXRwdXQoKSBvbk1vdXNlTW92ZTogRXZlbnRFbWl0dGVyPEV2ZW50T2JqPE1vdXNlRXZlbnQ+PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcclxuICBAT3V0cHV0KCkgb25Nb3VzZU91dDogRXZlbnRFbWl0dGVyPEV2ZW50T2JqPE1vdXNlRXZlbnQ+PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcclxuICBAT3V0cHV0KCkgb25Nb3VzZU92ZXI6IEV2ZW50RW1pdHRlcjxFdmVudE9iajxNb3VzZUV2ZW50Pj4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XHJcbiAgQE91dHB1dCgpIG9uTW91c2VVcDogRXZlbnRFbWl0dGVyPEV2ZW50T2JqPE1vdXNlRXZlbnQ+PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcclxuICBAT3V0cHV0KCkgb25QYXN0ZTogRXZlbnRFbWl0dGVyPEV2ZW50T2JqPENsaXBib2FyZEV2ZW50Pj4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XHJcbiAgQE91dHB1dCgpIG9uU2VsZWN0aW9uQ2hhbmdlOiBFdmVudEVtaXR0ZXI8RXZlbnRPYmo8RXZlbnQ+PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcclxuICBAT3V0cHV0KCkgb25BY3RpdmF0ZTogRXZlbnRFbWl0dGVyPEV2ZW50T2JqPGFueT4+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xyXG4gIEBPdXRwdXQoKSBvbkFkZFVuZG86IEV2ZW50RW1pdHRlcjxFdmVudE9iajxhbnk+PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcclxuICBAT3V0cHV0KCkgb25CZWZvcmVBZGRVbmRvOiBFdmVudEVtaXR0ZXI8RXZlbnRPYmo8YW55Pj4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XHJcbiAgQE91dHB1dCgpIG9uQmVmb3JlRXhlY0NvbW1hbmQ6IEV2ZW50RW1pdHRlcjxFdmVudE9iajxhbnk+PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcclxuICBAT3V0cHV0KCkgb25CZWZvcmVHZXRDb250ZW50OiBFdmVudEVtaXR0ZXI8RXZlbnRPYmo8YW55Pj4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XHJcbiAgQE91dHB1dCgpIG9uQmVmb3JlUmVuZGVyVUk6IEV2ZW50RW1pdHRlcjxFdmVudE9iajxhbnk+PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcclxuICBAT3V0cHV0KCkgb25CZWZvcmVTZXRDb250ZW50OiBFdmVudEVtaXR0ZXI8RXZlbnRPYmo8YW55Pj4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XHJcbiAgQE91dHB1dCgpIG9uQ2hhbmdlOiBFdmVudEVtaXR0ZXI8RXZlbnRPYmo8YW55Pj4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XHJcbiAgQE91dHB1dCgpIG9uQ2xlYXJVbmRvczogRXZlbnRFbWl0dGVyPEV2ZW50T2JqPGFueT4+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xyXG4gIEBPdXRwdXQoKSBvbkRlYWN0aXZhdGU6IEV2ZW50RW1pdHRlcjxFdmVudE9iajxhbnk+PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcclxuICBAT3V0cHV0KCkgb25EaXJ0eTogRXZlbnRFbWl0dGVyPEV2ZW50T2JqPGFueT4+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xyXG4gIEBPdXRwdXQoKSBvbkV4ZWNDb21tYW5kOiBFdmVudEVtaXR0ZXI8RXZlbnRPYmo8YW55Pj4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XHJcbiAgQE91dHB1dCgpIG9uR2V0Q29udGVudDogRXZlbnRFbWl0dGVyPEV2ZW50T2JqPGFueT4+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xyXG4gIEBPdXRwdXQoKSBvbkhpZGU6IEV2ZW50RW1pdHRlcjxFdmVudE9iajxhbnk+PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcclxuICBAT3V0cHV0KCkgb25Jbml0OiBFdmVudEVtaXR0ZXI8RXZlbnRPYmo8YW55Pj4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XHJcbiAgQE91dHB1dCgpIG9uTG9hZENvbnRlbnQ6IEV2ZW50RW1pdHRlcjxFdmVudE9iajxhbnk+PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcclxuICBAT3V0cHV0KCkgb25Ob2RlQ2hhbmdlOiBFdmVudEVtaXR0ZXI8RXZlbnRPYmo8YW55Pj4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XHJcbiAgQE91dHB1dCgpIG9uUG9zdFByb2Nlc3M6IEV2ZW50RW1pdHRlcjxFdmVudE9iajxhbnk+PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcclxuICBAT3V0cHV0KCkgb25Qb3N0UmVuZGVyOiBFdmVudEVtaXR0ZXI8RXZlbnRPYmo8YW55Pj4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XHJcbiAgQE91dHB1dCgpIG9uUHJlSW5pdDogRXZlbnRFbWl0dGVyPEV2ZW50T2JqPGFueT4+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xyXG4gIEBPdXRwdXQoKSBvblByZVByb2Nlc3M6IEV2ZW50RW1pdHRlcjxFdmVudE9iajxhbnk+PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcclxuICBAT3V0cHV0KCkgb25Qcm9ncmVzc1N0YXRlOiBFdmVudEVtaXR0ZXI8RXZlbnRPYmo8YW55Pj4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XHJcbiAgQE91dHB1dCgpIG9uUmVkbzogRXZlbnRFbWl0dGVyPEV2ZW50T2JqPGFueT4+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xyXG4gIEBPdXRwdXQoKSBvblJlbW92ZTogRXZlbnRFbWl0dGVyPEV2ZW50T2JqPGFueT4+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xyXG4gIEBPdXRwdXQoKSBvblJlc2V0OiBFdmVudEVtaXR0ZXI8RXZlbnRPYmo8YW55Pj4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XHJcbiAgQE91dHB1dCgpIG9uU2F2ZUNvbnRlbnQ6IEV2ZW50RW1pdHRlcjxFdmVudE9iajxhbnk+PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcclxuICBAT3V0cHV0KCkgb25TZXRBdHRyaWI6IEV2ZW50RW1pdHRlcjxFdmVudE9iajxhbnk+PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcclxuICBAT3V0cHV0KCkgb25PYmplY3RSZXNpemVTdGFydDogRXZlbnRFbWl0dGVyPEV2ZW50T2JqPGFueT4+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xyXG4gIEBPdXRwdXQoKSBvbk9iamVjdFJlc2l6ZWQ6IEV2ZW50RW1pdHRlcjxFdmVudE9iajxhbnk+PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcclxuICBAT3V0cHV0KCkgb25PYmplY3RTZWxlY3RlZDogRXZlbnRFbWl0dGVyPEV2ZW50T2JqPGFueT4+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xyXG4gIEBPdXRwdXQoKSBvblNldENvbnRlbnQ6IEV2ZW50RW1pdHRlcjxFdmVudE9iajxhbnk+PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcclxuICBAT3V0cHV0KCkgb25TaG93OiBFdmVudEVtaXR0ZXI8RXZlbnRPYmo8YW55Pj4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XHJcbiAgQE91dHB1dCgpIG9uU3VibWl0OiBFdmVudEVtaXR0ZXI8RXZlbnRPYmo8YW55Pj4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XHJcbiAgQE91dHB1dCgpIG9uVW5kbzogRXZlbnRFbWl0dGVyPEV2ZW50T2JqPGFueT4+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xyXG4gIEBPdXRwdXQoKSBvblZpc3VhbEFpZDogRXZlbnRFbWl0dGVyPEV2ZW50T2JqPGFueT4+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xyXG59XHJcblxyXG5leHBvcnQgY29uc3QgdmFsaWRFdmVudHM6IChrZXlvZiBFdmVudHMpW10gPSBbXHJcbiAgJ29uQWN0aXZhdGUnLFxyXG4gICdvbkFkZFVuZG8nLFxyXG4gICdvbkJlZm9yZUFkZFVuZG8nLFxyXG4gICdvbkJlZm9yZUV4ZWNDb21tYW5kJyxcclxuICAnb25CZWZvcmVHZXRDb250ZW50JyxcclxuICAnb25CZWZvcmVSZW5kZXJVSScsXHJcbiAgJ29uQmVmb3JlU2V0Q29udGVudCcsXHJcbiAgJ29uQmVmb3JlUGFzdGUnLFxyXG4gICdvbkJsdXInLFxyXG4gICdvbkNoYW5nZScsXHJcbiAgJ29uQ2xlYXJVbmRvcycsXHJcbiAgJ29uQ2xpY2snLFxyXG4gICdvbkNvbnRleHRNZW51JyxcclxuICAnb25Db3B5JyxcclxuICAnb25DdXQnLFxyXG4gICdvbkRibGNsaWNrJyxcclxuICAnb25EZWFjdGl2YXRlJyxcclxuICAnb25EaXJ0eScsXHJcbiAgJ29uRHJhZycsXHJcbiAgJ29uRHJhZ0Ryb3AnLFxyXG4gICdvbkRyYWdFbmQnLFxyXG4gICdvbkRyYWdHZXN0dXJlJyxcclxuICAnb25EcmFnT3ZlcicsXHJcbiAgJ29uRHJvcCcsXHJcbiAgJ29uRXhlY0NvbW1hbmQnLFxyXG4gICdvbkZvY3VzJyxcclxuICAnb25Gb2N1c0luJyxcclxuICAnb25Gb2N1c091dCcsXHJcbiAgJ29uR2V0Q29udGVudCcsXHJcbiAgJ29uSGlkZScsXHJcbiAgJ29uSW5pdCcsXHJcbiAgJ29uS2V5RG93bicsXHJcbiAgJ29uS2V5UHJlc3MnLFxyXG4gICdvbktleVVwJyxcclxuICAnb25Mb2FkQ29udGVudCcsXHJcbiAgJ29uTW91c2VEb3duJyxcclxuICAnb25Nb3VzZUVudGVyJyxcclxuICAnb25Nb3VzZUxlYXZlJyxcclxuICAnb25Nb3VzZU1vdmUnLFxyXG4gICdvbk1vdXNlT3V0JyxcclxuICAnb25Nb3VzZU92ZXInLFxyXG4gICdvbk1vdXNlVXAnLFxyXG4gICdvbk5vZGVDaGFuZ2UnLFxyXG4gICdvbk9iamVjdFJlc2l6ZVN0YXJ0JyxcclxuICAnb25PYmplY3RSZXNpemVkJyxcclxuICAnb25PYmplY3RTZWxlY3RlZCcsXHJcbiAgJ29uUGFzdGUnLFxyXG4gICdvblBvc3RQcm9jZXNzJyxcclxuICAnb25Qb3N0UmVuZGVyJyxcclxuICAnb25QcmVQcm9jZXNzJyxcclxuICAnb25Qcm9ncmVzc1N0YXRlJyxcclxuICAnb25SZWRvJyxcclxuICAnb25SZW1vdmUnLFxyXG4gICdvblJlc2V0JyxcclxuICAnb25TYXZlQ29udGVudCcsXHJcbiAgJ29uU2VsZWN0aW9uQ2hhbmdlJyxcclxuICAnb25TZXRBdHRyaWInLFxyXG4gICdvblNldENvbnRlbnQnLFxyXG4gICdvblNob3cnLFxyXG4gICdvblN1Ym1pdCcsXHJcbiAgJ29uVW5kbycsXHJcbiAgJ29uVmlzdWFsQWlkJ1xyXG5dO1xyXG4iXX0=