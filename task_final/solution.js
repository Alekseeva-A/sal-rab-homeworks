function sendRequest(name, phone, address, goods, sum) {
    var goodsArr = [];
    for (let i = 0; i < goods.length; i++) {
        goodsArr[i] = {title:goods[i].title,count:goods[i].count};
    }
    let jsonData = {
      "data": {
        "client": name+' '+phone,
        "order": {
          "address": 'ул. '+address.street+', дом '+address.house+', '+address.entrance+' подъезд, '+address.floor+' этаж, кв '+address.flat,
          "sum": sum
        },
        "goods": goodsArr
      }
    };
      return JSON.stringify(jsonData);
  }