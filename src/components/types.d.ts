type Ratio =
  | 'logo'
  | '1x1'
  | '3x2'
  | '4x3'
  | '3x4'
  | '16x9'
  | '1366x640'
  | '66x37'
  | '644x362'
  | '225x133'
  | '257x170'
  | '45x53'
  | 'logoNova'
  | '148x97'
  | '112x63'
  | '161x91'
  | '555x416'
  | '555x424'
  | '255x169'
  | '354x236'
  | '321x180'
  | '547x308'
  | '233x146'
  | '354x199'
  | '82x54';

type FontWeightStyle =
  | '100'
  | '200'
  | '300'
  | '400'
  | '500'
  | '600'
  | '700'
  | '800'
  | '900';

type TextStyle =
  | 'uppercase'
  | 'capitalize'
  | 'underline'
  | 'italic'
  | 'center'
  | 'justify'
  | 'normal'
  | 'right'
  | 'left';

type TextSize =
  | '9x12';

type ColorStyle =
  | 'white'
  | 'black'
  | 'arsenic'
  | 'davysGrey'
  | 'spanishGreen'
  | 'black045'
  | 'black085'
  | 'mayGreen'
  | 'raisinBlack'
  | 'davysGrey5a'
  | 'black45'
  | 'grayX11'
  | 'columbiaBlue'
  | 'whiteSmoke'
  | 'onyx'
  | 'taupeGray';

type LetterSpacing = 'ls-md' | 'ls-lg';

type GeneralTextStyle =
  | ColorStyle
  | FontWeightStyle
  | TextStyle
  | LetterSpacing
  | TextSize;
