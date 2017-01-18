export module ATFW {

    enum LineCapStyle {
        Butt,
        Round,
        Square
    }

    enum LineJoinStyle {
        Mitre,
        Round,
        Bevel
    }

    enum FChartType {
        Line
    }

    enum FDataSerieDrawType {
        StraightLine,
        CurvedLine,
        Point,
        Bar
    }

    enum XAxisTitleLayout {
        TopLeft,
        TopMiddle,
        TopRight,

        BottomLeft,
        BottomMiddle,
        BottomRight
    }

    enum YAxisTitleLayout {
        Top,
        Center,
        Bottom
    }

    enum TickLabelLayout {
        CenterOfTick,
        CenterOfTickSpan
    }

    enum LegendLayout {
        Left,
        Right,
        Top,
        Bottom,

        InnerLeft,
        InnerRight,
        InnerTop,
        InnerBottom
    }

    enum ChartZoomMode {
        MousePosition,
        Center
    }

    class ChartGraphObject {
        public LineWidth: number;
        public LineColor: string;
        public LineCap: LineCapStyle;
        public LineDashArray: number[];
        public LineDashOffset: number;
        public LineJoin: LineJoinStyle;
        public Fill: boolean;
        public BackgroundColor: string;

        public HoverBackgroundColor: string;
        public HoverLineColor: string;
        public HoverLineWidth: number;

        public Label: string;
        public FontSize: number;
        public FontColor: number;
        public FontFamily: string;
        public FontStyle: string;
        public FontWeight: string;
        public Rotation: number;

        public Opacity: number = 1.0;

        public Show: boolean;

        public X: number;
        public Y: number;

        public Draw(chart: FChart): void {
        }
    }

    class FChartAxis extends ChartGraphObject {
        public ID: string;
        public Order: number;
        public DataKey: string;
        public Tick: FChartTick;
        public Value2Wc: Array<any> = new Array();
        public PixelsPerValue: number = 0;
        public StartValue: number = 0;
        public Scale: number = 0;

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

    class ChartMark extends ChartGraphObject {
    }

    interface ITooltipFormat {
        Title: any;
        Value: any;
    }

    class ATFWTooltipFormat implements ITooltipFormat {
        public Title: any = function (d: any) { };
        public Value: any = function (d: any) { };
    }

    class FChartTooltip {
        public Format: ATFWTooltipFormat;
        public Show: boolean;
        public Grouping: boolean;
        public Intersect: boolean;  // If true, the tooltip shows when the mouse position intersects with an element. 
                                    // If false, the tooltip shows no matter where the mouse position in the chart.
    }

    interface IChartPrinter {
        PrintPreview(): void;
        Print(): void;
    }

    enum GridLineTextPosition {
        Start,
        Middle,
        End
    }

    enum EnvelopeLineGradient {
        One,
        OneHalf,
        OneFourth
    }

    enum YAxisLayout {
        Left,
        Right
    }

    enum XAxisType {
        Date,
        Number
    }

    class FChartGridLine {
        public Value: number;
        public Text: string;
        public AxisID: string;
        public Position: GridLineTextPosition;
    }

    class ATFWEnvelopeLine extends ChartGraphObject {
        public Gradient: EnvelopeLineGradient;
    }

    interface IChartGrid {
        Show: boolean;
        Lines: FChartGridLine[];
    }

    class FChartGrid implements IChartGrid {
        public Show: boolean;
        public Lines: FChartGridLine[];
    }

    class FChartXAxisTitle extends ChartGraphObject {
        public Label: string;
        public Rotation: number;
        public Layout: XAxisTitleLayout = XAxisTitleLayout.TopMiddle;

        public Draw(chart: FChart): void {
        }
    }

    class FChartYAxisTitle extends ChartGraphObject {
        public Label: string;
        public Rotation: number;
        public Layout: YAxisTitleLayout = YAxisTitleLayout.Center;

        public Draw(chart: FChart): void {
        }
    }

    class FChartTick extends ChartGraphObject {
        IsXAxisTick: boolean;
        MinIntervalSpace: number;
        LabelLayout: TickLabelLayout;
        LabelFormat: string;
        Rotation: number;
        Width: number;
        Height: number;

        Draw(chart: FChart): void { };
    }

    class FChartXAxis extends FChartAxis {
        public UseDefaultHeight: boolean;
        public Height: number;
        public Type: XAxisType = XAxisType.Date;
        public Title: FChartXAxisTitle = null;

        public Draw(chart: FChart): void {
            // Draw axis line and tick.
            let xAxisLine: SVGLineElement = document.createElementNS("http://www.w3.org/2000/svg", "line") as SVGLineElement;
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
                let wc = obj.Value;
                let ix = chart.m_coeff.ToDvcX(wc);

                ix += this.Tick.LineWidth / 2;
                let tickLine: SVGLineElement = document.createElementNS("http://www.w3.org/2000/svg", "line") as SVGLineElement;
                let tickLineId = "xaxis-tick-" + this.ID + "-" + ix.toString();
                let oneFifth = this.Height / 2 * 0.2;
                let tickLineH = oneFifth;
                let x1 = ix;
                let x2 = ix;
                let y1 = 0;
                let y2 = y1 + tickLineH;
                FChartHelper.SetSVGLineAttributes(tickLine, tickLineId, x1.toString(), y1.toString(), x2.toString(), y2.toString(), this.Tick.LineWidth.toString(), this.Tick.LineColor);
                svg.appendChild(tickLine);

                let tickLabel: SVGTextElement = document.createElementNS("http://www.w3.org/2000/svg", "text") as SVGTextElement;
                let tickLabelId = "xaxis-tick-label-" + this.ID + "-" + value;
                let lx = 0;
                let ly = 0;
                let oneTickSpan = this.Scale * this.PixelsPerValue;
                let xTickLabelMaxWidth = oneTickSpan * 0.8;
                let xTickLabelMinWidth = oneTickSpan * 0.15;
                let xTickLabelFontSize = this.Tick.FontSize; 
                FChartHelper.SetSVGTextAttributes(tickLabel, tickLabelId, lx.toString(), ly.toString(), value, "middle", this.Tick.FontFamily, this.Tick.FontStyle, this.Tick.FontSize.toString(), this.Tick.FontWeight); 

                chart.SVGMeasure.appendChild(tickLabel);
                let labelBox = tickLabel.getBBox();
                if (labelBox.width > xTickLabelMaxWidth) {
                    while (labelBox.width > xTickLabelMaxWidth && xTickLabelFontSize > 0) {
                        xTickLabelFontSize--;
                        tickLabel.style.setProperty("font-size", xTickLabelFontSize.toString() + "px");
                        labelBox = tickLabel.getBBox();
                    }
                }
                chart.SVGMeasure.removeChild(tickLabel);
                lx = ix;
                ly = oneFifth * 2;
                lx = lx + oneTickSpan / 2;
                ly = ly + xTickLabelFontSize - xTickLabelFontSize * 0.3 / 2;
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
            let text: SVGTextElement = document.createElementNS("http://www.w3.org/2000/svg", "text") as SVGTextElement;
            FChartHelper.SetSVGTextAttributes(text, "XAxis-" + this.ID + "-XLabel", x.toString(), y.toString(), this.Title.Label, "middle", this.Title.FontFamily, this.Title.FontStyle, this.Title.FontSize.toString(), this.Title.FontWeight);
            svg.appendChild(text);
        }
    }

    class FChartYAxis extends FChartAxis {
        public UseDefaultWidth: boolean;
        public Width: number;
        public Title: FChartYAxisTitle = null;
        public Layout: YAxisLayout = YAxisLayout.Left;
        public TopEnvelopeLine: ATFWEnvelopeLine;
        public BottomEnvelopeLine: ATFWEnvelopeLine;

        public Draw(chart: FChart): void {
        }
    }

    class DataPoint {
        public X: string = null;
        public Y: number;
        public fx: number;
        public fy: number;
        public Show: boolean;
    }

    class Point {
        public X: number = 0;
        public Y: number = 0;
    }

    export class FChartDataSerie extends ChartGraphObject {
        public Data: DataPoint[];
        public Mark: ChartMark;
        public Label: string;
        public XAxisID: string;
        public YAxisID: string;
        public ZOrder: number;
        public DrawType: FDataSerieDrawType;

        public Draw(chart: FChart): void {
        }
    }

    export class CircleMark extends ChartMark {
        public Radius: number;
        public HoverRadius: number;

        public Draw(chart: FChart): void {
        }
    }

    export class TriangleMark extends ChartMark {
        public Width: number;
        public Height: number;

        public Draw(chart: FChart): void {
        }
    }

    export class SquareMark extends ChartMark {
        public Width: number;
        public Height: number;

        public Draw(chart: FChart): void {
        }
    }

    export class DiamondMark extends ChartMark {
        public Width: number;
        public Height: number;

        public Draw(chart: FChart): void {
        }
    }

    export class CrossLineMark extends ChartMark {
        public Width: number;
        public Height: number;

        public Draw(chart: FChart): void {
        }
    }

    export class FChartLegend extends ChartGraphObject {
        public LabelFormat: string;
        public Rotation: number;
        public Layout: LegendLayout = LegendLayout.Right;
        public Width: number;
        public Height: number;

        Draw(chart: FChart): void { };
    }

    class FChartHelper
    {
        public static FChartInstance: FChart = null;

        public static ObjectIsNullOrEmpty(obj: any): boolean {
            let bRet: boolean = false;

            if (obj == null || obj == undefined || obj == "") {
                bRet = true;
            }

            return bRet;
        }

        public static GetYAxisAverageDiff(YAxisID: string): number
        {
            let arrAverageDiff = [];

            for (let i = 0; i < this.FChartInstance.DataSeries.length; i++) {
                let serie = this.FChartInstance.DataSeries[i];
                if (serie.YAxisID == YAxisID) {
                    let dSum = 0;
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
            for (let i = 0; i < arrAverageDiff.length; i++)
            {
                if (arrAverageDiff[i] > dDiff)
                {
                    dDiff = arrAverageDiff[i];
                }
            }

            if (dDiff < 5)
            {
                dDiff = 5;
            }

            dDiff = Math.round(dDiff / 10) * 10;
            return dDiff;
        }

        public static GetYAxisTickCount(YAxisID: string, averageDiff: number, max: number, min: number, len: number): any {
            let t1 = 0;
            let t2 = 0;
            let t = 0;
            let startVal = 0;
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

            let obj = { Ticks: t, Scale: averageDiff, StartValue: startVal, TickIntervalSpace: 0 };

            let serie = null;
            let yaxis = null;
            for (let i = 0; i < this.FChartInstance.DataSeries.length; i++) {
                if (this.FChartInstance.DataSeries[i].YAxisID == YAxisID) {
                    serie = this.FChartInstance.DataSeries[i];
                }
            }

            for (let i = 0; i < this.FChartInstance.YAxes.length; i++) {
                if (this.FChartInstance.YAxes[i].ID == YAxisID) {
                    yaxis = this.FChartInstance.YAxes[i];
                }
            }
            if (!this.ObjectIsNullOrEmpty(serie) && !this.ObjectIsNullOrEmpty(yaxis)) {
                let tickH = len / (t + 1);
                obj.TickIntervalSpace = tickH;
                while (obj.TickIntervalSpace < yaxis.Tick.MinIntervalSpace) {
                    averageDiff *= 2;
                    obj = this.GetYAxisTickCount(YAxisID, averageDiff, max, min, len);
                }
            }

            return obj;
        }

        public static GetXAxisAverageDiff(XAxisID: string): number {
            let arrAverageDiff = [];

            let xaxis: FChartXAxis = null;
            for (let i = 0; i < this.FChartInstance.XAxes.length; i++) {
                if (this.FChartInstance.XAxes[i].ID == XAxisID) {
                    xaxis = this.FChartInstance.XAxes[i];
                    break;
                }
            }

            for (let i = 0; i < this.FChartInstance.DataSeries.length; i++) {
                let serie = this.FChartInstance.DataSeries[i];
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

            if (dDiff < 5) {
                dDiff = 5;
            }

            dDiff = Math.round(dDiff / 10) * 10;
            return dDiff;
        }

        public static GetXAxisTickCount(XAxisID: string, averageDiff: number, max: number, min: number, len: number): any {
            let t1 = 0;
            let t2 = 0;
            let t = 0;
            let startVal = min;

            let obj = { Ticks: t, Scale: averageDiff, StartValue: startVal, TickIntervalSpace: 0 };

            let serie = null;
            let xaxis = null;
            for (let i = 0; i < this.FChartInstance.DataSeries.length; i++) {
                if (this.FChartInstance.DataSeries[i].XAxisID == XAxisID) {
                    serie = this.FChartInstance.DataSeries[i];
                }
            }

            for (let i = 0; i < this.FChartInstance.XAxes.length; i++) {
                if (this.FChartInstance.XAxes[i].ID == XAxisID) {
                    xaxis = this.FChartInstance.XAxes[i];
                }
            }
            if (!this.ObjectIsNullOrEmpty(serie) && !this.ObjectIsNullOrEmpty(xaxis)) {
                let tickH = len / (t + 1);
                obj.TickIntervalSpace = tickH;
                while (obj.TickIntervalSpace < xaxis.Tick.MinIntervalSpace) {
                    averageDiff *= 2;
                    obj = this.GetXAxisTickCount(XAxisID, averageDiff, max, min, len);
                }
            }

            return obj;
        }

        public static SetSVGLineAttributes(line: SVGLineElement, id: string, x1: string, y1: string, x2: string, y2: string, strokeWidth: string, stroke: string): void {
            line.setAttribute("id", id);
            line.setAttribute("x1", x1);
            line.setAttribute("y1", y1);
            line.setAttribute("x2", x2);
            line.setAttribute("y2", y2);
            line.setAttribute("stroke-width", strokeWidth);
            line.setAttribute("stroke", stroke);
        }

        public static SetCircleAttributes(circle: SVGCircleElement, id: string, cx: string, cy: string, r: string, fill: string, strokeWidth: string, stroke: string): void {
            circle.setAttribute("id", id);
            circle.setAttribute("cx", cx);
            circle.setAttribute("cy", cy);
            circle.setAttribute("r", r);
            circle.setAttribute("fill", fill);
            circle.setAttribute("stroke-width", strokeWidth);
            circle.setAttribute("stroke", stroke);
        }

        public static SetSVGTextAttributes(text: SVGTextElement, id: string, x: string, y: string, characters: string, textAnchor: string, fontFamily: string, fontStyle: string, fontSize: string, fontWeight: string) {
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
    }

    export class FChart implements IChart, IChartPrinter {
        public BindTo: string;
        public DataSeries: FChartDataSerie[] = null;
        public Legend: FChartLegend = new FChartLegend();
        public Zoom: number = 1.0;
        public ZoomMode: ChartZoomMode = ChartZoomMode.Center;
        public XAxes: FChartXAxis[] = null;
        public YAxes: FChartYAxis[] = null;
        public AspectRatio: number;
        public KeepAspectRatio: boolean;            // If false, ignore AspectRatio, If true, consider AspectRatio.
        public Zoomable: boolean = true;

        public SVGMeasure: SVGSVGElement = new SVGSVGElement();
        private m_arrSVG: SVGSVGElement[];

        private ONE_DAY: number = 86400000;
        private ONE_HOUR: number = 3600000;
        private ONE_MINUTE: number = 60000;
        private ONE_SECOND: number = 1000;
        private ONE_MILLISECOND: number = 1;

        private ChartWidth: number;
        private ChartHeight: number;
        public MaxYAxisWidth: number = 100;
        public MaxXAxisHeight: number = 100;

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
            let offset: Point = new Point();
            offset.X = this.GetOffsetX();
            offset.Y = this.GetOffsetY();

            return offset;
        }

        // Implementation.
        public ZoomIn(): void {
            this.m_scale /= this.ZoomFactor;
            let scale = 0.5 - 0.5 / this.ZoomFactor;
            this.m_xl += (this.m_xr - this.m_xl) * scale;
            this.m_yt -= (this.m_yt - this.m_yb) * scale;

            this.SetWindow();
            this.Render();
        }

        public ZoomOut(): void {
            this.m_scale *= this.ZoomFactor;
            let scale = 0.5 * (this.ZoomFactor - 1);
            this.m_xl -= (this.m_xr - this.m_xl) * scale;
            this.m_yt += (this.m_xr - this.m_xl) * scale;

            this.SetWindow();
            this.Render();
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
            this.Render();
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
            this.Render();
        }

        public Render(): void {
            this.DrawXAxes();
            this.DrawYAxes();
            this.DrawDataSeries();
            this.DrawGridLine();
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
        }

        private DrawDataSeries(): void {
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

        private SearchXAxisByID(XAxisID: string): FChartXAxis {
            let xaxis: FChartXAxis = null;

            for (let i = 0; i < this.XAxes.length; i++) {
                if (this.XAxes[i].ID == XAxisID) {
                    xaxis = this.XAxes[i];
                    break;
                }
            }

            return xaxis;
        }

        private SearchYAxisByID(YAxisID: string): FChartYAxis {
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
            let nMaxYAxisWidth = 100;
            for (let i = 0; i < this.YAxes.length; i++) {
                let yaxis = this.YAxes[i];
                if (!yaxis.Show) {
                    continue;
                }
                if (yaxis.UseDefaultWidth) {
                    yaxis.Width = Math.min(this.m_width * 0.1, this.MaxYAxisWidth);
                    yaxis.Tick.Width = yaxis.Width * 0.2;
                }
            }

            let nMaxXAxisHeight = 100;
            for (let i = 0; i < this.XAxes.length; i++) {
                let xaxis = this.XAxes[i];
                if (!xaxis.Show) {
                    continue;
                }
                if (xaxis.UseDefaultHeight) {
                    xaxis.Height = Math.min(this.m_width * 0.125, this.MaxXAxisHeight);
                    xaxis.Tick.Height = xaxis.Height * 0.2;
                }
            }

            let nLegendItemWidth = Math.min(this.m_width * 0.3, 50);
            let nLegendItemHeight = Math.min(this.m_height * 0.2, 16);
            this.Legend.Width = this.DataSeries.length * nLegendItemWidth;
            this.Legend.Height = this.DataSeries.length * nLegendItemHeight;

            let nSubtractWidth = 0;
            let nSubtractHeight = 0;
            for (let i = 0; i < this.YAxes.length; i++) {
                if (this.YAxes[i].Show) {
                    nSubtractWidth += this.YAxes[i].Width;
                }
            }
            for (let i = 0; i < this.XAxes.length; i++) {
                if (this.XAxes[i].Show) {
                    nSubtractHeight += this.XAxes[i].Height;
                }
            }

            if (this.Legend.Show) {
                if (this.Legend.Layout == LegendLayout.Left || this.Legend.Layout == LegendLayout.Right) {
                    nSubtractWidth += this.Legend.Width;
                }
                if (this.Legend.Layout == LegendLayout.Top || this.Legend.Layout == LegendLayout.Bottom) {
                    nSubtractHeight += this.Legend.Height;
                }
            }

            this.m_width = this.ChartWidth - nSubtractWidth;
            this.m_height = this.ChartHeight - nSubtractHeight;

            this.SetWindow();
        }

        private CalculatePartsPosition() {
            let nDisplayXAxesCount = 0;
            let xaxis: FChartXAxis = null;
            for (let i = 0; i < this.XAxes.length; i++) {
                if (this.XAxes[i].Show) {
                    nDisplayXAxesCount++;
                    xaxis = this.XAxes[i];
                }
            }

            let lyaxes: FChartYAxis[] = null;
            let ryaxes: FChartYAxis[] = null;
            for (let i = 0; i < this.YAxes.length; i++) {
                let yaxis = this.YAxes[i];
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
                return (a.Order - b.Order);
            });
            ryaxes.sort((a, b) => {
                return (a.Order - b.Order);
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
                    this.Legend.X = xStart + this.m_width - this.Legend.Width;
                    this.Legend.Y = yStart;
                }
                if (this.Legend.Layout == LegendLayout.InnerTop) {
                    this.Legend.X = xStart + this.m_width / 2 - this.Legend.Width / 2;
                    this.Legend.Y = yStart;
                }
                if (this.Legend.Layout == LegendLayout.InnerBottom) {
                    this.Legend.X = xStart + this.m_width / 2 - this.Legend.Width / 2;
                    this.Legend.Y = yStart + this.m_height - this.Legend.Height;
                }
            }

            let keepXStart = xStart;
            this.PlotPartX = xStart;
            xStart += this.m_width;
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
            yStart += this.m_height;

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
                this.Legend.X = keepXStart + this.m_width / 2 - this.Legend.Width / 2;
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
                let minY = -99999;
                let maxY = -99999;
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
                        let value = serie.Data[k].Y;
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
                let maxAverageDiff = FChartHelper.GetYAxisAverageDiff(yaxis.ID);
                let obj = FChartHelper.GetYAxisTickCount(yaxis.ID, maxAverageDiff, maxY, minY, this.m_height);
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
                    let y = this.m_coeff.ToWcY(this.m_height);
                    yaxis.Value2Wc.push({ Key: "bottom", Value: y });
                    length++;
                }

                let y1 = reserveTopSpace;
                for (let p = nYTicksCount; p >= 0; p--) {
                    if (p % iMultiple != 0) {
                        continue;
                    }
                    let value = (nYTicksCount - p) * smallScale;
                    let yd = y1 + value * yPixelsPerValue + yaxis.Tick.LineWidth / 2;
                    let y = this.m_coeff.ToWcY(yd);
                    yaxis.Value2Wc.push({ Key: value.toString(), Value: y });
                    length++;
                }

                if (yaxis.TopEnvelopeLine.Show) {
                    let y = this.m_coeff.ToWcY(0);
                    yaxis.Value2Wc.push({ Key: "top", Value: y });
                    length++;
                }

                yaxis.Value2Wc.length = length;
            }
        }

        private CalculateXAxisTickCoordinate() {
            for (let i = 0; i < this.XAxes.length; i++) {
                let xaxis = this.XAxes[i];
                if (!xaxis.Show) {
                    continue;
                }
                let minX: any;
                let maxX: any;
                if (xaxis.Type == XAxisType.Date) {
                    minX = new Date("2018-01-01 00:00:00").valueOf();
                    maxX = new Date("1975-01-01 00:00:00").valueOf();
                }
                else if (xaxis.Type == XAxisType.Number) {
                    minX = -99999;
                    maxX = -99999;
                }

                for (let j = 0; j < this.DataSeries.length; j++) {
                    let serie = this.DataSeries[j];
                    if (serie.XAxisID != xaxis.ID) {
                        continue;
                    }

                    serie.Data.sort((a, b) => {
                        let value1;
                        let value2;
                        if (xaxis.Type == XAxisType.Date) {
                            value1 = (new Date(a.X)).valueOf();
                            value2 = (new Date(b.X)).valueOf();
                        }
                        else if (xaxis.Type == XAxisType.Number) {
                            value1 = parseInt(a.X);
                            value2 = parseInt(b.X);
                        }

                        return value1 - value2;
                    });

                    for (let k = 0; k < serie.Data.length; k++) {
                        let xValue = serie.Data[k].X;
                        let value;
                        if (xaxis.Type == XAxisType.Date) {
                            value = new Date(xValue).valueOf();
                        }
                        else if (xaxis.Type == XAxisType.Number) {
                            value = parseInt(xValue);
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
                let length = 0;
                let maxAverageDiff = FChartHelper.GetXAxisAverageDiff(xaxis.ID);
                let obj = FChartHelper.GetXAxisTickCount(xaxis.ID, maxAverageDiff, maxX, minX, this.m_width);
                let startValue = obj.StartValue;
                let xPixelsPerValue = this.m_width / (maxX - minX);
                xaxis.PixelsPerValue = xPixelsPerValue;
                xaxis.Scale = obj.Scale;

                for (let p = 0; p <= obj.Ticks; p++) {
                    let dValue = p * obj.Scale;
                    let xd = dValue * xPixelsPerValue + xaxis.Tick.LineWidth / 2;
                    let x = this.m_coeff.ToWcX(xd);
                    xaxis.Value2Wc.push({Key: dValue.toString(), Value: x});
                    length++;
                }
                xaxis.Value2Wc.length = length;
            }
        }

        private CalculateDataPointCoordinate() {
            for (let i = 0; i < this.DataSeries.length; i++) {
                let serie = this.DataSeries[i];
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

            svg.setAttribute("id", "svg-yaxis-" + id);
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

            let svgPlot = this.CreateSVG("svg-plot", "absolute", this.PlotPartX.toString(), this.PlotPartY.toString(), this.m_width.toString(), this.m_height.toString());
            divContainer.appendChild(svgPlot);

            let nXCount = this.GetDisplayXAxesCount();
            if (nXCount == 1) {
                let xaxis = this.GetXAxis();
                let svgTop = this.CreateSVG("svg-xaxis-top", "absolute", this.PlotPartX.toString(), "0", this.m_width.toString(), (xaxis.Height / 2).toString());
                divContainer.appendChild(svgTop);
                this.m_arrSVG.push(svgTop);

                let svgBottom = this.CreateSVG("svg-xaxis-bottom", "absolute", this.PlotPartX.toString(), this.m_height.toString(), this.m_width.toString(), (xaxis.Height / 2).toString());
                divContainer.appendChild(svgBottom);
                this.m_arrSVG.push(svgBottom);
            }
            else {
                for (let i = 0; i < this.XAxes.length; i++) {
                    let xaxis = this.XAxes[i];
                    if (!xaxis.Show) {
                        continue;
                    }

                    let svgX = this.CreateSVG("svg-xaxis" + xaxis.ID, "absolute", xaxis.X.toString(), xaxis.Y.toString(), this.m_width.toString(), xaxis.Height.toString());
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

        private SetCoordinate() {
            let divContainer = document.getElementById(this.BindTo);
            divContainer.innerHTML = "";
            this.m_arrSVG = [];

            this.CalculateChartSize();
            this.CalculatePartsSize();
            this.CalculatePartsPosition();
            this.CalculateYAxisTickCoordinate();
            this.CalculateXAxisTickCoordinate();

            this.GenerateSVGParts();
        }

        // Resize
        private OnResize(w: number, h: number): void {
            this.SetCoordinate();
            this.Render();
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
    }
}