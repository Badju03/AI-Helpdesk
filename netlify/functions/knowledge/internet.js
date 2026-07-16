module.exports = {

    keywords: [

        "internet",
        "network",
        "wifi",
        "wi-fi",
        "ethernet",
        "vpn",
        "dns"

    ],

    steps: [

        {
            id: 1,

            question: "Which network issue are you experiencing?",

            buttons: [
                "No Internet",
                "Wi-Fi Not Connecting",
                "Slow Internet",
                "VPN",
                "DNS Problem",
                "IP Address"
            ],

            answers: {
                "no internet": 2,
                "wi-fi not connecting": 3,
                "slow internet": 4,
                "vpn": 5,
                "dns problem": 6,
                "ip address": 7
            }
        },

        {
            id: 2,

            question: "Is this affecting only your computer?",

            buttons: [
                "Yes",
                "No"
            ],

            answers: {
                "yes": 8,
                "no": 9
            }
        },

        {
            id: 3,

            diagnosis:
"Try the following:\n\n• Make sure Wi-Fi is enabled\n• Turn Airplane Mode OFF\n• Forget and reconnect to the Wi-Fi\n• Restart the wireless adapter\n• Update the Wi-Fi driver"
        },

        {
            id: 4,

            diagnosis:
"Check:\n\n• Run a speed test\n• Close large downloads\n• Check Task Manager for bandwidth usage\n• Restart the modem/router\n• Test using a wired connection"
        },

        {
            id: 5,

            diagnosis:
"Verify:\n\n• Internet connection\n• VPN username/password\n• MFA approval\n• VPN server availability\n• Reconnect the VPN client"
        },

        {
            id: 6,

            diagnosis:
"Run these commands:\n\nipconfig /flushdns\nipconfig /registerdns\nnslookup google.com\n\nIf DNS still fails, test using 8.8.8.8 or 1.1.1.1."
        },

        {
            id: 7,

            diagnosis:
"Run:\n\nipconfig /all\n\nVerify:\n\n• DHCP Enabled\n• Valid IPv4 Address\n• Default Gateway\n• DNS Servers\n\nIf needed, run:\nipconfig /release\nipconfig /renew"
        },

        {
            id: 8,

            diagnosis:
"This appears to be a local computer issue.\n\nCheck:\n\n• Network adapter status\n• Driver installation\n• Disable/Enable adapter\n• Windows Network Troubleshooter\n• Restart the computer"
        },

        {
            id: 9,

            diagnosis:
"This appears to affect multiple devices.\n\nCheck:\n\n• Modem/router power\n• ISP outage\n• WAN status\n• Restart networking equipment\n• Contact your Internet Service Provider if the outage continues."
        }

    ]

};
