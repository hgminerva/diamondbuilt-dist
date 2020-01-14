(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["landingpage-landingpage-module"],{

/***/ "./node_modules/@nicky-lenaers/ngx-scroll-to/fesm5/nicky-lenaers-ngx-scroll-to.js":
/*!****************************************************************************************!*\
  !*** ./node_modules/@nicky-lenaers/ngx-scroll-to/fesm5/nicky-lenaers-ngx-scroll-to.js ***!
  \****************************************************************************************/
/*! exports provided: ScrollToDirective, ScrollToModule, ScrollToService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ScrollToDirective", function() { return ScrollToDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ScrollToModule", function() { return ScrollToModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ScrollToService", function() { return ScrollToService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var rxjs_index__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/index */ "./node_modules/rxjs/index.js");
/* harmony import */ var rxjs_index__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(rxjs_index__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");





/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Default values for Component Input
 * @type {?}
 */
var DEFAULTS = {
    target: null,
    action: 'click',
    duration: 650,
    easing: 'easeInOutQuad',
    offset: 0,
    offsetMap: new Map()
};
/**
 * Easing Colleciton
 * @type {?}
 */
var EASING = {
    easeInQuad: function (time) {
        return time * time;
    },
    easeOutQuad: function (time) {
        return time * (2 - time);
    },
    easeInOutQuad: function (time) {
        return time < 0.5 ? 2 * time * time : -1 + (4 - 2 * time) * time;
    },
    easeInCubic: function (time) {
        return time * time * time;
    },
    easeOutCubic: function (time) {
        return (--time) * time * time + 1;
    },
    easeInOutCubic: function (time) {
        return time < 0.5 ? 4 * time * time * time : (time - 1) * (2 * time - 2) * (2 * time - 2) + 1;
    },
    easeInQuart: function (time) {
        return time * time * time * time;
    },
    easeOutQuart: function (time) {
        return 1 - (--time) * time * time * time;
    },
    easeInOutQuart: function (time) {
        return time < 0.5 ? 8 * time * time * time * time : 1 - 8 * (--time) * time * time * time;
    },
    easeInQuint: function (time) {
        return time * time * time * time * time;
    },
    easeOutQuint: function (time) {
        return 1 + (--time) * time * time * time * time;
    },
    easeInOutQuint: function (time) {
        return time < 0.5 ? 16 * time * time * time * time * time : 1 + 16 * (--time) * time * time * time * time;
    },
    easeOutElastic: function (time) {
        return Math.pow(2, -10 * time) * Math.sin((time - 1 / 4) * (2 * Math.PI) / 1) + 1;
    }
};
/**
 * Set of allowed events as triggers
 * for the Animation to start.
 * @type {?}
 */
var EVENTS = [
    'click',
    'mouseenter',
    'mouseover',
    'mousedown',
    'mouseup',
    'dblclick',
    'contextmenu',
    'wheel',
    'mouseleave',
    'mouseout'
];
/**
 * Strip hash (#) from value.
 *
 * @param {?} value 				The given string value
 * @return {?} 					The stripped string value
 */
function stripHash(value) {
    return value.substring(0, 1) === '#' ? value.substring(1) : value;
}
/**
 * Test if a given value is a string.
 *
 * @param {?} value 					The given value
 * @return {?} 						Whether the given value is a string
 */
function isString(value) {
    return typeof value === 'string' || value instanceof String;
}
/**
 * Test if a given Element is the Window.
 *
 * @param {?} container 				The given Element
 * @return {?} 						Whether the given Element is Window
 */
function isWindow(container) {
    return container === window;
}
/**
 * Test if a given value is of type ElementRef.
 *
 * @param {?} value 					The given value
 * @return {?} Whether the given value is a number
 */
function isElementRef(value) {
    return value instanceof _angular_core__WEBPACK_IMPORTED_MODULE_3__["ElementRef"];
}
/**
 * Whether or not the given value is a Native Element.
 *
 * @param {?} value           The given value
 * @return {?} Whether or not the value is a Native Element
 */
function isNativeElement(value) {
    return value instanceof HTMLElement;
}
/**
 * Test if a given value is type number.
 *
 * @param {?} value 					The given value
 * @return {?} 						Whether the given value is a number
 */
function isNumber(value) {
    return !isNaN(parseFloat(value)) && isFinite(value);
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Scroll To Animation
 */
var /**
 * Scroll To Animation
 */
ScrollToAnimation = /** @class */ (function () {
    /**
     * Class Constructor.
     *
     * @param _container            The Container
     * @param _listenerTarget       The Element that listens for DOM Events
     * @param _isWindow             Whether or not the listener is the Window
     * @param _to                   Position to scroll to
     * @param _options              Additional options for scrolling
     * @param _isBrowser            Whether or not execution runs in the browser
     *                              (as opposed to the server)
     */
    function ScrollToAnimation(_container, _listenerTarget, _isWindow, _to, _options, _isBrowser) {
        var _this = this;
        this._container = _container;
        this._listenerTarget = _listenerTarget;
        this._isWindow = _isWindow;
        this._to = _to;
        this._options = _options;
        this._isBrowser = _isBrowser;
        /**
         * Recursively loop over the Scroll Animation
         */
        this._loop = function () {
            _this._timeLapsed += _this._tick;
            _this._percentage = (_this._timeLapsed / _this._options.duration);
            _this._percentage = (_this._percentage > 1) ? 1 : _this._percentage;
            // Position Update
            _this._position = _this._startPosition +
                ((_this._startPosition - _this._to <= 0 ? 1 : -1) *
                    _this._distance *
                    EASING[_this._options.easing](_this._percentage));
            if (_this._lastPosition !== null && _this._position === _this._lastPosition) {
                _this.stop();
            }
            else {
                _this._source$.next(_this._position);
                _this._isWindow
                    ? _this._listenerTarget.scrollTo(0, Math.floor(_this._position))
                    : _this._container.scrollTop = Math.floor(_this._position);
                _this._lastPosition = _this._position;
            }
        };
        this._tick = 16;
        this._interval = null;
        this._lastPosition = null;
        this._timeLapsed = 0;
        this._windowScrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
        if (!this._container) {
            this._startPosition = this._windowScrollTop;
        }
        else {
            this._startPosition = this._isWindow ? this._windowScrollTop : this._container.scrollTop;
        }
        // Correction for Starting Position of nested HTML Elements
        if (this._container && !this._isWindow) {
            this._to = this._to - this._container.getBoundingClientRect().top + this._startPosition;
        }
        // Set Distance
        /** @type {?} */
        var directionalDistance = this._startPosition - this._to;
        this._distance = this._container ? Math.abs(this._startPosition - this._to) : this._to;
        this._mappedOffset = this._options.offset;
        // Set offset from Offset Map
        if (this._isBrowser) {
            this._options
                .offsetMap
                .forEach(function (value, key) { return _this._mappedOffset = window.innerWidth > key ? value : _this._mappedOffset; });
        }
        this._distance += this._mappedOffset * (directionalDistance <= 0 ? 1 : -1);
        this._source$ = new rxjs_index__WEBPACK_IMPORTED_MODULE_2__["ReplaySubject"]();
    }
    /**
     * Start the new Scroll Animation.
     *
     * @returns         Observable containing a number
     */
    /**
     * Start the new Scroll Animation.
     *
     * @return {?} Observable containing a number
     */
    ScrollToAnimation.prototype.start = /**
     * Start the new Scroll Animation.
     *
     * @return {?} Observable containing a number
     */
    function () {
        clearInterval(this._interval);
        this._interval = setInterval(this._loop, this._tick);
        return this._source$.asObservable();
    };
    /**
     * Stop the current Scroll Animation Loop.
     *
     * @param force 			    Force to stop the Animation Loop
     * @returns               Void
     */
    /**
     * Stop the current Scroll Animation Loop.
     *
     * @return {?} Void
     */
    ScrollToAnimation.prototype.stop = /**
     * Stop the current Scroll Animation Loop.
     *
     * @return {?} Void
     */
    function () {
        clearInterval(this._interval);
        this._interval = null;
        this._source$.complete();
    };
    return ScrollToAnimation;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * The Scroll To Service handles starting, interrupting
 * and ending the actual Scroll Animation. It provides
 * some utilities to find the proper HTML Element on a
 * given page to setup Event Listeners and calculate
 * distances for the Animation.
 */
var ScrollToService = /** @class */ (function () {
    /**
     * Construct and setup required paratemeters.
     *
     * @param _document         A Reference to the Document
     * @param _platformId       Angular Platform ID
     */
    function ScrollToService(_document, _platformId) {
        this._document = _document;
        this._platformId = _platformId;
        this._interruptiveEvents = ['mousewheel', 'DOMMouseScroll', 'touchstart'];
    }
    /**
     * Target an Element to scroll to. Notice that the `TimeOut` decorator
     * ensures the executing to take place in the next Angular lifecycle.
     * This allows for scrolling to elements that are e.g. initially hidden
     * by means of `*ngIf`, but ought to be scrolled to eventually.
     *
     * @todo type 'any' in Observable should become custom type like 'ScrollToEvent' (base class), see issue comment:
     * 	- https://github.com/nicky-lenaers/ngx-scroll-to/issues/10#issuecomment-317198481
     *
     * @param options         Configuration Object
     * @returns               Observable
     */
    /**
     * Target an Element to scroll to. Notice that the `TimeOut` decorator
     * ensures the executing to take place in the next Angular lifecycle.
     * This allows for scrolling to elements that are e.g. initially hidden
     * by means of `*ngIf`, but ought to be scrolled to eventually.
     *
     * \@todo type 'any' in Observable should become custom type like 'ScrollToEvent' (base class), see issue comment:
     * 	- https://github.com/nicky-lenaers/ngx-scroll-to/issues/10#issuecomment-317198481
     *
     * @param {?} options         Configuration Object
     * @return {?} Observable
     */
    ScrollToService.prototype.scrollTo = /**
     * Target an Element to scroll to. Notice that the `TimeOut` decorator
     * ensures the executing to take place in the next Angular lifecycle.
     * This allows for scrolling to elements that are e.g. initially hidden
     * by means of `*ngIf`, but ought to be scrolled to eventually.
     *
     * \@todo type 'any' in Observable should become custom type like 'ScrollToEvent' (base class), see issue comment:
     * 	- https://github.com/nicky-lenaers/ngx-scroll-to/issues/10#issuecomment-317198481
     *
     * @param {?} options         Configuration Object
     * @return {?} Observable
     */
    function (options) {
        if (!Object(_angular_common__WEBPACK_IMPORTED_MODULE_1__["isPlatformBrowser"])(this._platformId))
            return new rxjs_index__WEBPACK_IMPORTED_MODULE_2__["ReplaySubject"]().asObservable();
        return this._start(options);
    };
    /**
     * Start a new Animation.
     *
     * @todo Emit proper events from subscription
     *
     * @param options         Configuration Object
     * @returns               Observable
     */
    /**
     * Start a new Animation.
     *
     * \@todo Emit proper events from subscription
     *
     * @private
     * @param {?} options         Configuration Object
     * @return {?} Observable
     */
    ScrollToService.prototype._start = /**
     * Start a new Animation.
     *
     * \@todo Emit proper events from subscription
     *
     * @private
     * @param {?} options         Configuration Object
     * @return {?} Observable
     */
    function (options) {
        var _this = this;
        // Merge config with default values
        /** @type {?} */
        var mergedConfigOptions = (/** @type {?} */ (Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, (/** @type {?} */ (DEFAULTS)), options)));
        if (this._animation)
            this._animation.stop();
        /** @type {?} */
        var targetNode = this._getNode(mergedConfigOptions.target);
        if (mergedConfigOptions.target && !targetNode)
            return Object(rxjs_index__WEBPACK_IMPORTED_MODULE_2__["throwError"])('Unable to find Target Element');
        /** @type {?} */
        var container = this._getContainer(mergedConfigOptions, targetNode);
        if (mergedConfigOptions.container && !container)
            return Object(rxjs_index__WEBPACK_IMPORTED_MODULE_2__["throwError"])('Unable to find Container Element');
        /** @type {?} */
        var listenerTarget = this._getListenerTarget(container) || window;
        /** @type {?} */
        var to = container ? container.getBoundingClientRect().top : 0;
        if (targetNode) {
            to = isWindow(listenerTarget) ? targetNode.offsetTop : targetNode.getBoundingClientRect().top;
        }
        // Create Animation
        this._animation = new ScrollToAnimation(container, listenerTarget, isWindow(listenerTarget), to, mergedConfigOptions, Object(_angular_common__WEBPACK_IMPORTED_MODULE_1__["isPlatformBrowser"])(this._platformId));
        /** @type {?} */
        var onInterrupt = function () { return _this._animation.stop(); };
        this._addInterruptiveEventListeners(listenerTarget, onInterrupt);
        // Start Animation
        /** @type {?} */
        var animation$ = this._animation.start();
        this._subscribeToAnimation(animation$, listenerTarget, onInterrupt);
        return animation$;
    };
    /**
     * Subscribe to the events emitted from the Scrolling
     * Animation. Events might be used for e.g. unsubscribing
     * once finished.
     *
     * @param animation$              The Animation Observable
     * @param listenerTarget          The Listener Target for events
     * @param onInterrupt             The handler for Interruptive Events
     * @returns                       Void
     */
    /**
     * Subscribe to the events emitted from the Scrolling
     * Animation. Events might be used for e.g. unsubscribing
     * once finished.
     *
     * @private
     * @param {?} animation$              The Animation Observable
     * @param {?} listenerTarget          The Listener Target for events
     * @param {?} onInterrupt             The handler for Interruptive Events
     * @return {?} Void
     */
    ScrollToService.prototype._subscribeToAnimation = /**
     * Subscribe to the events emitted from the Scrolling
     * Animation. Events might be used for e.g. unsubscribing
     * once finished.
     *
     * @private
     * @param {?} animation$              The Animation Observable
     * @param {?} listenerTarget          The Listener Target for events
     * @param {?} onInterrupt             The handler for Interruptive Events
     * @return {?} Void
     */
    function (animation$, listenerTarget, onInterrupt) {
        var _this = this;
        /** @type {?} */
        var subscription = animation$
            .subscribe(function () { }, function () { }, function () {
            _this._removeInterruptiveEventListeners(_this._interruptiveEvents, listenerTarget, onInterrupt);
            subscription.unsubscribe();
        });
    };
    /**
     * Get the container HTML Element in which
     * the scrolling should happen.
     *
     * @param options         The Merged Configuration Object
     * @param targetNode    the targeted HTMLElement
     * @returns
     */
    /**
     * Get the container HTML Element in which
     * the scrolling should happen.
     *
     * @private
     * @param {?} options         The Merged Configuration Object
     * @param {?} targetNode    the targeted HTMLElement
     * @return {?}
     */
    ScrollToService.prototype._getContainer = /**
     * Get the container HTML Element in which
     * the scrolling should happen.
     *
     * @private
     * @param {?} options         The Merged Configuration Object
     * @param {?} targetNode    the targeted HTMLElement
     * @return {?}
     */
    function (options, targetNode) {
        /** @type {?} */
        var container = null;
        if (options.container) {
            container = this._getNode(options.container, true);
        }
        else if (targetNode) {
            container = this._getFirstScrollableParent(targetNode);
        }
        return container;
    };
    /**
     * Add listeners for the Animation Interruptive Events
     * to the Listener Target.
     *
     * @param events            List of events to listen to
     * @param listenerTarget    Target to attach the listener on
     * @param handler           Handler for when the listener fires
     * @returns                 Void
     */
    /**
     * Add listeners for the Animation Interruptive Events
     * to the Listener Target.
     *
     * @private
     * @param {?} listenerTarget    Target to attach the listener on
     * @param {?} handler           Handler for when the listener fires
     * @return {?} Void
     */
    ScrollToService.prototype._addInterruptiveEventListeners = /**
     * Add listeners for the Animation Interruptive Events
     * to the Listener Target.
     *
     * @private
     * @param {?} listenerTarget    Target to attach the listener on
     * @param {?} handler           Handler for when the listener fires
     * @return {?} Void
     */
    function (listenerTarget, handler) {
        var _this = this;
        if (!listenerTarget)
            listenerTarget = window;
        this._interruptiveEvents
            .forEach(function (event) { return listenerTarget
            .addEventListener(event, handler, _this._supportPassive() ? { passive: true } : false); });
    };
    /**
     * Feature-detect support for passive event listeners.
     *
     * @returns       Whether or not passive event listeners are supported
     */
    /**
     * Feature-detect support for passive event listeners.
     *
     * @private
     * @return {?} Whether or not passive event listeners are supported
     */
    ScrollToService.prototype._supportPassive = /**
     * Feature-detect support for passive event listeners.
     *
     * @private
     * @return {?} Whether or not passive event listeners are supported
     */
    function () {
        /** @type {?} */
        var supportsPassive = false;
        try {
            /** @type {?} */
            var opts = Object.defineProperty({}, 'passive', {
                get: function () {
                    supportsPassive = true;
                }
            });
            window.addEventListener('testPassive', null, opts);
            window.removeEventListener('testPassive', null, opts);
        }
        catch (e) { }
        return supportsPassive;
    };
    /**
     * Remove listeners for the Animation Interrupt Event from
     * the Listener Target. Specifying the correct handler prevents
     * memory leaks and makes the allocated memory available for
     * Garbage Collection.
     *
     * @param events            List of Interruptive Events to remove
     * @param listenerTarget    Target to attach the listener on
     * @param handler           Handler for when the listener fires
     * @returns                 Void
     */
    /**
     * Remove listeners for the Animation Interrupt Event from
     * the Listener Target. Specifying the correct handler prevents
     * memory leaks and makes the allocated memory available for
     * Garbage Collection.
     *
     * @private
     * @param {?} events            List of Interruptive Events to remove
     * @param {?} listenerTarget    Target to attach the listener on
     * @param {?} handler           Handler for when the listener fires
     * @return {?} Void
     */
    ScrollToService.prototype._removeInterruptiveEventListeners = /**
     * Remove listeners for the Animation Interrupt Event from
     * the Listener Target. Specifying the correct handler prevents
     * memory leaks and makes the allocated memory available for
     * Garbage Collection.
     *
     * @private
     * @param {?} events            List of Interruptive Events to remove
     * @param {?} listenerTarget    Target to attach the listener on
     * @param {?} handler           Handler for when the listener fires
     * @return {?} Void
     */
    function (events, listenerTarget, handler) {
        if (!listenerTarget)
            listenerTarget = window;
        events.forEach(function (event) { return listenerTarget.removeEventListener(event, handler); });
    };
    /**
     * Find the first scrollable parent Node of a given
     * Element. The DOM Tree gets searched upwards
     * to find this first scrollable parent. Parents might
     * be ignored by CSS styles applied to the HTML Element.
     *
     * @param nativeElement     The Element to search the DOM Tree upwards from
     * @returns                 The first scrollable parent HTML Element
     */
    /**
     * Find the first scrollable parent Node of a given
     * Element. The DOM Tree gets searched upwards
     * to find this first scrollable parent. Parents might
     * be ignored by CSS styles applied to the HTML Element.
     *
     * @private
     * @param {?} nativeElement     The Element to search the DOM Tree upwards from
     * @return {?} The first scrollable parent HTML Element
     */
    ScrollToService.prototype._getFirstScrollableParent = /**
     * Find the first scrollable parent Node of a given
     * Element. The DOM Tree gets searched upwards
     * to find this first scrollable parent. Parents might
     * be ignored by CSS styles applied to the HTML Element.
     *
     * @private
     * @param {?} nativeElement     The Element to search the DOM Tree upwards from
     * @return {?} The first scrollable parent HTML Element
     */
    function (nativeElement) {
        /** @type {?} */
        var style = window.getComputedStyle(nativeElement);
        /** @type {?} */
        var overflowRegex = /(auto|scroll|overlay)/;
        if (style.position === 'fixed')
            return null;
        for (var parent_1 = nativeElement; parent_1 = parent_1.parentElement; null) {
            style = window.getComputedStyle(parent_1);
            if (style.position === 'absolute'
                || style.overflow === 'hidden'
                || style.overflowY === 'hidden')
                continue;
            if (overflowRegex.test(style.overflow + style.overflowY)
                || parent_1.tagName === 'BODY')
                return parent_1;
        }
        return null;
    };
    /**
     * Get the Target Node to scroll to.
     *
     * @param id              The given ID of the node, either a string or
     *                        an element reference
     * @param allowBodyTag    Indicate whether or not the Document Body is
     *                        considered a valid Target Node
     * @returns               The Target Node to scroll to
     */
    /**
     * Get the Target Node to scroll to.
     *
     * @private
     * @param {?} id              The given ID of the node, either a string or
     *                        an element reference
     * @param {?=} allowBodyTag    Indicate whether or not the Document Body is
     *                        considered a valid Target Node
     * @return {?} The Target Node to scroll to
     */
    ScrollToService.prototype._getNode = /**
     * Get the Target Node to scroll to.
     *
     * @private
     * @param {?} id              The given ID of the node, either a string or
     *                        an element reference
     * @param {?=} allowBodyTag    Indicate whether or not the Document Body is
     *                        considered a valid Target Node
     * @return {?} The Target Node to scroll to
     */
    function (id, allowBodyTag) {
        if (allowBodyTag === void 0) { allowBodyTag = false; }
        /** @type {?} */
        var targetNode;
        if (isString(id)) {
            if (allowBodyTag && (id === 'body' || id === 'BODY')) {
                targetNode = this._document.body;
            }
            else {
                targetNode = this._document.getElementById(stripHash(id));
            }
        }
        else if (isNumber(id)) {
            targetNode = this._document.getElementById(String(id));
        }
        else if (isElementRef(id)) {
            targetNode = id.nativeElement;
        }
        else if (isNativeElement(id)) {
            targetNode = id;
        }
        return targetNode;
    };
    /**
     * Retrieve the Listener target. This Listener Target is used
     * to attach Event Listeners on. In case of the target being
     * the Document Body, we need the actual `window` to listen
     * for events.
     *
     * @param container           The HTML Container element
     * @returns                   The Listener Target to attach events on
     */
    /**
     * Retrieve the Listener target. This Listener Target is used
     * to attach Event Listeners on. In case of the target being
     * the Document Body, we need the actual `window` to listen
     * for events.
     *
     * @private
     * @param {?} container           The HTML Container element
     * @return {?} The Listener Target to attach events on
     */
    ScrollToService.prototype._getListenerTarget = /**
     * Retrieve the Listener target. This Listener Target is used
     * to attach Event Listeners on. In case of the target being
     * the Document Body, we need the actual `window` to listen
     * for events.
     *
     * @private
     * @param {?} container           The HTML Container element
     * @return {?} The Listener Target to attach events on
     */
    function (container) {
        if (!container)
            return null;
        return this._isDocumentBody(container) ? window : container;
    };
    /**
     * Test if a given HTML Element is the Document Body.
     *
     * @param element             The given HTML Element
     * @returns                   Whether or not the Element is the
     *                            Document Body Element
     */
    /**
     * Test if a given HTML Element is the Document Body.
     *
     * @private
     * @param {?} element             The given HTML Element
     * @return {?} Whether or not the Element is the
     *                            Document Body Element
     */
    ScrollToService.prototype._isDocumentBody = /**
     * Test if a given HTML Element is the Document Body.
     *
     * @private
     * @param {?} element             The given HTML Element
     * @return {?} Whether or not the Element is the
     *                            Document Body Element
     */
    function (element) {
        return element.tagName.toUpperCase() === 'BODY';
    };
    ScrollToService.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Injectable"] }
    ];
    /** @nocollapse */
    ScrollToService.ctorParameters = function () { return [
        { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Inject"], args: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["DOCUMENT"],] }] },
        { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Inject"], args: [_angular_core__WEBPACK_IMPORTED_MODULE_3__["PLATFORM_ID"],] }] }
    ]; };
    return ScrollToService;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/* tslint:disable */
var ScrollToDirective = /** @class */ (function () {
    function ScrollToDirective(_elementRef, _scrollToService, _renderer2) {
        this._elementRef = _elementRef;
        this._scrollToService = _scrollToService;
        this._renderer2 = _renderer2;
        this.ngxScrollTo = DEFAULTS.target;
        this.ngxScrollToEvent = DEFAULTS.action;
        this.ngxScrollToDuration = DEFAULTS.duration;
        this.ngxScrollToEasing = DEFAULTS.easing;
        this.ngxScrollToOffset = DEFAULTS.offset;
        this.ngxScrollToOffsetMap = DEFAULTS.offsetMap;
    }
    /**
     * Angular Lifecycle Hook - After View Init
     *
     * @todo Implement Subscription for Events
     *
     * @returns void
     */
    /**
     * Angular Lifecycle Hook - After View Init
     *
     * \@todo Implement Subscription for Events
     *
     * @return {?} void
     */
    ScrollToDirective.prototype.ngAfterViewInit = /**
     * Angular Lifecycle Hook - After View Init
     *
     * \@todo Implement Subscription for Events
     *
     * @return {?} void
     */
    function () {
        var _this = this;
        // Test Event Support
        if (EVENTS.indexOf(this.ngxScrollToEvent) === -1)
            throw new Error("Unsupported Event '" + this.ngxScrollToEvent + "'");
        // Listen for the trigger...
        this._renderer2.listen(this._elementRef.nativeElement, this.ngxScrollToEvent, function (event) {
            _this._options = {
                target: _this.ngxScrollTo,
                duration: _this.ngxScrollToDuration,
                easing: _this.ngxScrollToEasing,
                offset: _this.ngxScrollToOffset,
                offsetMap: _this.ngxScrollToOffsetMap
            };
            _this._scrollToService.scrollTo(_this._options);
        });
    };
    ScrollToDirective.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Directive"], args: [{
                    selector: '[ngx-scroll-to]'
                },] }
    ];
    /** @nocollapse */
    ScrollToDirective.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ElementRef"] },
        { type: ScrollToService },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Renderer2"] }
    ]; };
    ScrollToDirective.propDecorators = {
        ngxScrollTo: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"], args: ['ngx-scroll-to',] }],
        ngxScrollToEvent: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"], args: ['ngx-scroll-to-event',] }],
        ngxScrollToDuration: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"], args: ['ngx-scroll-to-duration',] }],
        ngxScrollToEasing: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"], args: ['ngx-scroll-to-easing',] }],
        ngxScrollToOffset: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"], args: ['ngx-scroll-to-offset',] }],
        ngxScrollToOffsetMap: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"], args: ['ngx-scroll-to-offset-map',] }]
    };
    return ScrollToDirective;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Scroll To Module
 */
var ScrollToModule = /** @class */ (function () {
    function ScrollToModule() {
    }
    /**
     * Guaranteed singletons for provided Services across App.
     *
     * @return          An Angular Module with Providers
     */
    /**
     * Guaranteed singletons for provided Services across App.
     *
     * @return {?} An Angular Module with Providers
     */
    ScrollToModule.forRoot = /**
     * Guaranteed singletons for provided Services across App.
     *
     * @return {?} An Angular Module with Providers
     */
    function () {
        return {
            ngModule: ScrollToModule,
            providers: [
                ScrollToService
            ]
        };
    };
    ScrollToModule.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"], args: [{
                    declarations: [
                        ScrollToDirective
                    ],
                    exports: [
                        ScrollToDirective
                    ]
                },] }
    ];
    return ScrollToModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */



//# sourceMappingURL=nicky-lenaers-ngx-scroll-to.js.map

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/landingpage/landingpage.component.html":
/*!**********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/landingpage/landingpage.component.html ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-expand-lg navbar-light fixed-top\" id=\"mainNav\">\r\n    <div class=\"container\">\r\n      <a class=\"navbar-brand js-scroll-trigger\" routerLink=\"/\"><img src=\"../../assets/logo2.png\" style=\"height: 40px;width: 350px;\" alt=\"\"></a>\r\n      <button class=\"navbar-toggler navbar-toggler-right\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarResponsive\" aria-controls=\"navbarResponsive\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\r\n        Menu\r\n        <i class=\"fas fa-bars\"></i>\r\n      </button>\r\n      <div class=\"collapse navbar-collapse navbar-ex1-collapse\" id=\"navbarResponsive\">\r\n        <ul class=\"navbar-nav ml-auto\">\r\n          <li class=\"nav-item\">\r\n            <a class=\"nav-link js-scroll-trigger\" [ngx-scroll-to]=\"'#about'\">About</a>\r\n          </li>\r\n          <li class=\"nav-item\">\r\n            <a class=\"nav-link js-scroll-trigger\" [ngx-scroll-to]=\"'#projects'\">Projects</a>\r\n          </li>\r\n          <li class=\"nav-item\">\r\n            <a class=\"nav-link js-scroll-trigger\" [ngx-scroll-to]=\"'#contact'\">Contact</a>\r\n          </li>\r\n        </ul>\r\n      </div>\r\n    </div>\r\n  </nav>\r\n<!-- Header -->\r\n<header class=\"masthead background-gold\">\r\n  <div class=\"container d-flex h-100 align-items-center\">\r\n        <div class=\"mx-auto text-center\">\r\n          <img class=\"diamonbuilt-logo\" src=\"../../assets/logo.png\" alt=\"Diamondbuilt\">\r\n          <h1 class=\"mx-auto my-0 text-uppercase\">Diamondbuilt Development Corporation</h1>\r\n          <img class=\"img-webuildtolast\" src=\"../../assets/webuildtolast.png\" alt=\"Diamondbuilt\">\r\n        </div>\r\n  </div>\r\n</header>\r\n\r\n<!-- About Section -->\r\n<section id=\"about\" class=\"about-section text-center background-gold\">\r\n  <div class=\"container\">\r\n    <div class=\"row\">\r\n      <div class=\"col-lg-1 mx-auto\"></div>\r\n      <div class=\"col-lg-10 mx-auto\">\r\n        <br>\r\n        <br>\r\n        <h2 class=\"text-black mb-4\">About Us</h2>\r\n        <p><b>Diamondbuilt Development Corporation</b> is a real estate company based in Cebu City and was founded by a businesswoman who is a business graduate at the University of San Carlos. The name Diamondbuilt is inspired by her perspective of the company, it means unbeatable, long-lasting, classy and a symbol of success. <br><br>\r\n        <b>Diamondbuilt Development Corporation</b> is established in 2018 and continues to operate based on the principle of providing high quality commercial and residential properties to individuals, families, and investors. DBDC strongly believes in upholding exceptional service to the customers from their reservation to finally having their dream place they wish to keep for life.</p>\r\n        <h2 class=\"text-black mb-4\">Mission</h2>\r\n        <p>\r\n            Our projects at Diamondbuilt Development Corporation is to develop and deliver a comfortable living environment across the entire nation and become one of the most reputable and valuable real estate developers in the country with integrity and accountability using both proven and innovative methods.\r\n        </p>\r\n        <div class=\"featured-text w-100 my-auto text-center text-lg-left\">\r\n            <h2 class=\"text-black mb-4\">Vision</h2>\r\n            <p class=\"mb-0 text-black\">Our vision is to deliver a high quality Residential and\r\n              Commercial projects that correlate with Global developers. <br>\r\n              We intend to achieve this vision in the context of our core\r\n              values.\r\n            </p>\r\n            <ul>\r\n              <li>Efficiency</li>\r\n              <li>Growth</li>\r\n              <li>Professionalism</li>\r\n              <li>Quality</li>\r\n            </ul>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"col-lg-1 mx-auto\"></div>\r\n  </div>\r\n    \r\n</section>\r\n\r\n  <!-- projects Section -->\r\n  <section id=\"projects\" class=\"projects-section-imperialhights bg-light\">\r\n    <div class=\"container\">\r\n        <div class=\"mx-auto text-center\">\r\n            <button class=\"btnProject\"   routerLink=\"/projects\" [ngx-scroll-to]=\"'#project'\">More Info</button>\r\n        </div>\r\n    </div>\r\n  </section>\r\n  <!-- projects Section -->\r\n  <section id=\"resortandresidence\" class=\"projects-section-resortandresidence bg-light\">\r\n      <div class=\"container\">\r\n          <div class=\"mx-auto text-center\">\r\n              <button class=\"btnProject\"   routerLink=\"/resorts-and-residences\" [ngx-scroll-to]=\"'#resortandresidencedetail'\">More Info</button>\r\n          </div>\r\n      </div>\r\n    </section>\r\n\r\n  <!-- Contact Section -->\r\n  <section id=\"contact\" class=\"contact-section background-gold\">\r\n    <div class=\"container\">\r\n        <div class=\"row\">\r\n            <div class=\"col-lg-2\"></div>\r\n              <div class=\"col-md-10\">\r\n                  <div class=\"tab-content\">\r\n                    <div id=\"cebubranch\"  class=\"tab-pane fade active show\">\r\n                          <div class=\"row\">\r\n                            <div class=\"col-md-5\">\r\n                              <p class=\"contact-header\">For more information about projects, please contact</p>\r\n                              <br>\r\n                              <p class=\"companyname\">Diamondbuilt Development Corporation Unit F, 3rd Floor B&F Paray Bldg., Capitol, Cebu City</p>\r\n                                  <br>\r\n                              <ul class=\"contactList\">\r\n                                <li>Marketing Head</li>\r\n                                <li><img class=\"phone\" src=\"../../assets/icon/phone.png\" alt=\"\">\r\n                                  0943 310 2682</li>\r\n                                <li>0915 873 6360</li>\r\n                              </ul>\r\n                              <ul class=\"contactList\">\r\n                                <li>Landline Office</li>\r\n                                <li><img class=\"phone\" src=\"../../assets/icon/phone.png\" alt=\"\">\r\n                                  (032)4790305</li>\r\n                              </ul>\r\n                              <ul class=\"contactList\">\r\n                                <li>Office phone number</li>\r\n                                <li><img class=\"phone\" src=\"../../assets/icon/phone.png\" alt=\"\">09950915505 / 09398587206</li>\r\n                              </ul>\r\n                              <ul class=\"contactList\">\r\n                                <li>Accounting</li>\r\n                                <li><img class=\"phone\" src=\"../../assets/icon/phone.png\" alt=\"\"> 09273743294 / 09297954014</li>\r\n                              </ul>\r\n                            </div>\r\n                            <div class=\"col-md-7\"><img src=\"../../assets/images/office-map.png\" class=\"contactmap float-right img-fluid img-rounded\"></div>\r\n                          </div>\r\n                    </div>\r\n                  </div>\r\n              </div>\r\n\r\n        </div>  \r\n    </div>\r\n</section>\r\n\r\n\r\n\r\n  \r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/landingpage/layout/layout.component.html":
/*!************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/landingpage/layout/layout.component.html ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>\r\n\r\n<!-- Footer -->\r\n<footer class=\"bg-black\">\r\n  <div class=\"container\">\r\n    <div class=\"row\">\r\n      <div class=\"col-lg-6\">\r\n        <p>&copy; 2019 DIAMONDBUILT DEVELOPMENT CORPORATION</p>\r\n      </div>\r\n      <div class=\"col-lg-6\">\r\n        <ul class=\"iconlist\">\r\n          <li><a href=\"https://www.facebook.com\"><img alt=\"\" class=\"icon\" src=\"../../../assets/icon/fb.png\"></a></li>\r\n          <li><a href=\"https://twitter.com\"><img alt=\"\" class=\"icon\" src=\"../../../assets/icon/instagram.png\"></a></li>\r\n          <li><a href=\"https://www.instagram.com\"><img alt=\"\" class=\"icon\" src=\"../../../assets/icon/twitter.png\"></a>\r\n          </li>\r\n        </ul>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</footer>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/landingpage/project/projects/projects.component.html":
/*!************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/landingpage/project/projects/projects.component.html ***!
  \************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-expand-lg navbar-light fixed-top\" id=\"mainNav\">\r\n  <div class=\"container\">\r\n    <a class=\"navbar-brand js-scroll-trigger\" routerLink=\"/\"><img src=\"../../assets/logo2.png\"\r\n        style=\"height: 40px;width: 350px;\" alt=\"\"></a>\r\n    <button class=\"navbar-toggler navbar-toggler-right\" type=\"button\" data-toggle=\"collapse\"\r\n      data-target=\"#navbarResponsive\" aria-controls=\"navbarResponsive\" aria-expanded=\"false\"\r\n      aria-label=\"Toggle navigation\">\r\n      Menu\r\n      <i class=\"fas fa-bars\"></i>\r\n    </button>\r\n    <div class=\"collapse navbar-collapse navbar-ex1-collapse\" id=\"navbarResponsive\">\r\n      <ul class=\"navbar-nav ml-auto\">\r\n        <li class=\"nav-item\">\r\n          <a class=\"nav-link js-scroll-trigger\">About</a>\r\n        </li>\r\n        <li class=\"nav-item\">\r\n          <a class=\"nav-link js-scroll-trigger\">Projects</a>\r\n        </li>\r\n        <li class=\"nav-item\">\r\n          <a class=\"nav-link js-scroll-trigger\">Contact</a>\r\n        </li>\r\n      </ul>\r\n    </div>\r\n  </div>\r\n</nav>\r\n\r\n<div class=\"background-block\">\r\n  <div class=\"container projects background-block\" id=\"project\">\r\n    <h2 class=\"text-black-50\"></h2>\r\n    <hr>\r\n    <!-- Featured projects Row -->\r\n    <div class=\"row align-items-center no-gutters\">\r\n      <div class=\"col-xl-6 col-lg-6 text-center\">\r\n        <img class=\"img-project mb-3 mb-lg-0\" src=\"../../assets/images/project/project-logo.png\" alt=\"\"> <br><br>\r\n        <div class=\"featured-text text-center text-lg-left\">\r\n          <h4 class=\"text-white\">Detail</h4>\r\n          <p class=\"text-white\">Total area: 13,076 sqm. <br>\r\n            Number of units: 122 units <br>\r\n            Location: Mansawa Binaliw, Cebu City</p>\r\n        </div>\r\n      </div>\r\n      <div class=\"col-xl-6 col-lg-5\">\r\n        <div class=\"embed-responsive embed-responsive-16by9 background-block\">\r\n          <iframe width=\"560\" height=\"315\" src=\"https://www.youtube.com/embed/X6squCPz1Tw\" frameborder=\"0\"\r\n            allow=\"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture\" allowfullscreen></iframe>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <br>\r\n    <!-- projects One Row -->\r\n    <div class=\"row justify-content-center no-gutters mb-5 mb-lg-0 projects-1 background-block\">\r\n      <div class=\"col-lg-12\">\r\n        <img class=\"img-fluid\" src=\"../../assets/images/project/primitive.png\" alt=\"\">\r\n      </div>\r\n    </div>\r\n    <br><br>\r\n    <div class=\"row justify-content-center no-gutters mb-5 mb-lg-0 projects-1 background-block\">\r\n      <div class=\"col-lg-12\">\r\n        <img class=\"img-fluid\" src=\"../../assets/images/project/pantaleon.png\" alt=\"\">\r\n      </div>\r\n    </div>\r\n    <br><br>\r\n    <!-- projects One Row -->\r\n    <div class=\"row justify-content-center no-gutters mb-5 mb-lg-0 projects-1 background-block\">\r\n      <div class=\"col-lg-12\">\r\n        <img class=\"img-fluid\" src=\"../../assets/images/project/PAGE5.jpg\" alt=\"\">\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/landingpage/project/resord-and-residences/resord-and-residences.component.html":
/*!**************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/landingpage/project/resord-and-residences/resord-and-residences.component.html ***!
  \**************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-expand-lg navbar-light fixed-top\" id=\"mainNav\">\n    <div class=\"container\">\n      <a class=\"navbar-brand js-scroll-trigger\" routerLink=\"/\"><img src=\"../../assets/logo2.png\"\n          style=\"height: 40px;width: 350px;\" alt=\"\"></a>\n      <button class=\"navbar-toggler navbar-toggler-right\" type=\"button\" data-toggle=\"collapse\"\n        data-target=\"#navbarResponsive\" aria-controls=\"navbarResponsive\" aria-expanded=\"false\"\n        aria-label=\"Toggle navigation\">\n        Menu\n        <i class=\"fas fa-bars\"></i>\n      </button>\n      <div class=\"collapse navbar-collapse navbar-ex1-collapse\" id=\"navbarResponsive\">\n        <ul class=\"navbar-nav ml-auto\">\n          <li class=\"nav-item\">\n            <a class=\"nav-link js-scroll-trigger\">About</a>\n          </li>\n          <li class=\"nav-item\">\n            <a class=\"nav-link js-scroll-trigger\">Projects</a>\n          </li>\n          <li class=\"nav-item\">\n            <a class=\"nav-link js-scroll-trigger\">Contact</a>\n          </li>\n        </ul>\n      </div>\n    </div>\n  </nav>\n  \n  <div class=\"background-block\">\n    <div class=\"container projects background-block\" id=\"resortandresidencedetail\">\n      <h2 class=\"text-black-50\"></h2>\n      <hr>\n      <!-- Featured projects Row -->\n      <div class=\"row align-items-center no-gutters\">\n        <div class=\"col-xl-6 col-lg-6 text-center\">\n          <img class=\"img-project mb-3 mb-lg-0\" src=\"../../assets/images/resortandresidence/resortandresidence_logo.png\" alt=\"\"> <br><br>\n          <div class=\"featured-text text-center text-lg-left\">\n            <h4 class=\"text-white\">Detail</h4>\n            <p class=\"text-white\"> <br>\n               <br>\n               <br>\n               </p>\n          </div>\n        </div>\n        <div class=\"col-xl-6 col-lg-5\">\n          <div class=\"embed-responsive embed-responsive-16by9 background-block\">\n            <iframe width=\"560\" height=\"315\" src=\"https://filbrokerstorage.blob.core.windows.net/diamondbuilt/DIAMOND%20RESORT%20%26%20RESIDENCES%20VIDEO.mp4?sp=r&st=2020-01-14T03%3A40%3A56Z&se=2025-07-04T11%3A40%3A56Z&spr=https&sv=2019-02-02&sr=b&sig=t0N1h6KD4Pj4UXwD%2F5bZb%2BAMdInbUxYKrwfxbFS%2FDaE%3D&fbclid=IwAR2QJ43AUf44afkZsMxSeH1eSOezmhoRQh2cKVA2INmO69FCWg51d4dqyWk\" frameborder=\"0\"\n              allow=\"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture\" allowfullscreen></iframe>\n          </div>\n        </div>\n      </div>\n      <br>\n      <!-- projects One Row -->\n      <div class=\"row justify-content-center no-gutters mb-5 mb-lg-0 projects-1 background-block\">\n        <div class=\"col-lg-12\">\n          <img class=\"img-fluid\" src=\"../../assets/images/resortandresidence/club-house.png\" alt=\"\">\n        </div>\n      </div>\n      <br><br>\n      <div class=\"row justify-content-center no-gutters mb-5 mb-lg-0 projects-1 background-block\">\n        <div class=\"col-lg-12\">\n          <img class=\"img-fluid\" src=\"../../assets/images/resortandresidence/hotel-and-restaurant.png\" alt=\"\">\n        </div>\n      </div>\n      <br><br>\n      <!-- projects One Row -->\n      <div class=\"row justify-content-center no-gutters mb-5 mb-lg-0 projects-1 background-block\">\n        <div class=\"col-lg-12\">\n          <img class=\"img-fluid\" src=\"../../assets/images/resortandresidence/beach-aminities.png\" alt=\"\">\n        </div>\n      </div>\n      <div class=\"row justify-content-center no-gutters mb-5 mb-lg-0 projects-1 background-block\">\n        <div class=\"col-lg-12\">\n          <img class=\"img-fluid\" src=\"../../assets/images/resortandresidence/other-facilities.png\" alt=\"\">\n        </div>\n      </div>\n    </div>\n  </div>"

/***/ }),

