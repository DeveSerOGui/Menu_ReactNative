import React from 'react';
import { Searchbar, Provider as PaperProvider, DefaultTheme } from 'react-native-paper';
import styles from './style';
import { View } from 'react-native';

const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,  
    onSurfaceVariant: '#439660',
  },
}

const SearchBar = () => {
  const [searchQuery, setSearchQuery] = React.useState('');

  return (
    <PaperProvider theme={theme}>
      <View style={styles.container}>
        <Searchbar
          style={styles.searchBarStyle}
          placeholder="Search"
          onChangeText={setSearchQuery}
          value={searchQuery}
        />
      </View>
    </PaperProvider>
  );
};

export default SearchBar;