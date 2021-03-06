﻿import $ = require("jquery");
import _ = require("lodash");
import * as FChartX from "script/FChartX";

$(document).ready(function () {
    DemoChart();
});

function DemoChart(): void {
    var chart = new FChartX.FChart();
    chart.BindTo = "divDemoChart1";
    chart.UseFixedXAxesHeight = true;
    chart.FixedXAxesLengthType = FChartX.LengthType.Percentage;
    chart.FixedXAxesHeight = 0.3;

    chart.ShowScrollBar = true;

    var xaxis1 = new FChartX.FChartXAxis();
    xaxis1.Show = true;
    xaxis1.ID = "XAxis-1";
    xaxis1.ValueType = FChartX.XAxisType.Number;
    xaxis1.Title = new FChartX.FChartXAxisTitle();
    xaxis1.Title.Show = true;
    xaxis1.Title.FontSize = 11;
    xaxis1.Title.Layout = FChartX.XAxisTitleLayout.TopMiddle;
    xaxis1.Title.Label = "X axis Title 1";
    chart.XAxes.push(xaxis1);

    var xaxis2 = new FChartX.FChartXAxis();
    xaxis2.Show = true;
    xaxis2.ID = "XAxis-2";
    xaxis2.ValueType = FChartX.XAxisType.Number;
    xaxis2.Title = new FChartX.FChartXAxisTitle();
    xaxis2.Title.Show = true;
    xaxis2.Title.FontSize = 11;
    xaxis2.Title.Layout = FChartX.XAxisTitleLayout.TopMiddle;
    xaxis2.Title.Label = "X axis Title 2";
    chart.XAxes.push(xaxis2);

    var yaxis1 = new FChartX.FChartYAxis();
    yaxis1.Show = true;
    yaxis1.ID = "YAxis-1";
    yaxis1.Order = 1;
    yaxis1.Layout = FChartX.YAxisLayout.Left;
    yaxis1.Title = new FChartX.FChartYAxisTitle();
    yaxis1.Title.Show = true;
    yaxis1.Title.Layout = FChartX.YAxisTitleLayout.Center;
    yaxis1.Title.FontSize = 11;
    yaxis1.Title.Label = "Y axis Title 1";
    chart.YAxes.push(yaxis1);
    var yaxis2 = new FChartX.FChartYAxis();
    yaxis2.Show = true;
    yaxis2.ID = "YAxis-2";
    yaxis2.Order = 2;
    yaxis2.Layout = FChartX.YAxisLayout.Right;
    yaxis2.Title = new FChartX.FChartYAxisTitle();
    yaxis2.Title.Show = true;
    yaxis2.Title.Layout = FChartX.YAxisTitleLayout.Center;
    yaxis2.Title.FontSize = 11;
    yaxis2.Title.Label = "Y axis Title 2";
    chart.YAxes.push(yaxis2);
    chart.Legend.Show = true;
    chart.Legend.Layout = FChartX.LegendLayout.Top;
    chart.Legend.ContentOrientation = FChartX.Orientation.Horizontal;
    chart.ShowZoomControl = true;
    chart.Zoomable = true;
    chart.ZoomDirection = FChartX.ChartZoomDirection.Both;
    chart.MaxZoomLevel = 20;
    chart.ZoomControl.Layout = FChartX.ZoomControlLayout.Right;
    chart.ZoomControl.VerticalAlignment = FChartX.VerticalAlignment.Top;
    //chart.ZoomControl.Layout = FChartX.ZoomControlLayout.Top;
    //chart.ZoomControl.HorizontalAlignment = FChartX.HorizontalAlignment.Left;
    chart.ShowRangeControl = false;

    var serie1 = new FChartX.FChartDataSerie();
    serie1.XAxisID = xaxis1.ID;
    serie1.YAxisID = yaxis1.ID;
    serie1.LineWidth = 2;
    serie1.LineColor = "cyan";
    serie1.Show = true;
    serie1.DrawType = FChartX.FDataSerieDrawType.StraightLine;
    serie1.Mark = new FChartX.TriangleMark();
    serie1.Mark.Show = true;
    serie1.Mark.Width = 10;
    serie1.Mark.Height = 10;
    serie1.Mark.LineColor = "blue";
    serie1.Mark.BackgroundColor = "magenta";
    serie1.Mark.Fill = false;
    serie1.Mark.Rotation = 70;
    serie1.Label = "样条线一";
    var serie2 = new FChartX.FChartDataSerie();
    serie2.XAxisID = xaxis2.ID;
    serie2.YAxisID = yaxis2.ID;
    serie2.LineWidth = 1;
    serie2.LineColor = "magenta";
    serie2.Show = true;
    serie2.DrawType = FChartX.FDataSerieDrawType.StraightLine;
    serie2.Mark = new FChartX.CircleMark(5);
    serie2.Mark.Show = true;
    serie2.Mark.Width = 10;
    serie2.Mark.Height = 10;
    serie2.Mark.LineColor = "blue";
    serie2.Mark.BackgroundColor = "magenta";
    serie2.Mark.Fill = false;
    serie2.Mark.Rotation = 30;
    serie2.Label = "样条线二";
    for (var i = 0; i < 100; i++) {
        var pt = new FChartX.DataPoint();
        pt.X = (Math.random() * 50).toFixed(2);
        pt.Y = Math.round(Math.random() * 100) / 100 * 1000;
        serie2.Data.push(pt);
    }
    var pt1 = new FChartX.DataPoint();
    pt1.X = "20";
    pt1.Y = 50.5;
    var pt2 = new FChartX.DataPoint();
    pt2.X = "9";
    pt2.Y = 500;
    var pt3 = new FChartX.DataPoint();
    pt3.X = "200";
    pt3.Y = 17;
    var pt4 = new FChartX.DataPoint();
    pt4.X = "80";
    pt4.Y = 92;
    var pt5 = new FChartX.DataPoint();
    pt5.X = "77";
    pt5.Y = 720;
    var pt6 = new FChartX.DataPoint();
    pt6.X = "330";
    pt6.Y = 500;
    serie1.Data.push(pt1);
    serie1.Data.push(pt2);
    serie1.Data.push(pt3);
    serie1.Data.push(pt4);
    serie1.Data.push(pt5);
    serie1.Data.push(pt6);
    chart.DataSeries.push(serie1);
    chart.DataSeries.push(serie2);

    let chart2: FChartX.FChart = new FChartX.FChart();
    chart2.BindTo = "divDemoChart2";

    //chart.ParentChart = chart2;

    chart.Render();
    //chart2.Render();
}