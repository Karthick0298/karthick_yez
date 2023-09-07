import React from 'react'
import ReceiptComponent from './ReceiptComponent'

export default class ComponentToPrint extends React.Component {
	render() {
		return <ReceiptComponent ReceiptData={this.props.ReceiptData} ListData={this.props.ListData} />
	}
}