/***/ "./node_modules/rxjs/index.js":
/*!************************************!*\
  !*** ./node_modules/rxjs/index.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Observable_1 = __webpack_require__(/*! ./internal/Observable */ "./node_modules/rxjs/internal/Observable.js");
exports.Observable = Observable_1.Observable;
var ConnectableObservable_1 = __webpack_require__(/*! ./internal/observable/ConnectableObservable */ "./node_modules/rxjs/internal/observable/ConnectableObservable.js");
exports.ConnectableObservable = ConnectableObservable_1.ConnectableObservable;
var groupBy_1 = __webpack_require__(/*! ./internal/operators/groupBy */ "./node_modules/rxjs/internal/operators/groupBy.js");
exports.GroupedObservable = groupBy_1.GroupedObservable;
var observable_1 = __webpack_require__(/*! ./internal/symbol/observable */ "./node_modules/rxjs/internal/symbol/observable.js");
exports.observable = observable_1.observable;
var Subject_1 = __webpack_require__(/*! ./internal/Subject */ "./node_modules/rxjs/internal/Subject.js");
exports.Subject = Subject_1.Subject;
var BehaviorSubject_1 = __webpack_require__(/*! ./internal/BehaviorSubject */ "./node_modules/rxjs/internal/BehaviorSubject.js");
exports.BehaviorSubject = BehaviorSubject_1.BehaviorSubject;
var ReplaySubject_1 = __webpack_require__(/*! ./internal/ReplaySubject */ "./node_modules/rxjs/internal/ReplaySubject.js");
exports.ReplaySubject = ReplaySubject_1.ReplaySubject;
var AsyncSubject_1 = __webpack_require__(/*! ./internal/AsyncSubject */ "./node_modules/rxjs/internal/AsyncSubject.js");
exports.AsyncSubject = AsyncSubject_1.AsyncSubject;
var asap_1 = __webpack_require__(/*! ./internal/scheduler/asap */ "./node_modules/rxjs/internal/scheduler/asap.js");
exports.asapScheduler = asap_1.asap;
var async_1 = __webpack_require__(/*! ./internal/scheduler/async */ "./node_modules/rxjs/internal/scheduler/async.js");
exports.asyncScheduler = async_1.async;
var queue_1 = __webpack_require__(/*! ./internal/scheduler/queue */ "./node_modules/rxjs/internal/scheduler/queue.js");
exports.queueScheduler = queue_1.queue;
var animationFrame_1 = __webpack_require__(/*! ./internal/scheduler/animationFrame */ "./node_modules/rxjs/internal/scheduler/animationFrame.js");
exports.animationFrameScheduler = animationFrame_1.animationFrame;
var VirtualTimeScheduler_1 = __webpack_require__(/*! ./internal/scheduler/VirtualTimeScheduler */ "./node_modules/rxjs/internal/scheduler/VirtualTimeScheduler.js");
exports.VirtualTimeScheduler = VirtualTimeScheduler_1.VirtualTimeScheduler;
exports.VirtualAction = VirtualTimeScheduler_1.VirtualAction;
var Scheduler_1 = __webpack_require__(/*! ./internal/Scheduler */ "./node_modules/rxjs/internal/Scheduler.js");
exports.Scheduler = Scheduler_1.Scheduler;
var Subscription_1 = __webpack_require__(/*! ./internal/Subscription */ "./node_modules/rxjs/internal/Subscription.js");
exports.Subscription = Subscription_1.Subscription;
var Subscriber_1 = __webpack_require__(/*! ./internal/Subscriber */ "./node_modules/rxjs/internal/Subscriber.js");
exports.Subscriber = Subscriber_1.Subscriber;
var Notification_1 = __webpack_require__(/*! ./internal/Notification */ "./node_modules/rxjs/internal/Notification.js");
exports.Notification = Notification_1.Notification;
var pipe_1 = __webpack_require__(/*! ./internal/util/pipe */ "./node_modules/rxjs/internal/util/pipe.js");
exports.pipe = pipe_1.pipe;
var noop_1 = __webpack_require__(/*! ./internal/util/noop */ "./node_modules/rxjs/internal/util/noop.js");
exports.noop = noop_1.noop;
var identity_1 = __webpack_require__(/*! ./internal/util/identity */ "./node_modules/rxjs/internal/util/identity.js");
exports.identity = identity_1.identity;
var isObservable_1 = __webpack_require__(/*! ./internal/util/isObservable */ "./node_modules/rxjs/internal/util/isObservable.js");
exports.isObservable = isObservable_1.isObservable;
var ArgumentOutOfRangeError_1 = __webpack_require__(/*! ./internal/util/ArgumentOutOfRangeError */ "./node_modules/rxjs/internal/util/ArgumentOutOfRangeError.js");
exports.ArgumentOutOfRangeError = ArgumentOutOfRangeError_1.ArgumentOutOfRangeError;
var EmptyError_1 = __webpack_require__(/*! ./internal/util/EmptyError */ "./node_modules/rxjs/internal/util/EmptyError.js");
exports.EmptyError = EmptyError_1.EmptyError;
var ObjectUnsubscribedError_1 = __webpack_require__(/*! ./internal/util/ObjectUnsubscribedError */ "./node_modules/rxjs/internal/util/ObjectUnsubscribedError.js");
exports.ObjectUnsubscribedError = ObjectUnsubscribedError_1.ObjectUnsubscribedError;
var UnsubscriptionError_1 = __webpack_require__(/*! ./internal/util/UnsubscriptionError */ "./node_modules/rxjs/internal/util/UnsubscriptionError.js");
exports.UnsubscriptionError = UnsubscriptionError_1.UnsubscriptionError;
var TimeoutError_1 = __webpack_require__(/*! ./internal/util/TimeoutError */ "./node_modules/rxjs/internal/util/TimeoutError.js");
exports.TimeoutError = TimeoutError_1.TimeoutError;
var bindCallback_1 = __webpack_require__(/*! ./internal/observable/bindCallback */ "./node_modules/rxjs/internal/observable/bindCallback.js");
exports.bindCallback = bindCallback_1.bindCallback;
var bindNodeCallback_1 = __webpack_require__(/*! ./internal/observable/bindNodeCallback */ "./node_modules/rxjs/internal/observable/bindNodeCallback.js");
exports.bindNodeCallback = bindNodeCallback_1.bindNodeCallback;
var combineLatest_1 = __webpack_require__(/*! ./internal/observable/combineLatest */ "./node_modules/rxjs/internal/observable/combineLatest.js");
exports.combineLatest = combineLatest_1.combineLatest;
var concat_1 = __webpack_require__(/*! ./internal/observable/concat */ "./node_modules/rxjs/internal/observable/concat.js");
exports.concat = concat_1.concat;
var defer_1 = __webpack_require__(/*! ./internal/observable/defer */ "./node_modules/rxjs/internal/observable/defer.js");
exports.defer = defer_1.defer;
var empty_1 = __webpack_require__(/*! ./internal/observable/empty */ "./node_modules/rxjs/internal/observable/empty.js");
exports.empty = empty_1.empty;
var forkJoin_1 = __webpack_require__(/*! ./internal/observable/forkJoin */ "./node_modules/rxjs/internal/observable/forkJoin.js");
exports.forkJoin = forkJoin_1.forkJoin;
var from_1 = __webpack_require__(/*! ./internal/observable/from */ "./node_modules/rxjs/internal/observable/from.js");
exports.from = from_1.from;
var fromEvent_1 = __webpack_require__(/*! ./internal/observable/fromEvent */ "./node_modules/rxjs/internal/observable/fromEvent.js");
exports.fromEvent = fromEvent_1.fromEvent;
var fromEventPattern_1 = __webpack_require__(/*! ./internal/observable/fromEventPattern */ "./node_modules/rxjs/internal/observable/fromEventPattern.js");
exports.fromEventPattern = fromEventPattern_1.fromEventPattern;
var generate_1 = __webpack_require__(/*! ./internal/observable/generate */ "./node_modules/rxjs/internal/observable/generate.js");
exports.generate = generate_1.generate;
var iif_1 = __webpack_require__(/*! ./internal/observable/iif */ "./node_modules/rxjs/internal/observable/iif.js");
exports.iif = iif_1.iif;
var interval_1 = __webpack_require__(/*! ./internal/observable/interval */ "./node_modules/rxjs/internal/observable/interval.js");
exports.interval = interval_1.interval;
var merge_1 = __webpack_require__(/*! ./internal/observable/merge */ "./node_modules/rxjs/internal/observable/merge.js");
exports.merge = merge_1.merge;
var never_1 = __webpack_require__(/*! ./internal/observable/never */ "./node_modules/rxjs/internal/observable/never.js");
exports.never = never_1.never;
var of_1 = __webpack_require__(/*! ./internal/observable/of */ "./node_modules/rxjs/internal/observable/of.js");
exports.of = of_1.of;
var onErrorResumeNext_1 = __webpack_require__(/*! ./internal/observable/onErrorResumeNext */ "./node_modules/rxjs/internal/observable/onErrorResumeNext.js");
exports.onErrorResumeNext = onErrorResumeNext_1.onErrorResumeNext;
var pairs_1 = __webpack_require__(/*! ./internal/observable/pairs */ "./node_modules/rxjs/internal/observable/pairs.js");
exports.pairs = pairs_1.pairs;
var race_1 = __webpack_require__(/*! ./internal/observable/race */ "./node_modules/rxjs/internal/observable/race.js");
exports.race = race_1.race;
var range_1 = __webpack_require__(/*! ./internal/observable/range */ "./node_modules/rxjs/internal/observable/range.js");
exports.range = range_1.range;
var throwError_1 = __webpack_require__(/*! ./internal/observable/throwError */ "./node_modules/rxjs/internal/observable/throwError.js");
exports.throwError = throwError_1.throwError;
var timer_1 = __webpack_require__(/*! ./internal/observable/timer */ "./node_modules/rxjs/internal/observable/timer.js");
exports.timer = timer_1.timer;
var using_1 = __webpack_require__(/*! ./internal/observable/using */ "./node_modules/rxjs/internal/observable/using.js");
exports.using = using_1.using;
var zip_1 = __webpack_require__(/*! ./internal/observable/zip */ "./node_modules/rxjs/internal/observable/zip.js");
exports.zip = zip_1.zip;
var empty_2 = __webpack_require__(/*! ./internal/observable/empty */ "./node_modules/rxjs/internal/observable/empty.js");
exports.EMPTY = empty_2.EMPTY;
var never_2 = __webpack_require__(/*! ./internal/observable/never */ "./node_modules/rxjs/internal/observable/never.js");
exports.NEVER = never_2.NEVER;
var config_1 = __webpack_require__(/*! ./internal/config */ "./node_modules/rxjs/internal/config.js");
exports.config = config_1.config;
//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./node_modules/rxjs/internal/AsyncSubject.js":
/*!****************************************************!*\
  !*** ./node_modules/rxjs/internal/AsyncSubject.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var Subject_1 = __webpack_require__(/*! ./Subject */ "./node_modules/rxjs/internal/Subject.js");
var Subscription_1 = __webpack_require__(/*! ./Subscription */ "./node_modules/rxjs/internal/Subscription.js");
var AsyncSubject = (function (_super) {
    __extends(AsyncSubject, _super);
    function AsyncSubject() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.value = null;
        _this.hasNext = false;
        _this.hasCompleted = false;
        return _this;
    }
    AsyncSubject.prototype._subscribe = function (subscriber) {
        if (this.hasError) {
            subscriber.error(this.thrownError);
            return Subscription_1.Subscription.EMPTY;
        }
        else if (this.hasCompleted && this.hasNext) {
            subscriber.next(this.value);
            subscriber.complete();
            return Subscription_1.Subscription.EMPTY;
        }
        return _super.prototype._subscribe.call(this, subscriber);
    };
    AsyncSubject.prototype.next = function (value) {
        if (!this.hasCompleted) {
            this.value = value;
            this.hasNext = true;
        }
    };
    AsyncSubject.prototype.error = function (error) {
        if (!this.hasCompleted) {
            _super.prototype.error.call(this, error);
        }
    };
    AsyncSubject.prototype.complete = function () {
        this.hasCompleted = true;
        if (this.hasNext) {
            _super.prototype.next.call(this, this.value);
        }
        _super.prototype.complete.call(this);
    };
    return AsyncSubject;
}(Subject_1.Subject));
exports.AsyncSubject = AsyncSubject;
//# sourceMappingURL=AsyncSubject.js.map

/***/ }),

/***/ "./node_modules/rxjs/internal/BehaviorSubject.js":
/*!*******************************************************!*\
  !*** ./node_modules/rxjs/internal/BehaviorSubject.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var Subject_1 = __webpack_require__(/*! ./Subject */ "./node_modules/rxjs/internal/Subject.js");
var ObjectUnsubscribedError_1 = __webpack_require__(/*! ./util/ObjectUnsubscribedError */ "./node_modules/rxjs/internal/util/ObjectUnsubscribedError.js");
var BehaviorSubject = (function (_super) {
    __extends(BehaviorSubject, _super);
    function BehaviorSubject(_value) {
        var _this = _super.call(this) || this;
        _this._value = _value;
        return _this;
    }
    Object.defineProperty(BehaviorSubject.prototype, "value", {
        get: function () {
            return this.getValue();
        },
        enumerable: true,
        configurable: true
    });
    BehaviorSubject.prototype._subscribe = function (subscriber) {
        var subscription = _super.prototype._subscribe.call(this, subscriber);
        if (subscription && !subscription.closed) {
            subscriber.next(this._value);
        }
        return subscription;
    };
    BehaviorSubject.prototype.getValue = function () {
        if (this.hasError) {
            throw this.thrownError;
        }
        else if (this.closed) {
            throw new ObjectUnsubscribedError_1.ObjectUnsubscribedError();
        }
        else {
            return this._value;
        }
    };
    BehaviorSubject.prototype.next = function (value) {
        _super.prototype.next.call(this, this._value = value);
    };
    return BehaviorSubject;
}(Subject_1.Subject));
exports.BehaviorSubject = BehaviorSubject;
//# sourceMappingURL=BehaviorSubject.js.map

/***/ }),

/***/ "./node_modules/rxjs/internal/InnerSubscriber.js":
/*!*******************************************************!*\
  !*** ./node_modules/rxjs/internal/InnerSubscriber.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var Subscriber_1 = __webpack_require__(/*! ./Subscriber */ "./node_modules/rxjs/internal/Subscriber.js");
var InnerSubscriber = (function (_super) {
    __extends(InnerSubscriber, _super);
    function InnerSubscriber(parent, outerValue, outerIndex) {
        var _this = _super.call(this) || this;
        _this.parent = parent;
        _this.outerValue = outerValue;
        _this.outerIndex = outerIndex;
        _this.index = 0;
        return _this;
    }
    InnerSubscriber.prototype._next = function (value) {
        this.parent.notifyNext(this.outerValue, value, this.outerIndex, this.index++, this);
    };
    InnerSubscriber.prototype._error = function (error) {
        this.parent.notifyError(error, this);
        this.unsubscribe();
    };
    InnerSubscriber.prototype._complete = function () {
        this.parent.notifyComplete(this);
        this.unsubscribe();
    };
    return InnerSubscriber;
}(Subscriber_1.Subscriber));
exports.InnerSubscriber = InnerSubscriber;
//# sourceMappingURL=InnerSubscriber.js.map

/***/ }),

/***/ "./node_modules/rxjs/internal/Notification.js":
/*!****************************************************!*\
  !*** ./node_modules/rxjs/internal/Notification.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var empty_1 = __webpack_require__(/*! ./observable/empty */ "./node_modules/rxjs/internal/observable/empty.js");
var of_1 = __webpack_require__(/*! ./observable/of */ "./node_modules/rxjs/internal/observable/of.js");
var throwError_1 = __webpack_require__(/*! ./observable/throwError */ "./node_modules/rxjs/internal/observable/throwError.js");
var NotificationKind;
(function (NotificationKind) {
    NotificationKind["NEXT"] = "N";
    NotificationKind["ERROR"] = "E";
    NotificationKind["COMPLETE"] = "C";
})(NotificationKind = exports.NotificationKind || (exports.NotificationKind = {}));
var Notification = (function () {
    function Notification(kind, value, error) {
        this.kind = kind;
        this.value = value;
        this.error = error;
        this.hasValue = kind === "N";
    }
    Notification.prototype.observe = function (observer) {
        switch (this.kind) {
            case "N":
                return observer.next && observer.next(this.value);
            case "E":
                return observer.error && observer.error(this.error);
            case "C":
                return observer.complete && observer.complete();
        }
    };
    Notification.prototype.do = function (next, error, complete) {
        var kind = this.kind;
        switch (kind) {
            case "N":
                return next && next(this.value);
            case "E":
                return error && error(this.error);
            case "C":
                return complete && complete();
        }
    };
    Notification.prototype.accept = function (nextOrObserver, error, complete) {
        if (nextOrObserver && typeof nextOrObserver.next === 'function') {
            return this.observe(nextOrObserver);
        }
        else {
            return this.do(nextOrObserver, error, complete);
        }
    };
    Notification.prototype.toObservable = function () {
        var kind = this.kind;
        switch (kind) {
            case "N":
                return of_1.of(this.value);
            case "E":
                return throwError_1.throwError(this.error);
            case "C":
                return empty_1.empty();
        }
        throw new Error('unexpected notification kind value');
    };
    Notification.createNext = function (value) {
        if (typeof value !== 'undefined') {
            return new Notification("N", value);
        }
        return Notification.undefinedValueNotification;
    };
    Notification.createError = function (err) {
        return new Notification("E", undefined, err);
    };
    Notification.createComplete = function () {
        return Notification.completeNotification;
    };
    Notification.completeNotification = new Notification("C");
    Notification.undefinedValueNotification = new Notification("N", undefined);
    return Notification;
}());
exports.Notification = Notification;
//# sourceMappingURL=Notification.js.map

/***/ }),

/***/ "./node_modules/rxjs/internal/Observable.js":
/*!**************************************************!*\
  !*** ./node_modules/rxjs/internal/Observable.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var canReportError_1 = __webpack_require__(/*! ./util/canReportError */ "./node_modules/rxjs/internal/util/canReportError.js");
var toSubscriber_1 = __webpack_require__(/*! ./util/toSubscriber */ "./node_modules/rxjs/internal/util/toSubscriber.js");
var observable_1 = __webpack_require__(/*! ../internal/symbol/observable */ "./node_modules/rxjs/internal/symbol/observable.js");
var pipe_1 = __webpack_require__(/*! ./util/pipe */ "./node_modules/rxjs/internal/util/pipe.js");
var config_1 = __webpack_require__(/*! ./config */ "./node_modules/rxjs/internal/config.js");
var Observable = (function () {
    function Observable(subscribe) {
        this._isScalar = false;
        if (subscribe) {
            this._subscribe = subscribe;
        }
    }
    Observable.prototype.lift = function (operator) {
        var observable = new Observable();
        observable.source = this;
        observable.operator = operator;
        return observable;
    };
    Observable.prototype.subscribe = function (observerOrNext, error, complete) {
        var operator = this.operator;
        var sink = toSubscriber_1.toSubscriber(observerOrNext, error, complete);
        if (operator) {
            sink.add(operator.call(sink, this.source));
        }
        else {
            sink.add(this.source || (config_1.config.useDeprecatedSynchronousErrorHandling && !sink.syncErrorThrowable) ?
                this._subscribe(sink) :
                this._trySubscribe(sink));
        }
        if (config_1.config.useDeprecatedSynchronousErrorHandling) {
            if (sink.syncErrorThrowable) {
                sink.syncErrorThrowable = false;
                if (sink.syncErrorThrown) {
                    throw sink.syncErrorValue;
                }
            }
        }
        return sink;
    };
    Observable.prototype._trySubscribe = function (sink) {
        try {
            return this._subscribe(sink);
        }
        catch (err) {
            if (config_1.config.useDeprecatedSynchronousErrorHandling) {
                sink.syncErrorThrown = true;
                sink.syncErrorValue = err;
            }
            if (canReportError_1.canReportError(sink)) {
                sink.error(err);
            }
            else {
                console.warn(err);
            }
        }
    };
    Observable.prototype.forEach = function (next, promiseCtor) {
        var _this = this;
        promiseCtor = getPromiseCtor(promiseCtor);
        return new promiseCtor(function (resolve, reject) {
            var subscription;
            subscription = _this.subscribe(function (value) {
                try {
                    next(value);
                }
                catch (err) {
                    reject(err);
                    if (subscription) {
                        subscription.unsubscribe();
                    }
                }
            }, reject, resolve);
        });
    };
    Observable.prototype._subscribe = function (subscriber) {
        var source = this.source;
        return source && source.subscribe(subscriber);
    };
    Observable.prototype[observable_1.observable] = function () {
        return this;
    };
    Observable.prototype.pipe = function () {
        var operations = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            operations[_i] = arguments[_i];
        }
        if (operations.length === 0) {
            return this;
        }
        return pipe_1.pipeFromArray(operations)(this);
    };
    Observable.prototype.toPromise = function (promiseCtor) {
        var _this = this;
        promiseCtor = getPromiseCtor(promiseCtor);
        return new promiseCtor(function (resolve, reject) {
            var value;
            _this.subscribe(function (x) { return value = x; }, function (err) { return reject(err); }, function () { return resolve(value); });
        });
    };
    Observable.create = function (subscribe) {
        return new Observable(subscribe);
    };
    return Observable;
}());
exports.Observable = Observable;
function getPromiseCtor(promiseCtor) {
    if (!promiseCtor) {
        promiseCtor = config_1.config.Promise || Promise;
    }
    if (!promiseCtor) {
        throw new Error('no Promise impl found');
    }
    return promiseCtor;
}
//# sourceMappingURL=Observable.js.map

/***/ }),

/***/ "./node_modules/rxjs/internal/Observer.js":
/*!************************************************!*\
  !*** ./node_modules/rxjs/internal/Observer.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var config_1 = __webpack_require__(/*! ./config */ "./node_modules/rxjs/internal/config.js");
var hostReportError_1 = __webpack_require__(/*! ./util/hostReportError */ "./node_modules/rxjs/internal/util/hostReportError.js");
exports.empty = {
    closed: true,
    next: function (value) { },
    error: function (err) {
        if (config_1.config.useDeprecatedSynchronousErrorHandling) {
            throw err;
        }
        else {
            hostReportError_1.hostReportError(err);
        }
    },
    complete: function () { }
};
//# sourceMappingURL=Observer.js.map

/***/ }),

/***/ "./node_modules/rxjs/internal/OuterSubscriber.js":
/*!*******************************************************!*\
  !*** ./node_modules/rxjs/internal/OuterSubscriber.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var Subscriber_1 = __webpack_require__(/*! ./Subscriber */ "./node_modules/rxjs/internal/Subscriber.js");
var OuterSubscriber = (function (_super) {
    __extends(OuterSubscriber, _super);
    function OuterSubscriber() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    OuterSubscriber.prototype.notifyNext = function (outerValue, innerValue, outerIndex, innerIndex, innerSub) {
        this.destination.next(innerValue);
    };
    OuterSubscriber.prototype.notifyError = function (error, innerSub) {
        this.destination.error(error);
    };
    OuterSubscriber.prototype.notifyComplete = function (innerSub) {
        this.destination.complete();
    };
    return OuterSubscriber;
}(Subscriber_1.Subscriber));
exports.OuterSubscriber = OuterSubscriber;
//# sourceMappingURL=OuterSubscriber.js.map

/***/ }),

/***/ "./node_modules/rxjs/internal/ReplaySubject.js":
/*!*****************************************************!*\
  !*** ./node_modules/rxjs/internal/ReplaySubject.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var Subject_1 = __webpack_require__(/*! ./Subject */ "./node_modules/rxjs/internal/Subject.js");
var queue_1 = __webpack_require__(/*! ./scheduler/queue */ "./node_modules/rxjs/internal/scheduler/queue.js");
var Subscription_1 = __webpack_require__(/*! ./Subscription */ "./node_modules/rxjs/internal/Subscription.js");
var observeOn_1 = __webpack_require__(/*! ./operators/observeOn */ "./node_modules/rxjs/internal/operators/observeOn.js");
var ObjectUnsubscribedError_1 = __webpack_require__(/*! ./util/ObjectUnsubscribedError */ "./node_modules/rxjs/internal/util/ObjectUnsubscribedError.js");
var SubjectSubscription_1 = __webpack_require__(/*! ./SubjectSubscription */ "./node_modules/rxjs/internal/SubjectSubscription.js");
var ReplaySubject = (function (_super) {
    __extends(ReplaySubject, _super);
    function ReplaySubject(bufferSize, windowTime, scheduler) {
        if (bufferSize === void 0) { bufferSize = Number.POSITIVE_INFINITY; }
        if (windowTime === void 0) { windowTime = Number.POSITIVE_INFINITY; }
        var _this = _super.call(this) || this;
        _this.scheduler = scheduler;
        _this._events = [];
        _this._infiniteTimeWindow = false;
        _this._bufferSize = bufferSize < 1 ? 1 : bufferSize;
        _this._windowTime = windowTime < 1 ? 1 : windowTime;
        if (windowTime === Number.POSITIVE_INFINITY) {
            _this._infiniteTimeWindow = true;
            _this.next = _this.nextInfiniteTimeWindow;
        }
        else {
            _this.next = _this.nextTimeWindow;
        }
        return _this;
    }
    ReplaySubject.prototype.nextInfiniteTimeWindow = function (value) {
        var _events = this._events;
        _events.push(value);
        if (_events.length > this._bufferSize) {
            _events.shift();
        }
        _super.prototype.next.call(this, value);
    };
    ReplaySubject.prototype.nextTimeWindow = function (value) {
        this._events.push(new ReplayEvent(this._getNow(), value));
        this._trimBufferThenGetEvents();
        _super.prototype.next.call(this, value);
    };
    ReplaySubject.prototype._subscribe = function (subscriber) {
        var _infiniteTimeWindow = this._infiniteTimeWindow;
        var _events = _infiniteTimeWindow ? this._events : this._trimBufferThenGetEvents();
        var scheduler = this.scheduler;
        var len = _events.length;
        var subscription;
        if (this.closed) {
            throw new ObjectUnsubscribedError_1.ObjectUnsubscribedError();
        }
        else if (this.isStopped || this.hasError) {
            subscription = Subscription_1.Subscription.EMPTY;
        }
        else {
            this.observers.push(subscriber);
            subscription = new SubjectSubscription_1.SubjectSubscription(this, subscriber);
        }
        if (scheduler) {
            subscriber.add(subscriber = new observeOn_1.ObserveOnSubscriber(subscriber, scheduler));
        }
        if (_infiniteTimeWindow) {
            for (var i = 0; i < len && !subscriber.closed; i++) {
                subscriber.next(_events[i]);
            }
        }
        else {
            for (var i = 0; i < len && !subscriber.closed; i++) {
                subscriber.next(_events[i].value);
            }
        }
        if (this.hasError) {
            subscriber.error(this.thrownError);
        }
        else if (this.isStopped) {
            subscriber.complete();
        }
        return subscription;
    };
    ReplaySubject.prototype._getNow = function () {
        return (this.scheduler || queue_1.queue).now();
    };
    ReplaySubject.prototype._trimBufferThenGetEvents = function () {
        var now = this._getNow();
        var _bufferSize = this._bufferSize;
        var _windowTime = this._windowTime;
        var _events = this._events;
        var eventsCount = _events.length;
        var spliceCount = 0;
        while (spliceCount < eventsCount) {
            if ((now - _events[spliceCount].time) < _windowTime) {
                break;
            }
            spliceCount++;
        }
        if (eventsCount > _bufferSize) {
            spliceCount = Math.max(spliceCount, eventsCount - _bufferSize);
        }
        if (spliceCount > 0) {
            _events.splice(0, spliceCount);
        }
        return _events;
    };
    return ReplaySubject;
}(Subject_1.Subject));
exports.ReplaySubject = ReplaySubject;
var ReplayEvent = (function () {
    function ReplayEvent(time, value) {
        this.time = time;
        this.value = value;
    }
    return ReplayEvent;
}());
//# sourceMappingURL=ReplaySubject.js.map

