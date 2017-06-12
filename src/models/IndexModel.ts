import { IndexInterface } from '../interfaces/IndexInterface';

class IndexModel {

    private _indexModel: IndexInterface;

    constructor(indexModel: IndexInterface) {
        this._indexModel = indexModel;
    }

    get code(): string {
        return this._indexModel.name;
    }

    get age(): number {
        return this._indexModel.age;
    }

    get name(): string {
        return this._indexModel.name;
    }
}

Object.seal(IndexModel);
export default IndexModel;
