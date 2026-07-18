import {defineCliConfig} from 'sanity/cli'

export default defineCliConfig({
  api: {
    projectId: '786bstzj',
    dataset: 'production'
  },
  studioHost: 'talisman',
  deployment: {
    appId: 'bvbr9c2df6rvvuqd0w66m4el',
    /**
     * Enable auto-updates for studios.
     * Learn more at https://www.sanity.io/docs/studio/latest-version-of-sanity#k47faf43faf56
     */
    autoUpdates: true,
  },
})
