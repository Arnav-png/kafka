const {Kafka} = require('kafkajs')

exports.kafka = new Kafka({
    clientId:'kafka-test',
    brokers:['192.168.0.104:9092']
})