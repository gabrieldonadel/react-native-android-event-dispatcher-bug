import React, {BaseSyntheticEvent} from 'react';
import {requireNativeComponent, ViewProps} from 'react-native';

const RCTMyCustomView = requireNativeComponent<
  ViewProps & {
    onChange: (event: BaseSyntheticEvent) => void;
  }
>('CustomButtonView');

const CustomButtonView = (props: {
  onChangeMessage?: (nativeEvent: any) => void;
}) => {
  function _onChange(event: BaseSyntheticEvent) {
    props.onChangeMessage?.(event.nativeEvent);
  }

  return (
    <RCTMyCustomView
      {...props}
      onChange={_onChange}
      style={{width: 200, height: 50}}
    />
  );
};

export default CustomButtonView;
