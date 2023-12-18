import Chart from "./components/chart";
import Chat from "./components/chat";

const Index = () => {
  const data = [];
  for (let i = 0; i < 5; ++i) {
    data.push(Math.round(Math.random() * 200));
  }
  return (
    <>
      <header className="w-full flex items-center py2 px-3">
        <div className="flex flex-grow space-x-2 items-center">
          <img src="/images.png" className="w-[60px]"></img>
          <img
            src="/cq5dam.resize.390.234.png"
            className="w-[100px] h-[60px]"
          ></img>
        </div>
        <div className="ml-auto flex items-center space-x-2">
          <div className="text-gray-500 hover:text-gray-700 font-bold text-sm font-mono cursor-pointer">
            電子週報
          </div>
          <div className="text-gray-500 hover:text-gray-700 font-bold text-sm cursor-pointer">
            焦點議題
          </div>
        </div>
      </header>

      <main className="bg-blue-300 w-full min-h-screen flex">
        {/* left */}
        <div className="w-[45%] flex">
          {/* 理財電子週報 */}
          <div className="text-white w-[50%] h-full p-3 flex flex-col items-start">
            <div className="text-lg font-bold shadow-lg my-2 w-full">
              理財電子週報
            </div>

            <div className="text-sm font-semibold my-2">
              偏高之美債殖利率市場震盪
              <br />
              本週聚焦Fed利率會議與發債計畫
            </div>

            <div className="text-[0.65rem] my-2">
              上週Alphabet, Meta等美股龍頭財報展望XX,
              加上以巴衝突加劇及美國公債殖利率震盪後仍維持偏強走勢, 繼續壓xx,
              敗為主之全球股市...
            </div>

            <div className="bg-white w-full h-[400px] p-3 rounded-md">
              <Chart
                option={{
                  title: {
                    text: "玉山新聞情緒分析模型",
                  },
                  legend: {
                    data: ["情緒分數"],
                    left: "right",
                  },
                  tooltip: {
                    show: true,
                  },
                  radar: {
                    // shape: 'circle',
                    indicator: [
                      {
                        name: "新聞一",
                        max: 6500,
                      },
                      { name: "新聞二", max: 1 },
                      { name: "新聞三", max: 1 },
                      { name: "新聞四", max: 1 },
                      { name: "新聞五", max: 1 },
                      { name: "新聞六", max: 1 },
                    ],
                  },
                  series: [
                    {
                      name: "Budget vs spending",
                      type: "radar",
                      data: [
                        {
                          value: [0.5, 0.7, 0.4, -0.2, 0.7, 0.8],
                          name: "情緒分數",
                        },
                      ],
                    },
                  ],
                }}
              />
            </div>
            <div className="flex w-full justify-between text-white text-xs font-bold my-2">
              <div className="flex items-center text-xs">
                <img src="sun-emoji.png" className="w-[30px] h-[30px]"></img>
                正向
              </div>
              <div className="flex items-center text-xs">
                <img
                  src="partly-cloudy-day--v1.png"
                  className="w-[30px] h-[30px]"
                ></img>
                中性
              </div>
              <div className="flex items-center text-xs">
                <img
                  src="external-rainny-spring-filled-outline-lima-studio.png"
                  className="w-[30px] h-[30px]"
                ></img>
                負面
              </div>
            </div>
          </div>

          {/* 還想看更多 */}
          <div className="w-[50%] h-full p-3 flex flex-col items-center">
            <div className="text-white font-bold text-lg shadow-lg w-full mt-2 mb-[20px]">
              還想看更多...
            </div>
            {/* 電子週報 */}
            <div className="flex flex-col items-center w-full my-2">
              <div className="text-white text-base font-semibold mb-2">
                電子週報
              </div>
              <div className="flex justify-between items-center w-full my-1">
                <img
                  className="w-[20%] rounded-sm"
                  src="/Screenshot 2023-12-12 225250.png"
                ></img>
                {/* <div className="w-[10%] h-[20px] bg-white"></div> */}
                <div className="w-[75%] text-black text-[0.65rem]">
                  金融占台股市值比僅次半導體 GDP貢獻12年來近零成長
                  <div className="text-gray-500">2023年11月26日</div>
                </div>
              </div>
              <div className="flex justify-between items-center w-full my-1">
                <img
                  className="w-[20%] rounded-sm"
                  src="/Screenshot 2023-12-12 225337.png"
                ></img>
                <div className="w-[75%] text-black text-[0.65rem]">
                  台積電賺很多股價「要死不活」 反觀死敵噴漲30％ 驚爆2大弱點
                  <div className="text-gray-500">2023年11月24日</div>
                </div>
              </div>
              <div className="flex justify-between items-center w-full my-1">
                <img
                  className="w-[20%] rounded-sm"
                  src="/Screenshot 2023-12-12 225403.png"
                ></img>
                <div className="w-[75%] text-black text-[0.65rem]">
                  Nvidia beats TSMC and Intel to take top chip industry revenue
                  crown for the first time
                  <div className="text-gray-500">2023年11月24日</div>
                </div>
              </div>
              <div className="flex justify-between items-center w-full my-1">
                <img
                  className="w-[20%] rounded-sm"
                  src="/Screenshot 2023-12-12 225429.png"
                ></img>
                <div className="w-[75%] text-black text-[0.65rem]">
                  TSMC (TSM) Stock Declines While Market Improves: Some
                  Information for Investors
                  <div className="text-gray-500">2023年11月25日</div>
                </div>
              </div>
            </div>
            {/* 焦點議題 */}
            <div className="flex flex-col items-center w-full my-2"></div>
            <header className="App-header">
              <h1 style={{ textAlign: "center" }}>投資機器人</h1>
            </header>
            <Chat />
          </div>
        </div>

        {/* right */}
        <div className="w-[55%] flex justify-center">
          <div className="p-5 m-3 w-full bg-blue-200 flex flex-col items-center relative rounded-xl">
            <div className="text-xl text-green-600 font-bold">
              投資數據儀表板
            </div>
            <div className="w-full text-base flex justify-end">
              <input
                placeholder="search"
                className="max-w-[150px] max-h-[20px] rounded-md p-1"
              ></input>
            </div>

            <div className="w-full flex">
              {/* left */}
              <div className="w-[60%] p-1 mt-2">
                <div className="flex justify-between items-center mt-5">
                  <div className="text-black text-sm">台積電2330 23Q2</div>
                  <input
                    type="text"
                    className="rounded-md max-w-[150px] max-h-[20px] px-1"
                    placeholder="search"
                  ></input>
                </div>

                <div className="flex justify-between mt-2">
                  <div className="bg-white w-[23%] h-[60px] rounded-md text-black p-1 flex flex-col items-center justify-center">
                    <div className="text-xs">遠傳Q2 營收</div>
                    <div className="text-[0.65rem] font-bold">$2322億</div>
                  </div>
                  <div className="bg-white w-[23%] h-[60px] rounded-md text-black p-1 flex flex-col items-center justify-center">
                    <div className="text-xs">和碩Q3</div>
                    <div className="text-[0.65rem] font-bold">
                      營收YoY下降3%
                    </div>
                  </div>
                  <div className="bg-white w-[23%] h-[60px] rounded-md text-black p-1 flex flex-col items-center justify-center">
                    <div className="text-xs">中光電</div>
                    <div className="text-[0.65rem] font-bold">年減2-3成</div>
                  </div>
                  <div className="bg-white w-[23%] h-[60px] rounded-md text-black p-1 flex flex-col items-center justify-center">
                    <div className="text-xs">台積電法說會</div>
                    <div className="text-[0.65rem] font-bold">預估年減4%</div>
                  </div>
                </div>

                <div className="flex justify-between mt-2">
                  <div className="bg-white w-[60%] h-[175px] rounded-md">
                    <Chart
                      option={{
                        grid: { top: "25%", height: "60%" },
                        title: {
                          text: "EPS $7.01",
                          subtext: "2022-01-01",
                          left: "center",
                          itemGap: 3,
                          textStyle: {
                            fontSize: 12,
                          },
                          subtextStyle: {
                            fontSize: 10,
                          },
                        },
                        tooltip: {
                          trigger: "axis",
                          textStyle: {
                            fontSize: 16,
                            fontWeight: "bold",
                          },
                          left: "right",
                        },
                        xAxis: {
                          type: "category",
                          data: [
                            "Mon",
                            "Tue",
                            "Wed",
                            "Thu",
                            "Fri",
                            "Sat",
                            "Sun",
                          ],
                          axisLabel: {
                            fontSize: 9,
                          },
                        },
                        yAxis: {
                          type: "value",
                          axisLabel: {
                            fontSize: 9,
                          },
                        },
                        series: [
                          {
                            data: [150, 230, 224, 218, 135, 147, 260],
                            type: "line",
                            lineStyle: { color: "#d5ceeb" },
                            smooth: true,
                          },
                        ],
                      }}
                    />
                  </div>

                  <div className="bg-white w-[36%] h-[175px] rounded-md">
                    <Chart
                      option={{
                        title: {
                          text: "營收$4090億",
                          subtext: "",
                          textStyle: {
                            fontSize: 12,
                          },
                          subtextStyle: {
                            fontSize: 10,
                          },
                        },
                        grid: { left: "20%", top: "25%", height: "60%" },
                        xAxis: {
                          type: "category",
                          data: ["Mon", "Tue", "Wed", "Thu", "Fri"],
                          axisLabel: {
                            fontSize: 9,
                          },
                        },
                        yAxis: {
                          type: "value",
                          axisLabel: {
                            fontSize: 9,
                          },
                        },
                        series: [
                          {
                            data: [120, 200, 150, 80, 70],
                            type: "bar",
                          },
                        ],
                      }}
                    />
                  </div>
                </div>

                <div className="flex justify-between mt-2">
                  <div className="bg-white w-[32%] h-[175px] rounded-md p-2">
                    <Chart
                      option={{
                        title: {
                          text: "$4090億資本支出",
                          itemGap: "1",
                          textStyle: {
                            fontSize: 12,
                          },
                          subtextStyle: {
                            fontSize: 10,
                          },
                        },
                        grid: { left: "20%", top: "25%", height: "60%" },
                        xAxis: {
                          type: "category",
                          data: ["Mon", "Tue", "Wed", "Thu", "Fri"],
                          axisLabel: {
                            fontSize: 9,
                          },
                        },
                        yAxis: {
                          type: "value",
                          axisLabel: {
                            fontSize: 9,
                          },
                        },
                        series: [
                          {
                            data: [120, 200, 150, 80, 70],
                            type: "bar",
                          },
                        ],
                      }}
                    />
                  </div>
                  <div className="bg-white w-[32%] h-[175px] rounded-md">
                    <Chart
                      option={{
                        title: {
                          text: "產業分析",
                          left: "center",
                          textStyle: {
                            fontSize: 12,
                          },
                          subtextStyle: {
                            fontSize: 10,
                          },
                        },
                        grid: { top: "60", height: "500" },

                        tooltip: {
                          trigger: "item",
                        },
                        series: [
                          {
                            name: "Pie",
                            type: "pie",
                            radius: "50%",
                            data: [
                              { value: 1048, name: "Search Engine" },
                              { value: 735, name: "Direct" },
                              { value: 580, name: "Email" },
                              { value: 484, name: "Union Ads" },
                              { value: 300, name: "Video Ads" },
                            ],
                            emphasis: {
                              itemStyle: {
                                shadowBlur: 10,
                                shadowOffsetX: 0,
                                shadowColor: "rgba(0, 0, 0, 0.5)",
                              },
                            },
                          },
                        ],
                      }}
                    />
                  </div>
                  <div className="bg-white w-[32%] h-[175px] rounded-md">
                    <Chart
                      option={{
                        title: {
                          text: "營收占比",
                          left: "center",
                          textStyle: {
                            fontSize: 12,
                          },
                          subtextStyle: {
                            fontSize: 10,
                          },
                        },
                        grid: { top: "60", height: "500" },

                        tooltip: {
                          trigger: "item",
                        },
                        series: [
                          {
                            name: "Pie",
                            type: "pie",
                            radius: "50%",
                            data: [
                              { value: 1048, name: "Search Engine" },
                              { value: 735, name: "Direct" },
                              { value: 580, name: "Email" },
                              { value: 484, name: "Union Ads" },
                              { value: 300, name: "Video Ads" },
                            ],
                            emphasis: {
                              itemStyle: {
                                shadowBlur: 10,
                                shadowOffsetX: 0,
                                shadowColor: "rgba(0, 0, 0, 0.5)",
                              },
                            },
                          },
                        ],
                      }}
                    />
                  </div>
                </div>

                <div className="flex justify-between mt-2">
                  <div className="bg-white w-[36%] h-[175px] rounded-md">
                    <Chart
                      option={{
                        series: [
                          {
                            type: "gauge",
                            progress: {
                              show: true,
                              width: 18,
                            },
                            axisLine: {
                              lineStyle: {
                                width: 18,
                              },
                            },
                            axisTick: {
                              show: false,
                            },
                            splitLine: {
                              length: 15,
                              lineStyle: {
                                width: 2,
                                color: "#999",
                              },
                            },
                            axisLabel: {
                              distance: 25,
                              color: "#999",
                              fontSize: 5,
                            },
                            anchor: {
                              show: true,
                              showAbove: true,
                              size: 10,
                              itemStyle: {
                                borderWidth: 10,
                              },
                            },
                            title: {
                              show: false,
                            },
                            detail: {
                              valueAnimation: true,
                              fontSize: 10,
                              offsetCenter: [0, "70%"],
                            },
                            data: [
                              {
                                value: 70,
                              },
                            ],
                          },
                        ],
                      }}
                    />
                  </div>

                  <div className="bg-white w-[60%] h-[175px] rounded-md">
                    <Chart
                      option={{
                        grid: { top: "10%", height: "60%" },
                        tooltip: {
                          trigger: "item",
                        },
                        legend: {
                          top: "5%",
                          left: "center",
                          // doesn't perfectly work with our tricks, disable it
                          selectedMode: false,
                        },
                        series: [
                          {
                            name: "Access From",
                            type: "pie",
                            radius: ["40%", "70%"],
                            center: ["50%", "70%"],
                            // adjust the start angle
                            startAngle: 180,
                            label: {
                              show: true,
                              formatter: "{b} ({d}%)",
                            },
                            data: [
                              { value: 1048, name: "Search Engine" },
                              { value: 735, name: "Direct" },
                              { value: 580, name: "Email" },
                              {
                                // make an record to fill the bottom 50%
                                value: 1048 + 735 + 580,
                                itemStyle: {
                                  // stop the chart from rendering this piece
                                  color: "none",
                                  decal: {
                                    symbol: "none",
                                  },
                                },
                                label: {
                                  show: true,
                                },
                              },
                            ],
                          },
                        ],
                      }}
                    />
                  </div>
                </div>
              </div>

              {/* right */}
              <div className="w-[40%] p-1 flex flex-col items-center justify-around mt-2">
                <div className="text-xl text-green-600 font-bold">
                  其他投資機會
                </div>

                <div className="flex flex-col justify-between p-2">
                  <div className="flex items-center justify-center my-2">
                    <img
                      src="sun-emoji.png"
                      className=" w-[30px] h-[30px] mx-1"
                    ></img>
                    <div className="w-[80%] text-black text-xs">
                      遠傳Q3法說會／前三季EPS追平2020全年
                      <div className="text-gray-500 text-[0.65rem]">
                        公布第三季合併總營收新台幣232.2億元，前三季每股盈餘達到2.56元，追平...
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center justify-center my-2">
                    <img
                      src="partly-cloudy-day--v1.png"
                      className="w-[30px] h-[30px] mx-1"
                    ></img>
                    <div className="w-[80%] text-black text-xs">
                      玉山金法說會／各項財業務表現良好 前三季獲利超去年全年
                      <div className="text-gray-500 text-[0.65rem]">
                        2023年前9月金控稅後純益158.9億元，獲利已超過去年全年，玉山金...
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center justify-center my-2">
                    <img
                      src="external-rainny-spring-filled-outline-lima-studio.png"
                      className="mx-1 w-[30px] h-[30px]"
                    ></img>
                    <div className="w-[80%] text-black text-xs">
                      中光電法說會／今年節能、影像產品出貨各約年減2-3成
                      <div className="text-gray-500 text-[0.65rem]">
                        中光電（5371）總經理林惠姿今（31）日表示，因電視及公眾顯示器（PID）...
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center justify-center my-2">
                    <img
                      src="sun-emoji.png"
                      className="mx-1 w-[30px] h-[30px]"
                    ></img>
                    <div className="w-[80%] text-black text-xs">
                      中鼎法說會／在建工程達3,537億元 創歷史新高
                      <div className="text-gray-500 text-[0.65rem]">
                        中鼎第3季稅後純益4.44億元，年增28.2％，每股稅後純益0.56元，優...{" "}
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex w-full justify-end">
                  <div className="flex items-center text-xs mx-1">
                    <img
                      src="sun-emoji.png"
                      className="w-[30px] h-[30px]"
                    ></img>
                    科技
                  </div>
                  <div className="flex items-center text-xs mx-1">
                    <img
                      src="partly-cloudy-day--v1.png"
                      className="w-[30px] h-[30px]"
                    ></img>
                    能源
                  </div>
                  <div className="flex items-center text-xs ml-1">
                    <img
                      src="external-rainny-spring-filled-outline-lima-studio.png"
                      className="w-[30px] h-[30px]"
                    ></img>
                    礦業
                  </div>
                </div>

                <div className="w-full flex justify-end">
                  <button className="text-base text-white font-bold bg-green-500 hover:bg-green-600 py-1 px-3 rounded-lg">
                    了解更多
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default Index;