'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _ClusterThumbView = require('../ClusterThumbView');

var _ClusterThumbView2 = _interopRequireDefault(_ClusterThumbView);

var _ClusterDetailView = require('../ClusterDetailView');

var _ClusterDetailView2 = _interopRequireDefault(_ClusterDetailView);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

//Default state
//mode : Thumbnail | Detail
var THUMBNAIL_MODE = "thumbnail";
var DETAIL_MODE = "detail";

var ClusterToggleView = function (_React$Component) {
  _inherits(ClusterToggleView, _React$Component);

  function ClusterToggleView(props) {
    _classCallCheck(this, ClusterToggleView);

    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(ClusterToggleView).call(this, props));

    _this.state = {
      mode: _this.props.mode
    };

    //Create event bindings here
    _this.onToggleView = _this.onToggleView.bind(_this);
    _this.getThumbElement = _this.getThumbElement.bind(_this);
    _this.getDetailElement = _this.getDetailElement.bind(_this);

    if (_react2['default'].Children.count(_this.props.children) > 2) {
      throw new Error("Too many Child Elements");
    }
    return _this;
  }

  _createClass(ClusterToggleView, [{
    key: 'getThumbElement',
    value: function () {
      function getThumbElement() {
        if (this.props.thumbElement) {
          return this.props.thumbElement;
        } else if (_react2['default'].Children.count(this.props.children) >= 1) {
          return Array.isArray(this.props.children) ? this.props.children[0] : this.props.children;
        } else {
          throw new Error("No Thumb Element to Render");
        }
      }

      return getThumbElement;
    }()
  }, {
    key: 'getDetailElement',
    value: function () {
      function getDetailElement() {
        if (this.props.detailElement) {
          return this.props.detailElement;
        } else if (_react2['default'].Children.count(this.props.children) === 2) {
          return this.props.children[1];
        } else {
          throw new Error("No Detail Element to Render");
        }
      }

      return getDetailElement;
    }()
  }, {
    key: 'onToggleView',
    value: function () {
      function onToggleView(event) {
        var newMode = this.state.mode === THUMBNAIL_MODE ? DETAIL_MODE : THUMBNAIL_MODE;
        this.setState({ mode: newMode });
      }

      return onToggleView;
    }()
  }, {
    key: 'render',
    value: function () {
      function render() {
        var _this2 = this;

        return _react2['default'].createElement(
          'div',
          { className: 'toggleView', style: this.props.style },
          _react2['default'].createElement(_ClusterThumbView2['default'], {
            element: this.getThumbElement(),
            style: this.props.thumbViewStyle,
            onClick: this.onToggleView }),
          function () {
            if (_this2.state.mode === DETAIL_MODE) {
              return _react2['default'].createElement(_ClusterDetailView2['default'], {
                element: _this2.getDetailElement(),
                style: _this2.props.detailViewStyle,
                onClick: _this2.onToggleView });
            }
          }()
        );
      }

      return render;
    }()
  }]);

  return ClusterToggleView;
}(_react2['default'].Component);

ClusterToggleView.propTypes = {
  mode: _react2['default'].PropTypes.string,
  thumbElement: _react2['default'].PropTypes.element,
  detailElement: _react2['default'].PropTypes.element,
  detailViewStyle: _react2['default'].PropTypes.object,
  thumbViewStyle: _react2['default'].PropTypes.object
};
ClusterToggleView.defaultProps = {
  mode: THUMBNAIL_MODE
};

exports['default'] = ClusterToggleView;