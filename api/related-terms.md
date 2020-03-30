## Related Terms API
這個 API 回傳與搜尋字串近意或相關的字詞。此 API 運作的原理是藉由比對 學呀 資料庫中字詞與字詞間的相關性，並依之找出最相近的詞彙。 因為 學呀 的資料庫開放讓大家上傳，因此大家上傳得越多，這個 API 就會越精準。分享資源，請至 [此](https://zetria.org/share) 或使用 學呀資源分享API。請注意，千萬**只輸入繁體中文的搜尋字串**，畢竟絕大多數的資料都是中文的。由於 學呀 是教學資源分享平台，這個 API 會在搜尋字串與學術相關時搜尋到最精準的結果。
  
### 要求
請使用 `` GET 'q' `` 來要求回覆，如下：  
  
``https://www.zetria.org/api/related-terms?q=${searchQuery}``  
### 回覆
All responses are in JSON. **Up to 15 terms** might be returned as an object. Each term is with its own score. The higher the score is, the more related the term is.  
  
``{"term a": score, "term b": score, ... , "term o": score}``
### 使用
For instance, to find terms related to "太空探索", request:  
  
``https://www.zetria.org/api/related-terms?q=太空探索``  
  
You will get something like:  
  
``{"天文": 7, "天文學": 3, "太空探索": 8, "太空殖民": 1, ... , "美國太空總署": 1, "行星": 1, "衛星": 1}``
