import { StyleProp } from 'react-native';

const searchStyles: StyleProp<any> = {
  input: {
    height: 60,
    marginTop: 20,
    borderWidth: 1,
    borderColor: 'grey',
    borderRadius: 30,
    paddingVertical: 10,
    paddingHorizontal: 25,
    paddingRight: 60, // Месца для кнопкі ачысткі
    fontFamily: 'Monomakh',
    fontSize: 22,
  },
  clearButton: {
    position: 'absolute',
    right: 15,
    top: 30,
    width: 40,
    height: 40,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  link: {
    paddingVertical: 24,
    borderBottomWidth: 1,
    borderBottomColor: 'grey',
  },
};

export default searchStyles;