/***/ }),

/***/ "./node_modules/rxjs/internal/Scheduler.js":
/*!*************************************************!*\
  !*** ./node_modules/rxjs/internal/Scheduler.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Scheduler = (function () {
    function Scheduler(SchedulerAction, now) {
        if (now === void 0) { now = Scheduler.now; }
        this.SchedulerAction = SchedulerAction;
        this.now = now;
    }
    Scheduler.prototype.schedule = function (work, delay, state) {
        if (delay === void 0) { delay = 0; }
        return new this.SchedulerAction(this, work).schedule(state, delay);
    };
    Scheduler.now = function () { return Date.now(); };
    return Scheduler;
}());
exports.Scheduler = Scheduler;
//# sourceMappingURL=Scheduler.js.map

/***/ }),

/***/ "./node_modules/rxjs/internal/Subject.js":
/*!***********************************************!*\
  !*** ./node_modules/rxjs/internal/Subject.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var Observable_1 = __webpack_require__(/*! ./Observable */ "./node_modules/rxjs/internal/Observable.js");
var Subscriber_1 = __webpack_require__(/*! ./Subscriber */ "./node_modules/rxjs/internal/Subscriber.js");
var Subscription_1 = __webpack_require__(/*! ./Subscription */ "./node_modules/rxjs/internal/Subscription.js");
var ObjectUnsubscribedError_1 = __webpack_require__(/*! ./util/ObjectUnsubscribedError */ "./node_modules/rxjs/internal/util/ObjectUnsubscribedError.js");
var SubjectSubscription_1 = __webpack_require__(/*! ./SubjectSubscription */ "./node_modules/rxjs/internal/SubjectSubscription.js");
var rxSubscriber_1 = __webpack_require__(/*! ../internal/symbol/rxSubscriber */ "./node_modules/rxjs/internal/symbol/rxSubscriber.js");
var SubjectSubscriber = (function (_super) {
    __extends(SubjectSubscriber, _super);
    function SubjectSubscriber(destination) {
        var _this = _super.call(this, destination) || this;
        _this.destination = destination;
        return _this;
    }
    return SubjectSubscriber;
}(Subscriber_1.Subscriber));
exports.SubjectSubscriber = SubjectSubscriber;
var Subject = (function (_super) {
    __extends(Subject, _super);
    function Subject() {
        var _this = _super.call(this) || this;
        _this.observers = [];
        _this.closed = false;
        _this.isStopped = false;
        _this.hasError = false;
        _this.thrownError = null;
        return _this;
    }
    Subject.prototype[rxSubscriber_1.rxSubscriber] = function () {
        return new SubjectSubscriber(this);
    };
    Subject.prototype.lift = function (operator) {
        var subject = new AnonymousSubject(this, this);
        subject.operator = operator;
        return subject;
    };
    Subject.prototype.next = function (value) {
        if (this.closed) {
            throw new ObjectUnsubscribedError_1.ObjectUnsubscribedError();
        }
        if (!this.isStopped) {
            var observers = this.observers;
            var len = observers.length;
            var copy = observers.slice();
            for (var i = 0; i < len; i++) {
                copy[i].next(value);
            }
        }
    };
    Subject.prototype.error = function (err) {
        if (this.closed) {
            throw new ObjectUnsubscribedError_1.ObjectUnsubscribedError();
        }
        this.hasError = true;
        this.thrownError = err;
        this.isStopped = true;
        var observers = this.observers;
        var len = observers.length;
        var copy = observers.slice();
        for (var i = 0; i < len; i++) {
            copy[i].error(err);
        }
        this.observers.length = 0;
    };
    Subject.prototype.complete = function () {
        if (this.closed) {
            throw new ObjectUnsubscribedError_1.ObjectUnsubscribedError();
        }
        this.isStopped = true;
        var observers = this.observers;
        var len = observers.length;
        var copy = observers.slice();
        for (var i = 0; i < len; i++) {
            copy[i].complete();
        }
        this.observers.length = 0;
    };
    Subject.prototype.unsubscribe = function () {
        this.isStopped = true;
        this.closed = true;
        this.observers = null;
    };
    Subject.prototype._trySubscribe = function (subscriber) {
        if (this.closed) {
            throw new ObjectUnsubscribedError_1.ObjectUnsubscribedError();
        }
        else {
            return _super.prototype._trySubscribe.call(this, subscriber);
        }
    };
    Subject.prototype._subscribe = function (subscriber) {
        if (this.closed) {
            throw new ObjectUnsubscribedError_1.ObjectUnsubscribedError();
        }
        else if (this.hasError) {
            subscriber.error(this.thrownError);
            return Subscription_1.Subscription.EMPTY;
        }
        else if (this.isStopped) {
            subscriber.complete();
            return Subscription_1.Subscription.EMPTY;
        }
        else {
            this.observers.push(subscriber);
            return new SubjectSubscription_1.SubjectSubscription(this, subscriber);
        }
    };
    Subject.prototype.asObservable = function () {
        var observable = new Observable_1.Observable();
        observable.source = this;
        return observable;
    };
    Subject.create = function (destination, source) {
        return new AnonymousSubject(destination, source);
    };
    return Subject;
}(Observable_1.Observable));
exports.Subject = Subject;
var AnonymousSubject = (function (_super) {
    __extends(AnonymousSubject, _super);
    function AnonymousSubject(destination, source) {
        var _this = _super.call(this) || this;
        _this.destination = destination;
        _this.source = source;
        return _this;
    }
    AnonymousSubject.prototype.next = function (value) {
        var destination = this.destination;
        if (destination && destination.next) {
            destination.next(value);
        }
    };
    AnonymousSubject.prototype.error = function (err) {
        var destination = this.destination;
        if (destination && destination.error) {
            this.destination.error(err);
        }
    };
    AnonymousSubject.prototype.complete = function () {
        var destination = this.destination;
        if (destination && destination.complete) {
            this.destination.complete();
        }
    };
    AnonymousSubject.prototype._subscribe = function (subscriber) {
        var source = this.source;
        if (source) {
            return this.source.subscribe(subscriber);
        }
        else {
            return Subscription_1.Subscription.EMPTY;
        }
    };
    return AnonymousSubject;
}(Subject));
exports.AnonymousSubject = AnonymousSubject;
//# sourceMappingURL=Subject.js.map

/***/ }),

/***/ "./node_modules/rxjs/internal/SubjectSubscription.js":
/*!***********************************************************!*\
  !*** ./node_modules/rxjs/internal/SubjectSubscription.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var Subscription_1 = __webpack_require__(/*! ./Subscription */ "./node_modules/rxjs/internal/Subscription.js");
var SubjectSubscription = (function (_super) {
    __extends(SubjectSubscription, _super);
    function SubjectSubscription(subject, subscriber) {
        var _this = _super.call(this) || this;
        _this.subject = subject;
        _this.subscriber = subscriber;
        _this.closed = false;
        return _this;
    }
    SubjectSubscription.prototype.unsubscribe = function () {
        if (this.closed) {
            return;
        }
        this.closed = true;
        var subject = this.subject;
        var observers = subject.observers;
        this.subject = null;
        if (!observers || observers.length === 0 || subject.isStopped || subject.closed) {
            return;
        }
        var subscriberIndex = observers.indexOf(this.subscriber);
        if (subscriberIndex !== -1) {
            observers.splice(subscriberIndex, 1);
        }
    };
    return SubjectSubscription;
}(Subscription_1.Subscription));
exports.SubjectSubscription = SubjectSubscription;
//# sourceMappingURL=SubjectSubscription.js.map

/***/ }),

/***/ "./node_modules/rxjs/internal/Subscriber.js":
/*!**************************************************!*\
  !*** ./node_modules/rxjs/internal/Subscriber.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var isFunction_1 = __webpack_require__(/*! ./util/isFunction */ "./node_modules/rxjs/internal/util/isFunction.js");
var Observer_1 = __webpack_require__(/*! ./Observer */ "./node_modules/rxjs/internal/Observer.js");
var Subscription_1 = __webpack_require__(/*! ./Subscription */ "./node_modules/rxjs/internal/Subscription.js");
var rxSubscriber_1 = __webpack_require__(/*! ../internal/symbol/rxSubscriber */ "./node_modules/rxjs/internal/symbol/rxSubscriber.js");
var config_1 = __webpack_require__(/*! ./config */ "./node_modules/rxjs/internal/config.js");
var hostReportError_1 = __webpack_require__(/*! ./util/hostReportError */ "./node_modules/rxjs/internal/util/hostReportError.js");
var Subscriber = (function (_super) {
    __extends(Subscriber, _super);
    function Subscriber(destinationOrNext, error, complete) {
        var _this = _super.call(this) || this;
        _this.syncErrorValue = null;
        _this.syncErrorThrown = false;
        _this.syncErrorThrowable = false;
        _this.isStopped = false;
        switch (arguments.length) {
            case 0:
                _this.destination = Observer_1.empty;
                break;
            case 1:
                if (!destinationOrNext) {
                    _this.destination = Observer_1.empty;
                    break;
                }
                if (typeof destinationOrNext === 'object') {
                    if (destinationOrNext instanceof Subscriber) {
                        _this.syncErrorThrowable = destinationOrNext.syncErrorThrowable;
                        _this.destination = destinationOrNext;
                        destinationOrNext.add(_this);
                    }
                    else {
                        _this.syncErrorThrowable = true;
                        _this.destination = new SafeSubscriber(_this, destinationOrNext);
                    }
                    break;
                }
            default:
                _this.syncErrorThrowable = true;
                _this.destination = new SafeSubscriber(_this, destinationOrNext, error, complete);
                break;
        }
        return _this;
    }
    Subscriber.prototype[rxSubscriber_1.rxSubscriber] = function () { return this; };
    Subscriber.create = function (next, error, complete) {
        var subscriber = new Subscriber(next, error, complete);
        subscriber.syncErrorThrowable = false;
        return subscriber;
    };
    Subscriber.prototype.next = function (value) {
        if (!this.isStopped) {
            this._next(value);
        }
    };
    Subscriber.prototype.error = function (err) {
        if (!this.isStopped) {
            this.isStopped = true;
            this._error(err);
        }
    };
    Subscriber.prototype.complete = function () {
        if (!this.isStopped) {
            this.isStopped = true;
            this._complete();
        }
    };
    Subscriber.prototype.unsubscribe = function () {
        if (this.closed) {
            return;
        }
        this.isStopped = true;
        _super.prototype.unsubscribe.call(this);
    };
    Subscriber.prototype._next = function (value) {
        this.destination.next(value);
    };
    Subscriber.prototype._error = function (err) {
        this.destination.error(err);
        this.unsubscribe();
    };
    Subscriber.prototype._complete = function () {
        this.destination.complete();
        this.unsubscribe();
    };
    Subscriber.prototype._unsubscribeAndRecycle = function () {
        var _a = this, _parent = _a._parent, _parents = _a._parents;
        this._parent = null;
        this._parents = null;
        this.unsubscribe();
        this.closed = false;
        this.isStopped = false;
        this._parent = _parent;
        this._parents = _parents;
        return this;
    };
    return Subscriber;
}(Subscription_1.Subscription));
exports.Subscriber = Subscriber;
var SafeSubscriber = (function (_super) {
    __extends(SafeSubscriber, _super);
    function SafeSubscriber(_parentSubscriber, observerOrNext, error, complete) {
        var _this = _super.call(this) || this;
        _this._parentSubscriber = _parentSubscriber;
        var next;
        var context = _this;
        if (isFunction_1.isFunction(observerOrNext)) {
            next = observerOrNext;
        }
        else if (observerOrNext) {
            next = observerOrNext.next;
            error = observerOrNext.error;
            complete = observerOrNext.complete;
            if (observerOrNext !== Observer_1.empty) {
                context = Object.create(observerOrNext);
                if (isFunction_1.isFunction(context.unsubscribe)) {
                    _this.add(context.unsubscribe.bind(context));
                }
                context.unsubscribe = _this.unsubscribe.bind(_this);
            }
        }
        _this._context = context;
        _this._next = next;
        _this._error = error;
        _this._complete = complete;
        return _this;
    }
    SafeSubscriber.prototype.next = function (value) {
        if (!this.isStopped && this._next) {
            var _parentSubscriber = this._parentSubscriber;
            if (!config_1.config.useDeprecatedSynchronousErrorHandling || !_parentSubscriber.syncErrorThrowable) {
                this.__tryOrUnsub(this._next, value);
            }
            else if (this.__tryOrSetError(_parentSubscriber, this._next, value)) {
                this.unsubscribe();
            }
        }
    };
    SafeSubscriber.prototype.error = function (err) {
        if (!this.isStopped) {
            var _parentSubscriber = this._parentSubscriber;
            var useDeprecatedSynchronousErrorHandling = config_1.config.useDeprecatedSynchronousErrorHandling;
            if (this._error) {
                if (!useDeprecatedSynchronousErrorHandling || !_parentSubscriber.syncErrorThrowable) {
                    this.__tryOrUnsub(this._error, err);
                    this.unsubscribe();
                }
                else {
                    this.__tryOrSetError(_parentSubscriber, this._error, err);
                    this.unsubscribe();
                }
            }
            else if (!_parentSubscriber.syncErrorThrowable) {
                this.unsubscribe();
                if (useDeprecatedSynchronousErrorHandling) {
                    throw err;
                }
                hostReportError_1.hostReportError(err);
            }
            else {
                if (useDeprecatedSynchronousErrorHandling) {
                    _parentSubscriber.syncErrorValue = err;
                    _parentSubscriber.syncErrorThrown = true;
                }
                else {
                    hostReportError_1.hostReportError(err);
                }
                this.unsubscribe();
            }
        }
    };
    SafeSubscriber.prototype.complete = function () {
        var _this = this;
        if (!this.isStopped) {
            var _parentSubscriber = this._parentSubscriber;
            if (this._complete) {
                var wrappedComplete = function () { return _this._complete.call(_this._context); };
                if (!config_1.config.useDeprecatedSynchronousErrorHandling || !_parentSubscriber.syncErrorThrowable) {
                    this.__tryOrUnsub(wrappedComplete);
                    this.unsubscribe();
                }
                else {
                    this.__tryOrSetError(_parentSubscriber, wrappedComplete);
                    this.unsubscribe();
                }
            }
            else {
                this.unsubscribe();
            }
        }
    };
    SafeSubscriber.prototype.__tryOrUnsub = function (fn, value) {
        try {
            fn.call(this._context, value);
        }
        catch (err) {
            this.unsubscribe();
            if (config_1.config.useDeprecatedSynchronousErrorHandling) {
                throw err;
            }
            else {
                hostReportError_1.hostReportError(err);
            }
        }
    };
    SafeSubscriber.prototype.__tryOrSetError = function (parent, fn, value) {
        if (!config_1.config.useDeprecatedSynchronousErrorHandling) {
            throw new Error('bad call');
        }
        try {
            fn.call(this._context, value);
        }
        catch (err) {
            if (config_1.config.useDeprecatedSynchronousErrorHandling) {
                parent.syncErrorValue = err;
                parent.syncErrorThrown = true;
                return true;
            }
            else {
                hostReportError_1.hostReportError(err);
                return true;
            }
        }
        return false;
    };
    SafeSubscriber.prototype._unsubscribe = function () {
        var _parentSubscriber = this._parentSubscriber;
        this._context = null;
        this._parentSubscriber = null;
        _parentSubscriber.unsubscribe();
    };
    return SafeSubscriber;
}(Subscriber));
exports.SafeSubscriber = SafeSubscriber;
//# sourceMappingURL=Subscriber.js.map

/***/ }),

/***/ "./node_modules/rxjs/internal/Subscription.js":
/*!****************************************************!*\
  !*** ./node_modules/rxjs/internal/Subscription.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var isArray_1 = __webpack_require__(/*! ./util/isArray */ "./node_modules/rxjs/internal/util/isArray.js");
var isObject_1 = __webpack_require__(/*! ./util/isObject */ "./node_modules/rxjs/internal/util/isObject.js");
var isFunction_1 = __webpack_require__(/*! ./util/isFunction */ "./node_modules/rxjs/internal/util/isFunction.js");
var UnsubscriptionError_1 = __webpack_require__(/*! ./util/UnsubscriptionError */ "./node_modules/rxjs/internal/util/UnsubscriptionError.js");
var Subscription = (function () {
    function Subscription(unsubscribe) {
        this.closed = false;
        this._parent = null;
        this._parents = null;
        this._subscriptions = null;
        if (unsubscribe) {
            this._unsubscribe = unsubscribe;
        }
    }
    Subscription.prototype.unsubscribe = function () {
        var hasErrors = false;
        var errors;
        if (this.closed) {
            return;
        }
        var _a = this, _parent = _a._parent, _parents = _a._parents, _unsubscribe = _a._unsubscribe, _subscriptions = _a._subscriptions;
        this.closed = true;
        this._parent = null;
        this._parents = null;
        this._subscriptions = null;
        var index = -1;
        var len = _parents ? _parents.length : 0;
        while (_parent) {
            _parent.remove(this);
            _parent = ++index < len && _parents[index] || null;
        }
        if (isFunction_1.isFunction(_unsubscribe)) {
            try {
                _unsubscribe.call(this);
            }
            catch (e) {
                hasErrors = true;
                errors = e instanceof UnsubscriptionError_1.UnsubscriptionError ? flattenUnsubscriptionErrors(e.errors) : [e];
            }
        }
        if (isArray_1.isArray(_subscriptions)) {
            index = -1;
            len = _subscriptions.length;
            while (++index < len) {
                var sub = _subscriptions[index];
                if (isObject_1.isObject(sub)) {
                    try {
                        sub.unsubscribe();
                    }
                    catch (e) {
                        hasErrors = true;
                        errors = errors || [];
                        if (e instanceof UnsubscriptionError_1.UnsubscriptionError) {
                            errors = errors.concat(flattenUnsubscriptionErrors(e.errors));
                        }
                        else {
                            errors.push(e);
                        }
                    }
                }
            }
        }
        if (hasErrors) {
            throw new UnsubscriptionError_1.UnsubscriptionError(errors);
        }
    };
    Subscription.prototype.add = function (teardown) {
        var subscription = teardown;
        switch (typeof teardown) {
            case 'function':
                subscription = new Subscription(teardown);
            case 'object':
                if (subscription === this || subscription.closed || typeof subscription.unsubscribe !== 'function') {
                    return subscription;
                }
                else if (this.closed) {
                    subscription.unsubscribe();
                    return subscription;
                }
                else if (!(subscription instanceof Subscription)) {
                    var tmp = subscription;
                    subscription = new Subscription();
                    subscription._subscriptions = [tmp];
                }
                break;
            default: {
                if (!teardown) {
                    return Subscription.EMPTY;
                }
                throw new Error('unrecognized teardown ' + teardown + ' added to Subscription.');
            }
        }
        if (subscription._addParent(this)) {
            var subscriptions = this._subscriptions;
            if (subscriptions) {
                subscriptions.push(subscription);
            }
            else {
                this._subscriptions = [subscription];
            }
        }
        return subscription;
    };
    Subscription.prototype.remove = function (subscription) {
        var subscriptions = this._subscriptions;
        if (subscriptions) {
            var subscriptionIndex = subscriptions.indexOf(subscription);
            if (subscriptionIndex !== -1) {
                subscriptions.splice(subscriptionIndex, 1);
            }
        }
    };
    Subscription.prototype._addParent = function (parent) {
        var _a = this, _parent = _a._parent, _parents = _a._parents;
        if (_parent === parent) {
            return false;
        }
        else if (!_parent) {
            this._parent = parent;
            return true;
        }
        else if (!_parents) {
            this._parents = [parent];
            return true;
        }
        else if (_parents.indexOf(parent) === -1) {
            _parents.push(parent);
            return true;
        }
        return false;
    };
    Subscription.EMPTY = (function (empty) {
        empty.closed = true;
        return empty;
    }(new Subscription()));
    return Subscription;
}());
exports.Subscription = Subscription;
function flattenUnsubscriptionErrors(errors) {
    return errors.reduce(function (errs, err) { return errs.concat((err instanceof UnsubscriptionError_1.UnsubscriptionError) ? err.errors : err); }, []);
}
//# sourceMappingURL=Subscription.js.map

/***/ }),

/***/ "./node_modules/rxjs/internal/config.js":
/*!**********************************************!*\
  !*** ./node_modules/rxjs/internal/config.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var _enable_super_gross_mode_that_will_cause_bad_things = false;
exports.config = {
    Promise: undefined,
    set useDeprecatedSynchronousErrorHandling(value) {
        if (value) {
            var error = new Error();
            console.warn('DEPRECATED! RxJS was set to use deprecated synchronous error handling behavior by code at: \n' + error.stack);
        }
        else if (_enable_super_gross_mode_that_will_cause_bad_things) {
            console.log('RxJS: Back to a better error behavior. Thank you. <3');
        }
        _enable_super_gross_mode_that_will_cause_bad_things = value;
    },
    get useDeprecatedSynchronousErrorHandling() {
        return _enable_super_gross_mode_that_will_cause_bad_things;
    },
};
//# sourceMappingURL=config.js.map

/***/ }),

/***/ "./node_modules/rxjs/internal/observable/ConnectableObservable.js":
/*!************************************************************************!*\
  !*** ./node_modules/rxjs/internal/observable/ConnectableObservable.js ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var Subject_1 = __webpack_require__(/*! ../Subject */ "./node_modules/rxjs/internal/Subject.js");
var Observable_1 = __webpack_require__(/*! ../Observable */ "./node_modules/rxjs/internal/Observable.js");
var Subscriber_1 = __webpack_require__(/*! ../Subscriber */ "./node_modules/rxjs/internal/Subscriber.js");
var Subscription_1 = __webpack_require__(/*! ../Subscription */ "./node_modules/rxjs/internal/Subscription.js");
var refCount_1 = __webpack_require__(/*! ../operators/refCount */ "./node_modules/rxjs/internal/operators/refCount.js");
var ConnectableObservable = (function (_super) {
    __extends(ConnectableObservable, _super);
    function ConnectableObservable(source, subjectFactory) {
        var _this = _super.call(this) || this;
        _this.source = source;
        _this.subjectFactory = subjectFactory;
        _this._refCount = 0;
        _this._isComplete = false;
        return _this;
    }
    ConnectableObservable.prototype._subscribe = function (subscriber) {
        return this.getSubject().subscribe(subscriber);
    };
    ConnectableObservable.prototype.getSubject = function () {
        var subject = this._subject;
        if (!subject || subject.isStopped) {
            this._subject = this.subjectFactory();
        }
        return this._subject;
    };
    ConnectableObservable.prototype.connect = function () {
        var connection = this._connection;
        if (!connection) {
            this._isComplete = false;
            connection = this._connection = new Subscription_1.Subscription();
            connection.add(this.source
                .subscribe(new ConnectableSubscriber(this.getSubject(), this)));
            if (connection.closed) {
                this._connection = null;
                connection = Subscription_1.Subscription.EMPTY;
            }
            else {
                this._connection = connection;
            }
        }
        return connection;
    };
    ConnectableObservable.prototype.refCount = function () {
        return refCount_1.refCount()(this);
    };
    return ConnectableObservable;
}(Observable_1.Observable));
exports.ConnectableObservable = ConnectableObservable;
var connectableProto = ConnectableObservable.prototype;
exports.connectableObservableDescriptor = {
    operator: { value: null },
    _refCount: { value: 0, writable: true },
    _subject: { value: null, writable: true },
    _connection: { value: null, writable: true },
    _subscribe: { value: connectableProto._subscribe },
    _isComplete: { value: connectableProto._isComplete, writable: true },
    getSubject: { value: connectableProto.getSubject },
    connect: { value: connectableProto.connect },
    refCount: { value: connectableProto.refCount }
};
var ConnectableSubscriber = (function (_super) {
    __extends(ConnectableSubscriber, _super);
    function ConnectableSubscriber(destination, connectable) {
        var _this = _super.call(this, destination) || this;
        _this.connectable = connectable;
        return _this;
    }
    ConnectableSubscriber.prototype._error = function (err) {
        this._unsubscribe();
        _super.prototype._error.call(this, err);
    };
    ConnectableSubscriber.prototype._complete = function () {
        this.connectable._isComplete = true;
        this._unsubscribe();
        _super.prototype._complete.call(this);
    };
    ConnectableSubscriber.prototype._unsubscribe = function () {
        var connectable = this.connectable;
        if (connectable) {
            this.connectable = null;
            var connection = connectable._connection;
            connectable._refCount = 0;
            connectable._subject = null;
            connectable._connection = null;
            if (connection) {
                connection.unsubscribe();
            }
        }
    };
    return ConnectableSubscriber;
}(Subject_1.SubjectSubscriber));
var RefCountOperator = (function () {
    function RefCountOperator(connectable) {
        this.connectable = connectable;
    }
    RefCountOperator.prototype.call = function (subscriber, source) {
        var connectable = this.connectable;
        connectable._refCount++;
        var refCounter = new RefCountSubscriber(subscriber, connectable);
        var subscription = source.subscribe(refCounter);
        if (!refCounter.closed) {
            refCounter.connection = connectable.connect();
        }
        return subscription;
    };
    return RefCountOperator;
}());
var RefCountSubscriber = (function (_super) {
    __extends(RefCountSubscriber, _super);
    function RefCountSubscriber(destination, connectable) {
        var _this = _super.call(this, destination) || this;
        _this.connectable = connectable;
        return _this;
    }
    RefCountSubscriber.prototype._unsubscribe = function () {
        var connectable = this.connectable;
        if (!connectable) {
            this.connection = null;
            return;
        }
        this.connectable = null;
        var refCount = connectable._refCount;
        if (refCount <= 0) {
            this.connection = null;
            return;
        }
        connectable._refCount = refCount - 1;
        if (refCount > 1) {
            this.connection = null;
            return;
        }
        var connection = this.connection;
        var sharedConnection = connectable._connection;
        this.connection = null;
        if (sharedConnection && (!connection || sharedConnection === connection)) {
            sharedConnection.unsubscribe();
        }
    };
    return RefCountSubscriber;
}(Subscriber_1.Subscriber));
//# sourceMappingURL=ConnectableObservable.js.map

/***/ }),

/***/ "./node_modules/rxjs/internal/observable/bindCallback.js":
/*!***************************************************************!*\
  !*** ./node_modules/rxjs/internal/observable/bindCallback.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Observable_1 = __webpack_require__(/*! ../Observable */ "./node_modules/rxjs/internal/Observable.js");
var AsyncSubject_1 = __webpack_require__(/*! ../AsyncSubject */ "./node_modules/rxjs/internal/AsyncSubject.js");
var map_1 = __webpack_require__(/*! ../operators/map */ "./node_modules/rxjs/internal/operators/map.js");
var canReportError_1 = __webpack_require__(/*! ../util/canReportError */ "./node_modules/rxjs/internal/util/canReportError.js");
var isArray_1 = __webpack_require__(/*! ../util/isArray */ "./node_modules/rxjs/internal/util/isArray.js");
var isScheduler_1 = __webpack_require__(/*! ../util/isScheduler */ "./node_modules/rxjs/internal/util/isScheduler.js");
function bindCallback(callbackFunc, resultSelector, scheduler) {
    if (resultSelector) {
        if (isScheduler_1.isScheduler(resultSelector)) {
            scheduler = resultSelector;
        }
        else {
            return function () {
                var args = [];
                for (var _i = 0; _i < arguments.length; _i++) {
                    args[_i] = arguments[_i];
                }
                return bindCallback(callbackFunc, scheduler).apply(void 0, args).pipe(map_1.map(function (args) { return isArray_1.isArray(args) ? resultSelector.apply(void 0, args) : resultSelector(args); }));
            };
        }
    }
    return function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        var context = this;
        var subject;
        var params = {
            context: context,
            subject: subject,
            callbackFunc: callbackFunc,
            scheduler: scheduler,
        };
        return new Observable_1.Observable(function (subscriber) {
            if (!scheduler) {
                if (!subject) {
                    subject = new AsyncSubject_1.AsyncSubject();
                    var handler = function () {
                        var innerArgs = [];
                        for (var _i = 0; _i < arguments.length; _i++) {
                            innerArgs[_i] = arguments[_i];
                        }
                        subject.next(innerArgs.length <= 1 ? innerArgs[0] : innerArgs);
                        subject.complete();
                    };
                    try {
                        callbackFunc.apply(context, args.concat([handler]));
                    }
                    catch (err) {
                        if (canReportError_1.canReportError(subject)) {
                            subject.error(err);
                        }
                        else {
                            console.warn(err);
                        }
                    }
                }
                return subject.subscribe(subscriber);
            }
            else {
                var state = {
                    args: args, subscriber: subscriber, params: params,
                };
                return scheduler.schedule(dispatch, 0, state);
            }
        });
    };
}
exports.bindCallback = bindCallback;
function dispatch(state) {
    var _this = this;
    var self = this;
    var args = state.args, subscriber = state.subscriber, params = state.params;
    var callbackFunc = params.callbackFunc, context = params.context, scheduler = params.scheduler;
    var subject = params.subject;
    if (!subject) {
        subject = params.subject = new AsyncSubject_1.AsyncSubject();
        var handler = function () {
            var innerArgs = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                innerArgs[_i] = arguments[_i];
            }
            var value = innerArgs.length <= 1 ? innerArgs[0] : innerArgs;
            _this.add(scheduler.schedule(dispatchNext, 0, { value: value, subject: subject }));
        };
        try {
            callbackFunc.apply(context, args.concat([handler]));
        }
        catch (err) {
            subject.error(err);
        }
    }
    this.add(subject.subscribe(subscriber));
}
function dispatchNext(state) {
    var value = state.value, subject = state.subject;
    subject.next(value);
    subject.complete();
}
function dispatchError(state) {
    var err = state.err, subject = state.subject;
    subject.error(err);
}
//# sourceMappingURL=bindCallback.js.map

/***/ }),

/***/ "./node_modules/rxjs/internal/observable/bindNodeCallback.js":
/*!*******************************************************************!*\
  !*** ./node_modules/rxjs/internal/observable/bindNodeCallback.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Observable_1 = __webpack_require__(/*! ../Observable */ "./node_modules/rxjs/internal/Observable.js");
var AsyncSubject_1 = __webpack_require__(/*! ../AsyncSubject */ "./node_modules/rxjs/internal/AsyncSubject.js");
var map_1 = __webpack_require__(/*! ../operators/map */ "./node_modules/rxjs/internal/operators/map.js");
var canReportError_1 = __webpack_require__(/*! ../util/canReportError */ "./node_modules/rxjs/internal/util/canReportError.js");
var isScheduler_1 = __webpack_require__(/*! ../util/isScheduler */ "./node_modules/rxjs/internal/util/isScheduler.js");
var isArray_1 = __webpack_require__(/*! ../util/isArray */ "./node_modules/rxjs/internal/util/isArray.js");
function bindNodeCallback(callbackFunc, resultSelector, scheduler) {
    if (resultSelector) {
        if (isScheduler_1.isScheduler(resultSelector)) {
            scheduler = resultSelector;
        }
        else {
            return function () {
                var args = [];
                for (var _i = 0; _i < arguments.length; _i++) {
                    args[_i] = arguments[_i];
                }
                return bindNodeCallback(callbackFunc, scheduler).apply(void 0, args).pipe(map_1.map(function (args) { return isArray_1.isArray(args) ? resultSelector.apply(void 0, args) : resultSelector(args); }));
            };
        }
    }
    return function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        var params = {
            subject: undefined,
            args: args,
            callbackFunc: callbackFunc,
            scheduler: scheduler,
            context: this,
        };
        return new Observable_1.Observable(function (subscriber) {
            var context = params.context;
            var subject = params.subject;
            if (!scheduler) {
                if (!subject) {
                    subject = params.subject = new AsyncSubject_1.AsyncSubject();
                    var handler = function () {
                        var innerArgs = [];
                        for (var _i = 0; _i < arguments.length; _i++) {
                            innerArgs[_i] = arguments[_i];
                        }
                        var err = innerArgs.shift();
                        if (err) {
                            subject.error(err);
                            return;
                        }
                        subject.next(innerArgs.length <= 1 ? innerArgs[0] : innerArgs);
                        subject.complete();
                    };
                    try {
                        callbackFunc.apply(context, args.concat([handler]));
                    }
                    catch (err) {
                        if (canReportError_1.canReportError(subject)) {
                            subject.error(err);
                        }
                        else {
                            console.warn(err);
                        }
                    }
                }
                return subject.subscribe(subscriber);
            }
            else {
                return scheduler.schedule(dispatch, 0, { params: params, subscriber: subscriber, context: context });
            }
        });
    };
}
exports.bindNodeCallback = bindNodeCallback;
function dispatch(state) {
    var _this = this;
    var params = state.params, subscriber = state.subscriber, context = state.context;
    var callbackFunc = params.callbackFunc, args = params.args, scheduler = params.scheduler;
    var subject = params.subject;
    if (!subject) {
        subject = params.subject = new AsyncSubject_1.AsyncSubject();
        var handler = function () {
            var innerArgs = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                innerArgs[_i] = arguments[_i];
            }
            var err = innerArgs.shift();
            if (err) {
                _this.add(scheduler.schedule(dispatchError, 0, { err: err, subject: subject }));
            }
            else {
                var value = innerArgs.length <= 1 ? innerArgs[0] : innerArgs;
                _this.add(scheduler.schedule(dispatchNext, 0, { value: value, subject: subject }));
            }
        };
        try {
            callbackFunc.apply(context, args.concat([handler]));
        }
        catch (err) {
            this.add(scheduler.schedule(dispatchError, 0, { err: err, subject: subject }));
        }
    }
    this.add(subject.subscribe(subscriber));
}
function dispatchNext(arg) {
    var value = arg.value, subject = arg.subject;
    subject.next(value);
    subject.complete();
}
function dispatchError(arg) {
    var err = arg.err, subject = arg.subject;
    subject.error(err);
}
//# sourceMappingURL=bindNodeCallback.js.map

/***/ }),

/***/ "./node_modules/rxjs/internal/observable/combineLatest.js":
/*!****************************************************************!*\
  !*** ./node_modules/rxjs/internal/observable/combineLatest.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var isScheduler_1 = __webpack_require__(/*! ../util/isScheduler */ "./node_modules/rxjs/internal/util/isScheduler.js");
