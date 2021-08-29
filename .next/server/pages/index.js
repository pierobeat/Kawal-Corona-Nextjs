(function() {
var exports = {};
exports.id = "pages/index";
exports.ids = ["pages/index"];
exports.modules = {

/***/ "./config.json":
/*!*********************!*\
  !*** ./config.json ***!
  \*********************/
/***/ (function(module) {

"use strict";
module.exports = JSON.parse('{"app":{"version":1},"kawal_corona":{"base_url":"https://api.kawalcorona.com","indonesia":"/indonesia","provinsi":"/provinsi"},"global-api":{"base_url":"https://api.covid19api.com","total_live":"/total/dayone/country"}}');

/***/ }),

/***/ "./components/Dashboard/CardStatus.js":
/*!********************************************!*\
  !*** ./components/Dashboard/CardStatus.js ***!
  \********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_number_format__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-number-format */ "react-number-format");
/* harmony import */ var react_number_format__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_number_format__WEBPACK_IMPORTED_MODULE_1__);

var _jsxFileName = "D:\\web_development_tutorial\\binar_academy\\nodeproject\\belajar-nextjs\\components\\Dashboard\\CardStatus.js";


const {
  sum
} = __webpack_require__(/*! ../../util/library.js */ "./util/library.js");

const CardStatus = props => {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    className: "row mt-3 ms-5 me-5 mb-2",
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: "col-sm-12 col-md-6 col-lg-6 col-xl-3",
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: "card bg-danger img-card box-primary-shadow border",
        style: {
          width: "16.5rem"
        },
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          className: "card-body",
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            className: "d-flex",
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
              className: "text-white",
              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
                className: "text-white mb-0",
                children: " TOTAL POSITIF"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 13,
                columnNumber: 33
              }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h2", {
                className: "mb-0 number-font",
                children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((react_number_format__WEBPACK_IMPORTED_MODULE_1___default()), {
                  value: sum("Confirmed", props),
                  displayType: "text",
                  thousandSeparator: ",",
                  decimalScale: ".",
                  defaultValue: 0
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 15,
                  columnNumber: 37
                }, undefined)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 14,
                columnNumber: 33
              }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
                className: "text-white mb-0",
                children: "Orang"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 17,
                columnNumber: 33
              }, undefined)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 12,
              columnNumber: 29
            }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
              className: "ms-auto",
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("img", {
                src: "images/positif.png",
                width: "70",
                height: "70",
                alt: "positif"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 20,
                columnNumber: 33
              }, undefined)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 19,
              columnNumber: 29
            }, undefined)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 11,
            columnNumber: 25
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 10,
          columnNumber: 21
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 9,
        columnNumber: 17
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 13
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: "col-sm-12 col-md-6 col-lg-6 col-xl-3",
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: "card bg-success img-card box-primary-shadow border",
        style: {
          width: "16.5rem"
        },
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          className: "card-body",
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            className: "d-flex",
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
              className: "text-white",
              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
                className: "text-white mb-0",
                children: " TOTAL SEMBUH"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 32,
                columnNumber: 33
              }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h2", {
                className: "mb-0 number-font",
                children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((react_number_format__WEBPACK_IMPORTED_MODULE_1___default()), {
                  value: sum("Recovered", props),
                  displayType: "text",
                  thousandSeparator: ",",
                  decimalScale: ".",
                  defaultValue: 0
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 34,
                  columnNumber: 37
                }, undefined)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 33,
                columnNumber: 33
              }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
                className: "text-white mb-0",
                children: "Orang"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 36,
                columnNumber: 33
              }, undefined)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 31,
              columnNumber: 29
            }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
              className: "ms-auto",
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("img", {
                src: "images/sembuh.png",
                width: "70",
                height: "70",
                alt: "positif"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 39,
                columnNumber: 33
              }, undefined)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 38,
              columnNumber: 29
            }, undefined)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 30,
            columnNumber: 25
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 29,
          columnNumber: 21
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 28,
        columnNumber: 17
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 13
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: "col-sm-12 col-md-6 col-lg-6 col-xl-3",
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: "card bg-secondary img-card box-primary-shadow border",
        style: {
          width: "16.5rem"
        },
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          className: "card-body",
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            className: "d-flex",
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
              className: "text-white",
              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
                className: "text-white mb-0",
                children: " TOTAL MENINGGAL"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 51,
                columnNumber: 33
              }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h2", {
                className: "mb-0 number-font",
                children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((react_number_format__WEBPACK_IMPORTED_MODULE_1___default()), {
                  value: sum("Deaths", props),
                  displayType: "text",
                  thousandSeparator: ",",
                  decimalScale: ".",
                  defaultValue: 0
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 53,
                  columnNumber: 37
                }, undefined)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 52,
                columnNumber: 33
              }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
                className: "text-white mb-0",
                children: "Orang"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 55,
                columnNumber: 33
              }, undefined)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 50,
              columnNumber: 29
            }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
              className: "ms-auto",
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("img", {
                src: "images/meninggal.png",
                width: "70",
                height: "70",
                alt: "positif"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 58,
                columnNumber: 33
              }, undefined)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 57,
              columnNumber: 29
            }, undefined)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 49,
            columnNumber: 25
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 48,
          columnNumber: 21
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 47,
        columnNumber: 17
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 13
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: "col-sm-12 col-md-6 col-lg-6 col-xl-3",
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: "card bg-info img-card box-primary-shadow border",
        style: {
          width: "16.5rem"
        },
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          className: "card-body",
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            className: "d-flex",
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
              className: "text-white",
              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
                className: "text-white mb-0",
                children: " TOTAL AKTIF"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 70,
                columnNumber: 33
              }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h2", {
                className: "mb-0 number-font",
                children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((react_number_format__WEBPACK_IMPORTED_MODULE_1___default()), {
                  value: sum("Active", props),
                  displayType: "text",
                  thousandSeparator: ",",
                  decimalScale: ".",
                  defaultValue: 0
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 72,
                  columnNumber: 37
                }, undefined)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 71,
                columnNumber: 33
              }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
                className: "text-white mb-0",
                children: "Orang"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 74,
                columnNumber: 33
              }, undefined)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 69,
              columnNumber: 29
            }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
              className: "ms-auto",
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("img", {
                src: "images/active1.png",
                width: "70",
                height: "70",
                alt: "positif"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 77,
                columnNumber: 33
              }, undefined)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 76,
              columnNumber: 29
            }, undefined)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 68,
            columnNumber: 25
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 67,
          columnNumber: 21
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 66,
        columnNumber: 17
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 65,
      columnNumber: 13
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 7,
    columnNumber: 9
  }, undefined);
};

/* harmony default export */ __webpack_exports__["default"] = (CardStatus);

/***/ }),

/***/ "./components/Dashboard/Grafik.js":
/*!****************************************!*\
  !*** ./components/Dashboard/Grafik.js ***!
  \****************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_chartjs_2__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-chartjs-2 */ "react-chartjs-2");
/* harmony import */ var react_chartjs_2__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_chartjs_2__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_number_format__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-number-format */ "react-number-format");
/* harmony import */ var react_number_format__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_number_format__WEBPACK_IMPORTED_MODULE_3__);

var _jsxFileName = "D:\\web_development_tutorial\\binar_academy\\nodeproject\\belajar-nextjs\\components\\Dashboard\\Grafik.js";




const {
  sum,
  getAllMonth
} = __webpack_require__(/*! ../../util/library.js */ "./util/library.js");

const Grafik = props => {
  let dataCovid = null;
  let data = null;

  if (!props.isGlobal) {
    dataCovid = getAllMonth(props);
    data = {
      labels: dataCovid.label,
      datasets: [{
        label: "Jumlah Positif",
        fill: false,
        lineTension: 0.1,
        backgroundColor: "rgba(229,56,50,0.4)",
        borderColor: "rgba(229, 56, 56, 1)",
        borderCapStyle: "butt",
        borderDash: [],
        borderDashOffset: 0.0,
        borderJoinStyle: "miter",
        pointBorderColor: "rgba(229,56, 56, 1)",
        pointBackgroundColor: "#fff",
        pointBorderWidth: 1,
        pointHoverRadius: 10,
        pointHoverBackgroundColor: "rgba(229,56, 56, 1)",
        pointHoverBorderColor: "rgba(220,220,220,1)",
        pointBorderWidth: 2,
        pointRadius: 1,
        pointHitRadius: 10,
        data: dataCovid.positif
      }, {
        label: "Jumlah sembuh",
        fill: false,
        lineTension: 0.1,
        backgroundColor: "blue",
        borderColor: "blue",
        borderCapStyle: "butt",
        borderDash: [],
        borderDashOffset: 0.0,
        borderJoinStyle: "miter",
        pointBorderColor: "blue",
        pointBackgroundColor: "#fff",
        pointBorderWidth: 1,
        pointHoverRadius: 10,
        pointHoverBackgroundColor: "blue",
        pointHoverBorderColor: "blue",
        pointBorderWidth: 2,
        pointRadius: 1,
        pointHitRadius: 10,
        data: dataCovid.sembuh
      }, {
        label: "Jumlah meninggal",
        fill: false,
        lineTension: 0.1,
        backgroundColor: "grey",
        borderColor: "grey",
        borderCapStyle: "butt",
        borderDash: [],
        borderDashOffset: 0.0,
        borderJoinStyle: "miter",
        pointBorderColor: "grey",
        pointBackgroundColor: "#fff",
        pointBorderWidth: 1,
        pointHoverRadius: 10,
        pointHoverBackgroundColor: "grey",
        pointHoverBorderColor: "grey",
        pointBorderWidth: 2,
        pointRadius: 1,
        pointHitRadius: 10,
        data: dataCovid.meninggal
      }]
    };
  }

  const dataCovidPie = {
    labels: ["positif", "Sembuh", "meninggal"],
    datasets: [{
      data: [sum("Confirmed", props), sum("Recovered", props), sum("Deaths", props)],
      backgroundColor: ["#FF6384", "#36A2EB", "#FFCE56"],
      HoverBackgroundColor: ["#FF6384", "#36A2EB", "#FFCE56"]
    }]
  };
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    className: "row mb-5",
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: "col-lg-12 col-md-12 col-sm-12 col-xl-12",
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: "card overflow-hidden bg-white",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          className: "card-header",
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h3", {
            className: "card-titel",
            children: props.isGlobal ? "Statistik Virus Corona di Dunia" : "Statistik Virus Corona di Indonesia"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 112,
            columnNumber: 25
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 111,
          columnNumber: 21
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          className: "card-body",
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            className: "chart-wrapper",
            children: props.isGlobal ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_chartjs_2__WEBPACK_IMPORTED_MODULE_2__.Pie, {
              data: dataCovidPie,
              width: 600,
              height: 600,
              options: {
                maintainAspectRatio: false
              }
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 119,
              columnNumber: 29
            }, undefined) : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_chartjs_2__WEBPACK_IMPORTED_MODULE_2__.Line, {
              data: data,
              width: 100,
              height: 40
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 121,
              columnNumber: 29
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 117,
            columnNumber: 25
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 116,
          columnNumber: 21
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 110,
        columnNumber: 17
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 109,
      columnNumber: 13
    }, undefined)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 108,
    columnNumber: 9
  }, undefined);
};

