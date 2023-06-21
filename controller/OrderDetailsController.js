import OrderDetails from "../model/OrderDetails.js";
import {getCustomerDB, getItemDB, loadCustomerDetails, loadItemCodeDetails} from "../DB/db.js";


export class OrderDetailsController {
    constructor() {
        $('#btnAddToCart').click(this.handleSaveToCart.bind(this));
        $('#selectItemCode').change(this.handleLoadItemDetails.bind(this));
        $('#selectCustomerID').change(this.handleLoadCustomerDetails.bind(this));
        this.handleLoadCustomerID();
        this.handleLoadItemCode();
    }

    handleLoadCustomerID() {
        let customer_arr = getCustomerDB();

        const selectElement = document.getElementById('selectCustomerID');
        customer_arr.forEach((data) => {
            const optionElement = document.createElement('option');
            optionElement.text = data._customer_id;
            selectElement.add(optionElement);
        });
    }

    handleLoadItemCode() {
        let item_arr = getItemDB();

        const selectElement = document.getElementById('selectItemCode');
        item_arr.forEach((data) => {
            const optionElement = document.createElement('option');
            optionElement.text = data._item_code;
            selectElement.add(optionElement);
        });
    }

    handleLoadCustomerDetails() {
        const selectElement = document.getElementById('selectCustomerID');
        const customer_id = selectElement.options[selectElement.selectedIndex].text;

        loadCustomerDetails(customer_id);
    }

    handleLoadItemDetails() {
        const selectElement = document.getElementById('selectItemCode');
        const item_code = selectElement.options[selectElement.selectedIndex].text;

        loadItemCodeDetails(item_code);
    }

    handleSaveToCart() {
        const customer = $('#selectCustomerID');
        const item = $('#selectItemCode');

        var customer_id = customer.options[customer.selectedIndex].text;
        var item_code = item.options[item.selectedIndex].text;
        var item_name = $('#inputItemName2').val();
        var item_price = $('#inputItemPrice2').val();
        var item_qty = $('#inputItemQty2').val();

        var row = "<tr>" +
            "<td>"+ customer_id +"</td>" +
            "<td>"+ item_code +"</td>" +
            "<td>"+ item_name +"</td>" +
            "<td>"+ item_price +"</td>" +
            "<td>"+ item_qty +"</td>" +
            "<td>"+ item_qty +"</td>" +
            "</tr>";

        $('#placeOrderTBody').append(row);
    }
}

new OrderDetailsController();