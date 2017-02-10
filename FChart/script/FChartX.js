/// <reference path="..\typings\jquery.d.ts"/>
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
define(["require", "exports"], function (require, exports) {
    "use strict";
    //export module FChartX {
    (function (LineCapStyle) {
        LineCapStyle[LineCapStyle["Butt"] = 0] = "Butt";
        LineCapStyle[LineCapStyle["Round"] = 1] = "Round";
        LineCapStyle[LineCapStyle["Square"] = 2] = "Square";
    })(exports.LineCapStyle || (exports.LineCapStyle = {}));
    var LineCapStyle = exports.LineCapStyle;
    (function (LineJoinStyle) {
        LineJoinStyle[LineJoinStyle["Mitre"] = 0] = "Mitre";
        LineJoinStyle[LineJoinStyle["Round"] = 1] = "Round";
        LineJoinStyle[LineJoinStyle["Bevel"] = 2] = "Bevel";
    })(exports.LineJoinStyle || (exports.LineJoinStyle = {}));
    var LineJoinStyle = exports.LineJoinStyle;
    (function (FChartType) {
        FChartType[FChartType["Line"] = 0] = "Line";
    })(exports.FChartType || (exports.FChartType = {}));
    var FChartType = exports.FChartType;
    (function (FDataSerieDrawType) {
        FDataSerieDrawType[FDataSerieDrawType["StraightLine"] = 0] = "StraightLine";
        FDataSerieDrawType[FDataSerieDrawType["CurvedLine"] = 1] = "CurvedLine";
        FDataSerieDrawType[FDataSerieDrawType["Point"] = 2] = "Point";
        FDataSerieDrawType[FDataSerieDrawType["Bar"] = 3] = "Bar";
    })(exports.FDataSerieDrawType || (exports.FDataSerieDrawType = {}));
    var FDataSerieDrawType = exports.FDataSerieDrawType;
    (function (XAxisTitleLayout) {
        XAxisTitleLayout[XAxisTitleLayout["TopLeft"] = 0] = "TopLeft";
        XAxisTitleLayout[XAxisTitleLayout["TopMiddle"] = 1] = "TopMiddle";
        XAxisTitleLayout[XAxisTitleLayout["TopRight"] = 2] = "TopRight";
        XAxisTitleLayout[XAxisTitleLayout["BottomLeft"] = 3] = "BottomLeft";
        XAxisTitleLayout[XAxisTitleLayout["BottomMiddle"] = 4] = "BottomMiddle";
        XAxisTitleLayout[XAxisTitleLayout["BottomRight"] = 5] = "BottomRight";
    })(exports.XAxisTitleLayout || (exports.XAxisTitleLayout = {}));
    var XAxisTitleLayout = exports.XAxisTitleLayout;
    (function (YAxisTitleLayout) {
        YAxisTitleLayout[YAxisTitleLayout["Top"] = 0] = "Top";
        YAxisTitleLayout[YAxisTitleLayout["Center"] = 1] = "Center";
        YAxisTitleLayout[YAxisTitleLayout["Bottom"] = 2] = "Bottom";
    })(exports.YAxisTitleLayout || (exports.YAxisTitleLayout = {}));
    var YAxisTitleLayout = exports.YAxisTitleLayout;
    (function (TickLabelLayout) {
        TickLabelLayout[TickLabelLayout["CenterOfTick"] = 0] = "CenterOfTick";
        TickLabelLayout[TickLabelLayout["CenterOfTickSpan"] = 1] = "CenterOfTickSpan";
    })(exports.TickLabelLayout || (exports.TickLabelLayout = {}));
    var TickLabelLayout = exports.TickLabelLayout;
    (function (LegendLayout) {
        LegendLayout[LegendLayout["Left"] = 0] = "Left";
        LegendLayout[LegendLayout["Right"] = 1] = "Right";
        LegendLayout[LegendLayout["Top"] = 2] = "Top";
        LegendLayout[LegendLayout["Bottom"] = 3] = "Bottom";
        LegendLayout[LegendLayout["InnerLeft"] = 4] = "InnerLeft";
        LegendLayout[LegendLayout["InnerRight"] = 5] = "InnerRight";
        LegendLayout[LegendLayout["InnerTop"] = 6] = "InnerTop";
        LegendLayout[LegendLayout["InnerBottom"] = 7] = "InnerBottom";
    })(exports.LegendLayout || (exports.LegendLayout = {}));
    var LegendLayout = exports.LegendLayout;
    (function (LegendContentLayout) {
        LegendContentLayout[LegendContentLayout["Horizontal"] = 0] = "Horizontal";
        LegendContentLayout[LegendContentLayout["Vertical"] = 1] = "Vertical";
    })(exports.LegendContentLayout || (exports.LegendContentLayout = {}));
    var LegendContentLayout = exports.LegendContentLayout;
    (function (ChartZoomMode) {
        ChartZoomMode[ChartZoomMode["MousePosition"] = 0] = "MousePosition";
        ChartZoomMode[ChartZoomMode["Center"] = 1] = "Center";
    })(exports.ChartZoomMode || (exports.ChartZoomMode = {}));
    var ChartZoomMode = exports.ChartZoomMode;
    var ChartGraphObject = (function () {
        function ChartGraphObject() {
            this.Key = "";
            this.LineWidth = 1;
            this.LineColor = "black";
            this.LineCap = LineCapStyle.Round;
            this.LineDashArray = new Array();
            this.LineDashOffset = 0;
            this.LineJoin = LineJoinStyle.Mitre;
            this.Fill = false;
            this.BackgroundColor = "transparent";
            this.HoverBackgroundColor = "transparent";
            this.HoverLineColor = "black";
            this.HoverLineWidth = 1;
            this.Label = "";
            this.FontSize = 11;
            this.FontColor = "blue";
            this.FontFamily = "Arimo";
            this.FontStyle = "Normal";
            this.FontWeight = "Normal";
            this.Rotation = 0;
            this.Opacity = 1.0;
            this.Show = true;
            this.X = 0;
            this.Y = 0;
        }
        ChartGraphObject.prototype.Draw = function (chart) {
        };
        return ChartGraphObject;
    }());
    var FChartAxis = (function (_super) {
        __extends(FChartAxis, _super);
        function FChartAxis() {
            _super.apply(this, arguments);
            this.ID = "";
            this.Order = 0;
            this.DataKey = "";
            this.Tick = new FChartTick();
            this.Value2Wc = new Array();
            this.PixelsPerValue = 0;
            this.StartValue = 0;
            this.Scale = 0;
        }
        FChartAxis.prototype.GetValueByKey = function (key) {
            var value = NaN;
            for (var i = 0; i < this.Value2Wc.length; i++) {
                var kvp = this.Value2Wc[i];
                if (kvp.Key == key) {
                    value = kvp.Value;
                    break;
                }
            }
            return value;
        };
        FChartAxis.prototype.GetCoordByValue = function (value) {
            var coord = NaN;
            coord = (value - this.StartValue) * this.PixelsPerValue;
            return coord;
        };
        FChartAxis.prototype.Draw = function (chart) {
        };
        return FChartAxis;
    }(ChartGraphObject));
    var MarkAttachTo;
    (function (MarkAttachTo) {
        MarkAttachTo[MarkAttachTo["Plot"] = 0] = "Plot";
        MarkAttachTo[MarkAttachTo["Legend"] = 1] = "Legend";
    })(MarkAttachTo || (MarkAttachTo = {}));
    var ChartMark = (function (_super) {
        __extends(ChartMark, _super);
        function ChartMark() {
            _super.apply(this, arguments);
            this.Width = 6;
            this.Height = 6;
            this.AttatchTo = MarkAttachTo.Plot;
        }
        ChartMark.prototype.Draw = function (chart) {
        };
        return ChartMark;
    }(ChartGraphObject));
    var FChartTooltipFormat = (function () {
        function FChartTooltipFormat() {
            this.Title = function (d) { };
            this.Value = function (d) { };
        }
        return FChartTooltipFormat;
    }());
    var FChartTooltip = (function () {
        function FChartTooltip() {
        }
        return FChartTooltip;
    }());
    (function (GridLineTextPosition) {
        GridLineTextPosition[GridLineTextPosition["Start"] = 0] = "Start";
        GridLineTextPosition[GridLineTextPosition["Middle"] = 1] = "Middle";
        GridLineTextPosition[GridLineTextPosition["End"] = 2] = "End";
    })(exports.GridLineTextPosition || (exports.GridLineTextPosition = {}));
    var GridLineTextPosition = exports.GridLineTextPosition;
    (function (EnvelopeLineGradient) {
        EnvelopeLineGradient[EnvelopeLineGradient["One"] = 0] = "One";
        EnvelopeLineGradient[EnvelopeLineGradient["OneHalf"] = 1] = "OneHalf";
        EnvelopeLineGradient[EnvelopeLineGradient["OneFourth"] = 2] = "OneFourth";
    })(exports.EnvelopeLineGradient || (exports.EnvelopeLineGradient = {}));
    var EnvelopeLineGradient = exports.EnvelopeLineGradient;
    (function (YAxisLayout) {
        YAxisLayout[YAxisLayout["Left"] = 0] = "Left";
        YAxisLayout[YAxisLayout["Right"] = 1] = "Right";
    })(exports.YAxisLayout || (exports.YAxisLayout = {}));
    var YAxisLayout = exports.YAxisLayout;
    (function (LengthType) {
        LengthType[LengthType["Percentage"] = 0] = "Percentage";
        LengthType[LengthType["Value"] = 1] = "Value";
    })(exports.LengthType || (exports.LengthType = {}));
    var LengthType = exports.LengthType;
    (function (XAxisType) {
        XAxisType[XAxisType["Date"] = 0] = "Date";
        XAxisType[XAxisType["Number"] = 1] = "Number";
        XAxisType[XAxisType["Category"] = 2] = "Category";
    })(exports.XAxisType || (exports.XAxisType = {}));
    var XAxisType = exports.XAxisType;
    (function (XAxisDateTickSelection) {
        //    Year,
        //    Month,
        XAxisDateTickSelection[XAxisDateTickSelection["Day"] = 0] = "Day";
        XAxisDateTickSelection[XAxisDateTickSelection["Hour"] = 1] = "Hour";
        XAxisDateTickSelection[XAxisDateTickSelection["Miniute"] = 2] = "Miniute";
        XAxisDateTickSelection[XAxisDateTickSelection["Second"] = 3] = "Second";
        XAxisDateTickSelection[XAxisDateTickSelection["Millisecond"] = 4] = "Millisecond";
        XAxisDateTickSelection[XAxisDateTickSelection["DateAsNumber"] = 5] = "DateAsNumber";
    })(exports.XAxisDateTickSelection || (exports.XAxisDateTickSelection = {}));
    var XAxisDateTickSelection = exports.XAxisDateTickSelection;
    var FChartGridLine = (function (_super) {
        __extends(FChartGridLine, _super);
        function FChartGridLine() {
            _super.apply(this, arguments);
        }
        return FChartGridLine;
    }(ChartGraphObject));
    exports.FChartGridLine = FChartGridLine;
    var FChartEnvelopeLine = (function (_super) {
        __extends(FChartEnvelopeLine, _super);
        function FChartEnvelopeLine() {
            _super.apply(this, arguments);
            this.Gradient = EnvelopeLineGradient.OneHalf;
        }
        return FChartEnvelopeLine;
    }(ChartGraphObject));
    exports.FChartEnvelopeLine = FChartEnvelopeLine;
    var FChartGrid = (function (_super) {
        __extends(FChartGrid, _super);
        function FChartGrid() {
            _super.apply(this, arguments);
            this.Lines = new Array();
        }
        return FChartGrid;
    }(ChartGraphObject));
    exports.FChartGrid = FChartGrid;
    var FChartXAxisTitle = (function (_super) {
        __extends(FChartXAxisTitle, _super);
        function FChartXAxisTitle() {
            _super.apply(this, arguments);
            this.Layout = XAxisTitleLayout.TopMiddle;
        }
        FChartXAxisTitle.prototype.Draw = function (chart) {
        };
        return FChartXAxisTitle;
    }(ChartGraphObject));
    exports.FChartXAxisTitle = FChartXAxisTitle;
    var FChartYAxisTitle = (function (_super) {
        __extends(FChartYAxisTitle, _super);
        function FChartYAxisTitle() {
            _super.apply(this, arguments);
            this.Layout = YAxisTitleLayout.Center;
        }
        FChartYAxisTitle.prototype.Draw = function (chart) {
        };
        return FChartYAxisTitle;
    }(ChartGraphObject));
    exports.FChartYAxisTitle = FChartYAxisTitle;
    var FChartTick = (function (_super) {
        __extends(FChartTick, _super);
        function FChartTick() {
            _super.apply(this, arguments);
            this.IsXAxisTick = false;
            this.MinIntervalSpace = 10;
            this.LabelLayout = TickLabelLayout.CenterOfTick;
            this.LabelFormat = "";
            this.Rotation = 0;
            this.Width = 0;
            this.Height = 0;
        }
        FChartTick.prototype.Draw = function (chart) { };
        ;
        return FChartTick;
    }(ChartGraphObject));
    exports.FChartTick = FChartTick;
    var DateTicksInfo = (function () {
        function DateTicksInfo() {
        }
        return DateTicksInfo;
    }());
    var NumberTicksInfo = (function () {
        function NumberTicksInfo(nTicks, startValue, scale, tickIntervalSpace) {
            this.StartValue = 0;
            this.Ticks = 0;
            this.Scale = 0;
            this.TickIntervalSpace = 0;
            this.Ticks = nTicks;
            this.StartValue = startValue;
            this.Scale = scale;
            this.TickIntervalSpace = tickIntervalSpace;
        }
        return NumberTicksInfo;
    }());
    var FChartXAxis = (function (_super) {
        __extends(FChartXAxis, _super);
        function FChartXAxis() {
            _super.apply(this, arguments);
            this.Height = 0;
            this.Type = XAxisType.Date;
            this.TickSelection = XAxisDateTickSelection.Day;
            this.CullingTick = false;
            this.CullingTicksCount = 0;
            this.Title = null;
        }
        FChartXAxis.prototype.Draw = function (chart) {
            // Draw axis line and tick.
            var xAxisLine = chart.CreateSVGLineElement();
            var x = 0;
            var y = this.LineWidth / 2;
            var svg = chart.GetSVGSVGElementByID("svg-xaxis-" + this.ID);
            if (chart.GetDisplayXAxesCount() == 1) {
                svg = chart.GetSVGSVGElementByID("svg-xaxis-bottom");
            }
            FChartHelper.SetSVGLineAttributes(xAxisLine, "xaxis-line" + this.ID, x.toString(), y.toString(), svg.clientWidth.toString(), y.toString(), this.LineWidth.toString(), this.LineColor);
            svg.appendChild(xAxisLine);
            for (var i = 0; i < this.Value2Wc.length; i++) {
                var obj = this.Value2Wc[i];
                var value = obj.Key;
                var wcx = obj.Value;
                var ix = chart.PlotX + chart.m_coeff.ToDvcX(wcx);
                var tickLine = chart.CreateSVGLineElement();
                var tickLineId = "xaxis-tick-" + this.ID + "-" + ix.toString();
                var fifthOfHalfH = this.Height / 2 * 0.2;
                var tickLineH = fifthOfHalfH;
                var x1 = ix;
                var x2 = ix;
                var y1 = 0;
                var y2 = y1 + tickLineH;
                FChartHelper.SetSVGLineAttributes(tickLine, tickLineId, x1.toString(), y1.toString(), x2.toString(), y2.toString(), this.Tick.LineWidth.toString(), this.Tick.LineColor);
                svg.appendChild(tickLine);
                var tickLabel = chart.CreateSVGTextElement();
                var tickLabelId = "xaxis-tick-label-" + this.ID + "-" + value;
                var lx = 0;
                var ly = 0;
                var oneTickSpan = this.Scale * this.PixelsPerValue;
                var xTickLabelMaxWidth = oneTickSpan * 0.8;
                var xTickLabelMinWidth = oneTickSpan * 0.15;
                var xTickLabelFontSize = this.Tick.FontSize;
                FChartHelper.SetSVGTextAttributes(tickLabel, tickLabelId, lx.toString(), ly.toString(), value, "middle", this.Tick.FontFamily, this.Tick.FontStyle, this.Tick.FontSize.toString(), this.Tick.FontWeight);
                var textInfo = chart.GetAppropriateFontSizeForText(tickLabel, xTickLabelFontSize, xTickLabelMaxWidth);
                xTickLabelFontSize = textInfo.Key;
                lx = ix;
                ly = fifthOfHalfH * 2;
                if (this.Tick.LabelLayout == TickLabelLayout.CenterOfTick) {
                }
                else if (this.Tick.LabelLayout == TickLabelLayout.CenterOfTickSpan) {
                    lx = lx + oneTickSpan / 2;
                }
                ly = ly + xTickLabelFontSize / 2 - xTickLabelFontSize * 0.3 / 2;
                tickLabel.setAttribute("x", lx.toString());
                tickLabel.setAttribute("y", ly.toString());
                svg.appendChild(tickLabel);
            }
            // Draw Title
            this.DrawTitle(chart);
        };
        FChartXAxis.prototype.DrawTitle = function (chart) {
            if (FChartHelper.ObjectIsNullOrEmpty(this.Title)) {
                return;
            }
            var nXCount = chart.GetDisplayXAxesCount();
            var svg = null;
            var yStart = this.Height / 2.0;
            if (nXCount == 1) {
                svg = chart.GetSVGSVGElementByID("svg-xaxis-top");
                yStart = 0;
            }
            else {
                svg = chart.GetSVGSVGElementByID("svg-xaxis-" + this.ID);
            }
            if (FChartHelper.ObjectIsNullOrEmpty(svg)) {
                return;
            }
            var dLabelFontSize = Math.abs(this.Title.FontSize);
            var x = svg.clientWidth / 2;
            var y = yStart + this.Height / 2.0 - dLabelFontSize * 0.125 - dLabelFontSize * 0.3 / 2;
            var text = chart.CreateSVGTextElement();
            FChartHelper.SetSVGTextAttributes(text, "XAxis-" + this.ID + "-XLabel", x.toString(), y.toString(), this.Title.Label, "middle", this.Title.FontFamily, this.Title.FontStyle, this.Title.FontSize.toString(), this.Title.FontWeight);
            svg.appendChild(text);
        };
        return FChartXAxis;
    }(FChartAxis));
    exports.FChartXAxis = FChartXAxis;
    var FChartYAxis = (function (_super) {
        __extends(FChartYAxis, _super);
        function FChartYAxis() {
            _super.apply(this, arguments);
            this.Width = 0;
            this.Title = new FChartYAxisTitle();
            this.Layout = YAxisLayout.Left;
            this.TopEnvelopeLine = new FChartEnvelopeLine();
            this.BottomEnvelopeLine = new FChartEnvelopeLine();
            this.MaxTickWidth = 15;
            this.TickWidth = 0;
            this.MarginBetweenTickAndLabel = 0;
            this.MaxTickLabelWidth = 0;
            this.PlotY = 0;
        }
        FChartYAxis.prototype.Draw = function (chart) {
            // Draw axis line and tick.
            var svg = chart.GetSVGSVGElementByID("svg-yaxis-" + this.ID);
            var regionWidth = svg.clientWidth;
            var regionHeight = svg.clientHeight;
            var x = regionWidth - this.LineWidth / 2;
            var y = 0;
            var yAxisLine = chart.CreateSVGLineElement();
            FChartHelper.SetSVGLineAttributes(yAxisLine, "yaxis-line" + this.ID, x.toString(), y.toString(), x.toString(), regionHeight.toString(), this.LineWidth.toString(), this.LineColor);
            svg.appendChild(yAxisLine);
            var oneFifth = this.Width / 2 * 0.2;
            var tickLineW = oneFifth;
            if (tickLineW > this.MaxTickWidth) {
                tickLineW = this.MaxTickWidth;
            }
            this.TickWidth = tickLineW;
            this.MarginBetweenTickAndLabel = Math.min(oneFifth, this.MaxTickWidth);
            var minYTickLabelFontSize = 2000;
            var arrYTickLabels = new Array();
            for (var i = 0; i < this.Value2Wc.length; i++) {
                var obj = this.Value2Wc[i];
                var value = obj.Key;
                var wcy = obj.Value;
                var iy = chart.m_coeff.ToDvcY(wcy);
                var tickLine = chart.CreateSVGLineElement();
                var tickLineId = "yaxis-tick-" + this.ID + "-" + iy.toString();
                var x1 = regionWidth - tickLineW;
                var x2 = regionWidth;
                var y1 = iy;
                if (i == 0) {
                    y1 -= this.Tick.LineWidth / 2;
                }
                else if (i == this.Value2Wc.length - 1) {
                    y1 += this.Tick.LineWidth / 2;
                }
                var y2 = y1;
                FChartHelper.SetSVGLineAttributes(tickLine, tickLineId, x1.toString(), y1.toString(), x2.toString(), y2.toString(), this.Tick.LineWidth.toString(), this.Tick.LineColor);
                svg.appendChild(tickLine);
                if (value == "top" || value == "bottom") {
                    var envelopeLine = chart.CreateSVGLineElement();
                    var svgChart = chart.GetSVGSVGElementByID("svg-plot");
                    var ex1 = 0;
                    var ey1 = 0;
                    var ex2 = svgChart.clientWidth;
                    var ey2 = 0;
                    if (value == "top") {
                        ey1 += this.Tick.LineWidth / 2;
                        ey2 += this.Tick.LineWidth / 2;
                    }
                    else if (value == "bottom") {
                        ey1 = svgChart.clientHeight - this.Tick.LineWidth / 2;
                        ey2 = svgChart.clientHeight - this.Tick.LineWidth / 2;
                    }
                    if (value == "top") {
                        FChartHelper.SetSVGLineAttributes(envelopeLine, "yaxis-envelopeline-" + this.ID, ex1.toString(), ey1.toString(), ex2.toString(), ey2.toString(), this.LineWidth.toString(), this.LineColor);
                        svgChart.appendChild(envelopeLine);
                    }
                }
                var tickLabel = chart.CreateSVGTextElement();
                var tickLabelId = "yaxis-tick-label-" + this.ID + "-" + value;
                var lx = 0;
                var ly = 0;
                var oneTickSpan = this.Scale * this.PixelsPerValue;
                var yTickLabelMaxWidth = regionWidth * 0.5;
                var yTickLabelMinWidth = regionWidth * 0.15;
                var yTickLabelFontSize = this.Tick.FontSize;
                FChartHelper.SetSVGTextAttributes(tickLabel, tickLabelId, lx.toString(), ly.toString(), value, "middle", this.Tick.FontFamily, this.Tick.FontStyle, this.Tick.FontSize.toString(), this.Tick.FontWeight);
                var textInfo = chart.GetAppropriateFontSizeForText(tickLabel, yTickLabelFontSize, yTickLabelMaxWidth);
                yTickLabelFontSize = textInfo.Key;
                if (textInfo.Value > this.MaxTickLabelWidth) {
                    this.MaxTickLabelWidth = textInfo.Value;
                }
                if (minYTickLabelFontSize > textInfo.Key) {
                    minYTickLabelFontSize = textInfo.Key;
                }
                lx = regionWidth - this.TickWidth - this.MarginBetweenTickAndLabel;
                ly = iy;
                ly = ly + yTickLabelFontSize / 2 - yTickLabelFontSize * 0.3 / 2;
                tickLabel.innerHTML = value;
                tickLabel.setAttribute("x", lx.toString());
                tickLabel.setAttribute("y", ly.toString());
                FChartHelper.SetSVGTextAttributes(tickLabel, "yaxis-ticklabel-" + value, lx.toString(), ly.toString(), (value == "top" || value == "bottom") ? "" : value, "end", this.FontFamily, this.FontStyle, yTickLabelFontSize.toString(), this.FontWeight);
                svg.appendChild(tickLabel);
                arrYTickLabels.push(tickLabel);
            }
            for (var i = 0; i < arrYTickLabels.length; i++) {
                arrYTickLabels[i].setAttribute("font-size", minYTickLabelFontSize.toString());
            }
            // Draw Title
            this.DrawTitle(chart);
        };
        FChartYAxis.prototype.DrawTitle = function (chart) {
            if (FChartHelper.ObjectIsNullOrEmpty(this.Title)) {
                return;
            }
            var svg = chart.GetSVGSVGElementByID("svg-yaxis-" + this.ID);
            if (FChartHelper.ObjectIsNullOrEmpty(svg)) {
                return;
            }
            var regionWidth = svg.clientWidth;
            var regionHeight = svg.clientHeight;
            var dLabelFontSize = Math.abs(this.Title.FontSize);
            var x = regionWidth - this.TickWidth - this.MaxTickLabelWidth - this.MarginBetweenTickAndLabel * 2;
            var y = regionHeight / 2.0 + dLabelFontSize / 2 - dLabelFontSize * 0.3 / 2;
            var text = chart.CreateSVGTextElement();
            var transform = "rotate(270," + x.toString() + "," + y.toString() + ")";
            FChartHelper.SetSVGTextAttributes(text, "yaxis-title-" + this.ID, x.toString(), y.toString(), this.Title.Label, "middle", this.Title.FontFamily, this.Title.FontStyle, this.Title.FontSize.toString(), this.Title.FontWeight, this.FontColor, transform);
            svg.appendChild(text);
        };
        return FChartYAxis;
    }(FChartAxis));
    exports.FChartYAxis = FChartYAxis;
    var DataPoint = (function () {
        function DataPoint() {
            this.X = null;
            this.Show = true;
        }
        return DataPoint;
    }());
    exports.DataPoint = DataPoint;
    var KeyValuePair = (function () {
        function KeyValuePair(key, value) {
            this.Key = key;
            this.Value = value;
        }
        return KeyValuePair;
    }());
    var Size = (function () {
        function Size(w, h) {
            this.Width = 0;
            this.Height = 0;
            this.Width = w;
            this.Height = h;
        }
        return Size;
    }());
    var FChartDataSerie = (function (_super) {
        __extends(FChartDataSerie, _super);
        function FChartDataSerie() {
            _super.apply(this, arguments);
            this.Data = new Array();
            this.Mark = new ChartMark();
            this.Label = "";
            this.XAxisID = "";
            this.YAxisID = "";
            this.ZOrder = 0;
            this.DrawType = FDataSerieDrawType.StraightLine;
        }
        FChartDataSerie.prototype.Draw = function (chart) {
            if (!this.Show) {
                return;
            }
            var svgChart = chart.GetSVGSVGElementByID("svg-plot");
            if (FChartHelper.ObjectIsNullOrEmpty(svgChart)) {
                return;
            }
            var serieLine = chart.CreateSVGPolylineElement();
            var id = "serie-polyline-" + this.XAxisID + "-" + this.YAxisID + "-" + this.ZOrder.toString();
            serieLine.setAttribute("id", id);
            if (this.Fill) {
            }
            else {
                serieLine.setAttribute("fill", "none");
            }
            var yaxis = chart.SearchYAxisByID(this.YAxisID);
            for (var i = 0; i < this.Data.length; i++) {
                var data = this.Data[i];
                var x = data.fx;
                var y = data.fy;
                var ix = chart.PlotX + chart.m_coeff.ToDvcX(x);
                var iy = chart.m_coeff.ToDvcY(y);
                var pt = svgChart.createSVGPoint();
                pt.x = ix;
                pt.y = iy - yaxis.PlotY;
                serieLine.points.appendItem(pt);
            }
            serieLine.setAttribute("stroke-width", this.LineWidth.toString());
            serieLine.setAttribute("stroke", this.LineColor.toString());
            svgChart.appendChild(serieLine);
            if (FChartHelper.ObjectIsNullOrEmpty(this.Mark)) {
                return;
            }
            for (var i = 0; i < this.Data.length; i++) {
                var data = this.Data[i];
                var ix = chart.PlotX + chart.m_coeff.ToDvcX(data.fx);
                var iy = chart.m_coeff.ToDvcY(data.fy);
                if (data.Show) {
                    // Draw mark.
                    this.Mark.Key = this.XAxisID + "-" + this.YAxisID + "-" + this.ZOrder.toString() + "-Mark-" + i.toString();
                    this.Mark.X = ix;
                    this.Mark.Y = iy - yaxis.PlotY;
                    this.Mark.Draw(chart);
                }
            }
        };
        return FChartDataSerie;
    }(ChartGraphObject));
    exports.FChartDataSerie = FChartDataSerie;
    var CircleMark = (function (_super) {
        __extends(CircleMark, _super);
        function CircleMark(r) {
            _super.call(this);
            this.Radius = 3;
            this.HoverRadius = 5;
            this.Radius = r;
        }
        CircleMark.prototype.Draw = function (chart) {
            if (!this.Show) {
                return;
            }
            var circle = chart.CreateSVGCircleElement();
            FChartHelper.SetCircleAttributes(circle, this.Key, this.X.toString(), this.Y.toString(), this.Radius.toString(), this.BackgroundColor, this.LineWidth.toString(), this.LineColor);
            if (this.AttatchTo == MarkAttachTo.Plot) {
                var svgPlot = chart.GetPlotSVG();
                if (FChartHelper.ObjectIsNullOrEmpty(svgPlot)) {
                    return;
                }
                svgPlot.appendChild(circle);
            }
            else {
                var svgLegend = chart.GetLegendSVG();
                if (FChartHelper.ObjectIsNullOrEmpty(svgLegend)) {
                    return;
                }
                svgLegend.appendChild(circle);
            }
        };
        return CircleMark;
    }(ChartMark));
    exports.CircleMark = CircleMark;
    var TriangleMark = (function (_super) {
        __extends(TriangleMark, _super);
        function TriangleMark() {
            _super.apply(this, arguments);
        }
        TriangleMark.prototype.Draw = function (chart) {
            if (!this.Show) {
                return;
            }
            var triangle = chart.CreateSVGPathElement();
            var ox1 = 0;
            var oy1 = this.Height / 2;
            var ox2 = this.Width / 2;
            var oy2 = -this.Height / 2;
            var ox3 = -this.Width / 2;
            var oy3 = -this.Height / 2;
            var r = FChartHelper.DegToRad(this.Rotation);
            var points = new Array();
            points.push(new FloatPoint(ox1, oy1));
            points.push(new FloatPoint(ox2, oy2));
            points.push(new FloatPoint(ox3, oy3));
            FChartHelper.RotatePositionPoints(points, r, this.X, this.Y);
            var d = "M" + points[0].X.toString() + " " + points[0].Y.toString() + " " +
                "L" + points[1].X.toString() + " " + points[1].Y.toString() + " " +
                "L" + points[2].X.toString() + " " + points[2].Y.toString() + " Z";
            triangle.setAttribute("d", d);
            triangle.setAttribute("stroke-width", this.LineWidth.toString());
            triangle.setAttribute("stroke", this.LineColor);
            this.Fill ? triangle.setAttribute("fill", this.BackgroundColor) : triangle.setAttribute("fill", "none");
            if (this.AttatchTo == MarkAttachTo.Plot) {
                var svgPlot = chart.GetPlotSVG();
                svgPlot.appendChild(triangle);
            }
            else {
                var svgLegend = chart.GetLegendSVG();
                if (FChartHelper.ObjectIsNullOrEmpty(svgLegend)) {
                    return;
                }
                svgLegend.appendChild(triangle);
            }
        };
        return TriangleMark;
    }(ChartMark));
    exports.TriangleMark = TriangleMark;
    var SquareMark = (function (_super) {
        __extends(SquareMark, _super);
        function SquareMark() {
            _super.apply(this, arguments);
        }
        SquareMark.prototype.Draw = function (chart) {
            if (!this.Show) {
                return;
            }
            var rect = chart.CreateSVGPathElement();
            var ox1 = -this.Width / 2;
            var oy1 = this.Height / 2;
            var ox2 = this.Width / 2;
            var oy2 = this.Height / 2;
            var ox3 = this.Width / 2;
            var oy3 = -this.Height / 2;
            var ox4 = -this.Width / 2;
            var oy4 = -this.Height / 2;
            var r = FChartHelper.DegToRad(this.Rotation);
            var points = new Array();
            points.push(new FloatPoint(ox1, oy1));
            points.push(new FloatPoint(ox2, oy2));
            points.push(new FloatPoint(ox3, oy3));
            points.push(new FloatPoint(ox4, oy4));
            FChartHelper.RotatePositionPoints(points, r, this.X, this.Y);
            var d = "M" + points[0].X.toString() + " " + points[0].Y.toString() + " " +
                "L" + points[1].X.toString() + " " + points[1].Y.toString() + " " +
                "L" + points[2].X.toString() + " " + points[2].Y.toString() + " " +
                "L" + points[3].X.toString() + " " + points[3].Y.toString() + " " + "Z";
            rect.setAttribute("d", d);
            rect.setAttribute("stroke-width", this.LineWidth.toString());
            rect.setAttribute("stroke", this.LineColor);
            this.Fill ? rect.setAttribute("fill", this.BackgroundColor) : rect.setAttribute("fill", "none");
            if (this.AttatchTo == MarkAttachTo.Plot) {
                var svgPlot = chart.GetPlotSVG();
                svgPlot.appendChild(rect);
            }
            else {
                var svgLegend = chart.GetLegendSVG();
                if (FChartHelper.ObjectIsNullOrEmpty(svgLegend)) {
                    return;
                }
                svgLegend.appendChild(rect);
            }
        };
        return SquareMark;
    }(ChartMark));
    exports.SquareMark = SquareMark;
    var DiamondMark = (function (_super) {
        __extends(DiamondMark, _super);
        function DiamondMark() {
            _super.apply(this, arguments);
        }
        DiamondMark.prototype.Draw = function (chart) {
            if (!this.Show) {
                return;
            }
            var diamond = chart.CreateSVGPathElement();
            var ox1 = -this.Width / 2;
            var oy1 = 0;
            var ox2 = 0;
            var oy2 = this.Height / 2;
            var ox3 = this.Width / 2;
            var oy3 = 0;
            var ox4 = 0;
            var oy4 = -this.Height / 2;
            var r = FChartHelper.DegToRad(this.Rotation);
            var points = new Array();
            points.push(new FloatPoint(ox1, oy1));
            points.push(new FloatPoint(ox2, oy2));
            points.push(new FloatPoint(ox3, oy3));
            points.push(new FloatPoint(ox4, oy4));
            FChartHelper.RotatePositionPoints(points, r, this.X, this.Y);
            var d = "M" + points[0].X.toString() + " " + points[0].Y.toString() + " " +
                "L" + points[1].X.toString() + " " + points[1].Y.toString() + " " +
                "L" + points[2].X.toString() + " " + points[2].Y.toString() + " " +
                "L" + points[3].X.toString() + " " + points[3].Y.toString() + " " + "Z";
            diamond.setAttribute("d", d);
            diamond.setAttribute("stroke-width", this.LineWidth.toString());
            diamond.setAttribute("stroke", this.LineColor);
            this.Fill ? diamond.setAttribute("fill", this.BackgroundColor) : diamond.setAttribute("fill", "none");
            if (this.AttatchTo == MarkAttachTo.Plot) {
                var svgPlot = chart.GetPlotSVG();
                svgPlot.appendChild(diamond);
            }
            else {
                var svgLegend = chart.GetLegendSVG();
                if (FChartHelper.ObjectIsNullOrEmpty(svgLegend)) {
                    return;
                }
                svgLegend.appendChild(diamond);
            }
        };
        return DiamondMark;
    }(ChartMark));
    exports.DiamondMark = DiamondMark;
    var CrossLineMark = (function (_super) {
        __extends(CrossLineMark, _super);
        function CrossLineMark() {
            _super.apply(this, arguments);
        }
        CrossLineMark.prototype.Draw = function (chart) {
            if (!this.Show) {
                return;
            }
            var ox1 = -this.Width / 2;
            var oy1 = this.Height / 2;
            var ox2 = this.Width / 2;
            var oy2 = this.Height / 2;
            var ox3 = this.Width / 2;
            var oy3 = -this.Height / 2;
            var ox4 = -this.Width / 2;
            var oy4 = -this.Height / 2;
            var r = FChartHelper.DegToRad(this.Rotation);
            var points = new Array();
            points.push(new FloatPoint(ox1, oy1));
            points.push(new FloatPoint(ox2, oy2));
            points.push(new FloatPoint(ox3, oy3));
            points.push(new FloatPoint(ox4, oy4));
            FChartHelper.RotatePositionPoints(points, r, this.X, this.Y);
            var line1 = chart.CreateSVGLineElement();
            var id1 = this.Key + "-line-" + "1";
            FChartHelper.SetSVGLineAttributes(line1, id1, points[0].X.toString(), points[0].Y.toString(), points[2].X.toString(), points[2].Y.toString(), this.LineWidth.toString(), this.LineColor);
            var line2 = chart.CreateSVGLineElement();
            var id2 = this.Key + "-line-" + "2";
            FChartHelper.SetSVGLineAttributes(line2, id2, points[1].X.toString(), points[1].Y.toString(), points[3].X.toString(), points[3].Y.toString(), this.LineWidth.toString(), this.LineColor);
            if (this.AttatchTo == MarkAttachTo.Plot) {
                var svgPlot = chart.GetPlotSVG();
                svgPlot.appendChild(line1);
                svgPlot.appendChild(line2);
            }
            else {
                var svgLegend = chart.GetLegendSVG();
                if (FChartHelper.ObjectIsNullOrEmpty(svgLegend)) {
                    return;
                }
                svgLegend.appendChild(line1);
                svgLegend.appendChild(line2);
            }
        };
        return CrossLineMark;
    }(ChartMark));
    exports.CrossLineMark = CrossLineMark;
    var FChartLegend = (function (_super) {
        __extends(FChartLegend, _super);
        function FChartLegend() {
            _super.apply(this, arguments);
            this.Layout = LegendLayout.Right;
            this.ContentLayout = LegendContentLayout.Vertical;
            this.Width = 0;
            this.Height = 0;
            this.MinWidth = 20;
            this.MinHeight = 10;
            this.ShapeWidth = 0;
            this.LabelWidth = 0;
            this.LabelHeight = 0;
            this.FontSizeW = 0;
            this.FontSizeH = 0;
            this.LargeTextW = "";
            this.LargeTextH = "";
            this.LEGEND_ITEM_MAX_WIDTH = 200;
            this.LEGEND_ITEM_MAX_HEIGHT = 50;
            this.MAX_SHAPE_WIDTH = 20;
            this.HorizontalMeasured = false;
            this.VerticalMeasured = false;
        }
        FChartLegend.prototype.PredictWidth = function (chart, w) {
            var dLegendItemWidth = Math.min(w, this.LEGEND_ITEM_MAX_WIDTH);
            if (this.ContentLayout == LegendContentLayout.Horizontal) {
                for (var i = 0; i < chart.DataSeries.length; i++) {
                    if (chart.DataSeries[i].Show) {
                        this.Width += dLegendItemWidth;
                    }
                }
            }
            else if (this.ContentLayout == LegendContentLayout.Vertical) {
                this.Width = dLegendItemWidth;
            }
            // Measure.
            this.ShapeWidth = Math.min(this.Width * 0.3, this.MAX_SHAPE_WIDTH);
            var maxTextWidth = this.Width - this.MAX_SHAPE_WIDTH;
            var biggestTextWidth = 0;
            this.FontSizeW = this.FontSize;
            for (var i = 0; i < chart.DataSeries.length; i++) {
                var serie = chart.DataSeries[i];
                if (!serie.Show) {
                    continue;
                }
                var lbl = serie.Label;
                var text = chart.CreateSVGTextElement();
                var lx = 0;
                var ly = 0;
                var textID = "Legend-item-" + i.toString() + "-" + lbl;
                FChartHelper.SetSVGTextAttributes(text, textID, lx.toString(), ly.toString(), lbl, "start", this.FontFamily, this.FontStyle, this.FontSizeW.toString(), this.FontWeight);
                var textInfo = chart.GetAppropriateFontSizeForText(text, this.FontSizeW, maxTextWidth);
                if (textInfo.Value > biggestTextWidth) {
                    biggestTextWidth = textInfo.Value;
                    this.LargeTextW = lbl;
                }
                this.FontSizeW = this.FontSizeW > textInfo.Key ? textInfo.Key : this.FontSizeW;
            }
            this.LabelWidth = biggestTextWidth;
            this.Width = this.ShapeWidth + this.LabelWidth;
            this.HorizontalMeasured = true;
        };
        FChartLegend.prototype.PredictHeight = function (chart, h) {
            var dLegendItemHeight = Math.min(h, this.LEGEND_ITEM_MAX_HEIGHT);
            if (this.ContentLayout == LegendContentLayout.Horizontal) {
                this.Height = dLegendItemHeight;
            }
            else if (this.ContentLayout == LegendContentLayout.Vertical) {
                for (var i = 0; i < chart.DataSeries.length; i++) {
                    if (chart.DataSeries[i].Show) {
                        this.Height += dLegendItemHeight;
                    }
                }
            }
            // Measure.
            var maxTextHeight = dLegendItemHeight;
            var biggestTextHeight = 0;
            this.FontSizeH = this.FontSize;
            for (var i = 0; i < chart.DataSeries.length; i++) {
                var serie = chart.DataSeries[i];
                if (!serie.Show) {
                    continue;
                }
                var lbl = serie.Label;
                var text = chart.CreateSVGTextElement();
                var lx = 0;
                var ly = 0;
                var textID = "Legend-item-" + i.toString() + "-" + lbl;
                FChartHelper.SetSVGTextAttributes(text, textID, lx.toString(), ly.toString(), lbl, "start", this.FontFamily, this.FontStyle, this.FontSizeH.toString(), this.FontWeight);
                var textInfo = chart.GetAppropriateFontSizeForText(text, this.FontSizeW, maxTextHeight, false);
                if (textInfo.Value > biggestTextHeight) {
                    biggestTextHeight = textInfo.Value;
                    this.LargeTextH = lbl;
                }
                this.FontSizeH = this.FontSizeH > textInfo.Key ? textInfo.Key : this.FontSizeH;
            }
            this.LabelHeight = biggestTextHeight;
            this.Height = this.LabelHeight;
            this.VerticalMeasured = true;
        };
        FChartLegend.prototype.CalculateSize = function (chart) {
            var sz = new Size(0, 0);
            if (!this.HorizontalMeasured || !this.VerticalMeasured) {
                return;
            }
            this.FontSize = this.FontSizeW > this.FontSizeH ? this.FontSizeH : this.FontSizeW;
            var textSize1 = chart.GetTextSize(this.LargeTextW, this.FontSize.toString(), this.FontFamily, this.FontStyle, this.FontWeight);
            var textSize2 = chart.GetTextSize(this.LargeTextH, this.FontSize.toString(), this.FontFamily, this.FontStyle, this.FontWeight);
            this.LabelWidth = textSize1.Width;
            this.LabelHeight = textSize2.Height;
            this.Width = 0;
            var dLegendItemWidth = this.ShapeWidth + this.LabelWidth;
            if (this.ContentLayout == LegendContentLayout.Horizontal) {
                for (var i = 0; i < chart.DataSeries.length; i++) {
                    if (chart.DataSeries[i].Show) {
                        this.Width += dLegendItemWidth;
                    }
                }
            }
            else if (this.ContentLayout == LegendContentLayout.Vertical) {
                this.Width = dLegendItemWidth;
            }
            this.Height = 0;
            var dLegendItemHeight = this.LabelHeight;
            if (this.ContentLayout == LegendContentLayout.Horizontal) {
                this.Height = dLegendItemHeight;
            }
            else if (this.ContentLayout == LegendContentLayout.Vertical) {
                for (var i = 0; i < chart.DataSeries.length; i++) {
                    if (chart.DataSeries[i].Show) {
                        this.Height += dLegendItemHeight;
                    }
                }
            }
            this.FontSize /= 1.5; // Leave some margin for box.
        };
        FChartLegend.prototype.Draw = function (chart) {
            if (!this.Show) {
                return;
            }
            if (isNaN(this.Width) || isNaN(this.Height)) {
                return;
            }
            if (this.Width < this.MinWidth || this.Height < this.MinHeight) {
                return;
            }
            if (FChartHelper.ObjectIsNullOrEmpty(chart) || FChartHelper.ObjectIsNullOrEmpty(chart.DataSeries)) {
                return;
            }
            var svgLegend = chart.GetSVGSVGElementByID("svg-legend");
            if (FChartHelper.ObjectIsNullOrEmpty(svgLegend)) {
                return;
            }
            var svgPlot = chart.GetPlotSVG();
            var plotWidth = svgPlot.clientWidth;
            var plotHeight = svgPlot.clientHeight;
            // Draw.
            var rectOutline = chart.CreateSVGRectElement();
            FChartHelper.SetSVGRectAttributes(rectOutline, "legend-outline", "0", "0", this.Width.toString(), this.Height.toString(), "1", "blue");
            svgLegend.appendChild(rectOutline);
            var sixthOfH = this.LabelHeight / 6;
            var fifthOfW = this.ShapeWidth / 5;
            var yStart = 0;
            for (var i = 0; i < chart.DataSeries.length; i++) {
                var serie = chart.DataSeries[i];
                if (!serie.Show) {
                    continue;
                }
                var line = chart.CreateSVGLineElement();
                var x1 = fifthOfW;
                var y1 = yStart + sixthOfH * 3;
                var x2 = fifthOfW * 4;
                var y2 = yStart + sixthOfH * 3;
                var lineID = "legend-item-line-" + serie.XAxisID + "-" + serie.YAxisID;
                var lineThick = sixthOfH * 2;
                FChartHelper.SetSVGLineAttributes(line, lineID, x1.toString(), y1.toString(), x2.toString(), y2.toString(), lineThick.toString(), serie.LineColor);
                svgLegend.appendChild(line);
                if (!FChartHelper.ObjectIsNullOrEmpty(serie.Mark)) {
                    var mark = $.extend(true, {}, serie.Mark);
                    var mx = this.ShapeWidth / 2;
                    var my = yStart + this.LabelHeight / 2;
                    mark.AttatchTo = MarkAttachTo.Legend;
                    mark.Rotation = 0;
                    mark.X = mx;
                    mark.Y = my;
                    mark.Width = fifthOfW * 3;
                    mark.Height = sixthOfH * 4;
                    if (typeof (mark) == "CircleMark") {
                        mark.Radius = sixthOfH * 2;
                    }
                    mark.Draw(chart);
                }
                var lbl = serie.Label;
                var text = chart.CreateSVGTextElement();
                var lx = this.ShapeWidth;
                var ly = yStart + this.LabelHeight / 2 + this.FontSize / 2 - this.FontSize * 0.3 / 2;
                var textID = "legend-item-" + i.toString() + "-" + lbl;
                FChartHelper.SetSVGTextAttributes(text, textID, lx.toString(), ly.toString(), lbl, "start", this.FontFamily, this.FontStyle, this.FontSize.toString(), this.FontWeight);
                svgLegend.appendChild(text);
                yStart += this.LabelHeight;
            }
        };
        ;
        return FChartLegend;
    }(ChartGraphObject));
    exports.FChartLegend = FChartLegend;
    var FloatPoint = (function () {
        function FloatPoint(fx, fy) {
            this.X = 0.0;
            this.Y = 0.0;
            this.X = fx;
            this.Y = fy;
        }
        return FloatPoint;
    }());
    var FChartHelper = (function () {
        function FChartHelper() {
        }
        FChartHelper.ObjectIsNullOrEmpty = function (obj) {
            var bRet = false;
            if (obj == null || obj == undefined || obj == "") {
                bRet = true;
            }
            return bRet;
        };
        FChartHelper.NumberCompare = function (value1, value2) {
            var rlt = 0;
            if (value1 > value2) {
                rlt = 1;
            }
            else if (value1 < value2) {
                rlt = -1;
            }
            else {
                rlt = 0;
            }
            return rlt;
        };
        FChartHelper.DegToRad = function (x) {
            return x * (Math.PI / 180);
        };
        FChartHelper.RotatePoint = function (point, r) {
            var x = point.X;
            var y = point.Y;
            point.X = x * Math.cos(r) - y * Math.sin(r);
            point.Y = x * Math.sin(r) + y * Math.cos(r);
        };
        FChartHelper.RotatePoints = function (dataPoints, r) {
            for (var i = 0; i < dataPoints.length; i++) {
                this.RotatePoint(dataPoints[i], r);
            }
        };
        FChartHelper.RotatePositionPoints = function (dataPoints, r, x, y) {
            this.RotatePoints(dataPoints, r);
            for (var i = 0; i < dataPoints.length; i++) {
                dataPoints[i].X += x;
                dataPoints[i].Y = y - dataPoints[i].Y;
            }
        };
        FChartHelper.GetMonthAbbreviation = function (month) {
            var nMonth = parseInt(month, 10);
            if (isNaN(nMonth)) {
                return "";
            }
            var strMonth = "";
            switch (nMonth) {
                case 1:
                    strMonth = "Jan";
                    break;
                case 2:
                    strMonth = "Feb";
                    break;
                case 3:
                    strMonth = "Mar";
                    break;
                case 4:
                    strMonth = "Apr";
                    break;
                case 5:
                    strMonth = "May";
                    break;
                case 6:
                    strMonth = "Jun";
                    break;
                case 7:
                    strMonth = "Jul";
                    break;
                case 8:
                    strMonth = "Aug";
                    break;
                case 9:
                    strMonth = "Sep";
                    break;
                case 10:
                    strMonth = "Oct";
                    break;
                case 11:
                    strMonth = "Nov";
                    break;
                case 12:
                    strMonth = "Dec";
                    break;
                default:
                    break;
            }
            return strMonth;
        };
        FChartHelper.GetDateTickLabel = function (time, tickSelection) {
            var strLabel = "";
            var datex = new Date(time);
            switch (tickSelection) {
                case XAxisDateTickSelection.Day:
                    {
                        var iDay = datex.getDate();
                        var strDay = iDay.toString();
                        if (iDay < 10) {
                            strDay = "0" + strDay;
                        }
                        strLabel = strDay;
                    }
                    break;
                case XAxisDateTickSelection.Hour:
                    {
                        strLabel = datex.getHours().toString();
                    }
                    break;
                case XAxisDateTickSelection.Miniute:
                    {
                        strLabel = datex.getMinutes().toString();
                    }
                    break;
                case XAxisDateTickSelection.Second:
                    {
                        strLabel = datex.getSeconds().toString();
                    }
                    break;
                case XAxisDateTickSelection.Millisecond:
                    {
                        strLabel = datex.getMilliseconds().toString();
                    }
                    break;
                default:
                    break;
            }
            return strLabel;
        };
        FChartHelper.StringIsNaN = function (x) {
            if (x == "NaN") {
                return true;
            }
            return false;
        };
        FChartHelper.SetSVGLineAttributes = function (line, id, x1, y1, x2, y2, strokeWidth, stroke) {
            if (this.StringIsNaN(x1) || this.StringIsNaN(y1) || this.StringIsNaN(x2) || this.StringIsNaN(y2)) {
                return;
            }
            line.setAttribute("id", id);
            line.setAttribute("x1", x1);
            line.setAttribute("y1", y1);
            line.setAttribute("x2", x2);
            line.setAttribute("y2", y2);
            line.setAttribute("stroke-width", strokeWidth);
            line.setAttribute("stroke", stroke);
        };
        FChartHelper.SetCircleAttributes = function (circle, id, cx, cy, r, fill, strokeWidth, stroke) {
            if (this.StringIsNaN(cx) || this.StringIsNaN(cy) || this.StringIsNaN(r)) {
                return;
            }
            circle.setAttribute("id", id);
            circle.setAttribute("cx", cx);
            circle.setAttribute("cy", cy);
            circle.setAttribute("r", r);
            circle.setAttribute("fill", fill);
            circle.setAttribute("stroke-width", strokeWidth);
            circle.setAttribute("stroke", stroke);
        };
        FChartHelper.SetSVGTextAttributes = function (text, id, x, y, characters, textAnchor, fontFamily, fontStyle, fontSize, fontWeight, fill, transform) {
            if (fill === void 0) { fill = null; }
            if (transform === void 0) { transform = null; }
            if (this.StringIsNaN(x) || this.StringIsNaN(y)) {
                return;
            }
            text.setAttribute("id", id);
            text.setAttribute("x", x);
            text.setAttribute("y", y);
            text.innerHTML = characters;
            text.setAttribute("class", "SVGTextDecoration");
            text.setAttribute("text-anchor", textAnchor);
            text.setAttribute("font-family", fontFamily);
            text.setAttribute("font-style", fontStyle);
            text.setAttribute("font-size", fontSize);
            text.setAttribute("font-weight", fontWeight);
            if (!FChartHelper.ObjectIsNullOrEmpty(fill)) {
                text.setAttribute("fill", fill);
            }
            if (!FChartHelper.ObjectIsNullOrEmpty(transform)) {
                text.setAttribute("transform", transform);
            }
        };
        FChartHelper.SetSVGRectAttributes = function (rect, id, x, y, width, height, strokeWidth, stroke, fill) {
            if (fill === void 0) { fill = "none"; }
            if (FChartHelper.ObjectIsNullOrEmpty(rect)) {
                return;
            }
            rect.setAttribute("id", id);
            rect.setAttribute("x", x);
            rect.setAttribute("y", y);
            rect.setAttribute("width", width);
            rect.setAttribute("height", height);
            rect.setAttribute("stroke-width", strokeWidth);
            rect.setAttribute("stroke", stroke);
            rect.setAttribute("fill", fill);
        };
        FChartHelper.FChartInstance = null;
        return FChartHelper;
    }());
    var FChartCoeff = (function () {
        function FChartCoeff() {
            this.m_dx = 0.0;
            this.m_dy = 0.0;
            this.m_scale = 1.0;
        }
        FChartCoeff.prototype.SetCoeff = function (a1, a2, a3, a4) {
            this.m_c1 = a1;
            this.m_c2 = a2;
            this.m_c3 = a3;
            this.m_c4 = a4;
        };
        FChartCoeff.prototype.ToDvcX = function (x) {
            return (this.m_c1 * (this.m_scale * x + this.m_dx) - this.m_c2);
        };
        FChartCoeff.prototype.ToDvcY = function (y) {
            return (this.m_c3 * (this.m_scale * y + this.m_dy) - this.m_c4);
        };
        FChartCoeff.prototype.ToWcX = function (x) {
            return ((((x + this.m_c2) / this.m_c1) - this.m_dx) * this.m_scale);
        };
        FChartCoeff.prototype.ToWcY = function (y) {
            return ((((y + this.m_c4) / this.m_c3) - this.m_dy) * this.m_scale);
        };
        FChartCoeff.prototype.GetWcX = function (x) {
            return (this.m_scale * x + this.m_dx);
        };
        FChartCoeff.prototype.GetWcY = function (y) {
            return (this.m_scale * y + this.m_dy);
        };
        FChartCoeff.prototype.GetDcWidth = function (w) {
            return this.m_c1 * w;
        };
        FChartCoeff.prototype.GetDcHeight = function (h) {
            return this.m_c3 * h;
        };
        FChartCoeff.prototype.Scale = function (scale) {
            this.m_scale = scale;
        };
        FChartCoeff.prototype.Translate = function (dx, dy) {
            this.m_dx = dx;
            this.m_dy = dy;
        };
        FChartCoeff.prototype.SaveCoeff = function () {
            var coeff = new FChartCoeff();
            coeff.m_c1 = this.m_c1;
            coeff.m_c2 = this.m_c2;
            coeff.m_c3 = this.m_c3;
            coeff.m_c4 = this.m_c4;
            coeff.m_dx = this.m_dx;
            coeff.m_dy = this.m_dy;
            coeff.m_scale = this.m_scale;
            return coeff;
        };
        FChartCoeff.prototype.RestoreCeoff = function (coeff) {
            this.m_c1 = coeff.m_c1;
            this.m_c2 = coeff.m_c2;
            this.m_c3 = coeff.m_c3;
            this.m_c4 = coeff.m_c4;
            this.m_dx = coeff.m_dx;
            this.m_dy = coeff.m_dy;
            this.m_scale = coeff.m_scale;
        };
        return FChartCoeff;
    }());
    var FChart = (function () {
        function FChart() {
            this.DataSeries = new Array();
            this.Legend = new FChartLegend();
            this.Zoom = 1.0;
            this.ZoomMode = ChartZoomMode.Center;
            this.XAxisLeftMargin = 10;
            this.XAxisRightMargin = 50;
            this.XAxes = new Array();
            this.YAxes = new Array();
            this.AspectRatio = 1.0;
            this.KeepAspectRatio = false; // If false, ignore AspectRatio, If true, consider AspectRatio.
            this.Zoomable = true;
            this.SVGMeasure = null;
            this.m_arrSVG = new Array();
            this.UseFixedYAxesWidth = false;
            this.FixedYAxesWidth = 0;
            this.FixedYAxesLengthType = LengthType.Value;
            this.UseFixedXAxesHeight = false;
            this.FixedXAxesHeight = 0;
            this.FixedXAxesLengthType = LengthType.Percentage;
            this.ONE_DAY = 86400000;
            this.ONE_HOUR = 3600000;
            this.ONE_MINUTE = 60000;
            this.ONE_SECOND = 1000;
            this.ONE_MILLISECOND = 1;
            this.MIN_CHART_WIDTH = 50;
            this.MIN_CHART_HEIGHT = 50;
            this.ChartWidth = 0;
            this.ChartHeight = 0;
            this.PlotWidth = 0;
            this.PlotHeight = 0;
            this.MaxYAxisWidth = 100;
            this.MaxXAxisHeight = 100;
            this.YAxisDefaultWidth = 80;
            this.XAxisDefaultHeight = 80;
            this.SortedDataSeries = false;
            this.ShowScrollBar = false;
            this.GridX = new FChartGrid();
            this.GridY = new FChartGrid();
            this.Tooltip = new FChartTooltip();
            this.DrawDataPoint = function (data) { };
            this.PlotPartX = 0;
            this.PlotPartY = 0;
            this.ZoomFactor = 1.2;
            this.SCALE_ULIMIT = 0.002;
            this.SCALE_LLIMIT = 1000;
            this.m_coeff = new FChartCoeff();
            this.m_scale = 0.0;
            this.ContainerWidth = 0;
            this.ContainerHeight = 0;
            this.IsWindowZooming = false;
            this.WindowDevicePixelRatio = 0;
        }
        Object.defineProperty(FChart.prototype, "MarginLeft", {
            get: function () {
                return this.m_leftMargin;
            },
            set: function (value) {
                this.m_leftMargin = value;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(FChart.prototype, "MarginRight", {
            get: function () {
                return this.m_rightMargin;
            },
            set: function (value) {
                this.m_rightMargin = value;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(FChart.prototype, "MarginTop", {
            get: function () {
                return this.m_topMargin;
            },
            set: function (value) {
                this.m_topMargin = value;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(FChart.prototype, "MarginBottom", {
            get: function () {
                return this.m_bottomMargin;
            },
            set: function (value) {
                this.m_bottomMargin = value;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(FChart.prototype, "XAxisMargin", {
            get: function () {
                var dMargin = 0;
                if (this.XAxisLeftMargin > 0) {
                    dMargin += this.XAxisLeftMargin;
                }
                if (this.XAxisRightMargin > 0) {
                    dMargin += this.XAxisRightMargin;
                }
                return dMargin;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(FChart.prototype, "PlotX", {
            get: function () {
                return this.XAxisLeftMargin > 0 ? this.XAxisLeftMargin : 0;
            },
            enumerable: true,
            configurable: true
        });
        FChart.prototype.GetOffsetX = function () {
            var offsetX = 0;
            var xc1 = this.m_xl + (this.m_xr - this.m_xl) / 2.0;
            var xc2 = this.m_minx + (this.m_maxx - this.m_minx) / 2.0;
            var diff = xc1 - xc2;
            if (diff > 0) {
                offsetX = -this.m_coeff.GetDcWidth(diff);
            }
            else {
                offsetX = this.m_coeff.GetDcWidth(diff);
            }
            return offsetX;
        };
        FChart.prototype.GetOffsetY = function () {
            var offsetY = 0;
            var yc1 = this.m_yb + (this.m_yt - this.m_yb) / 2.0;
            var yc2 = this.m_miny + (this.m_maxy - this.m_miny) / 2.0;
            var diff = yc1 - yc2;
            if (diff > 0) {
                offsetY = -this.m_coeff.GetDcHeight(diff);
            }
            else {
                offsetY = this.m_coeff.GetDcHeight(diff);
            }
            return offsetY;
        };
        Object.defineProperty(FChart.prototype, "Offset", {
            get: function () {
                return (new FloatPoint(this.GetOffsetX(), this.GetOffsetY()));
            },
            enumerable: true,
            configurable: true
        });
        // Implementation.
        FChart.prototype.ZoomIn = function () {
            this.m_scale /= this.ZoomFactor;
            var scale = 0.5 - 0.5 / this.ZoomFactor;
            this.m_xl += (this.m_xr - this.m_xl) * scale;
            this.m_yt -= (this.m_yt - this.m_yb) * scale;
            this.SetWindow();
            this.Draw();
        };
        FChart.prototype.ZoomOut = function () {
            this.m_scale *= this.ZoomFactor;
            var scale = 0.5 * (this.ZoomFactor - 1);
            this.m_xl -= (this.m_xr - this.m_xl) * scale;
            this.m_yt += (this.m_xr - this.m_xl) * scale;
            this.SetWindow();
            this.Draw();
        };
        FChart.prototype.ZoomToScale = function (dNewScale) {
            if (dNewScale < this.SCALE_ULIMIT) {
                dNewScale = this.SCALE_ULIMIT;
            }
            if (dNewScale > this.SCALE_LLIMIT) {
                dNewScale = this.SCALE_LLIMIT;
            }
            var oldScale = this.m_scale;
            this.m_scale = dNewScale;
            if (dNewScale > oldScale) {
                var zoomFactor = dNewScale / oldScale;
                var scale = 0.5 * (this.ZoomFactor - 1);
                this.m_xl -= (this.m_xr - this.m_xl) * scale;
                this.m_yt += (this.m_xr - this.m_xl) * scale;
            }
            else {
                var ZoomFactor = dNewScale / oldScale;
                var scale = 0.5 - 0.5 / this.ZoomFactor;
                this.m_xl += (this.m_xr - this.m_xl) * scale;
                this.m_yt -= (this.m_yt - this.m_yb) * scale;
            }
            this.SetWindow();
            this.Draw();
        };
        FChart.prototype.ZoomToFull = function () {
            var minx = this.m_minx;
            var maxx = this.m_maxx;
            var miny = this.m_miny;
            var maxy = this.m_maxy;
            this.ZoomToRegion(minx, maxy, maxx, miny);
        };
        FChart.prototype.ZoomToRegion = function (xl, yt, xr, yb) {
            if (xr - xl < 1.0e-30) {
                return;
            }
            var xc = (xl + xr) * 0.5;
            var yc = (yt + yb) * 0.5;
            var ratio = (this.m_yt - this.m_yb) / (this.m_xr - this.m_xl);
            var regionRatio = (yt - yb) / (xr - xl);
            var newScale = 0;
            if (regionRatio > ratio) {
                newScale = this.m_scale * (yt - yb) / (this.m_yt - this.m_yb);
            }
            else {
                newScale = this.m_scale * (xr - xl) / (this.m_xr - this.m_xl);
            }
            var dx = (this.m_xr - this.m_xl) * newScale / this.m_scale;
            var dy = (this.m_yt - this.m_yb) * newScale / this.m_scale;
            this.m_xl = (xc - dx * 0.5);
            this.m_xr = (xc + dx * 0.5);
            this.m_yb = (yc - dy * 0.5);
            this.m_yt = (yc + dy * 0.5);
            this.m_scale = newScale;
            this.SetWindow();
            this.Draw();
        };
        FChart.prototype.ValidateContainerSize = function () {
            var bValid = true;
            var divBindTo = document.getElementById(this.BindTo);
            if (FChartHelper.ObjectIsNullOrEmpty(divBindTo)) {
                return false;
            }
            var w = divBindTo.clientWidth;
            var h = divBindTo.clientHeight;
            if (isNaN(w) || isNaN(h)) {
                return false;
            }
            if (w < this.MIN_CHART_WIDTH || h < this.MIN_CHART_HEIGHT) {
                bValid = false;
            }
            return bValid;
        };
        FChart.prototype.GetContainerSize = function () {
            var divBindTo = document.getElementById(this.BindTo);
            if (FChartHelper.ObjectIsNullOrEmpty(divBindTo)) {
                return null;
            }
            var w = divBindTo.clientWidth;
            var h = divBindTo.clientHeight;
            return (new Size(w, h));
        };
        FChart.prototype.Render = function () {
            var _this = this;
            var bValidSize = false;
            bValidSize = this.ValidateContainerSize();
            if (!bValidSize) {
                return;
            }
            var divContainer = document.getElementById(this.BindTo);
            if (FChartHelper.ObjectIsNullOrEmpty(divContainer)) {
                return;
            }
            this.PrepareContainer();
            this.SetCoordinate();
            this.Draw();
            this.WindowDevicePixelRatio = this.GetWindowDevicePixelRatio();
            window.onresize = function (e) {
                if (_this.DetectZoom()) {
                    _this.IsWindowZooming = true;
                }
            };
        };
        FChart.prototype.GetWindowDevicePixelRatio = function () {
            var ratio = 0, screen = window.screen, ua = navigator.userAgent.toLowerCase();
            if (window.devicePixelRatio !== undefined) {
                ratio = window.devicePixelRatio;
            }
            else if (~ua.indexOf('msie')) {
                if (screen.deviceXDPI && screen.logicalXDPI) {
                    ratio = screen.deviceXDPI / screen.logicalXDPI;
                }
            }
            else if (window.outerWidth !== undefined && window.innerWidth !== undefined) {
                ratio = window.outerWidth / window.innerWidth;
            }
            return ratio;
        };
        FChart.prototype.DetectZoom = function () {
            var ratio = this.GetWindowDevicePixelRatio();
            if (ratio != this.WindowDevicePixelRatio) {
                return true;
            }
            return false;
        };
        ;
        FChart.prototype.Draw = function () {
            this.DrawXAxes();
            this.DrawYAxes();
            this.DrawGridLine();
            this.DrawDataSeries();
            this.DrawLegend();
        };
        FChart.prototype.DrawXAxes = function () {
            for (var i = 0; i < this.XAxes.length; i++) {
                if (this.XAxes[i].Show) {
                    this.XAxes[i].Draw(this);
                }
            }
        };
        FChart.prototype.DrawYAxes = function () {
            for (var i = 0; i < this.YAxes.length; i++) {
                if (this.YAxes[i].Show) {
                    this.YAxes[i].Draw(this);
                }
            }
        };
        FChart.prototype.DrawGridLine = function () {
            var nXAxesCount = this.GetDisplayXAxesCount();
            var nYAxesCount = this.GetDisplayYAxesCount();
            var svgPlot = this.GetPlotSVG();
            if (FChartHelper.ObjectIsNullOrEmpty(svgPlot)) {
                return;
            }
            var plotWidth = svgPlot.clientWidth;
            var plotHeight = svgPlot.clientHeight;
            if (this.GridX.Show && nXAxesCount <= 1) {
                var xaxis = this.GetXAxis();
                if (FChartHelper.ObjectIsNullOrEmpty(xaxis)) {
                    ;
                }
                for (var i = 0; i < xaxis.Value2Wc.length; i++) {
                    var obj = xaxis.Value2Wc[i];
                    var key = obj.Key;
                    var value = obj.Value;
                    var ix = this.PlotX + this.m_coeff.ToDvcX(value);
                    var y1 = 0;
                    var y2 = plotHeight;
                    var id = xaxis.ID + "-x-gridline-" + i.toString();
                    var line = this.CreateSVGLineElement();
                    FChartHelper.SetSVGLineAttributes(line, id, ix.toString(), y1.toString(), ix.toString(), y2.toString(), this.GridX.LineWidth.toString(), this.GridX.LineColor);
                    svgPlot.appendChild(line);
                }
            }
            for (var i = 0; i < this.GridX.Lines.length; i++) {
                var gridline = this.GridX.Lines[i];
                var xaxis = this.SearchXAxisByID(gridline.AxisID);
                if (FChartHelper.ObjectIsNullOrEmpty(xaxis)) {
                    continue;
                }
                var ix = this.PlotX + xaxis.GetCoordByValue(gridline.Value);
                var y1 = 0;
                var y2 = plotHeight;
                var line = this.CreateSVGLineElement();
                var id = xaxis.ID + "-x-extra-gridline-" + i.toString();
                FChartHelper.SetSVGLineAttributes(line, id, ix.toString(), y1.toString(), ix.toString(), y2.toString(), gridline.LineWidth.toString(), gridline.LineColor);
                svgPlot.appendChild(line);
                if (FChartHelper.ObjectIsNullOrEmpty(gridline.Text)) {
                    continue;
                }
                var lx = ix + gridline.LineWidth * 5;
                var ly = 0;
                var textAnchor = "start";
                if (gridline.TextPosition == GridLineTextPosition.Start) {
                    ly = 0;
                }
                else if (gridline.TextPosition == GridLineTextPosition.Middle) {
                    ly = plotHeight / 2.0 + gridline.FontSize / 2 - gridline.FontSize * 0.3 / 2;
                }
                else if (gridline.TextPosition == GridLineTextPosition.End) {
                    ly = plotHeight;
                }
                var text = this.CreateSVGTextElement();
                var textID = xaxis.ID + "-x-extra-gridline-text-" + i.toString();
                FChartHelper.SetSVGTextAttributes(text, textID, lx.toString(), ly.toString(), gridline.Text, textAnchor, gridline.FontFamily, gridline.FontStyle, gridline.FontSize.toString(), gridline.FontWeight);
                svgPlot.appendChild(text);
            }
            if (this.GridY.Show && nYAxesCount <= 1) {
                var yaxis = this.GetYAxis();
                if (FChartHelper.ObjectIsNullOrEmpty(yaxis)) {
                    ;
                }
                for (var i = 0; i < yaxis.Value2Wc.length; i++) {
                    var obj = yaxis.Value2Wc[i];
                    var key = obj.Key;
                    var value = obj.Value;
                    var iy = this.m_coeff.ToDvcY(value);
                    var x1 = this.PlotX;
                    var x2 = this.PlotX + plotWidth;
                    if (key == "top" || key == "bottom") {
                        continue;
                    }
                    var id = yaxis.ID + "-y-gridline-" + i.toString();
                    var line = this.CreateSVGLineElement();
                    FChartHelper.SetSVGLineAttributes(line, id, x1.toString(), iy.toString(), x2.toString(), iy.toString(), this.GridY.LineWidth.toString(), this.GridY.LineColor);
                    svgPlot.appendChild(line);
                }
            }
            for (var i = 0; i < this.GridY.Lines.length; i++) {
                var gridline = this.GridY.Lines[i];
                var yaxis = this.SearchYAxisByID(gridline.AxisID);
                if (FChartHelper.ObjectIsNullOrEmpty(yaxis)) {
                    continue;
                }
                var iy = yaxis.GetCoordByValue(gridline.Value);
                var x1 = this.PlotX;
                var x2 = this.PlotX + plotWidth;
                var line = this.CreateSVGLineElement();
                var id = yaxis.ID + "-y-extra-gridline-" + i.toString();
                FChartHelper.SetSVGLineAttributes(line, id, x1.toString(), iy.toString(), x2.toString(), iy.toString(), gridline.LineWidth.toString(), gridline.LineColor);
                svgPlot.appendChild(line);
                if (FChartHelper.ObjectIsNullOrEmpty(gridline.Text)) {
                    continue;
                }
                var lx = 0;
                var ly = iy + gridline.FontSize / 2 - gridline.FontSize * 0.3 / 2;
                var textAnchor = "start";
                if (gridline.TextPosition == GridLineTextPosition.Start) {
                    lx = 0;
                    textAnchor = "start";
                }
                else if (gridline.TextPosition == GridLineTextPosition.Middle) {
                    lx = plotWidth / 2;
                    textAnchor = "middle";
                }
                else if (gridline.TextPosition == GridLineTextPosition.End) {
                    lx = plotWidth;
                    textAnchor = "end";
                }
                lx += this.PlotX;
                var text = this.CreateSVGTextElement();
                var textID = yaxis.ID + "-y-extra-gridline-text-" + i.toString();
                FChartHelper.SetSVGTextAttributes(text, textID, lx.toString(), ly.toString(), gridline.Text, textAnchor, gridline.FontFamily, gridline.FontStyle, gridline.FontSize.toString(), gridline.FontWeight);
                svgPlot.appendChild(text);
            }
        };
        FChart.prototype.DrawDataSeries = function () {
            if (!this.SortedDataSeries) {
                this.DataSeries.sort(function (a, b) {
                    return FChartHelper.NumberCompare(a.ZOrder, b.ZOrder);
                });
                this.SortedDataSeries = true;
            }
            for (var i = 0; i < this.DataSeries.length; i++) {
                var serie = this.DataSeries[i];
                if (serie.Show) {
                    serie.Draw(this);
                }
            }
        };
        FChart.prototype.DrawLegend = function () {
            if (this.Legend.Show) {
                this.Legend.Draw(this);
            }
        };
        FChart.prototype.ShowTooltip = function () {
        };
        FChart.prototype.PrintPreview = function () {
        };
        FChart.prototype.Print = function () {
        };
        FChart.prototype.ObjectIsNullOrEmpty = function (obj) {
            var bRet = false;
            if (obj == null || obj == undefined || obj == "") {
                bRet = true;
            }
            return bRet;
        };
        FChart.prototype.SearchXAxisByID = function (XAxisID) {
            var xaxis = null;
            for (var i = 0; i < this.XAxes.length; i++) {
                if (this.XAxes[i].ID == XAxisID) {
                    xaxis = this.XAxes[i];
                    break;
                }
            }
            return xaxis;
        };
        FChart.prototype.SearchYAxisByID = function (YAxisID) {
            var yaxis = null;
            for (var i = 0; i < this.YAxes.length; i++) {
                if (this.YAxes[i].ID == YAxisID) {
                    yaxis = this.YAxes[i];
                    break;
                }
            }
            return yaxis;
        };
        FChart.prototype.GetDisplayXAxesCount = function () {
            var nCount = 0;
            for (var i = 0; i < this.XAxes.length; i++) {
                var xaxis = this.XAxes[i];
                if (xaxis.Show) {
                    nCount++;
                }
            }
            return nCount;
        };
        FChart.prototype.GetXAxis = function () {
            var nXCount = this.GetDisplayXAxesCount();
            if (nXCount != 1) {
                return null;
            }
            var xaxis = null;
            for (var i = 0; i < this.XAxes.length; i++) {
                if (this.XAxes[i].Show) {
                    xaxis = this.XAxes[i];
                    break;
                }
            }
            return xaxis;
        };
        FChart.prototype.GetDisplayYAxesCount = function () {
            var nCount = 0;
            for (var i = 0; i < this.YAxes.length; i++) {
                var yaxis = this.YAxes[i];
                if (yaxis.Show) {
                    nCount++;
                }
            }
            return nCount;
        };
        FChart.prototype.GetYAxis = function () {
            var nYCount = this.GetDisplayYAxesCount();
            if (nYCount != 1) {
                return null;
            }
            var yaxis = null;
            for (var i = 0; i < this.YAxes.length; i++) {
                if (this.YAxes[i].Show) {
                    yaxis = this.YAxes[i];
                    break;
                }
            }
            return yaxis;
        };
        FChart.prototype.GetVisibleDataSeriesCount = function () {
            var nCount = 0;
            for (var i = 0; i < this.DataSeries.length; i++) {
                var serie = this.DataSeries[i];
                if (serie.Show) {
                    nCount++;
                }
            }
            return nCount;
        };
        FChart.prototype.GetSVGSVGElementByID = function (id) {
            var svg = null;
            for (var i = 0; i < this.m_arrSVG.length; i++) {
                if (this.m_arrSVG[i].id == id) {
                    svg = this.m_arrSVG[i];
                    break;
                }
            }
            return svg;
        };
        FChart.prototype.GetPlotSVG = function () {
            var plotID = "svg-plot";
            return this.GetSVGSVGElementByID(plotID);
        };
        FChart.prototype.GetLegendSVG = function () {
            var legendID = "svg-legend";
            return this.GetSVGSVGElementByID(legendID);
        };
        FChart.prototype.GetYAxisAverageDiff = function (YAxisID) {
            var arrAverageDiff = [];
            for (var i = 0; i < this.DataSeries.length; i++) {
                var serie = this.DataSeries[i];
                if (serie.YAxisID == YAxisID) {
                    var dSum = 0;
                    serie.Data.sort(function (a, b) {
                        return FChartHelper.NumberCompare(a.Y, b.Y);
                    });
                    for (var j = 0; j < serie.Data.length; j++) {
                        if (j > 0) {
                            dSum += (serie.Data[j].Y - serie.Data[j - 1].Y);
                        }
                    }
                    var dAverage = dSum / (serie.Data.length - 1);
                    arrAverageDiff.push(dAverage);
                }
            }
            var dDiff = -999999999;
            for (var i = 0; i < arrAverageDiff.length; i++) {
                if (arrAverageDiff[i] > dDiff) {
                    dDiff = arrAverageDiff[i];
                }
            }
            return dDiff;
        };
        FChart.prototype.GetTickCount = function (averageDiff, max, min) {
            averageDiff = Math.abs(averageDiff);
            var obj = null;
            var t1 = 0;
            var t2 = 0;
            var t = 0;
            var startVal = 0;
            if (max <= 0 && min <= 0) {
                t = Math.ceil(Math.abs(min) / averageDiff);
                startVal = -(t * averageDiff);
            }
            else if (max >= 0 && min >= 0) {
                t = Math.ceil(Math.abs(max) / averageDiff);
                startVal = 0;
            }
            else if (max >= 0 && min <= 0) {
                t1 = Math.ceil(Math.abs(max) / averageDiff);
                t2 = Math.ceil(Math.abs(min) / averageDiff);
                t = t1 + t2;
                startVal = -(t2 * averageDiff);
            }
            obj = new KeyValuePair(t, startVal);
            return obj;
        };
        FChart.prototype.GetYAxisTickCount = function (YAxisID, averageDiff, max, min, len) {
            var tickInfo = this.GetTickCount(averageDiff, max, min);
            var obj = new NumberTicksInfo(tickInfo.Key, tickInfo.Value, averageDiff, 0);
            var serie = null;
            var yaxis = null;
            for (var i = 0; i < this.DataSeries.length; i++) {
                if (this.DataSeries[i].YAxisID == YAxisID) {
                    serie = this.DataSeries[i];
                }
            }
            for (var i = 0; i < this.YAxes.length; i++) {
                if (this.YAxes[i].ID == YAxisID) {
                    yaxis = this.YAxes[i];
                }
            }
            if (!this.ObjectIsNullOrEmpty(serie) && !this.ObjectIsNullOrEmpty(yaxis)) {
                var tickH = len / (tickInfo.Key + 1);
                obj.TickIntervalSpace = tickH;
                while (obj.TickIntervalSpace < yaxis.Tick.MinIntervalSpace) {
                    averageDiff *= 2;
                    obj = this.GetYAxisTickCount(YAxisID, averageDiff, max, min, len);
                }
            }
            return obj;
        };
        FChart.prototype.GetXAxisAverageDiff = function (XAxisID) {
            var arrAverageDiff = [];
            var xaxis = null;
            for (var i = 0; i < this.XAxes.length; i++) {
                if (this.XAxes[i].ID == XAxisID) {
                    xaxis = this.XAxes[i];
                    break;
                }
            }
            for (var i = 0; i < this.DataSeries.length; i++) {
                var serie = this.DataSeries[i];
                if (serie.XAxisID == XAxisID) {
                    var dSum = 0;
                    for (var j = 0; j < serie.Data.length; j++) {
                        if (j > 0) {
                            var x1 = serie.Data[j].X;
                            var x0 = serie.Data[j - 1].X;
                            var value1 = void 0;
                            var value0 = void 0;
                            if (xaxis.Type == XAxisType.Date) {
                                value1 = (new Date(x1)).valueOf();
                                value0 = (new Date(x0)).valueOf();
                            }
                            else if (xaxis.Type == XAxisType.Number) {
                                value1 = parseInt(x1);
                                value0 = parseInt(x0);
                            }
                            dSum += (value1 - value0);
                        }
                    }
                    var dAverage = dSum / (serie.Data.length - 1);
                    arrAverageDiff.push(dAverage);
                }
            }
            var dDiff = -999999999;
            for (var i = 0; i < arrAverageDiff.length; i++) {
                if (arrAverageDiff[i] > dDiff) {
                    dDiff = arrAverageDiff[i];
                }
            }
            return dDiff;
        };
        FChart.prototype.GetXAxisTickCount = function (XAxisID, averageDiff, max, min, len) {
            var tickInfo = this.GetTickCount(averageDiff, max, min);
            var obj = new NumberTicksInfo(tickInfo.Key, tickInfo.Value, averageDiff, 0);
            var serie = null;
            var xaxis = null;
            for (var i = 0; i < this.DataSeries.length; i++) {
                if (this.DataSeries[i].XAxisID == XAxisID) {
                    serie = this.DataSeries[i];
                }
            }
            for (var i = 0; i < this.XAxes.length; i++) {
                if (this.XAxes[i].ID == XAxisID) {
                    xaxis = this.XAxes[i];
                }
            }
            if (!this.ObjectIsNullOrEmpty(serie) && !this.ObjectIsNullOrEmpty(xaxis)) {
                var tickW = len / (tickInfo.Key + 1);
                obj.TickIntervalSpace = tickW;
                while (obj.TickIntervalSpace < xaxis.Tick.MinIntervalSpace) {
                    averageDiff *= 2;
                    obj = this.GetXAxisTickCount(XAxisID, averageDiff, max, min, len);
                }
            }
            return obj;
        };
        FChart.prototype.GetXAxisTickCount2 = function (XAxisID, max, min, len) {
            var startVal = min;
            var obj = new DateTicksInfo();
            obj.StartValue = min;
            obj.Ticks = new Array();
            var xaxis = null;
            for (var i = 0; i < this.XAxes.length; i++) {
                if (this.XAxes[i].ID == XAxisID) {
                    xaxis = this.XAxes[i];
                }
            }
            var timeSpan = 0;
            switch (xaxis.TickSelection) {
                //case XAxisDateTickSelection.Year:
                //    break;
                //case XAxisDateTickSelection.Month:
                //    break;
                case XAxisDateTickSelection.Day:
                    timeSpan = this.ONE_DAY;
                    break;
                case XAxisDateTickSelection.Hour:
                    timeSpan = this.ONE_HOUR;
                    break;
                case XAxisDateTickSelection.Miniute:
                    timeSpan = this.ONE_MINUTE;
                    break;
                case XAxisDateTickSelection.Second:
                    timeSpan = this.ONE_SECOND;
                    break;
                case XAxisDateTickSelection.Millisecond:
                    timeSpan = this.ONE_MILLISECOND;
                    break;
                default:
                    break;
            }
            var xPixelsPerValue = len / (max - min);
            var nCount = 0;
            var arrTicks = new Array();
            for (var i = min; i <= max; i += timeSpan) {
                if (i % timeSpan == 0) {
                    var strLabel = FChartHelper.GetDateTickLabel(i, xaxis.TickSelection);
                    arrTicks.push(new KeyValuePair(i, strLabel));
                    nCount++;
                }
            }
            arrTicks.length = nCount;
            if (nCount > 1) {
                var w = timeSpan * xPixelsPerValue;
                var nMultiple = 1;
                while (w < xaxis.Tick.MinIntervalSpace) {
                    nMultiple++;
                    w = timeSpan * xPixelsPerValue * nMultiple;
                }
                var arrSelectionTicks = new Array();
                for (var i = 0; i < arrTicks.length; i++) {
                    if (i % nMultiple == 0) {
                        arrSelectionTicks.push(arrTicks[i]);
                    }
                }
                if (xaxis.CullingTick) {
                    if (xaxis.CullingTicksCount >= arrSelectionTicks.length) {
                        for (var i = 0; i < arrSelectionTicks.length; i++) {
                            obj.Ticks.push(arrSelectionTicks[i]);
                        }
                    }
                    else {
                        nMultiple = 2;
                        var n = arrSelectionTicks.length;
                        var m = Math.ceil(n / 2);
                        while (m > xaxis.CullingTicksCount) {
                            nMultiple *= 2;
                            m = Math.ceil(m / 2);
                        }
                        for (var i = 0; i < arrSelectionTicks.length; i++) {
                            if (i % nMultiple == 0) {
                                obj.Ticks.push(arrSelectionTicks[i]);
                            }
                        }
                    }
                }
            }
            else if (nCount == 1) {
                obj.Ticks.push(arrTicks[0]);
            }
            return obj;
        };
        FChart.prototype.CalculateXAxesHeight = function (h) {
            var xAxesHeight = 0;
            if (this.UseFixedXAxesHeight) {
                this.FixedXAxesHeight = Math.abs(this.FixedXAxesHeight);
                if (this.FixedXAxesLengthType == LengthType.Percentage) {
                    if (isNaN(this.FixedXAxesHeight) || this.FixedXAxesHeight <= 0 || this.FixedXAxesHeight > 1) {
                        this.FixedXAxesHeight = 0.5;
                    }
                    xAxesHeight = this.ChartWidth * this.FixedXAxesHeight;
                }
                else if (this.FixedXAxesLengthType == LengthType.Value) {
                    if (this.FixedXAxesHeight > this.ChartHeight) {
                        this.FixedXAxesHeight = this.ChartHeight;
                    }
                    xAxesHeight = this.FixedXAxesHeight;
                }
            }
            else {
                var nCount = this.GetDisplayXAxesCount();
                var predictHeight = this.XAxisDefaultHeight * nCount;
                var maxHeight = 0;
                if (this.Legend.Layout == LegendLayout.Top || this.Legend.Layout == LegendLayout.Bottom) {
                    maxHeight = h * 0.3;
                }
                else {
                    maxHeight = h * 0.5;
                }
                if (predictHeight > maxHeight) {
                    predictHeight = maxHeight;
                }
                xAxesHeight = predictHeight;
            }
            return xAxesHeight;
        };
        FChart.prototype.CalculateYAxesWidth = function (w) {
            var yAxesWidth = 0;
            if (this.UseFixedYAxesWidth) {
                var wYAxes = 0;
                this.FixedYAxesWidth = Math.abs(this.FixedYAxesWidth);
                if (this.FixedYAxesLengthType == LengthType.Percentage) {
                    if (isNaN(this.FixedYAxesWidth) || this.FixedYAxesWidth <= 0 || this.FixedYAxesWidth > 1) {
                        this.FixedYAxesWidth = 0.5;
                    }
                    yAxesWidth = this.ChartWidth * this.FixedYAxesWidth;
                }
                else if (this.FixedYAxesLengthType == LengthType.Value) {
                    if (this.FixedYAxesWidth > this.ChartWidth) {
                        this.FixedYAxesWidth = this.ChartWidth;
                    }
                    yAxesWidth = this.FixedYAxesWidth;
                }
            }
            else {
                var nCount = this.GetDisplayYAxesCount();
                var predictWidth = this.YAxisDefaultWidth * nCount;
                var maxWidth = 0;
                if (this.Legend.Layout == LegendLayout.Left || this.Legend.Layout == LegendLayout.Right) {
                    maxWidth = w * 0.3;
                }
                else {
                    maxWidth = w * 0.5;
                }
                if (predictWidth > maxWidth) {
                    predictWidth = maxWidth;
                }
                yAxesWidth = predictWidth;
            }
            return yAxesWidth;
        };
        FChart.prototype.CalculateChartSize = function () {
            var bRet = false;
            var divBind = document.getElementById(this.BindTo);
            if (this.ObjectIsNullOrEmpty(divBind)) {
                return false;
            }
            var dWidth = divBind.clientWidth;
            var dHeight = divBind.clientHeight;
            if (this.KeepAspectRatio && this.AspectRatio != 0) {
                if (this.AspectRatio >= 1.0) {
                    dWidth = dHeight / this.AspectRatio;
                }
                else {
                    dHeight = dWidth * this.AspectRatio;
                }
            }
            this.ChartWidth = dWidth;
            this.ChartHeight = dHeight;
            return bRet;
        };
        FChart.prototype.CalculatePartsSize = function () {
            var dYAxesWidth = 0;
            var dPlotWidth = 0;
            var yAxesWidth = this.CalculateYAxesWidth(this.ChartWidth);
            var nCountY = this.GetDisplayYAxesCount();
            var yw = yAxesWidth / nCountY;
            for (var i = 0; i < this.YAxes.length; i++) {
                if (this.YAxes[i].Show) {
                    this.YAxes[i].Width = yw;
                    this.YAxes[i].Tick.Width = yw * 0.2;
                }
            }
            var xAxesHeight = this.CalculateXAxesHeight(this.ChartHeight);
            var nCountX = this.GetDisplayXAxesCount();
            var xh = xAxesHeight / nCountX;
            for (var i = 0; i < this.XAxes.length; i++) {
                if (this.XAxes[i].Show) {
                    this.XAxes[i].Height = xh;
                    this.XAxes[i].Tick.Height = xh * 0.2;
                }
            }
            if (this.Legend.Layout == LegendLayout.Left || this.Legend.Layout == LegendLayout.Right) {
                var w = this.ChartWidth - yAxesWidth;
                var h = this.ChartHeight - xAxesHeight;
                this.Legend.PredictWidth(this, w * 0.3);
                this.Legend.PredictHeight(this, h);
                this.Legend.CalculateSize(this);
                this.PlotWidth = this.ChartWidth - yAxesWidth - this.Legend.Width;
                this.PlotHeight = this.ChartHeight - xAxesHeight;
            }
            else if (this.Legend.Layout == LegendLayout.InnerLeft || this.Legend.Layout == LegendLayout.InnerRight) {
                this.PlotWidth = this.ChartWidth - yAxesWidth;
                this.PlotHeight = this.ChartHeight - xAxesHeight;
                this.Legend.PredictWidth(this, this.PlotWidth * 0.3);
                this.Legend.PredictHeight(this, this.PlotHeight);
            }
            else if (this.Legend.Layout == LegendLayout.Top || this.Legend.Layout == LegendLayout.Bottom) {
                var w = this.ChartWidth - yAxesWidth;
                var h = this.ChartHeight - xAxesHeight;
                this.Legend.PredictWidth(this, w);
                this.Legend.PredictHeight(this, h * 0.3);
                this.PlotWidth = this.ChartWidth - yAxesWidth;
                this.PlotHeight = this.ChartHeight - xAxesHeight - this.Legend.Height;
            }
            else if (this.Legend.Layout == LegendLayout.InnerTop || this.Legend.Layout == LegendLayout.InnerBottom) {
                this.PlotWidth = this.ChartWidth - yAxesWidth;
                this.PlotHeight = this.ChartHeight - xAxesHeight;
                this.Legend.PredictWidth(this, this.PlotWidth);
                this.Legend.PredictHeight(this, this.PlotHeight * 0.3);
            }
            this.m_width = this.PlotWidth;
            this.m_height = this.PlotHeight;
            if (this.XAxisMargin > 0) {
                this.m_width -= this.XAxisMargin;
            }
            this.SetWindow();
        };
        FChart.prototype.CalculatePartsPosition = function () {
            var nDisplayXAxesCount = this.GetDisplayXAxesCount();
            var xaxis = this.GetXAxis();
            var lyaxes = new Array();
            var ryaxes = new Array();
            for (var i = 0; i < this.YAxes.length; i++) {
                var yaxis = this.YAxes[i];
                if (!yaxis.Show) {
                    continue;
                }
                if (yaxis.Layout == YAxisLayout.Left) {
                    lyaxes.push(yaxis);
                }
                if (yaxis.Layout == YAxisLayout.Right) {
                    ryaxes.push(yaxis);
                }
            }
            lyaxes.sort(function (a, b) {
                return FChartHelper.NumberCompare(b.Order, a.Order);
            });
            ryaxes.sort(function (a, b) {
                return FChartHelper.NumberCompare(a.Order, b.Order);
            });
            var xStart = 0;
            var yStart = 0;
            if (nDisplayXAxesCount == 1) {
                yStart += xaxis.Height / 2;
            }
            if (this.Legend.Show) {
                if (this.Legend.Layout == LegendLayout.Left) {
                    this.Legend.X = xStart;
                    this.Legend.Y = this.ChartHeight / 2 - this.Legend.Height / 2;
                    xStart += this.Legend.Width;
                }
                if (this.Legend.Layout == LegendLayout.Top) {
                    this.Legend.X = this.ChartWidth / 2 - this.Legend.Width / 2;
                    this.Legend.Y = yStart;
                    yStart += this.Legend.Height;
                }
            }
            for (var i = 0; i < lyaxes.length; i++) {
                lyaxes[i].X = xStart;
                lyaxes[i].Y = yStart;
                xStart += lyaxes[i].Width;
            }
            if (this.Legend.Show) {
                if (this.Legend.Layout == LegendLayout.InnerLeft) {
                    this.Legend.X = xStart;
                    this.Legend.Y = yStart;
                }
                if (this.Legend.Layout == LegendLayout.InnerRight) {
                    this.Legend.X = xStart + this.PlotWidth - this.Legend.Width;
                    this.Legend.Y = yStart;
                }
                if (this.Legend.Layout == LegendLayout.InnerTop) {
                    this.Legend.X = xStart + this.PlotWidth / 2 - this.Legend.Width / 2;
                    this.Legend.Y = yStart;
                }
                if (this.Legend.Layout == LegendLayout.InnerBottom) {
                    this.Legend.X = xStart + this.PlotWidth / 2 - this.Legend.Width / 2;
                    this.Legend.Y = yStart + this.PlotHeight - this.Legend.Height;
                }
            }
            var keepXStart = xStart;
            this.PlotPartX = xStart;
            xStart += this.PlotWidth;
            for (var i = 0; i < ryaxes.length; i++) {
                ryaxes[i].X = xStart;
                ryaxes[i].Y = yStart;
                xStart += ryaxes[i].Width;
            }
            if (this.Legend.Show && this.Legend.Layout == LegendLayout.Right) {
                this.Legend.X = xStart;
                this.Legend.Y = yStart + this.m_height / 2 - this.Legend.Height / 2;
            }
            this.PlotPartY = yStart;
            yStart += this.PlotHeight;
            for (var i = 0; i < this.XAxes.length; i++) {
                var xaxis_1 = this.XAxes[i];
                if (!xaxis_1.Show) {
                    continue;
                }
                xaxis_1.X = keepXStart;
                xaxis_1.Y = yStart;
                yStart += xaxis_1.Height;
            }
            if (this.Legend.Show && this.Legend.Layout == LegendLayout.Bottom) {
                this.Legend.X = keepXStart + this.PlotWidth / 2 - this.Legend.Width / 2;
                if (nDisplayXAxesCount == 1) {
                    this.Legend.Y = yStart - xaxis.Height / 2;
                }
                else {
                    this.Legend.Y = yStart;
                }
            }
        };
        FChart.prototype.CalculateYAxisTickCoordinate = function () {
            for (var i = 0; i < this.YAxes.length; i++) {
                var minY = 99999999;
                var maxY = -99999999;
                var yaxis = this.YAxes[i];
                if (!yaxis.Show) {
                    continue;
                }
                for (var j = 0; j < this.DataSeries.length; j++) {
                    var serie = this.DataSeries[j];
                    if (serie.YAxisID != yaxis.ID) {
                        continue;
                    }
                    for (var k = 0; k < serie.Data.length; k++) {
                        var value = serie.Data[k].Y;
                        if (maxY < value) {
                            maxY = value;
                        }
                        if (minY > value) {
                            minY = value;
                        }
                    }
                }
                //
                var length_1 = 0;
                var maxAverageDiff = this.GetYAxisAverageDiff(yaxis.ID);
                var obj = this.GetYAxisTickCount(yaxis.ID, maxAverageDiff, maxY, minY, this.m_height);
                var startValue = obj.StartValue;
                yaxis.StartValue = startValue;
                var iMultiple = 1;
                if (yaxis.TopEnvelopeLine.Show || yaxis.BottomEnvelopeLine.Show) {
                    if (yaxis.TopEnvelopeLine.Show) {
                        yaxis.BottomEnvelopeLine.Gradient = yaxis.TopEnvelopeLine.Gradient;
                    }
                    if (yaxis.BottomEnvelopeLine.Show) {
                        yaxis.TopEnvelopeLine.Gradient = yaxis.BottomEnvelopeLine.Gradient;
                    }
                    switch (yaxis.TopEnvelopeLine.Gradient) {
                        case EnvelopeLineGradient.One:
                            iMultiple = 1;
                            break;
                        case EnvelopeLineGradient.OneHalf:
                            iMultiple = 2;
                            break;
                        case EnvelopeLineGradient.OneFourth:
                            iMultiple = 4;
                            break;
                        default:
                            break;
                    }
                }
                var nYTicksCount = obj.Ticks * iMultiple;
                var smallScale = obj.Scale / iMultiple;
                var yPixelsPerValue = this.m_height / ((nYTicksCount + 1) * smallScale);
                var reserveSpace = yPixelsPerValue * smallScale;
                var reserveTopSpace = yaxis.TopEnvelopeLine.Show ? reserveSpace * 0.5 : 0;
                var reserveBottomSpace = yaxis.BottomEnvelopeLine.Show ? reserveSpace * 0.5 : 0;
                if (yaxis.TopEnvelopeLine.Show && !yaxis.BottomEnvelopeLine.Show) {
                    reserveTopSpace = reserveSpace;
                }
                if (!yaxis.TopEnvelopeLine.Show && yaxis.BottomEnvelopeLine.Show) {
                    reserveBottomSpace = reserveSpace;
                }
                if (!yaxis.TopEnvelopeLine.Show && !yaxis.BottomEnvelopeLine.Show) {
                    yPixelsPerValue = this.m_height / (nYTicksCount * smallScale);
                }
                yaxis.PixelsPerValue = yPixelsPerValue;
                yaxis.Scale = obj.Scale;
                if (yaxis.BottomEnvelopeLine.Show) {
                    var y = this.m_coeff.ToWcY(this.m_height);
                    yaxis.Value2Wc.push({ Key: "bottom", Value: y });
                }
                var y1 = reserveTopSpace;
                for (var p = nYTicksCount; p >= 0; p--) {
                    if (p % iMultiple != 0) {
                        continue;
                    }
                    var value = p * smallScale;
                    var yd = y1 + ((nYTicksCount - p) * smallScale) * yPixelsPerValue;
                    var y = this.m_coeff.ToWcY(yd);
                    yaxis.Value2Wc.push({ Key: value.toString(), Value: y });
                }
                if (yaxis.TopEnvelopeLine.Show) {
                    var y = this.m_coeff.ToWcY(0);
                    yaxis.Value2Wc.push({ Key: "top", Value: y });
                }
                yaxis.PlotY = reserveBottomSpace;
            }
        };
        FChart.prototype.CalculateXAxisTickCoordinate = function () {
            var _loop_1 = function(i) {
                var xaxis = this_1.XAxes[i];
                if (!xaxis.Show) {
                    return "continue";
                }
                var minX = void 0;
                var maxX = void 0;
                if (xaxis.Type == XAxisType.Date) {
                    minX = new Date("2050-01-01 00:00:00").valueOf();
                    maxX = new Date("1975-01-01 00:00:00").valueOf();
                }
                else if (xaxis.Type == XAxisType.Number) {
                    minX = 99999999;
                    maxX = -99999999;
                }
                for (var j = 0; j < this_1.DataSeries.length; j++) {
                    var serie = this_1.DataSeries[j];
                    if (serie.XAxisID != xaxis.ID) {
                        continue;
                    }
                    serie.Data.sort(function (a, b) {
                        var value1;
                        var value2;
                        if (xaxis.Type == XAxisType.Date) {
                            value1 = (new Date(a.X)).valueOf();
                            value2 = (new Date(b.X)).valueOf();
                        }
                        else if (xaxis.Type == XAxisType.Number) {
                            value1 = parseFloat(a.X);
                            value2 = parseFloat(b.X);
                        }
                        return FChartHelper.NumberCompare(value1, value2);
                    });
                    for (var k = 0; k < serie.Data.length; k++) {
                        var xValue = serie.Data[k].X;
                        var value = void 0;
                        if (xaxis.Type == XAxisType.Date) {
                            value = new Date(xValue).valueOf();
                        }
                        else if (xaxis.Type == XAxisType.Number) {
                            value = parseFloat(xValue);
                        }
                        if (value > maxX) {
                            maxX = value;
                        }
                        if (value < minX) {
                            minX = value;
                        }
                    }
                }
                //
                var length_2 = 0;
                var maxAverageDiff = 0;
                var startValue = void 0;
                var xPixelsPerValue = void 0;
                var iType = -1;
                var nTicksCount = 0;
                var obj2 = null;
                if (xaxis.Type == XAxisType.Number || (xaxis.Type == XAxisType.Date && xaxis.TickSelection == XAxisDateTickSelection.DateAsNumber)) {
                    maxAverageDiff = this_1.GetXAxisAverageDiff(xaxis.ID);
                    var obj = this_1.GetXAxisTickCount(xaxis.ID, maxAverageDiff, maxX, minX, this_1.m_width);
                    xPixelsPerValue = this_1.m_width / (obj.Ticks * obj.Scale);
                    startValue = obj.StartValue;
                    xaxis.PixelsPerValue = xPixelsPerValue;
                    xaxis.Scale = obj.Scale;
                    nTicksCount = obj.Ticks;
                    iType = 0;
                }
                else if (xaxis.Type == XAxisType.Date) {
                    var obj = this_1.GetXAxisTickCount2(xaxis.ID, maxX, minX, this_1.m_width);
                    xPixelsPerValue = this_1.m_width / (obj.Ticks.length);
                    startValue = obj.StartValue;
                    xaxis.PixelsPerValue = xPixelsPerValue;
                    nTicksCount = obj.Ticks.length;
                    obj2 = obj;
                    iType = 1;
                }
                if (iType == 0) {
                    for (var p = 0; p <= nTicksCount; p++) {
                        var dValue = p * xaxis.Scale;
                        var xd = dValue * xaxis.PixelsPerValue;
                        var x = this_1.m_coeff.ToWcX(xd);
                        xaxis.Value2Wc.push({ Key: dValue.toString(), Value: x });
                        length_2++;
                    }
                    xaxis.Value2Wc.length = length_2;
                }
                else if (iType == 1) {
                    for (var p = 0; p < obj2.Ticks.length; p++) {
                        var dValue = obj2.Ticks[p].Key - obj2.StartValue;
                        var xd = dValue * xPixelsPerValue;
                        var x = this_1.m_coeff.ToWcX(xd);
                        xaxis.Value2Wc.push({ Key: dValue.toString(), Value: x });
                        length_2++;
                    }
                    xaxis.Value2Wc.length = length_2;
                }
            };
            var this_1 = this;
            for (var i = 0; i < this.XAxes.length; i++) {
                _loop_1(i);
            }
        };
        FChart.prototype.CalculateDataPointCoordinate = function () {
            for (var i = 0; i < this.DataSeries.length; i++) {
                var serie = this.DataSeries[i];
                if (!serie.Show) {
                    continue;
                }
                var xaxis = this.SearchXAxisByID(serie.XAxisID);
                var yaxis = this.SearchYAxisByID(serie.YAxisID);
                for (var j = 0; j < this.DataSeries[i].Data.length; j++) {
                    var xValue = null;
                    var yValue = null;
                    var dp = this.DataSeries[i].Data[j];
                    if (xaxis.Type == XAxisType.Date) {
                        xValue = (new Date(dp.X)).valueOf();
                    }
                    else if (xaxis.Type == XAxisType.Number) {
                        xValue = parseInt(dp.X);
                    }
                    yValue = dp.Y;
                    var fx = (xValue - xaxis.StartValue) * xaxis.PixelsPerValue;
                    var fy = this.m_height - (yValue - yaxis.StartValue) * yaxis.PixelsPerValue;
                    dp.fx = this.m_coeff.ToWcX(fx);
                    dp.fy = this.m_coeff.ToWcY(fy);
                }
            }
        };
        FChart.prototype.CreateSVG = function (id, position, left, top, width, height) {
            var svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
            svg.setAttribute("id", id);
            svg.style.setProperty("position", position);
            svg.style.setProperty("top", top);
            svg.style.setProperty("left", left);
            svg.style.setProperty("width", width);
            svg.style.setProperty("height", height);
            return svg;
        };
        FChart.prototype.GenerateSVGParts = function () {
            var divContainer = document.getElementById(this.BindTo);
            for (var i = 0; i < this.YAxes.length; i++) {
                if (this.YAxes[i].Show) {
                    var yaxis = this.YAxes[i];
                    var svgY = this.CreateSVG("svg-yaxis-" + yaxis.ID, "absolute", yaxis.X.toString(), yaxis.Y.toString(), yaxis.Width.toString(), this.m_height.toString());
                    divContainer.appendChild(svgY);
                    this.m_arrSVG.push(svgY);
                }
            }
            var svgPlot = this.CreateSVG("svg-plot", "absolute", this.PlotPartX.toString(), this.PlotPartY.toString(), this.PlotWidth.toString(), this.PlotHeight.toString());
            divContainer.appendChild(svgPlot);
            this.m_arrSVG.push(svgPlot);
            var nXCount = this.GetDisplayXAxesCount();
            if (nXCount == 1) {
                var xaxis = this.GetXAxis();
                var svgTop = this.CreateSVG("svg-xaxis-top", "absolute", this.PlotPartX.toString(), "0", this.PlotWidth.toString(), (xaxis.Height / 2).toString());
                divContainer.appendChild(svgTop);
                this.m_arrSVG.push(svgTop);
                var svgBottom = this.CreateSVG("svg-xaxis-bottom", "absolute", this.PlotPartX.toString(), (this.PlotPartY + this.m_height).toString(), this.PlotWidth.toString(), (xaxis.Height / 2).toString());
                svgBottom.style.setProperty("background-color", "none");
                divContainer.appendChild(svgBottom);
                this.m_arrSVG.push(svgBottom);
            }
            else {
                for (var i = 0; i < this.XAxes.length; i++) {
                    var xaxis = this.XAxes[i];
                    if (!xaxis.Show) {
                        continue;
                    }
                    var svgX = this.CreateSVG("svg-xaxis" + xaxis.ID, "absolute", xaxis.X.toString(), xaxis.Y.toString(), this.PlotWidth.toString(), xaxis.Height.toString());
                    divContainer.appendChild(svgX);
                    this.m_arrSVG.push(svgX);
                }
            }
            if (this.Legend.Show) {
                var svgLegend = this.CreateSVG("svg-legend", "absolute", this.Legend.X.toString(), this.Legend.Y.toString(), this.Legend.Width.toString(), this.Legend.Height.toString());
                divContainer.appendChild(svgLegend);
                this.m_arrSVG.push(svgLegend);
            }
        };
        FChart.prototype.SetWindow = function () {
            //alert(this.m_width.toString() + "     " + this.m_height.toString());
            //debugger;
            if (this.m_width == 0 || this.m_height == 0) {
                return;
            }
            if (this.m_scale != 0.0) {
                this.m_xr = this.m_xl + this.m_scale * this.m_width;
                this.m_yb = this.m_yt - this.m_scale * this.m_height;
            }
            else {
                this.m_minx = -this.m_width / 2;
                this.m_maxx = this.m_width / 2;
                this.m_miny = -this.m_height / 2;
                this.m_maxy = this.m_height / 2;
                var xx1 = (this.m_maxy - this.m_miny) * this.m_width * 0.5 / this.m_height;
                var xx2 = (this.m_maxx - this.m_minx) * this.m_height * 0.5 / this.m_width;
                var scale1 = (this.m_maxy - this.m_miny) / this.m_height;
                var scale2 = (this.m_maxx - this.m_minx) / this.m_width;
                if (scale1 > scale2) {
                    this.m_yt = this.m_maxy;
                    this.m_yb = this.m_miny;
                    this.m_xl = this.m_minx - xx1 + (this.m_maxx - this.m_minx) * 0.5;
                    this.m_xr = this.m_xl + xx1 + xx1;
                    this.m_scale = scale1;
                }
                else {
                    this.m_xl = this.m_minx;
                    this.m_xr = this.m_maxx;
                    this.m_yb = this.m_miny - xx2 + (this.m_maxy - this.m_miny) * 0.5;
                    this.m_yt = this.m_yb + xx2 + xx2;
                    this.m_scale = scale2;
                }
            }
            this.m_coeff.SetCoeff(this.m_width / (this.m_xr - this.m_xl), this.m_width * this.m_xl / (this.m_xr - this.m_xl), this.m_height / (this.m_yb - this.m_yt), this.m_height * this.m_yt / (this.m_yb - this.m_yt));
        };
        FChart.prototype.PrepareContainer = function () {
            var _this = this;
            var divContainer = document.getElementById(this.BindTo);
            if (FChartHelper.ObjectIsNullOrEmpty(divContainer)) {
                return;
            }
            divContainer.innerHTML = "";
            var frame = document.createElement("iframe");
            var frameID = this.BindTo + "-frame";
            frame.setAttribute("id", frameID);
            frame.setAttribute("width", "100%");
            frame.setAttribute("height", "100%");
            frame.style.setProperty("position", "absoulte");
            frame.style.setProperty("left", "0px");
            frame.style.setProperty("top", "0px");
            frame.style.setProperty("border-width", "0");
            divContainer.appendChild(frame);
            frame = document.getElementById(frameID);
            frame.contentWindow.onresize = function (e) {
                if (_this.IsWindowZooming) {
                    _this.IsWindowZooming = false;
                    return;
                }
                _this.OnResize(e);
            };
            this.SVGMeasure = document.createElementNS("http://www.w3.org/2000/svg", "svg");
            this.SVGMeasure.setAttribute("width", divContainer.clientWidth.toString());
            this.SVGMeasure.setAttribute("height", divContainer.clientHeight.toString());
            this.SVGMeasure.setAttribute("opacity", "0");
            this.SVGMeasure.style.setProperty("position", "absolute");
            this.SVGMeasure.style.setProperty("left", "0px");
            this.SVGMeasure.style.setProperty("top", "0px");
            divContainer.appendChild(this.SVGMeasure);
        };
        FChart.prototype.SetCoordinate = function () {
            var divContainer = document.getElementById(this.BindTo);
            if (FChartHelper.ObjectIsNullOrEmpty(divContainer)) {
                return;
            }
            for (var i = 0; i < this.m_arrSVG.length; i++) {
                divContainer.removeChild(this.m_arrSVG[i]);
            }
            this.m_arrSVG = [];
            this.CalculateChartSize();
            this.CalculatePartsSize();
            this.CalculatePartsPosition();
            this.CalculateYAxisTickCoordinate();
            this.CalculateXAxisTickCoordinate();
            this.CalculateDataPointCoordinate();
            this.GenerateSVGParts();
            for (var i = 0; i < this.m_arrSVG.length; i++) {
                this.m_arrSVG[i].onzoom = function (e) { e.cancelBubble = true; alert("svg zoom"); };
            }
        };
        // Resize
        FChart.prototype.OnResize = function (e) {
            if (!this.ValidateContainerSize()) {
                return;
            }
            var sz = this.GetContainerSize();
            if (this.ContainerWidth == sz.Width && this.ContainerHeight == sz.Height) {
                return;
            }
            this.ContainerWidth = sz.Width;
            this.ContainerHeight = sz.Height;
            this.SetCoordinate();
            this.Draw();
        };
        // Mouse events
        FChart.prototype.OnMouseEnter = function (e) {
        };
        FChart.prototype.OnMouseOut = function (e) {
        };
        FChart.prototype.OnMouseMove = function (e) {
        };
        FChart.prototype.OnClick = function (e) {
        };
        FChart.prototype.GetAppropriateFontSizeForText = function (text, fontSize, space, bHorizontal) {
            if (bHorizontal === void 0) { bHorizontal = true; }
            var textInfo = null;
            this.SVGMeasure.appendChild(text);
            var rightfontSize = fontSize;
            var labelBox = text.getBBox();
            if (bHorizontal) {
                if (labelBox.width > space) {
                    while (labelBox.width > space && rightfontSize > 0) {
                        rightfontSize--;
                        text.setAttribute("font-size", rightfontSize.toString());
                        labelBox = text.getBBox();
                    }
                }
                textInfo = new KeyValuePair(rightfontSize, labelBox.width);
            }
            else {
                if (labelBox.height > space) {
                    while (labelBox.height > space && rightfontSize > 0) {
                        rightfontSize--;
                        text.setAttribute("font-size", rightfontSize.toString());
                        labelBox = text.getBBox();
                    }
                }
                textInfo = new KeyValuePair(rightfontSize, labelBox.height);
            }
            this.SVGMeasure.removeChild(text);
            return textInfo;
        };
        FChart.prototype.GetTextSize = function (lbl, fontSize, fontFamily, fontStyle, fontWeight) {
            var sz = new Size(0, 0);
            var text = this.CreateSVGTextElement();
            FChartHelper.SetSVGTextAttributes(text, "text-1", "0", "0", lbl, "start", fontFamily, fontStyle, fontSize, fontWeight);
            this.SVGMeasure.appendChild(text);
            var labelBox = text.getBBox();
            sz.Width = labelBox.width;
            sz.Height = labelBox.height;
            this.SVGMeasure.removeChild(text);
            return sz;
        };
        FChart.prototype.CreateSVGLineElement = function () {
            var line = document.createElementNS("http://www.w3.org/2000/svg", "line");
            return line;
        };
        FChart.prototype.CreateSVGPolylineElement = function () {
            var polyline = document.createElementNS("http://www.w3.org/2000/svg", "polyline");
            return polyline;
        };
        FChart.prototype.CreateSVGTextElement = function () {
            var text = document.createElementNS("http://www.w3.org/2000/svg", "text");
            return text;
        };
        FChart.prototype.CreateSVGPathElement = function () {
            var path = document.createElementNS("http://www.w3.org/2000/svg", "path");
            return path;
        };
        FChart.prototype.CreateSVGCircleElement = function () {
            var circle = document.createElementNS("http://www.w3.org/2000/svg", "circle");
            return circle;
        };
        FChart.prototype.CreateSVGRectElement = function () {
            var rect = document.createElementNS("http://www.w3.org/2000/svg", "rect");
            return rect;
        };
        return FChart;
    }());
    exports.FChart = FChart;
});
//} 
//# sourceMappingURL=FChartX.js.map