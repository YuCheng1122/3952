"use client";
import React, { useState, useEffect } from "react";
import {
  TextField,
  Button,
  Container,
  Grid,
  CircularProgress,
} from "@mui/material";
import Message from "./Message";


//"請基於附加的財務說明會文本，總結公司最近一季的營收和利潤表現，並指出主要的收入來源和成本因素。

const Chat = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [typingIndex, setTypingIndex] = useState(-1);

  useEffect(() => {
    if (typingIndex >= 0 && typingIndex < messages.length) {
      const responseText = `玉山金控於2022年第四季的財務表現彙總如下：

- 經營收益達到548.1億元新台幣，而稅後淨利為157.6億元新台幣。然而，這些數字較去年同期都有所減少。
- 2022年玉山銀行的稅後淨利也出現下降，為148.1億元新台幣。
- 儘管年度的利潤下降，在2023年1月，金控和銀行的單月獲利分別達到27.2億元和25.6億元，創下歷史上單月獲利的次高紀錄。

主要收入來源和成本因素：

- 放款業務年度增長為9.4%。其中，對中小企業（SME）的放款年增長8%，而個人放款（YP）則增長了20%。這顯示出玉山金控在放款業務方面具有強勁動能。
- 在ESG永續相關放款方面，年成長率達14%，占企業放款的33.8%。
- 信用卡業務表現也相當亮眼，年成長11.4%。

由此可見，玉山金控在放款業務、特別是個人放款和ESG永續相關放款方面，以及信用卡業務上達到穩健成長，這些業務為公司的主要收入來源，同時也能反映出公司的成本結構和管理效能。`;
      if (messages[typingIndex].text.length < responseText.length) {
        setTimeout(() => {
          const nextText = responseText.slice(
            0,
            messages[typingIndex].text.length + 1
          );
          setMessages((messages) =>
            messages.map((msg, index) =>
              index === typingIndex ? { ...msg, text: nextText } : msg
            )
          );
        }, 50);
      } else {
        setIsLoading(false);
      }
    }
  }, [messages, typingIndex]);

  const handleSendMessage = async () => {
    const userInput = input.trim();
    if (!userInput) return;

    // 添加用戶訊息
    setMessages((messages) => [...messages, { text: userInput, isUser: true }]);
    setInput("");
    setIsLoading(true);

    // 添加空的 OpenAI 回應以初始化逐字打印
    setMessages((messages) => [...messages, { text: "", isUser: false }]);
    setTypingIndex(messages.length); // 設置正在打字的訊息索引
  };

  return (
    <Container>
      <Grid container direction="column" spacing={2}>
        <Grid item>
          {messages.map((message, index) => (
            <Message key={index} text={message.text} isUser={message.isUser} />
          ))}
          {isLoading && <CircularProgress />}
        </Grid>
        <Grid item>
          <TextField
            label="Type your message"
            variant="outlined"
            fullWidth
            value={input}
            onChange={(e) => setInput(e.target.value)}
            disabled={isLoading}
          />
        </Grid>
        <Grid item>
          <Button
            variant="contained"
            color="primary"
            onClick={handleSendMessage}
            disabled={isLoading}
          >
            Send
          </Button>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Chat;