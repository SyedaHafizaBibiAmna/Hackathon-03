export default{
    name: 'product',
    title: 'Product',
    type: 'document',
    fields: [
        {
            name: 'title',
            title: 'Name of Product',
            type: 'string',
        },
        {
            name: 'images',
            title: 'Product Image',
            type: 'array',
            of: [{type: 'image'}]
           
        },
        {
            name: 'description',
            title: 'Description of Product',
            type: 'text',
           
        },
        {
            name: 'slug',
            title: 'Product Slug',
            type: 'slug',
            options: {
                source: 'name', 
            },
           
        },
        {
            name: "badge",
            title: "Badge",
            type: "string",
          },
        {
            title: "Price without Discount",
            name: "priceWithoutDiscount",
            type: "number",
          },
        {
            name: 'price',
            title: 'Product Price',
            type: 'number',
            
        },
        {
          name: 'price_id',
          title: 'Stripe Price ID',
          type: 'string',
        },
        {
            name:'category',
            title: 'Product Category',
            type: 'reference',
            to: [{type: 'categories'}
            ]
        },
        {
            name: "inventory",
            title: "Inventory Management",
            type: "number",
          },
          {
            name: "tags",
            title: "Tags",
            type: "array",
            of: [{ type: "string" }],
            options: {
              list: [
                { title: "Featured", value: "featured" },
                {
                  title: "Follow products and discounts on Instagram",
                  value: "instagram",
                },
                { title: "Gallery", value: "gallery" },
            ],
        },
      },
       
    ],
}