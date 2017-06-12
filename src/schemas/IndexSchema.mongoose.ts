import * as mongoose from 'mongoose';
import { IndexInterface } from '../interfaces/IndexInterface';

/**
 * Mongoose DAO implementation for the index schema
 */
class IndexSchemaDAO implements IndexInterface {

    code: string;
    age: number;
    name: string;

    static get schema() {
        let schema: mongoose.Schema = new mongoose.Schema({
            code: {
                type: String,
                required: true
            },
            age: {
                type: String,
                required: true
            },
            name: {
                type: String,
                required: true
            }
        });

        return schema;
    }
}

//Construct an interface that matches the schema
interface IndexSchemaInterface extends IndexInterface, mongoose.Document {}

export let schema = mongoose.model<IndexSchemaInterface>('Index', IndexSchemaDAO.schema);
