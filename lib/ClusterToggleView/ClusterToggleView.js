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
    return _this;
  }

  _createClass(ClusterToggleView, [{
    key: 'onToggleView',
    value: function () {
      function onToggleView(event) {
        console.log(event);
        var newMode = this.state.mode === THUMBNAIL_MODE ? DETAIL_MODE : THUMBNAIL_MODE;
        this.setState({ mode: newMode });
      }

      return onToggleView;
    }()
  }, {
    key: 'getView',
    value: function () {
      function getView() {
        var _this2 = this;

        return _react2['default'].createElement(
          'div',
          null,
          _react2['default'].createElement(_ClusterThumbView2['default'], { environment: this.props.environment, onClick: this.onToggleView }),
          function () {
            if (_this2.state.mode === DETAIL_MODE) {
              return _react2['default'].createElement(_ClusterDetailView2['default'], { environment: _this2.props.environment, onClick: _this2.onToggleView });
            }
          }()
        );
        /*
        if(this.state.mode === THUMBNAIL_MODE) {
          return <ClusterThumbView environment={this.props.environment}></ClusterThumbView>
        } else {
          return (
            <div>
              <ClusterThumbView environment={this.props.environment}></ClusterThumbView>
              <ClusterDetailView environment={this.props.environment}></ClusterDetailView>
            </div>
            );
        }*/
      }

      return getView;
    }()
  }, {
    key: 'render',
    value: function () {
      function render() {
        return _react2['default'].createElement(
          'div',
          null,
          this.getView()
        );
      }

      return render;
    }()
  }]);

  return ClusterToggleView;
}(_react2['default'].Component);

ClusterToggleView.propTypes = { mode: _react2['default'].PropTypes.string };
ClusterToggleView.defaultProps = {
  mode: THUMBNAIL_MODE
};

exports['default'] = ClusterToggleView;