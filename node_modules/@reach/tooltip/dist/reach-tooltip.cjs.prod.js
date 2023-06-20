'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var autoId = require('@reach/auto-id');
var getDocumentDimensions = require('@reach/utils/get-document-dimensions');
var ownerDocument = require('@reach/utils/owner-document');
var makeId = require('@reach/utils/make-id');
var devUtils = require('@reach/utils/dev-utils');
var composeRefs = require('@reach/utils/compose-refs');
var composeEventHandlers = require('@reach/utils/compose-event-handlers');
var portal = require('@reach/portal');
var visuallyHidden = require('@reach/visually-hidden');
var rect = require('@reach/rect');
require('tiny-warning');
require('prop-types');

function _extends() {
  _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}

var _excluded = ["children", "label", "ariaLabel", "id", "DEBUG_STYLE"],
    _excluded2 = ["label", "ariaLabel", "isVisible", "id"],
    _excluded3 = ["ariaLabel", "aria-label", "as", "id", "isVisible", "label", "position", "style", "triggerRect"],
    _excluded4 = ["type"];

var _on, _on2, _on3, _on4, _on5, _states;
var MOUSE_REST_TIMEOUT = 100;
var LEAVE_TIMEOUT = 500; ////////////////////////////////////////////////////////////////////////////////
// States

var TooltipStates; ////////////////////////////////////////////////////////////////////////////////
// Events

(function (TooltipStates) {
  TooltipStates["Idle"] = "IDLE";
  TooltipStates["Focused"] = "FOCUSED";
  TooltipStates["Visible"] = "VISIBLE";
  TooltipStates["LeavingVisible"] = "LEAVING_VISIBLE";
  TooltipStates["Dismissed"] = "DISMISSED";
})(TooltipStates || (TooltipStates = {}));

var TooltipEvents;

(function (TooltipEvents) {
  TooltipEvents["Blur"] = "BLUR";
  TooltipEvents["Focus"] = "FOCUS";
  TooltipEvents["GlobalMouseMove"] = "GLOBAL_MOUSE_MOVE";
  TooltipEvents["MouseDown"] = "MOUSE_DOWN";
  TooltipEvents["MouseEnter"] = "MOUSE_ENTER";
  TooltipEvents["MouseLeave"] = "MOUSE_LEAVE";
  TooltipEvents["MouseMove"] = "MOUSE_MOVE";
  TooltipEvents["Rest"] = "REST";
  TooltipEvents["SelectWithKeyboard"] = "SELECT_WITH_KEYBOARD";
  TooltipEvents["TimeComplete"] = "TIME_COMPLETE";
})(TooltipEvents || (TooltipEvents = {}));

var chart = {
  initial: TooltipStates.Idle,
  states: (_states = {}, _states[TooltipStates.Idle] = {
    enter: clearContextId,
    on: (_on = {}, _on[TooltipEvents.MouseEnter] = TooltipStates.Focused, _on[TooltipEvents.Focus] = TooltipStates.Visible, _on)
  }, _states[TooltipStates.Focused] = {
    enter: startRestTimer,
    leave: clearRestTimer,
    on: (_on2 = {}, _on2[TooltipEvents.MouseMove] = TooltipStates.Focused, _on2[TooltipEvents.MouseLeave] = TooltipStates.Idle, _on2[TooltipEvents.MouseDown] = TooltipStates.Dismissed, _on2[TooltipEvents.Blur] = TooltipStates.Idle, _on2[TooltipEvents.Rest] = TooltipStates.Visible, _on2)
  }, _states[TooltipStates.Visible] = {
    on: (_on3 = {}, _on3[TooltipEvents.Focus] = TooltipStates.Focused, _on3[TooltipEvents.MouseEnter] = TooltipStates.Focused, _on3[TooltipEvents.MouseLeave] = TooltipStates.LeavingVisible, _on3[TooltipEvents.Blur] = TooltipStates.LeavingVisible, _on3[TooltipEvents.MouseDown] = TooltipStates.Dismissed, _on3[TooltipEvents.SelectWithKeyboard] = TooltipStates.Dismissed, _on3[TooltipEvents.GlobalMouseMove] = TooltipStates.LeavingVisible, _on3)
  }, _states[TooltipStates.LeavingVisible] = {
    enter: startLeavingVisibleTimer,
    leave: function leave() {
      clearLeavingVisibleTimer();
      clearContextId();
    },
    on: (_on4 = {}, _on4[TooltipEvents.MouseEnter] = TooltipStates.Visible, _on4[TooltipEvents.Focus] = TooltipStates.Visible, _on4[TooltipEvents.TimeComplete] = TooltipStates.Idle, _on4)
  }, _states[TooltipStates.Dismissed] = {
    leave: function leave() {
      clearContextId();
    },
    on: (_on5 = {}, _on5[TooltipEvents.MouseLeave] = TooltipStates.Idle, _on5[TooltipEvents.Blur] = TooltipStates.Idle, _on5)
  }, _states)
};
/*
 * Chart context allows us to persist some data around, in Tooltip all we use
 * is the id of the current tooltip being interacted with.
 */

