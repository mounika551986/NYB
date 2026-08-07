"use strict";

function _toConsumableArray(r) { return _arrayWithoutHoles(r) || _iterableToArray(r) || _unsupportedIterableToArray(r) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _iterableToArray(r) { if ("undefined" != typeof Symbol && null != r[Symbol.iterator] || null != r["@@iterator"]) return Array.from(r); }
function _arrayWithoutHoles(r) { if (Array.isArray(r)) return _arrayLikeToArray(r); }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
// Student Object
var student = {
  id: 101,
  name: "Mounika",
  course: "React JS",
  marks: [85, 90, 88]
};

// Arrow Function
var calculateAverage = function calculateAverage() {
  for (var _len = arguments.length, marks = new Array(_len), _key = 0; _key < _len; _key++) {
    marks[_key] = arguments[_key];
  }
  var total = marks.reduce(function (sum, mark) {
    return sum + mark;
  }, 0);
  return total / marks.length;
};
var average = calculateAverage.apply(void 0, _toConsumableArray(student.marks));

// Template Literal
var message = "\nStudent Report\n\nID : ".concat(student.id, "\nName : ").concat(student.name, "\nCourse : ").concat(student.course, "\nAverage : ").concat(average, "\n");
console.log(message);

// Display on Browser
document.body.innerHTML = "\n<h1>Student Report</h1>\n<p><strong>ID:</strong> ".concat(student.id, "</p>\n<p><strong>Name:</strong> ").concat(student.name, "</p>\n<p><strong>Course:</strong> ").concat(student.course, "</p>\n<p><strong>Average:</strong> ").concat(average, "</p>\n");