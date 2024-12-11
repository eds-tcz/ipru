if (
  /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
    navigator.userAgent
  )
) {
  // You are in mobile browser
  var ptDevice = 'mobile';
} else {
  var ptDevice = 'desktop';
}

var investmentAmount = 5000;
var futureInvestmentAmount = 0;
var rateOfInterest = 10;

var investmentPeriod = 5;
var stayInvestedForPeriod = 10;
var principalAmount = 0;
var interestAccured = 0;
var investmentTerm = 'monthly';
var myInvestment;
var totalInterestAccured;
var resultAmount = '';

var currentYear;

var mainArrayFutureInvestment = [];
var mainArrayInterestAccured = [];
var mainArrayMyInvestmentAmount = [];
var years = [];
var graphInterest = [];
var graphInvestment = [];
var graphFutureInvestment = [];
var investmentIncrease;
var investmentDecrease;
var rateOfInterestHalfYearly;
var rateOfInterestMonthly;

var StepsInvest = [
  {
    title: 'I want to Invest',
    desc: 'This step involves entering the amount you intend to invest. This could be your initial investment or an additional contribution. You also need to select the frequency of your investment. You can choose to invest monthly, half-yearly, yearly or make a one-time investment.',
  },
  {
    title: 'I want to invest for',
    desc: 'The next step involves determining the duration of your investment. You can choose any period between 5 to 30 years. Keep in mind that the duration you choose should align with your age and financial goals. When selecting the investment duration, it is also advised to consider factors such as your investment objectives and risk tolerance.',
  },
  {
    title: 'I will stay invested for',
    desc: 'This step is similar to the previous one but focuses on the duration you plan to stay invested. You can again choose a tenure between 5 to 30 years based on your age, financial objectives and risk tolerance. Staying invested for a longer duration typically allows for greater potential growth due to the effect of compounding.',
  },
  {
    title: 'I expect rate of return of (Annually)',
    desc: 'Lastly, you need to specify the annual rate of return you expect to earn on your investment. This can vary based on the type of investments you choose and prevailing market conditions. You can select a rate between 0% to 30% based on your investment and market expectations. Keep in mind that this is the annual expected return on your investment.',
  },
];

