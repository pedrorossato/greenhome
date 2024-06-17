package com.greenhome.api.util;

import java.util.Calendar;
import java.util.Date;

public class DateUtils {

    public static Date nowPlusMinutes(int minutes) {
        Calendar calendar = Calendar.getInstance();
        calendar.setTime(new Date());
        calendar.add(Calendar.MINUTE, minutes);
        return calendar.getTime();
    }

    public static Date now() {
        return new Date();
    }
}
