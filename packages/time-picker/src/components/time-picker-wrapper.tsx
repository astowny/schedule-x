import { TimePickerAppContext } from '../types/time-picker-app.context'
import { AppContext } from '../utils/stateful/app-context'
import AppInput from './app-input'
import AppPopup from './app-popup'
import { createPortal } from 'preact/compat'

type props = {
  $app: TimePickerAppContext
}

export default function TimePickerWrapper({ $app }: props) {
  const classes = ['sx__time-picker-wrapper']
  if ($app.config.dark.value) classes.push('is-dark')

  let AppPopupJSX = <AppPopup />
  if ($app.config.teleportTo.value) {
    AppPopupJSX = createPortal(AppPopupJSX, $app.config.teleportTo.value)
  }

  return (
    <>
      <div className={classes.join(' ')}>
        <AppContext.Provider value={$app}>
          <AppInput />

          {$app.timePickerState.isOpen.value && AppPopupJSX}
        </AppContext.Provider>
      </div>
    </>
  )
}
