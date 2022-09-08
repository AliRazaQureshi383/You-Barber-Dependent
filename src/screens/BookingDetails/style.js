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
    marginHorizontal: wp(14),
  },
  TopView: {
    backgroundColor: colors.white,

    borderBottomLeftRadius: wp(7),
    borderBottomRightRadius: wp(7),
    elevation: wp(1),
  },
  TopView2: {
    flexDirection: 'row',
    marginVertical: wp(10),
    marginHorizontal: wp(5),
  },

  placeholderofDropPicker: {
    color: colors.gray,
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
    height: wp(20),
    width: wp(20),
    orderRadius: wp(50),
    marginLeft: wp(3),
    marginTop: wp(3),
  },
  HomeService: {
    marginHorizontal: wp(2),
    color: colors.parrot,
  },
  userName: {
    width :wp(65),
    marginHorizontal: wp(2),
    color: colors.blue,
    fontSize: fontsSize.medium,
    fontWeight: fontWeight.semiBold,
    marginBottom: wp(2),
    flexWrap: 'wrap',

    marginLeft: wp(3),
    marginTop: hp(1),
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
  servicesViewAlter: {
    borderWidth: hp(0.2),
    borderRadius: wp(2),
    backgroundColor: 'orange',
    marginTop: 15,

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
    marginTop: hp(1),
  },
  scheduleText: {
    marginLeft: wp(1),
    marginRight: wp(2),
    color: colors.gray,
  },
  schedulelogo: {
    alignSelf: 'center',
    height:wp(45),
    width:wp(45),
    borderRadius :wp(5)
    
  },
  Btn: {
    backgroundColor: 'white',
    height: wp(8),
    width: wp(8),
    elevation: wp(1),
    justifyContent: 'center',
    borderRadius: wp(2),
  },
  btnSvg: {alignSelf: 'center'},
  botomView: {marginHorizontal: wp(2)},
  taskView: {
    flexDirection: 'row',
    marginHorizontal: wp(3),
    flexWrap: 'wrap',
    marginVertical: hp(2),
  },
  male: {height: wp(20), width: wp(20)},
  wrap: {flexWrap: 'wrap'},
  row: {flexDirection: 'row'},
  left: {marginLeft: wp(10)},
  left2: {marginLeft: wp(2)},
  maleView: {
    flexDirection: 'row',
    marginTop: hp(1),
    marginHorizontal: wp(2),
    justifyContent: 'space-between',
  },
  notes: {marginTop: hp(2), marginLeft: wp(2)},
  para: {marginHorizontal: wp(3), marginBottom: hp(10)},
  btnView: {
    flexDirection: 'row',
    marginHorizontal: wp(3),
    flexWrap: 'wrap',
    marginVertical: hp(3),
    justifyContent: 'space-between',
  },
  networkError:
  {
    flex: 1,
    height: '100%',
    width: '100%',
    justifyContent: 'center',
  },
  btnStyle: {
    width: wp(42),
    height: wp(15),
    borderRadius: wp(10),
    borderColor: colors.parrot,
    borderWidth: wp(0.5),
  },
  btnStyleDeep: {justifyContent: 'center', flex: 1, alignSelf: 'center'},
  color: {color: colors.parrot},

  scheduleText2: {
    marginLeft: wp(1),
    color: colors.gray,
  },
  picker: {
    width: wp(40),
    borderColor: colors.borderWhite,
  },
  servicesContainer: {
    width: wp(70),
    flexWrap: 'wrap',
    flexDirection: 'row',
    
  },

  pickerContainerBoarder: {
    borderColor: colors.borderWhite,
  },

  pickerLable: {
    color: colors.parrot,
  },
  indicator:
  {
    flex: 1,
    height: hp(100),
    width: wp(100)
  }
};
