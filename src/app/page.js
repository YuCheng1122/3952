const Index = () => {
  return (
    <>
      <header className="w-full flex items-center p-5">
        <div className="flex flex-grow space-x-2">
          <img src="/images.png" className="w-[150px] h-[150px]"></img>
          <img
            src="/cq5dam.resize.390.234.png"
            className="w-[200px] h-[150px]"
          ></img>
        </div>
        <div className="ml-auto flex items-center space-x-2">
          <div className="text-gray-600 text-lg">電子週報</div>
          <div className="text-gray-600 text-lg">焦點議題</div>
        </div>
      </header>

      <main className="bg-blue-300 w-full min-h-screen flex">
        {/* left */}
        <div className="w-[40%] flex">
          {/* 理財電子週報 */}
          <div className="text-white w-[50%] h-full p-2 flex flex-col justify-around">
            <div className="text-2xl font-bold shadow-lg">理財電子週報</div>
            <div className="text-xl font-semibold">
              偏高之美債殖利率市場震盪
              <br />
              本週聚焦Fed利率會議與發債計畫
            </div>
            <div>mdpqdpqmdqdmpdmqdq</div>
            <img src="/week_statement.png"></img>
            <div className="flex justify-between text-white text-2xl font-bold">
              <div>科技</div>
              <div>能源</div>
              <div>礦業</div>
            </div>
          </div>
          {/* 還想看更多 */}
          <div className="w-[50%] h-full p-2 flex flex-col items-center justify-around">
            <div className="text-white font-bold text-2xl">還想看更多...</div>

            <div className="flex flex-col items-center justify-around w-full">
              <div className="text-white text-xl font-semibold">電子週報</div>
              <div className="flex justify-around items-center w-full">
                <div className="w-[10%] h-[30px] bg-white"></div>
                <div className="w-[80%] text-black">
                  金融占台股市值比僅次半導體 GDP貢獻12年來近零成長
                  <div className="text-gray-500">2023年11月26日</div>
                </div>
              </div>
              <div className="flex justify-around items-center w-full">
                <div className="w-[10%] h-[30px] bg-white"></div>
                <div className="w-[80%] text-black">
                  台積電賺很多股價「要死不活」 反觀死敵噴漲30％ 驚爆2大弱點
                  <div className="text-gray-500">2023年11月24日</div>
                </div>
              </div>
              <div className="flex justify-around items-center w-full">
                <div className="w-[10%] h-[30px] bg-white"></div>
                <div className="w-[80%] text-black">
                  Nvidia beats TSMC and Intel to take top chip industry revenue
                  crown for the first time
                  <div className="text-gray-500">2023年11月24日</div>
                </div>
              </div>
              <div className="flex justify-around items-center w-full">
                <div className="w-[10%] h-[30px] bg-white"></div>
                <div className="w-[80%] text-black">
                  TSMC (TSM) Stock Declines While Market Improves: Some
                  Information for Investors
                  <div className="text-gray-500">2023年11月25日</div>
                </div>
              </div>
            </div>

            <div className="flex flex-col items-center justify-around w-full">
              <div className="text-white text-xl font-semibold">焦點議題</div>
              <div className="flex justify-around items-center w-full">
                <div className="w-[10%] h-[30px] bg-white"></div>
                <div className="w-[80%] text-black">
                  快刪掉！17款「安卓APP」會偷錢 超過1200萬人下載
                  <div className="text-gray-500">2023年12月10日</div>
                </div>
              </div>
              <div className="flex justify-around items-center w-full">
                <div className="w-[10%] h-[30px] bg-white"></div>
                <div className="w-[80%] text-black">
                  快更新！一鍵優化Google Pixel 8遊戲效能 玩《原神》更順了
                  <div className="text-gray-500">2023年12月10日</div>
                </div>
              </div>
              <div className="flex justify-around items-center w-full">
                <div className="w-[10%] h-[30px] bg-white"></div>
                <div className="w-[80%] text-black">
                  高盛打臉降息! ? SOFR訊號亦透漏短線債券超漲| Anue鉅亨- 專家觀點
                  <div className="text-gray-500">2023年12月10日</div>
                </div>
              </div>
              <div className="flex justify-around items-center w-full">
                <div className="w-[10%] h-[30px] bg-white"></div>
                <div className="w-[80%] text-black">
                  年底買車注意「年份、年式」 德系車1年恐差「這金額」
                  <div className="text-gray-500">2023年12月10日</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* right */}
        <div className="w-[60%] flex items-center justify-center">
          <div className="p-5 w-[95%] h-fit bg-blue-200 flex flex-col items-center relative">
            <div className="text-3xl text-green-600 font-bold">
              投資數據儀表板
            </div>
            <div className="w-full text-base flex justify-end">
              <input
                placeholder="search"
                className="max-w-[250px] rounded-md p-1"
              ></input>
            </div>
            <div className="w-full flex">
              {/* left */}
              <div className="w-[50%] p-1 mt-5">
                <div className="flex justify-between mt-5">
                  <div className="text-black">台積電2330 23Q2</div>
                  <input
                    type="text"
                    className="rounded-md max-w-[150px] px-1"
                    placeholder="Search"
                  ></input>
                </div>

                <div className="flex justify-between mt-2">
                  <div className="bg-white w-[22%] h-[50px] rounded-md"></div>
                  <div className="bg-white w-[22%] h-[50px] rounded-md"></div>
                  <div className="bg-white w-[22%] h-[50px] rounded-md"></div>
                  <div className="bg-white w-[22%] h-[50px] rounded-md"></div>
                </div>

                <div className="flex justify-between mt-2">
                  <div className="bg-white w-[60%] h-[150px] rounded-md"></div>
                  <div className="bg-white w-[36%] h-[150px] rounded-md"></div>
                </div>

                <div className="flex justify-between mt-2">
                  <div className="bg-white w-[32%] h-[150px] rounded-md"></div>
                  <div className="bg-white w-[32%] h-[150px] rounded-md"></div>
                  <div className="bg-white w-[32%] h-[150px] rounded-md"></div>
                </div>

                <div className="flex justify-between mt-2">
                  <div className="bg-white w-[36%] h-[150px] rounded-md"></div>
                  <div className="bg-white w-[60%] h-[150px] rounded-md"></div>
                </div>
              </div>
              {/* right */}
              <div className="w-[50%] p-1 flex flex-col items-center justify-around mt-5">
                <div className="text-2xl text-green-600 font-bold">
                  其他投資機會
                </div>

                <div className="flex flex-col justify-between h-[45%]">
                  <div className="flex items-center justify-between ">
                    <img
                      src="sun-emoji.png"
                      className="ml-4 w-[50px] h-[50px]"
                    ></img>
                    <div className="w-[80%] text-black">
                      遠傳Q3法說會／前三季EPS追平2020全年
                      <div className="text-gray-500">
                        公布第三季合併總營收新台幣232.2億元，前三季每股盈餘達到2.56元，追平...
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center justify-between">
                    <img
                      src="partly-cloudy-day--v1.png"
                      className="ml-4 w-[50px] h-[50px]"
                    ></img>
                    <div className="w-[80%] text-black">
                      玉山金法說會／各項財業務表現良好 前三季獲利超去年全年
                      <div className="text-gray-500">
                        2023年前9月金控稅後純益158.9億元，獲利已超過去年全年，玉山金...
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center justify-between">
                    <img
                      src="external-rainny-spring-filled-outline-lima-studio.png"
                      className="ml-4 w-[50px] h-[50px]"
                    ></img>
                    <div className="w-[80%] text-black">
                      中光電法說會／今年節能、影像產品出貨各約年減2-3成
                      <div className="text-gray-500">
                        中光電（5371）總經理林惠姿今（31）日表示，因電視及公眾顯示器（PID）...
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center justify-between">
                    <img
                      src="sun-emoji.png"
                      className="ml-4 w-[50px] h-[50px]"
                    ></img>
                    <div className="w-[80%] text-black">
                      中鼎法說會／在建工程達3,537億元 創歷史新高
                      <div className="text-gray-500">
                        中鼎第3季稅後純益4.44億元，年增28.2％，每股稅後純益0.56元，優...{" "}
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex w-full justify-end">
                  <div className="flex items-center">
                    <img src="sun-emoji.png"></img>
                    正向
                  </div>
                  <div className="flex items-center">
                    <img src="sun-emoji.png"></img>
                    中立
                  </div>
                  <div className="flex items-center">
                    <img src="sun-emoji.png"></img>
                    保守
                  </div>
                </div>

                <div className="w-full flex justify-end">
                  <button className="text-2xl text-white bg-green-600 py-3 px-5 rounded-lg">
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
