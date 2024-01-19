import db from "$lib/db.js"

export async function load({ params }) {

    return {
        product: db.getProduct(params.product_id)
    };
}