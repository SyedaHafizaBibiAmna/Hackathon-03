import { type SchemaTypeDefinition } from 'sanity'

import  { categorySchema } from '../category'
import heroimages from '../heroimages'
import procduct from '../procduct'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [procduct, categorySchema, heroimages],
}
