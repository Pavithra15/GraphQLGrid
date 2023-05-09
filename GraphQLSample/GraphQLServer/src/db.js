export let users = [
    { id: 1, name: "John Doe", email: "john@gmail.com", age: 22 },
    { id: 2, name: "Jane Doe", email: "jane@gmail.com", age: 23 }
  ];

  export let filterData = [
    {
        OrderID: 10248, CustomerID: 'VINET', EmployeeID: 5, OrderDate: new Date("07 12 1996 02:00:23"),
        ShipName: 'Vins et alcools Chevalier', ShipCity: 'Reims', ShipAddress: '59 rue de l Abbaye',
        ShipRegion: 'CJ', ShipPostalCode: '51100', ShipCountry: 'France', Freight: 32.38, Verified: !0
    },
    {
        OrderID: 10249, CustomerID: 'TOMSP', EmployeeID: 6, OrderDate: new Date("07 12 1996 00:03:23"),
        ShipName: 'Toms Spezialitäten', ShipCity: 'Münster', ShipAddress: 'Luisenstr. 48',
        ShipRegion: 'CJ', ShipPostalCode: '44087', ShipCountry: 'Germany', Freight: 11.61, Verified: !1
    },
    {
        OrderID: 10250, CustomerID: 'HANAR', EmployeeID: 4, OrderDate: new Date("07 12 1996 00:00:23"),
        ShipName: 'Hanari Carnes', ShipCity: 'Rio de Janeiro', ShipAddress: 'Rua do Paço, 67',
        ShipRegion: 'RJ', ShipPostalCode: '05454-876', ShipCountry: 'Brazil', Freight: 65.83, Verified: !0
    },
    {
        OrderID: 10251, CustomerID: 'VICTE', EmployeeID: 3, OrderDate: new Date(8367642e5),
        ShipName: 'Victuailles en stock', ShipCity: 'Lyon', ShipAddress: '2, rue du Commerce',
        ShipRegion: 'CJ', ShipPostalCode: '69004', ShipCountry: 'France', Freight: 41.34, Verified: !0
    },
    {
        OrderID: 10252, CustomerID: 'SUPRD', EmployeeID: 4, OrderDate: new Date(8368506e5),
        ShipName: 'Suprêmes délices', ShipCity: 'Charleroi', ShipAddress: 'Boulevard Tirou, 255',
        ShipRegion: 'CJ', ShipPostalCode: 'B-6000', ShipCountry: 'Belgium', Freight: 51.3, Verified: !0
    },
    {
        OrderID: 10253, CustomerID: 'HANAR', EmployeeID: 3, OrderDate: new Date(836937e6),
        ShipName: 'Hanari Carnes', ShipCity: 'Rio de Janeiro', ShipAddress: 'Rua do Paço, 67',
        ShipRegion: 'RJ', ShipPostalCode: '05454-876', ShipCountry: 'Brazil', Freight: 58.17, Verified: !0
    },
    {
        OrderID: 10254, CustomerID: 'CHOPS', EmployeeID: 5, OrderDate: new Date(8370234e5),
        ShipName: 'Chop-suey Chinese', ShipCity: 'Bern', ShipAddress: 'Hauptstr. 31',
        ShipRegion: 'CJ', ShipPostalCode: '3012', ShipCountry: 'Switzerland', Freight: 22.98, Verified: !1
    },
    {
        OrderID: 10255, CustomerID: 'RICSU', EmployeeID: 9, OrderDate: new Date(8371098e5),
        ShipName: 'Richter Supermarkt', ShipCity: 'Genève', ShipAddress: 'Starenweg 5',
        ShipRegion: 'CJ', ShipPostalCode: '1204', ShipCountry: 'Switzerland', Freight: 148.33, Verified: !0
    },
    {
        OrderID: 10256, CustomerID: 'WELLI', EmployeeID: 3, OrderDate: new Date(837369e6),
        ShipName: 'Wellington Importadora', ShipCity: 'Resende', ShipAddress: 'Rua do Mercado, 12',
        ShipRegion: 'SP', ShipPostalCode: '08737-363', ShipCountry: 'Brazil', Freight: 13.97, Verified: !1
    },
    {
        OrderID: 10257, CustomerID: 'HILAA', EmployeeID: 4, OrderDate: new Date(8374554e5),
        ShipName: 'HILARION-Abastos', ShipCity: 'San Cristóbal', ShipAddress: 'Carrera 22 con Ave. Carlos Soublette #8-35',
        ShipRegion: 'Táchira', ShipPostalCode: '5022', ShipCountry: 'Venezuela', Freight: 81.91, Verified: !0
    },
    {
        OrderID: 10258, CustomerID: 'ERNSH', EmployeeID: 1, OrderDate: new Date(8375418e5),
        ShipName: 'Ernst Handel', ShipCity: 'Graz', ShipAddress: 'Kirchgasse 6',
        ShipRegion: 'CJ', ShipPostalCode: '8010', ShipCountry: 'Austria', Freight: 140.51, Verified: !0
    },
    {
        OrderID: 10259, CustomerID: 'CENTC', EmployeeID: 4, OrderDate: new Date(8376282e5),
        ShipName: 'Centro comercial Moctezuma', ShipCity: 'México D.F.', ShipAddress: 'Sierras de Granada 9993',
        ShipRegion: 'CJ', ShipPostalCode: '05022', ShipCountry: 'Mexico', Freight: 3.25, Verified: !1
    },
    {
        OrderID: 10260, CustomerID: 'OTTIK', EmployeeID: 4, OrderDate: new Date(8377146e5),
        ShipName: 'Ottilies Käseladen', ShipCity: 'Köln', ShipAddress: 'Mehrheimerstr. 369',
        ShipRegion: 'CJ', ShipPostalCode: '50739', ShipCountry: 'Germany', Freight: 55.09, Verified: !0
    },
    {
        OrderID: 10261, CustomerID: 'QUEDE', EmployeeID: 4, OrderDate: new Date(8377146e5),
        ShipName: 'Que Delícia', ShipCity: 'Rio de Janeiro', ShipAddress: 'Rua da Panificadora, 12',
        ShipRegion: 'RJ', ShipPostalCode: '02389-673', ShipCountry: 'Brazil', Freight: 3.05, Verified: !1
    },
    {
        OrderID: 10262, CustomerID: 'RATTC', EmployeeID: 8, OrderDate: new Date(8379738e5),
        ShipName: 'Rattlesnake Canyon Grocery', ShipCity: 'Albuquerque', ShipAddress: '2817 Milton Dr.',
        ShipRegion: 'NM', ShipPostalCode: '87110', ShipCountry: 'USA', Freight: 48.29, Verified: !0
    },
    {
        OrderID: 10263, CustomerID: 'ERNSH', EmployeeID: 9, OrderDate: new Date(8380602e5),
        ShipName: 'Ernst Handel', ShipCity: 'Graz', ShipAddress: 'Kirchgasse 6', ShipRegion: null, ShipPostalCode: '8010', ShipCountry: 'Austria', Freight: 146.06, Verified: !0
    }, { OrderID: 10264, CustomerID: 'FOLKO', EmployeeID: 6, OrderDate: new Date(8381466e5), ShipName: 'Folk och fä HB', ShipCity: 'Bräcke', ShipAddress: 'Åkergatan 24', ShipRegion: null, ShipPostalCode: 'S-844 67', ShipCountry: 'Sweden', Freight: 3.67, Verified: !1 }, { OrderID: 10265, CustomerID: 'BLONP', EmployeeID: 2, OrderDate: new Date(838233e6), ShipName: 'Blondel père et fils', ShipCity: 'Strasbourg', ShipAddress: '24, place Kléber', ShipRegion: null, ShipPostalCode: '67000', ShipCountry: 'France', Freight: 55.28, Verified: !0 }, { OrderID: 10266, CustomerID: 'WARTH', EmployeeID: 3, OrderDate: new Date(8383194e5), ShipName: 'Wartian Herkku', ShipCity: 'Oulu', ShipAddress: 'Torikatu 38', ShipRegion: null, ShipPostalCode: '90110', ShipCountry: 'Finland', Freight: 25.73, Verified: !1 }, { OrderID: 10267, CustomerID: 'FRANK', EmployeeID: 4, OrderDate: new Date(8385786e5), ShipName: 'Frankenversand', ShipCity: 'München', ShipAddress: 'Berliner Platz 43', ShipRegion: null, ShipPostalCode: '80805', ShipCountry: 'Germany', Freight: 208.58, Verified: !0 }, { OrderID: 10268, CustomerID: 'GROSR', EmployeeID: 8, OrderDate: new Date(838665e6), ShipName: 'GROSELLA-Restaurante', ShipCity: 'Caracas', ShipAddress: '5ª Ave. Los Palos Grandes', ShipRegion: 'DF', ShipPostalCode: '1081', ShipCountry: 'Venezuela', Freight: 66.29, Verified: !0 }, { OrderID: 10269, CustomerID: 'WHITC', EmployeeID: 5, OrderDate: new Date(8387514e5), ShipName: 'White Clover Markets', ShipCity: 'Austria', ShipAddress: '1029 - 12th Ave. S.', ShipRegion: 'WA', ShipPostalCode: '98124', ShipCountry: 'USA', Freight: 4.56, Verified: !1 }, { OrderID: 10270, CustomerID: 'WARTH', EmployeeID: 1, OrderDate: new Date(8388378e5), ShipName: 'Wartian Herkku', ShipCity: 'Oulu', ShipAddress: 'Torikatu 38', ShipRegion: null, ShipPostalCode: '90110', ShipCountry: 'Finland', Freight: 136.54, Verified: !0 }, { OrderID: 10271, CustomerID: 'SPLIR', EmployeeID: 6, OrderDate: new Date(8388378e5), ShipName: 'Split Rail Beer & Ale', ShipCity: 'Lander', ShipAddress: 'P.O. Box 555', ShipRegion: 'WY', ShipPostalCode: '82520', ShipCountry: 'USA', Freight: 4.54, Verified: !1 }, { OrderID: 10272, CustomerID: 'RATTC', EmployeeID: 6, OrderDate: new Date(8389242e5), ShipName: 'Rattlesnake Canyon Grocery', ShipCity: 'Albuquerque', ShipAddress: '2817 Milton Dr.', ShipRegion: 'NM', ShipPostalCode: '87110', ShipCountry: 'USA', Freight: 98.03, Verified: !0 }, { OrderID: 10273, CustomerID: 'QUICK', EmployeeID: 3, OrderDate: new Date(8391834e5), ShipName: 'QUICK-Stop', ShipCity: 'Cunewalde', ShipAddress: 'Taucherstraße 10', ShipRegion: null, ShipPostalCode: '01307', ShipCountry: 'Germany', Freight: 76.07, Verified: !0 }, { OrderID: 10274, CustomerID: 'VINET', EmployeeID: 6, OrderDate: new Date(8392698e5), ShipName: 'Vins et alcools Chevalier', ShipCity: 'Reims', ShipAddress: '59 rue de l Abbaye', ShipRegion: null, ShipPostalCode: '51100', ShipCountry: 'France', Freight: 6.01, Verified: !1 }, { OrderID: 10275, CustomerID: 'MAGAA', EmployeeID: 1, OrderDate: new Date(8393562e5), ShipName: 'Magazzini Alimentari Riuniti', ShipCity: 'Bergamo', ShipAddress: 'Via Ludovico il Moro 22', ShipRegion: null, ShipPostalCode: '24100', ShipCountry: 'Italy', Freight: 26.93, Verified: !1 }, { OrderID: 10276, CustomerID: 'TORTU', EmployeeID: 8, OrderDate: new Date(8394426e5), ShipName: 'Tortuga Restaurante', ShipCity: 'México D.F.', ShipAddress: 'Avda. Azteca 123', ShipRegion: null, ShipPostalCode: '05033', ShipCountry: 'Mexico', Freight: 13.84, Verified: !1 }, { OrderID: 10277, CustomerID: 'MORGK', EmployeeID: 2, OrderDate: new Date(839529e6), ShipName: 'Morgenstern Gesundkost', ShipCity: 'Leipzig', ShipAddress: 'Heerstr. 22', ShipRegion: null, ShipPostalCode: '04179', ShipCountry: 'Germany', Freight: 125.77, Verified: !0 }, { OrderID: 10278, CustomerID: 'BERGS', EmployeeID: 8, OrderDate: new Date(8397882e5), ShipName: 'Berglunds snabbköp', ShipCity: 'Luleå', ShipAddress: 'Berguvsvägen  8', ShipRegion: null, ShipPostalCode: 'S-958 22', ShipCountry: 'Sweden', Freight: 92.69, Verified: !0 }, { OrderID: 10279, CustomerID: 'LEHMS', EmployeeID: 8, OrderDate: new Date(8398746e5), ShipName: 'Lehmanns Marktstand', ShipCity: 'Frankfurt a.M.', ShipAddress: 'Magazinweg 7', ShipRegion: null, ShipPostalCode: '60528', ShipCountry: 'Germany', Freight: 25.83, Verified: !1 }, { OrderID: 10280, CustomerID: 'BERGS', EmployeeID: 2, OrderDate: new Date(839961e6), ShipName: 'Berglunds snabbköp', ShipCity: 'Luleå', ShipAddress: 'Berguvsvägen  8', ShipRegion: null, ShipPostalCode: 'S-958 22', ShipCountry: 'Sweden', Freight: 8.98, Verified: !1 }, { OrderID: 10281, CustomerID: 'ROMEY', EmployeeID: 4, OrderDate: new Date(839961e6), ShipName: 'Romero y tomillo', ShipCity: 'Madrid', ShipAddress: 'Gran Vía, 1', ShipRegion: null, ShipPostalCode: '28001', ShipCountry: 'Spain', Freight: 2.94, Verified: !1 }, { OrderID: 10282, CustomerID: 'ROMEY', EmployeeID: 4, OrderDate: new Date(8400474e5), ShipName: 'Romero y tomillo', ShipCity: 'Madrid', ShipAddress: 'Gran Vía, 1', ShipRegion: null, ShipPostalCode: '28001', ShipCountry: 'Spain', Freight: 12.69, Verified: !1 }, { OrderID: 10283, CustomerID: 'LILAS', EmployeeID: 3, OrderDate: new Date(8401338e5), ShipName: 'LILA-Supermercado', ShipCity: 'Barquisimeto', ShipAddress: 'Carrera 52 con Ave. Bolívar #65-98 Llano Largo', ShipRegion: 'Lara', ShipPostalCode: '3508', ShipCountry: 'Venezuela', Freight: 84.81, Verified: !0 }, { OrderID: 10284, CustomerID: 'LEHMS', EmployeeID: 4, OrderDate: new Date(840393e6), ShipName: 'Lehmanns Marktstand', ShipCity: 'Frankfurt a.M.', ShipAddress: 'Magazinweg 7', ShipRegion: null, ShipPostalCode: '60528', ShipCountry: 'Germany', Freight: 76.56, Verified: !0 }, { OrderID: 10285, CustomerID: 'QUICK', EmployeeID: 1, OrderDate: new Date(8404794e5), ShipName: 'QUICK-Stop', ShipCity: 'Cunewalde', ShipAddress: 'Taucherstraße 10', ShipRegion: null, ShipPostalCode: '01307', ShipCountry: 'Germany', Freight: 76.83, Verified: !0 }, { OrderID: 10286, CustomerID: 'QUICK', EmployeeID: 8, OrderDate: new Date(8405658e5), ShipName: 'QUICK-Stop', ShipCity: 'Cunewalde', ShipAddress: 'Taucherstraße 10', ShipRegion: null, ShipPostalCode: '01307', ShipCountry: 'Germany', Freight: 229.24, Verified: !0 }, { OrderID: 10287, CustomerID: 'RICAR', EmployeeID: 8, OrderDate: new Date(8406522e5), ShipName: 'Ricardo Adocicados', ShipCity: 'Rio de Janeiro', ShipAddress: 'Av. Copacabana, 267', ShipRegion: 'RJ', ShipPostalCode: '02389-890', ShipCountry: 'Brazil', Freight: 12.76, Verified: !1 }, { OrderID: 10288, CustomerID: 'REGGC', EmployeeID: 4, OrderDate: new Date(8407386e5), ShipName: 'Reggiani Caseifici', ShipCity: 'Reggio Emilia', ShipAddress: 'Strada Provinciale 124', ShipRegion: null, ShipPostalCode: '42100', ShipCountry: 'Italy', Freight: 7.45, Verified: !1 }, { OrderID: 10289, CustomerID: 'BSBEV', EmployeeID: 7, OrderDate: new Date(8409978e5), ShipName: 'Bs Beverages', ShipCity: 'Brazil', ShipAddress: 'Fauntleroy Circus', ShipRegion: null, ShipPostalCode: 'EC2 5NT', ShipCountry: 'UK', Freight: 22.77, Verified: !1 }, { OrderID: 10290, CustomerID: 'COMMI', EmployeeID: 8, OrderDate: new Date(8410842e5), ShipName: 'Comércio Mineiro', ShipCity: 'Sao Paulo', ShipAddress: 'Av. dos Lusíadas, 23', ShipRegion: 'SP', ShipPostalCode: '05432-043', ShipCountry: 'Brazil', Freight: 79.7, Verified: !0 }, { OrderID: 10291, CustomerID: 'QUEDE', EmployeeID: 6, OrderDate: new Date(8410842e5), ShipName: 'Que Delícia', ShipCity: 'Rio de Janeiro', ShipAddress: 'Rua da Panificadora, 12', ShipRegion: 'RJ', ShipPostalCode: '02389-673', ShipCountry: 'Brazil', Freight: 6.4, Verified: !1 }, { OrderID: 10292, CustomerID: 'TRADH', EmployeeID: 1, OrderDate: new Date(8411706e5), ShipName: 'Tradiçao Hipermercados', ShipCity: 'Sao Paulo', ShipAddress: 'Av. Inês de Castro, 414', ShipRegion: 'SP', ShipPostalCode: '05634-030', ShipCountry: 'Brazil', Freight: 1.35, Verified: !1 }, { OrderID: 10293, CustomerID: 'TORTU', EmployeeID: 1, OrderDate: new Date(841257e6), ShipName: 'Tortuga Restaurante', ShipCity: 'México D.F.', ShipAddress: 'Avda. Azteca 123', ShipRegion: null, ShipPostalCode: '05033', ShipCountry: 'Mexico', Freight: 21.18, Verified: !1 }, { OrderID: 10294, CustomerID: 'RATTC', EmployeeID: 4, OrderDate: new Date(8413434e5), ShipName: 'Rattlesnake Canyon Grocery', ShipCity: 'Albuquerque', ShipAddress: '2817 Milton Dr.', ShipRegion: 'NM', ShipPostalCode: '87110', ShipCountry: 'USA', Freight: 147.26, Verified: !0 }, { OrderID: 10295, CustomerID: 'VINET', EmployeeID: 2, OrderDate: new Date(8416026e5), ShipName: 'Vins et alcools Chevalier', ShipCity: 'Reims', ShipAddress: '59 rue de l Abbaye', ShipRegion: null, ShipPostalCode: '51100', ShipCountry: 'France', Freight: 1.15, Verified: !1 }, { OrderID: 10296, CustomerID: 'LILAS', EmployeeID: 6, OrderDate: new Date(841689e6), ShipName: 'LILA-Supermercado', ShipCity: 'Barquisimeto', ShipAddress: 'Carrera 52 con Ave. Bolívar #65-98 Llano Largo', ShipRegion: 'Lara', ShipPostalCode: '3508', ShipCountry: 'Venezuela', Freight: .12, Verified: !1 }, { OrderID: 10297, CustomerID: 'BLONP', EmployeeID: 5, OrderDate: new Date(8417754e5), ShipName: 'Blondel père et fils', ShipCity: 'Strasbourg', ShipAddress: '24, place Kléber', ShipRegion: null, ShipPostalCode: '67000', ShipCountry: 'France', Freight: 5.74, Verified: !1 }, { OrderID: 10298, CustomerID: 'HUNGO', EmployeeID: 6, OrderDate: new Date(8418618e5), ShipName: 'Hungry Owl All-Night Grocers', ShipCity: 'Cork', ShipAddress: '8 Johnstown Road', ShipRegion: 'Co. Cork', ShipPostalCode: null, ShipCountry: 'Ireland', Freight: 168.22, Verified: !0 }, { OrderID: 10299, CustomerID: 'RICAR', EmployeeID: 4, OrderDate: new Date(8419482e5), ShipName: 'Ricardo Adocicados', ShipCity: 'Rio de Janeiro', ShipAddress: 'Av. Copacabana, 267', ShipRegion: 'RJ', ShipPostalCode: '02389-890', ShipCountry: 'Brazil', Freight: 29.76, Verified: !1 }, { OrderID: 10300, CustomerID: 'MAGAA', EmployeeID: 2, OrderDate: new Date(8422074e5), ShipName: 'Magazzini Alimentari Riuniti', ShipCity: 'Bergamo', ShipAddress: 'Via Ludovico il Moro 22', ShipRegion: null, ShipPostalCode: '24100', ShipCountry: 'Italy', Freight: 17.68, Verified: !1 }, { OrderID: 10301, CustomerID: 'WANDK', EmployeeID: 8, OrderDate: new Date(8422074e5), ShipName: 'Die Wandernde Kuh', ShipCity: 'Stuttgart', ShipAddress: 'Adenauerallee 900', ShipRegion: null, ShipPostalCode: '70563', ShipCountry: 'Germany', Freight: 45.08, Verified: !0 }, { OrderID: 10302, CustomerID: 'SUPRD', EmployeeID: 4, OrderDate: new Date(8422938e5), ShipName: 'Suprêmes délices', ShipCity: 'Charleroi', ShipAddress: 'Boulevard Tirou, 255', ShipRegion: null, ShipPostalCode: 'B-6000', ShipCountry: 'Belgium', Freight: 6.27, Verified: !1 }, { OrderID: 10303, CustomerID: 'GODOS', EmployeeID: 7, OrderDate: new Date(8423802e5), ShipName: 'Godos Cocina Típica', ShipCity: 'Sevilla', ShipAddress: 'C/ Romero, 33', ShipRegion: null, ShipPostalCode: '41101', ShipCountry: 'Spain', Freight: 107.83, Verified: !0 }, { OrderID: 10304, CustomerID: 'TORTU', EmployeeID: 1, OrderDate: new Date(8424666e5), ShipName: 'Tortuga Restaurante', ShipCity: 'México D.F.', ShipAddress: 'Avda. Azteca 123', ShipRegion: null, ShipPostalCode: '05033', ShipCountry: 'Mexico', Freight: 63.79, Verified: !0 }, { OrderID: 10305, CustomerID: 'OLDWO', EmployeeID: 8, OrderDate: new Date(842553e6), ShipName: 'Old World Delicatessen', ShipCity: 'Anchorage', ShipAddress: '2743 Bering St.', ShipRegion: 'AK', ShipPostalCode: '99508', ShipCountry: 'USA', Freight: 257.62, Verified: !0 }, { OrderID: 10306, CustomerID: 'ROMEY', EmployeeID: 1, OrderDate: new Date(8428122e5), ShipName: 'Romero y tomillo', ShipCity: 'Madrid', ShipAddress: 'Gran Vía, 1', ShipRegion: null, ShipPostalCode: '28001', ShipCountry: 'Spain', Freight: 7.56, Verified: !1 }, { OrderID: 10307, CustomerID: 'LONEP', EmployeeID: 2, OrderDate: new Date(8428986e5), ShipName: 'Lonesome Pine Restaurant', ShipCity: 'Portland', ShipAddress: '89 Chiaroscuro Rd.', ShipRegion: 'OR', ShipPostalCode: '97219', ShipCountry: 'USA', Freight: .56, Verified: !1 }, { OrderID: 10308, CustomerID: 'ANATR', EmployeeID: 7, OrderDate: new Date(842985e6), ShipName: 'Ana Trujillo Emparedados y helados', ShipCity: 'México D.F.', ShipAddress: 'Avda. de la Constitución 2222', ShipRegion: null, ShipPostalCode: '05021', ShipCountry: 'Mexico', Freight: 1.61, Verified: !1 }, { OrderID: 10309, CustomerID: 'HUNGO', EmployeeID: 3, OrderDate: new Date(8430714e5), ShipName: 'Hungry Owl All-Night Grocers', ShipCity: 'Cork', ShipAddress: '8 Johnstown Road', ShipRegion: 'Co. Cork', ShipPostalCode: null, ShipCountry: 'Ireland', Freight: 47.3, Verified: !0 }, { OrderID: 10310, CustomerID: 'THEBI', EmployeeID: 8, OrderDate: new Date(8431578e5), ShipName: 'The Big Cheese', ShipCity: 'Portland', ShipAddress: '89 Jefferson Way Suite 2', ShipRegion: 'OR', ShipPostalCode: '97201', ShipCountry: 'USA', Freight: 17.52, Verified: !1 }, { OrderID: 10311, CustomerID: 'DUMON', EmployeeID: 1, OrderDate: new Date(8431578e5), ShipName: 'Du monde entier', ShipCity: 'Nantes', ShipAddress: '67, rue des Cinquante Otages', ShipRegion: null, ShipPostalCode: '44000', ShipCountry: 'France', Freight: 24.69, Verified: !1 }, { OrderID: 10312, CustomerID: 'WANDK', EmployeeID: 2, OrderDate: new Date(843417e6), ShipName: 'Die Wandernde Kuh', ShipCity: 'Stuttgart', ShipAddress: 'Adenauerallee 900', ShipRegion: null, ShipPostalCode: '70563', ShipCountry: 'Germany', Freight: 40.26, Verified: !0 }, { OrderID: 10313, CustomerID: 'QUICK', EmployeeID: 2, OrderDate: new Date(8435034e5), ShipName: 'QUICK-Stop', ShipCity: 'Cunewalde', ShipAddress: 'Taucherstraße 10', ShipRegion: null, ShipPostalCode: '01307', ShipCountry: 'Germany', Freight: 1.96, Verified: !1 }, { OrderID: 10314, CustomerID: 'RATTC', EmployeeID: 1, OrderDate: new Date(8435898e5), ShipName: 'Rattlesnake Canyon Grocery', ShipCity: 'Albuquerque', ShipAddress: '2817 Milton Dr.', ShipRegion: 'NM', ShipPostalCode: '87110', ShipCountry: 'USA', Freight: 74.16, Verified: !0 }, { OrderID: 10315, CustomerID: 'ISLAT', EmployeeID: 4, OrderDate: new Date(8436762e5), ShipName: 'Island Trading', ShipCity: 'Cowes', ShipAddress: 'Garden House Crowther Way', ShipRegion: 'Isle of Wight', ShipPostalCode: 'PO31 7PJ', ShipCountry: 'UK', Freight: 41.76, Verified: !0 }, { OrderID: 10316, CustomerID: 'RATTC', EmployeeID: 1, OrderDate: new Date(8437626e5), ShipName: 'Rattlesnake Canyon Grocery', ShipCity: 'Albuquerque', ShipAddress: '2817 Milton Dr.', ShipRegion: 'NM', ShipPostalCode: '87110', ShipCountry: 'USA', Freight: 150.15, Verified: !0 }, { OrderID: 10317, CustomerID: 'LONEP', EmployeeID: 6, OrderDate: new Date(8440218e5), ShipName: 'Lonesome Pine Restaurant', ShipCity: 'Portland', ShipAddress: '89 Chiaroscuro Rd.', ShipRegion: 'OR', ShipPostalCode: '97219', ShipCountry: 'USA', Freight: 12.69, Verified: !1 }, { OrderID: 10318, CustomerID: 'ISLAT', EmployeeID: 8, OrderDate: new Date(8441082e5), ShipName: 'Island Trading', ShipCity: 'Cowes', ShipAddress: 'Garden House Crowther Way', ShipRegion: 'Isle of Wight', ShipPostalCode: 'PO31 7PJ', ShipCountry: 'UK', Freight: 4.73, Verified: !1 }];

    export let virtualData = [];
