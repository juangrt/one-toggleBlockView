"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ClusterThumbView = function (_React$Component) {
  _inherits(ClusterThumbView, _React$Component);

  function ClusterThumbView(props) {
    _classCallCheck(this, ClusterThumbView);

    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(ClusterThumbView).call(this, props));

    _this.style = _this.style.bind(_this);
    return _this;
  }

  _createClass(ClusterThumbView, [{
    key: "style",
    value: function () {
      function style() {
        var style = {
          width: "10em",
          minHeight: "10em",
          float: "left",
          margin: ".5em",
          backgroundColor: "#FFFFFF"
        };
        return Object.assign({}, style, this.props.style);
      }

      return style;
    }()
  }, {
    key: "render",
    value: function () {
      function render() {
        return _react2["default"].createElement(
          "div",
          { className: "oneThumbView", style: this.style(), onClick: this.props.onClick },
          this.props.element
        );
      }

      return render;
    }()
  }]);

  return ClusterThumbView;
}(_react2["default"].Component);

ClusterThumbView.propTypes = {
  onClick: _react2["default"].PropTypes.func,
  element: _react2["default"].PropTypes.element,
  style: _react2["default"].PropTypes.object
};

ClusterThumbView.defaultProps = {
  style: {}
};

exports["default"] = ClusterThumbView;