var isArray_1 = __webpack_require__(/*! ../util/isArray */ "./node_modules/rxjs/internal/util/isArray.js");
var OuterSubscriber_1 = __webpack_require__(/*! ../OuterSubscriber */ "./node_modules/rxjs/internal/OuterSubscriber.js");
var subscribeToResult_1 = __webpack_require__(/*! ../util/subscribeToResult */ "./node_modules/rxjs/internal/util/subscribeToResult.js");
var fromArray_1 = __webpack_require__(/*! ./fromArray */ "./node_modules/rxjs/internal/observable/fromArray.js");
var NONE = {};
function combineLatest() {
    var observables = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        observables[_i] = arguments[_i];
    }
    var resultSelector = null;
    var scheduler = null;
    if (isScheduler_1.isScheduler(observables[observables.length - 1])) {
        scheduler = observables.pop();
    }
    if (typeof observables[observables.length - 1] === 'function') {
        resultSelector = observables.pop();
    }
    if (observables.length === 1 && isArray_1.isArray(observables[0])) {
        observables = observables[0];
    }
    return fromArray_1.fromArray(observables, scheduler).lift(new CombineLatestOperator(resultSelector));
}
exports.combineLatest = combineLatest;
var CombineLatestOperator = (function () {
    function CombineLatestOperator(resultSelector) {
        this.resultSelector = resultSelector;
    }
    CombineLatestOperator.prototype.call = function (subscriber, source) {
        return source.subscribe(new CombineLatestSubscriber(subscriber, this.resultSelector));
    };
    return CombineLatestOperator;
}());
exports.CombineLatestOperator = CombineLatestOperator;
var CombineLatestSubscriber = (function (_super) {
    __extends(CombineLatestSubscriber, _super);
    function CombineLatestSubscriber(destination, resultSelector) {
        var _this = _super.call(this, destination) || this;
        _this.resultSelector = resultSelector;
        _this.active = 0;
        _this.values = [];
        _this.observables = [];
        return _this;
    }
    CombineLatestSubscriber.prototype._next = function (observable) {
        this.values.push(NONE);
        this.observables.push(observable);
    };
    CombineLatestSubscriber.prototype._complete = function () {
        var observables = this.observables;
        var len = observables.length;
        if (len === 0) {
            this.destination.complete();
        }
        else {
            this.active = len;
            this.toRespond = len;
            for (var i = 0; i < len; i++) {
                var observable = observables[i];
                this.add(subscribeToResult_1.subscribeToResult(this, observable, observable, i));
            }
        }
    };
    CombineLatestSubscriber.prototype.notifyComplete = function (unused) {
        if ((this.active -= 1) === 0) {
            this.destination.complete();
        }
    };
    CombineLatestSubscriber.prototype.notifyNext = function (outerValue, innerValue, outerIndex, innerIndex, innerSub) {
        var values = this.values;
        var oldVal = values[outerIndex];
        var toRespond = !this.toRespond
            ? 0
            : oldVal === NONE ? --this.toRespond : this.toRespond;
        values[outerIndex] = innerValue;
        if (toRespond === 0) {
            if (this.resultSelector) {
                this._tryResultSelector(values);
            }
            else {
                this.destination.next(values.slice());
            }
        }
    };
    CombineLatestSubscriber.prototype._tryResultSelector = function (values) {
        var result;
        try {
            result = this.resultSelector.apply(this, values);
        }
        catch (err) {
            this.destination.error(err);
            return;
        }
        this.destination.next(result);
    };
    return CombineLatestSubscriber;
}(OuterSubscriber_1.OuterSubscriber));
exports.CombineLatestSubscriber = CombineLatestSubscriber;
//# sourceMappingURL=combineLatest.js.map

/***/ }),

/***/ "./node_modules/rxjs/internal/observable/concat.js":
/*!*********************************************************!*\
  !*** ./node_modules/rxjs/internal/observable/concat.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var of_1 = __webpack_require__(/*! ./of */ "./node_modules/rxjs/internal/observable/of.js");
var concatAll_1 = __webpack_require__(/*! ../operators/concatAll */ "./node_modules/rxjs/internal/operators/concatAll.js");
function concat() {
    var observables = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        observables[_i] = arguments[_i];
    }
    return concatAll_1.concatAll()(of_1.of.apply(void 0, observables));
}
exports.concat = concat;
//# sourceMappingURL=concat.js.map

/***/ }),

/***/ "./node_modules/rxjs/internal/observable/defer.js":
/*!********************************************************!*\
  !*** ./node_modules/rxjs/internal/observable/defer.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Observable_1 = __webpack_require__(/*! ../Observable */ "./node_modules/rxjs/internal/Observable.js");
var from_1 = __webpack_require__(/*! ./from */ "./node_modules/rxjs/internal/observable/from.js");
var empty_1 = __webpack_require__(/*! ./empty */ "./node_modules/rxjs/internal/observable/empty.js");
function defer(observableFactory) {
    return new Observable_1.Observable(function (subscriber) {
        var input;
        try {
            input = observableFactory();
        }
        catch (err) {
            subscriber.error(err);
            return undefined;
        }
        var source = input ? from_1.from(input) : empty_1.empty();
        return source.subscribe(subscriber);
    });
}
exports.defer = defer;
//# sourceMappingURL=defer.js.map

/***/ }),

/***/ "./node_modules/rxjs/internal/observable/empty.js":
/*!********************************************************!*\
  !*** ./node_modules/rxjs/internal/observable/empty.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Observable_1 = __webpack_require__(/*! ../Observable */ "./node_modules/rxjs/internal/Observable.js");
exports.EMPTY = new Observable_1.Observable(function (subscriber) { return subscriber.complete(); });
function empty(scheduler) {
    return scheduler ? emptyScheduled(scheduler) : exports.EMPTY;
}
exports.empty = empty;
function emptyScheduled(scheduler) {
    return new Observable_1.Observable(function (subscriber) { return scheduler.schedule(function () { return subscriber.complete(); }); });
}
exports.emptyScheduled = emptyScheduled;
//# sourceMappingURL=empty.js.map

/***/ }),

/***/ "./node_modules/rxjs/internal/observable/forkJoin.js":
/*!***********************************************************!*\
  !*** ./node_modules/rxjs/internal/observable/forkJoin.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var Observable_1 = __webpack_require__(/*! ../Observable */ "./node_modules/rxjs/internal/Observable.js");
var isArray_1 = __webpack_require__(/*! ../util/isArray */ "./node_modules/rxjs/internal/util/isArray.js");
var empty_1 = __webpack_require__(/*! ./empty */ "./node_modules/rxjs/internal/observable/empty.js");
var subscribeToResult_1 = __webpack_require__(/*! ../util/subscribeToResult */ "./node_modules/rxjs/internal/util/subscribeToResult.js");
var OuterSubscriber_1 = __webpack_require__(/*! ../OuterSubscriber */ "./node_modules/rxjs/internal/OuterSubscriber.js");
var map_1 = __webpack_require__(/*! ../operators/map */ "./node_modules/rxjs/internal/operators/map.js");
function forkJoin() {
    var sources = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        sources[_i] = arguments[_i];
    }
    var resultSelector;
    if (typeof sources[sources.length - 1] === 'function') {
        resultSelector = sources.pop();
    }
    if (sources.length === 1 && isArray_1.isArray(sources[0])) {
        sources = sources[0];
    }
    if (sources.length === 0) {
        return empty_1.EMPTY;
    }
    if (resultSelector) {
        return forkJoin(sources).pipe(map_1.map(function (args) { return resultSelector.apply(void 0, args); }));
    }
    return new Observable_1.Observable(function (subscriber) {
        return new ForkJoinSubscriber(subscriber, sources);
    });
}
exports.forkJoin = forkJoin;
var ForkJoinSubscriber = (function (_super) {
    __extends(ForkJoinSubscriber, _super);
    function ForkJoinSubscriber(destination, sources) {
        var _this = _super.call(this, destination) || this;
        _this.sources = sources;
        _this.completed = 0;
        _this.haveValues = 0;
        var len = sources.length;
        _this.values = new Array(len);
        for (var i = 0; i < len; i++) {
            var source = sources[i];
            var innerSubscription = subscribeToResult_1.subscribeToResult(_this, source, null, i);
            if (innerSubscription) {
                _this.add(innerSubscription);
            }
        }
        return _this;
    }
    ForkJoinSubscriber.prototype.notifyNext = function (outerValue, innerValue, outerIndex, innerIndex, innerSub) {
        this.values[outerIndex] = innerValue;
        if (!innerSub._hasValue) {
            innerSub._hasValue = true;
            this.haveValues++;
        }
    };
    ForkJoinSubscriber.prototype.notifyComplete = function (innerSub) {
        var _a = this, destination = _a.destination, haveValues = _a.haveValues, values = _a.values;
        var len = values.length;
        if (!innerSub._hasValue) {
            destination.complete();
            return;
        }
        this.completed++;
        if (this.completed !== len) {
            return;
        }
        if (haveValues === len) {
            destination.next(values);
        }
        destination.complete();
    };
    return ForkJoinSubscriber;
}(OuterSubscriber_1.OuterSubscriber));
//# sourceMappingURL=forkJoin.js.map

/***/ }),

/***/ "./node_modules/rxjs/internal/observable/from.js":
/*!*******************************************************!*\
  !*** ./node_modules/rxjs/internal/observable/from.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Observable_1 = __webpack_require__(/*! ../Observable */ "./node_modules/rxjs/internal/Observable.js");
var isPromise_1 = __webpack_require__(/*! ../util/isPromise */ "./node_modules/rxjs/internal/util/isPromise.js");
var isArrayLike_1 = __webpack_require__(/*! ../util/isArrayLike */ "./node_modules/rxjs/internal/util/isArrayLike.js");
var isInteropObservable_1 = __webpack_require__(/*! ../util/isInteropObservable */ "./node_modules/rxjs/internal/util/isInteropObservable.js");
var isIterable_1 = __webpack_require__(/*! ../util/isIterable */ "./node_modules/rxjs/internal/util/isIterable.js");
var fromArray_1 = __webpack_require__(/*! ./fromArray */ "./node_modules/rxjs/internal/observable/fromArray.js");
var fromPromise_1 = __webpack_require__(/*! ./fromPromise */ "./node_modules/rxjs/internal/observable/fromPromise.js");
var fromIterable_1 = __webpack_require__(/*! ./fromIterable */ "./node_modules/rxjs/internal/observable/fromIterable.js");
var fromObservable_1 = __webpack_require__(/*! ./fromObservable */ "./node_modules/rxjs/internal/observable/fromObservable.js");
var subscribeTo_1 = __webpack_require__(/*! ../util/subscribeTo */ "./node_modules/rxjs/internal/util/subscribeTo.js");
function from(input, scheduler) {
    if (!scheduler) {
        if (input instanceof Observable_1.Observable) {
            return input;
        }
        return new Observable_1.Observable(subscribeTo_1.subscribeTo(input));
    }
    if (input != null) {
        if (isInteropObservable_1.isInteropObservable(input)) {
            return fromObservable_1.fromObservable(input, scheduler);
        }
        else if (isPromise_1.isPromise(input)) {
            return fromPromise_1.fromPromise(input, scheduler);
        }
        else if (isArrayLike_1.isArrayLike(input)) {
            return fromArray_1.fromArray(input, scheduler);
        }
        else if (isIterable_1.isIterable(input) || typeof input === 'string') {
            return fromIterable_1.fromIterable(input, scheduler);
        }
    }
    throw new TypeError((input !== null && typeof input || input) + ' is not observable');
}
exports.from = from;
//# sourceMappingURL=from.js.map

/***/ }),

/***/ "./node_modules/rxjs/internal/observable/fromArray.js":
/*!************************************************************!*\
  !*** ./node_modules/rxjs/internal/observable/fromArray.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Observable_1 = __webpack_require__(/*! ../Observable */ "./node_modules/rxjs/internal/Observable.js");
var Subscription_1 = __webpack_require__(/*! ../Subscription */ "./node_modules/rxjs/internal/Subscription.js");
var subscribeToArray_1 = __webpack_require__(/*! ../util/subscribeToArray */ "./node_modules/rxjs/internal/util/subscribeToArray.js");
function fromArray(input, scheduler) {
    if (!scheduler) {
        return new Observable_1.Observable(subscribeToArray_1.subscribeToArray(input));
    }
    else {
        return new Observable_1.Observable(function (subscriber) {
            var sub = new Subscription_1.Subscription();
            var i = 0;
            sub.add(scheduler.schedule(function () {
                if (i === input.length) {
                    subscriber.complete();
                    return;
                }
                subscriber.next(input[i++]);
                if (!subscriber.closed) {
                    sub.add(this.schedule());
                }
            }));
            return sub;
        });
    }
}
exports.fromArray = fromArray;
//# sourceMappingURL=fromArray.js.map

/***/ }),

/***/ "./node_modules/rxjs/internal/observable/fromEvent.js":
/*!************************************************************!*\
  !*** ./node_modules/rxjs/internal/observable/fromEvent.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Observable_1 = __webpack_require__(/*! ../Observable */ "./node_modules/rxjs/internal/Observable.js");
var isArray_1 = __webpack_require__(/*! ../util/isArray */ "./node_modules/rxjs/internal/util/isArray.js");
var isFunction_1 = __webpack_require__(/*! ../util/isFunction */ "./node_modules/rxjs/internal/util/isFunction.js");
var map_1 = __webpack_require__(/*! ../operators/map */ "./node_modules/rxjs/internal/operators/map.js");
var toString = Object.prototype.toString;
function fromEvent(target, eventName, options, resultSelector) {
    if (isFunction_1.isFunction(options)) {
        resultSelector = options;
        options = undefined;
    }
    if (resultSelector) {
        return fromEvent(target, eventName, options).pipe(map_1.map(function (args) { return isArray_1.isArray(args) ? resultSelector.apply(void 0, args) : resultSelector(args); }));
    }
    return new Observable_1.Observable(function (subscriber) {
        function handler(e) {
            if (arguments.length > 1) {
                subscriber.next(Array.prototype.slice.call(arguments));
            }
            else {
                subscriber.next(e);
            }
        }
        setupSubscription(target, eventName, handler, subscriber, options);
    });
}
exports.fromEvent = fromEvent;
function setupSubscription(sourceObj, eventName, handler, subscriber, options) {
    var unsubscribe;
    if (isEventTarget(sourceObj)) {
        var source_1 = sourceObj;
        sourceObj.addEventListener(eventName, handler, options);
        unsubscribe = function () { return source_1.removeEventListener(eventName, handler, options); };
    }
    else if (isJQueryStyleEventEmitter(sourceObj)) {
        var source_2 = sourceObj;
        sourceObj.on(eventName, handler);
        unsubscribe = function () { return source_2.off(eventName, handler); };
    }
    else if (isNodeStyleEventEmitter(sourceObj)) {
        var source_3 = sourceObj;
        sourceObj.addListener(eventName, handler);
        unsubscribe = function () { return source_3.removeListener(eventName, handler); };
    }
    else if (sourceObj && sourceObj.length) {
        for (var i = 0, len = sourceObj.length; i < len; i++) {
            setupSubscription(sourceObj[i], eventName, handler, subscriber, options);
        }
    }
    else {
        throw new TypeError('Invalid event target');
    }
    subscriber.add(unsubscribe);
}
function isNodeStyleEventEmitter(sourceObj) {
    return sourceObj && typeof sourceObj.addListener === 'function' && typeof sourceObj.removeListener === 'function';
}
function isJQueryStyleEventEmitter(sourceObj) {
    return sourceObj && typeof sourceObj.on === 'function' && typeof sourceObj.off === 'function';
}
function isEventTarget(sourceObj) {
    return sourceObj && typeof sourceObj.addEventListener === 'function' && typeof sourceObj.removeEventListener === 'function';
}
//# sourceMappingURL=fromEvent.js.map

/***/ }),

/***/ "./node_modules/rxjs/internal/observable/fromEventPattern.js":
/*!*******************************************************************!*\
  !*** ./node_modules/rxjs/internal/observable/fromEventPattern.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Observable_1 = __webpack_require__(/*! ../Observable */ "./node_modules/rxjs/internal/Observable.js");
var isArray_1 = __webpack_require__(/*! ../util/isArray */ "./node_modules/rxjs/internal/util/isArray.js");
var isFunction_1 = __webpack_require__(/*! ../util/isFunction */ "./node_modules/rxjs/internal/util/isFunction.js");
var map_1 = __webpack_require__(/*! ../operators/map */ "./node_modules/rxjs/internal/operators/map.js");
function fromEventPattern(addHandler, removeHandler, resultSelector) {
    if (resultSelector) {
        return fromEventPattern(addHandler, removeHandler).pipe(map_1.map(function (args) { return isArray_1.isArray(args) ? resultSelector.apply(void 0, args) : resultSelector(args); }));
    }
    return new Observable_1.Observable(function (subscriber) {
        var handler = function () {
            var e = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                e[_i] = arguments[_i];
            }
            return subscriber.next(e.length === 1 ? e[0] : e);
        };
        var retValue;
        try {
            retValue = addHandler(handler);
        }
        catch (err) {
            subscriber.error(err);
            return undefined;
        }
        if (!isFunction_1.isFunction(removeHandler)) {
            return undefined;
        }
        return function () { return removeHandler(handler, retValue); };
    });
}
exports.fromEventPattern = fromEventPattern;
//# sourceMappingURL=fromEventPattern.js.map

/***/ }),

/***/ "./node_modules/rxjs/internal/observable/fromIterable.js":
/*!***************************************************************!*\
  !*** ./node_modules/rxjs/internal/observable/fromIterable.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Observable_1 = __webpack_require__(/*! ../Observable */ "./node_modules/rxjs/internal/Observable.js");
var Subscription_1 = __webpack_require__(/*! ../Subscription */ "./node_modules/rxjs/internal/Subscription.js");
var iterator_1 = __webpack_require__(/*! ../symbol/iterator */ "./node_modules/rxjs/internal/symbol/iterator.js");
var subscribeToIterable_1 = __webpack_require__(/*! ../util/subscribeToIterable */ "./node_modules/rxjs/internal/util/subscribeToIterable.js");
function fromIterable(input, scheduler) {
    if (!input) {
        throw new Error('Iterable cannot be null');
    }
    if (!scheduler) {
        return new Observable_1.Observable(subscribeToIterable_1.subscribeToIterable(input));
    }
    else {
        return new Observable_1.Observable(function (subscriber) {
            var sub = new Subscription_1.Subscription();
            var iterator;
            sub.add(function () {
                if (iterator && typeof iterator.return === 'function') {
                    iterator.return();
                }
            });
            sub.add(scheduler.schedule(function () {
                iterator = input[iterator_1.iterator]();
                sub.add(scheduler.schedule(function () {
                    if (subscriber.closed) {
                        return;
                    }
                    var value;
                    var done;
                    try {
                        var result = iterator.next();
                        value = result.value;
                        done = result.done;
                    }
                    catch (err) {
                        subscriber.error(err);
                        return;
                    }
                    if (done) {
                        subscriber.complete();
                    }
                    else {
                        subscriber.next(value);
                        this.schedule();
                    }
                }));
            }));
            return sub;
        });
    }
}
exports.fromIterable = fromIterable;
//# sourceMappingURL=fromIterable.js.map

/***/ }),

/***/ "./node_modules/rxjs/internal/observable/fromObservable.js":
/*!*****************************************************************!*\
  !*** ./node_modules/rxjs/internal/observable/fromObservable.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Observable_1 = __webpack_require__(/*! ../Observable */ "./node_modules/rxjs/internal/Observable.js");
var Subscription_1 = __webpack_require__(/*! ../Subscription */ "./node_modules/rxjs/internal/Subscription.js");
var observable_1 = __webpack_require__(/*! ../symbol/observable */ "./node_modules/rxjs/internal/symbol/observable.js");
var subscribeToObservable_1 = __webpack_require__(/*! ../util/subscribeToObservable */ "./node_modules/rxjs/internal/util/subscribeToObservable.js");
function fromObservable(input, scheduler) {
    if (!scheduler) {
        return new Observable_1.Observable(subscribeToObservable_1.subscribeToObservable(input));
    }
    else {
        return new Observable_1.Observable(function (subscriber) {
            var sub = new Subscription_1.Subscription();
            sub.add(scheduler.schedule(function () {
                var observable = input[observable_1.observable]();
                sub.add(observable.subscribe({
                    next: function (value) { sub.add(scheduler.schedule(function () { return subscriber.next(value); })); },
                    error: function (err) { sub.add(scheduler.schedule(function () { return subscriber.error(err); })); },
                    complete: function () { sub.add(scheduler.schedule(function () { return subscriber.complete(); })); },
                }));
            }));
            return sub;
        });
    }
}
exports.fromObservable = fromObservable;
//# sourceMappingURL=fromObservable.js.map

/***/ }),

/***/ "./node_modules/rxjs/internal/observable/fromPromise.js":
/*!**************************************************************!*\
  !*** ./node_modules/rxjs/internal/observable/fromPromise.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Observable_1 = __webpack_require__(/*! ../Observable */ "./node_modules/rxjs/internal/Observable.js");
var Subscription_1 = __webpack_require__(/*! ../Subscription */ "./node_modules/rxjs/internal/Subscription.js");
var subscribeToPromise_1 = __webpack_require__(/*! ../util/subscribeToPromise */ "./node_modules/rxjs/internal/util/subscribeToPromise.js");
function fromPromise(input, scheduler) {
    if (!scheduler) {
        return new Observable_1.Observable(subscribeToPromise_1.subscribeToPromise(input));
    }
    else {
        return new Observable_1.Observable(function (subscriber) {
            var sub = new Subscription_1.Subscription();
            sub.add(scheduler.schedule(function () { return input.then(function (value) {
                sub.add(scheduler.schedule(function () {
                    subscriber.next(value);
                    sub.add(scheduler.schedule(function () { return subscriber.complete(); }));
                }));
            }, function (err) {
                sub.add(scheduler.schedule(function () { return subscriber.error(err); }));
            }); }));
            return sub;
        });
    }
}
exports.fromPromise = fromPromise;
//# sourceMappingURL=fromPromise.js.map

/***/ }),

/***/ "./node_modules/rxjs/internal/observable/generate.js":
/*!***********************************************************!*\
  !*** ./node_modules/rxjs/internal/observable/generate.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Observable_1 = __webpack_require__(/*! ../Observable */ "./node_modules/rxjs/internal/Observable.js");
var identity_1 = __webpack_require__(/*! ../util/identity */ "./node_modules/rxjs/internal/util/identity.js");
var isScheduler_1 = __webpack_require__(/*! ../util/isScheduler */ "./node_modules/rxjs/internal/util/isScheduler.js");
function generate(initialStateOrOptions, condition, iterate, resultSelectorOrObservable, scheduler) {
    var resultSelector;
    var initialState;
    if (arguments.length == 1) {
        var options = initialStateOrOptions;
        initialState = options.initialState;
        condition = options.condition;
        iterate = options.iterate;
        resultSelector = options.resultSelector || identity_1.identity;
        scheduler = options.scheduler;
    }
    else if (resultSelectorOrObservable === undefined || isScheduler_1.isScheduler(resultSelectorOrObservable)) {
        initialState = initialStateOrOptions;
        resultSelector = identity_1.identity;
        scheduler = resultSelectorOrObservable;
    }
    else {
        initialState = initialStateOrOptions;
        resultSelector = resultSelectorOrObservable;
    }
    return new Observable_1.Observable(function (subscriber) {
        var state = initialState;
        if (scheduler) {
            return scheduler.schedule(dispatch, 0, {
                subscriber: subscriber,
                iterate: iterate,
                condition: condition,
                resultSelector: resultSelector,
                state: state
            });
        }
        do {
            if (condition) {
                var conditionResult = void 0;
                try {
                    conditionResult = condition(state);
                }
                catch (err) {
                    subscriber.error(err);
                    return undefined;
                }
                if (!conditionResult) {
                    subscriber.complete();
                    break;
                }
            }
            var value = void 0;
            try {
                value = resultSelector(state);
            }
            catch (err) {
                subscriber.error(err);
                return undefined;
            }
            subscriber.next(value);
            if (subscriber.closed) {
                break;
            }
            try {
                state = iterate(state);
            }
            catch (err) {
                subscriber.error(err);
                return undefined;
            }
        } while (true);
        return undefined;
    });
}
exports.generate = generate;
function dispatch(state) {
    var subscriber = state.subscriber, condition = state.condition;
    if (subscriber.closed) {
        return undefined;
    }
    if (state.needIterate) {
        try {
            state.state = state.iterate(state.state);
        }
        catch (err) {
            subscriber.error(err);
            return undefined;
        }
    }
    else {
        state.needIterate = true;
    }
    if (condition) {
        var conditionResult = void 0;
        try {
            conditionResult = condition(state.state);
        }
        catch (err) {
            subscriber.error(err);
            return undefined;
        }
        if (!conditionResult) {
            subscriber.complete();
            return undefined;
        }
        if (subscriber.closed) {
            return undefined;
        }
    }
    var value;
    try {
        value = state.resultSelector(state.state);
    }
    catch (err) {
        subscriber.error(err);
        return undefined;
    }
    if (subscriber.closed) {
        return undefined;
    }
    subscriber.next(value);
    if (subscriber.closed) {
        return undefined;
    }
    return this.schedule(state);
}
//# sourceMappingURL=generate.js.map

/***/ }),

/***/ "./node_modules/rxjs/internal/observable/iif.js":
/*!******************************************************!*\
  !*** ./node_modules/rxjs/internal/observable/iif.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var defer_1 = __webpack_require__(/*! ./defer */ "./node_modules/rxjs/internal/observable/defer.js");
var empty_1 = __webpack_require__(/*! ./empty */ "./node_modules/rxjs/internal/observable/empty.js");
function iif(condition, trueResult, falseResult) {
    if (trueResult === void 0) { trueResult = empty_1.EMPTY; }
    if (falseResult === void 0) { falseResult = empty_1.EMPTY; }
    return defer_1.defer(function () { return condition() ? trueResult : falseResult; });
}
exports.iif = iif;
//# sourceMappingURL=iif.js.map

/***/ }),

/***/ "./node_modules/rxjs/internal/observable/interval.js":
/*!***********************************************************!*\
  !*** ./node_modules/rxjs/internal/observable/interval.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Observable_1 = __webpack_require__(/*! ../Observable */ "./node_modules/rxjs/internal/Observable.js");
var async_1 = __webpack_require__(/*! ../scheduler/async */ "./node_modules/rxjs/internal/scheduler/async.js");
var isNumeric_1 = __webpack_require__(/*! ../util/isNumeric */ "./node_modules/rxjs/internal/util/isNumeric.js");
function interval(period, scheduler) {
    if (period === void 0) { period = 0; }
    if (scheduler === void 0) { scheduler = async_1.async; }
    if (!isNumeric_1.isNumeric(period) || period < 0) {
        period = 0;
    }
    if (!scheduler || typeof scheduler.schedule !== 'function') {
        scheduler = async_1.async;
    }
    return new Observable_1.Observable(function (subscriber) {
        subscriber.add(scheduler.schedule(dispatch, period, { subscriber: subscriber, counter: 0, period: period }));
        return subscriber;
    });
}
exports.interval = interval;
function dispatch(state) {
    var subscriber = state.subscriber, counter = state.counter, period = state.period;
    subscriber.next(counter);
    this.schedule({ subscriber: subscriber, counter: counter + 1, period: period }, period);
}
//# sourceMappingURL=interval.js.map

/***/ }),

/***/ "./node_modules/rxjs/internal/observable/merge.js":
/*!********************************************************!*\
  !*** ./node_modules/rxjs/internal/observable/merge.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Observable_1 = __webpack_require__(/*! ../Observable */ "./node_modules/rxjs/internal/Observable.js");
var isScheduler_1 = __webpack_require__(/*! ../util/isScheduler */ "./node_modules/rxjs/internal/util/isScheduler.js");
var mergeAll_1 = __webpack_require__(/*! ../operators/mergeAll */ "./node_modules/rxjs/internal/operators/mergeAll.js");
var fromArray_1 = __webpack_require__(/*! ./fromArray */ "./node_modules/rxjs/internal/observable/fromArray.js");
function merge() {
    var observables = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        observables[_i] = arguments[_i];
    }
    var concurrent = Number.POSITIVE_INFINITY;
    var scheduler = null;
    var last = observables[observables.length - 1];
    if (isScheduler_1.isScheduler(last)) {
        scheduler = observables.pop();
        if (observables.length > 1 && typeof observables[observables.length - 1] === 'number') {
            concurrent = observables.pop();
        }
    }
    else if (typeof last === 'number') {
        concurrent = observables.pop();
    }
    if (scheduler === null && observables.length === 1 && observables[0] instanceof Observable_1.Observable) {
        return observables[0];
    }
    return mergeAll_1.mergeAll(concurrent)(fromArray_1.fromArray(observables, scheduler));
}
exports.merge = merge;
//# sourceMappingURL=merge.js.map

/***/ }),

/***/ "./node_modules/rxjs/internal/observable/never.js":
/*!********************************************************!*\
  !*** ./node_modules/rxjs/internal/observable/never.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Observable_1 = __webpack_require__(/*! ../Observable */ "./node_modules/rxjs/internal/Observable.js");
var noop_1 = __webpack_require__(/*! ../util/noop */ "./node_modules/rxjs/internal/util/noop.js");
exports.NEVER = new Observable_1.Observable(noop_1.noop);
function never() {
    return exports.NEVER;
}
exports.never = never;
//# sourceMappingURL=never.js.map

/***/ }),

/***/ "./node_modules/rxjs/internal/observable/of.js":
/*!*****************************************************!*\
  !*** ./node_modules/rxjs/internal/observable/of.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var isScheduler_1 = __webpack_require__(/*! ../util/isScheduler */ "./node_modules/rxjs/internal/util/isScheduler.js");
var fromArray_1 = __webpack_require__(/*! ./fromArray */ "./node_modules/rxjs/internal/observable/fromArray.js");
var empty_1 = __webpack_require__(/*! ./empty */ "./node_modules/rxjs/internal/observable/empty.js");
var scalar_1 = __webpack_require__(/*! ./scalar */ "./node_modules/rxjs/internal/observable/scalar.js");
function of() {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
    }
    var scheduler = args[args.length - 1];
    if (isScheduler_1.isScheduler(scheduler)) {
        args.pop();
    }
    else {
        scheduler = undefined;
    }
    switch (args.length) {
        case 0:
            return empty_1.empty(scheduler);
        case 1:
            return scheduler ? fromArray_1.fromArray(args, scheduler) : scalar_1.scalar(args[0]);
        default:
            return fromArray_1.fromArray(args, scheduler);
    }
}
exports.of = of;
//# sourceMappingURL=of.js.map

/***/ }),

/***/ "./node_modules/rxjs/internal/observable/onErrorResumeNext.js":
/*!********************************************************************!*\
  !*** ./node_modules/rxjs/internal/observable/onErrorResumeNext.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Observable_1 = __webpack_require__(/*! ../Observable */ "./node_modules/rxjs/internal/Observable.js");
var from_1 = __webpack_require__(/*! ./from */ "./node_modules/rxjs/internal/observable/from.js");
var isArray_1 = __webpack_require__(/*! ../util/isArray */ "./node_modules/rxjs/internal/util/isArray.js");
var empty_1 = __webpack_require__(/*! ./empty */ "./node_modules/rxjs/internal/observable/empty.js");
function onErrorResumeNext() {
    var sources = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        sources[_i] = arguments[_i];
    }
    if (sources.length === 0) {
        return empty_1.EMPTY;
    }
    var first = sources[0], remainder = sources.slice(1);
    if (sources.length === 1 && isArray_1.isArray(first)) {
        return onErrorResumeNext.apply(void 0, first);
    }
    return new Observable_1.Observable(function (subscriber) {
        var subNext = function () { return subscriber.add(onErrorResumeNext.apply(void 0, remainder).subscribe(subscriber)); };
        return from_1.from(first).subscribe({
            next: function (value) { subscriber.next(value); },
            error: subNext,
            complete: subNext,
        });
    });
}
exports.onErrorResumeNext = onErrorResumeNext;
//# sourceMappingURL=onErrorResumeNext.js.map

/***/ }),

/***/ "./node_modules/rxjs/internal/observable/pairs.js":
/*!********************************************************!*\
  !*** ./node_modules/rxjs/internal/observable/pairs.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Observable_1 = __webpack_require__(/*! ../Observable */ "./node_modules/rxjs/internal/Observable.js");
var Subscription_1 = __webpack_require__(/*! ../Subscription */ "./node_modules/rxjs/internal/Subscription.js");
function pairs(obj, scheduler) {
    if (!scheduler) {
        return new Observable_1.Observable(function (subscriber) {
            var keys = Object.keys(obj);
            for (var i = 0; i < keys.length && !subscriber.closed; i++) {
                var key = keys[i];
                if (obj.hasOwnProperty(key)) {
                    subscriber.next([key, obj[key]]);
                }
            }
            subscriber.complete();
        });
    }
    else {
        return new Observable_1.Observable(function (subscriber) {
            var keys = Object.keys(obj);
            var subscription = new Subscription_1.Subscription();
            subscription.add(scheduler.schedule(dispatch, 0, { keys: keys, index: 0, subscriber: subscriber, subscription: subscription, obj: obj }));
            return subscription;
        });
    }
}
exports.pairs = pairs;
function dispatch(state) {
    var keys = state.keys, index = state.index, subscriber = state.subscriber, subscription = state.subscription, obj = state.obj;
    if (!subscriber.closed) {
        if (index < keys.length) {
            var key = keys[index];
            subscriber.next([key, obj[key]]);
            subscription.add(this.schedule({ keys: keys, index: index + 1, subscriber: subscriber, subscription: subscription, obj: obj }));
        }
        else {
            subscriber.complete();
        }
    }
}
exports.dispatch = dispatch;
//# sourceMappingURL=pairs.js.map

/***/ }),

/***/ "./node_modules/rxjs/internal/observable/race.js":
/*!*******************************************************!*\
  !*** ./node_modules/rxjs/internal/observable/race.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var isArray_1 = __webpack_require__(/*! ../util/isArray */ "./node_modules/rxjs/internal/util/isArray.js");
var fromArray_1 = __webpack_require__(/*! ./fromArray */ "./node_modules/rxjs/internal/observable/fromArray.js");
var OuterSubscriber_1 = __webpack_require__(/*! ../OuterSubscriber */ "./node_modules/rxjs/internal/OuterSubscriber.js");
var subscribeToResult_1 = __webpack_require__(/*! ../util/subscribeToResult */ "./node_modules/rxjs/internal/util/subscribeToResult.js");
function race() {
    var observables = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        observables[_i] = arguments[_i];
    }
    if (observables.length === 1) {
        if (isArray_1.isArray(observables[0])) {
            observables = observables[0];
        }
        else {
            return observables[0];
        }
    }
    return fromArray_1.fromArray(observables, undefined).lift(new RaceOperator());
}
exports.race = race;
var RaceOperator = (function () {
    function RaceOperator() {
    }
    RaceOperator.prototype.call = function (subscriber, source) {
        return source.subscribe(new RaceSubscriber(subscriber));
    };
    return RaceOperator;
}());
exports.RaceOperator = RaceOperator;
var RaceSubscriber = (function (_super) {
    __extends(RaceSubscriber, _super);
    function RaceSubscriber(destination) {
        var _this = _super.call(this, destination) || this;
        _this.hasFirst = false;
        _this.observables = [];
        _this.subscriptions = [];
        return _this;
    }
    RaceSubscriber.prototype._next = function (observable) {
        this.observables.push(observable);
    };
    RaceSubscriber.prototype._complete = function () {
        var observables = this.observables;
        var len = observables.length;
        if (len === 0) {
            this.destination.complete();
        }
        else {
            for (var i = 0; i < len && !this.hasFirst; i++) {
                var observable = observables[i];
                var subscription = subscribeToResult_1.subscribeToResult(this, observable, observable, i);
                if (this.subscriptions) {
                    this.subscriptions.push(subscription);
                }
                this.add(subscription);
            }
            this.observables = null;
        }
    };
    RaceSubscriber.prototype.notifyNext = function (outerValue, innerValue, outerIndex, innerIndex, innerSub) {
        if (!this.hasFirst) {
            this.hasFirst = true;
            for (var i = 0; i < this.subscriptions.length; i++) {
                if (i !== outerIndex) {
                    var subscription = this.subscriptions[i];
                    subscription.unsubscribe();
                    this.remove(subscription);
                }
            }
            this.subscriptions = null;
        }
        this.destination.next(innerValue);
    };
    return RaceSubscriber;
}(OuterSubscriber_1.OuterSubscriber));
exports.RaceSubscriber = RaceSubscriber;
//# sourceMappingURL=race.js.map

