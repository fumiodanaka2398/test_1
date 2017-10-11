var React = require('react')
var ReactPivot = require('react-pivot')
var createReactClass = require('create-react-class')

var rows = require('./data.json')
var dimensions = [
  {value: 'date', title: 'Date'},
  {value: 'host', title: 'Host'}
]
var reduce = function(row, memo) {
	if(row.type == "impression")
  		memo.impressionTotal = (memo.impressionTotal || 0) + 1
  	if(row.type == "load")
  		memo.loadTotal = (memo.loadTotal || 0) + 1
  	if(row.type == "display")
  		memo.displayTotal = (memo.displayTotal || 0) + 1
  return memo
}
var calculations = [
  {
    title: 'impressions', value: 'impressionTotal',
    template: function(val, row) {
      return val
    }
  },
  {
    title: 'loads', value: 'loadTotal',
    template: function(val, row) {
      return val
    }
  },
  {
    title: 'displays', value: 'displayTotal',
    template: function(val, row) {
      return val
    }
  },
  {
    title: 'load rate', value: 'impressionTotal',
    template: function(val, row) {
      return ((row["loadTotal"] / row["impressionTotal"]) * 100).toFixed(1) + '%'
    }
  },
  {
    title: 'display rate', value: 'impressionTotal',
    template: function(val, row) {
      return ((row["displayTotal"] / row["loadTotal"]) * 100).toFixed(1) + '%'
    }
  }
]
module.exports = createReactClass({
  render () {
    return <div>aasdas<ReactPivot rows={rows}
              dimensions={dimensions}
              reduce={reduce}
              calculations={calculations}
              activeDimensions={['hostname']} /></div>
  }
})
