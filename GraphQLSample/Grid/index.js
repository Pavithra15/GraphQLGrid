ej.grids.Grid.Inject(ej.grids.Sort, ej.grids.Filter, ej.grids.Page);

var data = new ej.data.DataManager({
    adaptor: new ej.data.GraphQLAdaptor({
      query: `query getOrders($datamanager: DataManager) {
        getOrders(datamanager: $datamanager) {
              count,
              result{OrderID, CustomerID, EmployeeID, ShipCountry}
           }
  }`,
      response: {
        count: 'getOrders.count',
        result: 'getOrders.result'
      },
  }),
  url: 'http://localhost:4200/'
});

var grid = new ej.grids.Grid({
    dataSource: data,
    allowPaging: true,
    allowSorting: true,
    allowFiltering: true,
	allowGrouping:true,
    columns: [
        { field: 'OrderID', headerText: 'Order ID', textAlign: 'Right', width: 120 },
        { field: 'CustomerID', width: 140, headerText: 'Customer ID' },
        { field: 'EmployeeID', headerText: 'Employee ID', width: 140, textAlign: 'Right' },
		{ field: 'ShipCountry', headerText: 'Ship Country', width: 140}
    ],
    pageSettings: { pageCount: 5, pageSize: 20 }
});
grid.appendTo('#Grid');
