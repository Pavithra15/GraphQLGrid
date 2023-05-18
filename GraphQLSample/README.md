# Syncfusion JavaScript Components

This project is a skeleton application used to create [Syncfusion JavaScript Components](https://www.syncfusion.com/javascript-ui-controls) web application.



## Add Syncfusion Grid component in your application

Refer the following UG documenation for adding Syncfusion JavaScript component in your application
* [Getting Started of Syncfusion JavaScript Data Grid component](https://ej2.syncfusion.com/javascript/documentation/grid/getting-started/)

### Data Fetching

In the above sample, we have added the `GraphQLAdaptor` which provides option to retrieve data from the GraphQL server. You can comunicate with the GraphQL server by adding the `query` property and define the response format using the `response.result` and `response.count` properties.

```
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
```

Also we have enabled enabled the Paging, Filtering, Sorting and Grouping features in Grid component and while sending data fetching request, the query parameters will be send in a string format which contains the RequiresCounts, Skip, Take, Sorted, Where, Group details.

### Performing CRUD operations

You can perform the CRUD actions by returning the mutation queries inside the getMutation method based on the action.

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
In the above resolver, we have used the `processData` method of `DataUtil` library which will process the data with the given datamanager information.

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

and run using the below command.

```
npm run dev
```

Now the server will be hosted in the url `http://localhost:4200/` and we can communicate the GraphQL by assigning this url to the `dataManager.url` property.

## Run the client Data Grid application

Run the client side application by launcing the index.html file in your browser.

## Behavior of Grid actions

### Pagination

While paging action, the skip and take values will be sent with the `variables` as number.

![image](https://github.com/Pavithra15/GraphQLGrid/assets/34119270/2fa5459f-6593-4ac6-93c6-1ab68d4a6fbd)

This is the Schema for skip and take parameters in GraphQL server.

```
input DataManager {
    skip: Int
    take: Int
}
```

And you can get these values and process the data.

```
Query: {
    getOrders: (parent, { datamanager }, context, info) => {     
      if (datamanager.skip && datamanager.take) {
        // Perform Paging
      }
      return { result: data, count: data.length };
    }
  }
```

## Resources

You can also refer the below resources to know more details about Syncfusion JavaScript Data Grid components.
* [Demo](https://ej2.syncfusion.com/javascript/demos/#/material/grid/grid-overview.html)
* [Documentation](https://ej2.syncfusion.com/javascript/documentation/grid/)
* [GraphQL with Syncfusion DataManager](https://ej2.syncfusion.com/javascript/documentation/data/adaptors/#graphql-adaptor)
