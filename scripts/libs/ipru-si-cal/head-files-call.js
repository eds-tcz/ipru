// function appendToHead(headContent) {
//   const head = document.head || document.getElementsByTagName('head')[0];
//   const fragment = document.createRange().createContextualFragment(headContent);
//   head.appendChild(fragment);
// }

// // Example usage:
// const headContent = `
//     <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css?v=29082024IPRU1108" integrity="sha384-T3c6CoIi6uLrA9TneNEoa7RxnatzjcDSCmG1MXxSR1GAsXEV/Dwwykc2MPK8M2HN" crossorigin="anonymous">
// <script>
//   var responseData = [{
//     "AssetClass": "Balanced",
//     "LAfundCode": "AABF",
//     "Fund": "Active Asset Allocation Balanced Fund",
//     "SFIN": "ULIF 138 15/02/17 AAABF 105",
//     "Perf1Month": "3.46%",
//     "Perf6Month": "6.27%",
//     "Perf1Year": "8.58%",
//     "Perf2Year": "7.06%",
//     "Perf3Year": "10.21%",
//     "Perf4Year": "10.36%",
//     "Perf5Year": "10.18%",
//     "PerfInception": "8.23%",
//     "InceptionDate": "2017-06-12",
//     "NAVLatest": "16.9047",
//     "NAVPreviousDay": "16.7327",
//     "Perf1Day": "1.0175",
//     "crteDate": "Dec 5, 2023 12:26:08 PM",
//     "NAVLatestDate": "04-Dec-2023"
//   }, {
//     "AssetClass": "Balanced",
//     "LAfundCode": "BADF",
//     "Fund": "Balanced Advantage Fund",
//     "SFIN": "ULIF 144 03/06/21 BalanceAdv 105",
//     "Perf1Month": "5.61%",
//     "Perf6Month": "10.53%",
//     "Perf1Year": "11.61%",
//     "Perf2Year": "7.57%",
//     "Perf3Year": "NA",
//     "Perf4Year": "NA",
//     "Perf5Year": "NA",
//     "PerfInception": "7.33%",
//     "InceptionDate": "2021-08-31",
//     "NAVLatest": "11.9268",
//     "NAVPreviousDay": "11.7808",
//     "Perf1Day": "1.2241",
//     "crteDate": "Dec 5, 2023 12:26:08 PM",
//     "NAVLatestDate": "04-Dec-2023"
//   }, {
//     "AssetClass": "Equity",
//     "LAfundCode": "BLUF",
//     "Fund": "Bluechip Fund",
//     "SFIN": "ULIF 087 24/11/09 LBluChip 105",
//     "Perf1Month": "5.57%",
//     "Perf6Month": "9.51%",
//     "Perf1Year": "9.62%",
//     "Perf2Year": "9.88%",
//     "Perf3Year": "16.27%",
//     "Perf4Year": "14.34%",
//     "Perf5Year": "13.18%",
//     "PerfInception": "9.95%",
//     "InceptionDate": "2009-11-24",
//     "NAVLatest": "38.7708",
//     "NAVPreviousDay": "38.0605",
//     "Perf1Day": "1.8320",
//     "crteDate": "Dec 5, 2023 12:26:08 PM",
//     "NAVLatestDate": "04-Dec-2023"
//   }, {
//     "AssetClass": "Debt",
//     "LAfundCode": "CMTF",
//     "Fund": "Constant Maturity Fund",
//     "SFIN": "ULIF 148 050123 ConstntMat 105",
//     "Perf1Month": "0.74%",
//     "Perf6Month": "0.61%",
//     "Perf1Year": "NA",
//     "Perf2Year": "NA",
//     "Perf3Year": "NA",
//     "Perf4Year": "NA",
//     "Perf5Year": "NA",
//     "PerfInception": "1.01%",
//     "InceptionDate": "2023-05-29",
//     "NAVLatest": "10.1125",
//     "NAVPreviousDay": "10.0959",
//     "Perf1Day": "0.1642",
//     "crteDate": "Dec 5, 2023 12:26:08 PM",
//     "NAVLatestDate": "04-Dec-2023"
//   }, {
//     "AssetClass": "Equity",
//     "LAfundCode": "F50F",
//     "Fund": "Focus 50 Fund",
//     "SFIN": "ULIF 142 04/02/19 FocusFifty 105",
//     "Perf1Month": "5.52%",
//     "Perf6Month": "8.74%",
//     "Perf1Year": "7.49%",
//     "Perf2Year": "8.70%",
//     "Perf3Year": "15.03%",
//     "Perf4Year": "12.72%",
//     "Perf5Year": "NA",
//     "PerfInception": "11.36%",
//     "InceptionDate": "2019-03-20",
//     "NAVLatest": "17.0054",
//     "NAVPreviousDay": "16.6811",
//     "Perf1Day": "1.9070",
//     "crteDate": "Dec 5, 2023 12:26:08 PM",
//     "NAVLatestDate": "04-Dec-2023"
//   }, {
//     "AssetClass": "Debt",
//     "LAfundCode": "INCF",
//     "Fund": "Income Fund",
//     "SFIN": "ULIF 089 24/11/09 LIncome 105",
//     "Perf1Month": "0.66%",
//     "Perf6Month": "1.39%",
//     "Perf1Year": "5.46%",
//     "Perf2Year": "3.25%",
//     "Perf3Year": "3.18%",
//     "Perf4Year": "5.03%",
//     "Perf5Year": "6.40%",
//     "PerfInception": "7.65%",
//     "InceptionDate": "2009-11-24",
//     "NAVLatest": "28.1542",
//     "NAVPreviousDay": "28.1065",
//     "Perf1Day": "0.1694",
//     "crteDate": "Dec 5, 2023 12:26:08 PM",
//     "NAVLatestDate": "04-Dec-2023"
//   }, {
//     "AssetClass": "Equity",
//     "LAfundCode": "COPF",
//     "Fund": "India Growth Fund",
//     "SFIN": "ULIF 141 04/02/19 IndiaGrwth 105",
//     "Perf1Month": "6.36%",
//     "Perf6Month": "11.42%",
//     "Perf1Year": "12.04%",
//     "Perf2Year": "10.37%",
//     "Perf3Year": "17.44%",
//     "Perf4Year": "15.90%",
//     "Perf5Year": "NA",
//     "PerfInception": "15.03%",
//     "InceptionDate": "2019-06-17",
//     "NAVLatest": "19.1083",
//     "NAVPreviousDay": "18.7752",
//     "Perf1Day": "1.7432",
//     "crteDate": "Dec 5, 2023 12:26:08 PM",
//     "NAVLatestDate": "04-Dec-2023"
//   }, {
//     "AssetClass": "Equity",
//     "LAfundCode": "MAIF",
//     "Fund": "Maximise India Fund",
//     "SFIN": "ULIF 136 11/20/14 MIF 105",
//     "Perf1Month": "6.75%",
//     "Perf6Month": "11.98%",
//     "Perf1Year": "12.27%",
//     "Perf2Year": "7.87%",
//     "Perf3Year": "15.93%",
//     "Perf4Year": "15.16%",
//     "Perf5Year": "13.87%",
//     "PerfInception": "9.57%",
//     "InceptionDate": "2015-02-23",
//     "NAVLatest": "22.8282",
//     "NAVPreviousDay": "22.4449",
//     "Perf1Day": "1.6791",
//     "crteDate": "Dec 5, 2023 12:26:08 PM",
//     "NAVLatestDate": "04-Dec-2023"
//   }, {
//     "AssetClass": "Equity",
//     "LAfundCode": "5GTH",
//     "Fund": "Maximiser Fund V",
//     "SFIN": "ULIF 114 15/03/11 LMaximis5 105",
//     "Perf1Month": "6.28%",
//     "Perf6Month": "10.69%",
//     "Perf1Year": "11.31%",
//     "Perf2Year": "12.30%",
//     "Perf3Year": "17.93%",
//     "Perf4Year": "15.09%",
//     "Perf5Year": "13.31%",
//     "PerfInception": "12.76%",
//     "InceptionDate": "2011-08-29",
//     "NAVLatest": "44.6633",
//     "NAVPreviousDay": "43.8267",
//     "Perf1Day": "1.8731",
//     "crteDate": "Dec 5, 2023 12:26:08 PM",
//     "NAVLatestDate": "04-Dec-2023"
//   }, {
//     "AssetClass": "Equity",
//     "LAfundCode": "IMCF",
//     "Fund": "Mid Cap Fund",
//     "SFIN": "ULIF 146 28/06/22 MidCapFund 105",
//     "Perf1Month": "11.47%",
//     "Perf6Month": "26.32%",
//     "Perf1Year": "33.60%",
//     "Perf2Year": "NA",
//     "Perf3Year": "NA",
//     "Perf4Year": "NA",
//     "Perf5Year": "NA",
//     "PerfInception": "31.47%",
//     "InceptionDate": "2022-09-23",
//     "NAVLatest": "14.0850",
//     "NAVPreviousDay": "13.9676",
//     "Perf1Day": "0.8335",
//     "crteDate": "Dec 5, 2023 12:26:08 PM",
//     "NAVLatestDate": "04-Dec-2023"
//   }, {
//     "AssetClass": "Balanced",
//     "LAfundCode": "HBGW",
//     "Fund": "Mid Cap Hybrid Growth Fund",
//     "SFIN": "ULIF 147 050123 MCHybrdGrt 105",
//     "Perf1Month": "9.10%",
//     "Perf6Month": "19.36%",
//     "Perf1Year": "NA",
//     "Perf2Year": "NA",
//     "Perf3Year": "NA",
//     "Perf4Year": "NA",
//     "Perf5Year": "NA",
//     "PerfInception": "29.26%",
//     "InceptionDate": "2023-02-28",
//     "NAVLatest": "13.1042",
//     "NAVPreviousDay": "13.0138",
//     "Perf1Day": "0.6899",
//     "crteDate": "Dec 5, 2023 12:26:08 PM",
//     "NAVLatestDate": "04-Dec-2023"
//   }, {
//     "AssetClass": "Equity",
//     "LAfundCode": "INDF",
//     "Fund": "Mid Cap Index Fund",
//     "SFIN": "ULIF 149 050723 McIndxFund 105",
//     "Perf1Month": "9.42%",
//     "Perf6Month": "NA",
//     "Perf1Year": "NA",
//     "Perf2Year": "NA",
//     "Perf3Year": "NA",
//     "Perf4Year": "NA",
//     "Perf5Year": "NA",
//     "PerfInception": "5.08%",
//     "InceptionDate": "2023-09-25",
//     "NAVLatest": "10.7263",
//     "NAVPreviousDay": "10.5977",
//     "Perf1Day": "1.1989",
//     "crteDate": "Dec 5, 2023 12:26:08 PM",
//     "NAVLatestDate": "04-Dec-2023"
//   }, {
//     "AssetClass": "Debt",
//     "LAfundCode": "MMAF",
//     "Fund": "Money Market Fund",
//     "SFIN": "ULIF 090 24/11/09 LMoneyMkt 105",
//     "Perf1Month": "0.50%",
//     "Perf6Month": "3.16%",
//     "Perf1Year": "6.37%",
//     "Perf2Year": "5.10%",
//     "Perf3Year": "4.47%",
//     "Perf4Year": "4.67%",
//     "Perf5Year": "5.16%",
//     "PerfInception": "6.85%",
//     "InceptionDate": "2009-11-24",
//     "NAVLatest": "25.3403",
//     "NAVPreviousDay": "25.3264",
//     "Perf1Day": "0.0548",
//     "crteDate": "Dec 5, 2023 12:26:08 PM",
//     "NAVLatestDate": "04-Dec-2023"
//   }, {
//     "AssetClass": "Balanced",
//     "LAfundCode": "MCBF",
//     "Fund": "Multi Cap Balanced Fund",
//     "SFIN": "ULIF 088 24/11/09 LMCapBal 105",
//     "Perf1Month": "4.60%",
//     "Perf6Month": "8.43%",
//     "Perf1Year": "10.27%",
//     "Perf2Year": "6.54%",
//     "Perf3Year": "11.11%",
//     "Perf4Year": "10.26%",
//     "Perf5Year": "9.61%",
//     "PerfInception": "9.33%",
//     "InceptionDate": "2009-11-24",
//     "NAVLatest": "35.3945",
//     "NAVPreviousDay": "35.0406",
//     "Perf1Day": "0.9999",
//     "crteDate": "Dec 5, 2023 12:26:08 PM",
//     "NAVLatestDate": "04-Dec-2023"
//   }, {
//     "AssetClass": "Equity",
//     "LAfundCode": "CMGF",
//     "Fund": "Multi Cap Growth Fund",
//     "SFIN": "ULIF 085 24/11/09 LMCapGro 105",
//     "Perf1Month": "7.37%",
//     "Perf6Month": "13.88%",
//     "Perf1Year": "13.86%",
//     "Perf2Year": "8.88%",
//     "Perf3Year": "16.99%",
//     "Perf4Year": "13.89%",
//     "Perf5Year": "11.78%",
//     "PerfInception": "10.92%",
//     "InceptionDate": "2009-11-24",
//     "NAVLatest": "43.7339",
//     "NAVPreviousDay": "43.0423",
//     "Perf1Day": "1.5814",
//     "crteDate": "Dec 5, 2023 12:26:08 PM",
//     "NAVLatestDate": "04-Dec-2023"
//   }, {
//     "AssetClass": "Equity",
//     "LAfundCode": "OPPF",
//     "Fund": "Opportunities Fund",
//     "SFIN": "ULIF 086 24/11/09 LOpport 105",
//     "Perf1Month": "6.82%",
//     "Perf6Month": "12.94%",
//     "Perf1Year": "14.30%",
//     "Perf2Year": "11.71%",
//     "Perf3Year": "18.55%",
//     "Perf4Year": "15.84%",
//     "Perf5Year": "14.38%",
//     "PerfInception": "11.49%",
//     "InceptionDate": "2009-11-24",
//     "NAVLatest": "47.0390",
//     "NAVPreviousDay": "46.2576",
//     "Perf1Day": "1.6612",
//     "crteDate": "Dec 5, 2023 12:26:08 PM",
//     "NAVLatestDate": "04-Dec-2023"
//   }, {
//     "AssetClass": "Debt",
//     "LAfundCode": "SOBF",
//     "Fund": "Secure Opportunities Fund",
//     "SFIN": "ULIF 140 24/11/17 SOF 105",
//     "Perf1Month": "0.48%",
//     "Perf6Month": "2.53%",
//     "Perf1Year": "5.62%",
//     "Perf2Year": "3.44%",
//     "Perf3Year": "3.44%",
//     "Perf4Year": "5.02%",
//     "Perf5Year": "6.23%",
//     "PerfInception": "6.34%",
//     "InceptionDate": "2018-07-23",
//     "NAVLatest": "13.9099",
//     "NAVPreviousDay": "13.8994",
//     "Perf1Day": "0.0755",
//     "crteDate": "Dec 5, 2023 12:26:08 PM",
//     "NAVLatestDate": "04-Dec-2023"
//   }, {
//     "AssetClass": "Equity",
//     "LAfundCode": "SNEF",
//     "Fund": "Sustainable Equity Fund",
//     "SFIN": "ULIF 145 03/06/21 SustainEqu 105",
//     "Perf1Month": "6.71%",
//     "Perf6Month": "11.79%",
//     "Perf1Year": "13.69%",
//     "Perf2Year": "8.52%",
//     "Perf3Year": "NA",
//     "Perf4Year": "NA",
//     "Perf5Year": "NA",
//     "PerfInception": "6.13%",
//     "InceptionDate": "2021-10-29",
//     "NAVLatest": "11.5394",
//     "NAVPreviousDay": "11.3800",
//     "Perf1Day": "1.3814",
//     "crteDate": "Dec 5, 2023 12:26:08 PM",
//     "NAVLatestDate": "04-Dec-2023"
//   }, {
//     "AssetClass": "Equity",
//     "LAfundCode": "VEEF",
//     "Fund": "Value Enhancer Fund",
//     "SFIN": "ULIF 139 24/11/17 VEF 105",
//     "Perf1Month": "8.77%",
//     "Perf6Month": "16.07%",
//     "Perf1Year": "19.97%",
//     "Perf2Year": "9.07%",
//     "Perf3Year": "18.06%",
//     "Perf4Year": "16.03%",
//     "Perf5Year": "12.93%",
//     "PerfInception": "10.33%",
//     "InceptionDate": "2018-07-23",
//     "NAVLatest": "17.3533",
//     "NAVPreviousDay": "17.1104",
//     "Perf1Day": "1.3997",
//     "crteDate": "Dec 5, 2023 12:26:08 PM",
//     "NAVLatestDate": "04-Dec-2023"
//   }];
//   //console.log(responseData);
//   var htmlResp = "";
//   for (k = 0; k < responseData.length; k++) {
//     if (k == 1) {
//       var act = "active1";
//     } else {
//       var act = "";
//     }
//     htmlResp = htmlResp + ' < div style = "" class = "col-md-4  desktopsliderbox box '+act+'" id = "box'+k+'"data-index = "'+k+'" > '+
//     ' < div class = "growthFund" > '+
//     ' < div class = "row" > '+
//     ' < div class = " col-md-8 leftSide" > '+
//     ' < p style = "font-size: 14px;" > '+responseData[k].Fund+' < /p>'+
//     ' < h6 > '+responseData[k].AssetClass+' < /h6>'+
//     '  < /div>'+
//     ' < div class = " col-md-4 rightSide" style = "text-align:right ;" > '+
//     ' < span style = "font-size: 11px;" > 3 year returns < /span>'+
//     ' < h5 > '+responseData[k].Perf3Year+' < /h5>'+
//     ' < /div>'+
//     ' < /div>'+
//     ' < /div>'+
//     ' < hr class = "topHr" > '+
//     ' < div class = "reveal" > '+
//     ' < div class = "row" > '+
//     ' < div class = "col-md-5 leftData" > '+
//     ' < p > Latest Nav < /p>'+
//     ' < h5 > '+responseData[k].NAVLatest+' < /h5>'+
//     ' < hr class = "horizontalHr" > '+
//     ' < /div>'+
//     ' < div class = "col-md-1 " > '+
//     ' < hr class = "verticleHr" > '+
//     ' < /div>'+
//     ' < div class = "col-md-5 rightData " style = "text-align:right ;" > '+
//     ' < p > AUM < /p>'+
//     ' < h5 > - < /h5>'+
//     ' < hr class = "horizontalHr" > '+
//     ' < /div>'+
//     ' < div class = "col-md-5 leftData" > '+
//     ' < p > Return as on < /p>'+
//     ' < h5 > 1178 < /h5>'+
//     ' < /div>'+
//     ' < div class = "col-md-1" > '+
//     ' < hr class = "verticleHr" > '+
//     ' < /div>'+
//     ' < div class = "col-md-5 rightData" style = "text-align:right ;" > '+
//     ' < p > Inception Date < /p>'+
//     ' < h5 > '+responseData[k].InceptionDate+' < /h5>'+
//     ' < /div>'+
//     ' < /div>'+
//     ' < /div>'+
//     ' < div class = "investNow" > '+
//     ' < a href = "https://www.iciciprulife.com/ulip-plans/unit-linked-insurance-plans/icici-pru-signature-ulip-calculator.html?UID=480" target = "_blank" > < p > Invest Now < /p> < /a>'+
//     ' < /div>'+
//     ' < /div>';
//   };
//   // console.log(htmlResp);
//   <!--FundList mobile-- >
//   var htmlRespMobile = "";
//   for (k = 0; k < responseData.length; k++) {
//     if (k == 1) {
//       var act1 = " 2";
//     } else {
//       var act1 = "";
//     }
//     htmlRespMobile = htmlRespMobile + ' <
// div class = "col-md-4 mobilebox ty-compact-list box'+act1+'"
//     data - index = "'+k+'" > '+
//     ' < div class = "growthFund" > '+
//     ' < div class = "row" > '+
//     ' < div class = " col-md-7 leftSide" > '+
//     ' < p style = "font-size: 16px;" > '+responseData[k].Fund+' < /p>'+
//     ' < h6 > '+responseData[k].AssetClass+' < /h6>'+
//     '  < /div>'+
//     ' < div class = " col-md-3 rightSide"
//     style = "text-align:right ;" > '+
//     ' < span style = "font-size: 11px;" > 3 year returns < /span>'+
//     ' < h5 > '+responseData[k].Perf3Year+' < /h5>'+
//     ' < div class = "col-md-2 arrow1" > '+
//     '</div>' + ' < /div>'+
//     ' < /div>'+
//     ' < /div>'+
//     ' < hr class = "topHr" > '+
//     ' < div class = "reveal" > '+
//     ' < div class = "row" > '+
//     ' < div class = "col-md-5 leftData" > '+
//     ' < p > Latest Nav < /p>'+
//     ' < h5 > '+responseData[k].NAVLatest+' < /h5>'+
//     ' < hr class = "horizontalHr" > '+
//     ' < /div>'+
//     ' < div class = "col-md-1 " > '+
//     ' < hr class = "verticleHr" > '+
//     ' < /div>'+
//     ' < div class = "col-md-5 rightData "
//     style = "text-align:right ;" > '+
//     ' < p > AUM < /p>'+
//     ' < h5 > - < /h5>'+
//     ' < hr class = "horizontalHr" > '+
//     ' < /div>'+
//     ' < div class = "col-md-5 leftData" > '+
//     ' < p > Return as on < /p>'+
//     ' < h5 > 1178 < /h5>'+
//     ' < /div>'+
//     ' < div class = "col-md-1" > '+
//     ' < hr class = "verticleHr" > '+
//     ' < /div>'+
//     ' < div class = "col-md-5 rightData"
//     style = "text-align:right ;" > '+
//     ' < p > Inception Date < /p>'+
//     ' < h5 > '+responseData[k].InceptionDate+' < /h5>'+
//     ' < /div>'+
//     ' < /div>'+
//     ' < /div>'+
//     ' < div class = "investNow" > '+
//     ' < a href = "https://www.iciciprulife.com/ulip-plans/unit-linked-insurance-plans/icici-pru-signature-ulip-calculator.html?UID=480"
//     target = "_blank" > < p > Invest Now < /p> < /a>'+
//     ' < /div>'+
//     ' < /div>';
//   };
//   htmlRespMobile = htmlRespMobile + ' < span class = "show-more" > Show more < /span>';
//   // console.log(htmlResp);
// </script>
// <script src="https://code.highcharts.com/highcharts.js?v=29082024IPRU1108"></script>
// <script src="https://code.highcharts.com/modules/exporting.js?v=29082024IPRU1108"></script>
// <script src="https://code.highcharts.com/modules/export-data.js?v=29082024IPRU1108"></script>
// <script src="https://code.highcharts.com/modules/accessibility.js?v=29082024IPRU1108"></script>

