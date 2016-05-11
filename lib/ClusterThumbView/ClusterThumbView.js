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
        return _react2['default'].createElement(
          'div',
          { className: this.blockClassNames },
          _react2['default'].createElement(
            'h3',
            { className: 'env-block-thumb-title' },
            this.props.environment.name
          ),
          _react2['default'].createElement('div', { className: 'env-block-thumb-left' }),
          _react2['default'].createElement(
            'div',
            { className: 'env-block-thumb-right' },
            _react2['default'].createElement(
              'div',
              { onClick: this.copyAllClicked },
              'Copy All'
            )
          ),
          _react2['default'].createElement(
            'div',
            { className: 'env-block-thumb-footer' },
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

//ClusterThumbView.propTypes = { mode: React.PropTypes.string };

exports['default'] = ClusterThumbView;