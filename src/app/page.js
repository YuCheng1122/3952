const Index = () => {
  return (
    <>
      <header className="w-full flex justify-between p-5">
        {/* Image */}
        <div className="min-w-[20%] bg-black"></div>

        <div className="flex items-center">
          <div className="text-gray-600 mr-2">電子週報</div>
          <div className="text-gray-600">焦點議題</div>
        </div>
      </header>
      <main className="bg-blue-300 w-full min-h-screen flex">
        {/* left */}
        <div className="w-[40%] flex">
          {/* 理財電子週報 */}
          <div className="text-white w-[50%] h-full p-2 flex flex-col justify-around">
            <div className="text-2xl font-bold">理財電子週報</div>
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
                  ddddddddddddddddddddddddddddd
                  <div className="text-gray-500">ddddddddddddddddddddddddddddd</div>
                </div>
              </div>
              <div className="flex justify-around items-center w-full">
                <div className="w-[10%] h-[30px] bg-white"></div>
                <div className="w-[80%] text-black">
                ddddddddddddddddddddddddddddd
                  <div className="text-gray-500">ddddddddddddddddddddddddddddd</div>
                </div>
              </div>
              <div className="flex justify-around items-center w-full">
                <div className="w-[10%] h-[30px] bg-white"></div>
                <div className="w-[80%] text-black">
                ddddddddddddddddddddddddddddd
                  <div className="text-gray-500">ddddddddddddddddddddddddddddd</div>
                </div>
              </div>
              <div className="flex justify-around items-center w-full">
                <div className="w-[10%] h-[30px] bg-white"></div>
                <div className="w-[80%] text-black">
                ddddddddddddddddddddddddddddd
                  <div className="text-gray-500">ddddddddddddddddddddddddddddd</div>
                </div>
              </div>
            </div>

            <div className="flex flex-col items-center justify-around w-full">
              <div className="text-white text-xl font-semibold">焦點議題</div>
              <div className="flex justify-around items-center w-full">
                <div className="w-[10%] h-[30px] bg-white"></div>
                <div className="w-[80%] text-black">
                ddddddddddddddddddddddddddddd
                  <div className="text-gray-500">ddddddddddddddddddddddddddddd</div>
                </div>
              </div>
              <div className="flex justify-around items-center w-full">
                <div className="w-[10%] h-[30px] bg-white"></div>
                <div className="w-[80%] text-black">
                ddddddddddddddddddddddddddddd
                  <div className="text-gray-500">ddddddddddddddddddddddddddddd</div>
                </div>
              </div>
              <div className="flex justify-around items-center w-full">
                <div className="w-[10%] h-[30px] bg-white"></div>
                <div className="w-[80%] text-black">
                ddddddddddddddddddddddddddddd
                  <div className="text-gray-500">ddddddddddddddddddddddddddddd</div>
                </div>
              </div>
              <div className="flex justify-around items-center w-full">
                <div className="w-[10%] h-[30px] bg-white"></div>
                <div className="w-[80%] text-black">
                ddddddddddddddddddddddddddddd
                  <div className="text-gray-500">ddddddddddddddddddddddddddddd</div>
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
                <input placeholder="search" className="max-w-[250px] rounded-md p-1"></input>
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
                    <div className="w-[10%] h-[30px] bg-white"></div>
                    <div className="w-[80%] text-black">
                    ddddddddddddddddddddddddddddd
                      <div className="text-gray-500">ddddddddddddddddddddddddddddd</div>
                    </div>
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="w-[10%] h-[30px] bg-white"></div>
                    <div className="w-[80%] text-black">
                    ddddddddddddddddddddddddddddd
                      <div className="text-gray-500">ddddddddddddddddddddddddddddd</div>
                    </div>
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="w-[10%] h-[30px] bg-white"></div>
                    <div className="w-[80%] text-black">
                    ddddddddddddddddddddddddddddd
                      <div className="text-gray-500">ddddddddddddddddddddddddddddd</div>
                    </div>
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="w-[10%] h-[30px] bg-white"></div>
                    <div className="w-[80%] text-black">
                    ddddddddddddddddddddddddddddd
                      <div className="text-gray-500">ddddddddddddddddddddddddddddd </div>
                    </div>
                  </div>
                </div>

                <div className="flex w-full justify-end">
                  <div className="flex">
                    <div className="w-[25px] h-[25px] bg-white"></div>
                    正向
                  </div>
                  <div className="flex ml-2">
                    <div className="w-[25px] h-[25px] bg-white"></div>
                    中立
                  </div>
                  <div className="flex ml-2">
                    <div className="w-[25px] h-[25px] bg-white"></div>
                    保守
                  </div>
                </div>

                <div className="w-full flex justify-end">
                  <button className="text-2xl text-white bg-green-600 py-3 px-5 rounded-lg">了解更多</button>
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
