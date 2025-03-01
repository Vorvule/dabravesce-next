import { StyleSheet } from 'react-native';

const Styles = StyleSheet.create({
  image: {
    height: 200,
    width: 360,
    alignSelf: 'center',
  },

  centered: {
    textAlign: 'center',
  },

  gapped: {
    gap: 14,
  },

  paragraph: {
    gap: 8,
    paddingTop: 12,
  },

  // index

  padded: {
    paddingVertical: 18,
  },

  menuPadding: {
    paddingLeft: 18,
  },

  border: {
    borderBottomColor: 'grey',
    borderBottomWidth: 1,
  },

  buttons: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    width: '100%',
  },
});

export default Styles;
