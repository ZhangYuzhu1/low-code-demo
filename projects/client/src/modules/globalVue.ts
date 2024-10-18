import type { UserModule } from '~/types'

export const install: UserModule = ({ app, isClient }) => {
  if (!isClient)
    return

  (window as Window).$vue = app
}
