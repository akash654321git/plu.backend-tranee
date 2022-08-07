const date = function (){

    const date1 = new Date()
    console.log(date1.getDate())

}
date()

 
const month = function(){
    let dt = new Date();
    let mth = dt.getMonth()+1;
    console.log(mth)
}


const year = function(){

    let yr = new Date();
    let yrr1 = yr.getFullYear()
    console.log(yrr1)
}

// let alldate = function(){
//   let date = new Date().getDate()
//   let month = new Date().getMonth()+1;
//   let year = new Date().getFullYear()
//   console.log(`today date is ${date}/${month}/${year}`)
// }


const getBatchInfo = function(){
    console.log(`my batch is plutonium 2, W3D3 the topic for the day is Nodejs `)
}



// module.exports.alldate = alldate

module.exports.date = date
module.exports.month = month
module.exports.year = year
module.exports.getBatchInfo = getBatchInfo