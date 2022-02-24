const Kafka = require('node-rdkafka')

const consumer = Kafka.KafkaConsumer({
    'group.id': 'kafka',
    'metadata.broker.list': 'localhost:9092'
}, {})

consumer.connect();

consumer.on('ready', () => {
    console.log('Consumer ready!')
    consumer.subscribe(['test', 'welcome-email']);
    consumer.consume();
    console.log('Consuming')
}).on('data', (data) => {
    console.log(`Sending welcome Email to: ${data.value}`);
    // do send email
});
