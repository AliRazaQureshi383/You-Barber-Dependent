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
  placeholderofDropPicker: {
    color: colors.gray,
  },
  TopView: {
    backgroundColor: colors.white,
    padding: wp(10),
    borderBottomLeftRadius: wp(10),
    borderBottomRightRadius: wp(10),
    elevation: wp(1),
  },
  filterText: {
    fontWeight: fontWeight.bold,
    fontSize: fontsSize.medium,
    color: colors.black,
    alignSelf: 'center',
  },
  filterView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: wp(5),
    marginTop: hp(2),
    marginBottom: hp(2),
  },

  cardContainer: {
    padding: wp(2),
    backgroundColor: colors.white,
    flexDirection: 'row',
    borderRadius: wp(5),
    marginHorizontal: wp(5),
    marginVertical: hp(1),
    elevation: wp(1),
  },
  userImg: {
    height: wp(10),
    width: wp(10),
    orderRadius: wp(50),
  },
  HomeService: {
    marginHorizontal: wp(2),
    color: colors.parrot,
  },
  userName: {
    marginHorizontal: wp(2),
    color: colors.blue,
    fontSize: fontsSize.medium,
    fontWeight: fontWeight.semiBold,
    marginBottom: wp(2),
    flexWrap: 'wrap',
    width: wp(55),
  },
  services: {
    marginHorizontal: wp(2),
    color: colors.gray,
    
  },
  servicesView: {
    borderWidth: hp(0.2),
    borderRadius: wp(3),
    marginLeft: wp(2),
    borderColor: colors.borderWhite,
    marginVertical: wp(1),
   
  
  },
  price: {
    flex: 1,
    textAlign: 'right',
    fontWeight: fontWeight.bold,
    fontSize: fontsSize.medium,
    color: colors.parrot,
    marginLeft: wp(-2),
  },
  scheduleView: {
    flexDirection: 'row',
    marginTop: hp(2),
  },
  scheduleText: {
    marginLeft: wp(1),
    marginRight: wp(2),
    color: colors.gray,
  },
  schedulelogo: {
    alignSelf: 'center',
    marginLeft: wp(2),
  },

  scheduleText2: {
    marginLeft: wp(1),
    color: colors.gray,
  },
  picker: {
    width: wp(40),
    borderColor: colors.borderWhite,
  },
  servicesContainer: {
    width: wp(55),
    flexWrap: 'wrap',
    flex: 1,
    flexDirection: 'row',
  },

  pickerContainerBoarder: {
    borderColor: colors.borderWhite,
  },

  pickerLable: {
    color: colors.parrot,
  },
};
