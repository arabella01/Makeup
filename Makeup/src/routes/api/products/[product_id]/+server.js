import db from '$lib/db';
import { json } from '@sveltejs/kit';

export async function DELETE({ params }) {
	const id = params.product_id;
	const result = await db.deleteProduct(id);
	return json({ id: result });
}

export async function PUT({ request }) {
    const product = await request.json();
	const result = await db.updateProduct(product);
	return json({ id: result });
}