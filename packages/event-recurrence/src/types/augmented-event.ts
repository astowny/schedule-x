import { CalendarEventInternal } from '@holitime/schedule-x-shared/src/interfaces/calendar/calendar-event.interface'

export interface AugmentedEvent extends CalendarEventInternal {
  isCopy?: boolean
}
