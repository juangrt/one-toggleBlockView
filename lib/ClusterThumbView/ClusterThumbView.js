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

/*
{
 id: 1,
 serverList: ["192.168.1.1" , "192.168.1.2"] ,
 name: "dev" ,
 status: "Pending",
 version: "1.5"
}
*/

var ClusterThumbView = function (_React$Component) {
  _inherits(ClusterThumbView, _React$Component);

  function ClusterThumbView(props) {
    _classCallCheck(this, ClusterThumbView);

    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(ClusterThumbView).call(this, props));

    var status = _this.props.environment.status.toLowerCase();

    var blockClassNames = (0, _classnames2['default'])('env-block-thumb', "env-block-thumb-" + status);

    //Create event binding here
    _this.status = status;
    _this.copyAllClicked = _this.copyAllClicked.bind(_this);
    _this.blockClassNames = blockClassNames;
    return _this;
  }

  _createClass(ClusterThumbView, [{
    key: 'copyAllClicked',
    value: function () {
      function copyAllClicked(event) {
        console.log("Copy All clicked for: " + this.props.environment.name);
      }

      return copyAllClicked;
    }()
  }, {
    key: 'render',
    value: function () {
      function render() {
        var _styles;

        var styles = (_styles = {
          thumb: {
            width: "10em",
            minHeight: "10em",
            float: "left",
            margin: ".5em"

          },

          thumbLeft: {
            width: "50%"
          },

          thumbRight: {
            width: "50%"
          }

        }, _defineProperty(_styles, 'thumbLeft', {
          float: "left",
          minHeight: "5em"
        }), _defineProperty(_styles, 'thumbRight', {
          float: "right"
        }), _defineProperty(_styles, 'thumbFooter', {
          clear: "both"
        }), _defineProperty(_styles, 'title', {
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
          { style: Object.assign({}, styles.thumb, styles[this.status.toLowerCase()]), onClick: this.props.onClick },
          _react2['default'].createElement(
            'h3',
            { style: styles.title },
            this.props.environment.name
          ),
          _react2['default'].createElement(
            'div',
            { style: styles.thumbLeft },
            ' '
          ),
          _react2['default'].createElement(
            'div',
            { style: styles.thumbRight },
            _react2['default'].createElement(
              'div',
              { onClick: this.copyAllClicked },
              'Copy All'
            )
          ),
          _react2['default'].createElement(
            'div',
            { style: styles.thumbFooter },
            _react2['default'].createElement(
              'div',
              { style: { float: 'left' } },
              this.props.environment.version
            ),
            _react2['default'].createElement(
              'div',
              { style: { float: 'right', textAlign: 'right' } },
              this.props.environment.status
            )
          )
        );
      }

      return render;
    }()
  }]);

  return ClusterThumbView;
}(_react2['default'].Component);

ClusterThumbView.propTypes = { onClick: _react2['default'].PropTypes.func };

exports['default'] = ClusterThumbView;