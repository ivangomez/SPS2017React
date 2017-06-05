import * as React from 'react';
//import styles from './ReactCalendarDemo.module.scss';
import { IReactCalendarDemoProps } from './IReactCalendarDemoProps';
import { escape } from '@microsoft/sp-lodash-subset';

import * as BigCalendar from 'react-big-calendar';

export default class ReactCalendarDemo extends React.Component<IReactCalendarDemoProps, void> {
  public render(): React.ReactElement<IReactCalendarDemoProps> {
    let moment: any = require('moment');
    BigCalendar.momentLocalizer(moment);
    let globalEvents: Array<any> =
      [
        {
          "title": "All Day Event",
          "allDay": true,
          "start": new Date(2017, 4, 20),
          "end": new Date(2017, 4, 20)
        },
        {
          "title": "Long Event",
          "start": new Date(2017, 4, 7),
          "end": new Date(2017, 4, 10)
        },

        {
          "title": "Short event",
          "start": new Date(2017, 4, 7, 10, 0, 0),
          "end": new Date(2017, 4, 7, 12, 0, 0)
        }
      ];
    let styles: string = ".rbc-month-view{  flex: 500px;}";
    return (
      <div>
        <style>
          {styles}
        </style>
        <BigCalendar events={globalEvents} />
      </div>
    );
  }
}
