package com.applibtestrc4;

import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.uimanager.SimpleViewManager;
import com.facebook.react.uimanager.ThemedReactContext;

public class  CustomButtonViewManager extends SimpleViewManager<CustomButtonView> {
    public static final String REACT_CLASS = "CustomButtonView";

    @Override
    public String getName() {
        return REACT_CLASS;
    }

    @Override
    protected CustomButtonView createViewInstance(ThemedReactContext reactContext) {
        return new CustomButtonView(reactContext);
    }
}
