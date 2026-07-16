module.exports = {

    keywords: [

        "password",
        "login",
        "signin",
        "sign in",
        "cannot login",
        

    ],

    steps: [

        {

            id:1,

            question:"Which login problem are you experiencing?",

            buttons:[
                "Forgot Password",
                "Password Incorrect",
                "Account Locked",
                "MFA Problem",
                "Cannot Sign In"
            ],

            answers:{
                "forgot password":2,
                "password incorrect":10,
                "account locked":20,
                "mfa problem":30,
                "cannot sign in":40
            }

        },

        {

            id:2,

            diagnosis:
"Reset the password using the approved password reset portal or Active Directory Users and Computers.\n\nVerify password policy requirements."

        },

        {

            id:10,

            diagnosis:
"Verify:\n\n• CAPS LOCK\n• Keyboard layout\n• Recently changed password\n• Cached credentials"

        },

        {

            id:20,

            diagnosis:
"Unlock the account in Active Directory.\n\nCheck failed login attempts."

        },

        {

            id:30,

            diagnosis:
"Verify:\n\n• Microsoft Authenticator\n• SMS/Phone method\n• Time synchronization\n• Re-register MFA"

        },

        {

            id:40,

            diagnosis:
"Check:\n\n• Internet connection\n• Username format\n• Account status\n• Azure AD / Active Directory"

        }

    ]

};
