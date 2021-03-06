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
import { validEvents } from '../editor/Events';
export var /** @type {?} */ bindHandlers = function (ctx, editor, initEvent) {
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
export var /** @type {?} */ uuid = function (prefix) {
    var /** @type {?} */ date = new Date();
    var /** @type {?} */ time = date.getTime();
    var /** @type {?} */ random = Math.floor(Math.random() * 1000000000);
    unique++;
    return prefix + '_' + random + unique + String(time);
};
export var /** @type {?} */ isTextarea = function (element) {
    return typeof element !== 'undefined' && element.tagName.toLowerCase() === 'textarea';
};
var /** @type {?} */ normalizePluginArray = function (plugins) {
    if (typeof plugins === 'undefined' || plugins === '') {
        return [];
    }
    return Array.isArray(plugins) ? plugins : plugins.split(' ');
};
var ɵ0 = normalizePluginArray;
export var /** @type {?} */ mergePlugins = function (initPlugins, inputPlugins) {
    return normalizePluginArray(initPlugins).concat(normalizePluginArray(inputPlugins));
};
export { ɵ0 };

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiVXRpbHMuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AdGlueW1jZS90aW55bWNlLWFuZ3VsYXIvIiwic291cmNlcyI6WyJ1dGlscy9VdGlscy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQVVBLE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSxrQkFBa0IsQ0FBQztBQUUvQyxNQUFNLENBQUMscUJBQU0sWUFBWSxHQUFHLFVBQUMsR0FBb0IsRUFBRSxNQUFXLEVBQUUsU0FBZ0I7SUFDOUUsV0FBVyxDQUFDLE9BQU8sQ0FBQyxVQUFDLFNBQVM7UUFDNUIscUJBQU0sWUFBWSxHQUFzQixHQUFHLENBQUMsU0FBUyxDQUFDLENBQUM7UUFDdkQsRUFBRSxDQUFDLENBQUMsWUFBWSxDQUFDLFNBQVMsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUN0QyxFQUFFLENBQUMsQ0FBQyxTQUFTLEtBQUssUUFBUSxDQUFDLENBQUMsQ0FBQztnQkFDM0IsR0FBRyxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsY0FBTSxPQUFBLFlBQVksQ0FBQyxJQUFJLENBQUMsRUFBRSxLQUFLLEVBQUUsU0FBUyxFQUFFLE1BQU0sUUFBQSxFQUFFLENBQUMsRUFBL0MsQ0FBK0MsQ0FBQyxDQUFDO2FBQ3ZFO1lBQUMsSUFBSSxDQUFDLENBQUM7Z0JBQ04sTUFBTSxDQUFDLEVBQUUsQ0FBQyxTQUFTLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxFQUFFLEdBQUcsQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLGNBQU0sT0FBQSxVQUFDLEtBQVUsSUFBSyxPQUFBLFlBQVksQ0FBQyxJQUFJLENBQUMsRUFBRSxLQUFLLE9BQUEsRUFBRSxNQUFNLFFBQUEsRUFBRSxDQUFDLEVBQXBDLENBQW9DLEVBQXBELENBQW9ELENBQUMsQ0FBQyxDQUFDO2FBQy9HO1NBQ0Y7S0FDRixDQUFDLENBQUM7Q0FDSixDQUFDO0FBRUYscUJBQUksTUFBTSxHQUFHLENBQUMsQ0FBQztBQUVmLE1BQU0sQ0FBQyxxQkFBTSxJQUFJLEdBQUcsVUFBQyxNQUFjO0lBQ2pDLHFCQUFNLElBQUksR0FBRyxJQUFJLElBQUksRUFBRSxDQUFDO0lBQ3hCLHFCQUFNLElBQUksR0FBRyxJQUFJLENBQUMsT0FBTyxFQUFFLENBQUM7SUFDNUIscUJBQU0sTUFBTSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxHQUFHLFVBQVUsQ0FBQyxDQUFDO0lBRXRELE1BQU0sRUFBRSxDQUFDO0lBRVQsTUFBTSxDQUFDLE1BQU0sR0FBRyxHQUFHLEdBQUcsTUFBTSxHQUFHLE1BQU0sR0FBRyxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUM7Q0FDdEQsQ0FBQztBQUVGLE1BQU0sQ0FBQyxxQkFBTSxVQUFVLEdBQUcsVUFBQyxPQUFpQjtJQUMxQyxNQUFNLENBQUMsT0FBTyxPQUFPLEtBQUssV0FBVyxJQUFJLE9BQU8sQ0FBQyxPQUFPLENBQUMsV0FBVyxFQUFFLEtBQUssVUFBVSxDQUFDO0NBQ3ZGLENBQUM7QUFFRixxQkFBTSxvQkFBb0IsR0FBRyxVQUFDLE9BQTJCO0lBQ3ZELEVBQUUsQ0FBQyxDQUFDLE9BQU8sT0FBTyxLQUFLLFdBQVcsSUFBSSxPQUFPLEtBQUssRUFBRSxDQUFDLENBQUMsQ0FBQztRQUNyRCxNQUFNLENBQUMsRUFBRSxDQUFDO0tBQ1g7SUFFRCxNQUFNLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDO0NBQzlELENBQUM7O0FBRUYsTUFBTSxDQUFDLHFCQUFNLFlBQVksR0FBRyxVQUFDLFdBQThCLEVBQUUsWUFBZ0M7SUFDM0YsT0FBQSxvQkFBb0IsQ0FBQyxXQUFXLENBQUMsQ0FBQyxNQUFNLENBQUMsb0JBQW9CLENBQUMsWUFBWSxDQUFDLENBQUM7QUFBNUUsQ0FBNEUsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxyXG4gKiBDb3B5cmlnaHQgKGMpIDIwMTctcHJlc2VudCwgRXBob3gsIEluYy5cclxuICpcclxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIDIgbGljZW5zZSBmb3VuZCBpbiB0aGVcclxuICogTElDRU5TRSBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLlxyXG4gKlxyXG4gKi9cclxuXHJcbmltcG9ydCB7IEV2ZW50RW1pdHRlciB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBFZGl0b3JDb21wb25lbnQgfSBmcm9tICcuLi9lZGl0b3IvZWRpdG9yLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IHZhbGlkRXZlbnRzIH0gZnJvbSAnLi4vZWRpdG9yL0V2ZW50cyc7XHJcblxyXG5leHBvcnQgY29uc3QgYmluZEhhbmRsZXJzID0gKGN0eDogRWRpdG9yQ29tcG9uZW50LCBlZGl0b3I6IGFueSwgaW5pdEV2ZW50OiBFdmVudCk6IHZvaWQgPT4ge1xyXG4gIHZhbGlkRXZlbnRzLmZvckVhY2goKGV2ZW50TmFtZSkgPT4ge1xyXG4gICAgY29uc3QgZXZlbnRFbWl0dGVyOiBFdmVudEVtaXR0ZXI8YW55PiA9IGN0eFtldmVudE5hbWVdO1xyXG4gICAgaWYgKGV2ZW50RW1pdHRlci5vYnNlcnZlcnMubGVuZ3RoID4gMCkge1xyXG4gICAgICBpZiAoZXZlbnROYW1lID09PSAnb25Jbml0Jykge1xyXG4gICAgICAgIGN0eC5uZ1pvbmUucnVuKCgpID0+IGV2ZW50RW1pdHRlci5lbWl0KHsgZXZlbnQ6IGluaXRFdmVudCwgZWRpdG9yIH0pKTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBlZGl0b3Iub24oZXZlbnROYW1lLnN1YnN0cmluZygyKSwgY3R4Lm5nWm9uZS5ydW4oKCkgPT4gKGV2ZW50OiBhbnkpID0+IGV2ZW50RW1pdHRlci5lbWl0KHsgZXZlbnQsIGVkaXRvciB9KSkpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfSk7XHJcbn07XHJcblxyXG5sZXQgdW5pcXVlID0gMDtcclxuXHJcbmV4cG9ydCBjb25zdCB1dWlkID0gKHByZWZpeDogc3RyaW5nKTogc3RyaW5nID0+IHtcclxuICBjb25zdCBkYXRlID0gbmV3IERhdGUoKTtcclxuICBjb25zdCB0aW1lID0gZGF0ZS5nZXRUaW1lKCk7XHJcbiAgY29uc3QgcmFuZG9tID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMTAwMDAwMDAwMCk7XHJcblxyXG4gIHVuaXF1ZSsrO1xyXG5cclxuICByZXR1cm4gcHJlZml4ICsgJ18nICsgcmFuZG9tICsgdW5pcXVlICsgU3RyaW5nKHRpbWUpO1xyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IGlzVGV4dGFyZWEgPSAoZWxlbWVudD86IEVsZW1lbnQpOiBlbGVtZW50IGlzIEhUTUxUZXh0QXJlYUVsZW1lbnQgPT4ge1xyXG4gIHJldHVybiB0eXBlb2YgZWxlbWVudCAhPT0gJ3VuZGVmaW5lZCcgJiYgZWxlbWVudC50YWdOYW1lLnRvTG93ZXJDYXNlKCkgPT09ICd0ZXh0YXJlYSc7XHJcbn07XHJcblxyXG5jb25zdCBub3JtYWxpemVQbHVnaW5BcnJheSA9IChwbHVnaW5zPzogc3RyaW5nIHwgc3RyaW5nW10pOiBzdHJpbmdbXSA9PiB7XHJcbiAgaWYgKHR5cGVvZiBwbHVnaW5zID09PSAndW5kZWZpbmVkJyB8fCBwbHVnaW5zID09PSAnJykge1xyXG4gICAgcmV0dXJuIFtdO1xyXG4gIH1cclxuXHJcbiAgcmV0dXJuIEFycmF5LmlzQXJyYXkocGx1Z2lucykgPyBwbHVnaW5zIDogcGx1Z2lucy5zcGxpdCgnICcpO1xyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IG1lcmdlUGx1Z2lucyA9IChpbml0UGx1Z2luczogc3RyaW5nIHwgc3RyaW5nW10sIGlucHV0UGx1Z2lucz86IHN0cmluZyB8IHN0cmluZ1tdKSA9PlxyXG4gIG5vcm1hbGl6ZVBsdWdpbkFycmF5KGluaXRQbHVnaW5zKS5jb25jYXQobm9ybWFsaXplUGx1Z2luQXJyYXkoaW5wdXRQbHVnaW5zKSk7XHJcbiJdfQ==