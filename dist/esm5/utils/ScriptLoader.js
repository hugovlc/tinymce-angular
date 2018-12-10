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
import { uuid } from './Utils';
/**
 * @record
 */
export function IStateObj() { }
function IStateObj_tsickle_Closure_declarations() {
    /** @type {?} */
    IStateObj.prototype.listeners;
    /** @type {?} */
    IStateObj.prototype.scriptId;
    /** @type {?} */
    IStateObj.prototype.scriptLoaded;
}
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
var ɵ0 = injectScriptTag;
export var /** @type {?} */ create = function () {
    return {
        listeners: [],
        scriptId: uuid('tiny-script'),
        scriptLoaded: false
    };
};
export var /** @type {?} */ load = function (state, doc, url, callback) {
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
export { ɵ0 };

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiU2NyaXB0TG9hZGVyLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHRpbnltY2UvdGlueW1jZS1hbmd1bGFyLyIsInNvdXJjZXMiOlsidXRpbHMvU2NyaXB0TG9hZGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBUUEsT0FBTyxFQUFFLElBQUksRUFBRSxNQUFNLFNBQVMsQ0FBQzs7Ozs7Ozs7Ozs7OztBQVMvQixxQkFBTSxlQUFlLEdBQUcsVUFBQyxRQUFnQixFQUFFLEdBQWEsRUFBRSxHQUFXLEVBQUUsUUFBb0I7SUFDekYscUJBQU0sU0FBUyxHQUFHLEdBQUcsQ0FBQyxhQUFhLENBQUMsUUFBUSxDQUFDLENBQUM7SUFDOUMsU0FBUyxDQUFDLElBQUksR0FBRyx3QkFBd0IsQ0FBQztJQUMxQyxTQUFTLENBQUMsRUFBRSxHQUFHLFFBQVEsQ0FBQztJQUN4QixTQUFTLENBQUMsZ0JBQWdCLENBQUMsTUFBTSxFQUFFLFFBQVEsQ0FBQyxDQUFDO0lBQzdDLFNBQVMsQ0FBQyxHQUFHLEdBQUcsR0FBRyxDQUFDO0lBQ3BCLEVBQUUsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO1FBQ2IsR0FBRyxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsU0FBUyxDQUFDLENBQUM7S0FDakM7Q0FDRixDQUFDOztBQUVGLE1BQU0sQ0FBQyxxQkFBTSxNQUFNLEdBQUc7SUFDcEIsTUFBTSxDQUFDO1FBQ0wsU0FBUyxFQUFFLEVBQUU7UUFDYixRQUFRLEVBQUUsSUFBSSxDQUFDLGFBQWEsQ0FBQztRQUM3QixZQUFZLEVBQUUsS0FBSztLQUNwQixDQUFDO0NBQ0gsQ0FBQztBQUVGLE1BQU0sQ0FBQyxxQkFBTSxJQUFJLEdBQUcsVUFBQyxLQUFnQixFQUFFLEdBQWEsRUFBRSxHQUFXLEVBQUUsUUFBb0I7SUFDckYsRUFBRSxDQUFDLENBQUMsS0FBSyxDQUFDLFlBQVksQ0FBQyxDQUFDLENBQUM7UUFDdkIsUUFBUSxFQUFFLENBQUM7S0FDWjtJQUFDLElBQUksQ0FBQyxDQUFDO1FBQ04sS0FBSyxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7UUFDL0IsRUFBRSxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsY0FBYyxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDeEMsZUFBZSxDQUFDLEtBQUssQ0FBQyxRQUFRLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRTtnQkFDeEMsS0FBSyxDQUFDLFNBQVMsQ0FBQyxPQUFPLENBQUMsVUFBQyxFQUFFLElBQUssT0FBQSxFQUFFLEVBQUUsRUFBSixDQUFJLENBQUMsQ0FBQztnQkFDdEMsS0FBSyxDQUFDLFlBQVksR0FBRyxJQUFJLENBQUM7YUFDM0IsQ0FBQyxDQUFDO1NBQ0o7S0FDRjtDQUNGLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcclxuICogQ29weXJpZ2h0IChjKSAyMDE3LXByZXNlbnQsIEVwaG94LCBJbmMuXHJcbiAqXHJcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSAyIGxpY2Vuc2UgZm91bmQgaW4gdGhlXHJcbiAqIExJQ0VOU0UgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS5cclxuICpcclxuICovXHJcblxyXG5pbXBvcnQgeyB1dWlkIH0gZnJvbSAnLi9VdGlscyc7XHJcblxyXG5leHBvcnQgdHlwZSBjYWxsYmFja0ZuID0gKCkgPT4gdm9pZDtcclxuZXhwb3J0IGludGVyZmFjZSBJU3RhdGVPYmoge1xyXG4gIGxpc3RlbmVyczogY2FsbGJhY2tGbltdO1xyXG4gIHNjcmlwdElkOiBzdHJpbmc7XHJcbiAgc2NyaXB0TG9hZGVkOiBib29sZWFuO1xyXG59XHJcblxyXG5jb25zdCBpbmplY3RTY3JpcHRUYWcgPSAoc2NyaXB0SWQ6IHN0cmluZywgZG9jOiBEb2N1bWVudCwgdXJsOiBzdHJpbmcsIGNhbGxiYWNrOiBjYWxsYmFja0ZuKSA9PiB7XHJcbiAgY29uc3Qgc2NyaXB0VGFnID0gZG9jLmNyZWF0ZUVsZW1lbnQoJ3NjcmlwdCcpO1xyXG4gIHNjcmlwdFRhZy50eXBlID0gJ2FwcGxpY2F0aW9uL2phdmFzY3JpcHQnO1xyXG4gIHNjcmlwdFRhZy5pZCA9IHNjcmlwdElkO1xyXG4gIHNjcmlwdFRhZy5hZGRFdmVudExpc3RlbmVyKCdsb2FkJywgY2FsbGJhY2spO1xyXG4gIHNjcmlwdFRhZy5zcmMgPSB1cmw7XHJcbiAgaWYgKGRvYy5oZWFkKSB7XHJcbiAgICBkb2MuaGVhZC5hcHBlbmRDaGlsZChzY3JpcHRUYWcpO1xyXG4gIH1cclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBjcmVhdGUgPSAoKTogSVN0YXRlT2JqID0+IHtcclxuICByZXR1cm4ge1xyXG4gICAgbGlzdGVuZXJzOiBbXSxcclxuICAgIHNjcmlwdElkOiB1dWlkKCd0aW55LXNjcmlwdCcpLFxyXG4gICAgc2NyaXB0TG9hZGVkOiBmYWxzZVxyXG4gIH07XHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgbG9hZCA9IChzdGF0ZTogSVN0YXRlT2JqLCBkb2M6IERvY3VtZW50LCB1cmw6IHN0cmluZywgY2FsbGJhY2s6IGNhbGxiYWNrRm4pID0+IHtcclxuICBpZiAoc3RhdGUuc2NyaXB0TG9hZGVkKSB7XHJcbiAgICBjYWxsYmFjaygpO1xyXG4gIH0gZWxzZSB7XHJcbiAgICBzdGF0ZS5saXN0ZW5lcnMucHVzaChjYWxsYmFjayk7XHJcbiAgICBpZiAoIWRvYy5nZXRFbGVtZW50QnlJZChzdGF0ZS5zY3JpcHRJZCkpIHtcclxuICAgICAgaW5qZWN0U2NyaXB0VGFnKHN0YXRlLnNjcmlwdElkLCBkb2MsIHVybCwgKCkgPT4ge1xyXG4gICAgICAgIHN0YXRlLmxpc3RlbmVycy5mb3JFYWNoKChmbikgPT4gZm4oKSk7XHJcbiAgICAgICAgc3RhdGUuc2NyaXB0TG9hZGVkID0gdHJ1ZTtcclxuICAgICAgfSk7XHJcbiAgICB9XHJcbiAgfVxyXG59O1xyXG4iXX0=