import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import {colors} from '../../constants';
import { fontWeight } from '../../constants';
import { fontsSize } from '../../constants';

export const styles = {
  inputIconRight: {
    marginRight: wp(5),
    height :wp(5),
    width :wp(5)
  },

  inputIcon: {
    marginLeft: wp(5),
  },
  container: {
    flex: 1,
    backgroundColor: colors.white,
    alignItems: 'center',
    justifyContent: 'center',
 
  },

  inputView: {
    backgroundColor: colors.white,
    borderRadius: hp(5),
    width: wp(90),
    height: wp(15),
    marginBottom: wp(5),
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: wp(0.5),
    borderColor: colors.borderWhite,
  },

  TextInput: {
    flex: 1,
    marginLeft: wp(5),
  },
  forgetPass:
  {
     flexDirection :'row',
     justifyContent :'flex-end',
     width : wp(90)
  },

  loginBtn: {
    width: wp(90),
    borderRadius: wp(50),
    height: wp(15),
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: hp(10),
    backgroundColor: colors.parrot,
    
  },
  welcomeText: {
    fontSize: fontsSize.medium,
    fontWeight: 'bold',
    color: colors.blueishBlack,
    
  },

  welcomMsg: {
    fontSize: fontsSize.medium,
    marginTop: hp(4),
    marginBottom :hp(3),
    color: colors.gray,
  },

  loginText: {
    color: colors.white,
    fontWeight: 'bold',
  },
};
