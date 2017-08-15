import Datastore from 'lowdb';
import uuid from 'uuid';

const db = new Datastore('server/database.json');

const roomsModel = {
    getAll: async () => {
        return db.get('rooms').value()
    },
    get: async (id) => {
        return await db.get('rooms').find({ id }).value();
    },
    add: async (data) => {
        return await db.get('rooms').push(data).last().assign({ id: uuid() }).write();
    },
    update: async (id, data) => {
        return await db.get('rooms').find({ id }).assign(data).write();
    },
    remove: async (id) => {
        return await db.get('rooms').remove({ id }).write();
    }
}

export default roomsModel;
