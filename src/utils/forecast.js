const request = require('postman-request')

const forecast = (latitude,longitude, callback) => {


    const url = 'http://api.weatherstack.com/current?access_key=50fde902797471769208fea23ce51693&query=' + latitude + ',' + longitude

    request({url: url, json: true}, (error,response) => {
        if (error) {
            console.log('Unable to connect to wheater service')
        } else if (response.body.success == false) {
            console.log(response.body.error.info)
        } else {
           const currentDay = response.body.current
           const temperature = currentDay.temperature
           const feelsLike = currentDay.feelslike
           const weatherMessage = 'It is currently ' + temperature +' degrees out. It feels like ' + feelsLike + ' degrees out.'
           // console.log(weatherMessage)
        }
})
}

module.exports = forecast