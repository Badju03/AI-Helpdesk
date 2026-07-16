module.exports = {

    keywords: [

        "printer",
        "printing",
        "print"

    ],

    steps: [

        {

            id:1,

            question:"Which printer issue are you experiencing?",

            buttons:[
                "Printer Offline",
                "Cannot Print",
                "Paper Jam",
                "Print Queue Stuck",
                "Poor Print Quality",
                "Printer Not Found"
            ],

            answers:{
                "printer offline":2,
                "cannot print":10,
                "paper jam":20,
                "print queue stuck":30,
                "poor print quality":40,
                "printer not found":50
            }

        },

        {

            id:2,

            diagnosis:
"Check:\n\n• Printer powered ON\n• Connected to network\n• Set as Default Printer\n• Disable 'Use Printer Offline'\n• Restart Print Spooler"

        },

        {

            id:10,

            diagnosis:
"Verify:\n\n• Correct printer selected\n• Print Spooler running\n• Test page\n• Reinstall printer driver"

        },

        {

            id:20,

            diagnosis:
"Remove jammed paper carefully.\n\nInspect rollers and restart printer."

        },

        {

            id:30,

            diagnosis:
"Clear the print queue.\n\nRestart the Print Spooler service."

        },

        {

            id:40,

            diagnosis:
"Run printer cleaning.\n\nReplace toner/ink.\n\nAlign print heads."

        },

        {

            id:50,

            diagnosis:
"Verify network connectivity.\n\nPing printer.\n\nReinstall printer."

        }

    ]

};
