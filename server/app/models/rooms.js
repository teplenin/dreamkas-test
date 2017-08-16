import Datastore from 'lowdb';
import uuid from 'uuid';

const db = new Datastore('server/database.json');

const roomsModel = {
    getItems: async (offset = 0, count = 10) => {
        return await db.get('rooms').drop(offset).take(count).value();
    },
    getItemsTotal: async () => {
        return await db.get('rooms').size().value();
    },
    getItem: async (id) => {
        return await db.get('rooms').find({ id }).value();
    },
    addItem: async (data) => {
        return await db.get('rooms').push(data).last().assign({ id: uuid() }).write();
    },
    updateItem: async (id, data) => {
        return await db.get('rooms').find({ id }).assign(data).write();
    },
    removeItem: async (id) => {
        return await db.get('rooms').remove({ id }).write();
    }
}

export default roomsModel;