/***/ }),

/***/ "./node_modules/rxjs/internal/observable/range.js":
/*!********************************************************!*\
  !*** ./node_modules/rxjs/internal/observable/range.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Observable_1 = __webpack_require__(/*! ../Observable */ "./node_modules/rxjs/internal/Observable.js");
function range(start, count, scheduler) {
    if (start === void 0) { start = 0; }
    return new Observable_1.Observable(function (subscriber) {
        if (count === undefined) {
            count = start;
            start = 0;
        }
        var index = 0;
        var current = start;
        if (scheduler) {
            return scheduler.schedule(dispatch, 0, {
                index: index, count: count, start: start, subscriber: subscriber
            });
        }
        else {
            do {
                if (index++ >= count) {
                    subscriber.complete();
                    break;
                }
                subscriber.next(current++);
                if (subscriber.closed) {
                    break;
                }
            } while (true);
        }
        return undefined;
    });
}
exports.range = range;
function dispatch(state) {
    var start = state.start, index = state.index, count = state.count, subscriber = state.subscriber;
    if (index >= count) {
        subscriber.complete();
        return;
    }
    subscriber.next(start);
    if (subscriber.closed) {
        return;
    }
    state.index = index + 1;
    state.start = start + 1;
    this.schedule(state);
}
exports.dispatch = dispatch;
//# sourceMappingURL=range.js.map

/***/ }),

/***/ "./node_modules/rxjs/internal/observable/scalar.js":
/*!*********************************************************!*\
  !*** ./node_modules/rxjs/internal/observable/scalar.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Observable_1 = __webpack_require__(/*! ../Observable */ "./node_modules/rxjs/internal/Observable.js");
function scalar(value) {
    var result = new Observable_1.Observable(function (subscriber) {
        subscriber.next(value);
        subscriber.complete();
    });
    result._isScalar = true;
    result.value = value;
    return result;
}
exports.scalar = scalar;
//# sourceMappingURL=scalar.js.map

/***/ }),

/***/ "./node_modules/rxjs/internal/observable/throwError.js":
/*!*************************************************************!*\
  !*** ./node_modules/rxjs/internal/observable/throwError.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Observable_1 = __webpack_require__(/*! ../Observable */ "./node_modules/rxjs/internal/Observable.js");
function throwError(error, scheduler) {
    if (!scheduler) {
        return new Observable_1.Observable(function (subscriber) { return subscriber.error(error); });
    }
    else {
        return new Observable_1.Observable(function (subscriber) { return scheduler.schedule(dispatch, 0, { error: error, subscriber: subscriber }); });
    }
}
exports.throwError = throwError;
function dispatch(_a) {
    var error = _a.error, subscriber = _a.subscriber;
    subscriber.error(error);
}
//# sourceMappingURL=throwError.js.map

/***/ }),

/***/ "./node_modules/rxjs/internal/observable/timer.js":
/*!********************************************************!*\
  !*** ./node_modules/rxjs/internal/observable/timer.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Observable_1 = __webpack_require__(/*! ../Observable */ "./node_modules/rxjs/internal/Observable.js");
var async_1 = __webpack_require__(/*! ../scheduler/async */ "./node_modules/rxjs/internal/scheduler/async.js");
var isNumeric_1 = __webpack_require__(/*! ../util/isNumeric */ "./node_modules/rxjs/internal/util/isNumeric.js");
var isScheduler_1 = __webpack_require__(/*! ../util/isScheduler */ "./node_modules/rxjs/internal/util/isScheduler.js");
function timer(dueTime, periodOrScheduler, scheduler) {
    if (dueTime === void 0) { dueTime = 0; }
    var period = -1;
    if (isNumeric_1.isNumeric(periodOrScheduler)) {
        period = Number(periodOrScheduler) < 1 && 1 || Number(periodOrScheduler);
    }
    else if (isScheduler_1.isScheduler(periodOrScheduler)) {
        scheduler = periodOrScheduler;
    }
    if (!isScheduler_1.isScheduler(scheduler)) {
        scheduler = async_1.async;
    }
    return new Observable_1.Observable(function (subscriber) {
        var due = isNumeric_1.isNumeric(dueTime)
            ? dueTime
            : (+dueTime - scheduler.now());
        return scheduler.schedule(dispatch, due, {
            index: 0, period: period, subscriber: subscriber
        });
    });
}
exports.timer = timer;
function dispatch(state) {
    var index = state.index, period = state.period, subscriber = state.subscriber;
    subscriber.next(index);
    if (subscriber.closed) {
        return;
    }
    else if (period === -1) {
        return subscriber.complete();
    }
    state.index = index + 1;
    this.schedule(state, period);
}
//# sourceMappingURL=timer.js.map

/***/ }),

/***/ "./node_modules/rxjs/internal/observable/using.js":
/*!********************************************************!*\
  !*** ./node_modules/rxjs/internal/observable/using.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Observable_1 = __webpack_require__(/*! ../Observable */ "./node_modules/rxjs/internal/Observable.js");
var from_1 = __webpack_require__(/*! ./from */ "./node_modules/rxjs/internal/observable/from.js");
var empty_1 = __webpack_require__(/*! ./empty */ "./node_modules/rxjs/internal/observable/empty.js");
function using(resourceFactory, observableFactory) {
    return new Observable_1.Observable(function (subscriber) {
        var resource;
        try {
            resource = resourceFactory();
        }
        catch (err) {
            subscriber.error(err);
            return undefined;
        }
        var result;
        try {
            result = observableFactory(resource);
        }
        catch (err) {
            subscriber.error(err);
            return undefined;
        }
        var source = result ? from_1.from(result) : empty_1.EMPTY;
        var subscription = source.subscribe(subscriber);
        return function () {
            subscription.unsubscribe();
            if (resource) {
                resource.unsubscribe();
            }
        };
    });
}
exports.using = using;
//# sourceMappingURL=using.js.map

/***/ }),

/***/ "./node_modules/rxjs/internal/observable/zip.js":
/*!******************************************************!*\
  !*** ./node_modules/rxjs/internal/observable/zip.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var fromArray_1 = __webpack_require__(/*! ./fromArray */ "./node_modules/rxjs/internal/observable/fromArray.js");
var isArray_1 = __webpack_require__(/*! ../util/isArray */ "./node_modules/rxjs/internal/util/isArray.js");
var Subscriber_1 = __webpack_require__(/*! ../Subscriber */ "./node_modules/rxjs/internal/Subscriber.js");
var OuterSubscriber_1 = __webpack_require__(/*! ../OuterSubscriber */ "./node_modules/rxjs/internal/OuterSubscriber.js");
var subscribeToResult_1 = __webpack_require__(/*! ../util/subscribeToResult */ "./node_modules/rxjs/internal/util/subscribeToResult.js");
var iterator_1 = __webpack_require__(/*! ../../internal/symbol/iterator */ "./node_modules/rxjs/internal/symbol/iterator.js");
function zip() {
    var observables = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        observables[_i] = arguments[_i];
    }
    var resultSelector = observables[observables.length - 1];
    if (typeof resultSelector === 'function') {
        observables.pop();
    }
    return fromArray_1.fromArray(observables, undefined).lift(new ZipOperator(resultSelector));
}
exports.zip = zip;
var ZipOperator = (function () {
    function ZipOperator(resultSelector) {
        this.resultSelector = resultSelector;
    }
    ZipOperator.prototype.call = function (subscriber, source) {
        return source.subscribe(new ZipSubscriber(subscriber, this.resultSelector));
    };
    return ZipOperator;
}());
exports.ZipOperator = ZipOperator;
var ZipSubscriber = (function (_super) {
    __extends(ZipSubscriber, _super);
    function ZipSubscriber(destination, resultSelector, values) {
        if (values === void 0) { values = Object.create(null); }
        var _this = _super.call(this, destination) || this;
        _this.iterators = [];
        _this.active = 0;
        _this.resultSelector = (typeof resultSelector === 'function') ? resultSelector : null;
        _this.values = values;
        return _this;
    }
    ZipSubscriber.prototype._next = function (value) {
        var iterators = this.iterators;
        if (isArray_1.isArray(value)) {
            iterators.push(new StaticArrayIterator(value));
        }
        else if (typeof value[iterator_1.iterator] === 'function') {
            iterators.push(new StaticIterator(value[iterator_1.iterator]()));
        }
        else {
            iterators.push(new ZipBufferIterator(this.destination, this, value));
        }
    };
    ZipSubscriber.prototype._complete = function () {
        var iterators = this.iterators;
        var len = iterators.length;
        this.unsubscribe();
        if (len === 0) {
            this.destination.complete();
            return;
        }
        this.active = len;
        for (var i = 0; i < len; i++) {
            var iterator = iterators[i];
            if (iterator.stillUnsubscribed) {
                var destination = this.destination;
                destination.add(iterator.subscribe(iterator, i));
            }
            else {
                this.active--;
            }
        }
    };
    ZipSubscriber.prototype.notifyInactive = function () {
        this.active--;
        if (this.active === 0) {
            this.destination.complete();
        }
    };
    ZipSubscriber.prototype.checkIterators = function () {
        var iterators = this.iterators;
        var len = iterators.length;
        var destination = this.destination;
        for (var i = 0; i < len; i++) {
            var iterator = iterators[i];
            if (typeof iterator.hasValue === 'function' && !iterator.hasValue()) {
                return;
            }
        }
        var shouldComplete = false;
        var args = [];
        for (var i = 0; i < len; i++) {
            var iterator = iterators[i];
            var result = iterator.next();
            if (iterator.hasCompleted()) {
                shouldComplete = true;
            }
            if (result.done) {
                destination.complete();
                return;
            }
            args.push(result.value);
        }
        if (this.resultSelector) {
            this._tryresultSelector(args);
        }
        else {
            destination.next(args);
        }
        if (shouldComplete) {
            destination.complete();
        }
    };
    ZipSubscriber.prototype._tryresultSelector = function (args) {
        var result;
        try {
            result = this.resultSelector.apply(this, args);
        }
        catch (err) {
            this.destination.error(err);
            return;
        }
        this.destination.next(result);
    };
    return ZipSubscriber;
}(Subscriber_1.Subscriber));
exports.ZipSubscriber = ZipSubscriber;
var StaticIterator = (function () {
    function StaticIterator(iterator) {
        this.iterator = iterator;
        this.nextResult = iterator.next();
    }
    StaticIterator.prototype.hasValue = function () {
        return true;
    };
    StaticIterator.prototype.next = function () {
        var result = this.nextResult;
        this.nextResult = this.iterator.next();
        return result;
    };
    StaticIterator.prototype.hasCompleted = function () {
        var nextResult = this.nextResult;
        return nextResult && nextResult.done;
    };
    return StaticIterator;
}());
var StaticArrayIterator = (function () {
    function StaticArrayIterator(array) {
        this.array = array;
        this.index = 0;
        this.length = 0;
        this.length = array.length;
    }
    StaticArrayIterator.prototype[iterator_1.iterator] = function () {
        return this;
    };
    StaticArrayIterator.prototype.next = function (value) {
        var i = this.index++;
        var array = this.array;
        return i < this.length ? { value: array[i], done: false } : { value: null, done: true };
    };
    StaticArrayIterator.prototype.hasValue = function () {
        return this.array.length > this.index;
    };
    StaticArrayIterator.prototype.hasCompleted = function () {
        return this.array.length === this.index;
    };
    return StaticArrayIterator;
}());
var ZipBufferIterator = (function (_super) {
    __extends(ZipBufferIterator, _super);
    function ZipBufferIterator(destination, parent, observable) {
        var _this = _super.call(this, destination) || this;
        _this.parent = parent;
        _this.observable = observable;
        _this.stillUnsubscribed = true;
        _this.buffer = [];
        _this.isComplete = false;
        return _this;
    }
    ZipBufferIterator.prototype[iterator_1.iterator] = function () {
        return this;
    };
    ZipBufferIterator.prototype.next = function () {
        var buffer = this.buffer;
        if (buffer.length === 0 && this.isComplete) {
            return { value: null, done: true };
        }
        else {
            return { value: buffer.shift(), done: false };
        }
    };
    ZipBufferIterator.prototype.hasValue = function () {
        return this.buffer.length > 0;
    };
    ZipBufferIterator.prototype.hasCompleted = function () {
        return this.buffer.length === 0 && this.isComplete;
    };
    ZipBufferIterator.prototype.notifyComplete = function () {
        if (this.buffer.length > 0) {
            this.isComplete = true;
            this.parent.notifyInactive();
        }
        else {
            this.destination.complete();
        }
    };
    ZipBufferIterator.prototype.notifyNext = function (outerValue, innerValue, outerIndex, innerIndex, innerSub) {
        this.buffer.push(innerValue);
        this.parent.checkIterators();
    };
    ZipBufferIterator.prototype.subscribe = function (value, index) {
        return subscribeToResult_1.subscribeToResult(this, this.observable, this, index);
    };
    return ZipBufferIterator;
}(OuterSubscriber_1.OuterSubscriber));
//# sourceMappingURL=zip.js.map

/***/ }),

/***/ "./node_modules/rxjs/internal/operators/concatAll.js":
/*!***********************************************************!*\
  !*** ./node_modules/rxjs/internal/operators/concatAll.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var mergeAll_1 = __webpack_require__(/*! ./mergeAll */ "./node_modules/rxjs/internal/operators/mergeAll.js");
function concatAll() {
    return mergeAll_1.mergeAll(1);
}
exports.concatAll = concatAll;
//# sourceMappingURL=concatAll.js.map

/***/ }),

/***/ "./node_modules/rxjs/internal/operators/groupBy.js":
/*!*********************************************************!*\
  !*** ./node_modules/rxjs/internal/operators/groupBy.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var Subscriber_1 = __webpack_require__(/*! ../Subscriber */ "./node_modules/rxjs/internal/Subscriber.js");
var Subscription_1 = __webpack_require__(/*! ../Subscription */ "./node_modules/rxjs/internal/Subscription.js");
var Observable_1 = __webpack_require__(/*! ../Observable */ "./node_modules/rxjs/internal/Observable.js");
var Subject_1 = __webpack_require__(/*! ../Subject */ "./node_modules/rxjs/internal/Subject.js");
function groupBy(keySelector, elementSelector, durationSelector, subjectSelector) {
    return function (source) {
        return source.lift(new GroupByOperator(keySelector, elementSelector, durationSelector, subjectSelector));
    };
}
exports.groupBy = groupBy;
var GroupByOperator = (function () {
    function GroupByOperator(keySelector, elementSelector, durationSelector, subjectSelector) {
        this.keySelector = keySelector;
        this.elementSelector = elementSelector;
        this.durationSelector = durationSelector;
        this.subjectSelector = subjectSelector;
    }
    GroupByOperator.prototype.call = function (subscriber, source) {
        return source.subscribe(new GroupBySubscriber(subscriber, this.keySelector, this.elementSelector, this.durationSelector, this.subjectSelector));
    };
    return GroupByOperator;
}());
var GroupBySubscriber = (function (_super) {
    __extends(GroupBySubscriber, _super);
    function GroupBySubscriber(destination, keySelector, elementSelector, durationSelector, subjectSelector) {
        var _this = _super.call(this, destination) || this;
        _this.keySelector = keySelector;
        _this.elementSelector = elementSelector;
        _this.durationSelector = durationSelector;
        _this.subjectSelector = subjectSelector;
        _this.groups = null;
        _this.attemptedToUnsubscribe = false;
        _this.count = 0;
        return _this;
    }
    GroupBySubscriber.prototype._next = function (value) {
        var key;
        try {
            key = this.keySelector(value);
        }
        catch (err) {
            this.error(err);
            return;
        }
        this._group(value, key);
    };
    GroupBySubscriber.prototype._group = function (value, key) {
        var groups = this.groups;
        if (!groups) {
            groups = this.groups = new Map();
        }
        var group = groups.get(key);
        var element;
        if (this.elementSelector) {
            try {
                element = this.elementSelector(value);
            }
            catch (err) {
                this.error(err);
            }
        }
        else {
            element = value;
        }
        if (!group) {
            group = (this.subjectSelector ? this.subjectSelector() : new Subject_1.Subject());
            groups.set(key, group);
            var groupedObservable = new GroupedObservable(key, group, this);
            this.destination.next(groupedObservable);
            if (this.durationSelector) {
                var duration = void 0;
                try {
                    duration = this.durationSelector(new GroupedObservable(key, group));
                }
                catch (err) {
                    this.error(err);
                    return;
                }
                this.add(duration.subscribe(new GroupDurationSubscriber(key, group, this)));
            }
        }
        if (!group.closed) {
            group.next(element);
        }
    };
    GroupBySubscriber.prototype._error = function (err) {
        var groups = this.groups;
        if (groups) {
            groups.forEach(function (group, key) {
                group.error(err);
            });
            groups.clear();
        }
        this.destination.error(err);
    };
    GroupBySubscriber.prototype._complete = function () {
        var groups = this.groups;
        if (groups) {
            groups.forEach(function (group, key) {
                group.complete();
            });
            groups.clear();
        }
        this.destination.complete();
    };
    GroupBySubscriber.prototype.removeGroup = function (key) {
        this.groups.delete(key);
    };
    GroupBySubscriber.prototype.unsubscribe = function () {
        if (!this.closed) {
            this.attemptedToUnsubscribe = true;
            if (this.count === 0) {
                _super.prototype.unsubscribe.call(this);
            }
        }
    };
    return GroupBySubscriber;
}(Subscriber_1.Subscriber));
var GroupDurationSubscriber = (function (_super) {
    __extends(GroupDurationSubscriber, _super);
    function GroupDurationSubscriber(key, group, parent) {
        var _this = _super.call(this, group) || this;
        _this.key = key;
        _this.group = group;
        _this.parent = parent;
        return _this;
    }
    GroupDurationSubscriber.prototype._next = function (value) {
        this.complete();
    };
    GroupDurationSubscriber.prototype._unsubscribe = function () {
        var _a = this, parent = _a.parent, key = _a.key;
        this.key = this.parent = null;
        if (parent) {
            parent.removeGroup(key);
        }
    };
    return GroupDurationSubscriber;
}(Subscriber_1.Subscriber));
var GroupedObservable = (function (_super) {
    __extends(GroupedObservable, _super);
    function GroupedObservable(key, groupSubject, refCountSubscription) {
        var _this = _super.call(this) || this;
        _this.key = key;
        _this.groupSubject = groupSubject;
        _this.refCountSubscription = refCountSubscription;
        return _this;
    }
    GroupedObservable.prototype._subscribe = function (subscriber) {
        var subscription = new Subscription_1.Subscription();
        var _a = this, refCountSubscription = _a.refCountSubscription, groupSubject = _a.groupSubject;
        if (refCountSubscription && !refCountSubscription.closed) {
            subscription.add(new InnerRefCountSubscription(refCountSubscription));
        }
        subscription.add(groupSubject.subscribe(subscriber));
        return subscription;
    };
    return GroupedObservable;
}(Observable_1.Observable));
exports.GroupedObservable = GroupedObservable;
var InnerRefCountSubscription = (function (_super) {
    __extends(InnerRefCountSubscription, _super);
    function InnerRefCountSubscription(parent) {
        var _this = _super.call(this) || this;
        _this.parent = parent;
        parent.count++;
        return _this;
    }
    InnerRefCountSubscription.prototype.unsubscribe = function () {
        var parent = this.parent;
        if (!parent.closed && !this.closed) {
            _super.prototype.unsubscribe.call(this);
            parent.count -= 1;
            if (parent.count === 0 && parent.attemptedToUnsubscribe) {
                parent.unsubscribe();
            }
        }
    };
    return InnerRefCountSubscription;
}(Subscription_1.Subscription));
//# sourceMappingURL=groupBy.js.map

/***/ }),

/***/ "./node_modules/rxjs/internal/operators/map.js":
/*!*****************************************************!*\
  !*** ./node_modules/rxjs/internal/operators/map.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var Subscriber_1 = __webpack_require__(/*! ../Subscriber */ "./node_modules/rxjs/internal/Subscriber.js");
function map(project, thisArg) {
    return function mapOperation(source) {
        if (typeof project !== 'function') {
            throw new TypeError('argument is not a function. Are you looking for `mapTo()`?');
        }
        return source.lift(new MapOperator(project, thisArg));
    };
}
exports.map = map;
var MapOperator = (function () {
    function MapOperator(project, thisArg) {
        this.project = project;
        this.thisArg = thisArg;
    }
    MapOperator.prototype.call = function (subscriber, source) {
        return source.subscribe(new MapSubscriber(subscriber, this.project, this.thisArg));
    };
    return MapOperator;
}());
exports.MapOperator = MapOperator;
var MapSubscriber = (function (_super) {
    __extends(MapSubscriber, _super);
    function MapSubscriber(destination, project, thisArg) {
        var _this = _super.call(this, destination) || this;
        _this.project = project;
        _this.count = 0;
        _this.thisArg = thisArg || _this;
        return _this;
    }
    MapSubscriber.prototype._next = function (value) {
        var result;
        try {
            result = this.project.call(this.thisArg, value, this.count++);
        }
        catch (err) {
            this.destination.error(err);
            return;
        }
        this.destination.next(result);
    };
    return MapSubscriber;
}(Subscriber_1.Subscriber));
//# sourceMappingURL=map.js.map

/***/ }),

/***/ "./node_modules/rxjs/internal/operators/mergeAll.js":
/*!**********************************************************!*\
  !*** ./node_modules/rxjs/internal/operators/mergeAll.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var mergeMap_1 = __webpack_require__(/*! ./mergeMap */ "./node_modules/rxjs/internal/operators/mergeMap.js");
var identity_1 = __webpack_require__(/*! ../util/identity */ "./node_modules/rxjs/internal/util/identity.js");
function mergeAll(concurrent) {
    if (concurrent === void 0) { concurrent = Number.POSITIVE_INFINITY; }
    return mergeMap_1.mergeMap(identity_1.identity, concurrent);
}
exports.mergeAll = mergeAll;
//# sourceMappingURL=mergeAll.js.map

/***/ }),

/***/ "./node_modules/rxjs/internal/operators/mergeMap.js":
/*!**********************************************************!*\
  !*** ./node_modules/rxjs/internal/operators/mergeMap.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var subscribeToResult_1 = __webpack_require__(/*! ../util/subscribeToResult */ "./node_modules/rxjs/internal/util/subscribeToResult.js");
var OuterSubscriber_1 = __webpack_require__(/*! ../OuterSubscriber */ "./node_modules/rxjs/internal/OuterSubscriber.js");
var InnerSubscriber_1 = __webpack_require__(/*! ../InnerSubscriber */ "./node_modules/rxjs/internal/InnerSubscriber.js");
var map_1 = __webpack_require__(/*! ./map */ "./node_modules/rxjs/internal/operators/map.js");
var from_1 = __webpack_require__(/*! ../observable/from */ "./node_modules/rxjs/internal/observable/from.js");
function mergeMap(project, resultSelector, concurrent) {
    if (concurrent === void 0) { concurrent = Number.POSITIVE_INFINITY; }
    if (typeof resultSelector === 'function') {
        return function (source) { return source.pipe(mergeMap(function (a, i) { return from_1.from(project(a, i)).pipe(map_1.map(function (b, ii) { return resultSelector(a, b, i, ii); })); }, concurrent)); };
    }
    else if (typeof resultSelector === 'number') {
        concurrent = resultSelector;
    }
    return function (source) { return source.lift(new MergeMapOperator(project, concurrent)); };
}
exports.mergeMap = mergeMap;
var MergeMapOperator = (function () {
    function MergeMapOperator(project, concurrent) {
        if (concurrent === void 0) { concurrent = Number.POSITIVE_INFINITY; }
        this.project = project;
        this.concurrent = concurrent;
    }
    MergeMapOperator.prototype.call = function (observer, source) {
        return source.subscribe(new MergeMapSubscriber(observer, this.project, this.concurrent));
    };
    return MergeMapOperator;
}());
exports.MergeMapOperator = MergeMapOperator;
var MergeMapSubscriber = (function (_super) {
    __extends(MergeMapSubscriber, _super);
    function MergeMapSubscriber(destination, project, concurrent) {
        if (concurrent === void 0) { concurrent = Number.POSITIVE_INFINITY; }
        var _this = _super.call(this, destination) || this;
        _this.project = project;
        _this.concurrent = concurrent;
        _this.hasCompleted = false;
        _this.buffer = [];
        _this.active = 0;
        _this.index = 0;
        return _this;
    }
    MergeMapSubscriber.prototype._next = function (value) {
        if (this.active < this.concurrent) {
            this._tryNext(value);
        }
        else {
            this.buffer.push(value);
        }
    };
    MergeMapSubscriber.prototype._tryNext = function (value) {
        var result;
        var index = this.index++;
        try {
            result = this.project(value, index);
        }
        catch (err) {
            this.destination.error(err);
            return;
        }
        this.active++;
        this._innerSub(result, value, index);
    };
    MergeMapSubscriber.prototype._innerSub = function (ish, value, index) {
        var innerSubscriber = new InnerSubscriber_1.InnerSubscriber(this, undefined, undefined);
        var destination = this.destination;
        destination.add(innerSubscriber);
        subscribeToResult_1.subscribeToResult(this, ish, value, index, innerSubscriber);
    };
    MergeMapSubscriber.prototype._complete = function () {
        this.hasCompleted = true;
        if (this.active === 0 && this.buffer.length === 0) {
            this.destination.complete();
        }
        this.unsubscribe();
    };
    MergeMapSubscriber.prototype.notifyNext = function (outerValue, innerValue, outerIndex, innerIndex, innerSub) {
        this.destination.next(innerValue);
    };
    MergeMapSubscriber.prototype.notifyComplete = function (innerSub) {
        var buffer = this.buffer;
        this.remove(innerSub);
        this.active--;
        if (buffer.length > 0) {
            this._next(buffer.shift());
        }
        else if (this.active === 0 && this.hasCompleted) {
            this.destination.complete();
        }
    };
    return MergeMapSubscriber;
}(OuterSubscriber_1.OuterSubscriber));
exports.MergeMapSubscriber = MergeMapSubscriber;
//# sourceMappingURL=mergeMap.js.map

/***/ }),

/***/ "./node_modules/rxjs/internal/operators/observeOn.js":
/*!***********************************************************!*\
  !*** ./node_modules/rxjs/internal/operators/observeOn.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var Subscriber_1 = __webpack_require__(/*! ../Subscriber */ "./node_modules/rxjs/internal/Subscriber.js");
var Notification_1 = __webpack_require__(/*! ../Notification */ "./node_modules/rxjs/internal/Notification.js");
function observeOn(scheduler, delay) {
    if (delay === void 0) { delay = 0; }
    return function observeOnOperatorFunction(source) {
        return source.lift(new ObserveOnOperator(scheduler, delay));
    };
}
exports.observeOn = observeOn;
var ObserveOnOperator = (function () {
    function ObserveOnOperator(scheduler, delay) {
        if (delay === void 0) { delay = 0; }
        this.scheduler = scheduler;
        this.delay = delay;
    }
    ObserveOnOperator.prototype.call = function (subscriber, source) {
        return source.subscribe(new ObserveOnSubscriber(subscriber, this.scheduler, this.delay));
    };
    return ObserveOnOperator;
}());
exports.ObserveOnOperator = ObserveOnOperator;
var ObserveOnSubscriber = (function (_super) {
    __extends(ObserveOnSubscriber, _super);
    function ObserveOnSubscriber(destination, scheduler, delay) {
        if (delay === void 0) { delay = 0; }
        var _this = _super.call(this, destination) || this;
        _this.scheduler = scheduler;
        _this.delay = delay;
        return _this;
    }
    ObserveOnSubscriber.dispatch = function (arg) {
        var notification = arg.notification, destination = arg.destination;
        notification.observe(destination);
        this.unsubscribe();
    };
    ObserveOnSubscriber.prototype.scheduleMessage = function (notification) {
        var destination = this.destination;
        destination.add(this.scheduler.schedule(ObserveOnSubscriber.dispatch, this.delay, new ObserveOnMessage(notification, this.destination)));
    };
    ObserveOnSubscriber.prototype._next = function (value) {
        this.scheduleMessage(Notification_1.Notification.createNext(value));
    };
    ObserveOnSubscriber.prototype._error = function (err) {
        this.scheduleMessage(Notification_1.Notification.createError(err));
        this.unsubscribe();
    };
    ObserveOnSubscriber.prototype._complete = function () {
        this.scheduleMessage(Notification_1.Notification.createComplete());
        this.unsubscribe();
    };
    return ObserveOnSubscriber;
}(Subscriber_1.Subscriber));
exports.ObserveOnSubscriber = ObserveOnSubscriber;
var ObserveOnMessage = (function () {
    function ObserveOnMessage(notification, destination) {
        this.notification = notification;
        this.destination = destination;
    }
    return ObserveOnMessage;
}());
exports.ObserveOnMessage = ObserveOnMessage;
//# sourceMappingURL=observeOn.js.map

/***/ }),

/***/ "./node_modules/rxjs/internal/operators/refCount.js":
/*!**********************************************************!*\
  !*** ./node_modules/rxjs/internal/operators/refCount.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var Subscriber_1 = __webpack_require__(/*! ../Subscriber */ "./node_modules/rxjs/internal/Subscriber.js");
function refCount() {
    return function refCountOperatorFunction(source) {
        return source.lift(new RefCountOperator(source));
    };
}
exports.refCount = refCount;
var RefCountOperator = (function () {
    function RefCountOperator(connectable) {
        this.connectable = connectable;
    }
    RefCountOperator.prototype.call = function (subscriber, source) {
        var connectable = this.connectable;
        connectable._refCount++;
        var refCounter = new RefCountSubscriber(subscriber, connectable);
        var subscription = source.subscribe(refCounter);
        if (!refCounter.closed) {
            refCounter.connection = connectable.connect();
        }
        return subscription;
    };
    return RefCountOperator;
}());
var RefCountSubscriber = (function (_super) {
    __extends(RefCountSubscriber, _super);
    function RefCountSubscriber(destination, connectable) {
        var _this = _super.call(this, destination) || this;
        _this.connectable = connectable;
        return _this;
    }
    RefCountSubscriber.prototype._unsubscribe = function () {
        var connectable = this.connectable;
        if (!connectable) {
            this.connection = null;
            return;
        }
        this.connectable = null;
        var refCount = connectable._refCount;
        if (refCount <= 0) {
            this.connection = null;
            return;
        }
        connectable._refCount = refCount - 1;
        if (refCount > 1) {
            this.connection = null;
            return;
        }
        var connection = this.connection;
        var sharedConnection = connectable._connection;
        this.connection = null;
        if (sharedConnection && (!connection || sharedConnection === connection)) {
            sharedConnection.unsubscribe();
        }
    };
    return RefCountSubscriber;
}(Subscriber_1.Subscriber));
//# sourceMappingURL=refCount.js.map

/***/ }),

/***/ "./node_modules/rxjs/internal/scheduler/Action.js":
/*!********************************************************!*\
  !*** ./node_modules/rxjs/internal/scheduler/Action.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var Subscription_1 = __webpack_require__(/*! ../Subscription */ "./node_modules/rxjs/internal/Subscription.js");
var Action = (function (_super) {
    __extends(Action, _super);
    function Action(scheduler, work) {
        return _super.call(this) || this;
    }
    Action.prototype.schedule = function (state, delay) {
        if (delay === void 0) { delay = 0; }
        return this;
    };
    return Action;
}(Subscription_1.Subscription));
exports.Action = Action;
//# sourceMappingURL=Action.js.map

/***/ }),

/***/ "./node_modules/rxjs/internal/scheduler/AnimationFrameAction.js":
/*!**********************************************************************!*\
  !*** ./node_modules/rxjs/internal/scheduler/AnimationFrameAction.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var AsyncAction_1 = __webpack_require__(/*! ./AsyncAction */ "./node_modules/rxjs/internal/scheduler/AsyncAction.js");
var AnimationFrameAction = (function (_super) {
    __extends(AnimationFrameAction, _super);
    function AnimationFrameAction(scheduler, work) {
        var _this = _super.call(this, scheduler, work) || this;
        _this.scheduler = scheduler;
        _this.work = work;
        return _this;
    }
    AnimationFrameAction.prototype.requestAsyncId = function (scheduler, id, delay) {
        if (delay === void 0) { delay = 0; }
        if (delay !== null && delay > 0) {
            return _super.prototype.requestAsyncId.call(this, scheduler, id, delay);
        }
        scheduler.actions.push(this);
        return scheduler.scheduled || (scheduler.scheduled = requestAnimationFrame(function () { return scheduler.flush(null); }));
    };
    AnimationFrameAction.prototype.recycleAsyncId = function (scheduler, id, delay) {
        if (delay === void 0) { delay = 0; }
        if ((delay !== null && delay > 0) || (delay === null && this.delay > 0)) {
            return _super.prototype.recycleAsyncId.call(this, scheduler, id, delay);
        }
        if (scheduler.actions.length === 0) {
            cancelAnimationFrame(id);
            scheduler.scheduled = undefined;
        }
        return undefined;
    };
    return AnimationFrameAction;
}(AsyncAction_1.AsyncAction));
exports.AnimationFrameAction = AnimationFrameAction;
//# sourceMappingURL=AnimationFrameAction.js.map

/***/ }),

/***/ "./node_modules/rxjs/internal/scheduler/AnimationFrameScheduler.js":
/*!*************************************************************************!*\
  !*** ./node_modules/rxjs/internal/scheduler/AnimationFrameScheduler.js ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var AsyncScheduler_1 = __webpack_require__(/*! ./AsyncScheduler */ "./node_modules/rxjs/internal/scheduler/AsyncScheduler.js");
var AnimationFrameScheduler = (function (_super) {
    __extends(AnimationFrameScheduler, _super);
    function AnimationFrameScheduler() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    AnimationFrameScheduler.prototype.flush = function (action) {
        this.active = true;
        this.scheduled = undefined;
        var actions = this.actions;
        var error;
        var index = -1;
        var count = actions.length;
        action = action || actions.shift();
        do {
            if (error = action.execute(action.state, action.delay)) {
                break;
            }
        } while (++index < count && (action = actions.shift()));
        this.active = false;
        if (error) {
            while (++index < count && (action = actions.shift())) {
                action.unsubscribe();
            }
            throw error;
        }
    };
    return AnimationFrameScheduler;
}(AsyncScheduler_1.AsyncScheduler));
exports.AnimationFrameScheduler = AnimationFrameScheduler;
//# sourceMappingURL=AnimationFrameScheduler.js.map

