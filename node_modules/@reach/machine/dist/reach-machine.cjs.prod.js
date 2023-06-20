'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var fsm = require('@xstate/fsm');
var typeCheck = require('@reach/utils/type-check');
var useConstant = require('@reach/utils/use-constant');

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

var getServiceState = function getServiceState(service) {
  var currentValue;
  service.subscribe(function (state) {
    currentValue = state;
  }).unsubscribe();
  return currentValue;
};
/**
 * This `useMachine` works very similiarly to what you get from `@xstate/react`
 * with some additions.
 *  - A second argument `refs` is passed to send all of our refs into our
 *    machine's contextual data object.
 *  - We wrap the `send` function so that refs are updated included in all of
 *    our events so we can use their current value (generally DOM nodes)
 *    anywhere in our actions.
 *  - We initialize the machine inside the component rather than throwing an
 *    error if an outside initializer creates a value that doesn't match. This
 *    is useful as some components may need a different initial state or some
 *    initial data based on props. We should *generally* just update the state
 *    with an event via useEffect and depend on a static initial value, but this
 *    is difficult if that initial value matters for SSR or to prevent some
 *    layout jank before the first paint. I don't think there's a problem with
 *    this approach, but we'll see what happens.
 *
 * @param initialMachine
 * @param refs
 */


function useMachine(initialMachine, refs, DEBUG) {
  // State machine should not change between renders, so let's store it in a
  // ref. This should also help if we need to use a creator function to inject
  // dynamic initial state values based on props.
  var machineRef = React.useRef(initialMachine);
  var service = useConstant.useConstant(function () {
    return fsm.interpret(machineRef.current).start();
  });
  var lastEventType = React.useRef(null);

  var _React$useState = React.useState(function () {
    return getServiceState(service);
  }),
      state = _React$useState[0],
      setState = _React$useState[1]; // This function reference will change on every render if we just pass on
  // current.matches, but it shouldn't change unless the current value is
  // updated. This was causing some lagginess when profiling in Listbox but
  // is probably an issue everywhere since the parent components that handle
  // state logic at the top might re-create context on each render as a
  // result of this change.
  // Add refs to every event so we can use them to perform actions.


  var send = React.useCallback(function (rawEvent) {
    var event = typeCheck.isString(rawEvent) ? {
      type: rawEvent
    } : rawEvent;
    var refValues = unwrapRefs(refs);
    service.send(_extends({}, event, {
      lastEventType: lastEventType.current,
      refs: refValues
    }));
    lastEventType.current = event.type;
  }, // We can disable the lint warning here. Refs will always be refs
  // (TypeScript enforced!) and should not trigger a re-render. The state
  // machine service persist for the life of the component.
  // eslint-disable-next-line react-hooks/exhaustive-deps
  [DEBUG]);
  React.useEffect(function () {
    service.subscribe(function setStateIfChanged(newState) {
      if (newState.changed) {
        setState(newState);
      }
    });
    return function () {
      service.stop();
    };
  }, [service]);
  React.useEffect(function () {
  }, [DEBUG, state]); // We are going to pass along our state without the actions to avoid excess
  // renders when the reference changes. We haven't really needed them at this
  // point, but if we do we can maybe reconsider this approach.

  var memoizedState = React.useMemo(function () {
    return _extends({}, state, {
      matches: function matches(value) {
        return value === state.value;
      }
    });
  }, // eslint-disable-next-line react-hooks/exhaustive-deps
  [state.changed, state.context, state.value]);
  return [memoizedState, send, service];
}
/**
 * Converts an object with React refs into an object with the same keys and
 * the current value of those refs.
 *
 * @param refs
 */

function unwrapRefs(refs) {
  return Object.entries(refs).reduce(function (value, _ref) {
    var name = _ref[0],
        ref = _ref[1];
    value[name] = ref.current;
    return value;
  }, {});
}
/**
 * Most of the time you want to create a static state machine outside of your
 * component, but in some cases we may need data from props in the first render
 * cycle. We can create our machine in each component IF we only create it once
 * and guarantee that it never changes between renders.
 *
 * This hook can take a machine definition created by a function inline to use
 * values defined in the component, and we never change the machine for the
 * life of the component.
 *
 * @param machineDefinition
 * @param options
 */

function useCreateMachine(machineDefinition, options) {
  return useConstant.useConstant(function () {
    return fsm.createMachine(machineDefinition, options);
  });
} ////////////////////////////////////////////////////////////////////////////////

Object.defineProperty(exports, 'InterpreterStatus', {
  enumerable: true,
  get: function () {
    return fsm.InterpreterStatus;
  }
});
Object.defineProperty(exports, 'assign', {
  enumerable: true,
  get: function () {
    return fsm.assign;
  }
});
Object.defineProperty(exports, 'createMachine', {
  enumerable: true,
  get: function () {
    return fsm.createMachine;
  }
});
Object.defineProperty(exports, 'interpret', {
  enumerable: true,
  get: function () {
    return fsm.interpret;
  }
});
exports.unwrapRefs = unwrapRefs;
exports.useCreateMachine = useCreateMachine;
exports.useMachine = useMachine;
