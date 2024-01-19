import db from "$lib/db.js"

export async function load({params}) {

    return {
        products: db.getProducts(),
        productsFiltered: db.getProductsFiltered(params.productTypeFilter)
    }
}