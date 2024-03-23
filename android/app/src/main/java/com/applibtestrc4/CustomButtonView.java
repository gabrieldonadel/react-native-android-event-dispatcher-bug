package com.applibtestrc4;

import android.content.Context;
import android.graphics.Color;
import android.util.Log;
import android.view.MotionEvent;
import android.view.View;

import com.facebook.react.bridge.Arguments;
import com.facebook.react.bridge.ReactContext;
import com.facebook.react.bridge.WritableMap;
import com.facebook.react.uimanager.UIManagerHelper;
import com.facebook.react.uimanager.events.Event;
import com.facebook.react.uimanager.events.EventDispatcher;

public class CustomButtonView extends androidx.appcompat.widget.AppCompatButton {
    private final EventDispatcher mEventDispatcher;

    public CustomButtonView(Context context) {
        super(context);
        mEventDispatcher = UIManagerHelper.getEventDispatcherForReactTag((ReactContext) getContext(), getId());

        setBackgroundColor(Color.BLUE);
        setText("Custom Button View");

        setClickable(true);
        setOnClickListener(new OnClickListener() {
            @Override
            public void onClick(View v) {
                WritableMap event = Arguments.createMap();
                event.putString("customProperty", "clicked");

                mEventDispatcher.dispatchEvent(new Event(UIManagerHelper.getSurfaceId(context), getId()) {
                    @Override
                    public String getEventName() {
                        return "topChange";
                    }

                    protected WritableMap getEventData() {
                        return event;
                    }
                });
            }
        });

        setOnTouchListener(new OnTouchListener() {
            @Override
            public boolean onTouch(View view, MotionEvent motionEvent) {
                switch (motionEvent.getAction()) {
                    case MotionEvent.ACTION_DOWN:
                        setBackgroundColor(Color.RED);
                        break;
                    case MotionEvent.ACTION_UP: 
                    case MotionEvent.ACTION_CANCEL:
                        setBackgroundColor(Color.BLUE);
                        break;
                }
                return false;
            }
        });

    }
}
