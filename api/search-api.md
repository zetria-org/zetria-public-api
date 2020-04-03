## 學呀搜尋 API
💛💚💙💜  
這個 API 回傳與搜尋字串相關的學習資源，包含「**學呀課程、YouTube影片資源、網路連結資源**」三種。此 API 的搜尋範圍只限於 學呀 的資料庫。因為 學呀 的資料庫開放讓大家上傳，因此大家上傳得越多，這個 API 就會越精準。分享資源，請至 [此](https://zetria.org/share) 或使用 學呀資源分享API。請注意，除非為「程式語言、英文縮寫的學術名詞」等，千萬**只輸入繁體中文的搜尋字串**，畢竟絕大多數的資料都是中文的。由於 學呀 是教學資源分享平台，這個 API 會在**搜尋字串與學術相關**時得到最精準的結果。
  
### 要求 🙏
請使用 `` GET 'q' `` 來要求回覆，如下：  

``https://www.zetria.org/api/search-api?q=${searchQuery}``  

### 回覆 📃
👀所有的回覆皆為 JSON 格式。 **最多 400 則資料** 有可能被回傳。回覆例子如下：  

```
[
 {  
  "type": "video",  
  "detail": "YT-Video-ID",  
  "title": "影片標題",  
  "tag1": "標籤1",  
  "tag2": "標籤2",  
  "tag3": "標籤3",  
  "distance": 15.63
 },
  .  
  .  
  .  
]
```  
  
👀回覆的內容統一存在一個陣列裡，每一個結果各自成為一個物件。物件的屬性如下：  

 key | value 
 :---------: | ----------- 
 type | 資料的內容類型 <br>("video"/"course"/"link") 
 detail | 資料的詳細內容 <br> "video" -> YouTube ID <br> "course" -> Zetria ID <br> "link" -> Link URL 
 title | 資料的標題 <br>(為於學呀分享時所被定義的標題) 
 tag1 | 標籤1 
 tag2 | 標籤2 
 tag3 | 標籤3 
 distance | 資料與搜尋字串的吻合度 
 usage<br>("course"專屬) | 學呀課程所屬的科目名稱 
 usage_string<br>("course"專屬) | 學呀課程所屬的科目名稱 (中文)   
  
👀使用``"detail"``建立超連結，應如下：
 type | URL 
 :---------: | ----------- 
 "video" | ``https://www.youtube.com/watch?v=${detail}`` 
 "course" | ``https://www.zetria.org/view?only=true&chap=${detail}``**或**<br> ``https://www.zetria.org/view?subj=${usage}&chap=${detail}``
 "link" | ``${detail}`` 

### 使用 💡
舉例來說，要搜尋與「羅馬王國」相關的學習資源時，需要要求：    
``https://www.zetria.org/api/search-api?q=羅馬王國``  
  
將會得到類似如此的回覆：  
```
[  
 {  
  "type":"course",  
  "detail":"ewl03gxmi4",  
  "title":"\u7f85\u99ac\u738b\u570b",  
  "tag1":"\u738b\u653f\u6642\u671f",  
  "tag2":"\u53f0\u4f2f\u6cb3",  
  "tag3":"\u4e16\u754c\u6b77\u53f2",  
  "distance":4.851388888888889,  
  "usage":"world_history",  
  "usage_string":"\u4e16\u754c\u53f2"
 },
 {  
  "type":"video",  
  "detail":"w5zYpWcz1-E", 
  "title":"\u7f85\u99ac\u5e1d\u570b\u6bcf\u4e00\u5e74\u7684\u7586\u57df",  
  "tag1":"\u6b77\u53f2\u5730\u5716",  
  "tag2":"\u4e16\u754c\u6b77\u53f2",  
  "tag3":"\u7f85\u99ac\u5e1d\u570b",  
  "distance":1.6031111111111112  
 },
  .
  .
  .  
]
```
