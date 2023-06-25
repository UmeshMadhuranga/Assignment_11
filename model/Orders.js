export default class Orders {
    constructor(customer_id, item_code, item_name, item_price, qty, total) {
        this._customer_id = customer_id;
        this._item_code = item_code;
        this._item_name = item_name;
        this._item_price = item_price;
        this._qty = qty;
        this._total = total;
    }
}