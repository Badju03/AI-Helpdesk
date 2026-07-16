module.exports = {

    keywords: [

        "internet",
        "wifi",
        "network",
        "ethernet",
        "dns",
        "vpn"

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
                "wi-fi not connecting": 10,
                "slow internet": 20,
                "vpn": 30,
                "dns problem": 40,
                "ip address": 50
            }
        },

        {
            id: 2,

            diagnosis:
"Check:\n\n• Network cable or Wi-Fi connection\n• Restart modem/router\n• Verify network adapter\n• Run ipconfig /renew\n• Test another website\n• Check ISP outage"
        },

        {
            id: 10,

            diagnosis:
"Check:\n\n• Wi-Fi enabled\n• Airplane Mode OFF\n• Forget and reconnect network\n• Update wireless driver\n• Restart wireless adapter"
        },

        {
            id: 20,

            diagnosis:
"Check:\n\n• Network usage\n• Speed test\n• Background downloads\n• Switch to Ethernet\n• Restart router"
        },

        {
            id: 30,

            diagnosis:
"Verify:\n\n• VPN credentials\n• MFA approval\n• Internet connection\n• VPN server status\n• Reconnect VPN client"
        },

        {
            id: 40,

            diagnosis:
"Run:\n\n• ipconfig /flushdns\n• nslookup google.com\n• Change DNS to 8.8.8.8 or 1.1.1.1\n• Restart DNS Client service"
        },

        {
            id: 50,

            diagnosis:
"Run:\n\n• ipconfig /all\n• Verify DHCP enabled\n• Release/Renew IP\n• Check for IP conflicts"
        }

    ]

};
