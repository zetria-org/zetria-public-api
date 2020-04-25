
## 學呀問題回報 API  
💛💚💙💜  
這個 API 讓你可以對從[學呀搜尋 API](./search-api.md) 所得到的結果進行問題回報。學呀一直以來嘗試提供最完善的內容服務，但我們採取部分「群眾外包」的作業型態，學呀並不能確保資料庫中100%的內容正確、妥當。若您遇到不當的內容，歡迎由這個 API 回報，或者聯繫 service@zetria.org 。
  
### 要求 🙏
請使用 `` POST `` 來送出回報，如下：  
``https://www.zetria.org/api/search-report``  
內容應使用 json 格式，如下：  
```
{  
   'detail': 'string',  
   // 與搜尋API回傳的detail欄位相同'  
   'problem': 'Description of the problem'  
   // 小於等於60字元的問題敘述
   
}
```

### 回覆 📃
正常情況下，您將不會得到回覆。
