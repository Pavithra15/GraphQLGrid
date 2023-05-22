# Syncfusion React Components

This project is a skeleton application used to create [Syncfusion React Components](https://www.syncfusion.com/react-components) web application.

## GraphQL Server setup

You can setup GraphQL server by using `graphpack` npm package. Find the following link for getting more details for your reference.
[`https://www.npmjs.com/package/graphpack`](https://www.npmjs.com/package/graphpack) 

### The Schema for the GraphQL server

```
input OrderInput {
  OrderID: Int!
  CustomerID: String
  EmployeeID: Int
  ShipCity: String
  ShipCountry: String
}

type Order {
  OrderID: Int!
  CustomerID: String
  EmployeeID: Int
  ShipCity: String
  ShipCountry: String
}

# need to return type as 'result (i.e, current page data)' and count (i.e., total number of records in your database)
type ReturnType {
  result: [Order]
  count: Int
}

type Query {
  getOrders(datamanager: DataManager): ReturnType 
}
type Mutation {

  createOrder(value: OrderInput): Order!
  updateOrder(key: Int!, keyColumn: String, value: OrderInput): Order
  deleteOrder(key: Int!, keyColumn: String, value: OrderInput): Order!
}
```

### Resolver

```
const resolvers = {
  Query: {
    getOrders: (parent, { datamanager }, context, info) => {     
     // process the data using the datamanager
     return ret;
    }
  },
  Mutation: {
    createOrder: (parent, { value }, context, info) => {
      // Perform Insert
      return value;
    },
    updateOrder: (parent, { key, keyColumn, value }, context, info) => {
      // Perform Update
      return value;
    },
    deleteOrder: (parent, { key, keyColumn, value }, context, info) => {
      // Perform Delete
      return value;
    },
  }
};

export default resolvers;

```
In the sample, we have used the `processData` method of `DataUtil` library which will process the data with the given datamanager information.

```
 getOrders: (parent, { datamanager }, context, info) => {     
     var ret = DataUtil.processData(datamanager, filterData);
     return ret;
    }
```

## Run the GraphQL Server

To run the server, you need to install the required pacakges using the below command

```
npm install
```

and run using

```
npm run dev
```

Now the server will be hosted in the url `http://localhost:4200/` and we can communicate the GraphQL by assigning this url to the `dataManager.url` property.


## Add Syncfusion Grid component in your application

Refer the following UG documenation for adding Syncfusion React component in your application
* [Getting Started of Syncfusion React Data Grid component](https://helpej2.syncfusion.com/react/documentation/grid/getting-started)

### Data Fetching

In the sample, we have added the `GraphQLAdaptor` which provides option to retrieve data from the GraphQL server. You can comunicate with the GraphQL server by adding the `query` property and define the response format using the `response.result` and `response.count` properties.

```
const data = new DataManager({
    adaptor: new GraphQLAdaptor({
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
```


Now the above `data` is added to the Grid `dataSource` property.


```
 <GridComponent dataSource={data} allowPaging={true} allowFiltering={true} allowSorting={true} allowGrouping={true}
       editSettings={{allowAdding:true, allowEditing:true, allowdeleting:true}}
       toolbar={["Add", "Edit", "Delete", "Update", "Cancel"]}>
      <ColumnsDirective>
        <ColumnDirective field='OrderID' headerText="Order ID" isPrimaryKey={true} width='100' textAlign="Right" />
        <ColumnDirective field='CustomerID' headerText="Customer ID" width='100' />
        <ColumnDirective field='ShipCountry' headerText="ShipCountry" width='100' />
        <ColumnDirective field='EmployeeID' headerText="Employee ID" width='100' textAlign="Right" />
      </ColumnsDirective>
      <Inject services={[Filter, Page, Sort, Group, Edit, Toolbar]} />
  </GridComponent>
```


Also, we have enabled the Paging, Filtering, Sorting and Grouping features in Grid component and while sending data fetching request, the query parameters requiresCounts, skip, take, sorted and where details will be sent with the `variables`.

![image](https://github.com/Pavithra15/GraphQLGrid/assets/34119270/6c6b4e69-eaa2-4c23-83be-530eba8f1bdd)

This is the Schema for the parameters in GraphQL server.


```
input DataManager {
    skip: Int
    take: Int
    sorted: [Sort]
    group: [String]
    where: String
    requiresCounts: Boolean,
}
```
```
input Sort {
    name: String!
    direction: String!
}
```

And you can get these values in resolver method 'getOrders', process the data and return the response as `result` and `count` pair.

```
Query: {
    getOrders: (parent, { datamanager }, context, info) => {
       if (datamanager.sorted) {
        // Perform sorting
      }
      if (datamanager.where) {
        // Perform filtering
      }
      if (datamanager.skip && datamanager.take) {
        // Perform Paging
      }
      return { result: data, count: data.length };
    }
  }
```

### Performing CRUD operations

You can perform the CRUD actions by returning the mutation inside the getMutation method based on the action.

```
var data = new ej.data.DataManager({
    adaptor: new ej.data.GraphQLAdaptor({
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
                            }}`;
            } else {
                return `mutation Remove($key: Int!, $keyColumn: String, $value: OrderInput){
                    deleteOrder(key: $key, keyColumn: $keyColumn, value: $value) {
                                OrderID, CustomerID, EmployeeID, ShipCountry
                            }}`;
            }
        },
      response: {
        count: 'getOrders.count',
        result: 'getOrders.result'
      },
  }),
  url: 'http://localhost:4200/'
});
```

## Run the client DataGrid application

To run the client, you need to install the required pacakges using the below command

```
npm install
```

and run using

```
npm start
```
Now the Grid will be launched in the browser `http://localhost:3000/`.

## Resources

You can also refer the below resources to know more details about Syncfusion React Data Grid components.
* [Demo](https://ej2.syncfusion.com/react/demos/#/material/grid/grid-overview.html)
* [Documentation](https://ej2.syncfusion.com/react/documentation/grid/)
* [GraphQL with Syncfusion DataManager](https://ej2.syncfusion.com/react/documentation/data/adaptors#graphql-adaptor)
