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
export class Events {
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
export const /** @type {?} */ validEvents = [
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRXZlbnRzLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHRpbnltY2UvdGlueW1jZS1hbmd1bGFyLyIsInNvdXJjZXMiOlsiZWRpdG9yL0V2ZW50cy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLE1BQU0sRUFBRSxZQUFZLEVBQUUsTUFBTSxlQUFlLENBQUM7Ozs7Ozs7Ozs7OztBQU9yRCxNQUFNOzs2QkFDOEQsSUFBSSxZQUFZLEVBQUU7c0JBQzdCLElBQUksWUFBWSxFQUFFO3VCQUNqQixJQUFJLFlBQVksRUFBRTs2QkFDWixJQUFJLFlBQVksRUFBRTtzQkFDckIsSUFBSSxZQUFZLEVBQUU7cUJBQ25CLElBQUksWUFBWSxFQUFFOzBCQUNqQixJQUFJLFlBQVksRUFBRTtzQkFDdkIsSUFBSSxZQUFZLEVBQUU7MEJBQ2QsSUFBSSxZQUFZLEVBQUU7eUJBQ25CLElBQUksWUFBWSxFQUFFOzZCQUNkLElBQUksWUFBWSxFQUFFOzBCQUNyQixJQUFJLFlBQVksRUFBRTtzQkFDdEIsSUFBSSxZQUFZLEVBQUU7dUJBQ2hCLElBQUksWUFBWSxFQUFFO3lCQUNoQixJQUFJLFlBQVksRUFBRTswQkFDakIsSUFBSSxZQUFZLEVBQUU7eUJBQ2hCLElBQUksWUFBWSxFQUFFOzBCQUNqQixJQUFJLFlBQVksRUFBRTt1QkFDckIsSUFBSSxZQUFZLEVBQUU7MkJBQ2pCLElBQUksWUFBWSxFQUFFOzRCQUNqQixJQUFJLFlBQVksRUFBRTs0QkFDbEIsSUFBSSxZQUFZLEVBQUU7MkJBQ25CLElBQUksWUFBWSxFQUFFOzBCQUNuQixJQUFJLFlBQVksRUFBRTsyQkFDakIsSUFBSSxZQUFZLEVBQUU7eUJBQ3BCLElBQUksWUFBWSxFQUFFO3VCQUNoQixJQUFJLFlBQVksRUFBRTtpQ0FDakIsSUFBSSxZQUFZLEVBQUU7MEJBQzNCLElBQUksWUFBWSxFQUFFO3lCQUNuQixJQUFJLFlBQVksRUFBRTsrQkFDWixJQUFJLFlBQVksRUFBRTttQ0FDZCxJQUFJLFlB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QUNSLGVBQWU7SUFDZixTQUFTO0lBQ1QsV0FBVztJQUNYLFlBQVk7SUFDWixjQUFjO0lBQ2QsUUFBUTtJQUNSLFFBQVE7SUFDUixXQUFXO0lBQ1gsWUFBWTtJQUNaLFNBQVM7SUFDVCxlQUFlO0lBQ2YsYUFBYTtJQUNiLGNBQWM7SUFDZCxjQUFjO0lBQ2QsYUFBYTtJQUNiLFlBQVk7SUFDWixhQUFhO0lBQ2IsV0FBVztJQUNYLGNBQWM7SUFDZCxxQkFBcUI7SUFDckIsaUJBQWlCO0lBQ2pCLGtCQUFrQjtJQUNsQixTQUFTO0lBQ1QsZUFBZTtJQUNmLGNBQWM7SUFDZCxjQUFjO0lBQ2QsaUJBQWlCO0lBQ2pCLFFBQVE7SUFDUixVQUFVO0lBQ1YsU0FBUztJQUNULGVBQWU7SUFDZixtQkFBbUI7SUFDbkIsYUFBYTtJQUNiLGNBQWM7SUFDZCxRQUFRO0lBQ1IsVUFBVTtJQUNWLFFBQVE7SUFDUixhQUFhO0NBQ2QsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE91dHB1dCwgRXZlbnRFbWl0dGVyIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIEV2ZW50T2JqPFQ+IHtcclxuICBldmVudDogVDtcclxuICBlZGl0b3I6IGFueTtcclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIEV2ZW50cyB7XHJcbiAgQE91dHB1dCgpIG9uQmVmb3JlUGFzdGU6IEV2ZW50RW1pdHRlcjxFdmVudE9iajxDbGlwYm9hcmRFdmVudD4+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xyXG4gIEBPdXRwdXQoKSBvbkJsdXI6IEV2ZW50RW1pdHRlcjxFdmVudE9iajxGb2N1c0V2ZW50Pj4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XHJcbiAgQE91dHB1dCgpIG9uQ2xpY2s6IEV2ZW50RW1pdHRlcjxFdmVudE9iajxNb3VzZUV2ZW50Pj4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XHJcbiAgQE91dHB1dCgpIG9uQ29udGV4dE1lbnU6IEV2ZW50RW1pdHRlcjxFdmVudE9iajxNb3VzZUV2ZW50Pj4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XHJcbiAgQE91dHB1dCgpIG9uQ29weTogRXZlbnRFbWl0dGVyPEV2ZW50T2JqPENsaXBib2FyZEV2ZW50Pj4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XHJcbiAgQE91dHB1dCgpIG9uQ3V0OiBFdmVudEVtaXR0ZXI8RXZlbnRPYmo8Q2xpcGJvYXJkRXZlbnQ+PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcclxuICBAT3V0cHV0KCkgb25EYmxjbGljazogRXZlbnRFbWl0dGVyPEV2ZW50T2JqPE1vdXNlRXZlbnQ+PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcclxuICBAT3V0cHV0KCkgb25EcmFnOiBFdmVudEVtaXR0ZXI8RXZlbnRPYmo8RHJhZ0V2ZW50Pj4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XHJcbiAgQE91dHB1dCgpIG9uRHJhZ0Ryb3A6IEV2ZW50RW1pdHRlcjxFdmVudE9iajxEcmFnRXZlbnQ+PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcclxuICBAT3V0cHV0KCkgb25EcmFnRW5kOiBFdmVudEVtaXR0ZXI8RXZlbnRPYmo8RHJhZ0V2ZW50Pj4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XHJcbiAgQE91dHB1dCgpIG9uRHJhZ0dlc3R1cmU6IEV2ZW50RW1pdHRlcjxFdmVudE9iajxEcmFnRXZlbnQ+PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcclxuICBAT3V0cHV0KCkgb25EcmFnT3ZlcjogRXZlbnRFbWl0dGVyPEV2ZW50T2JqPERyYWdFdmVudD4+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xyXG4gIEBPdXRwdXQoKSBvbkRyb3A6IEV2ZW50RW1pdHRlcjxFdmVudE9iajxEcmFnRXZlbnQ+PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcclxuICBAT3V0cHV0KCkgb25Gb2N1czogRXZlbnRFbWl0dGVyPEV2ZW50T2JqPEZvY3VzRXZlbnQ+PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcclxuICBAT3V0cHV0KCkgb25Gb2N1c0luOiBFdmVudEVtaXR0ZXI8RXZlbnRPYmo8Rm9jdXNFdmVudD4+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xyXG4gIEBPdXRwdXQoKSBvbkZvY3VzT3V0OiBFdmVudEVtaXR0ZXI8RXZlbnRPYmo8Rm9jdXNFdmVudD4+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xyXG4gIEBPdXRwdXQoKSBvbktleURvd246IEV2ZW50RW1pdHRlcjxFdmVudE9iajxLZXlib2FyZEV2ZW50Pj4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XHJcbiAgQE91dHB1dCgpIG9uS2V5UHJlc3M6IEV2ZW50RW1pdHRlcjxFdmVudE9iajxLZXlib2FyZEV2ZW50Pj4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XHJcbiAgQE91dHB1dCgpIG9uS2V5VXA6IEV2ZW50RW1pdHRlcjxFdmVudE9iajxLZXlib2FyZEV2ZW50Pj4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XHJcbiAgQE91dHB1dCgpIG9uTW91c2VEb3duOiBFdmVudEVtaXR0ZXI8RXZlbnRPYmo8TW91c2VFdmVudD4+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xyXG4gIEBPdXRwdXQoKSBvbk1vdXNlRW50ZXI6IEV2ZW50RW1pdHRlcjxFdmVudE9iajxNb3VzZUV2ZW50Pj4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XHJcbiAgQE91dHB1dCgpIG9uTW91c2VMZWF2ZTogRXZlbnRFbWl0dGVyPEV2ZW50T2JqPE1vdXNlRXZlbnQ+PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcclxuICBAT3V0cHV0KCkgb25Nb3VzZU1vdmU6IEV2ZW50RW1pdHRlcjxFdmVudE9iajxNb3VzZUV2ZW50Pj4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XHJcbiAgQE91dHB1dCgpIG9uTW91c2VPdXQ6IEV2ZW50RW1pdHRlcjxFdmVudE9iajxNb3VzZUV2ZW50Pj4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XHJcbiAgQE91dHB1dCgpIG9uTW91c2VPdmVyOiBFdmVudEVtaXR0ZXI8RXZlbnRPYmo8TW91c2VFdmVudD4+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xyXG4gIEBPdXRwdXQoKSBvbk1vdXNlVXA6IEV2ZW50RW1pdHRlcjxFdmVudE9iajxNb3VzZUV2ZW50Pj4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XHJcbiAgQE91dHB1dCgpIG9uUGFzdGU6IEV2ZW50RW1pdHRlcjxFdmVudE9iajxDbGlwYm9hcmRFdmVudD4+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xyXG4gIEBPdXRwdXQoKSBvblNlbGVjdGlvbkNoYW5nZTogRXZlbnRFbWl0dGVyPEV2ZW50T2JqPEV2ZW50Pj4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XHJcbiAgQE91dHB1dCgpIG9uQWN0aXZhdGU6IEV2ZW50RW1pdHRlcjxFdmVudE9iajxhbnk+PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcclxuICBAT3V0cHV0KCkgb25BZGRVbmRvOiBFdmVudEVtaXR0ZXI8RXZlbnRPYmo8YW55Pj4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XHJcbiAgQE91dHB1dCgpIG9uQmVmb3JlQWRkVW5kbzogRXZlbnRFbWl0dGVyPEV2ZW50T2JqPGFueT4+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xyXG4gIEBPdXRwdXQoKSBvbkJlZm9yZUV4ZWNDb21tYW5kOiBFdmVudEVtaXR0ZXI8RXZlbnRPYmo8YW55Pj4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XHJcbiAgQE91dHB1dCgpIG9uQmVmb3JlR2V0Q29udGVudDogRXZlbnRFbWl0dGVyPEV2ZW50T2JqPGFueT4+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xyXG4gIEBPdXRwdXQoKSBvbkJlZm9yZVJlbmRlclVJOiBFdmVudEVtaXR0ZXI8RXZlbnRPYmo8YW55Pj4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XHJcbiAgQE91dHB1dCgpIG9uQmVmb3JlU2V0Q29udGVudDogRXZlbnRFbWl0dGVyPEV2ZW50T2JqPGFueT4+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xyXG4gIEBPdXRwdXQoKSBvbkNoYW5nZTogRXZlbnRFbWl0dGVyPEV2ZW50T2JqPGFueT4+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xyXG4gIEBPdXRwdXQoKSBvbkNsZWFyVW5kb3M6IEV2ZW50RW1pdHRlcjxFdmVudE9iajxhbnk+PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcclxuICBAT3V0cHV0KCkgb25EZWFjdGl2YXRlOiBFdmVudEVtaXR0ZXI8RXZlbnRPYmo8YW55Pj4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XHJcbiAgQE91dHB1dCgpIG9uRGlydHk6IEV2ZW50RW1pdHRlcjxFdmVudE9iajxhbnk+PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcclxuICBAT3V0cHV0KCkgb25FeGVjQ29tbWFuZDogRXZlbnRFbWl0dGVyPEV2ZW50T2JqPGFueT4+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xyXG4gIEBPdXRwdXQoKSBvbkdldENvbnRlbnQ6IEV2ZW50RW1pdHRlcjxFdmVudE9iajxhbnk+PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcclxuICBAT3V0cHV0KCkgb25IaWRlOiBFdmVudEVtaXR0ZXI8RXZlbnRPYmo8YW55Pj4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XHJcbiAgQE91dHB1dCgpIG9uSW5pdDogRXZlbnRFbWl0dGVyPEV2ZW50T2JqPGFueT4+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xyXG4gIEBPdXRwdXQoKSBvbkxvYWRDb250ZW50OiBFdmVudEVtaXR0ZXI8RXZlbnRPYmo8YW55Pj4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XHJcbiAgQE91dHB1dCgpIG9uTm9kZUNoYW5nZTogRXZlbnRFbWl0dGVyPEV2ZW50T2JqPGFueT4+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xyXG4gIEBPdXRwdXQoKSBvblBvc3RQcm9jZXNzOiBFdmVudEVtaXR0ZXI8RXZlbnRPYmo8YW55Pj4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XHJcbiAgQE91dHB1dCgpIG9uUG9zdFJlbmRlcjogRXZlbnRFbWl0dGVyPEV2ZW50T2JqPGFueT4+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xyXG4gIEBPdXRwdXQoKSBvblByZUluaXQ6IEV2ZW50RW1pdHRlcjxFdmVudE9iajxhbnk+PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcclxuICBAT3V0cHV0KCkgb25QcmVQcm9jZXNzOiBFdmVudEVtaXR0ZXI8RXZlbnRPYmo8YW55Pj4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XHJcbiAgQE91dHB1dCgpIG9uUHJvZ3Jlc3NTdGF0ZTogRXZlbnRFbWl0dGVyPEV2ZW50T2JqPGFueT4+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xyXG4gIEBPdXRwdXQoKSBvblJlZG86IEV2ZW50RW1pdHRlcjxFdmVudE9iajxhbnk+PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcclxuICBAT3V0cHV0KCkgb25SZW1vdmU6IEV2ZW50RW1pdHRlcjxFdmVudE9iajxhbnk+PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcclxuICBAT3V0cHV0KCkgb25SZXNldDogRXZlbnRFbWl0dGVyPEV2ZW50T2JqPGFueT4+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xyXG4gIEBPdXRwdXQoKSBvblNhdmVDb250ZW50OiBFdmVudEVtaXR0ZXI8RXZlbnRPYmo8YW55Pj4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XHJcbiAgQE91dHB1dCgpIG9uU2V0QXR0cmliOiBFdmVudEVtaXR0ZXI8RXZlbnRPYmo8YW55Pj4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XHJcbiAgQE91dHB1dCgpIG9uT2JqZWN0UmVzaXplU3RhcnQ6IEV2ZW50RW1pdHRlcjxFdmVudE9iajxhbnk+PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcclxuICBAT3V0cHV0KCkgb25PYmplY3RSZXNpemVkOiBFdmVudEVtaXR0ZXI8RXZlbnRPYmo8YW55Pj4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XHJcbiAgQE91dHB1dCgpIG9uT2JqZWN0U2VsZWN0ZWQ6IEV2ZW50RW1pdHRlcjxFdmVudE9iajxhbnk+PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcclxuICBAT3V0cHV0KCkgb25TZXRDb250ZW50OiBFdmVudEVtaXR0ZXI8RXZlbnRPYmo8YW55Pj4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XHJcbiAgQE91dHB1dCgpIG9uU2hvdzogRXZlbnRFbWl0dGVyPEV2ZW50T2JqPGFueT4+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xyXG4gIEBPdXRwdXQoKSBvblN1Ym1pdDogRXZlbnRFbWl0dGVyPEV2ZW50T2JqPGFueT4+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xyXG4gIEBPdXRwdXQoKSBvblVuZG86IEV2ZW50RW1pdHRlcjxFdmVudE9iajxhbnk+PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcclxuICBAT3V0cHV0KCkgb25WaXN1YWxBaWQ6IEV2ZW50RW1pdHRlcjxFdmVudE9iajxhbnk+PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IHZhbGlkRXZlbnRzOiAoa2V5b2YgRXZlbnRzKVtdID0gW1xyXG4gICdvbkFjdGl2YXRlJyxcclxuICAnb25BZGRVbmRvJyxcclxuICAnb25CZWZvcmVBZGRVbmRvJyxcclxuICAnb25CZWZvcmVFeGVjQ29tbWFuZCcsXHJcbiAgJ29uQmVmb3JlR2V0Q29udGVudCcsXHJcbiAgJ29uQmVmb3JlUmVuZGVyVUknLFxyXG4gICdvbkJlZm9yZVNldENvbnRlbnQnLFxyXG4gICdvbkJlZm9yZVBhc3RlJyxcclxuICAnb25CbHVyJyxcclxuICAnb25DaGFuZ2UnLFxyXG4gICdvbkNsZWFyVW5kb3MnLFxyXG4gICdvbkNsaWNrJyxcclxuICAnb25Db250ZXh0TWVudScsXHJcbiAgJ29uQ29weScsXHJcbiAgJ29uQ3V0JyxcclxuICAnb25EYmxjbGljaycsXHJcbiAgJ29uRGVhY3RpdmF0ZScsXHJcbiAgJ29uRGlydHknLFxyXG4gICdvbkRyYWcnLFxyXG4gICdvbkRyYWdEcm9wJyxcclxuICAnb25EcmFnRW5kJyxcclxuICAnb25EcmFnR2VzdHVyZScsXHJcbiAgJ29uRHJhZ092ZXInLFxyXG4gICdvbkRyb3AnLFxyXG4gICdvbkV4ZWNDb21tYW5kJyxcclxuICAnb25Gb2N1cycsXHJcbiAgJ29uRm9jdXNJbicsXHJcbiAgJ29uRm9jdXNPdXQnLFxyXG4gICdvbkdldENvbnRlbnQnLFxyXG4gICdvbkhpZGUnLFxyXG4gICdvbkluaXQnLFxyXG4gICdvbktleURvd24nLFxyXG4gICdvbktleVByZXNzJyxcclxuICAnb25LZXlVcCcsXHJcbiAgJ29uTG9hZENvbnRlbnQnLFxyXG4gICdvbk1vdXNlRG93bicsXHJcbiAgJ29uTW91c2VFbnRlcicsXHJcbiAgJ29uTW91c2VMZWF2ZScsXHJcbiAgJ29uTW91c2VNb3ZlJyxcclxuICAnb25Nb3VzZU91dCcsXHJcbiAgJ29uTW91c2VPdmVyJyxcclxuICAnb25Nb3VzZVVwJyxcclxuICAnb25Ob2RlQ2hhbmdlJyxcclxuICAnb25PYmplY3RSZXNpemVTdGFydCcsXHJcbiAgJ29uT2JqZWN0UmVzaXplZCcsXHJcbiAgJ29uT2JqZWN0U2VsZWN0ZWQnLFxyXG4gICdvblBhc3RlJyxcclxuICAnb25Qb3N0UHJvY2VzcycsXHJcbiAgJ29uUG9zdFJlbmRlcicsXHJcbiAgJ29uUHJlUHJvY2VzcycsXHJcbiAgJ29uUHJvZ3Jlc3NTdGF0ZScsXHJcbiAgJ29uUmVkbycsXHJcbiAgJ29uUmVtb3ZlJyxcclxuICAnb25SZXNldCcsXHJcbiAgJ29uU2F2ZUNvbnRlbnQnLFxyXG4gICdvblNlbGVjdGlvbkNoYW5nZScsXHJcbiAgJ29uU2V0QXR0cmliJyxcclxuICAnb25TZXRDb250ZW50JyxcclxuICAnb25TaG93JyxcclxuICAnb25TdWJtaXQnLFxyXG4gICdvblVuZG8nLFxyXG4gICdvblZpc3VhbEFpZCdcclxuXTtcclxuIl19