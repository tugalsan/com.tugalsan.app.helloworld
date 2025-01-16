package com.tugalsan.app.helloworld;

import com.tugalsan.api.charset.client.TGS_CharSetCast;
import com.tugalsan.api.charset.client.TGS_CharSetLocaleTypes;

public class AppStrings {

    public static String TITLE_AppModuleDefault() {
        return TGS_CharSetCast.current().localType.equals(TGS_CharSetLocaleTypes.TURKISH) ? "HelloWorld" : "HelloWorld";
    }
    public static String TITLE_AppModuleEcho() {
        return TGS_CharSetCast.current().localType.equals(TGS_CharSetLocaleTypes.TURKISH) ? "Eko" : "Echo";
    }
}
