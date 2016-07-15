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

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/*
 * Accepted Model
 * Number - Id (Should be unique)
 * Array - Server List
 * String - Environment Name
 * String - Status
 * String?- Version
 */

var ClusterDetailView = function (_React$Component) {
  _inherits(ClusterDetailView, _React$Component);

  function ClusterDetailView(props) {
    _classCallCheck(this, ClusterDetailView);

    //Create event binding here

    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(ClusterDetailView).call(this, props));

    var status = _this.props.environment.status.toLowerCase();
    var blockClassNames = (0, _classnames2['default'])('detail', "thumb-" + status);

    _this.status = status;
    _this.blockClassNames = blockClassNames;
    _this.onWindowClick = _this.onWindowClick.bind(_this);
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
    key: 'render',
    value: function () {
      function render() {
        var _styles;

        var styles = (_styles = {
          detailContainer: {
            position: "fixed",
            width: "100%",
            height: "100%",
            backgroundColor: "rgba(0, 0, 0, 0.5)",
            top: "0",
            left: "0"
          },

          detail: {
            zIndex: "100",
            border: "solid 1px black",
            position: "fixed",
            left: "12.5%",
            top: "5%",
            height: "90%",
            width: "75%"
          },

          detailLeft: {
            width: "50%"
          },

          detailRight: {
            width: "50%"
          }

        }, _defineProperty(_styles, 'detailLeft', {
          float: "left",
          minHeight: "5em"
        }), _defineProperty(_styles, 'detailRight', {
          float: "right"
        }), _defineProperty(_styles, 'detailFooter', {
          clear: "both"
        }), _defineProperty(_styles, 'detailTitle', {
          color: "#000000",
          textAlign: "center"
        }), _defineProperty(_styles, 'pending', {
          backgroundColor: "#ff0"
        }), _defineProperty(_styles, 'success', {
          backgroundColor: "#0f0"
        }), _defineProperty(_styles, 'failed', {
          backgroundColor: "#f00"
        }), _styles);

        return _react2['default'].createElement(
          'div',
          { style: styles.detailContainer, onClick: this.props.onClick },
          _react2['default'].createElement(
            'div',
            { style: Object.assign({}, styles.detail, styles[this.status]), onClick: this.onWindowClick },
            _react2['default'].createElement(
              'h1',
              { style: styles.detailTitle },
              this.props.environment.name
            ),
            _react2['default'].createElement('div', null)
          )
        );
      }

      return render;
    }()
  }]);

  return ClusterDetailView;
}(_react2['default'].Component);

ClusterDetailView.propTypes = { onClick: _react2['default'].PropTypes.func };

exports['default'] = ClusterDetailView;