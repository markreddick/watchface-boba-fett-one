import * as hmUI from '@zos/ui';
import { Time } from '@zos/sensor'

export function buildView() {

    const time = new Time();

    hmUI.createWidget(hmUI.widget.IMG, {
        x: px(0),
        y: px(0),
        w: px(480),
        h: px(480),
        src: 'bg.png',
        show_level: hmUI.show_level.ONLY_NORMAL,
    });

    hmUI.createWidget(hmUI.widget.IMG, {
        x: px(0),
        y: px(0),
        w: px(480),
        h: px(480),
        src: 'bg-aod.png',
        show_level: hmUI.show_level.ONLY_AOD,
    });

    const angle_24 = time.getHours() * 15;
    let subdial_24_widget = hmUI.createWidget(hmUI.widget.IMG, {
        src: 'hand-24-square.png',
        x: 184,
        y: 290,
        w: 110,
        h: 110,
        pos_x: 0,
        pos_y: 0,
        center_x: 55,
        center_y: 55,
        angle: angle_24,
        show_level: hmUI.show_level.ONLY_NORMAL,
    });

    const angle_day = time.getDate() * 11.613;
    let subdial_day_widget = hmUI.createWidget(hmUI.widget.IMG, {
        src: 'hand-subdial-square.png',
        x: 277,
        y: 184,
        w: 112,
        h: 112,
        pos_x: 0,
        pos_y: 0,
        center_x: 55,
        center_y: 56,
        angle: angle_day,
        show_level: hmUI.show_level.ONLY_NORMAL,
    });

    const angle_dow = time.getDay() * 51.429;
    console.log('dow angel', angle_dow);
    let subdial_dow_widget = hmUI.createWidget(hmUI.widget.IMG, {
        src: 'hand-subdial-square.png',
        x: 88,
        y: 185,
        w: 112,
        h: 112,
        pos_x: 0,
        pos_y: 0,
        center_x: 55,
        center_y: 56,
        angle: angle_dow,
        show_level: hmUI.show_level.ONLY_NORMAL,
    });

    hmUI.createWidget(hmUI.widget.TIME_POINTER, {
        hour_centerX: 240,
        hour_centerY: 240,
        hour_posX: 16,
        hour_posY: 139,
        hour_path: 'hand-hour.png',
        minute_centerX: 240,
        minute_centerY: 240,
        minute_posX: 9,
        minute_posY: 189,
        minute_path: 'hand-minute.png',
        second_centerX: 240,
        second_centerY: 240,
        second_posX: 10,
        second_posY: 190,
        second_path: 'hand-second.png',
        show_level: hmUI.show_level.ONLY_NORMAL,
    });

    hmUI.createWidget(hmUI.widget.TIME_POINTER, {
        hour_centerX: 240,
        hour_centerY: 240,
        hour_posX: 16,
        hour_posY: 139,
        hour_path: 'hand-hour-aod.png',
        minute_centerX: 240,
        minute_centerY: 240,
        minute_posX: 9,
        minute_posY: 189,
        minute_path: 'hand-minute-aod.png',
        show_level: hmUI.show_level.ONLY_AOD,
    });
    
    /* ORIGINALLY WAS DOING THIS EVERY MIN AS NOT SURE WHAT getHours
       WILL GET ME WITH THE onPerhHourEnd callback - going to try
       THAT SINCE IT WOULD USE LESS PROCESSING (1/hr vs 1/min)
       BUT MAY NEED TO FALLBACK TO THIS IF THAT DOESNT WORK
    
    time.onPerMinute(function() {
        const angle = time.getHours() * 15;
        subdial_24_widget.setProperty(hmUI.prop.ANGLE, angle);
    });
    */

    time.onPerHourEnd(function() {
        const angle = time.getHours() * 15;
        subdial_24_widget.setProperty(hmUI.prop.ANGLE, angle);
    });

    time.onPerDay(function() {
        const angle_day = time.getDate() * 11.613;
        const angle_dow = time.getDay() * 51.429;
        subdial_day_widget.setProperty(hmUI.prop.ANGLE, angle_day);
        subdial_dow_widget.setProperty(hmUI.prop.ANGLE, angle_dow);
    });
}