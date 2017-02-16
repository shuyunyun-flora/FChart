/// <reference path="..\typings\jquery.d.ts"/>
/// <refreence path="..\typings\lodash.d.ts"/>
import _ = require("lodash");

//export module FChartX {
    export enum LineCapStyle {
        Butt,
        Round,
        Square
    }

    export enum LineJoinStyle {
        Mitre,
        Round,
        Bevel
    }

    export enum FChartType {
        Line
    }

    export enum FDataSerieDrawType {
        StraightLine,
        CurvedLine,
        Point,
        Bar
    }

    export enum XAxisTitleLayout {
        TopLeft,
        TopMiddle,
        TopRight,

        BottomLeft,
        BottomMiddle,
        BottomRight
    }

    export enum YAxisTitleLayout {
        Top,
        Center,
        Bottom
    }

    export enum TickLabelLayout {
        CenterOfTick,
        CenterOfTickSpan
    }

    export enum LegendLayout {
        Left,
        Right,
        Top,
        Bottom,

        InnerLeft,
        InnerRight,
        InnerTop,
        InnerBottom
    }

    export enum Orientation {
        Horizontal,
        Vertical
    }

    export enum ChartZoomMode {
        MousePosition,
        Center
    }

    export enum ChartZoomDirection {
        XAxis,
        YAxis,
        Both
    }

    enum ChartAxisType {
        XAxis,
        YAxis
    }

    export enum FChartEventTypes {
        ZoomChanged,
        RangeChanged
    }

    class ChartGraphObject {
        public AttachedChart: FChart = null;
        public Key: string = "";
        public LineWidth: number = 1;
        public LineColor: string = "black";
        public LineCap: LineCapStyle = LineCapStyle.Round;
        public LineDashArray: number[] = new Array<number>();
        public LineDashOffset: number = 0;
        public LineJoin: LineJoinStyle = LineJoinStyle.Mitre;
        public Fill: boolean = false;
        public BackgroundColor: string = "transparent";

        public HoverBackgroundColor: string = "transparent";
        public HoverLineColor: string = "black";
        public HoverLineWidth: number = 1;

        public Label: string = "";
        public FontSize: number = 11;
        public FontColor: string = "blue";
        public FontFamily: string = "Arimo";
        public FontStyle: string = "Normal";
        public FontWeight: string = "Normal";
        public Rotation: number = 0;

        public Opacity: number = 1.0;

        public Show: boolean = true;

        public X: number = 0;
        public Y: number = 0;

        public Draw(chart: FChart): void {
        }
    }

    class FChartAxis extends ChartGraphObject {
        public ID: string = "";
        public Order: number = 0;
        public DataKey: string = "";
        public Tick: FChartTick = new FChartTick();
        public Value2Wc: Array<KeyValuePair<string, number>> = new Array();
        public PixelsPerValue: number = 0;
        public StartValue: number = 0;
        public Type: ChartAxisType = ChartAxisType.XAxis;

        public GetValueByKey(key: string): number {
            let value: number = NaN;

            for (let i = 0; i < this.Value2Wc.length; i++) {
                let kvp: KeyValuePair<string, number> = this.Value2Wc[i];
                if (kvp.Key == key) {
                    value = kvp.Value;
                    break;
                }
            }

            return value;
        }

        public GetCoordByValue(value: number): number {
            let coord: number = NaN;

            coord = (value - this.StartValue) * this.PixelsPerValue;

            return coord;
        }

        public get Zoomable() {
            return true;
        }

        public Draw(chart: FChart): void {
        }
    }

    enum MarkAttachTo {
        Plot,
        Legend
    }

    class ChartMark extends ChartGraphObject {
        public Width: number = 6;
        public Height: number = 6;
        public AttatchTo: MarkAttachTo = MarkAttachTo.Plot;

        public Draw(chart: FChart): void {
            
        }
    }

    interface ITooltipFormat {
        Title: any;
        Value: any;
    }

    class FChartTooltipFormat implements ITooltipFormat {
        public Title: any = function (d: any) { };
        public Value: any = function (d: any) { };
    }

    class FChartTooltip {
        public Format: FChartTooltipFormat;
        public Show: boolean;
        public Grouping: boolean;
        public Intersect: boolean;  // If true, the tooltip shows when the mouse position intersects with an element. 
        // If false, the tooltip shows no matter where the mouse position in the chart.
    }

    export enum GridLineTextPosition {
        Start,
        Middle,
        End
    }

    export enum EnvelopeLineGradient {
        One,
        OneHalf,
        OneFourth
    }

    export enum YAxisLayout {
        Left,
        Right
    }

    export enum LengthType {
        Percentage,
        Value
    }

    export enum XAxisType {
        Date,
        Number,
        Category
    }

    enum ValueType {
        Number,
        DateString,
        String
    }

    export enum XAxisDateTickSelection {
        //    Year,
        //    Month,
        Day,
        Hour,
        Miniute,
        Second,
        Millisecond,
        DateAsNumber
    }

    export class FChartGridLine extends ChartGraphObject {
        public Value: number;
        public Text: string;
        public TextPosition: GridLineTextPosition;
        public AxisID: string;
    }

    export class FChartEnvelopeLine extends ChartGraphObject {
        public Gradient: EnvelopeLineGradient = EnvelopeLineGradient.OneHalf;
    }

    export class FChartGrid extends ChartGraphObject {
        public Lines: FChartGridLine[] = new Array<FChartGridLine>();
    }

    export class FChartXAxisTitle extends ChartGraphObject {
        public Label: string;
        public Rotation: number;
        public Layout: XAxisTitleLayout = XAxisTitleLayout.TopMiddle;

        public Draw(chart: FChart): void {
        }
    }

    export class FChartYAxisTitle extends ChartGraphObject {
        public Label: string;
        public Rotation: number;
        public Layout: YAxisTitleLayout = YAxisTitleLayout.Center;

        public Draw(chart: FChart): void {
        }
    }

    export class FChartTick extends ChartGraphObject {
        public IsXAxisTick: boolean = false;
        public MinIntervalSpace: number = 20;
        public LabelLayout: TickLabelLayout = TickLabelLayout.CenterOfTick;
        public LabelFormat: string = "";
        public Rotation: number = 0;
        public Width: number = 0;
        public Height: number = 0;
        public MaxFloatDigits: number = 2;
        public Scale: number = 0;

        public Draw(chart: FChart): void { };
    }

    class DateTicksInfo {
        public StartValue: number;
        public Ticks: Array<KeyValuePair<number, string>>;
    }

    class NumberTicksInfo {
        public StartValue: number = 0;
        public Ticks: number = 0;
        public Scale: number = 0;
        public TickIntervalSpace: number = 0;

        constructor(nTicks: number, startValue: number, scale: number, tickIntervalSpace: number) {
            this.Ticks = nTicks;
            this.StartValue = startValue;
            this.Scale = scale;
            this.TickIntervalSpace = tickIntervalSpace;
        }
    }

    export class FChartXAxis extends FChartAxis {
        public Height: number = 0;
        public ValueType: XAxisType = XAxisType.Date;
        public TickSelection: XAxisDateTickSelection = XAxisDateTickSelection.Day;
        public CullingTick: boolean = false;
        public CullingTicksCount: number = 0;
        public Title: FChartXAxisTitle = null;

        constructor() {
            super();
            this.Type = ChartAxisType.XAxis;
        }

        public get Zoomable() {
            if (!FChartHelper.ObjectIsNullOrEmpty(this.AttachedChart)) {
                return false;
            }

            return (this.AttachedChart.ZoomDirection != ChartZoomDirection.YAxis);
        }

        public Draw(chart: FChart): void {
            // Draw axis line and tick.
            let xAxisLine: SVGLineElement = chart.CreateSVGLineElement();
            let x = 0;
            let y = this.LineWidth / 2;
            let svg: SVGSVGElement = chart.GetSVGSVGElementByID("svg-xaxis-" + this.ID, true);
            if (chart.GetVisibleXAxesCount() == 1) {
                svg = chart.GetSVGSVGElementByID("svg-xaxis-bottom", true);
            }
            FChartHelper.SetSVGLineAttributes(xAxisLine, "xaxis-line" + this.ID, x.toString(), y.toString(), svg.clientWidth.toString(), y.toString(), this.LineWidth.toString(), this.LineColor);
            svg.appendChild(xAxisLine);

            let arrXTickLabels: Array<SVGTextElement> = new Array<SVGTextElement>();
            let minXTickLabelFontSize: number = 2000;
            for (let i = 0; i < this.Value2Wc.length; i++) {
                let obj = this.Value2Wc[i];
                let value = obj.Key;
                let wcx = obj.Value;
                let ix = chart.XAxisLeftMargin + chart.m_coeff.ToDvcX(wcx);

                let tickLine: SVGLineElement = chart.CreateSVGLineElement();
                let tickLineId = "xaxis-tick-" + this.ID + "-" + ix.toString();
                let fifthOfHalfH = this.Height / 2 * 0.2;
                let tickLineH = fifthOfHalfH;
                let x1 = ix;
                let x2 = ix;
                let y1 = 0;
                let y2 = y1 + tickLineH;
                FChartHelper.SetSVGLineAttributes(tickLine, tickLineId, x1.toString(), y1.toString(), x2.toString(), y2.toString(), this.Tick.LineWidth.toString(), this.Tick.LineColor);
                svg.appendChild(tickLine);

                let tickLabel: SVGTextElement = chart.CreateSVGTextElement();
                let tickLabelId = "xaxis-tick-label-" + this.ID + "-" + value;
                let lx = 0;
                let ly = 0;
                let oneTickSpan = this.Tick.Scale * this.PixelsPerValue;
                let xTickLabelMaxWidth = oneTickSpan * 0.8;
                let xTickLabelMinWidth = oneTickSpan * 0.15;
                let xTickLabelFontSize = this.Tick.FontSize;
                FChartHelper.SetSVGTextAttributes(tickLabel, tickLabelId, lx.toString(), ly.toString(), value, "middle", this.Tick.FontFamily, this.Tick.FontStyle, this.Tick.FontSize.toString(), this.Tick.FontWeight);
                let textInfo: KeyValuePair<number, number> = chart.GetAppropriateFontSizeForText(tickLabel, xTickLabelFontSize, xTickLabelMaxWidth);
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

            for (let i = 0; i < arrXTickLabels.length; i++) {
                arrXTickLabels[i].setAttribute("font-size", minXTickLabelFontSize.toString());
            }

            // Draw Title
            this.DrawTitle(chart);
        }

        private DrawTitle(chart: FChart): void {
            if (FChartHelper.ObjectIsNullOrEmpty(this.Title)) {
                return;
            }

            let nXCount = chart.GetVisibleXAxesCount();
            let svg: SVGSVGElement = null;
            let yStart: number = 0;
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

            let dLabelFontSize = Math.abs(this.Title.FontSize);
            let x: number = svg.clientWidth / 2;
            let y: number = 0;
            if (nXCount == 1) {
                y = yStart + dLabelFontSize / 2 - dLabelFontSize * 0.3 / 2;
            }
            else {
                y = yStart + this.Height / 4.0 * 2 + dLabelFontSize / 2 - dLabelFontSize * 0.3 / 2;
            }
            let text: SVGTextElement = chart.CreateSVGTextElement();
            FChartHelper.SetSVGTextAttributes(text, "XAxis-" + this.ID + "-XLabel", x.toString(), y.toString(), this.Title.Label, "middle", this.Title.FontFamily, this.Title.FontStyle, this.Title.FontSize.toString(), this.Title.FontWeight);
            svg.appendChild(text);
        }
    }

    export class FChartYAxis extends FChartAxis {
        public Width: number = 0;
        public Title: FChartYAxisTitle = new FChartYAxisTitle();
        public Layout: YAxisLayout = YAxisLayout.Left;
        public TopEnvelopeLine: FChartEnvelopeLine = new FChartEnvelopeLine();
        public BottomEnvelopeLine: FChartEnvelopeLine = new FChartEnvelopeLine();

        private MaxTickWidth = 15;
        private TickWidth: number = 0;
        private MarginBetweenTickAndLabel: number = 0;
        private MaxTickLabelWidth: number = 0;

        private m_dPlotY: number = 0;
        public get PlotY() {
            return this.m_dPlotY * (this.Zoomable ? this.AttachedChart.ZoomLevel : 1);
        }

        public set PlotY(value: number) {
            this.m_dPlotY = value;
        }

        constructor() {
            super();
            this.Type = ChartAxisType.YAxis;
        }

        public get Zoomable() {
            if (!FChartHelper.ObjectIsNullOrEmpty(this.AttachedChart)) {
                return false;
            }

            return (this.AttachedChart.ZoomDirection != ChartZoomDirection.XAxis);
        }

        public Draw(chart: FChart): void {
            // Draw axis line and tick.
            let svg = chart.GetSVGSVGElementByID("svg-yaxis-" + this.ID, true);
            let regionWidth = svg.clientWidth;
            let regionHeight = svg.clientHeight;
            let x:number = regionWidth - this.LineWidth / 2;
            let y:number = 0;
            let yAxisLine: SVGLineElement = chart.CreateSVGLineElement();

            if (this.Layout == YAxisLayout.Right) {
                x = this.LineWidth / 2;
            }
            FChartHelper.SetSVGLineAttributes(yAxisLine, "yaxis-line" + this.ID, x.toString(), y.toString(), x.toString(), regionHeight.toString(), this.LineWidth.toString(), this.LineColor);
            svg.appendChild(yAxisLine);

            let oneFifth = this.Width / 2 * 0.2;
            let tickLineW = oneFifth;
            if (tickLineW > this.MaxTickWidth) {
                tickLineW = this.MaxTickWidth;
            }
            this.TickWidth = tickLineW;
            this.MarginBetweenTickAndLabel = Math.min(oneFifth, this.MaxTickWidth);
            let minYTickLabelFontSize: number = 2000;
            let arrYTickLabels: Array<SVGTextElement> = new Array<SVGTextElement>();
            for (let i = 0; i < this.Value2Wc.length; i++) {
                let obj = this.Value2Wc[i];
                let value = obj.Key;
                let wcy = obj.Value;
                let iy = chart.m_coeff.ToDvcY(wcy);

                let tickLine: SVGLineElement = chart.CreateSVGLineElement();
                let tickLineId = "yaxis-tick-" + this.ID + "-" + iy.toString();

                let x1:number = regionWidth - tickLineW;
                let x2: number = regionWidth;
                if (this.Layout == YAxisLayout.Right) {
                    x1 = 0;
                    x2 = tickLineW;
                }

                let y1:number = iy;
                if (i == 0) {
                    y1 -= this.Tick.LineWidth / 2;
                }
                else if (i == this.Value2Wc.length - 1) {
                    y1 += this.Tick.LineWidth / 2;
                }
                let y2 = y1;
  
                FChartHelper.SetSVGLineAttributes(tickLine, tickLineId, x1.toString(), y1.toString(), x2.toString(), y2.toString(), this.Tick.LineWidth.toString(), this.Tick.LineColor);
                svg.appendChild(tickLine);

                if (value == "top" || value == "bottom") {
                    let envelopeLine: SVGLineElement = chart.CreateSVGLineElement();
                    let svgPlot = chart.GetPlotSVG();
                    let ex1 = 0;
                    let ey1 = 0;
                    let ex2 = svgPlot.clientWidth;
                    let ey2 = 0;
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

                let tickLabel: SVGTextElement = chart.CreateSVGTextElement();
                let tickLabelId = "yaxis-tick-label-" + this.ID + "-" + value;
                let lx = 0;
                let ly = 0;
                let oneTickSpan = this.Tick.Scale * this.PixelsPerValue;
                let yTickLabelMaxWidth = regionWidth * 0.5;
                let yTickLabelMinWidth = regionWidth * 0.15;
                let yTickLabelFontSize = this.Tick.FontSize;
                FChartHelper.SetSVGTextAttributes(tickLabel, tickLabelId, lx.toString(), ly.toString(), value, "middle", this.Tick.FontFamily, this.Tick.FontStyle, this.Tick.FontSize.toString(), this.Tick.FontWeight);
                let textInfo: KeyValuePair<number, number> = chart.GetAppropriateFontSizeForText(tickLabel, yTickLabelFontSize, yTickLabelMaxWidth);
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

            for (let i = 0; i < arrYTickLabels.length; i++) {
                arrYTickLabels[i].setAttribute("font-size", minYTickLabelFontSize.toString());
            }

            // Draw Title
            this.DrawTitle(chart);
        }

        private DrawTitle(chart: FChart): void {
            if (FChartHelper.ObjectIsNullOrEmpty(this.Title)) {
                return;
            }

            let svg: SVGSVGElement = chart.GetSVGSVGElementByID("svg-yaxis-" + this.ID, true);
            if (FChartHelper.ObjectIsNullOrEmpty(svg)) {
                return;
            }

            let regionWidth: number = svg.clientWidth;
            let regionHeight: number = svg.clientHeight;

            let dLabelFontSize = Math.abs(this.Title.FontSize);
            let x:number = regionWidth - this.TickWidth - this.MaxTickLabelWidth - this.MarginBetweenTickAndLabel * 2;
            if (this.Layout == YAxisLayout.Right) {
                x = this.TickWidth + this.MaxTickLabelWidth + this.MarginBetweenTickAndLabel * 2;
            }
            let y:number = regionHeight / 2.0 + dLabelFontSize / 2 - dLabelFontSize * 0.3 / 2;
            let text: SVGTextElement = chart.CreateSVGTextElement();
            let transform: string = "rotate(270," + x.toString() + "," + y.toString() + ")";
            FChartHelper.SetSVGTextAttributes(text, "yaxis-title-" + this.ID, x.toString(), y.toString(), this.Title.Label, "middle", this.Title.FontFamily, this.Title.FontStyle, this.Title.FontSize.toString(), this.Title.FontWeight, this.FontColor, transform);
            svg.appendChild(text);
        }
    }

    export class DataPoint {
        public X: string = null;
        public Y: number;
        public fx: number;
        public fy: number;
        public Show: boolean = true;
    }

    class KeyValuePair<T1, T2> {
        public Key: T1;
        public Value: T2;

        public constructor(key: T1, value: T2) {
            this.Key = key;
            this.Value = value;
        }
    }

    class Size {
        public Width: number = 0;
        public Height: number = 0;

        constructor(w: number, h: number) {
            this.Width = w;
            this.Height = h;
        }
    }

    export class FChartDataSerie extends ChartGraphObject {
        public Data: DataPoint[] = new Array<DataPoint>();
        public Mark: ChartMark = new ChartMark();
        public Label: string = "";
        public XAxisID: string = "";
        public YAxisID: string = "";
        public ZOrder: number = 0;
        public DrawType: FDataSerieDrawType = FDataSerieDrawType.StraightLine;

        public Draw(chart: FChart): void {
            let svgPlot: SVGSVGElement = chart.GetPlotSVG();
            if (FChartHelper.ObjectIsNullOrEmpty(svgPlot)) {
                return;
            }

            let serieLine: SVGPolylineElement = chart.CreateSVGPolylineElement();
            let id: string = "serie-polyline-" + this.XAxisID + "-" + this.YAxisID + "-" + this.ZOrder.toString();
            id = chart.IdentifyID(id);
            serieLine.setAttribute("id", id);
            if (this.Fill) {
            }
            else {
                serieLine.setAttribute("fill", "none");
            }

            let yaxis: FChartYAxis = chart.SearchYAxisByID(this.YAxisID);
            for (let i = 0; i < this.Data.length; i++) {
                let data: DataPoint = this.Data[i];
                let x: number = data.fx;
                let y: number = data.fy;
                let ix: number = chart.m_coeff.ToDvcX(x);
                let iy: number = chart.m_coeff.ToDvcY(y);
                let pt: SVGPoint = svgPlot.createSVGPoint();
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
            for (let i = 0; i < this.Data.length; i++) {
                let data: DataPoint = this.Data[i];
                let ix: number = chart.XAxisLeftMargin + chart.m_coeff.ToDvcX(data.fx);
                let iy: number = chart.m_coeff.ToDvcY(data.fy);
                if (data.Show) {
                    // Draw mark.
                    this.Mark.Key = this.XAxisID + "-" + this.YAxisID + "-" + this.ZOrder.toString() + "-Mark-" + i.toString();
                    this.Mark.X = ix;
                    this.Mark.Y = iy - yaxis.PlotY;
                    this.Mark.Draw(chart);
                }
            }
        }

        public SortDataByX() {
            let xaxis: FChartXAxis = this.AttachedChart.SearchXAxisByID(this.XAxisID);

            this.Data.sort((a, b) => {
                let value1: number;
                let value2: number;
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
        }

        public SortDataByY() {
            this.Data.sort((a, b) => {
                return FChartHelper.NumberCompare(a.Y, b.Y);
            });
        }
    }

    export class CircleMark extends ChartMark {
        public Radius: number = 3;
        public HoverRadius: number = 5;

        constructor(r: number) {
            super();
            this.Radius = r;
        }

        public Draw(chart: FChart): void {
            if (!this.Show) {
                return;
            }

            let circle: SVGCircleElement = chart.CreateSVGCircleElement();
            FChartHelper.SetSVGCircleAttributes(circle, this.Key, this.X.toString(), this.Y.toString(), this.Radius.toString(), this.BackgroundColor, this.LineWidth.toString(), this.LineColor);

            if (this.AttatchTo == MarkAttachTo.Plot) {
                let svgPlot: SVGSVGElement = chart.GetPlotSVG();
                if (FChartHelper.ObjectIsNullOrEmpty(svgPlot)) {
                    return;
                }
                svgPlot.appendChild(circle);
            }
            else {
                let svgLegend: SVGSVGElement = chart.GetLegendSVG();
                if (FChartHelper.ObjectIsNullOrEmpty(svgLegend)) {
                    return;
                }
                svgLegend.appendChild(circle);
            }
        }
    }

    export class TriangleMark extends ChartMark {
        public Draw(chart: FChart): void {
            if (!this.Show) {
                return;
            }

            let triangle: SVGPathElement = chart.CreateSVGPathElement();
            let ox1: number = 0;
            let oy1: number = this.Height / 2;
            let ox2: number = this.Width / 2;
            let oy2: number = -this.Height / 2;
            let ox3: number = -this.Width / 2;
            let oy3: number = -this.Height / 2;

            let r: number = FChartHelper.DegToRad(this.Rotation);
            let points: Array<FloatPoint> = new Array<FloatPoint>();
            points.push(new FloatPoint(ox1, oy1));
            points.push(new FloatPoint(ox2, oy2));
            points.push(new FloatPoint(ox3, oy3));
            FChartHelper.RotatePositionPoints(points, r, this.X, this.Y);

            let d: string = "M" + points[0].X.toString() + " " + points[0].Y.toString() + " " +
                "L" + points[1].X.toString() + " " + points[1].Y.toString() + " " +
                "L" + points[2].X.toString() + " " + points[2].Y.toString() + " Z";

            triangle.setAttribute("d", d);
            triangle.setAttribute("stroke-width", this.LineWidth.toString());
            triangle.setAttribute("stroke", this.LineColor);
            this.Fill ? triangle.setAttribute("fill", this.BackgroundColor) : triangle.setAttribute("fill", "none");

            if (this.AttatchTo == MarkAttachTo.Plot) {
                let svgPlot: SVGSVGElement = chart.GetPlotSVG();
                svgPlot.appendChild(triangle);
            }
            else {
                let svgLegend: SVGSVGElement = chart.GetLegendSVG();
                if (FChartHelper.ObjectIsNullOrEmpty(svgLegend)) {
                    return;
                }
                svgLegend.appendChild(triangle);
            }
        }
    }

    export class SquareMark extends ChartMark {
        public Draw(chart: FChart): void {
            if (!this.Show) {
                return;
            }

            let rect: SVGPathElement = chart.CreateSVGPathElement();
            let ox1: number = -this.Width / 2;
            let oy1: number = this.Height / 2;
            let ox2: number = this.Width / 2;
            let oy2: number = this.Height / 2;
            let ox3: number = this.Width / 2;
            let oy3: number = -this.Height / 2;
            let ox4: number = -this.Width / 2;
            let oy4: number = -this.Height / 2;

            let r: number = FChartHelper.DegToRad(this.Rotation);
            let points: Array<FloatPoint> = new Array<FloatPoint>();
            points.push(new FloatPoint(ox1, oy1));
            points.push(new FloatPoint(ox2, oy2));
            points.push(new FloatPoint(ox3, oy3));
            points.push(new FloatPoint(ox4, oy4));
            FChartHelper.RotatePositionPoints(points, r, this.X, this.Y);

            let d: string = "M" + points[0].X.toString() + " " + points[0].Y.toString() + " " +
                "L" + points[1].X.toString() + " " + points[1].Y.toString() + " " +
                "L" + points[2].X.toString() + " " + points[2].Y.toString() + " " +
                "L" + points[3].X.toString() + " " + points[3].Y.toString() + " " + "Z";

            rect.setAttribute("d", d);
            rect.setAttribute("stroke-width", this.LineWidth.toString());
            rect.setAttribute("stroke", this.LineColor);
            this.Fill ? rect.setAttribute("fill", this.BackgroundColor) : rect.setAttribute("fill", "none");

            if (this.AttatchTo == MarkAttachTo.Plot) {
                let svgPlot: SVGSVGElement = chart.GetPlotSVG();
                svgPlot.appendChild(rect);
            }
            else {
                let svgLegend: SVGSVGElement = chart.GetLegendSVG();
                if (FChartHelper.ObjectIsNullOrEmpty(svgLegend)) {
                    return;
                }
                svgLegend.appendChild(rect);
            }
        }
    }

    export class DiamondMark extends ChartMark {
        public Draw(chart: FChart): void {
            if (!this.Show) {
                return;
            }

            let diamond: SVGPathElement = chart.CreateSVGPathElement();
            let ox1: number = -this.Width / 2;
            let oy1: number = 0;
            let ox2: number = 0;
            let oy2: number = this.Height / 2;
            let ox3: number = this.Width / 2;
            let oy3: number = 0;
            let ox4: number = 0;
            let oy4: number = -this.Height / 2;

            let r: number = FChartHelper.DegToRad(this.Rotation);
            let points: Array<FloatPoint> = new Array<FloatPoint>();
            points.push(new FloatPoint(ox1, oy1));
            points.push(new FloatPoint(ox2, oy2));
            points.push(new FloatPoint(ox3, oy3));
            points.push(new FloatPoint(ox4, oy4));
            FChartHelper.RotatePositionPoints(points, r, this.X, this.Y);

            let d: string = "M" + points[0].X.toString() + " " + points[0].Y.toString() + " " +
                "L" + points[1].X.toString() + " " + points[1].Y.toString() + " " +
                "L" + points[2].X.toString() + " " + points[2].Y.toString() + " " +
                "L" + points[3].X.toString() + " " + points[3].Y.toString() + " " + "Z";

            diamond.setAttribute("d", d);
            diamond.setAttribute("stroke-width", this.LineWidth.toString());
            diamond.setAttribute("stroke", this.LineColor);
            this.Fill ? diamond.setAttribute("fill", this.BackgroundColor) : diamond.setAttribute("fill", "none");

            if (this.AttatchTo == MarkAttachTo.Plot) {
                let svgPlot: SVGSVGElement = chart.GetPlotSVG();
                svgPlot.appendChild(diamond);
            }
            else {
                let svgLegend: SVGSVGElement = chart.GetLegendSVG();
                if (FChartHelper.ObjectIsNullOrEmpty(svgLegend)) {
                    return;
                }
                svgLegend.appendChild(diamond);
            }
        }
    }

    export class CrossLineMark extends ChartMark {
        public Draw(chart: FChart): void {
            if (!this.Show) {
                return;
            }

            let ox1: number = -this.Width / 2;
            let oy1: number = this.Height / 2;
            let ox2: number = this.Width / 2;
            let oy2: number = this.Height / 2;
            let ox3: number = this.Width / 2;
            let oy3: number = -this.Height / 2;
            let ox4: number = -this.Width / 2;
            let oy4: number = -this.Height / 2;

            let r: number = FChartHelper.DegToRad(this.Rotation);
            let points: Array<FloatPoint> = new Array<FloatPoint>();
            points.push(new FloatPoint(ox1, oy1));
            points.push(new FloatPoint(ox2, oy2));
            points.push(new FloatPoint(ox3, oy3));
            points.push(new FloatPoint(ox4, oy4));
            FChartHelper.RotatePositionPoints(points, r, this.X, this.Y);

            let line1: SVGLineElement = chart.CreateSVGLineElement();
            let id1 = this.Key + "-line-" + "1";
            FChartHelper.SetSVGLineAttributes(line1, id1, points[0].X.toString(), points[0].Y.toString(), points[2].X.toString(), points[2].Y.toString(), this.LineWidth.toString(), this.LineColor);

            let line2: SVGLineElement = chart.CreateSVGLineElement();
            let id2 = this.Key + "-line-" + "2";
            FChartHelper.SetSVGLineAttributes(line2, id2, points[1].X.toString(), points[1].Y.toString(), points[3].X.toString(), points[3].Y.toString(), this.LineWidth.toString(), this.LineColor);

            if (this.AttatchTo == MarkAttachTo.Plot) {
                let svgPlot: SVGSVGElement = chart.GetPlotSVG();
                svgPlot.appendChild(line1);
                svgPlot.appendChild(line2);
            }
            else {
                let svgLegend: SVGSVGElement = chart.GetLegendSVG();
                if (FChartHelper.ObjectIsNullOrEmpty(svgLegend)) {
                    return;
                }
                svgLegend.appendChild(line1);
                svgLegend.appendChild(line2);
            }
        }
    }

    export class FChartLegend extends ChartGraphObject {
        public LabelFormat: string;
        public Layout: LegendLayout = LegendLayout.Right;
        public ContentOrientation: Orientation = Orientation.Vertical;
        public Width: number = 0;
        public Height: number = 0;
        private MinWidth: number = 20;
        private MinHeight: number = 10;
        public ShapeWidth: number = 0;
        public LabelWidth: number = 0;
        public LabelHeight: number = 0;

        private FontSizeDraw: number = 0;
        private FontSizeW: number = 0;
        private FontSizeH: number = 0;
        private LargeTextW: string = "";
        private LargeTextH: string = "";
        private  LEGEND_ITEM_MAX_WIDTH: number = 200;
        private  LEGEND_ITEM_MAX_HEIGHT: number = 50;
        public MAX_SHAPE_WIDTH: number = 100;
        private HorizontalMeasured: boolean = false;
        private VerticalMeasured: boolean = false;

        public PredictWidth(chart: FChart, w: number) {
            let dLegendItemWidth: number = Math.min(w, this.LEGEND_ITEM_MAX_WIDTH);
            if (this.ContentOrientation == Orientation.Horizontal) {
                for (let i = 0; i < chart.DataSeries.length; i++) {
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
            let maxTextWidth: number = this.Width - this.MAX_SHAPE_WIDTH;
            let biggestTextWidth: number = 0;
            this.FontSizeW = this.FontSize * 1.5;

            for (let i = 0; i < chart.DataSeries.length; i++) {
                let serie: FChartDataSerie = chart.DataSeries[i];
                if (!serie.Show) {
                    continue;
                }

                let lbl: string = serie.Label;
                let text: SVGTextElement = chart.CreateSVGTextElement();
                let lx: number = 0;
                let ly: number = 0;
                let textID: string = "Legend-item-" + i.toString() + "-" + lbl;
                FChartHelper.SetSVGTextAttributes(text, textID, lx.toString(), ly.toString(), lbl, "start", this.FontFamily, this.FontStyle, this.FontSizeW.toString(), this.FontWeight);
                let textInfo: KeyValuePair<number, number> = chart.GetAppropriateFontSizeForText(text, this.FontSizeW, maxTextWidth);
                if (textInfo.Value > biggestTextWidth) {
                    biggestTextWidth = textInfo.Value;
                    this.LargeTextW = lbl;
                }
                this.FontSizeW = this.FontSizeW > textInfo.Key ? textInfo.Key : this.FontSizeW;
            }

            this.LabelWidth = biggestTextWidth;
            this.Width = this.ShapeWidth + this.LabelWidth;
            this.HorizontalMeasured = true;
        }

        public PredictHeight(chart: FChart, h: number) {
            let dLegendItemHeight: number = Math.min(h, this.LEGEND_ITEM_MAX_HEIGHT);
            if (this.ContentOrientation == Orientation.Horizontal) {

                this.Height = dLegendItemHeight;
            }
            else if (this.ContentOrientation == Orientation.Vertical) {
                for (let i = 0; i < chart.DataSeries.length; i++) {
                    if (chart.DataSeries[i].Show) {
                        this.Height += dLegendItemHeight;
                    }
                }
            }

            // Measure.
            let maxTextHeight: number = dLegendItemHeight;
            let biggestTextHeight: number = 0;
            this.FontSizeH = this.FontSize * 1.5;

            for (let i = 0; i < chart.DataSeries.length; i++) {
                let serie: FChartDataSerie = chart.DataSeries[i];
                if (!serie.Show) {
                    continue;
                }

                let lbl: string = serie.Label;
                let text: SVGTextElement = chart.CreateSVGTextElement();
                let lx: number = 0;
                let ly: number = 0;
                let textID: string = "Legend-item-" + i.toString() + "-" + lbl;
                FChartHelper.SetSVGTextAttributes(text, textID, lx.toString(), ly.toString(), lbl, "start", this.FontFamily, this.FontStyle, this.FontSizeH.toString(), this.FontWeight);
                let textInfo: KeyValuePair<number, number> = chart.GetAppropriateFontSizeForText(text, this.FontSizeW, maxTextHeight, false);
                if (textInfo.Value > biggestTextHeight) {
                    biggestTextHeight = textInfo.Value;
                    this.LargeTextH = lbl;
                }
                this.FontSizeH = this.FontSizeH > textInfo.Key ? textInfo.Key : this.FontSizeH;
            }

            this.LabelHeight = biggestTextHeight;
            this.Height = this.LabelHeight;
            this.VerticalMeasured = true;
        }

        public CalculateSize(chart: FChart) {
            let sz: Size = new Size(0, 0);

            if (!this.HorizontalMeasured || !this.VerticalMeasured) {
                return;
            }

            
            let testFontSize: number = this.FontSizeW > this.FontSizeH ? this.FontSizeH : this.FontSizeW;
            let textSize1: Size = chart.GetTextSize(this.LargeTextW, testFontSize.toString(), this.FontFamily, this.FontStyle, this.FontWeight);
            let textSize2: Size = chart.GetTextSize(this.LargeTextH, testFontSize.toString(), this.FontFamily, this.FontStyle, this.FontWeight);
            this.LabelWidth = textSize1.Width;
            this.LabelHeight = textSize2.Height;

            this.Width = 0;
            let dLegendItemWidth: number = this.ShapeWidth + this.LabelWidth;
            if (this.ContentOrientation == Orientation.Horizontal) {
                for (let i = 0; i < chart.DataSeries.length; i++) {
                    if (chart.DataSeries[i].Show) {
                        this.Width += dLegendItemWidth;
                    }
                }
            }
            else if (this.ContentOrientation == Orientation.Vertical) {
                this.Width = dLegendItemWidth;
            }

            this.Height = 0;
            let dLegendItemHeight: number = this.LabelHeight;
            if (this.ContentOrientation == Orientation.Horizontal) {
                this.Height = dLegendItemHeight;
            }
            else if (this.ContentOrientation == Orientation.Vertical) {
                for (let i = 0; i < chart.DataSeries.length; i++) {
                    if (chart.DataSeries[i].Show) {
                        this.Height += dLegendItemHeight;
                    }
                }
            }

            this.FontSizeDraw = this.FontSize;
            if (this.FontSize > testFontSize) {
                this.FontSizeDraw = testFontSize;
            }
        }

        public Draw(chart: FChart): void {
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

            let svgLegend: SVGSVGElement = chart.GetSVGSVGElementByID("svg-legend", true);
            if (FChartHelper.ObjectIsNullOrEmpty(svgLegend)) {
                return;
            }
            let svgPlot: SVGSVGElement = chart.GetPlotSVG();
            let plotWidth = svgPlot.clientWidth;
            let plotHeight = svgPlot.clientHeight;

            // Draw.
            let rectOutline: SVGRectElement = chart.CreateSVGRectElement();
            FChartHelper.SetSVGRectAttributes(rectOutline, "legend-outline", "0", "0", this.Width.toString(), this.Height.toString(), "1", "blue");
            svgLegend.appendChild(rectOutline);

            let sixthOfH = this.LabelHeight / 6;
            let fifthOfW = this.ShapeWidth / 5;

            let yStart: number = 0;
            let xStart: number = 0;
            for (let i = 0; i < chart.DataSeries.length; i++) {
                let serie: FChartDataSerie = chart.DataSeries[i];
                if (!serie.Show) {
                    continue;
                }

                let line: SVGLineElement = chart.CreateSVGLineElement();
                let x1: number = xStart + fifthOfW;
                let y1: number = yStart + sixthOfH * 3;
                let x2: number = xStart + fifthOfW * 4;
                let y2: number = yStart + sixthOfH * 3;
                let lineID: string = "legend-item-line-" + serie.XAxisID + "-" + serie.YAxisID;
                let lineThick = sixthOfH * 2;
                FChartHelper.SetSVGLineAttributes(line, lineID, x1.toString(), y1.toString(), x2.toString(), y2.toString(), lineThick.toString(), serie.LineColor);
                svgLegend.appendChild(line);

                if (!FChartHelper.ObjectIsNullOrEmpty(serie.Mark)) {
                    let mark: ChartMark = $.extend(true, {}, serie.Mark);
                    let mx = xStart + this.ShapeWidth / 2;
                    let my = yStart + this.LabelHeight / 2;
                    mark.AttatchTo = MarkAttachTo.Legend;
                    mark.Rotation = 0;
                    mark.X = mx;
                    mark.Y = my;
                    mark.Width = fifthOfW;
                    mark.Height = sixthOfH * 3;
                    if (serie.Mark instanceof CircleMark) {
                        (mark as CircleMark).Radius = sixthOfH * 2;
                    }
                    mark.Draw(chart);
                }

                let lbl: string = serie.Label;
                let text: SVGTextElement = chart.CreateSVGTextElement();
                let lx: number = xStart + this.ShapeWidth;
                let ly = yStart + this.LabelHeight / 2 + this.FontSizeDraw / 2 - this.FontSizeDraw * 0.3 / 2;
                let textID: string = "legend-item-" + i.toString() + "-" + lbl;
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

        public ResetIndirectVariables(): void {
            this.FontSizeW = 0;
            this.FontSizeH = 0;
            this.LargeTextW = "";
            this.LargeTextH = "";
            this.HorizontalMeasured = false;
            this.VerticalMeasured = false;
            this.LabelWidth = 0;
            this.LabelHeight = 0;
        }
    }

    export enum ZoomControlLayout {
        Left,
        Right,
        Top,
        Bottom
    }

    export enum HorizontalAlignment {
        Left,
        Center,
        Right
    }

    export enum VerticalAlignment {
        Top,
        Center,
        Bottom
    }

    export class FChartZoomControl extends ChartGraphObject {
        public Layout: ZoomControlLayout = ZoomControlLayout.Right;
        public get Orientation(): Orientation {
            if (this.Layout == ZoomControlLayout.Left || this.Layout == ZoomControlLayout.Right) {
                return Orientation.Vertical;
            }

            return Orientation.Horizontal;
        }
        public HorizontalAlignment: HorizontalAlignment = HorizontalAlignment.Left;
        public VerticalAlignment: VerticalAlignment = VerticalAlignment.Top;
        private DefaultShortSize: number = 30;
        private DefaultLongSize: number = 300;
        private MaxBarSize: number = 16;
        public ShortSize: number = 0;
        public LongSize: number = 0;

        constructor() {
            super();
            this.LineWidth = 2;
        }

        private get Margin(): number {
            let m: number = 0;
            let mh: number = 0;
            let mv: number = 0;

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
        }

        private ZoomInHolder: SVGCircleElement = null;
        private ZoomOutHolder: SVGCircleElement = null;
        private DraggerHolder: SVGPathElement = null;
        private LabelHolder: SVGTextElement = null;
        private ProgressBarHolder: SVGLineElement = null;
        private ID: string = "";
        private ZoomInHolderID: string = "";
        private ZoomInHolderL1ID: string = "";
        private ZoomInHolderL2ID: string = ""
        private ZoomOutHolderID: string = "";
        private ZoomOutHolderL1ID: string = "";
        private DraggerHolderID: string = "";
        private LabelHolderID: string = "";
        private ProgressBarHolderID: string = "";

        private IdentifyID(): void {
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
        }

        private DraggerScale: number = 0;
        private DraggerBigScale: number = 0;
        private CircleRadius: number = 0;
        private DraggerX: number = 0;
        private DraggerY: number = 0;
        private Length: number = 0;

        public CalculateShortSize(availableSpace: number): void {
            if (availableSpace > this.DefaultShortSize) {
                this.ShortSize = this.DefaultShortSize;
            }
            else {
                this.ShortSize = availableSpace;
            }
        }

        public CalculateLongSize(availableSpace: number): void {
            if (availableSpace > this.DefaultLongSize) {
                this.LongSize = this.DefaultLongSize;
            }
            else {
                this.LongSize = availableSpace;
            }
        }

        public Draw(chart: FChart): void {
            this.AttachedChart = chart;
            this.IdentifyID();

            let svgZoomControl: SVGSVGElement = chart.GetSVGSVGElementByID(this.ID);
            if (FChartHelper.ObjectIsNullOrEmpty(svgZoomControl)) {
                return;
            }

            if (this.Layout == ZoomControlLayout.Left || this.Layout == ZoomControlLayout.Right) {
                let w: number = this.ShortSize;
                let h: number = this.LongSize;
                w -= this.Margin;
                h -= this.Margin;

                let mx: number = this.Margin / 2;
                let my: number = this.Margin / 2;
                let twothOfW: number = w / 2;
                let eighthOfH: number = h / 8;

                let r: number = Math.min(eighthOfH / 2, twothOfW / 2);
                this.CircleRadius = r;
                let hb: number = h - 4 * r;
                this.Length = hb;
                let cx1: number = mx + r;
                let cy1: number = my + 2 * r - r;
                let circle1: SVGCircleElement = chart.CreateSVGCircleElement();
                FChartHelper.SetSVGCircleAttributes(circle1, this.ZoomInHolderID, cx1.toString(), cy1.toString(), r.toString(), "transparent", this.LineWidth.toString(), this.LineColor);

                let ix1: number = cx1;
                let iy1: number = my;
                let ix2: number = cx1;
                let iy2: number = my + 2 * r;
                let lineP1: SVGLineElement = chart.CreateSVGLineElement();
                FChartHelper.SetSVGLineAttributes(lineP1, this.ZoomInHolderL1ID, ix1.toString(), iy1.toString(), ix2.toString(), iy2.toString(), this.LineWidth.toString(), this.LineColor);
                svgZoomControl.appendChild(lineP1);
                ix1 = mx;
                ix2 = mx + 2 * r;
                iy1 = my + r;
                iy2 = iy1;
                let lineP2: SVGLineElement = chart.CreateSVGLineElement();
                FChartHelper.SetSVGLineAttributes(lineP2, this.ZoomInHolderL2ID, ix1.toString(), iy1.toString(), ix2.toString(), iy2.toString(), this.LineWidth.toString(), this.LineColor);
                svgZoomControl.appendChild(lineP2);
                svgZoomControl.appendChild(circle1);
                this.ZoomInHolder = circle1;

                let cx2: number = mx + r;
                let cy2: number = my + 2 * r + hb + r;
                let circle2: SVGCircleElement = chart.CreateSVGCircleElement();
                FChartHelper.SetSVGCircleAttributes(circle2, this.ZoomOutHolderID, cx2.toString(), cy2.toString(), r.toString(), "transparent", this.LineWidth.toString(), this.LineColor);

                iy1 = my + 2 * r + hb + r;
                iy2 = iy1;
                let lineP3: SVGLineElement = chart.CreateSVGLineElement();
                FChartHelper.SetSVGLineAttributes(lineP3, this.ZoomOutHolderL1ID, ix1.toString(), iy1.toString(), ix2.toString(), iy2.toString(), this.LineWidth.toString(), this.LineColor);
                svgZoomControl.appendChild(lineP3);
                svgZoomControl.appendChild(circle2);
                this.ZoomOutHolder = circle2;

                let lx1: number = cx1;
                let ly1: number = my + 2 * r;
                let lx2: number = cx1;
                let ly2: number = my + 2 * r + hb;
                let progressBar: SVGLineElement = chart.CreateSVGLineElement();
                FChartHelper.SetSVGLineAttributes(progressBar, this.ProgressBarHolderID, lx1.toString(), ly1.toString(), lx2.toString(), ly2.toString(), this.LineWidth.toString(), this.LineColor);
                svgZoomControl.appendChild(progressBar);
                this.ProgressBarHolder = progressBar;

                let dragger: SVGPathElement = chart.CreateSVGPathElement();
                dragger.setAttribute("id", this.DraggerHolderID);                
                dragger.setAttribute("stroke-width", this.LineWidth.toString());
                dragger.setAttribute("stroke", this.LineColor);
                dragger.setAttribute("fill", this.LineColor);
                svgZoomControl.appendChild(dragger);
                this.DraggerHolder = dragger;
                this.UpdateDraggerData();

                let tx: number = mx + r * 2 + twothOfW;
                let ty: number = my + 2 * r + hb / 2;
                let dLabelFontSize: number = this.FontSize;
                ty += (dLabelFontSize / 2 - dLabelFontSize * 0.3 / 2);
                let strLabel: string = chart.ZoomLevel.toFixed(2);
                let text: SVGTextElement = chart.CreateSVGTextElement();
                let transform: string = "rotate(270," + tx.toString() + "," + ty.toString() + ")";
                FChartHelper.SetSVGTextAttributes(text, this.LabelHolderID, tx.toString(), ty.toString(), strLabel, "middle", this.FontFamily, this.FontStyle, dLabelFontSize.toString(), this.FontWeight, this.FontColor, transform);
                svgZoomControl.appendChild(text);
                this.LabelHolder = text;
            }
            else {
                let w: number = this.LongSize;
                let h: number = this.ShortSize;
                w -= this.Margin;
                h -= this.Margin;

                let mx: number = this.Margin / 2;
                let my: number = this.Margin / 2;
                let twothOfH: number = h / 2;
                let eighthOfW: number = w / 8;

                let r: number = Math.min(eighthOfW / 2, twothOfH / 2);
                this.CircleRadius = r;
                let wb: number = w - 4 * r;
                this.Length = wb;
                let cx1: number = mx + r;
                let cy1: number = my + twothOfH + r;
                let circle1: SVGCircleElement = chart.CreateSVGCircleElement();
                FChartHelper.SetSVGCircleAttributes(circle1, this.ZoomInHolderID, cx1.toString(), cy1.toString(), r.toString(), "transparent", this.LineWidth.toString(), this.LineColor);

                let ix1: number = mx;
                let iy1: number = my + twothOfH + r;
                let ix2: number = mx + 2 * r;
                let iy2: number = iy1;
                let lineP1: SVGLineElement = chart.CreateSVGLineElement();
                FChartHelper.SetSVGLineAttributes(lineP1, this.ZoomInHolderL1ID, ix1.toString(), iy1.toString(), ix2.toString(), iy2.toString(), this.LineWidth.toString(), this.LineColor);
                svgZoomControl.appendChild(lineP1);
                ix1 = mx + r;
                ix2 = ix1;
                iy1 = my + twothOfH;
                iy2 = iy1 + 2 * r;
                let lineP2: SVGLineElement = chart.CreateSVGLineElement();
                FChartHelper.SetSVGLineAttributes(lineP2, this.ZoomInHolderL2ID, ix1.toString(), iy1.toString(), ix2.toString(), iy2.toString(), this.LineWidth.toString(), this.LineColor);
                svgZoomControl.appendChild(lineP2);
                svgZoomControl.appendChild(circle1);
                this.ZoomInHolder = circle1;

                let cx2: number = mx + 2 * r + wb + r;
                let cy2: number = my + twothOfH + r;
                let circle2: SVGCircleElement = chart.CreateSVGCircleElement();
                FChartHelper.SetSVGCircleAttributes(circle2, this.ZoomOutHolderID, cx2.toString(), cy2.toString(), r.toString(), "transparent", this.LineWidth.toString(), this.LineColor);

                ix1 = mx + 2 * r + wb + r;
                ix2 = ix1;
                iy1 = my + twothOfH;
                iy2 = iy1 + 2 * r;
                let lineP3: SVGLineElement = chart.CreateSVGLineElement();
                FChartHelper.SetSVGLineAttributes(lineP3, this.ZoomOutHolderL1ID, ix1.toString(), iy1.toString(), ix2.toString(), iy2.toString(), this.LineWidth.toString(), this.LineColor);
                svgZoomControl.appendChild(lineP3);
                svgZoomControl.appendChild(circle2);
                this.ZoomOutHolder = circle2;

                let lx1: number = mx + 2 * r;
                let ly1: number = my + twothOfH + r;
                let lx2: number = lx1 + wb;
                let ly2: number = ly1;
                let progressBar: SVGLineElement = chart.CreateSVGLineElement();
                FChartHelper.SetSVGLineAttributes(progressBar, this.ProgressBarHolderID, lx1.toString(), ly1.toString(), lx2.toString(), ly2.toString(), this.LineWidth.toString(), this.LineColor);
                svgZoomControl.appendChild(progressBar);
                this.ProgressBarHolder = progressBar;

                let dragger: SVGPathElement = chart.CreateSVGPathElement();
                dragger.setAttribute("id", this.DraggerHolderID);
                dragger.setAttribute("stroke-width", this.LineWidth.toString());
                dragger.setAttribute("stroke", this.LineColor);
                dragger.setAttribute("fill", this.LineColor);
                svgZoomControl.appendChild(dragger);
                this.DraggerHolder = dragger;
                this.UpdateDraggerData();

                let tx: number = mx + 2 * r + wb / 2;
                let ty: number = my + twothOfH / 2;
                let dLabelFontSize: number = this.FontSize;
                ty += (dLabelFontSize / 2 - dLabelFontSize * 0.3 / 2);
                let strLabel: string = chart.ZoomLevel.toFixed(2);
                let text: SVGTextElement = chart.CreateSVGTextElement();
                FChartHelper.SetSVGTextAttributes(text, this.LabelHolderID, tx.toString(), ty.toString(), strLabel, "middle", this.FontFamily, this.FontStyle, dLabelFontSize.toString(), this.FontWeight, this.FontColor);
                svgZoomControl.appendChild(text);
                this.LabelHolder = text;
            }

            this.ZoomInHolder.addEventListener("mouseout", (e) => { this.ClearTimer(); });
            this.ZoomOutHolder.addEventListener("mouseout", (e) => { this.ClearTimer(); });
            this.AttachedChart.EventListenerMap.push(new KeyValuePair<FChartEventTypes, any>(FChartEventTypes.ZoomChanged, (e) => { this.OnChartZoomChanged(e); }));
        }

        private OnChartZoomChanged(zoomValue: number): void {
            if (FChartHelper.ObjectIsNullOrEmpty(this.LabelHolder)) {
                return;
            }

            this.UpdateDraggerData();
            let dValue: number = FChartHelper.RoundFloatNumber(zoomValue, 3, false);
            let strValue: string = dValue.toString();
            if (dValue.toString().length > 6) {
                strValue = dValue.toFixed(3);
            }
            this.LabelHolder.textContent = strValue;
        }

        private Step: number = 10;

        private Zoom(delta: number): boolean {
            if (this.Orientation == Orientation.Horizontal) {
                let left: number = 0;
                let right: number = 0;
                let len: number = this.AttachedChart.MaxZoomLevel * this.DraggerBigScale;
                let strX: string = this.DraggerHolder.getAttribute("x");
                let x: number = parseFloat(strX);
                let mx: number = this.Margin / 2;
                let x1: number = mx + 2 * this.CircleRadius;
                let x2: number = x1 + len + 2 * this.CircleRadius;
                let offsetX: number = mx + this.CircleRadius * 2;
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
                let bottom: number = 0;
                let top: number = 0;
                let len: number = this.AttachedChart.MaxZoomLevel * this.DraggerBigScale;
                let my: number = this.Margin / 2;
                let offsetY: number = my + this.CircleRadius * 2;
                bottom = offsetY + len - this.DraggerY - this.DraggerScale;
                top = this.DraggerY - offsetY - this.DraggerScale;

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
                    if (top == 0) {
                        return false;
                    }
                    delta = Math.abs(delta);
                    delta = delta > top ? top : delta;
                    this.DraggerY -= delta;
                }
            }

            this.AttachedChart.ZoomToScale(1 / this.ZoomValue);

            return true;
        }

        private OnZoomIn(e): void {
            if (FChartHelper.ObjectIsNullOrEmpty(this.AttachedChart)) {
                return;
            }
            this.Zoom(-this.Step);
        }

        private OnZoomOut(e): void {
            if (FChartHelper.ObjectIsNullOrEmpty(this.AttachedChart)) {
                return;
            }
            this.Zoom(this.Step);
        }

        private UpdateDraggerData(): void {
            let length: number = 0;
            if (this.Orientation == Orientation.Horizontal) {
                length = this.ProgressBarHolder.x2.baseVal.value - this.ProgressBarHolder.x1.baseVal.value;
            }
            else {
                length = this.ProgressBarHolder.y2.baseVal.value - this.ProgressBarHolder.y1.baseVal.value;
            }
            let scale: number = length / this.AttachedChart.MaxZoomLevel;
            let exponent: number = 0;
            while (scale > this.MaxBarSize / 2) {
                scale /= 2;
                exponent++;
            }
            let bigScale: number = scale * Math.pow(2, exponent);
            this.DraggerScale = scale;
            this.DraggerBigScale = bigScale;
            let delta: number = bigScale == scale ? 0 : scale;
            let mx: number = this.Margin / 2;
            let my: number = this.Margin / 2;
            let r: number = this.CircleRadius;

            if (this.Orientation == Orientation.Horizontal) {
                let twothOfH: number = this.ShortSize / 2;
                let bx: number = mx + 2 * r + this.AttachedChart.ZoomLevel * bigScale - delta;
                let by: number = my + twothOfH + r;
                this.DraggerX = bx;
                this.DraggerY = by;

                let bx1: number = bx - scale;
                let by1: number = by - r;
                let bx2: number = bx + scale;
                let by2: number = by - r;
                let bx3: number = bx + scale;
                let by3: number = by + r;
                let bx4: number = bx - scale;
                let by4: number = by + r;
  
                let d: string = "M" + bx1.toString() + " " + by1.toString() + " " +
                    "L" + bx2.toString() + " " + by2.toString() + " " +
                    "L" + bx3.toString() + " " + by3.toString() + " " +
                    "L" + bx4.toString() + " " + by4.toString() + " " + "Z";

                this.DraggerHolder.setAttribute("d", d);
            }
            else {
                let bx: number = mx + r;
                let by: number = my + 2 * r + (length - (this.AttachedChart.ZoomLevel * bigScale - delta));
                this.DraggerX = bx;
                this.DraggerY = by;

                let bx1: number = bx - r;
                let by1: number = by - scale;
                let bx2: number = bx + r;
                let by2: number = by - scale;
                let bx3: number = bx + r;
                let by3: number = by + scale;
                let bx4: number = bx - r;
                let by4: number = by + scale;
                let d: string = "M" + bx1.toString() + " " + by1.toString() + " " +
                    "L" + bx2.toString() + " " + by2.toString() + " " +
                    "L" + bx3.toString() + " " + by3.toString() + " " +
                    "L" + bx4.toString() + " " + by4.toString() + " " + "Z";

                this.DraggerHolder.setAttribute("d", d);
            }

            if (!FChartHelper.ObjectIsNullOrEmpty(this.LabelHolder)) {
                let dValue: number = FChartHelper.RoundFloatNumber(this.AttachedChart.ZoomLevel, 3, false);
                let strValue: string = dValue.toString();
                if (dValue.toString().length > 6) {
                    strValue = dValue.toFixed(3);
                }
                this.LabelHolder.textContent = strValue;
            }
        }

        private ClickingOnDragger: boolean = false;
        private DraggingStartPosition: number = 0;
        private DragThreshold: number = 5;
        private Dragging: boolean = false;

        private get ZoomValue(): number {
            let zoomValue: number = 0;
            let length: number = 0;
            if (this.Orientation == Orientation.Horizontal) {
                length = this.ProgressBarHolder.x2.baseVal.value - this.ProgressBarHolder.x1.baseVal.value;
                zoomValue = (this.DraggerX - this.ProgressBarHolder.x1.baseVal.value - this.DraggerScale) / length * this.AttachedChart.MaxZoomLevel;
            }
            else {
                length = this.ProgressBarHolder.y2.baseVal.value - this.ProgressBarHolder.y1.baseVal.value;
                zoomValue = (length - (this.DraggerY - this.ProgressBarHolder.y1.baseVal.value - this.DraggerScale)) / length * this.AttachedChart.MaxZoomLevel;
            }

            return zoomValue;
        }

        private TimerID: number = -1;
        private ClearTimer(): void {
            if (this.TimerID != -1) {
                clearInterval(this.TimerID);
                this.TimerID = -1;
            }
        }

        public OnMouseDown(e: MouseEvent): void {
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
                this.TimerID = setInterval(() => { this.OnZoomIn(null); }, 100);
            }
            else if (e.toElement.id == this.ZoomOutHolderID) {
                this.TimerID = setInterval(() => { this.OnZoomOut(null); }, 100);
            }
        }

        public OnMouseUp(e: MouseEvent): void {
            if (this.Dragging) {
                this.ClickingOnDragger = false;
                this.Dragging = false;
                this.DraggingStartPosition = 0;
            }

            this.ClearTimer();
        }

        public OnMouseMove(e: MouseEvent): void {
            if (this.Dragging) {
                this.ProcessDragging(e);
                return;
            }

            if (this.ClickingOnDragger) {
                let currentPos: number = 0;
                if (this.Orientation == Orientation.Horizontal) {
                    currentPos = e.clientX;
                }
                else {
                    currentPos = e.clientY;
                }

                let delta: number = Math.abs(currentPos - this.DraggingStartPosition);
                if (delta >= this.DragThreshold) {
                    this.Dragging = true;
                }
            }
        }

        private ProcessDragging(e: MouseEvent) {
            let delta: number = 0;

            if (this.Orientation == Orientation.Horizontal) {
                delta = e.clientX - this.DraggingStartPosition;
            }
            else {
                delta = e.clientY - this.DraggingStartPosition;
            }
            let changeStart: boolean = this.Zoom(delta);
            if (!changeStart) {
                return;
            }

            if (this.Orientation == Orientation.Horizontal) {
                this.DraggingStartPosition = e.clientX;
            }
            else {
                this.DraggingStartPosition = e.clientY;
            }
        }
    }

    enum RangeControlCornerDock {
        LeftTop,
        RightTop,
        RightBottom,
        LeftBottom
    }

    enum RangeControlBarDock {
        Left,
        Right,
        Top,
        Bottom
    }

    enum RangeControlDraggerDock {
        Left,
        Right
    }

    enum RangeControlMaskDock {
        Left,
        Center,
        Right
    }

    class FChartRangeControl extends ChartGraphObject {
        public TopHorizontalBarPosition: FloatPoint = new FloatPoint(0, 0);
        public BottomHorizontalBarPosition: FloatPoint = new FloatPoint(0, 0);
        public LeftVerticalBarPosition: FloatPoint = new FloatPoint(0, 0);
        public RightVerticalBarPosition: FloatPoint = new FloatPoint(0, 0);

        private LeftMask: SVGSVGElement = null;
        private RightMask: SVGSVGElement = null;
        private CenterMask: SVGSVGElement = null;
        private LeftTopCorner: SVGSVGElement = null;
        private LeftBottomCorner: SVGSVGElement = null;
        private RightTopCorner: SVGSVGElement = null;
        private RightBottomCorner: SVGSVGElement = null;
        private LeftBar: SVGSVGElement = null;
        private RightBar: SVGSVGElement = null;
        private TopBar: SVGSVGElement = null;
        private BottomBar: SVGSVGElement = null;

        private LeftDraggerID: string = "";
        private RightDraggerID: string = "";
        private CenterMaskID: string = "";
        private LeftMaskID: string = "";
        private RightMaskID: string = "";
        private LeftTopCornerID: string = "";
        private RightTopCornerID: string = "";
        private LeftBottomCornerID: string = "";
        private RightBottomCornerID: string = "";
        private LeftBarID: string = "";
        private RightBarID: string = "";
        private TopBarID: string = "";
        private BottomBarID: string = "";


        private IdentifyID() {
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
        }

        private DEFAULT_HORIZONTAL_BAR_SIZE: number = 20;
        private DEFAULT_VERTICAL_BAR_SIZE: number = 20;
        private m_dHorizontalBarSize: number = this.DEFAULT_HORIZONTAL_BAR_SIZE;
        private m_dVerticalBarSize: number = this.DEFAULT_VERTICAL_BAR_SIZE;
        public get HorizontalBarSize(): number {
            let max: number = this.AttachedChart.ContainerHeight * 0.1;
            this.m_dHorizontalBarSize = this.m_dHorizontalBarSize > max ? max : this.m_dHorizontalBarSize;
            return this.m_dHorizontalBarSize;
        }
        public get VerticalBarSize(): number {
            let max: number = this.AttachedChart.ContainerWidth * 0.05;
            this.m_dVerticalBarSize = this.m_dVerticalBarSize > max ? max : this.m_dVerticalBarSize;
            return this.m_dVerticalBarSize;
        }

        private get HorizontalBarWidth(): number {
            let w: number = 0;
            w = this.RightVerticalBarPosition.X + this.VerticalBarWidth - this.LeftVerticalBarPosition.X - this.VerticalBarWidth * 2;
            return w;
        }

        private get HorizontalBarHeight(): number {
            return this.HorizontalBarSize / 2;
        }

        private get VerticalBarWidth(): number {
            return this.VerticalBarSize / 2;
        }

        private get VerticalBarHeight(): number {
            let h: number = 0;
            h = this.BottomHorizontalBarPosition.Y + this.HorizontalBarHeight - this.TopHorizontalBarPosition.Y - this.HorizontalBarHeight * 2;
            return h;
        }

        public Draw(chart: FChart): void {
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

            this.CenterMask.ondblclick = (e) => {
                this.AttachedChart.GetPlotSVG().ondblclick(e);
            }
        }

        private DrawCorner(): void {
            let lx: number = 0;
            let ly: number = 0;
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
        }

        private DrawCornerGraph(id: string, x: number, y: number, dock: RangeControlCornerDock): void {
            let w: number = this.VerticalBarWidth;
            let h: number = this.HorizontalBarHeight;
            let rx: number = w;
            let ry: number = h;
            let largeArc: number = 0;
            let xAxisRotation: number = 0;
            let sweep: number = 1;
            let svgCorner: SVGSVGElement = this.AttachedChart.CreateSVG(id, "absolute", x.toString(), y.toString(), w.toString(), h.toString(), false);
            this.AttachedChart.AppendSVGToContainer(svgCorner);
            let fillColor: string = "lightgray";
            let x1: number = (dock == RangeControlCornerDock.LeftTop || dock == RangeControlCornerDock.RightTop) ? 0 : w;
            let y1: number = (dock == RangeControlCornerDock.LeftTop || dock == RangeControlCornerDock.LeftBottom) ? h : 0;
            let x2: number = (dock == RangeControlCornerDock.LeftTop || dock == RangeControlCornerDock.RightTop) ? w : 0;
            let y2: number = (dock == RangeControlCornerDock.LeftTop || dock == RangeControlCornerDock.LeftBottom) ? 0 : h;
            let ox: number = (dock == RangeControlCornerDock.LeftTop || dock == RangeControlCornerDock.LeftBottom) ? w : 0;
            let oy: number = (dock == RangeControlCornerDock.LeftTop || dock == RangeControlCornerDock.RightTop) ? h : 0;
            let arc: SVGPathElement = this.AttachedChart.CreateArc(x1, y1, x2, y2, rx, ry, xAxisRotation, largeArc, sweep, ox, oy, this.LineWidth, fillColor, true, fillColor);
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
        }

        private DrawBar(): void {
            this.DrawBarGraph(this.LeftBarID, RangeControlBarDock.Left);
            this.DrawBarGraph(this.RightBarID, RangeControlBarDock.Right);
            this.DrawBarGraph(this.TopBarID, RangeControlBarDock.Top);
            this.DrawBarGraph(this.BottomBarID, RangeControlBarDock.Bottom);     
        }

        private DrawBarGraph(id: string, dock: RangeControlBarDock): void {
            let lx: number = 0;
            let ly: number = 0;
            let w: number = 0;
            let h: number = 0;

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
            let svgBar: SVGSVGElement = this.AttachedChart.CreateSVG(id, "absolute", lx.toString(), ly.toString(), w.toString(), h.toString(), false);
            this.AttachedChart.AppendSVGToContainer(svgBar);
            svgBar.style.setProperty("background-color", "lightgray");

            this.LeftBar = dock == RangeControlBarDock.Left ? svgBar : this.LeftBar;
            this.RightBar = dock == RangeControlBarDock.Right ? svgBar : this.RightBar;
            this.TopBar = dock == RangeControlBarDock.Top ? svgBar : this.TopBar;
            this.BottomBar = dock == RangeControlBarDock.Bottom ? svgBar : this.BottomBar;
        }

        private DrawDragger(): void {
            this.DrawDraggerGraph(this.LeftDraggerID, RangeControlDraggerDock.Left);
            this.DrawDraggerGraph(this.RightDraggerID, RangeControlDraggerDock.Right);
        }

        private DrawDraggerGraph(id: string, dock: RangeControlDraggerDock): void {
            let tenthOfW: number = this.VerticalBarWidth / 10;
            let dLineWidth: number = tenthOfW * 2;
            let h = this.VerticalBarHeight;
            let dh: number = h / 2;
            let dx1: number = tenthOfW * 2 + dLineWidth / 2;
            let dy1: number = h / 2 - dh / 2;
            let dx2: number = dx1;
            let dy2: number = h / 2 + dh / 2;

            let svgBar: SVGSVGElement = dock == RangeControlDraggerDock.Left ? this.LeftBar : this.RightBar;
            let line1: SVGLineElement = this.AttachedChart.CreateSVGLineElement();
            FChartHelper.SetSVGLineAttributes(line1, id + "-line1", dx1.toString(), dy1.toString(), dx2.toString(), dy2.toString(), dLineWidth.toString(), "black");
            svgBar.appendChild(line1);
            let dx3: number = dx1 + tenthOfW * 4;
            let dy3: number = dy1;
            let dx4: number = dx3;
            let dy4: number = dy2;
            let line2: SVGLineElement = this.AttachedChart.CreateSVGLineElement();
            FChartHelper.SetSVGLineAttributes(line2, id + "-line2", dx3.toString(), dy3.toString(), dx4.toString(), dy4.toString(), dLineWidth.toString(), "black");
            svgBar.appendChild(line2);

            dx1 -= dLineWidth / 2;
            dx2 -= dLineWidth / 2;
            dx3 += dLineWidth / 2;
            dx4 += dLineWidth / 2;
            let dd: string = "M " + dx1 + " " + dy1 + " " +
                "L " + dx3+ " " + dy3 + " " +
                "L " + dx4 + " " + dy4 + " " +
                "L " + dx2 + " " + dy2 + " " +
                "L " + dx1 + " " + dy1 + " " + "Z";
            let dragger: SVGPathElement = this.AttachedChart.CreateSVGPathElement();
            dragger.setAttribute("id", id);
            dragger.setAttribute("d", dd);
            dragger.setAttribute("fill", "transparent");
            svgBar.appendChild(dragger);
        }

        private DrawMask(): void {
            let plotWidth: number = this.AttachedChart.GetPlotWidth();
            let plotHeight: number = this.AttachedChart.GetPlotHeight();
            let x: number = 0;
            let y: number = 0;
            let w: number = 0;
            let h: number = plotHeight;

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
        }

        private DrawMaskGraph(id: string, x: number, y: number, w: number, h: number, dock: RangeControlMaskDock): void {
            let mask: SVGSVGElement = this.AttachedChart.CreateSVG(id, "absolute", x.toString(), y.toString(), w.toString(), h.toString(), false);
            mask.style.setProperty("background-color", "whitesmoke");
            mask.style.setProperty("opacity", "0.5");
            this.AttachedChart.AppendSVGToContainer(mask);

            if (dock == RangeControlMaskDock.Center) {
                mask.style.setProperty("background-color", "transparent");
            }
            this.LeftMask = dock == RangeControlMaskDock.Left ? mask : this.LeftMask;
            this.RightMask = dock == RangeControlMaskDock.Right ? mask : this.RightMask;
            this.CenterMask = dock == RangeControlMaskDock.Center ? mask : this.CenterMask;
        }

        private ClearContent(): void {
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
        }

        private DraggingStartPosition: number = 0;
        private DragThreshold: number = 5;
        private Dragging: boolean = false;
        private ClickingOnLeftDragger: boolean = false;
        private ClickingOnRightDragger: boolean = false;
        private ClickingOnCenterMask: boolean = false;
        public OnMouseDown(e: MouseEvent): void {
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
        }

        public OnMouseMove(e: MouseEvent): void {
            if (FChartHelper.ObjectIsNullOrEmpty(e) || FChartHelper.ObjectIsNullOrEmpty(e.toElement)) {
                return;
            }

            if (this.Dragging) {
                this.ProcessDragging(e);
                return;
            }

            if (this.ClickingOnLeftDragger || this.ClickingOnRightDragger || this.ClickingOnCenterMask) {
                let currentPos: number = e.clientX;
                let delta: number = Math.abs(currentPos - this.DraggingStartPosition);
                if (delta >= this.DragThreshold) {
                    this.Dragging = true;
                }
            }
        }

        public OnMouseUp(e: MouseEvent): void {
            if (FChartHelper.ObjectIsNullOrEmpty(e) || FChartHelper.ObjectIsNullOrEmpty(e.toElement)) {
                return;
            }

            if (this.Dragging) {
                this.ClickingOnLeftDragger = false;
                this.ClickingOnRightDragger = false;
                this.ClickingOnCenterMask = false;
                this.Dragging = false;
            }
        }

        private ProcessDragging(e: MouseEvent): void {
            if (FChartHelper.ObjectIsNullOrEmpty(e)) {
                return;
            }

            let plotWidth: number = this.AttachedChart.GetPlotWidth();
            let space1: number = plotWidth * this.AttachedChart.PlotLeftRange;
            let space2: number = plotWidth * (this.AttachedChart.PlotRightRange - this.AttachedChart.PlotLeftRange);
            let space3: number = plotWidth * (1 - this.AttachedChart.PlotRightRange);
            let space: number = 0;
            let delta: number = e.clientX - this.DraggingStartPosition;

            let direction: string = delta > 0 ? "R" : "L";
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

                let delta2: number = direction == "R" ? delta : -delta;
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

                let delta2: number = direction == "R" ? delta : -delta;
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

                let delta2: number = direction == "R" ? delta : -delta;
                this.TopHorizontalBarPosition.X += delta2;
                this.BottomHorizontalBarPosition.X += delta2;
                this.LeftVerticalBarPosition.X += delta2;
                this.RightVerticalBarPosition.X += delta2;

            }
            this.DraggingStartPosition = e.clientX;

            this.Draw(this.AttachedChart);
        }
    }

    class FloatPoint {
        public X: number = 0.0;
        public Y: number = 0.0;

        constructor(fx: number, fy: number) {
            this.X = fx;
            this.Y = fy;
        }
    }

    class FChartHelper {
        public static FChartInstance: FChart = null;

        public static ObjectIsNullOrEmpty(obj: any): boolean {
            let bRet: boolean = false;

            if (obj == null || obj == undefined || obj == "") {
                bRet = true;
            }

            return bRet;
        }

        public static NumberCompare(value1: number, value2: number): number {
            let rlt = 0;
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
        }

        public static DegToRad(x: number): number {
            return x * (Math.PI / 180);
        }

        public static RotatePoint(point: FloatPoint, r: number) {
            let x: number = point.X;
            let y: number = point.Y;
            point.X = x * Math.cos(r) - y * Math.sin(r);
            point.Y = x * Math.sin(r) + y * Math.cos(r);
        }

        public static RotatePoints(dataPoints: Array<FloatPoint>, r: number) {
            for (let i = 0; i < dataPoints.length; i++) {
                this.RotatePoint(dataPoints[i], r);
            }
        }

        public static RotatePositionPoints(dataPoints: Array<FloatPoint>, r: number, x: number, y: number) {
            this.RotatePoints(dataPoints, r);

            for (let i = 0; i < dataPoints.length; i++) {
                dataPoints[i].X += x;
                dataPoints[i].Y = y - dataPoints[i].Y;
            }
        }

        public static GetMonthAbbreviation(month: string): string {
            let nMonth = parseInt(month, 10);
            if (isNaN(nMonth)) {
                return "";
            }

            let strMonth: string = "";

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
        }

        public static GetDateTickLabel(time: number, tickSelection: XAxisDateTickSelection): string {
            let strLabel: string = "";
            let datex: Date = new Date(time);

            switch (tickSelection) {
                case XAxisDateTickSelection.Day:
                    {
                        let iDay: number = datex.getDate();
                        let strDay: string = iDay.toString();
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
        }

        public static StringIsNaN(x: string): boolean {
            if (x == "NaN") {
                return true;
            }

            return false;
        }

        public static RoundFloatNumber(dValue: number, maxFloatDigits: number, intergerMajor: boolean = true): number {
            let dResult: number = 0;

            if (dValue == 0) {
                return dValue;
            }
            let strValue: string = dValue.toString();
            let strInteger: string = "";
            let strFloat: string = "";
            let bFloatPart: boolean = false;

            for (let i = 0; i < strValue.length; i++) {
                let c: string = strValue.charAt(i);
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

            let intValue: number = parseInt(strInteger);
            let floatValue: number = parseFloat("0." + strFloat);
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
                let n: number = 0;
                for (let i = strFloat.length - 1; i >= 0; i--) {
                    let c: string = strFloat.charAt(i);
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
                    let v1: number = 1;
                    for (let i = 0; i < maxFloatDigits; i++) {
                        v1 *= 10;
                    }
                    let floatTemp: number = parseFloat("0." + strFloat);
                    floatValue = Math.round(floatTemp * v1 + 0.5) / v1;
                }

                dResult = intValue + floatValue;
            }

            return dResult;
        }

        public static SetSVGLineAttributes(line: SVGLineElement, id: string, x1: string, y1: string, x2: string, y2: string, strokeWidth: string, stroke: string): void {
            if (this.StringIsNaN(x1) || this.StringIsNaN(y1) || this.StringIsNaN(x2) || this.StringIsNaN(y2)) {
                return;
                //debugger;
            }

            line.setAttribute("id", id);
            line.setAttribute("x1", x1);
            line.setAttribute("y1", y1);
            line.setAttribute("x2", x2);
            line.setAttribute("y2", y2);
            line.setAttribute("stroke-width", strokeWidth);
            line.setAttribute("stroke", stroke);
        }

        public static SetSVGCircleAttributes(circle: SVGCircleElement, id: string, cx: string, cy: string, r: string, fill: string, strokeWidth: string, stroke: string): void {
            if (this.StringIsNaN(cx) || this.StringIsNaN(cy) || this.StringIsNaN(r)) {
                return;
                //debugger;
            }

            circle.setAttribute("id", id);
            circle.setAttribute("cx", cx);
            circle.setAttribute("cy", cy);
            circle.setAttribute("r", r);
            circle.setAttribute("fill", fill);
            circle.setAttribute("stroke-width", strokeWidth);
            circle.setAttribute("stroke", stroke);
        }

        public static SetSVGTextAttributes(text: SVGTextElement, id: string, x: string, y: string, characters: string, textAnchor: string, fontFamily: string, fontStyle: string, fontSize: string, fontWeight: string, fill: string = null, transform: string = null) {
            if (this.StringIsNaN(x) || this.StringIsNaN(y)) {
                return;
                //debugger;
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
        }

        public static SetSVGRectAttributes(rect: SVGRectElement, id: string, x: string, y: string, width: string, height: string, strokeWidth: string, stroke: string, fill: string = "none") {
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
        }
    }

    class FChartCoeff {
        private m_c1: number;
        private m_c2: number;
        private m_c3: number;
        private m_c4: number;

        private m_dx: number;
        private m_dy: number;
        private m_scale: number;

        public constructor() {
            this.m_dx = 0.0;
            this.m_dy = 0.0;
            this.m_scale = 1.0;
        }

        public SetCoeff(a1: number, a2: number, a3: number, a4: number): void {
            this.m_c1 = a1;
            this.m_c2 = a2;
            this.m_c3 = a3;
            this.m_c4 = a4;
        }

        public ToDvcX(x: number): number {
            return (this.m_c1 * (this.m_scale * x + this.m_dx) - this.m_c2);
        }

        public ToDvcY(y: number): number {
            return (this.m_c3 * (this.m_scale * y + this.m_dy) - this.m_c4);
        }

        public ToWcX(x: number): number {
            return ((((x + this.m_c2) / this.m_c1) - this.m_dx) * this.m_scale);
        }

        public ToWcY(y: number): number {
            return ((((y + this.m_c4) / this.m_c3) - this.m_dy) * this.m_scale);
        }

        public GetWcX(x: number): number {
            return (this.m_scale * x + this.m_dx);
        }

        public GetWcY(y: number): number {
            return (this.m_scale * y + this.m_dy);
        }

        public GetDcWidth(w: number): number {
            return this.m_c1 * w;
        }

        public GetDcHeight(h: number): number {
            return this.m_c3 * h;
        }

        public Scale(scale: number): void {
            this.m_scale = scale;
        }

        public Translate(dx: number, dy: number): void {
            this.m_dx = dx;
            this.m_dy = dy;
        }

        public SaveCoeff(): FChartCoeff {
            let coeff: FChartCoeff = new FChartCoeff();

            coeff.m_c1 = this.m_c1;
            coeff.m_c2 = this.m_c2;
            coeff.m_c3 = this.m_c3;
            coeff.m_c4 = this.m_c4;
            coeff.m_dx = this.m_dx;
            coeff.m_dy = this.m_dy;
            coeff.m_scale = this.m_scale;

            return coeff;
        }

        public RestoreCeoff(coeff: FChartCoeff): void {
            this.m_c1 = coeff.m_c1;
            this.m_c2 = coeff.m_c2;
            this.m_c3 = coeff.m_c3;
            this.m_c4 = coeff.m_c4;
            this.m_dx = coeff.m_dx;
            this.m_dy = coeff.m_dy;
            this.m_scale = coeff.m_scale;
        }
    }

    export class FChart {
        public BindTo: string;
        public XAxes: Array<FChartXAxis> = new Array<FChartXAxis>();
        public YAxes: Array<FChartYAxis> = new Array<FChartYAxis>();
        public DataSeries: Array<FChartDataSerie> = new Array<FChartDataSerie>();
        public Legend: FChartLegend = new FChartLegend();
        public Zoom: number = 1.0;
        public ZoomMode: ChartZoomMode = ChartZoomMode.Center;
        public ZoomDirection: ChartZoomDirection = ChartZoomDirection.Both;
        public ShowZoomControl: boolean = false;
        public ZoomControl: FChartZoomControl = new FChartZoomControl();
        public ShowRangeControl: boolean = false;
        private RangeControl: FChartRangeControl = new FChartRangeControl();
        public AspectRatio: number = 1.0;
        public KeepAspectRatio: boolean = false;            // If false, ignore AspectRatio, If true, consider AspectRatio.

        private m_chartParent: FChart = null;
        public get ParentChart(): FChart {
            return this.m_chartParent;
        }
        public set ParentChart(value: FChart) {
            this.m_chartParent = value;
            if (!FChartHelper.ObjectIsNullOrEmpty(this.ParentChart)) {
                this.ParentChart.XAxes = _.cloneDeep(this.XAxes);
                this.ParentChart.YAxes = _.cloneDeep(this.YAxes);
                this.ParentChart.DataSeries = _.cloneDeep(this.DataSeries);

                for (let i = 0; i < this.ParentChart.XAxes.length; i++) {
                    this.ParentChart.XAxes[i].Show = false;
                }
                for (let i = 0; i < this.ParentChart.YAxes.length; i++) {
                    this.ParentChart.YAxes[i].Show = false;
                }
                this.ParentChart.ShowRangeControl = true;
                this.ParentChart.ShowZoomControl = false;
                this.ParentChart.Legend.Show = false;

                if (!FChartHelper.ObjectIsNullOrEmpty(this.ParentChart)) {
                    this.ParentChart.EventListenerMap.push(new KeyValuePair<FChartEventTypes, any>(FChartEventTypes.RangeChanged, (leftRange, rightRange) => {
                        this.MonitorRange(leftRange, rightRange);
                    }));
                }

                this.ParentChart.ChildChart = this;
            }
        }

        private m_chartChild: FChart = null;
        public get ChildChart(): FChart {
            return this.m_chartChild;
        }
        public set ChildChart(value: FChart) {
            this.m_chartChild = value;
        }

        public EventListenerMap: Array<KeyValuePair<FChartEventTypes, any>> = new Array<KeyValuePair<FChartEventTypes, any>>();

        public SVGMeasure: SVGSVGElement = null;
        private m_arrSVG: SVGSVGElement[] = new Array<SVGSVGElement>();
        private XAxesSVGS: Array<SVGSVGElement> = new Array<SVGSVGElement>();
        private YAxesSVGS: Array<SVGSVGElement> = new Array<SVGSVGElement>();
        private PlotSVG: SVGSVGElement = null;

        public UseFixedYAxesWidth: boolean = false;
        public FixedYAxesWidth: number = 0;
        public FixedYAxesLengthType: LengthType = LengthType.Value;

        public UseFixedXAxesHeight: boolean = false;
        public FixedXAxesHeight: number = 0;
        public FixedXAxesLengthType: LengthType = LengthType.Percentage;

        private  ONE_DAY: number = 86400000;
        private  ONE_HOUR: number = 3600000;
        private  ONE_MINUTE: number = 60000;
        private  ONE_SECOND: number = 1000;
        private  ONE_MILLISECOND: number = 1;

        private  MIN_CHART_WIDTH: number = 50;
        private  MIN_CHART_HEIGHT: number = 50;

        private ChartWidth: number = 0;
        private ChartHeight: number = 0;
        private PlotWidth: number = 0;
        private PlotHeight: number = 0;
        public MaxYAxisWidth: number = 100;
        public MaxXAxisHeight: number = 100;

        private YAxisDefaultWidth: number = 80;
        private XAxisDefaultHeight: number = 80;
        private DEFAULT_XAXIS_LEFT_MARGIN: number = 20;
        private DEFAULT_XAXIS_RIGHT_MARGIN: number = 20;
        private m_dXAxisLeftMargin: number = this.DEFAULT_XAXIS_LEFT_MARGIN;
        private m_dXAxisRightMargin: number = this.DEFAULT_XAXIS_RIGHT_MARGIN;
        public get XAxisLeftMargin(): number {
            this.m_dXAxisLeftMargin = Math.abs(this.m_dXAxisLeftMargin);
            let max: number = this.PlotWidth * 0.1;
            this.m_dXAxisLeftMargin = this.m_dXAxisLeftMargin > max ? max : this.m_dXAxisLeftMargin;
            return this.m_dXAxisLeftMargin;
        }
        public set XAxisLeftMargin(value: number) {
            this.m_dXAxisLeftMargin = value;
        }
        public get XAxisRightMargin(): number {
            this.m_dXAxisRightMargin = Math.abs(this.m_dXAxisRightMargin);
            let max: number = this.PlotWidth * 0.1;
            this.m_dXAxisRightMargin = this.m_dXAxisRightMargin > max ? max : this.m_dXAxisRightMargin;
            return this.m_dXAxisRightMargin;
        }
        public set XAxisRightMargin(value: number) {
            this.m_dXAxisRightMargin = value;
        }

        public get MaxZoomLevel(): number {
            return 1 / this.SCALE_ULIMIT;
        }

        public set MaxZoomLevel(value: number) {
            value = Math.abs(value);
            this.SCALE_ULIMIT = 1 / value;
        }

        public get ZoomLevel(): number {
            return 1 / this.m_scale;
        }

        private SortedDataSeries: boolean = false;

        public ShowScrollBar: boolean = false;

        public GridX: FChartGrid = new FChartGrid();
        public GridY: FChartGrid = new FChartGrid();
        public Tooltip: FChartTooltip = new FChartTooltip();

        public DrawDataPoint: any = function (data: DataPoint) { }

        private PlotPosition: FloatPoint = new FloatPoint(0, 0);
        public GetPlotX(): number {
            return this.PlotPosition.X;
        }
        public GetPlotY(): number {
            return this.PlotPosition.Y;
        }
        private ZoomFactor: number = 1.2;
        private SCALE_ULIMIT: number = 0.002;
        private SCALE_LLIMIT: number = 1;

        private m_leftMargin: number;
        private m_topMargin: number;
        private m_rightMargin: number;
        private m_bottomMargin: number;

        get MarginLeft() {
            return this.m_leftMargin;
        }
        set MarginLeft(value: number) {
            this.m_leftMargin = value;
        }

        get MarginRight() {
            return this.m_rightMargin;
        }
        set MarginRight(value: number) {
            this.m_rightMargin = value;
        }

        get MarginTop() {
            return this.m_topMargin;
        }
        set MarginTop(value: number) {
            this.m_topMargin = value;
        }

        get MarginBottom() {
            return this.m_bottomMargin;
        }
        set MarginBottom(value: number) {
            this.m_bottomMargin = value;
        }

        get XAxisMargin(): number {
            let dMargin: number = 0;
            if (this.XAxisLeftMargin > 0) {
                dMargin += this.XAxisLeftMargin;
            }
            if (this.XAxisRightMargin > 0) {
                dMargin += this.XAxisRightMargin;
            }

            return dMargin;
        }

        private m_dPlotLeftRange: number = 0;
        public get PlotLeftRange(): number {
            return this.m_dPlotLeftRange;
        }
        public set PlotLeftRange(value: number) {
            this.m_dPlotLeftRange = value;
            this.FireRangeChanged();
        }
        public m_dPlotRightRange: number = 1;
        public get PlotRightRange(): number {
            return this.m_dPlotRightRange;
        }
        public set PlotRightRange(value: number) {
            this.m_dPlotRightRange = value;
            this.FireRangeChanged();
        }

        public m_coeff: FChartCoeff = new FChartCoeff();
        private m_oldscale: number = 0.0;
        private m_scale: number = 0.0;               // 1 device unit = m_scale world unit.
        private m_width: number;                     // Viewport width
        private m_height: number;                    // Viewport height
        private m_xl: number;                        // Viewport scope in world coordinate
        private m_xr: number;
        private m_yt: number;
        private m_yb: number;
        private m_minx: number;                      // Graph scope in world coordinate.
        private m_maxx: number;
        private m_miny: number;
        private m_maxy: number;

        private m_uxl: number;
        private m_uxr: number;
        private m_uyt: number;
        private m_uyb: number;

        private GetOffsetX(): number {
            let offsetX = 0;

            let xc1 = this.m_xl + (this.m_xr - this.m_xl) / 2.0;
            let xc2 = this.m_minx + (this.m_maxx - this.m_minx) / 2.0;

            let diff = xc1 - xc2;
            if (diff > 0) {
                offsetX = -this.m_coeff.GetDcWidth(diff);
            }
            else {
                offsetX = this.m_coeff.GetDcWidth(diff);
            }

            return offsetX;
        }

        private GetOffsetY(): number {
            let offsetY = 0;

            let yc1 = this.m_yb + (this.m_yt - this.m_yb) / 2.0;
            let yc2 = this.m_miny + (this.m_maxy - this.m_miny) / 2.0;
            let diff = yc1 - yc2;
            if (diff > 0) {
                offsetY = -this.m_coeff.GetDcHeight(diff);
            }
            else {
                offsetY = this.m_coeff.GetDcHeight(diff);
            }

            return offsetY;
        }

        get Offset() {
            return (new FloatPoint(this.GetOffsetX(), this.GetOffsetY()));
        }

        // Implementation.
        public ZoomIn(): void {
            let zoomFactor: number = this.ZoomFactor;
            this.m_oldscale = this.m_scale;

            this.m_scale /= zoomFactor;
            if (this.m_scale < this.SCALE_ULIMIT) {
                this.m_scale = this.SCALE_ULIMIT;
                zoomFactor = this.m_oldscale / this.SCALE_ULIMIT;
            }
            let scale = 0.5 - 0.5 / zoomFactor;
            this.m_xl += (this.m_xr - this.m_xl) * scale;
            this.m_yt -= (this.m_yt - this.m_yb) * scale;

            this.SetWindow();
            this.Draw(true);
            this.FireZoomChanged();
        }

        public ZoomOut(): void {
            let zoomFactor: number = this.ZoomFactor;
            this.m_oldscale = this.m_scale;

            this.m_scale *= zoomFactor;
            if (this.m_scale > this.SCALE_LLIMIT) {
                this.m_scale = this.SCALE_LLIMIT;
                zoomFactor = this.SCALE_LLIMIT / this.m_oldscale;
            }
            let scale = 0.5 * (zoomFactor - 1);
            this.m_xl -= (this.m_xr - this.m_xl) * scale;
            this.m_yt += (this.m_yt - this.m_yb) * scale;

            this.SetWindow();
            this.Draw(true);
            this.FireZoomChanged();
        }

        public ZoomToScale(dNewScale: number): void {
            if (dNewScale < this.SCALE_ULIMIT) {
                dNewScale = this.SCALE_ULIMIT;
            }
            if (dNewScale > this.SCALE_LLIMIT) {
                dNewScale = this.SCALE_LLIMIT;
            }

            this.m_oldscale = this.m_scale;
            this.m_scale = dNewScale;

            if (dNewScale > this.m_oldscale) {         // Zoom Out
                let zoomFactor: number = dNewScale / this.m_oldscale;
                let scale = 0.5 * (zoomFactor - 1);
                this.m_xl -= (this.m_xr - this.m_xl) * scale;
                this.m_yt += (this.m_yt - this.m_yb) * scale;
            }
            else {                                      // Zoom In
                let zoomFactor: number = this.m_oldscale / dNewScale;
                let scale = 0.5 - 0.5 / zoomFactor;
                this.m_xl += (this.m_xr - this.m_xl) * scale;
                this.m_yt -= (this.m_yt - this.m_yb) * scale;
            }

            this.SetWindow();
            this.Draw(true);
            this.FireZoomChanged();
        }

        public ZoomToFull(): void {
            let minx: number = this.m_minx;
            let maxx: number = this.m_maxx;
            let miny: number = this.m_miny;
            let maxy: number = this.m_maxy;

            this.ZoomRegion(minx, maxy, maxx, miny);
        }

        public ZoomRegion(xl: number, yt: number, xr: number, yb: number): void {
            if (xr - xl < 1.0e-30) {
                return;
            }

            this.m_oldscale = this.m_scale;

            let xc: number = (xl + xr) * 0.5;
            let yc: number = (yt + yb) * 0.5;
            let ratio: number = (this.m_yt - this.m_yb) / (this.m_xr - this.m_xl);
            let regionRatio: number = (yt - yb) / (xr - xl);
            let newScale: number = 0;

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

            let dx: number = (this.m_xr - this.m_xl) * newScale / this.m_scale;
            let dy: number = (this.m_yt - this.m_yb) * newScale / this.m_scale;

            this.m_xl = (xc - dx * 0.5);
            this.m_xr = (xc + dx * 0.5);
            this.m_yb = (yc - dy * 0.5);
            this.m_yt = (yc + dy * 0.5);
            this.m_scale = newScale;

            this.SetWindow();
            this.Draw(true);
            this.FireZoomChanged();
        }

        private MonitorRange(leftRange: number, rightRange: number): void {
            let xl: number = this.m_uxl + (this.m_uxr - this.m_uxl) * leftRange;
            let xr: number = this.m_uxr - (this.m_uxr - this.m_uxl) * (1 - rightRange);
            this.ZoomRegion(xl, this.m_uyt, xr, this.m_uyb);
        }

        public FireZoomChanged(): void {
            for (let i = 0; i < this.EventListenerMap.length; i++) {
                let kvp: KeyValuePair<FChartEventTypes, any> = this.EventListenerMap[i];
                if (kvp.Key == FChartEventTypes.ZoomChanged) {
                    if (!FChartHelper.ObjectIsNullOrEmpty(kvp.Value)) {
                        kvp.Value(this.ZoomLevel);
                    }
                }
            }
        }

        public FireRangeChanged(): void {
            for (let i = 0; i < this.EventListenerMap.length; i++) {
                let kvp: KeyValuePair<FChartEventTypes, any> = this.EventListenerMap[i];
                if (kvp.Key == FChartEventTypes.RangeChanged) {
                    if (!FChartHelper.ObjectIsNullOrEmpty(kvp.Value)) {
                        kvp.Value(this.PlotLeftRange, this.PlotRightRange);
                    }
                }
            }
        }

        public Container: HTMLDivElement = null;
        public ContainerWidth: number = 0;
        public ContainerHeight: number = 0;
        private ValidateContainerSize(): boolean {
            let bValid = true;

            let divBindTo: HTMLDivElement = document.getElementById(this.BindTo) as HTMLDivElement;
            if (FChartHelper.ObjectIsNullOrEmpty(divBindTo)) {
                return false;
            }
            let w: number = divBindTo.clientWidth;
            let h: number = divBindTo.clientHeight;
            if (isNaN(w) || isNaN(h)) {
                return false;
            }

            if (w < this.MIN_CHART_WIDTH || h < this.MIN_CHART_HEIGHT) {
                bValid = false;
            }

            return bValid;
        }

        private GetContainerSize(): Size {
            let divBindTo: HTMLDivElement = document.getElementById(this.BindTo) as HTMLDivElement;
            if (FChartHelper.ObjectIsNullOrEmpty(divBindTo)) {
                return null;
            }
            let w: number = divBindTo.clientWidth;
            let h: number = divBindTo.clientHeight;

            return (new Size(w, h));
        }

        private IsWindowZooming: boolean = false;
        public Render(): void {
            let bValidSize: boolean = false;
            bValidSize = this.ValidateContainerSize();
            if (!bValidSize) {
                return;
            }

            let divContainer: HTMLDivElement = document.getElementById(this.BindTo) as HTMLDivElement;
            if (FChartHelper.ObjectIsNullOrEmpty(divContainer)) {
                return;
            }

            let rangeChangedHandler: any = null;
            for (let i = 0; i < this.EventListenerMap.length; i++) {
                let kvp: KeyValuePair<FChartEventTypes, any> = this.EventListenerMap[i];
                if (kvp.Key == FChartEventTypes.RangeChanged) {
                    rangeChangedHandler = kvp.Value;
                    break;
                }
            }
            this.EventListenerMap = new Array<KeyValuePair<FChartEventTypes, any>>();
            if (!FChartHelper.ObjectIsNullOrEmpty(this.ChildChart) && !FChartHelper.ObjectIsNullOrEmpty(rangeChangedHandler)) {
                this.EventListenerMap.push(new KeyValuePair<FChartEventTypes, any>(FChartEventTypes.RangeChanged, rangeChangedHandler));
            }

            for (let i = 0; i < this.XAxes.length; i++) {
                this.XAxes[i].AttachedChart = this;
            }
            for (let i = 0; i < this.YAxes.length; i++) {
                this.YAxes[i].AttachedChart = this;
            }
            for (let i = 0; i < this.DataSeries.length; i++) {
                this.DataSeries[i].AttachedChart = this;
            }

            this.MaxZoomLevel = Math.ceil(Math.abs(this.MaxZoomLevel));

            this.PrepareContainer();
            this.SetCoordinate();
            this.Draw();

            this.PlotLeftRange = 0;
            this.PlotRightRange = 1;

            this.WindowDevicePixelRatio = this.GetWindowDevicePixelRatio();
            window.onresize = (e) => {
                if (this.DetectZoom()) {
                    this.IsWindowZooming = true;
                }
            }
        }

        private WindowDevicePixelRatio: number = 0;
        private GetWindowDevicePixelRatio(): number {
            let ratio: number = 0,
            screen = window.screen,
            ua = navigator.userAgent.toLowerCase();

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
        }
        private DetectZoom(): boolean {
            let ratio: number = this.GetWindowDevicePixelRatio();
            if (ratio != this.WindowDevicePixelRatio) {
                return true;
            }

            return false;
        };

        private Draw(zoom: boolean = false): void {
            if (zoom) {
                for (let i = 0; i < this.XAxesSVGS.length; i++) {
                    this.XAxesSVGS[i].innerHTML = "";
                }
                for (let i = 0; i < this.YAxesSVGS.length; i++) {
                    this.YAxesSVGS[i].innerHTML = "";
                }
                this.PlotSVG.innerHTML = "";

                for (let i = 0; i < this.DataSeries.length; i++) {
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
        }

        private DrawXAxes(): void {
            for (let i = 0; i < this.XAxes.length; i++) {
                if (this.IsAxisVisible(this.XAxes[i])) {
                    this.XAxes[i].Draw(this);
                }
            }
        }

        private DrawYAxes(): void {
            for (let i = 0; i < this.YAxes.length; i++) {
                if (this.IsAxisVisible(this.YAxes[i])) {
                    this.YAxes[i].Draw(this);
                }
            }
        }

        private DrawGridLine(): void {
            let nXAxesCount: number = this.GetVisibleXAxesCount();
            let nYAxesCount: number = this.GetVisibleYAxesCount();
            let svgPlot: SVGSVGElement = this.GetPlotSVG();
            if (FChartHelper.ObjectIsNullOrEmpty(svgPlot)) {
                return;
            }

            let plotWidth: number = svgPlot.clientWidth;
            let plotHeight: number = svgPlot.clientHeight;

            if (this.GridX.Show && nXAxesCount <= 1) {
                let xaxis: FChartXAxis = this.GetUniqueXAxis();
                if (!FChartHelper.ObjectIsNullOrEmpty(xaxis)) {
                    for (let i = 0; i < xaxis.Value2Wc.length; i++) {
                        let obj: any = xaxis.Value2Wc[i];
                        let key = obj.Key;
                        let value = obj.Value;
                        let ix = this.XAxisLeftMargin + this.m_coeff.ToDvcX(value);
                        let y1 = 0;
                        let y2 = plotHeight;
                        let id = xaxis.ID + "-x-gridline-" + i.toString();
                        let line: SVGLineElement = this.CreateSVGLineElement();
                        FChartHelper.SetSVGLineAttributes(line, id, ix.toString(), y1.toString(), ix.toString(), y2.toString(), this.GridX.LineWidth.toString(), this.GridX.LineColor);
                        svgPlot.appendChild(line);
                    }
                }
            }

            for (let i = 0; i < this.GridX.Lines.length; i++) {
                let gridline: FChartGridLine = this.GridX.Lines[i];
                let xaxis: FChartXAxis = this.SearchXAxisByID(gridline.AxisID);
                if (FChartHelper.ObjectIsNullOrEmpty(xaxis)) {
                    continue;
                }

                let ix: number = this.XAxisLeftMargin + xaxis.GetCoordByValue(gridline.Value);
                let y1: number = 0;
                let y2: number = plotHeight;
                let line: SVGLineElement = this.CreateSVGLineElement();
                let id = xaxis.ID + "-x-extra-gridline-" + i.toString();
                FChartHelper.SetSVGLineAttributes(line, id, ix.toString(), y1.toString(), ix.toString(), y2.toString(), gridline.LineWidth.toString(), gridline.LineColor);
                svgPlot.appendChild(line);

                if (FChartHelper.ObjectIsNullOrEmpty(gridline.Text)) {
                    continue;
                }
                let lx: number = ix + gridline.LineWidth * 5;
                let ly: number = 0;
                let textAnchor: string = "start";

                if (gridline.TextPosition == GridLineTextPosition.Start) {
                    ly = 0;
                }
                else if (gridline.TextPosition == GridLineTextPosition.Middle) {
                    ly = plotHeight / 2.0 + gridline.FontSize / 2 - gridline.FontSize * 0.3 / 2;
                }
                else if (gridline.TextPosition == GridLineTextPosition.End) {
                    ly = plotHeight;
                }

                let text: SVGTextElement = this.CreateSVGTextElement();
                let textID = xaxis.ID + "-x-extra-gridline-text-" + i.toString();
                FChartHelper.SetSVGTextAttributes(text, textID, lx.toString(), ly.toString(), gridline.Text, textAnchor, gridline.FontFamily, gridline.FontStyle, gridline.FontSize.toString(), gridline.FontWeight);
                svgPlot.appendChild(text);
            }

            if (this.GridY.Show && nYAxesCount <= 1) {
                let yaxis: FChartYAxis = this.GetUniqueYAxis();
                if (!FChartHelper.ObjectIsNullOrEmpty(yaxis)) {
                    for (let i = 0; i < yaxis.Value2Wc.length; i++) {
                        let obj: KeyValuePair<string, number> = yaxis.Value2Wc[i];
                        let key = obj.Key;
                        let value = obj.Value;
                        let iy = this.m_coeff.ToDvcY(value);
                        let x1 = this.XAxisLeftMargin;
                        let x2 = plotWidth - this.XAxisRightMargin;

                        if (key == "top" || key == "bottom") {
                            continue;
                        }
                        let id = yaxis.ID + "-y-gridline-" + i.toString();
                        let line: SVGLineElement = this.CreateSVGLineElement();
                        FChartHelper.SetSVGLineAttributes(line, id, x1.toString(), iy.toString(), x2.toString(), iy.toString(), this.GridY.LineWidth.toString(), this.GridY.LineColor);
                        svgPlot.appendChild(line);
                    }
                }
            }
            for (let i = 0; i < this.GridY.Lines.length; i++) {
                let gridline: FChartGridLine = this.GridY.Lines[i];
                let yaxis: FChartYAxis = this.SearchYAxisByID(gridline.AxisID);
                if (FChartHelper.ObjectIsNullOrEmpty(yaxis)) {
                    continue;
                }

                let iy: number = yaxis.GetCoordByValue(gridline.Value);
                let x1: number = this.XAxisLeftMargin;
                let x2: number = plotWidth - this.XAxisRightMargin;
                let line: SVGLineElement = this.CreateSVGLineElement();
                let id = yaxis.ID + "-y-extra-gridline-" + i.toString();
                FChartHelper.SetSVGLineAttributes(line, id, x1.toString(), iy.toString(), x2.toString(), iy.toString(), gridline.LineWidth.toString(), gridline.LineColor);
                svgPlot.appendChild(line);

                if (FChartHelper.ObjectIsNullOrEmpty(gridline.Text)) {
                    continue;
                }
                let lx: number = 0;
                let ly: number = iy + gridline.FontSize / 2 - gridline.FontSize * 0.3 / 2;
                let textAnchor: string = "start";

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

                let text: SVGTextElement = this.CreateSVGTextElement();
                let textID = yaxis.ID + "-y-extra-gridline-text-" + i.toString();
                FChartHelper.SetSVGTextAttributes(text, textID, lx.toString(), ly.toString(), gridline.Text, textAnchor, gridline.FontFamily, gridline.FontStyle, gridline.FontSize.toString(), gridline.FontWeight);
                svgPlot.appendChild(text);
            }
        }

        private DrawDataSeries(): void {
            if (!this.SortedDataSeries) {
                this.DataSeries.sort((a, b) => {
                    return FChartHelper.NumberCompare(a.ZOrder, b.ZOrder);
                });
                this.SortedDataSeries = true;
            }

            for (let i = 0; i < this.DataSeries.length; i++) {
                let serie = this.DataSeries[i];
                if (serie.Show) {
                    serie.Draw(this);
                }
            }
        }

        private DrawLegend(): void {
            if (this.Legend.Show) {
                this.Legend.Draw(this);
            }
        }

        private DrawZoomControl(): void {
            if (this.ShowZoomControl) {
                this.ZoomControl.Draw(this);
            }
        }

        private DrawRangeControl(): void {
            if (this.ShowRangeControl) {
                this.RangeControl.Draw(this);
            }
        }

        private ShowTooltip(): void {
        }

        public PrintPreview(): void {
        }

        public Print(): void {
        }

        private ObjectIsNullOrEmpty(obj: any): boolean {
            let bRet: boolean = false;

            if (obj == null || obj == undefined || obj == "") {
                bRet = true;
            }

            return bRet;
        }

        public SearchXAxisByID(XAxisID: string): FChartXAxis {
            let xaxis: FChartXAxis = null;

            for (let i = 0; i < this.XAxes.length; i++) {
                if (this.XAxes[i].ID == XAxisID) {
                    xaxis = this.XAxes[i];
                    break;
                }
            }

            return xaxis;
        }

        public SearchYAxisByID(YAxisID: string): FChartYAxis {
            let yaxis: FChartYAxis = null;

            for (let i = 0; i < this.YAxes.length; i++) {
                if (this.YAxes[i].ID == YAxisID) {
                    yaxis = this.YAxes[i];
                    break;
                }
            }

            return yaxis;
        }

        public GetVisibleXAxesCount(): number {
            let nCount = 0;

            for (let i = 0; i < this.XAxes.length; i++) {
                let xaxis = this.XAxes[i];
                if (this.IsAxisVisible(xaxis)) {
                    nCount++;
                }
            }

            return nCount;
        }

        public GetUniqueXAxis(): FChartXAxis {
            let nXCount = this.GetVisibleXAxesCount();
            if (nXCount != 1) {
                return null;
            }

            let xaxis: FChartXAxis = null;
            for (let i = 0; i < this.XAxes.length; i++) {
                if (this.IsAxisVisible(this.XAxes[i])) {
                    xaxis = this.XAxes[i];
                    break;
                }
            }

            return xaxis;
        }

        public GetVisibleYAxesCount(): number {
            let nCount = 0;

            for (let i = 0; i < this.YAxes.length; i++) {
                let yaxis: FChartYAxis = this.YAxes[i];
                if (this.IsAxisVisible(yaxis)) {
                    nCount++;
                }
            }

            return nCount;
        }

        public GetUniqueYAxis(): FChartYAxis {
            let nYCount = this.GetVisibleYAxesCount();
            if (nYCount != 1) {
                return null;
            }

            let yaxis: FChartYAxis = null;
            for (let i = 0; i < this.YAxes.length; i++) {
                if (this.IsAxisVisible(this.YAxes[i])) {
                    yaxis = this.YAxes[i];
                    break;
                }
            }

            return yaxis;
        }

        public GetDisplayDataSeriesCount(): number {
            let nCount = 0;

            for (let i = 0; i < this.DataSeries.length; i++) {
                let serie: FChartDataSerie = this.DataSeries[i];
                if (serie.Show) {
                    nCount++;
                }
            }

            return nCount;
        }

        public GetSVGSVGElementByID(id: string, bNeedIdentify: boolean = false): SVGSVGElement {
            let svg: SVGSVGElement = null;

            if (bNeedIdentify) {
                id = this.IdentifyID(id);
            }

            for (let i = 0; i < this.m_arrSVG.length; i++) {
                if (this.m_arrSVG[i].id == id) {
                    svg = this.m_arrSVG[i];
                    break;
                }
            }

            return svg;
        }

        public GetPlotSVG(): SVGSVGElement {
            return this.PlotSVG;
        }

        public GetPlotWidth(): number {
            let svgPlot: SVGSVGElement = this.GetPlotSVG();
            return svgPlot.clientWidth;
        }

        public GetPlotHeight(): number {
            let svgPlot: SVGSVGElement = this.GetPlotSVG();
            return svgPlot.clientHeight;
        }

        public GetLegendSVG(): SVGSVGElement {
            let legendID = "svg-legend";

            return this.GetSVGSVGElementByID(legendID, true);
        }

        private GetYAxisAverageDiff(YAxisID: string): number {
            let arrAverageDiff = [];

            for (let i = 0; i < this.DataSeries.length; i++) {
                let serie: FChartDataSerie = this.DataSeries[i];
                if (serie.YAxisID == YAxisID) {
                    let dSum = 0;
                    serie.SortDataByY();
                    for (let j = 0; j < serie.Data.length; j++) {
                        if (j > 0) {
                            dSum += (serie.Data[j].Y - serie.Data[j - 1].Y);
                        }
                    }

                    let dAverage = dSum / (serie.Data.length - 1);
                    arrAverageDiff.push(dAverage);
                }
            }

            let dDiff = Number.MIN_VALUE;
            for (let i = 0; i < arrAverageDiff.length; i++) {
                if (arrAverageDiff[i] > dDiff) {
                    dDiff = arrAverageDiff[i];
                }
            }

            let yAxis: FChartYAxis = this.SearchYAxisByID(YAxisID);
            dDiff = FChartHelper.RoundFloatNumber(dDiff, yAxis.Tick.MaxFloatDigits);

            return dDiff;
        }

        private GetTickCount(averageDiff: number, max: number, min: number): KeyValuePair<number, number> {
            averageDiff = Math.abs(averageDiff);
            let obj: KeyValuePair<number, number> = null;
            let t1 = 0;
            let t2 = 0;
            let t = 0;
            let startVal: number = 0;
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

            obj = new KeyValuePair<number, number>(t, startVal);

            return obj;
        }

        private GetYAxisTickCount(YAxisID: string, averageDiff: number, max: number, min: number, len: number): NumberTicksInfo {
            let tickInfo: KeyValuePair<number, number> = this.GetTickCount(averageDiff, max, min);

            let obj: NumberTicksInfo = new NumberTicksInfo( tickInfo.Key, tickInfo.Value, averageDiff, 0 );

            let serie: FChartDataSerie = null;
            let yaxis: FChartYAxis = null;
            for (let i = 0; i < this.DataSeries.length; i++) {
                if (this.DataSeries[i].YAxisID == YAxisID) {
                    serie = this.DataSeries[i];
                }
            }

            for (let i = 0; i < this.YAxes.length; i++) {
                if (this.YAxes[i].ID == YAxisID) {
                    yaxis = this.YAxes[i];
                }
            }
            if (!this.ObjectIsNullOrEmpty(serie) && !this.ObjectIsNullOrEmpty(yaxis)) {
                let tickH = len / (tickInfo.Key + 1);
                obj.TickIntervalSpace = tickH;
                while (obj.TickIntervalSpace < yaxis.Tick.MinIntervalSpace) {
                    averageDiff *= 2;
                    obj = this.GetYAxisTickCount(YAxisID, averageDiff, max, min, len);
                }
            }

            return obj;
        }

        private GetXAxisAverageDiff(XAxisID: string): number {
            let arrAverageDiff = [];

            let xaxis: FChartXAxis = null;
            for (let i = 0; i < this.XAxes.length; i++) {
                if (this.XAxes[i].ID == XAxisID) {
                    xaxis = this.XAxes[i];
                    break;
                }
            }

            for (let i = 0; i < this.DataSeries.length; i++) {
                let serie = this.DataSeries[i];
                if (serie.XAxisID == XAxisID) {
                    let dSum = 0;
                    for (let j = 0; j < serie.Data.length; j++) {
                        if (j > 0) {
                            let x1 = serie.Data[j].X;
                            let x0 = serie.Data[j - 1].X;
                            let value1;
                            let value0;
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

                    let dAverage = dSum / (serie.Data.length - 1);
                    arrAverageDiff.push(dAverage);
                }
            }

            let dDiff: number = Number.MIN_VALUE;
            for (let i = 0; i < arrAverageDiff.length; i++) {
                if (arrAverageDiff[i] > dDiff) {
                    dDiff = arrAverageDiff[i];
                }
            }

            let xAxis: FChartXAxis = this.SearchXAxisByID(XAxisID);
            dDiff = FChartHelper.RoundFloatNumber(dDiff, xAxis.Tick.MaxFloatDigits);

            return dDiff;
        }

        private GetXAxisTickCount(XAxisID: string, averageDiff: number, max: number, min: number, len: number): NumberTicksInfo {
            let tickInfo: KeyValuePair<number, number> = this.GetTickCount(averageDiff, max, min);

            let obj: NumberTicksInfo = new NumberTicksInfo(tickInfo.Key, tickInfo.Value, averageDiff, 0);

            let serie: FChartDataSerie = null;
            let xaxis: FChartXAxis = null;
            for (let i = 0; i < this.DataSeries.length; i++) {
                if (this.DataSeries[i].XAxisID == XAxisID) {
                    serie = this.DataSeries[i];
                }
            }

            for (let i = 0; i < this.XAxes.length; i++) {
                if (this.XAxes[i].ID == XAxisID) {
                    xaxis = this.XAxes[i];
                }
            }
            if (!this.ObjectIsNullOrEmpty(serie) && !this.ObjectIsNullOrEmpty(xaxis)) {
                let tickW: number = len / (tickInfo.Key + 1);
                obj.TickIntervalSpace = tickW;
                while (obj.TickIntervalSpace < xaxis.Tick.MinIntervalSpace) {
                    averageDiff *= 2;
                    obj = this.GetXAxisTickCount(XAxisID, averageDiff, max, min, len);
                }
            }

            return obj;
        }

        private GetXAxisTickCount2(XAxisID: string, max: number, min: number, len: number): DateTicksInfo {
            let startVal: number = min;
            let obj: DateTicksInfo = new DateTicksInfo();
            obj.StartValue = min;
            obj.Ticks = new Array<KeyValuePair<number, string>>();

            let xaxis: FChartXAxis = null;
            for (let i = 0; i < this.XAxes.length; i++) {
                if (this.XAxes[i].ID == XAxisID) {
                    xaxis = this.XAxes[i];
                }
            }

            let timeSpan: number = 0;
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

            let xPixelsPerValue: number = len / (max - min);
            let nCount: number = 0;
            let arrTicks: Array<KeyValuePair<number, string>> = new Array<KeyValuePair<number, string>>();
            for (let i = min; i <= max; i += timeSpan) {
                if (i % timeSpan == 0) {
                    let strLabel: string = FChartHelper.GetDateTickLabel(i, xaxis.TickSelection);
                    arrTicks.push(new KeyValuePair<number, string>(i, strLabel));
                    nCount++;
                }
            }
            arrTicks.length = nCount;

            if (nCount > 1) {
                let w: number = timeSpan * xPixelsPerValue;
                let nMultiple: number = 1;
                while (w < xaxis.Tick.MinIntervalSpace) {
                    nMultiple++;
                    w = timeSpan * xPixelsPerValue * nMultiple;
                }

                let arrSelectionTicks: Array<KeyValuePair<number, string>> = new Array<KeyValuePair<number, string>>();

                for (let i = 0; i < arrTicks.length; i++) {
                    if (i % nMultiple == 0) {
                        arrSelectionTicks.push(arrTicks[i]);
                    }
                }

                if (xaxis.CullingTick) {
                    if (xaxis.CullingTicksCount >= arrSelectionTicks.length) {
                        for (let i = 0; i < arrSelectionTicks.length; i++) {
                            obj.Ticks.push(arrSelectionTicks[i]);
                        }
                    }
                    else {
                        nMultiple = 2;
                        let n: number = arrSelectionTicks.length;
                        let m: number = Math.ceil(n / 2);
                        while (m > xaxis.CullingTicksCount) {
                            nMultiple *= 2;
                            m = Math.ceil(m / 2);
                        }

                        for (let i = 0; i < arrSelectionTicks.length; i++) {
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
        }

        private CalculateXAxesHeight(h: number): number {
            let xAxesHeight: number = 0;
            let nCount: number = this.GetVisibleXAxesCount();

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

                let availableSpace: number = this.ChartHeight - xAxesHeight;
                if (this.ShowZoomControl && availableSpace > 0) {
                    if (this.ZoomControl.Layout == ZoomControlLayout.Top || this.ZoomControl.Layout == ZoomControlLayout.Bottom) {
                        let hz: number = availableSpace * 0.2;
                        this.ZoomControl.CalculateShortSize(hz);
                    }
                }
            }
            else {
                let predictHeight: number = this.XAxisDefaultHeight * nCount;
                let maxHeight: number = 0;
                if (this.Legend.Layout == LegendLayout.Top || this.Legend.Layout == LegendLayout.Bottom) {
                    maxHeight = h * 0.3;
                    if (this.ShowZoomControl) {
                        if (this.ZoomControl.Layout == ZoomControlLayout.Top || this.ZoomControl.Layout == ZoomControlLayout.Bottom) {
                            let hz: number = h * 0.1;
                            this.ZoomControl.CalculateShortSize(hz);
                            maxHeight = h * 0.25 + (hz - this.ZoomControl.ShortSize);
                        }
                    }
                }
                else {
                    maxHeight = h * 0.5;
                    if (this.ShowZoomControl) {
                        if (this.ZoomControl.Layout == ZoomControlLayout.Top || this.ZoomControl.Layout == ZoomControlLayout.Bottom) {
                            let hz: number = h * 0.1;
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
        }

        private CalculateYAxesWidth(w: number): number {
            let yAxesWidth: number = 0;
            let nCount: number = this.GetVisibleYAxesCount();

            if (this.UseFixedYAxesWidth) {
                let wYAxes: number = 0;
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
                let availableSpace: number = this.ChartWidth - yAxesWidth;
                if (this.ShowZoomControl && availableSpace > 0) {
                    if (this.ZoomControl.Layout == ZoomControlLayout.Left || this.ZoomControl.Layout == ZoomControlLayout.Right) {
                        let wz: number = availableSpace * 0.2;
                        this.ZoomControl.CalculateShortSize(wz);
                    }
                }
            }
            else {
                let predictWidth: number = this.YAxisDefaultWidth * nCount;
                let maxWidth: number = 0;
                if (this.Legend.Layout == LegendLayout.Left || this.Legend.Layout == LegendLayout.Right) {
                    maxWidth = w * 0.3;
                    if (this.ShowZoomControl) {
                        if (this.ZoomControl.Layout == ZoomControlLayout.Left || this.ZoomControl.Layout == ZoomControlLayout.Right) {
                            let wz: number = w * 0.1;
                            this.ZoomControl.CalculateShortSize(wz);
                            maxWidth = w * 0.25 + (wz - this.ZoomControl.ShortSize);
                        }
                    }
                }
                else {
                    maxWidth = w * 0.5;
                    if (this.ShowZoomControl) {
                        if (this.ZoomControl.Layout == ZoomControlLayout.Left || this.ZoomControl.Layout == ZoomControlLayout.Right) {
                            let wz: number = w * 0.1;
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
        }

        private CalculateChartSize(): boolean {
            let bRet: boolean = false;

            let divBind: HTMLElement = document.getElementById(this.BindTo);
            if (this.ObjectIsNullOrEmpty(divBind)) {
                return false;
            }

            let dWidth = divBind.clientWidth;
            let dHeight = divBind.clientHeight;

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
        }

        private CalculatePartsSize(): void {
            let dYAxesWidth: number = 0;
            let dPlotWidth: number = 0;

            let yAxesWidth: number = this.CalculateYAxesWidth(this.ChartWidth);
            let nCountY: number = this.GetVisibleYAxesCount();
            let yw: number = (yAxesWidth == 0 || nCountY == 0) ? 0 : yAxesWidth / nCountY;
            for (let i = 0; i < this.YAxes.length; i++) {
                if (this.IsAxisVisible(this.YAxes[i])) {
                    this.YAxes[i].Width = yw;
                    this.YAxes[i].Tick.Width = yw * 0.2;
                }
            }

            let xAxesHeight: number = this.CalculateXAxesHeight(this.ChartHeight);
            let nCountX: number = this.GetVisibleXAxesCount();
            let xh: number = (xAxesHeight == 0 || nCountX == 0) ? 0 : xAxesHeight / nCountX;
            for (let i = 0; i < this.XAxes.length; i++) {
                if (this.IsAxisVisible(this.XAxes[i])) {
                    this.XAxes[i].Height = xh;
                    this.XAxes[i].Tick.Height = xh * 0.2;
                }
            }

            let zoomControlWidth: number = 0;
            let zoomControlHeight: number = 0;
            if (this.ShowZoomControl) {
                if (this.ZoomControl.Layout == ZoomControlLayout.Left || this.ZoomControl.Layout == ZoomControlLayout.Right) {
                    zoomControlWidth = this.ZoomControl.ShortSize;
                }
                if (this.ZoomControl.Layout == ZoomControlLayout.Top || this.ZoomControl.Layout == ZoomControlLayout.Bottom) {
                    zoomControlHeight = this.ZoomControl.ShortSize;
                }
            }

            let rangeControlWidth: number = this.ShowRangeControl ? this.RangeControl.VerticalBarSize : 0;
            let rangeControlHeight: number = this.ShowRangeControl ? this.RangeControl.HorizontalBarSize : 0;

            if (this.Legend.Layout == LegendLayout.Left || this.Legend.Layout == LegendLayout.Right) {
                let w: number = this.ChartWidth - yAxesWidth - zoomControlWidth - rangeControlWidth;
                let h: number = this.ChartHeight - xAxesHeight - zoomControlHeight - rangeControlHeight;

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
                let w: number = this.ChartWidth - yAxesWidth - zoomControlWidth - rangeControlWidth;
                let h: number = this.ChartHeight - xAxesHeight - zoomControlHeight - rangeControlHeight;
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

            this.m_minx = -this.m_width / 2;
            this.m_maxx = this.m_width / 2;
            this.m_miny = -this.m_height / 2;
            this.m_maxy = this.m_height / 2;

            this.SetWindow();
        }

        private CalculatePartsPosition() {
            let nDisplayXAxesCount: number = this.GetVisibleXAxesCount();
            let xaxis: FChartXAxis = this.GetUniqueXAxis();

            let lyaxes: FChartYAxis[] = new Array<FChartYAxis>();
            let ryaxes: FChartYAxis[] = new Array<FChartYAxis>();
            for (let i = 0; i < this.YAxes.length; i++) {
                let yaxis: FChartYAxis = this.YAxes[i];
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

            lyaxes.sort((a, b) => {
                return FChartHelper.NumberCompare(b.Order, a.Order);
            });
            ryaxes.sort((a, b) => {
                return FChartHelper.NumberCompare(a.Order, b.Order);
            });

            let xStart = 0;
            let yStart = 0;

            let zoomControlWidth: number = 0;
            let zoomControlHeight: number = 0;
            if (this.ShowZoomControl) {
                if (this.ZoomControl.Layout == ZoomControlLayout.Left || this.ZoomControl.Layout == ZoomControlLayout.Right) {
                    zoomControlWidth = this.ZoomControl.ShortSize;
                }
                if (this.ZoomControl.Layout == ZoomControlLayout.Top || this.ZoomControl.Layout == ZoomControlLayout.Bottom) {
                    zoomControlHeight = this.ZoomControl.ShortSize;
                }
            }

            let rangeControlWidth: number = this.ShowRangeControl ? this.RangeControl.VerticalBarSize : 0;
            let rangeControlHeight: number = this.ShowRangeControl ? this.RangeControl.HorizontalBarSize : 0;

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

            for (let i = 0; i < lyaxes.length; i++) {
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

            let keepXStart = xStart;
            this.PlotPosition.X = xStart;
            xStart += this.PlotWidth;

            this.RangeControl.RightVerticalBarPosition.X = xStart;
            xStart += rangeControlWidth / 2;
            for (let i = 0; i < ryaxes.length; i++) {
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

            for (let i = 0; i < this.XAxes.length; i++) {
                let xaxis: FChartXAxis = this.XAxes[i];
                if (!this.IsAxisVisible(xaxis)) {
                    continue;
                }

                xaxis.X = keepXStart;
                xaxis.Y = yStart;
                yStart += xaxis.Height;
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
        }

        private CalculateYAxisTickCoordinate() {
            for (let i = 0; i < this.YAxes.length; i++) {
                let minY = Number.MAX_VALUE;
                let maxY = Number.MIN_VALUE;
                let yaxis: FChartYAxis = this.YAxes[i];
                if (!this.AxisHasDataSerie(yaxis)) {
                    continue;
                }

                for (let j = 0; j < this.DataSeries.length; j++) {
                    let serie = this.DataSeries[j];
                    if (serie.YAxisID != yaxis.ID) {
                        continue;
                    }

                    for (let k = 0; k < serie.Data.length; k++) {
                        let value: number = serie.Data[k].Y;
                        if (maxY < value) {
                            maxY = value;
                        }
                        if (minY > value) {
                            minY = value;
                        }
                    }
                }

                //
                let length = 0;
                let maxAverageDiff = this.GetYAxisAverageDiff(yaxis.ID);
                let obj = this.GetYAxisTickCount(yaxis.ID, maxAverageDiff, maxY, minY, this.m_height);
                let startValue = obj.StartValue;
                yaxis.StartValue = startValue;

                let iMultiple = 1;
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

                let nYTicksCount = obj.Ticks * iMultiple;
                let smallScale = obj.Scale / iMultiple;
                let yPixelsPerValue = this.m_height / ((nYTicksCount + 1) * smallScale);
                let reserveSpace = yPixelsPerValue * smallScale;
                let reserveTopSpace = yaxis.TopEnvelopeLine.Show ? reserveSpace * 0.5 : 0;
                let reserveBottomSpace = yaxis.BottomEnvelopeLine.Show ? reserveSpace * 0.5 : 0;

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
                    let y: number = this.m_coeff.ToWcY(this.m_height);
                    yaxis.Value2Wc.push({ Key: "bottom", Value: y });
                }

                yaxis.Value2Wc = new Array<KeyValuePair<string, number>>();
                let y1 = reserveTopSpace;
                for (let p = nYTicksCount; p >= 0; p--) {
                    if (p % iMultiple != 0) {
                        continue;
                    }
                    let value:number = p * smallScale;
                    let yd:number = y1 + ((nYTicksCount - p) * smallScale) * yPixelsPerValue;
                    let y: number = this.m_coeff.ToWcY(yd);
                    let strLabel: string = value.toString();
                    yaxis.Value2Wc.push({ Key: strLabel, Value: y });
                }

                if (yaxis.TopEnvelopeLine.Show) {
                    let y: number = this.m_coeff.ToWcY(0);
                    yaxis.Value2Wc.push({ Key: "top", Value: y });
                }
                yaxis.PlotY = reserveBottomSpace;
            }
        }

        private CalculateXAxisTickCoordinate() {
            for (let i = 0; i < this.XAxes.length; i++) {
                let xaxis: FChartXAxis = this.XAxes[i];
                if (!this.AxisHasDataSerie(xaxis)) {
                    continue;
                }

                let minX: any;
                let maxX: any;
                if (xaxis.ValueType == XAxisType.Date) {
                    minX = new Date("2050-01-01 00:00:00").valueOf();
                    maxX = new Date("1975-01-01 00:00:00").valueOf();
                }
                else if (xaxis.ValueType == XAxisType.Number) {
                    minX = Number.MAX_VALUE;
                    maxX = Number.MIN_VALUE;
                }

                for (let j = 0; j < this.DataSeries.length; j++) {
                    let serie: FChartDataSerie = this.DataSeries[j];
                    if (serie.XAxisID != xaxis.ID) {
                        continue;
                    }
                    serie.SortDataByX();

                    for (let k = 0; k < serie.Data.length; k++) {
                        let xValue: string = serie.Data[k].X;
                        let value;
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
                let length: number = 0;
                let maxAverageDiff: number = 0;
                let startValue: any;
                let xPixelsPerValue: number;
                let iType = -1;
                let nTicksCount: number = 0;
                let obj2: DateTicksInfo = null;

                xaxis.Value2Wc = new Array<KeyValuePair<string, number>>();
                if (xaxis.ValueType == XAxisType.Number || (xaxis.ValueType == XAxisType.Date && xaxis.TickSelection == XAxisDateTickSelection.DateAsNumber)) {
                    maxAverageDiff = this.GetXAxisAverageDiff(xaxis.ID);
                    let obj: NumberTicksInfo = this.GetXAxisTickCount(xaxis.ID, maxAverageDiff, maxX, minX, this.m_width);
                    xPixelsPerValue = this.m_width / (obj.Ticks * obj.Scale);
                    startValue = obj.StartValue;
                    xaxis.PixelsPerValue = xPixelsPerValue;
                    xaxis.Tick.Scale = obj.Scale;
                    nTicksCount = obj.Ticks;
                    iType = 0;
                }
                else if (xaxis.ValueType == XAxisType.Date) {
                    let obj: DateTicksInfo = this.GetXAxisTickCount2(xaxis.ID, maxX, minX, this.m_width);
                    xPixelsPerValue = this.m_width / (obj.Ticks.length);
                    startValue = obj.StartValue;
                    xaxis.PixelsPerValue = xPixelsPerValue;
                    nTicksCount = obj.Ticks.length;
                    obj2 = obj;
                    iType = 1;
                }

                if (iType == 0) {
                    for (let p = 0; p <= nTicksCount; p++) {
                        let dValue: number = p * xaxis.Tick.Scale;
                        let xd: number = dValue * xaxis.PixelsPerValue;
                        let x: number = this.m_coeff.ToWcX(xd);
                        let strLabel: string = dValue.toString();
                        xaxis.Value2Wc.push({ Key: strLabel, Value: x });
                    }
                }
                else if (iType == 1) {
                    for (let p = 0; p < obj2.Ticks.length; p++) {
                        let dValue = obj2.Ticks[p].Key - obj2.StartValue;
                        let xd = dValue * xPixelsPerValue;
                        let x = this.m_coeff.ToWcX(xd);
                        xaxis.Value2Wc.push({ Key: dValue.toString(), Value: x });
                    }
                }
            }
        }

        private CalculateDataPointCoordinate() {
            for (let i = 0; i < this.DataSeries.length; i++) {
                let serie = this.DataSeries[i];
                if (!serie.Show) {
                    continue;
                }

                let xaxis: FChartXAxis = this.SearchXAxisByID(serie.XAxisID);
                let yaxis: FChartYAxis = this.SearchYAxisByID(serie.YAxisID);

                for (let j = 0; j < this.DataSeries[i].Data.length; j++) {
                    let xValue = null;
                    let yValue = null;
                    let dp: DataPoint = this.DataSeries[i].Data[j];
                    if (xaxis.ValueType == XAxisType.Date) {
                        xValue = (new Date(dp.X)).valueOf();
                    }
                    else if (xaxis.ValueType == XAxisType.Number) {
                        xValue = parseFloat(dp.X);
                    }
                    yValue = dp.Y;

                    let fx = (xValue - xaxis.StartValue) * xaxis.PixelsPerValue;
                    let fy = this.m_height - (yValue - yaxis.StartValue) * yaxis.PixelsPerValue;
                    dp.fx = this.m_coeff.ToWcX(fx);
                    dp.fy = this.m_coeff.ToWcY(fy);
                }
            }
        }

        private AxisHasDataSerie(axis: FChartAxis) {
            if (FChartHelper.ObjectIsNullOrEmpty(axis)) {
                return false;
            }

            let bHas: boolean = false;
            for (let i = 0; i < this.DataSeries.length; i++) {
                let serie: FChartDataSerie = this.DataSeries[i];
                if (!serie.Show) {
                    continue;
                }
                bHas = axis.Type == ChartAxisType.XAxis ? (serie.XAxisID == axis.ID) : (serie.YAxisID == axis.ID);
                if (bHas) {
                    break;
                }
            }
                
            return bHas;
        }

        private IsAxisVisible(axis: FChartAxis): boolean {
            if (FChartHelper.ObjectIsNullOrEmpty(axis)) {
                return false;
            }

            return (axis.Show && this.AxisHasDataSerie(axis));
        }

        public AppendSVGToContainer(svg: SVGSVGElement): void {
            if (FChartHelper.ObjectIsNullOrEmpty(svg)) {
                return;
            }

            this.Container.appendChild(svg);
        }

        public RemoveSVGFromContainer(svg: SVGSVGElement): void {
            if (FChartHelper.ObjectIsNullOrEmpty(svg)) {
                return;
            }

            this.Container.removeChild(svg);
            svg = null;
        }

        public CreateSVG(id: string, position: string, left: string, top: string, width: string, height: string, bNeedIdentifyID: boolean = true): SVGSVGElement {
            let svg: SVGSVGElement = document.createElementNS("http://www.w3.org/2000/svg", "svg") as SVGSVGElement;
            id = bNeedIdentifyID ? this.IdentifyID(id) : id;
            svg.setAttribute("id", id);
            svg.style.setProperty("position", position);
            svg.style.setProperty("top", top);
            svg.style.setProperty("left", left);
            svg.style.setProperty("width", width);
            svg.style.setProperty("height", height);

            return svg;
        }

        private GenerateSVGParts() {
            let divContainer: HTMLDivElement = document.getElementById(this.BindTo) as HTMLDivElement;
            for (let i = 0; i < this.YAxes.length; i++) {
                if (this.IsAxisVisible(this.YAxes[i])) {
                    let yaxis: FChartYAxis = this.YAxes[i];
                    let svgY: SVGSVGElement = this.CreateSVG("svg-yaxis-" + yaxis.ID, "absolute", yaxis.X.toString(), yaxis.Y.toString(), yaxis.Width.toString(), this.m_height.toString());
                    divContainer.appendChild(svgY);
                    this.m_arrSVG.push(svgY);
                    this.YAxesSVGS.push(svgY);
                }
            }

            let svgPlot: SVGSVGElement = this.CreateSVG("svg-plot", "absolute", this.PlotPosition.X.toString(), this.PlotPosition.Y.toString(), this.PlotWidth.toString(), this.PlotHeight.toString());
            divContainer.appendChild(svgPlot);
            this.m_arrSVG.push(svgPlot);
            this.PlotSVG = svgPlot;

            let nXCount = this.GetVisibleXAxesCount();
            if (nXCount == 1) {
                let xaxis: FChartXAxis = this.GetUniqueXAxis();
                let svgTop: SVGSVGElement = this.CreateSVG("svg-xaxis-top", "absolute", this.PlotPosition.X.toString(), "0", this.PlotWidth.toString(), (xaxis.Height / 2).toString());
                divContainer.appendChild(svgTop);
                this.m_arrSVG.push(svgTop);
                this.XAxesSVGS.push(svgTop);

                let svgBottom: SVGSVGElement = this.CreateSVG("svg-xaxis-bottom", "absolute", this.PlotPosition.X.toString(), (this.PlotPosition.Y + this.m_height).toString(), this.PlotWidth.toString(), (xaxis.Height / 2).toString());
                svgBottom.style.setProperty("background-color", "none");
                divContainer.appendChild(svgBottom);
                this.m_arrSVG.push(svgBottom);
                this.XAxesSVGS.push(svgBottom);
            }
            else {
                for (let i = 0; i < this.XAxes.length; i++) {
                    let xaxis: FChartXAxis = this.XAxes[i];
                    if (!this.IsAxisVisible(xaxis)) {
                        continue;
                    }

                    let svgX: SVGSVGElement = this.CreateSVG("svg-xaxis-" + xaxis.ID, "absolute", xaxis.X.toString(), xaxis.Y.toString(), this.PlotWidth.toString(), xaxis.Height.toString());
                    divContainer.appendChild(svgX);
                    this.m_arrSVG.push(svgX);
                    this.XAxesSVGS.push(svgX);
                }
            }

            if (this.Legend.Show) {
                let svgLegend: SVGSVGElement = this.CreateSVG("svg-legend", "absolute", this.Legend.X.toString(), this.Legend.Y.toString(), this.Legend.Width.toString(), this.Legend.Height.toString());
                divContainer.appendChild(svgLegend);
                this.m_arrSVG.push(svgLegend);
            }

            if (this.ShowZoomControl) {
                let wz: number = 0;
                let hz: number = 0;
                if (this.ZoomControl.Layout == ZoomControlLayout.Left || this.ZoomControl.Layout == ZoomControlLayout.Right) {
                    wz = this.ZoomControl.ShortSize;
                    hz = this.ZoomControl.LongSize;
                }
                else if (this.ZoomControl.Layout == ZoomControlLayout.Top || this.ZoomControl.Layout == ZoomControlLayout.Bottom) {
                    wz = this.ZoomControl.LongSize;
                    hz = this.ZoomControl.ShortSize;
                }
                let svgZoomControl: SVGSVGElement = this.CreateSVG("svg-zoomcontrol", "absolute", this.ZoomControl.X.toString(), this.ZoomControl.Y.toString(), wz.toString(), hz.toString());
                divContainer.appendChild(svgZoomControl);
                this.m_arrSVG.push(svgZoomControl);

                svgZoomControl.style.setProperty("background-color", "lightgray");
            }

            if (this.ShowRangeControl) {
                let x: number = this.RangeControl.LeftVerticalBarPosition.X;
                let y: number = this.RangeControl.LeftVerticalBarPosition.Y;
                let wr: number = this.RangeControl.RightVerticalBarPosition.X + this.RangeControl.VerticalBarSize / 2 - x;
                let hr: number = this.RangeControl.BottomHorizontalBarPosition.Y + this.RangeControl.HorizontalBarSize / 2 - y;
                let svgRangeControl: SVGSVGElement = this.CreateSVG("svg-rangecontrol", "absolute", x.toString(), y.toString(), wr.toString(), hr.toString());
                divContainer.appendChild(svgRangeControl);
                this.m_arrSVG.push(svgRangeControl);
                svgRangeControl.style.setProperty("opacity", "0.5");
                svgRangeControl.style.setProperty("background-color", "transparent");
            }
        }

        private SetWindow() {
            if (this.m_width == 0 || this.m_height == 0) {
                return;
            }
            if (this.m_scale != 0.0) {
                this.m_xr = this.m_xl + this.m_scale * this.m_width;
                this.m_yb = this.m_yt - this.m_scale * this.m_height;
            }
            else {
                let xx1 = (this.m_maxy - this.m_miny) * this.m_width * 0.5 / this.m_height;
                let xx2 = (this.m_maxx - this.m_minx) * this.m_height * 0.5 / this.m_width;
                let scale1 = (this.m_maxy - this.m_miny) / this.m_height;
                let scale2 = (this.m_maxx - this.m_minx) / this.m_width;
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
        }

        private CalcCoefficient(): void {
            if (this.ZoomDirection == ChartZoomDirection.XAxis) {
                this.m_coeff.SetCoeff(this.m_width / (this.m_xr - this.m_xl), this.m_width * this.m_xl / (this.m_xr - this.m_xl),
                    this.m_height / (this.m_uyb - this.m_uyt), this.m_height * this.m_uyt / (this.m_uyb - this.m_uyt));
            }
            else if (this.ZoomDirection == ChartZoomDirection.YAxis) {
                this.m_coeff.SetCoeff(this.m_width / (this.m_uxr - this.m_uxl), this.m_width * this.m_uxl / (this.m_uxr - this.m_uxl),
                    this.m_height / (this.m_yb - this.m_yt), this.m_height * this.m_yt / (this.m_yb - this.m_yt));
            }
            else if (this.ZoomDirection == ChartZoomDirection.Both) {
                this.m_coeff.SetCoeff(this.m_width / (this.m_xr - this.m_xl), this.m_width * this.m_xl / (this.m_xr - this.m_xl),
                    this.m_height / (this.m_yb - this.m_yt), this.m_height * this.m_yt / (this.m_yb - this.m_yt));
            }
        }

        private PrepareContainer(): void {
            let divContainer: HTMLDivElement = document.getElementById(this.BindTo) as HTMLDivElement;
            if (FChartHelper.ObjectIsNullOrEmpty(divContainer)) {
                return;
            }
            this.Container = divContainer;
            divContainer.innerHTML = "";

            let frame: HTMLIFrameElement = document.createElement("iframe");
            let frameID: string = this.BindTo + "-frame";
            frame.setAttribute("id", frameID);
            frame.setAttribute("width", "100%");
            frame.setAttribute("height", "100%");
            frame.style.setProperty("position", "absoulte");
            frame.style.setProperty("left", "0px");
            frame.style.setProperty("top", "0px");
            frame.style.setProperty("border-width", "0");
            divContainer.appendChild(frame);

            frame = document.getElementById(frameID) as HTMLIFrameElement;
            frame.contentWindow.onresize = (e) => {
                if (this.IsWindowZooming) {
                    this.IsWindowZooming = false;
                    return;
                }
                this.OnResize(e);
            }

            this.SVGMeasure = this.CreateSVG("svg-measure", "absolute", "0", "0", divContainer.clientWidth.toString(), divContainer.clientHeight.toString());
            this.SVGMeasure.setAttribute("opacity", "0");
            divContainer.appendChild(this.SVGMeasure);

            if (!FChartHelper.ObjectIsNullOrEmpty(this.ZoomControl)) {
                this.ZoomControl.AttachedChart = this;
            }
            if (!FChartHelper.ObjectIsNullOrEmpty(this.RangeControl)) {
                this.RangeControl.AttachedChart = this;
            }
        }

        private ResetVariablesDefaultValue() {
            this.m_dXAxisLeftMargin = this.DEFAULT_XAXIS_LEFT_MARGIN;
            this.m_dXAxisRightMargin = this.DEFAULT_XAXIS_RIGHT_MARGIN;
            this.PlotLeftRange = 0;
            this.PlotRightRange = 1;
        }

        private SetCoordinate() {
            let divContainer = document.getElementById(this.BindTo);
            if (FChartHelper.ObjectIsNullOrEmpty(divContainer)) {
                return;
            }
            for (let i = 0; i < this.m_arrSVG.length; i++) {
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
            this.PlotSVG.ondblclick = (e) => {
                if (this.ShowZoomControl) {
                    this.ZoomToFull();
                }
            }

            for (let i = 0; i < this.m_arrSVG.length; i++) {
                this.m_arrSVG[i].onzoom = (e) => { e.cancelBubble = true; alert("svg zoom"); }
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
        }

        private ChartMouseDown: any = (e: MouseEvent) => {
            e.preventDefault();

            this.OnMouseDown(e);
            if (this.ShowZoomControl) {
                this.ZoomControl.OnMouseDown(e);
            }
            if (this.ShowRangeControl) {
                this.RangeControl.OnMouseDown(e);
            }
        };

        private ChartMouseMove: any = (e: MouseEvent) => {
            e.preventDefault();

            this.OnMouseMove(e);
            if (this.ShowZoomControl) {
                this.ZoomControl.OnMouseMove(e);
            }
            if (this.ShowRangeControl) {
                this.RangeControl.OnMouseMove(e);
            }
        }

        private ChartMouseUp: any = (e: MouseEvent) => {
            e.preventDefault();

            this.OnMouseUp(e);
            if (this.ShowZoomControl) {
                this.ZoomControl.OnMouseUp(e);
            }
            if (this.ShowRangeControl) {
                this.RangeControl.OnMouseUp(e);
            }
        }

        private ChartMouseOver: any = (e: MouseEvent) => {
            e.preventDefault();

            this.OnMouseOver(e);
        }
        private ChartMouseOut: any = (e: MouseEvent) => {
            e.preventDefault();

            this.OnMouseOut(e);
        }
        private ChartMouseWheel: any = (e: MouseEvent) => {
            e.preventDefault();

            this.OnMouseWheel(e);
        }

        // Resize
        public OnResize(e): void {
            if (!this.ValidateContainerSize()) {
                return;
            }

            let sz: Size = this.GetContainerSize();
            if (this.ContainerWidth == sz.Width && this.ContainerHeight == sz.Height) {
                return;
            }

            this.ContainerWidth = sz.Width;
            this.ContainerHeight = sz.Height;

            this.m_oldscale = this.m_scale;
            this.m_scale = 0;
            this.SetCoordinate();
            this.Draw();
            this.ZoomToScale(this.m_oldscale);
        }

        // Mouse events
        private OnMouseOver(e: MouseEvent): void {
        }

        private OnMouseOut(e: MouseEvent): void {
        }

        private OnMouseDown(e: MouseEvent): void {
        }

        private OnMouseMove(e: MouseEvent): void {
        }

        private OnMouseUp(e: MouseEvent): void {

        }

        private OnMouseWheel(e: MouseEvent): void {

        }

        private OnClick(e): void {
        }

        public GetAppropriateFontSizeForText(text: SVGTextElement, fontSize: number, space: number, bHorizontal: boolean = true): KeyValuePair<number, number> {
            let textInfo: KeyValuePair<number, number> = null;
            this.SVGMeasure.appendChild(text);
            let rightfontSize: number = fontSize;
            let labelBox = text.getBBox();

            if (bHorizontal) {
                if (labelBox.width > space) {
                    while (labelBox.width > space && rightfontSize > 0) {
                        rightfontSize--;
                        text.setAttribute("font-size", rightfontSize.toString());
                        labelBox = text.getBBox();
                    }
                }
                textInfo = new KeyValuePair<number, number>(rightfontSize, labelBox.width);
            }
            else {
                if (labelBox.height > space) {
                    while (labelBox.height > space && rightfontSize > 0) {
                        rightfontSize--;
                        text.setAttribute("font-size", rightfontSize.toString());
                        labelBox = text.getBBox();
                    }
                }
                textInfo = new KeyValuePair<number, number>(rightfontSize, labelBox.height);
            }

            this.SVGMeasure.removeChild(text);

            return textInfo;
        }

        public GetTextSize(lbl: string, fontSize: string, fontFamily: string, fontStyle: string, fontWeight: string): Size {
            let sz: Size = new Size(0, 0);
            let text: SVGTextElement = this.CreateSVGTextElement();
            FChartHelper.SetSVGTextAttributes(text, "text-1", "0", "0", lbl, "start", fontFamily, fontStyle, fontSize, fontWeight);
            this.SVGMeasure.appendChild(text);
            let labelBox = text.getBBox();
            sz.Width = labelBox.width;
            sz.Height = labelBox.height;
            this.SVGMeasure.removeChild(text);

            return sz;
        }

        public CreateSVGLineElement(): SVGLineElement {
            let line: SVGLineElement = document.createElementNS("http://www.w3.org/2000/svg", "line");
            return line;
        }

        public CreateSVGPolylineElement(): SVGPolylineElement {
            let polyline: SVGPolylineElement = document.createElementNS("http://www.w3.org/2000/svg", "polyline");
            return polyline;
        }

        public CreateSVGTextElement(): SVGTextElement {
            let text: SVGTextElement = document.createElementNS("http://www.w3.org/2000/svg", "text");
            return text;
        }

        public CreateSVGPathElement(): SVGPathElement {
            let path: SVGPathElement = document.createElementNS("http://www.w3.org/2000/svg", "path");
            return path;
        }

        public CreateSVGCircleElement(): SVGCircleElement {
            let circle: SVGCircleElement = document.createElementNS("http://www.w3.org/2000/svg", "circle");
            return circle;
        }

        public CreateSVGRectElement(): SVGRectElement {
            let rect: SVGRectElement = document.createElementNS("http://www.w3.org/2000/svg", "rect");
            return rect;
        }

        public CreateArc(x1: number, y1: number, x2: number, y2: number, rx: number, ry: number, xaxisrotation: number, largeArc: number, sweep: number, ox: number, oy: number, strokeWidth: number = 1, strokeColor: string = "black", fill: boolean = false, fillColor: string = "black"): SVGPathElement {
            let svgArc: SVGPathElement = this.CreateSVGPathElement();

            let d: string = "";

            let line: string = "L " + ox.toString() + " " + oy.toString() + " " + "L " + x1.toString() + " " + y1.toString() + " Z";
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
        }

        public IdentifyID(id: string): string {
            let retID: string;
            retID = this.BindTo + "-" + id;
            return retID;
        }
    }
//}