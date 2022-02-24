import Account from './Account.model';
import Kafka from 'node-rdkafka';

const stream = Kafka.Producer.createWriteStream(
    {'metadata.broker.list': 'localhost:9092'}, 
    {}, 
    {topic: 'welcome-email'}
).on('error', () => {
    console.log('An error occurred in our welcome-email stream');
})

async function getAllAccounts() {
    return await Account.findAll();
}

async function addAccount(firstName, lastName, email) {
    let newAccount = await Account.create({
        first_name: firstName,
        last_name: lastName,
        email
    })

    let res = await stream.write(Buffer.from(email));
    console.log(res);

    return newAccount;
}

async function updateEmail(accountId, email) {
    let updatedAccount = await Account.update({
        email
    },
    {
        where: {account_id: accountId}
    })

    return updatedAccount;
}

export default { getAllAccounts, addAccount, updateEmail };