const {kafka} = require('./client')

const init = async () => {
        const admin = kafka.admin();
        console.log('connecting to admin');
    
        try {
            await admin.connect();
            console.log('connecting is successful');
            const result  = await admin.listTopics();
            console.log(result)
            await admin.createTopics({
                topics: [{
                    topic: 'rider-updates',
                    numPartitions: 2,
                }]
            });
    
            console.log('created topics');
        } catch (error) {
            console.error('Error creating topics:', error)
        } finally {
            await admin.disconnect();
        }
}

init().catch(e=>{
    console.log(e)
})

//192.168.0.104