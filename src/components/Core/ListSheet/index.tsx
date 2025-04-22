/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useEffect, useRef, useState } from 'react';
import BottomSheet, { BottomSheetMethods } from '@devvie/bottom-sheet';
import { View, StyleSheet, TouchableOpacity, FlatList, PanResponder, TextInput } from 'react-native';
import { BASE_GAP, BASE_PADDING, Colors, Normalize, SCREEN_HEIGHT } from '@/styles';
import { ChevronRight, CloseIcon, DragHandle, Search } from '@/assets';
import { BaseColorType, ListSheetProps } from '@/types';
import { CoreText } from '@/components';
import { useAppSelector } from '@/hooks';
import { GetCommonState } from '@/store';

const ListSheet: React.FC<ListSheetProps> = ({
  show = false,
  closeOnDragDown = true,
  setShowListSheet,
  listTitle,
  listData,
  fontSize = 16,
  setSelectedValue,
  numberOfLines,
  customHeightMultiplier = 0.9,
  renderIcon,
  renderSearch
}) => {
  const [filterData, setFilterData] = useState(listData);
  const [isSelected, setIsSelected] = useState(false);
  const sheetRef = useRef<BottomSheetMethods>(null);
  const { theme } = useAppSelector(GetCommonState);

  useEffect(() => {
    if (show) {
      sheetRef.current?.open();
      if (listData !== undefined) {
        setFilterData(listData);
        setIsSelected(false);
        return;
      }

      setFilterData([]);
    } else {
      sheetRef.current?.close();
      setFilterData([]);
    }
  }, [show]);

  const panResponder = useRef(
    PanResponder.create({
      onStartShouldSetPanResponder: () => true,
      onMoveShouldSetPanResponder: () => true,
      onPanResponderMove: (evt, gestureState) => {
        const { dy } = gestureState; // dy ile dikey kaydırmayı alırız
        if (dy > 10) setShowListSheet(false);
      }
    })
  ).current;

  const handleSelect = (item: any) => {
    setSelectedValue(item);
    setIsSelected(true);
    setShowListSheet(false);
  };

  const customHeight = customHeightMultiplier * SCREEN_HEIGHT;
  const inputArea = renderSearch ? 70 : 0;
  const dragHandleArea = 85;
  const bottomPadding = 25;

  const inlineContainerHeights = customHeight - dragHandleArea - inputArea - bottomPadding;

  const { bottomSheet, dragHandle, header, panContainer } = styles(filterData);
  const { headerTextContainer, content, inputContainer, searchInput } = styles(filterData);

  const [search, setSearch] = useState('');

  const searchFilter = (text: string) => {
    if (text && listData.length > 0) {
      const newData = listData.filter(item => {
        const itemData = item.label ? item.label.toLocaleLowerCase('tr-TR') : '';
        const textData = text.toLocaleLowerCase('tr-TR');
        return itemData.indexOf(textData) > -1;
      });
      setFilterData(newData);
      setSearch(text);
    } else {
      setFilterData(listData);
      setSearch(text);
    }
  };

  return (
    <BottomSheet
      hideDragHandle
      openDuration={500}
      closeOnDragDown={closeOnDragDown}
      closeOnBackdropPress
      style={bottomSheet}
      height={customHeight}
      ref={sheetRef}
      onClose={() => setShowListSheet(false)}
    >
      <View {...panResponder.panHandlers} style={panContainer}>
        <View style={dragHandle}>
          <DragHandle />
        </View>
        <View style={header}>
          <View style={headerTextContainer}>
            <CoreText variant='headingXSmall/medium' text={listTitle} />
          </View>
          <TouchableOpacity onPress={() => setShowListSheet(false)}>
            <CloseIcon />
          </TouchableOpacity>
        </View>
      </View>
      {renderSearch && (
        <View style={[inputContainer, { backgroundColor: theme.BG.WHITE }]}>
          <Search />
          <TextInput
            value={search}
            onChangeText={text => searchFilter(text)}
            placeholder='Arama'
            placeholderTextColor={theme.TEXT.SOFT}
            style={[searchInput, { color: theme.TEXT.STRONG }]}
            autoCorrect={false}
          />
        </View>
      )}
      <View style={[content, { maxHeight: inlineContainerHeights, marginTop: renderSearch ? 16 : 4 }]}>
        <FlatList
          initialNumToRender={15}
          showsVerticalScrollIndicator={false}
          data={filterData}
          ListEmptyComponent={() => !isSelected && filterData && filterData.length === 0 && <EmptyComponent />}
          ItemSeparatorComponent={() => <View style={styles(filterData).separator} />}
          renderItem={({ item }) => (
            <TouchableOpacity onPress={() => handleSelect(item)} style={[styles(filterData).listItem]}>
              {renderIcon && item.icon}
              <CoreText
                numberOfLines={numberOfLines}
                customStyle={{ marginLeft: renderIcon ? 8 : 0, width: '90%', overflow: 'hidden', fontSize: Normalize(fontSize), fontWeight: 400 }}
                variant='labelBase/medium'
                text={item.label || ''}
              />
              <ChevronRight />
            </TouchableOpacity>
          )}
          keyExtractor={(item, index) => index.toString()}
        />
      </View>
    </BottomSheet>
  );
};

export default ListSheet;

const EmptyComponent = () => {
  return (
    <View style={{ alignItems: 'center', justifyContent: 'center', gap: BASE_GAP }}>
      <ChevronRight />
      <CoreText text='Aramanıza Uygun Sonuç Bulunamadı' variant='bodyBase/regular' />
    </View>
  );
};

const styles = (filterData: any, theme: BaseColorType = Colors.LIGHT) => {
  return StyleSheet.create({
    bottomSheet: {
      backgroundColor: theme.BG.PRIMARY,
      borderTopLeftRadius: 16,
      borderTopRightRadius: 16,
      paddingBottom: Normalize(36, 'height'),
      paddingHorizontal: BASE_PADDING
    },
    panContainer: { paddingBottom: 20 },
    dragHandle: {
      marginTop: 8,
      width: 61,
      height: 4,
      marginBottom: Normalize(16, 'height'),
      backgroundColor: theme.BG.SOFT,
      alignSelf: 'center'
    },
    header: { flexDirection: 'row', alignItems: 'center' },
    headerTextContainer: { flex: 1 },
    content: {
      padding: BASE_PADDING,
      borderRadius: 12,
      backgroundColor: filterData?.length === 0 ? 'transparent' : theme.BG.WHITE
    },
    listItem: {
      height: 36,
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between'
    },
    inputContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      gap: Normalize(16),
      paddingVertical: Normalize(12),
      borderRadius: Normalize(12),
      paddingHorizontal: Normalize(16)
    },
    searchInput: {
      paddingVertical: 0,
      height: 24,
      fontSize: 16,
      fontWeight: '400',
      flex: 1
    },
    emptyComponent: {
      alignItems: 'center',
      justifyContent: 'center',
      gap: BASE_GAP,
      marginTop: Normalize(120, 'height')
    },
    separator: {
      borderColor: theme.STROKE.SOFT,
      borderBottomWidth: 0.4,
      marginVertical: 8
    }
  });
};
