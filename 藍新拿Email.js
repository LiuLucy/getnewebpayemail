

const orderList = [
{"orderTime":"","serviceTime":"","ownerName":"","ownerId":"","orderStatus":"","orderId":""},
]


var emailList = []
for (i = 0; i < orderList.length; i++) {
  (function(i){
    window.setTimeout(function(){
      document.querySelector('#trans_form > div:nth-child(4) > div > label:nth-child(3) > input').click()
      setTimeout(function() {
        const orderTime = orderList[i].orderTime.split('/')[0]+'-'+orderList[i].orderTime.split('/')[1]+'-'+orderList[i].orderTime.split('/')[2].split(' ')[0]
        console.log('orderTime', orderTime)
        const serviceTime = orderList[i].serviceTime.split('/')[0]+'-'+orderList[i].serviceTime.split('/')[1]+'-'+orderList[i].serviceTime.split('/')[2].split(' ')[0]
        console.log('serviceTime',serviceTime)
        document.getElementById('per_start_date').value = orderTime
        document.getElementById('per_end_date').value = serviceTime
        document.getElementById('keyword_search').value = orderList[i].orderId
        document.querySelector('#trans_search > div > input.btn.btn-primary').click()
        window.alert = function() {
          if(arguments[0] === '查無交易資料(TRA20002)') {
            return false
          } else {
            return true
          }
        };
        if(window.alert()) {        
          setTimeout(function(){
            document.getElementById('trans_detail').click()
            setTimeout(function() {
              emailList.push({
                id: orderList[i].ownerId,
                name: orderList[i].ownerName,
                email: document.querySelector('#paymail').textContent,
              })
              console.log('emailList',emailList) 
              if(orderList.length === i+1) {
                alert('完成')
              }
              setTimeout(() => {
                document.querySelector('#trans_detail_table > div > div > div > button > span').click()
              }, 500)
            }, 3000)
          },1500)
        } else {
          console.log('沒有取得資料')
        }
      }, 4000)
    }, i * 5000);
  }(i));
}



















