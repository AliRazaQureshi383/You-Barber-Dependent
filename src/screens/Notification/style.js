import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import {colors, fontsSize, fontWeight} from '../../constants';

export const styles = {
  Text: {
    alignSelf: 'center',
    fontWeight: 'bold',
    fontSize: fontsSize.large,
    color: colors.black,
  },
  TopView: {
    backgroundColor: colors.white,
    padding: wp(10),
    borderBottomLeftRadius: wp(7),
    borderBottomRightRadius: wp(7),
    elevation: wp(1),
  },

  cardContainer: {
    padding: hp(2),
    backgroundColor: colors.white,
    flexDirection: 'row',
    borderRadius: wp(5),
    marginHorizontal: wp(5),
    marginVertical: hp(1),
    elevation: wp(1),
  },
  textView: {width: wp(70)},
  userMsg: {
    color: colors.gray,
    fontSize: wp(4),
    fontWeight: '100',
  },

  userImg: {
    height: wp(15),
    width: wp(15),
    alignSelf: 'center',
    orderRadius: wp(50),
  },

  userName: {
    marginHorizontal: wp(5),
    color: colors.black,
    fontSize: fontsSize.small,
    fontWeight: fontWeight.semiBold,
    marginBottom: wp(2),
  },
 

  scheduleText: {
    marginLeft: wp(5),
    marginRight: wp(5),
    color: colors.gray,
  },

  scheduleText2: {
    marginLeft: wp(1),
    color: colors.gray,
  },
};