export function dataSource() {
    let names = ['VINET', 'TOMSP', 'HANAR', 'VICTE', 'SUPRD', 'HANAR', 'CHOPS', 'RICSU', 'WELLI', 'HILAA', 'ERNSH', 'CENTC',
        'OTTIK', 'QUEDE', 'RATTC', 'ERNSH', 'FOLKO', 'BLONP', 'WARTH', 'FRANK', 'GROSR', 'WHITC', 'WARTH', 'SPLIR', 'RATTC', 'QUICK', 'VINET',
        'MAGAA', 'TORTU', 'MORGK', 'BERGS', 'LEHMS', 'BERGS', 'ROMEY', 'ROMEY', 'LILAS', 'LEHMS', 'QUICK', 'QUICK', 'RICAR', 'REGGC', 'BSBEV',
        'COMMI', 'QUEDE', 'TRADH', 'TORTU', 'RATTC', 'VINET', 'LILAS', 'BLONP', 'HUNGO', 'RICAR', 'MAGAA', 'WANDK', 'SUPRD', 'GODOS', 'TORTU',
        'OLDWO', 'ROMEY', 'LONEP', 'ANATR', 'HUNGO', 'THEBI', 'DUMON', 'WANDK', 'QUICK', 'RATTC', 'ISLAT', 'RATTC', 'LONEP', 'ISLAT', 'TORTU',
        'WARTH', 'ISLAT', 'PERIC', 'KOENE', 'SAVEA', 'KOENE', 'BOLID', 'FOLKO', 'FURIB', 'SPLIR', 'LILAS', 'BONAP', 'MEREP', 'WARTH', 'VICTE',
        'HUNGO', 'PRINI', 'FRANK', 'OLDWO', 'MEREP', 'BONAP', 'SIMOB', 'FRANK', 'LEHMS', 'WHITC', 'QUICK', 'RATTC', 'FAMIA'];
    const sport = ['Cricket', 'Football', 'Tennis', 'Golf', 'Chess', 'Dodgeball', 'Racket', 'Archery', 'Climbing', 'Hunting', 'Carrom', 'Tag', 'Novuss',
        'Subbuteo', 'Baseball', 'Madden NFL', 'Shuffleboard', 'Badminton', 'Hockey', 'Volleyball', 'Table Tennis', 'Golf', 'Cycling', 'Running', 'Walking', 'Wireball',
        'Town ball', 'Tee ball', 'Stool ball', 'Stick ball'];
    const country = ['India', 'Australia', 'Ballesteros', 'Belgium', 'Brazil', 'England', 'Ethiopia', 'Finland', 'France', 'Germany', 'Britain',
        'Argentina', 'Jamaica', 'Kenya', 'Morocco', 'Ireland', 'Norway', 'Philippines', 'Portugal', 'Romania', 'Russia', 'Scotland', 'Scottish', 'Serbia', 'Spain',
        'Sweden', 'Switzerland', 'Netherlands', 'UK', 'Ukraine', 'US', 'Wales', 'West Indies', 'China', 'Hong Kong', 'Italy', 'Philippines', 'Turkey', 'Botswana',
        'Sri Lanka', 'Algeria', 'Bangladesh', 'Egypt', 'Malaysia'];
    for (let i = 0; i < 100000; i++) {
        virtualData.push({
            'SNo': i + 1,
            'FIELD1': names[Math.floor(Math.random() * names.length)],
            'FIELD2': 1967 + (i % 10),
            'FIELD3': sport[Math.floor(Math.random() * sport.length)],
            'FIELD4': country[Math.floor(Math.random() * country.length)],
            'FIELD5': Math.floor(Math.random() * 2000),
            'FIELD6': Math.floor(Math.random() * 1000),
            'FIELD7': Math.floor(Math.random() * 100),
            'FIELD8': Math.floor(Math.random() * 10),
            'FIELD9': Math.floor(Math.random() * 10),
            'FIELD10': Math.floor(Math.random() * 100),
            'FIELD11': Math.floor(Math.random() * 100),
            'FIELD12': Math.floor(Math.random() * 1000),
            'FIELD13': Math.floor(Math.random() * 10),
            'FIELD14': Math.floor(Math.random() * 10),
            'FIELD15': Math.floor(Math.random() * 1000),
            'FIELD16': Math.floor(Math.random() * 200),
            'FIELD17': Math.floor(Math.random() * 300),
            'FIELD18': Math.floor(Math.random() * 400),
            'FIELD19': Math.floor(Math.random() * 500),
            'FIELD20': Math.floor(Math.random() * 700),
            'FIELD21': Math.floor(Math.random() * 800),
            'FIELD22': Math.floor(Math.random() * 1000),
            'FIELD23': Math.floor(Math.random() * 2000),
            'FIELD24': Math.floor(Math.random() * 150),
            'FIELD25': Math.floor(Math.random() * 1000),
            'FIELD26': Math.floor(Math.random() * 100),
            'FIELD27': Math.floor(Math.random() * 400),
            'FIELD28': Math.floor(Math.random() * 600),
            'FIELD29': Math.floor(Math.random() * 500),
            'FIELD30': Math.floor(Math.random() * 300),
        });
    }
}



