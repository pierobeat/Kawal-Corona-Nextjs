(function() {
var exports = {};
exports.id = "pages/indonesia";
exports.ids = ["pages/indonesia"];
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

/***/ "./pages/indonesia.js":
/*!****************************!*\
  !*** ./pages/indonesia.js ***!
  \****************************/
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

var _jsxFileName = "D:\\web_development_tutorial\\binar_academy\\nodeproject\\belajar-nextjs\\pages\\indonesia.js";




const config = __webpack_require__(/*! ../config.json */ "./config.json");

class indonesia extends react__WEBPACK_IMPORTED_MODULE_1__.Component {
  static async getInitialProps() {
    const data = await isomorphic_fetch__WEBPACK_IMPORTED_MODULE_3___default()(`${config['kawal_corona'].base_url}/indonesia`);
    const items = await data.json();
    const province = await isomorphic_fetch__WEBPACK_IMPORTED_MODULE_3___default()(`${config['kawal_corona'].base_url}/indonesia/provinsi`);
    const itemProvince = await province.json();
    const stat = await isomorphic_fetch__WEBPACK_IMPORTED_MODULE_3___default()(`${config['global-api'].base_url}${config['global-api'].total_live}/indonesia`);
    const byDayIndo = await stat.json();
    return {
      items,
      byDayIndo,
      itemProvince
    };
  }

  render() {
    const {
      items,
      byDayIndo,
      itemProvince
    } = this.props;
    return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Dashboard_indexPage__WEBPACK_IMPORTED_MODULE_2__.default, {
      isGlobal: false,
      data: items,
      statistik: byDayIndo,
      provinsi: itemProvince
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 13
    }, this);
  }

}

/* harmony default export */ __webpack_exports__["default"] = (indonesia);

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
var __webpack_exports__ = (__webpack_exec__("./pages/indonesia.js"));
module.exports = __webpack_exports__;

})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9iZWxhamFyLW5leHRqcy8uL2NvbXBvbmVudHMvRGFzaGJvYXJkL0NhcmRTdGF0dXMuanMiLCJ3ZWJwYWNrOi8vYmVsYWphci1uZXh0anMvLi9jb21wb25lbnRzL0Rhc2hib2FyZC9HcmFmaWsuanMiLCJ3ZWJwYWNrOi8vYmVsYWphci1uZXh0anMvLi9jb21wb25lbnRzL0Rhc2hib2FyZC9UYWJsZS5qcyIsIndlYnBhY2s6Ly9iZWxhamFyLW5leHRqcy8uL2NvbXBvbmVudHMvRGFzaGJvYXJkL2luZGV4UGFnZS5qcyIsIndlYnBhY2s6Ly9iZWxhamFyLW5leHRqcy8uL2NvbXBvbmVudHMvTGF5b3V0L0Zvb3Rlci5qcyIsIndlYnBhY2s6Ly9iZWxhamFyLW5leHRqcy8uL2NvbXBvbmVudHMvTGF5b3V0L0hlYWRlci5qcyIsIndlYnBhY2s6Ly9iZWxhamFyLW5leHRqcy8uL3BhZ2VzL2luZG9uZXNpYS5qcyIsIndlYnBhY2s6Ly9iZWxhamFyLW5leHRqcy8uL3V0aWwvbGlicmFyeS5qcyIsIndlYnBhY2s6Ly9iZWxhamFyLW5leHRqcy9leHRlcm5hbCBcImlzb21vcnBoaWMtZmV0Y2hcIiIsIndlYnBhY2s6Ly9iZWxhamFyLW5leHRqcy9leHRlcm5hbCBcIm5leHQvaGVhZFwiIiwid2VicGFjazovL2JlbGFqYXItbmV4dGpzL2V4dGVybmFsIFwibmV4dC9yb3V0ZXJcIiIsIndlYnBhY2s6Ly9iZWxhamFyLW5leHRqcy9leHRlcm5hbCBcInByb3AtdHlwZXNcIiIsIndlYnBhY2s6Ly9iZWxhamFyLW5leHRqcy9leHRlcm5hbCBcInJlYWN0XCIiLCJ3ZWJwYWNrOi8vYmVsYWphci1uZXh0anMvZXh0ZXJuYWwgXCJyZWFjdC1ib290c3RyYXAvTmF2XCIiLCJ3ZWJwYWNrOi8vYmVsYWphci1uZXh0anMvZXh0ZXJuYWwgXCJyZWFjdC1jaGFydGpzLTJcIiIsIndlYnBhY2s6Ly9iZWxhamFyLW5leHRqcy9leHRlcm5hbCBcInJlYWN0LW51bWJlci1mb3JtYXRcIiIsIndlYnBhY2s6Ly9iZWxhamFyLW5leHRqcy9leHRlcm5hbCBcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiIl0sIm5hbWVzIjpbInN1bSIsInJlcXVpcmUiLCJDYXJkU3RhdHVzIiwicHJvcHMiLCJ3aWR0aCIsImdldEFsbE1vbnRoIiwiR3JhZmlrIiwiZGF0YUNvdmlkIiwiZGF0YSIsImlzR2xvYmFsIiwibGFiZWxzIiwibGFiZWwiLCJkYXRhc2V0cyIsImZpbGwiLCJsaW5lVGVuc2lvbiIsImJhY2tncm91bmRDb2xvciIsImJvcmRlckNvbG9yIiwiYm9yZGVyQ2FwU3R5bGUiLCJib3JkZXJEYXNoIiwiYm9yZGVyRGFzaE9mZnNldCIsImJvcmRlckpvaW5TdHlsZSIsInBvaW50Qm9yZGVyQ29sb3IiLCJwb2ludEJhY2tncm91bmRDb2xvciIsInBvaW50Qm9yZGVyV2lkdGgiLCJwb2ludEhvdmVyUmFkaXVzIiwicG9pbnRIb3ZlckJhY2tncm91bmRDb2xvciIsInBvaW50SG92ZXJCb3JkZXJDb2xvciIsInBvaW50UmFkaXVzIiwicG9pbnRIaXRSYWRpdXMiLCJwb3NpdGlmIiwic2VtYnVoIiwibWVuaW5nZ2FsIiwiZGF0YUNvdmlkUGllIiwiSG92ZXJCYWNrZ3JvdW5kQ29sb3IiLCJtYWludGFpbkFzcGVjdFJhdGlvIiwiVGFibGUiLCJtYXAiLCJpdGVtIiwiaW5kZXgiLCJhdHRyaWJ1dGVzIiwiQ291bnRyeV9SZWdpb24iLCJDb25maXJtZWQiLCJSZWNvdmVyZWQiLCJEZWF0aHMiLCJwcm92aW5zaSIsIlByb3ZpbnNpIiwiS2FzdXNfUG9zaSIsIkthc3VzX1NlbWIiLCJLYXN1c19NZW5pIiwiSW5kZXhQYWdlIiwiY29udGVudFN0eWxlIiwibWluSGVpZ2h0IiwidG9wIiwib3ZlcmZsb3dYIiwic3RhdGlzdGlrIiwiRm9vdGVyIiwibGVmdENvbnRlbnQiLCJyaWdodENvbnRlbnQiLCJjb2xvciIsInByb3BUeXBlcyIsIlByb3BUeXBlcyIsInJpZ2h0Q29udGVuIiwic3RyaW5nIiwiSGVhZGVyIiwicm91dGVyIiwidXNlUm91dGVyIiwicGF0aG5hbWUiLCJjb25maWciLCJpbmRvbmVzaWEiLCJDb21wb25lbnQiLCJnZXRJbml0aWFsUHJvcHMiLCJmZXRjaCIsImJhc2VfdXJsIiwiaXRlbXMiLCJqc29uIiwicHJvdmluY2UiLCJpdGVtUHJvdmluY2UiLCJzdGF0IiwidG90YWxfbGl2ZSIsImJ5RGF5SW5kbyIsInJlbmRlciIsImtleSIsImRpcmF3YXQiLCJyZWR1Y2UiLCJhIiwiQWN0aXZlIiwiTW9udGhOYW1lIiwiRGF0ZU5vdyIsIkRhdGUiLCJEYXkiLCJNb250aCIsIlllYXIiLCJMYWJlbCIsIlBvc2l0aWYiLCJTZW1idWgiLCJNZW5pbmdnYWwiLCJBa3RpZiIsIkRhdGEiLCJ2YWx1ZSIsImdldERhdGUiLCJnZXRNb250aCIsImdldEZ1bGxZZWFyIiwicHVzaCIsIk1hdGgiLCJhYnMiLCJha3RpZiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBOztBQUVBLE1BQU07QUFBQ0E7QUFBRCxJQUFRQyxtQkFBTyxDQUFDLGdEQUFELENBQXJCOztBQUVBLE1BQU1DLFVBQVUsR0FBSUMsS0FBRCxJQUFXO0FBQzFCLHNCQUNJO0FBQUssYUFBUyxFQUFDLHlCQUFmO0FBQUEsNEJBQ0k7QUFBSyxlQUFTLEVBQUMsc0NBQWY7QUFBQSw2QkFDSTtBQUFLLGlCQUFTLEVBQUMsbURBQWY7QUFBbUUsYUFBSyxFQUFFO0FBQUNDLGVBQUssRUFBRTtBQUFSLFNBQTFFO0FBQUEsK0JBQ0k7QUFBSyxtQkFBUyxFQUFDLFdBQWY7QUFBQSxpQ0FDSTtBQUFLLHFCQUFTLEVBQUMsUUFBZjtBQUFBLG9DQUNJO0FBQUssdUJBQVMsRUFBQyxZQUFmO0FBQUEsc0NBQ0k7QUFBRyx5QkFBUyxFQUFDLGlCQUFiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLDJCQURKLGVBRUk7QUFBSSx5QkFBUyxFQUFDLGtCQUFkO0FBQUEsdUNBQ0ksOERBQUMsNERBQUQ7QUFBYyx1QkFB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Ozs7Ozs7Ozs7OztBQ0FBLHlDOzs7Ozs7Ozs7OztBQ0FBLHdDOzs7Ozs7Ozs7OztBQ0FBLG1DOzs7Ozs7Ozs7OztBQ0FBLGlEOzs7Ozs7Ozs7OztBQ0FBLDZDOzs7Ozs7Ozs7OztBQ0FBLGlEOzs7Ozs7Ozs7OztBQ0FBLG1EIiwiZmlsZSI6InBhZ2VzL2luZG9uZXNpYS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBOdW1iZXJGb3JtYXQgZnJvbSBcInJlYWN0LW51bWJlci1mb3JtYXRcIlxyXG5cclxuY29uc3Qge3N1bX0gPSByZXF1aXJlKFwiLi4vLi4vdXRpbC9saWJyYXJ5LmpzXCIpXHJcblxyXG5jb25zdCBDYXJkU3RhdHVzID0gKHByb3BzKSA9PiB7XHJcbiAgICByZXR1cm4oXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3cgbXQtMyBtcy01IG1lLTUgbWItMlwiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1zbS0xMiBjb2wtbWQtNiBjb2wtbGctNiBjb2wteGwtM1wiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkIGJnLWRhbmdlciBpbWctY2FyZCBib3gtcHJpbWFyeS1zaGFkb3cgYm9yZGVyXCIgc3R5bGU9e3t3aWR0aDogXCIxNi41cmVtXCJ9fT5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmQtYm9keVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImQtZmxleFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LXdoaXRlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC13aGl0ZSBtYi0wXCI+IFRPVEFMIFBPU0lUSUY8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGgyIGNsYXNzTmFtZT1cIm1iLTAgbnVtYmVyLWZvbnRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPE51bWJlckZvcm1hdCB2YWx1ZT17c3VtKFwiQ29uZmlybWVkXCIsIHByb3BzKX0gZGlzcGxheVR5cGU9e1widGV4dFwifSB0aG91c2FuZFNlcGFyYXRvcj17XCIsXCJ9IGRlY2ltYWxTY2FsZT17XCIuXCJ9IGRlZmF1bHRWYWx1ZT17MH0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2gyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtd2hpdGUgbWItMFwiPk9yYW5nPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1zLWF1dG9cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz1cImltYWdlcy9wb3NpdGlmLnBuZ1wiIHdpZHRoPVwiNzBcIiBoZWlnaHQ9XCI3MFwiIGFsdD1cInBvc2l0aWZcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtc20tMTIgY29sLW1kLTYgY29sLWxnLTYgY29sLXhsLTNcIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZCBiZy1zdWNjZXNzIGltZy1jYXJkIGJveC1wcmltYXJ5LXNoYWRvdyBib3JkZXJcIiBzdHlsZT17e3dpZHRoOiBcIjE2LjVyZW1cIn19PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZC1ib2R5XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZC1mbGV4XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHQtd2hpdGVcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LXdoaXRlIG1iLTBcIj4gVE9UQUwgU0VNQlVIPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoMiBjbGFzc05hbWU9XCJtYi0wIG51bWJlci1mb250XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxOdW1iZXJGb3JtYXQgdmFsdWU9e3N1bShcIlJlY292ZXJlZFwiLCBwcm9wcyl9IGRpc3BsYXlUeXBlPXtcInRleHRcIn0gdGhvdXNhbmRTZXBhcmF0b3I9e1wiLFwifSBkZWNpbWFsU2NhbGU9e1wiLlwifSBkZWZhdWx0VmFsdWU9ezB9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9oMj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LXdoaXRlIG1iLTBcIj5PcmFuZzwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtcy1hdXRvXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9XCJpbWFnZXMvc2VtYnVoLnBuZ1wiIHdpZHRoPVwiNzBcIiBoZWlnaHQ9XCI3MFwiIGFsdD1cInBvc2l0aWZcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtc20tMTIgY29sLW1kLTYgY29sLWxnLTYgY29sLXhsLTNcIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZCBiZy1zZWNvbmRhcnkgaW1nLWNhcmQgYm94LXByaW1hcnktc2hhZG93IGJvcmRlclwiIHN0eWxlPXt7d2lkdGg6IFwiMTYuNXJlbVwifX0+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkLWJvZHlcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkLWZsZXhcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dC13aGl0ZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtd2hpdGUgbWItMFwiPiBUT1RBTCBNRU5JTkdHQUw8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGgyIGNsYXNzTmFtZT1cIm1iLTAgbnVtYmVyLWZvbnRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPE51bWJlckZvcm1hdCB2YWx1ZT17c3VtKFwiRGVhdGhzXCIsIHByb3BzKX0gZGlzcGxheVR5cGU9e1widGV4dFwifSB0aG91c2FuZFNlcGFyYXRvcj17XCIsXCJ9IGRlY2ltYWxTY2FsZT17XCIuXCJ9IGRlZmF1bHRWYWx1ZT17MH0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2gyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtd2hpdGUgbWItMFwiPk9yYW5nPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1zLWF1dG9cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz1cImltYWdlcy9tZW5pbmdnYWwucG5nXCIgd2lkdGg9XCI3MFwiIGhlaWdodD1cIjcwXCIgYWx0PVwicG9zaXRpZlwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1zbS0xMiBjb2wtbWQtNiBjb2wtbGctNiBjb2wteGwtM1wiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkIGJnLWluZm8gaW1nLWNhcmQgYm94LXByaW1hcnktc2hhZG93IGJvcmRlclwiIHN0eWxlPXt7d2lkdGg6IFwiMTYuNXJlbVwifX0+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkLWJvZHlcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkLWZsZXhcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dC13aGl0ZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtd2hpdGUgbWItMFwiPiBUT1RBTCBBS1RJRjwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDIgY2xhc3NOYW1lPVwibWItMCBudW1iZXItZm9udFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TnVtYmVyRm9ybWF0IHZhbHVlPXtzdW0oXCJBY3RpdmVcIiwgcHJvcHMpfSBkaXNwbGF5VHlwZT17XCJ0ZXh0XCJ9IHRob3VzYW5kU2VwYXJhdG9yPXtcIixcIn0gZGVjaW1hbFNjYWxlPXtcIi5cIn0gZGVmYXVsdFZhbHVlPXswfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvaDI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC13aGl0ZSBtYi0wXCI+T3Jhbmc8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibXMtYXV0b1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiaW1hZ2VzL2FjdGl2ZTEucG5nXCIgd2lkdGg9XCI3MFwiIGhlaWdodD1cIjcwXCIgYWx0PVwicG9zaXRpZlwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IENhcmRTdGF0dXMiLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCJcclxuaW1wb3J0IHtMaW5lLCBQaWV9IGZyb20gXCJyZWFjdC1jaGFydGpzLTJcIlxyXG5pbXBvcnQgTnVtYmVyRm9ybWF0IGZyb20gXCJyZWFjdC1udW1iZXItZm9ybWF0XCJcclxuXHJcbmNvbnN0IHtzdW0sIGdldEFsbE1vbnRofSA9IHJlcXVpcmUoXCIuLi8uLi91dGlsL2xpYnJhcnkuanNcIilcclxuXHJcbmNvbnN0IEdyYWZpayA9IChwcm9wcykgPT4ge1xyXG4gICAgbGV0IGRhdGFDb3ZpZCA9IG51bGxcclxuICAgIGxldCBkYXRhID0gbnVsbFxyXG5cclxuICAgIGlmKCFwcm9wcy5pc0dsb2JhbCkge1xyXG4gICAgICAgIGRhdGFDb3ZpZCA9IGdldEFsbE1vbnRoKHByb3BzKVxyXG4gICAgICAgIGRhdGEgPSB7XHJcbiAgICAgICAgICAgIGxhYmVsczogZGF0YUNvdmlkLmxhYmVsLFxyXG4gICAgICAgICAgICBkYXRhc2V0czogW1xyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIGxhYmVsOiBcIkp1bWxhaCBQb3NpdGlmXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgZmlsbDogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICAgICAgbGluZVRlbnNpb246IDAuMSxcclxuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IFwicmdiYSgyMjksNTYsNTAsMC40KVwiLFxyXG4gICAgICAgICAgICAgICAgICAgIGJvcmRlckNvbG9yOiBcInJnYmEoMjI5LCA1NiwgNTYsIDEpXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyQ2FwU3R5bGU6IFwiYnV0dFwiLFxyXG4gICAgICAgICAgICAgICAgICAgIGJvcmRlckRhc2g6IFtdLFxyXG4gICAgICAgICAgICAgICAgICAgIGJvcmRlckRhc2hPZmZzZXQ6IDAuMCxcclxuICAgICAgICAgICAgICAgICAgICBib3JkZXJKb2luU3R5bGU6IFwibWl0ZXJcIixcclxuICAgICAgICAgICAgICAgICAgICBwb2ludEJvcmRlckNvbG9yOiBcInJnYmEoMjI5LDU2LCA1NiwgMSlcIixcclxuICAgICAgICAgICAgICAgICAgICBwb2ludEJhY2tncm91bmRDb2xvcjogXCIjZmZmXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgcG9pbnRCb3JkZXJXaWR0aDogMSxcclxuICAgICAgICAgICAgICAgICAgICBwb2ludEhvdmVyUmFkaXVzOiAxMCxcclxuICAgICAgICAgICAgICAgICAgICBwb2ludEhvdmVyQmFja2dyb3VuZENvbG9yOiBcInJnYmEoMjI5LDU2LCA1NiwgMSlcIixcclxuICAgICAgICAgICAgICAgICAgICBwb2ludEhvdmVyQm9yZGVyQ29sb3I6IFwicmdiYSgyMjAsMjIwLDIyMCwxKVwiLFxyXG4gICAgICAgICAgICAgICAgICAgIHBvaW50Qm9yZGVyV2lkdGg6IDIsXHJcbiAgICAgICAgICAgICAgICAgICAgcG9pbnRSYWRpdXM6IDEsXHJcbiAgICAgICAgICAgICAgICAgICAgcG9pbnRIaXRSYWRpdXM6IDEwLFxyXG4gICAgICAgICAgICAgICAgICAgIGRhdGE6IGRhdGFDb3ZpZC5wb3NpdGlmXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIGxhYmVsOiBcIkp1bWxhaCBzZW1idWhcIixcclxuICAgICAgICAgICAgICAgICAgICBmaWxsOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgICAgICBsaW5lVGVuc2lvbjogMC4xLFxyXG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogXCJibHVlXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyQ29sb3I6IFwiYmx1ZVwiLFxyXG4gICAgICAgICAgICAgICAgICAgIGJvcmRlckNhcFN0eWxlOiBcImJ1dHRcIixcclxuICAgICAgICAgICAgICAgICAgICBib3JkZXJEYXNoOiBbXSxcclxuICAgICAgICAgICAgICAgICAgICBib3JkZXJEYXNoT2Zmc2V0OiAwLjAsXHJcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVySm9pblN0eWxlOiBcIm1pdGVyXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgcG9pbnRCb3JkZXJDb2xvcjogXCJibHVlXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgcG9pbnRCYWNrZ3JvdW5kQ29sb3I6IFwiI2ZmZlwiLFxyXG4gICAgICAgICAgICAgICAgICAgIHBvaW50Qm9yZGVyV2lkdGg6IDEsXHJcbiAgICAgICAgICAgICAgICAgICAgcG9pbnRIb3ZlclJhZGl1czogMTAsXHJcbiAgICAgICAgICAgICAgICAgICAgcG9pbnRIb3ZlckJhY2tncm91bmRDb2xvcjogXCJibHVlXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgcG9pbnRIb3ZlckJvcmRlckNvbG9yOiBcImJsdWVcIixcclxuICAgICAgICAgICAgICAgICAgICBwb2ludEJvcmRlcldpZHRoOiAyLFxyXG4gICAgICAgICAgICAgICAgICAgIHBvaW50UmFkaXVzOiAxLFxyXG4gICAgICAgICAgICAgICAgICAgIHBvaW50SGl0UmFkaXVzOiAxMCxcclxuICAgICAgICAgICAgICAgICAgICBkYXRhOiBkYXRhQ292aWQuc2VtYnVoXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIGxhYmVsOiBcIkp1bWxhaCBtZW5pbmdnYWxcIixcclxuICAgICAgICAgICAgICAgICAgICBmaWxsOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgICAgICBsaW5lVGVuc2lvbjogMC4xLFxyXG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogXCJncmV5XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyQ29sb3I6IFwiZ3JleVwiLFxyXG4gICAgICAgICAgICAgICAgICAgIGJvcmRlckNhcFN0eWxlOiBcImJ1dHRcIixcclxuICAgICAgICAgICAgICAgICAgICBib3JkZXJEYXNoOiBbXSxcclxuICAgICAgICAgICAgICAgICAgICBib3JkZXJEYXNoT2Zmc2V0OiAwLjAsXHJcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVySm9pblN0eWxlOiBcIm1pdGVyXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgcG9pbnRCb3JkZXJDb2xvcjogXCJncmV5XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgcG9pbnRCYWNrZ3JvdW5kQ29sb3I6IFwiI2ZmZlwiLFxyXG4gICAgICAgICAgICAgICAgICAgIHBvaW50Qm9yZGVyV2lkdGg6IDEsXHJcbiAgICAgICAgICAgICAgICAgICAgcG9pbnRIb3ZlclJhZGl1czogMTAsXHJcbiAgICAgICAgICAgICAgICAgICAgcG9pbnRIb3ZlckJhY2tncm91bmRDb2xvcjogXCJncmV5XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgcG9pbnRIb3ZlckJvcmRlckNvbG9yOiBcImdyZXlcIixcclxuICAgICAgICAgICAgICAgICAgICBwb2ludEJvcmRlcldpZHRoOiAyLFxyXG4gICAgICAgICAgICAgICAgICAgIHBvaW50UmFkaXVzOiAxLFxyXG4gICAgICAgICAgICAgICAgICAgIHBvaW50SGl0UmFkaXVzOiAxMCxcclxuICAgICAgICAgICAgICAgICAgICBkYXRhOiBkYXRhQ292aWQubWVuaW5nZ2FsXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIF1cclxuICAgICAgICB9XHJcblxyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGRhdGFDb3ZpZFBpZSA9IHtcclxuICAgICAgICBsYWJlbHM6IFtcclxuICAgICAgICAgICAgXCJwb3NpdGlmXCIsXHJcbiAgICAgICAgICAgIFwiU2VtYnVoXCIsXHJcbiAgICAgICAgICAgIFwibWVuaW5nZ2FsXCIsXHJcbiAgICAgICAgXSxcclxuICAgICAgICBkYXRhc2V0czogW1xyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBkYXRhOltzdW0oXCJDb25maXJtZWRcIiwgcHJvcHMpLCBzdW0oXCJSZWNvdmVyZWRcIiwgcHJvcHMpLCBzdW0oXCJEZWF0aHNcIiwgcHJvcHMpXSxcclxuICAgICAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogW1xyXG4gICAgICAgICAgICAgICAgICAgIFwiI0ZGNjM4NFwiLFxyXG4gICAgICAgICAgICAgICAgICAgIFwiIzM2QTJFQlwiLFxyXG4gICAgICAgICAgICAgICAgICAgIFwiI0ZGQ0U1NlwiXHJcbiAgICAgICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICAgICAgSG92ZXJCYWNrZ3JvdW5kQ29sb3I6IFtcclxuICAgICAgICAgICAgICAgICAgICBcIiNGRjYzODRcIixcclxuICAgICAgICAgICAgICAgICAgICBcIiMzNkEyRUJcIixcclxuICAgICAgICAgICAgICAgICAgICBcIiNGRkNFNTZcIlxyXG4gICAgICAgICAgICAgICAgXVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgXVxyXG4gICAgfVxyXG5cclxuICAgIHJldHVybihcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvdyBtYi01XCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLWxnLTEyIGNvbC1tZC0xMiBjb2wtc20tMTIgY29sLXhsLTEyXCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmQgb3ZlcmZsb3ctaGlkZGVuIGJnLXdoaXRlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkLWhlYWRlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aDMgY2xhc3NOYW1lPVwiY2FyZC10aXRlbFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge3Byb3BzLmlzR2xvYmFsID8gXCJTdGF0aXN0aWsgVmlydXMgQ29yb25hIGRpIER1bmlhXCIgOiBcIlN0YXRpc3RpayBWaXJ1cyBDb3JvbmEgZGkgSW5kb25lc2lhXCJ9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvaDM+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkLWJvZHlcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjaGFydC13cmFwcGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7cHJvcHMuaXNHbG9iYWwgPyBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxQaWUgZGF0YT17ZGF0YUNvdmlkUGllfSB3aWR0aD17NjAwfSBoZWlnaHQ9ezYwMH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9wdGlvbnM9e3ttYWludGFpbkFzcGVjdFJhdGlvOiBmYWxzZX19IC8+IDpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5lIGRhdGE9e2RhdGF9IHdpZHRoPXsxMDB9IGhlaWdodD17NDB9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBHcmFmaWsiLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXHJcbmltcG9ydCBOdW1iZXJGb3JtYXQgZnJvbSAncmVhY3QtbnVtYmVyLWZvcm1hdCdcclxuXHJcbmNvbnN0IFRhYmxlID0gKHByb3BzKSA9PiB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDw+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93IG1iLTVcIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLW1iLTEyIGNvbC1tZC0xMiBjb2wtbGctMTIgY29sLXhsLTE0XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZC1oZWFkZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoMyBjbGFzc05hbWU9XCJjYXJkLXRpdGxlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3Byb3BzLmlzR2xvYmFsID8gXCJEYXRhIEthc3VzIENvdmlkLTE5IERpIER1bmlhXCIgOiBcIkRhdGEgS2FzdXMgQ292aWQtMTkgRGkgSW5kb25lc2lhXCJ9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2gzPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkLWJvZHlcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGFibGUtcmVzcG9uc2l2ZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0YWJsZSBjbGFzc05hbWU9XCJ0YWJsZSB0YWJsZS1ib3JkZXJlZCB0YWJsZS1ob3ZlciBtYi0wIHRleHQtbm93cmFwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aGVhZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0cj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGg+Tm88L3RoPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aD57cHJvcHMuaXNHbG9iYWwgPyBcIk5lZ2FyYVwiIDogXCJQcm92aW5zaVwifTwvdGg+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoPlBvc2l0aWY8L3RoPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aD5TZW1idWg8L3RoPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aD5NZW5pbmdnYWw8L3RoPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90aGVhZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRib2R5PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3Byb3BzLmlzR2xvYmFsID9cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIChwcm9wcy5kYXRhICYmIHByb3BzLmRhdGEubWFwKChpdGVtLCBpbmRleCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ciBrZXk9e2luZGV4fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPntpbmRleCArIDF9PC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPntpdGVtLmF0dHJpYnV0ZXMuQ291bnRyeV9SZWdpb259PC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPE51bWJlckZvcm1hdCB2YWx1ZT17aXRlbS5hdHRyaWJ1dGVzLkNvbmZpcm1lZH0gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5VHlwZT17XCJ0ZXh0XCJ9IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhvdXNhbmRTZXBhcmF0b3I9e1wiLFwifVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGVjaW1hbFNlcGFyYXRvcj17XCIuXCJ9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZWZhdWx0VmFsdWU9ezB9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxOdW1iZXJGb3JtYXQgdmFsdWU9e2l0ZW0uYXR0cmlidXRlcy5SZWNvdmVyZWR9IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheVR5cGU9e1widGV4dFwifSBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRob3VzYW5kU2VwYXJhdG9yPXtcIixcIn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRlY2ltYWxTZXBhcmF0b3I9e1wiLlwifVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGVmYXVsdFZhbHVlPXswfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TnVtYmVyRm9ybWF0IHZhbHVlPXtpdGVtLmF0dHJpYnV0ZXMuRGVhdGhzfSBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXlUeXBlPXtcInRleHRcIn0gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aG91c2FuZFNlcGFyYXRvcj17XCIsXCJ9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZWNpbWFsU2VwYXJhdG9yPXtcIi5cIn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRlZmF1bHRWYWx1ZT17MH0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKHByb3BzLnByb3ZpbnNpICYmIHByb3BzLnByb3ZpbnNpLm1hcCgoaXRlbSwgaW5kZXgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dHIga2V5PXtpbmRleH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD57aW5kZXggKyAxfTwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD57aXRlbS5hdHRyaWJ1dGVzLlByb3ZpbnNpfTwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxOdW1iZXJGb3JtYXQgdmFsdWU9e2l0ZW0uYXR0cmlidXRlcy5LYXN1c19Qb3NpfSBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXlUeXBlPXtcInRleHRcIn0gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aG91c2FuZFNlcGFyYXRvcj17XCIsXCJ9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZWNpbWFsU2VwYXJhdG9yPXtcIi5cIn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRlZmF1bHRWYWx1ZT17MH0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPE51bWJlckZvcm1hdCB2YWx1ZT17aXRlbS5hdHRyaWJ1dGVzLkthc3VzX1NlbWJ9IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheVR5cGU9e1widGV4dFwifSBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRob3VzYW5kU2VwYXJhdG9yPXtcIixcIn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRlY2ltYWxTZXBhcmF0b3I9e1wiLlwifVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGVmYXVsdFZhbHVlPXswfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TnVtYmVyRm9ybWF0IHZhbHVlPXtpdGVtLmF0dHJpYnV0ZXMuS2FzdXNfTWVuaX0gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5VHlwZT17XCJ0ZXh0XCJ9IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhvdXNhbmRTZXBhcmF0b3I9e1wiLFwifVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGVjaW1hbFNlcGFyYXRvcj17XCIuXCJ9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZWZhdWx0VmFsdWU9ezB9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90Ym9keT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RhYmxlPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PiAgXHJcbiAgICAgICAgPC8+XHJcbiAgICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFRhYmxlXHJcbiIsImltcG9ydCBIZWFkZXIgZnJvbSBcIi4uL0xheW91dC9IZWFkZXJcIjtcclxuaW1wb3J0IEZvb3RlciBmcm9tIFwiLi4vTGF5b3V0L0Zvb3RlclwiO1xyXG5pbXBvcnQgQ2FyZFN0YXR1cyBmcm9tIFwiLi9DYXJkU3RhdHVzXCI7XHJcbmltcG9ydCBHcmFmaWsgZnJvbSBcIi4vR3JhZmlrXCI7XHJcbmltcG9ydCBUYWJsZSBmcm9tIFwiLi9UYWJsZVwiO1xyXG5cclxuZnVuY3Rpb24gSW5kZXhQYWdlKHByb3BzKXtcclxuICAgIGNvbnN0IGNvbnRlbnRTdHlsZT0ge1xyXG4gICAgICAgIG1pbkhlaWdodDogXCI5MHZoXCIsXHJcbiAgICAgICAgdG9wOiBcIjU2cHhcIixcclxuICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IFwiI2YxZjFmOVwiLFxyXG4gICAgICAgIG92ZXJmbG93WDogXCJoaWRkZW5cIlxyXG4gICAgfVxyXG5cclxuICAgIHJldHVybihcclxuICAgICAgICA8ZGl2IHN0eWxlPXt7YmFja2dyb3VuZENvbG9yOiBcIiNmMWYxZjlcIn19PlxyXG4gICAgICAgICAgICA8SGVhZGVyIC8+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyIGNvbnRlbnQgcG9zaXRpb24tcmVsYXRpdmVcIiBzdHlsZT17Y29udGVudFN0eWxlfT5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtMTIgZC1mbGV4IGp1c3RpZnktY29udGVudC1jZW50ZXIgdGV4dC1jZW50ZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwibXQtNSBoMlwiPktBV0FMIENPVklELTE5PC9wPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLTEyIGQtZmxleCBqdXN0aWZ5LWNvbnRlbnQtY2VudGVyIHRleHQtY2VudGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cIm10LTMgZjE4XCI+V2Vic2l0ZSBQZW1hbnRhdWFuIHRlcmtpbmkga2FzdXMgQ292aWQtMTkgICA8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxDYXJkU3RhdHVzIGlzR2xvYmFsPXtwcm9wcy5pc0dsb2JhbH0gZGF0YT17cHJvcHMuZGF0YSA/IHByb3BzLmRhdGEgOiBudWxsfSAvPlxyXG4gICAgICAgICAgICAgICAgPEdyYWZpayBpc0dsb2JhbD17cHJvcHMuaXNHbG9iYWx9IGRhdGE9e3Byb3BzLmRhdGEgPyBwcm9wcy5kYXRhIDogbnVsbH0gc3RhdGlzdGlrPXtwcm9wcy5zdGF0aXN0aWsgPyBwcm9wcy5zdGF0aXN0aWsgOiBudWxsIH0gLz5cclxuICAgICAgICAgICAgICAgIDxUYWJsZSBpc0dsb2JhbD17cHJvcHMuaXNHbG9iYWx9IGRhdGE9e3Byb3BzLmRhdGEgPyBwcm9wcy5kYXRhIDogbnVsbH0gcHJvdmluc2k9e3Byb3BzLnByb3ZpbnNpfSAvPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPEZvb3RlciByaWdodENvbnRlbnQ9e1wiXCJ9XHJcbiAgICAgICAgICAgICAgICAgICAgbGVmdENvbnRlbnQ9e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1sLTIgZjA4IGZvbnQtd2VpZ2h0LWJvbGRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIE15LVRlY2ggQDIwMjEgQWxsIFJpZ2h0IFJlc2VydmVkXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIH0gLz5cclxuICAgICAgICA8L2Rpdj5cclxuICAgIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgSW5kZXhQYWdlIiwiaW1wb3J0IFByb3BUeXBlcyBmcm9tIFwicHJvcC10eXBlc1wiXHJcblxyXG5jb25zdCBGb290ZXIgPSAocHJvcHMpID0+IHtcclxuICAgIGlmKCFwcm9wcy5sZWZ0Q29udGVudCAmJiAhcHJvcHMucmlnaHRDb250ZW50KXtcclxuICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4oXHJcbiAgICAgICAgPGZvb3RlciBjbGFzc05hbWU9XCJtYWluLWZvb3RlciBjbGVhcmZpeCBmaXhlZC1ib3R0b20gYmctd2hpdGUgYm9yZGVyLXRvcFwiPlxyXG4gICAgICAgICAgICB7cHJvcHMucmlnaHRDb250ZW50ICYmIChcclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxvYXQtcmlnaHQgZC1ub25lIGQtc20taW5saW5lXCIgc3R5bGU9e3tjb2xvcjpcIiM2Yzc1N2RcIn19PlxyXG4gICAgICAgICAgICAgICAgICAgIHtwcm9wcy5yaWdodENvbnRlbnR9XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAge3Byb3BzLmxlZnRDb250ZW50ICYmIHByb3BzLmxlZnRDb250ZW50fVxyXG4gICAgICAgIDwvZm9vdGVyPlxyXG4gICAgKVxyXG59XHJcblxyXG5Gb290ZXIucHJvcFR5cGVzID0ge1xyXG4gICAgbGVmdENvbnRlbnQgOiBQcm9wVHlwZXMuZWxlbWVudCxcclxuICAgIHJpZ2h0Q29udGVuIDogUHJvcFR5cGVzLnN0cmluZyxcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgRm9vdGVyIiwiaW1wb3J0IEhlYWQgZnJvbSBcIm5leHQvaGVhZFwiXHJcbmltcG9ydCBOYXYgZnJvbSBcInJlYWN0LWJvb3RzdHJhcC9OYXZcIjtcclxuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSBcIm5leHQvcm91dGVyXCJcclxuXHJcbmNvbnN0IEhlYWRlciA9IChwcm9wcykgPT4ge1xyXG4gICAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XHJcbiAgICByZXR1cm4oXHJcbiAgICAgICAgPD5cclxuICAgICAgICAgICAgPEhlYWQ+PHRpdGxlPkthd2FsIENvdmlkPC90aXRsZT48L0hlYWQ+XHJcbiAgICAgICAgICAgIDxuYXYgY2xhc3NOYW1lPVwibWFpbi1oZWFkZXIgbmF2YmFyIG5hdmJhci1leHBhbmQgbmF2YmFyLWxpZ2h0IG5hdmJhci13aGl0ZSBmaXhlZC10b3AgYm9yZGVyLWJvdHRvbVwiIHN0eWxlPXt7YmFja2dyb3VuZENvbG9yOlwid2hpdGVcIn19PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm14LWF1dG8gaGlkZGVuLXNtLWRvd25cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPE5hdiB2YXJpYW50PVwicGlsbHNcIiBkZWZhdWx0QWN0aXZlS2V5PXtyb3V0ZXIucGF0aG5hbWU9PVwiL1wiID8gXCJsaW5rLTBcIiA6IFwibGluay0xXCJ9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPE5hdi5JdGVtPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxOYXYuTGluayBldmVudEtleT1cImxpbmstMFwiIGhyZWY9XCIvXCI+R2xvYmFsPC9OYXYuTGluaz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTmF2Lkl0ZW0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TmF2Lkl0ZW0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPE5hdi5MaW5rIGV2ZW50S2V5PVwibGluay0xXCIgaHJlZj1cImluZG9uZXNpYVwiPkluZG9uZXNpYTwvTmF2Lkxpbms+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L05hdi5JdGVtPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L05hdj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L25hdj5cclxuICAgICAgICA8Lz5cclxuICAgIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgSGVhZGVyIiwiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gXCJyZWFjdFwiXHJcbmltcG9ydCBJbmRleFBhZ2UgZnJvbSBcIi4uL2NvbXBvbmVudHMvRGFzaGJvYXJkL2luZGV4UGFnZVwiXHJcbmltcG9ydCBmZXRjaCBmcm9tIFwiaXNvbW9ycGhpYy1mZXRjaFwiXHJcblxyXG5jb25zdCBjb25maWcgPSAgcmVxdWlyZShcIi4uL2NvbmZpZy5qc29uXCIpXHJcblxyXG5jbGFzcyBpbmRvbmVzaWEgZXh0ZW5kcyBDb21wb25lbnQge1xyXG4gICAgc3RhdGljIGFzeW5jIGdldEluaXRpYWxQcm9wcygpe1xyXG4gICAgICAgIGNvbnN0IGRhdGEgPSBhd2FpdCBmZXRjaChgJHtjb25maWdbJ2thd2FsX2Nvcm9uYSddLmJhc2VfdXJsfS9pbmRvbmVzaWFgKVxyXG4gICAgICAgIGNvbnN0IGl0ZW1zID0gYXdhaXQgZGF0YS5qc29uKClcclxuICAgICAgICBjb25zdCBwcm92aW5jZSA9IGF3YWl0IGZldGNoKGAke2NvbmZpZ1sna2F3YWxfY29yb25hJ10uYmFzZV91cmx9L2luZG9uZXNpYS9wcm92aW5zaWApXHJcbiAgICAgICAgY29uc3QgaXRlbVByb3ZpbmNlID0gYXdhaXQgcHJvdmluY2UuanNvbigpXHJcbiAgICAgICAgY29uc3Qgc3RhdCA9IGF3YWl0IGZldGNoKGAke2NvbmZpZ1snZ2xvYmFsLWFwaSddLmJhc2VfdXJsfSR7Y29uZmlnWydnbG9iYWwtYXBpJ10udG90YWxfbGl2ZX0vaW5kb25lc2lhYClcclxuICAgICAgICBjb25zdCBieURheUluZG8gPSBhd2FpdCBzdGF0Lmpzb24oKVxyXG4gICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgIGl0ZW1zLFxyXG4gICAgICAgICAgICBieURheUluZG8sXHJcbiAgICAgICAgICAgIGl0ZW1Qcm92aW5jZVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIHJlbmRlcigpe1xyXG4gICAgICAgIGNvbnN0IHtpdGVtcywgYnlEYXlJbmRvLCBpdGVtUHJvdmluY2V9ID0gdGhpcy5wcm9wc1xyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDxJbmRleFBhZ2UgaXNHbG9iYWw9e2ZhbHNlfSBkYXRhPXtpdGVtc30gc3RhdGlzdGlrPXtieURheUluZG99IHByb3ZpbnNpPXtpdGVtUHJvdmluY2V9IC8+XHJcbiAgICAgICAgKVxyXG4gICAgfVxyXG59IFxyXG5cclxuZXhwb3J0IGRlZmF1bHQgaW5kb25lc2lhIiwiZXhwb3J0IGNvbnN0IHN1bSA9IGZ1bmN0aW9uIChrZXksIHByb3BzKXtcclxuICAgIGlmKHByb3BzLmlzR2xvYmFsID09IGZhbHNlKXtcclxuICAgICAgICBzd2l0Y2goa2V5KXtcclxuICAgICAgICAgICAgY2FzZSAnQ29uZmlybWVkJzpcclxuICAgICAgICAgICAgICAgIHJldHVybiBwcm9wcy5kYXRhWzBdLnBvc2l0aWZcclxuICAgICAgICAgICAgY2FzZSAnUmVjb3ZlcmVkJzpcclxuICAgICAgICAgICAgICAgIHJldHVybiBwcm9wcy5kYXRhWzBdLnNlbWJ1aFxyXG4gICAgICAgICAgICBjYXNlICdEZWF0aHMnOlxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHByb3BzLmRhdGFbMF0ubWVuaW5nZ2FsXHJcbiAgICAgICAgICAgIGNhc2UgJ0FjdGl2ZSc6XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gcHJvcHMuZGF0YVswXS5kaXJhd2F0XHJcbiAgICAgICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gMFxyXG4gICAgICAgIH1cclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICAgc3dpdGNoKGtleSl7XHJcbiAgICAgICAgICAgIGNhc2UgJ0NvbmZpcm1lZCc6XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gcHJvcHMuZGF0YS5yZWR1Y2UoKHN1bSxhKSA9PntcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gc3VtICsgYS5hdHRyaWJ1dGVzLkNvbmZpcm1lZFxyXG4gICAgICAgICAgICAgICAgfSAsMClcclxuICAgICAgICAgICAgY2FzZSAnUmVjb3ZlcmVkJzpcclxuICAgICAgICAgICAgICAgIHJldHVybiBwcm9wcy5kYXRhLnJlZHVjZSgoc3VtLGEpID0+e1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBzdW0gKyBhLmF0dHJpYnV0ZXMuUmVjb3ZlcmVkXHJcbiAgICAgICAgICAgICAgICB9ICwwKVxyXG4gICAgICAgICAgICBjYXNlICdEZWF0aHMnOlxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHByb3BzLmRhdGEucmVkdWNlKChzdW0sYSkgPT57XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHN1bSArIGEuYXR0cmlidXRlcy5EZWF0aHNcclxuICAgICAgICAgICAgICAgIH0gLDApXHJcbiAgICAgICAgICAgIGNhc2UgJ0FjdGl2ZSc6XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gcHJvcHMuZGF0YS5yZWR1Y2UoKHN1bSxhKSA9PntcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gc3VtICsgYS5hdHRyaWJ1dGVzLkFjdGl2ZVxyXG4gICAgICAgICAgICAgICAgfSAsMClcclxuICAgICAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgICAgIHJldHVybiAwXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgZ2V0QWxsTW9udGggPSAocHJvcHMpID0+IHtcclxuICAgIGNvbnN0IE1vbnRoTmFtZSA9IFtcIkphblwiLCBcIkZlYlwiLCBcIk1hclwiLCBcIkFwclwiLCBcIk1laVwiLCBcIkp1blwiLCBcIkp1bFwiLCBcIkFndVwiLCBcIlNlcFwiLCBcIk9rdFwiLCBcIk5vdlwiLCBcImRlc1wiXVxyXG4gICAgbGV0IERhdGVOb3cgPSBuZXcgRGF0ZSgpXHJcbiAgICBsZXQgRGF5ID0gbnVsbFxyXG4gICAgbGV0IE1vbnRoID0gbnVsbFxyXG4gICAgbGV0IFllYXIgPSBudWxsXHJcbiAgICBsZXQgTGFiZWwgPSBbXVxyXG4gICAgbGV0IFBvc2l0aWYgPSBbXVxyXG4gICAgbGV0IFNlbWJ1aCA9IFtdXHJcbiAgICBsZXQgTWVuaW5nZ2FsID0gW11cclxuICAgIGxldCBBa3RpZiA9IFtdXHJcbiAgICBsZXQgRGF0YSA9IFtdXHJcblxyXG4gICAgZm9yKGxldCB2YWx1ZSBvZiBwcm9wcy5zdGF0aXN0aWspIHtcclxuICAgICAgICBEYXRlTm93ID0gbmV3IERhdGUodmFsdWUuRGF0ZSlcclxuICAgICAgICBEYXkgPSBEYXRlTm93LmdldERhdGUoKVxyXG4gICAgICAgIE1vbnRoID0gRGF0ZU5vdy5nZXRNb250aCgpXHJcbiAgICAgICAgWWVhciA9IERhdGVOb3cuZ2V0RnVsbFllYXIoKVxyXG4gICAgICAgIExhYmVsLnB1c2goRGF5ICsgXCIgXCIgKyBNb250aE5hbWVbTWF0aC5hYnMoTW9udGgpXSlcclxuICAgICAgICBBa3RpZi5wdXNoKHZhbHVlLkFjdGl2ZSlcclxuICAgICAgICBQb3NpdGlmLnB1c2godmFsdWUuQ29uZmlybWVkKVxyXG4gICAgICAgIFNlbWJ1aC5wdXNoKHZhbHVlLlJlY292ZXJlZClcclxuICAgICAgICBNZW5pbmdnYWwucHVzaCh2YWx1ZS5EZWF0aHMpXHJcblxyXG4gICAgfVxyXG5cclxuICAgIERhdGEgPSB7XHJcbiAgICAgICAgbGFiZWw6IExhYmVsLFxyXG4gICAgICAgIGFrdGlmOiBBa3RpZixcclxuICAgICAgICBzZW1idWg6IFNlbWJ1aCxcclxuICAgICAgICBtZW5pbmdnYWw6IE1lbmluZ2dhbCxcclxuICAgICAgICBwb3NpdGlmOiBQb3NpdGlmXHJcbiAgICB9XHJcbiAgICByZXR1cm4gRGF0YVxyXG59IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiaXNvbW9ycGhpYy1mZXRjaFwiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9oZWFkXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L3JvdXRlclwiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicHJvcC10eXBlc1wiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3RcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LWJvb3RzdHJhcC9OYXZcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LWNoYXJ0anMtMlwiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QtbnVtYmVyLWZvcm1hdFwiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QvanN4LWRldi1ydW50aW1lXCIpOzsiXSwic291cmNlUm9vdCI6IiJ9