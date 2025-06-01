// 微信朋友圈广告过滤脚本 - Quantumult X

var body = $response.body;

try {
  var obj = JSON.parse(body);

  if (obj.adInfo) obj.adInfo = null;
  if (obj.advertisements) obj.advertisements = [];
  if (obj.advertisement_num) obj.advertisement_num = 0;
  if (obj.adExtInfo) obj.adExtInfo = null;

  if (obj.advertisementInfo) obj.advertisementInfo = null;
  if (obj.advertisementData) obj.advertisementData = null;

  $done({body: JSON.stringify(obj)});
} catch(e) {
  $done({body});
}
添加朋友圈广告屏蔽脚本
