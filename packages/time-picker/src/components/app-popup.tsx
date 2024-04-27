import TimeInput from './time-input'
import { AppContext } from '../utils/stateful/app-context'
import { useContext, useRef } from 'preact/compat'
import { useEffect, useState } from 'preact/hooks'

export default function AppPopup() {
  const $app = useContext(AppContext)
  const POPUP_CLASS_NAME = 'sx__time-picker-popup'
  const INPUT_WRAPPER_CLASS_NAME = 'sx__time-input-wrapper'

  const hoursRef = useRef<HTMLInputElement>(null)
  const minutesRef = useRef<HTMLInputElement>(null)
  const OKButtonRef = useRef<HTMLButtonElement>(null)
  const popupClasses = [POPUP_CLASS_NAME, $app.config.placement]

  const [initialStart, initialEnd] =
    $app.timePickerState.currentTime.value.split(':')
  const [hoursValue, setHoursValue] = useState(initialStart)
  const [minutesValue, setMinutesValue] = useState(initialEnd)

  const clickOutsideListener = (event: Event) => {
    const target = event.target as HTMLElement

    if (
      ![POPUP_CLASS_NAME, INPUT_WRAPPER_CLASS_NAME].some((className) =>
        target.closest(`.${className}`)
      )
    ) {
      $app.timePickerState.isOpen.value = false
    }
  }

  useEffect(() => {
    hoursRef.current?.focus()
    hoursRef.current?.select()
    document.addEventListener('click', clickOutsideListener)
    return () => document.removeEventListener('click', clickOutsideListener)
  }, [])

  const handleAccept = () => {
    $app.timePickerState.currentTime.value = `${hoursValue}:${minutesValue}`
    $app.timePickerState.isOpen.value = false
  }

  const remSize: number = Number(
    getComputedStyle(document.documentElement).fontSize.split('px')[0]
  )
  const popupHeight = 362
  const popupWidth = 332

  const fixedPositionStyle = {
    top: $app.config.placement.value?.includes('bottom')
      ? $app.timePickerState.inputRect.value.height +
        $app.timePickerState.inputRect.value.y +
        1 // 1px border
      : $app.timePickerState.inputRect.value.y - remSize - popupHeight, // subtract remsize to leave room for label text
    left: $app.config.placement.value?.includes('start')
      ? $app.timePickerState.inputRect.value.x
      : $app.timePickerState.inputRect.value.x +
        $app.timePickerState.inputRect.value.width -
        popupWidth,
    width: popupWidth,
    position: 'fixed',
  }

  return (
    <div
      className={popupClasses.join(' ')}
      style={$app.config.teleportTo.value ? fixedPositionStyle : undefined}
    >
      <div className="sx__time-picker-popup-label">Select time</div>

      <div className="sx__time-picker-time-inputs">
        <TimeInput
          initialValue={hoursValue}
          onChange={(newHours) => setHoursValue(newHours)}
          inputRef={hoursRef}
          nextTabIndexRef={minutesRef}
          validRange={[0, 23]}
        />

        <span className="sx__time-picker-colon">:</span>

        <TimeInput
          initialValue={minutesValue}
          onChange={(newMinutes) => setMinutesValue(newMinutes)}
          inputRef={minutesRef}
          validRange={[0, 59]}
          nextTabIndexRef={OKButtonRef}
        />
      </div>

      <div class="sx__time-picker-actions">
        <button
          class="sx__time-picker-action sx__ripple sx__button-cancel"
          onClick={() => ($app.timePickerState.isOpen.value = false)}
        >
          Cancel
        </button>

        <button
          ref={OKButtonRef}
          class="sx__time-picker-action sx__ripple sx__button-accept"
          onClick={handleAccept}
        >
          OK
        </button>
      </div>
    </div>
  )
}
