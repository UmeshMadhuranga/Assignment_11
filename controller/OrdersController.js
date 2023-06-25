import Orders from "../model/Orders.js";
import {getOrderDetailsDB} from "../DB/db.js";

export class OrdersController {
    constructor() {
        this.handleLoadOrders();
    }

    handleLoadOrders() {
        let orders_arr = getOrderDetailsDB();

        orders_arr.map((result, index) => {
            var row = "<tr>" +
                "<td>"+ result._customer_id +"</td>" +
                "<td>"+ result._item_code +"</td>" +
                "<td>"+ result._item_name +"</td>" +
                "<td>"+ result._item_price +"</td>" +
                "<td>"+ result._qty +"</td>" +
                "<td>"+ result._total +"</td>" +
                "</tr>";

            $('#ordersTBody').append(row);
        })
    }
}

new OrdersController();