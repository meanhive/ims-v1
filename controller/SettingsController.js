const Setting = require('../model/settingModel')

const SettingController = {
    getAll: async (req, res) => {
        try {
            // res.json({ msg: "get all setttings" })
            const settings = await Setting.find({})
            return res.json({ settings: settings[0] })
        } catch (err) {
            return res.status(500).json({ msg: err.message })
        }
    },
    getSingle: async (req, res) => {
        try {
            // res.json({ msg: "get single settings" })
            const setting = await Setting.findById({ _id: req.params.id })
            return res.json({ setting })
        } catch (err) {
            return res.status(500).json({ msg: err.message })
        }
    },
    create: async (req, res) => {
        try {
            // res.json({ msg: "create settings" })
            const { enqFormTitle, isEnqTitleEnable, instituteLogo, isLogoEnable, instituteName, instituteAddress, institutePhone, instituteMobile, instituteEmail, enrollmentIdPrefix, receiptNumberPrefix, hostName, username, password, encryption, port, from, currency, stripePubKey, stripeSecret, isEnableStripe } = req.body


            const existSettings = await Setting.findOne({ instituteEmail })
            if (existSettings)
                return res.status(400).json({ msg: "Institue settings already Exists" })

            const newSetting = await Setting.create({
                generalSettings: {
                    enqFormTitle, isEnqTitleEnable, instituteLogo, isLogoEnable, instituteName, instituteAddress, institutePhone, instituteMobile, instituteEmail, enrollmentIdPrefix, receiptNumberPrefix
                },
                emailSettings: {
                    hostName, username, password, encryption, port, from
                },
                paymentSettings: {
                    currency, stripePubKey, stripeSecret, isEnableStripe
                }
            })

            res.json({ msg: "Settings saved Successfully", data: newSetting })



        } catch (err) {
            return res.status(500).json({ msg: err.message })
        }
    },
    update: async (req, res) => {
        try {
            // res.json({ msg: "update settings" })
            const { enqFormTitle, isEnqTitleEnable, instituteLogo, isLogoEnable, instituteName, instituteAddress, institutePhone, instituteMobile, instituteEmail, enrollmentIdPrefix, receiptNumberPrefix, hostName, username, password, encryption, port, from, currency, stripePubKey, stripeSecret, isEnableStripe } = req.body

            const updatedSetting = await Setting.findByIdAndUpdate({ _id: req.params.id }, {
                generalSettings: {
                    enqFormTitle, isEnqTitleEnable, instituteLogo, isLogoEnable, instituteName, instituteAddress, institutePhone, instituteMobile, instituteEmail, enrollmentIdPrefix, receiptNumberPrefix
                },
                emailSettings: {
                    hostName, username, password, encryption, port, from
                },
                paymentSettings: {
                    currency, stripePubKey, stripeSecret, isEnableStripe
                }
            })

            res.json({ msg: "Settings updated Successfully", data: updatedSetting })



        } catch (err) {
            return res.status(500).json({ msg: err.message })
        }
    },
    delete: async (req, res) => {
        try {
            // res.json({ msg: "delete settings" })
            await Setting.findByIdAndDelete({ _id: req.params.id })
            return res.json({ msg: "Settings deleted successfully" })
        } catch (err) {
            return res.status(500).json({ msg: err.message })
        }
    }
}

module.exports = SettingController