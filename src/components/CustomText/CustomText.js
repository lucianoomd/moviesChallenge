import React from 'react';
import { Text } from 'react-native';
import PropTypes from 'prop-types';
import styles from './CustomTextStyle';
import { COLORS } from '../../Constants';

const customText = ({ text, fontSize, color, fontWeight, textAlign }) => {
  const textStyle = JSON.parse(JSON.stringify(styles.defaultTextStyle));
  if (fontSize) textStyle.fontSize = fontSize;
  if (color) textStyle.color = color;
  if (fontWeight) textStyle.fontWeight = fontWeight;
  if (textAlign) textStyle.textAlign = textAlign;

  return (
    <Text style={textStyle} >
      {text}
    </Text>
  );
};

customText.propTypes = {
  text: PropTypes.string,
  fontSize: PropTypes.number,
  color: PropTypes.string,
  fontWeight: PropTypes.string,
  textAlign: PropTypes.string
};

customText.defaultProps = {
  text: '',
  fontSize: 14,
  color: COLORS.WHITE,
  fontWeight: 'normal',
};

export default customText;
