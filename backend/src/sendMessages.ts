// Save as sendMessage.ts
import { Kafka } from 'kafkajs';

const kafka = new Kafka({ clientId: 'producer', brokers: ['localhost:9092'] });
const producer = kafka.producer();

async function send() {
    await producer.connect();
    await producer.send({
        topic: 'customer-traffic',
        messages: [
            { value: JSON.stringify({ store_id: 10, customers_in: 2, customers_out: 3, time_stamp: "10.12.03" }) },
            { value: JSON.stringify({ store_id: 10, customers_in: 0, customers_out: 1, time_stamp: "10.13.15" }) },
            { value: JSON.stringify({ store_id: 10, customers_in: 2, customers_out: 0, time_stamp: "10.15.12" }) },
            { value: JSON.stringify({ store_id: 11, customers_in: 5, customers_out: 2, time_stamp: "11.01.00" }) },        ],
    });
    await producer.disconnect();
}

send();