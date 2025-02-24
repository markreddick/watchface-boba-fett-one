import * as hmUI from '@zos/ui';

let subdial_24_widget = null;

export function buildView(hours) {

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

    const angle_24 = hours * 15;
    subdial_24_widget = hmUI.createWidget(hmUI.widget.IMG, {
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

    hmUI.createWidget(hmUI.widget.DATE_POINTER, {
        center_x: 144,
        center_y: 240,
        src: 'hand-subdial.png',
        posX: 9,
        posY: 57,
        start_angle: 0,
        end_angle: 360,
        type: hmUI.date.WEEK,
        show_level: hmUI.show_level.ONLY_NORMAL,
   });

   hmUI.createWidget(hmUI.widget.DATE_POINTER, {
        center_x: 333,
        center_y: 240,
        src: 'hand-subdial.png',
        posX: 9,
        posY: 57,
        start_angle: 2,
        end_angle: 360,
        type: hmUI.date.DAY,
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
        show_level: hmUI.show_level.ONLY_NORMAL
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
}

export function updateHours(hours)
{
    let angle = hours * 15;
    subdial_24_widget.setProperty(hmUI.prop.ANGLE, angle);
}