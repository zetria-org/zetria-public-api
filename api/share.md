
## 學呀資源分享 API  
💛💚💙💜  
這個 API 讓您可以分享資源到學呀的資料庫裡。您在學呀搜尋時所獲得的資源，都是由使用者所分享的；使用這個 API，就能建立軟體分享資源到學呀哦！您分享的資料越多，學呀就可以擁有越精準的搜尋結果。請注意，除非為「程式語言、英文縮寫的學術名詞」等，建議您在使用時，多以中文取代英文的資料，畢竟絕大多數的資料都是中文的。  

### 要求 🙏  
請使用 `` POST `` 分享資源，如下：  

`` https://www.zetria.org/api/share ``
  
內容應使用 json 格式，如下：  
```
{
   'user_code': 'your-user-code',
   // User Code 請在此學呀的資源分享API頁面取得

   'data': {
      'type': 'type',
      'detail': 'detail',
      'title': 'title',
      'tag1': 'tag1',
      'tag2': 'tag2',
      'tag3': 'tag3'
   }
   // 實際要拿來分享的資料

}

```  
data 物件的屬性如下：  

 key | value 
 :---------: | ----------- 
 type | 資料的內容類型 <br>("video"/"link") 
 detail | 資料的詳細內容 <br> "video" -> YouTube ID/URL <br> "link" -> Link URL 
 title | 資料的標題 
 tag1 | 標籤1 
 tag2 | 標籤2 
 tag3 | 標籤3 

❗ 注意  
1. 若您不確定分享的連結是不是 YouTube 連結，可以統一將 type 屬性設為 video  
2. title 與 tag1~3 是自己取名的，建議使用中文，長度需在 25 個中文字元以下。
3. tag1~3 輸入的是與分享的內容相關的字串，例如標題為「火星」，則標籤可以為「天文」、「行星」、「太陽系」等。
