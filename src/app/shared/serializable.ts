export class Serializable {

    fromJSON(array: any[]) {
        for (var propName in array)
            this[propName] = array[propName];
        return this;
    }
}