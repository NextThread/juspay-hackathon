import sanityClient from '@sanity/client'

export const client = sanityClient({
  // projectId: process.env.SANITY_PROJECT_ID,
  projectId: 'j7s76pbr',
  dataset: 'production',
  apiVersion: 'v1',
  // token: process.env.SANITY_TOKEN,
  token:'skQc8HzhpdyTmJjCiVMUyjvR1dGK2lVVH0BVKFBj5LcuMh1dX9qqZoV0Oodr3lNfsPTlMnKohAi3stYwGEsIyxDS7mGRKEaDnvN13ipXRPd0Ob4SK0GEmgAJT97cUmkwi8AdwpATz3ZllWQrsnETk5vF85vJqAdFmEHriUWvbwa0OtqosVFU',
  useCdn: false,
})
