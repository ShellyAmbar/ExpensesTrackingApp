import React, {forwardRef} from 'react';
import {
  FlatList,
  Pressable,
  ScrollView,
  TouchableOpacity,
  View,
} from 'react-native';

import {boxProps} from './interfaces';

export const Box = forwardRef((props: boxProps, ref?: any): JSX.Element => {
  const BoxView = props.scroll ? (
    <ScrollView {...props} ref={ref}>
      {props.children}
    </ScrollView>
  ) : props.flatList ? (
    <FlatList {...props} ref={ref}>
      {props.children}
    </FlatList>
  ) : (
    <View {...props} ref={props.ref} style={props?.style && props?.style}>
      {props.children}
    </View>
  );

  return props.withoutFeedback ? (
    <Pressable
      {...props}
      ref={props.ref}
      style={props?.style && props?.style}
      onPress={props.onPress}>
      {props.children}
    </Pressable>
  ) : props.onPress ? (
    <TouchableOpacity
      {...props}
      ref={props.ref}
      style={props?.style && props?.style}
      onPress={props.onPress}>
      {props.children}
    </TouchableOpacity>
  ) : (
    BoxView
  );
});