/* harmony default export */ __webpack_exports__["default"] = (Grafik);

/***/ }),

/***/ "./components/Dashboard/Table.js":
/*!***************************************!*\
  !*** ./components/Dashboard/Table.js ***!
  \***************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_number_format__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-number-format */ "react-number-format");
/* harmony import */ var react_number_format__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_number_format__WEBPACK_IMPORTED_MODULE_2__);


var _jsxFileName = "D:\\web_development_tutorial\\binar_academy\\nodeproject\\belajar-nextjs\\components\\Dashboard\\Table.js";



const Table = props => {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: "row mb-5",
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: "col-mb-12 col-md-12 col-lg-12 col-xl-14",
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          className: "card",
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            className: "card-header",
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h3", {
              className: "card-title",
              children: props.isGlobal ? "Data Kasus Covid-19 Di Dunia" : "Data Kasus Covid-19 Di Indonesia"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 11,
              columnNumber: 29
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 10,
            columnNumber: 25
          }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            className: "card-body",
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
              className: "table-responsive",
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("table", {
                className: "table table-bordered table-hover mb-0 text-nowrap",
                children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("thead", {
                  children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("tr", {
                    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("th", {
                      children: "No"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 20,
                      columnNumber: 45
                    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("th", {
                      children: props.isGlobal ? "Negara" : "Provinsi"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 21,
                      columnNumber: 45
                    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("th", {
                      children: "Positif"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 22,
                      columnNumber: 45
                    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("th", {
                      children: "Sembuh"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 23,
                      columnNumber: 45
                    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("th", {
                      children: "Meninggal"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 24,
                      columnNumber: 45
                    }, undefined)]
                  }, void 0, true, {
                    fileName: _jsxFileName,
                    lineNumber: 19,
                    columnNumber: 41
                  }, undefined)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 18,
                  columnNumber: 37
                }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("tbody", {
                  children: props.isGlobal ? props.data && props.data.map((item, index) => {
                    return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("tr", {
                      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("td", {
                        children: index + 1
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 32,
                        columnNumber: 49
                      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("td", {
                        children: item.attributes.Country_Region
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 33,
                        columnNumber: 49
                      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("td", {
                        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((react_number_format__WEBPACK_IMPORTED_MODULE_2___default()), {
                          value: item.attributes.Confirmed,
                          displayType: "text",
                          thousandSeparator: ",",
                          decimalSeparator: ".",
                          defaultValue: 0
                        }, void 0, false, {
                          fileName: _jsxFileName,
                          lineNumber: 35,
                          columnNumber: 53
                        }, undefined)
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 34,
                        columnNumber: 49
                      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("td", {
                        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((react_number_format__WEBPACK_IMPORTED_MODULE_2___default()), {
                          value: item.attributes.Recovered,
                          displayType: "text",
                          thousandSeparator: ",",
                          decimalSeparator: ".",
                          defaultValue: 0
                        }, void 0, false, {
                          fileName: _jsxFileName,
                          lineNumber: 42,
                          columnNumber: 53
                        }, undefined)
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 41,
                        columnNumber: 49
                      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("td", {
                        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((react_number_format__WEBPACK_IMPORTED_MODULE_2___default()), {
                          value: item.attributes.Deaths,
                          displayType: "text",
                          thousandSeparator: ",",
                          decimalSeparator: ".",
                          defaultValue: 0
                        }, void 0, false, {
                          fileName: _jsxFileName,
                          lineNumber: 49,
                          columnNumber: 53
                        }, undefined)
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 48,
                        columnNumber: 49
                      }, undefined)]
                    }, index, true, {
                      fileName: _jsxFileName,
                      lineNumber: 31,
                      columnNumber: 49
                    }, undefined);
                  }) : props.provinsi && props.provinsi.map((item, index) => {
                    return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("tr", {
                      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("td", {
                        children: index + 1
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 62,
                        columnNumber: 49
                      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("td", {
                        children: item.attributes.Provinsi
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 63,
                        columnNumber: 49
                      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("td", {
                        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((react_number_format__WEBPACK_IMPORTED_MODULE_2___default()), {
                          value: item.attributes.Kasus_Posi,
                          displayType: "text",
                          thousandSeparator: ",",
                          decimalSeparator: ".",
                          defaultValue: 0
                        }, void 0, false, {
                          fileName: _jsxFileName,
                          lineNumber: 65,
                          columnNumber: 53
                        }, undefined)
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 64,
                        columnNumber: 49
                      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("td", {
                        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((react_number_format__WEBPACK_IMPORTED_MODULE_2___default()), {
                          value: item.attributes.Kasus_Semb,
                          displayType: "text",
                          thousandSeparator: ",",
                          decimalSeparator: ".",
                          defaultValue: 0
                        }, void 0, false, {
                          fileName: _jsxFileName,
                          lineNumber: 72,
                          columnNumber: 53
                        }, undefined)
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 71,
                        columnNumber: 49
                      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("td", {
                        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((react_number_format__WEBPACK_IMPORTED_MODULE_2___default()), {
                          value: item.attributes.Kasus_Meni,
                          displayType: "text",
                          thousandSeparator: ",",
                          decimalSeparator: ".",
                          defaultValue: 0
                        }, void 0, false, {
                          fileName: _jsxFileName,
                          lineNumber: 79,
                          columnNumber: 53
                        }, undefined)
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 78,
                        columnNumber: 49
                      }, undefined)]
                    }, index, true, {
                      fileName: _jsxFileName,
                      lineNumber: 61,
                      columnNumber: 49
                    }, undefined);
                  })
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 27,
                  columnNumber: 37
                }, undefined)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 17,
                columnNumber: 33
              }, undefined)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 16,
              columnNumber: 29
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 15,
            columnNumber: 25
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 9,
          columnNumber: 21
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 8,
        columnNumber: 17
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 13
    }, undefined)
  }, void 0, false);
};

/* harmony default export */ __webpack_exports__["default"] = (Table);

/***/ }),

/***/ "./components/Dashboard/indexPage.js":
/*!*******************************************!*\
  !*** ./components/Dashboard/indexPage.js ***!
  \*******************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Layout_Header__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Layout/Header */ "./components/Layout/Header.js");
/* harmony import */ var _Layout_Footer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Layout/Footer */ "./components/Layout/Footer.js");
/* harmony import */ var _CardStatus__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./CardStatus */ "./components/Dashboard/CardStatus.js");
/* harmony import */ var _Grafik__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Grafik */ "./components/Dashboard/Grafik.js");
/* harmony import */ var _Table__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Table */ "./components/Dashboard/Table.js");

var _jsxFileName = "D:\\web_development_tutorial\\binar_academy\\nodeproject\\belajar-nextjs\\components\\Dashboard\\indexPage.js";






function IndexPage(props) {
  const contentStyle = {
    minHeight: "90vh",
    top: "56px",
    backgroundColor: "#f1f1f9",
    overflowX: "hidden"
  };
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    style: {
      backgroundColor: "#f1f1f9"
    },
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Layout_Header__WEBPACK_IMPORTED_MODULE_1__.default, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 13
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: "container content position-relative",
      style: contentStyle,
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: "row",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          className: "col-12 d-flex justify-content-center text-center",
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
            className: "mt-5 h2",
            children: "KAWAL COVID-19"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 21,
            columnNumber: 25
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 20,
          columnNumber: 21
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          className: "col-12 d-flex justify-content-center text-center",
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
            className: "mt-3 f18",
            children: "Website Pemantauan terkini kasus Covid-19   "
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 24,
            columnNumber: 25
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 23,
          columnNumber: 21
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 19,
        columnNumber: 17
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_CardStatus__WEBPACK_IMPORTED_MODULE_3__.default, {
        isGlobal: props.isGlobal,
        data: props.data ? props.data : null
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 27,
        columnNumber: 17
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Grafik__WEBPACK_IMPORTED_MODULE_4__.default, {
        isGlobal: props.isGlobal,
        data: props.data ? props.data : null,
        statistik: props.statistik ? props.statistik : null
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 28,
        columnNumber: 17
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Table__WEBPACK_IMPORTED_MODULE_5__.default, {
        isGlobal: props.isGlobal,
        data: props.data ? props.data : null,
        provinsi: props.provinsi
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 29,
        columnNumber: 17
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 13
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Layout_Footer__WEBPACK_IMPORTED_MODULE_2__.default, {
      rightContent: "",
      leftContent: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: "ml-2 f08 font-weight-bold",
        children: "My-Tech @2021 All Right Reserved"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 33,
        columnNumber: 25
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 13
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 16,
    columnNumber: 9
  }, this);
}

/* harmony default export */ __webpack_exports__["default"] = (IndexPage);

/***/ }),

/***/ "./components/Layout/Footer.js":
/*!*************************************!*\
  !*** ./components/Layout/Footer.js ***!
  \*************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);

var _jsxFileName = "D:\\web_development_tutorial\\binar_academy\\nodeproject\\belajar-nextjs\\components\\Layout\\Footer.js";


const Footer = props => {
  if (!props.leftContent && !props.rightContent) {
    return null;
  }

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("footer", {
    className: "main-footer clearfix fixed-bottom bg-white border-top",
    children: [props.rightContent && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: "float-right d-none d-sm-inline",
      style: {
        color: "#6c757d"
      },
      children: props.rightContent
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 17
    }, undefined), props.leftContent && props.leftContent]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 9,
    columnNumber: 9
  }, undefined);
};

Footer.propTypes = {
  leftContent: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().element),
  rightConten: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string)
};
/* harmony default export */ __webpack_exports__["default"] = (Footer);

/***/ }),

/***/ "./components/Layout/Header.js":
/*!*************************************!*\
  !*** ./components/Layout/Header.js ***!
  \*************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_bootstrap_Nav__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-bootstrap/Nav */ "react-bootstrap/Nav");
/* harmony import */ var react_bootstrap_Nav__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap_Nav__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);


var _jsxFileName = "D:\\web_development_tutorial\\binar_academy\\nodeproject\\belajar-nextjs\\components\\Layout\\Header.js";




const Header = props => {
  const router = (0,next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter)();
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_1___default()), {
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("title", {
        children: "Kawal Covid"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 9,
        columnNumber: 19
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 13
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("nav", {
      className: "main-header navbar navbar-expand navbar-light navbar-white fixed-top border-bottom",
      style: {
        backgroundColor: "white"
      },
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: "container",
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          className: "mx-auto hidden-sm-down",
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((react_bootstrap_Nav__WEBPACK_IMPORTED_MODULE_2___default()), {
            variant: "pills",
            defaultActiveKey: router.pathname == "/" ? "link-0" : "link-1",
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((react_bootstrap_Nav__WEBPACK_IMPORTED_MODULE_2___default().Item), {
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((react_bootstrap_Nav__WEBPACK_IMPORTED_MODULE_2___default().Link), {
                eventKey: "link-0",
                href: "/",
                children: "Global"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 15,
                columnNumber: 33
              }, undefined)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 14,
              columnNumber: 29
            }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((react_bootstrap_Nav__WEBPACK_IMPORTED_MODULE_2___default().Item), {
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((react_bootstrap_Nav__WEBPACK_IMPORTED_MODULE_2___default().Link), {
                eventKey: "link-1",
                href: "indonesia",
                children: "Indonesia"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 18,
                columnNumber: 33
              }, undefined)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 17,
              columnNumber: 29
            }, undefined)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 13,
            columnNumber: 25
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 12,
          columnNumber: 21
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 11,
        columnNumber: 17
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 13
    }, undefined)]
  }, void 0, true);
};

/* harmony default export */ __webpack_exports__["default"] = (Header);

/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_Dashboard_indexPage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Dashboard/indexPage */ "./components/Dashboard/indexPage.js");
/* harmony import */ var isomorphic_fetch__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! isomorphic-fetch */ "isomorphic-fetch");
/* harmony import */ var isomorphic_fetch__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(isomorphic_fetch__WEBPACK_IMPORTED_MODULE_3__);

var _jsxFileName = "D:\\web_development_tutorial\\binar_academy\\nodeproject\\belajar-nextjs\\pages\\index.js";




const config = __webpack_require__(/*! ../config.json */ "./config.json");

class index extends react__WEBPACK_IMPORTED_MODULE_1__.Component {
  static async getInitialProps() {
    const data = await isomorphic_fetch__WEBPACK_IMPORTED_MODULE_3___default()(config['kawal_corona'].base_url);
    const items = await data.json();
    return {
      items
    };
  }

  render() {
    const {
      items
    } = this.props;
    return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Dashboard_indexPage__WEBPACK_IMPORTED_MODULE_2__.default, {
      isGlobal: true,
      data: items
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 13
    }, this);
  }

}

/* harmony default export */ __webpack_exports__["default"] = (index);

/***/ }),

/***/ "./util/library.js":
/*!*************************!*\
  !*** ./util/library.js ***!
  \*************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "sum": function() { return /* binding */ sum; },
/* harmony export */   "getAllMonth": function() { return /* binding */ getAllMonth; }
/* harmony export */ });
const sum = function (key, props) {
  if (props.isGlobal == false) {
    switch (key) {
      case 'Confirmed':
        return props.data[0].positif;

      case 'Recovered':
        return props.data[0].sembuh;

      case 'Deaths':
        return props.data[0].meninggal;

      case 'Active':
        return props.data[0].dirawat;

      default:
        return 0;
    }
  } else {
    switch (key) {
      case 'Confirmed':
        return props.data.reduce((sum, a) => {
          return sum + a.attributes.Confirmed;
        }, 0);

      case 'Recovered':
        return props.data.reduce((sum, a) => {
          return sum + a.attributes.Recovered;
        }, 0);

      case 'Deaths':
        return props.data.reduce((sum, a) => {
          return sum + a.attributes.Deaths;
        }, 0);

      case 'Active':
        return props.data.reduce((sum, a) => {
          return sum + a.attributes.Active;
        }, 0);

      default:
        return 0;
    }
  }
};
const getAllMonth = props => {
  const MonthName = ["Jan", "Feb", "Mar", "Apr", "Mei", "Jun", "Jul", "Agu", "Sep", "Okt", "Nov", "des"];
  let DateNow = new Date();
  let Day = null;
  let Month = null;
  let Year = null;
  let Label = [];
  let Positif = [];
  let Sembuh = [];
  let Meninggal = [];
  let Aktif = [];
  let Data = [];

  for (let value of props.statistik) {
    DateNow = new Date(value.Date);
    Day = DateNow.getDate();
    Month = DateNow.getMonth();
    Year = DateNow.getFullYear();
    Label.push(Day + " " + MonthName[Math.abs(Month)]);
    Aktif.push(value.Active);
    Positif.push(value.Confirmed);
    Sembuh.push(value.Recovered);
    Meninggal.push(value.Deaths);
  }

  Data = {
    label: Label,
    aktif: Aktif,
    sembuh: Sembuh,
    meninggal: Meninggal,
    positif: Positif
  };
  return Data;
};

