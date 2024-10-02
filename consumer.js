const {kafka} = require('./client');
const group = process.argv[2];

const init =async ()=>{
    const consumer = await kafka.consumer({groupId:group, fromBeginning:true});

    await consumer.connect()

    consumer.subscribe({topics: ['rider-updates']});

    await consumer.run({
        eachMessage: async ({ topic, partition, message, heartbeat, pause }) => {
            console.log({
                message: message.value.toString(),
                topic: topic,
                partition: partition,
            })
        },
    })
}

init();