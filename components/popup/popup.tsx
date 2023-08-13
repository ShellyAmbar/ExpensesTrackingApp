import {Animated, Modal} from 'react-native';
import React from 'react';

import Close from '@ExpensesTracking/assets/images/close.svg';
import PopupProps from './interfaces';
import Styles from './popup.styles';
import usePopup from './hooks/usePopup';
import {Box} from '../controllers/box/box';
import TextFactory from '../factories/text-factory/text-factory';
import Spacer from '../controllers/spacer/spacer';

const Popup = ({
  isVisible,
  onClickClose,
  title,
  titleStyle,
  durationEnter = 500,
  durationExit = 500,
  children,
}: PopupProps) => {
  const {animatSlideDown, animatSlideUp, slideAnim} = usePopup({
    onClickClose,
    durationEnter,
    durationExit,
  });

  return (
    <Modal
      visible={isVisible}
      onRequestClose={() => {
        animatSlideDown();
      }}
      transparent={true}>
      <Box
        style={Styles.backdrop}
        onPress={() => {
          animatSlideDown();
        }}
      />

      <Animated.View
        onLayout={event => {
          animatSlideUp(event.nativeEvent.layout.height);
        }}
        style={[
          Styles.halfCircularRectView,
          {
            transform: [
              {
                translateY: slideAnim,
              },
            ],
          },
        ]}>
        <Box style={Styles.container}>
          {(onClickClose || title) && (
            <Box style={Styles.top}>
              <Box style={Styles.end} />

              {title ? (
                <TextFactory style={{...titleStyle, ...Styles.title}}>
                  {title}
                </TextFactory>
              ) : (
                <Box style={Styles.title} />
              )}
              {onClickClose ? (
                <Box
                  onPress={() => {
                    animatSlideDown();
                  }}
                  style={Styles.closeButton}>
                  <Close />
                </Box>
              ) : (
                <Box style={Styles.closeButton} />
              )}
            </Box>
          )}

          <Box style={Styles.content}>{children}</Box>
          <Spacer size={24} />
        </Box>
      </Animated.View>
    </Modal>
  );
};

export default Popup;
