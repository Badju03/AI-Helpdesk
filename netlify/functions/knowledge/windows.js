module.exports = {

    keywords: [

        "windows",
       

    ],

    steps: [

        {

            id: 1,

            question:
                "Which Windows issue are you experiencing?",

            buttons: [

                "Blue Screen",

                "Slow Computer",

                "Won't Boot"

            ],

            answers: {

                "blue screen": 2,

                "slow computer": 3,

                "won't boot": 4

            }

        },

        {

            id: 2,

            diagnosis:
                "Boot into Safe Mode and check the Event Viewer for recent critical errors."

        },

        {

            id: 3,

            diagnosis:
                "Check Task Manager for high CPU, RAM, or Disk usage and disable unnecessary startup programs."

        },

        {

            id: 4,

            diagnosis:
                "Run Windows Startup Repair or boot from installation media to repair the boot configuration."

        }

    ]

};
