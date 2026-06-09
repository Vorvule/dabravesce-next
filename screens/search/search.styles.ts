import { StyleProp } from 'react-native';

const searchStyles: StyleProp<any> = {
  input: {
    height: 60,
    marginTop: 20,
    borderWidth: 1,
    borderColor: 'grey',
    borderRadius: 30,
    paddingVertical: 10,
    paddingLeft: 25,
    paddingRight: 60, // Важна: месца для кнопкі
    fontFamily: 'Monomakh',
    fontSize: 22,
  },
  button: {
    position: 'absolute',
    right: 5,
    top: 25,
    width: 50,
    height: 50,
    borderColor: 'grey',
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'teal',
  },
  link: {
    paddingVertical: 24,
    borderBottomWidth: 1,
    borderBottomColor: 'grey',
  },
};

export default searchStyles;
