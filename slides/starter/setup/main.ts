// Import the shared setup from common
import { defineAppSetup } from '@slidev/types'
import sharedSetup from '../../../common/setup/main'
import '../../../common/theme/style.css'

export default defineAppSetup(({ app }) => {
  // Run shared setup first
  if (sharedSetup && typeof sharedSetup === 'function') {
    sharedSetup({ app } as any)
  }
})