/***/ }),

/***/ "./node_modules/rxjs/internal/scheduler/AsapAction.js":
/*!************************************************************!*\
  !*** ./node_modules/rxjs/internal/scheduler/AsapAction.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var Immediate_1 = __webpack_require__(/*! ../util/Immediate */ "./node_modules/rxjs/internal/util/Immediate.js");
var AsyncAction_1 = __webpack_require__(/*! ./AsyncAction */ "./node_modules/rxjs/internal/scheduler/AsyncAction.js");
var AsapAction = (function (_super) {
    __extends(AsapAction, _super);
    function AsapAction(scheduler, work) {
        var _this = _super.call(this, scheduler, work) || this;
        _this.scheduler = scheduler;
        _this.work = work;
        return _this;
    }
    AsapAction.prototype.requestAsyncId = function (scheduler, id, delay) {
        if (delay === void 0) { delay = 0; }
        if (delay !== null && delay > 0) {
            return _super.prototype.requestAsyncId.call(this, scheduler, id, delay);
        }
        scheduler.actions.push(this);
        return scheduler.scheduled || (scheduler.scheduled = Immediate_1.Immediate.setImmediate(scheduler.flush.bind(scheduler, null)));
    };
    AsapAction.prototype.recycleAsyncId = function (scheduler, id, delay) {
        if (delay === void 0) { delay = 0; }
        if ((delay !== null && delay > 0) || (delay === null && this.delay > 0)) {
            return _super.prototype.recycleAsyncId.call(this, scheduler, id, delay);
        }
        if (scheduler.actions.length === 0) {
            Immediate_1.Immediate.clearImmediate(id);
            scheduler.scheduled = undefined;
        }
        return undefined;
    };
    return AsapAction;
}(AsyncAction_1.AsyncAction));
exports.AsapAction = AsapAction;
//# sourceMappingURL=AsapAction.js.map

/***/ }),

/***/ "./node_modules/rxjs/internal/scheduler/AsapScheduler.js":
/*!***************************************************************!*\
  !*** ./node_modules/rxjs/internal/scheduler/AsapScheduler.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var AsyncScheduler_1 = __webpack_require__(/*! ./AsyncScheduler */ "./node_modules/rxjs/internal/scheduler/AsyncScheduler.js");
var AsapScheduler = (function (_super) {
    __extends(AsapScheduler, _super);
    function AsapScheduler() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    AsapScheduler.prototype.flush = function (action) {
        this.active = true;
        this.scheduled = undefined;
        var actions = this.actions;
        var error;
        var index = -1;
        var count = actions.length;
        action = action || actions.shift();
        do {
            if (error = action.execute(action.state, action.delay)) {
                break;
            }
        } while (++index < count && (action = actions.shift()));
        this.active = false;
        if (error) {
            while (++index < count && (action = actions.shift())) {
                action.unsubscribe();
            }
            throw error;
        }
    };
    return AsapScheduler;
}(AsyncScheduler_1.AsyncScheduler));
exports.AsapScheduler = AsapScheduler;
//# sourceMappingURL=AsapScheduler.js.map

/***/ }),

/***/ "./node_modules/rxjs/internal/scheduler/AsyncAction.js":
/*!*************************************************************!*\
  !*** ./node_modules/rxjs/internal/scheduler/AsyncAction.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var Action_1 = __webpack_require__(/*! ./Action */ "./node_modules/rxjs/internal/scheduler/Action.js");
var AsyncAction = (function (_super) {
    __extends(AsyncAction, _super);
    function AsyncAction(scheduler, work) {
        var _this = _super.call(this, scheduler, work) || this;
        _this.scheduler = scheduler;
        _this.work = work;
        _this.pending = false;
        return _this;
    }
    AsyncAction.prototype.schedule = function (state, delay) {
        if (delay === void 0) { delay = 0; }
        if (this.closed) {
            return this;
        }
        this.state = state;
        var id = this.id;
        var scheduler = this.scheduler;
        if (id != null) {
            this.id = this.recycleAsyncId(scheduler, id, delay);
        }
        this.pending = true;
        this.delay = delay;
        this.id = this.id || this.requestAsyncId(scheduler, this.id, delay);
        return this;
    };
    AsyncAction.prototype.requestAsyncId = function (scheduler, id, delay) {
        if (delay === void 0) { delay = 0; }
        return setInterval(scheduler.flush.bind(scheduler, this), delay);
    };
    AsyncAction.prototype.recycleAsyncId = function (scheduler, id, delay) {
        if (delay === void 0) { delay = 0; }
        if (delay !== null && this.delay === delay && this.pending === false) {
            return id;
        }
        clearInterval(id);
        return undefined;
    };
    AsyncAction.prototype.execute = function (state, delay) {
        if (this.closed) {
            return new Error('executing a cancelled action');
        }
        this.pending = false;
        var error = this._execute(state, delay);
        if (error) {
            return error;
        }
        else if (this.pending === false && this.id != null) {
            this.id = this.recycleAsyncId(this.scheduler, this.id, null);
        }
    };
    AsyncAction.prototype._execute = function (state, delay) {
        var errored = false;
        var errorValue = undefined;
        try {
            this.work(state);
        }
        catch (e) {
            errored = true;
            errorValue = !!e && e || new Error(e);
        }
        if (errored) {
            this.unsubscribe();
            return errorValue;
        }
    };
    AsyncAction.prototype._unsubscribe = function () {
        var id = this.id;
        var scheduler = this.scheduler;
        var actions = scheduler.actions;
        var index = actions.indexOf(this);
        this.work = null;
        this.state = null;
        this.pending = false;
        this.scheduler = null;
        if (index !== -1) {
            actions.splice(index, 1);
        }
        if (id != null) {
            this.id = this.recycleAsyncId(scheduler, id, null);
        }
        this.delay = null;
    };
    return AsyncAction;
}(Action_1.Action));
exports.AsyncAction = AsyncAction;
//# sourceMappingURL=AsyncAction.js.map

/***/ }),

/***/ "./node_modules/rxjs/internal/scheduler/AsyncScheduler.js":
/*!****************************************************************!*\
  !*** ./node_modules/rxjs/internal/scheduler/AsyncScheduler.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var Scheduler_1 = __webpack_require__(/*! ../Scheduler */ "./node_modules/rxjs/internal/Scheduler.js");
var AsyncScheduler = (function (_super) {
    __extends(AsyncScheduler, _super);
    function AsyncScheduler(SchedulerAction, now) {
        if (now === void 0) { now = Scheduler_1.Scheduler.now; }
        var _this = _super.call(this, SchedulerAction, function () {
            if (AsyncScheduler.delegate && AsyncScheduler.delegate !== _this) {
                return AsyncScheduler.delegate.now();
            }
            else {
                return now();
            }
        }) || this;
        _this.actions = [];
        _this.active = false;
        _this.scheduled = undefined;
        return _this;
    }
    AsyncScheduler.prototype.schedule = function (work, delay, state) {
        if (delay === void 0) { delay = 0; }
        if (AsyncScheduler.delegate && AsyncScheduler.delegate !== this) {
            return AsyncScheduler.delegate.schedule(work, delay, state);
        }
        else {
            return _super.prototype.schedule.call(this, work, delay, state);
        }
    };
    AsyncScheduler.prototype.flush = function (action) {
        var actions = this.actions;
        if (this.active) {
            actions.push(action);
            return;
        }
        var error;
        this.active = true;
        do {
            if (error = action.execute(action.state, action.delay)) {
                break;
            }
        } while (action = actions.shift());
        this.active = false;
        if (error) {
            while (action = actions.shift()) {
                action.unsubscribe();
            }
            throw error;
        }
    };
    return AsyncScheduler;
}(Scheduler_1.Scheduler));
exports.AsyncScheduler = AsyncScheduler;
//# sourceMappingURL=AsyncScheduler.js.map

/***/ }),

/***/ "./node_modules/rxjs/internal/scheduler/QueueAction.js":
/*!*************************************************************!*\
  !*** ./node_modules/rxjs/internal/scheduler/QueueAction.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var AsyncAction_1 = __webpack_require__(/*! ./AsyncAction */ "./node_modules/rxjs/internal/scheduler/AsyncAction.js");
var QueueAction = (function (_super) {
    __extends(QueueAction, _super);
    function QueueAction(scheduler, work) {
        var _this = _super.call(this, scheduler, work) || this;
        _this.scheduler = scheduler;
        _this.work = work;
        return _this;
    }
    QueueAction.prototype.schedule = function (state, delay) {
        if (delay === void 0) { delay = 0; }
        if (delay > 0) {
            return _super.prototype.schedule.call(this, state, delay);
        }
        this.delay = delay;
        this.state = state;
        this.scheduler.flush(this);
        return this;
    };
    QueueAction.prototype.execute = function (state, delay) {
        return (delay > 0 || this.closed) ?
            _super.prototype.execute.call(this, state, delay) :
            this._execute(state, delay);
    };
    QueueAction.prototype.requestAsyncId = function (scheduler, id, delay) {
        if (delay === void 0) { delay = 0; }
        if ((delay !== null && delay > 0) || (delay === null && this.delay > 0)) {
            return _super.prototype.requestAsyncId.call(this, scheduler, id, delay);
        }
        return scheduler.flush(this);
    };
    return QueueAction;
}(AsyncAction_1.AsyncAction));
exports.QueueAction = QueueAction;
//# sourceMappingURL=QueueAction.js.map

/***/ }),

/***/ "./node_modules/rxjs/internal/scheduler/QueueScheduler.js":
/*!****************************************************************!*\
  !*** ./node_modules/rxjs/internal/scheduler/QueueScheduler.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var AsyncScheduler_1 = __webpack_require__(/*! ./AsyncScheduler */ "./node_modules/rxjs/internal/scheduler/AsyncScheduler.js");
var QueueScheduler = (function (_super) {
    __extends(QueueScheduler, _super);
    function QueueScheduler() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return QueueScheduler;
}(AsyncScheduler_1.AsyncScheduler));
exports.QueueScheduler = QueueScheduler;
//# sourceMappingURL=QueueScheduler.js.map

/***/ }),

/***/ "./node_modules/rxjs/internal/scheduler/VirtualTimeScheduler.js":
/*!**********************************************************************!*\
  !*** ./node_modules/rxjs/internal/scheduler/VirtualTimeScheduler.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var AsyncAction_1 = __webpack_require__(/*! ./AsyncAction */ "./node_modules/rxjs/internal/scheduler/AsyncAction.js");
var AsyncScheduler_1 = __webpack_require__(/*! ./AsyncScheduler */ "./node_modules/rxjs/internal/scheduler/AsyncScheduler.js");
var VirtualTimeScheduler = (function (_super) {
    __extends(VirtualTimeScheduler, _super);
    function VirtualTimeScheduler(SchedulerAction, maxFrames) {
        if (SchedulerAction === void 0) { SchedulerAction = VirtualAction; }
        if (maxFrames === void 0) { maxFrames = Number.POSITIVE_INFINITY; }
        var _this = _super.call(this, SchedulerAction, function () { return _this.frame; }) || this;
        _this.maxFrames = maxFrames;
        _this.frame = 0;
        _this.index = -1;
        return _this;
    }
    VirtualTimeScheduler.prototype.flush = function () {
        var _a = this, actions = _a.actions, maxFrames = _a.maxFrames;
        var error, action;
        while ((action = actions[0]) && action.delay <= maxFrames) {
            actions.shift();
            this.frame = action.delay;
            if (error = action.execute(action.state, action.delay)) {
                break;
            }
        }
        if (error) {
            while (action = actions.shift()) {
                action.unsubscribe();
            }
            throw error;
        }
    };
    VirtualTimeScheduler.frameTimeFactor = 10;
    return VirtualTimeScheduler;
}(AsyncScheduler_1.AsyncScheduler));
exports.VirtualTimeScheduler = VirtualTimeScheduler;
var VirtualAction = (function (_super) {
    __extends(VirtualAction, _super);
    function VirtualAction(scheduler, work, index) {
        if (index === void 0) { index = scheduler.index += 1; }
        var _this = _super.call(this, scheduler, work) || this;
        _this.scheduler = scheduler;
        _this.work = work;
        _this.index = index;
        _this.active = true;
        _this.index = scheduler.index = index;
        return _this;
    }
    VirtualAction.prototype.schedule = function (state, delay) {
        if (delay === void 0) { delay = 0; }
        if (!this.id) {
            return _super.prototype.schedule.call(this, state, delay);
        }
        this.active = false;
        var action = new VirtualAction(this.scheduler, this.work);
        this.add(action);
        return action.schedule(state, delay);
    };
    VirtualAction.prototype.requestAsyncId = function (scheduler, id, delay) {
        if (delay === void 0) { delay = 0; }
        this.delay = scheduler.frame + delay;
        var actions = scheduler.actions;
        actions.push(this);
        actions.sort(VirtualAction.sortActions);
        return true;
    };
    VirtualAction.prototype.recycleAsyncId = function (scheduler, id, delay) {
        if (delay === void 0) { delay = 0; }
        return undefined;
    };
    VirtualAction.prototype._execute = function (state, delay) {
        if (this.active === true) {
            return _super.prototype._execute.call(this, state, delay);
        }
    };
    VirtualAction.sortActions = function (a, b) {
        if (a.delay === b.delay) {
            if (a.index === b.index) {
                return 0;
            }
            else if (a.index > b.index) {
                return 1;
            }
            else {
                return -1;
            }
        }
        else if (a.delay > b.delay) {
            return 1;
        }
        else {
            return -1;
        }
    };
    return VirtualAction;
}(AsyncAction_1.AsyncAction));
exports.VirtualAction = VirtualAction;
//# sourceMappingURL=VirtualTimeScheduler.js.map

/***/ }),

/***/ "./node_modules/rxjs/internal/scheduler/animationFrame.js":
/*!****************************************************************!*\
  !*** ./node_modules/rxjs/internal/scheduler/animationFrame.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var AnimationFrameAction_1 = __webpack_require__(/*! ./AnimationFrameAction */ "./node_modules/rxjs/internal/scheduler/AnimationFrameAction.js");
var AnimationFrameScheduler_1 = __webpack_require__(/*! ./AnimationFrameScheduler */ "./node_modules/rxjs/internal/scheduler/AnimationFrameScheduler.js");
exports.animationFrame = new AnimationFrameScheduler_1.AnimationFrameScheduler(AnimationFrameAction_1.AnimationFrameAction);
//# sourceMappingURL=animationFrame.js.map

/***/ }),

/***/ "./node_modules/rxjs/internal/scheduler/asap.js":
/*!******************************************************!*\
  !*** ./node_modules/rxjs/internal/scheduler/asap.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var AsapAction_1 = __webpack_require__(/*! ./AsapAction */ "./node_modules/rxjs/internal/scheduler/AsapAction.js");
var AsapScheduler_1 = __webpack_require__(/*! ./AsapScheduler */ "./node_modules/rxjs/internal/scheduler/AsapScheduler.js");
exports.asap = new AsapScheduler_1.AsapScheduler(AsapAction_1.AsapAction);
//# sourceMappingURL=asap.js.map

/***/ }),

/***/ "./node_modules/rxjs/internal/scheduler/async.js":
/*!*******************************************************!*\
  !*** ./node_modules/rxjs/internal/scheduler/async.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var AsyncAction_1 = __webpack_require__(/*! ./AsyncAction */ "./node_modules/rxjs/internal/scheduler/AsyncAction.js");
var AsyncScheduler_1 = __webpack_require__(/*! ./AsyncScheduler */ "./node_modules/rxjs/internal/scheduler/AsyncScheduler.js");
exports.async = new AsyncScheduler_1.AsyncScheduler(AsyncAction_1.AsyncAction);
//# sourceMappingURL=async.js.map

/***/ }),

/***/ "./node_modules/rxjs/internal/scheduler/queue.js":
/*!*******************************************************!*\
  !*** ./node_modules/rxjs/internal/scheduler/queue.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var QueueAction_1 = __webpack_require__(/*! ./QueueAction */ "./node_modules/rxjs/internal/scheduler/QueueAction.js");
var QueueScheduler_1 = __webpack_require__(/*! ./QueueScheduler */ "./node_modules/rxjs/internal/scheduler/QueueScheduler.js");
exports.queue = new QueueScheduler_1.QueueScheduler(QueueAction_1.QueueAction);
//# sourceMappingURL=queue.js.map

/***/ }),

/***/ "./node_modules/rxjs/internal/symbol/iterator.js":
/*!*******************************************************!*\
  !*** ./node_modules/rxjs/internal/symbol/iterator.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
function getSymbolIterator() {
    if (typeof Symbol !== 'function' || !Symbol.iterator) {
        return '@@iterator';
    }
    return Symbol.iterator;
}
exports.getSymbolIterator = getSymbolIterator;
exports.iterator = getSymbolIterator();
exports.$$iterator = exports.iterator;
//# sourceMappingURL=iterator.js.map

/***/ }),

/***/ "./node_modules/rxjs/internal/symbol/observable.js":
/*!*********************************************************!*\
  !*** ./node_modules/rxjs/internal/symbol/observable.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.observable = typeof Symbol === 'function' && Symbol.observable || '@@observable';
//# sourceMappingURL=observable.js.map

/***/ }),

/***/ "./node_modules/rxjs/internal/symbol/rxSubscriber.js":
/*!***********************************************************!*\
  !*** ./node_modules/rxjs/internal/symbol/rxSubscriber.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.rxSubscriber = typeof Symbol === 'function'
    ? Symbol('rxSubscriber')
    : '@@rxSubscriber_' + Math.random();
exports.$$rxSubscriber = exports.rxSubscriber;
//# sourceMappingURL=rxSubscriber.js.map

/***/ }),

/***/ "./node_modules/rxjs/internal/util/ArgumentOutOfRangeError.js":
/*!********************************************************************!*\
  !*** ./node_modules/rxjs/internal/util/ArgumentOutOfRangeError.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
function ArgumentOutOfRangeErrorImpl() {
    Error.call(this);
    this.message = 'argument out of range';
    this.name = 'ArgumentOutOfRangeError';
    return this;
}
ArgumentOutOfRangeErrorImpl.prototype = Object.create(Error.prototype);
exports.ArgumentOutOfRangeError = ArgumentOutOfRangeErrorImpl;
//# sourceMappingURL=ArgumentOutOfRangeError.js.map

/***/ }),

/***/ "./node_modules/rxjs/internal/util/EmptyError.js":
/*!*******************************************************!*\
  !*** ./node_modules/rxjs/internal/util/EmptyError.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
function EmptyErrorImpl() {
    Error.call(this);
    this.message = 'no elements in sequence';
    this.name = 'EmptyError';
    return this;
}
EmptyErrorImpl.prototype = Object.create(Error.prototype);
exports.EmptyError = EmptyErrorImpl;
//# sourceMappingURL=EmptyError.js.map

/***/ }),

/***/ "./node_modules/rxjs/internal/util/Immediate.js":
/*!******************************************************!*\
  !*** ./node_modules/rxjs/internal/util/Immediate.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var nextHandle = 1;
var tasksByHandle = {};
function runIfPresent(handle) {
    var cb = tasksByHandle[handle];
    if (cb) {
        cb();
    }
}
exports.Immediate = {
    setImmediate: function (cb) {
        var handle = nextHandle++;
        tasksByHandle[handle] = cb;
        Promise.resolve().then(function () { return runIfPresent(handle); });
        return handle;
    },
    clearImmediate: function (handle) {
        delete tasksByHandle[handle];
    },
};
//# sourceMappingURL=Immediate.js.map

/***/ }),

/***/ "./node_modules/rxjs/internal/util/ObjectUnsubscribedError.js":
/*!********************************************************************!*\
  !*** ./node_modules/rxjs/internal/util/ObjectUnsubscribedError.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
function ObjectUnsubscribedErrorImpl() {
    Error.call(this);
    this.message = 'object unsubscribed';
    this.name = 'ObjectUnsubscribedError';
    return this;
}
ObjectUnsubscribedErrorImpl.prototype = Object.create(Error.prototype);
exports.ObjectUnsubscribedError = ObjectUnsubscribedErrorImpl;
//# sourceMappingURL=ObjectUnsubscribedError.js.map

/***/ }),

/***/ "./node_modules/rxjs/internal/util/TimeoutError.js":
/*!*********************************************************!*\
  !*** ./node_modules/rxjs/internal/util/TimeoutError.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
function TimeoutErrorImpl() {
    Error.call(this);
    this.message = 'Timeout has occurred';
    this.name = 'TimeoutError';
    return this;
}
TimeoutErrorImpl.prototype = Object.create(Error.prototype);
exports.TimeoutError = TimeoutErrorImpl;
//# sourceMappingURL=TimeoutError.js.map

/***/ }),

/***/ "./node_modules/rxjs/internal/util/UnsubscriptionError.js":
/*!****************************************************************!*\
  !*** ./node_modules/rxjs/internal/util/UnsubscriptionError.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
function UnsubscriptionErrorImpl(errors) {
    Error.call(this);
    this.message = errors ?
        errors.length + " errors occurred during unsubscription:\n" + errors.map(function (err, i) { return i + 1 + ") " + err.toString(); }).join('\n  ') : '';
    this.name = 'UnsubscriptionError';
    this.errors = errors;
    return this;
}
UnsubscriptionErrorImpl.prototype = Object.create(Error.prototype);
exports.UnsubscriptionError = UnsubscriptionErrorImpl;
//# sourceMappingURL=UnsubscriptionError.js.map

/***/ }),

/***/ "./node_modules/rxjs/internal/util/canReportError.js":
/*!***********************************************************!*\
  !*** ./node_modules/rxjs/internal/util/canReportError.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Subscriber_1 = __webpack_require__(/*! ../Subscriber */ "./node_modules/rxjs/internal/Subscriber.js");
function canReportError(observer) {
    while (observer) {
        var _a = observer, closed_1 = _a.closed, destination = _a.destination, isStopped = _a.isStopped;
        if (closed_1 || isStopped) {
            return false;
        }
        else if (destination && destination instanceof Subscriber_1.Subscriber) {
            observer = destination;
        }
        else {
            observer = null;
        }
    }
    return true;
}
exports.canReportError = canReportError;
//# sourceMappingURL=canReportError.js.map

/***/ }),

/***/ "./node_modules/rxjs/internal/util/hostReportError.js":
/*!************************************************************!*\
  !*** ./node_modules/rxjs/internal/util/hostReportError.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
function hostReportError(err) {
    setTimeout(function () { throw err; });
}
exports.hostReportError = hostReportError;
//# sourceMappingURL=hostReportError.js.map

/***/ }),

/***/ "./node_modules/rxjs/internal/util/identity.js":
/*!*****************************************************!*\
  !*** ./node_modules/rxjs/internal/util/identity.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
function identity(x) {
    return x;
}
exports.identity = identity;
//# sourceMappingURL=identity.js.map

/***/ }),

/***/ "./node_modules/rxjs/internal/util/isArray.js":
/*!****************************************************!*\
  !*** ./node_modules/rxjs/internal/util/isArray.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.isArray = Array.isArray || (function (x) { return x && typeof x.length === 'number'; });
//# sourceMappingURL=isArray.js.map

/***/ }),

/***/ "./node_modules/rxjs/internal/util/isArrayLike.js":
/*!********************************************************!*\
  !*** ./node_modules/rxjs/internal/util/isArrayLike.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.isArrayLike = (function (x) { return x && typeof x.length === 'number' && typeof x !== 'function'; });
//# sourceMappingURL=isArrayLike.js.map

/***/ }),

/***/ "./node_modules/rxjs/internal/util/isFunction.js":
/*!*******************************************************!*\
  !*** ./node_modules/rxjs/internal/util/isFunction.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
function isFunction(x) {
    return typeof x === 'function';
}
exports.isFunction = isFunction;
//# sourceMappingURL=isFunction.js.map

/***/ }),

/***/ "./node_modules/rxjs/internal/util/isInteropObservable.js":
/*!****************************************************************!*\
  !*** ./node_modules/rxjs/internal/util/isInteropObservable.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var observable_1 = __webpack_require__(/*! ../symbol/observable */ "./node_modules/rxjs/internal/symbol/observable.js");
function isInteropObservable(input) {
    return input && typeof input[observable_1.observable] === 'function';
}
exports.isInteropObservable = isInteropObservable;
//# sourceMappingURL=isInteropObservable.js.map

/***/ }),

/***/ "./node_modules/rxjs/internal/util/isIterable.js":
/*!*******************************************************!*\
  !*** ./node_modules/rxjs/internal/util/isIterable.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var iterator_1 = __webpack_require__(/*! ../symbol/iterator */ "./node_modules/rxjs/internal/symbol/iterator.js");
function isIterable(input) {
    return input && typeof input[iterator_1.iterator] === 'function';
}
exports.isIterable = isIterable;
//# sourceMappingURL=isIterable.js.map

/***/ }),

/***/ "./node_modules/rxjs/internal/util/isNumeric.js":
/*!******************************************************!*\
  !*** ./node_modules/rxjs/internal/util/isNumeric.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var isArray_1 = __webpack_require__(/*! ./isArray */ "./node_modules/rxjs/internal/util/isArray.js");
function isNumeric(val) {
    return !isArray_1.isArray(val) && (val - parseFloat(val) + 1) >= 0;
}
exports.isNumeric = isNumeric;
//# sourceMappingURL=isNumeric.js.map

/***/ }),

/***/ "./node_modules/rxjs/internal/util/isObject.js":
/*!*****************************************************!*\
  !*** ./node_modules/rxjs/internal/util/isObject.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
function isObject(x) {
    return x !== null && typeof x === 'object';
}
exports.isObject = isObject;
//# sourceMappingURL=isObject.js.map

/***/ }),

/***/ "./node_modules/rxjs/internal/util/isObservable.js":
/*!*********************************************************!*\
  !*** ./node_modules/rxjs/internal/util/isObservable.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Observable_1 = __webpack_require__(/*! ../Observable */ "./node_modules/rxjs/internal/Observable.js");
function isObservable(obj) {
    return !!obj && (obj instanceof Observable_1.Observable || (typeof obj.lift === 'function' && typeof obj.subscribe === 'function'));
}
exports.isObservable = isObservable;
//# sourceMappingURL=isObservable.js.map

/***/ }),

/***/ "./node_modules/rxjs/internal/util/isPromise.js":
/*!******************************************************!*\
  !*** ./node_modules/rxjs/internal/util/isPromise.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
function isPromise(value) {
    return !!value && typeof value.subscribe !== 'function' && typeof value.then === 'function';
}
exports.isPromise = isPromise;
//# sourceMappingURL=isPromise.js.map

/***/ }),

/***/ "./node_modules/rxjs/internal/util/isScheduler.js":
/*!********************************************************!*\
  !*** ./node_modules/rxjs/internal/util/isScheduler.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
function isScheduler(value) {
    return value && typeof value.schedule === 'function';
}
exports.isScheduler = isScheduler;
//# sourceMappingURL=isScheduler.js.map

/***/ }),

/***/ "./node_modules/rxjs/internal/util/noop.js":
/*!*************************************************!*\
  !*** ./node_modules/rxjs/internal/util/noop.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
function noop() { }
exports.noop = noop;
//# sourceMappingURL=noop.js.map

/***/ }),

/***/ "./node_modules/rxjs/internal/util/pipe.js":
/*!*************************************************!*\
  !*** ./node_modules/rxjs/internal/util/pipe.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var noop_1 = __webpack_require__(/*! ./noop */ "./node_modules/rxjs/internal/util/noop.js");
function pipe() {
    var fns = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        fns[_i] = arguments[_i];
    }
    return pipeFromArray(fns);
}
exports.pipe = pipe;
function pipeFromArray(fns) {
    if (!fns) {
        return noop_1.noop;
    }
    if (fns.length === 1) {
        return fns[0];
    }
    return function piped(input) {
        return fns.reduce(function (prev, fn) { return fn(prev); }, input);
    };
}
exports.pipeFromArray = pipeFromArray;
//# sourceMappingURL=pipe.js.map

/***/ }),

/***/ "./node_modules/rxjs/internal/util/subscribeTo.js":
/*!********************************************************!*\
  !*** ./node_modules/rxjs/internal/util/subscribeTo.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Observable_1 = __webpack_require__(/*! ../Observable */ "./node_modules/rxjs/internal/Observable.js");
var subscribeToArray_1 = __webpack_require__(/*! ./subscribeToArray */ "./node_modules/rxjs/internal/util/subscribeToArray.js");
var subscribeToPromise_1 = __webpack_require__(/*! ./subscribeToPromise */ "./node_modules/rxjs/internal/util/subscribeToPromise.js");
var subscribeToIterable_1 = __webpack_require__(/*! ./subscribeToIterable */ "./node_modules/rxjs/internal/util/subscribeToIterable.js");
var subscribeToObservable_1 = __webpack_require__(/*! ./subscribeToObservable */ "./node_modules/rxjs/internal/util/subscribeToObservable.js");
var isArrayLike_1 = __webpack_require__(/*! ./isArrayLike */ "./node_modules/rxjs/internal/util/isArrayLike.js");
var isPromise_1 = __webpack_require__(/*! ./isPromise */ "./node_modules/rxjs/internal/util/isPromise.js");
var isObject_1 = __webpack_require__(/*! ./isObject */ "./node_modules/rxjs/internal/util/isObject.js");
var iterator_1 = __webpack_require__(/*! ../symbol/iterator */ "./node_modules/rxjs/internal/symbol/iterator.js");
var observable_1 = __webpack_require__(/*! ../symbol/observable */ "./node_modules/rxjs/internal/symbol/observable.js");
exports.subscribeTo = function (result) {
    if (result instanceof Observable_1.Observable) {
        return function (subscriber) {
            if (result._isScalar) {
                subscriber.next(result.value);
                subscriber.complete();
                return undefined;
            }
            else {
                return result.subscribe(subscriber);
            }
        };
    }
    else if (!!result && typeof result[observable_1.observable] === 'function') {
        return subscribeToObservable_1.subscribeToObservable(result);
    }
    else if (isArrayLike_1.isArrayLike(result)) {
        return subscribeToArray_1.subscribeToArray(result);
    }
    else if (isPromise_1.isPromise(result)) {
        return subscribeToPromise_1.subscribeToPromise(result);
    }
    else if (!!result && typeof result[iterator_1.iterator] === 'function') {
        return subscribeToIterable_1.subscribeToIterable(result);
    }
    else {
        var value = isObject_1.isObject(result) ? 'an invalid object' : "'" + result + "'";
        var msg = "You provided " + value + " where a stream was expected."
            + ' You can provide an Observable, Promise, Array, or Iterable.';
        throw new TypeError(msg);
    }
};
//# sourceMappingURL=subscribeTo.js.map

/***/ }),

/***/ "./node_modules/rxjs/internal/util/subscribeToArray.js":
/*!*************************************************************!*\
  !*** ./node_modules/rxjs/internal/util/subscribeToArray.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.subscribeToArray = function (array) { return function (subscriber) {
    for (var i = 0, len = array.length; i < len && !subscriber.closed; i++) {
        subscriber.next(array[i]);
    }
    if (!subscriber.closed) {
        subscriber.complete();
    }
}; };
//# sourceMappingURL=subscribeToArray.js.map

/***/ }),

/***/ "./node_modules/rxjs/internal/util/subscribeToIterable.js":
/*!****************************************************************!*\
  !*** ./node_modules/rxjs/internal/util/subscribeToIterable.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var iterator_1 = __webpack_require__(/*! ../symbol/iterator */ "./node_modules/rxjs/internal/symbol/iterator.js");
exports.subscribeToIterable = function (iterable) { return function (subscriber) {
    var iterator = iterable[iterator_1.iterator]();
    do {
        var item = iterator.next();
        if (item.done) {
            subscriber.complete();
            break;
        }
        subscriber.next(item.value);
        if (subscriber.closed) {
            break;
        }
    } while (true);
    if (typeof iterator.return === 'function') {
        subscriber.add(function () {
            if (iterator.return) {
                iterator.return();
            }
        });
    }
    return subscriber;
}; };
//# sourceMappingURL=subscribeToIterable.js.map

/***/ }),

/***/ "./node_modules/rxjs/internal/util/subscribeToObservable.js":
/*!******************************************************************!*\
  !*** ./node_modules/rxjs/internal/util/subscribeToObservable.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var observable_1 = __webpack_require__(/*! ../symbol/observable */ "./node_modules/rxjs/internal/symbol/observable.js");
exports.subscribeToObservable = function (obj) { return function (subscriber) {
    var obs = obj[observable_1.observable]();
    if (typeof obs.subscribe !== 'function') {
        throw new TypeError('Provided object does not correctly implement Symbol.observable');
    }
    else {
        return obs.subscribe(subscriber);
    }
}; };
//# sourceMappingURL=subscribeToObservable.js.map

/***/ }),

/***/ "./node_modules/rxjs/internal/util/subscribeToPromise.js":
/*!***************************************************************!*\
  !*** ./node_modules/rxjs/internal/util/subscribeToPromise.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var hostReportError_1 = __webpack_require__(/*! ./hostReportError */ "./node_modules/rxjs/internal/util/hostReportError.js");
exports.subscribeToPromise = function (promise) { return function (subscriber) {
    promise.then(function (value) {
        if (!subscriber.closed) {
            subscriber.next(value);
            subscriber.complete();
        }
    }, function (err) { return subscriber.error(err); })
        .then(null, hostReportError_1.hostReportError);
    return subscriber;
}; };
//# sourceMappingURL=subscribeToPromise.js.map

/***/ }),

/***/ "./node_modules/rxjs/internal/util/subscribeToResult.js":
/*!**************************************************************!*\
  !*** ./node_modules/rxjs/internal/util/subscribeToResult.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var InnerSubscriber_1 = __webpack_require__(/*! ../InnerSubscriber */ "./node_modules/rxjs/internal/InnerSubscriber.js");
var subscribeTo_1 = __webpack_require__(/*! ./subscribeTo */ "./node_modules/rxjs/internal/util/subscribeTo.js");
function subscribeToResult(outerSubscriber, result, outerValue, outerIndex, destination) {
    if (destination === void 0) { destination = new InnerSubscriber_1.InnerSubscriber(outerSubscriber, outerValue, outerIndex); }
    if (destination.closed) {
        return;
    }
    return subscribeTo_1.subscribeTo(result)(destination);
}
exports.subscribeToResult = subscribeToResult;
//# sourceMappingURL=subscribeToResult.js.map

/***/ }),

/***/ "./node_modules/rxjs/internal/util/toSubscriber.js":
/*!*********************************************************!*\
  !*** ./node_modules/rxjs/internal/util/toSubscriber.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Subscriber_1 = __webpack_require__(/*! ../Subscriber */ "./node_modules/rxjs/internal/Subscriber.js");
var rxSubscriber_1 = __webpack_require__(/*! ../symbol/rxSubscriber */ "./node_modules/rxjs/internal/symbol/rxSubscriber.js");
var Observer_1 = __webpack_require__(/*! ../Observer */ "./node_modules/rxjs/internal/Observer.js");
function toSubscriber(nextOrObserver, error, complete) {
    if (nextOrObserver) {
        if (nextOrObserver instanceof Subscriber_1.Subscriber) {
            return nextOrObserver;
        }
        if (nextOrObserver[rxSubscriber_1.rxSubscriber]) {
            return nextOrObserver[rxSubscriber_1.rxSubscriber]();
        }
    }
    if (!nextOrObserver && !error && !complete) {
        return new Subscriber_1.Subscriber(Observer_1.empty);
    }
    return new Subscriber_1.Subscriber(nextOrObserver, error, complete);
}
exports.toSubscriber = toSubscriber;
//# sourceMappingURL=toSubscriber.js.map

