import OrderDetails from "../model/OrderDetails.js";
import {getCustomerDB, getItemDB, loadCustomerDetails} from "../DB/db.js";


export class OrderDetailsController {
    constructor() {
        $('#selectCustomerID').change(this.handleLoadCustomerDetails.bind());
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
        const selectElement = document.getElementById('selectItemCode');
        const customer_id = selectElement.options[selectElement.selectedIndex].text;

        loadCustomerDetails(customer_id);
    }
}

new OrderDetailsController();