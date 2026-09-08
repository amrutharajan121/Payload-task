import { getPayload } from 'payload'
import config from '@payload-config'

// Convert Payload Lexical rich text into plain text
function getText(value: any): string {
  if (!value) return ''

  // If normal text
  if (typeof value === 'string') return value

  // If Lexical rich text
  if (value.root?.children) {
    return extractText(value.root.children)
  }

  return ''
}

function extractText(nodes: any[]): string {
  if (!Array.isArray(nodes)) return ''

  return nodes
    .map((node) => {
      // Normal text node
      if (typeof node.text === 'string') {
        return node.text
      }

      // Nested elements
      if (Array.isArray(node.children)) {
        return extractText(node.children)
      }

      return ''
    })
    .join(' ')
}

export default async function DynamicPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params

  const payload = await getPayload({ config })

  const result = await payload.find({
    collection: 'pages',
    where: {
      slug: {
        equals: slug,
      },
    },
  })

  const page = result.docs[0]

  if (!page) {
    return (
      <main>
        <h1>Page not found</h1>
      </main>
    )
  }

  return (
    <main>
      {page.layout?.map((block: any, index: number) => {
        switch (block.blockType) {
          case 'hero':
            return (
              <section key={index}>
                <h1>{getText(block.heading)}</h1>
                <p>{getText(block.subheading)}</p>
              </section>
            )

          case 'text':
            return (
              <section key={index}>
                <p>{getText(block.content)}</p>
              </section>
            )

          case 'cta':
            return (
              <section key={index}>
                <h2>{getText(block.heading)}</h2>

                <a
                  href={
                    typeof block.buttonLink === 'string'
                      ? block.buttonLink
                      : '#'
                  }
                >
                  {getText(block.buttonText)}
                </a>
              </section>
            )

          default:
            return null
        }
      })}
    </main>
  )
}