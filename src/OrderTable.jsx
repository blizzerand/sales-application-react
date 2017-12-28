import React from 'react';
import ReactTable from 'react-table';
import 'react-table/react-table.css'

const OrderTable = ({orders, onDelete}) => {
	const data = orders;
	const handleDelete = (item) => {
		onDelete(item);
	}
	const columns = [{

    Header: 'id',
    accessor: 'id',
    maxWidth: 100
  }, {
    Header: 'Name',
    accessor: 'name',

  }, {
  
    Header: 'Email',
    accessor: 'email' 
  }, {
    Header: 'Address', 
    accessor: 'address',
    width: 400
  },  {
    Header: 'Telephone', 
    accessor: 'phone'
  },  {
    Header: 'Units', 
    accessor: 'units',
    maxWidth: 150
  },   {
    Header: 'Delete', 
    accessor: 'delete',
    Cell: (row) =>( <img src="/img/delete.png" alt="delete icon" onClick={ () => { handleDelete(row.original)}}  />),
    maxWidth: 150
  }]

	return(
		<div className = 'col-md-12'>
		  <ReactTable
    data={data}
    columns={columns} 
    defaultPageSize={5}
          className="-striped -highlight"
  />
		</div>
	)

}

export default OrderTable;