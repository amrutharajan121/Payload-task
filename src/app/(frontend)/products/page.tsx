import { getPayload } from 'payload'
import config from '@payload-config'

export default async function ProductsPage() {
  const payload = await getPayload({ config })

  const result = await payload.find({
    collection: 'products',
    limit: 100,
  })

  return (
    <main>
      <h1>Products</h1>

      {result.docs.map((product) => (
        <div key={product.id}>
          <h2>{product.name}</h2>
          <p>Price: ₹{product.price}</p>
          <p>{product.description}</p>

          {product.featured && <p>⭐ Featured Product</p>}
        </div>
      ))}
    </main>
  )
}