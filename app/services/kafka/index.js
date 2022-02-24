import Kafka from 'node-rdkafka';

const stream = Kafka.Producer.createWriteStream(
    {'metadata.broker.list': 'localhost:9092'}, 
    {}, 
    {topic: 'welcome-email'}
).on('error', () => {
    console.log('An error occurred in our welcome-email stream');
});

async function queueMessage(email) {
    const success = stream.write(Buffer.from(email))
    console.log('Message posted to welcome-email', success);
}

export default { queueMessage };