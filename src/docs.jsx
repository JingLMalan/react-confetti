import React from 'react'
import ReactDOM from 'react-dom'
import dimensions from 'react-dimensions'
import Confetti from './react-confetti'

const DimensionedExample = dimensions()(class Example extends React.Component {
  static propTypes = {
    containerWidth: React.PropTypes.number,
    containerHeight: React.PropTypes.number,
  }
  render() {
    const {
      containerWidth,
      containerHeight,
    } = this.props
    return <Confetti width={containerWidth} height={containerHeight} />
  }
})

ReactDOM.render(<DimensionedExample />, document.getElementById('app'))
