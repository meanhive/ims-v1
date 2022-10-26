const mongoose = require('mongoose');

const GeneralSettingSchema = {
    enqFormTitle: {
        type: String,
        required: true
    },
    isEnqTitleEnable: {
        type: Boolean,
        default: true
    },
    instituteLogo: {
        type: Object,
        required: true
    },
    isLogoEnable: {
        type: Boolean,
        default: true
    },
    instituteName: {
        type: String,
        required: true,
        unique: true
    },
    instituteAddress: {
        type: String,
        required: true
    },
    institutePhone: {
        type: String,
        required: true,
        unique: true
    },
    instituteMobile: {
        type: String,
        required: true,
        unique: true
    },
    instituteEmail: {
        type: String,
        required: true,
        unique: true
    },
    enrollmentIdPrefix: {
        type: String,
        trim: true,
        required: true
    },
    receiptNumberPrefix: {
        type: String,
        required: true,
        trim: true
    },
};


const EmailSettingSchema = {
    hostName: {
        type: String,
        required: true,
        trim: true
    },
    username: {
        type: String,
        required: true,
        trim: true
    },
    password: {
        type: String,
        required: true,
        trim: true
    },
    encryption: {
        type: String,
        default: "tls"
    },
    port: {
        type: Number,
        required: true
    },
    from: {
        type: String,
        required: true
    }
}


const PaymentSettingSchema = {
    currency: {
        type: String,
        required: true,
        unique: true,
        trim: true
    },
    stripePubKey: {
        type: String,
        required: true,
        unique: true,
        trim: true
    },
    stripeSecret: {
        type: String,
        required: true,
        unique: true,
        trim: true
    },
    isEnableStripe: {
        type: Boolean,
        default: true
    }
}


const Setting = new mongoose.Schema({
    generalSettings: GeneralSettingSchema,
    emailSettings: EmailSettingSchema,
    paymentSettings: PaymentSettingSchema

}, {
    collection: "settings",
    timestamps: true
});

module.exports = mongoose.model("Setting", Setting);
