function  handleAndroid(name,type){
  // var {deviceBrand, deviceModel} = info
  var deviceBrand = name,
      deviceModel=type

  const androidModelMap = {
    // ============= 华为 Huawei =============
    'SEA-AL00': '华为nova5 Pro',
    "SEA-AL10":"华为nova5 Pro",
    'JEF-AN00': '华为nova7',
    "JEF-AN20":'华为nova7',
    'JAD-AL50': '华为nova12',
    'VCE-AL00': '华为nova4',
    'LIO-AL00': '华为Mate30',
    'ELE-AL00': '华为P30',
    'HMA-AL00': '华为Mate20',
    'OCE-AN10': '华为 Mate 40 Pro',

    // ============= 荣耀 Honor =============
    'KSA-AL00': '荣耀畅玩40 Plus',
    'JAT-AL00': '荣耀8A',
    'TEL-AN00': '荣耀X10',
    'FRI-AN00': '荣耀90 Pro',

    // ============= 小米/红米 =============
    'M2101K9C': '红米Note10 Pro',
    '21091116C': '红米Note11',
    '22101317C': '红米Note12',
    '23049RAD8C': '红米Note13',
    'M2010J19SC': '红米9A',
    'M1903C3EE': '红米6A',
    '21121119SC': '红米12C',
    '22041216C': '红米K40',
    '2306CRB3DC': 'Redmi 13C',

    // ============= OPPO =============
    'CPH2385': 'OPPO A97',
    'CPH2067': 'OPPO A72',
    'CPH2069': 'OPPO A92',
    'CPH2059': 'OPPO A92s',
    'CPH2083': 'OPPO Reno4',
    'CPH2201': 'OPPO Reno5',
    'CPH1941': 'OPPO R11',
    'PDKM00' : "OPPO Reno4 SE",
    "PDYT20" : "OPPO A72",
    "PDYM20" :"OPPO A72",
    // ============= 其他品牌 =============
    'HLTE203T': '魅族16T',
    'V1838A': '360手机N7 Pro',
    'GN8001S': '青橙手机',
    'MP1503': '美图M8'
  };
  return androidModelMap[deviceModel] || getBrandSpecificName(deviceBrand, deviceModel);
}
function getBrandSpecificName(brands, models) {
  // 字母转为大写
  var model = models.toUpperCase();
  //  brand 转为小写
 var  brand = brands.toLowerCase();
  // 小米/红米规则
  if (brand.includes('redmi') || brand.includes('xiaomi')) {
    const year = model.substring(0, 2); // 前两位代表年份
    const month = model.substring(2, 4); // 3-4位代表月份
    if (model.includes('RK')) return `Redmi K${year} Pro`; // K系列
    if (model.includes('RN')) return `Redmi Note ${year}`; // Note系列
    if (model.includes('DC')) return `小米 ${year} Ultra`; // Ultra旗舰
  }
  // 华为规则
  if (brand === 'huawei') {

  }
  // OPPO规则
  if (brand === 'oppo') {
    if (model.startsWith('PFT')) return 'OPPO Find X Pro 天玑版';
    if (model.startsWith('CPH2')) return `OPPO Reno ${model.substring(4,6)}系列`;
  }

  // 荣耀规则
  if (brand === 'honor') {
    if (model.endsWith('AN00')) return `荣耀 ${model.startsWith('LSA') ? 'Magic' : '数字'}系列`;
  }

  return `${brand} ${model}`; // 默认返回品牌+型号
}

console.log(handleAndroid("redmi",'24122RKC7C'))
