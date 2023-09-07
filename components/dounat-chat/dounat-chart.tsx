import React, {useRef, useEffect} from 'react';
import {Easing, TextInput, Animated, View, Text} from 'react-native';
import Svg, {G, Circle} from 'react-native-svg';
import {DonutChartProps} from './interfaces';
import Styles from './dounat-chart.styles';

const AnimatedTextInput = Animated.createAnimatedComponent(TextInput);

export default function DonutChart({
  precentegs = [],
  radius = 200,
  strokeWidth = 150,
  duration = 500,
  backColor = 'tomato',
  textColor = 'black',
  strokeLinecap = 'none',
  rotation = 180,
  isCemiCircle = true,
  isShowDescription = false,
  isShowTotalValue = true,
  totalValueStyle = {},
  textDescriptionStyle,
  valueDescriptionStyle,
  dotDescriptionStyle,
  easing = Easing.out(Easing.ease),
}: DonutChartProps) {
  const animated = useRef(new Animated.Value(0)).current;

  const refs = useRef([]);
  refs.current = [];

  const inputRef = useRef();
  const circumference = 2 * Math.PI * radius;
  const halfCircle = radius + strokeWidth;
  const max = precentegs.reduce((v1, v2) => v1 + v2.value, 0);

  const addRef = ref => {
    if (ref && !refs.current.includes(ref)) {
      refs.current.unshift(ref);
    }
  };

  const animation = (index = 0, maxIndex = 3, animated) => {
    return Animated.timing(animated, {
      delay: 0,
      toValue: precentegs
        .slice(0, index + 1)
        .reduce((v1, v2) => v1 + v2.value, 0),
      duration,
      useNativeDriver: true,
      easing,
    }).start(() => {
      if (index < maxIndex - 1) {
        animation(++index, precentegs.length, animated);
      }
    });
  };
  var i = 0;
  var ref = useRef();

  const setRef = (strokeDashoffset, value) => {
    if (ref) {
      ref.setNativeProps({
        strokeDashoffset,
      });
    }

    if (i < precentegs.length) {
      if (
        value ===
        precentegs.slice(0, i + 1).reduce((v1, v2) => v1 + v2.value, 0)
      ) {
        ref = refs.current[i + 1];

        ++i;
      }
    }
  };

  useEffect(() => {
    ref = refs.current[0];
    animation(0, precentegs.length, animated);

    animated.addListener(v => {
      const maxPerc = isCemiCircle
        ? (100 * v.value) / max / 2
        : (100 * v.value) / max;
      const strokeDashoffset = circumference - (circumference * maxPerc) / 100;

      if (inputRef?.current) {
        inputRef.current.setNativeProps({
          text: `${Math.round(v.value)}`,
        });
      }

      setRef(strokeDashoffset, v.value);
    });

    return () => {
      animated.removeAllListeners();
    };
  }, []);

  return (
    <View style={{width: '100%'}}>
      <Svg
        height={isCemiCircle ? radius : radius * 2}
        width={'100%'}
        style={{
          justifyContent: 'center',
          alignItems: 'center',
        }}
        viewBox={`${0} ${isCemiCircle ? halfCircle / 2 : halfCircle / 4} ${
          halfCircle * 2
        } ${halfCircle}`}>
        <G rotation={rotation} origin={`${halfCircle}, ${halfCircle}`}>
          {precentegs.map((v, i) => {
            return (
              <Circle
                key={v.id}
                ref={addRef}
                cx="50%"
                cy="50%"
                r={radius}
                fill="transparent"
                stroke={v.color}
                strokeWidth={strokeWidth}
                strokeLinecap={strokeLinecap}
                strokeDashoffset={circumference}
                strokeDasharray={circumference}
              />
            );
          })}

          <Circle
            cx="50%"
            cy="50%"
            r={radius}
            fill="transparent"
            stroke={backColor}
            strokeWidth={strokeWidth}
            strokeLinejoin="round"
            strokeOpacity=".1"
            strokeDasharray={
              2 * Math.PI * (isCemiCircle ? radius * 0.5 : radius)
            }
          />
        </G>
      </Svg>
      {isShowTotalValue && (
        <AnimatedTextInput
          ref={inputRef}
          underlineColorAndroid="transparent"
          editable={false}
          defaultValue="0"
          style={[
            {
              fontSize: radius / 3,
              color: textColor ?? backColor,
            },
            Styles.text,
            {...totalValueStyle},
          ]}
        />
      )}
      {isShowDescription && (
        <View>
          {precentegs.map((precentage, index) => (
            <View
              key={precentage.id}
              style={{flexDirection: 'row', alignItems: 'center'}}>
              <View
                style={[
                  {backgroundColor: precentage.color},
                  Styles.circle,
                  {...dotDescriptionStyle},
                ]}
              />
              <Text
                style={[
                  Styles.velue,
                  {color: precentage.color},
                  {...valueDescriptionStyle},
                ]}>
                {precentage.value}
              </Text>
              <Text
                style={[
                  Styles.description,
                  {color: precentage.color},
                  {...textDescriptionStyle},
                ]}>
                {precentage.name}
              </Text>
            </View>
          ))}
        </View>
      )}
    </View>
  );
}
