
import { ColumnDirective, ColumnsDirective, GridComponent, Inject, Filter, Page, Sort, Group, Edit, Toolbar } from '@syncfusion/ej2-react-grids';
import { DataManager, GraphQLAdaptor } from '@syncfusion/ej2-data';
import './App.css';

function App() {
  const data = new DataManager({
    adaptor: new GraphQLAdaptor({
      query: `query getOrders($datamanager: DataManager) {
        getOrders(datamanager: $datamanager) {
              count,
              result{OrderID, CustomerID, EmployeeID, ShipCountry}
           }
  }`,
      getMutation: function (action) {
        if (action === 'insert') {
          return `mutation Create($value: OrderInput!){
                                        createOrder(value: $value){
                                            OrderID, CustomerID, EmployeeID, ShipCountry
                                    }}`;
        }
        if (action === 'update') {
          return `mutation Update($key: Int!, $keyColumn: String,$value: OrderInput){
                            updateOrder(key: $key, keyColumn: $keyColumn, value: $value) {
                                OrderID, CustomerID, EmployeeID, ShipCountry
                            }
                            }`;
        } else {
          return `mutation Remove($key: Int!, $keyColumn: String, $value: OrderInput){
                    deleteOrder(key: $key, keyColumn: $keyColumn, value: $value) {
                                OrderID, CustomerID, EmployeeID, ShipCountry
                            }
                            }`;
        }
      },
      response: {
        count: 'getOrders.count',
        result: 'getOrders.result'
      },
    }),
    url: 'http://localhost:4200/'
  });
  return (
    <div>
    <br/><br/><br/>
    <GridComponent dataSource={data} allowPaging={true} allowFiltering={true} allowSorting={true} allowGrouping={true}
       editSettings={{allowAdding:true, allowEditing:true, allowdeleting:true}} toolbar={["Add", "Edit", "Delete", "Update", "Cancel"]}>
      <ColumnsDirective>
        <ColumnDirective field='OrderID' headerText="Order ID" isPrimaryKey={true} width='100' textAlign="Right" />
        <ColumnDirective field='CustomerID' headerText="Customer ID" width='100' />
        <ColumnDirective field='ShipCountry' headerText="ShipCountry" width='100' />
        <ColumnDirective field='EmployeeID' headerText="Employee ID" width='100' textAlign="Right" />
      </ColumnsDirective>
      <Inject services={[Filter, Page, Sort, Group, Edit, Toolbar]} />
    </GridComponent>
    </div>
  );
}

export default App;

