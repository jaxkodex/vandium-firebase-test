require('dotenv').config()
const path = require('path')
const firebaseAdmin = require('firebase-admin')
var serviceAccount = require(path.resolve(process.env.FIREBASE_CREDENTIALS))
let d = new Date()
console.log(d)

firebaseAdmin.initializeApp({
    credential: firebaseAdmin.credential.cert(serviceAccount),
    databaseURL: process.env.FIREBASE_DATABASE
})


let db = firebaseAdmin.firestore()
let collection = db.collection('testcollection')
const vandium = require('vandium')

var handler = async (event) => {
    console.log(event.pathParameters)
    let ref = collection.doc(event.pathParameters.id)
    console.log('request')
    let resp = await ref.get()
    console.log('response', resp.exists, new Date().getTime()-d.getTime())
    if (!resp.exists) return { statusCode: 404, isBase64Encoded: false}
    return {
        statusCode: 200,
        headers: {
            'Access-Control-Allow-Origin': '*'
        },
        body: JSON.stringify(rest.data()),
        isBase64Encoded: false
    }
}

exports.handler = handler