import { filterData,  dataSource } from "./db";
import { DataUtil } from "@syncfusion/ej2-data";
dataSource();

DataUtil.serverTimezoneOffset = 0;
const resolvers = {
  Query: {
    getOrders: (parent, { datamanager }, context, info) => {     
     var ret = DataUtil.processData(datamanager, filterData);
     return ret;
    }
  },
  
  Mutation: {

    createOrder: (parent, { value }, context, info) => {
      const newOrder = value;
      filterData.push(newOrder);
      return newOrder;

    },
    updateOrder: (parent, { key, keyColumn, value }, context, info) => {
      let newOrder = filterData.find(order => order.OrderID === parseInt(key));
      newOrder.CustomerID = value.CustomerID;
      newOrder.EmployeeID = value.EmployeeID;
      newOrder.ShipCity = value.ShipCity;
      newOrder.ShipCountry = value.ShipCountry;
      return newOrder;
    },
    deleteOrder: (parent, { key, keyColumn, value }, context, info) => {
      const orderIndex = filterData.findIndex(order => order.OrderID === parseInt(key));
      if (orderIndex === -1) throw new Error("Order not found." + value);

      const deletedOrders = filterData.splice(orderIndex, 1);

      return deletedOrders[0];
    }
  }
};

export default resolvers;