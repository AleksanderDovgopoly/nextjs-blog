import {MongoClient} from "mongodb";

async function handler(req, res) {

    const uri = `mongodb+srv://${process.env.mongodb_username}:${process.env.mongodb_password}@${process.env.mongodb_clustername}.tyqhk.mongodb.net/${process.env.mongodb_database}?retryWrites=true&w=majority`;

    if (req.method === 'POST') {
        const {email, name, message} = req.body;

        if (
            !email ||
            !email.includes('@') ||
            !name ||
            name.trim() === '' ||
            !message ||
            message.trim() === ''
        ) {
            res.status(422).json({message: 'Invalid input'})
            return;
        }

        const newMessage = {
            email,
            name,
            message,
        };

        let client;

        try {
            client = await MongoClient.connect(uri)
        } catch (error) {
            res.status(500).json({message: 'Somthing with db server connection'});
            return;
        }

        const db = client.db();

        try {
            const result = await db.collection('messages').insertOne(newMessage);
            newMessage.id = result.insertedId;
        } catch (error) {
            res.status(500).json({message: 'Can not insert message to DB'})
            return;
        }

        client.close();

        res.status(201).json({message: 'Successfully stored message!'});
    }
}

export default handler