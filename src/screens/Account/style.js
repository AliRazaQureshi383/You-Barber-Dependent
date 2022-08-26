import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {colors, fontWeight, fontsSize} from '../../constants';

export const styles = {
  nextimg: {
    alignSelf: 'center',
  },
  loginText: {
    alignSelf: 'center',
    fontWeight: fontWeight.bold,
    fontSize: fontsSize.small,
    color: colors.black,
  },
  loginTextView: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: wp(5),
  },
  greenContainer: {
    flex: 1,
    backgroundColor: colors.parrot,
  },
  whiteContainer: {
    flex: 3,
  },
  name: {
    alignSelf: 'center',
    fontWeight: 'bold',
    color: colors.black,
    fontSize: fontsSize.large,
  },
  email: {
    alignSelf: 'center',
  },
  loginGreenView: {
    backgroundColor: colors.parrot,
    height: hp(7),
    width: hp(7),
    padding: 15,
    borderRadius: wp(50),
    marginLeft: wp(5),
    alignSelf: 'center',
    justifyContent: 'center',
  },
  loginImage: {
    alignSelf: 'center',
  },

  loginBtn: {
    width: wp(90),
    borderRadius: wp(50),
    height: hp(10),
    backgroundColor: colors.white,
    flexDirection: 'row',
    alignSelf: 'center',
  },
  userImg: {
    width: wp(30),
    height: wp(30),
    alignSelf: 'center',
  },
  viewContainer: {
    position: 'absolute',
    width: wp(100),
    height: hp(100),
    marginTop: hp(15),
  },

  viewContainer2: {
    position: 'absolute',
    width: wp(100),
    height: hp(100),

    justifyContent: 'flex-end',
    marginVertical: -80,
  },
};
