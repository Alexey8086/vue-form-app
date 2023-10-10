const path = require('path')


class MainController {

  async sendForm(req, res) {
    try {

      res.json({ success: true, data: { ...req.body } })

    } catch (error) {
      res.json({ success: false, error: error })
    }

  }

  async sendCode(req, res) {

    try {
      res.json({ success: true, data: { ...req.body } })

    } catch (error) {
      res.json({ success: false, error: error })
    }

  }

  async sendAgreement(req, res) {

    try {
      res.json({ success: true, data: { ...req.body } })

    } catch (error) {
      res.json({ success: false, error: error })
    }

  }

  async checkData(req, res) {

    try {
      setTimeout(() => {
        res.json({ success: true, data: { text: 'дунежные средства уже в пути'} })
      }, 4200)

    } catch (error) {
      res.json({ success: false, error: error })
    }

  }
}

module.exports = new MainController()