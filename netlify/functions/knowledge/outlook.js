module.exports = {

    keywords: [

        "outlook",
        "email",
        "emails",
        "mail",
        "exchange"

    ],

    steps: [

        {

            id: 1,

            question: "I can help troubleshoot Outlook.\n\nAre you using:",

            buttons: [

                "Desktop",
                "Outlook Web"

            ],

            answers: {

                desktop: 2,

                "outlook web": 3

            }

        },

        {

            id: 2,

            question: "Can you RECEIVE emails?",

            buttons: [

                "Yes",
                "No"

            ],

            answers: {

                yes: 4,

                no: 5

            }

        },

        {

            id: 3,

            question: "Can you sign in to Outlook Web?",

            buttons: [

                "Yes",
                "No"

            ],

            answers: {

                yes: 4,

                no: 5

            }

        },

        {

            id: 4,

            question: "Do you receive an error when sending?",

            buttons: [

                "Yes",
                "No"

            ],

            answers: {

                yes: 6,

                no: 7

            }

        },

        {

            id: 5,

            diagnosis:
                "This appears to be a receiving issue.\n\nCheck:\n\n• Internet connection\n• Exchange Online\n• Mailbox quota"

        },

        {

            id: 6,

            diagnosis:
                "Please type the EXACT Outlook error message."

        },

        {

            id: 7,

            diagnosis:
                "Create a new Outlook profile and test again."

        }

    ]

};