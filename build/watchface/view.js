import * as hmUI from '@zos/ui';
import { Screen, Time } from '@zos/sensor'

export function buildView() {


    console.log('**** BUILD VIEW ***');

    const screen = new Screen();
    const time = new Time();

    screen.onChange(function() {
        const current_time = time.getTime();
        console.log('screen status: ' + screen.getStatus());
        console.log('hours: ' + time.getHours());
        console.log('minutes: ' + time.getMinutes());
        console.log('seconds' + time.getSeconds());
        console.log('utc timestamp: ' + current_time);
    });

    time.onPerMinute(function() {
        const current_time = time.getTime();
        console.log('*** MINUTE CALLABCK');
        console.log('hours: ' + time.getHours());
        console.log('minutes: ' + time.getMinutes());
        console.log('seconds' + time.getSeconds());
        console.log('utc timestamp: ' + current_time);
 
    });

}