import {ColorValue, View} from 'react-native';
import {stackItemType} from '../BarChart/RenderStackBars';
import {yAxisSides} from '../utils/constants';
import {CurveType, RuleType, secondaryYAxisType} from '../utils/types';

export type BarChartPropsType = {
  width?: number;
  height?: number;
  minHeight?: number;
  noOfSections?: number;
  noOfSectionsBelowXAxis?: number;
  maxValue?: number;
  mostNegativeValue?: number;
  stepHeight?: number;
  stepValue?: number;
  spacing?: number;
  data?: Array<itemType>;
  stackData?: Array<stackItemType>;
  side?: String;
  rotateLabel?: boolean;
  isAnimated?: boolean;
  animationDuration?: number;
  // animationEasing?: any;
  opacity?: number;
  isThreeD?: boolean;
  xAxisLength?: number;
  xAxisThickness?: number;
  xAxisColor?: ColorValue;
  yAxisThickness?: number;
  yAxisColor?: ColorValue;
  xAxisType?: RuleType;
  yAxisLabelContainerStyle?: any;
  horizontalRulesStyle?: any;
  yAxisTextStyle?: any;
  yAxisTextNumberOfLines?: number;
  xAxisTextNumberOfLines?: number;
  yAxisLabelWidth?: number;
  hideYAxisText?: boolean;
  rotateYAxisTexts?: number;
  yAxisSide?: yAxisSides;
  yAxisOffset?: number;
  initialSpacing?: number;
  endSpacing?: number;
  barWidth?: number;
  sideWidth?: number;
  showLine?: boolean;
  lineData?: any;
  lineConfig?: lineConfigType;
  lineBehindBars?: boolean;

  cappedBars?: boolean;
  capThickness?: number;
  capColor?: ColorValue;
  capRadius?: number;

  hideAxesAndRules?: boolean;
  hideRules?: boolean;
  rulesLength?: number;
  rulesColor?: ColorValue;
  rulesThickness?: number;
  rulesType?: RuleType;
  dashWidth?: number;
  dashGap?: number;
  showReferenceLine1?: boolean;
  referenceLine1Config?: referenceConfigType;
  referenceLine1Position?: number;
  showReferenceLine2?: boolean;
  referenceLine2Config?: referenceConfigType;
  referenceLine2Position?: number;
  showReferenceLine3?: boolean;
  referenceLine3Config?: referenceConfigType;
  referenceLine3Position?: number;
  showVerticalLines?: boolean;
  verticalLinesThickness?: number;
  verticalLinesHeight?: number;
  verticalLinesColor?: ColorValue;
  verticalLinesType?: RuleType;
  verticalLinesShift?: number;
  verticalLinesZIndex?: number;
  noOfVerticalLines?: number;
  verticalLinesSpacing?: number;

  showYAxisIndices?: boolean;
  showXAxisIndices?: boolean;
  yAxisIndicesHeight?: number;
  xAxisIndicesHeight?: number;
  yAxisIndicesWidth?: number;
  xAxisIndicesWidth?: number;
  xAxisIndicesColor?: ColorValue;
  yAxisIndicesColor?: ColorValue;

  showFractionalValues?: boolean;
  roundToDigits?: number;
  backgroundColor?: ColorValue;

  disableScroll?: boolean;
  showScrollIndicator?: boolean;
  indicatorColor?: 'black' | 'default' | 'white';
  roundedTop?: boolean;
  roundedBottom?: boolean;
  disablePress?: boolean;

  frontColor?: ColorValue;
  color?: ColorValue;
  sideColor?: ColorValue;
  topColor?: ColorValue;
  gradientColor?: ColorValue;
  showGradient?: boolean;
  activeOpacity?: number;

  horizontal?: boolean;
  rtl?: boolean;
  shiftX?: number;
  shiftY?: number;
  yAxisAtTop?: boolean;

  intactTopLabel?: boolean;

  horizSections?: Array<sectionType>;
  barBorderRadius?: number;
  barBorderTopLeftRadius?: number;
  barBorderTopRightRadius?: number;
  barBorderBottomLeftRadius?: number;
  barBorderBottomRightRadius?: number;
  hideOrigin?: boolean;
  labelWidth?: number;
  yAxisLabelTexts?: Array<string>;
  xAxisLabelTexts?: Array<string>;
  xAxisLabelTextStyle?: any;
  yAxisLabelPrefix?: String;
  yAxisLabelSuffix?: String;
  autoShiftLabels?: boolean;
  scrollRef?: any;
  scrollToEnd?: boolean;
  scrollToIndex?: number;
  scrollAnimation?: boolean;
  labelsExtraHeight?: number;
  barBackgroundPattern?: Function;
  patternId?: String;
  barMarginBottom?: number;
  onPress?: Function;
  renderTooltip?: Function;
  leftShiftForTooltip?: number;
  leftShiftForLastIndexTooltip?: number;
  barStyle?: object;

  secondaryData?: Array<itemType>;
  secondaryYAxis?: secondaryYAxisType | boolean;
};
type lineConfigType = {
  initialSpacing?: number;
  curved?: boolean;
  curvature?: number;
  curveType?: CurveType;
  isAnimated?: boolean;
  animationDuration?: number;
  delay?: number;
  thickness?: number;
  color?: ColorValue | String | any;
  hideDataPoints?: boolean;
  dataPointsShape?: String;
  dataPointsWidth?: number;
  dataPointsHeight?: number;
  dataPointsColor?: ColorValue | String | any;
  dataPointsRadius?: number;
  textColor?: ColorValue | String | any;
  textFontSize?: number;
  textShiftX?: number;
  textShiftY?: number;
  shiftX?: number;
  shiftY?: number;
  startIndex?: number;
  endIndex?: number;
  showArrow?: boolean;
  arrowConfig?: arrowType;
  customDataPoint?: Function;
};
export type defaultLineConfigType = {
  initialSpacing: number;
  curved: boolean;
  curvature: number;
  curveType: CurveType;
  isAnimated: boolean;
  animationDuration: number;
  delay: number;
  thickness: number;
  color: ColorValue | String | any;
  hideDataPoints: boolean;
  dataPointsShape: String;
  dataPointsWidth: number;
  dataPointsHeight: number;
  dataPointsColor: ColorValue | String | any;
  dataPointsRadius: number;
  textColor: ColorValue | String | any;
  textFontSize: number;
  textShiftX: number;
  textShiftY: number;
  shiftX: number;
  shiftY: number;
  startIndex: number;
  endIndex: number;
  showArrow: boolean;
  arrowConfig: arrowType;
  customDataPoint?: Function;
};
type arrowType = {
  length?: number;
  width?: number;
  strokeWidth?: number;
  strokeColor?: string;
  fillColor?: string;
  showArrowBase?: boolean;
};
type referenceConfigType = {
  thickness: number;
  width: number;
  color: ColorValue | String | any;
  type: String;
  dashWidth: number;
  dashGap: number;
  labelText: String;
  labelTextStyle: any;
};
type sectionType = {
  value: string;
};
export type itemType = {
  value: number;
  onPress?: any;
  frontColor?: ColorValue;
  sideColor?: ColorValue;
  topColor?: ColorValue;
  showGradient?: boolean;
  gradientColor?: any;
  label?: String;
  barWidth?: number;
  sideWidth?: number;
  labelTextStyle?: any;
  topLabelComponent?: Function;
  topLabelContainerStyle?: any;
  disablePress?: any;
  capThickness?: number;
  capColor?: ColorValue;
  capRadius?: number;
  labelComponent?: Function;
  barBorderRadius?: number;
  barBorderTopLeftRadius?: number;
  barBorderTopRightRadius?: number;
  barBorderBottomLeftRadius?: number;
  barBorderBottomRightRadius?: number;
  topLabelComponentHeight?: number;
  spacing?: number;
  labelWidth?: number;
  barBackgroundPattern?: Function;
  patternId?: String;
  barMarginBottom?: number;
  leftShiftForTooltip?: number;
  barStyle?: object;
  showXAxisIndex?: boolean;
};
