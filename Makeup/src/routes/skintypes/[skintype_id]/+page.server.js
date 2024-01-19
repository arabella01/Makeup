import db from "$lib/db.js"

export async function load({ params }) {

    return {
        skintype: db.getSkintype(params.skintype_id)
    };
}