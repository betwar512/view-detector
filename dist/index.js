function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var React = _interopDefault(require('react'));

var ViewportContext = React.createContext({
  width: 0,
  height: 0,
  isDesktop: true,
  isMobile: false,
  isTable: false,
  isPortrait: true,
  orientation: 'Portrait'
});
var maxMobileWidth = 515;
var maxTableWidth = 820;

var ViewportProvider = function ViewportProvider(_ref) {
  var children = _ref.children;

  var _React$useState = React.useState({
    width: window.innerWidth,
    height: window.innerHeight,
    isMobile: window.innerWidth < maxMobileWidth,
    isTable: window.innerWidth > maxMobileWidth && window.innerWidth <= maxTableWidth,
    isDesktop: window.innerWidth > maxTableWidth,
    isPortrait: window.innerWidth < window.innerHeight,
    orientation: window.innerWidth > window.innerHeight ? 'LandScape' : 'Portrait'
  }),
      details = _React$useState[0],
      setDetails = _React$useState[1];

  var handleWindowResize = function handleWindowResize() {
    var isPortrait = window.innerWidth < window.innerHeight;
    var width = isPortrait ? window.innerWidth : window.innerHeight;
    setDetails({
      width: window.innerWidth,
      height: window.innerHeight,
      isMobile: width < maxMobileWidth,
      isTable: width > maxMobileWidth && width <= maxTableWidth,
      isDesktop: width > maxTableWidth,
      isPortrait: window.innerWidth < window.innerHeight,
      orientation: window.innerWidth > window.innerHeight ? 'LandScape' : 'Portrait'
    });
  };

  React.useEffect(function () {
    window.addEventListener('resize', handleWindowResize);
    return function () {
      return window.removeEventListener('resize', handleWindowResize);
    };
  }, []);
  return React.createElement(ViewportContext.Provider, {
    value: details
  }, children);
};

var useViewport = function useViewport() {
  return React.useContext(ViewportContext);
};

exports.ViewportContext = ViewportContext;
exports.default = ViewportProvider;
exports.useViewport = useViewport;
//# sourceMappingURL=index.js.map
