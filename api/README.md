# zetria.org APIs  

**No API keys** are needed. 😉  
APIs include (in alphabetical order):  
  
- **External Websites API**  
 -> *其他教育網站的連結*
- **External Websites Data API**  
 -> *搜尋其他教育網站的資料庫*
- **Report API**  
 -> *回報 學呀 資料庫中的問題資料*
- **Data API**  
 -> *搜尋 學呀 資料庫中的教育資源*
- **Share Resource API**  
 -> *分享教育資源*
- **Related Terms API**  
 -> *搜尋近義詞彙*
    
## External Websites API
Coming Soon ⏳  

## External Websites Data API
Coming Soon ⏳  
  
## Report API
Coming Soon ⏳  
  
## Result API
Coming Soon ⏳  
  
## Share Resource API
Coming Soon ⏳  
  
## Related Terms API
This API responds with terms related to the search query. It works by examining resouces shared by users, so the more you share, the more accurate the API is. To share resources, click [here](https://zetria.org/share) or use the Share Resource API. Notice that you can **ONLY parse in Chinese characters**, since all the data is in Chinese. This API works most accurately when the search query is about fields of study, general knowledge, or historical events.  
### Request
This API only requires GET data, so simply get response by requesting:  
  
``https://www.zetria.org/api/related-terms?q=${searchQuery}``  
### Response
All responses are in JSON. **Up to 15 terms** might be returned as an object. Each term is with its own score. The higher the score is, the more related the term is.  
  
``{"term a": score, "term b": score, ... , "term o": score}``
### Usage
For instance, to find terms related to "太空探索", request:  
  
``https://www.zetria.org/api/related-terms?q=太空探索``  
You will get something like:  
  
``{"天文": 7, "天文學": 3, "太空探索": 8, "太空殖民": 1, ... , "美國太空總署": 1, "行星": 1, "衛星": 1}``
