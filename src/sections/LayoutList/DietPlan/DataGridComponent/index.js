import React from 'react'

import {DataGrid} from '@mui/x-data-grid'
import {makeStyles} from '@material-ui/core'

const useStyles = makeStyles(theme => ({
	DataGridTable: {
		width: '100%',
		paddingBlock: 16,
		paddingInline: 12,
		'& .MuiDataGrid-main': {
			backgroundColor: '#B1FFAB33',
		},
		'& .MuiDataGrid-root .MuiDataGrid-row': {
			fontSize: 12,
		},
		'& .MuiDataGrid-cellContent': {
			color: '#0B8D01',
			fontFamily: 'Poppins',
		},
		'& .MuiDataGrid-root .MuiDataGrid-cell--withRenderer': {
			justifyContent: 'start',
			gap: 8,
			lineHeight: '20px !important',
		},
		'& .MuiDataGrid-iconSeparator ': {
			display: 'none',
		},
		'& .MuiDataGrid-columnHeaderTitleContainer': {
			padding: '0px 0px',
			fontFamily: 'Poppins',
			color: '#0B8D01',
		},
		'& .MuiDataGrid-dataContainer': {
			backgroundColor: '#fff',
		},
		'& .MuiDataGrid-columnHeaderWrapper': {
			backgroundColor: '#F5F4F6',
		},
		'& .MuiDataGrid-root': {
			border: 'none',
			'& .MuiDataGrid-cell--withRendere': {
				[theme.breakpoints.down('sm')]: {
					display: 'block !important',
				},
			},
			'& .MuiDataGrid-footerContainer': {
				borderBottomLeftRadius: 8,
				borderBottomRightRadius: 8,
				background: '#ffffff',
				backgroundColor: '#B1FFAB33',
			},
			'& .gstnnumber': {
				textTransform: 'uppercase',
			},
		},

		[theme.breakpoints.down('md')]: {
			height: 200,
			width: '100%',
			paddingInline: 12,
			paddingBlock: 10,
		},
	},
}))

const DataGridComponent = ({columns, rows, pageSize, setPageSize}) => {
	const classes = useStyles()

	return (
		<div className={classes.DataGridTable}>
			<DataGrid columns={columns} rows={rows} pageSize={pageSize} autoHeight={true} disableColumnMenu={true} />
		</div>
	)
}

export default DataGridComponent