$(document).ready(function () {
  populateFields();

  function move_arrow(i) {
    var percent = '-38%';
    if (i === 1) {
      percent = '-12%';
    } else if (i === 2) {
      percent = '12%';
    } else if (i === 3) {
      percent = '38%';
    } else {
      percent = '-38%';
    }

    $('.triangle').css({ left: percent });
  }

  $('.stepsCardParent .stepsCard').on('click', function () {
    var id = parseInt($(this).attr('data-id'));
    $('.stepsCardDescription .Title').text(StepsInvest[id].title);
    $('.stepsCardDescription .Description').text(StepsInvest[id].desc);
    move_arrow(id);

    $('.stepsCardParent .stepsCard').removeClass('selected');
    $(this).addClass('selected');

    if (device == 0) {
      scrollToTargetButton(id);
    }
  });

  $('.prev-arrow').on('click', function () {
    var ele = $('.stepsCardParent .stepsCard.selected');
    var id = ele.attr('data-id');
    id = parseInt(id);

    if (id === 0) {
      id = 3;
    } else {
      id = id - 1;
    }

    $('.stepsCardDescription .Title').text(StepsInvest[id].title);
    $('.stepsCardDescription .Description').text(StepsInvest[id].desc);
    move_arrow(id);
    ele.removeClass('selected');

    $(`.stepsCardParent .stepsCard[data-id="${String(id)}"]`).addClass(
      'selected'
    );
  });
  $('.next-arrow').on('click', function () {
    var ele = $('.stepsCardParent .stepsCard.selected');
    var id = ele.attr('data-id');
    id = parseInt(id);

    if (id === 3) {
      id = 0;
    } else {
      id = id + 1;
    }

    $('.stepsCardDescription .Title').text(StepsInvest[id].title);
    $('.stepsCardDescription .Description').text(StepsInvest[id].desc);
    move_arrow(id);
    ele.removeClass('selected');

    $(`.stepsCardParent .stepsCard[data-id="${String(id)}"]`).addClass(
      'selected'
    );
  });

  $('.premiumInc').click(function () {
    //alert('increased');
    investmentAmount = parseInt(investmentAmount) + 5000;

    $('#investValAmt').val(addCommas1(investmentAmount));

    calculateInvestment();
    graphData();
  });
  $('.premiumDec').click(function () {
    //alert('increased');
    investmentAmount = parseInt(investmentAmount) - 5000;

    $('#investValAmt').val(addCommas1(investmentAmount));
    calculateInvestment();
    console.log('investmentAmount', investmentAmount);
    graphData();
  });

  $('#investValAmt').keyup(function () {
    investmentAmount = removeCommas($('#investValAmt').val());
    graphData();
    calculateInvestment();
  });
  $('#investValAmt1').keyup(function () {
    //mobile
    investmentAmount = removeCommas($('#investValAmt1').val());
    graphData();
    calculateInvestment();
  });
  $('#investValAmt').on('input', function () {
    $('#investValAmt').val(addCommas1(removeCommas($('#investValAmt').val())));
    investmentAmount = removeCommas($('#investValAmt').val());
  });
  $('#investValAmt1').on('input', () => {
    $('#investValAmt1').val(
      addCommas1(removeCommas($('#investValAmt1').val()))
    );
    investmentAmount = removeCommas($('#investValAmt1').val());
    if (investmentTerm == 'once') {
      $('.hideForOnce').hide();
    }
  });
  $('#investFor').change(function () {
    //alert($('#investFor').val());
    $('#investValTerm').val($('#investFor').val());
    investmentPeriod = $('#investFor').val();
    calculateInvestment();
    graphData();
    document.getElementById('termInvest').innerHTML = $(this).val() + ' Years';
  });
  $('#investValTerm').keyup(function () {
    //alert($('#investFor').val());
    $('#investValTerm').val($(this).val());
    $('#investFor').val($(this).val());
    investmentPeriod = $('#investFor').val();

    calculateInvestment();

    graphData();
    document.getElementById('termInvest').innerHTML = $(this).val();
  });
  $('#investValTermMb').change(function () {
    //mobile
    //alert($('#investFor').val());
    $('#investValTermMb').val($(this).val());

    investmentPeriod = $('#investValTermMb').val();
    calculateInvestment();

    graphData();
    document.getElementById('termInvest').innerHTML = $(this).val() + ' Years';
  });
  $('#stayInvestedFor').change(function () {
    //alert($('#stayInvestedFor').val());
    $('#investValTermFuture').val($('#stayInvestedFor').val());
    stayInvestedForPeriod = $('#stayInvestedFor').val();
    graphData();
    $('.term-poc').text($(this).val() + ' Years');
    $('.InvestYear_Text').text($(this).val());
  });
  $('#investValTermFuture').keyup(function () {
    //alert($('#stayInvestedFor').val());
    $('#investValTermFuture').val($(this).val());

    //$('#investValTermFuture').val($('#stayInvestedFor').val())
    $('#stayInvestedFor').val($(this).val());
    stayInvestedForPeriod = $('#stayInvestedFor').val();

    graphData();
    $('.term-poc').text($(this).val() + 'Years');
    $('.InvestYear_Text').text($(this).val());
  });
  $('#investValTermFutureMb').change(function () {
    //mobile
    //alert($('#stayInvestedFor').val());
    $('#investValTermFuture').val($(this).val());
    //$('#investValTermFutureMb').val($(this).val());
    stayInvestedForPeriod = $('#investValTermFutureMb').val();

    graphData();
    $('.term-poc').text($(this).val() + ' Years');
    $('.InvestYear_Text').text($(this).val());
    if (investmentTerm == 'once') {
      //06-02-24
      //alert('hi');
      $('.hideForOnce').hide();
    }
  });
  $('#rateOfInt').change(function () {
    //alert($('#rateOfInt').val());
    $('#investValRate').val($('#rateOfInt').val());
    rateOfInterest = parseInt($('#rateOfInt').val());
    graphData();
    $('.rate-poc').text($(this).val() + '%');
    $('.ROR_Text').text(rateOfInterest);
  });
  $('#investValRate').keyup(function () {
    $('#rateOfInt').val($('#investValRate').val());
    rateOfInterest = parseInt($('#investValRate').val());
    //alert($('#rateOfInt').val());
    graphData();
    $('.rate-poc').text($(this).val() + '%');
    $('.ROR_Text').text($(this).val());
  });
  $('#investValRateMb').change(function () {
    //mobile
    //alert($('#rateOfInt').val());
    $('#investValRateMb').val($(this).val());
    rateOfInterest = $('#investValRateMb').val();
    graphData();
    $('.rate-poc').text($(this).val() + '%');
    $('.ROR_Text').text($(this).val());
    if (investmentTerm == 'once') {
      $('.hideForOnce').hide();
    }
  });

  //	rateOfInterest=(rateOfInterest/12); // 0.67

  console.log('rateOfInterestHalfYearly', rateOfInterestHalfYearly);
  console.log('rateOfInterestMonthly', rateOfInterestMonthly);
  //$('.paymentTermbtn').triggerHandler("click");
  //alert('triggered');
  $('.paymentTermbtn').click(function () {
    investmentTerm = $(this).val();
    calculateInvestment();
    //alert('triggered');
    graphData();
  });
  $('.paymentTermbtn1').click(function () {
    //06-02-24
    investmentTerm = $(this).val();
    calculateInvestment();
    graphData();
    //alert('triggered');
    //graphData();
  });
  function populateFields() {
    $('#investValAmt').val(addCommas1(10000));

    investmentTerm = 'monthly';
    investmentAmount = '10000';
    rateOfInterest = 8;
    investmentPeriod = '10';
    calculateInvestment();
    //investmentPeriod=5;
    stayInvestedForPeriod = $('#investValTermFuture').val();
    rateOfInterestHalfYearly = rateOfInterest / 2;
    rateOfInterestMonthly = rateOfInterest / 12;
    console.log(
      'rateOfInterestMonthlyrateOfInterestMonthly',
      rateOfInterestMonthly
    );

    if (ptDevice !== 'desktop') {
      $('.rate-poc').text(rateOfInterest + '%');
      $('.term-poc').text(stayInvestedForPeriod + ' Years');
    }

    graphData();
  }
  function calculateInvestment() {
    if (investmentTerm === 'monthly') {
      resultAmount = investmentAmount * investmentPeriod * 12;
    } else if (investmentTerm === 'Half-yearly') {
      resultAmount = investmentAmount * investmentPeriod * 2;
    } else if (investmentTerm === 'Yearly') {
      resultAmount = investmentAmount * investmentPeriod;
    } else {
      resultAmount = investmentAmount;
    }

    console.log('hrushi', resultAmount);
    document.getElementById('youInvestData1').innerHTML = setVal2(
      Number(Math.round(resultAmount))
    );
  }

  function graphData() {
    mainArrayFutureInvestment = [];
    mainArrayInterestAccured = [];
    mainArrayMyInvestmentAmount = [];

    var tempStayInvestedPeriod = stayInvestedForPeriod.split(' ');

    //alert(investmentTerm);

    //console.log(tempStayInvestedPeriod);
    //for(var i=0;i<tempStayInvestedPeriod[0]*12;i++){
    //compoundCalculatorLogic(i);}
    if (investmentTerm == 'Yearly' || investmentTerm == 'once') {
      var stayinvestment = parseInt(tempStayInvestedPeriod[0]);
    } else if (investmentTerm == 'monthly') {
      var stayinvestment = parseInt(tempStayInvestedPeriod[0]) * 12;
    } else {
      var stayinvestment = parseInt(tempStayInvestedPeriod[0]) * 2;
      console.log('stayinvestment----Halfyear', stayinvestment);
    }
    var str = new Date().getFullYear() + '';
    str = str.match(/\d{2}$/);
    for (i = 1; i <= stayinvestment; i++) {
      compoundCalculatorLogic(i, stayinvestment);
      tempYear(i, str, parseInt(str) + i);
    }

    graphAction();
  }
  function setVal2(input) {
    if (isNaN(input)) {
      return input;
    } else {
      if (input >= 10000000) input = (input / 10000000).toFixed(2) + ' Crore';
      else if (input >= 100000) input = (input / 100000).toFixed(2) + ' Lakhs';
      else if (input >= 1000) input = (input / 1000).toFixed(2) + ' Thousand';
      return input;
    }
  }

  function compoundCalculatorLogic(t, si) {
    //console.log(si-1+"------"+t);
    //console.log(si);
    var tempStayInvestedForOnce = stayInvestedForPeriod.split(' ');
    var tempInvestedPeriod = investmentPeriod.split(' ');
    //	console.log('tempStayInvestedForOnce',tempStayInvestedForOnce);

    if (investmentTerm == 'Yearly') {
      $('.hideForOnce').show();
      $('.threedesk').text('3');
      $('.fourdesk').text('4');
      if (t == 1) {
        principalAmount = parseInt(investmentAmount);
        interestAccured = (rateOfInterest * parseInt(investmentAmount)) / 100; // 0.66 *10000=67
        totalInterestAccured = interestAccured;
        futureInvestmentAmount = principalAmount + interestAccured;
        myInvestment = principalAmount;
      } else {
        //debugger;

        if (t <= parseInt(tempInvestedPeriod[0])) {
          principalAmount = futureInvestmentAmount + parseInt(investmentAmount);
          interestAccured = (rateOfInterest * principalAmount) / 100;
          futureInvestmentAmount = principalAmount + interestAccured;
          myInvestment = myInvestment + parseInt(investmentAmount);
          totalInterestAccured = totalInterestAccured + interestAccured;
        } else {
          principalAmount = futureInvestmentAmount;
          interestAccured = (rateOfInterest * principalAmount) / 100;
          futureInvestmentAmount = principalAmount + interestAccured;
          totalInterestAccured = totalInterestAccured + interestAccured;
          myInvestment = myInvestment;
        }
      }
      /*mainArrayFutureInvestment.push(parseInt(futureInvestmentAmount.toFixed(2)));
mainArrayInterestAccured.push(parseInt(totalInterestAccured.toFixed(2)));
mainArrayMyInvestmentAmount.push(parseInt(myInvestment.toFixed(2)));*/
      if (t % 1 == 0) {
        mainArrayInterestAccured.push(
          parseInt(totalInterestAccured.toFixed(2))
        );
        mainArrayFutureInvestment.push(
          parseInt(futureInvestmentAmount.toFixed(2))
        );
        mainArrayMyInvestmentAmount.push(parseInt(myInvestment.toFixed(2)));
      }
    } else if (investmentTerm == 'Half-yearly') {
      $('.hideForOnce').show();
      $('.threedesk').text('3');
      $('.fourdesk').text('4');
      if (t == 1) {
        principalAmount = parseInt(investmentAmount);
        interestAccured =
          ((rateOfInterest / 2) * parseInt(investmentAmount)) / 100; // 0.66 *10000=67
        totalInterestAccured = interestAccured * 2;
        futureInvestmentAmount = principalAmount + interestAccured;

        myInvestment = principalAmount;
      } else {
        //debugger;

        if (t <= tempInvestedPeriod[0] * 2) {
          principalAmount = futureInvestmentAmount + parseInt(investmentAmount);
          interestAccured = ((rateOfInterest / 2) * principalAmount) / 100;
          futureInvestmentAmount = principalAmount + interestAccured;
          totalInterestAccured = totalInterestAccured + interestAccured;

          myInvestment = myInvestment + parseInt(investmentAmount);
        } else {
          //console.log(t)
          principalAmount = futureInvestmentAmount;
          //console.log('principalAmount halfYear',principalAmount);
          interestAccured = ((rateOfInterest / 2) * principalAmount) / 100;
          futureInvestmentAmount = principalAmount + interestAccured;
          totalInterestAccured = totalInterestAccured + interestAccured;
          myInvestment = myInvestment;
        }
      }
      /*mainArrayFutureInvestment.push(parseInt(futureInvestmentAmount.toFixed(2)));
mainArrayInterestAccured.push(parseInt(totalInterestAccured.toFixed(2)));
mainArrayMyInvestmentAmount.push(parseInt(myInvestment.toFixed(2)));*/
      if (t % 2 == 0) {
        mainArrayInterestAccured.push(
          parseInt(totalInterestAccured.toFixed(2))
        );
        mainArrayFutureInvestment.push(
          parseInt(futureInvestmentAmount.toFixed(2))
        );
        mainArrayMyInvestmentAmount.push(parseInt(myInvestment.toFixed(2)));
      }
      //console.log('interestAccured',interestAccured);
      /*console.log('principalAmount',principalAmount);
	/*console.log('principalAmount',principalAmount);
console.log('interestAccured',interestAccured);
console.log('futureInvestmentAmount',futureInvestmentAmount);
console.log('myInvestment',myInvestment);*/
    } else if (investmentTerm == 'monthly') {
      $('.hideForOnce').show();
      $('.threedesk').text('3');
      $('.fourdesk').text('4');
      //	debugger;
      if (t == 1) {
        principalAmount = parseInt(investmentAmount);
        interestAccured =
          ((rateOfInterest / 12) * parseInt(investmentAmount)) / 100; // 0.66 *10000=67

        futureInvestmentAmount = principalAmount + interestAccured;
        myInvestment = principalAmount;
        totalInterestAccured = interestAccured;
      } else {
        //debugger;

        if (t <= parseInt(tempInvestedPeriod[0] * 12)) {
          principalAmount = futureInvestmentAmount + parseInt(investmentAmount);
          interestAccured = ((rateOfInterest / 12) * principalAmount) / 100;
          futureInvestmentAmount = principalAmount + interestAccured;
          totalInterestAccured = totalInterestAccured + interestAccured;

          myInvestment = myInvestment + parseInt(investmentAmount);
        } else {
          principalAmount = futureInvestmentAmount;
          interestAccured = ((rateOfInterest / 12) * principalAmount) / 100;
          futureInvestmentAmount = principalAmount + interestAccured;
          totalInterestAccured = totalInterestAccured + interestAccured;
          myInvestment = myInvestment;
        }
      }
      /*mainArrayInterestAccured.push(parseInt(totalInterestAccured.toFixed(2)));
	mainArrayFutureInvestment.push(parseInt(futureInvestmentAmount.toFixed(2)));
	mainArrayMyInvestmentAmount.push(parseInt(myInvestment.toFixed(2)));*/
      console.log('*********' + t);
      if (t % 12 == 0) {
        console.log('========' + t);
        mainArrayInterestAccured.push(
          parseInt(totalInterestAccured.toFixed(2))
        );
        mainArrayFutureInvestment.push(
          parseInt(futureInvestmentAmount.toFixed(2))
        );
        mainArrayMyInvestmentAmount.push(parseInt(myInvestment.toFixed(2)));
      }
    } else {
      $('.hideForOnce').hide();
      if (ptDevice == 'mobile') {
        $('.graphClass').css('margin-top', '3%');
      } else {
        $('.threedesk').text('2');
        $('.fourdesk').text('3');
        $('.graphClass').css('margin-top', '-34.5%');
      }
      if (t == 1) {
        principalAmount = parseInt(investmentAmount);
        interestAccured = (rateOfInterest * principalAmount) / 100; // 0.66 *10000=67
        futureInvestmentAmount = principalAmount + interestAccured;
        myInvestment = principalAmount;
        totalInterestAccured = interestAccured;
      } else {
        if (t <= tempStayInvestedForOnce[0]) {
          console.log('tempStayInvestedForOnce', tempStayInvestedForOnce);

          principalAmount = futureInvestmentAmount;
          interestAccured = (rateOfInterest * principalAmount) / 100; // 0.66 *10000=67
          totalInterestAccured = totalInterestAccured + interestAccured;
          futureInvestmentAmount = principalAmount + interestAccured;
        }
      }

      if (t % 1 == 0) {
        mainArrayInterestAccured.push(
          parseInt(totalInterestAccured.toFixed(2))
        );
        mainArrayFutureInvestment.push(
          parseInt(futureInvestmentAmount.toFixed(2))
        );
        mainArrayMyInvestmentAmount.push(parseInt(myInvestment.toFixed(2)));
      }
    }

    //console.log('mainArrayFutureInvestment',mainArrayFutureInvestment[mainArrayFutureInvestment.length-1]);

    $('#FinalAmountCalc').html(
      setVal2(
        Number(
          Math.round(
            mainArrayFutureInvestment[mainArrayFutureInvestment.length - 1]
          )
        )
      )
    );
    //document.getElementById("#FinalAmountCalc").innerHTML=
  }
  function tempYear(p, currentYear, NextYear) {
    //	var TempYear1=p;
    //console.log('year1',TempYear1);

    years.push('20' + NextYear);
  }
  $('#investValAmt').prop('value', '10,000');
  $('#investValAmt').prop('type', 'text');
  $('#investValAmt').attr('oninput', 'maxLengthCheck(this)');
  $('#investValAmt1').prop('value', '10,000');
  $('#investValAmt1').prop('type', 'text');
  $('#investValAmt1').attr('oninput', 'maxLengthCheck(this)');

  $('#investValAmt').bind('keypress', function (event) {
    if (onlyNumbers(event)) {
      if (event.which == 13 || event.keyCode == 13) {
        $(this).blur();
      }
      return true;
    } else {
      return false;
    }
  });

  $('#investValAmt1').bind('keypress', function (event) {
    if (onlyNumbers(event)) {
      if (event.which == 13 || event.keyCode == 13) {
        $(this).blur();
      }
      return true;
    } else {
      return false;
    }
  });
  function maxLengthCheck(object) {
    if (object.value.length > object.maxLength)
      object.value = object.value.slice(0, object.maxLength);
  }
  function onlyNumbers(event) {
    //console.log(event.keyCode);
    if (event.keyCode != 0) {
      if (event.keyCode < 48 || event.keyCode > 57) {
        if (
          event.keyCode != 8 &&
          event.keyCode != 9 &&
          event.keyCode != 46 &&
          event.keyCode != 37 &&
          event.keyCode != 39 &&
          event.keyCode != 13
        ) {
          event.returnValue = false;
          return false;
        }
      }
    } else {
      if (event.charCode < 48 || event.charCode > 57) {
        if (
          event.charCode != 8 &&
          event.charCode != 9 &&
          event.charCode != 46 &&
          event.charCode != 37 &&
          event.charCode != 39 &&
          event.charCode != 13
        ) {
          event.preventDefault();
          return false;
        }
      }
    }
    return true;
  }

  function graphAction() {
    var TempGraphInterest = mainArrayInterestAccured;
    var TempGraphInvestment = mainArrayMyInvestmentAmount;
    var TempGraphFutureInvestment = mainArrayFutureInvestment;
    //console.log(mainArrayInterestAccured);
    //console.log('TempGraphInterest',TempGraphInterest);
    console.log('TempGraphFutureInvestment', TempGraphFutureInvestment);
    //console.log('years',years);

    Highcharts.chart('jqChart', {
      // 15-12-23
      chart: {
        type: 'column',
      },
      title: {
        text: '',
      },
      legend: {
        enabled: true,
      },

      credits: {
        enabled: false,
      },
      responsive: {
        rules: [
          {
            condition: {
              maxWidth: 500,
            },
            chartOptions: {
              legend: {
                enabled: true,
              },
            },
          },
        ],
      },

      xAxis: {
        categories: years,
        breakSize: 5,
        title: {
          text: 'Years of Growth',
        },
        //showLastLabel: true
      },
      yAxis: {
        min: 0,
        title: {
          text: 'Amount Invested (In Lakh)',
        },
        gridLineColor: 'none',
        lineWidth: 1,
        labels: {
          formatter: function () {
            return this.value / 10000 + 'L';
          },
        },
      },
      legend: {
        align: 'left',
        verticalAlign: 'center',
        x: 100,
        y: 0,
        layout: 'horizontal',
        fontSize: 20,
        symbolHeight: 10,
        symbolWidth: 20,
        symbolRadius: 0,
      },
      tooltip: {
        formatter: function () {
          var seriesName = this.series.name;
          //alert(seriesName);
          if (seriesName === 'Future Investment') {
            var s = '<img src="images/rupee_1.png">';
            s += 'Year :' + this.x + '<br>';
            s += 'Future Amount: &nbsp;&#8377;&nbsp;' + addCommas1(this.y);
            return s;
          }
          if (seriesName === 'Principal Amount') {
            var s = '<img src="images/rupee_1.png">';
            s += 'Year :' + this.x + '<br>';
            s += 'Principle Amount: &nbsp;&#8377;&nbsp;' + addCommas1(this.y);
            return s;
          }
          if (seriesName === 'Compound Interest') {
            var s = '<img src="images/rupee_1.png">';
            s += 'Year :' + this.x + '<br>';
            s += 'Interest Earned: &nbsp;&#8377;&nbsp;' + addCommas1(this.y);
            return s;
          }
        },
      },

      plotOptions: {
        series: {
          borderRadius: {
            radius: 5,
          },
          stacking: 'normal',
        },
      },
      series: [
        {
          color: {
            linearGradient: { x1: 0, x2: 0, y1: 0, y2: 1 },
            stops: [
              [0, '#E7873C'],
              [1, '#E06435'],
            ],
          },
          name: 'Compound Interest',
          data: TempGraphInterest,

          dataLabels: {
            enabled: false,
            y: -15,
            x: -10,
            formatter: function () {
              //debugger;
              var s = '<img src="images/rupee_1.png">';
              s += addCommas1(TempGraphInterest[this.x]);
              return s;
            },
          },

          tooltip: {
            formatter: function () {
              //debugger;
              var s = '<img src="images/rupee_1.png">';
              s += addCommas1(TempGraphInterest[this.x]);
              return s;
            },
          },
          itemStyle: {
            fontSize: '20px',
          },
          //colors: ColorArr1,
        },

        {
          type: 'column',
          color: '#FFD1B3',

          name: 'Principal Amount',

          data: TempGraphInvestment,
          dataLabels: {
            enabled: false,
            y: -15,
            x: -10,
          },
          tooltip: {
            formatter: function () {
              //debugger;
              var s = '<img src="images/rupee_1.png">';
              s += addCommas(TempGraphInvestment[this.x]);
              return s;
            },
          },
          //colors: ColorArr2,
        },
        {
          type: 'spline',
          name: 'Future Investment',
          showInLegend: true,
          data: TempGraphFutureInvestment,
          color: '#912A38',
          formatter: function () {
            var s = '<img src="images/rupee_1.png">';
            s += addCommas1(TempGraphFutureInvestment[this.x]);
            return s;
          },
        },
      ],
    });
  }

  function addCommas1(nStr) {
    console.log('------------' + nStr);
    nStr += '';
    x = nStr.split('.');
    x1 = x[0];
    x2 = x.length > 1 ? '.' + x[1] : '';
    var rgx = /(\d+)(\d{3})/;
    var z = 0;
    var len = String(x1).length;
    var num = parseInt(len / 2 - 1);
    while (rgx.test(x1)) {
      if (z > 0) {
        x1 = x1.replace(rgx, '$1' + ',' + '$2');
      } else {
        x1 = x1.replace(rgx, '$1' + ',' + '$2');
        rgx = /(\d+)(\d{2})/;
      }
      z++;
      num--;
      if (num == 0) {
        break;
      }
    }
    return x1 + x2;
  }

  function removeCommas(numWidCommas) {
    //alert(numWidCommas);
    var numWidoutCommas = numWidCommas.replace(/[,]/g, '');
    return numWidoutCommas;
  }
});