// <link rel="stylesheet" href="https://www.iciciprulife.com/content/icici-prudential-life-insurance/insurance-guide/financial-planning-tools-calculators/poc-calc/css/allclientlibs1.min.css?v=29082024IPRU1108" type="text/css">

// <script type="text/javascript" src="https://www.iciciprulife.com/content/icici-prudential-life-insurance/insurance-guide/financial-planning-tools-calculators/poc-calc/js/allplansjquery.min.js?v=29082024IPRU1108"></script>
// `;

// appendToHead(headContent);

// Function to append CDN resources
function loadCDNResources() {
  // List of CDN URLs (both script and link)
  const cdnResources = [
    {
      type: 'script',
      src: 'https://code.highcharts.com/highcharts.js?v=29082024IPRU1108',
    },
    {
      type: 'script',
      src: 'https://code.highcharts.com/modules/exporting.js?v=29082024IPRU1108',
    },
    {
      type: 'script',
      src: 'https://code.highcharts.com/modules/export-data.js?v=29082024IPRU1108',
    },
    {
      type: 'script',
      src: 'https://code.highcharts.com/modules/accessibility.js?v=29082024IPRU1108',
    },
    {
      type: 'script',
      href: 'https://www.iciciprulife.com/content/icici-prudential-life-insurance/insurance-guide/financial-planning-tools-calculators/poc-calc/js/allplansjquery.min.js?v=29082024IPRU1108',
    },
    {
      type: 'script',
      src: '//cdn.jsdelivr.net/npm/slick-carousel@1.8.1/slick/slick.min.js',
    },
    {
      type: 'script',
      href: 'https://www.iciciprulife.com/content/icici-prudential-life-insurance/insurance-guide/financial-planning-tools-calculators/poc-calc/js/custom_mod_15_02_17.js?v=06092024IPRU1015',
    },
    {
      type: 'stylesheet',
      href: 'https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css?v=29082024IPRU1108',
    },
    {
      type: 'stylesheet',
      href: 'https://www.iciciprulife.com/content/icici-prudential-life-insurance/insurance-guide/financial-planning-tools-calculators/poc-calc/css/allclientlibs1.min.css?v=29082024IPRU1108',
    },
  ];

  // Loop through each CDN resource and append it to the head
  cdnResources.forEach(resource => {
    if (resource.type === 'script') {
      const script = document.createElement('script');
      script.src = resource.src;
      script.onload = function() {
        console.log(`${resource.src} loaded successfully`);
      };
      script.onerror = function() {
        console.error(`Failed to load ${resource.src}`);
      };
      document.head.appendChild(script);
    } else if (resource.type === 'stylesheet') {
      const link = document.createElement('link');
      link.rel = 'stylesheet';
      link.href = resource.href;
      link.onload = function() {
        console.log(`${resource.href} stylesheet loaded successfully`);
      };
      link.onerror = function() {
        console.error(`Failed to load ${resource.href}`);
      };
      document.head.appendChild(link);
    }
  });
}

setTimeout(() => {
  loadCDNResources();
}, 2000);
