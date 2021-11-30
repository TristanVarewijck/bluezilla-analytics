webpackHotUpdate("main",{

/***/ "./src/components/Market/Accordion.js":
/*!********************************************!*\
  !*** ./src/components/Market/Accordion.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__react_refresh_utils__, __react_refresh_error_overlay__) {/* harmony import */ var d3__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! d3 */ "./node_modules/d3/src/index.js");
/* harmony import */ var react_bootstrap_Button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-bootstrap/Button */ "./node_modules/react-bootstrap/esm/Button.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__);
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");
__webpack_require__.$Refresh$.setup(module.i);

var _jsxFileName = "/Users/tristanvarewijck/Desktop/first-react-project/crypto-dashboard/src/components/Market/Accordion.js";




const textData = __webpack_require__(/*! ./data/coinText.json */ "./src/components/Market/data/coinText.json");

let id;
console.log(textData[id]);

const InfoAccordion = ({
  id,
  active
}) => {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("div", {
    className: "accordion",
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("div", {
      className: (active === id ? "show" : "") + " accordionContent",
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("h3", {
        children: id
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 12,
        columnNumber: 17
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("p", {
        children: textData[id]
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 13,
        columnNumber: 17
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("a", {
        href: "#",
        class: "standard-btn-coloured btn-lg",
        children: "Click Me"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 14,
        columnNumber: 17
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 13
    }, undefined)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 10,
    columnNumber: 9
  }, undefined);
};

_c = InfoAccordion;
/* harmony default export */ __webpack_exports__["default"] = (InfoAccordion);

var _c;

__webpack_require__.$Refresh$.register(_c, "InfoAccordion");

const currentExports = __react_refresh_utils__.getModuleExports(module.i);
__react_refresh_utils__.registerExportsForReactRefresh(currentExports, module.i);

if (true) {
  const isHotUpdate = !!module.hot.data;
  const prevExports = isHotUpdate ? module.hot.data.prevExports : null;

  if (__react_refresh_utils__.isReactRefreshBoundary(currentExports)) {
    module.hot.dispose(
      /**
       * A callback to performs a full refresh if React has unrecoverable errors,
       * and also caches the to-be-disposed module.
       * @param {*} data A hot module data object from Webpack HMR.
       * @returns {void}
       */
      function hotDisposeCallback(data) {
        // We have to mutate the data object to get data registered and cached
        data.prevExports = currentExports;
      }
    );
    module.hot.accept(
      /**
       * An error handler to allow self-recovering behaviours.
       * @param {Error} error An error occurred during evaluation of a module.
       * @returns {void}
       */
      function hotErrorHandler(error) {
        if (
          typeof __react_refresh_error_overlay__ !== 'undefined' &&
          __react_refresh_error_overlay__
        ) {
          __react_refresh_error_overlay__.handleRuntimeError(error);
        }

        if (typeof __react_refresh_test__ !== 'undefined' && __react_refresh_test__) {
          if (window.onHotAcceptError) {
            window.onHotAcceptError(error.message);
          }
        }

        __webpack_require__.c[module.i].hot.accept(hotErrorHandler);
      }
    );

    if (isHotUpdate) {
      if (
        __react_refresh_utils__.isReactRefreshBoundary(prevExports) &&
        __react_refresh_utils__.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)
      ) {
        module.hot.invalidate();
      } else {
        __react_refresh_utils__.enqueueUpdate(
          /**
           * A function to dismiss the error overlay after performing React refresh.
           * @returns {void}
           */
          function updateCallback() {
            if (
              typeof __react_refresh_error_overlay__ !== 'undefined' &&
              __react_refresh_error_overlay__
            ) {
              __react_refresh_error_overlay__.clearRuntimeErrors();
            }
          }
        );
      }
    }
  } else {
    if (isHotUpdate && __react_refresh_utils__.isReactRefreshBoundary(prevExports)) {
      module.hot.invalidate();
    }
  }
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js"), __webpack_require__(/*! ./node_modules/react-dev-utils/refreshOverlayInterop.js */ "./node_modules/react-dev-utils/refreshOverlayInterop.js")))

/***/ }),

/***/ "./src/components/Market/data/coinText.json":
/*!**************************************************!*\
  !*** ./src/components/Market/data/coinText.json ***!
  \**************************************************/
/*! exports provided: bscpad, ethpad, gamezone, adapad, kccpad, nftlaunch, pulsepad, tronpad, velas, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"bscpad\":\"The BSC Launch Pad is the first decentralized IDO platform for the Binance Smart Chain Network. BSCPad will empower crypto currency projects with the ability to distribute tokens and raise liquidity\",\"ethpad\":\"ETHPad (ETHPAD) is a relatively new platform that provides complete access to cross-chain launches. It claims to be the world's first deflationary and decentralized IDO platform, modeled around EIP-1559.\",\"gamezone\":\"GameZone is on a mission to support the next generation of creators and innovators in the blockchain-based gaming space\",\"adapad\":\"The first deflationary launchpad on the Cardano ecosystem. The main deflationary mechanisms of ADAPad include a 10% fee on all token sells and early unstaking fees of up to 25% Sell Fees distribution. 7.5% of the fees will be rewarded to stakers in ADA.\",\"kccpad\":\"KCCPAD IS THE FIRST DECENTRALIZED & DEFLATIONARY IDO PLATFORM FOR THE KUCOIN COMMUNITY CHAIN. KCCPAD is a deflationary launch pad, there is a 1% fee for selling, a 25% fee for early unstaking and projects will need to commit to buying and burning tokens to launch their IDOs.\",\"nftlaunch\":\"NFTLaunch is the FIRST Deflationary Marketplace, Charity, and. NFTLaunch Pad all in ONE convenient package! Deflationary\",\"pulsepad\":\"PulsePad is the premier IDO platform for projects building on PulseChain — a new Ethereum sister chain designed to provide an idyllic environment for building powerful new applications, while simultaneously reducing the load on the Ethereum network.\",\"tronpad\":\"TRONPAD IS THE FIRST LAUNCHPAD BUILT ON AND PARTNERED WITH THE TRON NETWORK. TRONPAD will empower crypto currency projects with the ability to distribute tokens and raise liquidity.\",\"velas\":\"Velas coin (VLX) is used for transactions, payments, fees and for supporting Proof-of-Stake consensus. Staking allows block producers (validators and their delegators) to provide transaction consensus and receive staking incentives for honest block production\"}");

/***/ })

})
//# sourceMappingURL=main.d049c0704ab1b8a15d6a.hot-update.js.map