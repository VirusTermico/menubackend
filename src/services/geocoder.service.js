const NodeGeoCoder=require('node-geocoder')

const options={
    provider:process.env.GEOCODER_PROVIDER,
    httpAdapter:'https',
    api_key:process.env.GEOCODER_API_KEY,
    formatter:null
}


const geocoder= NodeGeoCoder(options)
module.exports=geocoder