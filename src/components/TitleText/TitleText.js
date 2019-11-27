import React from 'react';
import { Text } from 'react-native';
import PropTypes from 'prop-types';
import styles from './TitleTextStyle';
import { COLORS } from '../../Constants';

const titleText = ({ text, fontSize, color, fontWeight }) => {
  const textStyle = { ...styles.defaultTextStyle };
  if (fontSize) textStyle.fontSize = fontSize;
  if (color) textStyle.color = color;
  if (fontWeight) textStyle.fontWeight = fontWeight;

  return (
    <Text style={textStyle} >
      {text}
    </Text>
  );
};

titleText.propTypes = {
  text: PropTypes.string.isRequired,
  fontSize: PropTypes.number,
  color: PropTypes.string,
  fontWeight: PropTypes.string,
  textAlign: PropTypes.string
};

titleText.defaultProps = {
  fontSize: 14,
  color: COLORS.DARK_GRAY,
  fontWeight: 'normal',
};

export default titleText;
