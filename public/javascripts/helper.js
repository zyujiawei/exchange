var compare = function (prop) {
    return function (obj1, obj2) {
        var val1 = obj1[prop];
        var val2 = obj2[prop];if (val1 < val2) {
            return -1;
        } else if (val1 > val2) {
            return 1;
        } else {
            return 0;
        }
    }
}

function getTree(){
  //请把get地址换成正确地址
  var data;
  $.ajax({
    url:"/api/branch",
    type:'get',
    async:false,
    success:function(result){
      result = result.sort(compare('pushLevel'))
      result.forEach(function(ele){
        var upperId = ele.upperId;
        ele.text = ele.id;
        result.forEach(function(d){
          if (d.id === upperId) {
            var childArray = d.nodes;
            if (!childArray) {
              childArray = []
            }
            childArray.push(ele);
            d.nodes = childArray;
          }
        })
      });
      result = result.filter(ele => ele.pushLevel === 1);
      data = result;
  }});
  return data
}

$(document).ready(function(){
  $('#tree').treeview({
      data: getTree()
  });
  $('#tree').treeview('expandAll', { silent: true });
})
