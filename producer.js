const {kafka} = require('./client');
const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});


const init = async()=>{
    const producer = await kafka.producer();

    await producer.connect();
    rl.setPrompt("> ");
    rl.prompt();
  
    rl.on("line", async function (line) {
      const [riderName, location] = line.split(" ");
      console.log(location.toLowerCase() === "north",'this is my location')
      const data  = {
        topic: "rider-updates",
        messages: [
          {
            partition: location.toLowerCase() === "north" ? 0 : 1,
            key: "location-update",
            value: JSON.stringify({ name: riderName, location }),
          },
        ],
      }
      console.log('data sent = ', data)
      await producer.send(data);
    }).on("close", async () => {
      await producer.disconnect();
    });
}

init();