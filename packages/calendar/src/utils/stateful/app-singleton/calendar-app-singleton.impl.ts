import CalendarAppSingleton from '@holitime/schedule-x-shared/src/interfaces/calendar/calendar-app-singleton'
import CalendarConfigInternal from '@holitime/schedule-x-shared/src/interfaces/calendar/calendar-config'
import TimeUnits from '@holitime/schedule-x-shared/src/utils/stateful/time-units/time-units.interface'
import DatePickerState from '@holitime/schedule-x-shared/src/interfaces/date-picker/date-picker-state.interface'
import { TranslateFn } from '@holitime/schedule-x-shared/src/types/translations'
import CalendarState from '@holitime/schedule-x-shared/src/interfaces/calendar/calendar-state.interface'
import DatePickerConfigInternal from '@holitime/schedule-x-shared/src/interfaces/date-picker/config.interface'
import CalendarEvents from '@holitime/schedule-x-shared/src/interfaces/calendar/calendar-events.interface'
import CalendarElements from '@holitime/schedule-x-shared/src/interfaces/calendar/calendar-elements.interface'
import CustomCallbacks from '@holitime/schedule-x-shared/src/interfaces/calendar/custom-callbacks.interface'

export default class CalendarAppSingletonImpl implements CalendarAppSingleton {
  constructor(
    public config: CalendarConfigInternal,
    public timeUnitsImpl: TimeUnits,
    public calendarState: CalendarState,
    public datePickerState: DatePickerState,
    public translate: TranslateFn,
    public datePickerConfig: DatePickerConfigInternal,
    public calendarEvents: CalendarEvents,
    public elements: CalendarElements = { calendarWrapper: undefined },
    public customCallbacks: CustomCallbacks = { onAddTimeOff: () => {} }
  ) {}
}
