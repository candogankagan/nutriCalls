/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react';

export interface ListSheetProps {
  show: boolean;
  setShowListSheet: (show: boolean) => void;
  listTitle: string;
  listData: { id?: number; value?: string; label: string; icon?: React.ReactNode }[];
  setSelectedValue: any;
  customHeightMultiplier?: number;
  closeOnDragDown?: boolean;
  numberOfLines?: number;
  fontSize?: number;
  renderIcon?: boolean;
  renderSearch?: boolean;
}