var state = {
  value: chart.initial,
  context: {
    id: null
  }
}; ////////////////////////////////////////////////////////////////////////////////
// Subscriptions:
//
// We could require apps to render a <TooltipProvider> around the app and use
// React context to notify Tooltips of changes to our state machine, instead
// we manage subscriptions ourselves and simplify the Tooltip API.
//
// Maybe if default context could take a hook (instead of just a static value)
// that was rendered at the root for us, that'd be cool! But it doesn't.

var subscriptions = [];

function subscribe(fn) {
  subscriptions.push(fn);
  return function () {
    subscriptions.splice(subscriptions.indexOf(fn), 1);
  };
}

function notify() {
  subscriptions.forEach(function (fn) {
    return fn(state);
  });
} ////////////////////////////////////////////////////////////////////////////////
// Timeouts:
// Manages when the user "rests" on an element. Keeps the interface from being
// flashing tooltips all the time as the user moves the mouse around the screen.


var restTimeout;

function startRestTimer() {
  window.clearTimeout(restTimeout);
  restTimeout = window.setTimeout(function () {
    send({
      type: TooltipEvents.Rest
    });
  }, MOUSE_REST_TIMEOUT);
}

function clearRestTimer() {
  window.clearTimeout(restTimeout);
} // Manages the delay to hide the tooltip after rest leaves.


var leavingVisibleTimer;

function startLeavingVisibleTimer() {
  window.clearTimeout(leavingVisibleTimer);
  leavingVisibleTimer = window.setTimeout(function () {
    return send({
      type: TooltipEvents.TimeComplete
    });
  }, LEAVE_TIMEOUT);
}

function clearLeavingVisibleTimer() {
  window.clearTimeout(leavingVisibleTimer);
} // allows us to come on back later w/o entering something else first after the
// user leaves or dismisses


function clearContextId() {
  state.context.id = null;
} ////////////////////////////////////////////////////////////////////////////////

/**
 * useTooltip
 *
 * @param params
 */


