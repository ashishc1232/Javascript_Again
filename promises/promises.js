// console.log("Start")

// setTimeout(function(){
//     console.log("Medium")  
// },3000)


// console.log("End")

// const cart=["Shoes", "Jeans", "Shirts"] // real world (big Object)

// api.createOrder(cart, function(){
//     api.proceedToPayment(function(){
//         api.showOrderSummary(function(){
//             api.updateWallet()
//         }
//         )
//     }
//     )
// })

createOrder(cart)
.then(function(orderId){
proceedToPayment(orderId)
})
.then(function(paymentInfo){
showOrderSummary(paymentInfo)
})
.then(function(Receipt){
    updateWallet(Receipt)
})
