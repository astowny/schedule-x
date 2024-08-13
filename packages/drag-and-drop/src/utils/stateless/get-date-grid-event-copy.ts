import { getTimeGridEventCopyElementId } from '@holitime/schedule-x-shared/src/utils/stateless/strings/selector-generators'
import CalendarAppSingleton from '@holitime/schedule-x-shared/src/interfaces/calendar/calendar-app-singleton'
import { CalendarEventInternal } from '@holitime/schedule-x-shared/src/interfaces/calendar/calendar-event.interface'

export const getDateGridEventCopy = (
  $app: CalendarAppSingleton,
  eventCopy: CalendarEventInternal
) => {
  return ($app.elements.calendarWrapper as HTMLElement).querySelector(
    '#' + getTimeGridEventCopyElementId(eventCopy.id)
  ) as HTMLDivElement
}