/***/ }),

/***/ "./src/app/landingpage/landingpage-routing.module.ts":
/*!***********************************************************!*\
  !*** ./src/app/landingpage/landingpage-routing.module.ts ***!
  \***********************************************************/
/*! exports provided: LandingpageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LandingpageRoutingModule", function() { return LandingpageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _landingpage_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./landingpage.component */ "./src/app/landingpage/landingpage.component.ts");
/* harmony import */ var _project_projects_projects_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./project/projects/projects.component */ "./src/app/landingpage/project/projects/projects.component.ts");
/* harmony import */ var _layout_layout_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./layout/layout.component */ "./src/app/landingpage/layout/layout.component.ts");
/* harmony import */ var _project_resord_and_residences_resord_and_residences_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./project/resord-and-residences/resord-and-residences.component */ "./src/app/landingpage/project/resord-and-residences/resord-and-residences.component.ts");








var routes = [
    {
        path: '', component: _layout_layout_component__WEBPACK_IMPORTED_MODULE_6__["LayoutComponent"],
        children: [
            { path: '', component: _landingpage_component__WEBPACK_IMPORTED_MODULE_4__["LandingpageComponent"] },
            { path: 'projects', component: _project_projects_projects_component__WEBPACK_IMPORTED_MODULE_5__["ProjectsComponent"] },
            { path: 'resorts-and-residences', component: _project_resord_and_residences_resord_and_residences_component__WEBPACK_IMPORTED_MODULE_7__["ResordAndResidencesComponent"] }
        ]
    }
];
var LandingpageRoutingModule = /** @class */ (function () {
    function LandingpageRoutingModule() {
    }
    LandingpageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes)
            ],
            exports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"]
            ]
        })
    ], LandingpageRoutingModule);
    return LandingpageRoutingModule;
}());



/***/ }),

/***/ "./src/app/landingpage/landingpage.component.css":
/*!*******************************************************!*\
  !*** ./src/app/landingpage/landingpage.component.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n.background-gold {\r\n  background: -webkit-linear-gradient(0deg,#fad35f,#fde8aa,#fad35f);\r\n}\r\n\r\n#mainNav {\r\n  min-height: 56px;\r\n  background-color:  #0d0d0d !important;\r\n}\r\n\r\n#mainNav .navbar-toggler {\r\n  font-size: 80%;\r\n  padding: 0.75rem;\r\n  color: #64a19d;\r\n  border: 1px solid #64a19d;\r\n}\r\n\r\n#mainNav .navbar-toggler:focus {\r\n  outline: none;\r\n}\r\n\r\n#mainNav .navbar-brand {\r\n  color: #0d0d0d;\r\n  font-weight: 700;\r\n  padding: .9rem 0;\r\n}\r\n\r\n#mainNav .navbar-nav .nav-item:hover {\r\n  color: fade(white, 80%);\r\n  outline: none;\r\n  /* background-color: transparent; */\r\n}\r\n\r\n#mainNav .navbar-nav .nav-item:active, #mainNav .navbar-nav .nav-item:focus {\r\n  outline: none;\r\n  /* background-color: transparent; */\r\n}\r\n\r\n@media (min-width: 992px) {\r\n  #mainNav {\r\n    padding-top: 0;\r\n    padding-bottom: 0;\r\n    border-bottom: none;\r\n    background-color: transparent;\r\n    transition: background-color 0.3s ease-in-out;\r\n  }\r\n  \r\n  #mainNav .nav-link {\r\n    transition: none;\r\n    padding: 2rem 1.5rem;\r\n    color: #fff;;\r\n  }\r\n  \r\n  #mainNav .nav-link:hover {\r\n    color: #fff;\r\n  }\r\n  #mainNav .nav-link:active {\r\n    color:  #fff;\r\n  }\r\n  #mainNav .navbar-shrink {\r\n    background-color: #fff;\r\n  }\r\n \r\n  #mainNav.navbar-shrink .nav-link {\r\n    color: #0d0d0d;\r\n    padding: 1.5rem 1.5rem 1.25rem;\r\n    border-bottom: 0.25rem solid transparent;\r\n  }\r\n  #mainNav.navbar-shrink .nav-link:hover {\r\n    color: #64a19d;\r\n  }\r\n  #mainNav.navbar-shrink .nav-link:active {\r\n    color: #467370;\r\n  }\r\n  #mainNav.navbar-shrink .nav-link.active {\r\n    color: #64a19d;\r\n    outline: none;\r\n    border-bottom: 0.25rem solid #64a19d;\r\n  }\r\n}\r\n\r\n#mainNav .nav-link {\r\n    transition: none;\r\n    color: #fff;\r\n    cursor: pointer;\r\n  }\r\n\r\n#mainNav .nav-link:hover {\r\n    color: #fff;\r\n  }\r\n\r\n#mainNav .nav-link:active {\r\n    color: #fff;\r\n  }\r\n\r\n.btn {\r\n    width: 150px;\r\n    height: 60px;\r\n    padding-top: 15px;\r\n  }\r\n\r\n.masthead {\r\n    position: relative;\r\n    width: 100%;\r\n    height: auto;\r\n    min-height: 52rem;\r\n    padding: 8rem 0;\r\n    background: url('new-bg.png');\r\n    background-position: center;\r\n    background-repeat: no-repeat;\r\n    background-attachment: scroll;\r\n    background-size: cover;\r\n    \r\n  }\r\n\r\n.masthead h1 {\r\n    padding-top: 5px;\r\n    font-family: 'Times New Roman';\r\n    font-size: 2rem !important;\r\n    line-height: 2.0rem;\r\n  }\r\n\r\n.masthead h2 {\r\n    max-width: 50rem !important;\r\n    font-size: 5rem;\r\n    font-family: \"Raph Lanok Future\";\r\n    color: #0d0d0d;\r\n  }\r\n\r\n.diamonbuilt-logo {\r\n    width: 400px;\r\n\r\n  }\r\n\r\n.img-webuildtolast {\r\n    width: 650px;\r\n  }\r\n\r\n.masthead h3 {\r\n    max-width: 20rem;\r\n    font-size: 1rem;\r\n  }\r\n\r\n@media (min-width: 768px) {\r\n    .masthead h1 {\r\n      font-size: 4rem;\r\n      line-height: 4rem;\r\n    }\r\n  }\r\n\r\n.about-section {\r\n    padding: 5rem 10rem 12rem 0rem;\r\n  }\r\n\r\n.about-section h2 {\r\n    text-align: left;\r\n    font-size: 30px;\r\n  }\r\n\r\n.about-section p {\r\n    margin-bottom: 5rem;\r\n    font-size: 1rem;\r\n    text-align: justify;\r\n  }\r\n\r\n.projects-section-imperialhights  {\r\n    position: relative;\r\n    width: 100%;\r\n    height: auto;\r\n    min-height: 60rem;\r\n    padding: 8rem 0;\r\n    background: url('imperialhights.png');\r\n    background-position: center;\r\n    background-repeat: no-repeat;\r\n    background-attachment: scroll;\r\n    background-size: cover;\r\n  }\r\n\r\n.projects-section-resortandresidence {\r\n    position: relative;\r\n    width: 100%;\r\n    height: auto;\r\n    min-height: 60rem;\r\n    padding: 8rem 0;\r\n    background: url('resortandresidences.png');\r\n    background-position: center;\r\n    background-repeat: no-repeat;\r\n    background-attachment: scroll;\r\n    background-size: cover;\r\n  }\r\n\r\n.btnProject {\r\n      margin-top: 20rem;\r\n      background: -webkit-linear-gradient(0deg,#fad35f,#fde8aa,#fad35f);\r\n      padding: .375rem .75rem;\r\n      box-shadow: 2px 2px;\r\n      display: inline-block;\r\n      font-size: 1rem;\r\n      border-radius: .25rem;\r\n      border: 1px solid transparent;\r\n      width: 180px;\r\n      height: 65px;\r\n      padding-top: 10px;\r\n      transition: all ease 0.3s;\r\n}\r\n\r\n.btnProject:active {\r\n  background-color: transparent;\r\n  box-shadow: 2px 5px #0d0d0d;\r\n  border: none;\r\n}\r\n\r\n.projects-section-imperialhights .featured-text {\r\n    padding: 2rem;\r\n  }\r\n\r\n.projects-section-imperialhights .dimension {\r\n    padding: 10rem;\r\n  }\r\n\r\n@media (min-width: 992px) {\r\n    .projects-section-imperialhights .featured-text {\r\n      padding: 0 0 0 2rem;\r\n      border-left: 0.5rem solid #64a19d;\r\n    }\r\n  }\r\n\r\n.projects-section-imperialhights  .project-text {\r\n    padding: 3rem;\r\n    font-size: 90%;\r\n  }\r\n\r\n@media (min-width: 992px) {\r\n    .projects-section-imperialhights  .project-text {\r\n      padding: 5rem;\r\n    }\r\n    .projects-section-imperialhights  .project-text hr {\r\n      border-color: #64a19d;\r\n      border-width: .25rem;\r\n      width: 30%;\r\n    }\r\n  }\r\n\r\n.contact-section {\r\n    padding: 12rem 10rem 5rem 0rem;\r\n    min-height: 50rem;\r\n    /* background: -webkit-gradient(linear, left top, left bottom, from(#161616), color-stop(75%, rgba(22, 22, 22, 0.9)), to(rgba(22, 22, 22, 0.8)));\r\n    background: linear-gradient(to bottom, #161616 0%, rgba(22, 22, 22, 0.9) 75%, rgba(22, 22, 22, 0.8) 100%); */\r\n  }\r\n\r\n.contactList {\r\n    list-style: none;\r\n    margin-left: -40px;\r\n    font-size: .9rem;\r\n  }\r\n\r\n.companyname {\r\n    font-size: .9rem;\r\n    margin-bottom: -10px;\r\n  }\r\n\r\n.phone {\r\n    width: 12px;\r\n    padding-bottom: 2px;\r\n  }\r\n\r\n.contactmap {\r\n    width: 100%;\r\n    height: 95%;\r\n  }\r\n\r\n.contact-header { \r\n  font-family: -apple-system,BlinkMacSystemFont,\"Segoe UI\",\r\n  Roboto,\"Helvetica Neue\",Arial,sans-serif,\"Apple Color Emoji\",\"Segoe UI Emoji\",\"Segoe UI Symbol\";\r\n  font-size: 1.2rem;\r\n  margin-bottom: -5px;\r\n  padding-bottom: 0;\r\n}\r\n \r\n\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbGFuZGluZ3BhZ2UvbGFuZGluZ3BhZ2UuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQ0E7RUFDRSxpRUFBaUU7QUFDbkU7O0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEIscUNBQXFDO0FBQ3ZDOztBQUVBO0VBQ0UsY0FBYztFQUNkLGdCQUFnQjtFQUNoQixjQUFjO0VBQ2QseUJBQXlCO0FBQzNCOztBQUVBO0VBQ0UsYUFBYTtBQUNmOztBQUVBO0VBQ0UsY0FBYztFQUNkLGdCQUFnQjtFQUNoQixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSx1QkFBdUI7RUFDdkIsYUFBYTtFQUNiLG1DQUFtQztBQUNyQzs7QUFFQTtFQUNFLGFBQWE7RUFDYixtQ0FBbUM7QUFDckM7O0FBRUE7RUFDRTtJQUNFLGNBQWM7SUFDZCxpQkFBaUI7SUFDakIsbUJBQW1CO0lBQ25CLDZCQUE2QjtJQUU3Qiw2Q0FBNkM7RUFDL0M7O0VBRUE7SUFFRSxnQkFBZ0I7SUFDaEIsb0JBQW9CO0lBQ3BCLFdBQVc7RUFDYjs7RUFFQTtJQUNFLFdBQVc7RUFDYjtFQUNBO0lBQ0UsWUFBWTtFQUNkO0VBQ0E7SUFDRSxzQkFBc0I7RUFDeEI7O0VBRUE7SUFDRSxjQUFjO0lBQ2QsOEJBQThCO0lBQzlCLHdDQUF3QztFQUMxQztFQUNBO0lBQ0UsY0FBYztFQUNoQjtFQUNBO0lBQ0UsY0FBYztFQUNoQjtFQUNBO0lBQ0UsY0FBYztJQUNkLGFBQWE7SUFDYixvQ0FBb0M7RUFDdEM7QUFDRjs7QUFFRTtJQUVFLGdCQUFnQjtJQUNoQixXQUFXO0lBQ1gsZUFBZTtFQUNqQjs7QUFDQTtJQUNFLFdBQVc7RUFDYjs7QUFDQTtJQUNFLFdBQVc7RUFDYjs7QUFFQTtJQUNFLFlBQVk7SUFDWixZQUFZO0lBQ1osaUJBQWlCO0VBQ25COztBQUNBO0lBQ0Usa0JBQWtCO0lBQ2xCLFdBQVc7SUFDWCxZQUFZO0lBQ1osaUJBQWlCO0lBQ2pCLGVBQWU7SUFDZiw2QkFBMEM7SUFDMUMsMkJBQTJCO0lBQzNCLDRCQUE0QjtJQUM1Qiw2QkFBNkI7SUFDN0Isc0JBQXNCOztFQUV4Qjs7QUFFQTtJQUNFLGdCQUFnQjtJQUNoQiw4QkFBOEI7SUFDOUIsMEJBQTBCO0lBQzFCLG1CQUFtQjtFQUNyQjs7QUFFQTtJQUNFLDJCQUEyQjtJQUMzQixlQUFlO0lBQ2YsZ0NBQWdDO0lBQ2hDLGNBQWM7RUFDaEI7O0FBRUE7SUFDRSxZQUFZOztFQUVkOztBQUNBO0lBQ0UsWUFBWTtFQUNkOztBQUVBO0lBQ0UsZ0JBQWdCO0lBQ2hCLGVBQWU7RUFDakI7O0FBRUE7SUFDRTtNQUNFLGVBQWU7TUFDZixpQkFBaUI7SUFDbkI7RUFDRjs7QUFFQTtJQUNFLDhCQUE4QjtFQUNoQzs7QUFDQTtJQUNFLGdCQUFnQjtJQUNoQixlQUFlO0VBQ2pCOztBQUNBO0lBQ0UsbUJBQW1CO0lBQ25CLGVBQWU7SUFDZixtQkFBbUI7RUFDckI7O0FBRUE7SUFDRSxrQkFBa0I7SUFDbEIsV0FBVztJQUNYLFlBQVk7SUFDWixpQkFBaUI7SUFDakIsZUFBZTtJQUNmLHFDQUFpRTtJQUNqRSwyQkFBMkI7SUFDM0IsNEJBQTRCO0lBQzVCLDZCQUE2QjtJQUM3QixzQkFBc0I7RUFDeEI7O0FBRUE7SUFDRSxrQkFBa0I7SUFDbEIsV0FBVztJQUNYLFlBQVk7SUFDWixpQkFBaUI7SUFDakIsZUFBZTtJQUNmLDBDQUFpRjtJQUNqRiwyQkFBMkI7SUFDM0IsNEJBQTRCO0lBQzVCLDZCQUE2QjtJQUM3QixzQkFBc0I7RUFDeEI7O0FBRUE7TUFDSSxpQkFBaUI7TUFDakIsaUVBQWlFO01BQ2pFLHVCQUF1QjtNQUN2QixtQkFBbUI7TUFDbkIscUJBQXFCO01BQ3JCLGVBQWU7TUFDZixxQkFBcUI7TUFDckIsNkJBQTZCO01BQzdCLFlBQVk7TUFDWixZQUFZO01BQ1osaUJBQWlCO01BQ2pCLHlCQUF5QjtBQUMvQjs7QUFFQTtFQUNFLDZCQUE2QjtFQUM3QiwyQkFBMkI7RUFDM0IsWUFBWTtBQUNkOztBQUVFO0lBQ0UsYUFBYTtFQUNmOztBQUVBO0lBQ0UsY0FBYztFQUNoQjs7QUFHQTtJQUNFO01BQ0UsbUJBQW1CO01BQ25CLGlDQUFpQztJQUNuQztFQUNGOztBQUVBO0lBQ0UsYUFBYTtJQUNiLGNBQWM7RUFDaEI7O0FBRUE7SUFDRTtNQUNFLGFBQWE7SUFDZjtJQUNBO01BQ0UscUJBQXFCO01BQ3JCLG9CQUFvQjtNQUNwQixVQUFVO0lBQ1o7RUFDRjs7QUFFQTtJQUNFLDhCQUE4QjtJQUM5QixpQkFBaUI7SUFDakI7Z0hBQzRHO0VBQzlHOztBQUVBO0lBQ0UsZ0JBQWdCO0lBQ2hCLGtCQUFrQjtJQUNsQixnQkFBZ0I7RUFDbEI7O0FBRUE7SUFDRSxnQkFBZ0I7SUFDaEIsb0JBQW9CO0VBQ3RCOztBQUVBO0lBQ0UsV0FBVztJQUNYLG1CQUFtQjtFQUNyQjs7QUFFQTtJQUNFLFdBQVc7SUFDWCxXQUFXO0VBQ2I7O0FBQ0Y7RUFDRTtpR0FDK0Y7RUFDL0YsaUJBQWlCO0VBQ2pCLG1CQUFtQjtFQUNuQixpQkFBaUI7QUFDbkIiLCJmaWxlIjoic3JjL2FwcC9sYW5kaW5ncGFnZS9sYW5kaW5ncGFnZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbi5iYWNrZ3JvdW5kLWdvbGQge1xyXG4gIGJhY2tncm91bmQ6IC13ZWJraXQtbGluZWFyLWdyYWRpZW50KDBkZWcsI2ZhZDM1ZiwjZmRlOGFhLCNmYWQzNWYpO1xyXG59XHJcblxyXG4jbWFpbk5hdiB7XHJcbiAgbWluLWhlaWdodDogNTZweDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAgIzBkMGQwZCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4jbWFpbk5hdiAubmF2YmFyLXRvZ2dsZXIge1xyXG4gIGZvbnQtc2l6ZTogODAlO1xyXG4gIHBhZGRpbmc6IDAuNzVyZW07XHJcbiAgY29sb3I6ICM2NGExOWQ7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgIzY0YTE5ZDtcclxufVxyXG5cclxuI21haW5OYXYgLm5hdmJhci10b2dnbGVyOmZvY3VzIHtcclxuICBvdXRsaW5lOiBub25lO1xyXG59XHJcblxyXG4jbWFpbk5hdiAubmF2YmFyLWJyYW5kIHtcclxuICBjb2xvcjogIzBkMGQwZDtcclxuICBmb250LXdlaWdodDogNzAwO1xyXG4gIHBhZGRpbmc6IC45cmVtIDA7XHJcbn1cclxuXHJcbiNtYWluTmF2IC5uYXZiYXItbmF2IC5uYXYtaXRlbTpob3ZlciB7XHJcbiAgY29sb3I6IGZhZGUod2hpdGUsIDgwJSk7XHJcbiAgb3V0bGluZTogbm9uZTtcclxuICAvKiBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDsgKi9cclxufVxyXG5cclxuI21haW5OYXYgLm5hdmJhci1uYXYgLm5hdi1pdGVtOmFjdGl2ZSwgI21haW5OYXYgLm5hdmJhci1uYXYgLm5hdi1pdGVtOmZvY3VzIHtcclxuICBvdXRsaW5lOiBub25lO1xyXG4gIC8qIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50OyAqL1xyXG59XHJcblxyXG5AbWVkaWEgKG1pbi13aWR0aDogOTkycHgpIHtcclxuICAjbWFpbk5hdiB7XHJcbiAgICBwYWRkaW5nLXRvcDogMDtcclxuICAgIHBhZGRpbmctYm90dG9tOiAwO1xyXG4gICAgYm9yZGVyLWJvdHRvbTogbm9uZTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xyXG4gICAgLXdlYmtpdC10cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIDAuM3MgZWFzZS1pbi1vdXQ7XHJcbiAgICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIDAuM3MgZWFzZS1pbi1vdXQ7XHJcbiAgfVxyXG4gIFxyXG4gICNtYWluTmF2IC5uYXYtbGluayB7XHJcbiAgICAtd2Via2l0LXRyYW5zaXRpb246IG5vbmU7XHJcbiAgICB0cmFuc2l0aW9uOiBub25lO1xyXG4gICAgcGFkZGluZzogMnJlbSAxLjVyZW07XHJcbiAgICBjb2xvcjogI2ZmZjs7XHJcbiAgfVxyXG4gIFxyXG4gICNtYWluTmF2IC5uYXYtbGluazpob3ZlciB7XHJcbiAgICBjb2xvcjogI2ZmZjtcclxuICB9XHJcbiAgI21haW5OYXYgLm5hdi1saW5rOmFjdGl2ZSB7XHJcbiAgICBjb2xvcjogICNmZmY7XHJcbiAgfVxyXG4gICNtYWluTmF2IC5uYXZiYXItc2hyaW5rIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XHJcbiAgfVxyXG4gXHJcbiAgI21haW5OYXYubmF2YmFyLXNocmluayAubmF2LWxpbmsge1xyXG4gICAgY29sb3I6ICMwZDBkMGQ7XHJcbiAgICBwYWRkaW5nOiAxLjVyZW0gMS41cmVtIDEuMjVyZW07XHJcbiAgICBib3JkZXItYm90dG9tOiAwLjI1cmVtIHNvbGlkIHRyYW5zcGFyZW50O1xyXG4gIH1cclxuICAjbWFpbk5hdi5uYXZiYXItc2hyaW5rIC5uYXYtbGluazpob3ZlciB7XHJcbiAgICBjb2xvcjogIzY0YTE5ZDtcclxuICB9XHJcbiAgI21haW5OYXYubmF2YmFyLXNocmluayAubmF2LWxpbms6YWN0aXZlIHtcclxuICAgIGNvbG9yOiAjNDY3MzcwO1xyXG4gIH1cclxuICAjbWFpbk5hdi5uYXZiYXItc2hyaW5rIC5uYXYtbGluay5hY3RpdmUge1xyXG4gICAgY29sb3I6ICM2NGExOWQ7XHJcbiAgICBvdXRsaW5lOiBub25lO1xyXG4gICAgYm9yZGVyLWJvdHRvbTogMC4yNXJlbSBzb2xpZCAjNjRhMTlkO1xyXG4gIH1cclxufVxyXG5cclxuICAjbWFpbk5hdiAubmF2LWxpbmsge1xyXG4gICAgLXdlYmtpdC10cmFuc2l0aW9uOiBub25lO1xyXG4gICAgdHJhbnNpdGlvbjogbm9uZTtcclxuICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIH1cclxuICAjbWFpbk5hdiAubmF2LWxpbms6aG92ZXIge1xyXG4gICAgY29sb3I6ICNmZmY7XHJcbiAgfVxyXG4gICNtYWluTmF2IC5uYXYtbGluazphY3RpdmUge1xyXG4gICAgY29sb3I6ICNmZmY7XHJcbiAgfVxyXG5cclxuICAuYnRuIHtcclxuICAgIHdpZHRoOiAxNTBweDtcclxuICAgIGhlaWdodDogNjBweDtcclxuICAgIHBhZGRpbmctdG9wOiAxNXB4O1xyXG4gIH1cclxuICAubWFzdGhlYWQge1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IGF1dG87XHJcbiAgICBtaW4taGVpZ2h0OiA1MnJlbTtcclxuICAgIHBhZGRpbmc6IDhyZW0gMDtcclxuICAgIGJhY2tncm91bmQ6IHVybChcIi4uLy4uL2Fzc2V0cy9uZXctYmcucG5nXCIpO1xyXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xyXG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxuICAgIGJhY2tncm91bmQtYXR0YWNobWVudDogc2Nyb2xsO1xyXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuICAgIFxyXG4gIH1cclxuICBcclxuICAubWFzdGhlYWQgaDEge1xyXG4gICAgcGFkZGluZy10b3A6IDVweDtcclxuICAgIGZvbnQtZmFtaWx5OiAnVGltZXMgTmV3IFJvbWFuJztcclxuICAgIGZvbnQtc2l6ZTogMnJlbSAhaW1wb3J0YW50O1xyXG4gICAgbGluZS1oZWlnaHQ6IDIuMHJlbTtcclxuICB9XHJcblxyXG4gIC5tYXN0aGVhZCBoMiB7XHJcbiAgICBtYXgtd2lkdGg6IDUwcmVtICFpbXBvcnRhbnQ7XHJcbiAgICBmb250LXNpemU6IDVyZW07XHJcbiAgICBmb250LWZhbWlseTogXCJSYXBoIExhbm9rIEZ1dHVyZVwiO1xyXG4gICAgY29sb3I6ICMwZDBkMGQ7XHJcbiAgfVxyXG5cclxuICAuZGlhbW9uYnVpbHQtbG9nbyB7XHJcbiAgICB3aWR0aDogNDAwcHg7XHJcblxyXG4gIH1cclxuICAuaW1nLXdlYnVpbGR0b2xhc3Qge1xyXG4gICAgd2lkdGg6IDY1MHB4O1xyXG4gIH1cclxuICBcclxuICAubWFzdGhlYWQgaDMge1xyXG4gICAgbWF4LXdpZHRoOiAyMHJlbTtcclxuICAgIGZvbnQtc2l6ZTogMXJlbTtcclxuICB9XHJcbiAgXHJcbiAgQG1lZGlhIChtaW4td2lkdGg6IDc2OHB4KSB7XHJcbiAgICAubWFzdGhlYWQgaDEge1xyXG4gICAgICBmb250LXNpemU6IDRyZW07XHJcbiAgICAgIGxpbmUtaGVpZ2h0OiA0cmVtO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLmFib3V0LXNlY3Rpb24ge1xyXG4gICAgcGFkZGluZzogNXJlbSAxMHJlbSAxMnJlbSAwcmVtO1xyXG4gIH1cclxuICAuYWJvdXQtc2VjdGlvbiBoMiB7XHJcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gICAgZm9udC1zaXplOiAzMHB4O1xyXG4gIH1cclxuICAuYWJvdXQtc2VjdGlvbiBwIHtcclxuICAgIG1hcmdpbi1ib3R0b206IDVyZW07XHJcbiAgICBmb250LXNpemU6IDFyZW07XHJcbiAgICB0ZXh0LWFsaWduOiBqdXN0aWZ5O1xyXG4gIH1cclxuXHJcbiAgLnByb2plY3RzLXNlY3Rpb24taW1wZXJpYWxoaWdodHMgIHtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiBhdXRvO1xyXG4gICAgbWluLWhlaWdodDogNjByZW07XHJcbiAgICBwYWRkaW5nOiA4cmVtIDA7XHJcbiAgICBiYWNrZ3JvdW5kOiB1cmwoXCIuLi8uLi9hc3NldHMvaW1hZ2VzL3Byb2plY3QvaW1wZXJpYWxoaWdodHMucG5nXCIpO1xyXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xyXG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxuICAgIGJhY2tncm91bmQtYXR0YWNobWVudDogc2Nyb2xsO1xyXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuICB9XHJcblxyXG4gIC5wcm9qZWN0cy1zZWN0aW9uLXJlc29ydGFuZHJlc2lkZW5jZSB7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogYXV0bztcclxuICAgIG1pbi1oZWlnaHQ6IDYwcmVtO1xyXG4gICAgcGFkZGluZzogOHJlbSAwO1xyXG4gICAgYmFja2dyb3VuZDogdXJsKFwiLi4vLi4vYXNzZXRzL2ltYWdlcy9yZXNvcnRhbmRyZXNpZGVuY2UvcmVzb3J0YW5kcmVzaWRlbmNlcy5wbmdcIik7XHJcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XHJcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG4gICAgYmFja2dyb3VuZC1hdHRhY2htZW50OiBzY3JvbGw7XHJcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG4gIH1cclxuXHJcbiAgLmJ0blByb2plY3Qge1xyXG4gICAgICBtYXJnaW4tdG9wOiAyMHJlbTtcclxuICAgICAgYmFja2dyb3VuZDogLXdlYmtpdC1saW5lYXItZ3JhZGllbnQoMGRlZywjZmFkMzVmLCNmZGU4YWEsI2ZhZDM1Zik7XHJcbiAgICAgIHBhZGRpbmc6IC4zNzVyZW0gLjc1cmVtO1xyXG4gICAgICBib3gtc2hhZG93OiAycHggMnB4O1xyXG4gICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICAgIGZvbnQtc2l6ZTogMXJlbTtcclxuICAgICAgYm9yZGVyLXJhZGl1czogLjI1cmVtO1xyXG4gICAgICBib3JkZXI6IDFweCBzb2xpZCB0cmFuc3BhcmVudDtcclxuICAgICAgd2lkdGg6IDE4MHB4O1xyXG4gICAgICBoZWlnaHQ6IDY1cHg7XHJcbiAgICAgIHBhZGRpbmctdG9wOiAxMHB4O1xyXG4gICAgICB0cmFuc2l0aW9uOiBhbGwgZWFzZSAwLjNzO1xyXG59XHJcblxyXG4uYnRuUHJvamVjdDphY3RpdmUge1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xyXG4gIGJveC1zaGFkb3c6IDJweCA1cHggIzBkMGQwZDtcclxuICBib3JkZXI6IG5vbmU7XHJcbn1cclxuXHJcbiAgLnByb2plY3RzLXNlY3Rpb24taW1wZXJpYWxoaWdodHMgLmZlYXR1cmVkLXRleHQge1xyXG4gICAgcGFkZGluZzogMnJlbTtcclxuICB9XHJcblxyXG4gIC5wcm9qZWN0cy1zZWN0aW9uLWltcGVyaWFsaGlnaHRzIC5kaW1lbnNpb24ge1xyXG4gICAgcGFkZGluZzogMTByZW07XHJcbiAgfVxyXG4gIFxyXG4gXHJcbiAgQG1lZGlhIChtaW4td2lkdGg6IDk5MnB4KSB7XHJcbiAgICAucHJvamVjdHMtc2VjdGlvbi1pbXBlcmlhbGhpZ2h0cyAuZmVhdHVyZWQtdGV4dCB7XHJcbiAgICAgIHBhZGRpbmc6IDAgMCAwIDJyZW07XHJcbiAgICAgIGJvcmRlci1sZWZ0OiAwLjVyZW0gc29saWQgIzY0YTE5ZDtcclxuICAgIH1cclxuICB9XHJcbiAgXHJcbiAgLnByb2plY3RzLXNlY3Rpb24taW1wZXJpYWxoaWdodHMgIC5wcm9qZWN0LXRleHQge1xyXG4gICAgcGFkZGluZzogM3JlbTtcclxuICAgIGZvbnQtc2l6ZTogOTAlO1xyXG4gIH1cclxuICBcclxuICBAbWVkaWEgKG1pbi13aWR0aDogOTkycHgpIHtcclxuICAgIC5wcm9qZWN0cy1zZWN0aW9uLWltcGVyaWFsaGlnaHRzICAucHJvamVjdC10ZXh0IHtcclxuICAgICAgcGFkZGluZzogNXJlbTtcclxuICAgIH1cclxuICAgIC5wcm9qZWN0cy1zZWN0aW9uLWltcGVyaWFsaGlnaHRzICAucHJvamVjdC10ZXh0IGhyIHtcclxuICAgICAgYm9yZGVyLWNvbG9yOiAjNjRhMTlkO1xyXG4gICAgICBib3JkZXItd2lkdGg6IC4yNXJlbTtcclxuICAgICAgd2lkdGg6IDMwJTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC5jb250YWN0LXNlY3Rpb24ge1xyXG4gICAgcGFkZGluZzogMTJyZW0gMTByZW0gNXJlbSAwcmVtO1xyXG4gICAgbWluLWhlaWdodDogNTByZW07XHJcbiAgICAvKiBiYWNrZ3JvdW5kOiAtd2Via2l0LWdyYWRpZW50KGxpbmVhciwgbGVmdCB0b3AsIGxlZnQgYm90dG9tLCBmcm9tKCMxNjE2MTYpLCBjb2xvci1zdG9wKDc1JSwgcmdiYSgyMiwgMjIsIDIyLCAwLjkpKSwgdG8ocmdiYSgyMiwgMjIsIDIyLCAwLjgpKSk7XHJcbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gYm90dG9tLCAjMTYxNjE2IDAlLCByZ2JhKDIyLCAyMiwgMjIsIDAuOSkgNzUlLCByZ2JhKDIyLCAyMiwgMjIsIDAuOCkgMTAwJSk7ICovXHJcbiAgfVxyXG5cclxuICAuY29udGFjdExpc3Qge1xyXG4gICAgbGlzdC1zdHlsZTogbm9uZTtcclxuICAgIG1hcmdpbi1sZWZ0OiAtNDBweDtcclxuICAgIGZvbnQtc2l6ZTogLjlyZW07XHJcbiAgfVxyXG5cclxuICAuY29tcGFueW5hbWUge1xyXG4gICAgZm9udC1zaXplOiAuOXJlbTtcclxuICAgIG1hcmdpbi1ib3R0b206IC0xMHB4O1xyXG4gIH1cclxuXHJcbiAgLnBob25lIHtcclxuICAgIHdpZHRoOiAxMnB4O1xyXG4gICAgcGFkZGluZy1ib3R0b206IDJweDtcclxuICB9XHJcblxyXG4gIC5jb250YWN0bWFwIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiA5NSU7XHJcbiAgfVxyXG4uY29udGFjdC1oZWFkZXIgeyBcclxuICBmb250LWZhbWlseTogLWFwcGxlLXN5c3RlbSxCbGlua01hY1N5c3RlbUZvbnQsXCJTZWdvZSBVSVwiLFxyXG4gIFJvYm90byxcIkhlbHZldGljYSBOZXVlXCIsQXJpYWwsc2Fucy1zZXJpZixcIkFwcGxlIENvbG9yIEVtb2ppXCIsXCJTZWdvZSBVSSBFbW9qaVwiLFwiU2Vnb2UgVUkgU3ltYm9sXCI7XHJcbiAgZm9udC1zaXplOiAxLjJyZW07XHJcbiAgbWFyZ2luLWJvdHRvbTogLTVweDtcclxuICBwYWRkaW5nLWJvdHRvbTogMDtcclxufVxyXG4gXHJcblxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/landingpage/landingpage.component.ts":
/*!******************************************************!*\
  !*** ./src/app/landingpage/landingpage.component.ts ***!
  \******************************************************/
/*! exports provided: LandingpageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LandingpageComponent", function() { return LandingpageComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var LandingpageComponent = /** @class */ (function () {
    function LandingpageComponent() {
    }
    LandingpageComponent.prototype.ngOnInit = function () {
    };
    LandingpageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-landingpage',
            template: __webpack_require__(/*! raw-loader!./landingpage.component.html */ "./node_modules/raw-loader/index.js!./src/app/landingpage/landingpage.component.html"),
            styles: [__webpack_require__(/*! ./landingpage.component.css */ "./src/app/landingpage/landingpage.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], LandingpageComponent);
    return LandingpageComponent;
}());



/***/ }),

/***/ "./src/app/landingpage/landingpage.module.ts":
/*!***************************************************!*\
  !*** ./src/app/landingpage/landingpage.module.ts ***!
  \***************************************************/
