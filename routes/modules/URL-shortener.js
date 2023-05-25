const express = require('express')
const router = express.Router()
const URL = require('../../models/URL')
const urlId = require('../../generate')

// 查找資料庫中有無一樣的URL。若是存在，就直接從資料庫中提取對應的短網址。若沒有，就儲存資料，產生一組短網址
router.post('/generate', (req, res) => {
  const reqUrl = req.body.inputUrl
  const shortUrl = urlId(5)
  URL.findOne({ originalUrl: req.body.inputUrl })
    .then(data => {
      if (data) {
        return res.render('new', { outputUrl: data.shortUrl })
      } else {
        URL.create({ originalUrl: reqUrl, shortUrl })
          .then(() => {
            return res.render('new', { outputUrl: shortUrl })
          })
          .catch((error) => console.log(error))
        
      }
    })
    .catch(error => console.log(error))
})

// 輸入短網址，導向資料庫中存在的原來URL
router.get('/:id', (req, res) => {
  const id = req.params.id
  const shortUrl = 'http://localhost:3000/' + id
  URL.findOne({ shortUrl })
    .lean()
    .then((data) => {
      if (!data) {
        return res.render('error')
      } else {
        return res.redirect(data.originalUrl)
      }
    })
    .catch(error => console.log(error))
})

module.exports = router
