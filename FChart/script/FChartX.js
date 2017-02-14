var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
define(["require", "exports", "lodash"], function (require, exports, _) {
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
    (function (Orientation) {
        Orientation[Orientation["Horizontal"] = 0] = "Horizontal";
        Orientation[Orientation["Vertical"] = 1] = "Vertical";
    })(exports.Orientation || (exports.Orientation = {}));
    var Orientation = exports.Orientation;
    (function (ChartZoomMode) {
        ChartZoomMode[ChartZoomMode["MousePosition"] = 0] = "MousePosition";
        ChartZoomMode[ChartZoomMode["Center"] = 1] = "Center";
    })(exports.ChartZoomMode || (exports.ChartZoomMode = {}));
    var ChartZoomMode = exports.ChartZoomMode;
    (function (ChartZoomDirection) {
        ChartZoomDirection[ChartZoomDirection["XAxis"] = 0] = "XAxis";
        ChartZoomDirection[ChartZoomDirection["YAxis"] = 1] = "YAxis";
        ChartZoomDirection[ChartZoomDirection["Both"] = 2] = "Both";
    })(exports.ChartZoomDirection || (exports.ChartZoomDirection = {}));
    var ChartZoomDirection = exports.ChartZoomDirection;
    var ChartAxisType;
    (function (ChartAxisType) {
        ChartAxisType[ChartAxisType["XAxis"] = 0] = "XAxis";
        ChartAxisType[ChartAxisType["YAxis"] = 1] = "YAxis";
    })(ChartAxisType || (ChartAxisType = {}));
    (function (FChartEventTypes) {
        FChartEventTypes[FChartEventTypes["ZoomChanged"] = 0] = "ZoomChanged";
        FChartEventTypes[FChartEventTypes["RangeChanged"] = 1] = "RangeChanged";
    })(exports.FChartEventTypes || (exports.FChartEventTypes = {}));
    var FChartEventTypes = exports.FChartEventTypes;
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
            this.Type = ChartAxisType.XAxis;
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
    var ValueType;
    (function (ValueType) {
        ValueType[ValueType["Number"] = 0] = "Number";
        ValueType[ValueType["DateString"] = 1] = "DateString";
        ValueType[ValueType["String"] = 2] = "String";
    })(ValueType || (ValueType = {}));
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
            this.MinIntervalSpace = 20;
            this.LabelLayout = TickLabelLayout.CenterOfTick;
            this.LabelFormat = "";
            this.Rotation = 0;
            this.Width = 0;
            this.Height = 0;
            this.MaxFloatDigits = 2;
            this.Scale = 0;
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
            _super.call(this);
            this.Height = 0;
            this.ValueType = XAxisType.Date;
            this.TickSelection = XAxisDateTickSelection.Day;
            this.CullingTick = false;
            this.CullingTicksCount = 0;
            this.Title = null;
            this.Type = ChartAxisType.XAxis;
        }
        FChartXAxis.prototype.Draw = function (chart) {
            // Draw axis line and tick.
            var xAxisLine = chart.CreateSVGLineElement();
            var x = 0;
            var y = this.LineWidth / 2;
            var svg = chart.GetSVGSVGElementByID("svg-xaxis-" + this.ID, true);
            if (chart.GetVisibleXAxesCount() == 1) {
                svg = chart.GetSVGSVGElementByID("svg-xaxis-bottom", true);
            }
            FChartHelper.SetSVGLineAttributes(xAxisLine, "xaxis-line" + this.ID, x.toString(), y.toString(), svg.clientWidth.toString(), y.toString(), this.LineWidth.toString(), this.LineColor);
            svg.appendChild(xAxisLine);
            var arrXTickLabels = new Array();
            var minXTickLabelFontSize = 2000;
            for (var i = 0; i < this.Value2Wc.length; i++) {
                var obj = this.Value2Wc[i];
                var value = obj.Key;
                var wcx = obj.Value;
                var ix = chart.XAxisLeftMargin + chart.m_coeff.ToDvcX(wcx);
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
                var oneTickSpan = this.Tick.Scale * this.PixelsPerValue;
                var xTickLabelMaxWidth = oneTickSpan * 0.8;
                var xTickLabelMinWidth = oneTickSpan * 0.15;
                var xTickLabelFontSize = this.Tick.FontSize;
                FChartHelper.SetSVGTextAttributes(tickLabel, tickLabelId, lx.toString(), ly.toString(), value, "middle", this.Tick.FontFamily, this.Tick.FontStyle, this.Tick.FontSize.toString(), this.Tick.FontWeight);
                var textInfo = chart.GetAppropriateFontSizeForText(tickLabel, xTickLabelFontSize, xTickLabelMaxWidth);
                xTickLabelFontSize = textInfo.Key;
                minXTickLabelFontSize = xTickLabelFontSize < minXTickLabelFontSize ? xTickLabelFontSize : minXTickLabelFontSize;
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
                arrXTickLabels.push(tickLabel);
            }
            for (var i = 0; i < arrXTickLabels.length; i++) {
                arrXTickLabels[i].setAttribute("font-size", minXTickLabelFontSize.toString());
            }
            // Draw Title
            this.DrawTitle(chart);
        };
        FChartXAxis.prototype.DrawTitle = function (chart) {
            if (FChartHelper.ObjectIsNullOrEmpty(this.Title)) {
                return;
            }
            var nXCount = chart.GetVisibleXAxesCount();
            var svg = null;
            var yStart = 0;
            if (nXCount == 1) {
                svg = chart.GetSVGSVGElementByID("svg-xaxis-top", true);
                yStart = this.Height / 4.0;
            }
            else {
                svg = chart.GetSVGSVGElementByID("svg-xaxis-" + this.ID, true);
            }
            if (FChartHelper.ObjectIsNullOrEmpty(svg)) {
                return;
            }
            var dLabelFontSize = Math.abs(this.Title.FontSize);
            var x = svg.clientWidth / 2;
            var y = 0;
            if (nXCount == 1) {
                y = yStart + dLabelFontSize / 2 - dLabelFontSize * 0.3 / 2;
            }
            else {
                y = yStart + this.Height / 4.0 * 2 + dLabelFontSize / 2 - dLabelFontSize * 0.3 / 2;
            }
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
            _super.call(this);
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
            this.Type = ChartAxisType.YAxis;
        }
        FChartYAxis.prototype.Draw = function (chart) {
            // Draw axis line and tick.
            var svg = chart.GetSVGSVGElementByID("svg-yaxis-" + this.ID, true);
            var regionWidth = svg.clientWidth;
            var regionHeight = svg.clientHeight;
            var x = regionWidth - this.LineWidth / 2;
            var y = 0;
            var yAxisLine = chart.CreateSVGLineElement();
            if (this.Layout == YAxisLayout.Right) {
                x = this.LineWidth / 2;
            }
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
                if (this.Layout == YAxisLayout.Right) {
                    x1 = 0;
                    x2 = tickLineW;
                }
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
                    var svgPlot = chart.GetPlotSVG();
                    var ex1 = 0;
                    var ey1 = 0;
                    var ex2 = svgPlot.clientWidth;
                    var ey2 = 0;
                    if (value == "top") {
                        ey1 += this.Tick.LineWidth / 2;
                        ey2 += this.Tick.LineWidth / 2;
                    }
                    else if (value == "bottom") {
                        ey1 = svgPlot.clientHeight - this.Tick.LineWidth / 2;
                        ey2 = svgPlot.clientHeight - this.Tick.LineWidth / 2;
                    }
                    if (value == "top") {
                        FChartHelper.SetSVGLineAttributes(envelopeLine, "yaxis-envelopeline-" + this.ID, ex1.toString(), ey1.toString(), ex2.toString(), ey2.toString(), this.LineWidth.toString(), this.LineColor);
                        svgPlot.appendChild(envelopeLine);
                    }
                }
                var tickLabel = chart.CreateSVGTextElement();
                var tickLabelId = "yaxis-tick-label-" + this.ID + "-" + value;
                var lx = 0;
                var ly = 0;
                var oneTickSpan = this.Tick.Scale * this.PixelsPerValue;
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
                if (this.Layout == YAxisLayout.Right) {
                    lx = this.TickWidth + this.MarginBetweenTickAndLabel;
                }
                ly = iy;
                ly = ly + yTickLabelFontSize / 2 - yTickLabelFontSize * 0.3 / 2;
                tickLabel.innerHTML = value;
                tickLabel.setAttribute("x", lx.toString());
                tickLabel.setAttribute("y", ly.toString());
                FChartHelper.SetSVGTextAttributes(tickLabel, "yaxis-ticklabel-" + value, lx.toString(), ly.toString(), (value == "top" || value == "bottom") ? "" : value, this.Layout == YAxisLayout.Left ? "end" : "start", this.FontFamily, this.FontStyle, yTickLabelFontSize.toString(), this.FontWeight);
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
            var svg = chart.GetSVGSVGElementByID("svg-yaxis-" + this.ID, true);
            if (FChartHelper.ObjectIsNullOrEmpty(svg)) {
                return;
            }
            var regionWidth = svg.clientWidth;
            var regionHeight = svg.clientHeight;
            var dLabelFontSize = Math.abs(this.Title.FontSize);
            var x = regionWidth - this.TickWidth - this.MaxTickLabelWidth - this.MarginBetweenTickAndLabel * 2;
            if (this.Layout == YAxisLayout.Right) {
                x = this.TickWidth + this.MaxTickLabelWidth + this.MarginBetweenTickAndLabel * 2;
            }
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
            this.AttachedChart = null;
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
            var svgPlot = chart.GetPlotSVG();
            if (FChartHelper.ObjectIsNullOrEmpty(svgPlot)) {
                return;
            }
            var serieLine = chart.CreateSVGPolylineElement();
            var id = "serie-polyline-" + this.XAxisID + "-" + this.YAxisID + "-" + this.ZOrder.toString();
            id = chart.IdentifyID(id);
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
                var ix = chart.m_coeff.ToDvcX(x);
                var iy = chart.m_coeff.ToDvcY(y);
                var pt = svgPlot.createSVGPoint();
                pt.x = chart.XAxisLeftMargin + ix;
                pt.y = iy - yaxis.PlotY;
                serieLine.points.appendItem(pt);
            }
            serieLine.setAttribute("stroke-width", this.LineWidth.toString());
            serieLine.setAttribute("stroke", this.LineColor.toString());
            svgPlot.appendChild(serieLine);
            if (FChartHelper.ObjectIsNullOrEmpty(this.Mark)) {
                return;
            }
            for (var i = 0; i < this.Data.length; i++) {
                var data = this.Data[i];
                var ix = chart.XAxisLeftMargin + chart.m_coeff.ToDvcX(data.fx);
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
        FChartDataSerie.prototype.SortDataByX = function () {
            var xaxis = this.AttachedChart.SearchXAxisByID(this.XAxisID);
            this.Data.sort(function (a, b) {
                var value1;
                var value2;
                if (xaxis.ValueType == XAxisType.Date) {
                    value1 = (new Date(a.X)).valueOf();
                    value2 = (new Date(b.X)).valueOf();
                }
                else if (xaxis.ValueType == XAxisType.Number) {
                    value1 = parseFloat(a.X);
                    value2 = parseFloat(b.X);
                }
                return FChartHelper.NumberCompare(value1, value2);
            });
        };
        FChartDataSerie.prototype.SortDataByY = function () {
            this.Data.sort(function (a, b) {
                return FChartHelper.NumberCompare(a.Y, b.Y);
            });
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
            FChartHelper.SetSVGCircleAttributes(circle, this.Key, this.X.toString(), this.Y.toString(), this.Radius.toString(), this.BackgroundColor, this.LineWidth.toString(), this.LineColor);
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
            this.ContentOrientation = Orientation.Vertical;
            this.Width = 0;
            this.Height = 0;
            this.MinWidth = 20;
            this.MinHeight = 10;
            this.ShapeWidth = 0;
            this.LabelWidth = 0;
            this.LabelHeight = 0;
            this.FontSizeDraw = 0;
            this.FontSizeW = 0;
            this.FontSizeH = 0;
            this.LargeTextW = "";
            this.LargeTextH = "";
            this.LEGEND_ITEM_MAX_WIDTH = 200;
            this.LEGEND_ITEM_MAX_HEIGHT = 50;
            this.MAX_SHAPE_WIDTH = 100;
            this.HorizontalMeasured = false;
            this.VerticalMeasured = false;
        }
        FChartLegend.prototype.PredictWidth = function (chart, w) {
            var dLegendItemWidth = Math.min(w, this.LEGEND_ITEM_MAX_WIDTH);
            if (this.ContentOrientation == Orientation.Horizontal) {
                for (var i = 0; i < chart.DataSeries.length; i++) {
                    if (chart.DataSeries[i].Show) {
                        this.Width += dLegendItemWidth;
                    }
                }
            }
            else if (this.ContentOrientation == Orientation.Vertical) {
                this.Width = dLegendItemWidth;
            }
            // Measure.
            this.ShapeWidth = Math.min(this.Width * 0.3, this.MAX_SHAPE_WIDTH);
            var maxTextWidth = this.Width - this.MAX_SHAPE_WIDTH;
            var biggestTextWidth = 0;
            this.FontSizeW = this.FontSize * 1.5;
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
            if (this.ContentOrientation == Orientation.Horizontal) {
                this.Height = dLegendItemHeight;
            }
            else if (this.ContentOrientation == Orientation.Vertical) {
                for (var i = 0; i < chart.DataSeries.length; i++) {
                    if (chart.DataSeries[i].Show) {
                        this.Height += dLegendItemHeight;
                    }
                }
            }
            // Measure.
            var maxTextHeight = dLegendItemHeight;
            var biggestTextHeight = 0;
            this.FontSizeH = this.FontSize * 1.5;
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
            var testFontSize = this.FontSizeW > this.FontSizeH ? this.FontSizeH : this.FontSizeW;
            var textSize1 = chart.GetTextSize(this.LargeTextW, testFontSize.toString(), this.FontFamily, this.FontStyle, this.FontWeight);
            var textSize2 = chart.GetTextSize(this.LargeTextH, testFontSize.toString(), this.FontFamily, this.FontStyle, this.FontWeight);
            this.LabelWidth = textSize1.Width;
            this.LabelHeight = textSize2.Height;
            this.Width = 0;
            var dLegendItemWidth = this.ShapeWidth + this.LabelWidth;
            if (this.ContentOrientation == Orientation.Horizontal) {
                for (var i = 0; i < chart.DataSeries.length; i++) {
                    if (chart.DataSeries[i].Show) {
                        this.Width += dLegendItemWidth;
                    }
                }
            }
            else if (this.ContentOrientation == Orientation.Vertical) {
                this.Width = dLegendItemWidth;
            }
            this.Height = 0;
            var dLegendItemHeight = this.LabelHeight;
            if (this.ContentOrientation == Orientation.Horizontal) {
                this.Height = dLegendItemHeight;
            }
            else if (this.ContentOrientation == Orientation.Vertical) {
                for (var i = 0; i < chart.DataSeries.length; i++) {
                    if (chart.DataSeries[i].Show) {
                        this.Height += dLegendItemHeight;
                    }
                }
            }
            this.FontSizeDraw = this.FontSize;
            if (this.FontSize > testFontSize) {
                this.FontSizeDraw = testFontSize;
            }
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
            var svgLegend = chart.GetSVGSVGElementByID("svg-legend", true);
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
            var xStart = 0;
            for (var i = 0; i < chart.DataSeries.length; i++) {
                var serie = chart.DataSeries[i];
                if (!serie.Show) {
                    continue;
                }
                var line = chart.CreateSVGLineElement();
                var x1 = xStart + fifthOfW;
                var y1 = yStart + sixthOfH * 3;
                var x2 = xStart + fifthOfW * 4;
                var y2 = yStart + sixthOfH * 3;
                var lineID = "legend-item-line-" + serie.XAxisID + "-" + serie.YAxisID;
                var lineThick = sixthOfH * 2;
                FChartHelper.SetSVGLineAttributes(line, lineID, x1.toString(), y1.toString(), x2.toString(), y2.toString(), lineThick.toString(), serie.LineColor);
                svgLegend.appendChild(line);
                if (!FChartHelper.ObjectIsNullOrEmpty(serie.Mark)) {
                    var mark = $.extend(true, {}, serie.Mark);
                    var mx = xStart + this.ShapeWidth / 2;
                    var my = yStart + this.LabelHeight / 2;
                    mark.AttatchTo = MarkAttachTo.Legend;
                    mark.Rotation = 0;
                    mark.X = mx;
                    mark.Y = my;
                    mark.Width = fifthOfW;
                    mark.Height = sixthOfH * 3;
                    if (serie.Mark instanceof CircleMark) {
                        mark.Radius = sixthOfH * 2;
                    }
                    mark.Draw(chart);
                }
                var lbl = serie.Label;
                var text = chart.CreateSVGTextElement();
                var lx = xStart + this.ShapeWidth;
                var ly = yStart + this.LabelHeight / 2 + this.FontSizeDraw / 2 - this.FontSizeDraw * 0.3 / 2;
                var textID = "legend-item-" + i.toString() + "-" + lbl;
                FChartHelper.SetSVGTextAttributes(text, textID, lx.toString(), ly.toString(), lbl, "start", this.FontFamily, this.FontStyle, this.FontSizeDraw.toString(), this.FontWeight);
                svgLegend.appendChild(text);
                if (this.ContentOrientation == Orientation.Vertical) {
                    yStart += this.LabelHeight;
                }
                else if (this.ContentOrientation == Orientation.Horizontal) {
                    xStart += (this.ShapeWidth + this.LabelWidth);
                }
            }
        };
        ;
        FChartLegend.prototype.ResetIndirectVariables = function () {
            this.FontSizeW = 0;
            this.FontSizeH = 0;
            this.LargeTextW = "";
            this.LargeTextH = "";
            this.HorizontalMeasured = false;
            this.VerticalMeasured = false;
            this.LabelWidth = 0;
            this.LabelHeight = 0;
        };
        return FChartLegend;
    }(ChartGraphObject));
    exports.FChartLegend = FChartLegend;
    (function (ZoomControlLayout) {
        ZoomControlLayout[ZoomControlLayout["Left"] = 0] = "Left";
        ZoomControlLayout[ZoomControlLayout["Right"] = 1] = "Right";
        ZoomControlLayout[ZoomControlLayout["Top"] = 2] = "Top";
        ZoomControlLayout[ZoomControlLayout["Bottom"] = 3] = "Bottom";
    })(exports.ZoomControlLayout || (exports.ZoomControlLayout = {}));
    var ZoomControlLayout = exports.ZoomControlLayout;
    (function (HorizontalAlignment) {
        HorizontalAlignment[HorizontalAlignment["Left"] = 0] = "Left";
        HorizontalAlignment[HorizontalAlignment["Center"] = 1] = "Center";
        HorizontalAlignment[HorizontalAlignment["Right"] = 2] = "Right";
    })(exports.HorizontalAlignment || (exports.HorizontalAlignment = {}));
    var HorizontalAlignment = exports.HorizontalAlignment;
    (function (VerticalAlignment) {
        VerticalAlignment[VerticalAlignment["Top"] = 0] = "Top";
        VerticalAlignment[VerticalAlignment["Center"] = 1] = "Center";
        VerticalAlignment[VerticalAlignment["Bottom"] = 2] = "Bottom";
    })(exports.VerticalAlignment || (exports.VerticalAlignment = {}));
    var VerticalAlignment = exports.VerticalAlignment;
    var FChartZoomControl = (function (_super) {
        __extends(FChartZoomControl, _super);
        function FChartZoomControl() {
            _super.call(this);
            this.Layout = ZoomControlLayout.Right;
            this.HorizontalAlignment = HorizontalAlignment.Left;
            this.VerticalAlignment = VerticalAlignment.Top;
            this.DefaultShortSize = 30;
            this.DefaultLongSize = 300;
            this.MaxBarSize = 16;
            this.ShortSize = 0;
            this.LongSize = 0;
            this.AttachedChart = null;
            this.ZoomInHolder = null;
            this.ZoomOutHolder = null;
            this.DraggerHolder = null;
            this.LabelHolder = null;
            this.ProgressBarHolder = null;
            this.ID = "";
            this.ZoomInHolderID = "";
            this.ZoomInHolderL1ID = "";
            this.ZoomInHolderL2ID = "";
            this.ZoomOutHolderID = "";
            this.ZoomOutHolderL1ID = "";
            this.DraggerHolderID = "";
            this.LabelHolderID = "";
            this.ProgressBarHolderID = "";
            this.DraggerScale = 0;
            this.DraggerBigScale = 0;
            this.CircleRadius = 0;
            this.DraggerX = 0;
            this.DraggerY = 0;
            this.Length = 0;
            this.Step = 10;
            this.ClickingOnDragger = false;
            this.DraggingStartPosition = 0;
            this.DragThreshold = 5;
            this.Dragging = false;
            this.TimerID = -1;
            this.LineWidth = 2;
        }
        Object.defineProperty(FChartZoomControl.prototype, "Orientation", {
            get: function () {
                if (this.Layout == ZoomControlLayout.Left || this.Layout == ZoomControlLayout.Right) {
                    return Orientation.Vertical;
                }
                return Orientation.Horizontal;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(FChartZoomControl.prototype, "Margin", {
            get: function () {
                var m = 0;
                var mh = 0;
                var mv = 0;
                if (this.Orientation == Orientation.Horizontal) {
                    mh = this.LongSize * 0.1;
                }
                else {
                    mh = this.ShortSize * 0.1;
                }
                if (this.Orientation == Orientation.Vertical) {
                    mv = this.LongSize * 0.1;
                }
                else {
                    mv = this.ShortSize * 0.1;
                }
                m = Math.min(mh, mv);
                return m;
            },
            enumerable: true,
            configurable: true
        });
        FChartZoomControl.prototype.IdentifyID = function () {
            if (FChartHelper.ObjectIsNullOrEmpty(this.AttachedChart)) {
                return;
            }
            this.ID = this.AttachedChart.IdentifyID("svg-zoomcontrol");
            this.ZoomInHolderID = this.AttachedChart.IdentifyID("zoomcontrol-zoomin-holder");
            this.ZoomInHolderL1ID = this.AttachedChart.IdentifyID("zoomcontrol-zoomin-holder-l1");
            this.ZoomInHolderL2ID = this.AttachedChart.IdentifyID("zoomcontrol-zoomin-holder-l2");
            this.ZoomOutHolderID = this.AttachedChart.IdentifyID("zoomcontrol-zoomout-holder");
            this.ZoomOutHolderL1ID = this.AttachedChart.IdentifyID("zoomcontrol-zoomin-holder-l1");
            this.DraggerHolderID = this.AttachedChart.IdentifyID("zoomcontrol-dragger-holder");
            this.LabelHolderID = this.AttachedChart.IdentifyID("zoomcontrol-label-holder");
            this.ProgressBarHolderID = this.AttachedChart.IdentifyID("zoomcontrol-progressbar-holder");
        };
        FChartZoomControl.prototype.CalculateShortSize = function (availableSpace) {
            if (availableSpace > this.DefaultShortSize) {
                this.ShortSize = this.DefaultShortSize;
            }
            else {
                this.ShortSize = availableSpace;
            }
        };
        FChartZoomControl.prototype.CalculateLongSize = function (availableSpace) {
            if (availableSpace > this.DefaultLongSize) {
                this.LongSize = this.DefaultLongSize;
            }
            else {
                this.LongSize = availableSpace;
            }
        };
        FChartZoomControl.prototype.Draw = function (chart) {
            var _this = this;
            this.AttachedChart = chart;
            this.IdentifyID();
            var svgZoomControl = chart.GetSVGSVGElementByID(this.ID);
            if (FChartHelper.ObjectIsNullOrEmpty(svgZoomControl)) {
                return;
            }
            if (this.Layout == ZoomControlLayout.Left || this.Layout == ZoomControlLayout.Right) {
                var w = this.ShortSize;
                var h = this.LongSize;
                w -= this.Margin;
                h -= this.Margin;
                var mx = this.Margin / 2;
                var my = this.Margin / 2;
                var twothOfW = w / 2;
                var eighthOfH = h / 8;
                var r = Math.min(eighthOfH / 2, twothOfW / 2);
                this.CircleRadius = r;
                var hb = h - 4 * r;
                this.Length = hb;
                var cx1 = mx + r;
                var cy1 = my + 2 * r - r;
                var circle1 = chart.CreateSVGCircleElement();
                FChartHelper.SetSVGCircleAttributes(circle1, this.ZoomInHolderID, cx1.toString(), cy1.toString(), r.toString(), "transparent", this.LineWidth.toString(), this.LineColor);
                var ix1 = cx1;
                var iy1 = my;
                var ix2 = cx1;
                var iy2 = my + 2 * r;
                var lineP1 = chart.CreateSVGLineElement();
                FChartHelper.SetSVGLineAttributes(lineP1, this.ZoomInHolderL1ID, ix1.toString(), iy1.toString(), ix2.toString(), iy2.toString(), this.LineWidth.toString(), this.LineColor);
                svgZoomControl.appendChild(lineP1);
                ix1 = mx;
                ix2 = mx + 2 * r;
                iy1 = my + r;
                iy2 = iy1;
                var lineP2 = chart.CreateSVGLineElement();
                FChartHelper.SetSVGLineAttributes(lineP2, this.ZoomInHolderL2ID, ix1.toString(), iy1.toString(), ix2.toString(), iy2.toString(), this.LineWidth.toString(), this.LineColor);
                svgZoomControl.appendChild(lineP2);
                svgZoomControl.appendChild(circle1);
                this.ZoomInHolder = circle1;
                var cx2 = mx + r;
                var cy2 = my + 2 * r + hb + r;
                var circle2 = chart.CreateSVGCircleElement();
                FChartHelper.SetSVGCircleAttributes(circle2, this.ZoomOutHolderID, cx2.toString(), cy2.toString(), r.toString(), "transparent", this.LineWidth.toString(), this.LineColor);
                iy1 = my + 2 * r + hb + r;
                iy2 = iy1;
                var lineP3 = chart.CreateSVGLineElement();
                FChartHelper.SetSVGLineAttributes(lineP3, this.ZoomOutHolderL1ID, ix1.toString(), iy1.toString(), ix2.toString(), iy2.toString(), this.LineWidth.toString(), this.LineColor);
                svgZoomControl.appendChild(lineP3);
                svgZoomControl.appendChild(circle2);
                this.ZoomOutHolder = circle2;
                var lx1 = cx1;
                var ly1 = my + 2 * r;
                var lx2 = cx1;
                var ly2 = my + 2 * r + hb;
                var progressBar = chart.CreateSVGLineElement();
                FChartHelper.SetSVGLineAttributes(progressBar, this.ProgressBarHolderID, lx1.toString(), ly1.toString(), lx2.toString(), ly2.toString(), this.LineWidth.toString(), this.LineColor);
                svgZoomControl.appendChild(progressBar);
                this.ProgressBarHolder = progressBar;
                var dragger = chart.CreateSVGPathElement();
                dragger.setAttribute("id", this.DraggerHolderID);
                dragger.setAttribute("stroke-width", this.LineWidth.toString());
                dragger.setAttribute("stroke", this.LineColor);
                dragger.setAttribute("fill", this.LineColor);
                svgZoomControl.appendChild(dragger);
                this.DraggerHolder = dragger;
                this.UpdateDraggerData();
                var tx = mx + r * 2 + twothOfW;
                var ty = my + 2 * r + hb / 2;
                var dLabelFontSize = this.FontSize;
                ty += (dLabelFontSize / 2 - dLabelFontSize * 0.3 / 2);
                var strLabel = chart.ZoomLevel.toFixed(2);
                var text = chart.CreateSVGTextElement();
                var transform = "rotate(270," + tx.toString() + "," + ty.toString() + ")";
                FChartHelper.SetSVGTextAttributes(text, this.LabelHolderID, tx.toString(), ty.toString(), strLabel, "middle", this.FontFamily, this.FontStyle, dLabelFontSize.toString(), this.FontWeight, this.FontColor, transform);
                svgZoomControl.appendChild(text);
                this.LabelHolder = text;
            }
            else {
                var w = this.LongSize;
                var h = this.ShortSize;
                w -= this.Margin;
                h -= this.Margin;
                var mx = this.Margin / 2;
                var my = this.Margin / 2;
                var twothOfH = h / 2;
                var eighthOfW = w / 8;
                var r = Math.min(eighthOfW / 2, twothOfH / 2);
                this.CircleRadius = r;
                var wb = w - 4 * r;
                this.Length = wb;
                var cx1 = mx + r;
                var cy1 = my + twothOfH + r;
                var circle1 = chart.CreateSVGCircleElement();
                FChartHelper.SetSVGCircleAttributes(circle1, this.ZoomInHolderID, cx1.toString(), cy1.toString(), r.toString(), "transparent", this.LineWidth.toString(), this.LineColor);
                var ix1 = mx;
                var iy1 = my + twothOfH + r;
                var ix2 = mx + 2 * r;
                var iy2 = iy1;
                var lineP1 = chart.CreateSVGLineElement();
                FChartHelper.SetSVGLineAttributes(lineP1, this.ZoomInHolderL1ID, ix1.toString(), iy1.toString(), ix2.toString(), iy2.toString(), this.LineWidth.toString(), this.LineColor);
                svgZoomControl.appendChild(lineP1);
                ix1 = mx + r;
                ix2 = ix1;
                iy1 = my + twothOfH;
                iy2 = iy1 + 2 * r;
                var lineP2 = chart.CreateSVGLineElement();
                FChartHelper.SetSVGLineAttributes(lineP2, this.ZoomInHolderL2ID, ix1.toString(), iy1.toString(), ix2.toString(), iy2.toString(), this.LineWidth.toString(), this.LineColor);
                svgZoomControl.appendChild(lineP2);
                svgZoomControl.appendChild(circle1);
                this.ZoomInHolder = circle1;
                var cx2 = mx + 2 * r + wb + r;
                var cy2 = my + twothOfH + r;
                var circle2 = chart.CreateSVGCircleElement();
                FChartHelper.SetSVGCircleAttributes(circle2, this.ZoomOutHolderID, cx2.toString(), cy2.toString(), r.toString(), "transparent", this.LineWidth.toString(), this.LineColor);
                ix1 = mx + 2 * r + wb + r;
                ix2 = ix1;
                iy1 = my + twothOfH;
                iy2 = iy1 + 2 * r;
                var lineP3 = chart.CreateSVGLineElement();
                FChartHelper.SetSVGLineAttributes(lineP3, this.ZoomOutHolderL1ID, ix1.toString(), iy1.toString(), ix2.toString(), iy2.toString(), this.LineWidth.toString(), this.LineColor);
                svgZoomControl.appendChild(lineP3);
                svgZoomControl.appendChild(circle2);
                this.ZoomOutHolder = circle2;
                var lx1 = mx + 2 * r;
                var ly1 = my + twothOfH + r;
                var lx2 = lx1 + wb;
                var ly2 = ly1;
                var progressBar = chart.CreateSVGLineElement();
                FChartHelper.SetSVGLineAttributes(progressBar, this.ProgressBarHolderID, lx1.toString(), ly1.toString(), lx2.toString(), ly2.toString(), this.LineWidth.toString(), this.LineColor);
                svgZoomControl.appendChild(progressBar);
                this.ProgressBarHolder = progressBar;
                var dragger = chart.CreateSVGPathElement();
                dragger.setAttribute("id", this.DraggerHolderID);
                dragger.setAttribute("stroke-width", this.LineWidth.toString());
                dragger.setAttribute("stroke", this.LineColor);
                dragger.setAttribute("fill", this.LineColor);
                svgZoomControl.appendChild(dragger);
                this.DraggerHolder = dragger;
                this.UpdateDraggerData();
                var tx = mx + 2 * r + wb / 2;
                var ty = my + twothOfH / 2;
                var dLabelFontSize = this.FontSize;
                ty += (dLabelFontSize / 2 - dLabelFontSize * 0.3 / 2);
                var strLabel = chart.ZoomLevel.toFixed(2);
                var text = chart.CreateSVGTextElement();
                FChartHelper.SetSVGTextAttributes(text, this.LabelHolderID, tx.toString(), ty.toString(), strLabel, "middle", this.FontFamily, this.FontStyle, dLabelFontSize.toString(), this.FontWeight, this.FontColor);
                svgZoomControl.appendChild(text);
                this.LabelHolder = text;
            }
            this.ZoomInHolder.addEventListener("mouseout", function (e) { _this.ClearTimer(); });
            this.ZoomOutHolder.addEventListener("mouseout", function (e) { _this.ClearTimer(); });
            this.AttachedChart.EventListenerMap.push(new KeyValuePair(FChartEventTypes.ZoomChanged, function (e) { _this.OnChartZoomChanged(e); }));
        };
        FChartZoomControl.prototype.OnChartZoomChanged = function (zoomValue) {
            if (FChartHelper.ObjectIsNullOrEmpty(this.LabelHolder)) {
                return;
            }
            this.UpdateDraggerData();
            var dValue = FChartHelper.RoundFloatNumber(zoomValue, 3, false);
            var strValue = dValue.toString();
            if (dValue.toString().length > 6) {
                strValue = dValue.toFixed(3);
            }
            this.LabelHolder.textContent = strValue;
        };
        FChartZoomControl.prototype.Zoom = function (delta) {
            if (this.Orientation == Orientation.Horizontal) {
                var left = 0;
                var right = 0;
                var len = this.AttachedChart.MaxZoomLevel * this.DraggerBigScale;
                var strX = this.DraggerHolder.getAttribute("x");
                var x = parseFloat(strX);
                var mx = this.Margin / 2;
                var x1 = mx + 2 * this.CircleRadius;
                var x2 = x1 + len + 2 * this.CircleRadius;
                var offsetX = mx + this.CircleRadius * 2;
                left = this.DraggerX - offsetX - this.DraggerScale;
                right = offsetX + len - this.DraggerX - this.DraggerScale;
                if (delta == 0) {
                    return false;
                }
                if (delta < 0) {
                    if (left == 0) {
                        return false;
                    }
                    delta = Math.abs(delta);
                    delta = delta > left ? left : delta;
                    this.DraggerX -= delta;
                }
                else {
                    if (right == 0) {
                        return false;
                    }
                    delta = delta > right ? right : delta;
                    this.DraggerX += delta;
                }
            }
            else {
                var bottom = 0;
                var top_1 = 0;
                var len = this.AttachedChart.MaxZoomLevel * this.DraggerBigScale;
                var my = this.Margin / 2;
                var offsetY = my + this.CircleRadius * 2;
                bottom = offsetY + len - this.DraggerY - this.DraggerScale;
                top_1 = this.DraggerY - offsetY - this.DraggerScale;
                if (delta == 0) {
                    return false;
                }
                if (delta > 0) {
                    if (bottom == 0) {
                        return false;
                    }
                    delta = delta > bottom ? bottom : delta;
                    this.DraggerY += delta;
                }
                else {
                    if (top_1 == 0) {
                        return false;
                    }
                    delta = Math.abs(delta);
                    delta = delta > top_1 ? top_1 : delta;
                    this.DraggerY -= delta;
                }
            }
            this.AttachedChart.ZoomToScale(1 / this.ZoomValue);
            return true;
        };
        FChartZoomControl.prototype.OnZoomIn = function (e) {
            if (FChartHelper.ObjectIsNullOrEmpty(this.AttachedChart)) {
                return;
            }
            this.Zoom(-this.Step);
        };
        FChartZoomControl.prototype.OnZoomOut = function (e) {
            if (FChartHelper.ObjectIsNullOrEmpty(this.AttachedChart)) {
                return;
            }
            this.Zoom(this.Step);
        };
        FChartZoomControl.prototype.UpdateDraggerData = function () {
            var length = 0;
            if (this.Orientation == Orientation.Horizontal) {
                length = this.ProgressBarHolder.x2.baseVal.value - this.ProgressBarHolder.x1.baseVal.value;
            }
            else {
                length = this.ProgressBarHolder.y2.baseVal.value - this.ProgressBarHolder.y1.baseVal.value;
            }
            var scale = length / this.AttachedChart.MaxZoomLevel;
            var exponent = 0;
            while (scale > this.MaxBarSize / 2) {
                scale /= 2;
                exponent++;
            }
            var bigScale = scale * Math.pow(2, exponent);
            this.DraggerScale = scale;
            this.DraggerBigScale = bigScale;
            var delta = bigScale == scale ? 0 : scale;
            var mx = this.Margin / 2;
            var my = this.Margin / 2;
            var r = this.CircleRadius;
            if (this.Orientation == Orientation.Horizontal) {
                var twothOfH = this.ShortSize / 2;
                var bx = mx + 2 * r + this.AttachedChart.ZoomLevel * bigScale - delta;
                var by = my + twothOfH + r;
                this.DraggerX = bx;
                this.DraggerY = by;
                var bx1 = bx - scale;
                var by1 = by - r;
                var bx2 = bx + scale;
                var by2 = by - r;
                var bx3 = bx + scale;
                var by3 = by + r;
                var bx4 = bx - scale;
                var by4 = by + r;
                var d = "M" + bx1.toString() + " " + by1.toString() + " " +
                    "L" + bx2.toString() + " " + by2.toString() + " " +
                    "L" + bx3.toString() + " " + by3.toString() + " " +
                    "L" + bx4.toString() + " " + by4.toString() + " " + "Z";
                this.DraggerHolder.setAttribute("d", d);
            }
            else {
                var bx = mx + r;
                var by = my + 2 * r + (length - (this.AttachedChart.ZoomLevel * bigScale - delta));
                this.DraggerX = bx;
                this.DraggerY = by;
                var bx1 = bx - r;
                var by1 = by - scale;
                var bx2 = bx + r;
                var by2 = by - scale;
                var bx3 = bx + r;
                var by3 = by + scale;
                var bx4 = bx - r;
                var by4 = by + scale;
                var d = "M" + bx1.toString() + " " + by1.toString() + " " +
                    "L" + bx2.toString() + " " + by2.toString() + " " +
                    "L" + bx3.toString() + " " + by3.toString() + " " +
                    "L" + bx4.toString() + " " + by4.toString() + " " + "Z";
                this.DraggerHolder.setAttribute("d", d);
            }
            if (!FChartHelper.ObjectIsNullOrEmpty(this.LabelHolder)) {
                var dValue = FChartHelper.RoundFloatNumber(this.AttachedChart.ZoomLevel, 3, false);
                var strValue = dValue.toString();
                if (dValue.toString().length > 6) {
                    strValue = dValue.toFixed(3);
                }
                this.LabelHolder.textContent = strValue;
            }
        };
        Object.defineProperty(FChartZoomControl.prototype, "ZoomValue", {
            get: function () {
                var zoomValue = 0;
                var length = 0;
                if (this.Orientation == Orientation.Horizontal) {
                    length = this.ProgressBarHolder.x2.baseVal.value - this.ProgressBarHolder.x1.baseVal.value;
                    zoomValue = (this.DraggerX - this.ProgressBarHolder.x1.baseVal.value - this.DraggerScale) / length * this.AttachedChart.MaxZoomLevel;
                }
                else {
                    length = this.ProgressBarHolder.y2.baseVal.value - this.ProgressBarHolder.y1.baseVal.value;
                    zoomValue = (length - (this.DraggerY - this.ProgressBarHolder.y1.baseVal.value - this.DraggerScale)) / length * this.AttachedChart.MaxZoomLevel;
                }
                return zoomValue;
            },
            enumerable: true,
            configurable: true
        });
        FChartZoomControl.prototype.ClearTimer = function () {
            if (this.TimerID != -1) {
                clearInterval(this.TimerID);
                this.TimerID = -1;
            }
        };
        FChartZoomControl.prototype.OnMouseDown = function (e) {
            var _this = this;
            if (FChartHelper.ObjectIsNullOrEmpty(e) || FChartHelper.ObjectIsNullOrEmpty(e.toElement)) {
                return;
            }
            if (e.toElement.id == this.DraggerHolderID) {
                this.ClickingOnDragger = true;
                if (this.Orientation == Orientation.Horizontal) {
                    this.DraggingStartPosition = e.clientX;
                }
                else {
                    this.DraggingStartPosition = e.clientY;
                }
            }
            else if (e.toElement.id == this.ZoomInHolderID) {
                this.TimerID = setInterval(function () { _this.OnZoomIn(null); }, 100);
            }
            else if (e.toElement.id == this.ZoomOutHolderID) {
                this.TimerID = setInterval(function () { _this.OnZoomOut(null); }, 100);
            }
        };
        FChartZoomControl.prototype.OnMouseUp = function (e) {
            if (this.Dragging) {
                this.ClickingOnDragger = false;
                this.Dragging = false;
                this.DraggingStartPosition = 0;
            }
            this.ClearTimer();
        };
        FChartZoomControl.prototype.OnMouseMove = function (e) {
            if (this.Dragging) {
                this.ProcessDragging(e);
                return;
            }
            if (this.ClickingOnDragger) {
                var currentPos = 0;
                if (this.Orientation == Orientation.Horizontal) {
                    currentPos = e.clientX;
                }
                else {
                    currentPos = e.clientY;
                }
                var delta = Math.abs(currentPos - this.DraggingStartPosition);
                if (delta >= this.DragThreshold) {
                    this.Dragging = true;
                }
            }
        };
        FChartZoomControl.prototype.ProcessDragging = function (e) {
            var delta = 0;
            if (this.Orientation == Orientation.Horizontal) {
                delta = e.clientX - this.DraggingStartPosition;
            }
            else {
                delta = e.clientY - this.DraggingStartPosition;
            }
            var changeStart = this.Zoom(delta);
            if (!changeStart) {
                return;
            }
            if (this.Orientation == Orientation.Horizontal) {
                this.DraggingStartPosition = e.clientX;
            }
            else {
                this.DraggingStartPosition = e.clientY;
            }
        };
        return FChartZoomControl;
    }(ChartGraphObject));
    exports.FChartZoomControl = FChartZoomControl;
    var RangeControlCornerDock;
    (function (RangeControlCornerDock) {
        RangeControlCornerDock[RangeControlCornerDock["LeftTop"] = 0] = "LeftTop";
        RangeControlCornerDock[RangeControlCornerDock["RightTop"] = 1] = "RightTop";
        RangeControlCornerDock[RangeControlCornerDock["RightBottom"] = 2] = "RightBottom";
        RangeControlCornerDock[RangeControlCornerDock["LeftBottom"] = 3] = "LeftBottom";
    })(RangeControlCornerDock || (RangeControlCornerDock = {}));
    var RangeControlBarDock;
    (function (RangeControlBarDock) {
        RangeControlBarDock[RangeControlBarDock["Left"] = 0] = "Left";
        RangeControlBarDock[RangeControlBarDock["Right"] = 1] = "Right";
        RangeControlBarDock[RangeControlBarDock["Top"] = 2] = "Top";
        RangeControlBarDock[RangeControlBarDock["Bottom"] = 3] = "Bottom";
    })(RangeControlBarDock || (RangeControlBarDock = {}));
    var RangeControlDraggerDock;
    (function (RangeControlDraggerDock) {
        RangeControlDraggerDock[RangeControlDraggerDock["Left"] = 0] = "Left";
        RangeControlDraggerDock[RangeControlDraggerDock["Right"] = 1] = "Right";
    })(RangeControlDraggerDock || (RangeControlDraggerDock = {}));
    var RangeControlMaskDock;
    (function (RangeControlMaskDock) {
        RangeControlMaskDock[RangeControlMaskDock["Left"] = 0] = "Left";
        RangeControlMaskDock[RangeControlMaskDock["Center"] = 1] = "Center";
        RangeControlMaskDock[RangeControlMaskDock["Right"] = 2] = "Right";
    })(RangeControlMaskDock || (RangeControlMaskDock = {}));
    var FChartRangeControl = (function (_super) {
        __extends(FChartRangeControl, _super);
        function FChartRangeControl() {
            _super.apply(this, arguments);
            this.AttachedChart = null;
            this.TopHorizontalBarPosition = new FloatPoint(0, 0);
            this.BottomHorizontalBarPosition = new FloatPoint(0, 0);
            this.LeftVerticalBarPosition = new FloatPoint(0, 0);
            this.RightVerticalBarPosition = new FloatPoint(0, 0);
            this.LeftMask = null;
            this.RightMask = null;
            this.CenterMask = null;
            this.LeftTopCorner = null;
            this.LeftBottomCorner = null;
            this.RightTopCorner = null;
            this.RightBottomCorner = null;
            this.LeftBar = null;
            this.RightBar = null;
            this.TopBar = null;
            this.BottomBar = null;
            this.LeftDraggerID = "";
            this.RightDraggerID = "";
            this.CenterMaskID = "";
            this.LeftMaskID = "";
            this.RightMaskID = "";
            this.LeftTopCornerID = "";
            this.RightTopCornerID = "";
            this.LeftBottomCornerID = "";
            this.RightBottomCornerID = "";
            this.LeftBarID = "";
            this.RightBarID = "";
            this.TopBarID = "";
            this.BottomBarID = "";
            this.DEFAULT_HORIZONTAL_BAR_SIZE = 20;
            this.DEFAULT_VERTICAL_BAR_SIZE = 20;
            this.m_dHorizontalBarSize = this.DEFAULT_HORIZONTAL_BAR_SIZE;
            this.m_dVerticalBarSize = this.DEFAULT_VERTICAL_BAR_SIZE;
            this.DraggingStartPosition = 0;
            this.DragThreshold = 5;
            this.Dragging = false;
            this.ClickingOnLeftDragger = false;
            this.ClickingOnRightDragger = false;
            this.ClickingOnCenterMask = false;
        }
        FChartRangeControl.prototype.IdentifyID = function () {
            if (FChartHelper.ObjectIsNullOrEmpty(this.AttachedChart)) {
                return;
            }
            this.LeftDraggerID = this.AttachedChart.IdentifyID("rangecontrol-dragger-left");
            this.RightDraggerID = this.AttachedChart.IdentifyID("rangecontrol-dragger-right");
            this.LeftMaskID = this.AttachedChart.IdentifyID("svg-rangecontrol-mask-left");
            this.RightMaskID = this.AttachedChart.IdentifyID("svg-rangecontrol-mask-right");
            this.CenterMaskID = this.AttachedChart.IdentifyID("svg-rangecontrol-mask-center");
            this.LeftTopCornerID = this.AttachedChart.IdentifyID("svg-rangecontrol-corner-lefttop");
            this.LeftBottomCornerID = this.AttachedChart.IdentifyID("svg-rangecontrol-corner-leftbottom");
            this.RightTopCornerID = this.AttachedChart.IdentifyID("svg-rangecontrol-corner-righttop");
            this.RightBottomCornerID = this.AttachedChart.IdentifyID("svg-rangecontrol-corner-rightbottom");
            this.LeftBarID = this.AttachedChart.IdentifyID("svg-rangecontrol-bar-left");
            this.RightBarID = this.AttachedChart.IdentifyID("svg-rangecontrol-bar-right");
            this.TopBarID = this.AttachedChart.IdentifyID("svg-rangecontrol-bar-top");
            this.BottomBarID = this.AttachedChart.IdentifyID("svg-rangecontrol-bar-bottom");
        };
        Object.defineProperty(FChartRangeControl.prototype, "HorizontalBarSize", {
            get: function () {
                var max = this.AttachedChart.ContainerHeight * 0.1;
                this.m_dHorizontalBarSize = this.m_dHorizontalBarSize > max ? max : this.m_dHorizontalBarSize;
                return this.m_dHorizontalBarSize;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(FChartRangeControl.prototype, "VerticalBarSize", {
            get: function () {
                var max = this.AttachedChart.ContainerWidth * 0.05;
                this.m_dVerticalBarSize = this.m_dVerticalBarSize > max ? max : this.m_dVerticalBarSize;
                return this.m_dVerticalBarSize;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(FChartRangeControl.prototype, "HorizontalBarWidth", {
            get: function () {
                var w = 0;
                w = this.RightVerticalBarPosition.X + this.VerticalBarWidth - this.LeftVerticalBarPosition.X - this.VerticalBarWidth * 2;
                return w;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(FChartRangeControl.prototype, "HorizontalBarHeight", {
            get: function () {
                return this.HorizontalBarSize / 2;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(FChartRangeControl.prototype, "VerticalBarWidth", {
            get: function () {
                return this.VerticalBarSize / 2;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(FChartRangeControl.prototype, "VerticalBarHeight", {
            get: function () {
                var h = 0;
                h = this.BottomHorizontalBarPosition.Y + this.HorizontalBarHeight - this.TopHorizontalBarPosition.Y - this.HorizontalBarHeight * 2;
                return h;
            },
            enumerable: true,
            configurable: true
        });
        FChartRangeControl.prototype.Draw = function (chart) {
            var _this = this;
            if (FChartHelper.ObjectIsNullOrEmpty(chart)) {
                return;
            }
            this.AttachedChart = chart;
            this.IdentifyID();
            this.m_dHorizontalBarSize = this.DEFAULT_HORIZONTAL_BAR_SIZE;
            this.m_dVerticalBarSize = this.DEFAULT_VERTICAL_BAR_SIZE;
            this.ClearContent();
            this.DrawCorner();
            this.DrawBar();
            this.DrawDragger();
            this.DrawMask();
            this.CenterMask.ondblclick = function (e) {
                _this.AttachedChart.GetPlotSVG().ondblclick(e);
            };
        };
        FChartRangeControl.prototype.DrawCorner = function () {
            var lx = 0;
            var ly = 0;
            lx = this.TopHorizontalBarPosition.X;
            ly = this.TopHorizontalBarPosition.Y;
            this.DrawCornerGraph(this.LeftTopCornerID, lx, ly, RangeControlCornerDock.LeftTop);
            lx = this.RightVerticalBarPosition.X;
            ly = this.RightVerticalBarPosition.Y;
            this.DrawCornerGraph(this.RightTopCornerID, lx, ly, RangeControlCornerDock.RightTop);
            lx = this.RightVerticalBarPosition.X;
            ly = this.BottomHorizontalBarPosition.Y;
            this.DrawCornerGraph(this.RightBottomCornerID, lx, ly, RangeControlCornerDock.RightBottom);
            lx = this.BottomHorizontalBarPosition.X;
            ly = this.BottomHorizontalBarPosition.Y;
            this.DrawCornerGraph(this.LeftBottomCornerID, lx, ly, RangeControlCornerDock.LeftBottom);
        };
        FChartRangeControl.prototype.DrawCornerGraph = function (id, x, y, dock) {
            var w = this.VerticalBarWidth;
            var h = this.HorizontalBarHeight;
            var rx = w;
            var ry = h;
            var largeArc = 0;
            var xAxisRotation = 0;
            var sweep = 1;
            var svgCorner = this.AttachedChart.CreateSVG(id, "absolute", x.toString(), y.toString(), w.toString(), h.toString(), false);
            this.AttachedChart.AppendSVGToContainer(svgCorner);
            var fillColor = "lightgray";
            var x1 = (dock == RangeControlCornerDock.LeftTop || dock == RangeControlCornerDock.RightTop) ? 0 : w;
            var y1 = (dock == RangeControlCornerDock.LeftTop || dock == RangeControlCornerDock.LeftBottom) ? h : 0;
            var x2 = (dock == RangeControlCornerDock.LeftTop || dock == RangeControlCornerDock.RightTop) ? w : 0;
            var y2 = (dock == RangeControlCornerDock.LeftTop || dock == RangeControlCornerDock.LeftBottom) ? 0 : h;
            var ox = (dock == RangeControlCornerDock.LeftTop || dock == RangeControlCornerDock.LeftBottom) ? w : 0;
            var oy = (dock == RangeControlCornerDock.LeftTop || dock == RangeControlCornerDock.RightTop) ? h : 0;
            var arc = this.AttachedChart.CreateArc(x1, y1, x2, y2, rx, ry, xAxisRotation, largeArc, sweep, ox, oy, this.LineWidth, fillColor, true, fillColor);
            arc.setAttribute("id", id + "-arc");
            svgCorner.appendChild(arc);
            if (dock == RangeControlCornerDock.LeftTop) {
                this.LeftTopCorner = svgCorner;
            }
            else if (dock == RangeControlCornerDock.LeftBottom) {
                this.LeftBottomCorner = svgCorner;
            }
            else if (dock == RangeControlCornerDock.RightTop) {
                this.RightTopCorner = svgCorner;
            }
            else if (dock == RangeControlCornerDock.RightBottom) {
                this.RightBottomCorner = svgCorner;
            }
        };
        FChartRangeControl.prototype.DrawBar = function () {
            this.DrawBarGraph(this.LeftBarID, RangeControlBarDock.Left);
            this.DrawBarGraph(this.RightBarID, RangeControlBarDock.Right);
            this.DrawBarGraph(this.TopBarID, RangeControlBarDock.Top);
            this.DrawBarGraph(this.BottomBarID, RangeControlBarDock.Bottom);
        };
        FChartRangeControl.prototype.DrawBarGraph = function (id, dock) {
            var lx = 0;
            var ly = 0;
            var w = 0;
            var h = 0;
            lx = (dock == RangeControlBarDock.Top || dock == RangeControlBarDock.Bottom) ? (this.TopHorizontalBarPosition.X + this.VerticalBarWidth) : 0;
            if (dock == RangeControlBarDock.Left) {
                lx = this.TopHorizontalBarPosition.X;
            }
            else if (dock == RangeControlBarDock.Right) {
                lx = this.RightVerticalBarPosition.X;
            }
            ly = (dock == RangeControlBarDock.Left || dock == RangeControlBarDock.Right) ? (this.TopHorizontalBarPosition.Y + this.HorizontalBarHeight) : 0;
            if (dock == RangeControlBarDock.Top) {
                ly = this.TopHorizontalBarPosition.Y;
            }
            else if (dock == RangeControlBarDock.Bottom) {
                ly = this.BottomHorizontalBarPosition.Y;
            }
            w = (dock == RangeControlBarDock.Left || dock == RangeControlBarDock.Right) ? this.VerticalBarWidth : this.HorizontalBarWidth;
            h = (dock == RangeControlBarDock.Left || dock == RangeControlBarDock.Right) ? this.VerticalBarHeight : this.HorizontalBarHeight;
            w = w > 0 ? w : 0;
            var svgBar = this.AttachedChart.CreateSVG(id, "absolute", lx.toString(), ly.toString(), w.toString(), h.toString(), false);
            this.AttachedChart.AppendSVGToContainer(svgBar);
            svgBar.style.setProperty("background-color", "lightgray");
            this.LeftBar = dock == RangeControlBarDock.Left ? svgBar : this.LeftBar;
            this.RightBar = dock == RangeControlBarDock.Right ? svgBar : this.RightBar;
            this.TopBar = dock == RangeControlBarDock.Top ? svgBar : this.TopBar;
            this.BottomBar = dock == RangeControlBarDock.Bottom ? svgBar : this.BottomBar;
        };
        FChartRangeControl.prototype.DrawDragger = function () {
            this.DrawDraggerGraph(this.LeftDraggerID, RangeControlDraggerDock.Left);
            this.DrawDraggerGraph(this.RightDraggerID, RangeControlDraggerDock.Right);
        };
        FChartRangeControl.prototype.DrawDraggerGraph = function (id, dock) {
            var tenthOfW = this.VerticalBarWidth / 10;
            var dLineWidth = tenthOfW * 2;
            var h = this.VerticalBarHeight;
            var dh = h / 2;
            var dx1 = tenthOfW * 2 + dLineWidth / 2;
            var dy1 = h / 2 - dh / 2;
            var dx2 = dx1;
            var dy2 = h / 2 + dh / 2;
            var svgBar = dock == RangeControlDraggerDock.Left ? this.LeftBar : this.RightBar;
            var line1 = this.AttachedChart.CreateSVGLineElement();
            FChartHelper.SetSVGLineAttributes(line1, id + "-line1", dx1.toString(), dy1.toString(), dx2.toString(), dy2.toString(), dLineWidth.toString(), "black");
            svgBar.appendChild(line1);
            var dx3 = dx1 + tenthOfW * 4;
            var dy3 = dy1;
            var dx4 = dx3;
            var dy4 = dy2;
            var line2 = this.AttachedChart.CreateSVGLineElement();
            FChartHelper.SetSVGLineAttributes(line2, id + "-line2", dx3.toString(), dy3.toString(), dx4.toString(), dy4.toString(), dLineWidth.toString(), "black");
            svgBar.appendChild(line2);
            dx1 -= dLineWidth / 2;
            dx2 -= dLineWidth / 2;
            dx3 += dLineWidth / 2;
            dx4 += dLineWidth / 2;
            var dd = "M " + dx1 + " " + dy1 + " " +
                "L " + dx3 + " " + dy3 + " " +
                "L " + dx4 + " " + dy4 + " " +
                "L " + dx2 + " " + dy2 + " " +
                "L " + dx1 + " " + dy1 + " " + "Z";
            var dragger = this.AttachedChart.CreateSVGPathElement();
            dragger.setAttribute("id", id);
            dragger.setAttribute("d", dd);
            dragger.setAttribute("fill", "transparent");
            svgBar.appendChild(dragger);
        };
        FChartRangeControl.prototype.DrawMask = function () {
            var plotWidth = this.AttachedChart.GetPlotWidth();
            var plotHeight = this.AttachedChart.GetPlotHeight();
            var x = 0;
            var y = 0;
            var w = 0;
            var h = plotHeight;
            x = this.AttachedChart.GetPlotX();
            y = this.AttachedChart.GetPlotY();
            w = this.LeftVerticalBarPosition.X - this.AttachedChart.GetPlotX();
            w = w < 0 ? 0 : w;
            this.DrawMaskGraph(this.LeftMaskID, x, y, w, h, RangeControlMaskDock.Left);
            x = this.RightVerticalBarPosition.X + this.VerticalBarWidth;
            y = this.AttachedChart.GetPlotY();
            w = this.AttachedChart.GetPlotX() + plotWidth - x;
            w = w < 0 ? 0 : w;
            this.DrawMaskGraph(this.RightMaskID, x, y, w, h, RangeControlMaskDock.Right);
            x = this.LeftVerticalBarPosition.X + this.VerticalBarWidth;
            y = this.AttachedChart.GetPlotY();
            w = this.RightVerticalBarPosition.X - this.LeftVerticalBarPosition.X - this.VerticalBarWidth;
            w = w < 0 ? 0 : w;
            this.DrawMaskGraph(this.CenterMaskID, x, y, w, h, RangeControlMaskDock.Center);
        };
        FChartRangeControl.prototype.DrawMaskGraph = function (id, x, y, w, h, dock) {
            var mask = this.AttachedChart.CreateSVG(id, "absolute", x.toString(), y.toString(), w.toString(), h.toString(), false);
            mask.style.setProperty("background-color", "whitesmoke");
            mask.style.setProperty("opacity", "0.5");
            this.AttachedChart.AppendSVGToContainer(mask);
            if (dock == RangeControlMaskDock.Center) {
                mask.style.setProperty("background-color", "transparent");
            }
            this.LeftMask = dock == RangeControlMaskDock.Left ? mask : this.LeftMask;
            this.RightMask = dock == RangeControlMaskDock.Right ? mask : this.RightMask;
            this.CenterMask = dock == RangeControlMaskDock.Center ? mask : this.CenterMask;
        };
        FChartRangeControl.prototype.ClearContent = function () {
            if (FChartHelper.ObjectIsNullOrEmpty(this.AttachedChart)) {
                return;
            }
            this.AttachedChart.RemoveSVGFromContainer(this.LeftTopCorner);
            this.AttachedChart.RemoveSVGFromContainer(this.LeftBottomCorner);
            this.AttachedChart.RemoveSVGFromContainer(this.RightTopCorner);
            this.AttachedChart.RemoveSVGFromContainer(this.RightBottomCorner);
            this.AttachedChart.RemoveSVGFromContainer(this.LeftBar);
            this.AttachedChart.RemoveSVGFromContainer(this.RightBar);
            this.AttachedChart.RemoveSVGFromContainer(this.TopBar);
            this.AttachedChart.RemoveSVGFromContainer(this.BottomBar);
            this.AttachedChart.RemoveSVGFromContainer(this.LeftMask);
            this.AttachedChart.RemoveSVGFromContainer(this.RightMask);
            this.AttachedChart.RemoveSVGFromContainer(this.CenterMask);
        };
        FChartRangeControl.prototype.OnMouseDown = function (e) {
            if (FChartHelper.ObjectIsNullOrEmpty(e) || FChartHelper.ObjectIsNullOrEmpty(e.toElement)) {
                return;
            }
            if (e.toElement.id == this.LeftDraggerID || e.toElement.id == this.RightDraggerID || e.toElement.id == this.CenterMaskID) {
                if (e.toElement.id == this.LeftDraggerID) {
                    this.ClickingOnLeftDragger = true;
                }
                else if (e.toElement.id == this.RightDraggerID) {
                    this.ClickingOnRightDragger = true;
                }
                else if (e.toElement.id == this.CenterMaskID) {
                    this.ClickingOnCenterMask = true;
                }
                this.DraggingStartPosition = e.clientX;
            }
        };
        FChartRangeControl.prototype.OnMouseMove = function (e) {
            if (FChartHelper.ObjectIsNullOrEmpty(e) || FChartHelper.ObjectIsNullOrEmpty(e.toElement)) {
                return;
            }
            if (this.Dragging) {
                this.ProcessDragging(e);
                return;
            }
            if (this.ClickingOnLeftDragger || this.ClickingOnRightDragger || this.ClickingOnCenterMask) {
                var currentPos = e.clientX;
                var delta = Math.abs(currentPos - this.DraggingStartPosition);
                if (delta >= this.DragThreshold) {
                    this.Dragging = true;
                }
            }
        };
        FChartRangeControl.prototype.OnMouseUp = function (e) {
            if (FChartHelper.ObjectIsNullOrEmpty(e) || FChartHelper.ObjectIsNullOrEmpty(e.toElement)) {
                return;
            }
            if (this.Dragging) {
                this.ClickingOnLeftDragger = false;
                this.ClickingOnRightDragger = false;
                this.ClickingOnCenterMask = false;
                this.Dragging = false;
            }
        };
        FChartRangeControl.prototype.ProcessDragging = function (e) {
            if (FChartHelper.ObjectIsNullOrEmpty(e)) {
                return;
            }
            var plotWidth = this.AttachedChart.GetPlotWidth();
            var space1 = plotWidth * this.AttachedChart.PlotLeftRange;
            var space2 = plotWidth * (this.AttachedChart.PlotRightRange - this.AttachedChart.PlotLeftRange);
            var space3 = plotWidth * (1 - this.AttachedChart.PlotRightRange);
            var space = 0;
            var delta = e.clientX - this.DraggingStartPosition;
            var direction = delta > 0 ? "R" : "L";
            delta = Math.abs(delta);
            if (this.ClickingOnLeftDragger) {
                if (direction == "R") {
                    delta = delta > space2 ? space2 : delta;
                    this.AttachedChart.PlotLeftRange = (space1 + delta) / plotWidth;
                }
                else {
                    delta = delta > space1 ? space1 : delta;
                    this.AttachedChart.PlotLeftRange = (space1 - delta) / plotWidth;
                }
                var delta2 = direction == "R" ? delta : -delta;
                this.TopHorizontalBarPosition.X += delta2;
                this.BottomHorizontalBarPosition.X += delta2;
                this.LeftVerticalBarPosition.X += delta2;
            }
            else if (this.ClickingOnRightDragger) {
                if (direction == "R") {
                    delta = delta > space3 ? space3 : delta;
                    this.AttachedChart.PlotRightRange = (plotWidth * this.AttachedChart.PlotRightRange + delta) / plotWidth;
                }
                else {
                    delta = delta > space2 ? space2 : delta;
                    this.AttachedChart.PlotRightRange = (plotWidth * this.AttachedChart.PlotRightRange - delta) / plotWidth;
                }
                var delta2 = direction == "R" ? delta : -delta;
                this.RightVerticalBarPosition.X += delta2;
            }
            else if (this.ClickingOnCenterMask) {
                if (direction == "R") {
                    delta = delta > space3 ? space3 : delta;
                    this.AttachedChart.PlotRightRange = (plotWidth * this.AttachedChart.PlotRightRange + delta) / plotWidth;
                    this.AttachedChart.PlotLeftRange = (space1 + delta) / plotWidth;
                }
                else {
                    delta = delta > space1 ? space1 : delta;
                    this.AttachedChart.PlotRightRange = (plotWidth * this.AttachedChart.PlotRightRange - delta) / plotWidth;
                    this.AttachedChart.PlotLeftRange = (space1 - delta) / plotWidth;
                }
                var delta2 = direction == "R" ? delta : -delta;
                this.TopHorizontalBarPosition.X += delta2;
                this.BottomHorizontalBarPosition.X += delta2;
                this.LeftVerticalBarPosition.X += delta2;
                this.RightVerticalBarPosition.X += delta2;
            }
            this.DraggingStartPosition = e.clientX;
            this.Draw(this.AttachedChart);
        };
        return FChartRangeControl;
    }(ChartGraphObject));
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
        FChartHelper.RoundFloatNumber = function (dValue, maxFloatDigits, intergerMajor) {
            if (intergerMajor === void 0) { intergerMajor = true; }
            var dResult = 0;
            if (dValue == 0) {
                return dValue;
            }
            var strValue = dValue.toString();
            var strInteger = "";
            var strFloat = "";
            var bFloatPart = false;
            for (var i = 0; i < strValue.length; i++) {
                var c = strValue.charAt(i);
                if (c == ".") {
                    bFloatPart = true;
                    continue;
                }
                if (bFloatPart) {
                    strFloat += c;
                }
                else {
                    strInteger += c;
                }
            }
            var intValue = parseInt(strInteger);
            var floatValue = parseFloat("0." + strFloat);
            if (floatValue == 0) {
                dResult = parseInt(strInteger);
                return dResult;
            }
            if (intValue != 0 && intergerMajor) {
                if (floatValue <= 0.5) {
                    floatValue = 0.5;
                }
                else {
                    floatValue = 0.75;
                }
                dResult = intValue + floatValue;
            }
            else {
                var n = 0;
                for (var i = strFloat.length - 1; i >= 0; i--) {
                    var c = strFloat.charAt(i);
                    if (c != "0") {
                        n = i + 1;
                        break;
                    }
                }
                if (n == 0) {
                    floatValue = 0;
                }
                else if (n < maxFloatDigits) {
                    floatValue = parseFloat("0." + strFloat);
                }
                else {
                    strFloat = strFloat.substr(0, maxFloatDigits);
                    var v1 = 1;
                    for (var i = 0; i < maxFloatDigits; i++) {
                        v1 *= 10;
                    }
                    var floatTemp = parseFloat("0." + strFloat);
                    floatValue = Math.round(floatTemp * v1 + 0.5) / v1;
                }
                dResult = intValue + floatValue;
            }
            return dResult;
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
        FChartHelper.SetSVGCircleAttributes = function (circle, id, cx, cy, r, fill, strokeWidth, stroke) {
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
            var _this = this;
            this.XAxes = new Array();
            this.YAxes = new Array();
            this.DataSeries = new Array();
            this.Legend = new FChartLegend();
            this.Zoom = 1.0;
            this.ZoomMode = ChartZoomMode.Center;
            this.ZoomDirection = ChartZoomDirection.Both;
            this.ShowZoomControl = false;
            this.ZoomControl = new FChartZoomControl();
            this.ShowRangeControl = false;
            this.RangeControl = new FChartRangeControl();
            this.AspectRatio = 1.0;
            this.KeepAspectRatio = false; // If false, ignore AspectRatio, If true, consider AspectRatio.
            this.m_chartParent = null;
            this.m_chartChild = null;
            this.EventListenerMap = new Array();
            this.SVGMeasure = null;
            this.m_arrSVG = new Array();
            this.XAxesSVGS = new Array();
            this.YAxesSVGS = new Array();
            this.PlotSVG = null;
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
            this.DEFAULT_XAXIS_LEFT_MARGIN = 20;
            this.DEFAULT_XAXIS_RIGHT_MARGIN = 20;
            this.m_dXAxisLeftMargin = this.DEFAULT_XAXIS_LEFT_MARGIN;
            this.m_dXAxisRightMargin = this.DEFAULT_XAXIS_RIGHT_MARGIN;
            this.SortedDataSeries = false;
            this.ShowScrollBar = false;
            this.GridX = new FChartGrid();
            this.GridY = new FChartGrid();
            this.Tooltip = new FChartTooltip();
            this.DrawDataPoint = function (data) { };
            this.PlotPosition = new FloatPoint(0, 0);
            this.ZoomFactor = 1.2;
            this.SCALE_ULIMIT = 0.002;
            this.SCALE_LLIMIT = 1;
            this.m_dPlotLeftRange = 0;
            this.m_dPlotRightRange = 1;
            this.m_coeff = new FChartCoeff();
            this.m_oldscale = 0.0;
            this.m_scale = 0.0; // 1 device unit = m_scale world unit.
            this.Container = null;
            this.ContainerWidth = 0;
            this.ContainerHeight = 0;
            this.IsWindowZooming = false;
            this.WindowDevicePixelRatio = 0;
            this.ChartMouseDown = function (e) {
                e.preventDefault();
                _this.OnMouseDown(e);
                if (_this.ShowZoomControl) {
                    _this.ZoomControl.OnMouseDown(e);
                }
                if (_this.ShowRangeControl) {
                    _this.RangeControl.OnMouseDown(e);
                }
            };
            this.ChartMouseMove = function (e) {
                e.preventDefault();
                _this.OnMouseMove(e);
                if (_this.ShowZoomControl) {
                    _this.ZoomControl.OnMouseMove(e);
                }
                if (_this.ShowRangeControl) {
                    _this.RangeControl.OnMouseMove(e);
                }
            };
            this.ChartMouseUp = function (e) {
                e.preventDefault();
                _this.OnMouseUp(e);
                if (_this.ShowZoomControl) {
                    _this.ZoomControl.OnMouseUp(e);
                }
                if (_this.ShowRangeControl) {
                    _this.RangeControl.OnMouseUp(e);
                }
            };
            this.ChartMouseOver = function (e) {
                e.preventDefault();
                _this.OnMouseOver(e);
            };
            this.ChartMouseOut = function (e) {
                e.preventDefault();
                _this.OnMouseOut(e);
            };
            this.ChartMouseWheel = function (e) {
                e.preventDefault();
                _this.OnMouseWheel(e);
            };
        }
        Object.defineProperty(FChart.prototype, "ParentChart", {
            get: function () {
                return this.m_chartParent;
            },
            set: function (value) {
                var _this = this;
                this.m_chartParent = value;
                if (!FChartHelper.ObjectIsNullOrEmpty(this.ParentChart)) {
                    this.ParentChart.XAxes = _.cloneDeep(this.XAxes);
                    this.ParentChart.YAxes = _.cloneDeep(this.YAxes);
                    this.ParentChart.DataSeries = _.cloneDeep(this.DataSeries);
                    for (var i = 0; i < this.ParentChart.XAxes.length; i++) {
                        this.ParentChart.XAxes[i].Show = false;
                    }
                    for (var i = 0; i < this.ParentChart.YAxes.length; i++) {
                        this.ParentChart.YAxes[i].Show = false;
                    }
                    this.ParentChart.ShowRangeControl = true;
                    this.ParentChart.ShowZoomControl = false;
                    this.ParentChart.Legend.Show = false;
                    if (!FChartHelper.ObjectIsNullOrEmpty(this.ParentChart)) {
                        this.ParentChart.EventListenerMap.push(new KeyValuePair(FChartEventTypes.RangeChanged, function (leftRange, rightRange) {
                            _this.MonitorRange(leftRange, rightRange);
                        }));
                    }
                    this.ParentChart.ChildChart = this;
                }
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(FChart.prototype, "ChildChart", {
            get: function () {
                return this.m_chartChild;
            },
            set: function (value) {
                this.m_chartChild = value;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(FChart.prototype, "XAxisLeftMargin", {
            get: function () {
                this.m_dXAxisLeftMargin = Math.abs(this.m_dXAxisLeftMargin);
                var max = this.PlotWidth * 0.1;
                this.m_dXAxisLeftMargin = this.m_dXAxisLeftMargin > max ? max : this.m_dXAxisLeftMargin;
                return this.m_dXAxisLeftMargin;
            },
            set: function (value) {
                this.m_dXAxisLeftMargin = value;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(FChart.prototype, "XAxisRightMargin", {
            get: function () {
                this.m_dXAxisRightMargin = Math.abs(this.m_dXAxisRightMargin);
                var max = this.PlotWidth * 0.1;
                this.m_dXAxisRightMargin = this.m_dXAxisRightMargin > max ? max : this.m_dXAxisRightMargin;
                return this.m_dXAxisRightMargin;
            },
            set: function (value) {
                this.m_dXAxisRightMargin = value;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(FChart.prototype, "MaxZoomLevel", {
            get: function () {
                return 1 / this.SCALE_ULIMIT;
            },
            set: function (value) {
                value = Math.abs(value);
                this.SCALE_ULIMIT = 1 / value;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(FChart.prototype, "ZoomLevel", {
            get: function () {
                return 1 / this.m_scale;
            },
            enumerable: true,
            configurable: true
        });
        FChart.prototype.GetPlotX = function () {
            return this.PlotPosition.X;
        };
        FChart.prototype.GetPlotY = function () {
            return this.PlotPosition.Y;
        };
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
        Object.defineProperty(FChart.prototype, "PlotLeftRange", {
            get: function () {
                return this.m_dPlotLeftRange;
            },
            set: function (value) {
                this.m_dPlotLeftRange = value;
                this.FireRangeChanged();
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(FChart.prototype, "PlotRightRange", {
            get: function () {
                return this.m_dPlotRightRange;
            },
            set: function (value) {
                this.m_dPlotRightRange = value;
                this.FireRangeChanged();
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
            var zoomFactor = this.ZoomFactor;
            this.m_oldscale = this.m_scale;
            this.m_scale /= zoomFactor;
            if (this.m_scale < this.SCALE_ULIMIT) {
                this.m_scale = this.SCALE_ULIMIT;
                zoomFactor = this.m_oldscale / this.SCALE_ULIMIT;
            }
            var scale = 0.5 - 0.5 / zoomFactor;
            this.m_xl += (this.m_xr - this.m_xl) * scale;
            this.m_yt -= (this.m_yt - this.m_yb) * scale;
            this.SetWindow();
            this.Draw(true);
            this.FireZoomChanged();
        };
        FChart.prototype.ZoomOut = function () {
            var zoomFactor = this.ZoomFactor;
            this.m_oldscale = this.m_scale;
            this.m_scale *= zoomFactor;
            if (this.m_scale > this.SCALE_LLIMIT) {
                this.m_scale = this.SCALE_LLIMIT;
                zoomFactor = this.SCALE_LLIMIT / this.m_oldscale;
            }
            var scale = 0.5 * (zoomFactor - 1);
            this.m_xl -= (this.m_xr - this.m_xl) * scale;
            this.m_yt += (this.m_yt - this.m_yb) * scale;
            this.SetWindow();
            this.Draw(true);
            this.FireZoomChanged();
        };
        FChart.prototype.ZoomToScale = function (dNewScale) {
            if (dNewScale < this.SCALE_ULIMIT) {
                dNewScale = this.SCALE_ULIMIT;
            }
            if (dNewScale > this.SCALE_LLIMIT) {
                dNewScale = this.SCALE_LLIMIT;
            }
            this.m_oldscale = this.m_scale;
            this.m_scale = dNewScale;
            if (dNewScale > this.m_oldscale) {
                var zoomFactor = dNewScale / this.m_oldscale;
                var scale = 0.5 * (zoomFactor - 1);
                this.m_xl -= (this.m_xr - this.m_xl) * scale;
                this.m_yt += (this.m_yt - this.m_yb) * scale;
            }
            else {
                var zoomFactor = this.m_oldscale / dNewScale;
                var scale = 0.5 - 0.5 / zoomFactor;
                this.m_xl += (this.m_xr - this.m_xl) * scale;
                this.m_yt -= (this.m_yt - this.m_yb) * scale;
            }
            this.SetWindow();
            this.Draw(true);
            this.FireZoomChanged();
        };
        FChart.prototype.ZoomToFull = function () {
            var minx = this.m_minx;
            var maxx = this.m_maxx;
            var miny = this.m_miny;
            var maxy = this.m_maxy;
            this.ZoomRegion(minx, maxy, maxx, miny);
        };
        FChart.prototype.ZoomRegion = function (xl, yt, xr, yb) {
            if (xr - xl < 1.0e-30) {
                return;
            }
            this.m_oldscale = this.m_scale;
            var xc = (xl + xr) * 0.5;
            var yc = (yt + yb) * 0.5;
            var ratio = (this.m_yt - this.m_yb) / (this.m_xr - this.m_xl);
            var regionRatio = (yt - yb) / (xr - xl);
            var newScale = 0;
            if (this.ZoomDirection == ChartZoomDirection.Both) {
                if (regionRatio > ratio) {
                    newScale = this.m_scale * (yt - yb) / (this.m_yt - this.m_yb);
                }
                else {
                    newScale = this.m_scale * (xr - xl) / (this.m_xr - this.m_xl);
                }
            }
            else if (this.ZoomDirection == ChartZoomDirection.XAxis) {
                newScale = this.m_scale * (xr - xl) / (this.m_xr - this.m_xl);
            }
            else if (this.ZoomDirection == ChartZoomDirection.YAxis) {
                newScale = this.m_scale * (yt - yb) / (this.m_yt - this.m_yb);
            }
            var dx = (this.m_xr - this.m_xl) * newScale / this.m_scale;
            var dy = (this.m_yt - this.m_yb) * newScale / this.m_scale;
            this.m_xl = (xc - dx * 0.5);
            this.m_xr = (xc + dx * 0.5);
            this.m_yb = (yc - dy * 0.5);
            this.m_yt = (yc + dy * 0.5);
            this.m_scale = newScale;
            this.SetWindow();
            this.Draw(true);
            this.FireZoomChanged();
        };
        FChart.prototype.MonitorRange = function (leftRange, rightRange) {
            var xl = this.m_uxl + (this.m_uxr - this.m_uxl) * leftRange;
            var xr = this.m_uxr - (this.m_uxr - this.m_uxl) * (1 - rightRange);
            this.ZoomRegion(xl, this.m_uyt, xr, this.m_uyb);
        };
        FChart.prototype.FireZoomChanged = function () {
            for (var i = 0; i < this.EventListenerMap.length; i++) {
                var kvp = this.EventListenerMap[i];
                if (kvp.Key == FChartEventTypes.ZoomChanged) {
                    if (!FChartHelper.ObjectIsNullOrEmpty(kvp.Value)) {
                        kvp.Value(this.ZoomLevel);
                    }
                }
            }
        };
        FChart.prototype.FireRangeChanged = function () {
            for (var i = 0; i < this.EventListenerMap.length; i++) {
                var kvp = this.EventListenerMap[i];
                if (kvp.Key == FChartEventTypes.RangeChanged) {
                    if (!FChartHelper.ObjectIsNullOrEmpty(kvp.Value)) {
                        kvp.Value(this.PlotLeftRange, this.PlotRightRange);
                    }
                }
            }
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
            this.MaxZoomLevel = Math.ceil(Math.abs(this.MaxZoomLevel));
            for (var i = 0; i < this.DataSeries.length; i++) {
                this.DataSeries[i].AttachedChart = this;
            }
            var rangeChangedHandler = null;
            for (var i = 0; i < this.EventListenerMap.length; i++) {
                var kvp = this.EventListenerMap[i];
                if (kvp.Key == FChartEventTypes.RangeChanged) {
                    rangeChangedHandler = kvp.Value;
                    break;
                }
            }
            this.EventListenerMap = new Array();
            if (!FChartHelper.ObjectIsNullOrEmpty(this.ChildChart) && !FChartHelper.ObjectIsNullOrEmpty(rangeChangedHandler)) {
                this.EventListenerMap.push(new KeyValuePair(FChartEventTypes.RangeChanged, rangeChangedHandler));
            }
            this.PrepareContainer();
            this.SetCoordinate();
            this.Draw();
            this.PlotLeftRange = 0;
            this.PlotRightRange = 1;
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
        FChart.prototype.Draw = function (zoom) {
            if (zoom === void 0) { zoom = false; }
            if (zoom) {
                for (var i = 0; i < this.XAxesSVGS.length; i++) {
                    this.XAxesSVGS[i].innerHTML = "";
                }
                for (var i = 0; i < this.YAxesSVGS.length; i++) {
                    this.YAxesSVGS[i].innerHTML = "";
                }
                this.PlotSVG.innerHTML = "";
                for (var i = 0; i < this.DataSeries.length; i++) {
                    this.DataSeries[i].SortDataByX();
                }
                this.DrawXAxes();
                this.DrawYAxes();
                this.DrawGridLine();
                this.DrawDataSeries();
            }
            else {
                this.DrawXAxes();
                this.DrawYAxes();
                this.DrawGridLine();
                this.DrawDataSeries();
                this.DrawLegend();
                this.DrawZoomControl();
                this.DrawRangeControl();
            }
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
            var nXAxesCount = this.GetVisibleXAxesCount();
            var nYAxesCount = this.GetVisibleYAxesCount();
            var svgPlot = this.GetPlotSVG();
            if (FChartHelper.ObjectIsNullOrEmpty(svgPlot)) {
                return;
            }
            var plotWidth = svgPlot.clientWidth;
            var plotHeight = svgPlot.clientHeight;
            if (this.GridX.Show && nXAxesCount <= 1) {
                var xaxis = this.GetUniqueXAxis();
                if (!FChartHelper.ObjectIsNullOrEmpty(xaxis)) {
                    for (var i = 0; i < xaxis.Value2Wc.length; i++) {
                        var obj = xaxis.Value2Wc[i];
                        var key = obj.Key;
                        var value = obj.Value;
                        var ix = this.XAxisLeftMargin + this.m_coeff.ToDvcX(value);
                        var y1 = 0;
                        var y2 = plotHeight;
                        var id = xaxis.ID + "-x-gridline-" + i.toString();
                        var line = this.CreateSVGLineElement();
                        FChartHelper.SetSVGLineAttributes(line, id, ix.toString(), y1.toString(), ix.toString(), y2.toString(), this.GridX.LineWidth.toString(), this.GridX.LineColor);
                        svgPlot.appendChild(line);
                    }
                }
            }
            for (var i = 0; i < this.GridX.Lines.length; i++) {
                var gridline = this.GridX.Lines[i];
                var xaxis = this.SearchXAxisByID(gridline.AxisID);
                if (FChartHelper.ObjectIsNullOrEmpty(xaxis)) {
                    continue;
                }
                var ix = this.XAxisLeftMargin + xaxis.GetCoordByValue(gridline.Value);
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
                var yaxis = this.GetUniqueYAxis();
                if (!FChartHelper.ObjectIsNullOrEmpty(yaxis)) {
                    for (var i = 0; i < yaxis.Value2Wc.length; i++) {
                        var obj = yaxis.Value2Wc[i];
                        var key = obj.Key;
                        var value = obj.Value;
                        var iy = this.m_coeff.ToDvcY(value);
                        var x1 = this.XAxisLeftMargin;
                        var x2 = plotWidth - this.XAxisRightMargin;
                        if (key == "top" || key == "bottom") {
                            continue;
                        }
                        var id = yaxis.ID + "-y-gridline-" + i.toString();
                        var line = this.CreateSVGLineElement();
                        FChartHelper.SetSVGLineAttributes(line, id, x1.toString(), iy.toString(), x2.toString(), iy.toString(), this.GridY.LineWidth.toString(), this.GridY.LineColor);
                        svgPlot.appendChild(line);
                    }
                }
            }
            for (var i = 0; i < this.GridY.Lines.length; i++) {
                var gridline = this.GridY.Lines[i];
                var yaxis = this.SearchYAxisByID(gridline.AxisID);
                if (FChartHelper.ObjectIsNullOrEmpty(yaxis)) {
                    continue;
                }
                var iy = yaxis.GetCoordByValue(gridline.Value);
                var x1 = this.XAxisLeftMargin;
                var x2 = plotWidth - this.XAxisRightMargin;
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
                lx += this.XAxisLeftMargin;
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
        FChart.prototype.DrawZoomControl = function () {
            if (this.ShowZoomControl) {
                this.ZoomControl.Draw(this);
            }
        };
        FChart.prototype.DrawRangeControl = function () {
            if (this.ShowRangeControl) {
                this.RangeControl.Draw(this);
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
        FChart.prototype.GetVisibleXAxesCount = function () {
            var nCount = 0;
            for (var i = 0; i < this.XAxes.length; i++) {
                var xaxis = this.XAxes[i];
                if (this.IsAxisVisible(xaxis)) {
                    nCount++;
                }
            }
            return nCount;
        };
        FChart.prototype.GetUniqueXAxis = function () {
            var nXCount = this.GetVisibleXAxesCount();
            if (nXCount != 1) {
                return null;
            }
            var xaxis = null;
            for (var i = 0; i < this.XAxes.length; i++) {
                if (this.IsAxisVisible(this.XAxes[i])) {
                    xaxis = this.XAxes[i];
                    break;
                }
            }
            return xaxis;
        };
        FChart.prototype.GetVisibleYAxesCount = function () {
            var nCount = 0;
            for (var i = 0; i < this.YAxes.length; i++) {
                var yaxis = this.YAxes[i];
                if (this.IsAxisVisible(yaxis)) {
                    nCount++;
                }
            }
            return nCount;
        };
        FChart.prototype.GetUniqueYAxis = function () {
            var nYCount = this.GetVisibleYAxesCount();
            if (nYCount != 1) {
                return null;
            }
            var yaxis = null;
            for (var i = 0; i < this.YAxes.length; i++) {
                if (this.IsAxisVisible(this.YAxes[i])) {
                    yaxis = this.YAxes[i];
                    break;
                }
            }
            return yaxis;
        };
        FChart.prototype.GetDisplayDataSeriesCount = function () {
            var nCount = 0;
            for (var i = 0; i < this.DataSeries.length; i++) {
                var serie = this.DataSeries[i];
                if (serie.Show) {
                    nCount++;
                }
            }
            return nCount;
        };
        FChart.prototype.GetSVGSVGElementByID = function (id, bNeedIdentify) {
            if (bNeedIdentify === void 0) { bNeedIdentify = false; }
            var svg = null;
            if (bNeedIdentify) {
                id = this.IdentifyID(id);
            }
            for (var i = 0; i < this.m_arrSVG.length; i++) {
                if (this.m_arrSVG[i].id == id) {
                    svg = this.m_arrSVG[i];
                    break;
                }
            }
            return svg;
        };
        FChart.prototype.GetPlotSVG = function () {
            return this.PlotSVG;
        };
        FChart.prototype.GetPlotWidth = function () {
            var svgPlot = this.GetPlotSVG();
            return svgPlot.clientWidth;
        };
        FChart.prototype.GetPlotHeight = function () {
            var svgPlot = this.GetPlotSVG();
            return svgPlot.clientHeight;
        };
        FChart.prototype.GetLegendSVG = function () {
            var legendID = "svg-legend";
            return this.GetSVGSVGElementByID(legendID, true);
        };
        FChart.prototype.GetYAxisAverageDiff = function (YAxisID) {
            var arrAverageDiff = [];
            for (var i = 0; i < this.DataSeries.length; i++) {
                var serie = this.DataSeries[i];
                if (serie.YAxisID == YAxisID) {
                    var dSum = 0;
                    serie.SortDataByY();
                    for (var j = 0; j < serie.Data.length; j++) {
                        if (j > 0) {
                            dSum += (serie.Data[j].Y - serie.Data[j - 1].Y);
                        }
                    }
                    var dAverage = dSum / (serie.Data.length - 1);
                    arrAverageDiff.push(dAverage);
                }
            }
            var dDiff = Number.MIN_VALUE;
            for (var i = 0; i < arrAverageDiff.length; i++) {
                if (arrAverageDiff[i] > dDiff) {
                    dDiff = arrAverageDiff[i];
                }
            }
            var yAxis = this.SearchYAxisByID(YAxisID);
            dDiff = FChartHelper.RoundFloatNumber(dDiff, yAxis.Tick.MaxFloatDigits);
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
                            if (xaxis.ValueType == XAxisType.Date) {
                                value1 = (new Date(x1)).valueOf();
                                value0 = (new Date(x0)).valueOf();
                            }
                            else if (xaxis.ValueType == XAxisType.Number) {
                                value1 = parseFloat(x1);
                                value0 = parseFloat(x0);
                            }
                            dSum += (value1 - value0);
                        }
                    }
                    var dAverage = dSum / (serie.Data.length - 1);
                    arrAverageDiff.push(dAverage);
                }
            }
            var dDiff = Number.MIN_VALUE;
            for (var i = 0; i < arrAverageDiff.length; i++) {
                if (arrAverageDiff[i] > dDiff) {
                    dDiff = arrAverageDiff[i];
                }
            }
            var xAxis = this.SearchXAxisByID(XAxisID);
            dDiff = FChartHelper.RoundFloatNumber(dDiff, xAxis.Tick.MaxFloatDigits);
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
            var nCount = this.GetVisibleXAxesCount();
            if (this.UseFixedXAxesHeight) {
                this.FixedXAxesHeight = Math.abs(this.FixedXAxesHeight);
                if (this.FixedXAxesLengthType == LengthType.Percentage) {
                    if (isNaN(this.FixedXAxesHeight) || this.FixedXAxesHeight <= 0 || this.FixedXAxesHeight > 1) {
                        this.FixedXAxesHeight = 0.5;
                    }
                    xAxesHeight = this.ChartHeight * this.FixedXAxesHeight;
                }
                else if (this.FixedXAxesLengthType == LengthType.Value) {
                    if (this.FixedXAxesHeight > this.ChartHeight) {
                        this.FixedXAxesHeight = this.ChartHeight;
                    }
                    xAxesHeight = this.FixedXAxesHeight;
                }
                if (nCount == 0) {
                    xAxesHeight = 0;
                }
                var availableSpace = this.ChartHeight - xAxesHeight;
                if (this.ShowZoomControl && availableSpace > 0) {
                    if (this.ZoomControl.Layout == ZoomControlLayout.Top || this.ZoomControl.Layout == ZoomControlLayout.Bottom) {
                        var hz = availableSpace * 0.2;
                        this.ZoomControl.CalculateShortSize(hz);
                    }
                }
            }
            else {
                var predictHeight = this.XAxisDefaultHeight * nCount;
                var maxHeight = 0;
                if (this.Legend.Layout == LegendLayout.Top || this.Legend.Layout == LegendLayout.Bottom) {
                    maxHeight = h * 0.3;
                    if (this.ShowZoomControl) {
                        if (this.ZoomControl.Layout == ZoomControlLayout.Top || this.ZoomControl.Layout == ZoomControlLayout.Bottom) {
                            var hz = h * 0.1;
                            this.ZoomControl.CalculateShortSize(hz);
                            maxHeight = h * 0.25 + (hz - this.ZoomControl.ShortSize);
                        }
                    }
                }
                else {
                    maxHeight = h * 0.5;
                    if (this.ShowZoomControl) {
                        if (this.ZoomControl.Layout == ZoomControlLayout.Top || this.ZoomControl.Layout == ZoomControlLayout.Bottom) {
                            var hz = h * 0.1;
                            this.ZoomControl.CalculateShortSize(hz);
                            maxHeight = h * 0.4 + (hz - this.ZoomControl.ShortSize);
                        }
                    }
                }
                if (this.ShowRangeControl) {
                    maxHeight -= this.RangeControl.HorizontalBarSize;
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
            var nCount = this.GetVisibleYAxesCount();
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
                if (nCount == 0) {
                    yAxesWidth = 0;
                }
                var availableSpace = this.ChartWidth - yAxesWidth;
                if (this.ShowZoomControl && availableSpace > 0) {
                    if (this.ZoomControl.Layout == ZoomControlLayout.Left || this.ZoomControl.Layout == ZoomControlLayout.Right) {
                        var wz = availableSpace * 0.2;
                        this.ZoomControl.CalculateShortSize(wz);
                    }
                }
            }
            else {
                var predictWidth = this.YAxisDefaultWidth * nCount;
                var maxWidth = 0;
                if (this.Legend.Layout == LegendLayout.Left || this.Legend.Layout == LegendLayout.Right) {
                    maxWidth = w * 0.3;
                    if (this.ShowZoomControl) {
                        if (this.ZoomControl.Layout == ZoomControlLayout.Left || this.ZoomControl.Layout == ZoomControlLayout.Right) {
                            var wz = w * 0.1;
                            this.ZoomControl.CalculateShortSize(wz);
                            maxWidth = w * 0.25 + (wz - this.ZoomControl.ShortSize);
                        }
                    }
                }
                else {
                    maxWidth = w * 0.5;
                    if (this.ShowZoomControl) {
                        if (this.ZoomControl.Layout == ZoomControlLayout.Left || this.ZoomControl.Layout == ZoomControlLayout.Right) {
                            var wz = w * 0.1;
                            this.ZoomControl.CalculateShortSize(wz);
                            maxWidth = w * 0.4 + (wz - this.ZoomControl.ShortSize);
                        }
                    }
                }
                if (this.ShowRangeControl) {
                    maxWidth -= this.RangeControl.VerticalBarSize;
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
            var nCountY = this.GetVisibleYAxesCount();
            var yw = (yAxesWidth == 0 || nCountY == 0) ? 0 : yAxesWidth / nCountY;
            for (var i = 0; i < this.YAxes.length; i++) {
                if (this.YAxes[i].Show) {
                    this.YAxes[i].Width = yw;
                    this.YAxes[i].Tick.Width = yw * 0.2;
                }
            }
            var xAxesHeight = this.CalculateXAxesHeight(this.ChartHeight);
            var nCountX = this.GetVisibleXAxesCount();
            var xh = (xAxesHeight == 0 || nCountX == 0) ? 0 : xAxesHeight / nCountX;
            for (var i = 0; i < this.XAxes.length; i++) {
                if (this.XAxes[i].Show) {
                    this.XAxes[i].Height = xh;
                    this.XAxes[i].Tick.Height = xh * 0.2;
                }
            }
            var zoomControlWidth = 0;
            var zoomControlHeight = 0;
            if (this.ShowZoomControl) {
                if (this.ZoomControl.Layout == ZoomControlLayout.Left || this.ZoomControl.Layout == ZoomControlLayout.Right) {
                    zoomControlWidth = this.ZoomControl.ShortSize;
                }
                if (this.ZoomControl.Layout == ZoomControlLayout.Top || this.ZoomControl.Layout == ZoomControlLayout.Bottom) {
                    zoomControlHeight = this.ZoomControl.ShortSize;
                }
            }
            var rangeControlWidth = this.ShowRangeControl ? this.RangeControl.VerticalBarSize : 0;
            var rangeControlHeight = this.ShowRangeControl ? this.RangeControl.HorizontalBarSize : 0;
            if (this.Legend.Layout == LegendLayout.Left || this.Legend.Layout == LegendLayout.Right) {
                var w = this.ChartWidth - yAxesWidth - zoomControlWidth - rangeControlWidth;
                var h = this.ChartHeight - xAxesHeight - zoomControlHeight - rangeControlHeight;
                if (this.Legend.Show) {
                    this.Legend.PredictWidth(this, w * 0.3);
                    this.Legend.PredictHeight(this, h);
                    this.Legend.CalculateSize(this);
                    this.PlotWidth = this.ChartWidth - yAxesWidth - this.Legend.Width - zoomControlWidth - rangeControlWidth;
                    this.PlotHeight = this.ChartHeight - xAxesHeight - zoomControlHeight - rangeControlHeight;
                }
                else {
                    this.PlotWidth = w;
                    this.PlotHeight = h;
                }
            }
            else if (this.Legend.Layout == LegendLayout.InnerLeft || this.Legend.Layout == LegendLayout.InnerRight) {
                this.PlotWidth = this.ChartWidth - yAxesWidth - zoomControlWidth - rangeControlWidth;
                this.PlotHeight = this.ChartHeight - xAxesHeight - zoomControlHeight - rangeControlHeight;
                if (this.Legend.Show) {
                    this.Legend.PredictWidth(this, this.PlotWidth * 0.3);
                    this.Legend.PredictHeight(this, this.PlotHeight);
                    this.Legend.CalculateSize(this);
                }
            }
            else if (this.Legend.Layout == LegendLayout.Top || this.Legend.Layout == LegendLayout.Bottom) {
                var w = this.ChartWidth - yAxesWidth - zoomControlWidth - rangeControlWidth;
                var h = this.ChartHeight - xAxesHeight - zoomControlHeight - rangeControlHeight;
                if (this.Legend.Show) {
                    this.Legend.PredictWidth(this, w);
                    this.Legend.PredictHeight(this, h * 0.3);
                    this.Legend.CalculateSize(this);
                    this.PlotWidth = this.ChartWidth - yAxesWidth - zoomControlWidth - rangeControlWidth;
                    this.PlotHeight = this.ChartHeight - xAxesHeight - this.Legend.Height - zoomControlHeight - rangeControlHeight;
                }
                else {
                    this.PlotWidth = w;
                    this.PlotHeight = h;
                }
            }
            else if (this.Legend.Layout == LegendLayout.InnerTop || this.Legend.Layout == LegendLayout.InnerBottom) {
                this.PlotWidth = this.ChartWidth - yAxesWidth - zoomControlWidth - rangeControlWidth;
                this.PlotHeight = this.ChartHeight - xAxesHeight - zoomControlHeight - rangeControlHeight;
                if (this.Legend.Show) {
                    this.Legend.PredictWidth(this, this.PlotWidth);
                    this.Legend.PredictHeight(this, this.PlotHeight * 0.3);
                    this.Legend.CalculateSize(this);
                }
            }
            if (this.ShowZoomControl) {
                if (this.ZoomControl.Layout == ZoomControlLayout.Left || this.ZoomControl.Layout == ZoomControlLayout.Right) {
                    this.ZoomControl.CalculateLongSize(this.PlotHeight);
                }
                else if (this.ZoomControl.Layout == ZoomControlLayout.Top || this.ZoomControl.Layout == ZoomControlLayout.Bottom) {
                    this.ZoomControl.CalculateLongSize(this.PlotWidth);
                }
            }
            this.m_width = this.PlotWidth;
            this.m_height = this.PlotHeight;
            if (this.XAxisMargin > 0) {
                this.m_width -= this.XAxisMargin;
            }
            this.SetWindow();
        };
        FChart.prototype.CalculatePartsPosition = function () {
            var nDisplayXAxesCount = this.GetVisibleXAxesCount();
            var xaxis = this.GetUniqueXAxis();
            var lyaxes = new Array();
            var ryaxes = new Array();
            for (var i = 0; i < this.YAxes.length; i++) {
                var yaxis = this.YAxes[i];
                if (!this.IsAxisVisible(yaxis)) {
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
            var zoomControlWidth = 0;
            var zoomControlHeight = 0;
            if (this.ShowZoomControl) {
                if (this.ZoomControl.Layout == ZoomControlLayout.Left || this.ZoomControl.Layout == ZoomControlLayout.Right) {
                    zoomControlWidth = this.ZoomControl.ShortSize;
                }
                if (this.ZoomControl.Layout == ZoomControlLayout.Top || this.ZoomControl.Layout == ZoomControlLayout.Bottom) {
                    zoomControlHeight = this.ZoomControl.ShortSize;
                }
            }
            var rangeControlWidth = this.ShowRangeControl ? this.RangeControl.VerticalBarSize : 0;
            var rangeControlHeight = this.ShowRangeControl ? this.RangeControl.HorizontalBarSize : 0;
            if (this.ShowZoomControl && this.ZoomControl.Layout == ZoomControlLayout.Left) {
                this.ZoomControl.X = xStart;
                xStart += zoomControlWidth;
            }
            if (this.ShowZoomControl && this.ZoomControl.Layout == ZoomControlLayout.Top) {
                this.ZoomControl.Y = yStart;
                yStart += zoomControlHeight;
            }
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
            this.RangeControl.TopHorizontalBarPosition.Y = yStart;
            this.RangeControl.LeftVerticalBarPosition.Y = yStart;
            this.RangeControl.RightVerticalBarPosition.Y = yStart;
            yStart += rangeControlHeight / 2;
            for (var i = 0; i < lyaxes.length; i++) {
                lyaxes[i].X = xStart;
                lyaxes[i].Y = yStart;
                xStart += lyaxes[i].Width;
            }
            this.RangeControl.LeftVerticalBarPosition.X = xStart;
            this.RangeControl.TopHorizontalBarPosition.X = xStart;
            this.RangeControl.BottomHorizontalBarPosition.X = xStart;
            xStart += rangeControlWidth / 2;
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
            this.PlotPosition.X = xStart;
            xStart += this.PlotWidth;
            this.RangeControl.RightVerticalBarPosition.X = xStart;
            xStart += rangeControlWidth / 2;
            for (var i = 0; i < ryaxes.length; i++) {
                ryaxes[i].X = xStart;
                ryaxes[i].Y = yStart;
                xStart += ryaxes[i].Width;
            }
            if (this.Legend.Show && this.Legend.Layout == LegendLayout.Right) {
                this.Legend.X = xStart;
                this.Legend.Y = yStart + this.m_height / 2 - this.Legend.Height / 2;
                xStart += this.Legend.Width;
            }
            this.PlotPosition.Y = yStart;
            yStart += this.PlotHeight;
            this.RangeControl.BottomHorizontalBarPosition.Y = yStart;
            yStart += rangeControlHeight / 2;
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
                    yStart = this.Legend.Y + this.Legend.Height;
                }
                else {
                    this.Legend.Y = yStart;
                    yStart += this.Legend.Height;
                }
            }
            if (this.ShowZoomControl && this.ZoomControl.Layout == ZoomControlLayout.Right) {
                this.ZoomControl.X = xStart;
            }
            if (this.ShowZoomControl && this.ZoomControl.Layout == ZoomControlLayout.Bottom) {
                this.ZoomControl.Y = yStart;
            }
            if (this.ShowZoomControl) {
                if (this.ZoomControl.Layout == ZoomControlLayout.Left || this.ZoomControl.Layout == ZoomControlLayout.Right) {
                    if (this.ZoomControl.VerticalAlignment == VerticalAlignment.Top) {
                        this.ZoomControl.Y = this.PlotPosition.Y;
                    }
                    else if (this.ZoomControl.VerticalAlignment == VerticalAlignment.Center) {
                        this.ZoomControl.Y = this.PlotPosition.Y + this.PlotHeight / 2 - this.ZoomControl.LongSize / 2;
                    }
                    else if (this.ZoomControl.VerticalAlignment == VerticalAlignment.Bottom) {
                        this.ZoomControl.Y = this.PlotPosition.Y + this.PlotHeight - this.ZoomControl.LongSize;
                    }
                }
                if (this.ZoomControl.Layout == ZoomControlLayout.Top || this.ZoomControl.Layout == ZoomControlLayout.Bottom) {
                    if (this.ZoomControl.HorizontalAlignment == HorizontalAlignment.Left) {
                        this.ZoomControl.X = this.PlotPosition.X;
                    }
                    else if (this.ZoomControl.HorizontalAlignment == HorizontalAlignment.Center) {
                        this.ZoomControl.X = this.PlotPosition.X + this.PlotWidth / 2 - this.ZoomControl.LongSize / 2;
                    }
                    else if (this.ZoomControl.HorizontalAlignment == HorizontalAlignment.Right) {
                        this.ZoomControl.X = this.PlotPosition.X + this.PlotWidth - this.ZoomControl.LongSize;
                    }
                }
            }
        };
        FChart.prototype.CalculateYAxisTickCoordinate = function () {
            for (var i = 0; i < this.YAxes.length; i++) {
                var minY = Number.MAX_VALUE;
                var maxY = Number.MIN_VALUE;
                var yaxis = this.YAxes[i];
                if (!this.AxisHasDataSerie(yaxis)) {
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
                yaxis.Tick.Scale = obj.Scale;
                if (yaxis.BottomEnvelopeLine.Show) {
                    var y = this.m_coeff.ToWcY(this.m_height);
                    yaxis.Value2Wc.push({ Key: "bottom", Value: y });
                }
                yaxis.Value2Wc = new Array();
                var y1 = reserveTopSpace;
                for (var p = nYTicksCount; p >= 0; p--) {
                    if (p % iMultiple != 0) {
                        continue;
                    }
                    var value = p * smallScale;
                    var yd = y1 + ((nYTicksCount - p) * smallScale) * yPixelsPerValue;
                    var y = this.m_coeff.ToWcY(yd);
                    var strLabel = value.toString();
                    yaxis.Value2Wc.push({ Key: strLabel, Value: y });
                }
                if (yaxis.TopEnvelopeLine.Show) {
                    var y = this.m_coeff.ToWcY(0);
                    yaxis.Value2Wc.push({ Key: "top", Value: y });
                }
                yaxis.PlotY = reserveBottomSpace;
            }
        };
        FChart.prototype.CalculateXAxisTickCoordinate = function () {
            for (var i = 0; i < this.XAxes.length; i++) {
                var xaxis = this.XAxes[i];
                if (!this.AxisHasDataSerie(xaxis)) {
                    continue;
                }
                var minX = void 0;
                var maxX = void 0;
                if (xaxis.ValueType == XAxisType.Date) {
                    minX = new Date("2050-01-01 00:00:00").valueOf();
                    maxX = new Date("1975-01-01 00:00:00").valueOf();
                }
                else if (xaxis.ValueType == XAxisType.Number) {
                    minX = Number.MAX_VALUE;
                    maxX = Number.MIN_VALUE;
                }
                for (var j = 0; j < this.DataSeries.length; j++) {
                    var serie = this.DataSeries[j];
                    if (serie.XAxisID != xaxis.ID) {
                        continue;
                    }
                    serie.SortDataByX();
                    for (var k = 0; k < serie.Data.length; k++) {
                        var xValue = serie.Data[k].X;
                        var value = void 0;
                        if (xaxis.ValueType == XAxisType.Date) {
                            value = new Date(xValue).valueOf();
                        }
                        else if (xaxis.ValueType == XAxisType.Number) {
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
                xaxis.Value2Wc = new Array();
                if (xaxis.ValueType == XAxisType.Number || (xaxis.ValueType == XAxisType.Date && xaxis.TickSelection == XAxisDateTickSelection.DateAsNumber)) {
                    maxAverageDiff = this.GetXAxisAverageDiff(xaxis.ID);
                    var obj = this.GetXAxisTickCount(xaxis.ID, maxAverageDiff, maxX, minX, this.m_width);
                    xPixelsPerValue = this.m_width / (obj.Ticks * obj.Scale);
                    startValue = obj.StartValue;
                    xaxis.PixelsPerValue = xPixelsPerValue;
                    xaxis.Tick.Scale = obj.Scale;
                    nTicksCount = obj.Ticks;
                    iType = 0;
                }
                else if (xaxis.ValueType == XAxisType.Date) {
                    var obj = this.GetXAxisTickCount2(xaxis.ID, maxX, minX, this.m_width);
                    xPixelsPerValue = this.m_width / (obj.Ticks.length);
                    startValue = obj.StartValue;
                    xaxis.PixelsPerValue = xPixelsPerValue;
                    nTicksCount = obj.Ticks.length;
                    obj2 = obj;
                    iType = 1;
                }
                if (iType == 0) {
                    for (var p = 0; p <= nTicksCount; p++) {
                        var dValue = p * xaxis.Tick.Scale;
                        var xd = dValue * xaxis.PixelsPerValue;
                        var x = this.m_coeff.ToWcX(xd);
                        var strLabel = dValue.toString();
                        xaxis.Value2Wc.push({ Key: strLabel, Value: x });
                    }
                }
                else if (iType == 1) {
                    for (var p = 0; p < obj2.Ticks.length; p++) {
                        var dValue = obj2.Ticks[p].Key - obj2.StartValue;
                        var xd = dValue * xPixelsPerValue;
                        var x = this.m_coeff.ToWcX(xd);
                        xaxis.Value2Wc.push({ Key: dValue.toString(), Value: x });
                    }
                }
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
                    if (xaxis.ValueType == XAxisType.Date) {
                        xValue = (new Date(dp.X)).valueOf();
                    }
                    else if (xaxis.ValueType == XAxisType.Number) {
                        xValue = parseFloat(dp.X);
                    }
                    yValue = dp.Y;
                    var fx = (xValue - xaxis.StartValue) * xaxis.PixelsPerValue;
                    var fy = this.m_height - (yValue - yaxis.StartValue) * yaxis.PixelsPerValue;
                    dp.fx = this.m_coeff.ToWcX(fx);
                    dp.fy = this.m_coeff.ToWcY(fy);
                }
            }
        };
        FChart.prototype.AxisHasDataSerie = function (axis) {
            if (FChartHelper.ObjectIsNullOrEmpty(axis)) {
                return false;
            }
            var bHas = false;
            for (var i = 0; i < this.DataSeries.length; i++) {
                var serie = this.DataSeries[i];
                if (!serie.Show) {
                    continue;
                }
                bHas = axis.Type == ChartAxisType.XAxis ? (serie.XAxisID == axis.ID) : (serie.YAxisID == axis.ID);
                if (bHas) {
                    break;
                }
            }
            return bHas;
        };
        FChart.prototype.IsAxisVisible = function (axis) {
            if (FChartHelper.ObjectIsNullOrEmpty(axis)) {
                return false;
            }
            return (axis.Show && this.AxisHasDataSerie(axis));
        };
        FChart.prototype.AppendSVGToContainer = function (svg) {
            if (FChartHelper.ObjectIsNullOrEmpty(svg)) {
                return;
            }
            this.Container.appendChild(svg);
        };
        FChart.prototype.RemoveSVGFromContainer = function (svg) {
            if (FChartHelper.ObjectIsNullOrEmpty(svg)) {
                return;
            }
            this.Container.removeChild(svg);
            svg = null;
        };
        FChart.prototype.CreateSVG = function (id, position, left, top, width, height, bNeedIdentifyID) {
            if (bNeedIdentifyID === void 0) { bNeedIdentifyID = true; }
            var svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
            id = bNeedIdentifyID ? this.IdentifyID(id) : id;
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
                    this.YAxesSVGS.push(svgY);
                }
            }
            var svgPlot = this.CreateSVG("svg-plot", "absolute", this.PlotPosition.X.toString(), this.PlotPosition.Y.toString(), this.PlotWidth.toString(), this.PlotHeight.toString());
            divContainer.appendChild(svgPlot);
            this.m_arrSVG.push(svgPlot);
            this.PlotSVG = svgPlot;
            var nXCount = this.GetVisibleXAxesCount();
            if (nXCount == 1) {
                var xaxis = this.GetUniqueXAxis();
                var svgTop = this.CreateSVG("svg-xaxis-top", "absolute", this.PlotPosition.X.toString(), "0", this.PlotWidth.toString(), (xaxis.Height / 2).toString());
                divContainer.appendChild(svgTop);
                this.m_arrSVG.push(svgTop);
                this.XAxesSVGS.push(svgTop);
                var svgBottom = this.CreateSVG("svg-xaxis-bottom", "absolute", this.PlotPosition.X.toString(), (this.PlotPosition.Y + this.m_height).toString(), this.PlotWidth.toString(), (xaxis.Height / 2).toString());
                svgBottom.style.setProperty("background-color", "none");
                divContainer.appendChild(svgBottom);
                this.m_arrSVG.push(svgBottom);
                this.XAxesSVGS.push(svgBottom);
            }
            else {
                for (var i = 0; i < this.XAxes.length; i++) {
                    var xaxis = this.XAxes[i];
                    if (!xaxis.Show) {
                        continue;
                    }
                    var svgX = this.CreateSVG("svg-xaxis-" + xaxis.ID, "absolute", xaxis.X.toString(), xaxis.Y.toString(), this.PlotWidth.toString(), xaxis.Height.toString());
                    divContainer.appendChild(svgX);
                    this.m_arrSVG.push(svgX);
                    this.XAxesSVGS.push(svgX);
                }
            }
            if (this.Legend.Show) {
                var svgLegend = this.CreateSVG("svg-legend", "absolute", this.Legend.X.toString(), this.Legend.Y.toString(), this.Legend.Width.toString(), this.Legend.Height.toString());
                divContainer.appendChild(svgLegend);
                this.m_arrSVG.push(svgLegend);
            }
            if (this.ShowZoomControl) {
                var wz = 0;
                var hz = 0;
                if (this.ZoomControl.Layout == ZoomControlLayout.Left || this.ZoomControl.Layout == ZoomControlLayout.Right) {
                    wz = this.ZoomControl.ShortSize;
                    hz = this.ZoomControl.LongSize;
                }
                else if (this.ZoomControl.Layout == ZoomControlLayout.Top || this.ZoomControl.Layout == ZoomControlLayout.Bottom) {
                    wz = this.ZoomControl.LongSize;
                    hz = this.ZoomControl.ShortSize;
                }
                var svgZoomControl = this.CreateSVG("svg-zoomcontrol", "absolute", this.ZoomControl.X.toString(), this.ZoomControl.Y.toString(), wz.toString(), hz.toString());
                divContainer.appendChild(svgZoomControl);
                this.m_arrSVG.push(svgZoomControl);
                svgZoomControl.style.setProperty("background-color", "lightgray");
            }
            if (this.ShowRangeControl) {
                var x = this.RangeControl.LeftVerticalBarPosition.X;
                var y = this.RangeControl.LeftVerticalBarPosition.Y;
                var wr = this.RangeControl.RightVerticalBarPosition.X + this.RangeControl.VerticalBarSize / 2 - x;
                var hr = this.RangeControl.BottomHorizontalBarPosition.Y + this.RangeControl.HorizontalBarSize / 2 - y;
                var svgRangeControl = this.CreateSVG("svg-rangecontrol", "absolute", x.toString(), y.toString(), wr.toString(), hr.toString());
                divContainer.appendChild(svgRangeControl);
                this.m_arrSVG.push(svgRangeControl);
                svgRangeControl.style.setProperty("opacity", "0.5");
                svgRangeControl.style.setProperty("background-color", "transparent");
            }
        };
        FChart.prototype.SetWindow = function () {
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
                this.m_uxl = this.m_xl;
                this.m_uxr = this.m_xr;
                this.m_uyb = this.m_yb;
                this.m_uyt = this.m_yt;
            }
            this.CalcCoefficient();
        };
        FChart.prototype.CalcCoefficient = function () {
            if (this.ZoomDirection == ChartZoomDirection.XAxis) {
                this.m_coeff.SetCoeff(this.m_width / (this.m_xr - this.m_xl), this.m_width * this.m_xl / (this.m_xr - this.m_xl), this.m_height / (this.m_uyb - this.m_uyt), this.m_height * this.m_uyt / (this.m_uyb - this.m_uyt));
            }
            else if (this.ZoomDirection == ChartZoomDirection.YAxis) {
                this.m_coeff.SetCoeff(this.m_width / (this.m_uxr - this.m_uxl), this.m_width * this.m_uxl / (this.m_uxr - this.m_uxl), this.m_height / (this.m_yb - this.m_yt), this.m_height * this.m_yt / (this.m_yb - this.m_yt));
            }
            else if (this.ZoomDirection == ChartZoomDirection.Both) {
                this.m_coeff.SetCoeff(this.m_width / (this.m_xr - this.m_xl), this.m_width * this.m_xl / (this.m_xr - this.m_xl), this.m_height / (this.m_yb - this.m_yt), this.m_height * this.m_yt / (this.m_yb - this.m_yt));
            }
        };
        FChart.prototype.PrepareContainer = function () {
            var _this = this;
            var divContainer = document.getElementById(this.BindTo);
            if (FChartHelper.ObjectIsNullOrEmpty(divContainer)) {
                return;
            }
            this.Container = divContainer;
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
            this.SVGMeasure = this.CreateSVG("svg-measure", "absolute", "0", "0", divContainer.clientWidth.toString(), divContainer.clientHeight.toString());
            this.SVGMeasure.setAttribute("opacity", "0");
            divContainer.appendChild(this.SVGMeasure);
            if (!FChartHelper.ObjectIsNullOrEmpty(this.ZoomControl)) {
                this.ZoomControl.AttachedChart = this;
            }
            if (!FChartHelper.ObjectIsNullOrEmpty(this.RangeControl)) {
                this.RangeControl.AttachedChart = this;
            }
        };
        FChart.prototype.ResetVariablesDefaultValue = function () {
            this.m_dXAxisLeftMargin = this.DEFAULT_XAXIS_LEFT_MARGIN;
            this.m_dXAxisRightMargin = this.DEFAULT_XAXIS_RIGHT_MARGIN;
            this.PlotLeftRange = 0;
            this.PlotRightRange = 1;
        };
        FChart.prototype.SetCoordinate = function () {
            var _this = this;
            var divContainer = document.getElementById(this.BindTo);
            if (FChartHelper.ObjectIsNullOrEmpty(divContainer)) {
                return;
            }
            for (var i = 0; i < this.m_arrSVG.length; i++) {
                divContainer.removeChild(this.m_arrSVG[i]);
            }
            this.m_arrSVG = [];
            this.ResetVariablesDefaultValue();
            this.ContainerWidth = divContainer.clientWidth;
            this.ContainerHeight = divContainer.clientHeight;
            if (!this.ValidateContainerSize()) {
                return;
            }
            this.CalculateChartSize();
            this.CalculatePartsSize();
            this.CalculatePartsPosition();
            this.CalculateYAxisTickCoordinate();
            this.CalculateXAxisTickCoordinate();
            this.CalculateDataPointCoordinate();
            this.GenerateSVGParts();
            this.PlotSVG.ondblclick = function (e) {
                if (_this.ShowZoomControl) {
                    _this.ZoomToFull();
                }
            };
            for (var i = 0; i < this.m_arrSVG.length; i++) {
                this.m_arrSVG[i].onzoom = function (e) { e.cancelBubble = true; alert("svg zoom"); };
            }
            document.removeEventListener("mousedown", this.ChartMouseDown, false);
            document.addEventListener("mousedown", this.ChartMouseDown, false);
            document.removeEventListener("mousemove", this.ChartMouseMove, false);
            document.addEventListener("mousemove", this.ChartMouseMove, false);
            document.removeEventListener("mouseup", this.ChartMouseUp, false);
            document.addEventListener("mouseup", this.ChartMouseUp, false);
            document.removeEventListener("mouseover", this.ChartMouseOver, false);
            document.addEventListener("mouseover", this.ChartMouseOver, false);
            document.removeEventListener("mouseout", this.ChartMouseOut, false);
            document.addEventListener("mouseout", this.ChartMouseOut, false);
            document.removeEventListener("mousewheel", this.ChartMouseWheel, false);
            document.addEventListener("mousewheel", this.ChartMouseWheel, false);
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
            this.m_oldscale = this.m_scale;
            this.m_scale = this.SCALE_LLIMIT;
            this.SetCoordinate();
            this.Draw();
            this.ZoomToScale(this.m_oldscale);
        };
        // Mouse events
        FChart.prototype.OnMouseOver = function (e) {
        };
        FChart.prototype.OnMouseOut = function (e) {
        };
        FChart.prototype.OnMouseDown = function (e) {
        };
        FChart.prototype.OnMouseMove = function (e) {
        };
        FChart.prototype.OnMouseUp = function (e) {
        };
        FChart.prototype.OnMouseWheel = function (e) {
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
        FChart.prototype.CreateArc = function (x1, y1, x2, y2, rx, ry, xaxisrotation, largeArc, sweep, ox, oy, strokeWidth, strokeColor, fill, fillColor) {
            if (strokeWidth === void 0) { strokeWidth = 1; }
            if (strokeColor === void 0) { strokeColor = "black"; }
            if (fill === void 0) { fill = false; }
            if (fillColor === void 0) { fillColor = "black"; }
            var svgArc = this.CreateSVGPathElement();
            var d = "";
            var line = "L " + ox.toString() + " " + oy.toString() + " " + "L " + x1.toString() + " " + y1.toString() + " Z";
            d = "M " + x1 + " " + y1 + " A " + rx + " " + ry + " " + xaxisrotation + " " + largeArc + " " + sweep + " " + x2 + " " + y2 + " " + line;
            svgArc.setAttribute("d", d);
            if (!fill) {
                svgArc.setAttribute("fill", "none");
            }
            else {
                svgArc.setAttribute("fill", fillColor);
            }
            svgArc.setAttribute("stroke-width", strokeWidth.toString());
            svgArc.setAttribute("stroke", strokeColor);
            return svgArc;
        };
        FChart.prototype.IdentifyID = function (id) {
            var retID;
            retID = this.BindTo + "-" + id;
            return retID;
        };
        return FChart;
    }());
    exports.FChart = FChart;
});
//} 
//# sourceMappingURL=FChartX.js.map