/***/ }),

/***/ "isomorphic-fetch":
/*!***********************************!*\
  !*** external "isomorphic-fetch" ***!
  \***********************************/
/***/ (function(module) {

"use strict";
module.exports = require("isomorphic-fetch");;

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/***/ (function(module) {

"use strict";
module.exports = require("next/head");;

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/***/ (function(module) {

"use strict";
module.exports = require("next/router");;

/***/ }),

/***/ "prop-types":
/*!*****************************!*\
  !*** external "prop-types" ***!
  \*****************************/
/***/ (function(module) {

"use strict";
module.exports = require("prop-types");;

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ (function(module) {

"use strict";
module.exports = require("react");;

/***/ }),

/***/ "react-bootstrap/Nav":
/*!**************************************!*\
  !*** external "react-bootstrap/Nav" ***!
  \**************************************/
/***/ (function(module) {

"use strict";
module.exports = require("react-bootstrap/Nav");;

/***/ }),

/***/ "react-chartjs-2":
/*!**********************************!*\
  !*** external "react-chartjs-2" ***!
  \**********************************/
/***/ (function(module) {

"use strict";
module.exports = require("react-chartjs-2");;

/***/ }),

/***/ "react-number-format":
/*!**************************************!*\
  !*** external "react-number-format" ***!
  \**************************************/
/***/ (function(module) {

"use strict";
module.exports = require("react-number-format");;

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ (function(module) {

"use strict";
module.exports = require("react/jsx-dev-runtime");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
var __webpack_exports__ = (__webpack_exec__("./pages/index.js"));
module.exports = __webpack_exports__;

})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9iZWxhamFyLW5leHRqcy8uL2NvbXBvbmVudHMvRGFzaGJvYXJkL0NhcmRTdGF0dXMuanMiLCJ3ZWJwYWNrOi8vYmVsYWphci1uZXh0anMvLi9jb21wb25lbnRzL0Rhc2hib2FyZC9HcmFmaWsuanMiLCJ3ZWJwYWNrOi8vYmVsYWphci1uZXh0anMvLi9jb21wb25lbnRzL0Rhc2hib2FyZC9UYWJsZS5qcyIsIndlYnBhY2s6Ly9iZWxhamFyLW5leHRqcy8uL2NvbXBvbmVudHMvRGFzaGJvYXJkL2luZGV4UGFnZS5qcyIsIndlYnBhY2s6Ly9iZWxhamFyLW5leHRqcy8uL2NvbXBvbmVudHMvTGF5b3V0L0Zvb3Rlci5qcyIsIndlYnBhY2s6Ly9iZWxhamFyLW5leHRqcy8uL2NvbXBvbmVudHMvTGF5b3V0L0hlYWRlci5qcyIsIndlYnBhY2s6Ly9iZWxhamFyLW5leHRqcy8uL3BhZ2VzL2luZGV4LmpzIiwid2VicGFjazovL2JlbGFqYXItbmV4dGpzLy4vdXRpbC9saWJyYXJ5LmpzIiwid2VicGFjazovL2JlbGFqYXItbmV4dGpzL2V4dGVybmFsIFwiaXNvbW9ycGhpYy1mZXRjaFwiIiwid2VicGFjazovL2JlbGFqYXItbmV4dGpzL2V4dGVybmFsIFwibmV4dC9oZWFkXCIiLCJ3ZWJwYWNrOi8vYmVsYWphci1uZXh0anMvZXh0ZXJuYWwgXCJuZXh0L3JvdXRlclwiIiwid2VicGFjazovL2JlbGFqYXItbmV4dGpzL2V4dGVybmFsIFwicHJvcC10eXBlc1wiIiwid2VicGFjazovL2JlbGFqYXItbmV4dGpzL2V4dGVybmFsIFwicmVhY3RcIiIsIndlYnBhY2s6Ly9iZWxhamFyLW5leHRqcy9leHRlcm5hbCBcInJlYWN0LWJvb3RzdHJhcC9OYXZcIiIsIndlYnBhY2s6Ly9iZWxhamFyLW5leHRqcy9leHRlcm5hbCBcInJlYWN0LWNoYXJ0anMtMlwiIiwid2VicGFjazovL2JlbGFqYXItbmV4dGpzL2V4dGVybmFsIFwicmVhY3QtbnVtYmVyLWZvcm1hdFwiIiwid2VicGFjazovL2JlbGFqYXItbmV4dGpzL2V4dGVybmFsIFwicmVhY3QvanN4LWRldi1ydW50aW1lXCIiXSwibmFtZXMiOlsic3VtIiwicmVxdWlyZSIsIkNhcmRTdGF0dXMiLCJwcm9wcyIsIndpZHRoIiwiZ2V0QWxsTW9udGgiLCJHcmFmaWsiLCJkYXRhQ292aWQiLCJkYXRhIiwiaXNHbG9iYWwiLCJsYWJlbHMiLCJsYWJlbCIsImRhdGFzZXRzIiwiZmlsbCIsImxpbmVUZW5zaW9uIiwiYmFja2dyb3VuZENvbG9yIiwiYm9yZGVyQ29sb3IiLCJib3JkZXJDYXBTdHlsZSIsImJvcmRlckRhc2giLCJib3JkZXJEYXNoT2Zmc2V0IiwiYm9yZGVySm9pblN0eWxlIiwicG9pbnRCb3JkZXJDb2xvciIsInBvaW50QmFja2dyb3VuZENvbG9yIiwicG9pbnRCb3JkZXJXaWR0aCIsInBvaW50SG92ZXJSYWRpdXMiLCJwb2ludEhvdmVyQmFja2dyb3VuZENvbG9yIiwicG9pbnRIb3ZlckJvcmRlckNvbG9yIiwicG9pbnRSYWRpdXMiLCJwb2ludEhpdFJhZGl1cyIsInBvc2l0aWYiLCJzZW1idWgiLCJtZW5pbmdnYWwiLCJkYXRhQ292aWRQaWUiLCJIb3ZlckJhY2tncm91bmRDb2xvciIsIm1haW50YWluQXNwZWN0UmF0aW8iLCJUYWJsZSIsIm1hcCIsIml0ZW0iLCJpbmRleCIsImF0dHJpYnV0ZXMiLCJDb3VudHJ5X1JlZ2lvbiIsIkNvbmZpcm1lZCIsIlJlY292ZXJlZCIsIkRlYXRocyIsInByb3ZpbnNpIiwiUHJvdmluc2kiLCJLYXN1c19Qb3NpIiwiS2FzdXNfU2VtYiIsIkthc3VzX01lbmkiLCJJbmRleFBhZ2UiLCJjb250ZW50U3R5bGUiLCJtaW5IZWlnaHQiLCJ0b3AiLCJvdmVyZmxvd1giLCJzdGF0aXN0aWsiLCJGb290ZXIiLCJsZWZ0Q29udGVudCIsInJpZ2h0Q29udGVudCIsImNvbG9yIiwicHJvcFR5cGVzIiwiUHJvcFR5cGVzIiwicmlnaHRDb250ZW4iLCJzdHJpbmciLCJIZWFkZXIiLCJyb3V0ZXIiLCJ1c2VSb3V0ZXIiLCJwYXRobmFtZSIsImNvbmZpZyIsIkNvbXBvbmVudCIsImdldEluaXRpYWxQcm9wcyIsImZldGNoIiwiYmFzZV91cmwiLCJpdGVtcyIsImpzb24iLCJyZW5kZXIiLCJrZXkiLCJkaXJhd2F0IiwicmVkdWNlIiwiYSIsIkFjdGl2ZSIsIk1vbnRoTmFtZSIsIkRhdGVOb3ciLCJEYXRlIiwiRGF5IiwiTW9udGgiLCJZZWFyIiwiTGFiZWwiLCJQb3NpdGlmIiwiU2VtYnVoIiwiTWVuaW5nZ2FsIiwiQWt0aWYiLCJEYXRhIiwidmFsdWUiLCJnZXREYXRlIiwiZ2V0TW9udGgiLCJnZXRGdWxsWWVhciIsInB1c2giLCJNYXRoIiwiYWJzIiwiYWt0aWYiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7QUFFQSxNQUFNO0FBQUNBO0FBQUQsSUFBUUMsbUJBQU8sQ0FBQyxnREFBRCxDQUFyQjs7QUFFQSxNQUFNQyxVQUFVLEdBQUlDLEtBQUQsSUFBVztBQUMxQixzQkFDSTtBQUFLLGFBQVMsRUFBQyx5QkFBZjtBQUFBLDRCQUNJO0FBQUssZUFBUyxFQUFDLHNDQUFmO0FBQUEsNkJBQ0k7QUFBSyxpQkFBUyxFQUFDLG1EQUFmO0FBQW1FLGFBQUssRUFBRTtBQUFDQyxlQUFLLEVBQUU7QUFBUixTQUExRTtBQUFBLCtCQUNJO0FBQUssbUJBQVMsRUFBQyxXQUFmO0FBQUEsaUNBQ0k7QUFBSyxxQkFBUyxFQUFDLFFBQWY7QUFBQSxvQ0FDSTtBQUFLLHVCQUFTLEVBQUMsWUFBZjtBQUFBLHNDQUNJO0FBQUcseUJBQVMsRUFBQyxpQkFBYjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSwyQkFESixlQUVJO0FBQUkseUJBQVMsRUFBQyxrQkFBZDtBQUFBLHVDQUNJLDhEQUFDLDREQUFEO0FBQWMsdUJBQUssRUFBRUosR0FBRyxDQUFDLFdBQUQsRUFBY0csS0FBZCxDQUF4QjtBQUE4Qyw2QkFBVyxFQUFFLE1BQTNEO0FBQW1FLG1DQUFp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QUFULENBQUQsQ0FBaEM7QUFDQU0sU0FBSyxDQUFDTSxJQUFOLENBQVdKLEtBQUssQ0FBQ2IsTUFBakI7QUFDQVEsV0FBTyxDQUFDUyxJQUFSLENBQWFKLEtBQUssQ0FBQ25ELFNBQW5CO0FBQ0ErQyxVQUFNLENBQUNRLElBQVAsQ0FBWUosS0FBSyxDQUFDbEQsU0FBbEI7QUFDQStDLGFBQVMsQ0FBQ08sSUFBVixDQUFlSixLQUFLLENBQUNqRCxNQUFyQjtBQUVIOztBQUVEZ0QsTUFBSSxHQUFHO0FBQ0hoRixTQUFLLEVBQUUyRSxLQURKO0FBRUhhLFNBQUssRUFBRVQsS0FGSjtBQUdINUQsVUFBTSxFQUFFMEQsTUFITDtBQUlIekQsYUFBUyxFQUFFMEQsU0FKUjtBQUtINUQsV0FBTyxFQUFFMEQ7QUFMTixHQUFQO0FBT0EsU0FBT0ksSUFBUDtBQUNILENBbENNLEM7Ozs7Ozs7Ozs7O0FDdENQLDhDOzs7Ozs7Ozs7OztBQ0FBLHVDOzs7Ozs7Ozs7OztBQ0FBLHlDOzs7Ozs7Ozs7OztBQ0FBLHdDOzs7Ozs7Ozs7OztBQ0FBLG1DOzs7Ozs7Ozs7OztBQ0FBLGlEOzs7Ozs7Ozs7OztBQ0FBLDZDOzs7Ozs7Ozs7OztBQ0FBLGlEOzs7Ozs7Ozs7OztBQ0FBLG1EIiwiZmlsZSI6InBhZ2VzL2luZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IE51bWJlckZvcm1hdCBmcm9tIFwicmVhY3QtbnVtYmVyLWZvcm1hdFwiXHJcblxyXG5jb25zdCB7c3VtfSA9IHJlcXVpcmUoXCIuLi8uLi91dGlsL2xpYnJhcnkuanNcIilcclxuXHJcbmNvbnN0IENhcmRTdGF0dXMgPSAocHJvcHMpID0+IHtcclxuICAgIHJldHVybihcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvdyBtdC0zIG1zLTUgbWUtNSBtYi0yXCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLXNtLTEyIGNvbC1tZC02IGNvbC1sZy02IGNvbC14bC0zXCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmQgYmctZGFuZ2VyIGltZy1jYXJkIGJveC1wcmltYXJ5LXNoYWRvdyBib3JkZXJcIiBzdHlsZT17e3dpZHRoOiBcIjE2LjVyZW1cIn19PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZC1ib2R5XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZC1mbGV4XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHQtd2hpdGVcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LXdoaXRlIG1iLTBcIj4gVE9UQUwgUE9TSVRJRjwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDIgY2xhc3NOYW1lPVwibWItMCBudW1iZXItZm9udFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TnVtYmVyRm9ybWF0IHZhbHVlPXtzdW0oXCJDb25maXJtZWRcIiwgcHJvcHMpfSBkaXNwbGF5VHlwZT17XCJ0ZXh0XCJ9IHRob3VzYW5kU2VwYXJhdG9yPXtcIixcIn0gZGVjaW1hbFNjYWxlPXtcIi5cIn0gZGVmYXVsdFZhbHVlPXswfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvaDI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC13aGl0ZSBtYi0wXCI+T3Jhbmc8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibXMtYXV0b1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiaW1hZ2VzL3Bvc2l0aWYucG5nXCIgd2lkdGg9XCI3MFwiIGhlaWdodD1cIjcwXCIgYWx0PVwicG9zaXRpZlwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1zbS0xMiBjb2wtbWQtNiBjb2wtbGctNiBjb2wteGwtM1wiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkIGJnLXN1Y2Nlc3MgaW1nLWNhcmQgYm94LXByaW1hcnktc2hhZG93IGJvcmRlclwiIHN0eWxlPXt7d2lkdGg6IFwiMTYuNXJlbVwifX0+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkLWJvZHlcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkLWZsZXhcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dC13aGl0ZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtd2hpdGUgbWItMFwiPiBUT1RBTCBTRU1CVUg8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGgyIGNsYXNzTmFtZT1cIm1iLTAgbnVtYmVyLWZvbnRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPE51bWJlckZvcm1hdCB2YWx1ZT17c3VtKFwiUmVjb3ZlcmVkXCIsIHByb3BzKX0gZGlzcGxheVR5cGU9e1widGV4dFwifSB0aG91c2FuZFNlcGFyYXRvcj17XCIsXCJ9IGRlY2ltYWxTY2FsZT17XCIuXCJ9IGRlZmF1bHRWYWx1ZT17MH0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2gyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtd2hpdGUgbWItMFwiPk9yYW5nPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1zLWF1dG9cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz1cImltYWdlcy9zZW1idWgucG5nXCIgd2lkdGg9XCI3MFwiIGhlaWdodD1cIjcwXCIgYWx0PVwicG9zaXRpZlwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1zbS0xMiBjb2wtbWQtNiBjb2wtbGctNiBjb2wteGwtM1wiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkIGJnLXNlY29uZGFyeSBpbWctY2FyZCBib3gtcHJpbWFyeS1zaGFkb3cgYm9yZGVyXCIgc3R5bGU9e3t3aWR0aDogXCIxNi41cmVtXCJ9fT5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmQtYm9keVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImQtZmxleFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LXdoaXRlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC13aGl0ZSBtYi0wXCI+IFRPVEFMIE1FTklOR0dBTDwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDIgY2xhc3NOYW1lPVwibWItMCBudW1iZXItZm9udFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TnVtYmVyRm9ybWF0IHZhbHVlPXtzdW0oXCJEZWF0aHNcIiwgcHJvcHMpfSBkaXNwbGF5VHlwZT17XCJ0ZXh0XCJ9IHRob3VzYW5kU2VwYXJhdG9yPXtcIixcIn0gZGVjaW1hbFNjYWxlPXtcIi5cIn0gZGVmYXVsdFZhbHVlPXswfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvaDI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC13aGl0ZSBtYi0wXCI+T3Jhbmc8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibXMtYXV0b1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiaW1hZ2VzL21lbmluZ2dhbC5wbmdcIiB3aWR0aD1cIjcwXCIgaGVpZ2h0PVwiNzBcIiBhbHQ9XCJwb3NpdGlmXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLXNtLTEyIGNvbC1tZC02IGNvbC1sZy02IGNvbC14bC0zXCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmQgYmctaW5mbyBpbWctY2FyZCBib3gtcHJpbWFyeS1zaGFkb3cgYm9yZGVyXCIgc3R5bGU9e3t3aWR0aDogXCIxNi41cmVtXCJ9fT5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmQtYm9keVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImQtZmxleFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LXdoaXRlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC13aGl0ZSBtYi0wXCI+IFRPVEFMIEFLVElGPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoMiBjbGFzc05hbWU9XCJtYi0wIG51bWJlci1mb250XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxOdW1iZXJGb3JtYXQgdmFsdWU9e3N1bShcIkFjdGl2ZVwiLCBwcm9wcyl9IGRpc3BsYXlUeXBlPXtcInRleHRcIn0gdGhvdXNhbmRTZXBhcmF0b3I9e1wiLFwifSBkZWNpbWFsU2NhbGU9e1wiLlwifSBkZWZhdWx0VmFsdWU9ezB9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9oMj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LXdoaXRlIG1iLTBcIj5PcmFuZzwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtcy1hdXRvXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9XCJpbWFnZXMvYWN0aXZlMS5wbmdcIiB3aWR0aD1cIjcwXCIgaGVpZ2h0PVwiNzBcIiBhbHQ9XCJwb3NpdGlmXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgQ2FyZFN0YXR1cyIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIlxyXG5pbXBvcnQge0xpbmUsIFBpZX0gZnJvbSBcInJlYWN0LWNoYXJ0anMtMlwiXHJcbmltcG9ydCBOdW1iZXJGb3JtYXQgZnJvbSBcInJlYWN0LW51bWJlci1mb3JtYXRcIlxyXG5cclxuY29uc3Qge3N1bSwgZ2V0QWxsTW9udGh9ID0gcmVxdWlyZShcIi4uLy4uL3V0aWwvbGlicmFyeS5qc1wiKVxyXG5cclxuY29uc3QgR3JhZmlrID0gKHByb3BzKSA9PiB7XHJcbiAgICBsZXQgZGF0YUNvdmlkID0gbnVsbFxyXG4gICAgbGV0IGRhdGEgPSBudWxsXHJcblxyXG4gICAgaWYoIXByb3BzLmlzR2xvYmFsKSB7XHJcbiAgICAgICAgZGF0YUNvdmlkID0gZ2V0QWxsTW9udGgocHJvcHMpXHJcbiAgICAgICAgZGF0YSA9IHtcclxuICAgICAgICAgICAgbGFiZWxzOiBkYXRhQ292aWQubGFiZWwsXHJcbiAgICAgICAgICAgIGRhdGFzZXRzOiBbXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgbGFiZWw6IFwiSnVtbGFoIFBvc2l0aWZcIixcclxuICAgICAgICAgICAgICAgICAgICBmaWxsOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgICAgICBsaW5lVGVuc2lvbjogMC4xLFxyXG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogXCJyZ2JhKDIyOSw1Niw1MCwwLjQpXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyQ29sb3I6IFwicmdiYSgyMjksIDU2LCA1NiwgMSlcIixcclxuICAgICAgICAgICAgICAgICAgICBib3JkZXJDYXBTdHlsZTogXCJidXR0XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyRGFzaDogW10sXHJcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyRGFzaE9mZnNldDogMC4wLFxyXG4gICAgICAgICAgICAgICAgICAgIGJvcmRlckpvaW5TdHlsZTogXCJtaXRlclwiLFxyXG4gICAgICAgICAgICAgICAgICAgIHBvaW50Qm9yZGVyQ29sb3I6IFwicmdiYSgyMjksNTYsIDU2LCAxKVwiLFxyXG4gICAgICAgICAgICAgICAgICAgIHBvaW50QmFja2dyb3VuZENvbG9yOiBcIiNmZmZcIixcclxuICAgICAgICAgICAgICAgICAgICBwb2ludEJvcmRlcldpZHRoOiAxLFxyXG4gICAgICAgICAgICAgICAgICAgIHBvaW50SG92ZXJSYWRpdXM6IDEwLFxyXG4gICAgICAgICAgICAgICAgICAgIHBvaW50SG92ZXJCYWNrZ3JvdW5kQ29sb3I6IFwicmdiYSgyMjksNTYsIDU2LCAxKVwiLFxyXG4gICAgICAgICAgICAgICAgICAgIHBvaW50SG92ZXJCb3JkZXJDb2xvcjogXCJyZ2JhKDIyMCwyMjAsMjIwLDEpXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgcG9pbnRCb3JkZXJXaWR0aDogMixcclxuICAgICAgICAgICAgICAgICAgICBwb2ludFJhZGl1czogMSxcclxuICAgICAgICAgICAgICAgICAgICBwb2ludEhpdFJhZGl1czogMTAsXHJcbiAgICAgICAgICAgICAgICAgICAgZGF0YTogZGF0YUNvdmlkLnBvc2l0aWZcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgbGFiZWw6IFwiSnVtbGFoIHNlbWJ1aFwiLFxyXG4gICAgICAgICAgICAgICAgICAgIGZpbGw6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgICAgIGxpbmVUZW5zaW9uOiAwLjEsXHJcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiBcImJsdWVcIixcclxuICAgICAgICAgICAgICAgICAgICBib3JkZXJDb2xvcjogXCJibHVlXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyQ2FwU3R5bGU6IFwiYnV0dFwiLFxyXG4gICAgICAgICAgICAgICAgICAgIGJvcmRlckRhc2g6IFtdLFxyXG4gICAgICAgICAgICAgICAgICAgIGJvcmRlckRhc2hPZmZzZXQ6IDAuMCxcclxuICAgICAgICAgICAgICAgICAgICBib3JkZXJKb2luU3R5bGU6IFwibWl0ZXJcIixcclxuICAgICAgICAgICAgICAgICAgICBwb2ludEJvcmRlckNvbG9yOiBcImJsdWVcIixcclxuICAgICAgICAgICAgICAgICAgICBwb2ludEJhY2tncm91bmRDb2xvcjogXCIjZmZmXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgcG9pbnRCb3JkZXJXaWR0aDogMSxcclxuICAgICAgICAgICAgICAgICAgICBwb2ludEhvdmVyUmFkaXVzOiAxMCxcclxuICAgICAgICAgICAgICAgICAgICBwb2ludEhvdmVyQmFja2dyb3VuZENvbG9yOiBcImJsdWVcIixcclxuICAgICAgICAgICAgICAgICAgICBwb2ludEhvdmVyQm9yZGVyQ29sb3I6IFwiYmx1ZVwiLFxyXG4gICAgICAgICAgICAgICAgICAgIHBvaW50Qm9yZGVyV2lkdGg6IDIsXHJcbiAgICAgICAgICAgICAgICAgICAgcG9pbnRSYWRpdXM6IDEsXHJcbiAgICAgICAgICAgICAgICAgICAgcG9pbnRIaXRSYWRpdXM6IDEwLFxyXG4gICAgICAgICAgICAgICAgICAgIGRhdGE6IGRhdGFDb3ZpZC5zZW1idWhcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgbGFiZWw6IFwiSnVtbGFoIG1lbmluZ2dhbFwiLFxyXG4gICAgICAgICAgICAgICAgICAgIGZpbGw6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgICAgIGxpbmVUZW5zaW9uOiAwLjEsXHJcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiBcImdyZXlcIixcclxuICAgICAgICAgICAgICAgICAgICBib3JkZXJDb2xvcjogXCJncmV5XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyQ2FwU3R5bGU6IFwiYnV0dFwiLFxyXG4gICAgICAgICAgICAgICAgICAgIGJvcmRlckRhc2g6IFtdLFxyXG4gICAgICAgICAgICAgICAgICAgIGJvcmRlckRhc2hPZmZzZXQ6IDAuMCxcclxuICAgICAgICAgICAgICAgICAgICBib3JkZXJKb2luU3R5bGU6IFwibWl0ZXJcIixcclxuICAgICAgICAgICAgICAgICAgICBwb2ludEJvcmRlckNvbG9yOiBcImdyZXlcIixcclxuICAgICAgICAgICAgICAgICAgICBwb2ludEJhY2tncm91bmRDb2xvcjogXCIjZmZmXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgcG9pbnRCb3JkZXJXaWR0aDogMSxcclxuICAgICAgICAgICAgICAgICAgICBwb2ludEhvdmVyUmFkaXVzOiAxMCxcclxuICAgICAgICAgICAgICAgICAgICBwb2ludEhvdmVyQmFja2dyb3VuZENvbG9yOiBcImdyZXlcIixcclxuICAgICAgICAgICAgICAgICAgICBwb2ludEhvdmVyQm9yZGVyQ29sb3I6IFwiZ3JleVwiLFxyXG4gICAgICAgICAgICAgICAgICAgIHBvaW50Qm9yZGVyV2lkdGg6IDIsXHJcbiAgICAgICAgICAgICAgICAgICAgcG9pbnRSYWRpdXM6IDEsXHJcbiAgICAgICAgICAgICAgICAgICAgcG9pbnRIaXRSYWRpdXM6IDEwLFxyXG4gICAgICAgICAgICAgICAgICAgIGRhdGE6IGRhdGFDb3ZpZC5tZW5pbmdnYWxcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgXVxyXG4gICAgICAgIH1cclxuXHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgZGF0YUNvdmlkUGllID0ge1xyXG4gICAgICAgIGxhYmVsczogW1xyXG4gICAgICAgICAgICBcInBvc2l0aWZcIixcclxuICAgICAgICAgICAgXCJTZW1idWhcIixcclxuICAgICAgICAgICAgXCJtZW5pbmdnYWxcIixcclxuICAgICAgICBdLFxyXG4gICAgICAgIGRhdGFzZXRzOiBbXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGRhdGE6W3N1bShcIkNvbmZpcm1lZFwiLCBwcm9wcyksIHN1bShcIlJlY292ZXJlZFwiLCBwcm9wcyksIHN1bShcIkRlYXRoc1wiLCBwcm9wcyldLFxyXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiBbXHJcbiAgICAgICAgICAgICAgICAgICAgXCIjRkY2Mzg0XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgXCIjMzZBMkVCXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgXCIjRkZDRTU2XCJcclxuICAgICAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgICAgICBIb3ZlckJhY2tncm91bmRDb2xvcjogW1xyXG4gICAgICAgICAgICAgICAgICAgIFwiI0ZGNjM4NFwiLFxyXG4gICAgICAgICAgICAgICAgICAgIFwiIzM2QTJFQlwiLFxyXG4gICAgICAgICAgICAgICAgICAgIFwiI0ZGQ0U1NlwiXHJcbiAgICAgICAgICAgICAgICBdXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICBdXHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93IG1iLTVcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbGctMTIgY29sLW1kLTEyIGNvbC1zbS0xMiBjb2wteGwtMTJcIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZCBvdmVyZmxvdy1oaWRkZW4gYmctd2hpdGVcIj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmQtaGVhZGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxoMyBjbGFzc05hbWU9XCJjYXJkLXRpdGVsXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7cHJvcHMuaXNHbG9iYWwgPyBcIlN0YXRpc3RpayBWaXJ1cyBDb3JvbmEgZGkgRHVuaWFcIiA6IFwiU3RhdGlzdGlrIFZpcnVzIENvcm9uYSBkaSBJbmRvbmVzaWFcIn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9oMz5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmQtYm9keVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNoYXJ0LXdyYXBwZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtwcm9wcy5pc0dsb2JhbCA/IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFBpZSBkYXRhPXtkYXRhQ292aWRQaWV9IHdpZHRoPXs2MDB9IGhlaWdodD17NjAwfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb3B0aW9ucz17e21haW50YWluQXNwZWN0UmF0aW86IGZhbHNlfX0gLz4gOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPExpbmUgZGF0YT17ZGF0YX0gd2lkdGg9ezEwMH0gaGVpZ2h0PXs0MH0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEdyYWZpayIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcclxuaW1wb3J0IE51bWJlckZvcm1hdCBmcm9tICdyZWFjdC1udW1iZXItZm9ybWF0J1xyXG5cclxuY29uc3QgVGFibGUgPSAocHJvcHMpID0+IHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPD5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3cgbWItNVwiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbWItMTIgY29sLW1kLTEyIGNvbC1sZy0xMiBjb2wteGwtMTRcIj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkLWhlYWRlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGgzIGNsYXNzTmFtZT1cImNhcmQtdGl0bGVcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7cHJvcHMuaXNHbG9iYWwgPyBcIkRhdGEgS2FzdXMgQ292aWQtMTkgRGkgRHVuaWFcIiA6IFwiRGF0YSBLYXN1cyBDb3ZpZC0xOSBEaSBJbmRvbmVzaWFcIn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvaDM+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmQtYm9keVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0YWJsZS1yZXNwb25zaXZlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRhYmxlIGNsYXNzTmFtZT1cInRhYmxlIHRhYmxlLWJvcmRlcmVkIHRhYmxlLWhvdmVyIG1iLTAgdGV4dC1ub3dyYXBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoZWFkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aD5ObzwvdGg+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoPntwcm9wcy5pc0dsb2JhbCA/IFwiTmVnYXJhXCIgOiBcIlByb3ZpbnNpXCJ9PC90aD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGg+UG9zaXRpZjwvdGg+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoPlNlbWJ1aDwvdGg+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoPk1lbmluZ2dhbDwvdGg+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RoZWFkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGJvZHk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7cHJvcHMuaXNHbG9iYWwgP1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKHByb3BzLmRhdGEgJiYgcHJvcHMuZGF0YS5tYXAoKGl0ZW0sIGluZGV4KSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRyIGtleT17aW5kZXh9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+e2luZGV4ICsgMX08L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+e2l0ZW0uYXR0cmlidXRlcy5Db3VudHJ5X1JlZ2lvbn08L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TnVtYmVyRm9ybWF0IHZhbHVlPXtpdGVtLmF0dHJpYnV0ZXMuQ29uZmlybWVkfSBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXlUeXBlPXtcInRleHRcIn0gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aG91c2FuZFNlcGFyYXRvcj17XCIsXCJ9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZWNpbWFsU2VwYXJhdG9yPXtcIi5cIn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRlZmF1bHRWYWx1ZT17MH0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPE51bWJlckZvcm1hdCB2YWx1ZT17aXRlbS5hdHRyaWJ1dGVzLlJlY292ZXJlZH0gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5VHlwZT17XCJ0ZXh0XCJ9IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhvdXNhbmRTZXBhcmF0b3I9e1wiLFwifVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGVjaW1hbFNlcGFyYXRvcj17XCIuXCJ9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZWZhdWx0VmFsdWU9ezB9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxOdW1iZXJGb3JtYXQgdmFsdWU9e2l0ZW0uYXR0cmlidXRlcy5EZWF0aHN9IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheVR5cGU9e1widGV4dFwifSBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRob3VzYW5kU2VwYXJhdG9yPXtcIixcIn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRlY2ltYWxTZXBhcmF0b3I9e1wiLlwifVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGVmYXVsdFZhbHVlPXswfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSkpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAocHJvcHMucHJvdmluc2kgJiYgcHJvcHMucHJvdmluc2kubWFwKChpdGVtLCBpbmRleCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ciBrZXk9e2luZGV4fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPntpbmRleCArIDF9PC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPntpdGVtLmF0dHJpYnV0ZXMuUHJvdmluc2l9PC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPE51bWJlckZvcm1hdCB2YWx1ZT17aXRlbS5hdHRyaWJ1dGVzLkthc3VzX1Bvc2l9IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheVR5cGU9e1widGV4dFwifSBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRob3VzYW5kU2VwYXJhdG9yPXtcIixcIn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRlY2ltYWxTZXBhcmF0b3I9e1wiLlwifVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGVmYXVsdFZhbHVlPXswfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TnVtYmVyRm9ybWF0IHZhbHVlPXtpdGVtLmF0dHJpYnV0ZXMuS2FzdXNfU2VtYn0gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5VHlwZT17XCJ0ZXh0XCJ9IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhvdXNhbmRTZXBhcmF0b3I9e1wiLFwifVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGVjaW1hbFNlcGFyYXRvcj17XCIuXCJ9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZWZhdWx0VmFsdWU9ezB9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxOdW1iZXJGb3JtYXQgdmFsdWU9e2l0ZW0uYXR0cmlidXRlcy5LYXN1c19NZW5pfSBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXlUeXBlPXtcInRleHRcIn0gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aG91c2FuZFNlcGFyYXRvcj17XCIsXCJ9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZWNpbWFsU2VwYXJhdG9yPXtcIi5cIn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRlZmF1bHRWYWx1ZT17MH0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3Rib2R5PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGFibGU+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+ICBcclxuICAgICAgICA8Lz5cclxuICAgIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgVGFibGVcclxuIiwiaW1wb3J0IEhlYWRlciBmcm9tIFwiLi4vTGF5b3V0L0hlYWRlclwiO1xyXG5pbXBvcnQgRm9vdGVyIGZyb20gXCIuLi9MYXlvdXQvRm9vdGVyXCI7XHJcbmltcG9ydCBDYXJkU3RhdHVzIGZyb20gXCIuL0NhcmRTdGF0dXNcIjtcclxuaW1wb3J0IEdyYWZpayBmcm9tIFwiLi9HcmFmaWtcIjtcclxuaW1wb3J0IFRhYmxlIGZyb20gXCIuL1RhYmxlXCI7XHJcblxyXG5mdW5jdGlvbiBJbmRleFBhZ2UocHJvcHMpe1xyXG4gICAgY29uc3QgY29udGVudFN0eWxlPSB7XHJcbiAgICAgICAgbWluSGVpZ2h0OiBcIjkwdmhcIixcclxuICAgICAgICB0b3A6IFwiNTZweFwiLFxyXG4gICAgICAgIGJhY2tncm91bmRDb2xvcjogXCIjZjFmMWY5XCIsXHJcbiAgICAgICAgb3ZlcmZsb3dYOiBcImhpZGRlblwiXHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuKFxyXG4gICAgICAgIDxkaXYgc3R5bGU9e3tiYWNrZ3JvdW5kQ29sb3I6IFwiI2YxZjFmOVwifX0+XHJcbiAgICAgICAgICAgIDxIZWFkZXIgLz5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXIgY29udGVudCBwb3NpdGlvbi1yZWxhdGl2ZVwiIHN0eWxlPXtjb250ZW50U3R5bGV9PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC0xMiBkLWZsZXgganVzdGlmeS1jb250ZW50LWNlbnRlciB0ZXh0LWNlbnRlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJtdC01IGgyXCI+S0FXQUwgQ09WSUQtMTk8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtMTIgZC1mbGV4IGp1c3RpZnktY29udGVudC1jZW50ZXIgdGV4dC1jZW50ZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwibXQtMyBmMThcIj5XZWJzaXRlIFBlbWFudGF1YW4gdGVya2luaSBrYXN1cyBDb3ZpZC0xOSAgIDwvcD5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPENhcmRTdGF0dXMgaXNHbG9iYWw9e3Byb3BzLmlzR2xvYmFsfSBkYXRhPXtwcm9wcy5kYXRhID8gcHJvcHMuZGF0YSA6IG51bGx9IC8+XHJcbiAgICAgICAgICAgICAgICA8R3JhZmlrIGlzR2xvYmFsPXtwcm9wcy5pc0dsb2JhbH0gZGF0YT17cHJvcHMuZGF0YSA/IHByb3BzLmRhdGEgOiBudWxsfSBzdGF0aXN0aWs9e3Byb3BzLnN0YXRpc3RpayA/IHByb3BzLnN0YXRpc3RpayA6IG51bGwgfSAvPlxyXG4gICAgICAgICAgICAgICAgPFRhYmxlIGlzR2xvYmFsPXtwcm9wcy5pc0dsb2JhbH0gZGF0YT17cHJvcHMuZGF0YSA/IHByb3BzLmRhdGEgOiBudWxsfSBwcm92aW5zaT17cHJvcHMucHJvdmluc2l9IC8+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8Rm9vdGVyIHJpZ2h0Q29udGVudD17XCJcIn1cclxuICAgICAgICAgICAgICAgICAgICBsZWZ0Q29udGVudD17XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWwtMiBmMDggZm9udC13ZWlnaHQtYm9sZFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgTXktVGVjaCBAMjAyMSBBbGwgUmlnaHQgUmVzZXJ2ZWRcclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgfSAvPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBJbmRleFBhZ2UiLCJpbXBvcnQgUHJvcFR5cGVzIGZyb20gXCJwcm9wLXR5cGVzXCJcclxuXHJcbmNvbnN0IEZvb3RlciA9IChwcm9wcykgPT4ge1xyXG4gICAgaWYoIXByb3BzLmxlZnRDb250ZW50ICYmICFwcm9wcy5yaWdodENvbnRlbnQpe1xyXG4gICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybihcclxuICAgICAgICA8Zm9vdGVyIGNsYXNzTmFtZT1cIm1haW4tZm9vdGVyIGNsZWFyZml4IGZpeGVkLWJvdHRvbSBiZy13aGl0ZSBib3JkZXItdG9wXCI+XHJcbiAgICAgICAgICAgIHtwcm9wcy5yaWdodENvbnRlbnQgJiYgKFxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbG9hdC1yaWdodCBkLW5vbmUgZC1zbS1pbmxpbmVcIiBzdHlsZT17e2NvbG9yOlwiIzZjNzU3ZFwifX0+XHJcbiAgICAgICAgICAgICAgICAgICAge3Byb3BzLnJpZ2h0Q29udGVudH1cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICApfVxyXG4gICAgICAgICAgICB7cHJvcHMubGVmdENvbnRlbnQgJiYgcHJvcHMubGVmdENvbnRlbnR9XHJcbiAgICAgICAgPC9mb290ZXI+XHJcbiAgICApXHJcbn1cclxuXHJcbkZvb3Rlci5wcm9wVHlwZXMgPSB7XHJcbiAgICBsZWZ0Q29udGVudCA6IFByb3BUeXBlcy5lbGVtZW50LFxyXG4gICAgcmlnaHRDb250ZW4gOiBQcm9wVHlwZXMuc3RyaW5nLFxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBGb290ZXIiLCJpbXBvcnQgSGVhZCBmcm9tIFwibmV4dC9oZWFkXCJcclxuaW1wb3J0IE5hdiBmcm9tIFwicmVhY3QtYm9vdHN0cmFwL05hdlwiO1xyXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9yb3V0ZXJcIlxyXG5cclxuY29uc3QgSGVhZGVyID0gKHByb3BzKSA9PiB7XHJcbiAgICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcclxuICAgIHJldHVybihcclxuICAgICAgICA8PlxyXG4gICAgICAgICAgICA8SGVhZD48dGl0bGU+S2F3YWwgQ292aWQ8L3RpdGxlPjwvSGVhZD5cclxuICAgICAgICAgICAgPG5hdiBjbGFzc05hbWU9XCJtYWluLWhlYWRlciBuYXZiYXIgbmF2YmFyLWV4cGFuZCBuYXZiYXItbGlnaHQgbmF2YmFyLXdoaXRlIGZpeGVkLXRvcCBib3JkZXItYm90dG9tXCIgc3R5bGU9e3tiYWNrZ3JvdW5kQ29sb3I6XCJ3aGl0ZVwifX0+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibXgtYXV0byBoaWRkZW4tc20tZG93blwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8TmF2IHZhcmlhbnQ9XCJwaWxsc1wiIGRlZmF1bHRBY3RpdmVLZXk9e3JvdXRlci5wYXRobmFtZT09XCIvXCIgPyBcImxpbmstMFwiIDogXCJsaW5rLTFcIn0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TmF2Lkl0ZW0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPE5hdi5MaW5rIGV2ZW50S2V5PVwibGluay0wXCIgaHJlZj1cIi9cIj5HbG9iYWw8L05hdi5MaW5rPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9OYXYuSXRlbT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxOYXYuSXRlbT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TmF2LkxpbmsgZXZlbnRLZXk9XCJsaW5rLTFcIiBocmVmPVwiaW5kb25lc2lhXCI+SW5kb25lc2lhPC9OYXYuTGluaz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTmF2Lkl0ZW0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvTmF2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvbmF2PlxyXG4gICAgICAgIDwvPlxyXG4gICAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBIZWFkZXIiLCJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSBcInJlYWN0XCJcclxuaW1wb3J0IEluZGV4UGFnZSBmcm9tIFwiLi4vY29tcG9uZW50cy9EYXNoYm9hcmQvaW5kZXhQYWdlXCJcclxuaW1wb3J0IGZldGNoIGZyb20gXCJpc29tb3JwaGljLWZldGNoXCJcclxuXHJcbmNvbnN0IGNvbmZpZyA9ICByZXF1aXJlKFwiLi4vY29uZmlnLmpzb25cIilcclxuXHJcbmNsYXNzIGluZGV4IGV4dGVuZHMgQ29tcG9uZW50IHtcclxuICAgIHN0YXRpYyBhc3luYyBnZXRJbml0aWFsUHJvcHMoKXtcclxuICAgICAgICBjb25zdCBkYXRhID0gYXdhaXQgZmV0Y2goY29uZmlnWydrYXdhbF9jb3JvbmEnXS5iYXNlX3VybClcclxuICAgICAgICBjb25zdCBpdGVtcyA9IGF3YWl0IGRhdGEuanNvbigpXHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgaXRlbXNcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcmVuZGVyKCl7XHJcbiAgICAgICAgY29uc3Qge2l0ZW1zfSA9IHRoaXMucHJvcHNcclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8SW5kZXhQYWdlIGlzR2xvYmFsPXt0cnVlfSBkYXRhPXtpdGVtc30gLz5cclxuICAgICAgICApXHJcbiAgICB9XHJcbn0gXHJcblxyXG5leHBvcnQgZGVmYXVsdCBpbmRleCIsImV4cG9ydCBjb25zdCBzdW0gPSBmdW5jdGlvbiAoa2V5LCBwcm9wcyl7XHJcbiAgICBpZihwcm9wcy5pc0dsb2JhbCA9PSBmYWxzZSl7XHJcbiAgICAgICAgc3dpdGNoKGtleSl7XHJcbiAgICAgICAgICAgIGNhc2UgJ0NvbmZpcm1lZCc6XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gcHJvcHMuZGF0YVswXS5wb3NpdGlmXHJcbiAgICAgICAgICAgIGNhc2UgJ1JlY292ZXJlZCc6XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gcHJvcHMuZGF0YVswXS5zZW1idWhcclxuICAgICAgICAgICAgY2FzZSAnRGVhdGhzJzpcclxuICAgICAgICAgICAgICAgIHJldHVybiBwcm9wcy5kYXRhWzBdLm1lbmluZ2dhbFxyXG4gICAgICAgICAgICBjYXNlICdBY3RpdmUnOlxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHByb3BzLmRhdGFbMF0uZGlyYXdhdFxyXG4gICAgICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIDBcclxuICAgICAgICB9XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAgIHN3aXRjaChrZXkpe1xyXG4gICAgICAgICAgICBjYXNlICdDb25maXJtZWQnOlxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHByb3BzLmRhdGEucmVkdWNlKChzdW0sYSkgPT57XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHN1bSArIGEuYXR0cmlidXRlcy5Db25maXJtZWRcclxuICAgICAgICAgICAgICAgIH0gLDApXHJcbiAgICAgICAgICAgIGNhc2UgJ1JlY292ZXJlZCc6XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gcHJvcHMuZGF0YS5yZWR1Y2UoKHN1bSxhKSA9PntcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gc3VtICsgYS5hdHRyaWJ1dGVzLlJlY292ZXJlZFxyXG4gICAgICAgICAgICAgICAgfSAsMClcclxuICAgICAgICAgICAgY2FzZSAnRGVhdGhzJzpcclxuICAgICAgICAgICAgICAgIHJldHVybiBwcm9wcy5kYXRhLnJlZHVjZSgoc3VtLGEpID0+e1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBzdW0gKyBhLmF0dHJpYnV0ZXMuRGVhdGhzXHJcbiAgICAgICAgICAgICAgICB9ICwwKVxyXG4gICAgICAgICAgICBjYXNlICdBY3RpdmUnOlxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHByb3BzLmRhdGEucmVkdWNlKChzdW0sYSkgPT57XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHN1bSArIGEuYXR0cmlidXRlcy5BY3RpdmVcclxuICAgICAgICAgICAgICAgIH0gLDApXHJcbiAgICAgICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gMFxyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IGdldEFsbE1vbnRoID0gKHByb3BzKSA9PiB7XHJcbiAgICBjb25zdCBNb250aE5hbWUgPSBbXCJKYW5cIiwgXCJGZWJcIiwgXCJNYXJcIiwgXCJBcHJcIiwgXCJNZWlcIiwgXCJKdW5cIiwgXCJKdWxcIiwgXCJBZ3VcIiwgXCJTZXBcIiwgXCJPa3RcIiwgXCJOb3ZcIiwgXCJkZXNcIl1cclxuICAgIGxldCBEYXRlTm93ID0gbmV3IERhdGUoKVxyXG4gICAgbGV0IERheSA9IG51bGxcclxuICAgIGxldCBNb250aCA9IG51bGxcclxuICAgIGxldCBZZWFyID0gbnVsbFxyXG4gICAgbGV0IExhYmVsID0gW11cclxuICAgIGxldCBQb3NpdGlmID0gW11cclxuICAgIGxldCBTZW1idWggPSBbXVxyXG4gICAgbGV0IE1lbmluZ2dhbCA9IFtdXHJcbiAgICBsZXQgQWt0aWYgPSBbXVxyXG4gICAgbGV0IERhdGEgPSBbXVxyXG5cclxuICAgIGZvcihsZXQgdmFsdWUgb2YgcHJvcHMuc3RhdGlzdGlrKSB7XHJcbiAgICAgICAgRGF0ZU5vdyA9IG5ldyBEYXRlKHZhbHVlLkRhdGUpXHJcbiAgICAgICAgRGF5ID0gRGF0ZU5vdy5nZXREYXRlKClcclxuICAgICAgICBNb250aCA9IERhdGVOb3cuZ2V0TW9udGgoKVxyXG4gICAgICAgIFllYXIgPSBEYXRlTm93LmdldEZ1bGxZZWFyKClcclxuICAgICAgICBMYWJlbC5wdXNoKERheSArIFwiIFwiICsgTW9udGhOYW1lW01hdGguYWJzKE1vbnRoKV0pXHJcbiAgICAgICAgQWt0aWYucHVzaCh2YWx1ZS5BY3RpdmUpXHJcbiAgICAgICAgUG9zaXRpZi5wdXNoKHZhbHVlLkNvbmZpcm1lZClcclxuICAgICAgICBTZW1idWgucHVzaCh2YWx1ZS5SZWNvdmVyZWQpXHJcbiAgICAgICAgTWVuaW5nZ2FsLnB1c2godmFsdWUuRGVhdGhzKVxyXG5cclxuICAgIH1cclxuXHJcbiAgICBEYXRhID0ge1xyXG4gICAgICAgIGxhYmVsOiBMYWJlbCxcclxuICAgICAgICBha3RpZjogQWt0aWYsXHJcbiAgICAgICAgc2VtYnVoOiBTZW1idWgsXHJcbiAgICAgICAgbWVuaW5nZ2FsOiBNZW5pbmdnYWwsXHJcbiAgICAgICAgcG9zaXRpZjogUG9zaXRpZlxyXG4gICAgfVxyXG4gICAgcmV0dXJuIERhdGFcclxufSIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImlzb21vcnBoaWMtZmV0Y2hcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvaGVhZFwiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9yb3V0ZXJcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInByb3AtdHlwZXNcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0XCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1ib290c3RyYXAvTmF2XCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1jaGFydGpzLTJcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LW51bWJlci1mb3JtYXRcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiKTs7Il0sInNvdXJjZVJvb3QiOiIifQ==