/*! exports provided: LandingpageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LandingpageModule", function() { return LandingpageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _landingpage_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./landingpage-routing.module */ "./src/app/landingpage/landingpage-routing.module.ts");
/* harmony import */ var _landingpage_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./landingpage.component */ "./src/app/landingpage/landingpage.component.ts");
/* harmony import */ var _nicky_lenaers_ngx_scroll_to__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @nicky-lenaers/ngx-scroll-to */ "./node_modules/@nicky-lenaers/ngx-scroll-to/fesm5/nicky-lenaers-ngx-scroll-to.js");
/* harmony import */ var _project_projects_projects_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./project/projects/projects.component */ "./src/app/landingpage/project/projects/projects.component.ts");
/* harmony import */ var _layout_layout_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./layout/layout.component */ "./src/app/landingpage/layout/layout.component.ts");
/* harmony import */ var _project_resord_and_residences_resord_and_residences_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./project/resord-and-residences/resord-and-residences.component */ "./src/app/landingpage/project/resord-and-residences/resord-and-residences.component.ts");









var LandingpageModule = /** @class */ (function () {
    function LandingpageModule() {
    }
    LandingpageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _landingpage_component__WEBPACK_IMPORTED_MODULE_4__["LandingpageComponent"],
                _project_projects_projects_component__WEBPACK_IMPORTED_MODULE_6__["ProjectsComponent"],
                _layout_layout_component__WEBPACK_IMPORTED_MODULE_7__["LayoutComponent"], _project_resord_and_residences_resord_and_residences_component__WEBPACK_IMPORTED_MODULE_8__["ResordAndResidencesComponent"]
            ],
            imports: [
                _nicky_lenaers_ngx_scroll_to__WEBPACK_IMPORTED_MODULE_5__["ScrollToModule"].forRoot(),
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _landingpage_routing_module__WEBPACK_IMPORTED_MODULE_3__["LandingpageRoutingModule"],
            ]
        })
    ], LandingpageModule);
    return LandingpageModule;
}());



/***/ }),

/***/ "./src/app/landingpage/layout/layout.component.css":
/*!*********************************************************!*\
  !*** ./src/app/landingpage/layout/layout.component.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n.bg-black {\r\n    background: #0d0d0d;\r\n  }\r\nul {\r\n  margin-top: 15px;\r\n  float: right;\r\n}\r\nul li{\r\n  display: inline;\r\n  padding-right: 10px;\r\n}\r\n.icon {\r\n  width: 40px;\r\n}\r\np {\r\n  padding: 1rem 0;\r\n  margin-top: 10px;\r\n    font-weight: 300;\r\n    color: #fff;\r\n}\r\n.row {\r\n  padding: 1rem;\r\n}\r\n.container {\r\n  max-width: 1140px;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbGFuZGluZ3BhZ2UvbGF5b3V0L2xheW91dC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFDQTtJQUNJLG1CQUFtQjtFQUNyQjtBQUNGO0VBQ0UsZ0JBQWdCO0VBQ2hCLFlBQVk7QUFDZDtBQUNBO0VBQ0UsZUFBZTtFQUNmLG1CQUFtQjtBQUNyQjtBQUVBO0VBQ0UsV0FBVztBQUNiO0FBQ0E7RUFDRSxlQUFlO0VBQ2YsZ0JBQWdCO0lBQ2QsZ0JBQWdCO0lBQ2hCLFdBQVc7QUFDZjtBQUVBO0VBQ0UsYUFBYTtBQUNmO0FBQ0E7RUFDRSxpQkFBaUI7QUFDbkIiLCJmaWxlIjoic3JjL2FwcC9sYW5kaW5ncGFnZS9sYXlvdXQvbGF5b3V0LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuLmJnLWJsYWNrIHtcclxuICAgIGJhY2tncm91bmQ6ICMwZDBkMGQ7XHJcbiAgfVxyXG51bCB7XHJcbiAgbWFyZ2luLXRvcDogMTVweDtcclxuICBmbG9hdDogcmlnaHQ7XHJcbn1cclxudWwgbGl7XHJcbiAgZGlzcGxheTogaW5saW5lO1xyXG4gIHBhZGRpbmctcmlnaHQ6IDEwcHg7XHJcbn1cclxuXHJcbi5pY29uIHtcclxuICB3aWR0aDogNDBweDtcclxufVxyXG5wIHtcclxuICBwYWRkaW5nOiAxcmVtIDA7XHJcbiAgbWFyZ2luLXRvcDogMTBweDtcclxuICAgIGZvbnQtd2VpZ2h0OiAzMDA7XHJcbiAgICBjb2xvcjogI2ZmZjtcclxufVxyXG5cclxuLnJvdyB7XHJcbiAgcGFkZGluZzogMXJlbTtcclxufVxyXG4uY29udGFpbmVyIHtcclxuICBtYXgtd2lkdGg6IDExNDBweDtcclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/landingpage/layout/layout.component.ts":
/*!********************************************************!*\
  !*** ./src/app/landingpage/layout/layout.component.ts ***!
  \********************************************************/
/*! exports provided: LayoutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LayoutComponent", function() { return LayoutComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var LayoutComponent = /** @class */ (function () {
    function LayoutComponent() {
    }
    LayoutComponent.prototype.ngOnInit = function () {
    };
    LayoutComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-layout',
            template: __webpack_require__(/*! raw-loader!./layout.component.html */ "./node_modules/raw-loader/index.js!./src/app/landingpage/layout/layout.component.html"),
            styles: [__webpack_require__(/*! ./layout.component.css */ "./src/app/landingpage/layout/layout.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], LayoutComponent);
    return LayoutComponent;
}());



/***/ }),

/***/ "./src/app/landingpage/project/projects/projects.component.css":
/*!*********************************************************************!*\
  !*** ./src/app/landingpage/project/projects/projects.component.css ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".background-block {\r\n  background-color: #0d0d0d;\r\n}\r\n\r\n#mainNav {\r\n  min-height: 56px;\r\n  background-color: #0d0d0d !important;\r\n}\r\n\r\n#mainNav .navbar-toggler {\r\n  font-size: 80%;\r\n  padding: 0.75rem;\r\n  color: #fff;\r\n  border: 1px solid #fff;\r\n}\r\n\r\n#mainNav .navbar-toggler:focus {\r\n  outline: none;\r\n}\r\n\r\n#mainNav .navbar-brand {\r\n  color: #161616;\r\n  font-weight: 700;\r\n  padding: .9rem 0;\r\n}\r\n\r\n#mainNav .navbar-nav .nav-item:hover {\r\n  color: fade(white, 80%);\r\n  outline: none;\r\n  /* background-color: transparent; */\r\n}\r\n\r\n#mainNav .navbar-nav .nav-item:active, #mainNav .navbar-nav .nav-item:focus {\r\n  outline: none;\r\n  /* background-color: transparent; */\r\n}\r\n\r\n@media (min-width: 992px) {\r\n  #mainNav {\r\n    padding-top: 0;\r\n    padding-bottom: 0;\r\n    border-bottom: none;\r\n    background-color: transparent;\r\n    transition: background-color 0.3s ease-in-out;\r\n  }\r\n\r\n \r\n  \r\n  #mainNav .nav-link {\r\n    transition: none;\r\n    padding: 2rem 1.5rem;\r\n    color: #0d0d0d;\r\n  }\r\n  \r\n  #mainNav .nav-link:hover {\r\n    color: #0d0d0d;\r\n  }\r\n  #mainNav .nav-link:active {\r\n    color:  #0d0d0d;\r\n  }\r\n  #mainNav .navbar-shrink {\r\n    background-color: #0d0d0d;\r\n  }\r\n \r\n  #mainNav.navbar-shrink .nav-link {\r\n    color: #161616;\r\n    padding: 1.5rem 1.5rem 1.25rem;\r\n    border-bottom: 0.25rem solid transparent;\r\n  }\r\n  #mainNav.navbar-shrink .nav-link:hover {\r\n    color: #fff;\r\n  }\r\n  #mainNav.navbar-shrink .nav-link:active {\r\n    color: #467370;\r\n  }\r\n  #mainNav.navbar-shrink .nav-link.active {\r\n    color: #fff;\r\n    outline: none;\r\n    border-bottom: 0.25rem solid #fff;\r\n  }\r\n}\r\n\r\na {\r\n  padding-top: 16px;\r\n}\r\n\r\n.projects {\r\n    padding: 7rem;\r\n    background-color:#0d0d0d;\r\n  }\r\n\r\n.img-project {\r\n    width: 110px;\r\n  }\r\n\r\n.projects .featured-text {\r\n    padding: 2rem;\r\n  }\r\n\r\n.projects .dimension {\r\n    padding: 10rem;\r\n  }\r\n\r\n@media (min-width: 992px) {\r\n    .projects .featured-text {\r\n      padding: 0 0 0 2rem;\r\n      border-left: 0.5rem solid #fff;\r\n    }\r\n  }\r\n\r\n.projects .project-text {\r\n    padding: 3rem;\r\n    font-size: 90%;\r\n  }\r\n\r\n@media (min-width: 992px) {\r\n    .projects .project-text {\r\n      padding: 5rem;\r\n    }\r\n    .projects .project-text hr {\r\n      border-color: #fff;\r\n      border-width: .25rem;\r\n      width: 30%;\r\n    }\r\n  }\r\n \r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbGFuZGluZ3BhZ2UvcHJvamVjdC9wcm9qZWN0cy9wcm9qZWN0cy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UseUJBQXlCO0FBQzNCOztBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLG9DQUFvQztBQUN0Qzs7QUFFQTtFQUNFLGNBQWM7RUFDZCxnQkFBZ0I7RUFDaEIsV0FBVztFQUNYLHNCQUFzQjtBQUN4Qjs7QUFFQTtFQUNFLGFBQWE7QUFDZjs7QUFFQTtFQUNFLGNBQWM7RUFDZCxnQkFBZ0I7RUFDaEIsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsdUJBQXVCO0VBQ3ZCLGFBQWE7RUFDYixtQ0FBbUM7QUFDckM7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsbUNBQW1DO0FBQ3JDOztBQUVBO0VBQ0U7SUFDRSxjQUFjO0lBQ2QsaUJBQWlCO0lBQ2pCLG1CQUFtQjtJQUNuQiw2QkFBNkI7SUFFN0IsNkNBQTZDO0VBQy9DOzs7O0VBSUE7SUFFRSxnQkFBZ0I7SUFDaEIsb0JBQW9CO0lBQ3BCLGNBQWM7RUFDaEI7O0VBRUE7SUFDRSxjQUFjO0VBQ2hCO0VBQ0E7SUFDRSxlQUFlO0VBQ2pCO0VBQ0E7SUFDRSx5QkFBeUI7RUFDM0I7O0VBRUE7SUFDRSxjQUFjO0lBQ2QsOEJBQThCO0lBQzlCLHdDQUF3QztFQUMxQztFQUNBO0lBQ0UsV0FBVztFQUNiO0VBQ0E7SUFDRSxjQUFjO0VBQ2hCO0VBQ0E7SUFDRSxXQUFXO0lBQ1gsYUFBYTtJQUNiLGlDQUFpQztFQUNuQztBQUNGOztBQUVBO0VBQ0UsaUJBQWlCO0FBQ25COztBQUVBO0lBQ0ksYUFBYTtJQUNiLHdCQUF3QjtFQUMxQjs7QUFFQTtJQUNFLFlBQVk7RUFDZDs7QUFHQTtJQUNFLGFBQWE7RUFDZjs7QUFFQTtJQUNFLGNBQWM7RUFDaEI7O0FBRUE7SUFDRTtNQUNFLG1CQUFtQjtNQUNuQiw4QkFBOEI7SUFDaEM7RUFDRjs7QUFFQTtJQUNFLGFBQWE7SUFDYixjQUFjO0VBQ2hCOztBQUVBO0lBQ0U7TUFDRSxhQUFhO0lBQ2Y7SUFDQTtNQUNFLGtCQUFrQjtNQUNsQixvQkFBb0I7TUFDcEIsVUFBVTtJQUNaO0VBQ0YiLCJmaWxlIjoic3JjL2FwcC9sYW5kaW5ncGFnZS9wcm9qZWN0L3Byb2plY3RzL3Byb2plY3RzLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYmFja2dyb3VuZC1ibG9jayB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzBkMGQwZDtcclxufVxyXG5cclxuI21haW5OYXYge1xyXG4gIG1pbi1oZWlnaHQ6IDU2cHg7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzBkMGQwZCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4jbWFpbk5hdiAubmF2YmFyLXRvZ2dsZXIge1xyXG4gIGZvbnQtc2l6ZTogODAlO1xyXG4gIHBhZGRpbmc6IDAuNzVyZW07XHJcbiAgY29sb3I6ICNmZmY7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgI2ZmZjtcclxufVxyXG5cclxuI21haW5OYXYgLm5hdmJhci10b2dnbGVyOmZvY3VzIHtcclxuICBvdXRsaW5lOiBub25lO1xyXG59XHJcblxyXG4jbWFpbk5hdiAubmF2YmFyLWJyYW5kIHtcclxuICBjb2xvcjogIzE2MTYxNjtcclxuICBmb250LXdlaWdodDogNzAwO1xyXG4gIHBhZGRpbmc6IC45cmVtIDA7XHJcbn1cclxuXHJcbiNtYWluTmF2IC5uYXZiYXItbmF2IC5uYXYtaXRlbTpob3ZlciB7XHJcbiAgY29sb3I6IGZhZGUod2hpdGUsIDgwJSk7XHJcbiAgb3V0bGluZTogbm9uZTtcclxuICAvKiBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDsgKi9cclxufVxyXG5cclxuI21haW5OYXYgLm5hdmJhci1uYXYgLm5hdi1pdGVtOmFjdGl2ZSwgI21haW5OYXYgLm5hdmJhci1uYXYgLm5hdi1pdGVtOmZvY3VzIHtcclxuICBvdXRsaW5lOiBub25lO1xyXG4gIC8qIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50OyAqL1xyXG59XHJcblxyXG5AbWVkaWEgKG1pbi13aWR0aDogOTkycHgpIHtcclxuICAjbWFpbk5hdiB7XHJcbiAgICBwYWRkaW5nLXRvcDogMDtcclxuICAgIHBhZGRpbmctYm90dG9tOiAwO1xyXG4gICAgYm9yZGVyLWJvdHRvbTogbm9uZTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xyXG4gICAgLXdlYmtpdC10cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIDAuM3MgZWFzZS1pbi1vdXQ7XHJcbiAgICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIDAuM3MgZWFzZS1pbi1vdXQ7XHJcbiAgfVxyXG5cclxuIFxyXG4gIFxyXG4gICNtYWluTmF2IC5uYXYtbGluayB7XHJcbiAgICAtd2Via2l0LXRyYW5zaXRpb246IG5vbmU7XHJcbiAgICB0cmFuc2l0aW9uOiBub25lO1xyXG4gICAgcGFkZGluZzogMnJlbSAxLjVyZW07XHJcbiAgICBjb2xvcjogIzBkMGQwZDtcclxuICB9XHJcbiAgXHJcbiAgI21haW5OYXYgLm5hdi1saW5rOmhvdmVyIHtcclxuICAgIGNvbG9yOiAjMGQwZDBkO1xyXG4gIH1cclxuICAjbWFpbk5hdiAubmF2LWxpbms6YWN0aXZlIHtcclxuICAgIGNvbG9yOiAgIzBkMGQwZDtcclxuICB9XHJcbiAgI21haW5OYXYgLm5hdmJhci1zaHJpbmsge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzBkMGQwZDtcclxuICB9XHJcbiBcclxuICAjbWFpbk5hdi5uYXZiYXItc2hyaW5rIC5uYXYtbGluayB7XHJcbiAgICBjb2xvcjogIzE2MTYxNjtcclxuICAgIHBhZGRpbmc6IDEuNXJlbSAxLjVyZW0gMS4yNXJlbTtcclxuICAgIGJvcmRlci1ib3R0b206IDAuMjVyZW0gc29saWQgdHJhbnNwYXJlbnQ7XHJcbiAgfVxyXG4gICNtYWluTmF2Lm5hdmJhci1zaHJpbmsgLm5hdi1saW5rOmhvdmVyIHtcclxuICAgIGNvbG9yOiAjZmZmO1xyXG4gIH1cclxuICAjbWFpbk5hdi5uYXZiYXItc2hyaW5rIC5uYXYtbGluazphY3RpdmUge1xyXG4gICAgY29sb3I6ICM0NjczNzA7XHJcbiAgfVxyXG4gICNtYWluTmF2Lm5hdmJhci1zaHJpbmsgLm5hdi1saW5rLmFjdGl2ZSB7XHJcbiAgICBjb2xvcjogI2ZmZjtcclxuICAgIG91dGxpbmU6IG5vbmU7XHJcbiAgICBib3JkZXItYm90dG9tOiAwLjI1cmVtIHNvbGlkICNmZmY7XHJcbiAgfVxyXG59XHJcblxyXG5hIHtcclxuICBwYWRkaW5nLXRvcDogMTZweDtcclxufVxyXG5cclxuLnByb2plY3RzIHtcclxuICAgIHBhZGRpbmc6IDdyZW07XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiMwZDBkMGQ7XHJcbiAgfVxyXG5cclxuICAuaW1nLXByb2plY3Qge1xyXG4gICAgd2lkdGg6IDExMHB4O1xyXG4gIH1cclxuICBcclxuICBcclxuICAucHJvamVjdHMgLmZlYXR1cmVkLXRleHQge1xyXG4gICAgcGFkZGluZzogMnJlbTtcclxuICB9XHJcblxyXG4gIC5wcm9qZWN0cyAuZGltZW5zaW9uIHtcclxuICAgIHBhZGRpbmc6IDEwcmVtO1xyXG4gIH1cclxuICBcclxuICBAbWVkaWEgKG1pbi13aWR0aDogOTkycHgpIHtcclxuICAgIC5wcm9qZWN0cyAuZmVhdHVyZWQtdGV4dCB7XHJcbiAgICAgIHBhZGRpbmc6IDAgMCAwIDJyZW07XHJcbiAgICAgIGJvcmRlci1sZWZ0OiAwLjVyZW0gc29saWQgI2ZmZjtcclxuICAgIH1cclxuICB9XHJcbiAgXHJcbiAgLnByb2plY3RzIC5wcm9qZWN0LXRleHQge1xyXG4gICAgcGFkZGluZzogM3JlbTtcclxuICAgIGZvbnQtc2l6ZTogOTAlO1xyXG4gIH1cclxuICBcclxuICBAbWVkaWEgKG1pbi13aWR0aDogOTkycHgpIHtcclxuICAgIC5wcm9qZWN0cyAucHJvamVjdC10ZXh0IHtcclxuICAgICAgcGFkZGluZzogNXJlbTtcclxuICAgIH1cclxuICAgIC5wcm9qZWN0cyAucHJvamVjdC10ZXh0IGhyIHtcclxuICAgICAgYm9yZGVyLWNvbG9yOiAjZmZmO1xyXG4gICAgICBib3JkZXItd2lkdGg6IC4yNXJlbTtcclxuICAgICAgd2lkdGg6IDMwJTtcclxuICAgIH1cclxuICB9XHJcbiAiXX0= */"

/***/ }),

/***/ "./src/app/landingpage/project/projects/projects.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/landingpage/project/projects/projects.component.ts ***!
  \********************************************************************/
/*! exports provided: ProjectsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProjectsComponent", function() { return ProjectsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ProjectsComponent = /** @class */ (function () {
    function ProjectsComponent() {
    }
    ProjectsComponent.prototype.ngOnInit = function () {
    };
    ProjectsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-projects',
            template: __webpack_require__(/*! raw-loader!./projects.component.html */ "./node_modules/raw-loader/index.js!./src/app/landingpage/project/projects/projects.component.html"),
            styles: [__webpack_require__(/*! ./projects.component.css */ "./src/app/landingpage/project/projects/projects.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ProjectsComponent);
    return ProjectsComponent;
}());



/***/ }),

/***/ "./src/app/landingpage/project/resord-and-residences/resord-and-residences.component.css":
/*!***********************************************************************************************!*\
  !*** ./src/app/landingpage/project/resord-and-residences/resord-and-residences.component.css ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".background-block {\r\n    background-color: #0d0d0d;\r\n  }\r\n  \r\n  #mainNav {\r\n    min-height: 56px;\r\n    background-color: #0d0d0d !important;\r\n  }\r\n  \r\n  #mainNav .navbar-toggler {\r\n    font-size: 80%;\r\n    padding: 0.75rem;\r\n    color: #fff;\r\n    border: 1px solid #fff;\r\n  }\r\n  \r\n  #mainNav .navbar-toggler:focus {\r\n    outline: none;\r\n  }\r\n  \r\n  #mainNav .navbar-brand {\r\n    color: #161616;\r\n    font-weight: 700;\r\n    padding: .9rem 0;\r\n  }\r\n  \r\n  #mainNav .navbar-nav .nav-item:hover {\r\n    color: fade(white, 80%);\r\n    outline: none;\r\n    /* background-color: transparent; */\r\n  }\r\n  \r\n  #mainNav .navbar-nav .nav-item:active, #mainNav .navbar-nav .nav-item:focus {\r\n    outline: none;\r\n    /* background-color: transparent; */\r\n  }\r\n  \r\n  @media (min-width: 992px) {\r\n    #mainNav {\r\n      padding-top: 0;\r\n      padding-bottom: 0;\r\n      border-bottom: none;\r\n      background-color: transparent;\r\n      transition: background-color 0.3s ease-in-out;\r\n    }\r\n  \r\n   \r\n    \r\n    #mainNav .nav-link {\r\n      transition: none;\r\n      padding: 2rem 1.5rem;\r\n      color: #0d0d0d;\r\n    }\r\n    \r\n    #mainNav .nav-link:hover {\r\n      color: #0d0d0d;\r\n    }\r\n    #mainNav .nav-link:active {\r\n      color:  #0d0d0d;\r\n    }\r\n    #mainNav .navbar-shrink {\r\n      background-color: #0d0d0d;\r\n    }\r\n   \r\n    #mainNav.navbar-shrink .nav-link {\r\n      color: #161616;\r\n      padding: 1.5rem 1.5rem 1.25rem;\r\n      border-bottom: 0.25rem solid transparent;\r\n    }\r\n    #mainNav.navbar-shrink .nav-link:hover {\r\n      color: #fff;\r\n    }\r\n    #mainNav.navbar-shrink .nav-link:active {\r\n      color: #467370;\r\n    }\r\n    #mainNav.navbar-shrink .nav-link.active {\r\n      color: #fff;\r\n      outline: none;\r\n      border-bottom: 0.25rem solid #fff;\r\n    }\r\n  }\r\n  \r\n  a {\r\n    padding-top: 16px;\r\n  }\r\n  \r\n  .projects {\r\n      padding: 7rem;\r\n      background-color:#0d0d0d;\r\n    }\r\n  \r\n  .img-project {\r\n      width: 150px;\r\n    }\r\n  \r\n  .projects .featured-text {\r\n      padding: 2rem;\r\n    }\r\n  \r\n  .projects .dimension {\r\n      padding: 10rem;\r\n    }\r\n  \r\n  @media (min-width: 992px) {\r\n      .projects .featured-text {\r\n        padding: 0 0 0 2rem;\r\n        border-left: 0.5rem solid #fff;\r\n      }\r\n    }\r\n  \r\n  .projects .project-text {\r\n      padding: 3rem;\r\n      font-size: 90%;\r\n    }\r\n  \r\n  @media (min-width: 992px) {\r\n      .projects .project-text {\r\n        padding: 5rem;\r\n      }\r\n      .projects .project-text hr {\r\n        border-color: #fff;\r\n        border-width: .25rem;\r\n        width: 30%;\r\n      }\r\n    }\r\n   \r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbGFuZGluZ3BhZ2UvcHJvamVjdC9yZXNvcmQtYW5kLXJlc2lkZW5jZXMvcmVzb3JkLWFuZC1yZXNpZGVuY2VzLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSx5QkFBeUI7RUFDM0I7O0VBRUE7SUFDRSxnQkFBZ0I7SUFDaEIsb0NBQW9DO0VBQ3RDOztFQUVBO0lBQ0UsY0FBYztJQUNkLGdCQUFnQjtJQUNoQixXQUFXO0lBQ1gsc0JBQXNCO0VBQ3hCOztFQUVBO0lBQ0UsYUFBYTtFQUNmOztFQUVBO0lBQ0UsY0FBYztJQUNkLGdCQUFnQjtJQUNoQixnQkFBZ0I7RUFDbEI7O0VBRUE7SUFDRSx1QkFBdUI7SUFDdkIsYUFBYTtJQUNiLG1DQUFtQztFQUNyQzs7RUFFQTtJQUNFLGFBQWE7SUFDYixtQ0FBbUM7RUFDckM7O0VBRUE7SUFDRTtNQUNFLGNBQWM7TUFDZCxpQkFBaUI7TUFDakIsbUJBQW1CO01BQ25CLDZCQUE2QjtNQUU3Qiw2Q0FBNkM7SUFDL0M7Ozs7SUFJQTtNQUVFLGdCQUFnQjtNQUNoQixvQkFBb0I7TUFDcEIsY0FBYztJQUNoQjs7SUFFQTtNQUNFLGNBQWM7SUFDaEI7SUFDQTtNQUNFLGVBQWU7SUFDakI7SUFDQTtNQUNFLHlCQUF5QjtJQUMzQjs7SUFFQTtNQUNFLGNBQWM7TUFDZCw4QkFBOEI7TUFDOUIsd0NBQXdDO0lBQzFDO0lBQ0E7TUFDRSxXQUFXO0lBQ2I7SUFDQTtNQUNFLGNBQWM7SUFDaEI7SUFDQTtNQUNFLFdBQVc7TUFDWCxhQUFhO01BQ2IsaUNBQWlDO0lBQ25DO0VBQ0Y7O0VBRUE7SUFDRSxpQkFBaUI7RUFDbkI7O0VBRUE7TUFDSSxhQUFhO01BQ2Isd0JBQXdCO0lBQzFCOztFQUVBO01BQ0UsWUFBWTtJQUNkOztFQUdBO01BQ0UsYUFBYTtJQUNmOztFQUVBO01BQ0UsY0FBYztJQUNoQjs7RUFFQTtNQUNFO1FBQ0UsbUJBQW1CO1FBQ25CLDhCQUE4QjtNQUNoQztJQUNGOztFQUVBO01BQ0UsYUFBYTtNQUNiLGNBQWM7SUFDaEI7O0VBRUE7TUFDRTtRQUNFLGFBQWE7TUFDZjtNQUNBO1FBQ0Usa0JBQWtCO1FBQ2xCLG9CQUFvQjtRQUNwQixVQUFVO01BQ1o7SUFDRiIsImZpbGUiOiJzcmMvYXBwL2xhbmRpbmdwYWdlL3Byb2plY3QvcmVzb3JkLWFuZC1yZXNpZGVuY2VzL3Jlc29yZC1hbmQtcmVzaWRlbmNlcy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmJhY2tncm91bmQtYmxvY2sge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzBkMGQwZDtcclxuICB9XHJcbiAgXHJcbiAgI21haW5OYXYge1xyXG4gICAgbWluLWhlaWdodDogNTZweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMwZDBkMGQgIWltcG9ydGFudDtcclxuICB9XHJcbiAgXHJcbiAgI21haW5OYXYgLm5hdmJhci10b2dnbGVyIHtcclxuICAgIGZvbnQtc2l6ZTogODAlO1xyXG4gICAgcGFkZGluZzogMC43NXJlbTtcclxuICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgI2ZmZjtcclxuICB9XHJcbiAgXHJcbiAgI21haW5OYXYgLm5hdmJhci10b2dnbGVyOmZvY3VzIHtcclxuICAgIG91dGxpbmU6IG5vbmU7XHJcbiAgfVxyXG4gIFxyXG4gICNtYWluTmF2IC5uYXZiYXItYnJhbmQge1xyXG4gICAgY29sb3I6ICMxNjE2MTY7XHJcbiAgICBmb250LXdlaWdodDogNzAwO1xyXG4gICAgcGFkZGluZzogLjlyZW0gMDtcclxuICB9XHJcbiAgXHJcbiAgI21haW5OYXYgLm5hdmJhci1uYXYgLm5hdi1pdGVtOmhvdmVyIHtcclxuICAgIGNvbG9yOiBmYWRlKHdoaXRlLCA4MCUpO1xyXG4gICAgb3V0bGluZTogbm9uZTtcclxuICAgIC8qIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50OyAqL1xyXG4gIH1cclxuICBcclxuICAjbWFpbk5hdiAubmF2YmFyLW5hdiAubmF2LWl0ZW06YWN0aXZlLCAjbWFpbk5hdiAubmF2YmFyLW5hdiAubmF2LWl0ZW06Zm9jdXMge1xyXG4gICAgb3V0bGluZTogbm9uZTtcclxuICAgIC8qIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50OyAqL1xyXG4gIH1cclxuICBcclxuICBAbWVkaWEgKG1pbi13aWR0aDogOTkycHgpIHtcclxuICAgICNtYWluTmF2IHtcclxuICAgICAgcGFkZGluZy10b3A6IDA7XHJcbiAgICAgIHBhZGRpbmctYm90dG9tOiAwO1xyXG4gICAgICBib3JkZXItYm90dG9tOiBub25lO1xyXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcclxuICAgICAgLXdlYmtpdC10cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIDAuM3MgZWFzZS1pbi1vdXQ7XHJcbiAgICAgIHRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgMC4zcyBlYXNlLWluLW91dDtcclxuICAgIH1cclxuICBcclxuICAgXHJcbiAgICBcclxuICAgICNtYWluTmF2IC5uYXYtbGluayB7XHJcbiAgICAgIC13ZWJraXQtdHJhbnNpdGlvbjogbm9uZTtcclxuICAgICAgdHJhbnNpdGlvbjogbm9uZTtcclxuICAgICAgcGFkZGluZzogMnJlbSAxLjVyZW07XHJcbiAgICAgIGNvbG9yOiAjMGQwZDBkO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICAjbWFpbk5hdiAubmF2LWxpbms6aG92ZXIge1xyXG4gICAgICBjb2xvcjogIzBkMGQwZDtcclxuICAgIH1cclxuICAgICNtYWluTmF2IC5uYXYtbGluazphY3RpdmUge1xyXG4gICAgICBjb2xvcjogICMwZDBkMGQ7XHJcbiAgICB9XHJcbiAgICAjbWFpbk5hdiAubmF2YmFyLXNocmluayB7XHJcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICMwZDBkMGQ7XHJcbiAgICB9XHJcbiAgIFxyXG4gICAgI21haW5OYXYubmF2YmFyLXNocmluayAubmF2LWxpbmsge1xyXG4gICAgICBjb2xvcjogIzE2MTYxNjtcclxuICAgICAgcGFkZGluZzogMS41cmVtIDEuNXJlbSAxLjI1cmVtO1xyXG4gICAgICBib3JkZXItYm90dG9tOiAwLjI1cmVtIHNvbGlkIHRyYW5zcGFyZW50O1xyXG4gICAgfVxyXG4gICAgI21haW5OYXYubmF2YmFyLXNocmluayAubmF2LWxpbms6aG92ZXIge1xyXG4gICAgICBjb2xvcjogI2ZmZjtcclxuICAgIH1cclxuICAgICNtYWluTmF2Lm5hdmJhci1zaHJpbmsgLm5hdi1saW5rOmFjdGl2ZSB7XHJcbiAgICAgIGNvbG9yOiAjNDY3MzcwO1xyXG4gICAgfVxyXG4gICAgI21haW5OYXYubmF2YmFyLXNocmluayAubmF2LWxpbmsuYWN0aXZlIHtcclxuICAgICAgY29sb3I6ICNmZmY7XHJcbiAgICAgIG91dGxpbmU6IG5vbmU7XHJcbiAgICAgIGJvcmRlci1ib3R0b206IDAuMjVyZW0gc29saWQgI2ZmZjtcclxuICAgIH1cclxuICB9XHJcbiAgXHJcbiAgYSB7XHJcbiAgICBwYWRkaW5nLXRvcDogMTZweDtcclxuICB9XHJcbiAgXHJcbiAgLnByb2plY3RzIHtcclxuICAgICAgcGFkZGluZzogN3JlbTtcclxuICAgICAgYmFja2dyb3VuZC1jb2xvcjojMGQwZDBkO1xyXG4gICAgfVxyXG4gIFxyXG4gICAgLmltZy1wcm9qZWN0IHtcclxuICAgICAgd2lkdGg6IDE1MHB4O1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICBcclxuICAgIC5wcm9qZWN0cyAuZmVhdHVyZWQtdGV4dCB7XHJcbiAgICAgIHBhZGRpbmc6IDJyZW07XHJcbiAgICB9XHJcbiAgXHJcbiAgICAucHJvamVjdHMgLmRpbWVuc2lvbiB7XHJcbiAgICAgIHBhZGRpbmc6IDEwcmVtO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICBAbWVkaWEgKG1pbi13aWR0aDogOTkycHgpIHtcclxuICAgICAgLnByb2plY3RzIC5mZWF0dXJlZC10ZXh0IHtcclxuICAgICAgICBwYWRkaW5nOiAwIDAgMCAycmVtO1xyXG4gICAgICAgIGJvcmRlci1sZWZ0OiAwLjVyZW0gc29saWQgI2ZmZjtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgXHJcbiAgICAucHJvamVjdHMgLnByb2plY3QtdGV4dCB7XHJcbiAgICAgIHBhZGRpbmc6IDNyZW07XHJcbiAgICAgIGZvbnQtc2l6ZTogOTAlO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICBAbWVkaWEgKG1pbi13aWR0aDogOTkycHgpIHtcclxuICAgICAgLnByb2plY3RzIC5wcm9qZWN0LXRleHQge1xyXG4gICAgICAgIHBhZGRpbmc6IDVyZW07XHJcbiAgICAgIH1cclxuICAgICAgLnByb2plY3RzIC5wcm9qZWN0LXRleHQgaHIge1xyXG4gICAgICAgIGJvcmRlci1jb2xvcjogI2ZmZjtcclxuICAgICAgICBib3JkZXItd2lkdGg6IC4yNXJlbTtcclxuICAgICAgICB3aWR0aDogMzAlO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICJdfQ== */"

/***/ }),

/***/ "./src/app/landingpage/project/resord-and-residences/resord-and-residences.component.ts":
/*!**********************************************************************************************!*\
  !*** ./src/app/landingpage/project/resord-and-residences/resord-and-residences.component.ts ***!
  \**********************************************************************************************/
/*! exports provided: ResordAndResidencesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResordAndResidencesComponent", function() { return ResordAndResidencesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ResordAndResidencesComponent = /** @class */ (function () {
    function ResordAndResidencesComponent() {
    }
    ResordAndResidencesComponent.prototype.ngOnInit = function () {
    };
    ResordAndResidencesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-resord-and-residences',
            template: __webpack_require__(/*! raw-loader!./resord-and-residences.component.html */ "./node_modules/raw-loader/index.js!./src/app/landingpage/project/resord-and-residences/resord-and-residences.component.html"),
            styles: [__webpack_require__(/*! ./resord-and-residences.component.css */ "./src/app/landingpage/project/resord-and-residences/resord-and-residences.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ResordAndResidencesComponent);
    return ResordAndResidencesComponent;
}());



/***/ })

}]);
//# sourceMappingURL=landingpage-landingpage-module-es5.js.map