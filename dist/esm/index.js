function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

import UnboundOutboundLink from './components/OutboundLink';
import * as Defaults from './core';
var initialize = Defaults.initialize;
export { initialize };
var addTrackers = Defaults.addTrackers;
export { addTrackers };
var gtag = Defaults.gtag;
export { gtag };
var set = Defaults.set;
export { set };
var send = Defaults.send;
export { send };
var pageview = Defaults.pageview;
export { pageview };
var modalview = Defaults.modalview;
export { modalview };
var timing = Defaults.timing;
export { timing };
var event = Defaults.event;
export { event };
var exception = Defaults.exception;
export { exception };
var plugin = Defaults.plugin;
export { plugin };
var outboundLink = Defaults.outboundLink;
export { outboundLink };
var testModeAPI = Defaults.testModeAPI;
export { testModeAPI };
UnboundOutboundLink.origTrackLink = UnboundOutboundLink.trackLink;
UnboundOutboundLink.trackLink = Defaults.outboundLink;
export var OutboundLink = UnboundOutboundLink;
export default _objectSpread(_objectSpread({}, Defaults), {}, {
  OutboundLink: OutboundLink
});