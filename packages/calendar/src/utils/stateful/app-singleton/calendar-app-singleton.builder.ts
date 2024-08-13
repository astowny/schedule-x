/* eslint-disable @typescript-eslint/no-non-null-assertion */
import Builder from '@holitime/schedule-x-shared/src/interfaces/builder.interface'
import CalendarAppSingleton from '@holitime/schedule-x-shared/src/interfaces/calendar/calendar-app-singleton'
import CalendarAppSingletonImpl from './calendar-app-singleton.impl'
import DatePickerState from '@holitime/schedule-x-shared/src/interfaces/date-picker/date-picker-state.interface'
import TimeUnits from '@holitime/schedule-x-shared/src/utils/stateful/time-units/time-units.interface'
import { TranslateFn } from '@holitime/schedule-x-shared/src/types/translations'
import CalendarConfigInternal from '@holitime/schedule-x-shared/src/interfaces/calendar/calendar-config'
import CalendarState from '@holitime/schedule-x-shared/src/interfaces/calendar/calendar-state.interface'
import DatePickerConfigInternal from '@holitime/schedule-x-shared/src/interfaces/date-picker/config.interface'
import CalendarEvents from '@holitime/schedule-x-shared/src/interfaces/calendar/calendar-events.interface'
import CustomCallbacks from '@holitime/schedule-x-shared/src/interfaces/calendar/custom-callbacks.interface'

export default class CalendarAppSingletonBuilder
  implements Builder<CalendarAppSingleton>
{
  private config: CalendarConfigInternal | undefined
  private timeUnitsImpl: TimeUnits | undefined
  private datePickerState: DatePickerState | undefined
  private calendarState: CalendarState | undefined
  private translate: TranslateFn | undefined
  private datePickerConfig: DatePickerConfigInternal | undefined
  private calendarEvents: CalendarEvents | undefined
  private customCallbacks: CustomCallbacks | undefined

  build(): CalendarAppSingleton {
    return new CalendarAppSingletonImpl(
      this.config!,
      this.timeUnitsImpl!,
      this.calendarState!,
      this.datePickerState!,
      this.translate!,
      this.datePickerConfig!,
      this.calendarEvents!,
      { calendarWrapper: undefined },
      this.customCallbacks!
    )
  }

  withConfig(config: CalendarConfigInternal): CalendarAppSingletonBuilder {
    this.config = config
    return this
  }

  withTimeUnitsImpl(timeUnitsImpl: TimeUnits): CalendarAppSingletonBuilder {
    this.timeUnitsImpl = timeUnitsImpl
    return this
  }

  withDatePickerState(
    datePickerState: DatePickerState
  ): CalendarAppSingletonBuilder {
    this.datePickerState = datePickerState
    return this
  }

  withCalendarState(calendarState: CalendarState): CalendarAppSingletonBuilder {
    this.calendarState = calendarState
    return this
  }

  withTranslate(translate: TranslateFn): CalendarAppSingletonBuilder {
    this.translate = translate
    return this
  }

  withDatePickerConfig(
    datePickerConfig: DatePickerConfigInternal
  ): CalendarAppSingletonBuilder {
    this.datePickerConfig = datePickerConfig
    return this
  }

  withCalendarEvents(
    calendarEvents: CalendarEvents
  ): CalendarAppSingletonBuilder {
    this.calendarEvents = calendarEvents
    return this
  }

  withCustomCallbacks(
    customCallBacks: CustomCallbacks
  ): CalendarAppSingletonBuilder {
    this.customCallbacks = customCallBacks
    return this
  }
}
