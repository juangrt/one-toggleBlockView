'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ClusterDetailView = function (_React$Component) {
  _inherits(ClusterDetailView, _React$Component);

  function ClusterDetailView(props) {
    _classCallCheck(this, ClusterDetailView);

    //Create event binding here

    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(ClusterDetailView).call(this, props));

    _this.onWindowClick = _this.onWindowClick.bind(_this);
    _this.mainComponentStyle = _this.mainComponentStyle.bind(_this);
    _this.containerStyle = _this.backdropStyle.bind(_this);

    return _this;
  }

  _createClass(ClusterDetailView, [{
    key: 'onWindowClick',
    value: function () {
      function onWindowClick(event) {
        event.stopPropagation();
      }

      return onWindowClick;
    }()
  }, {
    key: 'backdropStyle',
    value: function () {
      function backdropStyle() {
        var style = {
          position: "fixed",
          width: "100%",
          height: "100%",
          backgroundColor: "rgba(0, 0, 0, 0.5)",
          top: "0",
          left: "0"
        };
        return style;
      }

      return backdropStyle;
    }()
  }, {
    key: 'mainComponentStyle',
    value: function () {
      function mainComponentStyle() {
        var style = {
          zIndex: "100",
          border: "solid 1px black",
          position: "fixed",
          left: "12.5%",
          top: "5%",
          height: "90%",
          width: "75%",
          backgroundColor: "#FFFFFF"
        };
        return Object.assign({}, style, this.props.style);
      }

      return mainComponentStyle;
    }()
  }, {
    key: 'render',
    value: function () {
      function render() {
        return _react2['default'].createElement(
          'div',
          { style: this.backdropStyle(), onClick: this.props.onClick },
          _react2['default'].createElement(
            'div',
            { style: this.mainComponentStyle(), onClick: this.onWindowClick },
            this.props.element
          )
        );
      }

      return render;
    }()
  }]);

  return ClusterDetailView;
}(_react2['default'].Component);

ClusterDetailView.propTypes = {
  onClick: _react2['default'].PropTypes.func,
  element: _react2['default'].PropTypes.element.isRequired,
  style: _react2['default'].PropTypes.object
};

ClusterDetailView.defaultProps = {
  style: {}
};

exports['default'] = ClusterDetailView;