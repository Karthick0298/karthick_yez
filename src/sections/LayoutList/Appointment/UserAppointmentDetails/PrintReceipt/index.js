import React, {useRef} from 'react'
import {Tooltip} from '@material-ui/core'
import ReactToPrint from 'react-to-print'
import ComponentToPrint from './ComponentToPrint'
import LocalPrintshopIcon from '@mui/icons-material/LocalPrintshop'
export default function PrintReceipt({ReceiptData, ListData}) {
	let componentRef = useRef()
	return (
		<>
			<ReactToPrint
				trigger={() => (
					<Tooltip title='Print' placement='top' arrow>
						<LocalPrintshopIcon size='small' />
					</Tooltip>
				)}
				content={() => componentRef}
				pageStyle='@page { size: auto; margin: 8mm; } }'
			/>
			<div style={{border: '4px solid black', width: '100%', display: 'none'}}>
				<ComponentToPrint ref={el => (componentRef = el)} ReceiptData={ReceiptData} ListData={ListData} />
			</div>
		</>
	)
}
