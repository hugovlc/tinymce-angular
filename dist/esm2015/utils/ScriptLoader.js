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
const ɵ0 = injectScriptTag;
export const /** @type {?} */ create = () => {
    return {
        listeners: [],
        scriptId: uuid('tiny-script'),
        scriptLoaded: false
    };
};
export const /** @type {?} */ load = (state, doc, url, callback) => {
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
export { ɵ0 };

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiU2NyaXB0TG9hZGVyLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHRpbnltY2UvdGlueW1jZS1hbmd1bGFyLyIsInNvdXJjZXMiOlsidXRpbHMvU2NyaXB0TG9hZGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBUUEsT0FBTyxFQUFFLElBQUksRUFBRSxNQUFNLFNBQVMsQ0FBQzs7Ozs7Ozs7Ozs7OztBQVMvQix1QkFBTSxlQUFlLEdBQUcsQ0FBQyxRQUFnQixFQUFFLEdBQWEsRUFBRSxHQUFXLEVBQUUsUUFBb0IsRUFBRSxFQUFFO0lBQzdGLHVCQUFNLFNBQVMsR0FBRyxHQUFHLENBQUMsYUFBYSxDQUFDLFFBQVEsQ0FBQyxDQUFDO0lBQzlDLFNBQVMsQ0FBQyxJQUFJLEdBQUcsd0JBQXdCLENBQUM7SUFDMUMsU0FBUyxDQUFDLEVBQUUsR0FBRyxRQUFRLENBQUM7SUFDeEIsU0FBUyxDQUFDLGdCQUFnQixDQUFDLE1BQU0sRUFBRSxRQUFRLENBQUMsQ0FBQztJQUM3QyxTQUFTLENBQUMsR0FBRyxHQUFHLEdBQUcsQ0FBQztJQUNwQixFQUFFLENBQUMsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQztRQUNiLEdBQUcsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLFNBQVMsQ0FBQyxDQUFDO0tBQ2pDO0NBQ0YsQ0FBQzs7QUFFRixNQUFNLENBQUMsdUJBQU0sTUFBTSxHQUFHLEdBQWMsRUFBRTtJQUNwQyxNQUFNLENBQUM7UUFDTCxTQUFTLEVBQUUsRUFBRTtRQUNiLFFBQVEsRUFBRSxJQUFJLENBQUMsYUFBYSxDQUFDO1FBQzdCLFlBQVksRUFBRSxLQUFLO0tBQ3BCLENBQUM7Q0FDSCxDQUFDO0FBRUYsTUFBTSxDQUFDLHVCQUFNLElBQUksR0FBRyxDQUFDLEtBQWdCLEVBQUUsR0FBYSxFQUFFLEdBQVcsRUFBRSxRQUFvQixFQUFFLEVBQUU7SUFDekYsRUFBRSxDQUFDLENBQUMsS0FBSyxDQUFDLFlBQVksQ0FBQyxDQUFDLENBQUM7UUFDdkIsUUFBUSxFQUFFLENBQUM7S0FDWjtJQUFDLElBQUksQ0FBQyxDQUFDO1FBQ04sS0FBSyxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7UUFDL0IsRUFBRSxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsY0FBYyxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDeEMsZUFBZSxDQUFDLEtBQUssQ0FBQyxRQUFRLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUU7Z0JBQzdDLEtBQUssQ0FBQyxTQUFTLENBQUMsT0FBTyxDQUFDLENBQUMsRUFBRSxFQUFFLEVBQUUsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDO2dCQUN0QyxLQUFLLENBQUMsWUFBWSxHQUFHLElBQUksQ0FBQzthQUMzQixDQUFDLENBQUM7U0FDSjtLQUNGO0NBQ0YsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxyXG4gKiBDb3B5cmlnaHQgKGMpIDIwMTctcHJlc2VudCwgRXBob3gsIEluYy5cclxuICpcclxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIDIgbGljZW5zZSBmb3VuZCBpbiB0aGVcclxuICogTElDRU5TRSBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLlxyXG4gKlxyXG4gKi9cclxuXHJcbmltcG9ydCB7IHV1aWQgfSBmcm9tICcuL1V0aWxzJztcclxuXHJcbmV4cG9ydCB0eXBlIGNhbGxiYWNrRm4gPSAoKSA9PiB2b2lkO1xyXG5leHBvcnQgaW50ZXJmYWNlIElTdGF0ZU9iaiB7XHJcbiAgbGlzdGVuZXJzOiBjYWxsYmFja0ZuW107XHJcbiAgc2NyaXB0SWQ6IHN0cmluZztcclxuICBzY3JpcHRMb2FkZWQ6IGJvb2xlYW47XHJcbn1cclxuXHJcbmNvbnN0IGluamVjdFNjcmlwdFRhZyA9IChzY3JpcHRJZDogc3RyaW5nLCBkb2M6IERvY3VtZW50LCB1cmw6IHN0cmluZywgY2FsbGJhY2s6IGNhbGxiYWNrRm4pID0+IHtcclxuICBjb25zdCBzY3JpcHRUYWcgPSBkb2MuY3JlYXRlRWxlbWVudCgnc2NyaXB0Jyk7XHJcbiAgc2NyaXB0VGFnLnR5cGUgPSAnYXBwbGljYXRpb24vamF2YXNjcmlwdCc7XHJcbiAgc2NyaXB0VGFnLmlkID0gc2NyaXB0SWQ7XHJcbiAgc2NyaXB0VGFnLmFkZEV2ZW50TGlzdGVuZXIoJ2xvYWQnLCBjYWxsYmFjayk7XHJcbiAgc2NyaXB0VGFnLnNyYyA9IHVybDtcclxuICBpZiAoZG9jLmhlYWQpIHtcclxuICAgIGRvYy5oZWFkLmFwcGVuZENoaWxkKHNjcmlwdFRhZyk7XHJcbiAgfVxyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IGNyZWF0ZSA9ICgpOiBJU3RhdGVPYmogPT4ge1xyXG4gIHJldHVybiB7XHJcbiAgICBsaXN0ZW5lcnM6IFtdLFxyXG4gICAgc2NyaXB0SWQ6IHV1aWQoJ3Rpbnktc2NyaXB0JyksXHJcbiAgICBzY3JpcHRMb2FkZWQ6IGZhbHNlXHJcbiAgfTtcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBsb2FkID0gKHN0YXRlOiBJU3RhdGVPYmosIGRvYzogRG9jdW1lbnQsIHVybDogc3RyaW5nLCBjYWxsYmFjazogY2FsbGJhY2tGbikgPT4ge1xyXG4gIGlmIChzdGF0ZS5zY3JpcHRMb2FkZWQpIHtcclxuICAgIGNhbGxiYWNrKCk7XHJcbiAgfSBlbHNlIHtcclxuICAgIHN0YXRlLmxpc3RlbmVycy5wdXNoKGNhbGxiYWNrKTtcclxuICAgIGlmICghZG9jLmdldEVsZW1lbnRCeUlkKHN0YXRlLnNjcmlwdElkKSkge1xyXG4gICAgICBpbmplY3RTY3JpcHRUYWcoc3RhdGUuc2NyaXB0SWQsIGRvYywgdXJsLCAoKSA9PiB7XHJcbiAgICAgICAgc3RhdGUubGlzdGVuZXJzLmZvckVhY2goKGZuKSA9PiBmbigpKTtcclxuICAgICAgICBzdGF0ZS5zY3JpcHRMb2FkZWQgPSB0cnVlO1xyXG4gICAgICB9KTtcclxuICAgIH1cclxuICB9XHJcbn07XHJcbiJdfQ==