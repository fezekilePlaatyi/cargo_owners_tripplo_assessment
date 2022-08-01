const groupBy = (arr: any[], key: string) => {
  const initialValue = {};
  return arr.reduce((acc: { [x: string]: any }, cval: { [x: string]: any }) => {
    const myAttribute = cval[key];
    acc[myAttribute] = [...(acc[myAttribute] || []), cval];
    return acc;
  }, initialValue);
};

export const getAverages = (routesRates: any): any => {
  const routesWithHash = routesRates.map((route: any) => {
    route.routeHash =
      route.origin.toLowerCase() + "#" + route.destination.toLowerCase();
    return route;
  });

  const groupedByUniqueRoute = groupBy(routesWithHash, "routeHash");

  var averageRates: any = [];

  console.log(groupedByUniqueRoute);

  Object.keys(groupedByUniqueRoute).map((key: any) => {
    averageRates.push({
      origin: groupedByUniqueRoute[key][0].origin,
      destination: groupedByUniqueRoute[key][0].destination,
      averageRate: (
        groupedByUniqueRoute[key].reduce(function (acc: any, obj: any) {
          return parseFloat(acc) + parseFloat(obj.transportRate);
        }, 0.0) / groupedByUniqueRoute[key].length
      ).toFixed(2),
      numberOfTransportOwners: groupedByUniqueRoute[key].length,
    });
  });

  return averageRates;
};
