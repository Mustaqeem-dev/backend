import db from '../db/index.js';

export const fetchCustomers = () => {
    db.any("SELECT id ,name FROM customers")
        .then((row) => {
            return row;
        })
        .catch((error) => {
            console.log(error);
        });
}