function useTooltip(_temp) {
  var _ref = _temp === void 0 ? {} : _temp,
      idProp = _ref.id,
      onPointerEnter = _ref.onPointerEnter,
      onPointerMove = _ref.onPointerMove,
      onPointerLeave = _ref.onPointerLeave,
      onPointerDown = _ref.onPointerDown,
      onMouseEnter = _ref.onMouseEnter,
      onMouseMove = _ref.onMouseMove,
      onMouseLeave = _ref.onMouseLeave,
      onMouseDown = _ref.onMouseDown,
      onFocus = _ref.onFocus,
      onBlur = _ref.onBlur,
      onKeyDown = _ref.onKeyDown,
      disabled = _ref.disabled,
      forwardedRef = _ref.ref,
      DEBUG_STYLE = _ref.DEBUG_STYLE;

  var id = String(autoId.useId(idProp));

  var _React$useState = React.useState(DEBUG_STYLE ? true : isTooltipVisible(id, true)),
      isVisible = _React$useState[0],
      setIsVisible = _React$useState[1]; // hopefully they always pass a ref if they ever pass one


  var ownRef = React.useRef(null);
  var ref = composeRefs.useComposedRefs(forwardedRef, ownRef);
  var triggerRect = rect.useRect(ownRef, {
    observe: isVisible
  });
  React.useEffect(function () {
    return subscribe(function () {
      setIsVisible(isTooltipVisible(id));
    });
  }, [id]);
  devUtils.useCheckStyles("tooltip");
  React.useEffect(function () {
    var ownerDocument$1 = ownerDocument.getOwnerDocument(ownRef.current);

    function listener(event) {
      if ((event.key === "Escape" || event.key === "Esc") && state.value === TooltipStates.Visible) {
        send({
          type: TooltipEvents.SelectWithKeyboard
        });
      }
    }

    ownerDocument$1.addEventListener("keydown", listener);
    return function () {
      return ownerDocument$1.removeEventListener("keydown", listener);
    };
  }, []);
  useDisabledTriggerOnSafari({
    disabled: disabled,
    isVisible: isVisible,
    ref: ownRef
  });

  function wrapMouseEvent(theirHandler, ourHandler) {
    // Use internal MouseEvent handler only if PointerEvent is not supported
    if (typeof window !== "undefined" && "PointerEvent" in window) {
      return theirHandler;
    }

    return composeEventHandlers.composeEventHandlers(theirHandler, ourHandler);
  }

  function wrapPointerEventHandler(handler) {
    return function onPointerEvent(event) {
      // Handle pointer events only from mouse device
      if (event.pointerType !== "mouse") {
        return;
      }

      handler(event);
    };
  }

  function handleMouseEnter() {
    send({
      type: TooltipEvents.MouseEnter,
      id: id
    });
  }

  function handleMouseMove() {
    send({
      type: TooltipEvents.MouseMove,
      id: id
    });
  }

  function handleMouseLeave() {
    send({
      type: TooltipEvents.MouseLeave
    });
  }

  function handleMouseDown() {
    // Allow quick click from one tool to another
    if (state.context.id === id) {
      send({
        type: TooltipEvents.MouseDown
      });
    }
  }

  function handleFocus() {
    // @ts-ignore
    if (window.__REACH_DISABLE_TOOLTIPS) {
      return;
    }

    send({
      type: TooltipEvents.Focus,
      id: id
    });
  }

  function handleBlur() {
    // Allow quick click from one tool to another
    if (state.context.id === id) {
      send({
        type: TooltipEvents.Blur
      });
    }
  }

  function handleKeyDown(event) {
    if (event.key === "Enter" || event.key === " ") {
      send({
        type: TooltipEvents.SelectWithKeyboard
      });
    }
  }

  var trigger = {
    // The element that triggers the tooltip references the tooltip element with
    // `aria-describedby`.
    // https://www.w3.org/TR/wai-aria-practices-1.2/#tooltip
    "aria-describedby": isVisible ? makeId.makeId("tooltip", id) : undefined,
    "data-state": isVisible ? "tooltip-visible" : "tooltip-hidden",
    "data-reach-tooltip-trigger": "",
    ref: ref,
    onPointerEnter: composeEventHandlers.composeEventHandlers(onPointerEnter, wrapPointerEventHandler(handleMouseEnter)),
    onPointerMove: composeEventHandlers.composeEventHandlers(onPointerMove, wrapPointerEventHandler(handleMouseMove)),
    onPointerLeave: composeEventHandlers.composeEventHandlers(onPointerLeave, wrapPointerEventHandler(handleMouseLeave)),
    onPointerDown: composeEventHandlers.composeEventHandlers(onPointerDown, wrapPointerEventHandler(handleMouseDown)),
    onMouseEnter: wrapMouseEvent(onMouseEnter, handleMouseEnter),
    onMouseMove: wrapMouseEvent(onMouseMove, handleMouseMove),
    onMouseLeave: wrapMouseEvent(onMouseLeave, handleMouseLeave),
    onMouseDown: wrapMouseEvent(onMouseDown, handleMouseDown),
    onFocus: composeEventHandlers.composeEventHandlers(onFocus, handleFocus),
    onBlur: composeEventHandlers.composeEventHandlers(onBlur, handleBlur),
    onKeyDown: composeEventHandlers.composeEventHandlers(onKeyDown, handleKeyDown)
  };
  var tooltip = {
    id: id,
    triggerRect: triggerRect,
    isVisible: isVisible
  };
  return [trigger, tooltip, isVisible];
} ////////////////////////////////////////////////////////////////////////////////

/**
 * Tooltip
 *
 * @see Docs https://reach.tech/tooltip#tooltip
 */


var Tooltip = /*#__PURE__*/React.forwardRef(function (_ref2, forwardedRef) {
  var children = _ref2.children,
      label = _ref2.label,
      DEPRECATED_ariaLabel = _ref2.ariaLabel,
      id = _ref2.id,
      DEBUG_STYLE = _ref2.DEBUG_STYLE,
      props = _objectWithoutPropertiesLoose(_ref2, _excluded);

  var child = React.Children.only(children);
  // to make sure users can maintain control over the trigger's ref and events

  var _useTooltip = useTooltip({
    id: id,
    onPointerEnter: child.props.onPointerEnter,
    onPointerMove: child.props.onPointerMove,
    onPointerLeave: child.props.onPointerLeave,
    onPointerDown: child.props.onPointerDown,
    onMouseEnter: child.props.onMouseEnter,
    onMouseMove: child.props.onMouseMove,
    onMouseLeave: child.props.onMouseLeave,
    onMouseDown: child.props.onMouseDown,
    onFocus: child.props.onFocus,
    onBlur: child.props.onBlur,
    onKeyDown: child.props.onKeyDown,
    disabled: child.props.disabled,
    ref: child.ref,
    DEBUG_STYLE: DEBUG_STYLE
  }),
      trigger = _useTooltip[0],
      tooltip = _useTooltip[1];

  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.cloneElement(child, trigger), /*#__PURE__*/React.createElement(TooltipPopup, _extends({
    ref: forwardedRef,
    label: label,
    "aria-label": DEPRECATED_ariaLabel
  }, tooltip, props)));
});

