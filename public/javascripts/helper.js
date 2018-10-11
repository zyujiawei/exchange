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

function statusFormatter(value, row, index, field){
  var text = 'error';
  console.log(value)
  switch (value) {
    case 0,1:
      text = '未成交'
      break;
    case 4,5:
      text = '取消'
      break;
    case 3:
      text = '部分成交'
      break;
    default:
      text = '完全完成'
      break;
  }
  return text;
}

$(document).ready(function(){
  $('#onholdtable').bootstrapTable({
    columns: [{
        field: 'cointype',
        title: '币种'
    }, {
        field: 'buy',
        title: '总买'
    }, {
        field: 'sell',
        title: '总卖'
    }, {
        field: 'hold',
        title: '持仓'
    }]
  });
  $('#totalonholdtable').bootstrapTable({
    columns: [{
        field: 'cointype',
        title: '币种'
    }, {
        field: 'buy',
        title: '总买'
    }, {
        field: 'sell',
        title: '总卖'
    }, {
        field: 'hold',
        title: '持仓'
    }]
  });
  $('#oredertable').bootstrapTable({
    columns: [{
        field: 'side',
        title: '买卖方向',
        formatter:function(value, row, index, field){
          if(value =='SELL'){
            return '卖'
          } else{
            return '买'
          }
        }
    }, {
        field: 'price',
        title: '价格'
    }, {
        field: 'volume',
        title: '数量'
    }, {
        field: 'avg_price',
        title: '平均价格'
    }, {
        field: 'deal_volume',
        title: '已成交数量'
    }, {
        field: 'status',
        title: '订单状态',
        formatter: function(value, row, index, field){
          var text = 'error';
          switch (value) {
            case 0,1:
              text = '未成交'
              break;
            case 4,5:
              text = '取消'
              break;
            case 3:
              text = '部分成交'
              break;
            default:
              text = '完全完成'
              break;
          }
          return text;
        }
    }, {
        field: 'ctime',
        title: '委托时间',
        sortable: true,
        order: 'desc',
        formatter:function(value, row, index, field){
          var date = new Date(value);
          return date.getFullYear()+"-" + (date.getMonth()+1) + "-" + date.getDate()+' '+date.getHours()+':'+date.getMinutes();
        }
    }, {
        field: 'mtime',
        title: '处理时间',
        formatter:function(value, row, index, field){
          var date = new Date(value);
          return date.getFullYear()+"-" + (date.getMonth()+1) + "-" + date.getDate()+' '+date.getHours()+':'+date.getMinutes();
        }
    }]
  });
  $('#tree').treeview({
      data: getTree()
  });
  $('#tree').treeview('expandAll', { silent: true });
  $('#tree').on('nodeSelected', function(event, data) {
    var id = data.id;
    var cointype = 'cvt';
    var todaydate = new Date();
    var end_date = todaydate.getFullYear()+"-" + (todaydate.getMonth()+1) + "-" + todaydate.getDate();
    $.ajax({
      url:"/api/order/"+id+"/cargo/"+cointype+"/"+end_date,
      type:'get',
      async:false,
      success:function(result){
        result.cointype = 'CVT';
        $('#onholdtable').bootstrapTable('load',[result]);
      }
    });
  });
  $('#queryButton').click(function(){
    var selectedNode = $('#tree').treeview('getSelected');
    if (selectedNode.length > 0){
      var cointype = 'cvtbtc';
      var start_date = '2008-01-02';
      var end_date = '2018-01-01';
      var id = selectedNode[0].id;
      $.ajax({
        url:"/api/order/"+id+"/"+cointype+"/"+start_date+"/"+end_date,
        type:'get',
        async:false,
        success:function(result){
          $('#oredertable').bootstrapTable('load',result);
        }
      });
    } else{
      alert('请选择下线用户');
    }

  })
})
