import { StyleSheet, Text, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';
import Tooltip from 'react-native-walkthrough-tooltip';
import { Normalize } from '@/styles';
import { useAppSelector } from '@/hooks';
import { GetCommonState } from '@/store';
import { TooltipInformation } from '@/assets';

type TooltipProps = {
  text: string;
  errorText?: string;
  placement: 'top' | 'bottom' | 'left' | 'right' | 'center';
};

const ToolTip = ({ text, errorText, placement }: TooltipProps) => {
  const [tooltipVisibility, setTooltipVisibility] = useState(false);
  const { theme } = useAppSelector(GetCommonState);

  const styles = StyleSheet.create({
    tooltipContent: {
      maxWidth: Normalize(130),
      backgroundColor: theme.BG.STRONG,
      height: 'auto'
    },
    tooltipText: { color: theme.TEXT.WHITE },
    tooltipTouchable: { marginRight: Normalize(16) }
  });

  return (
    <Tooltip
      isVisible={tooltipVisibility}
      disableShadow
      backgroundColor='rgba(0,0,0,0)'
      contentStyle={styles.tooltipContent}
      content={<Text style={styles.tooltipText}>{text}</Text>}
      placement={placement}
      onClose={() => setTooltipVisibility(false)}
    >
      <TouchableOpacity
        style={styles.tooltipTouchable}
        onPress={() => {
          setTooltipVisibility(true);
        }}
      >
        <TooltipInformation stroke={errorText ? theme.RED[500] : theme.ICON.SOFT} />
      </TouchableOpacity>
    </Tooltip>
  );
};

export default ToolTip;