export let employeeData = [{
    'EmployeeID': 1,
    'Name': {
        'LastName': 'abc'
    },
    'FirstName': 'Nancy',
    'Title': 'Sales Representative',
    'TitleOfCourtesy': 'Ms.',
    'BirthDate': new Date(-664743600000),
    'HireDate': new Date(704692800000),
    'Address': '507 - 20th Ave. E.\r\nApt. 2A',
    'City': 'Austria',
    'Region': 'WA',
    'PostalCode': '98122',
    'Country': 'USA',
    'HomePhone': '(206) 555-9857',
    'Extension': '5467',
    'Photo': { 'Length': 21626 },

    'Notes': 'Education includes a BA in psychology from Colorado State University in 1970.  She also completed\
    \'The Art of the Cold Call.\'  Nancy is a member of Toastmasters International.',
    'ReportsTo': 2,
    'PhotoPath': 'http://accweb/emmployees/davolio.bmp'
},
{
    'EmployeeID': 2,
    'Name': {
        'LastName': 'cde'
    },
    'FirstName': 'Andrew',
    'Title': 'Vice President, Sales',
    'TitleOfCourtesy': 'Dr.',
    'BirthDate': new Date(-563828400000),
    'HireDate': new Date(713764800000),
    'Address': '908 W. Capital Way',
    'City': 'Germany',
    'Region': 'WA',
    'PostalCode': '98401',
    'Country': 'USA',
    'HomePhone': '(206) 555-9482',
    'Extension': '3457',
    'Photo': { 'Length': 21626 },

    'Notes': 'Andrew received his BTS commercial in 1974 and a Ph.D. in international marketing from the University of \
    Dallas in 1981.  He is fluent in French and Italian and reads German.  He joined the company as a sales representative, \
    was promoted to sales manager in January 1992 and to vice president of sales in March 1993.  Andrew is a member of the \
    Sales Management Roundtable, the Austria Chamber of Commerce, and the Pacific Rim Importers Association.',
    'ReportsTo': 0,
    'PhotoPath': 'http://accweb/emmployees/fuller.bmp'
},
{
    'EmployeeID': 3,
    'Name': {
        'LastName': 'wqe'
    },
    'FirstName': 'Janet',
    'Title': 'Sales Representative',
    'TitleOfCourtesy': 'Ms.',
    'BirthDate': new Date(-200088000000),
    'HireDate': new Date(702104400000),
    'Address': '722 Moss Bay Blvd.',
    'City': 'France',
    'Region': 'WA',
    'PostalCode': '98033',
    'Country': 'USA',
    'HomePhone': '(206) 555-3412',
    'Extension': '3355',
    'Photo': { 'Length': 21722 },

    'Notes': 'Janet has a BS degree in chemistry from Boston College (1984). \
     She has also completed a certificate program in food retailing management.\
     Janet was hired as a sales associate in 1991 and promoted to sales representative in February 1992.',
    'ReportsTo': 2,
    'PhotoPath': 'http://accweb/emmployees/leverling.bmp'
},
{
    'EmployeeID': 4,
    'Name': {
        'LastName': 'yte'
    },
    'FirstName': 'Margaret',
    'Title': 'Sales Representative',
    'TitleOfCourtesy': 'Mrs.',
    'BirthDate': new Date(-1018814400000),
    'HireDate': new Date(736401600000),
    'Address': '4110 Old Switzerland Rd.',
    'City': 'Switzerland',
    'Region': 'WA',
    'PostalCode': '98052',
    'Country': 'USA',
    'HomePhone': '(206) 555-8122',
    'Extension': '5176',
    'Photo': { 'Length': 21626 },

    'Notes': 'Margaret holds a BA in English literature from Concordia College (1958) and an MA from the American \
    Institute of Culinary Arts (1966).  She was assigned to the Brazil office temporarily from July through November 1992.',
    'ReportsTo': 2,
    'PhotoPath': 'http://accweb/emmployees/peacock.bmp'
},
{
    'EmployeeID': 5,
    'Name': {
        'LastName': 'qwe'
    },
    'FirstName': 'Steven',
    'Title': 'Sales Manager',
    'TitleOfCourtesy': 'Mr.',
    'BirthDate': new Date(-468010800000),
    'HireDate': new Date(750830400000),
    'Address': '14 Garrett Hill',
    'City': 'Brazil',
    'Region': null,
    'PostalCode':
        'SW1 8JR',
    'Country': 'UK',
    'HomePhone': '(71) 555-4848',
    'Extension': '3453',
    'Photo': { 'Length': 21626 },

    'Notes': 'Steven Buchanan graduated from St. Andrews University, Scotland, with a BSC degree in 1976.  Upon joining the company as \
    a sales representative in 1992, he spent 6 months in an orientation program at the Austria office and then returned to his permanent \
    post in Brazil.  He was promoted to sales manager in March 1993.  Mr. Buchanan has completed the courses \'Successful \
    Telemarketing\' and \'International Sales Management.\'  He is fluent in French.',
    'ReportsTo': 2,
    'PhotoPath': 'http://accweb/emmployees/buchanan.bmp'
},
{
    'EmployeeID': 6,
    'Name': {
        'LastName': 'trw'
    },
    'FirstName': 'Michael',
    'Title': 'Sales Representative',
    'TitleOfCourtesy': 'Mr.',
    'BirthDate': new Date(-205185600000),
    'HireDate': new Date(750830400000),
    'Address': 'Coventry House\r\nMiner Rd.',
    'City': 'Brazil',
    'Region': null,
    'PostalCode': 'EC2 7JR',
    'Country': 'UK',
    'HomePhone': '(71) 555-7773',
    'Extension': '428',
    'Photo': { 'Length': 21626 },

    'Notes': 'Michael is a graduate of Sussex University (MA, economics, 1983) and the University of California at Los Angeles \
    (MBA, marketing, 1986).  He has also taken the courses \'Multi-Cultural Selling\' and \'Time Management for the Sales Professional.\'  \
    He is fluent in Japanese and can read and write French, Portuguese, and Spanish.',
    'ReportsTo': 5,
    'PhotoPath': 'http://accweb/emmployees/davolio.bmp'
},
{
    'EmployeeID': 7,
    'Name': {
        'LastName': 'cbe'
    },
    'FirstName': 'Robert',
    'Title': 'Sales Representative',
    'TitleOfCourtesy': 'Mr.',
    'BirthDate': new Date(-302731200000),
    'HireDate': new Date(757486800000),
    'Address': 'Edgeham Hollow\r\nWinchester Way',
    'City': 'Brazil',
    'Region': null,
    'PostalCode': 'RG1 9SP',
    'Country': 'UK',
    'HomePhone': '(71) 555-5598',
    'Extension': '465',
    'Photo': { 'Length': 21626 },

    'Notes': 'Robert King served in the Peace Corps and traveled extensively before completing his degree in English at the \
    University of Michigan in 1992, the year he joined the company.  After completing a course entitled \'Selling in Europe,\' \
    he was transferred to the Brazil office in March 1993.',
    'ReportsTo': 5,
    'PhotoPath': 'http://accweb/emmployees/davolio.bmp'
},
{
    'EmployeeID': 8,
    'Name': {
        'LastName': 'dbc'
    },
    'FirstName': 'Laura',
    'Title': 'Inside Sales Coordinator',
    'TitleOfCourtesy': 'Ms.',
    'BirthDate': new Date(-377982000000),
    'HireDate': new Date(762843600000),
    'Address': '4726 - 11th Ave. N.E.',
    'City': 'Austria',
    'Region': 'WA',
    'PostalCode': '98105',
    'Country': 'USA',
    'HomePhone': '(206) 555-1189',
    'Extension': '2344',
    'Photo': { 'Length': 21626 },

    'Notes': 'Laura received a BA in psychology from the University of Washington.  She has also completed a course in business \
    French.  She reads and writes French.',
    'ReportsTo': 2,
    'PhotoPath': 'http://accweb/emmployees/davolio.bmp'
},
{
    'EmployeeID': 9,
    'Name': {
        'LastName': 'xyz'
    },
    'FirstName': 'Anne',
    'Title': 'Sales Representative',
    'TitleOfCourtesy': 'Ms.',
    'BirthDate': new Date(-123966000000),
    'HireDate': new Date(784875600000),
    'Address': '7 Houndstooth Rd.',
    'City': 'Brazil',
    'Region': null,
    'PostalCode': 'WG2 7LT',
    'Country': 'UK',
    'HomePhone': '(71) 555-4444',
    'Extension': '452',
    'Photo': { 'Length': 21626 },

    'Notes': 'Anne has a BA degree in English from St. Lawrence College.  She is fluent in French and German.',
    'ReportsTo': 5,
    'PhotoPath': 'http://accweb/emmployees/davolio.bmp'
},

{
    'EmployeeID': 10,
    'Name': {
        'LastName': 'abc'
    },
    'FirstName': 'Nancy',
    'Title': 'Sales Representative',
    'TitleOfCourtesy': 'Ms.',
    'BirthDate': new Date(-664743600000),
    'HireDate': new Date(704692800000),
    'Address': '507 - 20th Ave. E.\r\nApt. 2A',
    'City': 'Austria',
    'Region': 'WA',
    'PostalCode': '98122',
    'Country': 'USA',
    'HomePhone': '(206) 555-9857',
    'Extension': '5467',
    'Photo': { 'Length': 21626 },

    'Notes': 'Education includes a BA in psychology from Colorado State University in 1970.  She also completed\
    \'The Art of the Cold Call.\'  Nancy is a member of Toastmasters International.',
    'ReportsTo': 2,
    'PhotoPath': 'http://accweb/emmployees/davolio.bmp'
},
{
    'EmployeeID': 11,
    'Name': {
        'LastName': 'cde'
    },
    'FirstName': 'Andrew',
    'Title': 'Vice President, Sales',
    'TitleOfCourtesy': 'Dr.',
    'BirthDate': new Date(-563828400000),
    'HireDate': new Date(713764800000),
    'Address': '908 W. Capital Way',
    'City': 'Germany',
    'Region': 'WA',
    'PostalCode': '98401',
    'Country': 'USA',
    'HomePhone': '(206) 555-9482',
    'Extension': '3457',
    'Photo': { 'Length': 21626 },

    'Notes': 'Andrew received his BTS commercial in 1974 and a Ph.D. in international marketing from the University of \
    Dallas in 1981.  He is fluent in French and Italian and reads German.  He joined the company as a sales representative, \
    was promoted to sales manager in January 1992 and to vice president of sales in March 1993.  Andrew is a member of the \
    Sales Management Roundtable, the Austria Chamber of Commerce, and the Pacific Rim Importers Association.',
    'ReportsTo': 0,
    'PhotoPath': 'http://accweb/emmployees/fuller.bmp'
},
{
    'EmployeeID': 12,
    'Name': {
        'LastName': 'wqe'
    },
    'FirstName': 'Janet',
    'Title': 'Sales Representative',
    'TitleOfCourtesy': 'Ms.',
    'BirthDate': new Date(-200088000000),
    'HireDate': new Date(702104400000),
    'Address': '722 Moss Bay Blvd.',
    'City': 'France',
    'Region': 'WA',
    'PostalCode': '98033',
    'Country': 'USA',
    'HomePhone': '(206) 555-3412',
    'Extension': '3355',
    'Photo': { 'Length': 21722 },

    'Notes': 'Janet has a BS degree in chemistry from Boston College (1984). \
     She has also completed a certificate program in food retailing management.\
     Janet was hired as a sales associate in 1991 and promoted to sales representative in February 1992.',
    'ReportsTo': 2,
    'PhotoPath': 'http://accweb/emmployees/leverling.bmp'
},
{
    'EmployeeID': 13,
    'Name': {
        'LastName': 'xyz'
    },
    'FirstName': 'Peacock',
    'Title': 'Sales Manager',
    'TitleOfCourtesy': 'Mrs.',
    'BirthDate': new Date(-1018814400000),
    'HireDate': new Date(736401600000),
    'Address': '4110 Old Switzerland Rd.',
    'City': 'Germany',
    'Region': 'WA',
    'PostalCode': '98052',
    'Country': 'USA',
    'HomePhone': '(206) 555-8122',
    'Extension': '5176',
    'Photo': { 'Length': 21626 },

    'Notes': 'Margaret holds a BA in English literature from Concordia College (1958) and an MA from the American \
    Institute of Culinary Arts (1966).  She was assigned to the Brazil office temporarily from July through November 1992.',
    'ReportsTo': 2,
    'PhotoPath': 'http://accweb/emmployees/peacock.bmp'
},
{
    'EmployeeID': 14,
    'Name': {
        'LastName': 'yte'
    },
    'FirstName': 'Margaret',
    'Title': 'Sales Representative',
    'TitleOfCourtesy': 'Mrs.',
    'BirthDate': new Date(-1018814400000),
    'HireDate': new Date(736401600000),
    'Address': '4110 Old Switzerland Rd.',
    'City': 'Switzerland',
    'Region': 'WA',
    'PostalCode': '98052',
    'Country': 'USA',
    'HomePhone': '(206) 555-8122',
    'Extension': '5176',
    'Photo': { 'Length': 21626 },

    'Notes': 'Margaret holds a BA in English literature from Concordia College (1958) and an MA from the American \
    Institute of Culinary Arts (1966).  She was assigned to the Brazil office temporarily from July through November 1992.',
    'ReportsTo': 2,
    'PhotoPath': 'http://accweb/emmployees/peacock.bmp'
},
{
    'EmployeeID': 15,
    'Name': {
        'LastName': 'qwe'
    },
    'FirstName': 'Steven',
    'Title': 'Sales Manager',
    'TitleOfCourtesy': 'Mr.',
    'BirthDate': new Date(-468010800000),
    'HireDate': new Date(750830400000),
    'Address': '14 Garrett Hill',
    'City': 'Brazil',
    'Region': null,
    'PostalCode':
        'SW1 8JR',
    'Country': 'UK',
    'HomePhone': '(71) 555-4848',
    'Extension': '3453',
    'Photo': { 'Length': 21626 },

    'Notes': 'Steven Buchanan graduated from St. Andrews University, Scotland, with a BSC degree in 1976.  Upon joining the company as \
    a sales representative in 1992, he spent 6 months in an orientation program at the Austria office and then returned to his permanent \
    post in Brazil.  He was promoted to sales manager in March 1993.  Mr. Buchanan has completed the courses \'Successful \
    Telemarketing\' and \'International Sales Management.\'  He is fluent in French.',
    'ReportsTo': 2,
    'PhotoPath': 'http://accweb/emmployees/buchanan.bmp'
},
{
    'EmployeeID': 16,
    'Name': {
        'LastName': 'trw'
    },
    'FirstName': 'Michael',
    'Title': 'Sales Representative',
    'TitleOfCourtesy': 'Mr.',
    'BirthDate': new Date(-205185600000),
    'HireDate': new Date(750830400000),
    'Address': 'Coventry House\r\nMiner Rd.',
    'City': 'Brazil',
    'Region': null,
    'PostalCode': 'EC2 7JR',
    'Country': 'UK',
    'HomePhone': '(71) 555-7773',
    'Extension': '428',
    'Photo': { 'Length': 21626 },

    'Notes': 'Michael is a graduate of Sussex University (MA, economics, 1983) and the University of California at Los Angeles \
    (MBA, marketing, 1986).  He has also taken the courses \'Multi-Cultural Selling\' and \'Time Management for the Sales Professional.\'  \
    He is fluent in Japanese and can read and write French, Portuguese, and Spanish.',
    'ReportsTo': 5,
    'PhotoPath': 'http://accweb/emmployees/davolio.bmp'
},
{
    'EmployeeID': 17,
    'Name': {
        'LastName': 'cbe'
    },
    'FirstName': 'Robert',
    'Title': 'Sales Representative',
    'TitleOfCourtesy': 'Mr.',
    'BirthDate': new Date(-302731200000),
    'HireDate': new Date(757486800000),
    'Address': 'Edgeham Hollow\r\nWinchester Way',
    'City': 'Brazil',
    'Region': null,
    'PostalCode': 'RG1 9SP',
    'Country': 'UK',
    'HomePhone': '(71) 555-5598',
    'Extension': '465',
    'Photo': { 'Length': 21626 },

    'Notes': 'Robert King served in the Peace Corps and traveled extensively before completing his degree in English at the \
    University of Michigan in 1992, the year he joined the company.  After completing a course entitled \'Selling in Europe,\' \
    he was transferred to the Brazil office in March 1993.',
    'ReportsTo': 5,
    'PhotoPath': 'http://accweb/emmployees/davolio.bmp'
},
{
    'EmployeeID': 18,
    'Name': {
        'LastName': 'dbc'
    },
    'FirstName': 'Laura',
    'Title': 'Inside Sales Coordinator',
    'TitleOfCourtesy': 'Ms.',
    'BirthDate': new Date(-377982000000),
    'HireDate': new Date(762843600000),
    'Address': '4726 - 11th Ave. N.E.',
    'City': 'Austria',
    'Region': 'WA',
    'PostalCode': '98105',
    'Country': 'USA',
    'HomePhone': '(206) 555-1189',
    'Extension': '2344',
    'Photo': { 'Length': 21626 },

    'Notes': 'Laura received a BA in psychology from the University of Washington.  She has also completed a course in business \
    French.  She reads and writes French.',
    'ReportsTo': 2,
    'PhotoPath': 'http://accweb/emmployees/davolio.bmp'
},
{
    'EmployeeID': 19,
    'Name': {
        'LastName': 'xyz'
    },
    'FirstName': 'Anne',
    'Title': 'Sales Representative',
    'TitleOfCourtesy': 'Ms.',
    'BirthDate': new Date(-123966000000),
    'HireDate': new Date(784875600000),
    'Address': '7 Houndstooth Rd.',
    'City': 'Brazil',
    'Region': null,
    'PostalCode': 'WG2 7LT',
    'Country': 'UK',
    'HomePhone': '(71) 555-4444',
    'Extension': '452',
    'Photo': { 'Length': 21626 },

    'Notes': 'Anne has a BA degree in English from St. Lawrence College.  She is fluent in French and German.',
    'ReportsTo': 5,
    'PhotoPath': 'http://accweb/emmployees/davolio.bmp'
}];