/**
 * TooltipPopup
 *
 * @see Docs https://reach.tech/tooltip#tooltippopup
 */


var TooltipPopup = /*#__PURE__*/React.forwardRef(function TooltipPopup(_ref3, forwardRef) {
  var label = _ref3.label,
      DEPRECATED_ariaLabel = _ref3.ariaLabel,
      isVisible = _ref3.isVisible,
      id = _ref3.id,
      props = _objectWithoutPropertiesLoose(_ref3, _excluded2);

  return isVisible ? /*#__PURE__*/React.createElement(portal.Portal, null, /*#__PURE__*/React.createElement(TooltipContent, _extends({
    ref: forwardRef,
    label: label,
    "aria-label": DEPRECATED_ariaLabel,
    isVisible: isVisible
  }, props, {
    id: makeId.makeId("tooltip", String(id))
  }))) : null;
});
/**
 * TooltipContent
 *
 * We need a separate component so that useRect works inside the portal.
 *
 * @see Docs https://reach.tech/tooltip#tooltipcontent
 */


var TooltipContent = /*#__PURE__*/React.forwardRef(function TooltipContent(_ref4, forwardedRef) {
  var ariaLabel = _ref4.ariaLabel,
      realAriaLabel = _ref4["aria-label"],
      _ref4$as = _ref4.as,
      Comp = _ref4$as === void 0 ? "div" : _ref4$as,
      id = _ref4.id,
      isVisible = _ref4.isVisible,
      label = _ref4.label,
      _ref4$position = _ref4.position,
      position = _ref4$position === void 0 ? positionTooltip : _ref4$position,
      style = _ref4.style,
      triggerRect = _ref4.triggerRect,
      props = _objectWithoutPropertiesLoose(_ref4, _excluded3);

  // The element that serves as the tooltip container has role tooltip.
  // https://www.w3.org/TR/wai-aria-practices-1.2/#tooltip When an app passes
  // an `aria-label`, we actually want to implement `role="tooltip"` on a
  // visually hidden element inside of the trigger. In these cases we want the
  // screen reader user to know both the content in the tooltip, but also the
  // content in the badge. For screen reader users, the only content announced
  // to them is whatever is in the tooltip.
  var hasAriaLabel = (realAriaLabel || ariaLabel) != null;
  var ownRef = React.useRef(null);
  var ref = composeRefs.useComposedRefs(forwardedRef, ownRef);
  var tooltipRect = rect.useRect(ownRef, {
    observe: isVisible
  });
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Comp, _extends({
    role: hasAriaLabel ? undefined : "tooltip"
  }, props, {
    ref: ref,
    "data-reach-tooltip": "",
    id: hasAriaLabel ? undefined : id,
    style: _extends({}, style, getStyles(position, triggerRect, tooltipRect))
  }), label), hasAriaLabel && /*#__PURE__*/React.createElement(visuallyHidden.VisuallyHidden, {
    role: "tooltip",
    id: id
  }, realAriaLabel || ariaLabel));
});


function getStyles(position, triggerRect, tooltipRect) {
  var haventMeasuredTooltipYet = !tooltipRect;

  if (haventMeasuredTooltipYet) {
    return {
      visibility: "hidden"
    };
  }

  return position(triggerRect, tooltipRect);
} // Default offset from the trigger (e.g., if the tooltip is positioned above,
// there will be 8px between the bottom of the tooltip and the top of the trigger).
// It feels awkward when it's perfectly aligned w/ the trigger


