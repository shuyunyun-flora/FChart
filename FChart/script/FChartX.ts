/// <reference path="..\typings\jquery.d.ts"/>

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

    export enum LegendContentLayout {
        Horizontal,
        Vertical
    }

    export enum ChartZoomMode {
        MousePosition,
        Center
    }

    class ChartGraphObject {
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
        public Scale: number = 0;

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

        public Draw(chart: FChart): void {
        }
    }

    interface IChart {
        DataSeries: FChartDataSerie[];
        XAxes: FChartXAxis[];
        YAxes: FChartYAxis[];
        Zoom: number;

        ZoomIn(): void;
        ZoomOut(): void;
        ZoomToScale(scale: number): void;
        ZoomToFull(): void;
        ZoomToRegion(xl: number, yt: number, xr: number, yb: number): void;

        Render(): void;
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

    interface IChartPrinter {
        PrintPreview(): void;
        Print(): void;
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
        IsXAxisTick: boolean = false;
        MinIntervalSpace: number = 10;
        LabelLayout: TickLabelLayout = TickLabelLayout.CenterOfTick;
        LabelFormat: string = "";
        Rotation: number = 0;
        Width: number = 0;
        Height: number = 0;

        Draw(chart: FChart): void { };
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
        public Type: XAxisType = XAxisType.Date;
        public TickSelection: XAxisDateTickSelection = XAxisDateTickSelection.Day;
        public CullingTick: boolean = false;
        public CullingTicksCount: number = 0;
        public Title: FChartXAxisTitle = null;

        public Draw(chart: FChart): void {
            // Draw axis line and tick.
            let xAxisLine: SVGLineElement = chart.CreateSVGLineElement();
            let x = 0;
            let y = this.LineWidth / 2;
            let svg = chart.GetSVGSVGElementByID("svg-xaxis-" + this.ID);
            if (chart.GetDisplayXAxesCount() == 1) {
                svg = chart.GetSVGSVGElementByID("svg-xaxis-bottom");
            }
            FChartHelper.SetSVGLineAttributes(xAxisLine, "xaxis-line" + this.ID, x.toString(), y.toString(), svg.clientWidth.toString(), y.toString(), this.LineWidth.toString(), this.LineColor);
            svg.appendChild(xAxisLine);

            for (let i = 0; i < this.Value2Wc.length; i++) {
                let obj = this.Value2Wc[i];
                let value = obj.Key;
                let wcx = obj.Value;
                let ix = chart.PlotX + chart.m_coeff.ToDvcX(wcx);

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
                let oneTickSpan = this.Scale * this.PixelsPerValue;
                let xTickLabelMaxWidth = oneTickSpan * 0.8;
                let xTickLabelMinWidth = oneTickSpan * 0.15;
                let xTickLabelFontSize = this.Tick.FontSize;
                FChartHelper.SetSVGTextAttributes(tickLabel, tickLabelId, lx.toString(), ly.toString(), value, "middle", this.Tick.FontFamily, this.Tick.FontStyle, this.Tick.FontSize.toString(), this.Tick.FontWeight);
                let textInfo: KeyValuePair<number, number> = chart.GetAppropriateFontSizeForText(tickLabel, xTickLabelFontSize, xTickLabelMaxWidth);
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
        }

        private DrawTitle(chart: FChart): void {
            if (FChartHelper.ObjectIsNullOrEmpty(this.Title)) {
                return;
            }

            let nXCount = chart.GetDisplayXAxesCount();
            let svg: SVGSVGElement = null;
            let yStart = this.Height / 2.0;
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

            let dLabelFontSize = Math.abs(this.Title.FontSize);
            let x = svg.clientWidth / 2;
            let y = yStart + this.Height / 2.0 - dLabelFontSize * 0.125 - dLabelFontSize * 0.3 / 2;
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

        public PlotY: number = 0;

        public Draw(chart: FChart): void {
            // Draw axis line and tick.
            let svg = chart.GetSVGSVGElementByID("svg-yaxis-" + this.ID);
            let regionWidth = svg.clientWidth;
            let regionHeight = svg.clientHeight;
            let x = regionWidth - this.LineWidth / 2;
            let y = 0;
            let yAxisLine: SVGLineElement = chart.CreateSVGLineElement();


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

                let x1 = regionWidth - tickLineW;
                let x2 = regionWidth;
                let y1 = iy;
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
                    let svgChart = chart.GetSVGSVGElementByID("svg-plot");
                    let ex1 = 0;
                    let ey1 = 0;
                    let ex2 = svgChart.clientWidth;
                    let ey2 = 0;
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

                let tickLabel: SVGTextElement = chart.CreateSVGTextElement();
                let tickLabelId = "yaxis-tick-label-" + this.ID + "-" + value;
                let lx = 0;
                let ly = 0;
                let oneTickSpan = this.Scale * this.PixelsPerValue;
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
                ly = iy;
                ly = ly + yTickLabelFontSize / 2 - yTickLabelFontSize * 0.3 / 2;
                tickLabel.innerHTML = value;
                tickLabel.setAttribute("x", lx.toString());
                tickLabel.setAttribute("y", ly.toString());
                FChartHelper.SetSVGTextAttributes(tickLabel, "yaxis-ticklabel-" + value, lx.toString(), ly.toString(), (value == "top" || value == "bottom") ? "" : value, "end", this.FontFamily, this.FontStyle, yTickLabelFontSize.toString(), this.FontWeight);
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

            let svg: SVGSVGElement = chart.GetSVGSVGElementByID("svg-yaxis-" + this.ID);
            if (FChartHelper.ObjectIsNullOrEmpty(svg)) {
                return;
            }

            let regionWidth: number = svg.clientWidth;
            let regionHeight: number = svg.clientHeight;

            let dLabelFontSize = Math.abs(this.Title.FontSize);
            let x = regionWidth - this.TickWidth - this.MaxTickLabelWidth - this.MarginBetweenTickAndLabel * 2;
            let y = regionHeight / 2.0 + dLabelFontSize / 2 - dLabelFontSize * 0.3 / 2;
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
            if (!this.Show) {
                return;
            }

            let svgChart: SVGSVGElement = chart.GetSVGSVGElementByID("svg-plot");
            if (FChartHelper.ObjectIsNullOrEmpty(svgChart)) {
                return;
            }

            let serieLine: SVGPolylineElement = chart.CreateSVGPolylineElement();
            let id: string = "serie-polyline-" + this.XAxisID + "-" + this.YAxisID + "-" + this.ZOrder.toString();
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
                let ix: number = chart.PlotX + chart.m_coeff.ToDvcX(x);
                let iy: number = chart.m_coeff.ToDvcY(y);
                let pt: SVGPoint = svgChart.createSVGPoint();
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
            for (let i = 0; i < this.Data.length; i++) {
                let data: DataPoint = this.Data[i];
                let ix: number = chart.PlotX + chart.m_coeff.ToDvcX(data.fx);
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
            FChartHelper.SetCircleAttributes(circle, this.Key, this.X.toString(), this.Y.toString(), this.Radius.toString(), this.BackgroundColor, this.LineWidth.toString(), this.LineColor);

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
        public ContentLayout: LegendContentLayout = LegendContentLayout.Vertical;
        public Width: number = 0;
        public Height: number = 0;
        private MinWidth: number = 20;
        private MinHeight: number = 10;
        public ShapeWidth: number = 0;
        public LabelWidth: number = 0;
        public LabelHeight: number = 0;

        private FontSizeW: number = 0;
        private FontSizeH: number = 0;
        private LargeTextW: string = "";
        private LargeTextH: string = "";
        private readonly LEGEND_ITEM_MAX_WIDTH: number = 200;
        private readonly LEGEND_ITEM_MAX_HEIGHT: number = 50;
        public MAX_SHAPE_WIDTH: number = 20;
        private HorizontalMeasured: boolean = false;
        private VerticalMeasured: boolean = false;

        public PredictWidth(chart: FChart, w: number) {
            let dLegendItemWidth: number = Math.min(w, this.LEGEND_ITEM_MAX_WIDTH);
            if (this.ContentLayout == LegendContentLayout.Horizontal) {
                for (let i = 0; i < chart.DataSeries.length; i++) {
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
            let maxTextWidth: number = this.Width - this.MAX_SHAPE_WIDTH;
            let biggestTextWidth: number = 0;
            this.FontSizeW = this.FontSize;

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
            if (this.ContentLayout == LegendContentLayout.Horizontal) {

                this.Height = dLegendItemHeight;
            }
            else if (this.ContentLayout == LegendContentLayout.Vertical) {
                for (let i = 0; i < chart.DataSeries.length; i++) {
                    if (chart.DataSeries[i].Show) {
                        this.Height += dLegendItemHeight;
                    }
                }
            }

            // Measure.
            let maxTextHeight: number = dLegendItemHeight;
            let biggestTextHeight: number = 0;
            this.FontSizeH = this.FontSize;

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

            this.FontSize = this.FontSizeW > this.FontSizeH ? this.FontSizeH : this.FontSizeW;
            let textSize1: Size = chart.GetTextSize(this.LargeTextW, this.FontSize.toString(), this.FontFamily, this.FontStyle, this.FontWeight);
            let textSize2: Size = chart.GetTextSize(this.LargeTextH, this.FontSize.toString(), this.FontFamily, this.FontStyle, this.FontWeight);
            this.LabelWidth = textSize1.Width;
            this.LabelHeight = textSize2.Height;

            this.Width = 0;
            let dLegendItemWidth: number = this.ShapeWidth + this.LabelWidth;
            if (this.ContentLayout == LegendContentLayout.Horizontal) {
                for (let i = 0; i < chart.DataSeries.length; i++) {
                    if (chart.DataSeries[i].Show) {
                        this.Width += dLegendItemWidth;
                    }
                }
            }
            else if (this.ContentLayout == LegendContentLayout.Vertical) {
                this.Width = dLegendItemWidth;
            }

            this.Height = 0;
            let dLegendItemHeight: number = this.LabelHeight;
            if (this.ContentLayout == LegendContentLayout.Horizontal) {
                this.Height = dLegendItemHeight;
            }
            else if (this.ContentLayout == LegendContentLayout.Vertical) {
                for (let i = 0; i < chart.DataSeries.length; i++) {
                    if (chart.DataSeries[i].Show) {
                        this.Height += dLegendItemHeight;
                    }
                }
            }

            this.FontSize /= 1.5;                       // Leave some margin for box.
        }

        Draw(chart: FChart): void {
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

            let svgLegend: SVGSVGElement = chart.GetSVGSVGElementByID("svg-legend");
            if (FChartHelper.ObjectIsNullOrEmpty(svgLegend)) {
                return;
            }
            let svgPlot: SVGSVGElement = chart.GetPlotSVG();
            let plotWidth = svgPlot.clientWidth;
            let plotHeight = svgPlot.clientHeight;
            let nSeriesCount = chart.GetVisibleDataSeriesCount();
            let itemWidth = this.Width;
            let itemHeight = this.Height / nSeriesCount;
            this.ShapeWidth = Math.min(this.Width * 0.3, this.MAX_SHAPE_WIDTH);
            let maxTextWidth: number = this.Width - this.ShapeWidth;

            // Draw.
            let rectOutline: SVGRectElement = chart.CreateSVGRectElement();
            FChartHelper.SetSVGRectAttributes(rectOutline, "legend-outline", "0", "0", this.Width.toString(), this.Height.toString(), "1", "blue");
            svgLegend.appendChild(rectOutline);

            let sixthOfH = itemHeight / 6;
            let fifthOfW = this.ShapeWidth / 5;

            let yStart: number = 0;
            for (let i = 0; i < chart.DataSeries.length; i++) {
                let serie: FChartDataSerie = chart.DataSeries[i];
                if (!serie.Show) {
                    continue;
                }

                let line: SVGLineElement = chart.CreateSVGLineElement();
                let x1: number = fifthOfW;
                let y1: number = yStart + sixthOfH * 3;
                let x2: number = fifthOfW * 4;
                let y2: number = yStart + sixthOfH * 3;
                let lineID: string = "legend-item-line-" + serie.XAxisID + "-" + serie.YAxisID;
                let lineThick = sixthOfH * 2;
                FChartHelper.SetSVGLineAttributes(line, lineID, x1.toString(), y1.toString(), x2.toString(), y2.toString(), lineThick.toString(), serie.LineColor);
                svgLegend.appendChild(line);

                if (!FChartHelper.ObjectIsNullOrEmpty(serie.Mark)) {
                    let mark: ChartMark = $.extend(true, {}, serie.Mark);
                    let mx = this.ShapeWidth / 2;
                    let my = yStart + itemHeight / 2;
                    mark.AttatchTo = MarkAttachTo.Legend;
                    mark.Rotation = 0;
                    mark.X = mx;
                    mark.Y = my;
                    mark.Width = fifthOfW * 3;
                    mark.Height = sixthOfH * 4;
                    if (typeof (mark) == "CircleMark") {
                        (mark as CircleMark).Radius = sixthOfH * 2;
                    }

                    mark.Draw(chart);
                }

                let lbl: string = serie.Label;
                let text: SVGTextElement = chart.CreateSVGTextElement();
                let lx: number = this.ShapeWidth;
                let ly = yStart + itemHeight / 2 + this.FontSize / 2 - this.FontSize * 0.3 / 2;
                let textID: string = "legend-item-" + i.toString() + "-" + lbl;
                FChartHelper.SetSVGTextAttributes(text, textID, lx.toString(), ly.toString(), lbl, "start", this.FontFamily, this.FontStyle, this.FontSize.toString(), this.FontWeight);
                svgLegend.appendChild(text);

                yStart += itemHeight;
            }
        };
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

        public static SetCircleAttributes(circle: SVGCircleElement, id: string, cx: string, cy: string, r: string, fill: string, strokeWidth: string, stroke: string): void {
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

    export class FChart implements IChart, IChartPrinter {
        public BindTo: string;
        public DataSeries: FChartDataSerie[] = new Array<FChartDataSerie>();
        public Legend: FChartLegend = new FChartLegend();
        public Zoom: number = 1.0;
        public ZoomMode: ChartZoomMode = ChartZoomMode.Center;

        public XAxisLeftMargin: number = 10;
        public XAxisRightMargin: number = 50;
        public XAxes: FChartXAxis[] = new Array<FChartXAxis>();
        public YAxes: FChartYAxis[] = new Array<FChartYAxis>();
        public AspectRatio: number = 1.0;
        public KeepAspectRatio: boolean = false;            // If false, ignore AspectRatio, If true, consider AspectRatio.
        public Zoomable: boolean = true;

        public SVGMeasure: SVGSVGElement = null;
        private m_arrSVG: SVGSVGElement[] = new Array<SVGSVGElement>();

        public UseFixedYAxesWidth: boolean = false;
        public FixedYAxesWidth: number = 0;
        public FixedYAxesLengthType: LengthType = LengthType.Value;

        public UseFixedXAxesHeight: boolean = false;
        public FixedXAxesHeight: number = 0;
        public FixedXAxesLengthType: LengthType = LengthType.Percentage;

        private readonly ONE_DAY: number = 86400000;
        private readonly ONE_HOUR: number = 3600000;
        private readonly ONE_MINUTE: number = 60000;
        private readonly ONE_SECOND: number = 1000;
        private readonly ONE_MILLISECOND: number = 1;

        private readonly MIN_CHART_WIDTH: number = 50;
        private readonly MIN_CHART_HEIGHT: number = 50;

        private ChartWidth: number = 0;
        private ChartHeight: number = 0;
        private PlotWidth: number = 0;
        private PlotHeight: number = 0;
        public MaxYAxisWidth: number = 100;
        public MaxXAxisHeight: number = 100;

        private YAxisDefaultWidth: number = 80;
        private XAxisDefaultHeight: number = 80;

        private SortedDataSeries: boolean = false;

        public ShowScrollBar: boolean = false;

        public GridX: FChartGrid = new FChartGrid();
        public GridY: FChartGrid = new FChartGrid();
        public Tooltip: FChartTooltip = new FChartTooltip();

        public DrawDataPoint: any = function (data: DataPoint) { }

        private PlotPartX: number = 0;
        private PlotPartY: number = 0;
        private ZoomFactor: number = 1.2;
        private SCALE_ULIMIT: number = 0.002;
        private SCALE_LLIMIT: number = 1000;

        // These variables with m_* prefix are used for plot area.
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

        get PlotX() {
            return this.XAxisLeftMargin > 0 ? this.XAxisLeftMargin : 0;
        }

        public m_coeff: FChartCoeff = new FChartCoeff();
        private m_scale: number = 0.0;
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
            this.m_scale /= this.ZoomFactor;
            let scale = 0.5 - 0.5 / this.ZoomFactor;
            this.m_xl += (this.m_xr - this.m_xl) * scale;
            this.m_yt -= (this.m_yt - this.m_yb) * scale;

            this.SetWindow();
            this.Draw();
        }

        public ZoomOut(): void {
            this.m_scale *= this.ZoomFactor;
            let scale = 0.5 * (this.ZoomFactor - 1);
            this.m_xl -= (this.m_xr - this.m_xl) * scale;
            this.m_yt += (this.m_xr - this.m_xl) * scale;

            this.SetWindow();
            this.Draw();
        }

        public ZoomToScale(dNewScale: number): void {
            if (dNewScale < this.SCALE_ULIMIT) {
                dNewScale = this.SCALE_ULIMIT;
            }
            if (dNewScale > this.SCALE_LLIMIT) {
                dNewScale = this.SCALE_LLIMIT;
            }

            let oldScale = this.m_scale;
            this.m_scale = dNewScale;

            if (dNewScale > oldScale) {         // Zoom Out
                let zoomFactor = dNewScale / oldScale;
                let scale = 0.5 * (this.ZoomFactor - 1);
                this.m_xl -= (this.m_xr - this.m_xl) * scale;
                this.m_yt += (this.m_xr - this.m_xl) * scale;
            }
            else {                              // Zoom In
                let ZoomFactor = dNewScale / oldScale;
                let scale = 0.5 - 0.5 / this.ZoomFactor;
                this.m_xl += (this.m_xr - this.m_xl) * scale;
                this.m_yt -= (this.m_yt - this.m_yb) * scale;
            }

            this.SetWindow();
            this.Draw();
        }

        public ZoomToFull(): void {
            let minx: number = this.m_minx;
            let maxx: number = this.m_maxx;
            let miny: number = this.m_miny;
            let maxy: number = this.m_maxy;

            this.ZoomToRegion(minx, maxy, maxx, miny);
        }

        public ZoomToRegion(xl: number, yt: number, xr: number, yb: number): void {
            if (xr - xl < 1.0e-30) {
                return;
            }

            let xc: number = (xl + xr) * 0.5;
            let yc: number = (yt + yb) * 0.5;
            let ratio: number = (this.m_yt - this.m_yb) / (this.m_xr - this.m_xl);
            let regionRatio: number = (yt - yb) / (xr - xl);
            let newScale: number = 0;

            if (regionRatio > ratio) {
                newScale = this.m_scale * (yt - yb) / (this.m_yt - this.m_yb);
            }
            else {
                newScale = this.m_scale * (xr - xl) / (this.m_xr - this.m_xl);
            }

            let dx: number = (this.m_xr - this.m_xl) * newScale / this.m_scale;
            let dy: number = (this.m_yt - this.m_yb) * newScale / this.m_scale;

            this.m_xl = (xc - dx * 0.5);
            this.m_xr = (xc + dx * 0.5);
            this.m_yb = (yc - dy * 0.5);
            this.m_yt = (yc + dy * 0.5);
            this.m_scale = newScale;

            this.SetWindow();
            this.Draw();
        }

        private ContainerWidth: number = 0;
        private ContainerHeight: number = 0;
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

            this.PrepareContainer();
            this.SetCoordinate();
            this.Draw();

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

        private Draw(): void {
            this.DrawXAxes();
            this.DrawYAxes();
            this.DrawGridLine();
            this.DrawDataSeries();
            this.DrawLegend();
        }

        private DrawXAxes(): void {
            for (let i = 0; i < this.XAxes.length; i++) {
                if (this.XAxes[i].Show) {
                    this.XAxes[i].Draw(this);
                }
            }
        }

        private DrawYAxes(): void {
            for (let i = 0; i < this.YAxes.length; i++) {
                if (this.YAxes[i].Show) {
                    this.YAxes[i].Draw(this);
                }
            }
        }

        private DrawGridLine(): void {
            let nXAxesCount: number = this.GetDisplayXAxesCount();
            let nYAxesCount: number = this.GetDisplayYAxesCount();
            let svgPlot: SVGSVGElement = this.GetPlotSVG();
            if (FChartHelper.ObjectIsNullOrEmpty(svgPlot)) {
                return;
            }

            let plotWidth: number = svgPlot.clientWidth;
            let plotHeight: number = svgPlot.clientHeight;

            if (this.GridX.Show && nXAxesCount <= 1) {
                let xaxis: FChartXAxis = this.GetXAxis();
                if (FChartHelper.ObjectIsNullOrEmpty(xaxis)) {
                    ;
                }

                for (let i = 0; i < xaxis.Value2Wc.length; i++) {
                    let obj: any = xaxis.Value2Wc[i];
                    let key = obj.Key;
                    let value = obj.Value;
                    let ix = this.PlotX + this.m_coeff.ToDvcX(value);
                    let y1 = 0;
                    let y2 = plotHeight;
                    let id = xaxis.ID + "-x-gridline-" + i.toString();
                    let line: SVGLineElement = this.CreateSVGLineElement();
                    FChartHelper.SetSVGLineAttributes(line, id, ix.toString(), y1.toString(), ix.toString(), y2.toString(), this.GridX.LineWidth.toString(), this.GridX.LineColor);
                    svgPlot.appendChild(line);
                }
            }

            for (let i = 0; i < this.GridX.Lines.length; i++) {
                let gridline: FChartGridLine = this.GridX.Lines[i];
                let xaxis: FChartXAxis = this.SearchXAxisByID(gridline.AxisID);
                if (FChartHelper.ObjectIsNullOrEmpty(xaxis)) {
                    continue;
                }

                let ix: number = this.PlotX + xaxis.GetCoordByValue(gridline.Value);
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
                let yaxis: FChartYAxis = this.GetYAxis();
                if (FChartHelper.ObjectIsNullOrEmpty(yaxis)) {
                    ;
                }

                for (let i = 0; i < yaxis.Value2Wc.length; i++) {
                    let obj: KeyValuePair<string, number> = yaxis.Value2Wc[i];
                    let key = obj.Key;
                    let value = obj.Value;
                    let iy = this.m_coeff.ToDvcY(value);
                    let x1 = this.PlotX;
                    let x2 = this.PlotX + plotWidth;

                    if (key == "top" || key == "bottom") {
                        continue;
                    }
                    let id = yaxis.ID + "-y-gridline-" + i.toString();
                    let line: SVGLineElement = this.CreateSVGLineElement();
                    FChartHelper.SetSVGLineAttributes(line, id, x1.toString(), iy.toString(), x2.toString(), iy.toString(), this.GridY.LineWidth.toString(), this.GridY.LineColor);
                    svgPlot.appendChild(line);
                }
            }
            for (let i = 0; i < this.GridY.Lines.length; i++) {
                let gridline: FChartGridLine = this.GridY.Lines[i];
                let yaxis: FChartYAxis = this.SearchYAxisByID(gridline.AxisID);
                if (FChartHelper.ObjectIsNullOrEmpty(yaxis)) {
                    continue;
                }

                let iy: number = yaxis.GetCoordByValue(gridline.Value);
                let x1: number = this.PlotX;
                let x2: number = this.PlotX + plotWidth;
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

                lx += this.PlotX;

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

        public GetDisplayXAxesCount(): number {
            let nCount = 0;

            for (let i = 0; i < this.XAxes.length; i++) {
                let xaxis = this.XAxes[i];
                if (xaxis.Show) {
                    nCount++;
                }
            }

            return nCount;
        }

        public GetXAxis(): FChartXAxis {
            let nXCount = this.GetDisplayXAxesCount();
            if (nXCount != 1) {
                return null;
            }

            let xaxis: FChartXAxis = null;
            for (let i = 0; i < this.XAxes.length; i++) {
                if (this.XAxes[i].Show) {
                    xaxis = this.XAxes[i];
                    break;
                }
            }

            return xaxis;
        }

        public GetDisplayYAxesCount(): number {
            let nCount = 0;

            for (let i = 0; i < this.YAxes.length; i++) {
                let yaxis = this.YAxes[i];
                if (yaxis.Show) {
                    nCount++;
                }
            }

            return nCount;
        }

        public GetYAxis(): FChartYAxis {
            let nYCount = this.GetDisplayYAxesCount();
            if (nYCount != 1) {
                return null;
            }

            let yaxis: FChartYAxis = null;
            for (let i = 0; i < this.YAxes.length; i++) {
                if (this.YAxes[i].Show) {
                    yaxis = this.YAxes[i];
                    break;
                }
            }

            return yaxis;
        }

        public GetVisibleDataSeriesCount(): number {
            let nCount = 0;

            for (let i = 0; i < this.DataSeries.length; i++) {
                let serie: FChartDataSerie = this.DataSeries[i];
                if (serie.Show) {
                    nCount++;
                }
            }

            return nCount;
        }

        public GetSVGSVGElementByID(id: string): SVGSVGElement {
            let svg: SVGSVGElement = null;

            for (let i = 0; i < this.m_arrSVG.length; i++) {
                if (this.m_arrSVG[i].id == id) {
                    svg = this.m_arrSVG[i];
                    break;
                }
            }

            return svg;
        }

        public GetPlotSVG(): SVGSVGElement {
            let plotID = "svg-plot";

            return this.GetSVGSVGElementByID(plotID);
        }

        public GetLegendSVG(): SVGSVGElement {
            let legendID = "svg-legend";

            return this.GetSVGSVGElementByID(legendID);
        }

        private GetYAxisAverageDiff(YAxisID: string): number {
            let arrAverageDiff = [];

            for (let i = 0; i < this.DataSeries.length; i++) {
                let serie: FChartDataSerie = this.DataSeries[i];
                if (serie.YAxisID == YAxisID) {
                    let dSum = 0;
                    serie.Data.sort((a, b) => {
                        return FChartHelper.NumberCompare(a.Y, b.Y);
                    });

                    for (let j = 0; j < serie.Data.length; j++) {
                        if (j > 0) {
                            dSum += (serie.Data[j].Y - serie.Data[j - 1].Y);
                        }
                    }

                    let dAverage = dSum / (serie.Data.length - 1);
                    arrAverageDiff.push(dAverage);
                }
            }

            let dDiff = -999999999;
            for (let i = 0; i < arrAverageDiff.length; i++) {
                if (arrAverageDiff[i] > dDiff) {
                    dDiff = arrAverageDiff[i];
                }
            }

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

                    let dAverage = dSum / (serie.Data.length - 1);
                    arrAverageDiff.push(dAverage);
                }
            }

            let dDiff = -999999999;
            for (let i = 0; i < arrAverageDiff.length; i++) {
                if (arrAverageDiff[i] > dDiff) {
                    dDiff = arrAverageDiff[i];
                }
            }

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
                let nCount: number = this.GetDisplayXAxesCount();
                let predictHeight: number = this.XAxisDefaultHeight * nCount;
                let maxHeight: number = 0;
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
        }

        private CalculateYAxesWidth(w: number): number {
            let yAxesWidth: number = 0;

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
            }
            else {
                let nCount: number = this.GetDisplayYAxesCount();
                let predictWidth: number = this.YAxisDefaultWidth * nCount;
                let maxWidth: number = 0;
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
            let nCountY: number = this.GetDisplayYAxesCount();
            let yw: number = yAxesWidth / nCountY;
            for (let i = 0; i < this.YAxes.length; i++) {
                if (this.YAxes[i].Show) {
                    this.YAxes[i].Width = yw;
                    this.YAxes[i].Tick.Width = yw * 0.2;
                }
            }

            let xAxesHeight: number = this.CalculateXAxesHeight(this.ChartHeight);
            let nCountX: number = this.GetDisplayXAxesCount();
            let xh: number = xAxesHeight / nCountX;
            for (let i = 0; i < this.XAxes.length; i++) {
                if (this.XAxes[i].Show) {
                    this.XAxes[i].Height = xh;
                    this.XAxes[i].Tick.Height = xh * 0.2;
                }
            }

            if (this.Legend.Layout == LegendLayout.Left || this.Legend.Layout == LegendLayout.Right) {
                let w: number = this.ChartWidth - yAxesWidth;
                let h: number = this.ChartHeight - xAxesHeight;
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
                let w: number = this.ChartWidth - yAxesWidth;
                let h: number = this.ChartHeight - xAxesHeight;
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
        }

        private CalculatePartsPosition() {
            let nDisplayXAxesCount: number = this.GetDisplayXAxesCount();
            let xaxis: FChartXAxis = this.GetXAxis();

            let lyaxes: FChartYAxis[] = new Array<FChartYAxis>();
            let ryaxes: FChartYAxis[] = new Array<FChartYAxis>();
            for (let i = 0; i < this.YAxes.length; i++) {
                let yaxis: FChartYAxis = this.YAxes[i];
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

            lyaxes.sort((a, b) => {
                return FChartHelper.NumberCompare(b.Order, a.Order);
            });
            ryaxes.sort((a, b) => {
                return FChartHelper.NumberCompare(a.Order, b.Order);
            });

            let xStart = 0;
            let yStart = 0;
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

            for (let i = 0; i < lyaxes.length; i++) {
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

            let keepXStart = xStart;
            this.PlotPartX = xStart;
            xStart += this.PlotWidth;
            for (let i = 0; i < ryaxes.length; i++) {
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

            for (let i = 0; i < this.XAxes.length; i++) {
                let xaxis: FChartXAxis = this.XAxes[i];
                if (!xaxis.Show) {
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
                }
                else {
                    this.Legend.Y = yStart;
                }
            }
        }

        private CalculateYAxisTickCoordinate() {
            for (let i = 0; i < this.YAxes.length; i++) {
                let minY = 99999999;
                let maxY = -99999999;
                let yaxis: FChartYAxis = this.YAxes[i];
                if (!yaxis.Show) {
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
                yaxis.Scale = obj.Scale;

                if (yaxis.BottomEnvelopeLine.Show) {
                    let y: number = this.m_coeff.ToWcY(this.m_height);
                    yaxis.Value2Wc.push({ Key: "bottom", Value: y });
                }

                let y1 = reserveTopSpace;
                for (let p = nYTicksCount; p >= 0; p--) {
                    if (p % iMultiple != 0) {
                        continue;
                    }
                    let value = p * smallScale;
                    let yd = y1 + ((nYTicksCount - p) * smallScale) * yPixelsPerValue;
                    let y = this.m_coeff.ToWcY(yd);
                    yaxis.Value2Wc.push({ Key: value.toString(), Value: y });
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
                if (!xaxis.Show) {
                    continue;
                }
                let minX: any;
                let maxX: any;
                if (xaxis.Type == XAxisType.Date) {
                    minX = new Date("2050-01-01 00:00:00").valueOf();
                    maxX = new Date("1975-01-01 00:00:00").valueOf();
                }
                else if (xaxis.Type == XAxisType.Number) {
                    minX = 99999999;
                    maxX = -99999999;
                }

                for (let j = 0; j < this.DataSeries.length; j++) {
                    let serie: FChartDataSerie = this.DataSeries[j];
                    if (serie.XAxisID != xaxis.ID) {
                        continue;
                    }

                    serie.Data.sort((a, b) => {
                        let value1: number;
                        let value2: number;
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

                    for (let k = 0; k < serie.Data.length; k++) {
                        let xValue: string = serie.Data[k].X;
                        let value;
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
                let length: number = 0;
                let maxAverageDiff: number = 0;
                let startValue: any;
                let xPixelsPerValue: number;
                let iType = -1;
                let nTicksCount: number = 0;
                let obj2: DateTicksInfo = null;

                if (xaxis.Type == XAxisType.Number || (xaxis.Type == XAxisType.Date && xaxis.TickSelection == XAxisDateTickSelection.DateAsNumber)) {
                    maxAverageDiff = this.GetXAxisAverageDiff(xaxis.ID);
                    let obj: NumberTicksInfo = this.GetXAxisTickCount(xaxis.ID, maxAverageDiff, maxX, minX, this.m_width);
                    xPixelsPerValue = this.m_width / (obj.Ticks * obj.Scale);
                    startValue = obj.StartValue;
                    xaxis.PixelsPerValue = xPixelsPerValue;
                    xaxis.Scale = obj.Scale;
                    nTicksCount = obj.Ticks;
                    iType = 0;
                }
                else if (xaxis.Type == XAxisType.Date) {
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
                        let dValue = p * xaxis.Scale;
                        let xd = dValue * xaxis.PixelsPerValue;
                        let x = this.m_coeff.ToWcX(xd);
                        xaxis.Value2Wc.push({ Key: dValue.toString(), Value: x });
                        length++;
                    }
                    xaxis.Value2Wc.length = length;
                }
                else if (iType == 1) {
                    for (let p = 0; p < obj2.Ticks.length; p++) {
                        let dValue = obj2.Ticks[p].Key - obj2.StartValue;
                        let xd = dValue * xPixelsPerValue;
                        let x = this.m_coeff.ToWcX(xd);
                        xaxis.Value2Wc.push({ Key: dValue.toString(), Value: x });
                        length++;
                    }
                    xaxis.Value2Wc.length = length;
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
                    if (xaxis.Type == XAxisType.Date) {
                        xValue = (new Date(dp.X)).valueOf();
                    }
                    else if (xaxis.Type == XAxisType.Number) {
                        xValue = parseInt(dp.X);
                    }
                    yValue = dp.Y;

                    let fx = (xValue - xaxis.StartValue) * xaxis.PixelsPerValue;
                    let fy = this.m_height - (yValue - yaxis.StartValue) * yaxis.PixelsPerValue;
                    dp.fx = this.m_coeff.ToWcX(fx);
                    dp.fy = this.m_coeff.ToWcY(fy);
                }
            }
        }

        private CreateSVG(id: string, position: string, left: string, top: string, width: string, height: string): SVGSVGElement {
            let svg: SVGSVGElement = document.createElementNS("http://www.w3.org/2000/svg", "svg") as SVGSVGElement;

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
                if (this.YAxes[i].Show) {
                    let yaxis: FChartYAxis = this.YAxes[i];
                    let svgY = this.CreateSVG("svg-yaxis-" + yaxis.ID, "absolute", yaxis.X.toString(), yaxis.Y.toString(), yaxis.Width.toString(), this.m_height.toString());
                    divContainer.appendChild(svgY);
                    this.m_arrSVG.push(svgY);
                }
            }

            let svgPlot: SVGSVGElement = this.CreateSVG("svg-plot", "absolute", this.PlotPartX.toString(), this.PlotPartY.toString(), this.PlotWidth.toString(), this.PlotHeight.toString());
            divContainer.appendChild(svgPlot);
            this.m_arrSVG.push(svgPlot);

            let nXCount = this.GetDisplayXAxesCount();
            if (nXCount == 1) {
                let xaxis = this.GetXAxis();
                let svgTop: SVGSVGElement = this.CreateSVG("svg-xaxis-top", "absolute", this.PlotPartX.toString(), "0", this.PlotWidth.toString(), (xaxis.Height / 2).toString());
                divContainer.appendChild(svgTop);
                this.m_arrSVG.push(svgTop);

                let svgBottom: SVGSVGElement = this.CreateSVG("svg-xaxis-bottom", "absolute", this.PlotPartX.toString(), (this.PlotPartY + this.m_height).toString(), this.PlotWidth.toString(), (xaxis.Height / 2).toString());
                svgBottom.style.setProperty("background-color", "none");
                divContainer.appendChild(svgBottom);
                this.m_arrSVG.push(svgBottom);
            }
            else {
                for (let i = 0; i < this.XAxes.length; i++) {
                    let xaxis = this.XAxes[i];
                    if (!xaxis.Show) {
                        continue;
                    }

                    let svgX = this.CreateSVG("svg-xaxis" + xaxis.ID, "absolute", xaxis.X.toString(), xaxis.Y.toString(), this.PlotWidth.toString(), xaxis.Height.toString());
                    divContainer.appendChild(svgX);
                    this.m_arrSVG.push(svgX);
                }
            }

            if (this.Legend.Show) {
                let svgLegend = this.CreateSVG("svg-legend", "absolute", this.Legend.X.toString(), this.Legend.Y.toString(), this.Legend.Width.toString(), this.Legend.Height.toString());
                divContainer.appendChild(svgLegend);
                this.m_arrSVG.push(svgLegend);
            }
        }

        private SetWindow() {
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
            }

            this.m_coeff.SetCoeff(this.m_width / (this.m_xr - this.m_xl), this.m_width * this.m_xl / (this.m_xr - this.m_xl),
                this.m_height / (this.m_yb - this.m_yt), this.m_height * this.m_yt / (this.m_yb - this.m_yt));
        }

        private PrepareContainer(): void {
            let divContainer: HTMLDivElement = document.getElementById(this.BindTo) as HTMLDivElement;
            if (FChartHelper.ObjectIsNullOrEmpty(divContainer)) {
                return;
            }
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

            this.SVGMeasure = document.createElementNS("http://www.w3.org/2000/svg", "svg");
            this.SVGMeasure.setAttribute("width", divContainer.clientWidth.toString());
            this.SVGMeasure.setAttribute("height", divContainer.clientHeight.toString());
            this.SVGMeasure.setAttribute("opacity", "0");
            this.SVGMeasure.style.setProperty("position", "absolute");
            this.SVGMeasure.style.setProperty("left", "0px");
            this.SVGMeasure.style.setProperty("top", "0px");
            divContainer.appendChild(this.SVGMeasure);
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

            this.CalculateChartSize();
            this.CalculatePartsSize();
            this.CalculatePartsPosition();
            this.CalculateYAxisTickCoordinate();
            this.CalculateXAxisTickCoordinate();
            this.CalculateDataPointCoordinate();

            this.GenerateSVGParts();

            for (let i = 0; i < this.m_arrSVG.length; i++) {
                this.m_arrSVG[i].onzoom = (e) => { e.cancelBubble = true; alert("svg zoom"); }
            }
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

            this.SetCoordinate();
            this.Draw();
        }

        // Mouse events
        private OnMouseEnter(e): void {
        }

        private OnMouseOut(e): void {
        }

        private OnMouseMove(e): void {
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
    }
//}