import db from "$lib/db.js"

export async function load({ params }) {

    return {
        skintypes: db.getSkintypes()
    };
}