import { Kafka } from 'kafkajs';

const kafka = new Kafka({ clientId: 'consumer', brokers: ['localhost:9092'] });
const consumer = kafka.consumer({ groupId: 'dashboard-group' });

export const startConsumer = async (onMessage: (data: any) => void) => {
  await consumer.connect();
  await consumer.subscribe({ topic: 'customer-traffic', fromBeginning: false });

  await consumer.run({
    eachMessage: async ({ message }) => {
      const data = JSON.parse(message.value!.toString());
      onMessage(data);
    }
  });
};