var OFFSET_DEFAULT = 8;
var positionTooltip = function positionTooltip(triggerRect, tooltipRect, offset) {
  if (offset === void 0) {
    offset = OFFSET_DEFAULT;
  }

  var _getDocumentDimension = getDocumentDimensions.getDocumentDimensions(),
      windowWidth = _getDocumentDimension.width,
      windowHeight = _getDocumentDimension.height;

  if (!triggerRect || !tooltipRect) {
    return {};
  }

  var collisions = {
    top: triggerRect.top - tooltipRect.height < 0,
    right: windowWidth < triggerRect.left + tooltipRect.width,
    bottom: windowHeight < triggerRect.bottom + tooltipRect.height + offset,
    left: triggerRect.left - tooltipRect.width < 0
  };
  var directionRight = collisions.right && !collisions.left;
  var directionUp = collisions.bottom && !collisions.top;
  return {
    left: directionRight ? triggerRect.right - tooltipRect.width + window.pageXOffset + "px" : triggerRect.left + window.pageXOffset + "px",
    top: directionUp ? triggerRect.top - offset - tooltipRect.height + window.pageYOffset + "px" : triggerRect.top + offset + triggerRect.height + window.pageYOffset + "px"
  };
};
/**
 * This is a workaround for using tooltips with disabled controls in Safari.
 * Safari fires `pointerenter` but does not fire `pointerleave`, and
 * `onPointerEventLeave` added to the trigger element will not work.
 *
 * TODO: We may remove or modiify this behavior in a future version. Direction
 * from WAI-ARIA needed for guidance on handling disabled triggers. Tooltips
 * must be accessible by keyboard, and disabled form controls are generally
 * excluded from the tab sequence.
 *
 * @see https://github.com/reach/reach-ui/issues/564
 * @see https://github.com/w3c/aria-practices/issues/128#issuecomment-588625727
 */

function useDisabledTriggerOnSafari(_ref5) {
  var disabled = _ref5.disabled,
      isVisible = _ref5.isVisible,
      ref = _ref5.ref;
  React.useEffect(function () {
    if (!(typeof window !== "undefined" && "PointerEvent" in window) || !disabled || !isVisible) {
      return;
    }

    var ownerDocument$1 = ownerDocument.getOwnerDocument(ref.current);

    function handleMouseMove(event) {
      if (!isVisible) {
        return;
      }

      if (event.target instanceof Element && event.target.closest("[data-reach-tooltip-trigger][data-state='tooltip-visible']")) {
        return;
      }

      send({
        type: TooltipEvents.GlobalMouseMove
      });
    }

    ownerDocument$1.addEventListener("mousemove", handleMouseMove);
    return function () {
      ownerDocument$1.removeEventListener("mousemove", handleMouseMove);
    };
  }, [disabled, isVisible, ref]);
} ////////////////////////////////////////////////////////////////////////////////

/**
 * Send an event to our state machine to find the next state from the current
 * state + action.
 *
 * It also manages lifecycles of the machine, (enter/leave hooks on the state
 * chart)
 *
 * @param event
 * @param payload
 */


function send(event) {
  var _transition = transition(state, event),
      value = _transition.value,
      context = _transition.context,
      changed = _transition.changed;

  if (changed) {
    state = {
      value: value,
      context: context
    };
    notify();
  }
}

function transition(currentState, event) {
  var stateDef = chart.states[currentState.value];
  var nextState = stateDef && stateDef.on && stateDef.on[event.type]; // Really useful for debugging
  // console.log({ event, state, nextState, contextId: context.id });
  // !nextState && console.log("no transition taken");

  if (!nextState) {
    return _extends({}, currentState, {
      changed: false
    });
  }

  if (stateDef && stateDef.leave) {
    stateDef.leave(currentState.context, event);
  }

  event.type;
      var payload = _objectWithoutPropertiesLoose(event, _excluded4); // TODO: Use actions instead of directly setting context


  var context = _extends({}, state.context, payload);

  var nextStateValue = typeof nextState === "string" ? nextState : nextState.target;
  var nextDef = chart.states[nextStateValue];

  if (nextDef && nextDef.enter) {
    nextDef.enter(currentState.context, event);
  }

  return {
    value: nextStateValue,
    context: context,
    changed: true
  };
}

function isTooltipVisible(id, initial) {
  return state.context.id === id && (initial ? state.value === TooltipStates.Visible : state.value === TooltipStates.Visible || state.value === TooltipStates.LeavingVisible);
} ////////////////////////////////////////////////////////////////////////////////

exports.LEAVE_TIMEOUT = LEAVE_TIMEOUT;
exports.MOUSE_REST_TIMEOUT = MOUSE_REST_TIMEOUT;
exports.Tooltip = Tooltip;
exports.TooltipPopup = TooltipPopup;
exports.default = Tooltip;
exports.positionTooltip = positionTooltip;
exports.useTooltip = useTooltip;
